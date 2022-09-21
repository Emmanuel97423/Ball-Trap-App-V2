<template>
  <div>
    <div id="afterpay-clearpay-message" ref="afterpayClearpayMessage"></div>
  </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js/pure";
let stripe;
export default {
  name: "AfterPayMessage",
  props: {
    amount: Number,
  },
  data() {
    return {
      //   stripe: null,
    };
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

<style>
/* .AfterpayMessage {
  font-family: monospace;
  font-size: 14px;
} */
</style>