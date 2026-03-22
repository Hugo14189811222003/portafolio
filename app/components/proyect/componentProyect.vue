<template>
  <div class="background">
    <h1>Proyectos</h1>
    <h2>Una selección de mis trabajos recientes y proyectos destacados</h2>

    <div class="select">
      <div
        v-for="(item, index) in itemSelect" :key="index"
        class="itemSelect"
        :class="{ active: activeSelect === index }"
        @click="activeSelect = index"
      >
        <span>{{ item }}</span>
      </div>
    </div>

    <div v-if="pending" class="styleLoading">Cargando...</div>
    <div v-else-if="error">Error al cargar proyectos.</div>

    <transition v-else name="slider" mode="out-in">
      <div :key="activeSelect">
        <ProyectListWeb   v-if="activeSelect === 0" :proyect="webProjects" />
        <ProyectListBrand v-else                    :proyect="brandProjects" />
      </div>
    </transition>
  </div>
</template>

<script setup>
const USER = 2
const activeSelect = ref(0)
const itemSelect   = ['Paginas web', 'Marcas(Branding)']

// ✅ 3 requests en paralelo — useAsyncData en el root del setup
const [
  { data: proyectos, pending: p1, error: e1 },
  { data: webs,      pending: p2, error: e2 },
  { data: marcas,    pending: p3, error: e3 }
] = await Promise.all([
  useProyectoApi().getProyecto(),
  useWebApi().getWeb(),
  useMarcaApi().getMarca()
])

const pending = computed(() => p1.value || p2.value || p3.value)
const error   = computed(() => e1.value || e2.value || e3.value)

// ✅ Tecnologías: useAsyncData en root del setup, una key por proyecto
// Primero obtenemos todos los IDs de proyectos del usuario
const userProyectos = computed(() =>
  (proyectos.value ?? []).filter(p => Number(p.id_usuario) === USER)
)

// Llamamos useAsyncData por cada proyecto en el root del setup
// No podemos hacerlo dentro de una función — tiene que ser aquí
const tecnologiasPorProyecto = ref({})

// Cargamos las tecnologías de todos los proyectos de una vez
const { data: todasLasTecnologias } = await useAsyncData(
  'todas-tecnologias-proyectos',
  async () => {
    const ids = (proyectos.value ?? [])
      .filter(p => Number(p.id_usuario) === USER)
      .map(p => p.id)

    // $fetch directo aquí — estamos dentro de useAsyncData, está permitido
    const results = await Promise.all(
      ids.map(id =>
        $fetch(`/proyectos/${id}/tecnologias`, {
          baseURL: useRuntimeConfig().public.apiUrl
        }).then(techs => ({ id, techs }))
      )
    )

    // Convertimos a objeto { [id_proyecto]: [tecnologias] }
    return Object.fromEntries(results.map(r => [r.id, r.techs]))
  }
)

// Función de mapeo pura — sin llamadas a composables, solo transforma datos
function mapProjects(projectList, details, type) {
  return projectList.flatMap(proyecto => {
    const techTags = (todasLasTecnologias.value?.[proyecto.id] ?? []).map(t => t.titulo)
    const related  = (details ?? []).filter(d => Number(d.id_proyecto) === Number(proyecto.id))

    return related.map(detail => ({
      id:          detail.id,
      photo:       detail.img ?? '',
      title:       detail.titulo,
      description: detail.descripcion,
      webSite:     detail.link_demo,
      socialMedia: [{ link: type === 'branding' ? detail.link_behance : detail.link_github }],
      lenguaje:    techTags
    }))
  })
}

// Computed reactivos — se recalculan automáticamente si cambian los datos
const webProjects = computed(() =>
  mapProjects(
    userProyectos.value.filter(p => p.tipo === 'paginas web'),
    webs.value ?? [],
    'paginas web'
  )
)

const brandProjects = computed(() =>
  mapProjects(
    userProyectos.value.filter(p => p.tipo === 'branding'),
    marcas.value ?? [],
    'branding'
  )
)

// DEBUG TEMPORAL — borra esto después de encontrar el problema
watchEffect(() => {
  console.log('=== DEBUG PROYECTOS ===')
  console.log('proyectos raw:', proyectos.value)
  console.log('webs raw:', webs.value)
  console.log('marcas raw:', marcas.value)
  console.log('userProyectos:', userProyectos.value)
  console.log('todasLasTecnologias:', todasLasTecnologias.value)
  console.log('webProjects:', webProjects.value)
  console.log('brandProjects:', brandProjects.value)
})
</script>

<style>
@import '@/assets/css/styleProyect/desktop.css';
@import '@/assets/css/styleProyect/movil.css';
</style>