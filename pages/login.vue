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
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div class="account_form">
              <h3>Connexion</h3>
              <form id="loginForm" name="loginForm" @submit.prevent="onSubmit">
                <div class="default-form-box">
                  <label>Email <span>*</span></label>
                  <input
                    v-model="login.email"
                    type="email"
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
                    Se connecter
                  </button>
                </div>
                <div class="remember_area">
                  <label class="checkbox-default">
                    <input type="checkbox" />
                    <span>Se Rappeler de moi</span>
                  </label>
                </div>

                <nuxt-link to="/register">Créer un compte?</nuxt-link>
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
      title: "Login",
      login: {
        username: "",
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
        .loginWith("local", { data: this.login })
        .then((res) => {
          console.log(res.data);
          this.$store.dispatch("user/login", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>