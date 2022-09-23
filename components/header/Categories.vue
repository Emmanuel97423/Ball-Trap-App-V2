<template>
  <div class="container-cat-nav">
    <div class="d-flex justify-content-center nav-categories">
      <ul>
        <!-- <div> -->
        <!-- <b-dropdown
        v-for="navItem in menu"
        :key="navItem.id"
        id="dropdown-left"
        :text="navItem.title"
        class="m-2 dropdown-btn btn-categories"
        no-caret="true"
        variant="light"
      >
        <b-dropdown-item
          v-for="subMenu in navItem.subMenu"
          class="overflow-visible"
          :key="subMenu.id"
          href="#"
          >{{ subMenu.title }}</b-dropdown-item
        >
      </b-dropdown> -->
        <!-- </div> -->

        <div class="nav-links" v-for="navItem in menu" :key="navItem._id">
          <!-- <a href="#">{{ navItem.libelleFamille }}</a> -->
          <nuxt-link
            :to="{
              path:
                '/shop/category/' +
                navItem.libelleFamille.toLowerCase().replaceAll(' ', '-'),
              query: {
                codefamille: navItem.codeFamille,
              },
            }"
          >
            {{ navItem.libelleFamille }}</nuxt-link
          >
          <!-- <ul class="dropdown_menu">
            <div v-for="subMenu in navItem.subMenu" :key="subMenu.id">
              <a> {{ subMenu.title }}</a>
            </div>
          </ul> -->
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavCategories",
  data() {
    return {};
  },

  computed: {
    menu() {
      return this.$store.state.nav.category.response;
    },
  },
};
</script>

<style scoped>
/* .btn-categories {
  
  overflow-x: auto;
} */
.container-cat-nav {
  background-color: #e9e8e2;
}
.nav-categories ul {
  height: 48px;
  margin: 0;
  background-color: #e9e8e2;
  display: flex;
  justify-content: center;
  overflow-x: auto;
}
/* .dropdown-btn {
  background-color: #fff;
} */
.nav-links {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 48px;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.nav-links a {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-transform: capitalize;
  color: #0f0f0f;
  margin: 0 16px;
  font-weight: 600;
  white-space: nowrap;
}
/* .dropdown_menu {
  display: flex;
  flex-direction: column;
  overflow: visible;
} */

@media only screen and (max-width: 425px) {
  .nav-categories ul {
    justify-content: flex-start;
  }
}
</style>