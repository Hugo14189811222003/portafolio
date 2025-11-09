<template>
  <div class="backgroundBody">
    <section class="infoContent">
      <div class="flex-text">
        <div class="tituloPrincipal">
          <p id="title">Desarrollador</p>
          <p class="textGradient">Full Stack</p>
        </div>
      </div>
      <p class="description">
        Transformando ideas en experiencias digitales excepcionales con <br/> código limpio y marcas fuertes
      </p>
      <div class="btn">
        <nuxt-link to="/sobreMi"><button class="verProyecto"><span>Ver proyectos</span></button></nuxt-link>
        <button class="contacto"><span>Contactar</span></button>
      </div>
    </section>
  </div>
</template>

<script>
import {RouterView, RouterLink} from 'vue-router'
export default {
  components: {
    RouterLink,
    RouterView
  },
  data() {
    return {
    }
  },
  methods: {
    goHomeCompleted () {
      console.log('ir a otra pagina');
      this.$router.push({ name: 'homeCompleted'})
    }
  }
}
</script>
<style scoped>
@import '@/assets/css/StyleBody.css';
</style>