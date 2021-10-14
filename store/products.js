// Etat du Store > State
export const state = () => ({
    productItems: [],
    product: {

    },
})
//Date access on State
export const getters = {
    productItems: (state) => state.productItems,
    product: (state) => state.product
}
//Handle action
export const actions = {
    // List all products
    getProducts({ commit }) {
        this.$axios.get('/product/allProduct').then(res => {
            commit('SET_PRODUCTS', res.data)
        })
    },
    //One product data request
    getOneProduct({ commit }, id) {

        this.$axios
            .get("/product/" + id)
            .then((res) => {

                commit('SET_ONE_PRODUCT', res.data)
            }).catch((err) => { console.log(err) })
    },

    decrementStock({ commit, state }, id) {

        const n = state.productItems.find(product => product._id === id)

        if (n.quantity <= 0) {
            console.log("Quantité indisponible")
            return false
        } else {
            commit('DECREMENT_STOCK', n)

            console.log('product.quantity:', n.quantity)
            return true

        }


    }
}
//Handle mutations
export const mutations = {
    SET_PRODUCTS(state, productItems) {
        state.productItems = productItems;
    },
    SET_ONE_PRODUCT(state, product) {
        state.product = product;
    },

    //DECREMENTION STOCK
    DECREMENT_STOCK(state, item) {

        const n = state.productItems.find(product => product._id === item._id)
        n.quantity--

        state.product.quantity--
        // const product = state.productItems.find(product => product._id === id)
        // // console.log('product:', product)
        // if (product.quantity <= 0) {
        //     console.log("Quantité indisponible")
        //     return product
        // } else {
        //     product.quantity--
        //     console.log('product.quantity:', product.quantity)
        //     return product

        // }


    }
}