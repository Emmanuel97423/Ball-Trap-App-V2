<template>
    <div class="header_search-input">
        <b-form-input v-model="text" placeholder="Rechercher" :type="types.search"></b-form-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: '',
            types: [
                "search"
            ]
        }
    }
}
</script>

<style scoped>
.header_search-input {
    margin: 0 0 0 20px;
    width: 40%;
}

.header_search-input input {
    width: 100%;
}
</style>