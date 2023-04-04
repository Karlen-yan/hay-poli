<template>
  <div id="Post">
    <Blog :id="$route.params.id" />
  </div>
</template>

<script>
import Blog from '../components/Blog.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Post',
  components: {
    Blog
  },
};
</script>