<template>
  <div class="row container mx-auto">
    <div v-for="(producto,i) in productos" :key="i">
      <div class="card col-12 my-1 mx-2">
        <img :src="producto.imagen" class="card-img-top" :alt="producto.titulo" />
        <div class="card-body">
          <h5 class="card-title">{{ producto.titulo }}</h5>
          <h6>${{producto.precio}}</h6>
          <p class="card-text"> {{producto.descripcion}} </p>
          <a href="#" class="btn btn-primary">Agregar a Carrito</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cards",
  props:{
    
  },
  data() {
    return {
      productos: [],
    };
  },
  mounted() {
    console.log('ciclo montado')
    this.leerApi();
  },
  methods: {
    leerApi() {
      axios
        .get("https://mini-ecommerce-api.herokuapp.com/api/productos")
        .then(res => {
          this.productos = res.data
        })
        .catch(e => console.log(e))
    }
  },
};
</script>

<style></style>
