import { reactive } from 'vue'
import { router } from './router';
import axios from "axios";

export const state = reactive({
    loading_specializations: true,
    loading_doctors_by_spec: true,
    API_URL_BASE: "http://127.0.0.1:8000/",
    API_SPECIALIZATIONS: "api/specializations",
    API_DOCTOR_BY_SPEC: "api/doctor_by_spec",
    specializations: [],
    doctors_by_spec: [],
    users_by_spec: [],
    specialization_selected: null,

    fetchSpecializations() {
        const url = this.API_URL_BASE + this.API_SPECIALIZATIONS;
        axios
            .get(url)
            .then(response => {
                this.specializations = response.data.specializations;
                console.log(this.specializations);
                this.loading_specializations = false;
            })
            .catch(error => {
                this.error = error.message
            })
    },
    getDoctorBySpec() {
        const url = this.API_URL_BASE + this.API_DOCTOR_BY_SPEC + '/' + this.specialization_selected;
        console.log(url);
        axios
            .get(url)
            .then(response => {
                this.doctors_by_spec = response.data
                console.log(this.doctors_by_spec, this.users_by_spec);
            })
    }
});