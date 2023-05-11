// `<!-- eslint-disable vue/multi-word-component-names -->` is a comment that disables the eslint rule
// that enforces the use of PascalCase for component names in Vue.js.
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="BlogVuews">
    <api />
  </div>
</template>
<script>
import api from '../components/Api';
    export default{
        components:{
          api
        }
        }
</script>