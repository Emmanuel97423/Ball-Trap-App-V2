<template>
  <div class="box">
    <!-- <div class="col-lg-4"></div> -->

    <div class="col-lg-4">
      <h2 class="box__title">Paiement par carte</h2>
      <p class="box__title--amount">
        Montant:
        <span class="box__amount"
          >{{ parseFloat(totaAmount).toFixed(2) }} €</span
        >
      </p>
      <form id="payment-form" @submit.prevent="purchase">
        <label for="card-element">Carte de débit:</label><br />
        <div id="card-element" class="form-control" style="height: 2.4em">
          <!-- Elements will create input elements here -->

          <!-- <StripeElements
            class="payment__element"
            :stripe-key="stripeKey"
            :instance-options="instanceOptions"
            :elements-options="elementsOptions"
            #default="{ elements }"
            ref="elms"
          > -->
          <!-- <StripeElement
              class="card__input"
              type="fpxBank"
              :elements="elements"
              :options="cardNumberOptions"
            /></StripeElements> -->
          <!-- <StripeElement
              class="card__input"
              type="card"
              :elements="elements"
              :options="cardOptions"
              ref="card"
            />
          </StripeElements> -->
        </div>

        <!-- We'll put the error messages in this element -->
        <div v-if="cardErrorMessage" id="card-errors" role="alert">
          {{ cardErrorMessage }}
        </div>

        <br />
        <button
          id="submit"
          class="btn btn-lg btn-black-overlay btn-block"
          type="submit"
        >
          Payer
        </button>
      </form>
    </div>

    <!-- <div class="col-lg-4"></div> -->

    <div class="stripe__policies">
      <span>Service de paiment sécurisé avec </span
      ><a
        class="stripe__link"
        href="https://stripe.com/fr/privacy"
        target="_blank"
        >Stripe.com</a
      >
      Client secret : {{ orderDetails.clientSecret }}
    </div>
  </div>
</template>

<script>
// import { StripeElements, StripeElement } from "vue-stripe-elements-plus";
export default {
  middleware: "auth",
  components: {
    // StripeElements,
    // StripeElement,
  },
  data() {
    return {
      stripeKey:
        "pk_test_51JSFvUGiJRPLuK6CPyrQaQVCr4qRgXE2oVJRAFBqBss9PJ9vQiaScliPpx1Z0veH7MS4PTQObU4CS5EzKYtCKc3v00SjPAg67p", // test key, don't hardcode
      instanceOptions: {
        // https://stripe.com/docs/js/initializing#init_stripe_js-options
      },
      elementsOptions: {
        // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
      },
      cardOptions: {
        // reactive
        // remember about Vue 2 reactivity limitations when dealing with options
        value: {
          postalCode: false,
        },

        style: {
          base: {
            // backgroundColor: "#d9d9d9",

            iconColor: "#c4f0ff",
            color: "#d9d9d9",
            fontWeight: "500",
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",

            ":-webkit-autofill": {
              color: "black",
            },
            "::placeholder": {
              color: "rgb(100, 100, 100)",
            },
          },
          complete: {
            iconColor: "green",
            color: "green",
          },

          invalid: {
            iconColor: "red",
            color: "red",
          },
        },
        // https://stripe.com/docs/stripe.js#element-options
      },
      cardNumberOptions: {},
      cardErrorMessage: "",
      orderDetails: {
        customer: "",
        products: "",
        amount: "",
        date: "",
        clientSecret: "",
      },
    };
  },
  methods: {
    purchase() {
      this.$store
        .dispatch("order/getPaymentSecret", this.orderDetails)
        .then(() => {
          const invoicingObject = this.$store.getters["user/userDetails"];
          this.orderDetails.clientSecret = this.$store.state.order.clientSecret;
          this.orderDetails.amount = this.$store.getters["cart/cartTotal"];
          this.orderDetails.products = this.$store.getters["cart/items"];
          this.orderDetails.date = Date.now();
          this.orderDetails.customer = invoicingObject.data.invoicingDetails;

          //Stripe Confirmation
          stripe
            .confirmCardPayment(this.orderDetails.clientSecret, {
              payment_method: {
                card: card,
                billing_detail: {
                  name: "fullName",
                },
              },
            })
            .then((result) => {
              if (result.error) {
                console.log(result.error.message);
              } else if (result.paymentIntent.status === "succeeded") {
                console.log("Charge Ok paiment intent");
                this.$store.dispatch("order/sendOrder", this.orderDetails);
              }
            });

          //Post order
        })
        .catch((error) => {
          console.log(error);
        });

      // console.log(invoicingObject.data.invoicingDetails);
      // //stripe token
      // //              // ref in template
      // const groupComponent = this.$refs.elms;
      // const cardComponent = this.$refs.card;
      // // Get stripe element
      // const cardElement = cardComponent.stripeElement;
      // // Access instance methods, e.g. createToken()
      // groupComponent.instance
      //   .createToken(cardElement)
      //   .then((result) => {
      //     // Handle result.error or result.token
      //     this.orderDetails.token = result.token;
      //     console.log(result);

      //     if (result.error) {
      //       this.cardErrorMessage = result.error.message;
      //     } else {
      //Order details store

      // console.log(this.orderDetails)

      // .then((res) => {
      //   console.log(res);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
      //     }
      //   })
      //   .catch((err) => {
      //     alert("Une erreur: " + err);
      //   });
    },
  },
  computed: {
    totaAmount() {
      return this.$store.getters["cart/cartTotal"];
    },
  },
  //   mounted() {
  //   if (this.$stripe) {
  //     const elements = this.$stripe.elements();
  //     const card = elements.create('card', {

  //     });
  //     // Add an instance of the card Element into the `card-element` <div>
  //     card.mount('#card-element');
  //   }
  // },
};
</script>

<style scoped>
.box {
  text-align: center;
}
.box__title {
  margin: 5rem 0 0 0;
}
.col-lg-4 {
  margin-top: 10rem;
  margin-bottom: 5rem;

  margin-left: auto;
  margin-right: auto;
}
.stripe__policies {
  margin: 1rem 0 5rem 0;
  font-size: 12px;
}
.stripe__policies a {
  font-weight: bold;
}
.box__amount {
  font-weight: bold;
}
.box__title--amount {
  margin: 1rem 0 0 0;
}
#card-errors {
  font-size: 12px;
  color: red;
}
</style>