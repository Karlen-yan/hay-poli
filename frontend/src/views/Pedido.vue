<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <ProductDescription 
      :data="data"
      :active="active.product_drawer" 
      @close-product-drawer="closeProductDrawer()"
    />
       
    <ProductSummaryCard 
      :data="data"
      @view-product="viewProduct($event)"
    />
  </div>
</template>
<script>
// import items from '../data/items.json';
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
          data: null,
          active:{
            product_drawer: false
          }
        }
    },
    methods:{
      viewProduct(product){
        this.data = product
        this.active.product_drawer= true
        console.log(this.data)
      },
      closeProductDrawer(){
        this.active.product_drawer= false
      }
    }
    }
</script>