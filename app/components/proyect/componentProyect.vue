<template>
    <div class="background">
        <h1>Proyectos</h1>
        <h2>Una selección de mis trabajos recientes y proyectos destacados</h2>
        <div class="select">
            <div 
            v-for="(item, index) in itemSelect" 
            :key="index" 
            class="itemSelect" 
            :class="{active: activeSelect === index}"
            @click="eventActive(index)"
            >
                <span>{{ item }}</span>
            </div>
        </div>
        <transition name="slider" mode="out-in">
            <div :key="activeSelect">
                <ListWeb v-if="activeSelect == 0" />
                <ListBrand v-else />
            </div>
        </transition>
    </div>
</template>

<script>
import ListWeb from './listWeb.vue';
import ListBrand from './listBrand.vue';
export default {
    components: {
        ListWeb,
        ListBrand
    },
    data () {
        return {
            activeSelect: 0,
            itemSelect: [
                'Paginas web',
                'Marcas(Branding)'
            ],
        }
    },
    methods: {
        eventActive(index) {
            console.log(index);
            this.activeSelect = index;
        }
    }
}
</script>

<style scoped>
@import '@/assets/css/styleProyect/desktop.css';
@import '@/assets/css/styleProyect/movil.css';
</style>