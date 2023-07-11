<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
export default {
    components: {
        SiteHeader,
        SiteMain,
        SiteFooter,
    },
}
</script>

<template>
    <SiteHeader></SiteHeader>
    <router-view></router-view>
    <SiteFooter></SiteFooter>
</template>

<style lang="scss">
@use './assets/scss/partials/variables' as *;
</style>
