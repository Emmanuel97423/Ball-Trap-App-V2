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
        handleClick(payload) {
            console.log('payload:', payload)

        }
    }
}
</script>
<style scoped>
.btn {
    flex: 30%;
}

@media only screen and (min-width: 768px) {
    .btn {
        display: none;

    }
}
</style>