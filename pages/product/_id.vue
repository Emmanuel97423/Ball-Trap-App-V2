<template>
  <div>
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
    <section id="product_single_one" class="ptb-100">
      <div class="container">
        <div class="row area_boxed">
          <div class="col-lg-4">
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
                  {{
                    product.name.charAt(0).toUpperCase() + product.name.slice(1)
                  }}
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
                <p>
                  {{ product.description }}
                </p>
                <br />
                <span v-if="product.quantity > 0"
                  >Qté: <em>Reste {{ product.quantity }}</em></span
                >
                <span v-else>Qté: <em>Rupture</em></span>
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
                  :show="dismissCountDown"
                  dismissible
                  variant="warning"
                  @dismissed="dismissCountDown = 0"
                  @dismiss-count-down="countDownChanged"
                >
                  <p>
                    Stock insufisant
                    <!-- {{ dismissCountDown }} seconds... -->
                  </p>
                  <b-progress
                    variant="warning"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
                  ></b-progress>
                </b-alert>
                <div v-if="!enabled" class="variable-single-item">
                  <span>Color</span>
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
                <form id="product_count_form_two">
                  <div class="product_count_one">
                    <!-- <b-form-spinbutton
                      id="sb-inline"
                      v-model="orderQuantity"
                      inline
                      class="border-0"
                    ></b-form-spinbutton> -->
                  </div>
                </form>
                <div class="links_Product_areas">
                  <ul>
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
                  </ul>
                  <button
                    v-if="product.quantity > 0"
                    class="theme-btn-one btn-black-overlay btn_sm"
                    @click="addToCart(product)"
                  >
                    Ajouter
                  </button>
                  <!-- Out of stock -->
                  <p v-else>Non disponible</p>
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
    <!-- <section id="related_product" class="pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="center_heading">
              <h2>Vous pourriez aussi aimer</h2>
              <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6 col-12"
            v-for="productItem in product"
            :key="productItem.id"
          >
            <ProductBox1
              :productImg1="productItem.productImg1"
              :productImg2="productItem.productImg2"
              :productTagClass="productItem.productTagClass"
              :productTag="productItem.productTag"
              :productTitle="productItem.productTitle"
              :productPrice="productItem.productPrice"
            />
          </div>
        </div>
      </div>
    </section> -->

    <!-- Instagram Arae -->
    <!-- <InstagramArea /> -->
  </div>
</template>

<script>
import ProductBox1 from "../../components/product-box/ProductBox1";
import InstagramArea from "../../components/instagram/InstagramArea";
import AddToCart from "../../components/AddToCart";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "product-single-2",
  components: {
    ProductBox1,
    InstagramArea,
    AddToCart,
  },
  data() {
    return {
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
          content: "Shop page - AndShop Ecommerce Vue js, Nuxt js Template",
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
          console.log("decrement action", result);

          if (result == true) {
            this.$store.commit("cart/orderQuantity", this.orderQuantity);
            console.log("this.orderQuantity:", this.orderQuantity);

            this.$store.commit("cart/add", product);
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
  beforeDestroy() {},
};
</script>

<style scoped>
#tax {
  font-size: 12px;
}
</style>
