<script>
export default {
    name: "JumbotronSection",
};
</script>

<template>
    <section id="jumbotron">
        <div class="container d-flex my-3 text-white py-5">
            <div class="row">
                <div class="col-lg-4 col-sm-12 d-flex flex-column justify-content-center">
                    <h1 class="fw-bold display-3 mb-3">BDOCTORS</h1>
                    <h2 class="fw-bold fs-1 mb-4">La cura del tuo benessere inizia qui</h2>
                    <h5 class="fw-light">Scopri i migliori dottori pronti a prendersi cura di te.</h5>
                </div>
                <div class="col-lg-8 col-md-12 d-none d-md-block">
                    <img src="../../assets/image/jumboimg.jpg" alt="" class="jumbo-img">
                </div>
            </div>
        </div>
    </section>
    <!-- /#jumbotron -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.jumbo-img {
    width: 100%;
    contain: content;
}
</style>