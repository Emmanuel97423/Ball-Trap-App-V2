<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>Page introuvable</h2>
              <!-- <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="error_area" class="ptb-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div
              v-if="error.statusCode === 404"
              class="erorr_wrapper text-center mt-4 mb-4"
            >
              <h1>404</h1>
              <h3 class="my-3 headline">
                Aïe! La page que vous recherchez est introuvable ou n'est plus
                disponible.
              </h3>
              <!-- <form>
                <div class="input-group">
                  <input type="text" class="form-control" />
                  <button><i class="fas fa-search"></i></button>
                </div>
              </form> -->
              <div>
                <NuxtLink
                  class="error-link theme-btn-one btn-black-overlay btn_md mt-0"
                  to="/"
                  >Retour à la boutique</NuxtLink
                >
              </div>
            </div>
            <div
              v-if="error.statusCode === 403"
              class="erorr_wrapper text-center mt-4 mb-4"
            >
              <h1>403</h1>
              <h3 class="my-3 headline">
                Désolé, vous n’êtes pas autorisé à accéder à cette page
              </h3>
              <div>
                <NuxtLink
                  class="error-link theme-btn-one btn-black-overlay btn_md mt-0"
                  to="/"
                  >Retour à la boutique</NuxtLink
                >
              </div>
            </div>
            <div
              v-if="error.statusCode === 500"
              class="erorr_wrapper text-center mt-4 mb-4"
            >
              <h1>500</h1>
              <h3 class="my-3 headline">
                Sorry, une erreur s'est produite...Réessayez plus tard...
              </h3>
              <div>
                <NuxtLink
                  class="error-link theme-btn-one btn-black-overlay btn_md mt-0"
                  to="/"
                  >Retour à la boutique</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "error",
  props: ["error"],

  data() {
    return {
      enabled: true,
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Error",
        },
      ],
    };
  },
};
</script>
