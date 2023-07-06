<script>
import { state } from "../../state";
export default {
    name: "FilterComponent",
    data() {
        return { state, };
    },
    mounted() {
        state.fetchVotes();
    }

};
</script>

<template>
    <div class="input-group mb-3">
        <select required class="form-select form-select-lg" v-model="state.votes_selected" name="votes"
            id="votes">
            <option disabled selected>Select one</option>
            <option v-for="vote in state.votes" :value='vote.id'>{{ vote.vote}}</option>
        </select>

        <router-link class="nav-link text-white" active-class="active" :to="{ 'name': 'search' }">
            <button class="input-group-text" @click="state.getDoctorBySpec()">Search</button>
        </router-link>

    </div>
</template>


<style lang="scss" scoped></style>