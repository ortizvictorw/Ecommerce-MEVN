<template>
  <div v-if="alertBorrado" class="alert alert-success" role="alert">
 PRODUCTO BORRADO
</div>
  <div class="row container mx-auto">
    <div v-for="(producto,i) in productos" :key="i">
      <div class="card col-12 my-1 mx-2">
        <img :src="producto.imagen" class="card-img-top" :alt="producto.titulo" />
        <div class="card-body">
          <h5 class="card-title">{{ producto.titulo }}</h5>
          <h6>${{producto.precio}}</h6>
          <p class="card-text"> {{producto.descripcion}} </p>
           <router-link class="btn btn-primary" @click="tomarId(producto._id)" to="/Editar">Editar </router-link>
            <button class="btn btn-danger" @click="borrar(producto._id)">Borrar </button>
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
       const urlLocal = 'http://localhost:3000/api/productos'
      const urlServidor = `https://mini-ecommerce-api.herokuapp.com/api/productos`
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

<style></style>