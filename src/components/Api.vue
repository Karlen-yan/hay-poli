<template>
    <div id="api">
        <h1>BLOG</h1>
        <div class="raiz_blog">

        <section v-if ="errored">
           <p>Lo sentimos, no es posible obtener la información en este momento.</p>
        </section>
        
        <section v-else class="contenido_de_blog">
            <div v-if="loading">
                cargando...
            </div>


            <div
                v-else
                v-for="currency in info"
                :key="currency" 
                class="caja-imagenes">
            
            <img  v-bind:src="currency.img" v-bind:alt="currency.name"
            class="imagenes"
            >
            
            <span class="lighten">
    <router-link :to="{name:'Post',params: {id:currency.id, name:currency.name, age:currency.Age, alliance: currency.alliance, origin: currency.origin, Death: currency.Death, img: currency.img}}" class="a">
              <span v-html="currency.name"></span>
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
        name:'api',
        data(){
            return{
                info:null,
                loading:true,
                errored:false
            }
        },
        filters:{
            currencydecimal(value){
             return value.toFixed(2)
            }
        }
        ,
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
    background-color: azure;
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
    border: 10px solid white;
    margin: 50px;
    padding: 50px;
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
background-color: red;
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