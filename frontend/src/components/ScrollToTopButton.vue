<template>
  <a @click="scrollToTop" id="scroll" title="Scroll to Top">
    <i class="fas fa-chevron-up"></i>
  </a>
</template>

<script>
export default {
  name: "ScrollToTop",
  data() {
    return {
      isShown: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.isShown = true;
      } else {
        this.isShown = false;
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
#scroll {
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* background-color: #3498db; */
  background-color: rgba(56, 84, 103, 0.496);
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  z-index: 100;
}

#scroll:hover {
  opacity: 2;
  background-color: rgb(56, 84, 103);

}

#scroll i {
  font-size: 24px;
  margin-top: 13px;
}
</style>
