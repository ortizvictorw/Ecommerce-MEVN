import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'https://mini-ecommerce-api.herokuapp.com/api/';


createApp(App).mount('#app')
