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
};
</script>
<template>
    <div class="input-group">
        <select required class="form-select form-select-lg" v-model="state.spec_id"
            name="specializations" id="specializations">
            <option disabled selected :value="null">Che specialista desideri?</option>
            <option v-for="spec in state.specializations" :value='spec.id'>{{ spec.name }}</option>
        </select>

        <router-link class="input-group-text text-decoration-none"
            :to="{ 'name': 'search' }" @click="state.search()">Search
        </router-link>
    </div>
</template>

<style lang="scss" scoped></style>

