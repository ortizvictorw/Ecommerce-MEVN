
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Editar from '../views/FormEdit'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/editar',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormEdit.vue'),
  },
  {
    path: '/crear',
    name: 'Crear',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormCreate.vue'),
  },
  {
    path: '/Administracion',
    name: 'Panel de Administrador',
    component: () => import(/* webpackChunkName: "about" */ '../views/PanelAdministrador.vue'),
    meta: {rutaProtegida: true}
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  const rutaEsProtegida = to.matched.some(item => item.meta.rutaProtegida)
if(rutaEsProtegida && store.state.token === null){
  next('/login')
}else {
  next()
}

})

export default router
