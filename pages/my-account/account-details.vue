<template>
  <div>
    <!-- Banner Area -->
    <section v-if="enabled" id="common_banner_one">
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
          <div class="col-sm-12 col-md-3 col-lg-3 dashboard_container">
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
              <h3>Détails du compte</h3>
              <div class="login">
                <div class="login_form_container">
                  <div class="account_details_form">
                    <ValidationObserver v-slot="{ handleSubmit }">
                      <form
                        id="accountForm"
                        name="accountForm"
                        @submit.prevent="handleSubmit(onSubmit)"
                      >
                        <p v-if="!enabled">
                          Already have an account?
                          <nuxt-link to="/login">Log in instead!</nuxt-link>
                        </p>
                        <!-- <div class="input-radio">
                        <span class="custom-radio"
                          ><input
                            type="radio"
                            value="madame"
                            name="id_gender"
                          />
                          Mme.</span
                        >
                        <span class="custom-radio"
                          ><input
                            type="radio"
                            value="monsieur"
                            name="id_gender"
                          />
                          Mrs.</span
                        >
                      </div> -->
                        <br />
                        <ValidationProvider
                          name="firstName"
                          rules="required|alpha"
                          v-slot="{ errors }"
                        >
                          <div class="default-form-box mb-20">
                            <label>Nom</label>
                            <input
                              v-model="accountDetails.firstName"
                              type="text"
                              name="firstName"
                              class="form-control"
                              :placeholder="userDetails.data.firstName"
                            />
                            <span class="error__message">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider
                          name="lastName"
                          rules="required|alpha"
                          v-slot="{ errors }"
                        >
                          <div class="default-form-box mb-20">
                            <label>Prénom</label>
                            <input
                              v-model="accountDetails.lastName"
                              type="text"
                              name="lastName"
                              class="form-control"
                              :placeholder="userDetails.data.lastName"
                            />

                            <span class="error__message">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                        <ValidationProvider
                          name="email"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="default-form-box mb-20">
                            <label>Email</label>
                            <input
                              v-model="accountDetails.email"
                              type="text"
                              name="email"
                              class="form-control"
                            />
                            <span class="error__message">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>

                        <!-- Password -->

                        <ValidationProvider
                          name="password"
                          rules="required|password:@confirmPassword"
                          v-slot="{ errors }"
                        >
                          <div class="default-form-box">
                            <label for="password"
                              >Mot de passe <span>*</span></label
                            >
                            <input
                              v-model="accountDetails.password"
                              id="password"
                              name="password"
                              type="password"
                              class="form-control"
                              autocomplete="on"
                            />
                            <span class="error__message">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>

                        <!-- Confirm password confirmation -->

                        <ValidationProvider
                          name="confirmPassword"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <div class="default-form-box">
                            <label for="confirmPassword"
                              >Confirmez votre mot de passe
                              <span>*</span></label
                            >
                            <input
                              v-model="accountDetails.confirmation"
                              id="confirmPassword"
                              name="confirmPassword"
                              type="password"
                              class="form-control"
                              autocomplete="on"
                            />
                            <span class="error__message">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                        <!-- <div class="default-form-box mb-20">
                        <label>Birthdate</label>
                        <input
                          type="date"
                          name="birthday"
                          class="form-control"
                        />
                      </div>
                      <span class="example"> (E.g.: 05/31/1970) </span> -->
                        <br />
                        <!-- <label class="checkbox-default" for="offer">
                        <input type="checkbox" id="offer" />
                        <span>Receive offers from our partners</span>
                      </label>
                      <br />
                      <label
                        class="checkbox-default checkbox-default-more-text"
                        for="newsletter"
                      >
                        <input type="checkbox" id="newsletter" />
                        <span
                          >Sign up for our newsletter<br /><em
                            >You may unsubscribe at any moment. For that
                            purpose, please find our contact info in the legal
                            notice.</em
                          >
                        </span>
                      </label> -->
                        <div class="save_button mt-3"></div>
                        <button
                          class="theme-btn-one btn-black-overlay btn_md"
                          type="submit"
                        >
                          Sauvegarder les modifications
                        </button>
                      </form>
                    </ValidationObserver>
                    <!-- {{ accountDetails }} -->
                  </div>
                </div>
              </div>
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
  name: "AccountDetails",
  middleware: "auth",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      enabled: true,
      title: "Détails du compte",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Accueil",
          to: "/",
        },
        {
          text: "Détails du compte",
        },
      ],
      accountDetails: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmation: "",
      },
      userLogin: "",
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
            "Account Details page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
  methods: {
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
    // getUserDetails() {
    //   // this.userLogin = this.$store.state.auth.user;
    //   try {
    //     const id = this.$store.state.auth.user.userId;
    //     this.$store.dispatch("user/getUserDetails", id);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    onSubmit() {
      try {
        this.userLogin = this.$store.state.user.userLogin;
        const id = this.$store.state.auth.user.userId;
        const userObject = {
          userObjectId: id,
          userDetailsObject: this.accountDetails,
        };
        // console.log(userObject);
        this.$store.dispatch("user/update", userObject);
        this.$router.push("/my-account");
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    userDetails() {
      return this.$store.state.user.userDetails;
    },
  },
  created() {
    try {
      const id = this.$store.state.auth.user.userId;
      this.$store.dispatch("user/getUserDetails", id);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
/* #my-account_area {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
} */
</style>