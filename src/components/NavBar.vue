<template>
  <header>
    <nav>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <img class="menu-icon" src="img/menu.png" alt="">
      </label>
      <ul>
        <li><a href="#" class="icon hay-poli"></a></li>
        <li class="font-siz"><a href="#">Servicio(Prs_Rop)</a></li>
        <li class="font-siz"><a href="#">Contactos</a></li>
        <li class="font-siz"><a href="#">Blog</a></li>
        <li><a href="#" class="icon lupa"></a></li>
        <li>
          <a href="#" class="icon bolsa-compra"></a>
          <ul>
            <li><a href="">(img) Bolsa </a></li>
            <li><a href="">(img caja) Pedido</a></li>
            <li><a href="">(img) Cuenta</a></li>
            <li><a href="">(img) Iniciar sesión </a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

// Style menu 

<style>

/* submenu */
nav ul li ul {
  width: 130px;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: absolute;
  top: 50px;
  right: -15px;
  visibility: hidden;
  opacity: 0;
  z-index: 10;
  transition: all 330ms ease;
  border-radius: 20px;
}
nav ul li:hover ul {
  visibility: visible;
  opacity: 1;
  
}
nav ul li ul li a {
  display: block;
  font-size: 14px;
  text-transform: uppercase;
  transform: all 300ms ease;
  color: #023859;
  top: 50px;
  padding: 5px;
  margin:10px;
  border-bottom:  silver solid 2px ;
  
}
nav ul li ul li a:hover {
  background-color: #02385938;
  transform: scale(1.1);
  text-shadow: 2px 4px 6px 10px black;
  width: 100px;

}

.font-siz {
  margin-top: 5px;
}

.icon {
  height: 35px;
  background-repeat: no-repeat;
  background-position: 0.33px 3px;
  display: block;
}
.hay-poli {
  background-image: url("./img/hay-poli.png");
  background-size: 120% 120%;
  margin-top: -5px;
}



.lupa {
  background-image: url("./img/busqueda.png");
  background-size: 40%;
  margin-left: 11px;
}

.bolsa-compra {
  background-image: url("./img/bolsa-compra.png");
  background-size: 40%;
}



/* hamburgesa  */
.menu-icon{
  width: 30px;
  height: 30px;
  border-radius: 2px;
}
.menu-icon,#check{
  display: none;
}


nav {
  background-color: #0d0d0d;
  /* background-color: #0a2b40a8; */
  opacity: 0.7;
  padding: 12px 0 12px 0;
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
</style>