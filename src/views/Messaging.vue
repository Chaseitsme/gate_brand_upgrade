<template>
  <div class="page messaging">
    <div class="g2" aria-hidden="true"></div>

    <div class="hero-1000-320">
      <div class="brand-guideline-text z5">Site<br>elements</div>
      <LiquidGlassOverlay
        use-text-source
        :text="'Site\nelements'"
        :text-color="'#000'"
        :text-font-family="'Parabole'"
      />
    </div>

    <div class="g4" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g2" aria-hidden="true"></div>

    <h2 class="z3">Within Gate’s ecosystem, our graphic language combines flat geometric forms with a refined frosted-glass texture — a balance between clarity and depth. This fusion enhances recognizability while seamlessly aligning with the product’s overall visual environment.<br/>More than an aesthetic choice, it reflects Gate’s design philosophy: transparency meets solidity, precision meets warmth. Each element serves a purpose — to communicate clearly, connect intuitively, and reinforce a unified brand experience across every surface.</h2>

    <div class="g2" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g1" aria-hidden="true"></div>

    <!-- 两个并排的子容器：500×700 与 700×700 -->
    <div class="columns-1280" data-variant="first-custom">
      <div class="col col-500">
        <div class="z1">Light Mode</div>
        <div class="g2" aria-hidden="true"></div>
        <div class="z3">flat vector + rough glass</div>
      </div>
      <div class="col col-700">
        <div class="grid-3x3" aria-label="3x3 image grid">
          <div class="thumb" data-index="1" aria-label="img1"></div>
          <div class="thumb" data-index="2" aria-label="img2"></div>
          <div class="thumb" data-index="3" aria-label="img3"></div>
          <div class="thumb" data-index="4" aria-label="img4"></div>
          <div class="thumb" data-index="5" aria-label="img5"></div>
          <div class="thumb" data-index="6" aria-label="img6"></div>
          <div class="thumb" data-index="7" aria-label="img7"></div>
          <div class="thumb" data-index="8" aria-label="img8"></div>
          <div class="thumb" data-index="9" aria-label="img9"></div>
        </div>
      </div>
    </div>

    <div class="g2" aria-hidden="true"></div>
 
    <div class="hairline" aria-hidden="true"></div>

    <div class="g2" aria-hidden="true"></div>

    <!-- 第二组：两个并排的子容器（Light Mode） -->
    <!-- 两个并排的子容器：500×700 与 700×700 -->
    <div class="columns-1280" data-variant="first-custom">
      <div class="col col-500">
        <div class="z1">Dark Mode</div>
        <div class="g2" aria-hidden="true"></div>
        <div class="z3">flat vector + rough glass</div>
      </div>
      <div class="col col-700">
        <div class="grid-3x3" aria-label="3x3 image grid">
          <div class="thumb" data-index="11" aria-label="img11"></div>
          <div class="thumb" data-index="12" aria-label="img12"></div>
          <div class="thumb" data-index="13" aria-label="img13"></div>
          <div class="thumb" data-index="14" aria-label="img14"></div>
          <div class="thumb" data-index="15" aria-label="img15"></div>
          <div class="thumb" data-index="16" aria-label="img16"></div>
          <div class="thumb" data-index="17" aria-label="img17"></div>
          <div class="thumb" data-index="18" aria-label="img18"></div>
          <div class="thumb" data-index="19" aria-label="img19"></div>
        </div>
      </div>
    </div>

    <div class="g2" aria-hidden="true"></div>
    
    <div class="hairline" aria-hidden="true"></div>

    <div class="g2" aria-hidden="true"></div>

  </div>

</template>

<script setup>
import LiquidGlassOverlay from '../components/LiquidGlassOverlay.vue'
const messagingImageSrc = new URL('../assets/Messaging/1.png', import.meta.url).href
</script>

<style scoped>
.messaging {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.columns-1280 {
  width: min(1280px, 100%);
  display: flex;
  flex-wrap: wrap;
  gap: 80px; /* 500 + 700 + 80 = 1280，保证并排对齐 */
}
.col { flex: 0 0 auto; }
.col-500 { width: 500px; height: 700px; display: flex; align-items: flex-start; }
.col-700 { width: 700px; height: 700px; display: flex; }

.columns-1280[data-variant="first-custom"] { gap: 0; }
.columns-1280[data-variant="first-custom"] .col-500 { width: 400px; height: 600px; display: flex; flex-direction: column; align-items: flex-start; }
.columns-1280[data-variant="first-custom"] .col-700 { width: 600px; height: 600px; }

.grid-3x3 {
  width: 700px;
  height: 700px;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(3, 200px);
  gap: 50px; /* 左右/上下间隔 50px */
}
.columns-1280[data-variant="first-custom"] .grid-3x3 { width: 600px; height: 600px; grid-template-columns: repeat(3, 180px); grid-template-rows: repeat(3, 180px); gap: 30px; }
.thumb {
  width: 200px;
  height: 200px;
  background-color: #e5e5e5; /* 占位灰底 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.columns-1280[data-variant="first-custom"] .thumb { width: 180px; height: 180px; }
.thumb[data-index="1"] { background-image: url('../assets/Messaging/2.png'); }
.thumb[data-index="2"] { background-image: url('../assets/Messaging/3.png'); }
.thumb[data-index="3"] { background-image: url('../assets/Messaging/4.png'); }
.thumb[data-index="4"] { background-image: url('../assets/Messaging/5.png'); }
.thumb[data-index="5"] { background-image: url('../assets/Messaging/6.png'); }
.thumb[data-index="6"] { background-image: url('../assets/Messaging/7.png'); }
.thumb[data-index="7"] { background-image: url('../assets/Messaging/8.png'); }
.thumb[data-index="8"] { background-image: url('../assets/Messaging/9.png'); }
.thumb[data-index="9"] { background-image: url('../assets/Messaging/10.png'); }

/* 第二组九宫格图片（11–19） */
.thumb[data-index="11"] { background-image: url('../assets/Messaging/11.png'); }
.thumb[data-index="12"] { background-image: url('../assets/Messaging/12.png'); }
.thumb[data-index="13"] { background-image: url('../assets/Messaging/13.png'); }
.thumb[data-index="14"] { background-image: url('../assets/Messaging/14.png'); }
.thumb[data-index="15"] { background-image: url('../assets/Messaging/15.png'); }
.thumb[data-index="16"] { background-image: url('../assets/Messaging/16.png'); }
.thumb[data-index="17"] { background-image: url('../assets/Messaging/17.png'); }
.thumb[data-index="18"] { background-image: url('../assets/Messaging/18.png'); }
.thumb[data-index="19"] { background-image: url('../assets/Messaging/19.png'); }

@media (max-width: 1279px) {
  .columns-1280 { gap: 40px; }
  .col-500, .col-700 { width: 100%; height: auto; }
  .grid-3x3 { width: 100%; height: auto; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 200px); }
  .columns-1280[data-variant="first-custom"] { gap: 40px; }
  .columns-1280[data-variant="first-custom"] .col-500, .columns-1280[data-variant="first-custom"] .col-700 { width: 100%; height: auto; }
  .columns-1280[data-variant="first-custom"] .grid-3x3 { width: 100%; height: auto; grid-template-columns: repeat(3, 1fr); grid-template-rows: none; }
  .columns-1280[data-variant="first-custom"] .thumb { width: 100%; height: auto; aspect-ratio: 1 / 1; }
}
</style>
<style scoped>
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
</style>