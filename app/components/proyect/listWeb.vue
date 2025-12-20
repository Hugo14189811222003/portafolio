<template>
    <div v-if="proyect.length > 0" class="itemsProyect">
            <div class="item" v-for="item in proyect" :key="item.id">
                <img :src="item.photo" :alt="item.title" />
                <div class="paddingContent">
                    <h1>{{ item.title }}</h1>
                    <p>{{ item.description }}</p>
                    <div class="lenguage">
                        <ul>
                            <li v-for="(item, lang) in item.lenguaje" :key="lang">
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                    <div v-for="(itemLink, index) in item.socialMedia" :key="index" class="linkButton">
                        <button class="githubStyle" @click="openLink(itemLink.link)">
                                <img :src="gitHub" alt="gitHub">
                                <span>GitHub</span>
                        </button>
                        <button class="demoStyle" @click="openDemo(item.webSite)">Demo</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="noProyects">
            <p>No hay proyectos por mostrar</p>
        </div>
</template>

<script>
import webHugo from '@/assets/img/png/portafolioWeb.png'
import gitHub from '@/assets/img/png/github.png'
export default {
    data () {
        return {
            gitHub,
            proyect: [
                {
                    id: 0,
                    photo: webHugo,
                    title: 'Portafolio Web',
                    description: 'Portafolio web creado con Nuxt.js de Vue.js',
                    lenguaje: [
                        {id: 1, name: 'Nuxt.js'},
                        {id: 2, name: 'Resend'},
                        {id:4, name: 'postgreSQL'},
                        {id:5, name: 'Render'},
                        {id:6, name: 'Vercel'},
                        {id:7, name: 'Cloudinary'}
                    ],
                    socialMedia: [
                        {id: 1, name: 'GitHub', link: 'https://github.com/Hugo14189811222003'}
                    ],
                    webSite: 'https://portafolio-hugodev.vercel.app/'
                },
            ]
        }
    },
    methods: {
        openLink(url) {
            if(url) window.open(url, "_blank");
        },
        openDemo(url) {
            if(url) window.open(url, "_blank");
        }
    }
}
</script>

<style scoped>
@import '@/assets/css/styleProyect/desktop.css';
@import '@/assets/css/styleProyect/movil.css';
</style>