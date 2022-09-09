<template>
  <div class="variable-single-item">
    <!-- {{ gammeObject }} -->
    <!-- <div
      v-for="(value, index) in size"
      :key="index"
      class="box-size"
      :class="{ 'select-size-active': activeOptions.indexOf(index) > -1 }"
      @click="handleCLick(index, value)"
    >
      <div>{{ value }}</div>
    </div> -->
    <span>Taille(s)</span>
    <div class="product-image-variants">
      <Spinner v-if="isLoadingSize"></Spinner>

      <div v-else v-for="(value, index) in size" :key="index">
        <label
          :for="value"
          class="box-size"
          :class="{ 'select-size-active': activeOptions.indexOf(index) > -1 }"
          >{{ value }}
          <input
            @click="handleCLick(index, value)"
            :id="value"
            type="radio"
            :value="value"
            name="size"
          />
        </label>

        <!-- <div>{{ value }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectSize2",
  props: {
    // productVariants: Array,
    size: Array,
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
      isLoadingSize: false,
      activeOptions: [],
      gammeArray: [],
      gammes: [],
      gammesValueArray: [],
      gammesValue: [],
      fetchGamme: "",
      res: [],
    };
  },
  methods: {
    handleCLick(index, value) {
      let pos = this.activeOptions.indexOf(index);
      this.$emit("size-click-event", { size: value });

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
    changeColor() {
      this.isLoading = !this.isLoading;
    },
    sizeClick(value) {
      this.$emit("size-click-event", { size: value });
    },
  },
  created() {
    this.isLoadingSize = true;
  },
  mounted() {
    setTimeout(() => {
      this.isLoadingSize = false;
    }, 3000);

    // filterGamme(this.gammeArray, sizeValue.gammesValue);
  },
};
</script>

<style >
.container-select-size {
  display: flex;
  flex-direction: column;
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
.box-size label {
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
.box-size input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
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