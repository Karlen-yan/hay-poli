// This is a Vue.js template that defines the HTML structure and dynamic data bindings for a component
// named "Api". The template includes a header with a title, two sections that conditionally render
// based on the component's data properties "errored" and "loading", and a loop that iterates over the
// "posts" data property and renders a set of images and text for each post. The template also uses
// Vue.js directives such as "v-if", "v-for", and "v-html" to conditionally render elements and bind
// data to the DOM.
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
            <div class="algo">
              <h1>{{ data.id }}</h1>
              <h2 class="blog__h2">{{ data.title }}</h2>
              <div class="item__img">
               <img
                 :src="data.img"
                 :alt="data.name"
                 class="blogimagenes"
               >   
              </div>
              <p class="blog__p">{{ data.description }}</p>
              <div class="item__blog-a">
                <router-link :to="{ name: 'Post', params: { id: data._id }}" class="link__blog-a">
                  <a>Leer más</a>
                </router-link>
                
              </div>             
            </div>
            <span v-html="data.name"/>
          </span>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
 // This code is defining a Vue component named "Api". It imports the Axios library for making HTTP
 // requests and uses it to fetch data from an API endpoint. The fetched data is stored in the
 // component's "posts" data property. The component also has a "loading" boolean property that is set
 // to true initially and set to false when the data has finished loading. If there is an error while
 // fetching the data, the "errored" boolean property is set to true. The component also defines a
 // filter named "currencydecimal" that formats a number to two decimal places.
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
                .get('https://hay-poli.onrender.com/posts')
                // en local
                // .get('http://localhost:5000/posts')
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
  background-image: linear-gradient(
    to bottom,
    #02385958,
    #02385914,
    #02385900
  );
  padding-top: 10%;
}
#api h1{
  font-size: 3em;
  color: white;
  }
  /* .raiz_blog{
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;  
} */
.contenido_de_blog{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 50px;
}
.lighten {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 5px silver;
  padding: 30px;
  margin: 5px;
  width: 100%;
  height: 470px;
}
/* imagenes */

.caja-imagenes{
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
.item__img{
  display: flex;
}
.blogimagenes{
  
  margin:15px auto;
  width: 50%;
  height: 20%;

}
.blog__h2{
  font-size: 20px;
}
.blog__p{
  font-size: 15px;
  color: black;
}

.item__blog-a{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.link__blog-a{
  color:white;
  background-color: #66D8F2;
  margin: 30px;
  padding:5px;
  text-decoration:none;
  cursor:pointer;
  text-align: center;
}

</style>