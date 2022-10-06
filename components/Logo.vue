<template>
  <div class="login-form-logo">
    <img :src="require('@/assets/img/logo-exo-trap.png')" />
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style>
.login-form-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>