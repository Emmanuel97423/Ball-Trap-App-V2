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

        <!-- Cart-Area -->
        <section id="cart_area_two" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="table_desc">
                            <div class="table_page table-responsive">
                                <table>
                                    <!-- Start Cart Table Head -->
                                    <thead>
                                        <tr>
                                            <th class="product_thumb">Image</th>
                                            <th class="product_name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product_quantity">Quantity</th>
                                            <th class="product_total">Total</th>
                                            <th class="product_remove">Remove</th>
                                        </tr>
                                    </thead> <!-- End Cart Table Head -->
                                    <tbody v-if="productItems.length > 0"> 
                                        <!-- Start Cart Single Item-->
                                        <tr v-for="productItem in productItems" :key="productItem.id">
                                            <td class="product_thumb">
                                                <nuxt-link to="/product">
                                                    <img :src="productItem.productImg1" alt="img" />
                                                </nuxt-link>
                                                </td>
                                            <td class="product_name">
                                                <nuxt-link to="/product">{{productItem.productTitle}}</nuxt-link>
                                            </td>
                                            <td class="product-price">${{productItem.productPrice}}</td>
                                            <td class="product_quantity">
                                                <div class="product_count_one">
                                                    <b-form-spinbutton id="sb-inline" v-model="productItem.quantity" inline class="border-0"></b-form-spinbutton>
                                                </div>
                                            </td>
                                            <td class="product_total">${{productItem.totalPrice}}</td>
                                            
                                            <td class="product_remove"><button @click="removeProductItem(index)" class="bg-transparent remove-btn"><i class="far fa-trash-alt"></i></button></td>
                                        </tr> <!-- End Cart Single Item-->
                                    </tbody>
                                    <tbody v-else>
                                        <tr><td class="border-0">No Item found!</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="cart_submit">
                                <button class="theme-btn-one btn-black-overlay btn_sm" type="submit">update cart</button>
                            </div>
                        </div>
                        <div class="coupon_inner_two">
                            <input class="mb-2" placeholder="Coupon code" type="text">
                            <button type="submit" class="theme-btn-one btn-black-overlay btn_sm">Apply coupon</button>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <div class="coupon_code right" data-aos="fade-up" data-aos-delay="400">
                            <h3>Cart Total</h3>
                            <div class="coupon_inner">
                                <div class="cart_subtotal">
                                    <p>Subtotal</p>
                                    <p class="cart_amount">$215.00</p>
                                </div>
                                <div class="cart_subtotal ">
                                    <p>Shipping</p>
                                    <p class="cart_amount"><span>Flat Rate:</span> $255.00</p>
                                </div>
                                <a href="#">Calculate shipping</a>

                                <div class="cart_subtotal">
                                    <p>Total</p>
                                    <p class="cart_amount">$215.00</p>
                                </div>
                                <div class="checkout_btn">
                                    <nuxt-link to="/my-account/checkout-1" class="theme-btn-one btn-black-overlay btn_sm">Proceed to Checkout</nuxt-link>
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
    name: 'cart-2',

    data() {
        return {

            title: 'Cart',

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
                    text: 'Cart',
                    to: '/cart'
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
            content: 'Cart page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>

<style>

</style>