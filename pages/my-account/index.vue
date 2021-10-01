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
              <h4>Tableau de bord</h4>
              <p>
                Depuis le tableau de bord de votre compte. vous pouvez
                facilement vérifier &amp; afficher vos
                <nuxt-link to="/my-account/orders">recentes commande</nuxt-link
                >, gérer vos
                <nuxt-link to="/my-account/addresses"
                  >adresses de livraison et de facturation</nuxt-link
                >
                et
                <nuxt-link to="/my-account/account-details"
                  >modifier votre mot de passe et les détails de votre
                  compte.</nuxt-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  middleware: "auth",
  data() {
    return {
      enabled: true,
      title: "My Account",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Dashboard",
        },
      ],
      //data Login
      login: {
        email: "",
        password: "",
      },
    };
  },
  // Page head() Title, description for SEO
  head() {
    return {
      enabled: true,
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "My Account page - AndShop Ecommerce Vue js, Nuxt js Template",
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
  },
  mounted() {
    const userObject = this.$store.state.auth.user;
    this.$store.dispatch("adress/getAdresses", userObject.userId);
    // // this.$auth.refreshTokens();
    // this.login.email = this.$store.state.user.userLogin.email;
    // this.login.password = this.$store.state.user.userLogin.password;
    // console.log("this.login.password:", this.login.password);
    // this.$auth.loginWith("local", { data: this.login }).then((res) => {
    //   const user = res.data;
    //   // console.log(res.data);
    //   this.$auth.setUser(user);
    //   // this.$router.push("/my-account")
    //   // this.$store.dispatch("user/login", res.data);
    // });
  },
};
</script>

<style>
</style>