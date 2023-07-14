<script>
export default {
    name: "LoadingView",
}
</script>

<template>
    <section class="d-flex justify-content-center align-items-center vh-60">
        <div class="text-center">
            <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </section>
    <!-- /#NotFound -->
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.vh-60 {
    height: 60vh;
}

</style>
