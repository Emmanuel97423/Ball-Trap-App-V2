//state
export const state = () => ({
    orderItems: [],
    // apiResponse: "",
    clientSecret: ""

})

//Access on order state
export const getters = {
    orderItems: (state) => state.orderItems,
    // apiResponse: (state) => state.orderItems.data.message,
    clientSecret: (state) => state.clientSecret
    //product
    //customer
    //Order
}

//Handle actions
export const actions = {
    getOrderItems({ commit }) {
        const orderItems = this.$store.state.cart.items
        console.log('orderItems:', orderItems)

    },
    //Send order 
    sendOrder({ commit }, item) {
        //Variables 
        //Product
        //customer

        this.$axios.post('/order/addOrder', item).then((res) => {
            console.log(item)
            commit('SEND_ORDER', res)


        }).catch((err) => { commit('SEND_ORDER', err) })
    },
    //Get Stripe getsecret 
    getPaymentSecret({ commit }, item) {
        this.$axios.post('/order/paymentSecret', item).then((response) => {
            // console.log(response)
            return response.data
        }).then((responseJson) => {
            let clientSecret = responseJson.client_secret;
            // console.log("client secret: " + clientSecret)
            commit('PAYMENT_SECRET', clientSecret)
            // Render the form to collect payment details, then
            // call stripe.confirmCardPayment() with the client secret.
        }).catch((err) => { console.log(err) });
    }

}
//handle Mutations
export const mutations = {
    SEND_ORDER(state, orderItems) {
        state.orderItems = orderItems
    },
    PAYMENT_SECRET(state, clientSecret) {
        state.clientSecret = clientSecret
    }
}
