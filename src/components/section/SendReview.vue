<script>
import axios from 'axios';
import { state } from '../../state';
export default {
    name: "SendReview",
    components: {},
    data() {
        return {
            state,
            name_patient: '',
            text: '',
            loading: false,
            success: false,
            errors: {}
        }
    },
    props: {
        doctor_id: Number,
    },
    methods: {
        sendForm() {
            this.loading = true;
            const data = {
                name_patient: this.name_patient,
                text: this.text,
                doctor_id: this.doctor_id,
            };
            // pulisco l'array con i messaggi
            this.errors = {};

            // Importante - Stiamo comunicando con Laravel, quindi non è più obbligatorio inserire gli headers con il Content-Type
            // come abbiamo fatto invece quando comunicavamo direttamente con gli script PHP
            console.log(data);

            axios
                .post(`${this.state.API_URL_BASE}api/review`, data).then((response) => {
                    console.log(data);
                    console.log(`${this.state.API_URL_BASE}api/review`);
                    this.success = response.data.success;
                    if (!this.success) {
                        this.errors = response.data.errors;
                    } else {
                        // ripulisco i campi di input
                        this.name_patient = '';
                        this.text = '';
                    }
                    this.loading = false;
                });
        },
    }

};
</script>

<template>
    <section id="send_review">
        <h4>Invia una recensione</h4>
        <div v-if="success" class="alert alert-success text-start" role="alert">
            Messaggio inviato con successo!
        </div>
        <form @submit.prevent="sendForm()" class="mb-5 py-3">
            <div class="mb-3">
                <input required type="text"
                    name="name_patient" id="name_patient" v-model="name_patient"
                    class="form-control" :class="{ 'is-invalid': errors.name_patient }"
                    placeholder="Firma la tua recensione" />
                <p v-for="(error, index) in errors.name_patient" :key="`message-error-${index}`" class="invalid-feedback"> {{ error }} </p>
            </div>
            <!-- name_patient -->

            <div class="mb-3">
                <textarea required rows="5"
                    name="text" id="text" v-model="text"
                    class="form-control" :class="{ 'is-invalid': errors.text }"
                    placeholder="Inserisci qui il tuo messaggio"></textarea>
                <p v-for="(error, index) in errors.text" :key="`message-error-${index}`" class="invalid-feedback"> {{ error }} </p>
            </div>
            <!-- text -->

            <div class="d-flex justify-content-end">
                <button class="btn btn-primary py-2 px-3 me-3" type="submit" :disabled="loading">{{ loading ? 'Sending...' : 'Send' }} </button>
                <button class="btn btn-danger py-2 px-3" type="reset" :disabled="loading">{{ loading ? 'Sending...' : 'Reset' }} </button>
            </div>
            <!-- buttons -->

        </form>

    </section>
    <!-- /#send_review -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
</style>