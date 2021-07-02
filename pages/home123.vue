<template>
  <div class="home-page">
    <!-- Banner Area -->
    <section id="banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner_text_one">
              <h1>Lorem ipsum<span>Lorem</span></h1>
              <h3>Economisez 50%</h3>
              <nuxt-link to="/shop/shop-3" class="theme-btn-one bg-black btn_md"
                >Achetez maintenant</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product variation -->
    <section id="product_variation_one" class="pt-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="product_variation_one_boxed img-zoom-hover">
              <img
                :src="require('@/assets/img/offer/shot-gun.jpg')"
                alt="img"
              />
              <div class="product_var_one_text">
                <h4 class="color_one">Outdoor</h4>
                <h2 class="color_two">Nouvelle</h2>
                <h4 class="color_two">Collection</h4>
                <nuxt-link
                  to="/shop/shop-2"
                  class="theme-btn-one bg-black btn_sm"
                  >Poule!</nuxt-link
                >
              </div>
            </div>
            <div class="product_variation_one_boxed img-zoom-hover">
              <img
                :src="require('@/assets/img/offer/shot-gun.jpg')"
                alt="img"
              />
              <div class="product_var_one_text">
                <h4 class="color_one">Hivers</h4>
                <h2>Cold</h2>
                <h4>Collection</h4>
                <nuxt-link to="/shop" class="theme-btn-one bg-black btn_sm"
                  >Poule!</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="product_variation_one_boxed img-zoom-hover">
              <img
                :src="require('@/assets/img/offer/gilet-castelani.jpg')"
                alt="img"
              />
              <div class="product_var_one_text_center">
                <h2 class="color_one">10% Offert</h2>
                <h4>Notre selection du mois</h4>
                <nuxt-link
                  to="/shop/shop-3"
                  class="theme-btn-one bg-black btn_sm"
                  >Poule!</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="product_variation_one_boxed img-zoom-hover">
              <img
                :src="require('@/assets/img/offer/shot-gun.jpg')"
                alt="img"
              />
              <div class="product_var_one_text">
                <h2>Nouvel</h2>
                <h4 class="color_one">Arrivage</h4>
                <nuxt-link
                  to="/shop/shop-2"
                  class="theme-btn-one bg-black btn_sm"
                  >Shop Now</nuxt-link
                >
              </div>
            </div>
            <div class="product_variation_one_boxed img-zoom-hover">
              <img
                :src="require('@/assets/img/offer/shot-gun.jpg')"
                alt="img"
              />
              <div class="product_var_one_text">
                <h2>Cartouches</h2>
                <h4 class="color_one">Offre</h4>
                <nuxt-link to="/shop" class="theme-btn-one bg-black btn_sm"
                  >Poule!</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hot Product Area -->
    <section id="hot_Product_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="center_heading">
              <h2>Hot Product</h2>
              <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
            </div>
          </div>
        </div>

        <b-tabs class="hot-product-area-tabs">
          <b-tab title="New Arrival" class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              v-for="productItem in productItems.slice(0, 8)"
              :key="productItem.id"
            >
              <ProductBox1
                :productImg1="productItem.productImg1"
                :productImg2="productItem.productImg2"
                :productTagClass="productItem.productTagClass"
                :productTag="productItem.productTag"
                :productTitle="productItem.productTitle"
                :productPrice="productItem.productPrice"
                :productDescription="productItem.productDescription"
              />
            </div>
          </b-tab>

          <b-tab title="Trending" class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              v-for="productItem in productItems.slice(0, 3)"
              :key="productItem.id"
            >
              <ProductBox1
                :productImg1="productItem.productImg1"
                :productImg2="productItem.productImg2"
                :productTagClass="productItem.productTagClass"
                :productTag="productItem.productTag"
                :productTitle="productItem.productTitle"
                :productPrice="productItem.productPrice"
                :productDescription="productItem.productDescription"
              />
            </div>
          </b-tab>

          <b-tab title="Best Sellers" class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              v-for="productItem in productItems.slice(0, 6)"
              :key="productItem.id"
            >
              <ProductBox1
                :productImg1="productItem.productImg1"
                :productImg2="productItem.productImg2"
                :productTagClass="productItem.productTagClass"
                :productTag="productItem.productTag"
                :productTitle="productItem.productTitle"
                :productPrice="productItem.productPrice"
                :productDescription="productItem.productDescription"
              />
            </div>
          </b-tab>

          <b-tab title="Featured" class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              v-for="productItem in productItems.slice(0, 4)"
              :key="productItem.id"
            >
              <ProductBox1
                :productImg1="productItem.productImg1"
                :productImg2="productItem.productImg2"
                :productTagClass="productItem.productTagClass"
                :productTag="productItem.productTag"
                :productTitle="productItem.productTitle"
                :productPrice="productItem.productPrice"
                :productDescription="productItem.productDescription"
              />
            </div>
          </b-tab>

          <b-tab title="On sall" class="row">
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              v-for="productItem in productItems.slice(0, 3)"
              :key="productItem.id"
            >
              <ProductBox1
                :productImg1="productItem.productImg1"
                :productImg2="productItem.productImg2"
                :productTagClass="productItem.productTagClass"
                :productTag="productItem.productTag"
                :productTitle="productItem.productTitle"
                :productPrice="productItem.productPrice"
                :productDescription="productItem.productDescription"
              />
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </section>

    <!-- Offer Time Area -->
    <section id="offer_timer_one">
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
    <section id="to_days_area" class="ptb-100 slider_arrows_one">
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
    <section id="special_offer_one">
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
    <section id="blog_area_one" class="ptb-100">
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
    <InstagramArea />
  </div>
</template>

<script>
import ProductBox1 from "~/components/product-box/ProductBox1";
import Timer from "../components/widgets/Timer";
import InstagramArea from "../components/instagram/InstagramArea";
import BlogItem1 from "~/components/blog/BlogItem1";
import carousel from "vue-owl-carousel";

export default {
  name: "Home",
  components: {
    ProductBox1,
    Timer,
    InstagramArea,
    BlogItem1,
    carousel,
  },
  middleware: "authenticated",

  data() {
    return {
      title: "Home",
      // Product Items Data
      productItems: [
        {
          id: 1,
          productImg1: require("assets/img/product-image/product1.png"),
          productImg2: require("assets/img/product-image/product2.png"),
          productTagClass: "",
          productTag: "",
          productTitle: "Black T-Shirt For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 38.5,
          totalPrice: 180.0,
          quantity: 1,
        },
        {
          id: 2,
          productImg1: require("assets/img/product-image/product3.png"),
          productImg2: require("assets/img/product-image/product4.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "T-Shirt Form Girls",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
          totalPrice: 130.0,
          quantity: 1,
        },
        {
          id: 3,
          productImg1: require("assets/img/product-image/product5.png"),
          productImg2: require("assets/img/product-image/product6.png"),
          productTagClass: "hot",
          productTag: "hot",
          productTitle: "White Black Line Dress",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 50.5,
          totalPrice: 160.0,
          quantity: 1,
        },
        {
          id: 4,
          productImg1: require("assets/img/product-image/product7.png"),
          productImg2: require("assets/img/product-image/product8.png"),
          productTagClass: "",
          productTag: "",
          productTitle: "Blue Dress For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
          totalPrice: 320.0,
          quantity: 1,
        },
        {
          id: 5,
          productImg1: require("assets/img/product-image/product9.png"),
          productImg2: require("assets/img/product-image/product10.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "Black T-Shirt For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 99.5,
          totalPrice: 155.0,
          quantity: 1,
        },
        {
          id: 6,
          productImg1: require("assets/img/product-image/product11.png"),
          productImg2: require("assets/img/product-image/product12.png"),
          productTagClass: "hot",
          productTag: "hot",
          productTitle: "Blue Dress For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
          totalPrice: 320.0,
          quantity: 1,
        },
        {
          id: 7,
          productImg1: require("assets/img/product-image/product13.png"),
          productImg2: require("assets/img/product-image/product14.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "T-Shirt Form Girls",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 48.5,
          totalPrice: 200.0,
          quantity: 1,
        },
        {
          id: 8,
          productImg1: require("assets/img/product-image/product15.png"),
          productImg2: require("assets/img/product-image/product1.png"),
          productTagClass: "",
          productTag: "",
          productTitle: "T-Shirt Form Girls",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
          totalPrice: 80.0,
          quantity: 1,
        },
        {
          id: 9,
          productImg1: require("assets/img/product-image/product2.png"),
          productImg2: require("assets/img/product-image/product3.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "Blue Dress For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 300,
          totalPrice: 320.0,
          quantity: 1,
        },
        {
          id: 10,
          productImg1: require("assets/img/product-image/product4.png"),
          productImg2: require("assets/img/product-image/product5.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "Black T-Shirt For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
          totalPrice: 330.0,
          quantity: 1,
        },
        {
          id: 11,
          productImg1: require("assets/img/product-image/product6.png"),
          productImg2: require("assets/img/product-image/product7.png"),
          productTagClass: "hot",
          productTag: "hot",
          productTitle: "T-Shirt Form Girls",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 328,
          totalPrice: 320.0,
          quantity: 1,
        },
        {
          id: 12,
          productImg1: require("assets/img/product-image/product8.png"),
          productImg2: require("assets/img/product-image/product9.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "T-Shirt Form Girls",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
          totalPrice: 320.0,
          quantity: 1,
        },
        {
          id: 13,
          productImg1: require("assets/img/product-image/product10.png"),
          productImg2: require("assets/img/product-image/product11.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "Blue Dress For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
          totalPrice: 320.0,
          quantity: 1,
        },
        {
          id: 14,
          productImg1: require("assets/img/product-image/product12.png"),
          productImg2: require("assets/img/product-image/product13.png"),
          productTagClass: "hot",
          productTag: "hot",
          productTitle: "Black T-Shirt For Woman",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 738.5,
          totalPrice: 320.0,
          quantity: 1,
        },
        {
          id: 15,
          productImg1: require("assets/img/product-image/product14.png"),
          productImg2: require("assets/img/product-image/product15.png"),
          productTagClass: "new",
          productTag: "new",
          productTitle: "T-Shirt Form Girls",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 158.5,
          totalPrice: 320.0,
          quantity: 1,
        },
        {
          id: 16,
          productImg1: require("assets/img/product-image/product1.png"),
          productImg2: require("assets/img/product-image/product2.png"),
          productTagClass: "hot",
          productTag: "hot",
          productTitle: "White Black Line Dress",
          productDescription:
            "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
          productPrice: 18.5,
          totalPrice: 320.0,
          quantity: 1,
        },
      ],

      // Blog Items Data
      blogItems: [
        {
          id: 1,
          blogThumb: require("assets/img/blog/post1.png"),
          blogTitle:
            "This Designer Bronzer Has Even The Drugstore-Beauty-Buyers Splurging!",
          blogDescription:
            "Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys I’ve been",
          blogPublishDate: "24 February 2021",
        },
        {
          id: 2,
          blogThumb: require("assets/img/blog/post2.png"),
          blogTitle: "4 Fresh Ways To Style Leather Shorts For Spring",
          blogDescription:
            "We spent spring break this year in California with Cody’s family and it was such a fun getaway. Cody’s family always goes hard on vacation",
          blogPublishDate: "29 jan 2018",
        },
        {
          id: 3,
          blogThumb: require("assets/img/blog/post3.png"),
          blogTitle: "Shopbop Spring Sale Selects All Under Around $100!",
          blogDescription:
            "STRAIGHT LEG DENIM (UNDER $100) – Love all the Ribcage Levi’s styles! They are all really flattering. but since these are wider leg I stuck with my usual size (25).",
          blogPublishDate: "24 February 2021",
        },
        {
          id: 4,
          blogThumb: require("assets/img/blog/post4.png"),
          blogTitle: "This Made Me Splurge on The Apple Watch",
          blogDescription:
            "From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there.",
          blogPublishDate: "21 February 2019",
        },
        {
          id: 5,
          blogThumb: require("assets/img/blog/post5.png"),
          blogTitle: "This Designer Bronzer Has Even Buyers Splurging!",
          blogDescription:
            "Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys",
          blogPublishDate: "24 February 2021",
        },
        {
          id: 6,
          blogThumb: require("assets/img/blog/post6.png"),
          blogTitle: "4 Tips for A Colorful Easter Tablescape",
          blogDescription:
            "Spring is all about the colors! Especially after what feels like an endless winter, I catch myself craving more color than usual.",
          blogPublishDate: "24 February 2021",
        },
        {
          id: 7,
          blogThumb: require("assets/img/blog/post7.png"),
          blogTitle: "Hawaii Couples Trip Guide and Spring Break Faves",
          blogDescription:
            "After every trip to Hawaii, I always have a few DMs asking where we stayed, our favorite beaches, etc. Especially with spring break around the corner.",
          blogPublishDate: "24 February 2021",
        },
        {
          id: 8,
          blogThumb: require("assets/img/blog/post8.png"),
          blogTitle: "If You Struggle To Hit Your Goals, Try This Instead",
          blogDescription:
            "This year, instead of setting grand, lofty goals and New Years Resolutions, I realized that I respond better to smaller targets that I can cross",
          blogPublishDate: "24 February 2021",
        },
        {
          id: 9,
          blogThumb: require("assets/img/blog/post9.png"),
          blogTitle: "The Luxury Winter Accessory That’s Trending Now",
          blogDescription:
            "No matter what you spend on your wardrobe, there are three pieces that can always elevate your look – shoes, handbags, and sunglasses.",
          blogPublishDate: "24 February 2021",
        },
      ],
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
</style>
