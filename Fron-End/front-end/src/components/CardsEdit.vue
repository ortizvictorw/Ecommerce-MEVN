<template>
  <div v-if="alertBorrado" class="alert alert-danger animacion" role="alert">
 PRODUCTO BORRADO
</div>
  <div class="row container mx-auto ">
    <div class="d-flex justify-content-center" v-for="(producto,i) in productos" :key="i">
      <div class="card col-12 my-1 mx-3 " >
        <img :src="producto.imagen" class="card-img-top" :alt="producto.titulo" style="width: 15rem; height: 10rem;" />
        <div class="card-body">
          <h5 class="card-title">{{ producto.titulo }}</h5>
          <h6>${{producto.precio}}</h6>
          <p class="card-text"> {{producto.descripcion}} </p>
           <router-link class="btn btn-dark btn-block mb-2" @click="tomarId(producto._id)" to="/Editar">Editar </router-link>
            <button class="btn btn-danger btn-block" @click="borrar(producto._id)">Borrar </button>
        <router-view/>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from "axios";
export default {
  name: "CardsEdit",
  props:{
    
  },
  data() {
    return {
      productos: [],
      alertBorrado:false
      
    };
  },
  mounted() {
    this.leerApi();
  },
  methods: {
    leerApi() {
      axios
        .get('https://mini-ecommerce-api.herokuapp.com/api/productos')
        .then(res => {
           this.productos = res.data
        })
        .catch(e => console.log(e))
    },
   borrar(id){
     
    
    const token = localStorage.getItem('token')
      
       const baseURL = `https://mini-ecommerce-api.herokuapp.com/api/productos/${id}`
       axios(
        { 
        method: 'DELETE', 
        headers:{'x-access-token': token },
        url: baseURL 
        
        
      }).then(res => {
        console.log(res.data)
      this.alertBorrado=true
      setInterval(()=>{this.alertBorrado=false},5000)
      this.leerApi();
      }
      
      
      
      )
  
    .catch(e => console.log(e))
    },
    tomarId(id){
      const idCapturado = localStorage.setItem('idPRoducto',id)
      
       console.log(idCapturado)
    
      
    }
    

    
  },
};
</script>

<style>
.animacion{

  position: relative;
  animation-name: example;
  animation-duration: 5s;
  
}

@keyframes example {
  0%   { left:0px; top:0px;}
  25%  {background-color:#b34c1044; left:15px; top:0px;}
  100%  {left:0px; top:0px;}


}
</style>