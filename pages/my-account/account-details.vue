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

        <!-- My Account-Area -->
        <section id="my-account_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-3 col-lg-3">
                        <!-- Nav tabs -->
                        <div class="dashboard_tab_button">
                            <b-navbar-nav>
                                <b-nav-item to="/my-account">Dashboard</b-nav-item>
                                <b-nav-item to="/my-account/orders">Orders</b-nav-item>
                                <b-nav-item to="/my-account/downloads">Downloads</b-nav-item>
                                <b-nav-item to="/my-account/addresses">Addresses</b-nav-item>
                                <b-nav-item to="/my-account/account-details">Account details</b-nav-item>
                                <b-nav-item to="/login">Logout</b-nav-item>
                            </b-navbar-nav>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-9">
                        <div class="dashboard_content">
                            <h3>Account details </h3>
                            <div class="login">
                                <div class="login_form_container">
                                    <div class="account_details_form">
                                        <form>
                                            <p>Already have an account? <nuxt-link to="/login">Log in instead!</nuxt-link></p>
                                            <div class="input-radio">
                                                <span class="custom-radio"><input type="radio" value="1" name="id_gender"> Mr.</span>
                                                <span class="custom-radio"><input type="radio" value="1" name="id_gender"> Mrs.</span>
                                            </div> <br>
                                            <div class="default-form-box mb-20">
                                                <label>First Name</label>
                                                <input type="text" name="first-name" class="form-control">
                                            </div>
                                            <div class="default-form-box mb-20">
                                                <label>Last Name</label>
                                                <input type="text" name="last-name" class="form-control">
                                            </div>
                                            <div class="default-form-box mb-20">
                                                <label>Email</label>
                                                <input type="text" name="email-name" class="form-control">
                                            </div>
                                            <div class="default-form-box mb-20">
                                                <label>Password</label>
                                                <input type="password" name="user-password" class="form-control">
                                            </div>
                                            <div class="default-form-box mb-20">
                                                <label>Birthdate</label>
                                                <input type="date" name="birthday" class="form-control">
                                            </div>
                                            <span class="example"> (E.g.: 05/31/1970) </span>
                                            <br>
                                            <label class="checkbox-default" for="offer">
                                                <input type="checkbox" id="offer">
                                                <span>Receive offers from our partners</span>
                                            </label>
                                            <br>
                                            <label class="checkbox-default checkbox-default-more-text" for="newsletter">
                                                <input type="checkbox" id="newsletter">
                                                <span>Sign up for our newsletter<br><em>You may unsubscribe at any
                                                    moment. For that purpose, please find our contact info in the
                                                    legal notice.</em>
                                                </span>
                                            </label>
                                            <div class="save_button mt-3">
                                                <button class="theme-btn-one btn-black-overlay btn_md" type="button">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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
    name: 'Account details',
    data() {
        return {
            title: 'Account Details',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Account details',
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
            content: 'Account Details page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>

<style>

</style>