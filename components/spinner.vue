<template>
  <div>
    <div class="spinner__box">
      <b-spinner class="spinner" label="Loading..."></b-spinner>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style scoped>
.spinner__box {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>