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
          v-for="currency in info"
          v-else
          :key="currency" 
          class="caja-imagenes"
        >
          <img
            :src="currency.img"
            :alt="currency.name"
            class="imagenes"
          >
            
          <span class="lighten">
            <router-link
              :to="{name:'Post',params: {id:currency.id, name:currency.name, age:currency.Age, alliance: currency.alliance, origin: currency.origin, Death: currency.Death, img: currency.img}}"
              class="a"
            >
              <span v-html="currency.name" />
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
                info:null,
                loading:true,
                errored:false
            }
        },
        mounted(){
            axios
                .get('https://my-json-server.typicode.com/Joanutsu/SNK-JSON/SNK')
                .then(response =>{
                    this.info = response.data
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
    margin-top:4%;
    padding: 0;    
    background-color: #144e73;
    color: white;
    padding-top: 50px;
}
.raiz_blog{
   width: 100%;
   display: flex;
   flex-direction: column-reverse;
   justify-content: center;
   align-items: center;
   
}
.contenido_de_blog{
    display: flex;
    flex-wrap:wrap;
    flex: 1 1;
    width: 80%;
    justify-content: center;
    align-items: center;
    border: 3px solid white;
    margin: 50px;
    padding: 50px;
/* clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%); */
clip-path: polygon(9% 0, 91% 0, 100% 11%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0 11%);


}
/* imagenes */

.caja-imagenes{
    padding: 5px;
}
.imagenes{
    width: 350px;
    height: 100%;
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
 color: red;
}

</style>