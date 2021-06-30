<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
        <div class="container ">
            <div class="row">
                <div class="col-lg-12">
                    <div class="common_banner_text">
                        <h2>{{this.title}}</h2>
                        <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Register-Area -->
    <section id="login_area" class="ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                    <div class="account_form">
                        <h3>Register</h3>
                        <form>
                            <div class="default-form-box">
                                <label>Username <span>*</span></label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="default-form-box">
                                <label>Email <span>*</span></label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="default-form-box">
                                <label>Passwords <span>*</span></label>
                                <input type="password" class="form-control">
                            </div>
                            <div class="login_submit">
                                <button class="theme-btn-one btn-black-overlay btn_md" type="button">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>

export default {
    name: 'Register',
    data() {
        return {
            
            title: 'Register',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Register'
                }
            ],

        }
    },

    // Page head() Title, description for SEO 
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Register page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>

<style>

</style>