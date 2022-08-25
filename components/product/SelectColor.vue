<template>
  <div class="variable-single-item">
    <span>Couleur</span>
    <Spinner v-if="loading == true"></Spinner>
    <!-- {{ colorLibelle }} -->
    <div v-else class="product-image-variants">
      <div
        v-for="(libelle, index) in colorArray"
        :key="index"
        class="image-variants"
        @click="handleCLick(libelle.gammeCode)"
      >
        <input
          required
          type="radio"
          :id="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`"
          name="color"
          :value="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`"
        />
        <label :for="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`">{{
          libelle.gammeValue.toLowerCase().charAt(0).toUpperCase() +
          libelle.gammeValue.toLowerCase().slice(1)
        }}</label>

        <!-- <img :src="product" @click="selectColor(index)" /> -->
      </div>
    </div>

    <!-- <div class="product-variable-color">
                    <label for="modal-product-color-red1">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-red1"
                        class="color-select"
                        type="radio"
                        checked=""
                      />
                      <span class="product-color-red"></span>
                    </label>
                    <label for="modal-product-color-tomato2">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-tomato2"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-tomato"></span>
                    </label>
                    <label for="modal-product-color-green3">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-green3"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-green"></span>
                    </label>
                    <label for="modal-product-color-light-green4">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-light-green4"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-light-green"></span>
                    </label>
                    <label for="modal-product-color-blue5">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-blue5"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-blue"></span>
                    </label>
                    <label for="modal-product-color-light-blue6">
                      <input
                        name="modal-product-color"
                        id="modal-product-color-light-blue6"
                        class="color-select"
                        type="radio"
                      />
                      <span class="product-color-light-blue"></span>
                    </label>
                  </div> -->
  </div>
</template>

<script>
export default {
  name: "SelectColor",
  props: {
    // colors: Array,
    colorLibelle: Array,
  },
  data() {
    return {
      colors: "",
      colorUniqueArray: [],
      loading: true,
    };
  },

  methods: {
    handleCLick(value) {
      this.$emit("color-click-event", { color: value, isFocused: true });
    },
  },
  computed: {
    colorArray() {
      let array = [];
      this.colorLibelle.filter((colorObject) => {
        let i = array.findIndex(
          (color) => colorObject.gammeCode == color.gammeCode
        );
        if (i <= -1) {
          array.push(colorObject);
        } else {
          return null;
        }
      });
      return array;
    },
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  },
};
</script>

<style>
.product-image-variants {
  width: 100%;
  display: flex;

  /* flex-direction: row; */
}
.product-image-variants img {
  width: 100%;
  cursor: pointer;
  border: 1px solid black;
}
.product-image-variants label {
  font-size: 12px;
}
.image-variants {
  margin: 0 5px 0 0;
}
input[type="radio"] {
  vertical-align: middle;
}
</style>