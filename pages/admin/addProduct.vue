<template>
  <div class="box">
    <h2>Ajouter un produit</h2>
    <b-form class="form" @submit="onSubmit" @reset="onReset" v-if="show">
      <!--Ean Code-->

      <b-form-group id="input-group-1" label="Ean code:" label-for="input-2">
        <b-form-input
          id="input-1"
          v-model="form.ean"
          placeholder="Ean Code"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <!--Name-->

      <b-form-group
        id="input-group-2"
        label="Nom du produit:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Nom"
          required
        ></b-form-input>
      </b-form-group>

      <!--Type-->

      <b-form-group
        id="input-group-3"
        label="Type (catégorie):"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.type"
          placeholder="Type"
          required
        ></b-form-input>
      </b-form-group>

      <!--Manufacturer-->

      <b-form-group
        id="input-group-4"
        label="Manufacturer (marque):"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.manufacturer"
          placeholder="Marque"
          required
        ></b-form-input>
      </b-form-group>

      <!--shortDescription-->

      <b-form-group
        id="input-group-5"
        label="Description courte:"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          v-model="form.shortDescription"
          placeholder="Description courte"
          required
        ></b-form-input>
      </b-form-group>

      <!--Description-->

      <b-form-group
        id="input-group-6"
        label="Description longue:"
        label-for="input-6"
      >
        <b-form-input
          id="input-2"
          v-model="form.description"
          placeholder="Description longue"
          required
        ></b-form-input>
      </b-form-group>

      <!--Images-->

      <b-form-group id="input-group-6" label="Images:" label-for="input-2">
        <br />
        <p>Image 1</p>
        <b-form-file
          v-model="form.imageUrl1"
          class="mt-3"
          plain
        ></b-form-file> </b-form-group
      ><br />
      <!--Prix d'achat-->

      <b-form-group
        id="input-group-7"
        label="Prix d'achat(€):"
        label-for="input-6"
      >
        <b-form-input
          id="input-7"
          v-model="form.costPrice"
          placeholder="00.00"
          type="number"
          min="0"
          step="0.01"
          pattern="^\d*(\.\d{0,2})?$"
          required
        ></b-form-input>
      </b-form-group>

      <!--Prix-->

      <b-form-group id="input-group-7" label="Prix(€):" label-for="input-6">
        <b-form-input
          id="input-7"
          v-model="form.price"
          placeholder="00.00"
          type="number"
          min="0"
          step="0.01"
          pattern="^\d*(\.\d{0,2})?$"
          required
        ></b-form-input>
      </b-form-group>

      <!--Tax-->

      <b-form-group id="input-group-8" label="Tax:" label-for="input-6">
        <b-form-input
          id="input-8"
          v-model="form.tax"
          placeholder="tax"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <!--Quantity-->

      <b-form-group id="input-group-9" label="Quantité:" label-for="input-9">
        <b-form-input
          id="input-9"
          v-model="form.quantity"
          placeholder="quantité"
          type="number"
          min="0"
          step="1"
          required
        ></b-form-input>
      </b-form-group>

      <!--Status-->

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.actived"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="Actived">Activé</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <button
        class="theme-btn-one btn-black-overlay btn_md"
        type="submit"
        variant="primary"
      >
        Valider
      </button>
      <button
        class="theme-btn-one btn-black-overlay btn_md"
        type="reset"
        variant="danger"
      >
        Reset
      </button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      form: {
        ean: "",
        name: "",
        type: "",
        manufacturer: "",
        shortDescription: "",
        description: "",
        imageUrl1: null,
        imageUrl2: null,
        imageUrl3: null,
        price: null,
        costPrice: null,
        quantity: null,
        tax: "",
        actived: "none",
      },

      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      const blob = this.form.imageUrl1;
      const formData = new FormData();
      event.preventDefault();
      formData.append("image", blob);
      formData.append("ean", this.form.ean);
      formData.append("description", this.form.description);
      formData.append("manufacturer", this.form.manufacturer);
      formData.append("name", this.form.name);
      formData.append("price", this.form.costPrice);
      formData.append("costPrice", this.form.price);
      formData.append("quantity", this.form.quantity);
      formData.append("shortDescription", this.form.shortDescription);
      formData.append("tax", this.form.tax);
      formData.append("type", this.form.type);
      formData.append("actived", this.form.actived);

      //Envoi données
      this.$axios
        .post("/product/addProduct", formData)
        .then((response) => {
          if (response.status === 201) {
            console.log(response);
          }
        })
        .catch((err) => console.log(err));
      alert(JSON.stringify(this.form));
    },

    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.box {
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  width: 50%;
  margin: 3rem 0;
}
</style>
