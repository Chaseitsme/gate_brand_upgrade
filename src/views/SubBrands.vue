<template>
  <div class="page">
    <div class="g2" aria-hidden="true"></div>

    <div class="hero-1000-320">
      <div class="brand-guideline-text z5">Sub<br>brands</div>
      <LiquidGlassOverlay
        use-text-source
        :text="'Sub\nbrands'"
        :text-color="'#000'"
        :text-font-family="'Parabole'"
      />
    </div>
    
  </div>
</template>

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
  background-color: #eee;
}

/* 使用 Introduction 的 1.png */
.img-subbrands-1 {
  background-image: url('../assets/Introduction/1.png');
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
</style>