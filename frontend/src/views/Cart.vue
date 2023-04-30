<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cart__contenido">
    <div class="cart__titulo">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="cart__content">
        <h2>Tus productos </h2>
        <CartItemCard 
          v-for="data in products"
          :key="data.id"
          :data="data"
           class="animated zoomIn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue'
export default {
   components:{
    CartItemCard
   },
  props: ["data", "active"],
  computed: {
    products(){
        return this.$store.getters.cartItems;

    }
}
}
</script>

<style>

.cart__contenido{
  height: 700px;
}
.cart__titulo{
  background-color:rgb(95, 120, 136);

}
.cart__titulo h2{
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-top: 7%;
  color: white;
  font-size: 3rem;  
}
/* Animacion Fondo  */
.bg {
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #023859 50%, #07668C 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:4s;
}

.bg3 {
  animation-duration:5s;
}

.cart__content {
  background-color:rgba(255,255,255,.8);
  border-radius:.25em;
  box-shadow:0 0 .25em rgba(0,0,0,.25);
  box-sizing:border-box;
  left:50%;
  padding:10vmin;
  position:fixed;
  text-align:center;
  top:50%;
  transform:translate(-50%, -50%);
}

.cart__content >h2 {
  color: #023859;
  font-size: 3rem;
}

@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
  }

/* Mov  */

@media all and (max-width: 768px) {
.cart__titulo{
  background-color:#0a2b40;

}
.cart__titulo h2{
  text-align: center;
  padding-top: 5%;
  color: white;
}
}
</style>