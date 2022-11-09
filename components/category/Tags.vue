<template>
  <ul v-if="tagsSelected.length > 0" class=" d-inline-block  tags_list">
    <li v-for="tag in tagsSelected" :key="tag" class=" list-inline-item">
      <b-form-tag @remove="removeTag(tag)" :title="tag" class="tags_item theme-btn-one  ">{{
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

<style  >
.tags_item {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: rgb(255, 255, 255);
  border: 1px solid #000;
  color: #000;
  padding: 0.25em 0.4em;
  margin: 0.25em 0.4em;
}

@media only screen and (max-width: 425px) {}
</style>