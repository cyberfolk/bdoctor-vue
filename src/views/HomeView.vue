<script>
import SearchSpecializations from '../components/item/SearchSpecializations.vue';
import SliderDoctor from "../components/item/SliderDoctor.vue";
export default {
    name: "HomeView",
    components: {
        SearchSpecializations,
        SliderDoctor
    },
    data() {
        return {
            slugs: ['andrea1', 'daniele2', 'martina3', 'riccardo4', 'nicola5']
        };
    },
};
</script>

<template>
    <section id="HomeView">
        <div class="container text-center">
            <h1 class="text-center align-middle py-5">HomeView</h1>

            <SliderDoctor></SliderDoctor>

            <!--<div class="pb-5 d-flex gap-3 justify-content-center">
                <div v-for="slug in slugs" class="">
                    <router-link :to="{ name: 'doctor', params: { slug: slug } }" class="btn btn-primary">Info Doctor: {{ slug }}</router-link>
                </div>
            </div> -->
            <!-- /.d-flex -->

        </div>
        <!-- /.container -->
    </section>
    <!-- section search -->
    <SearchSpecializations></SearchSpecializations>
    <!-- /#HomeView -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>