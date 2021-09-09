<template>
  <div class="box">
    <div class="container">
      <h2>Une erreur s'est produite!</h2>
      <p>Erreur:</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.state.order.orderItems;
  },
};
</script>

<style>
</style>