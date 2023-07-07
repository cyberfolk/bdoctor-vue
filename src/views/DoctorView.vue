<script>
import SendReview from '../components/section/SendReview.vue';
import SendMessage from '../components/section/SendMessage.vue';
import SendVote from '../components/section/SendVote.vue';
import { state } from '../state';
import axios from "axios";

export default {
    name: "DoctorView",
    components: { SendReview, SendMessage, SendVote },
    data() {
        return {
            state,
            doctor: null,
            results: null
        }
    }, methods: {
        getDoctorInfo(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    if (response.data.success) {
                        this.doctor = response.data.result
                        console.log(this.doctor);

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
    },
    mounted() {
        const url = state.API_URL_BASE + 'api/doctors/' + this.$route.params.slug;
        // getDoctorInfo(url);
        console.log(this.getDoctorInfo(url));
    },
};
</script>

<template>
    <section id="DoctorView">
        <div class="container">
            <h1 class="text-center align-middle pt-5">DoctorView</h1>
            <router-link :to="{ 'name': 'home' }" class="text-center d-block">&LeftArrow; Go back to home</router-link>
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
        <!-- /.container -->
    </section>
    <!-- /#DoctorView -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>