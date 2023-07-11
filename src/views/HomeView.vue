<script>
import SliderDoctor from "../components/item/SliderDoctor.vue";
export default {
    name: "HomeView",
    components: {
        SliderDoctor,
    },
};
</script>

<template>
    <section id="HomeView">
        <div class="container text-center">
            <h1 class="text-center align-middle py-5">HomeView</h1>

            <SliderDoctor></SliderDoctor>

        </div>
        <!-- /.container -->
    </section>
    <!-- /#HomeView -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>