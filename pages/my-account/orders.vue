<template>
  <div>
    <!-- Banner Area -->
    <section v-if="enabled" id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>{{ this.title }}</h2>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- My Account-Area -->
    <section id="my-account_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-3 col-lg-3 dashboard_container">
            <!-- Nav tabs -->
            <div class="dashboard_tab_button">
              <b-navbar-nav>
                <b-nav-item to="/my-account">Tableau de bord</b-nav-item>
                <b-nav-item to="/my-account/orders">Commande</b-nav-item>
                <!-- <b-nav-item v-if="!enabled" to="/my-account/downloads"
                  >Downloads</b-nav-item
                > -->
                <b-nav-item to="/my-account/addresses">Adresse</b-nav-item>
                <b-nav-item to="/my-account/account-details"
                  >Détails du compte</b-nav-item
                >
                <b-nav-item @click="logout">Déconnexion</b-nav-item>
              </b-navbar-nav>
            </div>
          </div>
          <div class="col-sm-12 col-md-9 col-lg-9">
            <div class="dashboard_content">
              <h4>Commandes</h4>
              <div class="table_page table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Commandes</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody v-if="getOrderItems.length > 0">
                    <tr v-for="item in getOrderItems" :key="item.id">
                      <td>{{ item.orderNumberId }}</td>
                      <td>{{ item.date }}</td>
                      <td>
                        <span
                          class="success"
                          :class="orderStatusComputed(item.status)"
                          >{{ item.status }}</span
                        >
                      </td>
                      <td>{{ item.amount.toFixed(2) }} €</td>
                      <td>
                        <nuxt-link :to="`order/${item._id}`" class="view"
                          >Voir</nuxt-link
                        >
                      </td>
                    </tr>

                    <!-- <tr>
                      <td>2</td>
                      <td>May 10, 2018</td>
                      <td>Processing</td>
                      <td>$17.00 for 1 item</td>
                      <td>
                        <nuxt-link to="/cart/" class="view">Voir</nuxt-link>
                      </td>
                    </tr> -->
                  </tbody>
                  <p v-else>Vous n'avez pas encore de commande</p>
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
  name: "Orders",
  middleware: "auth",
  data() {
    return {
      enabled: true,
      title: "Commandes",
      orderStatus: {
        style: true,
      },
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Accueil",
          to: "/",
        },
        {
          text: "Commandes",
        },
      ],
    };
  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Orders page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$auth
        .logout("local")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    orderStatusComputed(status) {
      if (status.toLowerCase() === "en cours de traitement...") {
        return {
          "order-status-preparation": this.orderStatus.style,
        };
      } else if (status.toLowerCase() === "en attente...") {
        return {
          "order-status-pending": this.orderStatus.style,
        };
      } else if (status.toLowerCase() === "en cours de livraison") {
        return {
          "order-status-delivery": this.orderStatus.style,
        };
      } else if (status.toLowerCase() === "annulée") {
        return {
          "order-status-cancel": this.orderStatus.style,
        };
      } else if (status.toLowerCase() === "livrée") {
        return {
          "order-status-sucess": this.orderStatus.style,
        };
      }
    },
  },
  computed: {
    getOrderItems() {
      const ordersData = this.$store.state.order.orders.data.orders;

      return ordersData;
      // if (ordersData) {
      //   return ordersData;
      // } else {
      //   return false;
      // }
    },
    userId() {
      return this.$store.state.auth.user.userId;
    },
    // orderStatusComputed: () => {
    //   return {
    //     "order-status-sucess": this.orderStatus.pending,
    //   };
    // },
  },
  created() {
    const id = this.$store.state.auth.user.userId;
    console.log("id:", id);
    if (id) {
      this.$store.dispatch("order/getOrders", id);
    } else {
      console.log("Une erreur mounted");
    }
  },
};
</script>

<style>
.order-status-sucess {
  font-family: monospace;
  font-size: 15px;
  color: green;
}
.order-status-pending {
  color: rgb(255, 157, 0);
  font-family: monospace;
  font-size: 15px;
}
.order-status-preparation {
  color: blue;
  font-family: monospace;
  font-size: 15px;
}
.order-status-cancel {
  color: red;
  font-family: monospace;
  font-size: 15px;
}
</style>