<template>
  <div>
    <div
      class="drawer-background"
      :class="{ show: active }"
      @click="$emit('close-product-drawer')"
    />
    <div class="drawer" :class="{ show: active }">
      <div 
        class="drawer-close" 
        @click="$emit('close-product-drawer')"
      >
        X
      </div>

      <div 
        v-if="data" 
        class="product-details"
      >
        <h2 class="text-center product__details-name">
          {{ data.name }}
        </h2>
        <p class="description">
          {{ data.description }}
        </p>
        <h2 class="text.center product__details-price">${{ data.price }}
        </h2>

        <div 
          v-if="product_total" 
          class="cart-total"
        >
          <h4 class="product__total-title">
            En la tarjeta
          </h4>
          <h4 class="product__total">
            {{ product_total }}
          </h4>
        </div>

        <div class="button-container">
          <button 
            class="remove" 
            @click="removeFromCart()"
          >
            Eliminar
          </button>
          <button 
            class="add" 
            @click="addToCart()"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

// import axios from 'axios';

export default {
  props: ["data", "active"],
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.data);
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.data);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.data);
    },
  },
};
</script>

<style lang="scss">
.drawer-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(124, 124, 124, 0.55);
  z-index: 100;
  display: none;
  transition: display 0.5s;
  &.show {
    display: block;
  }
}

.drawer {
  width: 95vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: -105vw;
  padding: 15px;
  transition: left 0.5s;
  z-index: 101;
  overflow-y: scroll;
  &.show {
    left: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
  }
}

.drawer-close {
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 5px;
  right: 10px;
  border: 2px solid gray;
  color: gray;
  width: 30px;
  float: right;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
}

.product-details {
  display: flex;
  justify-content: center;
  flex-direction: column;
  .product__details-name{
      color: #023859;
    }
  
  p.description {
    padding: 20px;
    line-height: 1.5rem;
  }
  
  .product__details-price{
    color: #023859;
  }

  .button-container {
    button {
      width: 150px;
      border: none;
      padding: 10px;
      border-radius: 5px;
      margin: 0 5px 50px 5px;
      cursor: pointer;
    }
  }
}
.cart-total{
  text-align: center;
  margin: 0 5px 30px 5px;
  color: #02385958;
  .product__total-title{
     font-size: 25px;
    }
    
    .product__total{
    font-size: 25px;

  }
}

@media (min-width: 500px) {
  .drawer {
    width: 450px;
  }
}
</style>