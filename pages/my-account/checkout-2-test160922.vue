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
    <section id="checkout_two" class="ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="accordion" role="tablist">
                        <div class="user-actions">
                            <h3 role="tab">
                                <i class="far fa-file"></i>Returning customer?
                                <b-button class="border-0 p-0 bg-transparent" v-b-toggle.checkout_login>Click here to login</b-button>
                            </h3>
                            <b-collapse id="checkout_login" accordion="my-accordion" role="tabpanel">
                                <div class="checkout_info">
                                    <p>If you have shopped with us before, please enter your details in the boxes below. If
                                        you are a new customer please proceed to the Billing &amp; Shipping section.</p>
                                    <form>
                                        <div class="form_group default-form-box">
                                            <label>Username or email <span>*</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form_group default-form-box">
                                            <label>Password <span>*</span></label>
                                            <input type="password" class="form-control">
                                        </div>
                                        <div class="form_group group_3 default-form-box">
                                            <button class="theme-btn-one btn-black-overlay btn_md"
                                                type="button">Login</button>
                                            <label class="checkbox-default">
                                                <input type="checkbox">
                                                <span>Remember me</span>
                                            </label>
                                        </div>
                                        <a href="#">Lost your password?</a>
                                    </form>
                                </div>
                            </b-collapse>
                        </div>

                        <div class="user-actions">
                            <h3 role="tab">
                                <i class="far fa-file"></i>Returning customer?
                                <b-button class="border-0 p-0 bg-transparent" v-b-toggle.checkout_coupon>Click here to enter your code</b-button>
                            </h3>
                            <b-collapse id="checkout_coupon" class="checkout_coupon" accordion="my-accordion" role="tabpanel">
                                <div class="checkout_info">
                                    <form action="#">
                                        <input placeholder="Coupon code" type="text">
                                        <button class="theme-btn-one btn btn-black-overlay btn-md" type="button">Apply
                                            coupon</button>
                                    </form>
                                </div>
                            </b-collapse>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="checkout_area_two">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="checkout_form_area">

                                    <h3>Billing Details</h3>
                                    <form>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="default-form-box">
                                                    <label>First Name <span>*</span></label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="default-form-box">
                                                    <label>Last Name <span>*</span></label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label>Company Name</label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label for="country">country <span>*</span></label>
                                                    <select class="country_option nice-select wide form-control"
                                                        name="country" id="country">
                                                        <option value="2">Bangladesh</option>
                                                        <option value="3">Algeria</option>
                                                        <option value="4">Afghanistan</option>
                                                        <option value="5">Ghana</option>
                                                        <option value="6">Albania</option>
                                                        <option value="7">Bahrain</option>
                                                        <option value="8">Colombia</option>
                                                        <option value="9">Dominican Republic</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label>Street address <span>*</span></label>
                                                    <input placeholder="House number and street name" type="text"
                                                        class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <input placeholder="Apartment, suite, unit etc. (optional)"
                                                        type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label>Town / City <span>*</span></label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="default-form-box">
                                                    <label>State / County <span>*</span></label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="default-form-box">
                                                    <label>Phone<span>*</span></label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="default-form-box">
                                                    <label> Email Address <span>*</span></label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <div class="order-notes">
                                                    <label for="order_note">Order Notes</label>
                                                    <textarea id="order_note"
                                                        placeholder="Notes about your order, e.g. special notes for delivery."
                                                        class="form-control" rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <form>
                                    <h3>Your order</h3>
                                    <div class="order_table table-responsive mb-0">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td> Handbag fringilla <strong> × 2</strong></td>
                                                    <td> $165.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Handbag justo <strong> × 2</strong></td>
                                                    <td> $50.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Handbag elit <strong> × 2</strong></td>
                                                    <td> $50.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Handbag Rutrum <strong> × 1</strong></td>
                                                    <td> $50.00</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Cart Subtotal</th>
                                                    <td>$215.00</td>
                                                </tr>
                                                <tr>
                                                    <th>Shipping</th>
                                                    <td><strong>$5.00</strong></td>
                                                </tr>
                                                <tr class="order_total">
                                                    <th>Order Total</th>
                                                    <td><strong>$220.00</strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div class="payment_method">

                                        <div class="payment-inner panel-default">
                                            <b-button class="bg-transparent p-0 border-0">
                                                <input type="checkbox" id="currencyCod">
                                                <label for="currencyCod" v-b-toggle.methodCod></label> Cash on Delivery 
                                            </b-button>
                                        <b-collapse id="methodCod" class="mt-2">
                                            <div class="card-body1">
                                                <p>Please send a check to Store Name, Store Street, Store Town,
                                                    Store State
                                                    / County, Store Postcode.</p>
                                            </div>
                                        </b-collapse>
                                        </div>

                                        <div class="payment-inner panel-default">
                                            <b-button class="bg-transparent p-0 border-0">
                                                <input type="checkbox" id="currencyPaypal">
                                                <label for="currencyPaypal" v-b-toggle.methodPaypal></label> PayPal
                                            </b-button>
                                        <b-collapse id="methodPaypal" class="mt-2">
                                            <div class="card-body1">
                                            <p>Pay via PayPal; you can pay with your credit card if you don’t
                                                have a
                                                PayPal account.</p>
                                            </div>
                                        </b-collapse>
                                        </div>
                            
                                        <div class="order_button pt-3">
                                            <button class="theme-btn-one btn-black-overlay btn_sm" type="button">Proceed to PayPal</button>
                                        </div>
                                    </div>
                                </form>
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
    name: 'checkout-2',

    data() {
        return {
            title: 'Checkout',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Checkout',
                    to: '/my-account/checkout-2'
                }
            ],

            // Payment Method Data 
            visible: false

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
    }

}
</script>

<style>

</style>