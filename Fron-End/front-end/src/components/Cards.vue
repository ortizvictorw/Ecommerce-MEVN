<template>
 <div v-if="alertCarrito"  class="alert alert-success animacion" role="alert">
 PRODUCTO EN CARRITO
</div>


  <div class="row container mx-auto my-3">
    <div class="d-lg-flex justifi-content-lg-beetwen mx-auto" v-for="(producto,i) in productos" :key="i">
      <div class="card col-12 col-md-11 col-lg-12 my-1 mx-auto">
        <img :src="producto.imagen" class="card-img-top" :alt="producto.titulo" style="width: 15rem; height: 10rem;" />
        <div class="card-body">
          <h5 class="card-title">{{ producto.titulo }}</h5>
          <h6>${{producto.precio}}</h6>
          <p class="card-text"> {{producto.descripcion}} </p>
          <button @click="agregarAlCarrito(producto)" class="btn btn-dark">Agregar a Carrito</button>
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
      arrayStorage : [],
      alertCarrito :false
    };
  },
  mounted() {
    this.leerApi();
  },
  methods: {
   agregarAlCarrito(producto){
      this.alertCarrito = true
      setInterval(()=>{this.alertCarrito = false},7000)
     if(localStorage.getItem('arrayStorageString')){
       this.arrayStorage = JSON.parse(localStorage.getItem('arrayStorageString'))
       this.arrayStorage.push(producto)
       localStorage.setItem('arrayStorageString',JSON.stringify(this.arrayStorage))
     }else{
       this.arrayStorage.push(producto)
       localStorage.setItem('arrayStorageString',JSON.stringify(this.arrayStorage))
     }
   },

    leerApi() {
      axios
        .get('https://mini-ecommerce-api.herokuapp.com/api/productos')
        .then(res => {
          this.productos = res.data
        })
        .catch(e => console.log(e))
    }
}
}
</script>

<style>
.animacion{

  position: relative;
  animation-name: example;
  animation-duration: 5s;
  
}

@keyframes example {
  0%   { left:0px; top:0px;}
  25%  {background-color:#10b33644; left:15px; top:0px;}
  100%  {left:0px; top:0px;}


}
</style>