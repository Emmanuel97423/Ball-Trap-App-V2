// Etat du Store > State
export const state = ()=>({
    productItems : [], 
    product:[],   
})
//Date access on State
export const getters = {
    productItems: (state) => state.productItems, 
    product:(state)=> state.product   
}
//Handle action
export const actions = {
    // List all products
       getProducts({commit}) {
        this.$axios.get('/product/allProduct').then(res => {
            commit('SET_PRODUCTS', res.data)
        })
    },
    //One product data request
    getOneProduct({commit}, id) {
       
          this.$axios
        .get("/product/" + id)
        .then((res) => {
            
          commit('SET_ONE_PRODUCT', res.data)
        }).catch((err) => {console.log(err)})
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
    DECREMENT_STOCK(state, { id }) {
        const product = state.product.find(product => product.id === id)
        product.quantity--
    }
}