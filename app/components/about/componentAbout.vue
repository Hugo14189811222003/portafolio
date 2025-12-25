<template>
    <div class="background">
        <div class="content">
            <div class="sobremi">
                <h1>Sobre Mí</h1>
                <div class="info" v-for="(item, index) in about" :key="index">
                    <h2>{{ item.titulo }}</h2>
                    <p>{{ item.descripcion }}</p>
                </div>
            </div>
            <div class="experienciaPersonal">
                <h1>Experiencia profesional</h1>
                <div class="contentInfoExperience" v-for="(item, index) in personal_experience" :key="index">
                    <h1>{{ item.titulo }}</h1>
                    <h2>{{ item.trabajo_anterior }}</h2>
                    <h3>{{ item.inicio_fin }}</h3>
                    <p>{{ item.informacion }}</p>
                </div>
            </div>
            <div class="education">
                <h1>Educación</h1>
                <div class="contentInfoEducation" v-for="(item, index) in education" :key="index">
                    <h1>{{ item.titulo }}</h1>
                    <h2>{{ item.universidad }}</h2>
                    <h3>{{ item.inicio_fin }}</h3>
                </div>
            </div>
        </div>
        <div v-if="loading" class="styleLoading">
            <h1>Cargando{{ puntos }}</h1>
        </div>
    </div>
</template>

<script>
import { useSobreMiApi } from '@/composable/sobreMI/useSobreMiApi';
import { useExperienciaApi } from '@/composable/experiencia/useExperienciaApi'
import { useEducacionApi } from '@/composable/educacion/useEducacionApi';
export default {
    async mounted () {
        this.getSobreMi();
    },
    methods: {
        async getSobreMi () {
            const user = 1;
            this.loading = true;
            this.intervalpunto = setInterval(() => {
                this.puntos = this.puntos.length < 3 ? this.puntos + "." : "";
            }, 300);
            try {
                // sobre mi
                const getSobreMi = await useSobreMiApi().getSobreMi();
                const sobreMiUser = getSobreMi.find((item) => Number(item.id_usuario) === Number(user));
                console.log("getSobreMi", sobreMiUser);
                this.about = [
                    {
                        ...sobreMiUser
                    }
                ]

                // experiencia
                const getExperiencia = await useExperienciaApi().getExperiencia();
                const experienciaUser = getExperiencia.find((item) => Number(item.id_usuario) === Number(user));
                console.log('Get experiencia de usuario: ', experienciaUser);
                this.personal_experience = [
                    {
                        ...experienciaUser
                    }
                ]

                // educacion
                const getEducacion = await useEducacionApi().getEducacion();
                const educacionUser = getEducacion.find((item) => Number(item.id_usuario) === Number(user));
                console.log('Get educacion de usuario: ', educacionUser);
                this.education = [
                    {
                        ...educacionUser
                    }
                ]
            } catch (error) {
                console.log('hubo un probema con el servicio: ', error.message);
            } finally {
                this.puntos = "";
                clearInterval(this.intervalpunto);
                this.loading = false;
            }
        }
    },
    data () {
        return{
            puntos: "",
            intervalpunto: null,
            loading: true,
            about: null,
            personal_experience: null,
            education: null
        }
    }
}
</script>
<style scoped>
@import '@/assets/css/styleAbout/desktop.css';
@import '@/assets/css/styleAbout/movil.css';
</style>