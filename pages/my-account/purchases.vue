<template>
  <div class="accordion" role="tablist">
    <b-card v-for="order in orders" :key="order._id" no-body class="mb-1">
      <b-card-header
        header-tag="header"
        class="box-purchase-header p-1"
        role="tab"
      >
        <b-button block v-b-toggle="order.orderNumberId" variant="light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
          <div class="box-purchase-date">
            <span>{{ order.date }}</span>
            <!-- <span>avr.</span> -->
          </div>
          <div class="box-purchase-logo">exo-trap.re</div>
          <div class="box-purchase-price">
            <span>{{ order.amount.toFixed(2) }} €</span> <span>Total</span>
          </div>
          <div class="box-purchase-status">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-circle-fill"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" /></svg
            >{{ order.status }}
          </div>
        </b-button>
      </b-card-header>
      <b-collapse
        :id="order.orderNumberId"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-list-group
            v-for="product in order.products"
            :key="product._id"
            class="purchase-body"
          >
            <b-list-group-item class="purchase-body-product">
              <img :src="product.imageUrl" />
              <div>
                <h6>{{ product.libelle.toLowerCase() }}</h6>
                <p>
                  Quantité: <span>{{ product.orderQuantity }}</span>
                </p>
                <span
                  >{{
                    (product.pvTtc * product.orderQuantity).toFixed(2)
                  }}€</span
                >
              </div>
            </b-list-group-item>
          </b-list-group>

          <div class="purchase-body-infos">
            <div class="purchase-body-infos-customer">
              <p>
                Référence: <span>{{ order.orderNumberId }}</span>
              </p>
              <br />
              <h6>Retrait en magasin</h6>
              <br />
              <p>
                61 Rue Marius et Ary Leblond,<br />
                97460 <br />SAINT PAUL, Réunion
              </p>
            </div>
            <div class="purchase-body-infos-payment">
              <div class="purchase-body-infos-payment-mode">
                <h6>Mode de paiement</h6>
                <div class="purchase-body-infos-payment-mode-type">
                  <em>Carte bancaire</em>
                  <div class="purchase-body-infos-payment-mode-datas">
                    {{ order.date }}
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="coupon_code right"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <!-- <h3>Total panier</h3> -->
                  <div class="coupon_inner">
                    <!-- <div class="cart_subtotal">
                        <p>Sous-total</p>
                        <p class="cart_amount">100€</p>
                      </div> -->
                    <div class="cart_subtotal">
                      <p>Retrait en magasin</p>
                      <p class="cart_amount"><span>Forfait:</span> 00.00 €</p>
                    </div>

                    <div class="cart_subtotal">
                      <p>Total</p>
                      <p class="cart_amount">{{ order.amount.toFixed(2) }} €</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <b-card-text
            >I start opened because <code>visible</code> is
            <code>true</code></b-card-text
          >
          <b-card-text>{{ text }}</b-card-text> -->
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  layout: "account",
  data() {
    return {
      orders: "",
      accordionId: "",
      items: [
        { Table1: "Sous-total", table2: 59.9 },
        { Table1: "Frais", table2: "5.94" },
        { Table1: "Frais de port", table2: 0 },
        { Table1: "Total", table2: 59.9 },
      ],
    };
  },
  async fetch() {
    const userId = this.$auth.user.userId;
    try {
      const orderFetch = await this.$axios.get("/order/allOrders/" + userId);
      this.orders = orderFetch.data.orders;
      console.log("this.orders:", this.orders);
    } catch (error) {
      console.log("error:", error);
    }
  },
};
</script>
<style>
.box-purchase-header button {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  color: #000;
  border: none;
}
.box-purchase-header button:hover {
  background-color: rgb(237, 237, 237);
}
.box-purchase-header button:focus {
  background-color: rgb(237, 237, 237);
  color: #000;
}
.box-purchase-date,
.box-purchase-price {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.box-purchase-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: orange;
}
.box-purchase-status svg {
  margin: 0 10px 0 0;
}
.purchase-body-infos {
  padding: 20px 0 0 0;
  display: flex;
}
.purchase-body-product {
  width: 100%;
  display: flex;
}
.purchase-body-product img {
  width: 100px;
  padding: 5px;
}
.purchase-body-product h6 {
  color: green;
  text-transform: capitalize;
  font-weight: bold;
}
.purchase-body-infos-customer {
  flex-grow: 1;
}
.purchase-body-infos-payment {
  flex-grow: 2;
}
.purchase-body-infos-payment-mode {
  display: flex;
  justify-content: space-between;
}
.purchase-body-infos-payment-mode-type {
  text-align: right;
}
</style>