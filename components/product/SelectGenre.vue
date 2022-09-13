<template>
  <div class="container-select-genre">
    <!-- {{ genre }} -->
    <!-- <div
      v-for="(value, index) in genreArray"
      :key="index"
      class="box-genre"
      :class="{ 'select-genre-active': activeOptions.indexOf(index) > -1 }"
      @click="handleCLick(index, value)"
    >
      <div>{{ value.gammeValue }}</div>
    </div> -->
    <div v-for="(value, index) in genreArray" :key="index">
      <label
        :for="value.gammeValue"
        class="box-genre"
        :class="{ 'select-genre-active': activeOptions.indexOf(index) > -1 }"
        >{{ value.gammeValue }}
        <input
          @click="handleCLick(index, value)"
          :id="value.gammeValue"
          type="radio"
          :value="value.gammeValue"
          name="genre"
        />
      </label>

      <!-- <div>{{ value }}</div> -->
    </div>
    <div><Spinner v-if="isLoading"></Spinner></div>
  </div>
</template>

<script>
export default {
  name: "SelectGenre",
  props: {
    // productVariants: Array,
    genre: Array,
    gammeObject: Array,
  },
  data() {
    return {
      selected: null,

      options: [
        // { value: "XS", text: "XS" },
        // { value: "S", text: "S" },
        // { value: "M", text: "M" },
        // { value: "L", text: "L" },
        // { value: "XL", text: "XL" },
        // { value: "XXL", text: "XXL" },
        // { value: { C: "3PO" }, text: "This is an option with object value" },
        // { value: "d", text: "This one is disabled", disabled: true },
      ],
      currentIndex: -1,
      isActive: false,
      isLoading: false,
      activeOptions: [],
    };
  },
  methods: {
    handleCLick(index, value) {
      let pos = this.activeOptions.indexOf(index);
      this.$emit("genre-click-event", { genre: value });

      // console.log("pos:", pos);
      // pos === -1
      //   ? this.activeOptions.push(index)
      //   : this.activeOptions.splice(pos, 1);
      if (pos === -1) {
        this.activeOptions.splice(pos, 1);
        this.activeOptions.push(index);
        // this.activeOptions.splice(pos, -1);
      } else {
        this.activeOptions.splice(pos, 1);
        // this.activeOptions.pop();
      }
      // console.log("this.activeOptions:", this.activeOptions);
    },
    // changeColor() {
    //   this.isLoading = !this.isLoading;
    // },
    // sizeClick(value) {
    //   this.$emit("size-click-event", { size: value });
    // },
  },
  computed: {
    genreArray() {
      let array = [];
      this.genre.filter((genreObject) => {
        let i = array.findIndex(
          (genre) => genreObject.gammeCode == genre.gammeCode
        );
        if (i <= -1) {
          array.push(genreObject);
        } else {
          return null;
        }
      });
      return array;
    },
  },
  created() {
    this.isLoading = true;
  },
  async mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

    // filterGamme(this.gammeArray, sizeValue.gammesValue);
  },
};
</script>

<style >
.container-select-genre {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 15px 0;
}
.box-genre {
  width: auto;
  height: 10px;
  border: 1px solid black;
  padding: 18px;
  margin: 0 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.box-genre label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.box-genre input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.box-genre:hover {
  background-color: black;
  color: #fff;
}
.select-genre-active {
  background-color: black;
  color: #fff;
}
.is-black {
  background-color: black;
  color: #fff;
}
.is-grey {
  background-color: rgb(204, 204, 204);
}
</style>