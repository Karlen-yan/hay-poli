<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Navbar />
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
