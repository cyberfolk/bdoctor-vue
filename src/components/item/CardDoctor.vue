<script>
import { state } from '../../state';
export default {
    name: "CardDoctor",
    data() { return { state, }; },
    props: { doctor: Object, },
    methods: {
        cutString(text, maxLength) {
            if (text.length > maxLength) {
                text = text.substr(0, maxLength - 3) + '…';
            }
            return text;
        }
    }

};
</script>
<template>
    <router-link :to="{ name: 'doctor', params: { slug: doctor.slug } }" class=" text-decoration-none border-4">
        <div class="card rounded-2 border--0 mb-3" style="width: 100%;"
            :class="{ 'ms-border-gold ms-shadow-gold': doctor.sponsored }">
            <div class="row g-0">
                <div class="col-md-3 d-flex" height="300px">
                    <img v-if="doctor.photo != null" :src="state.getImagePath(doctor.photo)" class="img-fluid rounded-start"
                        alt="...">
                    <img v-else src="../../assets/image/bdoctor.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-9 fs-5">
                    <div class="card-body rounded-end h-100 d-flex justify-content-between bg-light position-relative">
                        <div>
                            <h2 class="card-title fw-semibold text-uppercase">{{ doctor.name }} {{ doctor.lastname }}</h2>
                            <div class="mb-2"><strong>Telefono: </strong>{{ doctor.phone }}</div>
                            <div class="mb-2"><strong>Email: </strong>{{ doctor.email }}</div>
                            <div class="mb-2"><strong>Prestazioni: </strong>{{ cutString(doctor.service, 100) }}</div>
                            <div class="mb-2"><strong>Indirizzo </strong>{{ doctor.address }}</div>
                            <div class="mb-2"><strong>Specializzazioni:</strong></div>
                            <ul v-if="doctor.specializations">
                                <li v-for="spec in doctor.specializations.slice(0, 3)">{{ spec.name }}</li>
                                <li v-if="doctor.specializations.length > 3">...</li>
                            </ul>
                            <div v-else>Nessuna specializzazione</div>
                        </div>
                        <div class="badge-position">
                            <div class="mb-2 fs-7 me-3 text-end"><strong class="fs-7"><i
                                        class="fa-solid fa-star text-gold"></i></strong> {{ doctor.avgVote ?
                                            doctor.avgVote : '-' }}</div>
                            <div class="mb-2 badge text-bg-success fs-7"><strong class=" fs-7">N. Recensioni: </strong>{{
                                doctor.countReviews }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

img {
    justify-content: center;
    align-items: center;
    object-fit: cover;
}

.border--0 {
    border: 0px;
}

.badge-position {
    position: absolute;
    top: 1rem;
    right: 1rem;
}
</style>
