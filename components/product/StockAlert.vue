<template>
  <b-container class="stock-alert-container" fluid>
    <p class="stock-alert-label">
      *Entrez votre e-mail afin d'être informer lorsque l'article sera de
      nouveau disponible
    </p>
    <b-row class="my-1" v-for="type in types" :key="type">
      <!-- <b-col sm="3">
        <label :for="`type-${type}`"
          >M'informer lorsque l'article est de nouveau disponible</label
        >:
      </b-col> -->
      <b-col>
        <b-form-input
          :id="`type-${type}`"
          :type="type"
          placeholder="E-mail"
        ></b-form-input>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "StockAlert",
  props: {
    productQuantity: Number,
  },
  data() {
    return {
      types: ["email"],
    };
  },
};
</script>
<style >
.stock-alert-container {
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #cecece;
  border-radius: 5px;
}
.stock-alert-container input {
  width: 30%;
}
.stock-alert-label {
  color: #008000;
  font-size: 12px;
  letter-spacing: 1;
}
@media (max-width: 425px) {
  .stock-alert-container input {
    width: 100%;
  }
}
</style>