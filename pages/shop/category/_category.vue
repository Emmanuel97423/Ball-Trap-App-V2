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

    <div class="loading-spinner" v-if="$fetchState.pending">
      <!-- <span class="loading"></span> -->
      <Spinner></Spinner>
    </div>

    <div v-else class="container-product-list">
      <div class="left-nav-categories">
        <LeftCategoriesNav
          :subCategory="subCategory"
          @handle-click-sub-category="fetchSubCategoryProduct"
        />
      </div>
      <!-- Shop Main Area -->
      <div class="shop-content">
        <section id="shop_main_area" class="ptb-25">
          <div class="container">
            <div v-if="enabled" class="product-list-breadcrumb-section">
              <a class="back-link" onclick="history.back()">Retour</a>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="product-list-breadcrumb"
              ></b-breadcrumb>
            </div>
            <Tags
              :tagsSelected="tagsSelected"
              @remove-tag="removeTagSelected"
            />
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

            <div class="row">
              <div
                class="loading-spinner-sub-category"
                v-if="subCategoryLoading"
              >
                <!-- <span class="loading"></span> -->
                <Spinner></Spinner>
              </div>
              <div
                v-else
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

  methods: {
    pushTagsSelected(payload) {
      console.log("payload:", payload);
      if (this.tagsSelected.length < 1) {
        this.tagsSelected.push(payload.libelleSousFamille);
      } else {
        this.tagsSelected.indexOf(payload.libelleSousFamille) === -1
          ? this.tagsSelected.push(payload.libelleSousFamille)
          : null;
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
      console.log("fetchSubCategoryProduct payload:", payload);
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
              },
            }
          );

          this.productsGammes = productSearchBySubcategory.data.productsArray;
          this.subCategoryLoading = false;
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
              },
            }
          );
          this.subCategoryLoading = false;

          this.productsGammes = productSearchBySubcategory.data.productsArray;
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
          },
        });
        this.productsGammes = productsGammes.data.productsArray;
        this.subCategoryLoading = false;
      } catch (error) {
        console.log("error:", error);
      }
      try {
        const subCategory = await this.$axios.get(
          "/category/subCategory/" + this.$route.query.codefamille
        );
        this.subCategory = subCategory.data.subCategory;
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
        },
      });
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
};
</script>

<style scoped>
/* .product-box-1 {
  border: 5px solid red;
} */
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
