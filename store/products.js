// Etat du Store > State
export const state = () => ({
    productItems: [],
    product: {},
    productSearchByGammes: [],
    gammes: []

})
//Date access on State
export const getters = {
    productItems: (state) => state.productItems,
    product: (state) => state.product,
    // gammes: (state) => state.productSearchByGammes
}
//Handle action
export const actions = {
    // List all products
    getProducts({ commit }) {
        this.$axios.get('/product/allProduct').then(res => {
            commit('SET_PRODUCTS', res.data)
        }).catch(err => { console.log(err) });
    },
    //One product data request
    getOneProduct({ commit }, id) {

        this.$axios
            .get("/gammes/productGamme/" + id)
            .then((res) => {
                commit('SET_ONE_PRODUCT', res.data)
            }).catch((err) => { console.log(err) })
    },

    decrementStock({ commit, state }, id) {

        const n = state.productItems.find(product => product._id === id)
        console.log('n:', n.quantity)

        if (n.quantity <= 0) {
            console.log("Quantité indisponible")
            return false
        } else {
            commit('DECREMENT_STOCK', n)

            console.log('product.quantity:', n.quantity)
            return true

        }


    },

    incrementStock({ commit, state }, id) {
        console.log('id:', id)

        const n = state.productItems.find(product => product._id === id)

        commit('INCREMENT_STOCK', n)


    },
    searchByCodeGamme({ commit }, codeGamme) {
        this.$axios.get('/product/search/' + codeGamme).then((response) => {

            commit('SET_SEARCH_BY_GAMME', response.data)
        }).catch((err) => { console.error(err) })
    },
    gammes({ commit }, gamme) {
        this.$axios.get('/gammes/gamme/' + gamme).then((response) => {

            commit('SET_SEARCH_GAMMES', response.data)
        }).catch((err) => { console.error(err) })
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
    SET_SEARCH_BY_GAMME(state, productSearchByGammes) {
        state.productSearchByGammes = productSearchByGammes
    },
    SET_GAMME(state, gammes) {
        state.product.gammes = gammes;
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


    },
    INCREMENT_STOCK(state, item) {
        const n = state.productItems.find(product => product._id === item._id)
        n.quantity++

        state.product.quantity++
    }
}