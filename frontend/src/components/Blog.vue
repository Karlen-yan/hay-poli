<template>
  <div class="post__container">
    <h2 class="post__container-header">{{ post.title }}</h2>
    <img class="post__container-img" :src="post.img" :alt="post.title" />
    <p class="post__container-text">{{ post.text }}</p>


    
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
    };
  },
  mounted() {
    
    axios
      .get(`http://localhost:5000/posts/${this.$route.params.id}`)
      .then((response) => {
        this.post = response.data;
      })
      .catch(() => {
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>


<style>
.post__container{
    background-color: rgb(95, 120, 136);
    margin: 0;
    }
.post__container-header{
  padding-top: 6%;
   text-align: center;
   /* color: #66D8F2; */
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
</style>