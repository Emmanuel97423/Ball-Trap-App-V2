<template>
  <div>
    <!-- Banner Area -->
    <section v-if="!enabled" id="common_banner_one">
      <div class="container">
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
    <section id="shop_main_area" class="ptb-25">
      <div class="container">
        <div class="back-link"><a onclick="history.back()">Retour</a></div>
        <div class="row">
          <!-- <div v-if="!enabled" class="col-lg-6 col-md-12">
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
          </div> -->
          <!-- <div v-if="!enabled" class="col-lg-6 col-md-12">
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
                    <nuxt-link to="/shop/shop-2" class="active"
                      ><i class="fas fa-th-large"></i
                    ></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/shop/shop-4"
                      ><i class="fas fa-th"></i
                    ></nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div> -->
        </div>
        <div class="row">
          {{ productsGammes }}
          <div
            class="col-lg-3 col-md-4 col-sm-6 col-12"
            v-for="productItem in productsGammes"
            :key="productItem._id"
          >
            <ProductBox1
              :productImg1="productItem.imageUrl"
              :productImg2="productItem.imageUrl"
              :productTagClass="productItem.productTagClass"
              :productTag="productItem.productTag"
              :productTitle="productItem.libelle"
              :productPrice="productItem.pvTtc"
              :productId="productItem._id"
              :productQuantity="productItem.quantity"
              :productObject="productItem"
            />
            <!-- {{ productItem.quantity }} -->
            <!-- <ProductBox1
              :productImg1="productItem.productImg1"
              :productImg2="productItem.productImg2"
              :productTagClass="productItem.productTagClass"
              :productTag="productItem.productTag"
              :productTitle="productItem.productTitle"
              :productPrice="productItem.productPrice"
            /> -->
          </div>

          <div class="col-lg-12">
            <!-- pagination start -->
            <b-pagination
              v-if="!enabled"
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
    <!-- <InstagramArea /> -->
  </div>
</template>

<script>
import ProductBox1 from "~/components/product-box/ProductBox1";
import InstagramArea from "~/components/instagram/InstagramArea";

export default {
  name: "shop-three-grid",
  middleware: "auth",

  components: {
    ProductBox1,
    InstagramArea,
  },
  asyncData() {
    return {
      enabled: true,
      title: "Shop",
      productsGammes: "",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Shop",
          to: "/shop/shop-2",
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
  computed: {
    productItems() {
      // return this.$store.getters["products/productItems"];
      return this.$store.state.products.productItems;
    },
  },
  created() {
    this.$store.dispatch("products/getProducts");
  },
  async fetch() {
    try {
      const products = await this.$axios.get("/gammes");
      this.productsGammes = products.data;
      console.log("this.productsGammes:", this.productsGammes);
    } catch (error) {
      console.log("error:", error);
    }
  },
  fetchOnServer: false,
};
</script>

<style scoped>
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
</style>
