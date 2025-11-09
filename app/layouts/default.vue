<template>
    <div>
        <component-header />
        <NuxtPage />
        <component-footer />
    </div>
</template>

<script>
import componentFooter from '~/components/home/componentFooter.vue';
import ComponentHeader from '~/components/home/componentHeader.vue';
export default {
    components: { ComponentHeader, componentFooter },
    data () {
        return{

        }
    }
}
</script>