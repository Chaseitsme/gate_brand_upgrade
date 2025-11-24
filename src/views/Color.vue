<template>
  <div class="page">
    <div class="g2" aria-hidden="true"></div>

    <div class="hero-1000-320">
      <div class="brand-guideline-text z5">Band<br>Color</div>
      <LiquidGlassOverlay
        use-text-source
        :text="'BanndColor'"
        :text-color="'#000'"
        :text-font-family="'Parabole'"
      />
    </div>
  
    <div class="g2" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g2" aria-hidden="true"></div>
    
    <div class="z3">
      Color is far more than decoration — it carries meaning, emotion, and clarity of action.<br>
      Our foundational blue sets the tone: a native RGB hue engineered for digital performance across every screen. Cool, balanced neutrals provide structure and meet accessibility contrast standards. Together, blue and the spectrum of whites, grays, and blacks build a visual language of stability and trust.<br>
      Prioritize rhythm over variety. Let a restrained monochrome palette take the lead, then let a single accent color guide attention. Lock in color tokens that ensure AA-level contrast across both light and dark themes. And remember: restraint creates recognition. When everything competes for attention, nothing stands out.<br>
    </div>
    
    <div class="g2" aria-hidden="true"></div>

    <div ref="whiteAnchor" class="white-split-anchor" aria-hidden="true"></div>
    
    <div class="g2" aria-hidden="true"></div>

    <div class="columns-1280" data-variant="ci-500x2">
      <div class="col col-600">
        <div class="z1">The Color</div>
      </div>
      <div class="col col-600">
        <div class="z4">
          Core palette:  Light Gray, Base Blue, Black and White
        </div>
        <div class="g3" aria-hidden="true"></div>
        <img class="ci-image-3" src="../assets/color/1.png" alt="1.png" />
      </div>
    </div>

    <div class="g2" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g2" aria-hidden="true"></div>

   <div class="columns-1280" data-variant="ci-500x2">
      <div class="col col-600">
        <div class="z1">The Color</div>
      </div>
      <div class="col col-600">
        <div class="z4">
          Provide hex and RGB for every swatch. Keep values locked. Do not interpolate between shades without brand team approval.
        </div>
      </div>
    </div>

    <div class="g3" aria-hidden="true"></div>

    <div class="color-columns-1000">
      <div class="col-400 light-block" @click="copyColor('#f4f4f4')">
        <div class="g2" aria-hidden="true"></div>
        <div class="z2">Light Gray</div>
        <div class="vlist">
          <div class="z4"><span class="key">#</span><span class="val">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f4f4f4</span></div><br/>
          <div class="z4"><span class="key">R</span><span class="val">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;244</span></div><br/>
          <div class="z4"><span class="key">G</span><span class="val">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;244</span></div><br/>
          <div class="z4"><span class="key">B</span><span class="val">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;244</span></div>
        </div>
      </div>
      <div class="col-600 swatches">
        <div class="swatch blue" @click="copyColor('#0055FF')">
          <div class="g4" aria-hidden="true"></div>
          <div class="swatch-row">
            <div class="meta">
              <div class="meta-item"># 0055FF</div>
              <div class="meta-item">R 0</div>
              <div class="meta-item">G 85</div>
              <div class="meta-item">B 255</div>
            </div>
            <div class="z2">Blue</div>
          </div>
        </div>
        <div class="swatch black" @click="copyColor('#040404')">
          <div class="g4" aria-hidden="true"></div>
          <div class="swatch-row">
            <div class="meta">
              <div class="meta-item"># 040404</div>
              <div class="meta-item">R 4</div>
              <div class="meta-item">G 4</div>
              <div class="meta-item">B 4</div>
            </div>
            <div class="z2">Black</div>
          </div>
        </div>
        <div class="swatch gray" @click="copyColor('#D9D9D9')">
          <div class="g4" aria-hidden="true"></div>
          <div class="swatch-row">
            <div class="meta">
              <div class="z3"># D9D9D9</div>
              <div class="z3">R 217</div>
              <div class="z3">G 217</div>
              <div class="z3">B 217</div>
            </div>
            <div class="z2">Gray</div>
          </div>
        </div>
      </div>
    </div>

      <div class="g3" aria-hidden="true"></div>


    <div class="columns-1280" data-variant="ci-500x2">
      <div class="col col-600">
        <div class="z1">The Color</div>
      </div>
      <div class="col col-600">
           <div class="swatch bg" @click="copyColor('#84B0D7')">
          <div class="g4" aria-hidden="true"></div>
          <div class="swatch-row">
            <div class="meta">
              <div class="z3"># 84B0D7</div>
              <div class="z3">R 132</div>
              <div class="z3">G 176</div>
              <div class="z3">B 215</div>
            </div>
            <div class="z2">Blue Gray</div>
          </div>
        </div>
        <div class="swatch dg" @click="copyColor('#C8C8C8')">
          <div class="g4" aria-hidden="true"></div>
          <div class="swatch-row">
            <div class="meta">
              <div class="z3"># C8C8C8</div>
              <div class="z3">R 200</div>
              <div class="z3">G 200</div>
              <div class="z3">B 200</div>
            </div>
            <div class="z2">Deep Gray</div>
          </div>
        </div>
        <div class="swatch rg" @click="copyColor('#C1BAC3')">
          <div class="g4" aria-hidden="true"></div>
          <div class="swatch-row">
            <div class="meta">
              <div class="z3"># C1BAC3</div>
              <div class="z3">R 193</div>
              <div class="z3">G 186</div>
              <div class="z3">B 195</div>
            </div>
            <div class="z2">Red Gray</div>
          </div>
        </div>
      </div>
    </div>

    <div class="g2" aria-hidden="true"></div>
  
    <div class="hairline" aria-hidden="true"></div>

    <div class="g2" aria-hidden="true"></div>

    <div class="columns-1280" data-variant="ci-500x2">
      <div class="col col-600">
        <div class="z1">The Color</div>
      </div>
      <div class="col col-600">
        <img class="ci-image-2" src="../assets/color/2.png" alt="2.png" />
        <div class="g3" aria-hidden="true"></div>
        <div class="z4">
          The core color combination is grayscale and blue. The secondary palette can then be used to enrich marketing and social content, but it should never overshadow the primary colors. For campaigns or special novelty projects, colors outside the brand palette may be used to keep the brand from feeling stagnant.
        </div>
      </div>
    </div>

    <div class="g2" aria-hidden="true"></div>
  
    <div class="hairline" aria-hidden="true"></div>

    <div class="g1" aria-hidden="true"></div>

    <div class="capsule-row"><div class="capsule">Core</div></div>

    <div class="g3" aria-hidden="true"></div>

    <img class="image-1000" src="../assets/Color/3.png" alt="3.png" />
    
    <div class="g2" aria-hidden="true"></div>

    <div class="capsule-row"><div class="capsule">Social</div></div>

    <div class="g3" aria-hidden="true"></div>

    <img class="image-1000" src="../assets/Color/4.png" alt="4.png" />

    <div class="g1" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g2" aria-hidden="true"></div>

    <div class="capsule-row"><div class="capsule">Text</div></div>

    <div class="g3" aria-hidden="true"></div>

    <img class="image-1000" src="../assets/Color/5.png" alt="5.png" />

    <div class="g2" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g2" aria-hidden="true"></div>

    <div class="capsule-row"><div class="capsule">Graphic</div></div>

    <div class="g3" aria-hidden="true"></div>

    <img class="image-1000" src="../assets/Color/6.png" alt="6.png" />

    <div class="g2" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g3" aria-hidden="true"></div>

    <div class="z4">
      For color schemes used in images for specific holidays, we respect local traditional culture and color schemes. In such cases, brand colors may not be used, or the holiday colors may be the primary element, with brand colors used as a secondary element.
    </div>

    <div class="g4" aria-hidden="true"></div>

    <div class="capsule-row"><div class="capsule">western festival</div></div>
   
    <div class="g4" aria-hidden="true"></div>

    <img class="image-1000" src="../assets/Color/7.png" alt="7.png" />

    <div class="g2" aria-hidden="true"></div>

    <div class="capsule-row"><div class="capsule">Chinese festival</div></div>

    <div class="g4" aria-hidden="true"></div>

    <img class="image-1000" src="../assets/Color/8.png" alt="8.png" />

    <div class="g1
    " aria-hidden="true"></div>

    <div class="capsule-row"><div class="capsule">Arab</div></div>

    <div class="g3" aria-hidden="true"></div>

    <img class="image-1000" src="../assets/Color/9.png" alt="9.png" />

    <div class="g2" aria-hidden="true"></div>

    <div class="capsule-row"><div class="capsule">Tokens</div></div>

    <div class="g3" aria-hidden="true"></div>

    <img class="image-1000" src="../assets/Color/10.png" alt="10.png" />

    <div class="g2" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g2" aria-hidden="true"></div>

    <img class="image-1000" src="../assets/Color/11.png" alt="11.png" />

    <div class="g4" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g3" aria-hidden="true"></div>

    <div class="z4">
      Avoid using opacity, layers, and other visual effects. Never use any colors other than blue, black, white, or gray as the primary color.
    </div>

    <div class="g2" aria-hidden="true"></div>

    <img class="image-1000" src="../assets/Color/12.png" alt="12.png" />

    <div class="g2" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g4" aria-hidden="true"></div>

    <div class="z3">
      Here are a few examples of how to apply our color palette across different contexts
    </div>

    <div class="g3" aria-hidden="true"></div>

    <img class="image-1000" src="../assets/Color/13.png" alt="13.png" />

    <div class="g1" aria-hidden="true"></div>


    <div v-if="toastVisible" class="toast" role="status" aria-live="polite">Color code copied.</div>
  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const whiteAnchor = ref(null)
const toastVisible = ref(false)
let toastTimer = null
function copyColor(hex) {
  const done = () => {
    toastVisible.value = true
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => { toastVisible.value = false }, 1500)
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(hex).then(done).catch(done)
  } else {
    done()
  }
}

function updateWhiteSplit() {
  const el = whiteAnchor.value
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY
  document.documentElement.style.setProperty('--white-start', top + 'px')
  document.documentElement.classList.add('white-split-active')
}

function handleResize() { updateWhiteSplit() }

onMounted(() => {
  updateWhiteSplit()
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleResize, { passive: true })
})

onUnmounted(() => {
  document.documentElement.classList.remove('white-split-active')
  document.documentElement.style.removeProperty('--white-start')
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleResize)
})
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spacer-250 {
  height: 250px;
}

.hero-1280-500 {
  width: min(1280px, 100%);
  aspect-ratio: 1280 / 500;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #eee; /* 占位底色，资源缺失时也不突兀 */
}

.img-color-1 {
  background-image: url('../assets/color/1.png');
}


.columns-1280 {
  width: min(1080px, 100%);
  display: flex;
  flex-wrap: wrap;
  gap: 80px; /* 600 + 600 + 80 = 1280，保证两列在 1280 宽下并排 */
}
.col {
  flex: 1 1 500px;
  max-width: 500px;
}

.columns-1280[data-variant="ci-500x2"] { gap: 0; }
.columns-1280[data-variant="ci-500x2"] .col { flex: 0 0 500px; max-width: 500px; }

@media (max-width: 1080px) {
  .columns-1280 { gap: 40px; }
  .col { flex-basis: 100%; max-width: 100%; }
  .columns-1280[data-variant="ci-500x2"] { gap: 40px; }
  .columns-1280[data-variant="ci-500x2"] .col { flex: 1 1 100%; max-width: 100%; }
}

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
.white-split-anchor { height: 1px; width: 100%; }
.light-block { cursor: pointer; }
.swatches { cursor: pointer; }
.toast { position: fixed; left: 50%; bottom: 24px; transform: translateX(-50%); padding: 8px 12px; background: rgba(0,0,0,0.85); color: #fff; border-radius: 6px; font-size: 14px; }
.color-columns-1000 { width: min(1000px, 100%); display: flex; flex-wrap: wrap; gap: 0; }
.col-400 { width: 50%; flex: 0 0 50%; }
.col-600 { width: 50%; flex: 0 0 50%; }
.light-block { background: #f4f4f4; padding: 24px; display: flex; flex-direction: column; align-items: flex-start; }
.vlist { margin-top: 20px; display: grid; grid-template-columns: auto 1fr; gap: 10px 16px; font-size: 14px; color: #111111; }
.vlist .key { color: #111111; }
.vlist .val { color: #111111; }
.swatches { display: flex; flex-direction: column; }
.swatch { min-height: 180px; display: flex; flex-direction: column; }
.swatch + .swatch { margin-top: 0; }
.swatch.blue { background: #0055FF; }
.swatch.black { background: #040404; }
.swatch.gray { background: #D9D9D9; }
.swatch.bg { background: #84B0D7; }
.swatch.dg { background: #C8C8C8; }
.swatch.rg { background: #C1BAC3; }
.swatch-row { padding: 20px; display: flex; align-items: flex-start; gap: 32px; }
.meta { color: #FFFFFF; font-size: 14px; display: flex; flex-direction: column; gap: 8px; }
.swatch-row .z2 { color: #FFFFFF; }
.swatch-row .z3 { color: #000000; }
/* Blue Gray uses black text */
.swatch.bg .swatch-row .z2 { color: #111111; }
.swatch.dg .swatch-row .z2 { color: #111111; }
.swatch.rg .swatch-row .z2 { color: #111111; }
.swatch.gray .swatch-row .z2 { color: #111111; }

.capsule-row { width: min(1000px, 100%); display: flex; justify-content: flex-start; }
.capsule { min-width: 135px; height: 50px; padding: 0 24px; border: 1px solid #000000; border-radius: 25px; background: transparent; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; font-size: 25px; font-weight: 400; line-height: 1; color: #111111; }
.image-1000 { width: min(1000px, 100%); display: block; height: auto; }

@media (max-width: 999px) {
  .color-columns-1000 { gap: 40px; }
  .col-400, .col-600 { width: 100%; flex: 1 1 100%; }
}
</style>