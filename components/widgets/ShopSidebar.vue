<template>
  <div class="col-lg-3">
    <div class="shop_sidebar_wrapper">
      <div class="shop_Search">
        <form>
          <input type="text" class="form-control" placeholder="Rechercher..." />
          <button type="button">
            <img :src="require('@/assets/img/svg/search.svg')" alt="img" />
          </button>
        </form>
      </div>
      <div class="shop_sidebar_boxed">
        <h4>Catégories</h4>
        <form>
          <label class="custom_boxed"
            >Femmes
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Hommes
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Textiles
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Fusils
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Cartouches
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Accessoires
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Autres
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </form>
      </div>
      <div class="shop_sidebar_boxed">
        <h4>Prix</h4>
        <div class="price_filter">
          <div class="price_slider_amount">
            <VueSimpleRangeSlider
              style="width: 100%"
              :min="min"
              :max="max"
              :logarithmic="true"
              v-model="range"
            />
            <span>Prix: {{ range[0] }}€ - {{ range[1] }}€ </span>
          </div>
        </div>
      </div>
      <div class="shop_sidebar_boxed">
        <h4>Couleur</h4>
        <div class="product-variable-color">
          <label for="modal-product-color-red6">
            <input
              name="modal-product-color"
              id="modal-product-color-red6"
              class="color-select"
              type="radio"
              checked=""
            />
            <span class="product-color-red"></span>
          </label>
          <label for="modal-product-color-tomato1">
            <input
              name="modal-product-color"
              id="modal-product-color-tomato1"
              class="color-select"
              type="radio"
            />
            <span class="product-color-tomato"></span>
          </label>
          <label for="modal-product-color-green2">
            <input
              name="modal-product-color"
              id="modal-product-color-green2"
              class="color-select"
              type="radio"
            />
            <span class="product-color-green"></span>
          </label>
          <label for="modal-product-color-light-green3">
            <input
              name="modal-product-color"
              id="modal-product-color-light-green3"
              class="color-select"
              type="radio"
            />
            <span class="product-color-light-green"></span>
          </label>
          <label for="modal-product-color-blue4">
            <input
              name="modal-product-color"
              id="modal-product-color-blue4"
              class="color-select"
              type="radio"
            />
            <span class="product-color-blue"></span>
          </label>
          <label for="modal-product-color-light-blue5">
            <input
              name="modal-product-color"
              id="modal-product-color-light-blue5"
              class="color-select"
              type="radio"
            />
            <span class="product-color-light-blue"></span>
          </label>
        </div>
      </div>
      <div class="shop_sidebar_boxed">
        <h4>Taille</h4>
        <form id="sizes_input">
          <label class="custom_boxed"
            >XS
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >S
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >M
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >L
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >XL
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </form>
      </div>
      <div class="shop_sidebar_boxed">
        <h4>Marque</h4>
        <form>
          <label class="custom_boxed"
            >Castellani
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Adidas
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Calvin Klein
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Nike
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >Geox
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="custom_boxed"
            >River Island
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <div class="clear_button">
            <button type="reset" class="theme-btn-one btn_sm btn-black-overlay">
              Réinitialiser
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/dist/vueSimpleRangeSlider.css";

export default {
  name: "ShopSidebar",
  components: {
    VueSimpleRangeSlider,
  },
  data() {
    return {
      // Range Slider Data
      range: [5, 300],
      min: 1,
      max: 5000,
    };
  },
};
</script>
