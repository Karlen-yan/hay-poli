<template>
  <footer>
   <div class="flex-container">
        <div>
          <img class="hayPoliLogo" src="./img/hay-poli.png" alt=""><br>
           <a class="footer__informe-text" href="https://goo.gl/maps/r9vVnDNtJ8rJKirN9">C/ haypoli 189</a><br />
           <a class="footer__informe-text" href="tel:666666666">Tel:666666666</a><br />
           <a class="footer__informe-text" href="mailto:hay@poli.com">Email:hay@poli.com</a><br />
          </div>
          <div>
          <div>

 
  <a href="" title="facebook iconos" class="footer__icono-redes"><img src="@/components/img/redessociales/facebook.png" alt=""></a>
            <a href="" title="tw iconos" class="footer__icono-redes"><img src="@/components/img/redessociales/gorjeo.png" alt=""></a>
            <a href="" title="instagram iconos" class="footer__icono-redes"><img src="@/components/img/redessociales/instagram.png" alt=""></a> 
              <p>© 2023 Kinsta Inc. Todos los derechos reservados.</p> 
                    <span>Aviso legal.</span>
          </div>
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
  justify-content: center;
  align-items:center;
  width: 100%;
  text-align: center;
}

.flex-container > div {
  /* background-color: #f1f1f1; */
  margin: 15px ;
  padding: 20px;
  font-size: 19px;
  width: 40%;
  color: #f1f1f1;
  
}
.hayPoliLogo{
  width: 15%;
  

}
.footer__icono-redes img{
  width: 5%;
  margin: 0 auto;
  padding: 5px;
}

.footer__informe-text{
  
  text-decoration: none;
  color:white;
  padding-top: 25px;

}

@media all and (max-width: 768px) {

.footer__icono-redes img{
  width: 10%;
}

}
</style>