<!-- eslint-disable vue/multi-word-component-names -->
// The `template` tag contains the HTML code for a Vue component that represents a login form. The
// form includes input fields for the user's username and password, a submit button, and a link to the
// registration page. The component also includes a reference to a method called `login` that is
// triggered when the form is submitted.
<template>
  <div class="login animated fadeInDown">
    <div class="iniciarsesion__caja-img animated fadeInDown">
      <router-link to="/">
        <img
          class="iniciarsecion__img"
          src="@/components/img/hay-poli.png"
          alt=""
        >
      </router-link>
    </div>

    <h1 class="animated fadeInDown">Iniciar sesion</h1>
    <form @submit.prevent="login">
      <input type="text" ref="usuario"  placeholder="Username" required="required">
      <input type="password" ref="password"  placeholder="Password"   required="required">
      <button type="submit" class="btn btn-primary btn-block btn-large">
       <span style="color:white; ">Iniciar</span> sesión
      </button>
      <router-link to="/registro" class="btn btn-primary btn-block btn-large brn__registrarse">Registrarse</router-link>
    </form>
  </div>  
</template>

// The `script` tag contains JavaScript code that defines a Vue component. The component has a
// `login` method that sends a POST request to a login API endpoint using the Axios library. If the
// request is successful, the user object returned by the API is stored in the browser's localStorage
// and the user is redirected to the dashboard page. If the request fails, an error message is
// displayed.
<script>

import axios from 'axios';

export default {
  methods: {
    login() {
      const usuario = this.$refs.usuario.value;
      const password = this.$refs.password.value;

      axios.post('https://hay-poli.onrender.com/api/login', {
        
        // en local
      // axios.post('http://localhost:5000/api/login', {
        usuario: usuario,
        password: password
      })
      .then(response => {
        const user = response.data.user;
        localStorage.setItem('user', JSON.stringify(user)); // Store user in localStorage
        this.$router.push('/dashboard'); // Redirect to dashboard
      })
      .catch(error => {
        // handle error
        console.error(error);
        alert('Nombre de usuario o contraseña incorrectos');
      });}}}

</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
.btn { display: inline-block; display: inline; text-decoration: none;  background-color: #f5f5f5; }
.btn-large { padding: 9px 14px; font-size: 15px; line-height: normal; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; }
.btn:hover { color: #333333; text-decoration: none; background-color: #e6e6e6; background-position: 0 -15px; -webkit-transition: background-position 0.1s linear; -moz-transition: background-position 0.1s linear; -ms-transition: background-position 0.1s linear; -o-transition: background-position 0.1s linear; transition: background-position 0.1s linear; }
.btn-primary, .btn-primary:hover { text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); color: #ffffff; }
.btn-primary.active { color: rgba(255, 255, 255, 0.75); }
.btn-primary { background-color: #4a77d4; background-image: -moz-linear-gradient(top, #6eb6de, #4a77d4); background-image: -ms-linear-gradient(top, #6eb6de, #4a77d4); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#6eb6de), to(#4a77d4)); background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4); background-image: -o-linear-gradient(top, #6eb6de, #4a77d4); background-image: linear-gradient(top, #6eb6de, #4a77d4); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0);  border: 1px solid #3762bc; text-shadow: 1px 1px 1px rgba(0,0,0,0.4); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); }
.btn-primary:hover, .btn-primary:active, .btn-primary.active, .btn-primary.disabled, .btn-primary[disabled] { filter: none; background-color: #4a77d4; }

.btn-block {
     width: 15%; 
     height: 10%;
     display:block;
     margin: 0 auto;
     cursor: pointer;
     margin-top: 30px;
    }
.brn__registrarse{
     width: 15%; 
     height: 10%;
     display:block;
     margin-top: 15px;
     background-color: rgb(32, 144, 69);
     cursor: pointer;
     text-align: center;
}
.btn-block:hover{
 box-shadow: 0px 0px 20px silver ;
  background-color: #02385958;
}
/* login  */
.login { 
	width:100%;
	height: 600px;
  padding: 100px 20px 0 20px;
  background-image: linear-gradient(
    to bottom,
    #02385958,
    #02385946,
    #02385915
    );
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size:cover;
    clip-path: polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0 0);
  box-shadow: 2px 4px 7px  black;
  
    
}
.login h1 {
     color: #023859; 
     text-shadow: 0 0 2px #fff; letter-spacing:1px; 
     text-align:center;
     padding: 10px;
     margin-bottom: 5px;
     margin-top: 5px;
     }
 
.login input { 
  display: flex;
  flex-direction: column;
	margin: 0 auto;
  width: 30%; 
	margin-bottom: 20px; 
	background-color: #02385900 ;
  border: none;
	border-bottom: 2px solid white;
	outline: none;
	padding: 10px;
	font-size: 13px;
	color: #023859;
	border-radius: 4px;
	transition: box-shadow .5s ease;
    
}
.login input::placeholder{
  color:#023859;
}
.login input:focus { 
    box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2);
    }
.iniciarsesion__caja-img{
    width: 15%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    border-radius: 10%;
    background-color: #02385958;
    border: 2px white solid;
}
.iniciarsecion__img{
    width: 97%;
    color: #66D8F2;
}

.espacio{
    height: 200px;

}
@media all and (max-width: 768px) {

.btn-block {
     width: 30%; 
     height: 10%;
     display:block;
     margin: 0 auto;

    }


}

</style>