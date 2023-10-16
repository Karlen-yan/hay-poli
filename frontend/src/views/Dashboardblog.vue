<!-- eslint-disable vue/multi-word-component-names -->
// This is the HTML template for a Vue component that represents a blog dashboard. It includes several
// child components such as `post-form` and `post-list`, as well as a FontAwesomeIcon component for a
// logout button. The template also includes a router-link to a "Personaliza tu ropa" page.
<template>
  <div class="Layout__dashboard">
    <div class="dashboard__blog-continer"> 
      <div class="dashboard">
        <DashboardMenu />
        
        <post-form  ref="postForm" @add-post="addPost"></post-form>

      </div>


      <post-list :posts="posts"
        @delete-post="deletePost" class="listaPost"></post-list>
    <div class="item__icon">
      <FontAwesomeIcon :icon="['fasr', 'arrow-right-from-bracket']" class="logout" @click="logout" />
    </div>
  </div>
</div>
</template>

// This is the script section of a Vue component that represents a blog dashboard. It imports the
// `PostForm` and `PostList` components, as well as the `axios` library for making HTTP requests. It
// also imports and configures the `FontAwesomeIcon` component from the `@fortawesome/vue-fontawesome`
// package.
<script>
import PostForm from '../components/dashboardBlog/PostForm.vue';
import PostList from '../components/dashboardBlog/PostList.vue';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import DashboardMenu from '../components/dashboardBlog/DashboardMenu.vue';

library.add(faArrowRightFromBracket)

export default {
  components: {
    PostForm,
    PostList,
    FontAwesomeIcon,
    DashboardMenu
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
    // Verify if the user is logged in
    if (!localStorage.getItem('user')) {
      // If not, redirect to login
      this.$router.push('/iniciarsecion');
    } else {
      axios.get('https://hay-poli.onrender.com/posts')
      
      // En local 
      // axios.get('http://localhost:5000/posts')
        .then(response =>{
          this.posts = response.data
        })
        .catch(error =>{
          console.log(error);
          this.errored = true
        })
        .finally(()=>this.loading = false)
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('user'); 

      this.$router.push('/iniciarsecion'); 
    },
    addPost(post) {
      this.posts.push(post);
    },
    deletePost(postId) {
      this.posts = this.posts.filter(post => post.id !== postId);
    },
   
  }
};
</script>



<style>
/* Container dashboard  */
.dashboard__blog-continer{
  background-image: linear-gradient(
    to bottom,
    #02385958,
    #02385914,
    #02385900
    );
    padding-top: 3.90%;
  }
  .dashboard{
   display: flex;
   flex-direction: row;

  }
.dashboard__blog-continer h1{
  color: white;
  font-size: 2rem;
  padding-bottom: 15px;

}
.item__icon{
  width: 91%;
}
.logout{
  color: #10abee; 
  width: 100%;
  text-align: center;
  text-decoration: none;
  font-size: 50px;
  padding: 10px 50px 10px 50px;
  margin-left: 10px;
  cursor: pointer;
  margin-top: 7%;
  border: none;
}
.logout:hover{
  color:rgba(56, 84, 103, 0.584) ;
}
</style>
