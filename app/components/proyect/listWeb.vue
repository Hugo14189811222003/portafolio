<template>
  <div v-if="proyect.length > 0" class="itemsProyect">
    <div class="item" v-for="item in proyect" :key="item.id">
      <div class="limitImg">
        <img :src="item.photo" :alt="item.title" />
      </div>
      <div class="paddingContent">
        <h1>{{ item.title }}</h1>
        <p>{{ item.description }}</p>
        <div class="lenguage" v-if="item.lenguaje.length">
          <ul>
            <li v-for="(tech, index) in item.lenguaje" :key="index">{{ tech }}</li>
          </ul>
        </div>
        <div v-for="(itemLink, index) in item.socialMedia" :key="index" class="linkButton">
          <button class="githubStyle" @click="openLink(itemLink.link)">
            <img :src="behanceImg" alt="" />
            <span>UX/UI</span>
          </button>
          <button class="demoStyle" @click="openLink(item.webSite)">Demo</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="noProyects">
    <p>No hay proyectos por mostrar</p>
  </div>
</template>

<script setup>
import behanceImg from '@/assets/img/png/behance.webp'
defineProps({ proyect: { type: Array, default: () => [] } })
function openLink(url) {
  if (url) window.open(url, '_blank')
}
</script>