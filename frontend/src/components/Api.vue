<template>
  <div id="api">
    <h1>BLOG</h1>
    <div class="raiz_blog">
      <section v-if="errored">
        <p>Lo sentimos, no es posible obtener la información en este momento.</p>
      </section>
        
      <section
        v-else
        class="contenido_de_blog"
      >
        <div v-if="loading">
          cargando...
        </div>


        <div
          v-for="data in posts"
          v-else
          :key="data" 
          class="caja-imagenes"
        >
          <span class="lighten">
            <router-link :to="{ name: 'Post', params: { id: data._id }}" class="a">
              <img
                :src="data.img"
                :alt="data.name"
                class="imagenes"
              >
              <div>
                <h1>{{ data.id }}</h1>
                <h2 class="blog__h2">{{ data.title }}</h2>
                <p class="blog__p">{{ data.description }}</p>             
              </div>
              <span v-html="data.name" />
            </router-link>
          </span>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
 import axios from 'axios';
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name:'Api',
        filters:{
            currencydecimal(value){
             return value.toFixed(2)
            }
        }
        ,
        data(){
            return{
                posts:[],
                loading:true,
                errored:false
            }
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
    }
</script>

<style>

#api{
    background-color:  rgb(95, 120, 136);
    color: white;
    padding-top: 10%;
  }
  #api h1{
    font-size: 3em;
  }
  .raiz_blog{
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    /* clip-path: polygon(9% 0, 91% 0, 100% 11%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0 11%); */
  
}
.contenido_de_blog{
    width: 80%;
    border: 3px solid white;
    margin: 50px;
    padding: 50px;
}
/* imagenes */

.caja-imagenes{
    padding: 5px;
    width: 100%;
}
.imagenes{
    width: 350px;
    height: 100%;
}
.blog__h2{
  font-size: 20px;
  color:#1F92BF;
}
.blog__h2:hover{
  color:  rgb(66, 66, 215);
}
.blog__p{
  font-size: 15px;
}
.a{
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
text-decoration: none;
background-color: #023859;
color: white;
text-align: center;
padding: 5px;
margin: 0px 2px 2px 1px;
}
.a:hover{
 background-color: white;
 color: black;
}

</style>