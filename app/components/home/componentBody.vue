<template>
  <main class="backgroundBody">
    <section class="infoContent" aria-labelledby="titulo-principal">

      <div class="headline">
        <p class="line-dev" id="titulo-principal">Desarrollador</p>
        <p class="line-fs textGradient">Full Stack</p>

        <div class="divider-wrap" aria-hidden="true">
          <span class="divider-line"></span>
          <span class="divider-label">&amp; también</span>
          <span class="divider-line"></span>
        </div>

        <p class="line-dis">Diseñador</p>
        <p class="line-graf textGradient">Gráfico</p>
        <span class="raya" aria-hidden="true"></span>
      </div>

      <p class="description">
        Transformando ideas en experiencias digitales excepcionales con
        código limpio y marcas fuertes
      </p>

      <div class="btn">
        <nuxt-link to="/proyect" class="verProyecto">
          <span>Ver proyectos</span>
        </nuxt-link>
        <nuxt-link to="/contacto" class="contacto">Contactar</nuxt-link>
      </div>

    </section>
  </main>
</template>

<script setup>
</script>

<style scoped>
@import '@/assets/css/StyleBody.css';
</style>