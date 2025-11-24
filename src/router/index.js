import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Other from '../views/Other.vue'
import Introduction from '../views/Introduction.vue'
import Messaging from '../views/Messaging.vue'
import CoreIdentifiers from '../views/CoreIdentifiers.vue'
import Typography from '../views/Typography.vue'
import Color from '../views/Color.vue'
import Motion from '../views/Motion.vue'
import InUse from '../views/InUse.vue'
import Partnerships from '../views/Partnerships.vue'
import SubBrands from '../views/SubBrands.vue'
import SocialMedia from '../views/SocialMedia.vue'

const routes = [
  { path: '/', redirect: '/introduction' },
  { path: '/introduction', name: 'Introduction', component: Introduction },
  { path: '/messaging', name: 'Messaging', component: Messaging },
  { path: '/core-identifiers', name: 'CoreIdentifiers', component: CoreIdentifiers },
  { path: '/typography', name: 'Typography', component: Typography },
  { path: '/color', name: 'Color', component: Color },
  { path: '/motion', name: 'Motion', component: Motion },
  { path: '/in-use', name: 'InUse', component: InUse },
  { path: '/partnerships', name: 'Partnerships', component: Partnerships },
  { path: '/sub-brands', name: 'SubBrands', component: SubBrands },
  { path: '/social-media', name: 'SocialMedia', component: SocialMedia },
  // 保留旧页面，便于回溯
  { path: '/home', name: 'Home', component: Home },
  { path: '/other', name: 'Other', component: Other }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router