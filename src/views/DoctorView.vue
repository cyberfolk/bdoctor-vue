<script>
import SendReview from '../components/section/SendReview.vue';
import SendMessage from '../components/section/SendMessage.vue';
export default {
    name: "DoctorView",
    components: { SendReview, SendMessage },
    data() {
        return {
            doctor_id: 1,
        }
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
                    <SendReview :doctor_id="doctor_id"></SendReview>
                </div>
                <!-- /.col -->
                <div class="col">
                    <SendMessage :doctor_id="doctor_id"></SendMessage>
                </div>
                <!-- /.col -->
                <div class="col">
                    <SendReview :doctor_id="doctor_id"></SendReview>
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