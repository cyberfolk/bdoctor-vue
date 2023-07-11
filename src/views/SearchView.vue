<script>
import { state } from "../state";
export default {
    name: "SearchView",
    components: {
    },
    data() {
        return { state, };
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

            <div class="row" v-if="state.doctors_by_spec != 0">
                <div class="col-4 g-3" v-for="doc in state.doctors_by_spec">
                    <router-link :to="{ name: 'doctor', params: { slug: doc.slug } }"
                        class=" text-decoration-none border-4">
                        <div class="card h-100" style="width:18rem;">
                            <img v-if="doc.photo != null" :src="state.getImagePath(doc.photo)" class="card-img-top"
                                alt="...">
                            <img v-else src="../assets/image/bdoctor.png" class="card-img-top" alt="...">
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
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <!-- /#SearchView -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>