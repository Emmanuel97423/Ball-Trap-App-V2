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

        <!-- Checkout-Area -->
        <section id="compare_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="table_desc">
                            <div class="table_page table-responsive compare-table mb-0">
                                <table class="table">
                                    <tbody v-if="productItems.length > 0">
                                        <tr>
                                            <td class="first-column">Product</td>
                                            <td v-for="productItem in productItems" :key="productItem.id" class="product-image-title">
                                                <nuxt-link to="/product" class="image">
                                                    <img :src="productItem.productImg1" alt="Compare Product" />
                                                </nuxt-link>
                                                <nuxt-link to="/shop/shop-4" class="category">Furniture</nuxt-link>
                                                <h5><nuxt-link to="/shop/shop-4" class="title">{{productItem.productTitle}}</nuxt-link></h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Description</td>
                                            <td v-for="productItem in productItems" :key="productItem.id"  class="pro-desc">
                                                <p>{{productItem.productDescription}}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Price</td>
                                            <td v-for="productItem in productItems" :key="productItem.id" class="pro-price">${{productItem.productPrice}}</td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Color</td>
                                            <td v-for="productItem in productItems" :key="productItem.id" class="pro-color">{{productItem.color}}</td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Stock</td>
                                            <td v-for="productItem in productItems" :key="productItem.id" class="pro-stock">{{productItem.stock}}</td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Add to cart</td>
                                            <td v-for="productItem in productItems" :key="productItem.id" class="pro-addtocart"><nuxt-link to="/cart" class="theme-btn-one btn-black-overlay btn_sm"><span>ADD TO CART</span></nuxt-link></td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Delete</td>
                                            <td v-for="productItem in productItems" :key="productItem.id" class="pro-remove product_remove"><button @click="removeProductItem(index)" class="bg-transparent remove-btn"><i class="far fa-trash-alt"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Rating</td>
                                            <td v-for="productItem in productItems" :key="productItem.id" class="pro-ratting">
                                                <div v-if="productItem.rating==5" class="product-review">
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                </div>
                                                <div v-else-if="productItem.rating==4" class="product-review">
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                </div>
                                                <div v-else-if="productItem.rating==3" class="product-review">
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                </div>
                                                <div v-else-if="productItem.rating==2" class="product-review">
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                </div>
                                                <div v-else-if="productItem.rating==1" class="product-review">
                                                    <span class="review-fill"><i class="far fa-star"></i></span>
                                                </div>
                                                <div v-else class="product-review">
                                                    <span class="review-fill">No Rating</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <tr><td>No item found to compare!</td></tr>
                                    </tbody>
                                </table>
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
    name: 'compare',

    data() {
        return {
            title: 'Compare',

            // Product Items Data 
            productItems: [
                {
                    id: 1,
                    productImg1: require('assets/img/product-image/product1.png'),
                    productImg2: require('assets/img/product-image/product2.png'),
                    productTagClass: '',
                    productTag: '',
                    productTitle: 'Black T-Shirt For Woman',
                    productDescription: 'Eye Glasses Are Very Important For Thos Whos Have Some Difficult In Their Eye To See Every Hing Clearly And Perfectly',
                    productPrice: 38.50,
                    totalPrice: 180.00,
                    stock: 'In Stock',
                    color: 'Black',
                    quantity: 1,
                    rating: 5
                },
                {
                    id: 2,
                    productImg1: require('assets/img/product-image/product2.png'),
                    productImg2: require('assets/img/product-image/product4.png'),
                    productTagClass: 'new',
                    productTag: 'new',
                    productTitle: 'T-Shirt Form Girls',
                    productDescription: 'Eye Glasses Are Very Important For Thos Whos Have Some Difficult In Their Eye To See Every Hing Clearly And Perfectly',
                    productPrice: 738.50,
                    totalPrice: 130.00,
                    stock: 'In Stock',
                    color: 'Black',
                    quantity: 1,
                    rating: 3
                },
                {
                    id: 3,
                    productImg1: require('assets/img/product-image/product4.png'),
                    productImg2: require('assets/img/product-image/product6.png'),
                    productTagClass: 'hot',
                    productTag: 'hot',
                    productTitle: 'White Black Line Dress',
                    productDescription: 'Eye Glasses Are Very Important For Thos Whos Have Some Difficult In Their Eye To See Every Hing Clearly And Perfectly',
                    productPrice: 50.50,
                    totalPrice: 160.00,
                    stock: 'In Stock',
                    color: 'Black',
                    quantity: 1,
                    rating: 4
                }
            ],

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Compare',
                    to: '/my-account/compare'
                }
            ],

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
            content: 'Compare page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>

<style>

</style>