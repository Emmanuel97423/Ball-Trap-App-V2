<template>
    <button class="theme-btn-one btn-black-overlay  btn_custom" @click="handleClick">{{ text }}</button>
</template>
<script>
export default {
    props: {
        text: String,
    },
    data() {
        return {

            data: "data"
        }
    },
    methods: {
        handleClick() {
            this.$emit("handleClick")
        }
    }
}
</script>
<style scoped>
.btn_custom {
    flex: 50%;
    height: 42px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    text-align: center;
}
</style>