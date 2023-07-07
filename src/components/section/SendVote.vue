<script>
import axios from 'axios';
import { state } from '../../state';
export default {
    name: "SendVote",
    components: {},
    data() {
        return {
            state,
            vote: 0,
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
                vote: this.vote,
            };

            axios
                .post(state.API_URL_BASE + state.API_VOTE, data)
                .then((response) => {
                    if (!response.data.success) {
                        this.errors = response.data.errors;
                    } else {
                        this.vote = 0;
                        this.alert = true;
                    }
                    this.loading = false;
                });
        },
    }
};
</script>

<template>
    <section id="send_vote">
        <h4>Invia il tuo voto</h4>
        <div v-if="alert" class="alert alert-success text-start" role="alert">
            Voto inviato con successo!
        </div>
        <form @submit.prevent="sendForm()" class="mb-5 py-3">
            <div class="mb-3">
                <input required type="number" min="1" max="5" step="1"
                    name="vote" id="vote" v-model="vote"
                    class="form-control" :class="{ 'is-invalid': errors.vote }" />
                <p v-for="(error, index) in errors.vote" :key="`message-error-${index}`" class="invalid-feedback"> {{ error }} </p>
            </div>
            <!-- vote -->

            <div class="d-flex justify-content-end">
                <button class="btn btn-primary py-2 px-3 me-3" type="submit" :disabled="loading">{{ loading ? 'Sending...' : 'Send' }} </button>
                <button class="btn btn-danger py-2 px-3" type="reset" :disabled="loading">{{ loading ? 'Sending...' : 'Reset' }} </button>
            </div>
            <!-- buttons -->

        </form>
    </section>
    <!-- /#send_vote -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
</style>