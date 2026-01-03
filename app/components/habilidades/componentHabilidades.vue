<template>
    <div class="background">
        <div class="content">
            <h1>Habilidades</h1>
            <h2>Tecnologías y herramientas con las que trabajo día a día</h2>
            <div class="contentAbility">
                <div class="itemAbility" v-for="(categories, index) in skill.category" :key="index">
                    <h3>{{ categories.name }}</h3>
                    <div 
                        class="itemsContentAbility"
                        v-for="(items, index) in categories.technologies"
                        :key="index"
                        >
                    <div class="skill-header">
                        <span class="skill-name">{{ items.name }}</span>
                        <span class="skill-percent">{{ items.percent }}%</span>
                    </div>
                    <div class="skill-bar">
                        <div 
                        class="skill-progress" 
                        :style="{ width: items.percent + '%' }"
                        >
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="styleLoading" v-if="isLoading">Cargando{{ puntos }}</div>
        </div>
    </div>
</template>

<script>
import { useHabilidadesApi } from '@/composable/habilidades/useHabilidadesApi';
import { useHabilidadItemApi } from '@/composable/habilidades/habilidadItems/useHabilidadItemApi';
export default {
    data(){
        return {
            puntos: '',
            finallyInterval: null,
            skill: {
                category: []
            },
            isLoading: false
        }
    },
    async mounted() {
        await this.getSkill();
    },
    methods: {
        async getSkill() {
            try {
                const user = 2;
                this.isLoading = true
                const interval = setInterval(() => {
                    this.puntos = this.puntos.length < 3 ? this.puntos + "." : "";
                }, 500)
                this.finallyInterval = interval;
                /* Obteniendo la categoria de habilidades */ 
                const response = await useHabilidadesApi().getHabilidades();
                console.log("datos obtenidos de habilidades", response);
                /* habilidades de usuario */
                const userHabilidades = response.filter(item => item.id_usuario === user);
                console.log("datos obtenidos de habilidades de usuario", userHabilidades);
                /* Obteniendo todos los items de habilidad */
                const reponseItems = await useHabilidadItemApi().getHabilidadesItem();
                console.log("datos obtenidos de items de habilidad", reponseItems);
                /* Obteniendo los items de la habilidad especificas */
                this.skill.category = userHabilidades.map((habilidad) => {
                    return {
                        name: habilidad.titulo,
                        technologies: reponseItems.filter((item) => item.id_habilidad === habilidad.id).map((item) => {
                            return {
                                name: item.titulo,
                                percent: item.porcentaje
                            }
                        })
                    }
                })
                console.log("datos obtenidos de habilidades", this.skill);
            } catch (error){
                console.log('Problema al tratar de obtener el servidor', error);
            } finally {
                this.isLoading = false;
                clearInterval(this.finallyInterval);
            }
        }
    }
};
</script>

<style scoped>
@import '@/assets/css/styleHabilidades/desktop.css';
@import '@/assets/css/styleHabilidades/movil.css';
</style>