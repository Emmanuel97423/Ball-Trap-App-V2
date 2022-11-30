<template>
  <div>
    <button class="btn-orange" v-b-modal.modal-1>Tableau des tailles</button>
    <b-modal id="modal-1" body-class="body-chart-size" dialog-class="dialog-chart-size"
      content-class="content-chart-size" modal-class="modal-chart-size" :hide-footer="true">
      <div class="chart-size-content">
        <div><img src="@/assets/img/chart-size.png" /></div>
        <div>
          <h4>MESURES ANATOMIQUES {{ productName }}</h4>
          <br />
          <p>
            Si les mesures anatomiques ne convergent pas vers la même taille,
            nous suggérons de donner plus d'importance à la mesure de la taille.
          </p>
          <br />
        </div>
      </div>
      <b-table striped :items="items"></b-table>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "SizeChart",
  props: {
    productName: String,
  },
  data() {
    return {
      items: [
        {
          "BUSTE (CM)": 92,
          "TAILLE (CM)": 84,
          "TAILLE (UE)": 42,
        },
        {
          "BUSTE (CM)": 96,
          "TAILLE (CM)": 88,
          "TAILLE (UE)": 44,
        },
        {
          "BUSTE (CM)": 100,
          "TAILLE (CM)": 92,
          "TAILLE (UE)": 46,
        },
        {
          "BUSTE (CM)": 104,
          "TAILLE (CM)": 96,
          "TAILLE (UE)": 48,
        },
        {
          "BUSTE (CM)": 108,
          "TAILLE (CM)": 100,
          "TAILLE (UE)": 50,
        },
        {
          "BUSTE (CM)": 112,
          "TAILLE (CM)": 104,
          "TAILLE (UE)": 52,
        },
        {
          "BUSTE (CM)": 116,
          "TAILLE (CM)": 108,
          "TAILLE (UE)": 54,
        },
        {
          "BUSTE (CM)": 120,
          "TAILLE (CM)": 112,
          "TAILLE (UE)": 56,
        },
        {
          "BUSTE (CM)": 124,
          "TAILLE (CM)": 116,
          "TAILLE (UE)": 58,
        },
        {
          "BUSTE (CM)": 128,
          "TAILLE (CM)": 120,
          "TAILLE (UE)": 60,
        },
        {
          "BUSTE (CM)": 132,
          "TAILLE (CM)": 124,
          "TAILLE (UE)": 62,
        },
        {
          "BUSTE (CM)": 136,
          "TAILLE (CM)": 128,
          "TAILLE (UE)": 64,
        },
        {
          "BUSTE (CM)": 140,
          "TAILLE (CM)": 132,
          "TAILLE (UE)": 66,
        },
        {
          "BUSTE (CM)": 144,
          "TAILLE (CM)": 136,
          "TAILLE (UE)": 68,
        },
        {
          "BUSTE (CM)": 148,
          "TAILLE (CM)": 140,
          "TAILLE (UE)": 70,
        },
        {
          "BUSTE (CM)": 152,
          "TAILLE (CM)": 144,
          "TAILLE (UE)": 72,
        },
        {
          "BUSTE (CM)": 156,
          "TAILLE (CM)": 148,
          "TAILLE (UE)": 74,
        },
        {
          "BUSTE (CM)": 160,
          "TAILLE (CM)": 152,
          "TAILLE (UE)": 76,
        },
        {
          "BUSTE (CM)": 164,
          "TAILLE (CM)": 156,
          "TAILLE (UE)": 78,
        },
      ],
      modalOptions: {
        hideFooter: true,
        hideHeader: true,
      },
    };
  },
};
</script>

<style >
.btn-orange {
  width: 200px;
  height: 45px;
  background-color: #f56600;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.8px;
  margin: 15px 0 0 0;
}

.chart-size-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 425px) {
  .chart-size-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .btn-orange {
    width: 100%;
  }
}

.chart-size-content img {
  margin: 0 200px 0 0;
}

.modal-chart-size {
  width: 100%;
}
</style>