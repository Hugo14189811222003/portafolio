<template>
  <div class="infoContent">
    <h2>{{ title }}</h2>
    <div class="info-items">
      <div
      v-for="item in info"
      :key="item.id"
      class="info-item"
      >
      <div class="info-icon">
        <img :src="item.icon" :alt="item.title" :width="50"/>
      </div>
      <div class="info-text">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import BrandIcon from '@/assets/img/svg/brand.svg'
import UiuxIcon from '@/assets/img/svg/uiux.svg'
import DevIcon from '@/assets/img/svg/dev.svg'
export default {
  data() {
    return {
      title: '¿Qué hago?',
      BrandIcon,
      UiuxIcon,
      DevIcon,
      info: [
        {id: 1, icon: DevIcon,  title: 'Desarrollo Web', description: 'Me encargo de poder crear paguina web completamente intuitiva y profesional, con diseño completamente formales.'},
        {id: 2, icon: UiuxIcon, title: 'UI/UX Design', description: 'Hago prototipos increíbles de alta gama, diseño web intuitiva y especificas para diferentes tipos de nichos.'},
        {id: 3, icon: BrandIcon, title: 'Creación de marcas(Brands)', description: 'Me especializo en la creación de marcas para diferentes tipos de negocios, creo toda la identidad corporativo de la marca.'}
      ]
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/styleInfo.css';
</style>