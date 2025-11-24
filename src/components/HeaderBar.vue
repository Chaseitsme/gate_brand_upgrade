<template>
  <header class="header-bar hairline-bottom">
    <div class="header-grid">
      <div class="header-col header-left hairline-right">
        <button class="hamburger-btn" aria-label="菜单" @click="toggleMenu">☰</button>
        <div class="logo">
          <img :src="logoUrl" width="150" height="35" alt="Logo" />
        </div>
      </div>
      <div class="header-col header-center hairline-right">
        <div class="header-center-content">
          <img class="brand-icon" :src="BrandIcon" width="80" height="40" alt="Brand" aria-hidden="true" />
          <span class="text-20 brand-title">GATE Brand Guidelines</span>
        </div>
      </div>
      <div class="header-col header-right">
        <div class="header-right-content">
          <button class="brand-download-btn" aria-label="下载品牌素材" @click="onDownload">Download brand assets</button>
        </div>
      </div>
    </div>
  </header>
  <!-- ≤1024：简易菜单 -->
  <div class="mobile-menu" v-show="menuOpen">
    <ul class="mobile-menu-list">
      <li><RouterLink to="/introduction" @click="closeMenu">Introduction</RouterLink></li>
      <li><RouterLink to="/messaging" @click="closeMenu">Messaging</RouterLink></li>
      <li><RouterLink to="/core-identifiers" @click="closeMenu">Core Identifiers</RouterLink></li>
      <li><RouterLink to="/typography" @click="closeMenu">Typography</RouterLink></li>
      <li><RouterLink to="/color" @click="closeMenu">Color</RouterLink></li>
      <li><RouterLink to="/motion" @click="closeMenu">Motion</RouterLink></li>
      <li><RouterLink to="/in-use" @click="closeMenu">In-use</RouterLink></li>
      <li><RouterLink to="/partnerships" @click="closeMenu">Partnerships</RouterLink></li>
      <li><RouterLink to="/sub-brands" @click="closeMenu">Sub brands</RouterLink></li>
      <li><RouterLink to="/social-media" @click="closeMenu">Social Media</RouterLink></li>
      <li><button class="menu-download" @click="onDownload">下载</button></li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logoUrl from '../assets/logo.svg'
import BrandIcon from '../assets/icons/Brand.svg'

const menuOpen = ref(false)
const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const closeMenu = () => { menuOpen.value = false }
const onDownload = () => { alert('下载占位：开始下载...') }
</script>

<style scoped>
.header-center-content {
  display: flex;
  align-items: center; /* 上下居中 */
  gap: 20px; /* 图标与文字相距 20px */
  margin-left: auto; /* 向右侧对齐 */
  margin-right: 80px; /* 距离中间栏右边 80px */
}
.brand-icon { width: 80px; height: 40px; display: block; }
.brand-title { white-space: nowrap; font-family: "Aeonik-Medium", var(--font-family-base); font-weight: 500; }

/* 右侧按钮容器：靠右并留 50px 右距 */
.header-right-content {
  margin-left: auto;
  margin-right: 50px;
  display: flex;
  align-items: center;
}

/* 下载按钮规格：180×40，圆角 6px，深色底白字 14px */
.brand-download-btn {
  width: 180px;
  height: 40px;
  border-radius: 6px;
  background: #111111;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 400;
  font-family: var(--font-family-base);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand-download-btn:hover { opacity: 0.9; }
</style>