<script>
export default {
    name: "DoctorView",
    components: {},
};
</script>

<template>
    <section id="DoctorView">
        <div class="container text-center">
            <h1 class="text-center align-middle py-5">DoctorView</h1>
            <router-link :to="{ 'name': 'home' }" class="d-block">&LeftArrow; Go back to home</router-link>
        </div>
        <!-- /.container -->
    </section>
    <!-- /#DoctorView -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>