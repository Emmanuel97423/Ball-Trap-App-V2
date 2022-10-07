<template>
  <div>
    <Logo />
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
  </div>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  name: "headless-layout",
  components: {
    Logo,
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
};
</script>