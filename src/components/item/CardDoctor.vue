<script>
import { state } from '../../state';
export default {
    name: "CardDoctor",
    data() { return { state, }; },
    props: { doctor: Object, },
};
</script>
<template>
    <router-link :to="{ name: 'doctor', params: { slug: doctor.slug } }" class=" text-decoration-none border-4">
        <div class="card h-100" style="width:18rem;">
            <img v-if="doctor.photo != null" :src="state.getImagePath(doctor.photo)" class="card-img-top" alt="...">
            <img v-else src="../assets/image/bdoctor.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title text-uppercase">{{ doctor.name }} {{ doctor.lastname }}</h2>
                <div class="mb-2 badge bg-danger me-2"><strong>Vote: </strong>{{ doctor.avgVote }}</div>
                <div class="mb-2 badge bg-primary"><strong>#Reviews: </strong>{{ doctor.countReviews }}</div>
                <div class="mb-2"><strong>Phone number: </strong>{{ doctor.phone }}</div>
                <div class="mb-2"><strong>Email: </strong>{{ doctor.email }}</div>
                <div class="mb-2"><strong>Prestazioni: </strong>{{ doctor.service }}</div>
                <div class="mb-2"><strong>Indirizzo </strong>{{ doctor.address }}</div>
                <div><strong>Specializzazioni:</strong></div>
                <ul v-if="doctor.specializations">
                    <li v-for="spec in doctor.specializations">{{ spec.name }}</li>
                </ul>
                <div v-else>Nessuna specializzazione</div>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </router-link>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
</style>
