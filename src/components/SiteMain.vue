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

      <form action="{{ route('form-specialization') }}" method="post">
        <div class="input-group mb-3">
          <select required class="form-select form-select-lg" name="specializations" id="specializations">
            <option disabled selected>Select one</option>
            <option v-for="spec in state.specializations" value="{{ spec.id }}">{{ spec.name }}</option>
          </select>
          <button type="submit" class="input-group-text">Submit</button>
        </div>

        <!-- <div class="my-3"><small class="text-danger">{{ $message }}</small></div> -->
      </form>

      <!--       @if (isset($doctors) && !empty($doctors))
      <div class="row">
        @foreach ($doctors as $index => $doctor)
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title m-0 text-uppercase me-3 p-0 ">{{ $users[$index] -> name }} {{ $users[$index] -> lastname }}</h2>
              <div>
                <p><strong>Phone number: </strong>{{ $doctor -> phone }}</p>
              </div>
              <div>
                <p><strong>Email: </strong>{{ $users[$index] -> email }}</p>
              </div>
              <p><strong>Prestazioni: </strong>{{ $doctor -> service }}</p>
              <p><strong>Indirizzo </strong>{{ $doctor -> address }}</p>
              <span><strong>Specializzazioni:</strong></span>
              <ul>
                @forelse ($doctor->specializations as $specialization)
                <li>{{ $specialization -> name }}</li>
                @empty
                <li class=" list-unstyled">nessuna specializzazione</li>
                @endforelse
              </ul>
            </div>
          </div> -->
      <!-- /.card -->
      <!-- </div> -->
      <!-- /.col -->
      <!-- @endforeach -->
      <!-- </div> -->
      <!-- /.row -->
      <!--  @else
      <div>Nessun risultato</div>
      @endif -->

    </div>
    <!-- /.container -->
  </main>
  <!-- /#app_main -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
</style>