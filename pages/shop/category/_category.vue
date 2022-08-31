<template>
  <div>
    <!-- Banner Area -->
    <section v-if="enabled" id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>{{ this.title }}</h2>
              <!-- <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container-product-list">
      <div class="left-nav-categories">
        <LeftCategoriesNav :subCategory="subCategory" />
      </div>
      <!-- Shop Main Area -->
      <div class="shop-content">
        <section id="shop_main_area" class="ptb-25">
          <div class="container">
            <div class="product-list-breadcrumb-section">
              <a class="back-link" onclick="history.back()">Retour</a>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="product-list-breadcrumb"
              ></b-breadcrumb>
            </div>
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
                  :productQuantity="productItem.stock"
                  :productObject="productItem"
                />
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
      </div>
    </div>

    <!-- Instagram Arae -->
    <!-- <InstagramArea /> -->
  </div>
</template>

<script>
import ProductBox1 from "~/components/product-box/ProductBox1";
import InstagramArea from "~/components/instagram/InstagramArea";
import LeftCategoriesNav from "~/components/navigation/LeftCategoriesNav";
export default {
  name: "shop-three-grid",
  middleware: "auth",
  layout: "shop",

  components: {
    ProductBox1,
    InstagramArea,
    LeftCategoriesNav,
  },
  data() {
    return {
      enabled: true,
      title:
        this.$route.params.category
          .toLowerCase()

          .charAt(0)
          .toUpperCase() +
        this.$route.params.category.toLowerCase().slice(1).replaceAll("-", " "),
      productsGammes: "",
      singlesProducts: [],
      thisIsAProductGamme: false,

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Accueil",
          to: "/",
        },
        {
          text:
            this.$route.params.category
              .toLowerCase()

              .charAt(0)
              .toUpperCase() +
            this.$route.params.category
              .toLowerCase()
              .slice(1)
              .replaceAll("-", " "),
          to: "/shop/shop-2",
        },
      ],

      //Sub-category
      subCategory: "",

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
          content: "Shop page ",
        },
      ],
    };
  },
  computed: {
    // productItems() {
    //   // return this.$store.getters["products/productItems"];
    //   return this.$store.state.products.productItems;
    // },
  },
  //   created() {
  //     this.$store.dispatch("products/getProducts");
  //   },
  async fetch() {
    try {
      const productsGammes = await this.$axios.get("/search/filter", {
        params: {
          search: this.$route.query.codefamille,
        },
      });
      console.log(
        "🚀 ~ file: _category.vue ~ line 240 ~ fetch ~ productsGammes",
        productsGammes
      );
      this.productsGammes = productsGammes.data.productsArray;
    } catch (error) {
      console.log("error:", error);
    }
    try {
      const subCategory = await this.$axios.get(
        "/category/subCategory/" + this.$route.query.codefamille
      );
      this.subCategory = subCategory.data.subCategory;
    } catch (error) {
      console.log("🚀 ~ file: _category.vue ~ line 242 ~ fetch ~ error", error);
    }

    // try {
    //   const products = await this.$axios.get("/product/allProduct");
    //   products.data.map((product) => {
    //     if (product.codeGamme === "") {
    //       console.log("product:", product);

    //       this.singlesProducts.push(product);
    //     }
    //   });

    //   // products.data.map((product) => {
    //   //   if (!product.codeGamme) {
    //   //     this.singleProduct.push(product);
    //   //   }
    //   // });
    // } catch (error) {
    //   console.log("🚀 ~ file: shop-2.vue ~ line 190 ~ fetch ~ error", error);
    // }
  },
  fetchOnServer: false,
  mounted() {
    // console.log(
    //   "🚀 ~ file: _category.vue ~ line 241 ~ mounted ~ this.$route.params",
    //   this.$route.params
    // );
    // console.log(
    //   "🚀 ~ file: _category.vue ~ line 260 ~ mounted ~ this.$route.query",
    //   this.$route.query
    // );
  },
};
</script>

<style scoped>
.container-product-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.shop-content {
  flex-grow: 1;
}
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
}
.product-list-breadcrumb-section ol,
ul,
dl {
  margin: 0;
}
.product-list-breadcrumb {
  background-color: transparent;
}
/* Responsive */
@media only screen and (max-width: 425px) {
  /* tablettes*/
  .product-list-breadcrumb-section {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  /* tablettes et ordinateurs */
  .left-nav-categories {
    display: none;
  }
}
</style>
