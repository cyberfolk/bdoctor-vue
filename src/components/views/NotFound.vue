<script>
export default {
    name: "NotFound",
}
</script>

<template>
    <section id="404_view">
        <div class="container text-center">
            <h1 class="text-center align-middle py-5 position-fixed start-50 top-50 translate-middle ms-ff-skratch">404 | NOT FOUND</h1>
            <span>Project not found</span>
            <router-link :to="{ 'name': 'home' }" class="d-block">&LeftArrow; Go back to projects</router-link>
        </div>
        <!-- /.container -->
    </section>
    <!-- /#404_view -->
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>
