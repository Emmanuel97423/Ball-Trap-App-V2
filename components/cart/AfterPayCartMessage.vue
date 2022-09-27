<template>
  <div class="clearpay-cart-message">
    <!-- <div class="clearpay-cart-logo"> -->
    <span>Payez en 3 fois {{ (amount / 3).toFixed(2) }} € avec </span>
    <img :src="clearPayOptions.logoUrl" />
    <!-- </div> -->
    <!-- <div id="afterpay-clearpay-message" ref="afterpayClearpayMessage"></div> -->
    <!-- <span class="infos-clearpay"
      >* (Offre Clearpay sur le total du panier)</span
    > -->
  </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js/pure";
let stripe;
export default {
  name: "AfterPayCartMessage",
  // props: {
  //   amount: Number,
  // },
  data() {
    return {
      //   stripe: null,
      clearPayOptions: {
        logoUrl: require("@/assets/img/clearpay/clearpay-badge-blackonmint79x15@2x.png"),
      },
    };
  },
  computed: {
    amount() {
      return this.$store.getters["cart/cartTotal"];
    },
  },
  methods: {
    customClearPayMessage() {},
    // destroyStripeAfterPayElement() {
    //   const afterPayElement = elements?.getElement("afterpayClearpayMessage");
    //   if (afterPayElement) afterPayElement.destroy();
    // },
  },

  //   beforeDestroy() {
  //     this.destroyStripeAfterPayElement();
  //   },
};
</script>

<style scoped >
/* .infos-cart-clearpay {
  font-size: 12px;
  margin: 0 0 20px 0;
  font-style: italic;
} */
.clearpay-cart-message {
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 0;
  color: grey;
}
.clearpay-cart-message img {
  width: 130px;
  padding: 0 0 0 10px;
}
@media (max-width: 1024px) {
  .clearpay-message {
    /* display: flex; */
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: flex-start; */
    margin: 30px 0 0 0;
  }
  .infos-clearpay {
    margin: 0;
    padding: 0 0 30px 0;
  }
}
/* .AfterpayMessage {
  font-family: monospace;
  font-size: 14px;
} */
</style>