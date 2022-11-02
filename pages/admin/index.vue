<template>
  <div>
    <h1>Tableau de bord</h1>
  </div>
</template>

<script>
export default {
  name: "Login",
  layout: "admin",
  middleware: "auth",
  data() {
    return {
      enabled: true,
      title: "Connexion",
      //Login
      login: {
        email: "",
        password: "",
      },
      error: {
        enabled: false,
        message: "",
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
        console.log(err.response.data.error);
        this.error.enabled = true;
        this.error.message = err.response.data.error;
      }
    },
  },
  mounted() {
    if (this.$store.state.auth.user) {
      const userAuthObject = this.$store.state.auth.user.userObject;
      const role = this.$store.state.auth.user.userObject.role;
      if (role !== "administrator") {
        this.$router.push('/admin/no-access')
      }
    }
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

<style>

</style>
