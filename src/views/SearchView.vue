<script>
import CardDoctor from "./../components/item/CardDoctor.vue";
import SearchSpecializations from '../components/item/SearchSpecializations.vue';
import { state } from "../state";
export default {
    name: "SearchView",
    components: { CardDoctor, SearchSpecializations },
    data() {
        return { state };
    },
};
</script>

<template>
    <section id="SearchView">
        <div class="container">

            <div class="d-flex my-3">

                <!-- avgVote -->
                <div class="input-group me-2">
                    <div class="input-group-text text-decoration-none">Media voto: </div>
                    <select required class="form-select form-select-lg" v-model="state.avgVote">
                        <option value="">0</option>
                        <option v-for="index in 5" :value='index'>+ {{ index }}</option>
                    </select>
                </div>

                <!-- countReviews -->
                <div class="input-group ms-2">
                    <div class="input-group-text text-decoration-none">N. recensioni: </div>
                    <select required class="form-select form-select-lg" v-model="state.countReviews">
                        <option value="">0</option>
                        <option v-for="index in 10" :value='index'>+ {{ index }}</option>
                    </select>
                </div>
            </div>

            <p class="text-center">Sono stati trovati {{ state.doctors_by_spec.length }} risultati</p>

            <div class="row" v-if="state.doctors_by_spec">
                <div class="col-12 g-3" v-for="doc in state.doctors_by_spec">
                    <CardDoctor :doctor="doc" />
                </div>
                <!-- /.col-4 -->
            </div>
            <!-- /.row -->

        </div>
        <!-- /.container -->
    </section>
    <!-- /#SearchView -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>