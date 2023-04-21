<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="caja__exito">
      <div class="caja__exito-contenido">
        <h1 class="h1__icono"> ✅ </h1>
        <h1 class="h1__texto">El post se ha guardado corectamente</h1>
      </div>
      
      <div>
          <router-link to="/dashboard" class="btn-back"> Atras</router-link>
      </div>
       
    </div>
  </template>
  
  <style>
       .caja__exito{
          padding: 10%;
          background-color: rgb(95, 120, 136);
       }
       .caja__exito-contenido{
          width: 60%;
          margin: 0 auto;
          border: 1.50px dotted  greenyellow;
          padding: 5% 0 10% 0;
          background-color:  rgba(172, 255, 47, 0.33);
       }
   .h1__icono{
      text-align: center;
      font-size: 100px;
      margin: 0 auto;
   }
   .h1__texto{
      text-align: center;
      color: greenyellow;
      /* font-size: 20px; */
   }
   /* button  */
.btn-back{
  text-align: center;
  text-decoration: none;
  background-color: rgb(56, 84, 103);
  color: white;
  font-size: 18px;
  padding: 10px;
}
.btn-back:hover{
  background-color: rgba(56, 84, 103, 0.584);
  color: black;
}
  </style>