<template>
  <div>
    <!-- Start Header Area -->
    <header class="header-section d-none d-xl-block">
      <div class="header-wrapper">
        <div
          id="header"
          class="
            header-bottom
            header-bottom-color--golden
            section-fluid
            sticky-header
            sticky-color--golden
          "
        >
          <div class="container">
            <div>
              <div class="header-content">
                <!-- Start Header Logo -->
                <div class="header-logo">
                  <div class="logo">
                    <nuxt-link to="/"
                      ><img
                        :src="require('@/assets/img/logo-exo-trap.png')"
                        alt="logo"
                    /></nuxt-link>
                  </div>
                </div>
                <!-- End Header Logo -->

                <!-- Start Header Main Menu -->
                <div
                  class="main-menu menu-color--black menu-hover-color--golden"
                >
                  <nav>
                    <ul>
                      <li>
                        <div class="nav-top-bar-home">
                          <nuxt-link class="active main-menu-link" to="/"
                            >Parcourir</nuxt-link
                          >
                          <nuxt-link class="active main-menu-link" to="/"
                            >à propos</nuxt-link
                          >
                          <nuxt-link class="active main-menu-link" to="/"
                            >Aide</nuxt-link
                          >
                          <nuxt-link
                            v-if="!this.$auth.user"
                            class="active main-menu-link"
                            to="/login"
                            >Connexion</nuxt-link
                          >
                          <a
                            v-if="this.$auth.user"
                            class="active main-menu-link btn-logout"
                            @click="logout"
                          >
                            Déconnexion
                          </a>
                          <nuxt-link
                            v-if="!this.$auth.user"
                            class="bg-black justify-center subscribe-btn"
                            to="/register"
                            >S'inscrire</nuxt-link
                          >
                        </div>
                      </li>
                      <li class="has-dropdown has-megaitem nav-catalog">
                        <!-- <nuxt-link
                          class="active main-menu-link"
                          to="/shop/shop-2"
                          >Catalogue <i class="fa fa-angle-down"></i
                        ></nuxt-link> -->

                        <!-- Mega Menu -->
                        <div v-if="!enabled" class="mega-menu">
                          <ul class="mega-menu-inner">
                            <!-- Mega Menu Sub Link -->
                            <li class="mega-menu-item">
                              <a href="#" class="mega-menu-item-title"
                                >Vêtements</a
                              >
                              <ul class="mega-menu-sub">
                                <li>
                                  <nuxt-link to="#">Casquettes</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#">Doudounes</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#">Gants</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#">Gilets</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#">Lycra</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#">T-Shirt</nuxt-link>
                                </li>
                              </ul>
                            </li>
                            <!-- Mega Menu Sub Link -->
                            <li class="mega-menu-item">
                              <a href="#" class="mega-menu-item-title"
                                >Accessoires</a
                              >
                              <ul class="mega-menu-sub">
                                <li>
                                  <nuxt-link to="#"
                                    >Bouchons oreilles</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="#">Casques</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#">Déplombant</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#">Graisse</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#">Kit de Nettoyage</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#">Huile entretien</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#">Lunettes</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#"
                                    >Malette de transport</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="#">Oeilleres</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#">Repose canon</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#"
                                    >Sacs de transport</nuxt-link
                                  >
                                </li>
                                <li>
                                  <nuxt-link to="#">Serviette de tir</nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link to="#">Snap lock</nuxt-link>
                                </li>
                              </ul>
                            </li>

                            <!-- Mega Menu Sub Link -->
                            <!-- <li class="mega-menu-item">
                              <div class="menu-banner">
                                <nuxt-link to="/shop" class="menu-banner-link">
                                  <img
                                    class="menu-banner-img"
                                    :src="
                                      require('@/assets/img/common/nav_banner.png')
                                    "
                                    alt="img"
                                  />
                                </nuxt-link>
                              </div>
                            </li> -->
                          </ul>
                        </div>
                      </li>
                      <li v-if="!enabled" class="has-dropdown">
                        <a href="#!">Blog <i class="fa fa-angle-down"></i></a>
                        <!-- Sub Menu -->
                        <ul class="sub-menu">
                          <li>
                            <nuxt-link to="/blog">Blog Grid View One</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/blog/blog-2"
                              >Blog Grid View Two</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/blog/blog-3"
                              >Blog List View</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/blog/blog-single"
                              >Blog Single View One
                            </nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/blog/blog-single-2"
                              >Blog Single View TWo</nuxt-link
                            >
                          </li>
                        </ul>
                      </li>
                      <li v-if="!enabled" class="has-dropdown">
                        <a href="#">Pages <i class="fa fa-angle-down"></i></a>
                        <!-- Sub Menu -->
                        <ul class="sub-menu">
                          <li>
                            <nuxt-link to="/faq"
                              >Frequently Questions</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/privacy-policy"
                              >Privacy Policy</nuxt-link
                            >
                          </li>
                          <li><nuxt-link to="/404">404 Page</nuxt-link></li>
                          <li>
                            <nuxt-link to="/contact-us"
                              >Contact Us One</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/contact-us/contact-us-2"
                              >Contact Us Two</nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link to="/coming-soon">Coming Soon</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/my-account">My Account</nuxt-link>
                          </li>
                          <li><nuxt-link to="/login">Login</nuxt-link></li>
                        </ul>
                      </li>
                      <!-- <li>
                        <nuxt-link to="#">A propos</nuxt-link>
                      </li> -->
                      <!-- <li>
                        <nuxt-link
                          class="active main-menu-link"
                          to="/my-account"
                          >Mon espace
                        </nuxt-link>
                      </li> -->
                    </ul>
                  </nav>
                </div>
                <!-- End Header Main Menu Start -->

                <!-- Start Header Action Link -->
                <ul
                  v-if="this.$auth.loggedIn"
                  class="
                    header-action-link
                    action-color--black
                    action-hover-color--golden
                  "
                >
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
                    <a
                      v-b-toggle.search_sidebar
                      class="search_width offcanvas-toggle"
                    >
                      <img src="~/assets/img/svg/search.svg" alt="img" />
                    </a>
                  </li>
                  <li v-if="!enabled">
                    <a
                      v-b-toggle.offcanvas-about
                      class="offacnvas offside-about offcanvas-toggle"
                      ><i class="fas fa-bars"></i
                    ></a>
                  </li>
                </ul>
                <!-- End Header Action Link -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div>
      <NavCategories />
    </div>
    <!--Categories nav-->

    <!-- Start Header Area -->

    <!-- Start Mobile Header -->
    <div
      id="mobile_header"
      class="
        mobile-header
        sticky-header
        sticky-color--golden
        mobile-header-bg-color--golden
        section-fluid
        d-lg-block d-xl-none
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex align-items-center justify-content-between">
            <!-- Start Mobile Left Side -->
            <div class="mobile-header-left">
              <ul class="mobile-menu-logo">
                <li>
                  <nuxt-link to="/">
                    <div class="logo">
                      <img
                        :src="require('@/assets/img/logo-exo-trap.png')"
                        alt="logo-exo-trap"
                      />
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <!-- End Mobile Left Side -->

            <!-- Start Mobile Right Side -->
            <div class="mobile-right-side">
              <ul
                v-if="enabled"
                class="
                  header-action-link
                  action-color--black
                  action-hover-color--golden
                "
              >
                <li v-if="enabled">
                  <a
                    v-b-toggle.search_sidebar
                    class="search_width offcanvas-toggle"
                  >
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
                <li v-if="enabled">
                  <a
                    v-b-toggle.offcanvas-about
                    class="offacnvas offside-about offcanvas-toggle"
                    ><i class="fas fa-bars"></i
                  ></a>
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
    <b-sidebar
      id="offcanvas-about"
      class="offcanvas-mobile-about-section"
      backdrop
      right
    >
      <!-- Start Mobile Menu Navbar Wrap -->
      <div class="mobile-menu-navbar-wrap">
        <!-- Start Mobile Menu Nav -->
        <div class="offcanvas-menu">
          <sidebar-menu :menu="menu" />
          <div class="login-mobile-container">
            <nuxt-link
              v-if="!this.$auth.user"
              class="
                active
                main-menu-link
                bg-white
                justify-center
                subscribe-btn
              "
              to="/login"
              >Connexion</nuxt-link
            >
            <a
              v-if="this.$auth.user"
              class="
                active
                main-menu-link
                bg-black
                justify-center
                subscribe-btn
              "
              @click="logout"
            >
              Déconnexion
            </a>
            <nuxt-link
              v-if="!this.$auth.user"
              class="bg-black justify-center subscribe-btn"
              to="/register"
              >S'inscrire</nuxt-link
            >
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
          <li><nuxt-link to="/my-account/wishlist">Wishlist</nuxt-link></li>
          <li><nuxt-link to="/cart/">Cart</nuxt-link></li>
          <li><nuxt-link to="/my-account/checkout-1">Checkout</nuxt-link></li>
        </ul>
      </div>
      <!-- End Mobile contact Info -->
    </b-sidebar>
    <!-- ...:::: End Offcanvas Mobile Menu Section:::... -->

    <!-- Start Offcanvas Addcart Section -->
    <b-sidebar
      id="offcanvas-add-cart"
      class="offcanvas-add-cart-section"
      backdrop
      right
    >
      <div class="offcanvas-add-cart-wrapper">
        <h4 class="offcanvas-title">Panier</h4>
        <div v-if="selectedProducts.length > 0">
          <ul class="offcanvas-cart">
            <li
              class="offcanvas-cart-item-single"
              v-for="productItem in selectedProducts.slice(0, 4)"
              :key="productItem.id"
            >
              <div class="offcanvas-cart-item-block">
                <nuxt-link to="#" class="offcanvas-cart-item-image-link">
                  <img
                    :src="productItem.imageUrl"
                    alt="img"
                    class="offcanvas-cart-image"
                  />
                </nuxt-link>
                <div class="offcanvas-cart-item-content">
                  <nuxt-link
                    :to="{ path: '/product/' + productItem._id }"
                    class="offcanvas-cart-item-link"
                    >{{ productItem.name }}</nuxt-link
                  >
                  <div class="offcanvas-cart-item-details">
                    <span class="offcanvas-cart-item-details-quantity"
                      >{{ productItem.orderQuantity }} x
                    </span>
                    <span class="offcanvas-cart-item-details-price"
                      >{{ productItem.priceTtc }}€</span
                    >
                  </div>
                </div>
              </div>
              <div class="offcanvas-cart-item-delete text-right">
                <button
                  @click="removeProductItem(productItem)"
                  class="offcanvas-cart-item-delete bg-transparent remove-btn"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </li>
          </ul>

          <div class="offcanvas-cart-total-price">
            <span class="offcanvas-cart-total-price-text">Total:</span>
            <span class="offcanvas-cart-total-price-value"
              >{{ cartTotal.toFixed(2) }}€</span
            >
          </div>

          <ul class="offcanvas-cart-action-button">
            <li>
              <nuxt-link
                to="/cart"
                class="theme-btn-one btn-black-overlay btn_md"
                >Voir le panier</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/my-account/checkout-1"
                class="theme-btn-one btn-black-overlay btn_md"
                >Commander</nuxt-link
              >
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
    <b-sidebar
      id="offcanvas-wishlish"
      class="offcanvas-add-cart-section"
      backdrop
      right
    >
      <div class="offcanvas-wishlist-wrapper">
        <h4 class="offcanvas-title">Wishlist</h4>

        <div v-if="productItems.length > 0">
          <ul class="offcanvas-wishlist">
            <li
              class="offcanvas-wishlist-item-single"
              v-for="productItem in productItems.slice(0, 3)"
              :key="productItem.id"
            >
              <div class="offcanvas-wishlist-item-block">
                <nuxt-link
                  to="/product"
                  class="offcanvas-wishlist-item-image-link"
                >
                  <img
                    :src="productItem.productImg1"
                    alt="img"
                    class="offcanvas-wishlist-image"
                  />
                </nuxt-link>
                <div class="offcanvas-wishlist-item-content">
                  <nuxt-link
                    to="/product"
                    class="offcanvas-wishlist-item-link"
                    >{{ productItem.productTitle }}</nuxt-link
                  >
                  <div class="offcanvas-wishlist-item-details">
                    <span class="offcanvas-wishlist-item-details-quantity"
                      >{{ productItem.quantity }} x</span
                    >
                    <span class="offcanvas-wishlist-item-details-price"
                      >${{ productItem.productPrice }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="offcanvas-wishlist-item-delete text-right">
                <button
                  @click="removeProductItem(index)"
                  class="
                    offcanvas-wishlist-item-delete
                    bg-transparent
                    remove-btn
                  "
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </li>
          </ul>
          <ul class="offcanvas-wishlist-action-button">
            <li>
              <nuxt-link
                to="/my-account/wishlist"
                class="theme-btn-one btn-black-overlay btn_md"
                >View wishlist</nuxt-link
              >
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
      <div
        class="
          px-3
          py-2
          search-sidebar-content-wrap
          d-flex
          justify-content-center
          align-content-center
          w-100
          h-100
        "
      >
        <form class="d-flex flex-column justify-content-center w-100">
          <input type="search" placeholder="Vos mots clés" />
          <button class="btn btn-lg btn-golden">Rechercher</button>
        </form>
      </div>
    </b-sidebar>
    <!-- End Offcanvas Search Bar Section -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      enabled: true,

      // Mobile Menu Item Data
      menu: [
        // {
        //   href: "/",
        //   title: "Accueil",
        // },

        {
          title: "Parcourir",
          child: [
            {
              href: "/shop/shop-2",
              title: "Tous",
            },
            {
              href: "/shop/shop-2",
              title: "Textile",
            },
            {
              href: "/shop/shop-2",
              title: "Accessoire",
            },
          ],
        },
        // {
        //   href: "/",
        //   title: "A propos",
        // },
        // {
        //   href: "/",
        //   title: "Aide",
        // },

        {
          title: "Mon espace",
          child: [
            {
              href: "/my-account/orders",
              title: "Mes commandes",
            },
            {
              href: "/my-account/addresses",
              title: "Adresses",
            },
            {
              href: "/my-account/account-details",
              title: "Compte",
            },
          ],
        },
      ],

      // Product Items Data
      productItems: [],
    };
  },
  mounted() {
    // Menu Js
    this.$nextTick(function () {
      window.onscroll = function () {
        myFunction();
      };
      const header = document.getElementById("header");

      const mobile_header = document.getElementById("mobile_header");

      const sticky = header.offsetTop;

      function myFunction() {
        if (window.pageYOffset) {
          header.classList.add("sticky");
          mobile_header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
          mobile_header.classList.remove("sticky");
        }
      }
    });
    // Menu End
  },
  methods: {
    // For Delete/Remove Product Item
    removeProductItem(productItem) {
      this.$store.commit("cart/remove", productItem);
    },
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
};
</script>

<style>
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
.logo {
  align-self: flex-start;
}
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
