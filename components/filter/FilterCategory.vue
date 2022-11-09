<template>
    <Button class=btn :text=buttonOptions.text @handleClick="handleClick" />
</template>
<script>
import Button from "@/components/Button/Button";
export default {
    components: Button,
    data() {
        return {
            buttonOptions: {
                text: "Filtrer",

            }
        }
    },
    methods: {
        handleClick() {
            this.$emit("handleClickFilter")

        }
    }
}
</script>
<style scoped>
@media only screen and (min-width: 1024px) {
    .btn {
        display: none;

    }
}
</style>