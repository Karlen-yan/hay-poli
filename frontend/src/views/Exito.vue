<!-- eslint-disable vue/multi-word-component-names -->
// This is a Vue HTML template that defines the structure and content of a success message box. It
// contains a div with a class of "caja__exito" which serves as the container for the success message.
// Inside this div, there is another div with a class of "caja__exito-contenido" which contains the
// actual success message. The message is composed of two h1 elements, one with a class of "h1__icono"
// which displays a checkmark emoji, and another with a class of "h1__texto" which displays the text
// "La operacion se ha realizado con éxito" (The operation has been successfully completed).
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
 }
</style>