<template>
    <div class="background">
        <div class="content">
            <div class="sobremi">
                <h1>Sobre Mí</h1>
                <div class="info" v-for="(item, index) in about" :key="index">
                    <h2>{{ item.subtitle }}</h2>
                    <p>{{ item.paragrath }}</p>
                </div>
            </div>
            <div class="experienciaPersonal">
                <h1>Experiencia profesional</h1>
                <div class="contentInfoExperience" v-for="(item, index) in personal_experience" :key="index">
                    <h1>{{ item.title }}</h1>
                    <h2>{{ item.subtitle }}</h2>
                    <h3>{{ item.date }}</h3>
                    <p>{{ item.paragrath }}</p>
                </div>
            </div>
            <div class="education">
                <h1>Educación</h1>
                <div class="contentInfoEducation" v-for="(item, index) in education" :key="index">
                    <h1>{{ item.title }}</h1>
                    <h2>{{ item.subtitle }}</h2>
                    <h3>{{ item.date }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return{
            about: [
                {subtitle: 'Development', paragrath: 'Soy un desarrollador full stack apasionado. Me especializo en Vue, React, y tecnologías backend escalables. Mi objetivo es crear productos digitales que no solo funcionen perfectamente, sino que también proporcionen experiencias excepcionales a los usuarios'},
                {subtitle: 'Diseño de marcas', paragrath: 'Soy una persona apasionada en crear marcas fuertes y una identidad corporativa destacable, con la cual no solo es un logo, sino la forma como las personas podría percibirte(papelería corporativa, colores, voz, etc). '}
            ],
            personal_experience: [
                {title: 'Junior Full Stack Developer', subtitle: 'Paramq', date: '2025 - Presente', paragrath: 'Trabajando en el desarrollo web en la área del Front-End y diseñador UI/UX con tecnología de Nuxt.js, Vue.js, Node.js y Ionic.'},
                {title: 'Senior en diseño grafico', subtitle: 'Lavza', date: '2024 al 2025', paragrath: 'Fuí encargado en la área creativa de diseño para camisas deportivas y de cualquier otro nicho, manejando directamente herramientas de diseño avanzado como CorelDRAW para la realizacion de los vectores imprimibles, Photoshop para los mockups avanzados. De igual forma maneje maquinaria pesada como plotters para impresión. '},
            ],
            education: [
                {title: 'Ingeniería en desarrollo de software', subtitle: 'Universidad Tecnológica Metropolitana', date: 'Aun en proceso'}
            ]
        }
    }
}
</script>
<style scoped>
@import '@/assets/css/styleAbout/desktop.css';
@import '@/assets/css/styleAbout/movil.css';
</style>