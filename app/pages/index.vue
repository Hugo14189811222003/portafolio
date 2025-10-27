<template>
  <div class="contenidoPrincipal">
    <component-body />
    <component-info />
    <component-contact />
    <component-footer />
  </div>
</template>

<script>
import '~/assets/css/global.css'
import componentBody from '../app/components/home/componentBody.vue'
import ComponentInfo from '../app/components/home/componentInfo.vue'
import ComponentContact from '../app/components/home/componentContact.vue'
import ComponentFooter from '../app/components/home/componentFooter.vue'
export default {
  components: { componentBody, ComponentInfo, ComponentContact, ComponentFooter },
  data() {
    return {
    }
  }
}
</script>