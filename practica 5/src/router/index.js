import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pasteles',
    name: 'pasteles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PastelesView.vue')
  },
  {
    path: '/personalizar',
    name: 'personalizar',
    component: () => import(/* webpackChunkName: "about" */ '../views/PersonalizarView.vue')
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: () => import(/* webpackChunkName: "about" */ '../views/PasteleroView.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
