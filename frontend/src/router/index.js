/* This is a JavaScript code that sets up the routing configuration for a Vue.js application using the
Vue Router library. It imports the necessary functions and components from the Vue Router library,
defines the routes for the application, and creates a router instance using the defined routes and
web history mode. Finally, it exports the router instance for use in the application. */
import {createWebHistory, createRouter} from 'vue-router';
// import app from "@/App.vue";
import HomePage from '@/views/HomePage.vue';
import servicio from '@/views/ServiciosPagina.vue';
import contacto from '@/views/Contactos.vue';
import iniciarSecion from '@/views/IniciarSesion.vue';

import blog from '@/views/BlogViews.vue';
import post from '@/views/Post.vue';
import Cart from '@/views/Cart.vue';
import Pedido from '@/views/Pedido.vue';
import getproduct from '@/views/ProductoSearch.vue';
import Registro from '@/views/Registro.vue';
import Exito from '@/views/Exito.vue';
import postexito from '@/views/ExitoBlog.vue';
import Dashboard from '@/views/Dashboardblog.vue';
import Personalizar from '@/views/PersonalizarRopas.vue';

// rutas configuración
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/servicios',
    name: 'servicios-one',
    component: servicio,
  },
  {
    path: '/contactos',
    name: 'contactos',
    component: contacto,
  },
  {
    path: '/blog',
    name: 'BlogVuews',
    component: blog,
  },
  {
    path: '/post/:id?',
    name: 'Post',
    component: post,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/pedido',
    name: 'Pedido',
    component: Pedido,
  },
  {
    path: '/getproduct',
    name: 'getproduct',
    component: getproduct,
  },
  {
    path: '/iniciarsecion',
    name: 'iniciarSecion',
    component: iniciarSecion,
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/personalizar',
    name: 'personalizar',
    component: Personalizar,
  },
  {
    path: '/exito',
    name: 'exito',
    component: Exito,
  },
  {
    path: '/postexito',
    name: 'postexito',
    component: postexito,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;