<template>
  <div class="contenidoPrincipal">
    <component-body />
    <component-info />
    <component-quality />
  </div>
</template>

<script>
import '~/assets/css/global.css'
import componentBody from '../app/components/home/componentBody.vue'
import ComponentInfo from '../app/components/home/componentInfo.vue'
import ComponentQuality from '../app/components/home/componentQuality.vue'
export default {
  components: { componentBody, ComponentInfo, ComponentQuality },
  data() {
    return {
    }
  }
}
</script>