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
        <section id="cart_area_one" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="table_desc">
                            <div class="table_page table-responsive">
                                <table>
                                    <!-- Start Cart Table Head -->
                                    <thead>
                                        <tr>
                                            <th class="product_remove">Retirer</th>
                                            <th class="product_thumb">Image</th>
                                            <th class="product_name">Articles</th>
                                            <th class="product-price">Prix</th>
                                            <th class="product_quantity">Quantité</th>
                                            <th class="product_total">Total</th>
                                        </tr>
                                    </thead> <!-- End Cart Table Head -->

                                    <!-- {{ selectedProducts }} -->
                                    <tbody v-if="selectedProducts.length > 0"> 
                                        <!-- Start Cart Single Item-->
                                        <tr v-for="productItem in selectedProducts" :key="productItem.id">
                                            <td class="product_remove"><button @click="removeProductItem(productItem)" class="bg-transparent remove-btn"><i class="far fa-trash-alt"></i></button>
                                            </td>
                                            
                                            <td class="product_thumb">
                                                
                                                <nuxt-link :to="`/product/${productItem._id}`">
                                                    <img :src="productItem.imageUrl" alt="img" />
                                                </nuxt-link>
                                            </td>
                                            <td class="product_name">
                                                <nuxt-link :to="`/product/${productItem._id}`">{{productItem.name}}</nuxt-link>
                                            </td>
                                            <td class="product-price">{{productItem.price}} €</td>
                                            <td class="product_quantity">
                                                <label>quantité</label> 
                                                <input min="1" max="100" :value="productItem.orderQuantity" type="number">
                                            </td>
                                            <td class="product_total">{{ (productItem.price  * productItem.orderQuantity).toFixed(2) }} €</td>
                                        </tr> 
                                        <!-- End Cart Single Item-->
                                    </tbody>
                                    
                                    <tbody v-else>
                                        <tr><td class="border-0">Aucun article selectionné!</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- <div class="cart_submit">
                                <button class="theme-btn-one btn-black-overlay btn_sm" type="submit">Mettre à jour</button>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="coupon_code left" data-aos="fade-up" data-aos-delay="200">
                            <h3>Coupon</h3>
                            <div class="coupon_inner">
                                <p>Entrer un coupon de réduction.</p>
                                <input class="mb-2" placeholder="Coupon code" type="text">
                                <button type="submit" class="theme-btn-one btn-black-overlay btn_sm">Appliquer le coupon</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="coupon_code right" data-aos="fade-up" data-aos-delay="400">
                            <h3>Total panier</h3>
                            <div class="coupon_inner">
                                <div class="cart_subtotal">
                                    <p>Sous-total</p>
                                    <p class="cart_amount">{{ (cartTotal).toFixed(2) }}€</p>
                                </div>
                                <div class="cart_subtotal ">
                                    <p>Livraison</p>
                                    <p class="cart_amount"><span>Forfait:</span> 00.00 €</p>
                                </div>
                                <a href="#">Calculer frais de livraison</a>

                                <div class="cart_subtotal">
                                    <p>Total</p>
                                    <p class="cart_amount">{{ (cartTotal).toFixed(2) }}€</p>
                                </div>
                                <div class="checkout_btn">
                                    <nuxt-link to="/my-account/checkout-1" class="theme-btn-one btn-black-overlay btn_sm">Commander</nuxt-link>
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
    name: 'cart',

    data() {
        return {
            title: 'Cart',

            // Product Items Data 
            productItems: [
                // {
                //     id: 1,
                //     productImg1: require('assets/img/product-image/product1.png'),
                //     productImg2: require('assets/img/product-image/product2.png'),
                //     productTagClass: '',
                //     productTag: '',
                //     productTitle: 'Black T-Shirt For Woman',
                //     productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                //     productPrice: 38.50,
                //     totalPrice: 180.00,
                //     quantity: 1
                // },
                // {
                //     id: 2,
                //     productImg1: require('assets/img/product-image/product2.png'),
                //     productImg2: require('assets/img/product-image/product4.png'),
                //     productTagClass: 'new',
                //     productTag: 'new',
                //     productTitle: 'T-Shirt Form Girls',
                //     productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                //     productPrice: 738.50,
                //     totalPrice: 130.00,
                //     quantity: 1
                // },
                // {
                //     id: 3,
                //     productImg1: require('assets/img/product-image/product4.png'),
                //     productImg2: require('assets/img/product-image/product6.png'),
                //     productTagClass: 'hot',
                //     productTag: 'hot',
                //     productTitle: 'White Black Line Dress',
                //     productDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.',
                //     productPrice: 50.50,
                //     totalPrice: 160.00,
                //     quantity: 1
                // }
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
            value: 1

        }
    },
    methods: {
        removeProductItem(productItem) {
            this.$store.commit('cart/remove', productItem);
        }
    },
      computed: {
          id() {
              return this.$route.params.id
          },
          selectedProducts() {
              return this.$store.getters['cart/items']
          },
          price() {
              return this.$store.getters['cart/price']
          },
          
       
          // Cart Total Price
          cartTotal() {
            
           return this.$store.getters['cart/cartTotal']
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