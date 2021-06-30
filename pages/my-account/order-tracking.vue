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

        <!-- Order-Tracking-Area -->
        <section id="order_tracking" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="order_tracking_wrapper">
                            <h4>Order Tracking</h4>
                            <p>To track your order please enter your Order ID in the box below and press the "Track" button.</p>

                                <form>
                                    <div class="form-group">
                                        <label for="order_ID">Order ID</label>
                                        <input type="text" id="order_ID" class="form-control" placeholder="Found in your order Confirmation email">
                                    </div>
                                    <div class="form-group">
                                        <label for="billing_email">Billing Email</label>
                                        <input type="text" id="billing_email" class="form-control" placeholder="Enter Your Email Address">
                                    </div>
                                    <div class="order_track_button">
                                        <button type="button" class="theme-btn-one btn-black-overlay btn_md">Track</button>
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
    name: 'cart-2',

    data() {
        return {

            title: 'Order Tracking',

            // Product Items Data 
            productItems: [
                {
                    id: 1,
                    productImg1: require('assets/img/product-image/product1.png'),
                    productImg2: require('assets/img/product-image/product2.png'),
                    productTagClass: '',
                    productTag: '',
                    productTitle: 'Black T-Shirt For Woman',
                    productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                    productPrice: 38.50,
                    totalPrice: 180.00,
                    quantity: 1
                },
                {
                    id: 2,
                    productImg1: require('assets/img/product-image/product2.png'),
                    productImg2: require('assets/img/product-image/product4.png'),
                    productTagClass: 'new',
                    productTag: 'new',
                    productTitle: 'T-Shirt Form Girls',
                    productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                    productPrice: 738.50,
                    totalPrice: 130.00,
                    quantity: 1
                },
                {
                    id: 3,
                    productImg1: require('assets/img/product-image/product4.png'),
                    productImg2: require('assets/img/product-image/product6.png'),
                    productTagClass: 'hot',
                    productTag: 'hot',
                    productTitle: 'White Black Line Dress',
                    productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                    productPrice: 50.50,
                    totalPrice: 160.00,
                    quantity: 1
                }
            ],

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Order Tracking',
                    to: '/my-account/order-tracking'
                }
            ],
            
            // Product Quanity Increment/ Decrement Data 
            quantity: 1

        }
    },

    methods: {
        removeProductItem: function (index) {
            this.productItems.splice(index, 1);
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
            content: 'Order Tracking page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>

<style>

</style>