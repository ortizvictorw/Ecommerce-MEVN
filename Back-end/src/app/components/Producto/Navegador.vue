<template>
  <div>
      <nav class="col-12 py-3 my-3">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            class="nav-item nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href=""
            role="tab"
            aria-controls="nav-altas"
            aria-selected="true"
            >Altas</a
          >
          <a
            class="nav-item nav-link "
            id="nav-profile-tab"
            data-toggle="tab"
            href=""
            role="tab"
            aria-controls="nav-bajas"
            aria-selected="false"
            >Bajas</a
          >
          <a
            class="nav-item nav-link "
            id="nav-contact-tab"
            data-toggle="tab"
            href=""
            role="tab"
            aria-controls="nav-edit"
            aria-selected="false"
            >Modificaciones</a
          >
        </div>
      </nav>
  </div>
</template>

<script>
export default {
    name: "Navegador",
}
</script>

<style>

</style>