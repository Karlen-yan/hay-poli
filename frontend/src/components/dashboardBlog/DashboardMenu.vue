<template>
  <div class="nav">
    <ul>
      <li>
        <button>
          Personalizar
        </button>
      </li>
      <li>
        <button>
          Crear post
        </button>
      </li>
      <li>
        <button>
          Eliminar y editar
        </button>
      </li>
      <li>
        <button>
          Lista de usuarios
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DashboardMenu",
  data() {
    return {};
  },
  
};
</script>


<style>
.nav {
  padding-top: 50px; 
  width: 20%;
  height: 100vh;
  background-color:#023859;
  display: flex;
  justify-content: space-between;
  justify-content:center;
}

.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav li {
  margin-bottom: 10px;
}

.nav li button {
  background-color:#023859 ;
  color: #fff;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background-color: none;
}



</style>