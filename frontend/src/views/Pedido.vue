<!-- eslint-disable vue/multi-word-component-names -->
// This is the template section of a Vue.js component. It defines the structure of the component's HTML
// output. It includes two child components, `ProductDescription` and `ProductSummaryCard`, which are
// rendered using their respective tags. The `:data` and `:active` attributes are passed as props to
// the `ProductDescription` component, while the `:data` attribute is passed as a prop to the
// `ProductSummaryCard` component. The `@close-product-drawer` and `@view-product` attributes are event
// listeners that call the `closeProductDrawer` and `viewProduct` methods respectively when triggered.
// The entire template is wrapped in a `div` element.
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
// This is a Vue.js component that defines the behavior and structure of a page or section of a page.
// It imports two child components, `ProductSummaryCard` and `ProductDescription`, and sets their names
// as keys in the `components` object. It also defines a `data` object with two properties, `data` and
// `active`, and two methods, `viewProduct` and `closeProductDrawer`. The `viewProduct` method sets the
// `data` property to the selected product and sets the `active.product_drawer` property to `true`,
// while the `closeProductDrawer` method sets the `active.product_drawer` property to `false`. The
// component is named `Pedido` and is exported as the default export of the file.
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