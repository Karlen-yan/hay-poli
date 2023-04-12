<template>
  <div class="cart__continer-card">
    
      <h4>En Bolsa:  {{ data.quantity }}</h4>
      <h4>Total Coste: {{ item_cost.toFixed(2) }}</h4>
      <button class="cart_button-pay">Comprar</button>
    
  </div>
</template>

<script>
  export default{
    props:['data'],
    computed:{
        description(){
            return this.data.description.substring(0,120)
        }
        ,
        item_cost() {
            return this.data.price * this.data.quantity
        }
    }
  }
</script>

<style>
.cart__continer-card{
    font-size: 20px;
}
.cart_button-pay{
    margin: 0 auto;
    padding: 5px;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
    
}
</style>