// The `<!-- eslint-disable vue/multi-word-component-names -->` comment is disabling a specific ESLint
// rule for this Vue component. The `vue/multi-word-component-names` rule checks that component names
// are in PascalCase (i.e. with the first letter of each word capitalized), but this comment disables
// that rule for this component.
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form class="postForm"  @submit.prevent="submitForm">
    <label for="title">Título</label>
    <input type="text" id="title" v-model="title">

    <label for="img">Imagen:</label>
    <input type="text" id="img" v-model="img" placeholder="Pon la ruta de la imagen">

    <label for="description">Descripción: </label><br>
    <textarea  id="description" v-model="description" class="description"></textarea>
    
    <label for="text">Contenido:</label><br>
    <textarea id="text" class="text" v-model="text"></textarea>

    <button  type="submit"  class="post__form-button">Guardar</button>
    <p v-show="error">Por favor complete todos los campos. </p>

  </form>
</template>

// The `script` tag contains the JavaScript code for the Vue component. It imports the Axios library
// for making HTTP requests, defines the component's data properties (title, img, description, text,
// error, and exito), and defines the submitForm method that is called when the form is submitted. The
// submitForm method prevents the default form submission behavior, checks if all required fields are
// filled out, creates a data object with the form data, and sends a POST request to the specified API
// endpoint using Axios. If the request is successful, it logs the response data to the console and
// sets the exito property to true, which triggers a redirect to the postexito page. If any required
// fields are missing, it sets the error property to true, which displays an error message to the user.
<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      img: '',
      description: '',
      text: '',
      error: false, 
      exito: false
    };
  },
  methods: {

     submitForm(e) {
        e.preventDefault();
        if (
        this.title &&
        this.img &&
        this.description &&
        this.text  
      ) {
        const data = {
        title: this.title,
        img: this.img,
        description: this.description,
        text: this.text
        }
    
         axios.post('https://hay-poli.onrender.com/posts',data)
        //  en local
        //  axios.post('http://localhost:5000/posts',data)
          .then(response =>{    
            console.log(response.data)
          })
       .catch (error => {
        console.log(error);
      });
      this.exito = true
            this.$router.push('/postexito')
    
  
  }else{
    this.error = true
  }
}}}

</script>

<style>
.postForm{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-color: #0a2b40;
  padding: 15px;
  color: rgba(255, 255, 255, 0.752);
  font-size: 18px;
  margin: 20px;
  
}
.postForm input{
  width: 40%;
  padding: 3px;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 18px;
}
.postForm label{
  margin: 0 auto;
  margin-top: 15px;
  font-family: 'Times New Roman', Times, serif;
}
.postForm .description{
  margin: 0 auto;
  width: 80%;
  height: 200px;
}
.postForm .text{
  margin: 0 auto;
  width: 80%;
  height: 400px;
}

.post__form-button{
 width: 20%;
 margin: 0 auto;
 padding: 5px;
 background-color: rgb(95, 120, 136) ;
 color: white;
 cursor: pointer;
 font-size: 18px;
 margin-top: 2%;
}
.post__form-button:hover{
  background-color: rgba(0, 0, 0, 0.156);
}
</style>

  