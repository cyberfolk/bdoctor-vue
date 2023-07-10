import { reactive } from 'vue'
import { router } from './router';
import axios from "axios";

export const state = reactive({
    loading_specializations: true,
    loading_doctors_by_spec: true,
    API_URL_BASE: "http://127.0.0.1:8000/",
    API_SPECIALIZATIONS: "api/specializations",
    API_DOCTOR_BY_SPEC: "api/doctors_by_spec",
    API_MESSAGE: "api/message",
    API_REVIEW: "api/review",
    API_VOTE: "api/vote",
    API_DOCTORS: "api/doctors",
    specializations: [],
    doctors_by_spec: [],
    specialization_selected: '',
    minVote: 1,

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

    getDoctorBySpec() {
        this.loading_doctors_by_spec = true;
        const url = this.API_URL_BASE + this.API_DOCTOR_BY_SPEC + '/' + this.specialization_selected;
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