<template>
  <div class="container-left-categories-nav">
    <div class="content-left-categories-nav">
      <ul v-for="menuItem in menu" :key="menuItem.id">
        <li>
          <h3>{{ menuItem.text }}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftCategoriesNav",
  data() {
    return {
      menu: [
        {
          id: 1,
          text: "Vêtements",
          to: "/shop/shop-2",
        },
        {
          id: 2,
          text: "Armes Cat. C.",
          to: "/shop/shop-2",
        },
        {
          id: 3,
          text: "Armes Cat. D",
          to: "/shop/shop-2",
        },
        {
          id: 4,
          text: "Munitions",
          to: "/shop/shop-2",
        },
        {
          id: 5,
          text: "Accessoires",
          to: "/shop/shop-2",
        },
      ],
    };
  },
};
</script>

<style >
.container-left-categories-nav {
  padding: 30px;
  min-width: 245px;
}
.container-left-categories-nav li {
  margin: 0 0 10px 0;
  cursor: pointer;
}
</style>