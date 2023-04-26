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
    
         axios.post('http://localhost:5000/posts',data)
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

  