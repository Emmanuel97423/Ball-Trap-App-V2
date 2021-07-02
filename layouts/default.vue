<template>
  <div>
    <Header v-if="!enabled" />
    <transition name="fade" mode="out-in">
      <Nuxt v-if="!enabled" />
    </transition>
    <Footer v-if="!enabled" />
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
