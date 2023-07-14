<script>
import SliderDoctor from "../components/item/SliderDoctor.vue";
import JumbotronSection from "../components/section/JumbotronSection.vue";
import ChiSiamoSection from "../components/section/ChiSiamoSection.vue";
export default {
    name: "HomeView",
    components: {
        SliderDoctor,
        JumbotronSection,
        ChiSiamoSection
    },
};
</script>

<template>
    <section id="HomeView">
        <div class="container text-center">
            <JumbotronSection></JumbotronSection>
            <SliderDoctor></SliderDoctor>
            <ChiSiamoSection></ChiSiamoSection>
        </div>  
        <!-- /.container -->
    </section>
    <!-- /#HomeView -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>