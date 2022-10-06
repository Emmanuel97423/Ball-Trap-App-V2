<template>
  <div class="login-container">
    <!-- <div class="login-row"> -->
    <div class="login-img">
      <img :src="require('@/assets/img/banner/login.jpg')" />
    </div>
    <div class="login-form">
      <Logo />
      <transition name="fade" mode="out-in">
        <Nuxt />
      </transition>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import Logo from "@/components/Logo";
export default {
  name: "login",
  components: {
    Logo,
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  },
};
</script>
<style>
.login-container {
  /* width: 100%; */
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  /* padding: 70px; */
}
.login-img {
  flex-grow: 1;
}

.login-img img {
  object-fit: cover;
  width: 100%;
  height: 100vh;
  object-position: 20% 80%;
}

/* @media (max-width: 375px) {
  .login-container {
    width: 100%;
  }
} */
</style>