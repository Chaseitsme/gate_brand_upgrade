<template>
  <div class="page in-use">
    <div class="g2" aria-hidden="true"></div>

    <div class="hero-1000-320">
      <div class="brand-guideline-text z5">In-use</div>
      <LiquidGlassOverlay
        use-text-source
        :text="'In-use'"
        :text-color="'#000'"
        :text-font-family="'Parabole'"
      />
    </div>
    <!-- 15px 空白 -->
    <div class="spacer-15" aria-hidden="true"></div>

    <!-- 1px 黑色横线 -->
    <div class="hairline" aria-hidden="true"></div>

    <!-- 90px 空白 -->
    <div class="spacer-90" aria-hidden="true"></div>

    <!-- 1200 宽度图片栈（2.png 到 9.png，每张上下间隔 30px） -->
    <div class="stack-1200 gap-30">
      <img class="image-1200" src="../assets/In-use/2.png" alt="2.png" />
      <img class="image-1200" src="../assets/In-use/3.png" alt="3.png" />
      <img class="image-1200" src="../assets/In-use/4.png" alt="4.png" />
      <img class="image-1200" src="../assets/In-use/5.png" alt="5.png" />
      <img class="image-1200" src="../assets/In-use/6.png" alt="6.png" />
      <img class="image-1200" src="../assets/In-use/7.png" alt="7.png" />
      <img class="image-1200" src="../assets/In-use/8.png" alt="8.png" />
      <img class="image-1200" src="../assets/In-use/9.png" alt="9.png" />
    </div>
  </div>
</template>

<style scoped>
.in-use {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.spacer-250 { height: 250px; }
.spacer-90  { height: 90px; }
.spacer-15  { height: 15px; }

/* 顶部 1280×500 容器 */
.hero-1280-500 {
  width: min(1280px, 100%);
  aspect-ratio: 1280 / 500;
  background-color: #e5e5e5;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.img-typo-1 { background-image: url('../assets/Typography/1.png'); }

/* 1200 宽度图片栈 */
.stack-1200 { width: min(1200px, 100%); }
.gap-30 > * + * { margin-top: 30px; }
.image-1200 { display: block; width: 100%; height: auto; }
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
  bottom: 0;
  width: 100%;
  white-space: nowrap;
}
.brand-guideline-text.z5 {
  font-size: clamp(80px, 20cqw, 200px);
  line-height: clamp(64px, 16cqw, 160px);
}
</style>