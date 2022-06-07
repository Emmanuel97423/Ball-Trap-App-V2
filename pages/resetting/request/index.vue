<template>
  <div>
    <!-- Login-Area -->
    <section id="login_area" class="ptb-100">
      <div class="container login-container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div class="account_form">
              <h3>Rappel de mot de passe</h3>
              <ValidationObserver
                ref="resetPasswordForm"
                v-slot="{ handleSubmit }"
              >
                <form
                  id="resetPasswordForm"
                  name="resetPasswordForm"
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

                  <div class="login_submit">
                    <button
                      class="theme-btn-one btn-black-overlay btn_md"
                      type="submit"
                    >
                      Réinitialiser mon mot de passe
                    </button>
                    <nuxt-link to="/login"
                      ><span>Ou </span>Se connecter</nuxt-link
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
  components: { ValidationObserver, ValidationProvider },
  data() {
    return {
      login: {
        email: null,
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        const resetPasswordRequest = await this.$axios.post(
          "/user/requestResetPassword",
          this.login
        );

        this.$router.push({
          path: "./checkEmail",
          query: { username: this.login.email },
        });
      } catch (error) {
        this.$refs.resetPasswordForm.setErrors({
          email: [error.response.data.message],
        });
      }
    },
  },
};
</script>

<style>
</style>