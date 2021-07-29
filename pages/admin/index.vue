<template>
  <div>
    <!-- Banner Area -->
    <section v-if="!enabled" id="common_banner_one">
      <div class="container ">
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
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div class="account_form">
              <h3>Connexion</h3>
              <form @submit.prevent="userLogin">
                <div class="default-form-box">
                  <label>Email <span>*</span></label>
                  <input
                    v-model="login.email"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="default-form-box">
                  <label>Mot de passe <span>*</span></label>
                  <input
                    v-model="login.password"
                    type="password"
                    class="form-control"
                  />
                </div>
                <div class="login_submit">
                  <button
                    class="theme-btn-one btn-black-overlay btn_md"
                    type="submit"
                  >
                    Connexion
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      enabled: true,
      title: "Connexion",
      //Login
      login: {
        email: "",
        password: "",
      },

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Accueil",
          to: "/",
        },
        {
          text: "Connexion",
        },
      ],
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        console.log(response);
        this.$router.push("/admin/addProduct");
      } catch (err) {
        console.log(err);
      }
    },
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
};
</script>

<style></style>
