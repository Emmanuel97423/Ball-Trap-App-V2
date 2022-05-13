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

    <!-- Login-Area -->
    <section id="login_area" class="pt-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div class="account_form">
              <h3>Connexion</h3>
              <ValidationObserver ref="loginForm" v-slot="{ handleSubmit }">
                <form
                  id="loginForm"
                  name="loginForm"
                  @submit.prevent="handleSubmit(onSubmit)"
                >
                  <ValidationProvider
                    name="email"
                    vid="email"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <div class="default-form-box">
                      <label>Email <span>*</span></label>
                      <input
                        name="email"
                        v-model="login.email"
                        type="email"
                        class="form-control"
                      />
                      <span class="error__message">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                  <ValidationProvider
                    name="password"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <div class="default-form-box">
                      <label>Mot de passe <span>*</span></label>
                      <input
                        name="password"
                        v-model="login.password"
                        type="password"
                        class="form-control"
                        autocomplete="on"
                      />
                      <span class="error__message">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                  <div class="login_submit">
                    <button
                      class="theme-btn-one btn-black-overlay btn_md"
                      type="submit"
                    >
                      Pull!
                    </button>
                    <nuxt-link to="/register">Créer un compte?</nuxt-link>
                  </div>
                  <!-- <div class="remember_area">
                    <label class="checkbox-default">
                      <input type="checkbox" />
                      <span>Se Rappeler de moi</span>
                    </label>
                  </div> -->
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
  middleware: "guest",
  name: "Login",
  components: { ValidationProvider, ValidationObserver },
  data() {
    return {
      enabled: true,
      title: "Login",
      login: {
        email: "",
        password: "",
      },

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Login",
        },
      ],
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
          content: "Login page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.$auth
        .loginWith("cookie", { data: this.login })
        .then((res) => {
          const user = res.data;

          this.$auth.setUser(user);

          this.$store.commit("user/LOGIN", user);
          // this.$router.push("/my-account")
          // this.$store.dispatch("user/login", res.data);
        })
        .catch((err) => {
          const serverMessageError = err.response.data.error;
          if (serverMessageError === "Mot de passe incorrect !") {
            this.$refs.loginForm.setErrors({
              password: [err.response.data.error],
            });
          } else if (serverMessageError === "Utilisateur non trouvé !") {
            this.$refs.loginForm.setErrors({
              email: [err.response.data.error],
            });
          } else if (
            serverMessageError === "Veuillez confirmer votre e-mail!"
          ) {
            this.$refs.loginForm.setErrors({
              email: [err.response.data.error],
            });
          }
        });
    },
  },
};
</script>

<style scoped>
.login_submit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login_submit,
a {
  margin: 10px 0 0 0;
  text-decoration-line: underline;
}
</style>