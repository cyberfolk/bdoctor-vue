<script>
import { state } from "../../state";

export default {
    name: "SearchSpecializations",
    data() {
        return { state, };

    },
    mounted() {
        state.fetchSpecializations();
    },
    methods() {
        state.getDoctorBySpec()
    }

};
</script>
<template>
    <div class="container p-0">
        <h3 class="mb-3 mt-5">Che specialista desideri?</h3>

        <!--       <form action="{{ route('form-specialization') }}" method="post"> -->
        <div class="input-group mb-3">
            <select required class="form-select form-select-lg" v-model="state.specialization_selected"
                name="specializations" id="specializations">
                <option disabled selected>Select one</option>
                <option v-for="spec in state.specializations" :value='spec.id'>{{ spec.name }}</option>
            </select>

            <router-link class="input-group-text text-decoration-none" active-class="active" :to="{ 'name': 'search' }"
                @click="state.getDoctorBySpec()">Search
            </router-link>

        </div>

    </div>
</template>


<style lang="scss" scoped></style>

