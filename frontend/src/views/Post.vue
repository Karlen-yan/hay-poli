// This is a Vue.js template that defines the structure of a component called "Post". It contains a div
// element with an id of "Post" and a child component called "Blog". The ":id" attribute is used to
// pass the value of the "id" parameter from the current route to the "Blog" component as a prop. This
// allows the "Blog" component to dynamically render content based on the value of the "id" parameter.
<template>
  <div id="Post">
    <Blog :id="$route.params.id" />
  </div>
</template>

// This is the script section of a Vue.js component called "Post". It imports the "Blog" component from
// the "../components/Blog.vue" file and defines the component's name as "Post". It also registers the
// "Blog" component as a child component of "Post" using the "components" property. This allows the
// "Blog" component to be used within the "Post" component's template.
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