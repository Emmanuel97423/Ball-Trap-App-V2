<template>
  <!-- Coming Soon Area -->
  <section id="coming_soon_area" class="ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="coming_soon_content">
            <h1>TRAPONE LOGO</h1>
            <p>Slogan : lorem ipsum dolor</p>
            <nuxt-link v-if="!enabled" to="/"
              ><img src="~/assets/img/logo-white.png" alt="coming-soon"
            /></nuxt-link>
            <div class="coming_soon_title">
              <h2>Ouverture prochaine</h2>
              <p>
                Vente d'articles pour ball trap. Distributeur officiel de la
                marque Castellani .
              </p>
            </div>
            <div class="coming_soon_time">
              <div id="countdown_soon">
                <Timer date="July 31, 2021" />
              </div>
            </div>
            <div v-if="!enabled" class="coming_soon_newsletter">
              <h3>Restez informer de nos prochaines mise à jour</h3>
              <form>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Votre E-mail"
                  />
                  <button
                    type="button"
                    class="theme-btn-one btn-black-overlay btn_md"
                  >
                    S'inscrire
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Timer from "../components/widgets/Timer";

export default {
  layout: "headless-layout",
  name: "coming-soon",

  components: {
    Timer,
  },

  data() {
    return {
      title: "Trap One",
      enabled: true,
    };
  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "Trap One",
          name: "Trap One",
          content: "Trap One, vente d'article de sport, ball trap",
        },
      ],
    };
  },
};
</script>

<style scoped>
.coming_soon_content h1,
p {
  color: white;
}
</style>
