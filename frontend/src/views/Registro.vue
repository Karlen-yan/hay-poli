<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="registro">
      <h1>Registrate</h1>
      <div style="height: 220px; margin-top: -40px; overflow: hidden;">
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
      class="formulario"
    
    >
      <!-- grupo  usuario -->
      <div
        id="grupo__usuario"
        class="form__grupo"
      >
        <label
          for="usuario"
          class="form__label"
        >Usuario</label>
        <div class="form__grupo-input">
          <input
            id="usuario"
            type="text"
            name="usuario"
            class="form__input"
            v-model="usuario"
            required
          >

          <i class="form__validacion-estado  fas fa-times-circle" />
        </div>
        <p class="form__input-error">
          El usuario tiene que ser 4 a 16 digitos
        </p>
      </div>
      <!-- grupo  nombre -->
            
      <div
        id="grupo__nombre"
        class="form__grupo"
      >
        <label
          for="nombre"
          class="form__label"
        >Nombre</label>
        <div class="form__grupo-input">
          <input
            id="nombre"
            type="text"
            name="nombre"
            class="form__input"
            v-model="nombre"
            required
          >

          <i class="form__validacion-estado  fas fa-times-circle" />
        </div>
        <p class="form__input-error">
          El  nombre tiene que ser 4 a 16 digitos
        </p>
      </div>
      <!-- grupo  telefono -->
            
      <div
        id="grupo__telefono"
        class="form__grupo"
      >
        <label
          for="telefono"
          class="form__label"
        >Telefono</label>
        <div class="form__grupo-input">
          <input
            id="telefono"
            type="tel"
            name="telefono"
            class="form__input"
            v-model="telefono"
            required
          >

          <i class="form__validacion-estado  fas fa-times-circle" />
        </div>
        <p class="form__input-error">
          El telefono  tiene que  ser 9 numeros
        </p>
      </div>

      <!-- grupo  correo -->
            
      <div
        id="grupo__correo"
        class="form__grupo"
      >
        <label
          for="correo"
          class="form__label"
        >Correo Electronico</label>
        <div class="form__grupo-input">
          <input
            id="correo"
            type="email"
            name="correo"
            class="form__input"
            v-model="correo"
            required
          >

          <i class="form__validacion-estado  fas fa-times-circle" />
        </div>
        <p class="form__input-error">
          En este campo es importante el siguiente  sinvolo @
        </p>
      </div>
      <!-- grupo  Contraseña  -->
            
      <div
        id="grupo__password"
        class="form__grupo"
      >
        <label
          for="password"
          class="form__label"
        >Contraseña</label>
        <div class="form__grupo-input">
          <input
            id="password"
            type="password"
            name="password"
            class="form__input"
            v-model="password"
            required
          >

          <i class="form__validacion-estado  fas fa-times-circle" />
        </div>
        <p class="form__input-error">
          La contraseña  tiene que ser 4 a 12 digitos.
        </p>
      </div>

      <!-- Repetición de la contraseña  -->


      <div
        id="grupo__password2"
        class="form__grupo"
      >
        <label
          for="password2"
          class="form__label"
        >Repetir Contraseña</label>
        <div class="form__grupo-input">
          <input
            id="password2"
            type="password"
            name="password2"
            class="form__input"
            v-model="password2">

          <i class="form__validacion-estado  fas fa-times-circle" />
        </div>
        <p class="form__input-error">
          Ambas cotraseñas tienen que ser iguales.
        </p>
      </div>

      <!-- Terminos y condiciones  -->

      <div class="form__grupo-terminos">
        <label
          for="terminos"
          class="form__label"
        >
          
          <input
            id="terminos"
            type="checkbox"
            name="terminos"
            class="form__input-checkbox"
          >
          Acepto los terminos y condiciones 
        </label>
      </div>

      <!-- Mensaje error  -->

      <div
        id="form__mensaje"
        class="form__mensaje"
      >
        <p> <i class="fas fa-exclamation-triangle" />   <b>Error:</b>Por favor rellena el formulario correctamente.</p>
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
    <p v-show="exito">La operacion se ha realizado exìtosamente.</p>

  </div>
</template>

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
      error: false, // se inicializa en falso
      exito: false // se inicializa en falso
    }
  },
  methods: {
    submitForm(e) {
         e.preventDefault();
      if (
        this.usuario &&
        this.nombre &&
        this.telefono &&
        this.correo &&
        this.password &&
        this.password2 === this.password 
      ) {
        const data = {
          usuario: this.usuario,
          nombre: this.nombre,
          telefono: this.telefono,
          correo: this.correo,
          password: this.password,
          password2: this.password2
        }
        
        axios.post('http://localhost:5000/users', data)
          .then(response => {
            console.log(response.data)
            
          })
          .catch(error => {
            console.error(error)
          })
          this.exito = true
            this.$router.push('/exito')
      } else {
        this.error = true // cambiamos a true si hay algún campo vacío
      }
    }
  }
}

// import axios from 'axios'

// export default {
//   data() {
//     return {
//       usuario:'',
//       nombre: '',
//       telefono: '',
//       correo: '',
//       password: '',
//     }
//   },
//   methods: {
//     submitForm() {
//       const data = {
//         usuario: this.usuario,
//         nombre: this.nombre,
//         telefono: this.telefono,
//         correo: this.correo,
//         password: this.password
//       }
//       axios.post('http://localhost:5000/users', data)
//         .then(response => {
//           console.log(response.data)
//         })
//         .catch(error => {
//           console.error(error)
//         })
//     }
//   }
// }
</script>

<style>
.formulario{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;
    background-color: #0a2b40;
    width:1200px;
    margin: 5px auto;
    padding: 20px;
    border-radius: 10px;
    margin-top: 1.50%;
    
}
.registro h1{
    text-align: center;
    color: #0a2b40;
    padding-top: 7%;
    font-size: 3em;
    z-index:  20;
}
.registro{
    background-image: url("https://img.freepik.com/foto-gratis/fondo-azul-degradado-lujo-abstracto-azul-oscuro-liso-banner-estudio-vineta-negra_1258-100378.jpg?w=1380&t=st=1675388778~exp=1675389378~hmac=6831e2b949dd249d94ef90968520bf45b9d99b9230b804deb9da59ce4f439ac4");
    background-repeat: no-repeat;
    background-size: cover;
    height: 320px;
    /* clip-path: polygon(20% 0%, 80% 0%, 100% 51%, 0 52%); */
}
.form__label{
    font-weight: 700;
    padding: 15px;
    display: block;
    cursor: pointer;
    color: white;
}
.form__grupo-input{
    position: relative;

}
.form__input{
    width: 95%;
    height: 40px;
    line-height: 40px;
    border-radius: 3px ;
    border: 3px solid transparent;
    padding: 0px 40px 0px 10px ;
    transition:.3s ease all ;
    background-color: white;
    margin: 10px;
}
.form__input:focus{
    border:3px solid rgb(26, 28, 170) ;
    outline: none;
    box-shadow: 3px 0px 30px 0px  rgb(112, 110, 110);
}
.form__input-error{
    font-size: 12px;
    color: red;
    display: none;
    margin-bottom:0px ;
}
.form__input-error-activo{
    display: block;
}
.form__validacion-estado{
    right: 10px;
    bottom: 15px;
    position: absolute;
    font-size: 17px;
    opacity: 0;
    z-index: 100;
}
.form__input-checkbox{
    margin-right: 10px;
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
    background-color: black;
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
    box-shadow: 3px 0px 30px rgb(100, 100, 100); 
    background-color: rgba(28, 28, 28, 0.415);
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