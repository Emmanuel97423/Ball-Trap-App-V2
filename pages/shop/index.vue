<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container ">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>{{ this.title }}</h2>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shop Main Area -->
    <section id="shop_main_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="product_filter">
              <div class="customs_selects">
                <select name="product" class="customs_sel_box">
                  <option value="Filter">Filter</option>
                  <option value="most_popular">Most Popular</option>
                  <option value="best_seller">Best Seller</option>
                  <option value="tranding">Tranding</option>
                  <option value="featured">Featured</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="product_shot">
              <div class="product_shot_title">
                <p>Sort By:</p>
              </div>
              <div class="customs_selects">
                <select name="product" class="customs_sel_box">
                  <option value="popularity">Sort by Popularity</option>
                  <option value="new">Sort by new</option>
                  <option value="low">Price: low to high</option>
                  <option value="high">Price: high to low</option>
                </select>
              </div>
              <div class="product_shot_view">
                <ul>
                  <li>
                    <nuxt-link to="/shop/shop-3"
                      ><i class="fas fa-list"></i
                    ></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/shop/shop-2"
                      ><i class="fas fa-th-large"></i
                    ></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/shop" class="active"
                      ><i class="fas fa-th"></i
                    ></nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6 col-12"
            v-for="productItem in productItems"
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

          <div class="col-lg-12">
            <!-- pagination start -->
            <b-pagination
              v-model="currentPage"
              pills
              :total-rows="rows"
            ></b-pagination>
            <!-- pagination end -->
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
import InstagramArea from "~/components/instagram/InstagramArea";

export default {
  name: "shop-four-grid",
  components: {
    ProductBox1,
    InstagramArea,
  },
  middleware: "authenticated",
  data() {
    return {
      title: "Shop",

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
        },
      ],

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Shop",
          to: "/shop",
        },
      ],

      // Pagination Data
      rows: 60,
      currentPage: 1,
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
};
</script>

<style></style>
