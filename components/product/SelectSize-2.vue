<template>
  <div class="container-select-size">
    <div
      v-for="(value, index) in size"
      :key="index"
      class="box-size"
      :class="{ 'select-size-active': activeOptions.indexOf(index) > -1 }"
      @click="handleCLick(index)"
    >
      <div @click="sizeClick(value)">{{ value }}</div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "SelectSize2",
  props: {
    // productVariants: Array,
    size: Array,
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
      isLoading: true,
      activeOptions: [],
    };
  },
  methods: {
    handleCLick(index) {
      let pos = this.activeOptions.indexOf(index);
      console.log("pos:", pos);
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
      console.log("this.activeOptions:", this.activeOptions);
    },
    changeColor() {
      this.isLoading = !this.isLoading;
    },
    sizeClick(value) {
      this.$emit("size-click-event", { size: value });
    },
  },
};
</script>

<style>
.container-select-size {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.box-size {
  width: 10px;
  height: 10px;
  border: 1px solid black;
  padding: 18px;
  margin: 0 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.box-size:hover {
  background-color: black;
  color: #fff;
}
.select-size-active {
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