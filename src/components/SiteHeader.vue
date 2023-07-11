<script>
import SearchSpecializations from './item/SearchSpecializations.vue';
export default {
  name: "SiteHeader",
  components: {
    SearchSpecializations
  },
}
</script>

<template>
  <header id="app_header">
    <nav class="navbar navbar-expand-md navbar-dark bg-primary shadow px-4">
      <router-link class="navbar-brand" :to="{ 'name': 'home' }">
        <img height="80" src="./../assets/image/bdoctor.png" alt="Personal Logo">
      </router-link>



      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        @click="visible = !visible">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- navbar-toggler -->

      <div class="navbar-collapse collapse justify-content-end align-items-center" id="navbarSupportedContent">
        <SearchSpecializations class="flex-grow-1 m-3"></SearchSpecializations>
        <ul class="navbar-nav m-3">
          <li class="nav-item">
            <a class="btn btn-teal text-white py-2 my-2 me-3" href="http://127.0.0.1:8000/register">Register</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-indigo text-white py-2 my-2" href="http://127.0.0.1:8000/login">Login</a>
          </li>
        </ul>
        <!-- </div> -->

      </div>
    </nav>
    <!-- navbar-collapse -->
  </header>
  <!-- /#app_header -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>
