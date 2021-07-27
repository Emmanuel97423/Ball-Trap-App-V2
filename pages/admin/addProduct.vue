<template>
  <div class="box">
    <form id="form" name="form" action="">
      <div class="box__input">
        <label for="ean">Ean code</label>
        <input v-model="ean" type="number" id="ean" name="ean" />
      </div>
      <div class="box__input">
        <label for="name">Nom</label>
        <input v-model="name" type="text" id="name" name="name" />
      </div>
      <div class="box__input">
        <label for="category">Catégorie</label>
        <input v-model="category" type="text" id="category" name="category" />
      </div>
      <div class="box_input">
        <label for="manufacturer">Marque</label>
        <input
          v-model="manufacturer"
          type="text"
          id="manufacturer"
          name="manufacturer"
        />
      </div>
      <div class="box__input">
        <label for="short-description">Description courte</label>
        <input
          v_model="shortDescription"
          type="text"
          id="short-description"
          name="short-description"
        />
      </div>
      <div class="box__input">
        <label for="description">Description</label>
        <input
          v-model="description"
          type="text-area"
          id="description"
          name="description"
        />
      </div>
      <div class="box__input file">
        <v-file-input
          label="Image1"
          multiple
          v-model="files"
          @change="getFileObject()"
        ></v-file-input>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  width: 100%;
  height: auto;
  display: flex;
}
</style>
