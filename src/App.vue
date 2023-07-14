<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SearchSpecializations from "./components/item/SearchSpecializations.vue";
export default {
    components: {
        SiteHeader,
        SiteMain,
        SiteFooter,
        SearchSpecializations,
    },
}
</script>

<template>
    <SiteHeader></SiteHeader>
    <SearchSpecializations class="container d-flex d-md-none flex-grow-1 mt-4"></SearchSpecializations>
    <router-view></router-view>
    <SiteFooter></SiteFooter>
</template>

<style lang="scss">
@use './assets/scss/partials/variables' as *;
</style>
