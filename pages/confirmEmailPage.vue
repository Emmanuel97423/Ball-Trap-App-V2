<template>
  <div class="container">
    <div class="box">
      <b-icon class="check-icon" icon="mailbox2" variant="success"></b-icon>
      <h2>Confirmez votre e-mail</h2>
      <p>
        Veuillez consulter votre adresse e-mail avec lequelle vous vous êtes
        inscrit et cliquez sur le lien afin de confirmer votre compte
      </p>
      <p>Nous sommes ravi de vous compter parmis nous!</p>
      <nuxt-link to="/" class="theme-btn-one btn-black-overlay btn_sm btn"
        >Retour à la boutique</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
}
.box {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.check-icon {
  font-size: 100px;
  margin: 0 0 20px 0;
}
.box p {
  margin: 10px 0 0 0;
  text-align: center;
}
.box h2 {
  margin: 0 0 20px 0;
}
.btn {
  margin: 20px 0 0 0;
}
</style>