<template>
  <div>
    <b-card no-body class="overflow-hidden click-and-collect-card">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            src="@/assets/img/common/littora-peche-img.jpg"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Retrait mardi 23/09">
            <h4>Ville de Saint-Paul</h4>
            <b-card-text>
              61 Rue Marius et Ary Leblond, <br /><span
                >St Paul 97460, La Réunion</span
              >.
            </b-card-text>
            <!-- <b-form-checkbox
              class="click-and-collect-checkbox"
              v-model="checked"
              name="check-button"
              size="lg"
              switch
            >
              Switch Checkbox <b>(Checked: {{ checked }})</b>
            </b-form-checkbox> -->
            <!-- <b-button class="theme-btn-one btn-black-overlay btn_sm"
              >Choisir</b-button
            > -->
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ClickAndCollectSelect",
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style >
.click-and-collect-card {
  margin: 30px 0 0 0;
  max-height: 190px;
  cursor: pointer;
}
.click-and-collect-card:focus {
  border: 10px solid green;
}
.click-and-collect-card h4 {
  text-transform: uppercase;
}
.click-and-collect-card span {
  text-transform: uppercase;
  font-weight: bold;
}
/* .click-and-collect-checkbox input {
  width: 100%;
} */
.card-title {
  color: #f79837;
}
</style>