<template>
  <nav class="side-nav">
    <ul class="nav-list">
      <li class="nav-item"><RouterLink class="nav-button" to="/introduction"><img class="icon" :src="IntroductionIcon" width="20" height="20" alt="" aria-hidden="true" /><span class="label">Introduction</span></RouterLink></li>
      <li class="nav-item"><RouterLink class="nav-button" to="/messaging"><img class="icon" :src="MessagingIcon" width="20" height="20" alt="" aria-hidden="true" /><span class="label">Messaging</span></RouterLink></li>
      <li class="nav-item"><RouterLink class="nav-button" to="/core-identifiers"><img class="icon" :src="CoreIdentifiersIcon" width="20" height="20" alt="" aria-hidden="true" /><span class="label">Core Identifiers</span></RouterLink></li>
      <li class="nav-item"><RouterLink class="nav-button" to="/typography"><img class="icon" :src="TypographyIcon" width="20" height="20" alt="" aria-hidden="true" /><span class="label">Typography</span></RouterLink></li>
      <li class="nav-item"><RouterLink class="nav-button" to="/color"><img class="icon" :src="ColorIcon" width="20" height="20" alt="" aria-hidden="true" /><span class="label">Color</span></RouterLink></li>
      <li class="nav-item"><RouterLink class="nav-button" to="/motion"><img class="icon" :src="MotionIcon" width="20" height="20" alt="" aria-hidden="true" /><span class="label">Motion</span></RouterLink></li>
      <li class="nav-item"><RouterLink class="nav-button" to="/in-use"><img class="icon" :src="InUseIcon" width="20" height="20" alt="" aria-hidden="true" /><span class="label">In-use</span></RouterLink></li>
      <li class="nav-item"><RouterLink class="nav-button" to="/partnerships"><img class="icon" :src="PartnershipsIcon" width="20" height="20" alt="" aria-hidden="true" /><span class="label">Partnerships</span></RouterLink></li>
      <li class="nav-item"><RouterLink class="nav-button" to="/sub-brands"><img class="icon" :src="SubBrandsIcon" width="20" height="20" alt="" aria-hidden="true" /><span class="label">Sub brands</span></RouterLink></li>
      <li class="nav-item"><RouterLink class="nav-button" to="/social-media"><img class="icon" :src="SocialMediaIcon" width="20" height="20" alt="" aria-hidden="true" /><span class="label">Social Media</span></RouterLink></li>
    </ul>
    <div class="nav-bottom">
      <button class="download-btn" aria-label="下载" @click="onDownload">
        <img class="icon" :src="DownloadIcon" width="20" height="20" alt="" aria-hidden="true" />
      </button>
    </div>
  </nav>
  
</template>

<script setup>
import { RouterLink } from 'vue-router'
import IntroductionIcon from '../assets/icons/Introduction.svg'
import MessagingIcon from '../assets/icons/Messaging.svg'
import CoreIdentifiersIcon from '../assets/icons/Core Identifiers.svg'
import TypographyIcon from '../assets/icons/Typography.svg'
import ColorIcon from '../assets/icons/color.svg'
import MotionIcon from '../assets/icons/Motion.svg'
import InUseIcon from '../assets/icons/In-use.svg'
import PartnershipsIcon from '../assets/icons/Partnerships.svg'
import SubBrandsIcon from '../assets/icons/Sub brands.svg'
import SocialMediaIcon from '../assets/icons/Social Media.svg'
import DownloadIcon from '../assets/icons/Download.svg'

const onDownload = () => {
  alert('下载占位：将触发下载（示例）')
}
</script>