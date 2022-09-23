<template>
  <div class="clearpay-message">
    <div id="afterpay-clearpay-message" ref="afterpayClearpayMessage"></div>
    <p class="infos-clearpay">* (Offre Clearpay sur le total du panier)</p>
  </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js/pure";
let stripe;
export default {
  name: "AfterPayMessage",
  // props: {
  //   amount: Number,
  // },
  data() {
    return {
      //   stripe: null,
    };
  },
  computed: {
    amount() {
      return this.$store.getters["cart/cartTotal"];
    },
  },
  methods: {
    async afterPayStripeElement() {
      if (this.$stripe) {
        stripe = await loadStripe(process.env.stripePublishKey);
        const elements = this.$stripe.elements({
          locale: "fr-FR",
        });

        // this.$nextTick(() => {
        const options = {
          amount: this.amount * 100, // $10.00 USD
          currency: "EUR",
          min: 10000,
          max: 1000000,
          showUpperLimit: false,
          introText: "Pay in",
        };

        const afterpayClearpayMessageElement = elements.create(
          "afterpayClearpayMessage",
          options
        );
        //   await new Promise((r) => setTimeout(r, 100));
        afterpayClearpayMessageElement.mount("#afterpay-clearpay-message");

        // });
      }
    },
    // destroyStripeAfterPayElement() {
    //   const afterPayElement = elements?.getElement("afterpayClearpayMessage");
    //   if (afterPayElement) afterPayElement.destroy();
    // },
  },
  mounted() {
    try {
      this.$nextTick(() => {
        this.afterPayStripeElement();
      });
    } catch (error) {
      console.log("🚀 ~ file: _id.vue ~ line 1106 ~ fetch ~ error", error);
    }
  },
  //   beforeDestroy() {
  //     this.destroyStripeAfterPayElement();
  //   },
};
</script>

<style >
.infos-clearpay {
  font-size: 12px;
  margin: 0 0 0 10px;
  font-style: italic;
}
.clearpay-message {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: flex-start;
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