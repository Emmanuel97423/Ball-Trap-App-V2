<template>
    <!-- <b-container> -->
    <div>
        <h1>Commandes</h1>
        <div class="accordion" role="tablist">
            <b-card v-for="order, index in orders" :key="order._id" no-body class="mb-1">
                <b-card-header header-tag="header" class="box-purchase-header p-1" role="tab">
                    <b-button block v-b-toggle="order.orderNumberId" variant="light" @click="setActiveIndex(index)">
                        <div class="open-accordion-btn">
                            <!-- <svg :class="{ 'bi bi-plus-lg': !isActive(index), 'bi bi-dash': isActive(index) }"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                            </svg> -->

                            <i :id="order.orderNumberId" class="float-right fa"
                                :class="{ 'fa-plus': !isActive(index), 'fa-minus': isActive(index) }">
                            </i>
                            <!-- <svg :class="{}"  xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                            </svg>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-dash" viewBox="0 0 16 16">
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg> -->
                        </div>
                        <div class="box-purchase-date">
                            <span>{{ order.date }}</span>
                            <!-- <span>avr.</span> -->
                        </div>
                        <div class="box-purchase-logo">exo-trap.re</div>
                        <div class="box-purchase-price">
                            <span>{{ order.amount.toFixed(2) }} €</span> <span>Total</span>
                        </div>
                        <!-- Status condition -->
                        <div v-if="order.status === 'En attente...'" class="box-purchase-status orange-status">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-circle-fill" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>{{ order.status }}
                        </div>
                        <div v-if="order.status === 'En cours de préparation'" class="box-purchase-status blue-status">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-circle-fill" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>{{ order.status }}
                        </div>
                        <div v-if="order.status === 'Commande prête'" class="box-purchase-status green-status">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-circle-fill" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>{{ order.status }}
                        </div>
                        <div v-if="order.status === 'Commande retirée'" class="box-purchase-status grey-status">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-circle-fill" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>{{ order.status }}
                        </div>
                        <div v-if="order.status === 'Commande annulée'" class="box-purchase-status red-status">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-circle-fill" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>{{ order.status }}
                        </div>
                        <!-- End of Status condition -->
                    </b-button>
                </b-card-header>
                <b-collapse :id="order.orderNumberId" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-list-group v-for="product in order.products" :key="product._id" class="purchase-body">
                            <b-list-group-item class="purchase-body-product">
                                <img :src="product.imageUrl" />
                                <div>
                                    <h6>{{ product.libelle.toLowerCase() }}</h6>
                                    <p>
                                        Quantité: <span>{{ product.orderQuantity }}</span>
                                    </p>
                                    <span>{{
                                            (product.pvTtc * product.orderQuantity).toFixed(2)
                                    }}€</span>
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
                                    <div class="coupon_code right" data-aos="fade-up" data-aos-delay="400">
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


                        <!-- Order Modal -->
                        <OrderModal :order="order" @handleChangeOrderStatus=handleChangeOrderStatus />

                        <!-- <b-card-text
                >I start opened because <code>visible</code> is
                <code>true</code></b-card-text
              >
              <b-card-text>{{ text }}</b-card-text> -->
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>

    </div>

    <!-- </b-container> -->
</template>
<script>
import OrderModal from "@/components/admin/OrderModal"
export default {
    layout: 'admin',
    middleware: "auth",
    components: {
        OrderModal,
    },
    data() {
        return {
            orders: "",
            collapseOptions: {
                isOpen: false,
            },
            activeIndex: 0,


        }
    },

    methods: {
        async handleChangeOrderStatus(payload) {

            const fetchOrderStatus = await this.$axios.post("/order/changeOrderStatus/", payload)
            if (fetchOrderStatus) {
                this.$nuxt.refresh()
            }

        },
        openCollapse(collapseId) {
            this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
                console.log('collapseId:', collapseId)
                console.log('isJustShown:', isJustShown)
                this.collapseOptions.isOpen = isJustShown
            })
        },
        /* set active index on click */
        setActiveIndex(index) {
            this.activeIndex = index
            // if (this.activeIndex = index) {
            //     this.activeIndex = null
            // };
        },
        /* check if index is active or not */
        isActive(index) {
            // console.log('index:', index)
            if (this.activeIndex !== index) {
                return 0
            } else {
                return index === this.activeIndex;

            }
        }
    },
    async fetch() {
        try {
            const ordersData = await this.$axios.get("/order/allOrdersAdmin");
            if (ordersData) {
                this.orders = ordersData.data.orders

            }
        } catch (error) {
            console.log('error:', error)

        }
    },
    mounted() {
        if (this.$store.state.auth.user) {
            const userAuthObject = this.$store.state.auth.user.userObject;
            const role = this.$store.state.auth.user.userObject.role;
            if (role !== "administrator") {
                this.$router.push('/admin/no-access')
            }

        }
    },
}
</script>
<style scoped>
.box-purchase-header button {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    color: #000;
    border: none;
}


/* .open-accordion-btn {
    
} */
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

/* order Color status */
.orange-status {
    color: orange;
}

.blue-status {
    color: blue;
}

.green-status {
    color: green;
}

.red-status {
    color: red;
}

.grey-status {
    color: grey;
}
</style>