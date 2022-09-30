<template>
  <div class="dashboard_content">
    <h4>Tableau de bord</h4>
    <p>
      Depuis le tableau de bord de votre compte. vous pouvez facilement vérifier
      &amp; afficher vos
      <nuxt-link to="/my-account/orders">recentes commande</nuxt-link>, gérer
      vos
      <nuxt-link to="/my-account/addresses"
        >adresses de livraison et de facturation</nuxt-link
      >
      et
      <nuxt-link to="/my-account/account-details"
        >modifier votre mot de passe et les détails de votre compte.</nuxt-link
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  middleware: "auth",
  layout: "account",
  data() {
    return {
      enabled: true,
      title: "Mon compte",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Accueil",
          to: "/",
        },
        {
          text: "Tableau de bord",
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
    this.$store.dispatch("order/getOrders", userObject.userId);
    this.$store.dispatch("nav/getCategory");

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
/* @media only screen and (max-width: 768px) {
  #common_banner_one {
    display: none;
  }
} */
</style>