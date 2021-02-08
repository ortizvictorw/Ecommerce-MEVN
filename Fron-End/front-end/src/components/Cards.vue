<template>
  <div class="row container mx-auto">
    <div v-for="(producto,i) in productos" :key="i">
      <div class="card col-12 my-1 mx-auto">
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
    this.leerApi();
  },
  methods: {
    leerApi() {
      const urlLocal = 'http://localhost:3000/api/productos'
      const urlServidor = `https://mini-ecommerce-api.herokuapp.com/api/productos`
      axios
        .get('https://mini-ecommerce-api.herokuapp.com/api/productos')
        .then(res => {
          this.productos = res.data
        })
        .catch(e => console.log(e))
    }
  },
};
</script>

<style></style>