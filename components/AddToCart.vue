<template>
<div>   <button
                    v-on:input="$emit('input', $event.target.value)"
                    class="theme-btn-one btn-black-overlay btn_sm"
                    @click="addToCart"
                    >Ajouter au panier</button
                  > {{ item }}</div>
   
</template>

<script>
export default {
    name: "AddToCart",
   props: {
   productId:String,
   productPrice:Number,
   productQuantity:Number,
   productTitle:String,
   productEan:Number,
   quantity:Number,
  },
data() {
      return {
          item: {
              productTitle : "",
               productPrice : "",
              productQuantity : "",
              productId : "",
              productEan: ""
          }
      }
  },
  methods: {
      addToCart() {
          this.item.productId = this.productId
          this.item.productTitle = this.productTitle
          this.item.productPrice = this.productPrice
          this.item.productQuantity = this.quantity
          this.item.productEan = this.productEan
          this.$store.commit('cart/addToCart', this.item)
      }
  },
  
  computed: {
    productItem(){
      return this.$store.getters['products/product']
      
    }
  },


}
</script>

<style>

</style>