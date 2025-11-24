import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'
import LiquidGlassOverlay from './components/LiquidGlassOverlay.vue'

const app = createApp(App)
app.use(router)
app.component('LiquidGlassOverlay', LiquidGlassOverlay)
app.mount('#app')