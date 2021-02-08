<template>
<div class="wrapper fadeInDown">
 
  <div id="formContent">
    <div class="fadeIn first">
      
    </div>

     
          <h3>Editar productos</h3>
          <form @submit.prevent="editarProductos"  >
                <input v-model="producto.titulo" 
                type="text" 
                class="fadeIn second mt-4"  
                placeholder="Nombre del producto"
                aria-label="Nombre del producto"
                >
            
              <input v-model="producto.precio"
                type="text"
                class="fadeIn third"
                placeholder="Precio"
                style="padding: 0 65px;"
                min="0"
                aria-label="Precio" 
              />
           

    
                <textarea v-model="producto.descripcion"
                type="text"
                class="fadeIn second mt-4" 
                aria-label="descripcion del producto"  
                placeholder="Describa el producto..." 
                cols="30">
                </textarea>

                <input @change="selecFileEdit" type="file">



                  <input type="submit" class="fadeIn fourth" value="Editar" @click="editarAlert">

          </form>
       
<div v-if="alertEditar" class="alert alert-success" role="alert">
 PRODUCTO EDITADO
</div>

  </div>
</div>


</template>
<script>
import axios from 'axios'
import Header from '../components/Header' 
export default {
components:{Header},
name:'Editar',

  data(){
    return{
      producto:{
        titulo:"",
        descripcion:"",
        precio:"",
        imagen:"",
        imgVieja:""
        
      },
      alertEditar:false
    }
    
      
    },
  mounted() {
    this.leerApiId();
  },
  
methods:{
  selecFileEdit(e){
this.producto.imagen = e.target.files[0]
 console.log(this.producto)
},
      leerApiId() {
       const id= localStorage.getItem('idPRoducto')
        this.id = id
       axios(
        {
        method: 'GET', 
        headers:{'Content-Type':'application/json'},
        url: `https://mini-ecommerce-api.herokuapp.com/api/productos/${id}`,
        })
        .then(res => {

        this.producto =  {
        titulo:res.data.titulo,
        descripcion:res.data.descripcion,
        precio:res.data.precio,
        imagen:res.data.imagen,
        imgVieja:res.data.imagen
      
          }
console.log(this.producto)
        })
        .catch(e => console.log(e))
   
},
      editarProductos(){  
      const token = localStorage.getItem('token')
      const id = localStorage.getItem('idPRoducto')
      const baseURL = `https://mini-ecommerce-api.herokuapp.com/api/productos/${id}`
   
     const formData = new FormData()
      formData.append('imagen',this.producto.imagen)
      formData.append('titulo',this.producto.titulo )
      formData.append('descripcion',this.producto.descripcion )
      formData.append('precio',this.producto.precio )
      formData.append('imgVieja',this.producto.imgVieja )
      const bodyJson = formData 

         axios(
        { 
        method: 'PUT', 
        headers:{'x-access-token': token },
        url: baseURL,
        data: bodyJson
      }).then(res => {
        console.log(res.data)

      })
  
    .catch(e => console.log(e)) 
    },
    editarAlert(){
      this.alertEditar=true
      setInterval(()=>{this.alert=false},300)
      setInterval(()=>{window.location.href = `https://mini-ecommerce-api.herokuapp.com/Administracion`;},1000)
    }}}
  

  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


/* BASIC */

html {
  background-color: #a575e6;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

a {
  color: #92badd;
  display:inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px; 
  color: #cccccc;
}
textarea{
    height: 163px;
}



/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}



/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #a575e6;
}



/* FORM TYPOGRAPHY*/

input[type=button], input[type=submit], input[type=reset]  {
  background-color: #732a86;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #4a175a;
}

input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type=text], input[type=password]{
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 3px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  margin-top: 10px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type=text]:focus {
  background-color: #fff;
  border-bottom: 2px solid #a575e6;
}

input[type=password]:placeholder {
  color: #cccccc;
}



/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fadeIn {
  opacity:0;
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #7138c0;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #632177;
}

.underlineHover:hover:after{
  width: 100%;
}



/* OTHERS */

*:focus {
    outline: none;
} 

#icon {
  width:60%;
}


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #a575e6;
}
</style>

