<template>
    <div>
        <div v-if="minPrice !== maxPrice" class="price-range">
            <h4>{{ minPrice.toFixed(2) }}€-</h4>
            <h4>{{ maxPrice.toFixed(2) }}€</h4>
        </div>
        <div v-else class="price-range">
            <h4>{{ maxPrice.toFixed(2) }}€</h4>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        productGamme: Object,
        productsVariants: Array,
    },
    data() {
        return {
            // maxPrice: null,
            // minPrice: null,
        }
    },
    computed: {
        maxPrice() {
            const priceArray = [];
            if (this.productsVariants.length > 0) {
                this.productsVariants.map(product => {
                    priceArray.push(product.pvTtc)

                })
            }
            // let max = priceArray.sort((a, b) => a - b)[priceArray.length - 1]
            let max = Math.max(...priceArray)
            console.log('max:', max)
            // console.log('priceArray:', priceArray)
            return max
        },
        minPrice() {
            const priceArray = [];
            if (this.productsVariants.length > 0) {
                this.productsVariants.map(product => {
                    priceArray.push(product.pvTtc)

                })
            }
            let min = Math.min(...priceArray)
            console.log('min:', min)
            console.log('priceArray:', priceArray)
            return min
        }
    }

}
</script>
<style scoped>
.price-range {
    display: flex;
}

.price-range h4 {
    font-size: 16px;
}
</style>