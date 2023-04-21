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
          <div>
            <input type="text" v-model="searchQuery" @keyup.enter="handleInput" placeholder="Buscar...">
            <ul>
              <li v-for="item in filteredItems" :key="item">
                 {{ item }}
              </li>
            </ul>
          </div>
        </li>
        <li>
        </li>
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
    <router-view />
  </header>
</template>

<script>

export default {
  name: "NavBar",
  watch: {
    $route() {
      this.$emit("scroll-to-top");
    },
  },
  data() {
    return {
      searchQuery: '',
      items: ['camiceta', 'camiceta blanca', 'pantalones', 'camisa', 'chaqueta', 'chaqueta roja', 'camiceta amarilla','camiceta negra'],
      productRoute: '/getproduct'
    }
  },
  computed: {
    filteredItems() {
      if (!this.searchQuery) {
        return this.items
      } else {
        const lowerCaseQuery = this.searchQuery.toLowerCase()
        return this.items.filter(item => item.toLowerCase().includes(lowerCaseQuery))
      }
    }
  },
  methods: {
    handleInput(event) {
      const input = event.target.value.toLowerCase()
      this.searchQuery = input
      
      if (this.filteredItems.length > 0) {
        const productName = this.filteredItems[0]
        const product = { name: productName }
        this.$router.replace({ path: this.productRoute, query: { product: encodeURIComponent(JSON.stringify(product)) } })
      }
      // Actualizar la clave del componente
      this.productRoute = this.$route.fullPath;
      console.log()
    },
  }
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
nav ul div:hover ul {
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



/* contenedor de barra de busqueda  */
input[type="text" i]{
  margin-top: 5px;
  margin-right: 15px;
  padding:4px;
  border-radius: 5px;

}
/* caja pequeña de buscador  */


/* ************* */
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
    font-size: 15px;
  
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