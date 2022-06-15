<template>
  <div class="box">
    <h2>CALL TO ACTION #home</h2>
    <nuxt-link class="bg-black justify-center" to="/">
      J'en profites
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "CallToActionHomePage",
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 370px;
  background-image: url("~/assets/img/call-to-actions/promo.jpg");
  background-position: 50% 60%;
  object-fit: cover;
  margin: 15px 0 0 0;
}
.box h2 {
  background-color: #fff;
  padding: 10px 20px;
  margin: 50px 0 0 0;
}
.box a {
  margin: 20px 0 0 0;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>