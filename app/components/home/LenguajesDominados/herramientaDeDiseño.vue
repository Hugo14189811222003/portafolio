<template>
    <div class="gap-lenguaje">
        <div class="infoContent">
            <img :src="photoshopjsImg" alt="photoshop">
            <div class="infoText">
                <h2>Photoshop</h2>
                <p>Photoshop es un software de edición de gráficos rasterizados que permite a los usuarios 
                    crear y modificar imágenes con una amplia variedad de herramientas y funciones. Es 
                    ampliamente utilizado en la industria del diseño gráfico, la fotografía y la creación 
                    de contenido digital, ofreciendo potentes capacidades de edición, composición y retoque.
                </p>
            </div>
        </div>
        <div class="infoContent">
            <img :src="coreldrawImg" alt="coreldraw">
            <div class="infoText">
                <h2>CorelDraw</h2>
                <p>CorelDraw es un software de diseño gráfico vectorial que permite crear ilustraciones, 
                    logotipos y otros gráficos de manera precisa y eficiente. Su interfaz intuitiva y 
                    herramientas potentes lo convierten en una opción popular entre diseñadores gráficos 
                    y artistas digitales.
                </p>
            </div>
        </div>
        <div class="infoContent">
            <img :src="illustratorImg" alt="illustrator">
            <div class="infoText">
                <h2>Illustrator</h2>
                <p>Illustrator es un software de diseño gráfico vectorial que permite crear ilustraciones, 
                    logotipos y otros gráficos de manera precisa y eficiente. Su interfaz intuitiva y 
                    herramientas potentes lo convierten en una opción popular entre diseñadores gráficos 
                    y artistas digitales.
                </p>
            </div>
        </div>
        <div class="infoContent">
            <img :src="figmaImg" alt="figma">
            <div class="infoText">
                <h2>Figma</h2>
                <p>Figma es una herramienta de diseño colaborativo basada en la nube que permite a los equipos 
                    crear, prototipar y colaborar en diseños de interfaces de usuario en tiempo real. Su 
                    enfoque en la colaboración y la facilidad de uso la han convertido en una opción popular 
                    entre diseñadores y equipos de desarrollo.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/css/quality.css';
</style>

<script>
import photoshopjsImg from '@/assets/img/png/photoshop.jpg';
import coreldrawImg from '@/assets/img/png/coreldraw.png';
import illustratorImg from '@/assets/img/png/illustrator.webp';
import figmaImg from '@/assets/img/png/figma.png';
export default {
    data() {
        return {
            photoshopjsImg,
            coreldrawImg,
            illustratorImg,
            figmaImg
        }
    }
}
</script>