<template>
  <div class="contenidoPrincipal">
    <component-body />
    <component-info />
  </div>
</template>

<script>
import '~/assets/css/global.css'
import componentBody from './components/home/componentBody.vue'
import ComponentInfo from './components/home/componentInfo.vue'
export default {
  components: { componentBody, ComponentInfo },
  data() {
    return {
    }
  }
}
</script>