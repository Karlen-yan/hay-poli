<!-- vue/multi-word-component-names -->
<template>
  <div class="servicios__contenido">
    <div class="srvicios__titulo animated fadeInDown">
      <h2 class="animated fadeInDown">Nuestros <span class="servisio__h2-span">Servicios</span></h2>
     
      <div style="height: 230px; overflow: hidden;">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%;"
        ><path
          d="M0.00,49.85 C150.00,149.60 349.20,-49.85 500.00,49.85 L500.00,149.60 L0.00,149.60 Z"
          style="stroke: none; fill: #ffffff;"
        /></svg>
      </div>
    </div>
    <div class="servisio-cont">
      <div class="servicio-ind animated fadeInLeft">
        <h3>Personalizar ropas</h3>
        <img
          class="servicio-img"
          src="https://img.freepik.com/vector-gratis/servicios-impresion-camisetas-demanda-diseno-ropa-promocional-merch-ropa-productos-personalizados-merchandising-concepto-servicio-diseno-merchandising_335657-124.jpg?w=2000"
          alt=""
        >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos est autem laudantium cum nemo, dolorum illum quia! Nam placeat temporibus quibusdam earum consectetur, porro molestias doloribus aperiam sequi incidunt!</p>
      </div>
   
      <div class="servicio-ind animated bounceInUp">
        <h3>Creación páginas web</h3> 
        <img
          class="servicio-img"
          src="https://img.freepik.com/vector-premium/horario-agenda-planificador-negocios_121223-1418.jpg?w=2000"
          alt=""
        >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos est autem laudantium cum nemo, dolorum illum quia! Nam placeat temporibus quibusdam earum consectetur, porro molestias doloribus aperiam sequi incidunt!</p>
      </div>
   
      <div class="servicio-ind animated fadeInRightBig">
        <h3>Acompañamento</h3>
        <img
          class="servicio-img"
          src="https://img.freepik.com/vector-gratis/gente-negocios-reunida-discutiendo-discusion_107791-10588.jpg?w=2000"
          alt=""
        >
          

        <p>Acompañamento de organizar eventos  adipisicing elit. Maiores dignissimos est autem laudantium cum nemo, dolorum illum quia! Nam placeat temporibus quibusdam earum consectetur, porro molestias doloribus aperiam sequi incidunt!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.servisio-cont{
  display: flex;
  flex-direction: row;
}
.srvicios__titulo{
  background-image: linear-gradient(
    to bottom,
    #02385958,
    #0238592b,
    #0238590b
  );
}
.srvicios__titulo h2{
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
  color: white;
  font-size: 3em;
  text-shadow: 0 0 1px white;
  font-family: Playfair Display, serif;
  font-weight: bold;
}
.servisio__h2-span{
  color: #647c8b; 
  text-shadow: none;
}

.servicio-ind{
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 33%;
 height: 400px;
 background-color: #4d738b;
 margin: 0 auto;
 padding:5%;
 margin:1%;
 border-radius: 20px;
 box-shadow: 2px 3px 8px black;
}

.servicio-ind h3,p{
  color: white;
  text-align: center;
  padding-top: 20px;
}
.servicio-ind h3{
  font-size: 30px;
}

.servicio-img{
  width: 50%;
  height: 50%;
  margin:0 auto;
  padding-top: 20px;

}


/* Mov  */

@media all and (max-width: 768px) {

.servisio-cont{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  

  }

.srvicios__titulo h2{
  text-align: center;
  padding-top: 8%;
  color: white;
  
}

.servicio-ind h3,p{
  text-align: left;
 

}
.servicio-ind{
 justify-content: center;
 align-items: center;
 width: 90%;
 height: 40%;
 padding:5%;
 margin:1%;
 border-radius: 20px;
 box-shadow: 2px 3px 8px black;
}
.servisio__h2-span{
  color: #647c8b; 
  text-shadow: none;
}
.servicio-img{
  width: 40%;
  height: 40%;
  float: right;
  margin: 0;
  
}
}
</style>