export const state = () => ({
    userAdresses: [],
    apiResponse: ""
})

export const actions = {
    //Add an adress
    addAdress({ commit }, item) {

        this.$axios.post('adress/addAdress', item).then((response) => {

            commit('ADD_ADRESS', response)
        }).catch((err) => { commit('ADD_ADRESS', err.response.data.message) })
    },
    //Get adresses by username
    getAdresses({ commit }, id) {
        this.$axios.get('adress/getAdresses/' + id).then((response) => {
            commit('GET_ADRESSES', response)

        }).catch((err) => { commit('GET_ADRESSES', err.response.data.message) })
    },
    //update
    // updateAdress({ commit }, item) {
    //     console.log('item:', item)
    //     this.$axios.put('adress/updateAdress', item).then((response) => {
    //         console.log(response)

    //     })
    // }
}

//handle Mutations
export const mutations = {
    ADD_ADRESS(state, response) {
        state.apiResponse = response
    },
    GET_ADRESSES(state, response) {
        state.userAdresses = response
    }

}