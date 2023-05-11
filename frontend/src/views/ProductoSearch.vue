// This is a Vue.js template that defines the HTML structure of a search result card. It includes
// dynamic data bindings using Vue.js syntax, such as `{{ product.name }}` and `{{ product.price }}`,
// which will display the name and price of a product fetched from an API. It also includes a
// router-link to navigate to a different page.
<template>
  <div class="card__search" :key="productRoute">
    <div class="item__Card__search">
      <h3>Nombre: {{ product.name }}</h3>
      <h5 class="price">
        <span class="item__cart-titls__search"> Precio:</span> ${{ product.price }}
      </h5>
      <p class="description__search">
        <span class="item__cart-titls__search">Descripción:</span> {{ product.description }}
      </p>
      <p class="text-muted__search">
        <span class="item__cart-titls__search">Categoría:</span>{{ product.category }}
      </p>
      <router-link to="/pedido" class="view-product-button__search">
        Ver más productos 
      </router-link>
    </div>
  </div>
</template>
  
// This is a Vue.js script that defines the behavior of a search result card component. It imports the
// Axios library for making HTTP requests, and exports a Vue.js component with a data object that
// contains a product object with default values for name and description. The component also includes
// a mounted lifecycle hook that calls the getProductFromRoute method, which retrieves product data
// from an API endpoint using Axios and sets the product object to the response data. The component
// also includes a watch property that listens for changes to the route's full path and calls the
// getProductFromRoute method again. Finally, the component includes a getProductFromRoute method that
// retrieves the product name from the route query parameters, makes an HTTP GET request to the API
// endpoint with the product name as a parameter, and sets the product object to the response data.
  <script>
  import axios from 'axios';
  
   export default{
    data() {
    return {
      product: { name: '', description: ''},
    };
  }, mounted() {
      this.getProductFromRoute();
    },
     watch: {
      '$route.fullPath': function () {
         this.getProductFromRoute();
     },
    },
    methods: {
      getProductFromRoute() {
        const product = JSON.parse(decodeURIComponent(this.$route.query.product))
        axios.get(`https://hay-poli.onrender.com/getProductName/${product.name}`)
        
        // En local 
        // axios.get(`http://localhost:5000/getProductName/${product.name}`)
          .then(response => {
            console.log(response.data); 
            this.product = response.data;
            this.loading = false;
          })
          .catch(error => {
            console.log(error);
            this.loading = false;
          });
      },
    },
  }
</script>

  <style>
  .card__search{
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 5px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 5px  gray;
    margin-top: 100px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .item__Card__search{
    border: solid 1px  rgb(79, 160, 187);
    padding: 15px;
    margin: 5px;
    width: 30%;
    height: 250px;
  }
  .item__cart-titls__search{
    color: gray;
  }
  .price__search{
    color: black;
  }
  .description__search{
    font-size: .85rem;
  }
  .text-muted__search{
    margin-bottom: 20px;
    color: black; 
  }
  .view-product-button__search{
    padding: 10px;
    margin-top: 10px;
    background-color: rgb(79, 160, 187);
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }
  
  @media  only screen and (max-width: 500px){
   .card__search{
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: none;
   }
   .item__Card__search{
    border: solid 1px  rgb(79, 160, 187);
    padding: 10px;
    margin: 5px;
    width: 90%;
  }
  }
  </style>
  