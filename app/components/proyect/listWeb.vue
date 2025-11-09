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
import gitHub from '@/assets/img/png/github.png'
export default {
    data () {
        return {
            gitHub,
            proyect: [
                {
                    id: 0,
                    photo: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000,h_687/https://www.lluviadigital.com/wp-content/uploads/2020/02/e-commerce-que-es-Lluvia-Digital.jpg',
                    title: 'E-Commerce Plataform',
                    description: 'Una selección de mis trabajos recientes y proyectos destacados',
                    lenguaje: [
                        {id: 1, name: 'Vue'},
                        {id: 2, name: 'Nodejs'},
                        {id: 3, name: 'MySQL'},
                    ],
                    socialMedia: [
                        {id: 1, name: 'GitHub', link: 'https://github.com/Hugo14189811222003'}
                    ],
                    webSite: 'https://www.shopify.com/'
                },
                {
                    id: 0,
                    photo: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000,h_687/https://www.lluviadigital.com/wp-content/uploads/2020/02/e-commerce-que-es-Lluvia-Digital.jpg',
                    title: 'E-Commerce Plataform',
                    description: 'Una selección de mis trabajos recientes y proyectos destacados',
                    lenguaje: [
                        {id: 1, name: 'Vue'},
                        {id: 2, name: 'Nodejs'},
                        {id: 3, name: 'MySQL'},
                    ],
                    socialMedia: [
                        {id: 1, name: 'GitHub', link: 'https://github.com/Hugo14189811222003'}
                    ],
                    webSite: 'https://www.shopify.com/'
                },
                {
                    id: 0,
                    photo: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000,h_687/https://www.lluviadigital.com/wp-content/uploads/2020/02/e-commerce-que-es-Lluvia-Digital.jpg',
                    title: 'E-Commerce Plataform',
                    description: 'Una selección de mis trabajos recientes y proyectos destacados',
                    lenguaje: [
                        {id: 1, name: 'Vue'},
                        {id: 2, name: 'Nodejs'},
                        {id: 3, name: 'MySQL'},
                    ],
                    socialMedia: [
                        {id: 1, name: 'GitHub', link: 'https://github.com/Hugo14189811222003'}
                    ],
                    webSite: 'https://www.shopify.com/'
                },
                {
                    id: 0,
                    photo: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000,h_687/https://www.lluviadigital.com/wp-content/uploads/2020/02/e-commerce-que-es-Lluvia-Digital.jpg',
                    title: 'E-Commerce Plataform',
                    description: 'Una selección de mis trabajos recientes y proyectos destacados',
                    lenguaje: [
                        {id: 1, name: 'Vue'},
                        {id: 2, name: 'Nodejs'},
                        {id: 3, name: 'MySQL'},
                    ],
                    socialMedia: [
                        {id: 1, name: 'GitHub', link: 'https://github.com/Hugo14189811222003'}
                    ],
                    webSite: 'https://www.shopify.com/'
                },
                {
                    id: 0,
                    photo: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000,h_687/https://www.lluviadigital.com/wp-content/uploads/2020/02/e-commerce-que-es-Lluvia-Digital.jpg',
                    title: 'E-Commerce Plataform',
                    description: 'Una selección de mis trabajos recientes y proyectos destacados',
                    lenguaje: [
                        {id: 1, name: 'Vue'},
                        {id: 2, name: 'Nodejs'},
                        {id: 3, name: 'MySQL'},
                    ],
                    socialMedia: [
                        {id: 1, name: 'GitHub', link: 'https://github.com/Hugo14189811222003'}
                    ],
                    webSite: 'https://www.shopify.com/'
                },
                {
                    id: 0,
                    photo: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000,h_687/https://www.lluviadigital.com/wp-content/uploads/2020/02/e-commerce-que-es-Lluvia-Digital.jpg',
                    title: 'E-Commerce Plataform',
                    description: 'Una selección de mis trabajos recientes y proyectos destacados',
                    lenguaje: [
                        {id: 1, name: 'Vue'},
                        {id: 2, name: 'Nodejs'},
                        {id: 3, name: 'MySQL'},
                    ],
                    socialMedia: [
                        {id: 1, name: 'GitHub', link: 'https://github.com/Hugo14189811222003'}
                    ],
                    webSite: 'https://www.shopify.com/'
                },
                {
                    id: 0,
                    photo: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000,h_687/https://www.lluviadigital.com/wp-content/uploads/2020/02/e-commerce-que-es-Lluvia-Digital.jpg',
                    title: 'E-Commerce Plataform',
                    description: 'Una selección de mis trabajos recientes y proyectos destacados',
                    lenguaje: [
                        {id: 1, name: 'Vue'},
                        {id: 2, name: 'Nodejs'},
                        {id: 3, name: 'MySQL'},
                    ],
                    socialMedia: [
                        {id: 1, name: 'GitHub', link: 'https://github.com/Hugo14189811222003'}
                    ],
                    webSite: 'https://www.shopify.com/'
                }
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