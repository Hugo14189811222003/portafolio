<template>
  <div class="background">
    <main class="content">
      <h1>Habilidades</h1>
      <p>Tecnologías y herramientas con las que trabajo día a día</p>

      <div v-if="pending" class="styleLoading">Cargando...</div>
      <div v-else-if="error">Error al cargar habilidades.</div>

      <div v-else class="contentAbility">
        <section
          class="itemAbility"
          v-for="(cat, index) in categorias"
          :key="index"
          :aria-label="cat.name"
        >
          <h2>{{ cat.name }}</h2>
          <ul>
            <li
              class="itemsContentAbility"
              v-for="(item, i) in cat.technologies"
              :key="i"
            >
              <div class="skill-header">
                <span class="skill-name">{{ item.name }}</span>
                <span class="skill-percent" aria-label="`${item.percent} por ciento`">
                  {{ item.percent }}%
                </span>
              </div>
              <div
                class="skill-bar"
                role="progressbar"
                :aria-valuenow="item.percent"
                aria-valuemin="0"
                aria-valuemax="100"
                :aria-label="`Nivel de ${item.name}`"
              >
                <div
                  class="skill-progress"
                  :style="{ width: item.percent + '%' }"
                />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
const USER = 2

// ✅ 2 requests en paralelo con caché
const [
  { data: habilidades, pending: p1, error: e1 },
  { data: items,       pending: p2, error: e2 }
] = await Promise.all([
  useHabilidadesApi().getHabilidades(USER),
  useHabilidadItemApi().getHabilidadesItem()
])

const pending = computed(() => p1.value || p2.value)
const error   = computed(() => e1.value || e2.value)

// Mapeo reactivo de categorías con sus items
const categorias = computed(() =>
  (habilidades.value ?? []).map(hab => ({
    name: hab.titulo,
    technologies: (items.value ?? [])
      .filter(item => item.id_habilidad === hab.id)
      .map(item => ({ name: item.titulo, percent: item.porcentaje }))
  }))
)
</script>

<style scoped>
@import '@/assets/css/styleHabilidades/desktop.css';
@import '@/assets/css/styleHabilidades/movil.css';
</style>