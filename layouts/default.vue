<template>
  <div id="box__app">
    <Header v-if="enabled" />
    <NavCategories />

    <transition name="fade" mode="out-in">
      <Nuxt id="nuxt__app" v-if="enabled" />
    </transition>
    <Spinner id="spinner__app"></Spinner>
    <div>
      <FooterAssurances />
      <FooterNav />
    </div>
    <Footer id="footer__app" v-if="enabled" />
  </div>
</template>

<script>
import Spinner from "../components/spinner";
import FooterNav from "@/components/footer/FooterNav";
import FooterAssurances from "@/components/footer/FooterAssurances";
import NavCategories from "@/components/header/Categories";

export default {
  components: {
    Spinner,
    FooterNav,
    NavCategories,
    FooterAssurances
  },
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
    this.$store.dispatch("nav/getCategory");
  },
  beforeUpdate() {
    this.$store.dispatch("nav/getCategory");
  },
};
</script>
<style >
/* #footer {
  padding: 25px 0 0 0;
} */

#spinner__app {
  display: none;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.loading-spinner {
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error__message {
  color: red;
  font-size: 12px;
}

.error-required-message {
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

#box__app {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#footer__app {
  /* position: absolute; */
  margin-top: auto;
  /* width: 100%; */

  /* z-index: 99; */
}

.fa-user {
  color: black;
}

/* #my-account_area {
  height: 100vh;
} */
</style>
