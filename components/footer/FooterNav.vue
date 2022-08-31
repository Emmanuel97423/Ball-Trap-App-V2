<template>
  <div class="box">
    <div><h3>Exo-Trap. Pullement votre.</h3></div>

    <div class="list">
      <ul v-for="item in menu1" :key="item.id">
        <li class="title__bold">
          <!-- <a href="#">{{ item.title }}</a> -->
          <nuxt-link
            :to="{
              path: '/shop/category/' + item.title,
              query: {
                codefamille: item.codeFamille,
              },
            }"
            >{{ item.title }}</nuxt-link
          >
        </li>

        <li class="list__item" v-for="itemNav in item.item" :key="itemNav.id">
          <!-- <a href="#">{{ itemNav.libelle }}</a> -->
          <nuxt-link
            :to="{
              path: '/product/' + itemNav._id,
              query: {
                id: itemNav._id,
                isAProductGamme: itemNav.isAProductGamme,
                libelle: itemNav.libelle,
                libelleFamille: itemNav.libelleFamille,
                codeFamille: itemNav.codeFamille,
                codeArticleGamme: itemNav.codeArticleGamme,
              },
            }"
            >{{ itemNav.libelle }}</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  data() {
    return {
      menu1: [
        {
          title: "Vêtements",
          codeFamille: "FAR00001",
          item: {
            // 1: "Castellani",
            // 2: "Castellani",
            // 3: "Castellani",
            // 4: "Castellani",
            // 5: "Castellani",
            // 6: "Castellani",
            // 7: "Castellani",
          },
        },
        {
          title: "Accessoires",
          codeFamille: "FAR00002",
          item: {
            // 1: "Castellani",
            // 2: "Castellani",
            // 3: "Castellani",
            // 4: "Castellani",
            // 5: "Castellani",
            // 6: "Castellani",
            // 7: "Castellani",
          },
        },
        {
          title: "Arme de catégorie C.",
          item: {
            1: "Castellani",
            2: "Castellani",
            3: "Castellani",
            4: "Castellani",
            5: "Castellani",
            6: "Castellani",
            7: "Castellani",
          },
        },
        {
          title: "Arme de catégorie D.",
          item: {
            1: "Castellani",
            2: "Castellani",
            3: "Castellani",
            4: "Castellani",
            5: "Castellani",
            6: "Castellani",
            7: "Castellani",
          },
        },
        {
          title: "Munitions",
          item: {
            1: "Castellani",
            2: "Castellani",
            3: "Castellani",
            4: "Castellani",
            5: "Castellani",
            6: "Castellani",
            7: "Castellani",
          },
        },
      ],
      randomProductsRangeOptions: {
        max: "",
        min: "",
      },
    };
  },
  methods: {
    randomProductsRange() {},
  },
  async fetch() {
    this.menu1.forEach(async (menuItem, index) => {
      if (menuItem.codeFamille) {
        console.log("index:", this.menu1[index]);

        const products = await this.$axios.get("/search/filter", {
          params: {
            search: menuItem.codeFamille,
          },
        });
        this.menu1[index].item = products.data.productsArray.slice(0, 7);
      }
    });
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: auto;
  background-color: #242424;
  padding: 40px 30px;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.box ul {
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.box li {
  text-align: left;
  margin: 2px 0;
  font-size: 12px;
}
.box h3 {
  color: #fff;
  font-size: 32px;
  text-transform: uppercase;
}

.list {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
.title__bold {
  font-weight: bold;
  font-size: 16px;
}
.list__item {
  font-weight: 300;
  font-size: 14px;
}

@media only screen and (max-width: 768px) {
  .list {
    height: auto;
    /* flex-direction: column; */
  }
  .list ul {
    margin: 180px 0 0 0;
  }
}
@media only screen and (max-width: 425px) {
  .list ul {
    margin: 180px 50px 0 0;
  }
}
</style>