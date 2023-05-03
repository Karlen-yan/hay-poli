<template>
  <div>
    <div v-for="(post, index) in posts" :key="post._id">
      <div class="post__list-continer">
        
          <img
          :src="post.img"
          :alt="post.name"
          class="imagenes" >
        
        <div class="post__list-continer-extra">
          <h4>{{ post.title }}</h4>
          <p class="post__list-parrafo">{{ post.description }}</p>
          <button @click.prevent="deletePost(post._id, index)" class="button__delete">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['posts'],
  methods: {
    async deletePost(id) {
      try {
        
    await axios.delete(`https://hay-poli.onrender.com/posts/${id}`)
    
    // en local 
    // await axios.delete(`http://localhost:5000/posts/${id}`)
    
    // this.$emit('post-deleted', index);
    this.$router.push('/exito')
  } catch (error) {
    console.log(error);
  }
}
    }
  }
</script>

<style>
.post__list-continer{
  display: flex;
  border: 1px solid white;
  padding: 15px;
  width: 70%;
  margin:0 auto;


}
.imagenes{
  width: 25%;
  height: 25%;
}
.post__list-continer-extra{
  font-size: 20px;
  text-align: center;
  padding: 15px;
  width: 50%;
  margin: 0 auto;
}
.post__list-parrafo{
   font-size: 18px;
}
.button__delete{
  background-color: blue;
  color:white;
  cursor: pointer;
  /* margin-left: 10%; */
  margin-top: 3%;
  padding: 7px 12px 7px 12px;
  font-size: 16px;
}
.button__delete:hover{
  background-color: red;
  color:white;
}
</style>
