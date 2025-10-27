<template>
    <div>
        <component-header />
        <NuxtPage />
    </div>
</template>

<script>
import ComponentHeader from '~/components/home/componentHeader.vue';
export default {
    components: { ComponentHeader },
    data () {
        return{

        }
    }
}
</script>