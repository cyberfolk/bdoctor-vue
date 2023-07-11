<script>
import data from "./../../assets/data/jumbotron.json";
export default {
    name: "JumbotronSection",
    components: {},
    data() {
        return {
            data_view: data[this.$route.name],
        };
    },
};
</script>

<template>
    <section id="jumbotron">
    </section>
    <!-- /#jumbotron -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
</style>