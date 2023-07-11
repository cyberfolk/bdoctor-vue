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
            <!--<small>ordina per:</small>
            <!--<small>ordina per:</small>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1"> Numero recensioni </label>
                <label class="form-check-label" for="flexRadioDefault1"> Numero recensioni </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2"> Voti maggiori </label>
            </div> -->

            <div class="input-group mb-3">
                <div class="input-group-text text-decoration-none">Voto minimo: </div>
                <select required class="form-select form-select-lg" v-model="state.avgVote">
                    <option v-for="index in 6" :value='index - 1' @input="state.search()">{{ index - 1 }}</option>
                </select>
            </div>
            <!-- avgVote -->
            <div class="input-group mb-3">
                <div class="input-group-text text-decoration-none">Reviews minime: </div>
                <select required class="form-select form-select-lg" v-model="state.countReviews">
                    <option v-for="index in 10" :value='index - 1' @input="state.search()">{{ index - 1 }}</option>
                </select>
            </div>
            <!-- countReviews -->

            <!-- <p class="text-center">Sono stati trovati {{ state.doctors_by_spec.length }} risultati</p> -->
            <!-- <p class="text-center">Sono stati trovati {{ state.doctors_by_spec.length }} risultati</p> -->

            <div class="row">
                <div class="col-4 g-3" v-for="doc in state.doctors_by_spec">
                    <router-link :to="{ name: 'doctor', params: { slug: doc.slug } }"
                        class=" text-decoration-none border-4">
                        <div class="card" style="width:18rem;">
                            <img :src="state.getImagePath(doc.photo)" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h2 class="card-title text-uppercase">{{ doc.name }} {{ doc.lastname }}</h2>
                                <div class="mb-2 badge bg-danger me-2"><strong>Vote: </strong>{{ doc.avgVote }}</div>
                                <div class="mb-2 badge bg-primary"><strong>#Reviews: </strong>{{ doc.countReviews }}</div>
                                <div class="mb-2"><strong>Phone number: </strong>{{ doc.phone }}</div>
                                <div class="mb-2"><strong>Email: </strong>{{ doc.email }}</div>
                                <div class="mb-2"><strong>Prestazioni: </strong>{{ doc.service }}</div>
                                <div class="mb-2"><strong>Indirizzo </strong>{{ doc.address }}</div>
                                <div><strong>Specializzazioni:</strong></div>
                                <ul v-if="doc.specializations">
                                    <li v-for="spec in doc.specializations">{{ spec.name }}</li>
                                </ul>
                                <div v-else>Nessuna specializzazione</div>
                                <div v-else>Nessuna specializzazione</div>
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