<template>
  <div>
    <Header v-if="enabled" />
    <transition name="fade" mode="out-in">
      <Nuxt id="nuxt__app" v-if="enabled" />
    </transition>
    <Footer id="footer__app" v-if="enabled" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      enabled: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
};
</script>
<style >
.error__message {
  color: red;
  font-size: 12px;
}
/* #nuxt__app {
  width: 100%;
  height: 100%;
} */
/* #nuxt__app {
  margin-bottom: 70px;
} */
#footer__app {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;

  z-index: 99;
}
.fa-user {
  color: black;
}
/* #my-account_area {
  height: 100vh;
} */
</style>
