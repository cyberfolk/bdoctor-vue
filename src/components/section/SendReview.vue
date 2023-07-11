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
            alert: false,
            errors: {}
        }
    },
    props: {
        doctor_id: Number,
    },
    methods: {
        sendForm() {
            this.loading = true;
            this.errors = {}; // pulisco l'array con i messaggi d'errore
            const data = {
                name_patient: this.name_patient,
                text: this.text,
                doctor_id: this.doctor_id,
            };

            axios
                .post(state.API_URL_BASE + state.API_REVIEW, data)
                .then((response) => {
                    if (!response.data.success) {
                        this.errors = response.data.errors;
                    } else {
                        this.name_patient = '';
                        this.text = '';
                        this.alert = true;
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
        <div v-if="alert" class="alert alert-success text-start" role="alert">
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

            <div class="mb-1">
                <textarea required rows="5"
                    name="text" id="text" v-model="text"
                    class="form-control" :class="{ 'is-invalid': errors.text }"
                    placeholder="Inserisci qui il tuo messaggio"></textarea>
                <p v-for="(error, index) in errors.text" :key="`message-error-${index}`" class="invalid-feedback"> {{ error }} </p>
            </div>
            <!-- text -->

            <div class="mb-3"><small class="text-danger">Non ti invia la recensione? Prova a ricaricare la pagina.</small></div>

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