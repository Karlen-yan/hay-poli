<template>
  <div class="post__container">
    <h2 class="post__container-header">{{ post.title }}</h2>
    <img class="post__container-img" :src="post.img" :alt="post.title" />
    <p class="post__container-text">{{ post.text }}</p>

    <h2 class="coment__title">Comentarios</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.post" class="coment__lista-perfil">
        <div v-if="comments" class="comment__containe-perfil">
          <div> 
            <img class="coment__perfil-img" src="../img/profile.png" alt="">
            <span class="comment__perfil-name">{{ comment.name }}</span>
          </div>
          <div>
            <p class="comment__text">{{ comment.text }}</p>
            <span class="comment-time">{{ comment.time }}</span>
          </div> 
        </div>  
      </li>
    </ul>

    <form @submit.prevent="submitComment" class="form__blog-comentario">
      <input type="text" v-model="name" placeholder="Nombre" class="coment__input-text" required/>
      <textarea v-model="commentText" placeholder="Escribe tu comentario" cols="50" rows="10" id="coment" class="coment__textarea"></textarea>
      <button type="submit" class="form__comentario-button" required>Enviar</button>
    </form>

    <div class="caja__btn-back">  
      <router-link to="/blog" class="btn-back">Atrás</router-link>
    </div>    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Post',
  data() {
    return {
      post: {},
      loading: true,
      errored: false,
      commentText: '',
      name: '',
      comments: {},
    };
  },
  mounted() {
    axios
      .get(`https://hay-poli.onrender.com/posts/${this.$route.params.id}`)
      // en local 
      // .get(`http://localhost:5000/posts/${this.$route.params.id}`)
      .then((response) => {
        this.post = response.data;
      })
      .catch(() => {
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
  
  const comments = localStorage.getItem('comments');
  if (comments) {
    this.comments = JSON.parse(comments);
  } else {
    this.loadComments();
  }
  },
  created(){
    this.loadComments();
  },
  methods: {
    loadComments() {
  axios
    .get(`http://localhost:5000/comments/${this.$route.params.id}`)
    .then((response) => {
      this.comments = response.data;
      localStorage.setItem('comments', JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
},
    submitComment() {
      const now = new Date();
      const comment = {
        text: this.commentText,
        name: this.name,
        time: now.toLocaleString(),
      };

      axios
        .post(`http://localhost:5000/comments/${this.$route.params.id}`, comment)
        .then((response) => {
          this.comments.push(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.post__container{
    background-color: rgb(95, 120, 136);
    padding-bottom: 10%;
  }
.post__container-header{
  padding-top: 6%;
   text-align: center;
   color: white;
   font-weight: normal;
   text-shadow: rgb(66, 66, 215) -2px 2px 4px, #66D8F2 1px -2px 4px;
   font-size: 2rem;
 }
 .post__container-img{
   margin-left: 35%;
   margin-top: 2%;
   margin-bottom: 2%;
   width: 30%;
   box-shadow: 0 0 30px black;
 }
 .post__container-text{
  text-align: left;
  max-width: 80%;
  margin: 0 auto;
  line-height: 25px;
  padding: 30px;
  color: white;
  font-size: 18px;
  font-family:Georgia, 'Times New Roman', Times, serif;
 }
.coment__title{
   text-align: center;
   margin-top: 5%;
   color: #66D8F2;
   text-shadow: white 1px 1px 2px ;
   border-top: 1px solid white;
}
.coment__lista-perfil{
  text-decoration: none;
  list-style: none;
}
.comment__containe-perfil{
   display: flex;
   margin: 0 auto;
   width: 60%;
   margin-top: 15px;
   border: solid silver 1px;
   padding: 15px;
   background-color: #023859;
}
.comment__containe-perfil div:first-child{
  width: 40%;
  color: #66D8F2;
}
.comment__containe-perfil > div:nth-child(2){
  width: 60%;
  color: white;
}
.coment__perfil-img{
  width: 10%;
  height: 100%;
}
.comment__perfil-name{
  text-align: center;
  padding: 5px;
}
.comment-time {
  font-size: 13px;
  margin-top: 1px;
}
 /* form comentario */
 .form__blog-comentario{
  margin: 0 auto;
  width: 50%;
}
.comment__text{
  text-align: left;
}
.coment__input-text{
  margin-top: 5%;
}
.coment__textarea{
   width: 100%;
   margin-top: 2%;
}
 /* button send  */
 .form__comentario-button{
  background-color: #023859;
  color: #66D8F2;
  padding: 10px;
  border:none;
  cursor: pointer;
 }
 .form__comentario-button:hover{
  background-color: #02385979;
}
/* Button atras  */
.caja__btn-back{
  margin-top: 10%;
}
.btn-back{
  text-align: center;
  text-decoration: none;
  background-color: rgb(56, 84, 103);
  color: white;
  font-size: 18px;
  padding: 10px;
}
.btn-back:hover{
  background-color: rgba(56, 84, 103, 0.584);
  color: black;
}
</style>