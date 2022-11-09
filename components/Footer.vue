<template>
  <div>
    <!-- footer Area -->
    <!-- <footer id="footer_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12 col-12">
            <div class="footer_left_side">
              <div class="logo">
                <h3>Trap One Logo</h3>
                <nuxt-link v-if="!enabled" to="/"
                  ><img :src="require('@/assets/img/logo.png')" alt="logo"
                /></nuxt-link>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati culpa assumenda voluptas placeat amet consectetur
                adipisicing elit. Obcaecati culpa assumenda voluptas placeat.
              </p>
              <div class="footer_left_side_icon">
                <ul>
                  <li>
                    <a href="#!"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#!"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#!"><i class="fab fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#!"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 col-12">
            <div class="footer_one_widget">
              <h3>MENU</h3>
              <ul>
                <li><nuxt-link to="/">Accueil</nuxt-link></li>
                <li><nuxt-link to="#">A propos</nuxt-link></li>
                <li>
                  <nuxt-link to="#">Mentions Légales</nuxt-link>
                </li>
                <li><nuxt-link to="#">Questions courantes</nuxt-link></li>
                <li>
                  <nuxt-link to="#">Suivi livraison</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Comparer</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-12 col-12">
            <div class="footer_one_widget">
              <h3>Mon compte</h3>
              <ul>
                <li><nuxt-link to="#">Panier</nuxt-link></li>

                <li>
                  <nuxt-link to="#">LIste de souhaits</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Commandes</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">Compte</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="footer_one_widget">
              <h3>NEWSLETTER</h3>
              <div id="mc_embed_signup" class="subscribe-form">
                <form>
                  <div class="mc-form">
                    <input
                      class="form-control"
                      type="email"
                      required=""
                      placeholder="Votre Email"
                      name="EMAIL"
                      value=""
                    />
                    <div class="clear">
                      <button
                        class="theme-btn-one btn_md"
                        type="button"
                        name="subscribe"
                      >
                        <i class="icon-cursor"></i> Envoyer
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer> -->

    <!-- CopyRight Area -->
    <section id="copyright_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="copyright_left">
              <h6>
                © tous droits réservés {{ yearNow }}. <span>exo-trap.re</span>
              </h6>
            </div>
          </div>
          <div class="
              legals-links
              d-flex
              flex-row-reverse
              align-items-center
              bd-highligh
              col-lg-6 col-md-6 col-sm-6 col-12
            ">
            <div class="copyright_left mr-3">
              <a href="./legal/politique-de-confidentialité">
                <h6>Politique de confidentialité</h6>
              </a>
            </div>
            <!-- <div class="copyright_left mr-3">
              <h6>Coordonnées</h6>
            </div> -->
            <div class="copyright_left mr-3">
              <a href="./legal">
                <h6>Condition générale de ventes</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enabled: true,
      year: "",
    };
  },

  computed: {
    yearNow() {
      const date = new Date();
      return date.getFullYear();
    },
  },
};
</script>

<style scoped>
/* #footer {
  padding: 25px 0 0 0;
} */

.copyright_right {
  display: flex;
  justify-content: flex-end;
}

.copyright_right :nth-child(1) {
  margin-right: 1rem;
}

@media only screen and (max-width: 425px) {
  .legals-links {
    margin: 15px 0 0 0;
  }
}
</style>
