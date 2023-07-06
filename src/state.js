import { reactive } from 'vue'
import { router } from './router';
import axios from "axios";

export const state = reactive({
    loading_specializations: true,
    loading_doctors_by_spec: true,
    API_URL_BASE: "http://127.0.0.1:8000/",
    API_SPECIALIZATIONS: "api/specializations",
    API_DOCTOR_BY_SPEC: "api/doctor_by_spec",
    API_VOTES: "api/votes",
    specializations: [],
    votes:[],
    doctors_by_spec: [],
    users_by_spec: [],
    doctors_by_vote: [],
    users_by_vote: [],
    specialization_selected: null,
    vote_selected:null,

    fetchSpecializations() {
        const url = this.API_URL_BASE + this.API_SPECIALIZATIONS;
        axios
            .get(url)
            .then(response => {
                if (response.data.success) {
                    this.specializations = response.data.specializations;
                    console.log(this.specializations);
                    this.loading_specializations = false;
                } else {
                    this.doctors_by_spec = []
                    this.users_by_spec = []
                }
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
                if (response.data.success) {
                    this.doctors_by_spec = response.data.result;
                    this.users_by_spec = response.data.users;
                    console.log(this.doctors_by_spec, this.users_by_spec);
                    this.loading_specializations = false;
                } else {
                    this.doctors_by_spec = []
                    this.users_by_spec = []
                }
            })
    },
    getImagePath(path) {
        return this.API_URL_BASE + 'storage/' + path
    },
    fetchVotes() {
        const url = this.API_URL_BASE + this.API_VOTES;
        axios
            .get(url)
            .then(response => {
                if (response.data.success) {
                    this.votes = response.data.votes;
                    console.log(this.votes);
                    this.loading_votes = false;
                } else {
                    this.doctors_by_vote = []
                    this.users_by_vote = []
                }
            })
            .catch(error => {
                this.error = error.message
            })
    },
});