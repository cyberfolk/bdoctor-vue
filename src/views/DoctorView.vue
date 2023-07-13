<script>
import SendReview from '../components/section/SendReview.vue';
import SendMessage from '../components/section/SendMessage.vue';
import SendVote from '../components/section/SendVote.vue';
import NotFound from '../views/NotFound.vue';
import { state } from '../state';
import axios from "axios";

export default {
    name: "DoctorView",
    components: { SendReview, SendMessage, SendVote, NotFound },
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
            <div v-if="doctor" class="doc_info">
                <h1 class="text-center align-middle pt-5">{{ doctor.name }} {{ doctor.lastname }}</h1>
                <div class="row">
                    <div class="col-4">
                        <img v-if="doctor.photo != null" :src="state.getImagePath(doctor.photo)" class="card-img-top"
                            alt="...">
                        <img v-else src="./../assets//image/bdoctor.png" class="card-img-top" alt="...">
                    </div>
                    <!-- /.col-4 -->
                    <div class="col-8">
                        <div class="mb-2 badge bg-danger me-2"><strong>Vote: </strong>{{ doctor.avgVote ? doctor.avgVote : '-' }}</div>
                        <div class="mb-2 badge bg-primary"><strong>#Reviews: </strong>{{ doctor.countReviews }}</div>
                        <div class="mb-2"><strong>Phone number: </strong>{{ doctor.phone }}</div>
                        <div class="mb-2"><strong>Email: </strong>{{ doctor.email }}</div>
                        <div class="mb-2"><strong>Prestazioni: </strong>{{ doctor.service }}</div>
                        <div class="mb-2"><strong>Indirizzo </strong>{{ doctor.address }}</div>
                        <div><strong>Specializzazioni:</strong></div>
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
                    <div class="col">
                        <SendReview :doctor_id="doctor?.id"></SendReview>
                    </div>
                    <!-- /.col -->
                    <div class="col">
                        <SendMessage :doctor_id="doctor?.id"></SendMessage>
                    </div>
                    <!-- /.col -->
                    <div class="col">
                        <SendVote :doctor_id="doctor?.id"></SendVote>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- doctor -->
            <div v-else>
                <NotFound></NotFound>
            </div>
        </div>
        <!-- /.container -->
    </section>
    <!-- /#DoctorView -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>