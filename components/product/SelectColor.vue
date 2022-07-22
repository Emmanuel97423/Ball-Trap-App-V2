<template>
  <div class="variable-single-item">
    <span>Couleur</span>

    <div class="product-image-variants">
      <div
        v-for="(product, index) in colorLibelle"
        :key="index"
        class="image-variants"
      >
        <input
          type="radio"
          :id="`${product.replace(' ', '-').toLowerCase()}`"
          name="color"
          :value="`${product.replace(' ', '-').toLowerCase()}`"
        />
        <label :for="`${product.replace(' ', '-').toLowerCase()}`">{{
          product.toLowerCase().charAt(0).toUpperCase() +
          product.toLowerCase().slice(1)
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
    colors: Array,
    colorLibelle: Array,
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
.image-variants {
  margin: 0 5px 0 0;
}
</style>