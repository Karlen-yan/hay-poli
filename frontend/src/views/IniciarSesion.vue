<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login">
    <div class="iniciarsesion__caja-img">
      <router-link to="/">
        <img
          class="iniciarsecion__img"
          src="@/components/img/hay-poli.png"
          alt=""
        >
      </router-link>
    </div>

    <h1>Iniciar sesion</h1>
    <form @submit.prevent="login">
      <input type="text" ref="usuario"  placeholder="Username" required="required">
      <input type="password" ref="password"  placeholder="Password"   required="required">
      <button type="submit" class="btn btn-primary btn-block btn-large">
        Iniciar sesión
      </button>
      <router-link to="/registro" class="btn btn-primary btn-block btn-large brn__registrarse">Registrarse</router-link>
    </form>
  </div>  
</template>

<script>

import axios from 'axios';

export default {
  methods: {
    login() {
      const usuario = this.$refs.usuario.value;
      const password = this.$refs.password.value;

      axios.post('http://localhost:5000/api/login', {
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

<!-- Original  -->
<!-- <template>
  <div class="login">
    <div class="iniciarsesion__caja-img">
      <router-link to="/">
        <img
          class="iniciarsecion__img"
          src="@/components/img/hay-poli.png"
          alt=""
        >
      </router-link>
    </div>

    <h1>Iniciar sesion</h1>
    <form @submit.prevent="login">
      <input type="text" ref="usuario"  placeholder="Username" required="required">
      <input type="password" ref="password"  placeholder="Password"   required="required">
      <button type="submit" class="btn btn-primary btn-block btn-large">
        Iniciar sesión
      </button>
      <router-link to="/registro" class="btn btn-primary btn-block btn-large brn__registrarse">Registrarse</router-link>
    </form>
  </div>  
</template>

<script>

import axios from 'axios';

export default {
  methods: {
  login() {
    const usuario = this.$refs.usuario.value;
    const password = this.$refs.password.value;

    axios.post('http://localhost:5000/api/login', {
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
    });
  }
}
}
</> -->


<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
.btn { display: inline-block; *display: inline; text-decoration: none;  background-color: #f5f5f5; }
.btn-large { padding: 9px 14px; font-size: 15px; line-height: normal; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; }
.btn:hover { color: #333333; text-decoration: none; background-color: #e6e6e6; background-position: 0 -15px; -webkit-transition: background-position 0.1s linear; -moz-transition: background-position 0.1s linear; -ms-transition: background-position 0.1s linear; -o-transition: background-position 0.1s linear; transition: background-position 0.1s linear; }
.btn-primary, .btn-primary:hover { text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); color: #ffffff; }
.btn-primary.active { color: rgba(255, 255, 255, 0.75); }
.btn-primary { background-color: #4a77d4; background-image: -moz-linear-gradient(top, #6eb6de, #4a77d4); background-image: -ms-linear-gradient(top, #6eb6de, #4a77d4); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#6eb6de), to(#4a77d4)); background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4); background-image: -o-linear-gradient(top, #6eb6de, #4a77d4); background-image: linear-gradient(top, #6eb6de, #4a77d4); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0);  border: 1px solid #3762bc; text-shadow: 1px 1px 1px rgba(0,0,0,0.4); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); }
.btn-primary:hover, .btn-primary:active, .btn-primary.active, .btn-primary.disabled, .btn-primary[disabled] { filter: none; background-color: #4a77d4; }

.btn-block {
     width: 20%; 
     height: 10%;
     display:block;
     margin: 0 auto;
     cursor: pointer;

    }
.brn__registrarse{
     width: 20%; 
     height: 10%;
     display:block;
     margin-top: 10px;
     background-color: rgb(32, 144, 69);
     cursor: pointer;
     text-align: center;
}
.btn-block:hover{
 box-shadow: 0px 0px 20px silver ;
  background-color: #333333b0;
}
.login { 
	/* position: absolute; */
	/* top: 0%;
  bottom: 0%; */
	width:100%;
	height: 600px;
  padding: 100px 20px 0 20px;
  background-image:url("@/components/img/fondo_iniciarsesion.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size:cover;
  clip-path: polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0 0);
  box-shadow: 2px 4px 7px  black;
  
    
}
.login h1 {
     color: #fff; 
     text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; 
     text-align:center;
     padding: 20px;
     }
 
.login input { 
    display: flex;
    flex-direction: column;
	margin: 0 auto;
    width: 50%; 
	margin-bottom: 10px; 
	background: rgba(0,0,0,0.3);
	border: none;
	outline: none;
	padding: 10px;
	font-size: 13px;
	color: #fff;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
	border: 1px solid rgba(0,0,0,0.3);
	border-radius: 4px;
	box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
	transition: box-shadow .5s ease;
    
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
    border: 1px solid white;
    border-radius: 10%;
    /* box-shadow: 3px 5px 8px silver ; */

}
.iniciarsesion__caja-img:hover{
    box-shadow: 0px 0px 20px silver ;
    background-color: #333333b0;
}
.iniciarsecion__img{
    width: 97%;
}

.espacio{
    height: 200px;

}
footer{
  /* margin-top: 500px; */
}

@media all and (max-width: 768px) {

.btn-block {
     width: 30%; 
     height: 10%;
     display:block;
     margin: 0 auto;

    }


}


/* 
.login { 
    background-color:#0a2b40d3;
	margin: 0 auto;
    margin-top: 200px;
    padding:150px;
	width:60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 3px 8px black;

}
.login h1 { color: #fff; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center; }

.login form input { 
	width: 100%; 
	margin-bottom: 10px; 
	background: rgba(0,0,0,0.3);
	border: none;
	outline: none;
	padding: 10px;
	font-size: 13px;
	color: #fff;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
	border: 1px solid rgba(0,0,0,0.3);
	border-radius: 4px;
	box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
	-webkit-transition: box-shadow .5s ease;
	-moz-transition: box-shadow .5s ease;
	-o-transition: box-shadow .5s ease;
	-ms-transition: box-shadow .5s ease;
	transition: box-shadow .5s ease;
}
.login form input:focus { box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); } */
</style>