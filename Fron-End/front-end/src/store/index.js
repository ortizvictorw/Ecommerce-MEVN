import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  
    state:{
      token:null,
    
  },
  mutations: {
    setToken(state,payload){
      state.token = payload
    }
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
