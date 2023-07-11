import { reactive } from 'vue'
import { router } from './router';
import axios from "axios";

export const state = reactive({
    loading_specializations: true,
    loading_doctors_by_spec: true,
    API_URL_BASE: "http://127.0.0.1:8000/",
    API_SPECIALIZATIONS: "api/specializations",
    API_DOCTOR_BY_SPEC: "api/search",
    API_MESSAGE: "api/message",
    API_REVIEW: "api/review",
    API_VOTE: "api/vote",
    API_DOCTORS: "api/doctors",
    specializations: [],
    doctors_by_spec: [],
    spec_id: '',        // Parametro di controllo dell'API-search
    countReviews: 0,    // Parametro di controllo dell'API-search, indica il minimo di recensioni di un utente
    avgVote: 0,         // Parametro di controllo dell'API-search, indica la media minima di un utente

    fetchSpecializations() {
        this.loading_specializations = true;
        const url = this.API_URL_BASE + this.API_SPECIALIZATIONS;
        axios
            .get(url)
            .then(response => {
                if (response.data.success) {
                    this.specializations = response.data.specializations;
                } else {
                    this.specializations = []
                }
                this.loading_specializations = false;
            })
            .catch(error => {
                this.error = error.message
            })
    },

    search() {
        this.loading_doctors_by_spec = true;
        const url = this.API_URL_BASE + this.API_DOCTOR_BY_SPEC +
            '?avgVote=' + this.avgVote +
            '&spec_id=' + this.spec_id +
            '&countReviews=' + this.countReviews;
        console.log(url);
        axios
            .get(url)
            .then(response => {
                if (response.data.success) {
                    this.doctors_by_spec = response.data.result;
                    this.loading_specializations = false;
                } else {
                    this.doctors_by_spec = []
                }
                this.loading_doctors_by_spec = false;
            })
            .catch(error => {
                this.error = error.message
            })
    },

    getImagePath(path) {
        return this.API_URL_BASE + 'storage/' + path
    },
});