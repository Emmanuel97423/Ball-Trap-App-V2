<template>
  <div class="box">
    <div class="container">
      <div v-if="sessionStatus !== 'complete'">
        <i class="fas fa-check"><h2>Paiement validée!</h2></i>

        <p>Merci pour votre confiance !</p>
      </div>
      <div v-if="sessionStatus == 'complete'">
        <i class="fa fa-warning"><h2>Session expiré !</h2></i>

        <!-- <p>Merci pour votre confiance !</p> -->
      </div>

      <p>Vous serez redirigé dans 5 secondes</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: "",
      sessionStatus: "",
      orderDetails: {
        userId: "",
        // customer: "",
        products: "",
        amount: "",
        // date: "",
        clientSecret: "",
      },
    };
  },
  middleware: "auth",
  methods: {
    // async success() {
    //   this.orderDetails.clientSecret = this.$store.state.order.clientSecret;
    //   this.orderDetails.amount = this.$store.getters["cart/cartTotal"];
    //   this.orderDetails.products = this.$store.state.cart.items;
    //   // this.orderDetails.date = Date.now();
    //   // this.orderDetails.customer = invoicingObject.data.invoicingDetails;
    //   this.orderDetails.userId = this.$store.state.auth.user.userId;
    //   this.$store.dispatch("order/sendOrder", this.orderDetails);
    //   const sessionId = await this.$route.query.session_id;
    //   const data = await this.$axios.get("/paymentSucess", {
    //     params: { session_id: sessionId },
    //   });
    //   console.log(
    //     "🚀 ~ file: sucess.vue ~ line 35 ~ success ~ data",
    //     data.data.status
    //   );
    //   this.sessionStatus = data.data.status;
    //   this.$store.commit("cart/emptyList");
    // },
  },
  async mounted() {
    // this.success();
    // setTimeout(() => {
    //   try {
    //     // this.$router.push("/my-account");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }, 5000);
  },
  async fetch() {
    this.orderDetails.clientSecret = this.$store.state.order.clientSecret;
    this.orderDetails.amount = this.$store.getters["cart/cartTotal"];
    this.orderDetails.products = this.$store.state.cart.items;
    // this.orderDetails.date = Date.now();
    // this.orderDetails.customer = invoicingObject.data.invoicingDetails;
    this.orderDetails.userId = this.$store.state.auth.user.userId;
    this.$store.dispatch("order/sendOrder", this.orderDetails);

    const sessionId = await this.$route.query.session_id;
    const data = await this.$axios.get("/paymentSucess", {
      params: { session_id: sessionId },
    });

    this.sessionStatus = data.data.status;
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