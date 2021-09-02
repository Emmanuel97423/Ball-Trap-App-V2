<template>
  <div>
    <!-- Banner Area -->
    <section v-if="!enabled" id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>{{ this.title }}</h2>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Checkout-Area -->
    <section id="checkout_one" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="checkout-area-bg bg-white">
              <div class="check-heading">
                <h3>Information de facturation</h3>
              </div>
              <div class="check-out-form">
                <form id="form">
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                      <div class="form-group">
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <label for="fname">Nom</label>
                          <input
                            type="text"
                            class="form-control"
                            id="fname"
                            name="firstName"
                            placeholder="Nom *"
                            v-model="validate.firstName"
                          />
                          <span class="error__message">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                      <div class="form-group">
                        <label for="lname">Prénom</label>
                        <input
                          type="text"
                          required=""
                          class="form-control"
                          id="lname"
                          name="lastName"
                          placeholder="Prénom *"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                      <div class="form-group">
                        <label for="cname">Entreprise</label>
                        <input
                          class="form-control"
                          required=""
                          type="text"
                          id="cname"
                          name="company"
                          placeholder="Entreprise"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                      <div class="form-group">
                        <label for="email">Email </label>
                        <input
                          class="form-control"
                          required=""
                          type="text"
                          id="email"
                          name="email"
                          placeholder="info@gmail.com"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                      <div class="form-group">
                        <label for="country">Pays</label>
                        <select
                          class="form-control first_null"
                          id="country"
                          name="country"
                        >
                          <option value="">Choisissez une option...</option>
                          <option value="FR">France</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                      <div class="form-group">
                        <label for="city">Région</label>
                        <select
                          class="form-control first_null"
                          id="city"
                          name="zone"
                        >
                          <option value="">Choisissez une option...</option>
                          <option value="RE">Réunion</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                      <div class="form-group">
                        <label for="zip">Code postal</label>
                        <input
                          type="text"
                          class="form-control"
                          id="zip"
                          name="zip"
                          required=""
                          placeholder="Entrez votre code postal"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                      <div class="form-group">
                        <label for="faddress">Adresse complète</label>
                        <input
                          type="text"
                          class="form-control"
                          id="faddress"
                          name="adresse"
                          required=""
                          placeholder="Entrez votre adresse.."
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                      <div class="form-group">
                        <label for="messages">Commentaire</label>
                        <textarea
                          rows="5"
                          class="form-control"
                          id="messages"
                          name="orderReview"
                          placeholder="Commentaires"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="materialUnchecked"
                          name="saveAdresse"
                        />
                        <label class="form-check-label" for="materialUnchecked"
                          >Sauvegarder l'adresse</label
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="order_review box-shadow bg-white">
              <div class="check-heading">
                <h3>Votre commande</h3>
              </div>
              <div class="table-responsive order_table">
                <table v-if="selectedProducts.length >= 1" class="table">
                  <thead>
                    <tr>
                      <th>Article</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody
                    v-for="productItem in selectedProducts"
                    :key="productItem.id"
                  >
                    <tr>
                      <td>
                        {{ productItem.name }}
                        <span class="product-qty">
                          x {{ productItem.orderQuantity }}</span
                        >
                      </td>
                      <td>
                        {{
                          (
                            productItem.price * productItem.orderQuantity
                          ).toFixed(2)
                        }}
                        €
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Sous Total</th>
                      <td class="product-subtotal">
                        {{ cartTotal.toFixed(2) }}€
                      </td>
                    </tr>
                    <tr>
                      <th>Livraison</th>
                      <td>Livraison gratuite</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td class="product-subtotal">
                        {{ cartTotal.toFixed(2) }}€
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <ul v-else class="offcanvas-cart">
                  <li>Panier vide!</li>
                </ul>
              </div>
            </div>

            <!-- <div class="box">
                        <button id="btn__pay" class="theme-btn-one btn-black-overlay btn_sm" type="submit" @click="purchase">Etape suivante</button>
                        
                    </div> -->

            <div class="box__payment">
              <StripeElements
                class="payment__element"
                :stripe-key="stripeKey"
                :instance-options="instanceOptions"
                :elements-options="elementsOptions"
                #default="{ elements }"
                ref="elms"
              >
                <!-- <StripeElement
                     class="card__input"
                        type="name"
                        :elements="elements"
                        :options="cardNumberOptions"
                    /> -->
                <StripeElement
                  class="card__input"
                  type="card"
                  :elements="elements"
                  :options="cardOptions"
                  ref="card"
                />
              </StripeElements>
              <button
                type="submit"
                form="form"
                class="theme-btn-one btn-black-overlay btn_sm"
                @click="purchase"
              >
                Payer
              </button>
            </div>

            <div v-if="!enabled" class="order_review bg-white">
              <div class="check-heading">
                <h3>Mode de paiement</h3>
              </div>
              <div class="payment_method">
                <div class="payment_option">
                  <div class="custome-radio">
                    <input
                      class="form-check-input"
                      required=""
                      type="radio"
                      name="payment_option"
                      id="exampleRadios3"
                      value="option3"
                      checked=""
                    />
                    <label class="form-check-label" for="exampleRadios3"
                      >Direct Bank Transfer</label
                    >
                    <p data-method="option3" class="payment-text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                  <div class="custome-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="payment_option"
                      id="exampleRadios4"
                      value="option4"
                    />
                    <label class="form-check-label" for="exampleRadios4"
                      >Check Payment</label
                    >
                    <p data-method="option4" class="payment-text">
                      Please send your cheque to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                  <div class="custome-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="payment_option"
                      id="exampleRadios5"
                      value="option5"
                    />
                    <label class="form-check-label" for="exampleRadios5"
                      >Paypal</label
                    >
                    <p data-method="option5" class="payment-text">
                      Pay via PayPal; you can pay with your credit card if you
                      don't have a PayPal account.
                    </p>
                  </div>
                </div>
              </div>
              <a href="#!" class="theme-btn-one btn-black-overlay btn_sm"
                >Place Order</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
// import { Nuxt, Builder, Utils } from 'nuxt'
import { StripeElements, StripeElement } from "vue-stripe-elements-plus";
import paymentButton from "~/components/paymentButton";
export default {
  name: "checkout-1",
  middleware: "auth",
  components: {
    paymentButton,
    StripeElements,
    StripeElement,
    ValidationProvider,
  },
  data() {
    return {
      validate: {
        errorMessage: null,
        firsName: null,
        lastName: null,
        email: null,
        country: null,
        zone: null,
        adress: null,
        validate: null,
      },
      enabled: true,
      title: "Checkout",
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Checkout",
          to: "/my-account/checkout",
        },
      ],
      orderDetails: {
        customer: "",
        products: "",
        amount: "",
        date: "",
        token: "",
      },
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
          postalCode: "",
        },

        style: {
          base: {
            iconColor: "#c4f0ff",
            color: "#000",
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

          invalid: {
            iconColor: "red",
            color: "red",
          },
        },
        // https://stripe.com/docs/stripe.js#element-options
      },
      cardNumberOptions: {},
    };
  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Checkout page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
  methods: {
    //Purchase order
    purchase() {
      //Validate form
      let formObject = {};
      const formData = new FormData(form);
      formData.forEach((value, key) => {
        formObject[key] = value.trim();
      });
      //stripe token
      //              // ref in template
      const groupComponent = this.$refs.elms;
      const cardComponent = this.$refs.card;
      // Get stripe element
      const cardElement = cardComponent.stripeElement;
      // Access instance methods, e.g. createToken()
      groupComponent.instance
        .createToken(cardElement)
        .then((result) => {
          // Handle result.error or result.token
          this.orderDetails.token = result.token;
          // console.log(result.token)
        })
        .catch((err) => {
          alert("Une erreur: " + err);
        });
      //Order details store
      this.orderDetails.amount = this.$store.getters["cart/cartTotal"];
      this.orderDetails.products = this.$store.getters["cart/items"];
      this.orderDetails.date = Date.now();
      this.orderDetails.customer = formObject;
      // console.log(this.orderDetails)
      this.$store.dispatch("order/sendOrder", this.orderDetails);
      //    console.log( this.$store.getters['order/apiResponse'])
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    selectedProducts() {
      return this.$store.getters["cart/items"];
    },
    price() {
      return this.$store.getters["cart/price"];
    },
    // Cart Total Price
    cartTotal() {
      return this.$store.getters["cart/cartTotal"];
    },
    stripePlublicKey() {
      return process.env.STRIPE_PUBLIC_KEY;
    },
  },
};
</script>

<style scoped>
.box {
  text-align: center;
}
.box__payment {
  text-align: center;
}

.card__input {
  /* background-color: red; */
  width: 90%;
  height: 50px;
  padding: 1rem;
  margin: 0 0 1rem 0;
  border: 1px solid rgb(195, 195, 195);
  border-radius: 5px;
}
.payment__element {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn_sm {
  margin: 2rem 0 0 0;
  width: 50%;
}
</style>