<template>
  <div v-if="token"  id="nav">
  
    <router-link  to="/">Home </router-link> 
    <router-link  to="/Administracion">| Panel</router-link> |
    <button @click="logout" class="btn btn-primary ml-5" >Logout </button> 
  </div>
  <div v-else id="nav">
  
    <router-link  v-if="token" to="/">Home </router-link> 
    <router-link  to="/Login">Login </router-link> 
  </div>
  <router-view/>
</template>
<script>

import {mapActions} from 'vuex'
export default {
   data() {
    return {
      token: '',
    };
  },
  methods:{

...mapActions(['leerToken']),
logout (){
 localStorage.clear();
 location.reload()
}
  
  
},
created(){
 this.leerToken()
 const Local = localStorage.getItem('token')
 this.token = Local

}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
