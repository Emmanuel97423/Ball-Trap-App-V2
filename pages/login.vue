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
    <section id="login_area" class="ptb-100">
      <div class="container login-container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div class="account_form">
              <h3 data-testid="login-title">Bienvenue à la maison, shooter!</h3>
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
                    <div class="default-form-box password-login-button">
                      <label>Mot de passe <span>*</span></label>

                      <div class="password-login-input">
                        <input
                          v-if="!login.showPassword"
                          name="password"
                          v-model="login.password"
                          type="password"
                          class="form-control"
                          autocomplete="on"
                        />
                        <input
                          v-else
                          name="password"
                          v-model="login.password"
                          class="form-control"
                          autocomplete="on"
                        />
                        <button class="btn-login-password">
                          <i
                            v-if="!login.showPassword"
                            class="fa fa-solid fa-eye"
                            @click.stop.prevent="showPassword()"
                          ></i>
                          <i
                            v-else
                            class="fa fa-solid fa-eye-slash"
                            @click.stop.prevent="showPassword()"
                          ></i>
                        </button>
                      </div>

                      <span class="error__message">{{ errors[0] }}</span>
                    </div>
                    <div class="forgot-password">
                      <nuxt-link to="/resetting/request"
                        >Mot de passe oublié?</nuxt-link
                      >
                    </div>
                  </ValidationProvider>
                  <div class="login_submit">
                    <button
                      class="theme-btn-one btn-black-overlay btn_md"
                      type="submit"
                    >
                      Pull!
                    </button>
                    <nuxt-link to="/register"
                      ><span>Ou </span>créer un compte</nuxt-link
                    >
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
        showPassword: false,
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
          this.$router.push("/my-account");
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
    showPassword() {
      if (this.login.showPassword === false) {
        this.login.showPassword = true;
        console.log("this.login.showPassword:", this.login.showPassword);
      } else {
        this.login.showPassword = false;
      }
      // setTimeout(() => {
      //   this.login.showPassword = false;
      // }, 5000);
    },
  },
};
</script>

<style>
.login_submit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login_submit a {
  margin: 25px 0 0 0;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: rgb(105, 105, 105);
}
.login_submit span {
  text-transform: lowercase;
  font-weight: 400;
  color: rgb(158, 156, 156);
}
.forgot-password {
  text-align: center;
  margin: 0 0 20px 0;
}
.forgot-password a {
  text-decoration: none;
  color: rgb(158, 156, 156);
}
.forgot-password a:hover {
  text-decoration-line: underline;
}

.login-container {
  width: 70%;
}

.account_form h3 {
  margin: 0 0 20px 0;
}

.fa-eye,
.fa-eye-slash {
  cursor: pointer;
  /* color: rgb(183, 183, 183); */
}
/* .password-login-button input {
  border: none;
}
.password-login-button input:focus {
  border: none;
} */

.password-login-input {
  display: flex;
  justify-content: center;
  align-items: center;
}

.password-login-input button {
  flex: 1 1 50px;
}

.password-login-button input {
  border-radius: 5px 0 0 5px;
}

.password-login-button button {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 5px 5px 0;
  border: 1px solid #ddd;
  border-left: none;
  background-color: #fff;

  /* background-color: #e8f0fe; */
  /* border: none;
  border-color: transparent;
  outline: none;
  box-shadow: none;
  border-color: transparent; */
}
.password-login-button button:visited {
  background-color: #fff;
  outline: none;
  box-sizing: none;
  border: 1px solid var(--main-theme-color) !important;
}

@media (max-width: 1024px) {
  .login-container {
    width: 80%;
  }
}
@media (max-width: 375px) {
  .login-container {
    width: 100%;
  }
}
</style>