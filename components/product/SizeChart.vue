<template>
  <div>
    <button class="btn-orange" v-b-modal.modal-1>Tableau des tailles</button>
    <b-modal id="modal-1" hide-footer="true" hide-header="true">
      <h4>MESURES ANATOMIQUES TK</h4>
      <b-table striped :items="items"></b-table>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "SizeChart",
  data() {
    return {
      items: [
        {
          "BUSTE (CM)": 92,
          "TAILLE (CM)": 84,
          "TAILLE (UE)": 42,
        },
        {
          "BUSTE (CM)": 92,
          "TAILLE (CM)": 84,
          "TAILLE (UE)": 42,
        },
        {
          "BUSTE (CM)": 92,
          "TAILLE (CM)": 84,
          "TAILLE (UE)": 42,
        },
        {
          "BUSTE (CM)": 92,
          "TAILLE (CM)": 84,
          "TAILLE (UE)": 42,
        },
        {
          "BUSTE (CM)": 92,
          "TAILLE (CM)": 84,
          "TAILLE (UE)": 42,
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn-orange {
  width: 200px;
  height: 45px;
  background-color: #f56600;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.8px;
  margin: 15px 0 0 0;
}
</style>