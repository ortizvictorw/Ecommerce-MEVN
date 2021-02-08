import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    state:{
      token:null,
      productosStorage:null,
      alertGuardar:false,
      alertEditar:false,
      alertBorrar:false
     
    }
  },
  mutations: {
    setToken(state,payload){
      state.token = payload
    },
    setProductosStorage(state,payload){
      state.productosStorage = payload
    },
    setAlertGuardarStorage(state,payload){
      state.alertGuardar = payload
    },

    setAlertEditarStorage(state,payload){
      state.alertEditar = payload
    },

    setAlertBorrarStorage(state,payload){
      state.alertBorrar = payload
    },


  },
  actions: {
    
 /*POST A LOGIN*/   
  login({commit},usuario){
    const bodyJson = usuario
    const baseURL = 'https://mini-ecommerce-api.herokuapp.com/api/usuarios/login'
        axios(
      { 
      method: 'POST', 
      url: baseURL, 
      headers: {'x-access-token': this.token}, 
      data: bodyJson 
    }).then(res => {
    commit('setToken', res.data.token)
    localStorage.setItem('token', res.data.token)
  })

  .catch(e => console.log(e))
},

/*LEER TOKEN DEL STORAGE*/
  leerToken({commit}){
    if(localStorage.getItem('token')){
      commit('setToken',localStorage.getItem('token'))
    }else{
      commit('setToken', null)
    }
  }
  }

  
,
  modules: {
   
  }

})
