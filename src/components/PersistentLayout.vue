<template>
  <div class="app-shell">
    <HeaderBar />
    <div class="main-grid">
      <SideNav />
      <section class="content-area">
        <RouterView />
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderBar from './HeaderBar.vue'
import SideNav from './SideNav.vue'
</script>