<template>
    <div class="gap-lenguaje">
        <div class="infoContent">
            <img :src="nodejsImg" alt="nodejs">
            <div class="infoText">
                <h2>Node js</h2>
                <p>Node.js es un entorno de ejecución de JavaScript que permite ejecutar código 
                    fuera del navegador, usando el motor V8 de Google Chrome. Está diseñado para 
                    crear aplicaciones rápidas y escalables, especialmente en el lado del servidor, 
                    gracias a su arquitectura basada en eventos y operaciones no bloqueantes, lo 
                    que lo hace ideal para manejar muchas conexiones simultáneas de forma eficiente.
                </p>
            </div>
        </div>
        <div class="infoContent">
            <img :src="vuejsImg" alt="vuejs">
            <div class="infoText">
                <h2>Vue js</h2>
                <p>Vue.js es un framework progresivo de JavaScript enfocado en la construcción de 
                    interfaces de usuario interactivas y reactivas. Se caracteriza por su facilidad 
                    de aprendizaje, su sintaxis sencilla y su capacidad de integrarse gradualmente 
                    en proyectos existentes, permitiendo desarrollar desde componentes pequeños 
                    hasta aplicaciones web completas de forma eficiente y organizada.
                </p>
            </div>
        </div>
        <div class="infoContent">
            <img :src="mysqlImg" alt="mysql">
            <div class="infoText">
                <h2>MySQL</h2>
                <p>MySQL es un sistema de gestión de bases de datos relacional de código abierto, 
                    ampliamente utilizado para aplicaciones web. Se basa en el lenguaje de consulta 
                    estructurado (SQL) y es conocido por su rendimiento, fiabilidad y facilidad de uso. 
                    MySQL es una opción popular para el almacenamiento de datos en aplicaciones de 
                    diversos tamaños, desde sitios web pequeños hasta grandes sistemas empresariales.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/css/quality.css';
</style>

<script>
import nodejsImg from '@/assets/img/png/nodejs.png';
import vuejsImg from '@/assets/img/png/vue.png';
import mysqlImg from '@/assets/img/png/mysql.webp';
export default {
    data() {
        return {
            nodejsImg,
            vuejsImg,
            mysqlImg
        }
    }
}
</script>