export const state = () => ({
    category: [],

});

export const getters = {

};

export const actions = {
    async getCategory({ commit }) {
        try {
            const fetchData = await this.$axios.get("/category");
            if (fetchData) {
                commit('SET_CATEGORY', fetchData.data)

            }
        } catch (error) {
            console.log('error:', error)

        }
    }
};

export const mutations = {
    SET_CATEGORY(state, category) {
        state.category = category;
    }
}