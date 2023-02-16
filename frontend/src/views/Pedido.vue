<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="pedido">
      <ProductDescription 
      :product="product"
      :active="active.product_drawer" 
      v-on:close-product-drawer="closeProductDrawer()"/>
     
      
      <div class="product-card-container">

  <ProductSummaryCard 
    v-for="product in items"
    :key="product.id"
    :product="product"
    v-on:view-product="viewProduct($event)" />
  <ProductSummaryCard 
    v-for="product in items"
    :key="product.id"
    :product="product"
    v-on:view-product="viewProduct($event)" />
      </div>
    </div>
</template>
<script>
import items from '../data/items.js';
import ProductSummaryCard from '../components/product/ProductSummaryCard.vue';
import ProductDescription from '../components/product/ProductDescription.vue'
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Pedido',
    components:{
      ProductSummaryCard,
      ProductDescription

    },
    data(){
        return{
          items: items,
          product: null,
          active:{
            product_drawer: false
          }
        }
    },
    methods:{
      viewProduct(product){
        this.product = product
        this.active.product_drawer= true
        console.log(this.product)
      },
      closeProductDrawer(){
        this.active.product_drawer= false
      }
    }
    }

</script>

<style>
.product-card-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  margin-top: 100px;
}
</style>