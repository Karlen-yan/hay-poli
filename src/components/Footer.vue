<template>
  <footer>
   <div class="flex-container">
        <div>
          <div>
          <img class="hayPoliLogo" src="./img/hay-poli.png" alt="">
          </div>
          <div>
           <a href="#">C/ haypoli 189</a><br />
           <a >Tel:666666666</a><br />
           <a >Email:hay@poli.com</a><br />
 
          </div>

        </div>
        <div>
            <a>Text de enlases coon iconos redes sociales </a><br/> 
            <a>Text de enlases coon iconos redes sociales </a><br/> 
            <a>Text de enlases coon iconos redes sociales </a><br/> 
            <a>Text de enlases coon iconos redes sociales </a><br/> 
            <a>Text de enlases coon iconos redes sociales </a><br/> 
        
        </div>
        <div>
                    <p>© 2023 Kinsta Inc. Todos los derechos reservados.
Kinsta® y WordPress® son marcas registradas.</p> <span>Aviso legal.</span>
        </div>  
   </div>
  </footer>
</template>


<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>
<style>
footer {
  position: relative;
  bottom: 0;
  background-color: #02385938;
  opacity: 0.7;
  width: 100%;
  margin-top: 500px;
}
h1 {
  text-align: center;
}

.flex-container {
  display: flex;
  background-color: #023859;
}

.flex-container > div {
  /* background-color: #f1f1f1; */
  margin: 10px;
  padding: 20px;
  font-size: 30px;
  width: 33%;
  color: #f1f1f1;
  
}
.hayPoliLogo{
  width: 40%;

}
</style>