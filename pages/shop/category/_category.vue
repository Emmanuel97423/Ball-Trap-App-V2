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

                <div class="breadcrumb__item-breadcrumb">
                  <a class="back-link" onclick="history.back()">Retour</a>
                  <b-breadcrumb :items="breadcrumbItems" class="product-list-breadcrumb"></b-breadcrumb>
                </div>

                <!-- Start sort by price -->
                <div class="breadcrumb__item-filter">
                  <FilterCategory class="breadcrumb__item-sort" @handleClickFilter=handleClickFilter />
                  <SortByPrice class="breadcrumb__item-sort" @sortByPrice=sortByPrice />
                </div>
                <!-- End sort by price -->
              </div>
              <div v-if="this.tagsSelected.length > 0" class="tags_section">
                <!-- Start tags selected -->
                <button class="theme-btn-one btn-black-overlay" @click="handleRemoveAllTags">Effacer tous les
                  filtres</button>
                <Tags :tagsSelected="tagsSelected" @remove-tag="removeTagSelected" />
              </div>
              <!-- End tags selected -->



              <h4 class="category-empty" v-if="productsGammes.length < 1">
                Dans le lanceur...
              </h4>

              <div v-else class="row products_list">

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
    <!-- Start filter modal -->
    <b-modal v-model="filterModal" id="modal-filter" hide-footer hide-header dialog-class="modal_dialog-filter">

      <LeftCategoriesNav :subCategory="subCategory" @handle-click-sub-category="fetchSubCategoryProduct" />

    </b-modal>
    <!-- End filter modal -->
  </div>
</template>

<script>
import ProductBox1 from "~/components/product-box/ProductBox1";
import InstagramArea from "~/components/instagram/InstagramArea";
import LeftCategoriesNav from "~/components/navigation/LeftCategoriesNav";
import Tags from "@/components/category/Tags";
import SortByPrice from "@/components/filter/SortByPrice";
import FilterCategory from "@/components/filter/FilterCategory"

// Start sort function
function ascendingSort(a, b) {
  if (a.pvTtc < b.pvTtc) {
    return -1;
  }
  if (a.pvTtc > b.pvTtc) {
    return 1;
  }
  return 0;
};
function descendingSort(a, b) {
  if (a.pvTtc < b.pvTtc) {
    return 1;
  }
  if (a.pvTtc > b.pvTtc) {
    return -1;
  }
  return 0;
}
// End sort function

export default {
  name: "shop-three-grid",
  middleware: "auth",
  layout: "shop",

  components: {
    ProductBox1,
    InstagramArea,
    LeftCategoriesNav,
    Tags,
    SortByPrice,
    FilterCategory
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
      },
      // End load more products

      // Start sort by price
      ascendingSort: true,
      // End sort by price
      //Start mobile filter modal
      filterModal: false,
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
    ascendingSort() {
      if (!this.ascendingSort) {
        this.productsGammes.sort(descendingSort)
      } else {
        this.productsGammes.sort(ascendingSort)
      }

    },


  },
  // End a corrigé
  methods: {
    // Start load more products
    async handleLoadMoreProduct() {

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
    // Start sort by price
    sortByPrice(payload) {
      this.ascendingSort = payload.ascendingSort

    },
    // End sort by price

    // Start launch mobile filter modal
    handleClickFilter() {
      this.filterModal = true
    },
    // End launch mobile filter modal

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
    handleRemoveAllTags() {
      this.tagsSelected = [];
      this.fetchData()
    },

    async fetchSubCategoryProduct(payload) {
      this.loadMoreOptions.payload = payload;
      this.subCategoryLoading = true;
      this.filterModal = false;

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
          // Start sort product fetch result
          if (!this.ascendingSort) {
            this.productsGammes = productSearchBySubcategory.data.productsArray.sort(descendingSort);

          } else {
            this.productsGammes = productSearchBySubcategory.data.productsArray.sort(ascendingSort)
          }
          // End sort product fetch result
          this.loadMoreOptions.totalProducts = productSearchBySubcategory.data.totalProducts
          this.loadMoreOptions.productByPage = productSearchBySubcategory.data.productByPage;

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
                start: this.loadMoreOptions.start,
                size: this.loadMoreOptions.size
              },
            }
          );
          // Start sort product fetch result
          if (!this.ascendingSort) {
            this.productsGammes = productSearchBySubcategory.data.productsArray.sort(descendingSort);

          } else {
            this.productsGammes = productSearchBySubcategory.data.productsArray.sort(ascendingSort)
          }
          // End sort product fetch result
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
        // Start sort product fetch result
        if (!this.ascendingSort) {
          this.productsGammes = productsGammes.data.productsArray.sort(descendingSort);

        } else {
          this.productsGammes = productsGammes.data.productsArray.sort(ascendingSort)
        }
        // End sort product fetch result
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


      this.productsGammes = productsGammes.data.productsArray.sort(ascendingSort);
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
  padding: 50px 0 50px 0;

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

/* Start product list */
.products_list {
  padding: 25px 0 0 0;
}

/* End product list */

.back-link:first-child {
  /* flex: 10%; */
  /* margin: 0 0 40px 0; */
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
}



/* Start breadcrumb section */
.product-list-breadcrumb-section {

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
}

.breadcrumb__item-breadcrumb {
  flex: 60%;
  display: flex;
  align-items: center;
}


.product-list-breadcrumb-section ol,
ul,
dl {
  margin: 0 0 0 20px;
  margin-bottom: 0
}

.product-list-breadcrumb {
  flex: 80%;
  background-color: transparent;
}



/* End breadcrumb section */

/* Start filter section */
.breadcrumb__item-sort {
  flex: 30%;
  height: 42px;
  padding: 0 15px;

}

.breadcrumb__item-filter {
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.breadcrumb__item-sort:nth-child(2n+1) {
  margin: 0 10px 0 0;
}

/* End filter section */

/* Start Tags section */
.tags_section {
  padding: 25px 0 0 0;
  display: flex;
  align-items: center;

}

.tags_section button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
}

/* End Tags section */

/* Start modal filter section */
/* #modal-filter {
  width: 100%;
}

.modal_dialog-filter {
  width: 100%;
  border-radius: none;

} */

/* End modal filter section */

/* Responsive */
@media only screen and (max-width: 425px) {

  .breadcrumb__item-sort {
    flex: 50%;
  }

  /* tablettes*/
  .breadcrumb__item-breadcrumb {
    display: none;
  }

  .product-list-breadcrumb-section ol,
  ul,
  dl {
    margin: 0;
    /* padding: 25px 0 0 0; */
  }

  .tags_section {

    flex-direction: column;

  }
}

@media only screen and (max-width: 768px) {
  .breadcrumb__item-sort {
    flex: 30%;
  }

  /* tablettes et ordinateurs */
  .left-nav-categories {
    display: none;
  }
}

@media only screen and (min-width: 1024px) {
  .breadcrumb__item-sort {
    flex: 10%;
  }

  .breadcrumb__item-filter {
    flex: 10%;

  }
}
</style>
