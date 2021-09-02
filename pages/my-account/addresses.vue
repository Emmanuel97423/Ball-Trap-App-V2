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
              <h5 class="billing-address">Adresse de facturation</h5>
              <p @click="formShow" class="view">Edit</p>
              <p><strong>Jone Alex</strong></p>
              <address>Address: Your address goes here.</address>
              <ValidationObserver v-if="formEnabled" v-slot="{ handleSubmit }">
                <form id="form" @submit.prevent="handleSubmit(onSumit)">
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
                            <option value="RE">Réunion</option>
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
                            v-model="invoicing.adresse"
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
                    Sauvegarder les modifications
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
  data() {
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
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        country: "",
        zone: "",
        zip: "",
        adresse: "",
        review: "",
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
  },
};
</script>

<style scoped>
.view {
  font-size: 15px;
  cursor: pointer;
}
</style>