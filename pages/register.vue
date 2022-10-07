<template>
  <div>
    <!-- Banner Area -->
    <section v-if="!enabled" id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>{{ this.title }}</h2>
              <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Register-Area -->
    <section v-if="enabled" id="login_area">
      <div class="container login-container">
        <div class="row">
          <!-- <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12"> -->
          <div class="col-md-12 col-sm-12 col-12">
            <div class="account_form-register account_form">
              <!-- <div> -->
              <h3>Ouvrir un compte</h3>
              <ValidationObserver ref="registerForm" v-slot="{ handleSubmit }">
                <form id="registerForm" name="registerForm" @submit.prevent="handleSubmit(onSubmit)">
                  <!-- fisrtName -->
                  <ValidationProvider name="firstName" rules="required|alpha" v-slot="{ errors }">
                    <div class="default-form-box">
                      <label for="firstName">Pseudo <span>*</span></label>
                      <input v-model="register.firstName" id="firstName" name="firstName" type="text"
                        class="form-control" />
                      <span class="error__message">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>

                  <!-- LastName -->
                  <!-- 
                  <ValidationProvider
                    name="lastName"
                    rules="required|alpha"
                    v-slot="{ errors }"
                  >
                    <div class="default-form-box">
                      <label for="lastName">Prénom <span>*</span></label>
                      <input
                        v-model="register.lastName"
                        id="lastName"
                        name="lastName"
                        type="text"
                        class="form-control"
                      />
                      <span class="error__message">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider> -->

                  <!-- Email      -->

                  <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                    <div class="default-form-box">
                      <label for="email">Email <span>*</span></label>
                      <input v-model="register.email" id="email" name="email" type="text" class="form-control" />
                      <span class="error__message">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>

                  <!-- Password -->

                  <ValidationProvider name="password" rules="required|password:@confirmPassword" v-slot="{ errors }">
                    <div class="default-form-box">
                      <label for="password">Mot de passe <span>*</span></label>
                      <input v-model="register.password" id="password" name="password" type="password"
                        class="form-control" />
                      <span class="error__message">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>

                  <!-- Confirm password confirmation -->

                  <ValidationProvider name="confirmPassword" rules="required" v-slot="{ errors }">
                    <div class="default-form-box">
                      <label for="confirmPassword">Confirmez votre mot de passe <span>*</span></label>
                      <input v-model="register.confirmation" id="confirmPassword" name="confirmPassword" type="password"
                        class="form-control" />
                      <span class="error__message">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>

                  <!-- ID picture -->

                  <!-- <ValidationProvider
                    name="idFile"
                    rules="required|ext:jpg,png"
                    v-slot="{ validate, errors }"
                  > -->
                  <!-- <div class="default-form-box"> -->
                  <!-- <label for="idFile"
                        >Photocopie de votre pièce d'identité
                        <span>*</span></label
                      > -->
                  <!-- <input
                        type="file"
                        id="idFile"
                        name="idFile"
                        @change="validate"
                        
                      /> -->
                  <!-- <b-form-file
                        v-model="register.idFile"
                        class="mt-3"
                        type="file"
                        id="idFile"
                        name="idFile"
                        @change="validate"
                        plain
                      ></b-form-file> -->
                  <!-- <span class="error__message">{{ errors[0] }}</span> -->
                  <!-- </div> -->
                  <!-- </ValidationProvider> -->
                  <recaptcha />
                  <div class="login_submit">
                    <button class="theme-btn-one btn-black-overlay btn_md" type="submit">
                      Pull!
                    </button>
                    <nuxt-link to="/login">Se connecter</nuxt-link>
                    <!-- <a href="/login">Se connecter</a> -->
                  </div>
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
  layout: "login",
  middleware: "guest",
  name: "Register",
  components: { ValidationProvider, ValidationObserver },

  data() {
    return {
      enabled: true,
      title: "Ouvrir un compte",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Register",
        },
      ],
      register: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        idFile: null,
      },
      spinnerLoading: true,

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
          content: "Register page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
  methods: {
    async onSubmit() {

      try {
        const token = await this.$recaptcha.getResponse();
        // console.log("ReCaptcha token:", token);
        this.$store.dispatch("user/signup", this.register);
        let registerForm = document.getElementById("registerForm");
        const signupError = this.$store.state.user.userSignup;

        if (signupError.message) {
          this.$refs.registerForm.setErrors({
            email: [signupError.message],
          });
        } else if (signupError.passwordError) {
          this.$refs.registerForm.setErrors({
            password: [signupError.passwordError],
          });
        }
        // send token to server alongside your form data
        // at the end you need to reset recaptcha
        await this.$recaptcha.reset();
      } catch (error) {
        console.log("Login error:", error);
      }

      // console.log("signupError:", signupError);
      // this._register
      // console.log("this._register:", this.register);

      const formData = new FormData(registerForm);

      // for (let [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }

      // this.$store.dispatch("user/signup", formData);
    },
  },
};
</script>

<style scoped>
/* .error__message {
  color: red;
  font-size: 12px;
} */

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