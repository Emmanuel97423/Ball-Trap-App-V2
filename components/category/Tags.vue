<template>
  <ul v-if="tagsSelected.length > 0" class="list-inline d-inline-block mb-2 tags_list">
    <li v-for="tag in tagsSelected" :key="tag" class=" list-inline-item">
      <b-form-tag @remove="removeTag(tag)" :title="tag" variant="info" class="category-tags theme-btn-one  btn_sm">{{
          tag
      }}</b-form-tag>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Tags",
  props: {
    tagsSelected: Array,
  },

  data() {
    return {
      //   tagsSelected: ["serviette", "casque", "blablablablabla"],
    };
  },
  methods: {
    removeTag(tag) {
      this.$emit("remove-tag", tag);
    },
  },
};
</script>

<style >
.category-tags {
  background-color: rgb(255, 255, 255);
  border: 1px solid #000;
  color: #000;
}
</style>