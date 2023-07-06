<script>
import axios from 'axios';
import { state } from '../state';
export default {
    name: "DoctorView",
    components: {},
    data() {
        return {
            state,
            name: '',
            email: '',
            message: '',
            loading: false,
            success: false,
            errors: {}
        }
    },
};
</script>

<template>
    <section id="DoctorView">
        <div class="container text-center">
            <h1 class="text-center align-middle py-5">DoctorView</h1>
            <router-link :to="{ 'name': 'home' }" class="d-block">&LeftArrow; Go back to home</router-link>

            <section id="send_message" class="py-5">
                <h2>Send Message</h2>
                <div v-if="success" class="alert alert-success text-start" role="alert">
                    Messaggio inviato con successo!
                </div>
                <form @submit.prevent="sendForm()" class="mb-5 py-3">
                    <div class="mb-5">
                        <label for="name_patient" class="form-label">Name_patient</label>
                        <input required type="text"
                            name="name_patient" id="name_patient" v-model="name_patient"
                            class="form-control" :class="{ 'is-invalid': errors.name_patient }"
                            placeholder="Type your full name_patient here" />
                        <p v-for="(error, index) in errors.name_patient" :key="`message-error-${index}`" class="invalid-feedback"> {{ error }} </p>
                    </div>
                    <!-- name_patient -->

                    <div class="mb-5">
                        <label for="text" class="form-label">text</label>
                        <textarea required rows="5"
                            name="text" id="text" v-model="text"
                            class="form-control" :class="{ 'is-invalid': errors.text }"
                            placeholder="Type your text here"></textarea>
                        <p v-for="(error, index) in errors.text" :key="`message-error-${index}`" class="invalid-feedback"> {{ error }} </p>
                    </div>
                    <!-- text -->

                    <div class="mb-5">
                        <label for="email" class="form-label">Email</label>
                        <input type="text"
                            name="email" id="email" v-model="email"
                            class="form-control" :class="{ 'is-invalid': errors.email }"
                            placeholder="Type your email here" />
                        <p v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="invalid-feedback"> {{ error }} </p>
                    </div>
                    <!-- email -->

                    <button class="btn btn-primary py-2 px-5 me-4 fs-4" type="submit" :disabled="loading">{{ loading ? 'Sending...' : 'Send' }} </button>
                    <button class="btn btn-danger py-2 px-5 fs-4" type="reset" :disabled="loading">{{ loading ? 'Sending...' : 'Reset' }} </button>

                </form>

            </section>
            <!-- /#send_message -->
        </div>
        <!-- /.container -->
    </section>
    <!-- /#DoctorView -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>