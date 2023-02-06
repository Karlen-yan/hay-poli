import { createWebHistory, createRouter } from "vue-router";
// import app from "@/App.vue";
import Home from "@/views/Home.vue";
import servicio from "@/views/Servicios.vue";
import contacto from "@/views/Contactos.vue";
import iniciarSecion from "@/views/IniciarSesion.vue";

import blog from "@/views/BlogViews.vue";
import post from "@/views/Post.vue";
import Cart from "@/views/Cart.vue"
import Pedido from "@/views/Pedido.vue"
import Registro from "@/views/Registro.vue"
// rutas configuración 
const routes = [
  {
    path:"/",
    name: "Home",
    component: Home,
  },
  {
    path: "/servicios",
    name: "servicios-one",
    component: servicio,
  },
  {
    path: "/contactos",
    name: "contactos",
    component: contacto,
  },
  {
    path: "/blog",
    name: "BlogVuews",
    component: blog,
  },
  {
    path: "/post/:id?",
    name: "Post",
    component: post,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/pedido",
    name: "Pedido",
    component: Pedido
  },
  {
    path: "/iniciarsecion",
    name: "iniciarSecion",
    component: iniciarSecion
  },
  {
    path: "/registro",
    name: "registro",
    component: Registro
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// variant 2 ******
// import   Vue from "vue";
// import    VueRouter from 'vue-router';

// import Home from '@/views/Home.vue';
// import Servicios from '@/views/Servicios.vue';


// Vue.use(VueRouter)


// const routes =[
//     {
//         path:'/',
//         name:'home',
//         component: Home
//     },
//     {
//         path:'/servicios',
//         name:'servicios-one',
//         component:Servicios
//     }
//    ]

//    const router = new VueRouter({
//     mode: "history",
//     routes
//   });
  
//   export default router;

// variant  ******1

// Vue.use(VueRouter)
// export default new VueRouter({
//    mode:'history',
//    base: process.env.BACE_URL,
//    routes:[
//     {
//         path:'/',
//         name:'home',
//         component:()=> import( /* webpackChunkName: "home" */'@/views/Home.vue')
//     },
//     {
//         path:'/servicios',
//         name:'servicios',
//         component:()=> import(/* webpackChunkName: "servicios" */'@/views/Servicios.vue')
//     }
//    ]
// })


