// This is a Vue.js template that defines the HTML structure of a footer component. It includes a flex
// container with two columns, one containing contact information and the other containing social media
// icons and copyright information. The template also includes CSS styles for the footer component.
<template>
  <footer>
    <div class="flex-container">
      <div>
        <img
          class="hayPoliLogo"
          src="./img/hay-poli.png"
          alt=""
        >
        <a
          class="footer__informe-text"
          href="https://goo.gl/maps/r9vVnDNtJ8rJKirN9"
        >C/ haypoli 189</a>
        <a
          class="footer__informe-text"
          href="tel:666666666"
        >Tel:666666666</a>
        <a
          class="footer__informe-text"
          href="mailto:hay@poli.com"
        >Email:hay@poli.com</a>
      </div> 
      <div>
        <div>
          <a
            href=""
            title="facebook iconos"
            class="footer__icono-redes"
          ><img
            src="@/components/img/redessociales/facebook.png"
            alt=""
          ></a>
          <a
            href=""
            title="tw iconos"
            class="footer__icono-redes"
          ><img
            src="@/components/img/redessociales/gorjeo.png"
            alt=""
          ></a>
          <a
            href=""
            title="instagram iconos"
            class="footer__icono-redes"
          ><img
            src="@/components/img/redessociales/instagram.png"
            alt=""
          ></a>
          <p>© 2023 Kinsta Inc. Todos los derechos reservados.</p>
          <span>Aviso legal.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

// This is a Vue.js script that exports a default object with a `name` property set to "Footer". This
// is used to define the name of the Vue component, which can be used in other parts of the application
// to reference this component.

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>
<style>
footer {
  /* position: relative; */
  /* bottom: 0; */
   /* background-color: #60788852; */
  opacity: 0.7;
  width: 100%;
}

h1 {
  text-align: center;
}

.flex-container {
  display: flex;
  background-color: #023859;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
}

.flex-container > div {
  /* background-color: #f1f1f1; */
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  font-size: 19px;
  width: 40%;
  color: #f1f1f1;
}
.hayPoliLogo {
  width: 15%;
  margin:0 auto;
}
.footer__informe-text {
  text-decoration: none;
  color: white;
  padding-top: 10px;

}
.footer__informe-text:hover{
  color: rgb(16, 171, 238);
}
.footer__icono-redes img {
  width: 5%;
  margin: 0 auto;
  padding: 5px;
}

@media all and (max-width: 768px) {
  .footer__icono-redes img {
    width: 10%;
  }
}
</style>