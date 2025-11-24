<template>
  <div class="page social-media">
    <div class="g2" aria-hidden="true"></div>

    <div class="hero-1000-320">
      <div class="brand-guideline-text z5">Social<br>Media</div>
      <LiquidGlassOverlay
        use-text-source
        :text="'Social\nMedia'"
        :text-color="'#000'"
        :text-font-family="'Parabole'"
      />
    </div>
    
    <!-- 15px 空白 -->
    <div class="g3" aria-hidden="true"></div>

    <!-- 1px 黑色横线 -->
    <div class="hairline" aria-hidden="true"></div>

    <div class="g2" aria-hidden="true"></div>


    <!-- 20px 文本 font0 -->
    <div class="z3">
      The visual update posters showcase Gate’s refreshed brand identity through the lens of the X platform. Each piece demonstrates how our new design system — from typography and color to iconography and layouts — comes alive in a dynamic, social context.<br>
These simulations highlight Gate’s X presence with clarity and impact, turning every post, banner, or avatar into an unmistakable expression of our brand. By presenting a cohesive and forward-looking visual language, we ensure that Gate’s identity resonates consistently, capturing attention while reinforcing trust and recognition across the platform.
    </div>

    <!-- 90px 空白 + 1px 黑线 + 90px 空白 -->
    <div class="g1" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g2" aria-hidden="true"></div>

    <div class="z1">
      Social Media
      <br>-X    
    </div>
    
    <div class="g2" aria-hidden="true"></div>

    <div class="sm-1000-700">
      <div class="embed-ctr" ref="embedCtr">
        <iframe ref="iframeRef" src=".//X1021/index.html" title="embedded page"></iframe>
      </div>
      <img class="overlay-img" src="../assets/Social Media/2.png" alt="2.png" />
    </div>

    <div class="g1" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g2" aria-hidden="true"></div>
  
    <div class="grid-1000-3cols" ref="gridRef">
      <a class="thumb" href="../assets/Social Media/3.png" aria-label="img3"></a>
      <a class="thumb" href="../assets/Social Media/4.png" aria-label="img4"></a>
      <a class="thumb" href="../assets/Social Media/5.png" aria-label="img5"></a>
      <a class="thumb" href="../assets/Social Media/6.png" aria-label="img6"></a>
      <a class="thumb" href="../assets/Social Media/7.png" aria-label="img7"></a>
      <a class="thumb" href="../assets/Social Media/8.png" aria-label="img8"></a>
      <a class="thumb" href="../assets/Social Media/9.png" aria-label="img9"></a>
      <a class="thumb" href="../assets/Social Media/10.png" aria-label="img10"></a>
      <a class="thumb" href="../assets/Social Media/11.png" aria-label="img11"></a>
      <a class="thumb" href="../assets/Social Media/12.png" aria-label="img12"></a>
      <a class="thumb" href="../assets/Social Media/13.png" aria-label="img13"></a>
      <a class="thumb" href="../assets/Social Media/14.png" aria-label="img14"></a>
      <a class="thumb" href="../assets/Social Media/15.png" aria-label="img15"></a>
      <a class="thumb" href="../assets/Social Media/16.png" aria-label="img16"></a>
      <a class="thumb" href="../assets/Social Media/17.png" aria-label="img17"></a>
      <a class="thumb" href="../assets/Social Media/18.png" aria-label="img18"></a>
      <a class="thumb" href="../assets/Social Media/19.png" aria-label="img19"></a>
      <a class="thumb" href="../assets/Social Media/20.png" aria-label="img20"></a>
      <a class="thumb" href="../assets/Social Media/21.png" aria-label="img21"></a>
      <a class="thumb" href="../assets/Social Media/22.png" aria-label="img22"></a>
      <a class="thumb" href="../assets/Social Media/23.png" aria-label="img23"></a>
      <a class="thumb" href="../assets/Social Media/24.png" aria-label="img24"></a>
      <a class="thumb" href="../assets/Social Media/25.png" aria-label="img25"></a>
      <a class="thumb" href="../assets/Social Media/26.png" aria-label="img26"></a>
      <a class="thumb" href="../assets/Social Media/27.png" aria-label="img27"></a>
      <a class="thumb" href="../assets/Social Media/28.png" aria-label="img28"></a>
      <a class="thumb" href="../assets/Social Media/29.png" aria-label="img29"></a>
      <a class="thumb" href="../assets/Social Media/30.png" aria-label="img30"></a>
      <a class="thumb" href="../assets/Social Media/31.png" aria-label="img31"></a>
      <a class="thumb" href="../assets/Social Media/32.png" aria-label="img32"></a>
      <a class="thumb" href="../assets/Social Media/33.png" aria-label="img33"></a>
      <a class="thumb" href="../assets/Social Media/34.png" aria-label="img34"></a>
      <a class="thumb" href="../assets/Social Media/35.png" aria-label="img35"></a>
    </div>

    <div class="g2" aria-hidden="true"></div>

    <div ref="blueAnchor" class="blue-split-anchor" aria-hidden="true"></div>
    <div class="full-bleed-2000">
      <div class="g2" aria-hidden="true"></div>
      <img class="full-bleed-img" src="../assets/Social Media/40.png" alt="40.png" />
      <div class="overlay-4">
        <img class="tile t1" src="../assets/Social Media/36.png" alt="36.png" />
        <img class="tile t2" src="../assets/Social Media/37.png" alt="37.png" />
        <img class="tile t3" src="../assets/Social Media/38.png" alt="38.png" />
        <img class="tile t4" src="../assets/Social Media/39.png" alt="39.png" />
      </div>
    </div>



  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
const embedCtr = ref(null)
const iframeRef = ref(null)
let ro = null
function updateEmbedScale() {
  const el = embedCtr.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const cw = rect.width
  const ch = rect.height
  const scale = cw / 1300
  el.style.setProperty('--embed-scale', String(scale))
  el.style.setProperty('--iframe-base-height', (ch / scale) + 'px')
}
function handleResize() { updateEmbedScale() }
onMounted(() => { nextTick(() => { updateEmbedScale(); requestAnimationFrame(updateEmbedScale); ro = new ResizeObserver(() => updateEmbedScale()); if (embedCtr.value) ro.observe(embedCtr.value); if (iframeRef.value) iframeRef.value.addEventListener('load', updateEmbedScale, { once: true }); window.addEventListener('resize', handleResize); }) })
onUnmounted(() => { if (ro) { ro.disconnect(); ro = null } window.removeEventListener('resize', handleResize) })

const gridRef = ref(null)
function hydrateGridBackgrounds() {
  const el = gridRef.value
  if (!el) return
  el.querySelectorAll('.thumb').forEach(a => {
    const path = a.getAttribute('href')
    if (path && path !== '#') {
      try {
        const url = new URL(path, import.meta.url).href
        a.style.backgroundImage = `url('${url}')`
      } catch (e) {
        a.style.backgroundImage = `url('${path}')`
      }
      a.removeAttribute('href')
      a.setAttribute('tabindex', '-1')
      a.setAttribute('aria-disabled', 'true')
    }
  })
}
onMounted(() => { nextTick(() => hydrateGridBackgrounds()) })
const blueAnchor = ref(null)
function updateBlueSplit() {
  const el = blueAnchor.value
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY
  document.documentElement.style.setProperty('--blue-start', top + 'px')
  document.documentElement.style.setProperty('--scroll-y', window.scrollY + 'px')
  document.documentElement.classList.add('blue-split-active')
}
function handleBlueResize() { updateBlueSplit() }
onMounted(() => { updateBlueSplit(); window.addEventListener('resize', handleBlueResize); window.addEventListener('scroll', handleBlueResize, { passive: true }) })
onUnmounted(() => { document.documentElement.classList.remove('blue-split-active'); document.documentElement.style.removeProperty('--blue-start'); window.removeEventListener('resize', handleBlueResize); window.removeEventListener('scroll', handleBlueResize) })
</script>

<style scoped>
.social-media {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.spacer-250 { height: 250px; }
.spacer-120 { height: 120px; }
.spacer-90  { height: 90px; }
.spacer-15  { height: 15px; }

.image-1000 { width: min(1000px, 100%); display: block; height: auto; }


/* 顶部 1000×320 横幅容器与文本样式（用于玻璃覆盖层定位） */
.hero-1000-320 {
  width: min(1000px, 100%);
  aspect-ratio: 1000 / 320;
  position: relative;
  overflow: hidden;
  container-type: inline-size;
}
.brand-guideline-text {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  white-space: nowrap;
}
.brand-guideline-text.z5 {
  font-size: clamp(80px, 20cqw, 200px);
  line-height: clamp(64px, 16cqw, 160px);
}

/* 绑定图片资源 */
.img-1 { background-image: url('../assets/Social Media/1.png'); }
.img-2 { background-image: url('../assets/Social Media/2.png'); }

/* 文本与容器 */
.text-ctr-1200 { width: min(1200px, 100%); }
.text-20-regular { font-size: 20px; font-weight: 400; line-height: 1.5; }
.text-70 { font-size: 70px; line-height: 1; }
.sm-1000-700 {
  width: min(1000px, 100%);
  aspect-ratio: 1000 / 700;
  position: relative;
}
.overlay-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  pointer-events: none;
}
.embed-ctr {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 84.2%;
  aspect-ratio: 842 / 547;
  z-index: 1;
  overflow: hidden;
  background: #ffffff;
}
.embed-ctr iframe {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1300px;
  height: var(--iframe-base-height);
  transform: translate(-50%, -50%) scale(var(--embed-scale));
  transform-origin: center center;
  border: 0;
}
.grid-1000-3cols { width: min(1000px, 100%); display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.grid-1000-3cols .thumb { display: block; width: 100%; aspect-ratio: 1 / 1; background-color: #e5e5e5; background-size: cover; background-position: center; text-decoration: none; pointer-events: none; cursor: default; }
@media (max-width: 999px) { .grid-1000-3cols { gap: 20px; } }
.blue-split-anchor { height: 1px; width: 100%; }
.full-bleed-2000 { position: relative; left: 50%; transform: translateX(-50%); width: min(2000px, 100vw); }
.full-bleed-img { display: block; width: 100%; height: auto; }
.image-1000-container { position: relative; width: min(1000px, 100%); }
.overlay-4 { position: absolute; inset: 0; display: flex; gap: 20px; align-items: flex-start; justify-content: space-between; z-index: 3; pointer-events: none; padding-top: 120px; }
.overlay-4 .tile { width: calc((100% - 60px) / 4); height: auto; object-fit: cover; animation: floatY 6s ease-in-out infinite; }
.overlay-4 .t2 { animation-duration: 6.5s; animation-delay: 0.2s; }
.overlay-4 .t3 { animation-duration: 7s; animation-delay: 0.4s; }
.overlay-4 .t4 { animation-duration: 7.5s; animation-delay: 0.6s; }
@keyframes floatY { 0% { transform: translateY(-12px); } 50% { transform: translateY(12px); } 100% { transform: translateY(-12px); } }
</style>