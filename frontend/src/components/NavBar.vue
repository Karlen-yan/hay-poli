<template>
  <header>
    <nav>
      <input
        id="check"
        type="checkbox"
      >
      
      <label
        for="check"
        class="checkbtn"
      >
        <img
          class="menu-icon"
          src="./img/menu1.png"
          alt="Nkar"
        >
      </label>
      
      <ul>
        <li>
          <router-link
            to="/"
            class="hay-poli"
          />
        </li>
        <li class="enlasesMenu">
          <router-link to="/servicios">
            Servicios
          </router-link>
        </li>
        <li class="enlasesMenu">
          <router-link to="/contactos">
            Contactos
          </router-link>
        </li>
        <li class="enlasesMenu">
          <router-link to="/blog">
            Blog
          </router-link>
        </li>
        <li>
          <a
            id="icon-search"
            class="icon lupa"
          />
        </li>
        <!-- <li><a href="#" class="icon lupa" id="icon-search"></a></li> -->
        <li>
          <a
            href="#"
            class="icon bolsa-compra"
          />
          <ul>
            <li>
              <router-link to="/cart">
                <img
                  class="navbar__menu-icono"
                  src="@/components/img/iconosmenu/bolsa_compra.png"
                  alt=""
                >  Bolsa
              </router-link>
            </li>
            <li>
              <router-link to="/pedido">
                <img
                  class="navbar__menu-icono"
                  src="@/components/img/iconosmenu/bolsa_pedido.png"
                  alt=""
                >  Pedido
              </router-link>
            </li>
            <li>
              <router-link to="/registro">
                <img
                  class="navbar__menu-icono"
                  src="@/components/img/iconosmenu/registro.png"
                  alt=""
                > Registrarse
              </router-link>
            </li>
            <li>
              <router-link to="/iniciarsecion">
                <img
                  class="navbar__menu-icono"
                  src="@/components/img/iconosmenu/perfil_usuario.png"
                  alt=""
                > Iniciar sesión
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
  
  <!-- buscador -->
  <!-- <div id="ctn-bars-search"><input type="text" id="inputSearch" placeholder="¿Qué deseas buscar?"></div>
  <ul id="box-search">
      <li><a href="#" class="icon lupa">HTML</a></li>
      <li><a href="#" class="icon lupa">CSS</a></li>
      <li><a href="#" class="icon lupa">JS</a></li>
      <li><a href="#" class="icon lupa">PHP</a></li>
      <li><a href="#" class="icon lupa">NODEJS</a></li>
      <li><a href="#" class="icon lupa">VUEJS</a></li>
  </ul>
  <div id="cover-ctn-search"></div> -->
  <router-view />
</template>

<script>

export default {
  name: "NavBar",
};
</script>

// Style menu 

<style>
/* submenu */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
nav ul li ul {
  width: 280px;
  height: 180px;
  display: flex;
  flex-direction: column;
  background-color: #023859;
  color: white;
  position: absolute;
  top: 50px;
  right: -15px;
  visibility: hidden;
  /* opacity: 1; */
  z-index: 10;
  transition: all 330ms ease;
  border-radius: 20px;
}
nav ul li:hover ul {
  visibility: visible;
  /* opacity: 1; */
  background-color: #023859;
}
nav ul li ul li a {
  display: block;
  font-size: 14px;
  text-transform: uppercase;
  transform: all 300ms ease;
  color: white;
  top: 50px;
  padding: 5px;
  margin-top: 4px;
  border-bottom: silver solid 2px;
  white-space: nowrap;
  width: 85%;
  z-index: 3;
  font-family: "Lucida Console", "Courier New", monospace;

}
nav ul li ul li a:hover {
  background-color: #3b596b;
  transform: scale(1.1);
  text-shadow: 2px 4px 6px 10px black;
}
.navbar__menu-icono{
  width: 10%;
  background-color: #ffffff;
  border-radius: 5px;
  }

/* Buscador de contenidos  */
#ctn-icon-search{
   position: absolute;
   right: 20px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
}
#ctn-icon-search >i{
  font-size: 18px;
  color: red;
  cursor: pointer;
  transition: all 300ms;
}
#ctn-icon-search > i:hover{
   color:blue;  
}

/* contenedor de barra de busqueda  */
#ctn-bars-search{
  position:fixed;
  top: -100px;
  width: 1200px;
  background-color: white;
  padding: 20px;
  z-index: 9;
  left: 50%;
  transform: translate(-50%);
  transition: all 600ms;

}
#ctn-bars-search > input{
  display: block;
  width: 1160px;
  margin: 1px;
  padding: 10px;
  font-size: 18px;
  outline: 0;
  
}
/* caja pequeña de buscador  */

#box-search{
  position: fixed;
  top:165px;
  left: 50%;
  transform: translate(-50%);
  width: 1200px;
  background-color: white;
  z-index: 8;
  overflow: hidden;
list-style-type:none;
}

#box-search > li a{
   display: block;
   width: 1200px;
   color: silver;
   padding:12px 20px;
   
}
#box-search > li a:hover{
background-color: red;
}
#box-search > li a {
  margin-right: 18px;
  color: #777777;
}
#cover-ctn-search{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  background-color:rgba(0,0,0,0.5);
  z-index: 7;
}
.enlasesMenu {
  margin-top: 5px;
}
/*algunos de  estilos de todos los iconos  */
.icon {
  height: 35px;
  background-repeat: no-repeat;
  background-position: 0.33px 3px;
  display: block;
}
/* Logo general  */
.hay-poli {
  background-image: url("./img/hay-poli.png");
  background-repeat: no-repeat;
  background-size: 120% 130%;
  margin-top: -19px;
}

/* icono de busqueda de menu  */
.lupa {
  background-image: url("./img/busqueda.png");
  background-size: 40%;
  margin-left: 11px;
}

/* icono de compras d menu  */
.bolsa-compra {
  background-image: url("./img/bolsa-compra.png");
  background-size: 40%;
}

/* hamburgesa  */
.menu-icon {
  position: fixed;
  top: 0;
  width: 40px;
  height: 25px;
  border-radius: 2px;
  z-index: 1;
}
.menu-icon,
#check {
  display: none;
}

nav {
  /* background-color: #0d0d0d; */
  background-color: #0a2b40a8;
  opacity: 0.7;
  padding: 12px 0 12px 0;
  background-position: fixed;
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
  padding: 0 33px 0 33px;
  font-size: 1rem;
}
nav > ul > li {
  position: relative;
}

/* Movil  */
@media all and (max-width: 768px) {
  /* hamburgesa  */
  /* menu */

  .checkbtn {
    display: block;
  }
  .menu-icon {
    display: block;
    top: -4px;
    right: 20px;
    cursor: pointer;
    width: 30px;
    margin: 2px;
    background-color: rgba(255, 255, 255, 0.873);
    box-shadow: 3px 4px 5px;
  }

  nav ul {
    position: fixed;
    top: 0px;
    display: block;
    top: -110%;
    background-color: #222;
    width: 100%;
    height: 80vh;
    right: 0;
    transition: all 3s ease;
    border-radius: 0% 0% 30% 30%;
    font-size: 60px;
  }
  nav > ul > li {
    display: flex;
    text-align: center;
    justify-content: center;
    align-self: center;
    top: 20%;
    padding-top: 15px;
  }
  nav ul li:last-child {
    background-color: none;
    padding: 10px;
    justify-content: center;
    align-self: center;
  }
  #check:checked ~ ul {
    top: 0;
    background-color: #023859;
  }
  nav ul li > ul {
    background-color: #023859dd;
  }

  /* campo oculto de compras  */
  nav ul li ul {
    width: 280px;
    height: 180px;
    display: flex;
    background-color: #023859;
    position: absolute;
    top: 60px; 
    visibility: hidden;
    opacity: 1;
    z-index: 10;
    transition: all 330ms ease;
    border-radius: 20px;
    left:30%;
  }
  /* campo oculto de compras  (hover ) */

  nav ul li:hover ul {
    visibility: visible;
    opacity: 3;
    background-color: #023859;

  }

  /* icono de busqueda  movile */

  .lupa {
    background-image: url("./img/busqueda.png");
    background-size: 40%;
    background-position-x: 10px;
    background-position-y: 10px;
  }

  /* icono de compra  movile */
  .bolsa-compra {
    background-image: url("./img/bolsa-compra.png");
    background-size: 40%;
    background-position-x: 15px;
    background-position-y: 10px;
  }

  /* Logo general  movile */
  .hay-poli {
    background-image: url("./img/hay-poli.png");
    background-size: 110% 110%;
    width: 80px;
    height: 100px;
    margin-top: -5px;
  }
}
</style>