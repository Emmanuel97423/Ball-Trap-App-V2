<template>
  <div id="box__app">
    <Header v-if="enabled" />
    <NavCategories />

    <transition name="fade" mode="out-in">
      <!-- <LeftCategoriesNav /> -->
      <Nuxt />
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
import NavCategories from "@/components/header/Categories";
import LeftCategoriesNav from "~/components/navigation/LeftCategoriesNav";
import FooterAssurances from "@/components/footer/FooterAssurances";


export default {
  components: {
    Spinner,
    FooterNav,
    NavCategories,
    LeftCategoriesNav,
    FooterAssurances

  },
  data() {
    return {
      enabled: true,
    };
  },
  mounted() {
    this.$store.dispatch("nav/getCategory");
  },
};
</script>
<style >
#spinner__app {
  display: none;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

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
