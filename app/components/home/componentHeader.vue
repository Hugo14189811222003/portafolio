<template>
  <header class="header-content">

    <!-- Logo -->
    <div class="logoDev">
      <nuxt-link to="/" @click="itemHeaderReset" aria-label="Ir al inicio">
        <img :src="logoHugo" alt="Logo Hugo Dev" :width="40" :height="40" />
      </nuxt-link>
    </div>

    <!-- Botón hamburguesa (móvil) -->
    <button
      class="menu-toggle"
      :class="{ open: menuAbierto }"
      @click="toggleMenu"
      :aria-expanded="menuAbierto"
      :aria-label="menuAbierto ? 'Cerrar menú' : 'Abrir menú'"
    >
      <span :class="{ open: menuAbierto }"></span>
      <span :class="{ open: menuAbierto }"></span>
      <span :class="{ open: menuAbierto }"></span>
    </button>

    <!-- Navegación -->
    <nav class="headersNavigation" :class="{ open: menuAbierto }" aria-label="Navegación principal">
      <ul>
        <li
          v-for="item in menu"
          :key="item.id"
          :class="{ active: activo === item.id }"
          @click="seleccionar(item.id)"
        >
          <nuxt-link :to="item.id">{{ item.text }}</nuxt-link>
        </li>
      </ul>
    </nav>

    <!-- Overlay para cerrar el menú en móvil -->
    <div
      v-if="menuAbierto"
      class="menu-overlay"
      @click="toggleMenu"
      aria-hidden="true"
    />

  </header>
</template>

<script setup>
import logoHugo from '@/assets/img/svg/Vector.svg'

const route = useRoute()

const activo     = ref(route.path)
const menuAbierto = ref(false)

const menu = [
  { id: '/',           text: 'Inicio' },
  { id: '/sobreMi',    text: 'Sobre Mí' },
  { id: '/proyect',    text: 'Proyectos' },
  { id: '/habilidades',text: 'Habilidades' },
  { id: '/contacto',   text: 'Contacto' }
]

// Actualiza el item activo al cambiar de ruta
watch(() => route.path, (path) => {
  activo.value = path
})

function toggleMenu() {
  menuAbierto.value = !menuAbierto.value
}

function seleccionar(id) {
  activo.value = id
  menuAbierto.value = false
}

function itemHeaderReset() {
  activo.value = '/'
  menuAbierto.value = false
}
</script>

<style scoped>
@import '@/assets/css/styleHeader.css';
</style>