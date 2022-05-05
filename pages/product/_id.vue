<template>
  <div class="container__products">
    <!-- <div>
      <b-spinner class="spinner" label="Loading..."></b-spinner>
    </div> -->
    <!-- Banner Area -->
    <section v-if="!enabled" id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>Shop</h2>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Single Area -->
    <section id="product_single_one" class="ptb-25">
      <div class="container">
        <div class="back-link"><a onclick="history.back()">Retour</a></div>
        <div class="row area_boxed">
          <div class="col-lg-4 col-img">
            <div class="product_single_one_img">
              <swiper
                class="swiper product-single-2-slider"
                :options="swiperOption"
              >
                <swiper-slide>
                  <img :src="product.imageUrl" alt="img" />
                </swiper-slide>

                <div
                  class="swiper-button-prev swiper-button-white"
                  slot="button-prev"
                ></div>
                <div
                  class="swiper-button-next swiper-button-white"
                  slot="button-next"
                ></div>
              </swiper>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="product_details_right_one">
              <div class="modal_product_content_one">
                <h3 v-if="this.$route.params.id">
                  {{ product.name }}
                </h3>
                <h3 v-else>Test fiche produit hello</h3>

                <div v-if="!enabled" class="reviews_rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <span>(2 avis clients)</span>
                </div>

                <h4>
                  {{ parseFloat(product.priceTtc).toFixed(2) }} €
                  <span id="tax">T.T.C</span>
                </h4>
                <SizeChart :productName="product.name"></SizeChart>
                <SelectSize />
                <button v-if="product.quantity > 0" class="btn__stock--green">
                  Stock disponible
                </button>
                <button v-else class="btn__stock--red">
                  Stock indisponible
                </button>
                <p class="pt-15">
                  {{ product.description }}
                </p>

                <!-- <span v-if="product.quantity > 0"
                  >Qté: <em>Reste {{ product.quantity }}</em></span
                >
                <span v-else>Qté: <em>Rupture</em></span> -->

                <!-- productquantity : {{ product.quantity }} -->
                <!-- <div class="customs_selects">
                  <select name="product" class="customs_sel_box">
                    <option value="size">Taille</option>
                    <option value="xl">XL</option>
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                  </select>
                </div> -->

                <b-alert
                  class="stock-alert"
                  :show="dismissCountDown"
                  dismissible
                  variant="warning"
                  @dismissed="dismissCountDown = 0"
                  @dismiss-count-down="countDownChanged"
                >
                  <p>
                    Dernière article en cours de commande: stock insufisant.
                    <!-- {{ dismissCountDown }} seconds... -->
                  </p>
                  <b-progress
                    variant="warning"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
                  ></b-progress>
                </b-alert>
                <div v-if="enabled" class="variable-single-item">
                  <span>Couleurs</span>
                  <div class="product-variable-color">
                    <label for="modal-product-color-red1">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-red1"
                        class="color-select"
                        type="radio"
                        checked=""
                      />
                      <span class="product-color-red"></span>
                    </label>
                    <label for="modal-product-color-tomato2">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-tomato2"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-tomato"></span>
                    </label>
                    <label for="modal-product-color-green3">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-green3"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-green"></span>
                    </label>
                    <label for="modal-product-color-light-green4">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-light-green4"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-light-green"></span>
                    </label>
                    <label for="modal-product-color-blue5">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-blue5"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-blue"></span>
                    </label>
                    <label for="modal-product-color-light-blue6">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-light-blue6"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-light-blue"></span>
                    </label>
                  </div>
                </div>

                <!--Counter quantity-->

                <form id="product_count_form_two ">
                  <div class="product_count_one pt-15">
                    <b-form-spinbutton
                      id="sb-inline"
                      v-model="orderQuantity"
                      inline
                      class="border-0"
                    ></b-form-spinbutton>
                  </div>
                </form>
                <ul class="assurances-product">
                  <li class="assurances-product-list">
                    <div class="assurances-product-icon">
                      <b-icon icon="credit-card-2-back"></b-icon>
                    </div>
                    <div class="assurances-product-text">
                      <h5>Paiement 100% Sécurisé</h5>
                      <span>3D Secure</span>
                    </div>
                  </li>
                  <li id="middle-assurances" class="assurances-product-list">
                    <div class="assurances-product-icon">
                      <b-icon icon="arrow-left-right"></b-icon>
                    </div>
                    <div class="assurances-product-text">
                      <h5>Satisfait ou remboursé</h5>
                      <a href="./legal"
                        ><span>Après réception (2 jours)</span></a
                      >
                    </div>
                  </li>
                  <li class="assurances-product-list">
                    <div class="assurances-product-icon">
                      <b-icon icon="cash-stack"></b-icon>
                    </div>
                    <div class="assurances-product-text">
                      <h5>Jusqu'à 4x sans frais</h5>
                      <!-- <span>3D Secure</span> -->
                    </div>
                  </li>
                </ul>

                <div class="links_Product_areas">
                  <!-- <ul>
                    <li v-if="!enabled">
                      <nuxt-link
                        to="/my-account/wishlist"
                        class="action wishlist"
                        title="Wishlist"
                        ><i class="far fa-heart"></i>Add To Wishlist</nuxt-link
                      >
                    </li>
                    <li v-if="!enabled">
                      <nuxt-link
                        to="/my-account/compare"
                        class="action compare"
                        title="Compare"
                        ><i class="fas fa-exchange-alt"></i>Add To
                        Compare</nuxt-link
                      >
                    </li>
                  </ul> -->
                  <div v-if="!this.$auth.loggedIn" class="signup-mention">
                    <b-icon
                      class="signup-mention-icon"
                      icon="exclamation-circle-fill"
                    ></b-icon>
                    <p>Toute commande nécessite la création d'un compte</p>
                  </div>
                  <button
                    v-if="product.quantity > 0"
                    class="theme-btn-one btn-black-overlay btn_sm"
                    @click="addToCart(product)"
                  >
                    Ajouter au panier
                  </button>

                  <!-- Out of stock -->
                  <!-- <p v-else>Non disponible</p> -->
                  <br />
                  {{ message }}
                  <!-- <AddToCart
                  :productId="product._id"
                  :productPrice="product.price"
                  :productQuantity="quantity"
                  :productTitle ="product.name"
                  :productEan ="product.ean"
                  :quantity="quantity"
                  /> -->
                  <!-- <button
                    
                    class="theme-btn-one btn-black-overlay btn_sm"
                    
                    >Ajouter au panier</button
                  > -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="product_details_tabs">
              <b-tabs>
                <b-tab title="Description" active id="description">
                  <div class="product_description">
                    <p>{{ product.description }}</p>
                    <br />
                    <!-- <div>
                      <h3>POUR ARME DE CATÉGORIE X</h3>
                      <br />
                      <p>
                        Arme de catégorie X, merci de nous fournir les documents
                        suivants :
                      </p>
                      <ul>
                        <li>Pièce d'identité recto (CNI ou passeport)</li>
                        <li>Pièce d'identité Verso (CNI)</li>
                        <li>Justificatif de domicile (- de 3 mois)</li>
                        <li>Permis de chasser</li>
                        <li>Licence de Tir en cours de validité</li>
                        <li>Licence de Tir FFT Verso</li>
                        <li>
                          Validation du permis de chasser de l'année en cours ou
                          licence de Tir FFBT ou FFTir en cours de validité
                          signée et tamponnée par le médecin.
                        </li>
                      </ul>

                      <p>
                        Lire notre dossier La Chasse en France, le permis de
                        chasser, les espèces chassables. Equipez-vous d'un
                        coffre fort pour armes et munitions.
                      </p>
                    </div> -->
                    <!-- <p>
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem. Vestibulum ac diam sit amet quam vehicula
                      elementum sed sit amet dui. Sed porttitor lectus nibh.
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. Sed porttitor lectus nibh. Donec
                      sollicitudin molestie malesuada. Vivamus magna justo,
                      lacinia eget consectetur sed, convallis at tellus.
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem.
                    </p>
                    <ul>
                      <li>Vivamus magna justo, lacinia eget consectetur sed</li>
                      <li>Curabitur aliquet quam id dui posuere blandit</li>
                      <li>
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar
                      </li>
                    </ul>
                    <p>
                      Donec sollicitudin molestie malesuada. Cras ultricies
                      ligula sed magna dictum porta. Mauris blandit aliquet
                      elit, eget tincidunt nibh pulvinar a. Nulla porttitor
                      accumsan tincidunt. Cras ultricies ligula sed magna dictum
                      porta. Curabitur arcu erat, accumsan id imperdiet et,
                      Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. porttitor at
                      sem. Quisque velit nisi, pretium ut lacinia in, elementum
                      id enim.
                    </p> -->
                  </div>
                </b-tab>

                <b-tab title="Informations additionnels" id="additional">
                  <div class="product_additional">
                    <ul>
                      <li>Poids: <span>400 g</span></li>
                      <li>Dimensions: <span>10 x 10 x 15 cm</span></li>
                      <li>
                        Materiaux: <span> 60% cotton, 40% polyester</span>
                      </li>
                      <li>
                        Autres infos:
                        <span>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Eveniet nostrum est nesciunt velit tempo</span
                        >
                      </li>
                    </ul>
                  </div>
                </b-tab>

                <!-- <b-tab title="Avis" id="review">
                  <div class="product_reviews">
                    <ul>
                      <li class="media">
                        <div class="media-img">
                          <img
                            :src="require('@/assets/img/user/user1.png')"
                            alt="img"
                          />
                        </div>
                        <div class="media-body">
                          <div class="media-header">
                            <div class="media-name">
                              <h4>Sara Anela</h4>
                              <p>Il y a 5 jours</p>
                            </div>
                            <div class="post-share">
                              <a href="#!" class="replay">Répondre</a>
                              <a href="#!" class="">Signaler</a>
                            </div>
                          </div>
                          <div class="media-pragraph">
                            <div class="product_review_strat">
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                            </div>
                            <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque Praesent sapien massa,
                              convallis a pellentesque nec, egestas non nisi.
                              Cras ultricies ligula sed magna dictum porta.
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Vivamus magna justo.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-img">
                          <img
                            :src="require('@/assets/img/user/user2.png')"
                            alt="img"
                          />
                        </div>
                        <div class="media-body">
                          <div class="media-header">
                            <div class="media-name">
                              <h4>Sara Anela</h4>
                              <p>Il y a 5 jours</p>
                            </div>
                            <div class="post-share">
                              <a href="#!" class="replay">Répondre</a>
                              <a href="#!" class="">Signaler</a>
                            </div>
                          </div>
                          <div class="media-pragraph">
                            <div class="product_review_strat">
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                            </div>
                            <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque Praesent sapien massa,
                              convallis a pellentesque nec, egestas non nisi.
                              Cras ultricies ligula sed magna dictum porta.
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Vivamus magna justo.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-img">
                          <img
                            :src="require('@/assets/img/user/user3.png')"
                            alt="img"
                          />
                        </div>
                        <div class="media-body">
                          <div class="media-header">
                            <div class="media-name">
                              <h4>Sara Anela</h4>
                              <p>Il y a 5 jours</p>
                            </div>
                            <div class="post-share">
                              <a href="#!" class="replay">Répondre</a>
                              <a href="#!" class="">Signaler</a>
                            </div>
                          </div>
                          <div class="media-pragraph">
                            <div class="product_review_strat">
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                              <span
                                ><a href="#!"><i class="fas fa-star"></i></a
                              ></span>
                            </div>
                            <p>
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque Praesent sapien massa,
                              convallis a pellentesque nec, egestas non nisi.
                              Cras ultricies ligula sed magna dictum porta.
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Vivamus magna justo.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-tab> -->
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Product -->
    <section id="related_product" class="pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="center_heading">
              <h2>Vous pourriez aussi aimer</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6 col-12"
            v-for="item in relatedProducts"
            :key="item._id"
          >
            <p v-if="$fetchState.pending">
              <!-- <span class="loading"></span> -->
              <Spinner></Spinner>
            </p>
            <p v-else-if="$fetchState.error">Une erreur est survenue! 🤬</p>
            <ProductBox1
              class="mt-3"
              :productImg1="item.imageUrl"
              :productImg2="item.imageUrl"
              :productTagClass="item.productTagClass"
              :productTag="item.productTag"
              :productTitle="item.name"
              :productPrice="item.priceTtc"
              :productQuantity="item.quantity"
              :productId="item._id"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram Arae -->
    <!-- <InstagramArea /> -->
    <b-modal
      id="parent-modal"
      ref="my-modal-purchase"
      hide-footer
      title="Information"
      modal-class="modal-connect"
      dialog-class="dialog__class--cart"
      content-class="content__class--cart"
    >
      <div id="login-modal">
        <div
          class="
            d-flex
            justify-content-center
            align-items-center
            d-block
            text-center
          "
        >
          <b-icon
            id="icon-check-purchase"
            icon="check"
            variant="success"
          ></b-icon>
          <h3 class="ml-2">Article ajouter au panier</h3>
        </div>

        <div class="modal__button">
          <!-- <button
              class="mt-2 theme-btn-one btn-black-overlay btn_sm"
              block
              @click="toggleModal"
            >
              Se connecter
            </button> -->

          <button
            class="theme-btn-one btn-black-overlay btn_sm"
            @click="closeModal"
          >
            Continuer mes achats
          </button>
          <nuxt-link
            to="/my-account/checkout-1"
            class="theme-btn-one btn-green-overlay btn_sm"
            >Commander</nuxt-link
          >
          <!-- <button
              class="mt-2 theme-btn-one btn-black-overlay btn_sm"
              block
              @click="toggleModal"
            >
              S'inscrire'
            </button> -->
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
const apiURL = "https://trap-one-api.herokuapp.com/api";
import ProductBox1 from "../../components/product-box/ProductBox1";
import InstagramArea from "../../components/instagram/InstagramArea";
import AddToCart from "../../components/AddToCart";
import { mapState, mapActions, mapMutations } from "vuex";
import SelectSize from "@/components/product/SelectSize";
import SizeChart from "@/components/product/SizeChart";

export default {
  scrollToTop: true,
  name: "product-single-2",
  components: {
    ProductBox1,
    InstagramArea,
    AddToCart,
    SelectSize,
    SizeChart,
  },
  data() {
    return {
      //Product data
      // product: {},
      //Alter data
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,

      enabled: true,
      title: this.$route.params.slug,

      // Product details Popup slider
      swiperOption: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: true,
        mousewheel: true,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: true,
      },

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Product Single",
          to: "/product",
        },
      ],

      // Product Quanity Increment/ Decrement Data
      orderQuantity: 1,

      //error message
      message: "",
      //related Product
      relatedProducts: "",
    };
  },
  async fetch() {
    try {
      this.relatedProducts = await this.$http.$get(
        `${apiURL}/product/allProduct`
      );
      // console.log("products", this.relatedProducts);
    } catch (error) {
      console.error("error", error);
    }
  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: this.product.name,
          content: this.product.description,
        },
      ],
    };
  },

  computed: {
    product() {
      // return this.$store.getters["products/product"];
      return this.$store.state.products.product;
    },
  },
  methods: {
    //Alert
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },

    addToCart(product) {
      // console.log("product:", product);
      this.$store
        .dispatch("products/decrementStock", product._id)
        .then((result) => {
          if (result == true) {
            this.$store.commit("cart/orderQuantity", this.orderQuantity);
            console.log("this.orderQuantity:", this.orderQuantity);
            this.$store.commit("cart/add", product);
            this.toggleModal();
          } else {
            this.showAlert();
            console.log("Stock Insuffisant");
          }
          // if (result) {
          //   this.$store.commit("cart/add", product);
          //   this.$store.commit("cart/orderQuantity", this.orderQuantity);
          // } else {
          //   this.showAlert();
          //   console.log("Stock Insuffisant");
          // }
        })
        .catch((err) => {
          console.log("decrement error:", err);
        });
      // this.$store
      //   .dispatch("products/getProducts")
      //   .then(() => {
      //     console.log("Api products sucess");
      //     this.$store
      //       .dispatch("products/decrementStock", this.$route.params.id)
      //       .then(() => {
      //         console.log("Decrement stock sucess");
      //       })
      //       .catch((error) => {
      //         console.log("Error", error);
      //       });
      //   })
      //   .catch((err) => {
      //     console.log("Error", err);
      //   });
      // this.stock -= this.orderQuantity;
      // if (this.stock <= -1) {
      //   this.message = "Stock Insufisant";
      // } else {
      //   try {
      //     this.$store.commit("cart/orderQuantity", this.orderQuantity);
      //     console.log("Mutation orderQuantity OK");
      //     try {
      //       this.$store.commit("cart/add", product);
      //       console.log("Mutation add to cart OK", product);
      //     } catch (e) {
      //       console.log("Mutation add to cart ERROR", e);
      //     }
      //   } catch (e) {
      //     console.log("Error mutation orderQuantity", e);
      //   }
      // }
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal-purchase"].toggle("#toggle-btn");
    },
    closeModal() {
      this.$refs["my-modal-purchase"].hide();
    },
    removeFromCart(product) {
      this.$store.commit("cart/remove", product);
    },

    // capitalizeFirstLetter(string) {
    //   return string.charAt(0).toUpperCase() + string.slice(1);
    // },
    // outOfStock() {
    //   const stock = this.product.quantity;
    //   if (stock < 1) {
    //     return false;
    //   }
    // },
    // dataTest (){
    //   this.$axios.get("/product/" + this.$route.params.id)
    //       .then((res) => {

    //           console.log(res.data._id)

    //       }).catch((err) => {console.log(err)})
    // },
  },
  created() {
    // this.dataTest()
    // this.outOfStock();
    const id = this.$route.params.id;

    this.$store
      .dispatch("products/getOneProduct", id)
      .then(() => {
        console.log("Api sucess");
      })
      .catch((err) => {
        console.log("Api error", err);
      });
  },
  // beforeDestroy() {},
};
</script>

<style scoped>
.btn-green-overlay {
  background-color: green;
  color: #fff;
}
#tax {
  font-size: 12px;
}

.back-link {
  width: 26%;
  display: flex;
  justify-content: flex-start;
}
.back-link:first-child {
  /* flex: 10%; */
  margin: 0 0 40px 0;
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
}
.modal__button {
  text-align: center;
  width: 100%;
  margin: 25px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  row-gap: 10px;
}
.modal-connect {
  width: 100%;
  padding: 20px 0 0 0;
}
.dialog__class--cart {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content__class--cart {
  width: 50%;
}
#icon-check-purchase {
  font-size: 35px;
}
.btn__stock--green {
  background-color: green;
  color: #fff;
  font-weight: 200;
  font-size: 12px;
  padding: 5px;
  letter-spacing: 1px;
  cursor: default;
  text-transform: uppercase;
  margin: 15px 0 0 0;
}
.btn__stock--red {
  background-color: red;
  color: #fff;
  font-weight: 200;
  font-size: 12px;
  padding: 5px;
  letter-spacing: 1px;
  cursor: default;
  text-transform: uppercase;
  margin: 15px 0 0 0;
}
.stock-alert {
  margin: 20px 0 0 0;
}
.assurances-product {
  margin: 20px 0 0 0;
  display: flex;
  /* flex-direction: column; */
}
.assurances-product li {
  margin: 0 15px 0 0;
  display: flex;
  align-items: center;
}

.assurances-product-icon {
  font-size: 40px;
  margin: 0 10px 0 0;
}
.assurances-product-text h5 {
  font-weight: bold;
  font-size: 16px;
}
.assurances-product-text span {
  font-size: 14px;
}
#middle-assurances {
  border-left: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
  padding: 0 20px;
}
.signup-mention {
  background-color: rgba(255, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 15px 0 0 0;
}
.signup-mention p {
  color: red;
  padding: 15px;
}
.signup-mention-icon {
  color: rgba(255, 0, 0, 0.8);
}
/*Responsive*/
@media (max-width: 768px) {
  .assurances-product {
    flex-direction: column;
  }
  #middle-assurances {
    border-left: none;
    border-right: none;
    padding: 0;
  }
}
@media only screen and (min-width: 768px) {
  /* tablettes et ordinateurs */

  .col-img {
    max-width: 26%;
  }
}
</style>
