<template>
    <div class="contentFooterContact">
        <div class="contentFooterItems">
            <div class="itemFooter">
                <h1>DevPortafolio-Hugo</h1>
                <p>Desarrollador Full Stack y creador <br> de marcas poderosas.</p>
            </div>
            <div class="itemLinks">
                <h1>Enlaces rapidos</h1>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#sobre-mi">Sobre mí</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </div>
            <div class="itemImg">
                <h1>Redes de contacto</h1>
                <div class="itemImgItem">
                    <a href="https://github.com/Hugo14189811222003/" target="_blank"><img :src="GitHubIcon" alt="github.com"></a>
                    <a href="https://www.facebook.com/hugo.arcos.403811/" target="_blank"><img :src="FacebookIcon" alt="facebook.com"></a>
                    <a href="https://www.instagram.com/hugoarcos_haz/" target="_blank"><img :src="InstagramIcon" alt="instagram.com"></a>
                    <a href="https://x.com/Hugo2985457646/" target="_blank"><img :src="Xicon" alt="x.com"></a>
                </div>
            </div>
        </div>
        <div class="centerLicense">
            <p>© 2025 Hugo A. Todos los derechos reservados.</p>
        </div>
    </div>
</template>

<script>
import GitHubIcon from '@/assets/img/png/github.png'
import FacebookIcon from '@/assets/img/png/facebook.png'
import InstagramIcon from '@/assets/img/png/instagram.png'
import Xicon from '@/assets/img/png/x.png'
export default {
    data () {
        return {
            GitHubIcon,
            FacebookIcon,
            InstagramIcon,
            Xicon
        }
    }
}
</script>

<style scoped>
@import '@/assets/css/styleFooter.css';
</style>