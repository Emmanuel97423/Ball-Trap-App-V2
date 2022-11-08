<template>
  <div class="container-left-categories-nav">
    <div class="content-left-categories-nav">
      <h4 class="title-left-filter">Filtres:</h4>
      <ul>
        <li v-for="menuItem in subCategory" :key="menuItem.id">
          <h4 @click="handleClickSubCategory(menuItem)">
            {{ menuItem.libelleSousFamille }}
          </h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftCategoriesNav",
  props: {
    subCategory: Array,
  },

  data() {
    return {
      menu: "",
    };
  },

  methods: {
    handleClickSubCategory(value) {
      this.$emit("handle-click-sub-category", value);
    },
  },

  // async fetch() {
  //   const fetchData = await this.$axios.get("/category/subCategory", {
  //     query: {
  //       codeFamille: this.$route.query.codeFamille,
  //     },
  //   });
  //   this.menu = fetchData.data.response.libelleSousFamille;
  // },

  // async mounted() {
  //   if (this.$route.query.codeFamille === null) {
  //     const fetchData = await this.$axios.get("/category/subCategory");

  //     this.menu = fetchData.data.response;
  //   } else {
  //     const fetchData = await this.$axios.get("/category/subCategory", {
  //       query: {
  //         codeFamille: this.$route.query.codeFamille,
  //       },
  //     });

  //     this.menu = fetchData.data.response;
  //   }
  // },
};
</script>

<style >
.title-left-filter {
  margin: 0 0 20px 0;
  text-decoration: underline;
}

.container-left-categories-nav {
  padding: 30px;

  /* min-width: 245px; */

  width: 200px;
  margin: 10px auto;
}

.container-left-categories-nav ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.container-left-categories-nav li {
  margin: 0 0 10px 0;
  cursor: pointer;
}

.container-left-categories-nav h4 {
  font-size: 16px;
}

.container-left-categories-nav h4:hover {
  text-decoration: underline;
}
</style>