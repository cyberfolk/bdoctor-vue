import { reactive } from 'vue'
import { router } from './router';
import axios from "axios";

export const state = reactive({
    loading_specializations: true,
    API_URL_BASE: "http://127.0.0.1:8000/",
    API_SPECIALIZATIONS: "api/specializations",
    specializations: [],

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
});