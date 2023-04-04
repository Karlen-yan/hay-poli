// import { createStore } from 'vuex';
// import axios from 'axios';

// export default createStore({
//   state() {
//     return {
//       posts: [],
//       loading: true,
//       errored: false,
//     };
//   },
//   mutations: {
//     SET_POSTS(state, posts) {
//       state.posts = posts;
//     },
//     SET_LOADING(state, loading) {
//       state.loading = loading;
//     },
//     SET_ERRORED(state, errored) {
//       state.errored = errored;
//     },
//   },
//   actions: {
//     fetchPosts({ commit }) {
//       commit('SET_LOADING', true);
//       axios
//         .get('http://localhost:5000/posts')
//         .then((response) => {
//           commit('SET_POSTS', response.data);
//         })
//         .catch(() => {
//           commit('SET_ERRORED', true);
//         })
//         .finally(() => {
//           commit('SET_LOADING', false);
//         });
//     },
//   },
//   getters: {
//     posts: (state) => state.posts,
//     loading: (state) => state.loading,
//     errored: (state) => state.errored,
//   },
// });
