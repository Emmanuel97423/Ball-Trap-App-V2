<template>
  <div class="login-container">
    <div class="login-row">
      <div class="login-img">
        <!-- <img :src="require('@/assets/img/banner/login.jpg')" /> -->
      </div>
      <div class="login-form col-lg-4 col-md-12">
        <Logo />
        <transition name="fade" mode="out-in">
          <Nuxt />
        </transition>
      </div>
    </div>
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
.login-img {
  height: 1000px;
  width: 100%;
  background-image: url("~/assets/img/banner/login.jpg");
  background-repeat: no-repeat;
  background-position: 25% 70%;
  background-size: cover;
}

.login-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 200px;
}

@media (max-width: 768px) {
  .login-img {
    display: none;
  }
  .login-container {
    padding: 50px 0 0 0;
  }
}
</style>