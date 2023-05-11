/**
 * This is a Vuex store for managing a shopping cart, with mutations for adding and removing items,
 * getters for retrieving cart data, and actions for loading and updating cart data from localStorage.
 * @param cart - The cart is a state property in the Vuex store that represents the items added to the
 * shopping cart. It is an array that contains objects representing each item, with properties such as
 * id, name, price, and quantity. The cart is initially empty and is updated through mutations and
 * actions.
 */

import {createStore} from 'vuex';

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
export default createStore({
  state: {
    cart: [],
  },
  getters: {
    productQuantity: (state) => (data) =>{
      const item = state.cart.find((i) => i.id === data.id);

      if (item) return item.quantity;
      else return null;
    },
    cartItems:state  =>{
      return state.cart
    }

  },
  mutations: {
    addToCart(state, data) {
      const item = state.cart.find((i) => i.id === data.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({...data, quantity: 1});
      }
      updateLocalStorage(state.cart);
    },
    removeFromCart(state, data){
      let item = state.cart.find(i =>i.id === data.id)

      if(item){
        if(item.quantity >1){
          item.quantity --
        }else{
          state.cart = state.cart.filter(i => i.id !== data.id)
        }
      }
      updateLocalStorage(state.cart)
    },
    updateLocalStorage(state){
      const cart = localStorage.getItem('cart')
      if(cart){
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {
    // acción para cargar el carrito desde localStorage
    loadCartFromLocalStorage(context) {
      context.commit('loadCartFromLocalStorage');
    },
    // acción para actualizar localStorage después de una mutación del carrito
    updateCartInLocalStorage(context) {
      updateLocalStorage(context.state);
    },
  },
  });

