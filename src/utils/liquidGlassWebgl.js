export function compileShader(gl, source, type) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program)
    return null
  }
  return program
}

export function createTexture(gl, unit, source) {
  gl.activeTexture(gl.TEXTURE0 + unit)
  const texture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source)
  return texture
}

export function createGradientCanvas() {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 512
  const ctx = canvas.getContext('2d')
  const gradient = ctx.createLinearGradient(0, 0, 512, 512)
  gradient.addColorStop(0, '#ff9a9e')
  gradient.addColorStop(1, '#fad0c4')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 512, 512)
  return canvas
}

export function createMaskCanvas() {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 512
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, 512, 512)
  return canvas
}

export function loadBackgroundImage(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve(createGradientCanvas())
      return
    }
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = () => resolve(createGradientCanvas())
    img.src = src
  })
}

export function resizeCanvasToElement(canvas, gl, el) {
  const dpr = window.devicePixelRatio || 1
  const rect = el.getBoundingClientRect()
  canvas.style.width = rect.width + 'px'
  canvas.style.height = rect.height + 'px'
  canvas.width = Math.max(1, Math.floor(rect.width * dpr))
  canvas.height = Math.max(1, Math.floor(rect.height * dpr))
  gl.viewport(0, 0, canvas.width, canvas.height)
}

export async function ensureFontsLoaded(fontFamily = 'Parabole', sizePx = 120) {
  if (document.fonts && document.fonts.load) {
    try {
      await document.fonts.load(`${sizePx}px ${fontFamily}`)
      await document.fonts.ready
    } catch (e) {
      /* ignore */
    }
  }
}

export function createTextCanvas(el, text, options = {}) {
  const dpr = window.devicePixelRatio || 1
  const rect = el.getBoundingClientRect()
  const widthCss = Math.max(1, Math.floor(rect.width))
  const heightCss = Math.max(1, Math.floor(rect.height))
  const canvas = document.createElement('canvas')
  canvas.width = Math.max(1, Math.floor(widthCss * dpr))
  canvas.height = Math.max(1, Math.floor(heightCss * dpr))
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)

  const {
    color = '#000000',
    fontFamily = 'Parabole',
    fontWeight = 700,
    clampMin = 80,
    clampMax = 200,
    cqw = 20, // 20cqw => 20% of container width
    lineClampMin = 64,
    lineClampMax = 160,
    lineCqw = 16, // 16cqw => 16% of container width
    bgColor = '#F4F4F4',
    paddingLeft = 0,
    paddingBottom = 0,
    alignBottom = true
  } = options

  const clamp = (min, mid, max) => Math.max(min, Math.min(max, mid))
  const fontSize = clamp(clampMin, (widthCss * cqw) / 100, clampMax)
  const lineHeight = clamp(lineClampMin, (widthCss * lineCqw) / 100, lineClampMax)

  // 背景填充，避免透明区域被采样为黑色
  ctx.clearRect(0, 0, widthCss, heightCss)
  ctx.fillStyle = bgColor
  ctx.fillRect(0, 0, widthCss, heightCss)
  ctx.fillStyle = color
  ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
  ctx.textBaseline = 'alphabetic'
  ctx.textAlign = 'left'

  const lines = String(text || '').split(/\r?\n/)
  if (alignBottom) {
    const yBase = heightCss - paddingBottom
    for (let i = 0; i < lines.length; i++) {
      const y = yBase - (lines.length - 1 - i) * lineHeight
      ctx.fillText(lines[i], paddingLeft, y)
    }
  } else {
    let y = lineHeight
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], paddingLeft, y)
      y += lineHeight
    }
  }

  return canvas
}