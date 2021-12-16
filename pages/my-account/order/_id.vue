<template>
  <div class="receipt-content">
    <div class="container bootstrap snippets bootdey">
      <div class="row">
        <div class="col-md-12">
          <div class="invoice-wrapper">
            <p v-if="$fetchState.pending">
              <!-- <span class="loading"></span> -->
              <Spinner></Spinner>
            </p>
            <p v-else-if="$fetchState.error">Une erreur est survenue! 🤬</p>
            <!-- {{ order }} -->
            <div class="intro">
              Bonjour <strong>{{ customer.firstName }}</strong
              >,
              <br />
              Ceci est la commande pour un paiement de
              <strong> {{ order.amount }} €</strong>
            </div>

            <div class="payment-info">
              <div class="row">
                <div class="col-sm-6">
                  <span>No. de commande</span>
                  <strong>{{ order.orderNumberId }}</strong>
                </div>
                <div class="col-sm-6 text-right">
                  <span>Date</span>
                  <strong>{{ order.date }}</strong>
                </div>
              </div>
            </div>

            <div class="payment-details">
              <div class="row">
                <div class="col-sm-6">
                  <span>Client</span>
                  <strong
                    >{{ customer.firstName }}
                    {{ customer.lastName }}
                  </strong>
                  <p>
                    {{ customer.adresse }} <br />
                    {{ customer.zone }}<br />
                    {{ customer.zip }} <br />
                    {{ customer.country }}<br />
                    <a href="#"> {{ customer.email }} </a>
                  </p>
                </div>
                <div class="col-sm-6 text-right">
                  <span>Réglé à</span>
                  <strong> TRAPONE Boutique </strong>
                  <p>
                    61 Rue Marius et Ary Leblon <br />
                    St Paul <br />
                    97460 <br />
                    La Réunion, FR <br />
                    <a href="#"> littoralpeche@gmail.com </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="line-items">
              <div class="table_page table-responsive">
                <table>
                  <!-- Start Cart Table Head -->
                  <thead>
                    <tr>
                      <!-- <th class="product_remove">Retirer</th> -->
                      <th class="product_thumb">Image</th>
                      <th class="product_name">Articles</th>
                      <th class="product-price">Prix</th>
                      <th class="product_quantity">Quantité</th>
                      <th class="product_total">Total</th>
                    </tr>
                  </thead>
                  <!-- End Cart Table Head -->

                  <!-- {{ selectedProducts }} -->
                  <tbody>
                    <!-- Start Cart Single Item-->
                    <tr v-for="item in order.products" :key="item.id">
                      <!-- <td class="product_remove">
                        <button
                          @click="removeProductItem(productItem)"
                          class="bg-transparent remove-btn"
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </td> -->

                      <td class="product_thumb">
                        <nuxt-link :to="`/product/${item._id}`">
                          <img :src="item.imageUrl" alt="img" />
                        </nuxt-link>
                      </td>
                      <td class="product_name">
                        <nuxt-link :to="`/product/${item._id}`"
                          ><p>{{ item.name }}</p></nuxt-link
                        >
                      </td>
                      <td class="product-price">
                        {{ item.priceTtc.toFixed(2) }} €
                      </td>
                      <td class="product_quantity">
                        <!-- <label>quantité</label>  -->
                        <!-- <input min="1" max="100"   :value="productItem.orderQuantity"  type="number" @click="inc(productItem)"> -->
                        {{ item.orderQuantity }}
                      </td>
                      <td class="product_total">
                        {{ (item.priceTtc * item.orderQuantity).toFixed(2) }}
                        €
                      </td>
                    </tr>
                    <!-- End Cart Single Item-->
                  </tbody>

                  <!-- <tbody v-else>
                    <tr>
                      <td class="border-0">Aucun article selectionné!</td>
                    </tr>
                  </tbody> -->
                </table>
              </div>
              <!-- <div class="headers clearfix">
                <div class="row">
                  <div class="col-xs-4">Description</div>
                  <div class="col-xs-3">Quantity</div>
                  <div class="col-xs-5 text-right">Amount</div>
                </div>
              </div>
              <div class="items">
                <div class="row item">
                  <div class="col-xs-4 desc">Html theme</div>
                  <div class="col-xs-3 qty">3</div>
                  <div class="col-xs-5 amount text-right">$60.00</div>
                </div>
                <div class="row item">
                  <div class="col-xs-4 desc">Bootstrap snippet</div>
                  <div class="col-xs-3 qty">1</div>
                  <div class="col-xs-5 amount text-right">$20.00</div>
                </div>
                <div class="row item">
                  <div class="col-xs-4 desc">Snippets on bootdey</div>
                  <div class="col-xs-3 qty">2</div>
                  <div class="col-xs-5 amount text-right">$18.00</div>
                </div>
              </div> -->
              <div class="total text-right">
                <p class="extra-notes">
                  <strong>Notes</strong>
                  <!-- Please send all items at the same time to shipping address by
                  next week. Thanks a lot. -->
                </p>
                <!-- <div class="field">Sous-total <span>$379.00</span></div> -->
                <div class="field">Livraison <span>0.00 €</span></div>
                <!-- <div class="field">Discount <span>4.5%</span></div> -->
                <div class="field grand-total">
                  Total <span>{{ order.amount.toFixed(2) }} €</span>
                </div>
              </div>

              <!-- <div class="print">
                <a href="#">
                  <i class="fa fa-print"></i>
                  Print this receipt
                </a>
              </div> -->
            </div>
          </div>

          <div class="footer">Copyright © 2021 . Trap One</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const apiURL = "https://trap-one-api.herokuapp.com/api";
import Spinner from "~/components/spinner";
export default {
  components: {
    Spinner,
  },
  middleware: "auth",
  //   async asyncData({ params }) {
  //     const slug = params.slug; // When calling /abc the slug will be "abc"
  //     return { slug };
  // //   },
  // async asyncData({ params, $http, error }) {
  //   const id = params.id;
  //   console.log("id-params:", id);

  //   try {
  //     // Using the nuxtjs/http module here exposed via context.app
  //     this.$store.dispatch("order/getOneOrder", id);
  //     // const post = await $http.$get(`https://api.nuxtjs.dev/posts/${id}`)
  //     // return { post };
  //   } catch (e) {
  //     error(e); // Show the nuxt error page with the thrown error
  //   }
  // },
  data() {
    return { order: {}, customer: {} };
  },
  async fetch() {
    try {
      this.order = await this.$http.$get(
        `${apiURL}/order/${this.$route.params.id}`
      );
      console.log("this.order", this.order);

      try {
        this.customer = await this.$http.$get(
          `${apiURL}/auth/user/${this.$store.state.auth.user.userId}`
        );
        console.log("this.customer", this.customer);
      } catch (error) {
        console.error("error", error);
      }
    } catch (error) {
      console.error("error", error);
    }
  },
  computed: {
    // order() {
    //   return this.$store.state.order.order.data;
    // },
    // customer() {
    //   return this.$store.state.auth.user.userObject;
    // },
  },
  // created() {
  //   console.log(this.$route.params.id);
  //   // console.log("params:", params);
  //   const id = this.$route.params.id;
  //   // console.log("id:", id);
  //   // const id = this.$store.state.auth.user.userId;
  //   this.$store
  //     .dispatch("order/getOneOrder", id)
  //     .then((res) => {
  //       console.log("Api sucess");
  //     })
  //     .catch((err) => {
  //       console.log("Api error", err);
  //     });
  // },
  // mounted() {
  //   console.log(this.$store.state.auth.user.userObject.userId);
  // },
};
</script>

<style scoped>
.receipt-content .logo a:hover {
  text-decoration: none;
  color: #7793c4;
}

.receipt-content .invoice-wrapper {
  background: #fff;
  border: 1px solid #cdd3e2;
  box-shadow: 0px 0px 1px #ccc;
  padding: 40px 40px 60px;
  margin-top: 40px;
  border-radius: 4px;
}

.receipt-content .invoice-wrapper .payment-details span {
  color: #a9b0bb;
  display: block;
}
.receipt-content .invoice-wrapper .payment-details a {
  display: inline-block;
  margin-top: 5px;
}

.receipt-content .invoice-wrapper .line-items .print a {
  display: inline-block;
  border: 1px solid #9cb5d6;
  padding: 13px 13px;
  border-radius: 5px;
  color: #708dc0;
  font-size: 13px;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.receipt-content .invoice-wrapper .line-items .print a:hover {
  text-decoration: none;
  border-color: #333;
  color: #333;
}

.receipt-content {
  background: #eceef4;
}
@media (min-width: 1200px) {
  .receipt-content .container {
    width: 900px;
  }
}

.receipt-content .logo {
  text-align: center;
  margin-top: 50px;
}

.receipt-content .logo a {
  font-family: Myriad Pro, Lato, Helvetica Neue, Arial;
  font-size: 36px;
  letter-spacing: 0.1px;
  color: #555;
  font-weight: 300;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.receipt-content .invoice-wrapper .intro {
  line-height: 25px;
  color: #444;
}

.receipt-content .invoice-wrapper .payment-info {
  margin-top: 25px;
  padding-top: 15px;
}

.receipt-content .invoice-wrapper .payment-info span {
  color: #a9b0bb;
}

.receipt-content .invoice-wrapper .payment-info strong {
  display: block;
  color: #444;
  margin-top: 3px;
}

@media (max-width: 767px) {
  .receipt-content .invoice-wrapper .payment-info .text-right {
    text-align: left;
    margin-top: 20px;
  }
}
.receipt-content .invoice-wrapper .payment-details {
  border-top: 2px solid #ebecee;
  margin-top: 30px;
  padding-top: 20px;
  line-height: 22px;
}

@media (max-width: 767px) {
  .receipt-content .invoice-wrapper .payment-details .text-right {
    text-align: left;
    margin-top: 20px;
  }
}
.receipt-content .invoice-wrapper .line-items {
  margin-top: 40px;
}
.receipt-content .invoice-wrapper .line-items .headers {
  color: #a9b0bb;
  font-size: 13px;
  letter-spacing: 0.3px;
  border-bottom: 2px solid #ebecee;
  padding-bottom: 4px;
}
.receipt-content .invoice-wrapper .line-items .items {
  margin-top: 8px;
  border-bottom: 2px solid #ebecee;
  padding-bottom: 8px;
}
.receipt-content .invoice-wrapper .line-items .items .item {
  padding: 10px 0;
  color: #696969;
  font-size: 15px;
}
@media (max-width: 767px) {
  .receipt-content .invoice-wrapper .line-items .items .item {
    font-size: 13px;
  }
}
.receipt-content .invoice-wrapper .line-items .items .item .amount {
  letter-spacing: 0.1px;
  color: #84868a;
  font-size: 16px;
}
@media (max-width: 767px) {
  .receipt-content .invoice-wrapper .line-items .items .item .amount {
    font-size: 13px;
  }
}

.receipt-content .invoice-wrapper .line-items .total {
  margin-top: 30px;
}

.receipt-content .invoice-wrapper .line-items .total .extra-notes {
  float: left;
  width: 40%;
  text-align: left;
  font-size: 13px;
  color: #7a7a7a;
  line-height: 20px;
}

@media (max-width: 767px) {
  .receipt-content .invoice-wrapper .line-items .total .extra-notes {
    width: 100%;
    margin-bottom: 30px;
    float: none;
  }
}

.receipt-content .invoice-wrapper .line-items .total .extra-notes strong {
  display: block;
  margin-bottom: 5px;
  color: #454545;
}

.receipt-content .invoice-wrapper .line-items .total .field {
  margin-bottom: 7px;
  font-size: 14px;
  color: #555;
}

.receipt-content .invoice-wrapper .line-items .total .field.grand-total {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
}

.receipt-content .invoice-wrapper .line-items .total .field.grand-total span {
  color: #20a720;
  font-size: 16px;
}

.receipt-content .invoice-wrapper .line-items .total .field span {
  display: inline-block;
  margin-left: 20px;
  min-width: 85px;
  color: #84868a;
  font-size: 15px;
}

.receipt-content .invoice-wrapper .line-items .print {
  margin-top: 50px;
  text-align: center;
}

.receipt-content .invoice-wrapper .line-items .print a i {
  margin-right: 3px;
  font-size: 14px;
}

.receipt-content .footer {
  margin-top: 40px;
  margin-bottom: 110px;
  text-align: center;
  font-size: 12px;
  color: #969cad;
}
</style>