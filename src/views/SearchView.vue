<script>
import { state } from "../state";
import SearchSpecializations from "../components/item/SearchSpecializations.vue";
export default {

    name: "SearchView",
    components: {
        SearchSpecializations,

    },
    data() {
        return { state, };
    },
    mounted() {
        state.fetchSpecializations();
    },
    methods() {
        state.getDoctorBySpec()
    }
};
</script>

<template>
    <section id="SearchView">
        <div class="container text-center">
            <h1 class="text-center align-middle py-5">SearchView</h1>
            <router-link :to="{ 'name': 'home' }" class="d-block">&LeftArrow; Go back to home</router-link>
        </div>
        <div v-if="state.doctors_by_spec != 0" class="container">
            <SearchSpecializations></SearchSpecializations>
            <small>ordina per:</small>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    Numero recensioni
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                    Voti maggiori
                </label>
            </div>


            <p class="text-center">Sono stati trovati {{ state.doctors_by_spec.length }} risultati</p>
            <div class="row row-cols-3">
                <div class="col" v-for="doc, index in   state.doctors_by_spec  ">
                    <router-link :to="{ name: 'doctor', params: { slug: doc.slug } }"
                                 class=" text-decoration-none border-4">
                        <div class="card border-0" style="width:18rem;">
                            <img :src="state.getImagePath(doc.photo)" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{ state.users_by_spec[index].name + ' ' +
                                    state.users_by_spec[index].lastname }}
                                </h5>
                                <ul>
                                    <li v-for="specialization in doc.specializations"
                                        class="card-subtitle mb-2 text-muted ">{{
                                            specialization.name }}</li>
                                </ul>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's
                                    content.
                                </p>
                                <div class="card-footer">

                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

        </div>
        <div v-else class="text-center">
            non sono stati trovati risultati
        </div>
    </section>
    <!-- /#SearchView -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>