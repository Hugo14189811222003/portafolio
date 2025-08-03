<template>
  <div class="heig">
    <div class="content-center">
    <section class="infoContent">
      <img :src="logoHugo" alt="Logo" :width="tamañoDeAnchoLogoHZ"/>
      <h1 id="title">¡Hola!, mi nombre es Hugo</h1>
      <h2 id="subtitle">Desarrollador/Diseñador</h2>
      <div class="button-gap">
        <button class="StyleOfButton" id="buttomBack">Empezar</button>
        <button class="StyleOfButton" id="buttomOuline">Sobre mí</button>
      </div>
      <img :src="ilustracionFlotacion" alt="ilustración1" :width="tamañoDeIlustracion1" class="ilustracionFlotando"/>
    </section>
  </div>
  </div>
</template>

<script>
import '@/assets/css/StyleBody.css'
import logoHugo from '@/assets/img/svg/Vector.svg'
import ilustracionFlotacion from '@/assets/img/svg/ilustraciónFlotandoPantalla.svg'
const tamañoDeAnchoLogoHZ = 70;
const tamañoDeIlustracion1 = 300;
export default {
  data() {
    return {
      logoHugo,
      ilustracionFlotacion,
      tamañoDeAnchoLogoHZ,
      tamañoDeIlustracion1
    }
  }
}
</script>