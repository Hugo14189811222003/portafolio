<template>
  <main class="backgroundBody">
    <section class="infoContent" aria-labelledby="titulo-principal">

      <div class="flex-text">
        <div class="tituloPrincipal">
          <h1 id="titulo-principal">Desarrollador</h1>
          <span class="textGradient" aria-hidden="true">Full Stack</span>
        </div>
      </div>

      <p class="description">
        Transformando ideas en experiencias digitales excepcionales con
        código limpio y marcas fuertes
      </p>

      <div class="btn">
        <nuxt-link to="/proyect" class="verProyecto">
          <span>Ver proyectos</span>
        </nuxt-link>
        <nuxt-link to="/contacto" class="contacto">
          <span>Contactar</span>
        </nuxt-link>
      </div>

    </section>
  </main>
</template>

<script setup>
</script>

<style scoped>
@import '@/assets/css/StyleBody.css';
</style>