<template>
  <div class="nav-categories">
    <ul>
      <div class="nav-links">
        <a v-for="navItem in menu" :key="navItem.id" :href="navItem.href">{{
          navItem.title
        }}</a>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavCategories",
  data() {
    return {
      menu: [
        {
          href: "/shop/shop-2",
          title: "Vêtements",
        },
        {
          href: "/",
          title: "Armes Cat. C.",
        },
        {
          href: "/",
          title: "Armes Cat. D.",
        },
        {
          href: "/",
          title: "Munitions",
        },
        {
          href: "/",
          title: "Accessoires",
        },
      ],
    };
  },
};
</script>

<style scoped>
.nav-categories ul {
  height: 48px;
  margin: 0;
  background-color: #e9e8e2;
  display: flex;
  justify-content: center;
  overflow-x: auto;
}
.nav-links {
  display: flex;
  width: 1296px;
  height: 48px;
  -webkit-box-pack: center;
  justify-content: center;
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

@media only screen and (max-width: 425px) {
  .nav-categories ul {
    justify-content: flex-start;
  }
}
</style>