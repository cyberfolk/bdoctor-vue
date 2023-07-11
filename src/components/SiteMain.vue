<script>
import { state } from "../state";
export default {
  name: "SiteMain",
  data() {
    return { state, };
  },
  mounted() {
    state.fetchSpecializations();
  },

};

</script>

<template>
  <main id="app_main" class="">
    <div class="container">
      <h3 class="mb-3 mt-5">Che specialista desideri?</h3>

      <div class="input-group mb-3">
        <select required class="form-select form-select-lg" v-model="state.spec_id" name="specializations"
          id="specializations">
          <option disabled selected>Select one</option>
          <option v-for="spec in state.specializations" :value='spec.id'>{{ spec.name }}</option>
        </select>
        <button class="input-group-text" @click="state.search()">Submit</button>
      </div>
      <div v-if="state.doctors_by_spec != 0">
        <p>sono stati trovati {{ state.doctors_by_spec.length }} risultati</p>
        <div class="row row-cols-3">
          <div class="col" v-for="doc in  state.doctors_by_spec ">
            <div class="card" style="width:18rem;">
              <img :src="state.getImagePath(doc.photo)" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ doc.name + ' ' + doc.lastname }}
                </h5>
                <ul>
                  <li v-for="specialization in doc.specializations" class="card-subtitle mb-2 text-muted ">{{
                    specialization.name }}</li>
                </ul>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
                b5
              </div>
            </div>
          </div>
        </div>


        <!-- <ul v-for="doc, index in state.doctors_by_spec">
          <li>
            <div class="row">
              <h2>{{ doc.name }} {{ doc.lastname }}</h2>
            </div>
          </li>
        </ul> -->
      </div>
      <div v-else>
        non sono stati trovati risultati
      </div>

    </div>
    <!-- /.container -->
  </main>
  <!-- /#app_main -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>