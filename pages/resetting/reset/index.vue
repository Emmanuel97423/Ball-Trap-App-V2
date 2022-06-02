<template>
  <section class="reset-password-container">
    <ValidationObserver
      v-if="!expire"
      ref="resetForm"
      v-slot="{ handleSubmit }"
    >
      <form
        id="resetForm"
        name="resetForm"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <div class="reset-password-content">
          <ValidationProvider
            name="password"
            rules="required|password:@confirmPassword"
            v-slot="{ errors }"
          >
            <div class="default-form-box">
              <label for="password">Mot de passe <span>*</span></label>
              <input
                v-model="reset.password"
                id="password"
                name="password"
                type="password"
                class="form-control"
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
                >Confirmez votre mot de passe <span>*</span></label
              >
              <input
                v-model="reset.confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                class="form-control"
              />
              <span class="error__message">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <div class="reset-password-submit">
            <button
              class="theme-btn-one btn-black-overlay btn_md"
              type="submit"
            >
              Changer mon mot de passe
            </button>
          </div>
        </div>
      </form>
    </ValidationObserver>
    <div v-else>Le lien est invalide ou a expiré</div>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  components: { ValidationObserver, ValidationProvider },
  data() {
    return {
      reset: { password: "", confirmPassword: "" },
      user: {
        token: "",
        id: "",
      },
      apiResponse: {
        error: "",
      },
      expire: "",
    };
  },
  methods: {
    async onSubmit() {
      this.fetchApi(true);
    },
    async fetchApi(mounted) {
      this.user.token = this.$route.query.token;
      this.user.id = this.$route.query.id;
      try {
        const resetPassword = await this.$axios.post(
          "/user/resetPassword/" + this.user.token + "/" + this.user.id,
          this.reset
        );
        if (mounted) {
          this.expire = false;
        }
        this.$router.push("/login");
      } catch (e) {
        if (mounted) {
          this.expire = true;
        }
        this.$refs.resetForm.setErrors({
          password: [e.response.data.passwordError],
        });
      }
    },
  },
  mounted() {
    this.fetchApi(false);
  },
};
</script>

<style>
.reset-password-container {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 0 auto 0;
  padding: 2rem;
}
.reset-password-submit {
  margin: 20px 0 0 0;
}
</style>