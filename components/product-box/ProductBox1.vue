<template>
  <div>
    <div class="product_wrappers_one">
      <div class="thumb">
        <nuxt-link :to="`/product/${productId}`">
          <img
            class="hover-image"
            :src="productImg2"
            alt="Product"
            loading="lazy"
          />
        </nuxt-link>
        <span class="badges">
          <!-- {{ productQuantity }} -->
          <span class="badges__stock" v-if="productQuantity > 0" id="stock"
            >En stock</span
          >
          <span class="badges__stock" v-if="productQuantity < 1" id="no-stock"
            >Rupture</span
          >
          <span :class="productTagClass">{{ productTag }}</span>
        </span>
        <div v-if="!enabled" class="actions">
          <nuxt-link to="#" class="action wishlist" title="Wishlist"
            ><i class="far fa-heart"></i
          ></nuxt-link>
          <a
            href="#!"
            id="toggle-btn"
            @click="toggleModal"
            class="action quickview"
            title="Quick view"
            ><i class="fas fa-expand"></i
          ></a>
          <nuxt-link to="#" class="action compare" title="Compare"
            ><i class="fas fa-exchange-alt"></i
          ></nuxt-link>
        </div>
        <!-- start toggle -->
        <!-- v-b-toggle.offcanvas-add-cart -->
        <!-- <button
          v-if="productQuantity > 0"
          class="add-to-cart offcanvas-toggle"
          title="Ajouter au panier"
          @click="
            addToCartByComponent(productObject, productId, productQuantity)
          "
        >
          Poule!
        </button> -->
      </div>
      <div class="content">
        <h5 class="title">
          <nuxt-link :to="`/product/${productId}`" v-on:click="loading()">{{
            productTitle
          }}</nuxt-link>
        </h5>
        <span class="price">
          <span class="new"
            >{{ parseFloat(productPrice).toFixed(2) }} €
            <span id="tax">T.T.C</span></span
          >
        </span>
      </div>

      <!-- Modal Area Start-->
      <div>
        <b-modal
          ref="product-details-popup"
          centered
          hide-footer
          title="Using Component Methods"
          class="product_one_modal_top"
          id="product_slider_one"
        >
          <template #modal-header="{ close }">
            <button
              type="button"
              class="close close_modal_icon"
              @click="close()"
            >
              <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
          </template>

          <div>
            <div class="row">
              <div class="col-lg-5 col-md-6 col-sm-12 col-12">
                <div class="products_modal_sliders">
                  <swiper class="swiper" :options="swiperOption">
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product1.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product2.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product3.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product4.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product5.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product6.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>
                    <swiper-slide>
                      <img
                        :src="
                          require('@/assets/img/product-image/product7.png')
                        "
                        alt="img"
                      />
                    </swiper-slide>

                    <div class="swiper-pagination" slot="pagination"></div>
                  </swiper>
                </div>
              </div>
              <div class="col-lg-7 col-md-6 col-sm-12 col-12">
                <div class="modal_product_content_one">
                  <h3>{{ productTitle }}</h3>
                  <div class="reviews_rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span>(2 Avis)</span>
                  </div>
                  <h4>{{ productPrice }}€ T.T.C</h4>
                  <p>{{ productDescription }}</p>
                  <div class="variable-single-item">
                    <span>Couleur</span>
                    <div class="product-variable-color">
                      <label for="modal-product-color-red">
                        <input
                          name="modal-product-color"
                          id="modal-product-color-red"
                          class="color-select"
                          type="radio"
                          checked=""
                        />
                        <span class="product-color-red"></span>
                      </label>
                      <label for="modal-product-color-tomato">
                        <input
                          name="modal-product-color"
                          id="modal-product-color-tomato"
                          class="color-select"
                          type="radio"
                        />
                        <span class="product-color-tomato"></span>
                      </label>
                      <label for="modal-product-color-green">
                        <input
                          name="modal-product-color"
                          id="modal-product-color-green"
                          class="color-select"
                          type="radio"
                        />
                        <span class="product-color-green"></span>
                      </label>
                      <label for="modal-product-color-light-green">
                        <input
                          name="modal-product-color"
                          id="modal-product-color-light-green"
                          class="color-select"
                          type="radio"
                        />
                        <span class="product-color-light-green"></span>
                      </label>
                      <label for="modal-product-color-blue">
                        <input
                          name="modal-product-color"
                          id="modal-product-color-blue"
                          class="color-select"
                          type="radio"
                        />
                        <span class="product-color-blue"></span>
                      </label>
                      <label for="modal-product-color-light-blue">
                        <input
                          name="modal-product-color"
                          id="modal-product-color-light-blue"
                          class="color-select"
                          type="radio"
                        />
                        <span class="product-color-light-blue"></span>
                      </label>
                    </div>
                  </div>
                  <form id="product_count_form_one">
                    <div class="product_count_one">
                      <b-form-spinbutton
                        id="sb-inline"
                        v-model="value"
                        inline
                        class="border-0"
                      ></b-form-spinbutton>
                      <nuxt-link
                        to="#"
                        class="theme-btn-one btn-black-overlay btn_sm"
                        >Ajouter au panier</nuxt-link
                      >
                    </div>
                  </form>
                  <div class="modal_share_icons_one">
                    <h4>PARTAGER CET ARTICLE</h4>
                    <div class="posted_icons_one">
                      <a href="#!"><i class="fab fa-facebook-f"></i></a>
                      <a href="#!"><i class="fab fa-instagram"></i></a>
                      <a href="#!"><i class="fab fa-twitter"></i></a>
                      <a href="#!"><i class="fab fa-linkedin-in"></i></a>
                      <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                      <a href="#!"><i class="fab fa-pinterest-p"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
      </div>
      <!-- Modal Area End-->
    </div>
  </div>
</template>

<script>
const spinner = document.getElementById("spinner__app");

export default {
  name: "ProductBox1",
  props: {
    productImg1: String,
    productImg2: String,
    productTagClass: String,
    productTag: String,
    productTitle: String,
    productDescription: String,
    productPrice: Number,
    totalPrice: Number,
    productId: String,
    productQuantity: Number,
    productObject: Object,
  },

  data() {
    return {
      enabled: true, // Product details Popup slider
      swiperOption: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: true,
        mousewheel: true,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: true,
      },

      // Product Quanity Increment/ Decrement Data
      value: 1,
    };
  },

  methods: {
    addToCartByComponent(productObject, productId, productQuantity) {
      console.log("productQuantity:", this.productQuantity);
      console.log("productId:", productId);
      console.log("productObject:", productObject);
      const stock = this.$store.state.products.productItems;

      // if (productObject.quantity) console.log("productObject:", productObject);

      this.$store.commit("cart/addToCartByComponent", productObject);
    },
    // Product details Popup id Methods
    toggleModal() {
      this.$refs["product-details-popup"].toggle("#toggle-btn");
    },
    loading() {
      console.log("loading:");
      spinner.style.display = "block";
    },
  },
};
</script>

<style scoped>
.badges__stock {
  color: white;
  display: flex;
}
#stock {
  background-color: green;
}
#no-stock {
  background-color: red;
}
.add-to-cart {
  background-color: black;
}
#tax {
  font-size: 12px;
}
</style>
