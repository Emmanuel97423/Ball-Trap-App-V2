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

        <!-- Contact Us Area -->
        <section id="contact_area" class="ptb-100">
            <div class="container">
        
                <div class="row">
                    <div class="col-lg-8">
                        <div class="contact_form_one">
                            <h3>Get In Touch</h3>   
                            <form>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Name*">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Email*">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <input type="number" class="form-control" placeholder="Phone*">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Subject*">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <textarea rows="7" class="form-control" placeholder="Message*"></textarea>
                                        </div>
                                        <div class="submit_bitton_contact_one">
                                            <button type="button" class="theme-btn-one btn-black-overlay btn_md">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="left_side_contact">
                            <ul>
                                <li class="address_location">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <p>32, Choto Mirzapur, Ahsan Ahmed Road Khulna 9100, Bangladesh</p>
                                </li>
                                <li class="address_location">
                                    <i class="fas fa-phone-volume"></i>
                                    <div class="contact_widget">
                                        <a href="tel:2873077">+1 (833) 287-3077</a>
                                        <a href="tel:2873077">+1 (833) 528-8619</a>
                                    </div>
                                </li>
                                <li class="address_location">
                                    <i class="far fa-envelope"></i>
                                    <div class="contact_widget">
                                        <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                                        <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'contact-us-2',
    data() {
        return {

            title: 'Contact Us',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Contact'
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
            content: 'Contact Us page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>

<style>

</style>