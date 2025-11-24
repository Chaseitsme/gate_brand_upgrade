<template>
  <div class="liquid-glass-overlay">
    <canvas ref="canvasRef" class="gl-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue'
import vertexShaderSource from '../shaders/liquid_glass/vertex.glsl?raw'
import fragmentShaderSource from '../shaders/liquid_glass/fragment.glsl?raw'
import {
  compileShader,
  createProgram,
  createTexture,
  createGradientCanvas,
  createMaskCanvas,
  resizeCanvasToElement,
  loadBackgroundImage,
  ensureFontsLoaded,
  createTextCanvas
} from '../utils/liquidGlassWebgl.js'

const props = defineProps({
  backgroundSrc: { type: String, default: '' },
  useTextSource: { type: Boolean, default: false },
  text: { type: String, default: '' },
  textColor: { type: String, default: '#000000' },
  textFontFamily: { type: String, default: 'Parabole' },
  textClampMin: { type: Number, default: 80 },
  textClampMax: { type: Number, default: 200 },
  textCqw: { type: Number, default: 20 },
  lineClampMin: { type: Number, default: 64 },
  lineClampMax: { type: Number, default: 160 },
  lineCqw: { type: Number, default: 16 },
  textPaddingLeft: { type: Number, default: 0 },
  textPaddingBottom: { type: Number, default: 0 },
  radius: { type: Number, default: 0.3 },
  distort: { type: Number, default: 2.3 },
  dispersion: { type: Number, default: 0.7 },
  rotSpeed: { type: Number, default: 1.0 },
  shadowIntensity: { type: Number, default: 0.3 },
  shadowOffsetX: { type: Number, default: 0.01 },
  shadowOffsetY: { type: Number, default: 0.08 },
  shadowBlur: { type: Number, default: 0.4 },
  highlightIntensity: { type: Number, default: 0.4 },
  highlightSize: { type: Number, default: 1.25 },
  highlightOffsetX: { type: Number, default: 0.01 },
  highlightOffsetY: { type: Number, default: 0.03 }
})

const canvasRef = ref(null)
let gl = null
let program = null
let uniforms = {}
let vao = null
let animationId = null
let textureResolution = { width: 512, height: 512 }

const params = reactive({
  radius: props.radius,
  distort: props.distort,
  dispersion: props.dispersion,
  rotSpeed: props.rotSpeed,
  shadowIntensity: props.shadowIntensity,
  shadowOffsetX: props.shadowOffsetX,
  shadowOffsetY: props.shadowOffsetY,
  shadowBlur: props.shadowBlur,
  highlightIntensity: props.highlightIntensity,
  highlightSize: props.highlightSize,
  highlightOffsetX: props.highlightOffsetX,
  highlightOffsetY: props.highlightOffsetY
})

const mouse = reactive({ x: 0.5, y: 0.5 })
const targetMouse = reactive({ x: 0.5, y: 0.5 })
const smoothing = 0.05

function initWebGL() {
  const canvas = canvasRef.value
  gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: true })
  if (!gl) throw new Error('WebGL2 not supported')

  const vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER)
  const fragmentShader = compileShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER)
  if (!vertexShader || !fragmentShader) throw new Error('Shader compilation failed')

  program = createProgram(gl, vertexShader, fragmentShader)
  if (!program) throw new Error('Program linking failed')
  gl.useProgram(program)
  // Transparent canvas and alpha blending
  gl.clearColor(0, 0, 0, 0)
  gl.enable(gl.BLEND)
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

  const names = [
    'uMVMatrix','uPMatrix','uTextureMatrix','uTexture','uMaskTexture',
    'uMousePos','uTMousePos','uResolution','uTextureResolution','uRadius','uDistort',
    'uDispersion','uRotSpeed','uShadowIntensity','uShadowOffsetX',
    'uShadowOffsetY','uShadowBlur','uHighlightIntensity','uHighlightSize',
    'uHighlightOffsetX','uHighlightOffsetY'
  ]
  names.forEach(n => { uniforms[n] = gl.getUniformLocation(program, n) })

  const identity = new Float32Array([
    1,0,0,0,
    0,1,0,0,
    0,0,1,0,
    0,0,0,1
  ])
  gl.uniformMatrix4fv(uniforms.uMVMatrix, false, identity)
  gl.uniformMatrix4fv(uniforms.uPMatrix, false, identity)
  gl.uniformMatrix4fv(uniforms.uTextureMatrix, false, identity)
  gl.uniform1i(uniforms.uTexture, 0)
  gl.uniform1i(uniforms.uMaskTexture, 1)

  setupGeometry()
  setupTextures()
  handleResize()
}

function setupGeometry() {
  const quad = new Float32Array([
    -1,-1,0, 0,0,
     1,-1,0, 1,0,
    -1, 1,0, 0,1,
     1, 1,0, 1,1
  ])
  vao = gl.createVertexArray()
  gl.bindVertexArray(vao)
  const vbo = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
  gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW)
  const posLoc = gl.getAttribLocation(program, 'aVertexPosition')
  const uvLoc = gl.getAttribLocation(program, 'aTextureCoord')
  gl.enableVertexAttribArray(posLoc)
  gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 5 * 4, 0)
  gl.enableVertexAttribArray(uvLoc)
  gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 5 * 4, 3 * 4)
}

async function setupTextures() {
  try {
    let source
    if (props.useTextSource) {
      const el = canvasRef.value.parentElement
      const txt = props.text && props.text.length ? props.text : (el.querySelector('.brand-guideline-text')?.innerText || '')
      await ensureFontsLoaded(props.textFontFamily, props.textClampMin)
      // 读取容器/页面背景色，透明则回退为页面全局背景色
      const elBg = getComputedStyle(el).backgroundColor
      const docBg = getComputedStyle(document.body).backgroundColor
      const pageVar = getComputedStyle(document.documentElement).getPropertyValue('--page-bg') || '#F4F4F4'
      const bgColor = (elBg && !elBg.includes('rgba(0, 0, 0, 0)')) ? elBg : (docBg && !docBg.includes('rgba(0, 0, 0, 0)') ? docBg : pageVar)
      const textCanvas = createTextCanvas(el, txt, {
        color: props.textColor,
        fontFamily: props.textFontFamily,
        fontWeight: 700,
        clampMin: props.textClampMin,
        clampMax: props.textClampMax,
        cqw: props.textCqw,
        lineClampMin: props.lineClampMin,
        lineClampMax: props.lineClampMax,
        lineCqw: props.lineCqw,
        bgColor,
        paddingLeft: props.textPaddingLeft,
        paddingBottom: props.textPaddingBottom,
        alignBottom: true
      })
      source = textCanvas
    } else {
      source = await loadBackgroundImage(props.backgroundSrc)
    }
    createTexture(gl, 0, source)
    textureResolution.width = source.width || 512
    textureResolution.height = source.height || 512
  } catch {
    const bgCanvas = createGradientCanvas()
    createTexture(gl, 0, bgCanvas)
  }
  const maskCanvas = createMaskCanvas()
  createTexture(gl, 1, maskCanvas)
}

function handleResize() {
  const el = canvasRef.value.parentElement
  if (!gl || !el) return
  resizeCanvasToElement(canvasRef.value, gl, el)
  if (props.useTextSource) {
    // 重新生成文本纹理以匹配容器尺寸变化
    setupTextures()
  }
}

function handleMouseMove(event) {
  const el = canvasRef.value.parentElement
  const rect = el.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height
  targetMouse.x = Math.min(Math.max(x, 0), 1)
  targetMouse.y = 1 - Math.min(Math.max(y, 0), 1)
}

function updateUniforms() {
  if (!gl || !program) return
  gl.uniform1f(uniforms.uRadius, params.radius)
  gl.uniform1f(uniforms.uDistort, params.distort)
  gl.uniform1f(uniforms.uDispersion, params.dispersion)
  gl.uniform1f(uniforms.uRotSpeed, params.rotSpeed)
  gl.uniform1f(uniforms.uShadowIntensity, params.shadowIntensity)
  gl.uniform1f(uniforms.uShadowOffsetX, params.shadowOffsetX)
  gl.uniform1f(uniforms.uShadowOffsetY, params.shadowOffsetY)
  gl.uniform1f(uniforms.uShadowBlur, params.shadowBlur)
  gl.uniform1f(uniforms.uHighlightIntensity, params.highlightIntensity)
  gl.uniform1f(uniforms.uHighlightSize, params.highlightSize)
  gl.uniform1f(uniforms.uHighlightOffsetX, params.highlightOffsetX)
  gl.uniform1f(uniforms.uHighlightOffsetY, params.highlightOffsetY)
}

function render() {
  if (!gl || !program) return
  mouse.x += (targetMouse.x - mouse.x) * smoothing
  mouse.y += (targetMouse.y - mouse.y) * smoothing
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.uniform2fv(uniforms.uResolution, [canvasRef.value.width, canvasRef.value.height])
  gl.uniform2fv(uniforms.uTextureResolution, [textureResolution.width, textureResolution.height])
  gl.uniform2fv(uniforms.uMousePos, [mouse.x, mouse.y])
  gl.uniform2fv(uniforms.uTMousePos, [targetMouse.x, targetMouse.y])
  updateUniforms()
  gl.bindVertexArray(vao)
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
  animationId = requestAnimationFrame(render)
}

watch(params, updateUniforms, { deep: true })
watch(() => [props.useTextSource, props.text, props.textColor, props.textFontFamily], () => {
  if (!gl) return
  setupTextures()
})

onMounted(() => {
  try {
    initWebGL()
    const el = canvasRef.value.parentElement
    window.addEventListener('resize', handleResize)
    el.addEventListener('mousemove', handleMouseMove)
    render()
  } catch (e) {
    console.error(e)
  }
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  const el = canvasRef.value?.parentElement
  window.removeEventListener('resize', handleResize)
  el && el.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.liquid-glass-overlay {
  position: absolute;
  inset: 0;
}
.gl-canvas {
  display: block;
  width: 100%;
  height: 100%;
  cursor: none;
}
</style>