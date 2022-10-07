<template>
  <section class="pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
          <p>
            Un e-mail a été envoyé. Il contient un lien sur lequel vous devez
            cliquer pour réinitialiser votre mot de passe. <br /><br />Remarque
            : Vous ne pouvez demander un nouveau mot de passe qu'une seule fois
            dans l'heure. Si vous ne recevez pas d'e-mail, vérifiez votre
            dossier spam ou réessayez.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "headless-layout",

  // mounted() {
  //   setTimeout(() => {
  //     this.$router.push("/login");
  //   }, 8000);
  // },
};
</script>

<style>

</style>