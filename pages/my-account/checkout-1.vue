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
    <section id="checkout_one" class="ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div class="checkout-area-bg bg-white">
                        <div class="check-heading">
                            <h3>Information de facturation</h3> 
                        </div>
                        <div class="check-out-form">
                            <form>
                                <div class="row">
                                    <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                                        <div class="form-group">
                                            <label for="fname">Nom</label>
                                            <input type="text" required="" class="form-control" id="fname"
                                                placeholder="Nom *">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                                        <div class="form-group">
                                            <label for="lname">Prénom</label>
                                            <input type="text" required="" class="form-control" id="lname"
                                                placeholder="Prénom *">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                                        <div class="form-group">
                                            <label for="cname">Entrprise</label>
                                            <input class="form-control" required="" type="text" id="cname"
                                                placeholder="Entrprise">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                                        <div class="form-group">
                                            <label for="email">Email </label>
                                            <input class="form-control" required="" type="text" id="email"
                                                placeholder="info@gmail.com">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                                        <div class="form-group">
                                            <label for="country">Pays</label>
                                            <select class="form-control first_null" id="country">
                                                <option value="">Choisissez une option...</option>
                                                <option value="FR">France</option>
                                                
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                                        <div class="form-group">
                                            <label for="city">Région</label>
                                            <select class="form-control first_null" id="city">
                                                <option value="">Choisissez une option...</option>
                                                <option value="RE">Réunion</option>
                                                
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-=12 col-12">
                                        <div class="form-group">
                                            <label for="zip">Code postal</label>
                                            <input type="text" class="form-control" id="zip" required=""
                                                placeholder="Enterer votre code postal">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                                        <div class="form-group">
                                            <label for="faddress">Adresse complète</label>
                                            <input type="text" class="form-control" id="faddress" required=""
                                                placeholder="Enterer votre adresse..">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                                        <div class="form-group">
                                            <label for="messages">Commentaire</label>
                                            <textarea rows="5" class="form-control" id="messages"
                                                placeholder="Commentaires"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-=12 col-12">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="materialUnchecked">
                                            <label class="form-check-label" for="materialUnchecked">Sauvegarder l'adresse</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div class="order_review  box-shadow bg-white">
                        <div class="check-heading">
                            <h3>Votre commande</h3>
                        </div>
                        <div  class="table-responsive order_table">
                            <table v-if="selectedProducts.length >= 1 " class="table">
                                <thead>
                                    <tr>
                                        <th>Article</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody v-for="productItem in selectedProducts" :key="productItem.id">
                                    <tr>
                                        <td> {{ productItem.name }} <span class="product-qty"> x {{ productItem.orderQuantity }}</span>
                                        </td>
                                        <td>{{ (productItem.price  * productItem.orderQuantity).toFixed(2) }} €</td>
                                    </tr>
                                
                    
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Sous Total</th>
                                        <td class="product-subtotal">{{ (cartTotal).toFixed(2) }}€</td>
                                    </tr>
                                    <tr>
                                        <th>Livraison</th>
                                        <td>Livraison gratuite</td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td class="product-subtotal">{{ (cartTotal).toFixed(2) }}€</td>
                                    </tr>
                                </tfoot>
                            </table>
                             <ul v-else class="offcanvas-cart">
          <li>Panier vide!</li>
        </ul>
                            
                        </div>
                    </div>
                    <div class="box">
                        <button id="btn__pay" class="theme-btn-one btn-black-overlay btn_sm">Etape suivante</button>
                    </div>
                    
                    <div v-if="!enabled" class="order_review bg-white">
                        <div class="check-heading">
                            <h3>Mode de paiement</h3>
                        </div>
                        <div class="payment_method">
                            <div class="payment_option">
                                <div class="custome-radio">
                                    <input class="form-check-input" required="" type="radio" name="payment_option"
                                        id="exampleRadios3" value="option3" checked="">
                                    <label class="form-check-label" for="exampleRadios3">Direct Bank Transfer</label>
                                    <p data-method="option3" class="payment-text">There are many variations of passages
                                        of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                                <div class="custome-radio">
                                    <input class="form-check-input" type="radio" name="payment_option"
                                        id="exampleRadios4" value="option4">
                                    <label class="form-check-label" for="exampleRadios4">Check Payment</label>
                                    <p data-method="option4" class="payment-text">Please send your cheque to Store Name,
                                        Store Street, Store Town, Store State / County, Store Postcode.</p>
                                </div>
                                <div class="custome-radio">
                                    <input class="form-check-input" type="radio" name="payment_option"
                                        id="exampleRadios5" value="option5">
                                    <label class="form-check-label" for="exampleRadios5">Paypal</label>
                                    <p data-method="option5" class="payment-text">Pay via PayPal; you can pay with your
                                        credit card if you don't have a PayPal account.</p>
                                </div>
                            </div>
                        </div> <a href="#!" class="theme-btn-one btn-black-overlay btn_sm">Place Order</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
export default {
    name: 'checkout-1',

    data() {
        return {
            enabled: true,
            title: 'Checkout',
            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Checkout',
                    to: '/my-account/checkout'
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
            content: 'Checkout page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
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

}
</script>

<style scoped>
.box {
    text-align: center;
}


</style>