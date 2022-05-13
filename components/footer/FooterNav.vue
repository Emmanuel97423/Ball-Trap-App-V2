<template>
  <div class="box">
    <div><h3>Exo-Trap. Pullement votre.</h3></div>

    <div class="list">
      <ul v-for="item in menu1" :key="item.id">
        <li class="title__bold">
          <a href="#">{{ item.title }}</a>
        </li>
        <li class="list__item" v-for="itemNav in item.item" :key="itemNav.id">
          <a href="#">{{ itemNav }}</a>
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
          title: "Accessoires",
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
    };
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
  /* font-size: 12px; */
}
.box h3 {
  color: #fff;
  font-size: 32px;
}
.list {
  display: flex;
  justify-content: space-between;
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
    flex-direction: column;
  }
}
</style>