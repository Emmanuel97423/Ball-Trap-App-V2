<template>
  <div class="home-page">
    <NavCategories />
    <!--Slider-->
    <div id="carousel-home">
      <Carousel />
    </div>

    <!-- Product variation -->
    <section
      id="product_variation_one"
      class="pt-15 categories-section categorie-section"
    >
      <div class="container-fluid">
        <div class="row">
          <div id="col-1" class="col-lg-4 col-md-12">
            <div
              id="equipement-card"
              class="product_variation_one_boxed img-zoom-hover"
            >
              <nuxt-link to="/shop/shop-2">
                <img
                  class="img"
                  :src="require('@/assets/img/offer/shot-gun.jpg')"
                  alt="img"
                />
                <div class="product_var_one_text">
                  <h4 class="color_one">Ball trap</h4>
                  <h2 class="color_two text-light">Accessoires</h2>
                  <!-- <h4 class="color_two">Collection</h4> -->
                  <nuxt-link
                    to="/shop/shop-2"
                    class="theme-btn-one bg-black btn_sm"
                    >Pull!</nuxt-link
                  >
                </div>
              </nuxt-link>
            </div>

            <div
              id="weapon-card"
              class="product_variation_one_boxed img-zoom-hover"
            >
              <nuxt-link to="/shop/shop-2">
                <img
                  class="opacity-25"
                  :src="require('@/assets/img/offer/shot-gun.jpg')"
                  alt="img"
                />
                <div class="product_var_one_text">
                  <!-- <h4 class="color_one">Hiver</h4> -->
                  <h2 class="text-light">Armes</h2>
                  <h4 class="color_one">Catégorie C.</h4>
                  <nuxt-link
                    to="/shop/shop-2"
                    class="theme-btn-one bg-black btn_sm"
                    >Pull!</nuxt-link
                  >
                </div>
              </nuxt-link>
            </div>
          </div>
          <div id="visit-card-col" class="col-lg-4 col-md-6">
            <!-- <div
              id="visit-card-div"
              class="product_variation_one_boxed img-zoom-hover"
            >
              <nuxt-link to="/shop/shop-2">
                <img
                  id="visit-card"
                  :src="require('@/assets/img/carte-de-visite.png')"
                  alt="img"
                /> -->
            <!-- <div class="product_var_one_text">
                  <h2 class="text-light">Munitions</h2>
                  <h4 class="color_one">Arrivage</h4>
                  <nuxt-link to="#" class="theme-btn-one bg-black btn_sm"
                    >Pull!</nuxt-link
                  >
                </div> -->
            <!-- </nuxt-link>
            </div> -->
            <div
              id="textile-card"
              class="product_variation_one_boxed img-zoom-hover"
            >
              <nuxt-link to="#">
                <img
                  :src="require('@/assets/img/common/textil-cat.jpg')"
                  alt="img"
                />
                <div class="product_var_one_text">
                  <h2 class="text-light">Textiles</h2>
                  <h4 class="color_one">Ball Trap</h4>
                  <nuxt-link
                    to="/shop/shop-2"
                    class="theme-btn-one bg-black btn_sm"
                    >Pull!</nuxt-link
                  >
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              id="munitions-card"
              class="product_variation_one_boxed img-zoom-hover"
            >
              <nuxt-link to="/shop/shop-2">
                <img
                  :src="require('@/assets/img/offer/shot-gun.jpg')"
                  alt="img"
                />
                <div class="product_var_one_text">
                  <h2 class="text-light">Munitions</h2>
                  <!-- <h4 class="color_one">Arrivage</h4> -->
                  <nuxt-link to="#" class="theme-btn-one bg-black btn_sm"
                    >Pull!</nuxt-link
                  >
                </div>
              </nuxt-link>
            </div>
            <div
              id="weapon-d"
              class="product_variation_one_boxed img-zoom-hover"
            >
              <nuxt-link to="#">
                <img
                  :src="require('@/assets/img/offer/shot-gun.jpg')"
                  alt="img"
                />
                <div class="product_var_one_text">
                  <h2 class="text-light">ARMES</h2>
                  <h4 class="color_one">Catégorie D.</h4>
                  <nuxt-link
                    to="/shop/shop-2"
                    class="theme-btn-one bg-black btn_sm"
                    >Pull!</nuxt-link
                  >
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Call To Action-->
    <CallToActionHomePage />
    <!--And call to action-->
    <!-- Hot Product Area -->
    <!-- <section v-if="!enabled" id="hot_Product_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="center_heading">
              <h2>Catégorie</h2>
              <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
            </div>
          </div>
        </div>

        <b-tabs class="hot-product-area-tabs">
          <b-tab title="Textile" class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              v-for="productItem in productItems.slice(0, 8)"
              :key="productItem.id"
            >
              <ProductBox1
                :productImg1="productItem.imageUrl"
                :productImg2="productItem.imageUrl"
                :productTagClass="productItem.productTagClass"
                :productTag="productItem.productTag"
                :productTitle="productItem.name"
                :productPrice="productItem.priceTtc"
                :productId="productItem._id"
                :productObject="productItem"
                :productQuantity="productItem.quantity"
              />
            </div>
          </b-tab>

          <b-tab title="Nouveautés" class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              v-for="productItem in productItems.slice(0, 3)"
              :key="productItem.id"
            >
              <ProductBox1
                :productImg1="productItem.imageUrl"
                :productImg2="productItem.imageUrl"
                :productTagClass="productItem.productTagClass"
                :productTag="productItem.productTag"
                :productTitle="productItem.name"
                :productPrice="productItem.price"
                :productId="productItem._id"
                :productObject="productItem"
                :productQuantity="productItem.quantity"
              />
            </div>
          </b-tab>

          <b-tab title="Fusils" class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              v-for="productItem in productItems.slice(0, 6)"
              :key="productItem.id"
            >
              <ProductBox1
                :productImg1="productItem.imageUrl"
                :productImg2="productItem.imageUrl"
                :productTagClass="productItem.productTagClass"
                :productTag="productItem.productTag"
                :productTitle="productItem.name"
                :productPrice="productItem.price"
                :productId="productItem._id"
                :productObject="productItem"
                :productQuantity="productItem.quantity"
              />
            </div>
          </b-tab>

          <b-tab title="Accessoires" class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              v-for="productItem in productItems.slice(0, 4)"
              :key="productItem.id"
            >
              <ProductBox1
                :productImg1="productItem.imageUrl"
                :productImg2="productItem.imageUrl"
                :productTagClass="productItem.productTagClass"
                :productTag="productItem.productTag"
                :productTitle="productItem.name"
                :productPrice="productItem.price"
                :productId="productItem._id"
                :productObject="productItem"
                :productQuantity="productItem.quantity"
              />
            </div>
          </b-tab>

          <b-tab title="Offres" class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              v-for="productItem in productItems.slice(0, 3)"
              :key="productItem.id"
            >
              <ProductBox1
                :productImg1="productItem.imageUrl"
                :productImg2="productItem.imageUrl"
                :productTagClass="productItem.productTagClass"
                :productTag="productItem.productTag"
                :productTitle="productItem.name"
                :productPrice="productItem.price"
                :productId="productItem._id"
                :productObject="productItem"
                :productQuantity="productItem.quantity"
              />
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </section> -->

    <!-- Offer Time Area -->
    <section v-if="enabled" id="offer_timer_one">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-8 offset-lg-4 col-md-7 offset-md-4 col-sm-12 col-12"
          >
            <div class="offer_time_flex">
              <div class="count_down">
                <div id="countdown">
                  <Timer date="July 14, 2021" />
                </div>
              </div>
              <div class="offer_timer_text">
                <h2>20% OFF FOR ALL T-SHIRT COLLECTION</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Porro quisquam, odit assumenda sit modi commodi esse
                  necessitatibus temporibus aperiam veritatis eveniet!
                </p>
                <a href="#!" class="theme-btn-one bg-black btn_md">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- To Days Area -->
    <section v-if="enabled" id="to_days_area" class="ptb-100 slider_arrows_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="center_heading">
              <h2>ToDay's Deal</h2>
              <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <carousel
              class="todays_slider"
              :autoplay="true"
              :loop="true"
              :nav="true"
              :dots="false"
              :smartSpeed="1000"
              :margin="30"
              :responsive="{
                0: { items: 1 },
                600: { items: 2 },
                992: { items: 3 },
                1200: { items: 4 },
              }"
            >
              <ProductBox1
                v-for="productItem in productItems"
                :key="productItem.id"
                :productImg1="productItem.productImg1"
                :productImg2="productItem.productImg2"
                :productTagClass="productItem.productTagClass"
                :productTag="productItem.productTag"
                :productTitle="productItem.productTitle"
                :productPrice="productItem.productPrice"
                :productDescription="productItem.productDescription"
              />
            </carousel>
          </div>
        </div>
      </div>
    </section>

    <!-- Special offer -->
    <section v-if="enabled" id="special_offer_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-lg-4 col-md-12 col-sm-12 col-12">
            <div class="offer_banner_one text-center">
              <h5>TRENDING</h5>
              <h2>New Fashion</h2>
              <p>
                Consectetur adipisicing elit. Dolores nisi distinctio magni,
                iure deserunt doloribus optio
              </p>
              <nuxt-link to="/shop" class="theme-btn-one bg-whites btn_md"
                >Shop Now</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Blog Arae -->
    <section v-if="enabled" id="blog_area_one" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="center_heading">
              <h2>Latest Blog</h2>
              <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            v-for="blogItem in blogItems.slice(0, 3)"
            :key="blogItem.id"
            class="col-lg-4 col-md-4 col-sm-6 col-12"
          >
            <BlogItem1
              :blogThumb="blogItem.blogThumb"
              :blogTitle="blogItem.blogTitle"
              :blogDescription="blogItem.blogDescription"
              :blogPublishDate="blogItem.blogPublishDate"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram Arae -->
    <!-- <div v-if="!enabled"><InstagramArea /></div> -->
    <FooterNav />
  </div>
</template>

<script>
import ProductBox1 from "~/components/product-box/ProductBox1";
import Timer from "../components/widgets/Timer";
import InstagramArea from "../components/instagram/InstagramArea";
import BlogItem1 from "~/components/blog/BlogItem1";
// import carousel from "vue-owl-carousel";
import Carousel from "~/components/carousel/Carousel";
import NavCategories from "@/components/header/Categories";
import CallToActionHomePage from "@/components/call-to-action/CallToActionHomePage";
import FooterNav from "@/components/footer/FooterNav";

export default {
  name: "Home",
  components: {
    ProductBox1,
    Timer,
    InstagramArea,
    BlogItem1,
    Carousel,
    NavCategories,
    CallToActionHomePage,
    FooterNav,
  },

  data() {
    return {
      enabled: false,
      title: "Home",
      slide: 0,
      sliding: null,

      // Blog Items Data
      // blogItems: [
      //   {
      //     id: 1,
      //     blogThumb: require("assets/img/blog/post1.png"),
      //     blogTitle:
      //       "This Designer Bronzer Has Even The Drugstore-Beauty-Buyers Splurging!",
      //     blogDescription:
      //       "Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys I’ve been",
      //     blogPublishDate: "24 February 2021",
      //   },
      //   {
      //     id: 2,
      //     blogThumb: require("assets/img/blog/post2.png"),
      //     blogTitle: "4 Fresh Ways To Style Leather Shorts For Spring",
      //     blogDescription:
      //       "We spent spring break this year in California with Cody’s family and it was such a fun getaway. Cody’s family always goes hard on vacation",
      //     blogPublishDate: "29 jan 2018",
      //   },
      //   {
      //     id: 3,
      //     blogThumb: require("assets/img/blog/post3.png"),
      //     blogTitle: "Shopbop Spring Sale Selects All Under Around $100!",
      //     blogDescription:
      //       "STRAIGHT LEG DENIM (UNDER $100) – Love all the Ribcage Levi’s styles! They are all really flattering. but since these are wider leg I stuck with my usual size (25).",
      //     blogPublishDate: "24 February 2021",
      //   },
      //   {
      //     id: 4,
      //     blogThumb: require("assets/img/blog/post4.png"),
      //     blogTitle: "This Made Me Splurge on The Apple Watch",
      //     blogDescription:
      //       "From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there.",
      //     blogPublishDate: "21 February 2019",
      //   },
      //   {
      //     id: 5,
      //     blogThumb: require("assets/img/blog/post5.png"),
      //     blogTitle: "This Designer Bronzer Has Even Buyers Splurging!",
      //     blogDescription:
      //       "Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys",
      //     blogPublishDate: "24 February 2021",
      //   },
      //   {
      //     id: 6,
      //     blogThumb: require("assets/img/blog/post6.png"),
      //     blogTitle: "4 Tips for A Colorful Easter Tablescape",
      //     blogDescription:
      //       "Spring is all about the colors! Especially after what feels like an endless winter, I catch myself craving more color than usual.",
      //     blogPublishDate: "24 February 2021",
      //   },
      //   {
      //     id: 7,
      //     blogThumb: require("assets/img/blog/post7.png"),
      //     blogTitle: "Hawaii Couples Trip Guide and Spring Break Faves",
      //     blogDescription:
      //       "After every trip to Hawaii, I always have a few DMs asking where we stayed, our favorite beaches, etc. Especially with spring break around the corner.",
      //     blogPublishDate: "24 February 2021",
      //   },
      //   {
      //     id: 8,
      //     blogThumb: require("assets/img/blog/post8.png"),
      //     blogTitle: "If You Struggle To Hit Your Goals, Try This Instead",
      //     blogDescription:
      //       "This year, instead of setting grand, lofty goals and New Years Resolutions, I realized that I respond better to smaller targets that I can cross",
      //     blogPublishDate: "24 February 2021",
      //   },
      //   {
      //     id: 9,
      //     blogThumb: require("assets/img/blog/post9.png"),
      //     blogTitle: "The Luxury Winter Accessory That’s Trending Now",
      //     blogDescription:
      //       "No matter what you spend on your wardrobe, there are three pieces that can always elevate your look – shoes, handbags, and sunglasses.",
      //     blogPublishDate: "24 February 2021",
      //   },
      // ],
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
          content: "Home page - AndShop Ecommerce Vue js, Nuxt js Template ",
        },
      ],
    };
  },

  computed: {
    productItems() {
      return this.$store.getters["products/productItems"];
    },
  },
  created() {
    this.$store.dispatch("products/getProducts");
  },
};
</script>

<style scoped>
h1 {
  color: white;
}
.color_two {
  color: white;
}
.banner_text_one h1 {
  color: black;
}
#carousel-home {
  height: auto;
}
.categories-section {
  /* max-width: 1400px; */

  margin: 0 auto;
}
#visit-card {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin: 0 0 0 0;
}
#textile-card {
  height: 600px;
}
.text-light {
  background-color: #000;
  text-align: center;
  margin: 0 0 10px 0;
  padding: 10px 20px;
}
#equipement-card h2 {
  width: 150%;
}
#munitions-card h2 {
  width: 150%;
}

/* .img {

} */

#textile-card,
#equipement-card,
#weapon-card,
#visit-card-div,
#munitions-card {
  margin: 0 0 15px 0;
}

@media only screen and (max-width: 1440px) {
  #textile-card {
    height: 400px;
  }
}
@media only screen and (max-width: 1024px) {
  #textile-card {
    height: 350px;
  }
  .text-light {
    font-size: 18px;
    background-color: #000;
    text-align: center;
    margin: 0 0 10px 0;
    padding: 5px 15px;
  }
  #equipement-card h2 {
    width: 150%;
    text-align: center;
  }
  #munitions-card h2 {
    width: 150%;
    text-align: center;
  }
}
@media only screen and (max-width: 768px) {
  #carousel-home {
    display: none;
  }
  #textile-card {
    height: 420px;
  }
  #weapon-card {
    height: 250px;
  }
  #equipement-card {
    height: 250px;
  }
}

/* #visit-card-col {
  padding: 0;
} */

/* @media only screen and (max-width:768px) {
  #carousel-home {
    height: 600px;
  }
} */

/* @media only screen and (max-width: 1440px) {
  #textile-card {
    height: 194px;
  }
}

@media only screen and (max-width: 1024px) {
  #textile-card {
    height: 127px;
  }
} */
/* @media only screen and (max-width: 768px) {
  #weapon-card {
    height: 250px;
  }
  #equipement-card {
    height: 250px;
  }
  #textile-card {
    height: 160px;
  }
  #visit-card-col {
    padding: 0 0 0 15px;
  }
}
@media only screen and (max-width: 425px) {
  #carousel-home {
    display: none;
  }
  #visit-card-col {
    padding: 0 15px 0 15px;
  }
  #equipement-card,
  #weapon-card,
  #munitions-card,
  #weapon-d,
  #textile-card {
    height: 200px;
  }
  #weapon-d {
    margin: 0 0 15px 0;
  }
} */
</style>
