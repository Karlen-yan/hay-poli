import {createWebHistory, createRouter} from 'vue-router';
// import app from "@/App.vue";
import Home from '@/views/Home.vue';
import servicio from '@/views/Servicios.vue';
import contacto from '@/views/Contactos.vue';
import iniciarSecion from '@/views/IniciarSesion.vue';

import blog from '@/views/BlogViews.vue';
import post from '@/views/Post.vue';
import Cart from '@/views/Cart.vue';
import Pedido from '@/views/Pedido.vue';
import Registro from '@/views/Registro.vue';
// rutas configuración
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    path: '/iniciarsecion',
    name: 'iniciarSecion',
    component: iniciarSecion,
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;