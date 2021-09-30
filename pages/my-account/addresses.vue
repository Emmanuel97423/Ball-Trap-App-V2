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

    <!-- My Account-Area -->
    <section id="my-account_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-3 col-lg-3">
            <!-- Nav tabs -->
            <div class="dashboard_tab_button">
              <b-navbar-nav>
                <b-nav-item to="/my-account">Tableau de bord</b-nav-item>
                <b-nav-item to="/my-account/orders">Commande</b-nav-item>
                <!-- <b-nav-item v-if="!enabled" to="/my-account/downloads"
                  >Downloads</b-nav-item
                > -->
                <b-nav-item to="/my-account/addresses">Adresse</b-nav-item>
                <b-nav-item to="/my-account/account-details"
                  >Détails du compte</b-nav-item
                >
                <b-nav-item @click="logout">Déconnexion</b-nav-item>
              </b-navbar-nav>
            </div>
          </div>
          <div class="col-sm-12 col-md-9 col-lg-9">
            <div class="dashboard_content">
              <p>
                Les adresses suivantes seront utilisées par défaut sur la page
                de paiement.
              </p>
              <h5 class="billing-address">Adresse</h5>

              <p>
                <strong
                  >{{ userDetails.data.firstName }}
                  {{ userDetails.data.lastName }}</strong
                >
              </p>
              <div>
                Information de facturation:
                <br />
                <!-- <div v-if="userDetails.data.invoicingDetails">
                  <br />
                  <ul v-for="adress in adresses" :key="adress.id">
                    <li>
                      <span>{{ adress.firstName }} {{ adress.lastName }}</span>
                      , {{ adress.adresse }}, {{ adress.zip }},
                      {{ adress.zone }},
                      {{ adress.country }}
                    </li>
                  </ul>
                </div> -->
                <div class="table_page table-responsive">
                  <table>
                    <!-- Start Cart Table Head -->
                    <thead>
                      <tr>
                        <th class="adresses_adress">Adresses</th>
                        <th class="adresses_zip">Code postal</th>
                        <th class="adresses_zone">Zone</th>
                        <th class="adresses_name">Nom</th>
                        <th class="product_quantity">Adresse par défault</th>
                        <!-- <th class="product_total">Supprimer</th> -->
                      </tr>
                    </thead>
                    <!-- End Cart Table Head -->

                    <!-- {{ selectedProducts }} -->
                    <tbody>
                      <!-- Start Cart Single Item-->
                      <tr>
                        <td class="adresses_adress">
                          <p>{{ adresses.adress }}</p>
                        </td>

                        <td class="adresses_zip">
                          <p>{{ adresses.zip }}</p>
                        </td>
                        <td class="adresses_zone">
                          <p>{{ adresses.zone }}</p>
                        </td>
                        <td class="adresses_name">
                          {{ adresses.firstName }} {{ adresses.lastName }}
                        </td>
                        <td class="adresses_default">
                          <input
                            type="radio"
                            name="adress_default"
                            value="default"
                            checked="true"
                          />
                        </td>

                        <!-- <td class="adresses_remove">
                          <button
                            @click="removeAdress(adress)"
                            class="bg-transparent remove-btn"
                          >
                            <i class="far fa-trash-alt"></i>
                          </button>
                        </td> -->
                      </tr>
                      <!-- End Cart Single Item-->
                    </tbody>

                    <tbody v-if="!adresses.adress">
                      <tr>
                        <td class="border-0">Aucune adresse enregistrer!</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <button
                @click="formShow"
                class="theme-btn-one btn-black-overlay btn_md"
              >
                Editer
              </button>
            </div>
            <div v-if="formEnabled">
              <ValidationObserver v-slot="{ handleSubmit }">
                <form id="form" @submit.prevent="handleSubmit(onSubmit)">
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
                        rules="required"
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
                            <option value="">Choisissez une option... *</option>
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
                            <option value="">Choisissez une option... *</option>
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
                </form>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  name: "Addresses",
  middleware: "auth",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  asyncData() {
    return {
      enabled: true,
      formEnabled: false,
      title: "Address",
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Addresses",
        },
      ],
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
      adresses: "",
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
          content:
            "Addresses page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
  methods: {
    formShow() {
      this.formEnabled = true;
    },
    logout() {
      this.$auth
        .logout("local")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onSubmit() {
      const userObject = this.$store.state.user.userLogin;
      // console.log(userObject.userId);
      this.invoicing.userId = userObject.userId;

      this.$store.dispatch("user/getUserDetails", userObject.userId);
      // this.$store.state.adress.data;

      this.$store.dispatch("adress/addAdress", this.invoicing);

      setTimeout(async () => {
        try {
          await this.$store.dispatch("adress/getAdresses", userObject.userId);
          try {
            console.log("Refresh");
            this.$forceUpdate();
            // this.$nuxt.refresh();
            // this.$router.push("/my-account/addresses");
          } catch (error) {
            console.log(error);
          }
        } catch (error) {
          console.log(error);
        }
      }, 2000);
    },
  },

  mounted() {
    const userObject = this.$store.state.user.userLogin;
    this.$store.dispatch("user/getUserDetails", userObject.userId);
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    this.$store.dispatch("adress/getAdresses", userObject.userId);

    this.adresses = this.$store.state.adress.userAdresses.data;

    // const userData = this.$store.state.user.userDetails;
    // console.log("userDetails:", userData);
  },
  computed: {
    userDetails() {
      return this.$store.state.user.userDetails;
    },
  },
};
</script>

<style scoped>
.view {
  font-size: 15px;
  cursor: pointer;
}
.invoice__adresse {
  font-weight: bold;
}
.btn_md {
  margin: 0 0 1rem 0;
}
</style>