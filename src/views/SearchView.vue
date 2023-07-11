<script>
import CardDoctor from "./../components/item/CardDoctor.vue"
import { state } from "../state";
export default {
    name: "SearchView",
    components: { CardDoctor },
    data() {
        return { state };
    },
};
</script>

<template>
    <section id="SearchView">
        <div class="container py-5">
            <div class="input-group mb-3">
                <div class="input-group-text text-decoration-none">Voto minimo: </div>
                <select required class="form-select form-select-lg" v-model="state.avgVote">
                    <option v-for="index in 6" :value='index - 1'>{{ index - 1 }}</option>
                </select>
            </div>
            <!-- avgVote -->
            <div class="input-group mb-3">
                <div class="input-group-text text-decoration-none">Reviews minime: </div>
                <select required class="form-select form-select-lg" v-model="state.countReviews">
                    <option v-for="index in 11" :value='index - 1'>{{ index - 1 }}</option>
                </select>
            </div>
            <!-- countReviews -->

            <p class="text-center">Sono stati trovati {{ state.doctors_by_spec.length }} risultati</p>

            <div class="row" v-if="state.doctors_by_spec">
                <div class="col-4 g-3" v-for="doc in state.doctors_by_spec">
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