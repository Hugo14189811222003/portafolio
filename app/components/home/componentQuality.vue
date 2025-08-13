<template>
    <div class="ability-container">
        <div class="title-content">
            <h1 class="ability-title">Habilidades</h1>
            <div class="ability-description">
                <p>Las habilidades que se presentan en esta sección, son el resultado de un proceso de aprendizaje continuo y dedicación.
                A lo largo del tiempo, he adquirido conocimientos y competencias que me permiten enfrentar diversos desafíos de manera efectiva.</p>
                <p>Estoy comprometido con la mejora continua y la excelencia en todo lo que hago. 
                Durante mi trayectoria, he aprendido a adaptarme a diferentes situaciones y a trabajar en equipo para lograr objetivos comunes.
                </p>
            </div>
            <div class="line-content"></div>
            <div class="ability-list">
                <div class="lenguajeOfProgramacion">
                    <h1>Lenguajes de programación y SQL</h1>
                    <lenguaje-od-programation />
                    <h1>Herramientas de diseño</h1>
                    <herramienta-de-diseño />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import nodejsImg from '@/assets/img/png/nodejs.png';
import herramientaDeDiseño from './LenguajesDominados/herramientaDeDiseño.vue';
import lenguajeOdProgramation from './LenguajesDominados/lenguajeOdProgramation.vue';
export default {
    components: {lenguajeOdProgramation, herramientaDeDiseño},
    data() {
        return {
            nodejsImg
        }
    }
}
</script>

<style scoped>
@import '@/assets/css/quality.css';
</style>