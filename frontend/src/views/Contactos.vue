<!-- eslint-disable vue/multi-word-component-names -->
// This is a Vue.js template that defines the structure and content of a contact form page. It includes
// HTML markup for the form fields, labels, and buttons, as well as Vue.js directives for data binding
// and event handling. The template also includes CSS styles for the layout and appearance of the form
// and contact information.
<template>
  <div class="content">
    <div class="logo_caja_img">
      <div class="contenido_caja_img"> 
        <h1 class="logoText animated fadeInDown">
          Contacta con <span>Nosotros</span>
        </h1>
      </div>
    </div>
    <div class="contact-wrapper animated bounceInUp">
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div>
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="name">
          </div>
          <div>
            <label for="last_name">Apellido:</label>
            <input type="text" id="last_name" v-model="last_name">
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email">
          </div>
          <div>
            <label for="tel">Telefono:</label>
            <input type="text" id="tel" v-model="tel">
          </div>
          <div>
            <label for="asunto">Asunto:</label>
            <input id="asunto" v-model="asunto" />
          </div>
          <div>
            <label for="message">Mensaje:</label>
            <textarea id="message" v-model="message"></textarea>
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
        <p v-if="response">{{ response }}</p>
      </div>
      <div class="contact-info">
        <h4>Más información</h4>
        <ul>
          <li><i class="fas fa-map-marker-alt" /> HayPoli</li>
          <li><i class="fas fa-phone" /> (+34) 111 111 111</li>
          <li><i class="fas fa-envelope-open-text" /> Hay@Poli.com</li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
        <p>hay-poli.vercel.app</p>
        <!-- Google mapa  -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23946.36456083902!2d2.105628546596092!3d41.38938706885139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a279425a8f21%3A0x23e0874a0e6110c2!2sPlaza%20de%20Espa%C3%B1a%2C%2008004%20Barcelona!5e0!3m2!1ses!2ses!4v1671814432574!5m2!1ses!2ses"
          width="400"
          height="250"
          style="border:0;margin: 0 auto; display: block;    box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.684);
"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</template>

// This is a Vue.js script that defines the behavior of the contact form page. It includes data
// properties for the form fields, as well as methods for submitting the form and handling the
// response. It also uses the Axios library to make a POST request to a server endpoint with the form
// data. The script also includes commented out code for a different POST request to a different server
// endpoint.
<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      last_name:'',
      tel:'',
      email: '',
      message: '',
      response: '',
      asunto: ''
    };
  },
  methods: {
    submitForm(e){
    e.preventDefault();
      if (
        this.name &&
        this.last_name &&
        this.email &&
        this.tel &&
        this.message &&
        this.asunto 
      ) {
        const data = {
          name: this.name,
          last_name: this.last_name,
          email: this.email,
          tel: this.tel,
          message: this.message,
          asunto: this.asunto
        }
        
        axios.post('https://hay-poli.onrender.com/contacto', data)
        
        // en local
        // axios.post('http://localhost:5000/contacto', data)
          .then(response => {
            console.log(response.data)
            
          })
          .catch(error => {
            console.error(error)
          })
            this.$router.push('/exito')
      } else {
        this.error = true // cambiamos a true si hay algún campo vacío
      }
    // submitForm() {
    //   const data = {
    //     name: this.name,
    //     email: this.email,
    //     message: this.message,
    //   };

    //   axios.post('http://localhost:5000/email', data)
    //     .then((response) => {
    //       console.log(response);
    //       if (response.data.success) {
    //         this.response = 'Su mensaje se envió correctamente.';
    //       } else {
    //         this.response = 'No se pudo enviar su mensaje. Inténtalo de nuevo más tarde.';
    //       }
    //     })
    //     .catch((error) => {
          
    //       this.response = 'Se produjo un error al enviar su mensaje. Inténtalo de nuevo más tarde.';
    //       console.log(error);
    //     });
    // },
    }
  }
};
</script>

<style>

.content{
  background-image: linear-gradient(
    to bottom,
    #02385958,
    #02385901,
    #02385900
  );
}

.logoText {
    text-align: center;
    font-size: 3em;
    background-color:white;

 }

.logoText span {
    color: #66D8F2;
}
.contenido_caja_img{
  position: relative;
  top: 40%;
}
.logo_caja_img{
  background-image: url("https://estaticos.muyinteresante.es/uploads/images/article/606255a15bafe87b31e6dabc/eliminar-contactos-iphone_s.jpg");
  position: relative;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 400px;
  opacity: .90;
}

.contact-wrapper {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, .3);
}

.contact-wrapper > * {
    padding: 1em;
}

.contact-form {
  background: #02385972;
  color: white;
}


.contact-form form {
  display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 10px;
}
.contact-form form div{
  margin: 10px;
}

.contact-form form label {
    display: block;
}

.contact-form form p {
    margin: 0;
    padding: 1em;
}

.contact-form form .block {
    grid-column: 1 / 3;
}

.contact-form form button,
.contact-form form input,
.contact-form form textarea {
  width: 100%;
    padding: .6em;
    border: none;
    background: rgba(192, 192, 192, 0.11);
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.684); */
    outline: 0;
    border-bottom: 1px solid #66D8F2;
}

.contact-form form button {
  background: #66D8F2;
    color: white;
    border: 0;
    text-transform: uppercase;
    padding: 1em;
    margin: 0 auto;
    cursor: pointer;
    width: 100px;
}

.contact-form form button:hover,
.contact-form form button:focus {
  background: #434343;
  color: #fff;
  transition: background-color 1s ease-out;
    outline: 0;
}

/* CONTACT INFO */
.contact-info {
  background-color: #023859;
  opacity:.70;
  color:white;
  
}

.contact-info h4, .contact-info ul, .contact-info p {
  text-align: center;
  margin: 0 0 1rem 0;
}

.contact-info h4{
  color: #66D8F2;
  text-shadow: 0 0 1px black;
  font-size: 2rem;
}
/* LARGE SIZE */
@media(min-width: 768px) {
    .contact-wrapper {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
    .contact-wrapper > * {
        padding: 2em;
    }
    .contact-info h4,
    .contact-info ul,
    .contact-info p {
        text-align: left;
        

    }
    
}
</style>