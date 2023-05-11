// This is a Vue.js template that defines the HTML structure of a component. It includes a div with a
// class of "cart__continer-card" that contains two h4 elements and a button element. The h4 elements
// display the quantity and total cost of an item, while the button element is used to trigger a
// purchase action. The values displayed in the h4 elements are computed properties based on the data
// prop passed to the component.
<template>
  <div class="cart__continer-card">
    
      <h4>En Bolsa:  {{ data.quantity }}</h4>
      <h4>Total Coste: {{ item_cost.toFixed(2) }}</h4>
      <button class="cart_button-pay">Comprar</button>
    
  </div>
</template>

<script>
// This is a Vue.js component that receives a prop called `data` and has two computed properties:
// `description` and `item_cost`.
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