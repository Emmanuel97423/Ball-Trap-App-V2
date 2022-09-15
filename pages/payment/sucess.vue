<template>
  <!-- <div class="box"> -->
  <div class="container">
    <div class="session-payment-sucess" v-if="sessionStatus.success">
      <i class="fas fa-check"
        ><h2>{{ sessionStatus.success }}</h2></i
      >

      <p>Merci pour votre confiance, pensez à consulter votre email.</p>
    </div>
    <div class="session-payment-error" v-else>
      <i class="fa fa-warning"
        ><h2>{{ sessionStatus.error }}</h2></i
      >

      <!-- <p>Merci pour votre confiance !</p> -->
    </div>
    <div class="session-payment-button">
      <nuxt-link to="/">
        <b-button class="bg-black">Retour au magasin</b-button>
      </nuxt-link>
    </div>
    <!-- <p>Vous serez redirigé dans 5 secondes</p> -->
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      customer: "",
      sessionStatus: {
        success: "",
        error: "",
      },
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

    const sessionId = await this.$route.query.session_id;
    console.log("sessionId:", sessionId);
    try {
      const data = await this.$axios.post("/payment/paymentSucess/", {
        data: {
          stripeSessionId: sessionId,
          order: this.orderDetails,
        },
      });
      console.log("🚀 ~ file: sucess.vue ~ line 82 ~ fetch ~ data", data);

      // this.$store.dispatch("order/sendOrder", this.orderDetails);
      if (data) {
        this.$store.commit("cart/emptyList");
        this.sessionStatus.success = data.data.message;
      }
    } catch (error) {
      console.log("error:", error.response.data.message);
      this.sessionStatus.error = error.response.data.message;
    }
    // this.sessionStatus = data.data.status;
  },
};
</script>

<style scoped>
.session-payment-sucess {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.session-payment-sucess h2 {
  white-space: nowrap;
  color: green;
  margin: 0 0 0 15px;
}
.session-payment-error h2 {
  white-space: nowrap;

  color: rgb(250, 150, 0);
}
.session-payment-button {
  margin: 20px 0 0 0;
}
.container {
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fa-check {
  display: flex;
  align-items: center;
  font-size: 28px;
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