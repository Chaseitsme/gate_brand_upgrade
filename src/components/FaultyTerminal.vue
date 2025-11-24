<script setup lang="ts">
import { Color, Mesh, Program, Renderer, Triangle, Texture } from 'ogl';
import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef, watch } from 'vue';

type Vec2 = [number, number];

interface FaultyTerminalProps {
  text?: string;
  scale?: number;
  gridMul?: Vec2;
  digitSize?: number; // 这个控制最大点点的大小（文字部分）
  backgroundPointSize?: number; // 新增：控制背景常驻小点的大小 (0.0 - 1.0)
  timeScale?: number;
  pause?: boolean;
  scanlineIntensity?: number;
  glitchAmount?: number;
  flickerAmount?: number;
  noiseAmp?: number;
  chromaticAberration?: number;
  dither?: number | boolean;
  curvature?: number;
  bgColor?: string;
  textColor?: string;
  mouseReact?: boolean;
  mouseStrength?: number;
  dpr?: number;
  className?: string;
  style?: Record<string, string | number>;
}

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision mediump float;

varying vec2 vUv;

uniform float iTime;
uniform vec3  iResolution;
uniform float uScale;
uniform vec2  uGridMul;
uniform float uDigitSize; 
uniform float uBgPointSize; // 新增 uniform
uniform float uScanlineIntensity;
uniform float uGlitchAmount;
uniform float uFlickerAmount;
uniform float uNoiseAmp;
uniform float uChromaticAberration;
uniform float uDither;
uniform float uCurvature;
uniform vec3  uBgColor;
uniform vec3  uTextColor;
uniform vec2  uMouse;
uniform float uMouseStrength;
uniform float uUseMouse;

uniform sampler2D uTextMap;

float time;

float hash21(vec2 p){
  p = fract(p * 234.56);
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  return sin(p.x * 10.0) * sin(p.y * (3.0 + sin(time * 0.09))) + 0.2;
}

mat2 rotate(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}

float fbm(vec2 p) {
  p *= 1.1;
  float f = 0.0;
  float amp = 0.5 * uNoiseAmp; 
  mat2 modify0 = rotate(time * 0.05);
  f += amp * noise(p);
  p = modify0 * p * 2.0;
  amp *= 0.5;
  return f;
}

float pattern(vec2 p) {
  return fbm(p + fbm(p + time * 0.2));
}

float digit(vec2 p, vec2 uvCoords) {
    vec2 grid = uGridMul * 15.0; 
    vec2 s = floor(p * grid) / grid; 
    
    // 1. 背景流动强度
    float bgFlow = pattern(s * 0.8 + time * 0.1);
    
    // 2. 文字处理
    vec2 wobble = vec2(
        sin(s.y * 10.0 + time * 2.0) * 0.005, 
        cos(s.x * 10.0 + time * 2.0) * 0.005
    );
    vec4 textMapColor = texture2D(uTextMap, (s / uScale) + wobble); 
    float textSolid = smoothstep(0.3, 0.6, textMapColor.r);

    // 3. 计算动态强度
    float intensity = textSolid * 1.5 + (bgFlow * 0.5);
    
    // 4. 鼠标交互
    if(uUseMouse > 0.5){
        vec2 mouseWorld = uMouse * uScale;
        float distToMouse = distance(s, mouseWorld);
        float mouseInfluence = exp(-distToMouse * 15.0) * uMouseStrength * 2.5;
        intensity += mouseInfluence;
        float ripple = sin(distToMouse * 40.0 - iTime * 8.0) * 0.1 * mouseInfluence;
        intensity += ripple;
    }

    p = fract(p * grid);
    
    // 计算点在格子内的UV
    vec2 pointUV = p;
    float dist = distance(pointUV, vec2(0.5));
    
    // --- 核心修改：半径计算 ---
    
    // 动态半径：根据强度决定 (0.0 到 0.5)
    // uDigitSize 在这里作为一个整体缩放系数 (通常为0.9或1.0)
    float dynamicRadius = smoothstep(0.35, 1.1, intensity) * 0.5 * uDigitSize;
    
    // 最小半径：由 uBgPointSize 控制 (0.0 到 0.5)
    float minRadius = uBgPointSize * 0.25; // 0.25 是为了让默认值不要太大，比如输入0.2即为10%半径
    
    // 取最大值：保证任何地方都有 minRadius 大小的点
    float finalRadius = max(minRadius, dynamicRadius);

    // 绘制圆点 (抗锯齿)
    float shape = 1.0 - smoothstep(finalRadius - 0.01, finalRadius + 0.01, dist);
    
    if (pointUV.x < 0.0 || pointUV.x > 1.0 || pointUV.y < 0.0 || pointUV.y > 1.0) {
        shape = 0.0;
    }
    
    return shape;
}

vec3 getColor(vec2 p, vec2 uv) {
    float bar = step(mod(p.y + time * 20.0, 1.0), 0.2) * 0.1 + 1.0; 
    float pixelVal = digit(p, uv);

    // 颜色混合
    vec3 finalColor = mix(uBgColor, uTextColor, clamp(pixelVal * bar, 0.0, 1.0));
    return finalColor;
}

vec2 barrel(vec2 uv){
  vec2 c = uv * 2.0 - 1.0;
  float r2 = dot(c, c);
  c *= 1.0 + uCurvature * r2;
  return c * 0.5 + 0.5;
}

void main() {
    time = iTime * 0.333333;
    vec2 uv = vUv;

    if(uCurvature != 0.0){
      uv = barrel(uv);
    }

    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }

    vec2 p = uv * uScale;
    vec3 col = getColor(p, uv);

    if(uChromaticAberration != 0.0){
      vec2 ca = vec2(uChromaticAberration) / iResolution.xy;
      vec3 rCol = getColor((uv + ca) * uScale, uv + ca);
      vec3 bCol = getColor((uv - ca) * uScale, uv - ca);
      col.r = rCol.r;
      col.b = bCol.b;
    }

    if(uDither > 0.0){
      float rnd = hash21(gl_FragCoord.xy);
      col += (rnd - 0.5) * (uDither * 0.003922);
    }

    gl_FragColor = vec4(col, 1.0);
}
`;

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace('#', '').trim();
  if (h.length === 3)
    h = h.split('').map(c => c + c).join('');
  const num = parseInt(h, 16);
  return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
}

const props = withDefaults(defineProps<FaultyTerminalProps>(), {
  text: 'GATE',
  scale: 1,
  gridMul: () => [4.5, 3], 
  digitSize: 1.0, // 控制最大点（文字）的大小
  backgroundPointSize: 0.2, // 新增：控制背景小点的大小 (0.1 - 1.0 比较合适)
  timeScale: 0.5,
  pause: false,
  scanlineIntensity: 0.2,
  glitchAmount: 1,
  flickerAmount: 0,
  noiseAmp: 1.5, 
  chromaticAberration: 1.5,
  dither: 0,
  curvature: 0.0,
  bgColor: '#0055FF', 
  textColor: '#000000', 
  mouseReact: true,
  mouseStrength: 0.6, 
  dpr: Math.min(window.devicePixelRatio || 1, 2),
  className: '',
  style: () => ({})
});

const containerRef = useTemplateRef('containerRef');
const programRef = ref<Program | null>(null);
const rendererRef = ref<Renderer | null>(null);
const mouseRef = ref({ x: 0.5, y: 0.5 });
const smoothMouseRef = ref({ x: 0.5, y: 0.5 });
const frozenTimeRef = ref(0);
const rafRef = ref<number>(0);
const timeOffsetRef = ref<number>(Math.random() * 100);

function updateTextTexture(gl: any, texture: Texture, text: string, width: number, height: number) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    let fontSize = height * 0.8;
    ctx.font = `700 ${fontSize}px Aeonik-Bold, sans-serif`;
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const maxTextWidth = width * 0.9;
    if (textWidth > maxTextWidth) {
      fontSize = fontSize * (maxTextWidth / textWidth);
    }
    ctx.font = `700 ${fontSize}px Aeonik-Bold, sans-serif`;
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);

    texture.image = canvas;
    texture.needsUpdate = true;
}

const bgVec = computed(() => hexToRgb(props.bgColor));
const textVec = computed(() => hexToRgb(props.textColor));
const ditherValue = computed(() => (typeof props.dither === 'boolean' ? (props.dither ? 1 : 0) : props.dither));

const handleMouseMove = (e: MouseEvent) => {
  const ctn = containerRef.value;
  if (!ctn) return;
  const rect = ctn.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = 1 - (e.clientY - rect.top) / rect.height;
  mouseRef.value = { x, y };
};

let cleanup: (() => void) | null = null;

const setup = () => {
  const ctn = containerRef.value;
  if (!ctn) return;

  const renderer = new Renderer({ dpr: props.dpr, alpha: false });
  rendererRef.value = renderer;
  const gl = renderer.gl;
  gl.clearColor(bgVec.value[0], bgVec.value[1], bgVec.value[2], 1);

  const geometry = new Triangle(gl);
  const textTexture = new Texture(gl, {
    image: document.createElement('canvas'),
    generateMipmaps: false,
    minFilter: gl.LINEAR,
    magFilter: gl.LINEAR
  });

  const program = new Program(gl, {
    vertex: vertexShader,
    fragment: fragmentShader,
    uniforms: {
      iTime: { value: 0 },
      iResolution: {
        value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
      },
      uScale: { value: props.scale },
      uGridMul: { value: new Float32Array(props.gridMul) },
      uDigitSize: { value: props.digitSize },
      uBgPointSize: { value: props.backgroundPointSize }, // 传入新参数
      uScanlineIntensity: { value: props.scanlineIntensity },
      uGlitchAmount: { value: props.glitchAmount },
      uFlickerAmount: { value: props.flickerAmount },
      uNoiseAmp: { value: props.noiseAmp },
      uChromaticAberration: { value: props.chromaticAberration },
      uDither: { value: ditherValue.value },
      uCurvature: { value: props.curvature },
      uBgColor: { value: new Color(bgVec.value[0], bgVec.value[1], bgVec.value[2]) },
      uTextColor: { value: new Color(textVec.value[0], textVec.value[1], textVec.value[2]) },
      uMouse: {
        value: new Float32Array([smoothMouseRef.value.x, smoothMouseRef.value.y])
      },
      uMouseStrength: { value: props.mouseStrength },
      uUseMouse: { value: props.mouseReact ? 1 : 0 },
      uTextMap: { value: textTexture }
    }
  });
  programRef.value = program;

  const mesh = new Mesh(gl, { geometry, program });

  function resize() {
    if (!ctn || !renderer) return;
    const width = ctn.offsetWidth;
    const height = ctn.offsetHeight;
    renderer.setSize(width, height);
    program.uniforms.iResolution.value = new Color(
      gl.canvas.width,
      gl.canvas.height,
      gl.canvas.width / gl.canvas.height
    );
    const aspect = width / height;
    const baseGridY = props.gridMul[1];
    const correctedGridX = baseGridY * aspect;
    program.uniforms.uGridMul.value = new Float32Array([correctedGridX, baseGridY]);
    updateTextTexture(gl, textTexture, props.text, width, height);
  }

  const resizeObserver = new ResizeObserver(() => resize());
  resizeObserver.observe(ctn);
  resize();

  const update = (t: number) => {
    rafRef.value = requestAnimationFrame(update);

    if (!props.pause) {
      const elapsed = (t * 0.001 + timeOffsetRef.value) * props.timeScale;
      program.uniforms.iTime.value = elapsed;
      frozenTimeRef.value = elapsed;
    } else {
      program.uniforms.iTime.value = frozenTimeRef.value;
    }

    if (props.mouseReact) {
      const dampingFactor = 0.1; 
      const smoothMouse = smoothMouseRef.value;
      const mouse = mouseRef.value;
      smoothMouse.x += (mouse.x - smoothMouse.x) * dampingFactor;
      smoothMouse.y += (mouse.y - smoothMouse.y) * dampingFactor;

      const mouseUniform = program.uniforms.uMouse.value as Float32Array;
      mouseUniform[0] = smoothMouse.x;
      mouseUniform[1] = smoothMouse.y;
    }

    renderer.render({ scene: mesh });
  };
  rafRef.value = requestAnimationFrame(update);
  ctn.appendChild(gl.canvas);

  if (props.mouseReact) ctn.addEventListener('mousemove', handleMouseMove);

  cleanup = () => {
    cancelAnimationFrame(rafRef.value);
    resizeObserver.disconnect();
    if (props.mouseReact) ctn.removeEventListener('mousemove', handleMouseMove);
    if (gl.canvas.parentElement === ctn) ctn.removeChild(gl.canvas);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    timeOffsetRef.value = Math.random() * 100;
  };
};

onMounted(() => {
  if (containerRef.value) setup();
});

onBeforeUnmount(() => {
  if (cleanup) cleanup();
});

watch(
  () => props,
  () => {
    if (cleanup) {
      cleanup();
      cleanup = null;
    }
    setup();
  },
  { deep: true }
);
</script>

<template>
  <div
    ref="containerRef"
    :class="['w-full h-full relative overflow-hidden', className]"
    :style="style"
    v-bind="$attrs"
  />
</template>