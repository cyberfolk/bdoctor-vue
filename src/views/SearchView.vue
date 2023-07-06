<script>
export default {
    name: "SearchView",
    components: {},
};
</script>

<template>
    <section id="SearchView">
        <div class="container text-center">
            <h1 class="text-center align-middle py-5">SearchView</h1>
            <router-link :to="{ 'name': 'home' }" class="d-block">&LeftArrow; Go back to home</router-link>
        </div>
        <!-- /.container -->
    </section>
    <!-- /#SearchView -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>