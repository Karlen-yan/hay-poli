<template>
  <header>
    <nav>
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

<style>
body {
  margin: 0;
  background-color: #02385958;
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
/* submenu */
nav ul li ul {
  width: 320px;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: absolute;
  top: 50px;
  right: -130px;
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
/* nav ul li ul::before {
  content: "";
  width: 0;
  height: 0;
  color: #023859;

  border-radius: 20%;
  position: absolute;
} */
nav ul li ul li a {
  display: block;
  margin-left: 14px;
  margin-top: 10px;
  font-size: 14px;
  text-transform: uppercase;
  transform: all 300ms ease;
  color: #023859;
  top: 50px;
  right: -20px;
  padding: 5px;
  margin:10px;
  border-bottom:  silver solid 2px ;
}
nav ul li ul li a:hover {
  background-color: #02385938;
  transform: scale(1.1);
  text-shadow: 2px 4px 6px 10px black;
  width: 200px;
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

.hay-poli:hover {
  box-shadow: 3px 4px 6px silver;
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
</style>