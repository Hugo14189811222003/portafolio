<template>
  <div class="background">
    <div v-if="pending" class="styleLoading">Cargando...</div>
    <div v-else-if="error">Error al cargar los datos.</div>

    <main v-else class="content">

      <section class="sobremi">
        <h1>Sobre Mí</h1>
        <article class="info" v-for="(item, index) in sobreMi" :key="index">
          <h2>{{ item.titulo }}</h2>
          <p>{{ item.descripcion }}</p>
        </article>
      </section>

      <section class="experienciaPersonal">
        <h2>Experiencia profesional</h2>
        <ul>
          <li class="contentInfoExperience" v-for="(item, index) in experiencia" :key="index">
            <article>
              <h3>{{ item.titulo }}</h3>
              <h4>{{ item.trabajo_anterior }}</h4>
              <time>{{ item.inicio_fin }}</time>
              <p>{{ item.informacion }}</p>
            </article>
          </li>
        </ul>
      </section>

      <section class="education">
        <h2>Educación</h2>
        <ul>
          <li class="contentInfoEducation" v-for="(item, index) in educacion" :key="index">
            <article>
              <h3>{{ item.titulo }}</h3>
              <h4>{{ item.universidad }}</h4>
              <time>{{ item.inicio_fin }}</time>
            </article>
          </li>
        </ul>
      </section>

    </main>
  </div>
</template>

<script setup>
const USER = 2

// 3 requests en paralelo con caché automático
const [
    { data: sobreMi,    pending: p1, error: e1 },
    { data: experiencia, pending: p2, error: e2 },
    { data: educacion,  pending: p3, error: e3 }
] = await Promise.all([
    useSobreMiApi().getSobreMi(USER),
    useExperienciaApi().getExperiencia(USER),
    useEducacionApi().getEducacion(USER),
])

const pending = computed(() => p1.value || p2.value || p3.value)
const error   = computed(() => e1.value || e2.value || e3.value)
</script>

<style scoped>
@import '@/assets/css/styleAbout/desktop.css';
@import '@/assets/css/styleAbout/movil.css';
</style>