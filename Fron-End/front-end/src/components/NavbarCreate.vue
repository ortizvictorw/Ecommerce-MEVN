<template>
 <div class="container">
    <router-link class="btn btn-block btn-dark my-2" to="/Crear">Nuevo Producto </router-link> 

  </div>
  <router-view/>
</template>

<script>
export default {
    name:'NavbarCreate'
}
</script>