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

              <p v-if="adresses">
                <strong
                  >{{ adresses.firstName }} {{ adresses.lastName }}
                </strong>
              </p>
              <div>
                Information de facturation:
                <br />
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
                    <tbody v-if="adresses">
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
                      </tr>
                    </tbody>

                    <tbody v-else>
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
            <Modal @modal="formShow"></Modal>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import Modal from "~/components/modal/adressModal";
export default {
  name: "Addresses",
  middleware: "auth",
  props: {
    method: Function,
  },
  components: {
    ValidationProvider,
    ValidationObserver,
    Modal,
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
      // adresses: "",
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
      // this.formEnabled = true;
      this.$bvModal.show("modal-1");
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
            // this.$forceUpdate();
            // this.$nuxt.refresh();
            this.$router.push("/my-account");
          } catch (error) {
            console.log(error);
          }
        } catch (error) {
          console.log(error);
        }
      }, 2000);
    },
  },

  created() {
    try {
      const userObject = this.$store.state.auth.user;

      this.$store.dispatch("user/getUserDetails", userObject.userId);
      this.$store.dispatch("adress/getAdresses", userObject.userId);
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    adresses() {
      return this.$store.state.adress.userAdresses.data;
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