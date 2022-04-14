<template>
  <div class="pt-15">
    <b-form-select v-model="selected" :options="options"></b-form-select>
  </div>
</template>

<script>
export default {
  name: "SelectSize",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Choisissez une taille" },
        { value: "XS", text: "XS" },
        { value: "S", text: "S" },
        { value: "S", text: "M" },
        { value: "S", text: "L" },
        { value: "S", text: "XL" },
        { value: "XXL", text: "XXL" },
        // { value: { C: "3PO" }, text: "This is an option with object value" },
        // { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
};
</script>

<style>
</style>