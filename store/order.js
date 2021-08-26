//state
export const state = () => ({
    orderItems: [],
})

//Access on order state
export const getters = {
    orderItems: (state) => state.orderItems,
    apiResponse: (state) => state.orderItems.data.message
}

//Handle actions
export const actions = {
    //Send order 
    sendOrder({ commit }, item) {
        console.log(item)
        this.$axios.post('/order/addOrder', item).then((res) => {

            commit('SEND_ORDER', res)
        })
    }
}
//handle Mutations
export const mutations = {
    SEND_ORDER(state, orderItems) {
        state.orderItems = orderItems
    }
}
