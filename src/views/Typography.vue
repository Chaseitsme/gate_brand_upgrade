<template>
  <div class="page typography">
    <div class="g2" aria-hidden="true"></div>

    <div class="hero-1000-320">
      <div class="brand-guideline-text z5">Typography</div>
      <LiquidGlassOverlay
        use-text-source
        :text="'Typography'"
        :text-color="'#000'"
        :text-font-family="'Parabole'"
        :text-cqw="16"
        :line-cqw="13"
        :text-padding-bottom="18"
      />
    </div>

    <div class="g3" aria-hidden="true"></div>

    <!-- 1px 黑色横线 -->
    <div class="hairline" aria-hidden="true"></div>

    <div class="g2" aria-hidden="true"></div>

    <div class="columns-1280" data-variant="ci-500x2">
      <div class="col col-600">
        <div class="z1">Primary<br>Typeface</div>
      </div>
      <div class="col col-600">
        <div class="z4">
          Aeonik Sans is the primary typeface of Gate — the cornerstone of our visual identity. Designed for a fast-evolving on-chain world, it balances clarity with adaptability. Its open, modern letterforms echo the transparency and connectivity that define the blockchain ecosystem.        </div>
      </div>
    </div>

    <div class="g2" aria-hidden="true"></div>

    <!-- 1200×500 图（2.png，资源位于 Core Identifiers 文件夹） -->
    <div class="hero-1200-500 img-2" aria-label="2.png"></div>

    <div class="g2" aria-hidden="true"></div>

    <!-- 1px 黑色横线 -->
    <div class="hairline" aria-hidden="true"></div>

    <div class="g3" aria-hidden="true"></div>

    <div class="columns-1280" data-variant="ci-500x2">
      <div class="col col-600">
        <div class="z1">The Circle<br>and the<br>Semicircle</div>
      </div>
      <div class="col col-600">
        <img class="image-3" src="../assets/Typography/3.png" alt="3.png" />
      </div>
    </div>

    <div class="g3" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g3" aria-hidden="true"></div>

    <!-- 1200×950 图（4.png） -->
    <div class="hero-1200-950 img-4" aria-label="4.png"></div>

    <div class="g3" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>
  
    <div class="g2" aria-hidden="true"></div>

    <!-- 1200×700 图（5.png） -->
    <div class="hero-1200-700 img-5" aria-label="5.png"></div>

    <div class="g2" aria-hidden="true"></div>

     <div class="columns-1280" data-variant="ci-500x2">
      <div class="col col-600">
        <div class="z1">Secondary<br>Typeface</div>
      </div>
      <div class="col col-600">
        <div class="z2">Parabole</div>
        <div class="z3">
          Parabole complements Aeonik Sans, bringing a distinctive creative voice to expressive compositions and attention-grabbing headlines. Together, they create a dynamic typographic system — clear, confident, and unmistakably Gate.
        </div>
      </div>
    </div>

    <!-- 550px 的 “Gate”，字体为 Parabole -->
    <!-- div class="gate-550 parabole">Gate</div -->
    <div class="g2" aria-hidden="true"></div>

    <div class="pressure-1000">
      <TextPressure :text="'Gate 6666'" :text-color="'#111111'" :min-font-size="48" />
    </div>




    <!-- 90px 空白 + 1px 黑线 + 50px 空白 -->
    <div class="g4" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g3" aria-hidden="true"></div>

    <div class="columns-1280" data-variant="ci-500x2">
      <div class="col col-600">
        <div class="z1">Font<br>application</div>
      </div>
      <div class="col col-600">
        <div class="z4">Parabole is a result of multiple experiments with intersecting lines in letterforms. </div>
        <img class="image-6" src="../assets/Typography/6.png" alt="6.png" />
      </div>
    </div>

    <div class="g2" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>
    
    <div class="g1" aria-hidden="true"></div>

    <!-- 460×1560 与 740×1560 双列模块 -->
    <div class="columns-1200" data-variant="typo-bottom-fit">
      <!-- 容器1：460×1560，70px font4 + 空 80px + 20px font5，底部 460×450 图片 7.png 置底 -->
      <div class="col col-460-1560 col-460-stack">
        <div class="z1">Layouts</div>
        <div class="g4" aria-hidden="true"></div>
        <div class="z4">Our preset layouts serve as the foundation of Gate’s visual language — a framework designed for clarity, consistency, and brand coherence. They’re not limitations, but instruments of alignment: ensuring that every touchpoint feels unmistakably Gate, no matter who creates it or where it appears.<br>Through considered grids, balanced spacing, and consistent hierarchy, these templates provide both structure and freedom — guiding composition while leaving room for expression. Use them to build unity across every format, so that Gate’s voice remains clear, confident, and instantly recognizable.</div>
        <div class="img-7 box-460-450" aria-label="7.png"></div>
      </div>
      <!-- 容器2：740×1560，内含 740×1510 图片 8.png -->
      <div class="col col-740-1560">
        <div class="img-8 box-740-1510" aria-label="8.png"></div>
      </div>
    </div>


    <div class="g2" aria-hidden="true"></div>

    <div class="hairline" aria-hidden="true"></div>

    <div class="g1" aria-hidden="true"></div>

  </div>
</template>

<script setup>
import TextPressure from '../components/TextPressure.vue'
</script>

<style scoped>
.typography {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* 图片容器（灰底占位 + 背景图） */
.hero-1280-500,
.hero-1200-500,
.hero-1200-950,
.hero-1200-700 {
  background-color: #F4F4F4;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.hero-1280-500 { width: min(1280px, 100%); aspect-ratio: 1280 / 500; }
.hero-1200-500 { width: min(1200px, 100%); aspect-ratio: 1200 / 500; }
.hero-1200-950 { width: min(1200px, 100%); aspect-ratio: 1200 / 950; }
.hero-1200-700 { width: min(1200px, 100%); aspect-ratio: 1200 / 700; }

/* 绑定图片资源 */
.img-1 { background-image: url('../assets/Typography/1.png'); }
.img-2 { background-image: url('../assets/Typography/2.png'); }
.img-3 { background-image: url('../assets/Typography/3.png'); }
.img-4 { background-image: url('../assets/Typography/4.png'); }
.img-5 { background-image: url('../assets/Typography/5.png'); }
.img-6 { background-image: url('../assets/Typography/6.png'); }
.img-7 { background-image: url('../assets/Typography/7.png'); }
.img-8 { background-image: url('../assets/Typography/8.png'); }

/* 两列 600×600 区域（与 Core Identifiers 的两列保持一致） */
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

/* 1200 宽度双列（470+730 与 460+740） */
.columns-1200 {
  width: min(1200px, 100%);
  display: flex;
  flex-wrap: wrap;
  gap: 0; /* 470 + 730 = 1200；460 + 740 = 1200 */
}
.col { flex: 0 0 auto; }
.col-470-630 { width: 470px; height: 630px; display: flex; align-items: flex-start; }
.col-730-630 { width: 730px; height: 630px; }
.col-730-stack { display: flex; flex-direction: column; }
.block-fill { flex: 1; width: 100%; background-color: #e5e5e5; background-size: cover; background-position: center; background-repeat: no-repeat; }

.col-460-1560 { width: 460px; height: 1560px; }
.col-460-stack { display: flex; flex-direction: column; }
.box-460-450 { width: 460px; height: 450px; background-color: #e5e5e5; background-size: cover; background-position: center; background-repeat: no-repeat; margin-top: auto; }

.col-740-1560 { width: 740px; height: 1560px; display: flex; align-items: flex-start; }
.box-740-1510 { width: 740px; height: 1510px; background-color: #e5e5e5; background-size: cover; background-position: center; background-repeat: no-repeat; }

.columns-1200[data-variant="typo-bottom-fit"] { width: min(1000px, 100%); gap: 0; }
.columns-1200[data-variant="typo-bottom-fit"] .col-460-1560 { width: 38.3333%; height: auto; }
.columns-1200[data-variant="typo-bottom-fit"] .col-740-1560 { width: 61.6667%; height: auto; }
.columns-1200[data-variant="typo-bottom-fit"] .box-460-450 { width: 100%; aspect-ratio: 460 / 450; height: auto; }
.columns-1200[data-variant="typo-bottom-fit"] .box-740-1510 { width: 100%; aspect-ratio: 740 / 1510; height: auto; }

/* 文本样式 */
.text-70 { font-size: 70px; line-height: 1; }
.text-40-bold { font-size: 40px; font-weight: 700; line-height: 1.2; }
.text-20-regular { font-size: 20px; font-weight: 400; line-height: 1.5; }

/* Parabole 字体与 Gate 文本 */
@font-face {
  font-family: 'Parabole';
  src: url('../assets/font/parabole-bolddisplay.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
.parabole { font-family: 'Parabole', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif; }
.gate-550 { width: min(1200px, 100%); font-size: 450px; line-height: 1; }
.pressure-1000 { width: min(1000px, 100%); min-height: 240px; }

@media (max-width: 1279px) {
  .columns-1280 { gap: 40px; }
  .col-600 { width: 100%; height: auto; }
  .box-600 { width: 100%; height: auto; aspect-ratio: 1 / 1; }
  .columns-1200 { gap: 40px; }
  .col-470-630, .col-730-630, .col-460-1560, .col-740-1560 { width: 100%; height: auto; }
  .box-460-450 { width: 100%; aspect-ratio: 460 / 450; height: auto; }
  .box-740-1510 { width: 100%; aspect-ratio: 740 / 1510; height: auto; }
  .columns-1200[data-variant="typo-bottom-fit"] { width: 100%; }
  .columns-1200[data-variant="typo-bottom-fit"] .col-460-1560, .columns-1200[data-variant="typo-bottom-fit"] .col-740-1560 { width: 100%; }
}
</style>
<style scoped>
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
  bottom: 18px;
  width: 100%;
  white-space: nowrap;
}
.brand-guideline-text.z5 {
  font-size: clamp(80px, 16cqw, 200px);
  line-height: clamp(64px, 13cqw, 160px);
}
</style>