<template>
    <b-list-group>
        <!-- {{ productVariantsSort }} -->
        <b-list-group-item class=list-item v-for="(product, index) in productVariantsSort " :key="index">
            <img :src=product.imageUrl />
            {{ product.libelle }}
            <span id="variant-price">{{ product.pvTtc.toFixed(2) }}€</span>
            <h4 v-if="product.stock >= 1">
                <b-badge variant="success">En stock</b-badge>
            </h4>
            <h4 v-else>
                <b-badge variant="danger">Epuisé</b-badge>
            </h4>
            <CounterQuantity @clickQuantitySelect="clickQuantitySelect" :maxQuantity=product.stock />
            <button v-if="product.stock >= 1" type="submit" id="purchase-button"
                class="theme-btn-one btn-white-overlay btn_sm" @click="handleAddToCart(product)">
                Ajouter au panier
            </button>
        </b-list-group-item>
    </b-list-group>
</template>
<script>
import CounterQuantity from "@/components/product/CounterQuantity"

export default {
    props: {
        productVariants: Array
    },
    data() {
        return {
            orderQuantity: 1,
        }
    },
    components: {
        CounterQuantity
    },
    computed: {
        productVariantsSort() {
            let sortedProducts = this.productVariants;
            return sortedProducts =
                sortedProducts.sort((a, b) => {
                    let fa = a.libelle.toLowerCase(), fb = b.libelle.toLowerCase();
                    if (fa < fb) {
                        return -1
                    }
                    if (fa > fb) {
                        return 1
                    }
                    return 0

                });
            // return sortedProducts
        }
    },
    methods: {
        handleAddToCart(product) {
            const payloadObject = {
                product: product,
                orderQuantity: this.orderQuantity
            }
            this.$emit('handleAddToCart', payloadObject)
        },
        clickQuantitySelect(payload) {
            this.orderQuantity = payload
        }
    }
}
</script>
<style scoped>
#variant-price {
    font-size: 16px;
    font-weight: bold;
}

.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.list-item div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.list-item img {
    width: 100px;
}

@media only screen and (max-width : 768px) {

    .list-item,
    h4 {
        font-size: 12px;
    }

    #variant-price {
        font-size: 12px;

    }


}

@media only screen and (max-width : 425px) {

    .list-item,
    h4 {
        font-size: 16px;
    }

    .list-item {
        flex-direction: column;
    }

    #variant-price {
        font-size: 16px;

    }
}
</style>