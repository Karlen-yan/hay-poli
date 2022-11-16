<template>
<div id="navBar">
  <h1>Es mi componente </h1>
  <h2>{{subtitulo}}</h2>
  </div>
</template>

<script>
    export default{
        name: 'NavBar',
        data(){
            return{
                subtitulo:'Soy el subtitulo de mi componente'
            }
        }
    }
</script>