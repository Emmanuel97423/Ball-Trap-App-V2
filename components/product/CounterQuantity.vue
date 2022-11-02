<template>
    <div>
        <div v-if="maxQuantity >= 1" class="product_count_one pt-15" @click="clickQuantitySelect(orderQuantity)">
            <b-form-spinbutton required id="sb-inline" v-model="orderQuantity" inline class="border-0" min="1"
                :max="maxQuantity">
            </b-form-spinbutton>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        maxQuantity: Number
    },
    data() {
        return {
            orderQuantity: 1,

        }
    },
    methods: {
        clickQuantitySelect(orderQuantity) {
            this.$emit('clickQuantitySelect', orderQuantity)

        }
    }
}
</script>