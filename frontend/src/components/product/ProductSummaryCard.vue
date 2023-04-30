<template>
  <div class="card">
    <div v-if="loading">
      cargando...
    </div>
    <div
      v-for="data in productos"
      v-else
      :key="data"
      class="item__Card  animated rotateInDownLeft" 
    >
      <h3>Nombre: {{ data.name }}</h3>

      <img
        :src="data.img"
        :alt="data.name"
        class="card__img"
      >

      <h5 class="price">
        Precio: ${{ data.price }}
      </h5>
      <p class="description">
        Descripción: {{ data.description }}
      </p>
      <p class="text-muted">
        Categoría: {{ data.category }}
      </p>
      <button
        class="view-product-button"
        @click="$emit('view-product',data)"
      >
        Ver más productos
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

 export default{
  data(){
            return{
                productos:[],
                loading:true,
                errored:false
            }
        },
        mounted(){
            axios
                .get('http://localhost:5000/getProducts')
                .then(response =>{
                    this.productos = response.data
                    console.log(this.productos)
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

.card{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 2px;
  padding: 5px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px  gray;
  margin-top: 100px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #0a2b40;
}
.item__Card{
  border: solid 1px  rgb(79, 160, 187);
  padding: 15px;
  margin: 15px;
  width: 30%;
  background-color: white;
}
.card__img{
    
    padding: 7px;
    width: 50%;
    height: 150px;
}
.price{
  color: gray;
  padding: 5px;

}
.description{
  font-size: .85rem;
  padding: 5px;

}
.text-muted{
  color: gray;
  padding: 5px;

}
.view-product-button{
  padding: 10px;
  background-color: rgb(79, 160, 187);
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.15rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 2px;
}



@media  only screen and (max-width: 500px){
 .card{
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: none;
 }
 .item__Card{
  border: solid 1px  rgb(79, 160, 187);
  padding: 10px;
  margin: 5px;
  width: 90%;
}
}
</style>
