<template>
    <div class="header-content">
        <div class="logoDev">
            <nuxt-link to="/" @click="itemHeaderReset"><img :src="logoHugo" alt="logoHugo" :width="40"/></nuxt-link>
        </div>
        <!--Boton hamburguesa (movil)-->
        <button class="menu-toggle" :class="{ open: menuAbierto }" @click="toggleMenu">
            <span :class="{ open: menuAbierto }"></span>
            <span :class="{ open: menuAbierto }"></span>
            <span :class="{ open: menuAbierto }"></span>
        </button>
        <aside class="headersNavigation" :class="{ open: menuAbierto }">
            <nav>
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
        </aside>
    </div>
</template>

<script>
import logoHugo from '@/assets/img/svg/Vector.svg'
export default {
  data() {
    return {
        logoHugo,
        activo: '/',
        menuAbierto: false,
        menu: [
            {id: '/', text: 'Inicio'},
            {id: '/sobreMi', text: 'Sobre Mí'},
            {id: '/proyect', text: 'Proyectos'},
            {id: '/habilidades', text: 'Habilidades'},
            {id: '/contactos', text: 'Contactos'}
        ]
    }
  },
  methods: {
    toggleMenu ( ) {
        this.menuAbierto = !this.menuAbierto
    },
    seleccionar (id) {
        this.activo = id;
        this.menuAbierto = false;
    },
    itemHeaderReset() {
        this.activo = '/';
        this.menuAbierto = false;
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/styleHeader.css';
</style>