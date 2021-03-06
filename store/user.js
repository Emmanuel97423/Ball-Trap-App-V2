import qs from 'qs';

//state
export const state = () => ({
    userSignup: [],
    userLogin: [],
    userDetails: [],
    userAdresse: []

})
//Access on order state
export const getters = {
    userDetails: (state) => state.userDetails,
    userSignup: (state) => state.userSignup,
    userLogin: (state) => state.userLogin,
}

//Handle actions
export const actions = {

    //Send order 
    signup({ commit }, item) {

        this.$axios.post('/user/signup', item).then((res) => {

            commit('SIGNUP', res.data)
            this.$router.push('/confirmEmailPage')
        }).catch((err) => { commit('SIGNUP', err.response.data) })


    },
    //Login
    // login({ commit }, item) {
    //     // console.log(item)
    //     commit('LOGIN', item)
    // },
    //Get user Details
    getUserDetails({ commit }, id) {

        this.$axios.get('auth/user/' + id).then((res) => {
            // console.log(res)
            commit('USER_DETAILS', res)
        }).catch((err) => { commit('USER_DETAILS', err.response.data.message) })
    },
    //Update account
    update({ commit }, item) {

        this.$axios.put('user/update/' + item.userObjectId, item.userDetailsObject).then((res) => {
            console.log(res)
        }).catch((err) => { console.log(err) })
    },

    //Post Adresse
    addAdresse({ commit }, item) {
        console.log(item.invoiceUserId)
        this.$axios.put('/user/addInvoicingAdresse/' + item.invoiceUserId, item).then((res) => {
            // commit('USER_ADRESSE', res)

        }).catch((err) => { console.log(err) })
    }
}
//handle Mutations
export const mutations = {
    SIGNUP(state, response) {
        state.userSignup = response
    },
    USER_DETAILS(state, response) {
        state.userDetails = response
    },
    LOGIN(state, response) {
        state.userLogin = response
    }
}