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
            <li v-for="(tech, index) in item.lenguaje" :key="index">
              {{ tech }}
            </li>
          </ul>
        </div>
        <div v-for="(itemLink, index) in item.socialMedia" :key="index" class="linkButton">
          <button class="githubStyle" @click="openLink(itemLink.link)">
            <img :src="gitHub" alt="gitHub">
            <span>GitHub</span>
          </button>
          <button class="demoStyle" @click="openDemo(item.webSite)">Demo</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="noProyects">
    <p>No hay proyectos por mostrar</p>
  </div>
</template>

<script>
import gitHub from '@/assets/img/png/github.png'

export default {
  props: {
    proyect: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      gitHub
    }
  },
  methods: {
    openLink(url) {
      if(url) window.open(url, "_blank");
    },
    openDemo(url) {
      if(url) window.open(url, "_blank");
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/styleProyect/desktop.css';
@import '@/assets/css/styleProyect/movil.css';
</style>
