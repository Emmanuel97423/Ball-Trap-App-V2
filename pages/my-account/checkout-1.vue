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
              Informations de facturation actuelle :

              <div v-if="userAdress">
                <!-- <span class="invoice__adresse">
                  
                  {{ userDetails.data.invoicingDetails.lastName }},
                  {{ userDetails.data.invoicingDetails.adresse }},
                  {{ userDetails.data.invoicingDetails.zip }},
                  {{ userDetails.data.invoicingDetails.zone }},
                  {{ userDetails.data.invoicingDetails.country }}.</span
                > -->
                <ul>
                  <br />
                  <li>
                    <input type="radio" checked /> {{ userAdress.firstName }}
                    {{ userAdress.lastName }}, {{ userAdress.adress }},
                    {{ userAdress.zip }}
                  </li>
                </ul>

                {{ invoicing.userId }}
              </div>
              <span v-else>Aucune information n'a été renseigné</span>
              <div class="check-out-form">
                <button
                  @click="formShow"
                  class="theme-btn-one btn-black-overlay btn_md"
                >
                  Editer
                </button>
                <!-- <nuxt-link
                  to="/my-account/addresses"
                  class="theme-btn-one btn-black-overlay btn_md"
                >
                  Modifier
                </nuxt-link> -->

                <ValidationObserver
                  v-if="formEnabled"
                  v-slot="{ handleSubmit }"
                >
                  <form
                    id="formInvoice"
                    @submit.prevent="handleSubmit(invoiceSubmit)"
                  >
                    <div class="row">
                      <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                        <div class="form-group">
                          <ValidationProvider
                            rules="required|alpha"
                            v-slot="{ errors }"
                          >
                            <label for="fisrtName">Nom</label>
                            <input
                              type="text"
                              class="form-control"
                              id="fname"
                              name="firstName"
                              placeholder="Nom *"
                              required=""
                              v-model="invoicing.firstName"
                            />
                            <span class="error__message">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                        <ValidationProvider
                          name="lastName"
                          rules="required|alpha"
                          v-slot="{ errors }"
                        >
                          <div class="form-group">
                            <label for="lastName">Prénom</label>
                            <input
                              type="text"
                              required=""
                              class="form-control"
                              id="lname"
                              name="lastName"
                              placeholder="Prénom *"
                              v-model="invoicing.lastName"
                            />
                            <span class="error__message">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                        <ValidationProvider name="company" v-slot="{ errors }">
                          <div class="form-group">
                            <label for="cname">Entreprise</label>
                            <input
                              class="form-control"
                              type="text"
                              id="cname"
                              name="company"
                              placeholder="Entreprise"
                              v-model="invoicing.company"
                            />
                            <span class="error__message">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                        <ValidationProvider
                          name="email"
                          rules="required|email"
                          v-slot="{ errors }"
                        >
                          <div class="form-group">
                            <label for="email">Email </label>
                            <input
                              v-model="invoicing.email"
                              class="form-control"
                              required=""
                              type="email"
                              id="email"
                              name="email"
                              placeholder="info@gmail.com *"
                            />
                            <span class="error__message">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                        <ValidationProvider
                          name="country"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="form-group">
                            <label for="country">Pays</label>
                            <select
                              v-model="invoicing.country"
                              class="form-control first_null"
                              id="country"
                              name="country"
                              required=""
                            >
                              <option value="">
                                Choisissez une option... *
                              </option>
                              <option value="FR">France</option>
                            </select>
                            <span class="error__message">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </div>
                      <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                        <ValidationProvider
                          name="zone"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="form-group">
                            <label for="city">Région</label>
                            <select
                              v-model="invoicing.zone"
                              class="form-control first_null"
                              id="zone"
                              name="zone"
                              required=""
                            >
                              <option value="">
                                Choisissez une option... *
                              </option>
                              <option value="Réunion">Réunion</option>
                            </select>
                            <span class="error__message">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </div>
                      <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                        <ValidationProvider
                          name="zip"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="form-group">
                            <label for="zip">Code postal</label>
                            <input
                              v-model="invoicing.zip"
                              type="text"
                              class="form-control"
                              id="zip"
                              name="zip"
                              required=""
                              placeholder="Entrez votre code postal *"
                            />
                            <span class="error__message">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                        <ValidationProvider
                          name="adresse"
                          rule="required"
                          v-slot="{ errors }"
                        >
                          <div class="form-group">
                            <label for="addresse">Adresse complète</label>
                            <input
                              v-model="invoicing.adress"
                              type="text"
                              class="form-control"
                              id="adresse"
                              name="adresse"
                              required=""
                              placeholder="Entrez votre adresse.. *"
                            />
                            <span class="error__message">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </div>
                      <!-- <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
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
                  </div> -->
                      <!-- <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
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
                  </div> -->
                    </div>
                    <button
                      class="theme-btn-one btn-black-overlay btn_md"
                      type="submit"
                    >
                      Sauvegarder
                    </button>
                    <!-- {{ userDetails }} -->
                  </form>
                </ValidationObserver>
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
                            productItem.priceTtc * productItem.orderQuantity
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
            <p id="alert-message" v-if="active">
              {{ alertMessage }}
            </p>

            <div class="checkout-payment">
              <!-- <button
                v-if="selectedProducts[0] && !stripe.url"
                type="submit"
                form="form"
                class="theme-btn-one btn-black-overlay btn_sm"
                @click="onSubmit"
              >
                Etape suivante
              </button> -->
              <p v-if="!stripe.url && selectedProducts[0]">
                Service paiement temporairement indisponible. Veuillez réessayez
                plus tard.
              </p>

              <a
                v-if="stripe.url && selectedProducts[0]"
                :href="`${stripe.url}`"
                class="theme-btn-one btn-black-overlay btn_sm btn-pay"
                >Etape suivante</a
              >
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
    <Modal @modal="formShow" @refresh="refresh"></Modal>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
// import { Nuxt, Builder, Utils } from 'nuxt'
import Modal from "~/components/modal/adressModal";
import paymentButton from "~/components/paymentButton";
export default {
  name: "checkout-1",
  middleware: "auth",
  components: {
    paymentButton,
    Modal,
    ValidationProvider,
    ValidationObserver,
  },
  // props: {
  //   formShow:Function
  // },
  data() {
    return {
      // validate: {
      //   errorMessage: null,
      //   firsName: null,
      //   lastName: null,
      //   email: null,
      //   country: null,
      //   zone: null,
      //   adress: null,
      //   validate: null,
      // },
      active: false,
      alertMessage: null,
      enabled: true,
      formEnabled: false,
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

      invoicing: {
        userId: "",
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        country: "",
        zone: "",
        zip: "",
        adress: "",
        review: "",
      },
      invoicingForm: true,
      adresses: "",
      stripe: {
        url: "",
      },
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
    //Show form object
    formShow() {
      // this.formEnabled = true;
      this.$bvModal.show("modal-1");
    },
    refresh() {
      this.updateAdress();
      this.$nuxt.refresh();
      // this.$forceUpdate();
      console.log("refresh checkout");
    },

    //Etape suivante payment
    async onSubmit() {
      // console;
      if (this.userAdress === null) {
        console.log("this.invoicing :", this.userAdress);
        console.log("Donnée de facturation abscent!!!");
        this.active = true;
        this.alertMessage =
          "Veuillez renseigner vos coordonnées de facturation afin de poursuivre votre commande";
        setTimeout(() => {
          this.active = false;
        }, 4000);
      } else {
        // const userObject = this.$store.state.user.userLogin;
        // this.$store.dispatch("user/getUserDetails", userObject.userId);
        // this.invoicing.invoiceUserId = userObject.userId;
        // // this.$store.dispatch("user/addAdresse", this.invoicing);
        // this.invoicingForm = false;
        try {
          const stripeCheckoutSession = await this.$axios.post(
            "/order/create-checkout-session",
            this.selectedProducts,
            {
              progress: true,
            }
          );
          const stripeCheckoutUrlWithDomain =
            stripeCheckoutSession.data.session.url;
          this.stripe.url = stripeCheckoutUrlWithDomain;
          console.log(
            "stripeCheckoutUrlWithDomain:",
            stripeCheckoutUrlWithDomain
          );
          // const stripeCheckoutUrlWithoutDomain =
          //   stripeCheckoutUrlWithDomain.replace(
          //     /^(?:\S+\.\S+?\/|\/)?(\S+)$/gm,
          //     ""
          //   );
          // console.log(
          //   "stripeCheckoutUrlWithoutDomain:",
          //   stripeCheckoutUrlWithoutDomain
          // );
          // this.$router.push({
          //   path: stripeCheckoutSession.data.session.url,
          // });
        } catch (error) {
          console.log(error);
        }
      }
    },
    //Invoice data submit
    invoiceSubmit() {
      const userObject = this.$store.state.user.userLogin;

      try {
        this.$store.dispatch("user/getUserDetails", userObject.userId);

        this.$store.dispatch("adress/addAdress", this.invoicing);
        // try {
        //   this.$store.dispatch("adress/getAdresses", this.invoicing.userId);
        // } catch (err) {
        //   console.error(err);
        // }
        this.userAdress();
        console.log("this.invoicing:", this.invoicing);
      } catch (error) {
        console.log(error);
      }
      // this.$nuxt.refresh();
      // this.$router.push("/my-account/checkout-1");
    },
    updateAdress() {
      const id = this.$store.state.auth.user.userId;
      this.$store
        .dispatch("adress/getAdresses", id)
        .then(() => {
          const userAdress = this.$store.state.adress.userAdresses.data;

          this.adresses = userAdress;
          console.log("Api sucess");
        })
        .catch((err) => {
          console.log("Api error", err);
        });
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
    // stripePlublicKey() {
    //   return process.env.STRIPE_PUBLIC_KEY;
    // },
    userDetails() {
      return this.$store.state.user.userDetails;
    },
    userAdress() {
      // this.invoicing.userId = this.$store.state.adress.userAdresses.data.userId;
      return this.$store.state.adress.userAdresses.data;
    },
  },
  mounted() {
    this.onSubmit();
    const id = this.$store.state.auth.user.userId;
    this.$store
      .dispatch("adress/getAdresses", id)
      .then(() => {
        const userAdress = this.$store.state.adress.userAdresses.data;

        this.adresses = userAdress;
        console.log("Api sucess");
      })
      .catch((err) => {
        console.log("Api error", err);
      });

    // this.$store.dispatch("adress/getAdresses", this.invoicing.userId);
    // const userObject = this.$store.state.user.userLogin;
    // this.$store.dispatch("user/getUserDetails", userObject.userId);
    // const userDetails = this.$store.state.user.userDetails;
    // console.log("userDetails:", userDetails);

    // console.log("userInvoiceDetails:", userInvoiceDetails);
    // if (userInvoiceDetails === null) {
    //   this.formEnabled = true;
    // }
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
.invoice__adresse {
  font-weight: bold;
}
.btn_md {
  margin: 0 0 1.5rem 0;
}
#alert-message {
  color: red;
}
.checkout-payment {
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-end;
}
.btn-pay {
  text-align: center;

  color: #fff;
  transition: all 0.2s linear;
}
</style>