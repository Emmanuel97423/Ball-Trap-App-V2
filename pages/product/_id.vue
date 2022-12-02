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
              <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <div class="container" v-if="$fetchState.pending"> -->
    <!-- <span class="loading"></span> -->
    <!-- <Spinner></Spinner> -->
    <!-- </div> -->
    <!-- Product Single Area -->
    <div class="loading-spinner" v-if="$fetchState.pending">
      <!-- <span class="loading"></span> -->
      <Spinner></Spinner>
    </div>
    <div v-else>
      <section id="product_single_one" class="ptb-25">
        <div class="container">
          <div class="product-list-breadcrumb-section">
            <a class="back-link" onclick="history.back()">Retour</a>
            <b-breadcrumb :items="breadcrumbItems" class="product-list-breadcrumb"></b-breadcrumb>
          </div>
          <div class="row area_boxed">
            <div class="col-lg-4 col-img">
              <div v-if="!enabled" class="product_single_one_img">
                <swiper v-if="product.isAProductGamme == true" class="swiper product-single-2-slider"
                  :options="swiperOption" ref="swiperImage">
                  <!-- <swiper-slide>
                    <img :src="product.imageUrl" alt="img" />
                  </swiper-slide> -->
                  <swiper-slide v-for="(product, index) in productVariants" :key="index">
                    <div v-if="!product.imageUrl" class="productbox-no-img">
                      <p>Pas d'image disponible</p>
                    </div>
                    <img v-else :src="product.imageUrl" alt="img" />
                  </swiper-slide>

                  <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                  <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                </swiper>

                <swiper v-else class="swiper product-single-2-slider" :options="swiperOption" ref="swiperImage">
                  <swiper-slide>
                    <img v-if="product.imageUrl" :src="product.imageUrl" alt="img" />
                  </swiper-slide>

                  <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                  <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                </swiper>

              </div>
              <ImageSwiper :productVariants="productVariants" :product="product" />

              <!-- <Comp>
                <template v-if="productVariants.length > 0">
                  <ImageSwiper :productVariants="productVariants" />

                </template>
                <template v-else>
                  <ImageSwiper :product="product" />

                </template>

              </Comp> -->


            </div>

            <div class="col-lg-8">
              <div class="product_details_right_one">
                <div class="modal_product_content_one">
                  <h3>{{ product.libelle }}</h3>

                  <span v-if="product.brand" class="product-brand">Marque: {{ product.brand }}</span>

                  <div v-if="!enabled" class="reviews_rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span>(2 avis clients)</span>
                  </div>

                  <div class="d-flex flex-column">
                    <PriceRange v-if="product.isAProductGamme" :productGamme="product"
                      :productsVariants="productVariants" />
                    <h4 v-else>

                      {{ parseFloat(product.pvTtc).toFixed(2) }} €
                      <!-- <del>100.00€</del> -->
                    </h4><span id="tax">T.T.C</span>
                    <SizeChart
                      v-if="product.codeSousFamille === 'SFAR00017' || product.codeSousFamille === 'SFAR00003' || product.codeSousFamille === 'SFAR00001' || product.codeSousFamille === 'SFAR00008' || product.codeSousFamille === 'SFAR00011' || product.codeSousFamille === 'SFAR00002'"
                      :productName="product.libelle">
                    </SizeChart>

                    <AfterPayMessage :amount="product.pvTtc" />
                    <ClickCollect />

                    <p class="pt-15">
                      {{ product.description }}
                    </p>
                    <div id="card-element"></div>
                  </div>
                  {{ product.codeSousFamille }}
                  <form id="gammeSelectForm" method="post" ref="gammeSelectForm" v-on:submit.prevent="
                    addToCart(productSelected, quantitySelected.orderQuantity)
                  ">
                    <div class="pt-15">
                      <!-- <span>Tailles</span> -->
                      <!-- {{ size }} -->
                      <!-- nombre de gammes :{{ gammeQuantity }} -->
                      <!-- is a product gamme :
                    {{ isAProductGamme }} -->
                      <!-- {{ product }} -->
                      <!-- {{ purchaseProductDetails }} -->
                      <SelectGenre v-if="gammesOptions.genre === true" :genre="genre" />
                      <SelectSize2 v-if="gammesOptions.size === true" :size="uniqueSize"
                        @size-click-event="sizeClickEventV2" />
                    </div>

                    <div class="color-select" :class="showColorOptions">
                      <SelectColor v-if="gammesOptions.color === true" :colors="color" :colorLibelle="colorLibelle"
                        @color-click-event="colorClickEventV2" />
                      <Spinner v-else></Spinner>
                    </div>
                    <SelectType v-if="gammesOptions.type === true" :type="type" @type-click-event=typeClickEvent />
                    <SelectType v-if="gammesOptions.inscription === true" :inscription="inscription"
                      @inscription-click-event=inscriptionClickEvent />

                    <div v-if="gammesOptions.laterality">
                      <!-- {{ productVariantsSelected }} -->
                      <SelectLaterality :laterality="laterality" @laterality-click-event="lateralityClickEvent" />
                    </div>
                    <!-- <p class="error-required-message" v-if="errorInputMessage">
                      {{ errorInputMessage }}
                    </p> -->
                    <!-- {{ productSelected.stock }}
                    {{ productFilter }} -->
                    <div v-if="stockNotificationOptions.isActive">
                      <button v-if="productSelected.stock > 0" class="btn__stock--green">
                        Stock disponible
                      </button>
                      <button v-if="productSelected.stock < 1" class="btn__stock--red">
                        Stock indisponible
                      </button>
                    </div>

                    <!-- productSelected.stock:{{ productSelected }} -->
                    <!-- quantitySelected.orderQuantity:
                    {{ quantitySelected.orderQuantity }} -->
                    <!-- state cart: {{ this.$store.state.cart.items[0] }} -->
                    <div class="product_count_one pt-15" @click="clickQuantitySelect">
                      <b-form-spinbutton required id="sb-inline" v-model="quantitySelected.orderQuantity" inline
                        class="border-0" min="1" :max="productSelected.stock"></b-form-spinbutton>
                    </div>
                  </form>

                  <!-- One product quantity select -->
                  <!-- <form id="product_count_form_two">
                    <div
                      class="product_count_one pt-15"
                      @click="clickQuantitySelect"
                    >
                      <b-form-spinbutton
                        id="sb-inline"
                        v-model="quantitySelected.orderQuantity"
                        inline
                        class="border-0"
                        min="1"
                        :max="quantitySelected.max"
                      ></b-form-spinbutton>
                    </div>
                  </form> -->
                  <!-- <StockAlert
                  v-if="product.quantity === 0"
                  :productQuantity="product.quantity"
                ></StockAlert> -->

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

                  <!-- <b-alert
                  class="stock-alert"
                  :show="dismissCountDown"
                  dismissible
                  variant="warning"
                  @dismissed="dismissCountDown = 0"
                  @dismiss-count-down="countDownChanged"
                >
                  <p>
                    Dernière article en cours de commande: stock insufisant.
                    {{ dismissCountDown }} seconds...
                  </p>
                  <b-progress
                    variant="warning"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
                  ></b-progress>
                </b-alert> -->

                  <!--Counter quantity-->

                  <ul v-if="!enabled" class="assurances-product">
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
                        <a href="./legal"><span>Après réception (2 jours)</span></a>
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
                      <b-icon class="signup-mention-icon" icon="exclamation-circle-fill"></b-icon>
                      <p>Toute commande nécessite la création d'un compte</p>
                    </div>
                    <!-- <input
                      id="tooltip-purchase-button"
                      form="gammeSelectForm"
                      type="submit"
                      value="Ajouter au panier"
                      @click="
                        addToCart(
                          productSelected,
                          quantitySelected.orderQuantity
                        )
                      "
                    /> -->
                    <button type="submit" form="gammeSelectForm" id="purchase-button"
                      class="theme-btn-one btn-black-overlay btn_sm">
                      Ajouter au panier
                    </button>
                    <!-- <b-tooltip target="tooltip-purchase-button" variant="danger"
                      >Danger variant tooltip</b-tooltip
                    > -->
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
          <div v-if="!enabled" class="row">
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

                  <!-- <b-tab title="Informations additionnels" id="additional">
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
                </b-tab> -->

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
      <!-- Start product variants list -->
      <section v-if="productVariants.length > 0" class="product-variants">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3>ETAT DU STOCK</h3>
              <ListVariants :productVariants="productVariants" @handleAddToCart="addToCartByListVariants" />
            </div>
          </div>
        </div>
      </section>
      <!-- End product variants list -->
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
            <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="item in relatedProducts.slice(
              relatedProductRangesOptions.min,
              relatedProductRangesOptions.max
            )" :key="item._id">
              <!-- <p v-if="$fetchState.pending">
                <span class="loading"></span>
                <Spinner></Spinner>
              </p> -->
              <!-- <p v-else-if="$fetchState.error">Une erreur est survenue! 🤬</p> -->
              <ProductBox1 class="mt-3" :productImg1="item.imageUrl" :productImg2="item.imageUrl"
                :productTagClass="item.productTagClass" :productTag="item.productTag" :productTitle="item.libelle"
                :productPrice="item.pvTtc" :productQuantity="item.stock" :productId="item._id" :productObject="item" />
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Instagram Arae -->
    <!-- <InstagramArea /> -->
    <b-modal id="parent-modal" ref="my-modal-purchase" hide-footer title="Information" modal-class="modal-connect"
      dialog-class="dialog__class--cart" content-class="content__class--cart">
      <div id="login-modal">
        <div class="
            d-flex
            justify-content-center
            align-items-center
            d-block
            text-center
          ">
          <b-icon id="icon-check-purchase" icon="check" variant="success"></b-icon>
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

          <button class="theme-btn-one btn-black-overlay btn_sm" @click="closeModal">
            Continuer mes achats
          </button>
          <nuxt-link to="/my-account/checkout-1" class="theme-btn-one btn-green-overlay btn_sm">Commander</nuxt-link>
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
// const apiURL = "https://trap-one-api.herokuapp.com/api";
import ProductBox1 from "../../components/product-box/ProductBox1";
import InstagramArea from "../../components/instagram/InstagramArea";
import AddToCart from "../../components/AddToCart";
import { mapState, mapActions, mapMutations } from "vuex";
import SelectSize2 from "@/components/product/SelectSize-2";
import SizeChart from "@/components/product/SizeChart";
import SelectGenre from "@/components/product/SelectGenre";
import StockAlert from "@/components/product/StockAlert";
import SelectColor from "@/components/product/SelectColor";
import SelectLaterality from "@/components/product/SelectLaterality";
import SelectType from "@/components/product/SelectType";
import SelectInscription from "@/components/product/SelectInscription";
import AfterPayMessage from "@/components/product/AfterPayMessage";
import { ProductFactory } from "@/utils/product/productClasse";
import ClickCollect from "@/components/product/ClickCollect";
import ImageSwiper from "../../components/product/ImageSwiper.vue";
import ListVariants from "@/components/product/ListVariants";
import PriceRange from "@/components/product/PriceRange"


export default {
  middleware: "auth",
  scrollToTop: true,
  name: "product-single-2",
  components: {
    ProductBox1,
    InstagramArea,
    AddToCart,
    SelectSize2,
    SizeChart,
    StockAlert,
    SelectColor,
    SelectLaterality,
    AfterPayMessage,
    SelectGenre,
    SelectType,
    SelectInscription,
    ClickCollect,
    ImageSwiper,
    ListVariants,
    PriceRange
  },

  data() {
    return {
      //Product data
      product: [],
      productGamme: null,
      codeGamme: null,
      gammes: null,
      gammesLibelle: null,
      isAProductGamme: null,
      productVariants: [],
      productVariantsSelected: [],
      size: [],
      color: [],
      colorLibelle: [],
      colorUniqueArray: [],
      laterality: [],
      genre: [],
      type: [],
      SelectInscription: [],
      mainImage: null,
      isStripeLoaded: false,
      gammeQuantity: "",

      //Alter data
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,

      enabled: true,
      title: this.$route.params.slug,
      productFilter: {
        size: "",
        color: "",
        laterality: "",
        genre: "",
        type: "",
        inscription: "",
      },
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
        autoplay: false,
      },

      showColorOptions: {
        isActive: false,
        isInactive: true,
        colorSelectHide: true,
        colorSelectShow: false,
        componentKey: 0,
        isLoading: false,
        isFocused: false,
      },
      showLateralityOptions: {
        isActive: false,
        isInactive: true,
        colorSelectHide: true,
        colorSelectShow: false,
        componentKey: 0,
        isLoading: false,
        isFocused: false,
      },
      showQuantityOptions: {
        isActive: false,
        isInactive: true,
      },
      quantitySelected: {
        orderQuantity: 1,
        max: 2,
      },
      purchaseProductDetails: {
        size: "",
        color: "",
        laterality: "",
        stock: "",
      },
      purchaseButtonOptions: {
        disabled: true,
      },
      gammesOptions: {
        size: false,
        color: false,
        laterality: false,
        genre: false,
        type: false,
        inscription: false,
      },
      stockNotificationOptions: {
        isActive: false,
      },
      productPayloadToAddToCartCommit: {
        product: "product",
        orderQuantity: "",
      },
      gammeObject: [],
      productSelected: "",
      afterpayClearpayMessageElement: "",
      afterPayKey: 0,

      relatedProductRangesOptions: {
        max: "",
        min: "",
      },

      errorInputMessage: null,

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Accueil",
          to: "/",
        },
        // {
        //   text: "Vêtements",
        //   to: "/shop/shop-2",
        // },
        {
          text: this.$route.query.libelleFamille
            ? this.$route.query.libelleFamille
              .toLowerCase()
              .charAt(0)
              .toUpperCase() +
            this.$route.query.libelleFamille.toLowerCase().slice(1)
            : null,
          to: this.$route.query.codeFamille
            ? "/shop/category/" +
            this.$route.query.libelleFamille
              .toLowerCase()
              .replaceAll(" ", "-") +
            "?" +
            "codefamille=" +
            this.$route.query.codeFamille
            : null,
        },
        {
          text:
            this.$route.query.libelle.toLowerCase().charAt(0).toUpperCase() +
            this.$route.query.libelle.toLowerCase().slice(1),
          to: "/product",
        },
      ],

      // Product Quanity Increment/ Decrement Data

      //error message
      message: "",
      //related Product
      relatedProducts: "",
    };
  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.product.libelle,
      meta: [
        {
          hid: this.product.libelle,
          name: this.product.libelle,
          content: this.product.description,
        },
      ],
    };
  },

  computed: {
    rtfToHtmlDescription() {
      const rtfString = this.product.description
      const RegRtf = /\\\w+|\{.*?\}|}/g

      return rtfString.replace(RegRtf, " ")


    },
    uniqueSize() {
      return [...new Set(this.size)];
    },
    uniqueColor() {
      return [...new Set(this.color)];
    },
    uniqueColorLibelle() {
      return [...new Set(this.colorLibelle)];
    },
    uniqueLaterality() {
      return [...new Set(this.laterality)];
    },
    productByGamme() {
      return this.$store.state.products.productSearchByGammes;
    },
    gammeObjectComputed() {
      return [...new Set(this.gammeObject)];
    },
  },
  methods: {



    clickQuantitySelect() {
      this.orderQuantity;
    },

    //Alert
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    makeToast(variant = null, message = null) {
      this.$bvToast.toast(message, {
        title: "Alerte",
        variant: variant,
        solid: true,
        // toaster: "b-toaster-bottom-center",
      });
    },
    async addToCart(product, orderQuantity) {
      if (this.gammesOptions.size == true && !this.productFilter.size) {
        this.errorInputMessage = "Champ requis";
        this.makeToast("warning", "Selectionnez une taille");
      } else if (
        this.gammesOptions.color == true &&
        !this.productFilter.color
      ) {
        this.errorInputMessage = "Champ requis";
        this.makeToast("warning", "Selectionnez une couleur");
      } else if (
        this.gammesOptions.laterality == true &&
        !this.productFilter.laterality
      ) {
        this.errorInputMessage = "Champ requis";
        this.makeToast("warning", "Selectionnez une latéralité");
      } else if (
        this.gammesOptions.type == true &&
        !this.productFilter.type
      ) {
        this.errorInputMessage = "Champ requis";
        this.makeToast("warning", "Selectionnez le type");
      } else if (
        this.gammesOptions.inscription == true &&
        !this.productFilter.inscription
      ) {
        this.errorInputMessage = "Champ requis";
        this.makeToast("warning", "Selectionnez le type");
      }
      else {
        this.stockNotificationOptions.isActive = true;

        if (this.productSelected.stock < 1) {
          this.makeToast("warning", "Stock épuisée");
        } else {
          if (this.productSelected.stock > 0) {
            this.productPayloadToAddToCartCommit.product = product;
            this.productPayloadToAddToCartCommit.orderQuantity = orderQuantity;
            this.$store.commit(
              "cart/add",
              this.productPayloadToAddToCartCommit
            );
            if (this.$store.state.cart.response) {
              this.makeToast("warning", this.$store.state.cart.response);
            } else {
              this.toggleModal();
            }
          }
        }
      }
    },
    async addToCartByListVariants(payload) {

      this.$store.commit(
        "cart/add",
        payload
      );
      this.toggleModal();
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
    typeClickEvent(payload) {
      this.productFilter.type = payload.type;

      this.productVariantsSelected.map((product) => {
        this.gammeMethod(product.gamme, product.gammesValue);
      });
      this.productVariantFilterV3();
    },
    inscriptionClickEvent(payload) {
      this.productFilter.inscription = payload.inscription;

      this.productVariantsSelected.map((product) => {
        this.gammeMethod(product.gamme, product.gammesValue);
      });
      this.productVariantFilterV3();
    },

    sizeClickEventV2(payload) {
      this.productFilter.size = payload.size;

      this.productVariantsSelected.map((product) => {
        this.gammeMethod(product.gamme, product.gammesValue);
      });
      // this.productsVariantsFilterV2();
      this.productVariantFilterV3();
    },

    colorClickEventV2(payload) {
      this.productFilter.color = payload.color;

      this.productVariantsSelected.map((product) => {
        this.gammeMethod(product.gamme, product.gammesValue);
      });
      this.productVariantFilterV3();
    },
    lateralityClickEvent(payload) {
      this.productFilter.laterality = payload.laterality;
      this.productVariantFilterV3();
    },
    genreClickEvent(payload) {
      this.productVariantFilterV3();
      this.productFilter.genre = payload.genre.gammeCode;
    },

    productVariantFilterV3() {
      let gammeQuery =
        this.productFilter.genre +
        this.productFilter.color +
        this.productFilter.size +
        this.productFilter.type +
        this.productFilter.inscription +
        this.productFilter.laterality;

      this.productVariants.filter((product) => {
        product.gammesValue.split("¤").filter((item) => {
          if (item == gammeQuery) {
            this.productSelected = product;
          }
        });
      });
    },
    async gammeMethod(gammeArray, gammesValueArray) {

      try {
        gammesValueArray.split("¤").filter((gammeValue, indexGammeValue) => {

          gammeArray.split("¤").filter(async (gamme, indexGamme) => {

            const fetchGamme = await this.$axios.get("/gammes/gamme/" + gamme);
            fetchGamme.data.filter(async (itemGamme) => {

              if (gammeValue === itemGamme.elementsGammeLibelle) {
                const libelleGamme = itemGamme.libelle;
                const gammeValue = itemGamme.gammeValue;
                const elementsGammeLibelle = itemGamme.elementsGammeLibelle;
                const obj = {
                  libelleGamme: libelleGamme,
                  gammeValue: gammeValue,
                  gammeCode: elementsGammeLibelle,
                };

                if (obj.libelleGamme === "TAILLE") {
                  this.size.push(obj.gammeValue);
                  this.gammesOptions.size = true;
                } else if (obj.libelleGamme === "COULEUR") {
                  this.colorLibelle.push(obj);
                  this.showColorOptions.isLoading = true;
                  this.showColorOptions.isFocused = false;
                  setTimeout(() => {
                    this.showColorOptions.isLoading = false;
                  }, 1000);
                  this.showColorOptions.isInactive = false;
                  this.showColorOptions.isActive = true;
                  this.gammesOptions.color = true;
                } else if (obj.libelleGamme === "LATERALITE") {
                  this.laterality.push(obj);
                  this.gammesOptions.laterality = true;
                } else if (obj.libelleGamme === "GENRE") {
                  this.genre.push(obj);
                  this.gammesOptions.genre = true;
                } else if (obj.libelleGamme === "TYPE") {
                  this.type.push(obj);
                  this.gammesOptions.type = true;
                } else if (obj.libelleGamme === "INSCRIPTION") {
                  this.inscription.push(obj);
                  this.gammesOptions.inscription = true;
                }
              }
            });
          });
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: productClasse.js ~ line 18 ~ ProductFactory ~ checkGammes ~ error",
          error
        );
      }
    },
    relatedProductRanges() {
      const maxRange = this.relatedProducts.length;
      this.relatedProductRangesOptions.max = Math.floor(
        Math.random() * maxRange
      );

      if (this.relatedProductRangesOptions.max < 4) {
        this.relatedProductRangesOptions.max = 4;
      }
      this.relatedProductRangesOptions.min =
        this.relatedProductRangesOptions.max - 4;
    },
  },
  async fetch() {
    //2nd iteration
    const id = this.$route.query.id;

    try {
      const singleProduct = await this.$axios.post("/product/" + id, {
        id: id,
        isAProductGamme: this.$route.query.isAProductGamme,
        codeArticle: this.$route.query.codeArticle,
        codeArticleGamme: this.$route.query.codeArticleGamme,
      });

      this.product = singleProduct.data;

      if (this.$route.query.isAProductGamme === "true") {
        try {
          this.product.variantId.map(async (codeArticle) => {
            const productVariant = await this.$axios.post("/product/" + id, {
              id: id,
              isAProductGamme: "false",
              codeArticle: codeArticle,
            });
            if (!productVariant.data) {
              return;
            } else {
              this.productVariants.push(productVariant.data);

              this.gammeQuantity = productVariant.data.gamme.split("¤").length;

              this.gammeMethod(
                productVariant.data.gamme,
                productVariant.data.gammesValue
              );
            }
          });
        } catch (error) {
          console.log("🚀 ~ file: _id.vue ~ line 1156 ~ fetch ~ error", error);
        }
      } else {
        this.productSelected = this.product;
      }
    } catch (error) {
      console.log("🚀 ~ file: _id.vue ~ line 1128 ~ fetch ~ error", error);
    }
    try {
      const relatedProducts = await this.$axios.get("/search/filter", {
        params: {
          search: this.$route.query.codeFamille,
        },
      });
      this.relatedProducts = relatedProducts.data.productsArray;
    } catch (error) {
      console.log("🚀 ~ file: _id.vue ~ line 1177 ~ fetch ~ error", error);
    }
    this.relatedProductRanges();
  },
  mounted() {
    // relatedProductRanges();
  },
  fetchOnServer: false,
};
</script>

<style scoped>
h4 {
  font-size: 16px;
}

/* Style for brand */
.product-brand {
  color: grey;
  font-size: 12px;
}

.product-thumbail-image {
  padding: 10px 0 0 0;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

.product-thumbail-image img {
  width: 75px;
  height: 75px;
  cursor: pointer;
}

.product-thumbail-image img:nth-child(n) {
  margin: 0 0 0 10px;
}

.btn-green-overlay {
  background-color: green;
  color: #fff;
}

#tax {
  font-size: 12px;
}

.productbox-no-img {
  width: 100%;
  height: 518px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(219, 219, 219);
  font-size: 12px;
}

/* .back-link {
  width: 26%;
  display: flex;
  justify-content: flex-start;
} */
.back-link:first-child {
  /* flex: 10%; */
  /* margin: 0 0 40px 0; */
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
}

.product-list-breadcrumb-section {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 25px 0;
  font-size: 12px;
}

.product-list-breadcrumb-section ol,
ul,
dl {
  margin: 0;
}

.product-list-breadcrumb {
  background-color: transparent;
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

/* Start stock variants section */
.product-variants {
  padding: 50px 0 0 0;
}

#related_product {
  padding: 25px 0 25px 0;
}

/* End stock variants section */

/* Select color */
/* .colorSelectHide {
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;
}
.colorSelectShow {
  max-height: 500px;
  transition: max-height 0.25s ease-in;
} */
.active {
  /* display: flex; */
  max-height: 100px;
  transition: max-height 3s ease-in;
}

.isInactive {
  /* display: none; */
  max-height: 0;
  /* transition: max-height 3s ease-out; */
  overflow: hidden;
}

@media (max-width: 425px) {
  #purchase-button {
    width: 100%;
  }
}

/*Responsive*/
@media only screen and (max-width: 768px) {
  .assurances-product {
    flex-direction: column;
  }

  #middle-assurances {
    border-left: none;
    border-right: none;
    padding: 0;
  }

  .product-variants h3 {
    text-align: center;
  }
}

@media only screen and (min-width: 768px) {

  /* tablettes et ordinateurs */


  .col-img {
    max-width: 26%;
  }
}
</style>
