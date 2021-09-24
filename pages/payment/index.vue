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
        <div id="card-element"><!--Stripe.js injects the Card Element--></div>
        <button id="submit" class="btn btn-lg btn-black-overlay btn-block">
          <div class="spinner hidden" id="spinner"></div>
          <span id="button-text">Payer</span>
        </button>
        <p id="card-error" role="alert"></p>
        <!-- <p class="result-message hidden">
          Payment succeeded, see the result in your
          <a href="" target="_blank">Stripe dashboard.</a> Refresh the page to
          pay again.
        </p> -->
      </form>
    </div>

    <!-- <div class="col-lg-4"></div> -->

    <div class="stripe__policies">
      <span>* Paiment sécurisé grâce au service banquaire </span
      ><a
        class="stripe__link"
        href="https://stripe.com/fr/privacy"
        target="_blank"
        >Stripe.com</a
      >
      <!-- Orderdetails : {{ orderDetails }} -->
    </div>
  </div>
</template>

<script>
// A reference to Stripe.js initialized with your real test publishable API key.
const stripe = Stripe(process.env.stripePublishKey);

// The items the customer wants to buy

/* ------- UI helpers ------- */

// Shows a success message when the payment is complete
const orderComplete = (paymentIntentId) => {
  loading(false);
  document
    .querySelector(".result-message a")
    .setAttribute(
      "href",
      "https://dashboard.stripe.com/test/payments/" + paymentIntentId
    );
  document.querySelector(".result-message").classList.remove("hidden");
  document.querySelector("button").disabled = true;
};

// Show the customer the error from Stripe if their card fails to charge
const showError = (errorMsgText) => {
  loading(false);
  const errorMsg = document.querySelector("#card-error");
  errorMsg.textContent = errorMsgText;
  setTimeout(() => {
    errorMsg.textContent = "";
  }, 6000);
};

// Show a spinner on payment submission
const loading = (isLoading) => {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("button").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("button").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
};

export default {
  middleware: "auth",
  components: {},
  data() {
    return {
      orderDetails: {
        userId: "",
        customer: "",
        products: "",
        amount: "",
        date: "",
        clientSecret: "",
      },
      productPurchase: {
        items: [{ id: "xl-tshirt" }],
      },
    };
  },
  methods: {
    purchase() {
      // this.$store.dispatch("order/getPaymentSecret", this.orderDetails);
    },
    //Fetch the payment
    paymentInit() {
      const payWithCard = (stripe, card, clientSecret) => {
        loading(true);
        stripe
          .confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
            },
          })
          .then((result) => {
            if (result.error) {
              // Show error to your customer
              showError(result.error.message);
            } else {
              // The payment succeeded!
              // orderComplete(result.paymentIntent.id);
              console.log("Sucess payment!!!");
              this.$store
                .dispatch("order/sendOrder", this.orderDetails)
                .then(() => {
                  this.$router.push("payment/sucess");
                })
                .catch((error) => {
                  console.log(error.message);
                });
            }
          });
      };
      // Disable the button until we have Stripe set up on the page
      document.querySelector("button").disabled = true;

      // fetch("http://localhost:3000/api/order/paymentSecret", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(purchase),
      // })
      this.$axios
        .post("order/paymentSecret", this.orderDetails)
        .then((result) => {
          const client_secret = result.data.client_secret;

          return client_secret;
        })
        .then((data) => {
          console.log("data:", data);
          const elements = stripe.elements();

          const style = {
            base: {
              color: "#32325d",
              fontFamily: "Arial, sans-serif",
              fontSmoothing: "antialiased",
              fontSize: "16px",
              "::placeholder": {
                color: "#32325d",
              },
            },
            invalid: {
              fontFamily: "Arial, sans-serif",
              color: "#fa755a",
              iconColor: "#fa755a",
            },
          };

          const card = elements.create("card", { style: style });
          // Stripe injects an iframe into the DOM
          card.mount("#card-element");

          card.on("change", function (event) {
            // Disable the Pay button if there are no card details in the Element
            document.querySelector("button").disabled = event.empty;
            document.querySelector("#card-error").textContent = event.error
              ? event.error.message
              : "";
          });

          var form = document.getElementById("payment-form");
          form.addEventListener("submit", (event) => {
            event.preventDefault();
            // Complete payment when the submit button is clicked

            payWithCard(stripe, card, data);
          });
        });
    },
  },
  computed: {
    totaAmount() {
      return this.$store.getters["cart/cartTotal"];
    },
  },
  mounted() {
    const invoicingObject = this.$store.state.user.userDetails;
    console.log("invoicingObject:", invoicingObject);
    this.orderDetails.clientSecret = this.$store.state.order.clientSecret;
    this.orderDetails.amount = this.$store.getters["cart/cartTotal"];
    this.orderDetails.products = this.$store.state.cart.items;
    this.orderDetails.date = Date.now();
    this.orderDetails.customer = invoicingObject.data.invoicingDetails;
    this.orderDetails.userId = this.$store.state.user.userLogin.userId;

    this.paymentInit();
  },
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
  margin: 1rem 0 2rem 0;
}
#card-error {
  /* font-size: 12px; */
  color: red;
}
#payment-form button,
span,
p {
  margin: 2rem 0 0 0;
}
</style>