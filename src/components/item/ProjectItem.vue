<script>
import { state } from "./../../state";
export default {
    name: "ProjectItem",
    data() { return { state, }; },
    props: {
        title: String,
        cover: String,
        info: String,
        type: Object,
        technologies: Array,
        slug: String,
    },
};
</script>
<template>
    <div class="card position-relative border-0 ms-shadow-white text-center">
        <img v-if="cover" class="card-img ms-img-fit" :src="cover" :alt="title" />
        <img v-if="type" width="50" class="type position-absolute top-0 end-0 mt-2 me-2"
            :src="state.completePath(type)" :title="type.name">
        <h3 class="title position-absolute w-100 mt-4">{{ title }}</h3>
        <div class="card-body position-absolute bottom-0 w-100">
            <p class="info mb-5"> {{ info?.slice(0, 150) + '...' }}
                <router-link class="fw-bold badge bg-primary"
                    :to="{ name: 'single-project', params: { slug: slug } }">Read More</router-link>
            </p>
            <div v-if="technologies">
                <img v-for="tech in  technologies" width="50" class="technology badge bg-darkless me-1"
                    :src="state.completePath(tech)" :title="tech.name">
            </div>
        </div>
        <!-- /.body -->
    </div>
    <!-- /.card -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.card {
    aspect-ratio: 1.33;

    .card-img {
        transition: filter 1s;
    }

    .info {
        visibility: hidden;
        opacity: 0;
        transition: visibility 1s, opacity 1s;
    }

    .technology {
        transition: width 1s;
        display: inline; //otherwise badges with no content set their content as display none
    }

    &:hover .card-img {
        filter: brightness(0.6);
        transition: filter 1s;
    }

    &:hover .info {
        visibility: visible;
        opacity: 1;
    }

    &:hover .technology {
        width: 40px;
    }
}
</style>
