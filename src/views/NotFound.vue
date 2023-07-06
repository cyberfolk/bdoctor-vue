<script>
export default {
    name: "NotFound",
}
</script>

<template>
    <section id="NotFound">
        <div class="container text-center">
            <h1 class="text-center align-middle py-5">404 | NOT FOUND</h1>
            <router-link :to="{ 'name': 'home' }" class="d-block">&LeftArrow; Go back to home</router-link>
        </div>
        <!-- /.container -->
    </section>
    <!-- /#NotFound -->
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>
