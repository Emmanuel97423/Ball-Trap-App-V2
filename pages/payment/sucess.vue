<template>
  <div class="box">
    <div class="container">
      <i class="fas fa-check"><h2>Paiement validée!</h2></i>

      <p>Merci pour votre confiance!</p>
      <p>Commande n°:<span>123456</span></p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  mounted() {
    this.$store.commit("cart/emptyList");
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fa-check {
  width: 370px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
  color: green;
  margin: 0 0 2rem 0;
}
.fa-check h2 {
  color: green;
}
@media screen and (max-width: 400px) {
  .fa-check {
    width: 250px;
    font-size: 20px;
  }
  .fa-check h2 {
    font-size: 24px;
  }
}
</style>