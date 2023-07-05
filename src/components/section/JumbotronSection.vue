<script>
import data from "./../../assets/data/jumbotron.json";
export default {
    name: "JumbotronSection",
    components: {},
    data() {
        return {
            data_view: data[this.$route.name],
            close: false,
        };
    },
};
</script>

<template>
    <section id="jumbotron" class="text-center bg-primary position-relative" :class="close ? 'd-none' : ''">
        <font-awesome-icon icon="fa-regular fa-xmark-circle" size="3x" style="z-index: 2;" role="button"
            class="position-absolute top-0 start-50 translate-middle" @click="close = true" />
        <div class="d-flex justify-content-center align-items-center lh-1 font-monospace py-2">
            <div class="ms-rotate-n2 text-darkless" style="font-size: 150px;">&#60; </div>
            <div>
                <h1 class="ms-rotate-n2"> <span class='ms-ff-skratch text-darkless'> {{ data_view.dark1 }} </span> {{ data_view.light1 }} </h1>
                <h1 class="ms-rotate-n2"> {{ data_view.light2 }} <span class='ms-ff-skratch text-darkless'> {{ data_view.dark2 }} </span> </h1>
            </div>
            <div class="ms-rotate-n2 text-darkless" style="font-size: 150px;">/&#62; </div>
        </div>
    </section>
    <!-- /#jumbotron -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
</style>