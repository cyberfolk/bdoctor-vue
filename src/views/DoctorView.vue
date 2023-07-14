<script>
import SendReview from '../components/section/SendReview.vue';
import SendMessage from '../components/section/SendMessage.vue';
import SendVote from '../components/section/SendVote.vue';
import NotFound from '../views/NotFound.vue';
import LoadingView from './LoadingView.vue';
import { state } from '../state';
import axios from "axios";

export default {
    name: "DoctorView",
    components: { SendReview, SendMessage, SendVote, NotFound, LoadingView },
    data() {
        return {
            state,
            doctor: null,
        }
    },
    mounted() {
        const url = state.API_URL_BASE + 'api/doctors/' + this.$route.params.slug;
        axios
            .get(url)
            .then(response => {
                if (response.data.success) {
                    //Viene restituito un array di un solo elemento che contiene l'unico dottore con lo slug richiesto, quindi per prenderlo devo fare [0]
                    this.doctor = response.data.result[0];
                } else {
                    this.$router.push({
                        name: 'not-found'
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    },
};
</script>

<template>
    <section id="DoctorView">
        <div class="container">
            <div v-if="doctor" class="doc_info fs-5">
                <h1 class="text-center align-middle fw-semibold text-uppercase pt-5 pb-3">{{ doctor.name }} {{ doctor.lastname }}</h1>
                <div class="row">
                    <div class="col-md-4 p-0">
                        <img v-if="doctor.photo != null" :src="state.getImagePath(doctor.photo)" class="card-img-top"
                            alt="...">
                        <img v-else src="./../assets//image/bdoctor.png" class="card-img-top" alt="...">
                    </div>
                    <!-- /.col-4 -->
                    <div class="col-md-8 bg-light">
                        <div class="d-flex mt-3">
                            <div class="mb-2 fs-6 me-3 fw-bold"><strong class="fs-6"><i class="fa-solid fa-star fs-5 text-gold"></i></strong> {{ doctor.avgVote ? doctor.avgVote : '-' }}</div>
                            <div class="mb-2 badge text-bg-success fs-6"><strong class=" fs-6">N. Recensioni: </strong>{{doctor.countReviews }}</div>
                        </div>
                        <div class="mb-2"><strong>Telefono: </strong>{{ doctor.phone }}</div>
                        <div class="mb-2"><strong>Email: </strong>{{ doctor.email }}</div>
                        <div class="mb-2"><strong>Prestazioni: </strong>{{ doctor.service }}</div>
                        <div class="mb-2"><strong>Indirizzo: </strong>{{ doctor.address }}</div>
                        <div class="mb-2"><Strong>Curriculum:</Strong><a :href="state.getImagePath(doctor.cv)" download><i
                                    class="mx-3 fs-4 text-secondary fa-solid fa-file-arrow-down"></i>Download</a></div>
                        <div class="mb-2"><strong>Specializzazioni:</strong></div>
                        <ul v-if="doctor.specializations">
                            <li v-for="spec in doctor.specializations">{{ spec.name }}</li>
                        </ul>
                        <div v-else>Nessuna specializzazione</div>
                    </div>
                    <!-- /.col-8 -->
                </div>
                <!-- /.row -->

                <!-- /.doc_info -->
                <div class="row g-5 py-5">
                    <div class="col-12 col-md-4">
                        <SendReview :doctor_id="doctor?.id"></SendReview>
                    </div>
                    <!-- /.col -->
                    <div class="col-12 col-md-4">
                        <SendMessage :doctor_id="doctor?.id"></SendMessage>
                    </div>
                    <!-- /.col -->
                    <div class="col-12 col-md-4">
                        <SendVote :doctor_id="doctor?.id"></SendVote>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- doctor -->
            <div v-else>
                <LoadingView></LoadingView>
            </div>
        </div>
        <!-- /.container -->
    </section>
    <!-- /#DoctorView -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

ul {
    columns: 3;
}

</style>