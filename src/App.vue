<template>
  <div id="app">
    <header>
      <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicio(Prs_Rop)</a></li>
            <li><a href="#">Contactos</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Buscador</a></li>
            <li><a href="#">Registrarse(bolsa)</a></li>
          </ul>
      </nav>
      <!-- <Navbar >
            Header
           </Navbar> -->
    </header>
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue';

export default {
  name: "App",
  components: {
    //  NavBar
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

body{
  margin: 0;
}
nav {
  background-color: rgba(0, 0, 0, 0.707);
  opacity: .65;
  padding: 12px 0 12px 0 ;

}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
}
nav ul a {
  color: white;
  text-decoration: none;
  padding: 0 20px 0 20px;
}

span.icon{
  width: 20px;
  height: 20px;
  background-size: 100% 100%;
}
.hay-poli{
  background-image: url();
}
</style>
