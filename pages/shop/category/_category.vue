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

    <!-- <div  class="loading-spinner" v-if="$fetchState.pending">
      <span class="loading"></span>
      <Spinner></Spinner>
    </div> -->
    <b-overlay :show="subCategoryLoading" rounded="sm">
      <div class="container-product-list">
        <div class="left-nav-categories">
          <LeftCategoriesNav :subCategory="subCategory" @handle-click-sub-category="fetchSubCategoryProduct" />
        </div>
        <!-- Shop Main Area -->
        <div class="shop-content">
          <section id="shop_main_area" class="ptb-25">
            <div class="container">
              <div v-if="enabled" class="product-list-breadcrumb-section">
                <a class="back-link" onclick="history.back()">Retour</a>
                <b-breadcrumb :items="breadcrumbItems" class="product-list-breadcrumb"></b-breadcrumb>
              </div>
              <Tags :tagsSelected="tagsSelected" @remove-tag="removeTagSelected" />
              <!-- <div class="row"> -->
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
              <!-- </div> -->

              <h4 class="category-empty" v-if="productsGammes.length < 1">
                Dans le lanceur...
              </h4>

              <div v-else class="row">
                <!-- <div class="loading-spinner-sub-category" v-if="subCategoryLoading">
                  <span class="loading"></span>
                  <Spinner></Spinner>
                </div> -->
                <div v-if="productsGammes.length > 0" class="col-lg-3 col-md-4 col-sm-6 col-12"
                  v-for="productItem in productsGammes" :key="productItem._id">
                  <ProductBox1 :productImg1="productItem.imageUrl" :productImg2="productItem.imageUrl"
                    :productTagClass="productItem.productTagClass" :productTag="productItem.productTag"
                    :productTitle="productItem.libelle" :productPrice="productItem.pvTtc" :productId="productItem._id"
                    :productQuantity="productItem.stock" :productObject="productItem" />
                </div>

                <div class="col-lg-12 loadmore-product-btn">
                  <!-- pagination start -->
                  <span>Affichage de <span class="pagination-number"> {{ loadMoreOptions.productByPage }}</span>
                    sur
                    <span class="pagination-number">{{
                        loadMoreOptions.totalProducts
                    }}</span> articles</span>
                  <button v-if="loadMoreOptions.productByPage < loadMoreOptions.totalProducts"
                    class="theme-btn-one btn-black-overlay btn_sm" @click="handleLoadMoreProduct()">EN CHARGER
                    PLUS</button>
                  <!-- <p v-else>D'avantage de choix prochainement...</p> -->
                  <b-pagination v-if="!enabled" v-model="currentPage" pills :total-rows="rows"></b-pagination>
                  <!-- pagination end -->
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </b-overlay>
    <!-- Instagram Arae -->
    <!-- <InstagramArea /> -->
  </div>
</template>

<script>
import ProductBox1 from "~/components/product-box/ProductBox1";
import InstagramArea from "~/components/instagram/InstagramArea";
import LeftCategoriesNav from "~/components/navigation/LeftCategoriesNav";
import Tags from "@/components/category/Tags";
export default {
  name: "shop-three-grid",
  middleware: "auth",
  layout: "shop",

  components: {
    ProductBox1,
    InstagramArea,
    LeftCategoriesNav,
    Tags,
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
          to: "/shop/category/",
        },
      ],
      tagsSelected: [],
      tagsSelectedByCode: [],

      //Sub-category
      subCategory: "",
      subCategoryLoading: false,

      // Pagination Data
      rows: 60,
      currentPage: 1,
      // Start load more products
      loadMoreOptions: {
        status: false,
        start: 20,
        size: 10,
        payload: null,
        totalProducts: null,
        isActive: true,
        productByPage: null,
      }
      // End load more products
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
  watch: {
    // Start a corrigé
    'loadMoreOptions.start'() {

      // if (this.loadMoreOptions.start >= this.loadMoreOptions.totalProducts) {
      //   this.loadMoreOptions.start = this.loadMoreOptions.totalProducts;
      //   this.loadMoreOptions.isActive = false;
      // }
    },
    // productsGammes() {
    //   console.log("this.loadMoreOptions.start:", this.loadMoreOptions.start);
    //   console.log(' this.loadMoreOptions.totalProducts:', this.loadMoreOptions.totalProducts)
    //   if (this.loadMoreOptions.start >= this.loadMoreOptions.totalProducts) {
    //     this.loadMoreOptions.start = this.loadMoreOptions.totalProducts;
    //     this.loadMoreOptions.isActive = false;
    //   }
    // }

  },
  // End a corrigé
  methods: {
    // Start load more products
    async handleLoadMoreProduct() {
      // if (this.productsGammes.length <= this.loadMoreOptions.start) {
      //   this.loadMoreOptions.start = this.productsGammes.length
      // }
      const start = this.loadMoreOptions.start;
      const size = this.loadMoreOptions.size;
      this.loadMoreOptions.start = start + size;

      try {
        if (this.tagsSelected.length > 0) {
          const payloadLoadMore = {
            codeFamille: this.$route.query.codefamille,
            codeSousFamille: this.loadMoreOptions.payload.codeSousFamille
          }

          this.fetchSubCategoryProduct(payloadLoadMore)

        } else {
          this.fetchData()
        }
      } catch (error) {
        console.log('error:', error)

      }

    },
    // End load more products
    pushTagsSelected(payload) {
      if (payload.libelleSousFamille) {
        if (this.tagsSelected.length < 1) {
          this.tagsSelected.push(payload.libelleSousFamille);
        } else {
          this.tagsSelected.indexOf(payload.libelleSousFamille) === -1
            ? this.tagsSelected.push(payload.libelleSousFamille)
            : null;
        }
      }

    },
    removeTagSelected(payload) {
      this.tagsSelected = this.tagsSelected.filter((tag) => tag !== payload);
      if (this.tagsSelected.length > 0) {
        this.fetchSubCategoryProduct();
      } else {
        this.fetchData();
      }
    },
    async fetchSubCategoryProduct(payload) {
      this.loadMoreOptions.payload = payload;
      this.subCategoryLoading = true;

      if (payload) {
        this.pushTagsSelected(payload);

        try {
          const productSearchBySubcategory = await this.$axios.get(
            "search/filter/subCategory",
            {
              params: {
                search: payload.codeSousFamille,
                searchArrayByTags: this.tagsSelected,
                start: this.loadMoreOptions.start,
                size: this.loadMoreOptions.size

              },
            }
          );
          console.log('productSearchBySubcategory:', productSearchBySubcategory)

          this.productsGammes = productSearchBySubcategory.data.productsArray;
          this.loadMoreOptions.totalProducts = productSearchBySubcategory.data.totalProducts
          this.loadMoreOptions.productByPage = productSearchBySubcategory.data.productByPage;
          console.log('this.loadMoreOptions:', this.loadMoreOptions)
          this.subCategoryLoading = false;
          // if (this.loadMoreOptions.start >= this.loadMoreOptions.totalProducts) {
          //   this.loadMoreOptions.start = this.loadMoreOptions.totalProducts;
          //   this.loadMoreOptions.isActive = false;
          // }
        } catch (error) {
          console.log("error:", error);
        }
      } else {
        try {
          const productSearchBySubcategory = await this.$axios.get(
            "search/filter/subCategory",
            {
              params: {
                // search: payload.codeSousFamille,
                searchArrayByTags: this.tagsSelected,
                start: this.loadMoreOptions.start,
                size: this.loadMoreOptions.size
              },
            }
          );
          this.productsGammes = productSearchBySubcategory.data.productsArray;
          this.loadMoreOptions.totalProducts = productSearchBySubcategory.data.totalProducts
          this.loadMoreOptions.productByPage = productSearchBySubcategory.data.productByPage;
          this.subCategoryLoading = false;
        } catch (error) {
          console.log("error:", error);
        }
      }
    },
    async fetchData() {

      this.subCategoryLoading = true;
      try {
        const productsGammes = await this.$axios.get("/search/filter", {
          params: {
            search: this.$route.query.codefamille,
            start: this.loadMoreOptions.start,
            size: this.loadMoreOptions.size
          },
        });
        this.productsGammes = productsGammes.data.productsArray;
        this.loadMoreOptions.totalProducts = productsGammes.data.totalProducts;
        this.loadMoreOptions.productByPage = productsGammes.data.productByPage;

        this.subCategoryLoading = false;
      } catch (error) {
        console.log("error:", error);
      }
      try {
        const subCategory = await this.$axios.get(
          "/category/subCategory/" + this.$route.query.codefamille
        );
        this.subCategory = subCategory.data.subCategory;
        this.subCategoryLoading = false;

      } catch (error) {
        console.log(
          "🚀 ~ file: _category.vue ~ line 242 ~ fetch ~ error",
          error
        );
      }
    },
  },

  async fetch() {
    try {
      const productsGammes = await this.$axios.get("/search/filter", {
        params: {
          search: this.$route.query.codefamille,
          start: this.loadMoreOptions.start,
          size: this.loadMoreOptions.size
        },
      });

      this.productsGammes = productsGammes.data.productsArray;
      this.loadMoreOptions.totalProducts = productsGammes.data.totalProducts;
      this.loadMoreOptions.productByPage = productsGammes.data.productByPage;
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


  },
  fetchOnServer: false,
};
</script>

<style scoped>
/* Start load more product section */
.loadmore-product-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0 0 0;

}

.loadmore-product-btn span {
  font-size: 12px;
  margin: 0 0 20px 0;
}

.pagination-number {
  font-weight: bold;
}

/* End load more product section */

.loading-spinner-sub-category {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  z-index: 999;
}

.container-product-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.category-empty {
  height: 500px;
}

.shop-content {
  flex-grow: 1;
  /* height: 500px; */
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
