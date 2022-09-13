<template>
  <div class="variable-single-item">
    <span>Latéralité</span>

    <div class="laterality-product-image-variants">
      <div
        v-for="(libelle, index) in lateralityArray"
        :key="index"
        class="laterality-image-variants"
      >
        <b-tooltip :target="`${libelle.gammeCode.toLowerCase()}`">{{
          libelle.gammeValue.toLowerCase().charAt(0).toUpperCase() +
          libelle.gammeValue.toLowerCase().slice(1)
        }}</b-tooltip>
        <label
          :id="`${libelle.gammeCode.toLowerCase()}`"
          :for="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`"
          :class="{
            'select-laterality-active': activeOptions.indexOf(index) > -1,
          }"
        >
          <!-- {{
            libelle.gammeValue.toLowerCase().charAt(0).toUpperCase() +
            libelle.gammeValue.toLowerCase().slice(1)
          }} -->
          <input
            type="radio"
            :id="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`"
            name="laterality"
            :value="`${libelle.gammeValue.replace(' ', '-').toLowerCase()}`"
            @click="lateralityHandleClick(index, libelle.gammeCode)"
          />
          <img
            v-if="libelle.gammeValue.toLowerCase() === 'droitier'"
            :src="require('@/assets/img/product-image/SX_n-100x100.jpg')"
          />
          <img
            v-if="libelle.gammeValue.toLowerCase() === 'gaucher'"
            :src="require('@/assets/img/product-image/DX_n-100x100.jpg')"
          />
        </label>

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
  name: "SelectLaterality",
  props: {
    laterality: Array,
    lateralityLibelle: Array,
  },

  data() {
    return {
      activeOptions: [],
    };
  },

  methods: {
    lateralityHandleClick(index, value) {
      console.log("value:", value);
      this.$emit("laterality-click-event", {
        laterality: value,
        isFocused: true,
      });
      let pos = this.activeOptions.indexOf(index);
      if (pos === -1) {
        this.activeOptions.splice(pos, 1);
        this.activeOptions.push(index);
        // this.activeOptions.splice(pos, -1);
      } else {
        this.activeOptions.splice(pos, 1);
        // this.activeOptions.pop();
      }
    },
  },
  computed: {
    lateralityArray() {
      let array = [];
      this.laterality.filter((lateralityObject) => {
        let i = array.findIndex(
          (laterality) => lateralityObject.gammeCode == laterality.gammeCode
        );
        if (i <= -1) {
          array.push(lateralityObject);
        } else {
          return null;
        }
      });
      return array;
    },
  },
  mounted() {
    // this.laterality;
    // console.log(
    //   "🚀 ~ file: SelectLaterality.vue ~ line 102 ~ mounted ~ his.laterality",
    //   this.laterality
    // );
  },
};
</script>

<style>
.laterality-product-image-variants {
  width: 100%;
  display: flex;

  /* flex-direction: row; */
}
.laterality-product-image-variants img {
  width: 40px;
  /* cursor: pointer; */
  border: 1px solid black;
}
.laterality-product-image-variants label {
  display: block;
  position: relative;

  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.laterality-product-image-variants input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  padding: 10px;
}
/* .laterality-product-image-variants img:hover {
  border: 3px solid red;
} */
.laterality-image-variants {
  margin: 0 5px 0 0;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
.select-laterality-active {
  border: 5px solid grey;
}
</style>