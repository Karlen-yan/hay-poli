<template>
  <div id="app">
    <NavBar />
    <Home />   
    <!-- <Footer /> -->
    <Footer />
  </div>
</template>

<script>
// eslint-disable-next-line
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "App",
  components: {
    NavBar,
    Footer 

  }
  };
</script>

<style>

* {
  margin: 0;
}
body{
  font-family: "Times New Roman", Times, serif;

}
.container {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-areas:
    "main";

  background-color: #02385958;
  justify-content: center;
  align-items: center;
}

main {
  grid-area: main;
}

/* Sliders */
.slider {
  width: 100%;
  height: 100vh;
  margin-top: 60px;
  margin-bottom: 50px;
  overflow: hidden;
  z-index: 1;
}
.slider-container {
  padding: 0;
  margin: 0;
  display: flex;
  width: 300%;
  height: 400px;
  animation: slider 20s infinite alternate linear;
  z-index: 1;
}
.slider-container > figure {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  user-select: none;
}
.img-responsive {
  width: 100%;
  height: auto;
  z-index: 1;
}
@keyframes slider {
  0% {
    margin-left: 0;
  }
  20% {
    margin-left: 0;
  }

  50% {
    margin-left: -100%;
  }
  75% {
    margin-left: -100%;
  }

  75% {
    margin-left: -200%;
  }
  100% {
    margin-left: -200%;
  }
}
/* btn slider  */
.caja_slider_text_btn {
  position: absolute;
  color: #023859;
  top: 30%;
  padding: 15px;
  width: 100%;
  background: rgba(255, 255, 255, 0.233);
}
.caja_slider_text_btn > h1 {
  font-size: 40px;
}

/* ***** hay que acabar  ****  **/
/* Boton de slider 1   */
.btn_slider {
  position: absolute;
  background-color: rgba(140, 144, 148, 0.789);
  padding: 10px;
  margin-top: 50px;
  margin-left: 50%;
  text-decoration: none;
  color: white;
  font-size: 30px;
}
/******* fin slider ****/

/* Slider ***START***2 */
.raiz_slider2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}
.slider2 {
  position: relative;
  width: 420px;
  height: 300px;
  cursor: pointer;
  box-shadow: 1px 10px 25px rgba(0, 0, 0, 0.5);
}
.slider2 div {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* Cajas de imagenes de slider 2  */

/*1 Primera caja con animacion  */
.caja1 {
  background: url("https://www.euroresidentes.com/estilo-de-vida/moda-estilo/wp-content/uploads/sites/15/2015/07/diy-fashion-facil.jpg");
  background-size: 100% 100%;
}
.caja2 {
  background: url("https://yourpromowear.com/img/cms/Blog/personalizacion-camisetas.png");
  background-size: 100% 100%;
  transition: 0.6s;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%);
}
.caja2:hover {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.caja1:hover ~ .caja2 {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}
/* 2Secunda caja con animacion  */
.caja3 {
  background: url("https://i.ytimg.com/vi/3N2mJFz06To/maxresdefault.jpg");
  background-size: 100% 100%;
}
.caja4 {
  background: url("https://http2.mlstatic.com/D_NQ_NP_648031-MLA31040816093_062019-O.jpg");
  background-size: 100% 100%;
  transition: 0.6s;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%);
}

.caja4:hover {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.caja3:hover ~ .caja4 {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}
/* 3 tersera caja con animacion  */
.caja5 {
  background: url("https://i.ytimg.com/vi/Yy505vIfQdU/maxresdefault.jpg");
  background-size: 100% 100%;
}
.caja6 {
  background: url("https://litb-cgis.rightinthebox.com/images/640x853/202112/bps/product/inc/pyyojp1638339861293.jpg");
  background-size: 100% 100%;
  transition: 0.6s;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%);
}
.caja6:hover {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.caja5:hover ~ .caja6 {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}
/* fin de  slider 2  */

/* Movil  */
@media all and (max-width: 768px) {
  .container {
    display: grid;
    grid-template-areas:
      "main";
  }

  header {
    grid-area: header;
    width: 100%;
  }
  main {
    grid-area: main;
  }
  footer {
    grid-area: footer;
    width: 100%;
  }

  /* Slider ***START***2 */
  .raiz_slider2 {
    display: flex;
    margin: 0;
    flex-direction: column-reverse;
    align-items: center;
  }
  .slider2 {
    margin-top: 30px;
  }
}
</style>