// Importaciones de modulos
import Vue from "vue";
import Router from 'vue-router'

// Importaciones de vistas
import Home from "../views/Home.vue";
import Productos from "../views/Productos.vue";

Vue.use(Router)

export default new Router ({
  mode:'history',
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path: '/productos',
      component: Productos
    },
  ]
})