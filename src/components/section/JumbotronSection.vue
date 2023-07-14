<script>
//import data from "./../../assets/data/jumbotron.json";
export default {
    name: "JumbotronSection",
    components: {},
    data() {
        return {
            //data_view: data[this.$route.name],
        };
    },
};
</script>

<template>
    <section id="jumbotron">
        <div class="container text-start d-flex my-3 text-white">
            <div class="row">
                <div class="col-lg-4 col-sm-12 d-flex flex-column justify-content-center">
                    <p class="bdoc">BDOCTORS</p>
                    <p class="secondary-line">La cura del tuo benessere inizia qui</p>
                    <p class="third-line fw-light">Scopri i migliori dottori pronti a prendersi cura di te.</p>
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
#jumbotron {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bdoc {
    font-size: 4rem;
    font-weight: 800;
    //color: #07D3C8;
}

.secondary-line{
    font-size: 2rem;
    font-weight: bold;
}

.third-line{
    font-size: 1rem;
    font-weight: bold;
}

.jumbo-img {
    width: 100%;
    contain: content;
}
</style>