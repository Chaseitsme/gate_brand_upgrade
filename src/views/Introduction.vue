<template>
  <div class="page introduction">
    <div class="g2" aria-hidden="true"></div>

    <div class="hero-1000-320">
      <div class="brand-guideline-text z5">Brand<br/>Guideline</div>
      <LiquidGlassOverlay
        use-text-source
        :text="'Brand\nGuideline'"
        :text-color="'#000'"
        :text-font-family="'Parabole'"
      />
    </div>
    
    <div class="g3" aria-hidden="true"></div>

    <h2 class="z2">Gate Brand Guidelines</h2>

    <div class="g4" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g3" aria-hidden="true"></div>

    <h2 class="z3">At Gate, we believe that transactions should be as natural as everyday communication.<br>Transparent, allowing you to understand the logic behind each operation;<br>Safety, allowing you to control your assets with confidence;<br>Convenient, making the on-chain process no longer a threshold, but a choice.<br>We don't use complicated terminology, only talk about real experiences.<br>You can see where the funds are going, feel the system's protection, and take action freely at any time.<br>This is what blockchain should look like - open, trustworthy, and designed for people.<br>Are you willing to give it a try? Let transparency, security, and convenience become your new trading routine.</h2>
    
    <div class="g2" aria-hidden="true"></div>

    <div ref="blackAnchor" class="black-split-anchor" aria-hidden="true"></div>

    <div class="g3" aria-hidden="true"></div>

    <h2 class="z1" style="color:#FFFFFF;">Brand Upgrade</h2>

    <video class="video-1000" src="../assets/Introduction/1.mp4" controls></video>

    <div class="g2" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g3" aria-hidden="true"></div>

    <h2 class="z4">Over the past Years, we’ve explored dozens of visual directions—each a new lens on what our brand could become. From bold experiments to refined evolutions, every iteration brought us closer to a clearer, stronger identity. This ongoing exploration reflects our commitment to elevate the Gate visual language—pursuing higher quality, greater clarity, and a more resonant expression of who we are.</h2>

    <div class="g3" aria-hidden="true"></div>

    <a class="btn-220x48" href="#" aria-label="Explore past cases">Explore past cases</a>

    <div class="globe-bottom" aria-hidden="false">
      <Globe class="globe-peek" />
    </div>

    <div ref="blueAnchor" class="blue-split-anchor" aria-hidden="true"></div>

    <div class="g4" aria-hidden="true"></div>

    <div ref="terminalRef" class="faulty-full">
      <FaultyTerminal
        :style="{ width: '100%', height: '100%' }"
        text="祝你生日快乐！"
        bg-color="#0055FF"
        text-color="#000000"
        :scale="1"
        :grid-mul="[10, 3]"  :digit-size="0.5" 
        :background-point-size="0.4" 
        :time-scale="0.5"
        :noise-amp="3"
      />
    </div>

    <div class="g2" aria-hidden="true"></div>

    <div ref="footerRef" class="blue-footer" aria-label="copyright and usage notice">
      <div class="blue-footer-left">
        <p>2025 © Design by Gate Visual Team.</p>
        <p>All designs are owned by their respective creators.</p>
        <p>All visual elements in this system follow Gate’s brand guidelines and are intended for official use only.</p>
        <p>Unauthorized reproduction, modification, or commercial use is strictly prohibited.</p>
      </div>
      <div class="blue-footer-right">
        <a href="#" class="footer-link" aria-label="Privacy">Privacy</a>
        <a href="#" class="footer-link" aria-label="Security">Security</a>
        <a href="#" class="footer-link" aria-label="User terms">User terms</a>
        <a href="#" class="footer-link" aria-label="Customer terms">Customer terms</a>
        <button class="scroll-top-btn" aria-label="Back to top" @click="scrollToTop">
          <img :src="UpIcon" width="70" height="70" alt="Up" aria-hidden="true" />
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LiquidGlassOverlay from '../components/LiquidGlassOverlay.vue'
import Globe from '../components/Globe.vue'
import UpIcon from '../assets/icons/up.svg'
import FaultyTerminal from '../components/FaultyTerminal.vue'

const introImageSrc = new URL('../assets/Introduction/1.png', import.meta.url).href

// Anchors
const blackAnchor = ref(null)
const blueAnchor = ref(null)
const footerRef = ref(null) // 修改点：新增 footerRef
const terminalRef = ref(null)

// Black Split Logic
function updateBlackSplit() {
  const el = blackAnchor.value
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY
  document.documentElement.style.setProperty('--black-start', top + 'px')
  document.documentElement.classList.add('black-split-active')
}
function handleBlackResize() { updateBlackSplit() }

// Blue Split Logic
function updateBlueSplit() {
  const el = blueAnchor.value
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY
  document.documentElement.style.setProperty('--blue-start', top + 'px')
  document.documentElement.style.setProperty('--scroll-y', window.scrollY + 'px')
  document.documentElement.classList.add('blue-split-active')
}
function handleBlueResize() { updateBlueSplit() }

// 修改点：Footer Full-Width Logic
function updateFooterLayout() {
  const el = footerRef.value
  if (!el) return
  const rect = el.parentElement.getBoundingClientRect()
  const offsetLeft = rect.left
  el.style.width = '100vw'
  el.style.marginLeft = `-${offsetLeft}px`
}
function updateTerminalLayout() {
  const el = terminalRef.value
  if (!el) return
  const rect = el.parentElement.getBoundingClientRect()
  const offsetLeft = rect.left
  el.style.width = '100vw'
  el.style.marginLeft = `-${offsetLeft}px`
}
function handleLayoutResize() {
  updateFooterLayout()
  updateTerminalLayout()
}

const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

onMounted(() => {
  updateBlackSplit()
  updateBlueSplit()
  updateFooterLayout() // 初始化
  updateTerminalLayout()
  
  window.addEventListener('resize', handleBlackResize)
  window.addEventListener('scroll', handleBlackResize, { passive: true })
  
  window.addEventListener('resize', handleBlueResize)
  window.addEventListener('scroll', handleBlueResize, { passive: true })
  window.addEventListener('resize', handleLayoutResize)
  window.addEventListener('scroll', handleLayoutResize, { passive: true })
})

onUnmounted(() => {
  document.documentElement.classList.remove('black-split-active')
  document.documentElement.style.removeProperty('--black-start')
  document.documentElement.classList.remove('blue-split-active')
  document.documentElement.style.removeProperty('--blue-start')
  document.documentElement.style.removeProperty('--scroll-y')
  
  window.removeEventListener('resize', handleBlackResize)
  window.removeEventListener('scroll', handleBlackResize)
  window.removeEventListener('resize', handleBlueResize)
  window.removeEventListener('scroll', handleBlueResize)
  window.removeEventListener('resize', handleLayoutResize)
  window.removeEventListener('scroll', handleLayoutResize)
})
</script>

<style scoped>
.introduction {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* 注意：这里不要加 overflow: hidden，否则 footer 的负 margin 可能会被裁剪 */
}
.video-1000 {
  width: min(1000px, 100%);
  display: block;
  height: auto;
  margin: 0 auto;
}
.faulty-full { 
  width: 100%;  /* 初始宽度，JS 会覆盖它 */
  height: 300px; /* 修改高度为 300px */
  position: relative; 
  overflow: hidden; 
  /* 不需要 margin: 0 auto，因为我们会用 JS 强制拉伸 */
}
.btn-220x48 {
  width: 220px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #0055FF;
  color: #FFFFFF;
  font-size: 18px;
  border-radius: 6px;
  text-decoration: none;
}
.btn-220x48:hover { background: #0A62FF; }
.btn-220x48:focus { outline: 2px solid rgba(255,255,255,0.6); outline-offset: 2px; }

.globe-bottom {
  width: 100%;
  background: #000000;
  position: relative;
  overflow: hidden;
  height: clamp(360px, 52vh, 640px);
  margin-top: 24px;
}
.globe-peek {
  position: absolute;
  left: 50%;
  top: 92%;
  transform: translate(-50%, -50%);
  width: clamp(600px, 80vw, 1100px);
  aspect-ratio: 1 / 1;
}

.intro-text-block { width: 100%; }
.intro-text-block .text-20 { margin: 0 0 18px 0; }
.intro-text-block .text-20:last-child { margin-bottom: 0; }

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
.black-split-anchor { height: 1px; width: 100%; }
.blue-split-anchor { height: 1px; width: 100%; }

/* 修改点：Footer 样式更新 */
.blue-footer { 
  /* 确保内容左右对齐 */
  display: flex; 
  justify-content: space-between; 
  align-items: flex-end; 
  
  /* 设置左右内边距为 30px，贴边 */
  padding: 0 30px 40px 30px; /* 底部增加40px留白 */
  box-sizing: border-box;
  
  /* 确保背景/布局不受父容器 padding 干扰（由 JS 动态控制宽度和位置） */
  position: relative;
}

.blue-footer-left p { margin: 0 0 6px 0; font-size: 11px; line-height: 16px; color: #000000; font-family: "Aeonik-Light", var(--font-family-base); }
.blue-footer-left p:first-child { font-family: "Aeonik-Medium", var(--font-family-base); }
.blue-footer-right { display: flex; align-items: flex-end; gap: 25px; }
.footer-link { font-size: 13px; line-height: 16px; color: #000000; font-family: "Aeonik-Medium", var(--font-family-base); }
.scroll-top-btn { display: inline-flex; align-items: flex-end; border: none; background: transparent; padding: 0; cursor: pointer; }
.scroll-top-btn img { display: block; }

/* 修改点：响应式排版 (小于 850px 时上下排列) */
@media (max-width: 850px) {
  .blue-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
  .blue-footer-right {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
</style>