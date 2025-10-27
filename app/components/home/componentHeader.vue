<template>
    <div class="header-content">
        <div class="logoDev">
            <a href="#inicio"><img :src="logoHugo" alt="logoHugo" :width="40"/></a>
        </div>
        <!--Boton hamburguesa (movil)-->
        <button class="menu-toggle" @click="toggleMenu">
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
                        <a :href="item.href">{{ item.text }}</a>
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
        activo: 'inicio',
        menuAbierto: false,
        menu: [
            {id: 'inicio', href: '#inicio', text: 'Inicio'},
            {id: 'sobre-mi', href: '#sobre-mi', text: 'Sobre Mí'},
            {id: 'proyectos', href: '#proyectos', text: 'Proyectos'},
            {id: 'habilidades', href: '#habilidades', text: 'Habilidades'},
            {id: 'contactos', href: '#contactos', text: 'Contactos'}
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
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/styleHeader.css';
</style>