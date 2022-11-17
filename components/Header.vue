<template>
  <div>
    <!-- Start Header Area -->
    <header class="header-section d-none d-xl-block">
      <div class="header-wrapper">
        <div id="header" class="
            header-bottom
            header-bottom-color--golden
            section-fluid
            sticky-header
            sticky-color--golden
          ">
          <div class="container">
            <div class="header-content">
              <!-- Start Header Logo -->
              <!-- <div class="header-logo"> -->
              <div class="logo">
                <nuxt-link to="/"><img :src="require('@/assets/img/logo-exo-trap.png')" alt="logo" /></nuxt-link>
              </div>
              <!-- </div> -->
              <!-- End Header Logo -->

              <!-- Start search bar -->

              <!-- <SearchBar /> -->


              <!-- End search bar -->

              <!-- Start Header Main Menu -->
              <div class="main-menu menu-color--black menu-hover-color--golden">
                <nav>
                  <ul>
                    <li>
                      <div class="nav-top-bar-home">
                        <!-- <nuxt-link class="active main-menu-link" to="/"
                            >Parcourir</nuxt-link
                          > -->
                        <!-- <nuxt-link class="active main-menu-link" to="/">à propos</nuxt-link> -->
                        <!-- <nuxt-link class="active main-menu-link" to="/faq">Aide</nuxt-link> -->
                        <nuxt-link v-if="!this.$auth.user" class="active main-menu-link" to="/login">Connexion
                        </nuxt-link>
                        <a v-if="this.$auth.user" class="active main-menu-link btn-logout" @click="logout">
                          Déconnexion
                        </a>

                      </div>
                    </li>


                  </ul>
                </nav>
              </div>
              <!-- End Header Main Menu Start -->

              <!-- Start Header Action Link -->
              <ul v-if="this.$auth.loggedIn" class="
                    header-action-link
                    action-color--black
                    action-hover-color--golden
                  ">
                <li v-if="!enabled">
                  <a v-b-toggle.offcanvas-wishlish class="offcanvas-toggle">
                    <i class="far fa-heart"></i>
                    <span class="item-count">{{ productItems.length }}</span>
                  </a>
                </li>
                <!-- Account icon -->
                <li v-if="enabled">
                  <nuxt-link to="/my-account" class="offcanvas-toggle">
                    <i class="fas fa-user"></i>
                    <!-- <span class="item-count">{{ productItems.length }}</span> -->
                  </nuxt-link>
                </li>
                <li>
                  <a v-b-toggle.offcanvas-add-cart class="offcanvas-toggle">
                    <i class="fas fa-shopping-bag"></i>
                    <span class="item-count">{{
                        selectedProducts.length
                    }}</span>
                  </a>
                </li>
                <li v-if="enabled">
                  <a v-b-toggle.search_sidebar class="search_width offcanvas-toggle">
                    <img src="~/assets/img/svg/search.svg" alt="img" />
                  </a>
                </li>
                <li v-if="!enabled">
                  <a v-b-toggle.offcanvas-about class="offacnvas offside-about offcanvas-toggle"><i
                      class="fas fa-bars"></i></a>
                </li>
              </ul>
              <!-- End Header Action Link -->
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- <div>
      <NavCategories />
    </div> -->
    <!--Categories nav-->

    <!-- Start Header Area -->

    <!-- Start Mobile Header -->
    <div id="mobile_header" class="
        mobile-header
        sticky-header
        sticky-color--golden
        mobile-header-bg-color--golden
        section-fluid
        d-lg-block d-xl-none
      ">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex align-items-center justify-content-between">
            <!-- Start Mobile Left Side -->
            <div class="mobile-header-left">
              <ul class="mobile-menu-logo">
                <li>
                  <nuxt-link to="/">
                    <div class="logo">
                      <img :src="require('@/assets/img/logo-exo-trap.png')" alt="logo-exo-trap" />
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <!-- End Mobile Left Side -->

            <!-- Start Mobile Right Side -->
            <div class="mobile-right-side">
              <ul v-if="enabled" class="
                  header-action-link
                  action-color--black
                  action-hover-color--golden
                ">
                <li v-if="enabled">
                  <a v-b-toggle.search_sidebar class="search_width offcanvas-toggle">
                    <img src="~/assets/img/svg/search.svg" alt="img" />
                  </a>
                </li>
                <li v-if="!enabled">
                  <a v-b-toggle.offcanvas-wishlish class="offcanvas-toggle">
                    <i class="far fa-heart"></i>
                    <span class="item-count">{{ productItems.length }}</span>
                  </a>
                </li>
                <!-- Account icon -->
                <li v-if="enabled">
                  <nuxt-link to="/my-account" class="offcanvas-toggle">
                    <i class="fas fa-user"></i>
                    <!-- <span class="item-count">{{ productItems.length }}</span> -->
                  </nuxt-link>
                </li>
                <li>
                  <a v-b-toggle.offcanvas-add-cart class="offcanvas-toggle">
                    <i class="fas fa-shopping-bag"></i>
                    <span class="item-count">{{
                        selectedProducts.length
                    }}</span>
                  </a>
                </li>
                <li v-if="!enabled">
                  <a v-b-toggle.offcanvas-about class="offacnvas offside-about offcanvas-toggle"><i
                      class="fas fa-bars"></i></a>
                </li>
              </ul>
            </div>
            <!-- End Mobile Right Side -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Mobile Header -->

    <!-- ...:::: Start Offcanvas Mobile Menu Section:::... -->
    <!-- {{ menu2 }} -->
    <b-sidebar id="offcanvas-about" class="offcanvas-mobile-about-section" backdrop right>
      <!-- Start Mobile Menu Navbar Wrap -->
      <div class="mobile-menu-navbar-wrap">
        <!-- Start Mobile Menu Nav -->
        <div class="offcanvas-menu">
          <sidebar-menu :menu="menu2" />
          <div v-if="!enabled" class="login-mobile-container">
            <nuxt-link v-if="!this.$auth.user" class="
                active
                main-menu-link
                bg-white
                justify-center
                subscribe-btn
              " to="/login">Connexion</nuxt-link>
            <a v-if="this.$auth.user" class="
                active
                main-menu-link
                bg-black
                justify-center
                subscribe-btn
              " @click="logout">
              Déconnexion
            </a>
            <nuxt-link v-if="!this.$auth.user" class="bg-black justify-center subscribe-btn" to="/register">S'inscrire
            </nuxt-link>
          </div>
        </div>
        <!-- End Mobile Menu Nav -->
      </div>
      <!-- End Mobile Menu Navbar Wrap -->

      <!-- Start Mobile contact Info -->
      <div v-if="!enabled" class="mobile-contact-info">
        <address class="address">
          <img :src="require('@/assets/img/logo-white.png')" alt="logo" />
          <span>Address: Your address goes here.</span>
          <span>Call Us: 0123456789, 0123456789</span>
          <span>Email: demo@example.com</span>
        </address>

        <ul class="social-link">
          <li>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </li>
        </ul>

        <ul class="user-link">
          <li>
            <nuxt-link to="/my-account/wishlist">Wishlist</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/cart/">Cart</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/my-account/checkout-1">Checkout</nuxt-link>
          </li>
        </ul>
      </div>
      <!-- End Mobile contact Info -->
    </b-sidebar>
    <!-- ...:::: End Offcanvas Mobile Menu Section:::... -->

    <!-- Start Offcanvas Addcart Section -->
    <b-sidebar id="offcanvas-add-cart" class="offcanvas-add-cart-section" backdrop right>
      <div class="offcanvas-add-cart-wrapper">
        <h4 class="offcanvas-title">Panier</h4>
        <div v-if="selectedProducts.length > 0">
          <ul class="offcanvas-cart">
            <li class="offcanvas-cart-item-single" v-for="productItem in selectedProducts.slice(0, 4)"
              :key="productItem.id">
              <div class="offcanvas-cart-item-block">
                <!-- <nuxt-link to="#" class="offcanvas-cart-item-image-link">
                  <img
                    :src="productItem.imageUrl"
                    alt="img"
                    class="offcanvas-cart-image"
                  />
                </nuxt-link> -->
                <div class="offcanvas-cart-item-image-link">
                  <img :src="productItem.imageUrl" alt="img" class="offcanvas-cart-image" />
                </div>
                <div class="offcanvas-cart-item-content">
                  <!-- <nuxt-link
                    :to="{ path: '/product/' + productItem._id }"
                    class="offcanvas-cart-item-link"
                    >{{ productItem.libelle }}</nuxt-link
                  > -->
                  <p class="font-weight-bold">{{ productItem.libelle }}</p>
                  <div class="offcanvas-cart-item-details">
                    <span class="offcanvas-cart-item-details-quantity">{{ productItem.orderQuantity }} x
                    </span>
                    <span class="offcanvas-cart-item-details-price">{{ productItem.pvTtc.toFixed(2) }}€</span>
                  </div>
                </div>
              </div>
              <div class="offcanvas-cart-item-delete text-right">
                <button @click="removeProductItem(productItem)"
                  class="offcanvas-cart-item-delete bg-transparent remove-btn">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </li>
          </ul>

          <div class="offcanvas-cart-total-price">
            <span class="offcanvas-cart-total-price-text">Total:</span>
            <span class="offcanvas-cart-total-price-value">{{ cartTotal.toFixed(2) }}€</span>
          </div>
          <AfterPayCartMessage />

          <ul class="offcanvas-cart-action-button">
            <li>
              <nuxt-link to="/cart" class="theme-btn-one btn-black-overlay btn_md">Voir le panier</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/my-account/checkout-1" class="theme-btn-one btn-black-overlay btn_md">Commander
              </nuxt-link>
            </li>
          </ul>
        </div>

        <ul v-else class="offcanvas-cart">
          <li>Panier vide!</li>
        </ul>
      </div>
    </b-sidebar>
    <!-- End  Offcanvas Addcart Section -->

    <!-- Start Offcanvas Wishlist Sidebar Section -->
    <b-sidebar id="offcanvas-wishlish" class="offcanvas-add-cart-section" backdrop right>
      <div class="offcanvas-wishlist-wrapper">
        <h4 class="offcanvas-title">Wishlist</h4>

        <div v-if="productItems.length > 0">
          <ul class="offcanvas-wishlist">
            <li class="offcanvas-wishlist-item-single" v-for="productItem in productItems.slice(0, 3)"
              :key="productItem.id">
              <div class="offcanvas-wishlist-item-block">
                <nuxt-link to="/product" class="offcanvas-wishlist-item-image-link">
                  <img :src="productItem.productImg1" alt="img" class="offcanvas-wishlist-image" />
                </nuxt-link>
                <div class="offcanvas-wishlist-item-content">
                  <nuxt-link to="/product" class="offcanvas-wishlist-item-link">{{ productItem.productTitle }}
                  </nuxt-link>
                  <div class="offcanvas-wishlist-item-details">
                    <span class="offcanvas-wishlist-item-details-quantity">{{ productItem.quantity }} x</span>
                    <span class="offcanvas-wishlist-item-details-price">${{ productItem.productPrice }}</span>
                  </div>
                </div>
              </div>
              <div class="offcanvas-wishlist-item-delete text-right">
                <button @click="removeProductItem(index)" class="
                    offcanvas-wishlist-item-delete
                    bg-transparent
                    remove-btn
                  ">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </li>
          </ul>
          <ul class="offcanvas-wishlist-action-button">
            <li>
              <nuxt-link to="/my-account/wishlist" class="theme-btn-one btn-black-overlay btn_md">View wishlist
              </nuxt-link>
            </li>
          </ul>
        </div>

        <ul v-else class="offcanvas-wishlist">
          <li>No Item in your wishlist!</li>
        </ul>
      </div>
    </b-sidebar>
    <!-- End Offcanvas Wishlist Sidebar Section -->

    <!-- Start Offcanvas Search Bar Section -->
    <b-sidebar id="search_sidebar" class="" backdrop>
      <div class="
          px-3
          py-2
          search-sidebar-content-wrap
          d-flex
          justify-content-center
          align-content-center
          w-100
          h-100
        ">
        <div id=search_form class="d-flex flex-column  w-100">
          <input v-model="searchOptions.request" type="search"
            placeholder="Entrez les 3 premières lettres de votre requête..." />
          <!-- <button class="btn btn-lg btn-golden">Rechercher</button> -->
          <div class="search_list">
            <ProductBox1 v-for="product in searchOptions.productsFind" :key="product._id" class="search_list-product"
              :productImg1="product.imageUrl" :productImg2="product.imageUrl" :productTagClass="product.productTagClass"
              :productTag="product.productTag" :productTitle="product.libelle" :productPrice="product.pvTtc"
              :productId="product._id" :productQuantity="product.stock" :productObject="product" />


          </div>

        </div>

      </div>
    </b-sidebar>
    <!-- End Offcanvas Search Bar Section -->
  </div>
</template>

<script>
import NavCategories from "@/components/header/Categories";
import AfterPayCartMessage from "@/components/cart/AfterPayCartMessage";
import SearchBar from "@/components/SearchBar";
import ProductBox1 from "@/components/product-box/ProductBox1"
export default {
  components: {
    NavCategories,
    AfterPayCartMessage,
    SearchBar,
    ProductBox1
  },
  data() {
    return {
      searchOptions: {
        request: null,
        productsFind: [],
      },
      enabled: true,
      adminOptions: {
        isActive: false,
      },
      // menuObject: {
      //   title: "",
      //   child: [],
      // },
      menu2: [],
      // Mobile Menu Item Data
      menu:
      // {
      //   href: "/",
      //   title: "Accueil",
      // },

      // {
      //   title: "Parcourir",
      //   child: [
      //     {
      //       href: "/shop/shop-2",
      //       title: "Tous",
      //     },
      //     {
      //       href: "/shop/shop-2",
      //       title: "Textile",
      //     },
      //     {
      //       href: "/shop/shop-2",
      //       title: "Accessoire",
      //     },
      //   ],
      // },
      // {
      //   href: "/",
      //   title: "A propos",
      // },
      // {
      //   href: "/",
      //   title: "Aide",
      // },

      {
        title: "MON ESPACE",
        child: [
          {
            href: "/my-account/orders",
            title: "MES COMMANDES",
          },
          {
            href: "/my-account/addresses",
            title: "MES ADRESSES",
          },
          {
            href: "/my-account/account-details",
            title: "MON COMPTE",
          },
        ],
      },

      // Product Items Data
      productItems: [],
    };
  },

  watch: {
    'searchOptions.request'() {
      this.searchProducts();
    }
  },
  methods: {
    // Start search method
    async searchProducts() {
      const searchArray = [];
      if (this.searchOptions.request.length >= 3) {

        try {
          // this.searchOptions.productsFind = [];

          const products = await this.$axios.post('/search/search/products', { request: this.searchOptions.request })
          // this.searchOptions.productsFind.push(products.data.productsArray)
          products.data.productsArray.map((product) => {
            // this.searchOptions.productsFind.push(product)
            searchArray.push(product)
          })
        } catch (error) {
          console.log('error:', error)

        };
        try {

          const productsGamme = await this.$axios.post('/search/search/productsGamme', { request: this.searchOptions.request })
          // this.searchOptions.productsFind.push(products.data.productsArray)
          productsGamme.data.productsArray.map((product) => {
            // this.searchOptions.productsFind.push(product)
            searchArray.push(product)
          })
        } catch (error) {
          console.log('error:', error)

        };
        try {
          this.searchOptions.productsFind = searchArray
        } catch (error) {
          console.log('error:', error)

        }
      }
    },
    shapeMenu() { },
    // For Delete/Remove Product Item
    removeProductItem(productItem) {
      this.$store.commit("cart/remove", productItem);
    },
    logout() {
      this.$auth
        .logout("local")
        .then((res) => {
          console.log(res);
          // this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    selectedProducts() {
      return this.$store.getters["cart/items"];
    },
    price() {
      return this.$store.getters["cart/price"];
    },

    // Cart Total Price
    cartTotal() {
      return this.$store.getters["cart/cartTotal"];
    },
    // Cart Total Price
    CartTotal() {
      let total = 0;
      this.productItems.forEach((productItem) => {
        total += productItem.productPrice * productItem.quantity;
      });
      return total;
    },
  },
  async fetch() {
    try {
      const dataMenu = await this.$axios.get("/category/");
      dataMenu.data.response.forEach(async (menuItem) => {
        let menuObject = {
          title: menuItem.libelleFamille,
          child: [],
        };
        const dataSubmenu = await this.$axios.get(
          "/category/subCategory/" + menuItem.codeFamille
        );
        dataSubmenu.data.subCategory.forEach((subMenuItem) => {
          const childMenuObject = {
            // href: "/shop/category/" + subMenuItem.codeSousFamille,
            href: "#",
            title: subMenuItem.libelleSousFamille,
          };
          menuObject.child.push(childMenuObject);
        });
        this.menu2.unshift(menuObject);
      });
    } catch (error) {
      console.log("🚀 ~ file: Header.vue ~ line 815 ~ fetch ~ error", error);
    } finally {
      this.menu2.push(this.menu);
    }
  },
  mounted() {
    // Menu Js
    // this.$nextTick(function () {
    //   window.onscroll = function () {
    //     myFunction();
    //   };
    //   const header = document.getElementById("header");

    //   const mobile_header = document.getElementById("mobile_header");

    //   const sticky = header.offsetTop;

    //   function myFunction() {
    //     if (window.pageYOffset) {
    //       header.classList.add("sticky");
    //       mobile_header.classList.add("sticky");
    //     } else {
    //       header.classList.remove("sticky");
    //       mobile_header.classList.remove("sticky");
    //     }
    //   }
    // });
  },

};
</script>

<style>
/* Start search section */
#search_form {
  padding: 50px 0 0 0;
}

#search_form input {
  border: 1px solid rgb(227, 227, 227);
}

.search_list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.search_list-product {
  width: 15%;
  padding: 20px;
}

/* End search section */

.login-mobile-container {
  margin: 15px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.login-mobile-container :nth-child(1) {
  margin: 0 0 15px 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-logout {
  cursor: pointer;
}

/* .logo {
  align-self: flex-start;
} */

.nav-catalog a {
  border-left: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
}

.nav-top-bar-home {
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
  height: 90px;
  margin: 0px;
}

.nav-top-bar-home a {
  padding: 18px;
  font-size: 1rem;
}

.subscribe-btn {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

/* Mobile Menu Multi Dropdown Items Start */
.v-sidebar-menu .vsm--toggle-btn {
  display: none;
}

.v-sidebar-menu {
  position: relative;
  background-color: transparent;
}

.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 {
  background-color: var(--main-theme-color);
}

.v-sidebar-menu .vsm--link_level-1.vsm--link_exact-active,
.v-sidebar-menu .vsm--link_level-1.vsm--link_active {
  -webkit-box-shadow: 3px 0px 0px 0px var(--main-theme-color) inset;
  box-shadow: 3px 0px 0px 0px var(--main-theme-color) inset;
}

/* Mobile Menu Multi Dropdown Items End */

.offcanvas-cart {
  flex-direction: column;
}

.offcanvas-cart-item-link {
  font-size: 14px;
}
</style>
