<!-- eslint-disable vue/multi-word-component-names -->
<!-- This is a template for a registration form in HTML and Vue.js. The form includes fields for username, name, phone number, email, password, and a confirmation of the password. The form also includes validation messages for each field.

In addition, the form uses some CSS classes from the Animate.css library to add some animation effects to the form.

The Vue.js code for the form includes a submitForm method that will be called when the form is submitted. The method will perform some validation of the form fields, and if the form is valid, it will send the form data to the server using an HTTP request.

Overall, this template provides a good starting point for creating a registration form for a web application. -->
<template>
  <div>
    <div class="registro animated fadeInDown">
      <h1 class="animated fadeInDown">Registrate</h1>
      <div style="height: 280px; margin-top: -120px; overflow: hidden;">
        <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%;"
        ><path
        d="M0.00,49.85 C150.00,149.60 349.20,-49.85 500.00,49.85 L500.00,149.60 L0.00,149.60 Z"
        style="stroke: none; fill: #ffffff;"
        /></svg>
      </div>
    </div>
    <form
      id="formulario"
      @submit.prevent="submitForm"
      class="formulario  animated bounceInUp"
    >
      <!-- grupo  usuario -->
      <div
        id="grupo__usuario"
        class="form__grupo"
      >
        <div class="form__grupo-input">
          <input
            id="usuario"
            type="text"
            name="usuario"
            class="form__input"
            placeholder="Usuario"
            v-model="usuario"
            required
          >

          <i class="form__validacion-estado  fas fa-times-circle" />
        </div>
        <p class="form__input-error" v-if="error" :style="{ display: error ? 'block' : 'none' }">
          El usuario tiene que ser 4 a 16 digitos
        </p>
      </div>
      <!-- grupo  nombre -->
            
      <div
        id="grupo__nombre"
        class="form__grupo"
      >
        <div class="form__grupo-input">
          <input
            id="nombre"
            type="text"
            name="nombre"
            class="form__input"
            v-model="nombre"
            placeholder="Nombre"
            required
          >

          <i class="form__validacion-estado  fas fa-times-circle" />
        </div>
        <p class="form__input-error" v-if="error" :style="{ display: error ? 'block' : 'none' }">
          El  nombre tiene que ser 4 a 16 digitos
        </p>
      </div>
      <!-- grupo  telefono -->
            
      <div
        id="grupo__telefono"
        class="form__grupo"
      >
        <div class="form__grupo-input">
          <input
            id="telefono"
            type="tel"
            name="telefono"
            class="form__input"
            v-model="telefono"
            placeholder="Teléfono"
            required
          >

          <i class="form__validacion-estado  fas fa-times-circle" />
        </div>
        <p class="form__input-error" v-if="error" :style="{ display: error ? 'block' : 'none' }">
          El telefono  tiene que  ser 9 numeros
        </p>
      </div>

      <!-- grupo  correo -->
            
      <div
        id="grupo__correo"
        class="form__grupo"
      >
        <div class="form__grupo-input">
          <input
            id="correo"
            type="email"
            name="correo"
            class="form__input"
            v-model="correo"
            placeholder="Correo Electronico"
            required
          >

          <i class="form__validacion-estado  fas fa-times-circle" />
        </div>
        <p class="form__input-error" v-if="error_correo" :style="{ display: error_correo || error ? 'block' : 'none' }">
          En este campo es importante el siguiente  sinvolo @
        </p>
      </div>
      <!-- grupo  Contraseña  -->
            
      <div
        id="grupo__password"
        class="form__grupo"
      >
        <div class="form__grupo-input">
          <input
            id="password"
            type="password"
            name="password"
            class="form__input"
            v-model="password"
            placeholder="Contraseña"
            required
          >

          <i class="form__validacion-estado  fas fa-times-circle" />
        </div>
        <p class="form__input-error" v-if="error_password" :style="{ display: error_password  ? 'block' : 'none' }">
          La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número</p>
      </div>

      <!-- Repetición de la contraseña  -->


      <div
        id="grupo__password2"
        class="form__grupo"
      >
        <div class="form__grupo-input">
          <input
            id="password2"
            type="password"
            name="password2"
            class="form__input"
            placeholder="Repetir Contraseña"
            v-model="password2">

          <i class="form__validacion-estado  fas fa-times-circle" />
        </div>
        <p class="form__input-error" v-if="error || error_password2" :style="{ display: error_password2 || error ? 'block' : 'none' }">
          Ambas cotraseñas tienen que ser iguales.
        </p>
      </div>

      <!-- Terminos y condiciones  -->

      <div class="form__grupo-terminos">
        <input
          id="terminos"
          type="checkbox"
          name="terminos"
          class="form__input-checkbox"
        >
        Acepto los terminos y condiciones 
      </div>

      <!-- Mensaje error  -->

      <div
        id="form__mensaje"
        class="form__mensaje"
      >
        <p v-if="error || error_password || error_password2 || error_correo || error_nombre || error_telefono || error_usuario" 
           :style="{ display: error_password || error ? 'block' : 'none' }">  <b>Error:</b>Por favor rellena el formulario correctamente.
        </p>
      </div>

      <!-- Btn enviar  -->

      <div class="form__grupo form__grupo-btn-enviar">
        <button
          type="submit"
          class="form__btn"
        >
          Enviar
        </button>
        <p
          id="form__mensaje-exito"
          class="form__mensaje-exito"
        >
          Enviado exito
        </p>
      </div>
    </form>
    <p v-show="error">Por favor complete todos los campos. </p>
  </div>
</template>

// The above code is a Vue component that handles form submission. It includes data properties for the
// form fields, methods for form validation and submission, and an axios post request to send the form
// data to a server. The form fields are validated for required fields, valid email format, and strong
// password criteria. If all fields are valid, the form data is sent to the server and the user is
// redirected to a success page. If any fields are invalid or empty, an error message is displayed.
<script>
//  eslint-disable vue/multi-word-component-names 
import axios from 'axios'

export default {
  data() {
    return {
      usuario: '',
      nombre: '',
      telefono: '',
      correo: '',
      password: '',
      password2: '',
      error_correo: false,
      error_password: false,
      error_password2: false,
      error: false, // se inicializa en falso
    }
  },
  methods: {
    submitForm(e) {
  e.preventDefault();

  // Validación del campo usuario
  if (!this.usuario) {
    this.error = true;
    return;
  }

  // Validación del campo nombre
  if (!this.nombre) {
    this.error = true;
    return;
  }

  // Validación del campo telefono
  if (!this.telefono) {
    this.error = true;
    return;
  }

  // Validación del campo correo
  if (!this.correo) {
    this.error = true;
    return;
  } else if (!this.validarCorreo(this.correo)) {
    this.error_correo = true;
    return;
  }

  // Validación del campo password
  if (!this.password) {
    this.error = true;
    return;
  } else if (!this.validarPassword(this.password)) {
    this.error_password = true;
    return;
  }

  // Validación del campo password2
  if (!this.password2) {
    this.error = true;
    return;
  } else if (this.password2 !== this.password) {
    this.error_password2 = true;
    return;
  }

  // Si llega hasta aquí, todos los campos están validados
  const data = {
    usuario: this.usuario,
    nombre: this.nombre,
    telefono: this.telefono,
    correo: this.correo,
    password: this.password,
    password2: this.password2
  };

  axios.post('https://hay-poli.onrender.com/users', data)

  // en local 
  // axios.post('http://localhost:5000/users', data)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  
  this.exito = true;
  this.$router.push('/exito');
},

// Función para validar correo electrónico
validarCorreo(correo) {
  // Expresión regular para validar correo electrónico
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return correoRegex.test(correo);
},

// Función para validar contraseña
validarPassword(password) {
  // La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return passwordRegex.test(password);
}



    // Original funcionado  sin mas validaciones 
    // submitForm(e) {
    //      e.preventDefault();
    //   if (
    //     this.usuario &&
    //     this.nombre &&
    //     this.telefono &&
    //     this.correo &&
    //     this.password &&
    //     this.password2 === this.password 
    //   ) {
    //     const data = {
    //       usuario: this.usuario,
    //       nombre: this.nombre,
    //       telefono: this.telefono,
    //       correo: this.correo,
    //       password: this.password,
    //       password2: this.password2
    //     }
        
    //     axios.post('http://localhost:5000/users', data)
    //       .then(response => {
    //         console.log(response.data)
            
    //       })
    //       .catch(error => {
    //         console.error(error)
    //       })
    //       this.exito = true
    //         this.$router.push('/exito')
    //   } else {
    //     this.error = true // cambiamos a true si hay algún campo vacío
    //   }
    // }
  }
}
</script>

<style>
  .registro{
    background-image: linear-gradient(
    to bottom,
    #02385958,
    #02385914,
    #02385900
  );
      background-repeat: no-repeat;
      background-size: cover;
      height: 350px;
  }
.registro h1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    text-align: center;
    color:  #023859;
    text-shadow: 0 0 3px #66D8F2;
    padding-bottom: 5px;
    margin: 0 auto;
    padding-top: 7%;
    font-size: 3.50em;
    z-index:  20;
    border-bottom: 2px solid #66D8F2;
    width: 180px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
}

.formulario{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;
    background-color: #02385958;
    width:1200px;
    margin: 5px auto;
    padding: 20px;
    border-radius: 10px;
    margin-top: -50px;
    z-index: 20;
    
  }
.form__grupo-input{
    position: relative;
}
.form__input{
    width: 90%;
    height: 50px;
    line-height: 45px;
    border-radius: 3px ;
    border: 3px solid transparent;
    padding: 0px 40px 0px 10px ;
    transition:.3s ease all ;
    background-color: #02385900;
    border-bottom:solid 1px #66D8F2;
    margin: 30px;
    font-size: 16px;
}
.form__input::placeholder { 
  color: rgba(255, 255, 255, 0.687); 
}

.form__input:focus{
    border:3px solid  #66D8F2;
    outline: none;
    box-shadow: 0 0 5px  rgb(112, 110, 110);
}
.form__input-error{
    font-size: 12px;
    color: red;
    display: none;
    margin-bottom:0px ;
}
.form__input-error-activo{
    /* display: block; */
}
.form__validacion-estado{
    right: 10px;
    bottom: 15px;
    position: absolute;
    font-size: 17px;
    opacity: 0;
    z-index: 100;
}
.form__grupo-terminos{
  margin-right: 50px;
}
.form__input-checkbox{
    margin-right: 10px;
    margin-left: 30px;
    
}
.form__grupo-terminos,
.form__grupo-btn-enviar,
.form__mensaje{
    grid-column: span 2;
}
.form__mensaje{
    background-color: orange;
    height: 45px;
    line-height: 45px;
    padding: 0px 15px ;
    border-radius:3px ;
    display: none;
}
.form__mensaje-activo{
   display: block;
}
.form__mensaje p{
    margin: 0px;
}
.form__grupo-btn-enviar{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
}
.form__btn{
    background-color: #66D8F2;
    color: white;
    width: 30%;
    height: 45px;
    line-height: 45px;
    font-size: 15px;
    border: none;
    transition: .1s ease all ;
    border-radius: 3px;
    cursor:pointer;
}
.form__btn:hover{
    background-color: #66d8f262;
}
.form__mensaje-exito{
    font-size: 14px;
    color: greenyellow;
    display: none;
}
.form__mensaje-exito-activo{
    display: block;
}

/* Estilos validacion  */

.form__grupo-correcto .form__validacion-estado{
    color: greenyellow;
    opacity: 1;
}
.form__grupo-incorrecto .form__label{
    color: red;
}
.form__grupo-incorrecto .form__validacion-estado{
color: red;
opacity: 1;
}
.form__grupo-incorrecto .form__input{
    border: 3px solid red ;
}

/* ekrani chapseri poqracnel mecacnelu hamar   */
@media screen  and (max-width: 800px){
    .formulario{
        grid-template-columns: 1fr;
    }.form__grupo-terminos,
    .form__grupo-btn-enviar,
    .form__mensaje{
        grid-column: 1;
    }
    .form__btn{
        width: 100%;
    }
}
</style>