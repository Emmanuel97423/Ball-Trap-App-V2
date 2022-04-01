<template>
  <div class="container">
    <b-modal
      id="modal-1"
      hide-footer
      centered
      title="Editez vos coordonnées de facturation"
      content-class="content__modal--adress"
    >
      <ValidationObserver v-slot="{ handleSubmit }">
        <form id="form" @submit.prevent="handleSubmit(onSubmit)">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
              <div class="form-group">
                <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                  <label for="firstName">Nom</label>
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

          <button class="theme-btn-one btn-black-overlay btn_md" type="submit">
            Sauvegarder
          </button>
        </form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  name: "adressModal",
  props: {
    method: { type: Function },
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
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
    };
  },
  methods: {
    // formShow() {
    //   // this.formEnabled = true;
    //   this.$bvModal.show("modal-1");
    // },
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
            // console.log("Refresh");
            // this.$forceUpdate();
            // this.$nuxt.refresh();
            this.$bvModal.hide("modal-1");
            this.$emit("refresh");
            // this.$router.push("/my-account");
          } catch (error) {
            console.log(error);
          }
        } catch (error) {
          console.log(error);
        }
      }, 2000);
    },
  },
};
</script>

<style >
.content__modal--adress {
  padding: 2rem;
}
</style>