<!-- eslint-disable vue/multi-word-component-names -->
<template>
 <div class="cart__contenido">
     <div class="srvicios__titulo">
      <h2>Tus productos </h2>
      
  <div style="height: 230px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.85 C150.00,149.60 349.20,-49.85 500.00,49.85 L500.00,149.60 L0.00,149.60 Z" style="stroke: none; fill: #ffffff;"></path></svg></div>

     </div>
     <div class="cart-cont">
   
   
      <div class="cart-ind">
        <img class="cart-img" src="" alt="">
        <h3>Nombre producto</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos est autem laudantium cum nemo, dolorum illum quia! Nam placeat temporibus quibusdam earum consectetur, porro molestias doloribus aperiam sequi incidunt!</p>
      </div>
   
     </div>

       
  </div>
</template>


<style>
.cart-cont{
  display: flex;
  flex-direction: row;
}
.cart__titulo{
  background-color:#0a2b40;

}
.cart__titulo h2{
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  color: white;
  
}

.cart-ind{
 justify-content: center;
 align-items: center;
 width: 33%;
 height: 40%;
 background-color: #60788852;
 margin: 0 auto;
 padding:5%;
 margin:1%;
 border-radius: 20px;
 box-shadow: 2px 3px 8px black;

}

.cart-ind h3,p{
  text-align: center;
}

.cart-img{
  width: 40%;
  height: 40%;
  margin-left: 30%;
}


/* Mov  */

@media all and (max-width: 768px) {

.cart-cont{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;

  }
.cart__titulo{
  background-color:#0a2b40;

}
.cart__titulo h2{
  text-align: center;
  padding-top: 5%;
  color: white;
  
}

.cart-ind h3,p{
  text-align: left;
}
.cart-ind{
 justify-content: center;
 align-items: center;
 width: 90%;
 height: 40%;
 background-color: #60788852;
 padding:5%;
 margin:1%;
 border-radius: 20px;
 box-shadow: 2px 3px 8px black;
}

.cart-img{
  width: 40%;
  height: 40%;
  float: right;
  margin: 0;
  
}


}
</style>