<script>
import JumbotroSection from "./../components/section/JumbotronSection.vue";
import SiteMain from "./../components/SiteMain.vue";
export default {
    name: "HomeView",
    components: { JumbotroSection, SiteMain, },
};
</script>

<template>
    <SiteMain>
    </SiteMain>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>