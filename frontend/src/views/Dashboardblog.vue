<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="dashboard__blog-continer">
    <h1>Blog Dashboard</h1>
    <post-form @add-post="addPost"></post-form>
    <post-list :posts="posts" @delete-post="deletePost" class="listaPost"></post-list>
  </div>
</template>

<script>
import PostForm from '../components/dashboardBlog/PostForm.vue';
import PostList from '../components/dashboardBlog/PostList.vue';
import axios from 'axios';
export default {
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      title: '',
      content: '',
      posts:[],
      loading:true,
      errored:false
    };
  },
  mounted(){
    axios  
       .get('http://localhost:5000/posts')
        .then(response =>{
              this.posts = response.data
            })
         .catch(error =>{
          console.log(error);
                    this.errored = true
                })
                .finally(()=>this.loading = false)
  }
};
</script>

<style>
/* Container dashboard  */
.dashboard__blog-continer{
  background-color: rgb(95, 120, 136);
  padding-top: 6%;
}
.dashboard__blog-continer h1{
   color: white;
   font-size: 2rem;
   padding-bottom: 15px;
}
</style>