<template>
  <div>
    <!-- footer Area -->
    <footer id="footer_one">
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
    </footer>

    <!-- CopyRight Area -->
    <section id="copyright_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="copyright_left">
              <h6>© tous droits réservés 2021 <span>Trap-One</span></h6>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="copyright_right">
              <img
                :src="require('@/assets/img/common/payment.png')"
                alt="img"
              />
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
    };
  },
};
</script>

<style></style>
