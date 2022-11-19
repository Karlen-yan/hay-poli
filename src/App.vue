<template>
  <div id="app">
    <div class="container">
      <NavBar />
      <main>
        <div class="contenido">
          <section class="Caja_echarVistazo">
            <article>
              <h1>Ropa personalizada para creadores de marca</h1>
              <a href="#" class="btn echarUnVistazo">Echar un vistazo ></a>
              <div class="caja_crear_top_h2">
                <h2>Crea ropa personalizada con tu Marca</h2>
                <p>
                  ¿Hace tiempo que le das vueltas a lo de
                  <b>crear una marca de ropa</b>? ¿Quieres diseñar camisetas
                  personalizadas que realmente te apetezca llevar? En
                  <a href="#">Hay Poli</a> te ayudamos a dar rienda suelta a tu
                  creatividad y a rentabilizar tus diseños.
                </p>
              </div>
            </article>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.container {
  display: grid;
  
  grid-template-areas:
    "header header header"
    "main main main"
    "footer footer footer";
}
header {
  grid-area: header;
}
main {
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: center;
}
footer {
  grid-area: footer;
}
/* .contenido{
  
  display: flex;
  justify-content:center;
  align-items: center;
} */
.Caja_echarVistazo {
  background-color: aliceblue;
  background-image: url("https://www.thegreencopy.com/images/impresion-de-camisetas-foto029a-pena-las-katas-gabriela-the-green-copy-shirt-madrid.jpg?crc=291552940");
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: 100%;
  max-width: 100%;
  margin: 0 auto;
}

.Caja_echarVistazo > article {
  background: rgba(44, 44, 41, 0.484);
}
h1 {
  color: white;
  padding-top: 20px;
  font-size: 30px;
  text-shadow: 1px 0px 1px silver, 3px 1px 2px rgba(255, 255, 0, 0.625),
    3px 1px 0px black;
}
.echarUnVistazo {
  background-color: rgba(190, 190, 34, 0.46);
  padding: 5px;
  text-decoration-line: none;
  color: white;
  transform: translate(50) rotate(-45deg);
}
.echarUnVistazo:hover {
  background-color: rgba(255, 255, 0, 0.625);
  padding: 5px;
  height: 380%;
}
h2 {
  color: white;
  padding-left: 7px;
}
.caja_crear_top_h2 {
  background-color: rgba(153, 153, 67, 0.847);
}
p {
  color: white;
  padding: 7px;
}
</style>