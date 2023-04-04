<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="caja__exito">
    <div class="caja__exito-contenido">
      <h1 class="h1__icono"> ✅ </h1>
      <h1 class="h1__texto">  La operacion se ha realizado con éxito</h1>
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
</style>