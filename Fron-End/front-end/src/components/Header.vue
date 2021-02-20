<template>
  <div class="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <img
          class="img-fluid col-2"
          src="https://www.ideematic.com/wp-content/uploads/2018/05/logo-Vue-JS.png"
          alt=""
        />
       
       
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
       
        <div class="collapse navbar-collapse d-lg-flex justify-content-lg-between" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home </router-link> 
            </li>
            <li class="nav-item">
              <a target="_blank" class="nav-link" href="https://www.mercadopago.com.ar/">Metodos de Pago</a>
            </li>

             <li
            
                type="button"
                class="nav-item"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
              <buttom @click="verCarrito(arrayStorage)" class="nav-link" ><i class="fa fa-shopping-cart" aria-hidden="true"></i>  Carrito 
            </buttom>
                
              
            </li>
            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Remeras Hombre</a></li>
                <li><a class="dropdown-item" href="#">Remeras Dama</a></li>
                <li><a class="dropdown-item" href="#">Canguro Hombre</a></li>
                <li>
                  <a class="dropdown-item" href="#">Pantalon deportivo</a>
                </li>
              </ul>
            </li> -->
            
            <div class="nav">
              

              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Carrito
                      </h5>
                      <span>Total: ${{ valor }}</span>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div
                        class="card mb-3"
                        style="max-width: 540px;"
                        v-for="(producto, i) in arrayStorage"
                        :key="i"
                      >
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              :src="producto.imagen"
                              :alt="producto.titulo"
                              style="width: 7rem; height: 5rem;"
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">{{ producto.titulo }}</h5>
                              <p class="card-text">
                                {{ producto.descripcion }}
                              </p>
                              <p class="card-text">
                                <small class="text-muted">{{
                                  producto.precio
                                }}</small>
                              </p>
                              <!-- Boton descartar producto -->
                              <button
                                @click="descartarProducto(i)"
                                type="button"
                                class="btn btn-danger btn-block my-2"
                              >
                                Descartar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-succes border"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button @click="pagar" type="button" class="btn btn-dark">
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
     <div v-if="token"  id="nav" class="mr-4">
  
    <router-link  to="/">Home </router-link> 
    <router-link   to="/Administracion">| Panel</router-link> |
    <button @click="logout" class="btn btn-dark ml-5" >Logout </button> 
  </div>
  <div v-else id="nav">
  
    <router-link  v-if="token" to="/">Home </router-link> 
    <router-link  to="/Login">Login </router-link> 
  </div>
        </div>
      </div>
    </nav>
  </div>
     
</template>
<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: "Header",

  data() {
    return {
      productos: [],
      valor: "",
      arrayStorage: [],
      token:""
   
    };
  },
  computed: {
    ...mapState(["token"]),
    
  },
  mounted() {
   this.arrayStorage =  JSON.parse(localStorage.getItem('arrayStorageString'))
   this.token = localStorage.getItem('token')
  },

  methods: {
    verCarrito() {
       this.arrayStorage =  JSON.parse(localStorage.getItem('arrayStorageString'))
      let suma = 0;
      for (let i = 0; i < this.arrayStorage.length; i++) {
        suma += this.arrayStorage[i].precio;
      }
      this.valor = suma;
    },
    logout(){
      localStorage.removeItem("token")
      this.token = ""

    },

    descartarProducto(i) {
      let suma = 0;
      for (let i = 0; i < this.arrayStorage.length; i++) {
        suma += this.arrayStorage[i].precio;
        this.valor = suma;
         this.arrayStorage =  JSON.parse(localStorage.getItem('arrayStorageString'))
      }
      
      let arrayStorageString = localStorage.getItem("arrayStorageString");
      let arrayStoragePArce= JSON.parse(arrayStorageString);
      arrayStoragePArce.splice(i, 1);
      localStorage.setItem("arrayStorageString",JSON.stringify(arrayStoragePArce));
      
      for (let i = 0; i < this.arrayStorage.length; i++) {
        suma -= this.arrayStorage[i].precio;
        this.valor = suma;
         this.arrayStorage =  JSON.parse(localStorage.getItem('arrayStorageString'))
      }
    },
  pagar(){
      
      
     
      const bodyJson = this.arrayStorage
      
  axios(
        { 
        method: 'POST', 
        url: 'https://mini-ecommerce-api.herokuapp.com/api/pagos/generar_preferencia',
        data: bodyJson, 
        Headers:'Access-Control-Allow-Origin'
        
      }).then(res => {
        //console.log(res.data)
        //console.log(this.arrayStorage)
        const redirect = res.data.body.init_point
        //console.log(redirect)
        window.location.href =redirect

       
      })
  
    .catch(e => console.log(e)) 
    }
  },
   
  
};
</script>
