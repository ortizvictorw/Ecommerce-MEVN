<template>
    <div>
      <ul class="list-group my-3 col-12">
        <h2>Mi Carrito <i class="fas fa-shopping-cart"></i></h2>

        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Cras justo odio
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Dapibus ac facilisis in
          <span class="badge bg-primary rounded-pill">2</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Morbi leo risus
          <span class="badge bg-primary rounded-pill">1</span>
        </li>
      </ul>
      <button type="button" class="btn btn-secondary btn-md-block my-3">
        Pagar
      </button>
    </div>
</template>

<script>
export default {
    name:'List',
    
}
</script>

<style>
</style>