<template>
    <b-form-group class=filter__price v-slot="{ ariaDescribedby }">
        {{ selected }}
        <h4 class="title-left-filter ">Prix</h4>
        <b-form-checkbox-group class=filter__price-item v-model="selected" :options="options"
            :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
    </b-form-group>
</template>

<script>
export default {
    data() {
        return {
            selected: [], // Must be an array reference!
            options: [
                { text: 'Moins de 50 €', value: -50 },
                { text: '50€ - 100€', value: [50, 100] },
                { text: '100€ - 200€', value: [100, 200] },
                { text: '200€ - 300€', value: [200, 300] },
                { text: '300€ - 400€', value: [300, 400] },
                { text: '400€ +', value: +400 }
            ]
        }
    }
}
</script>
<style>
.filter__price {
    margin: 30px 0 0 0;
}

.filter__price-item {
    font-size: 12px;
}
</style>