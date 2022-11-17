<template>
  <div>
    <b-form-radio-group v-for="(adressItem, index) in adresses" :key="adressItem.id">
      <b-card no-body :class="{ adressClassSelected: adressItem.checked }"
        class="overflow-hidden click-and-collect-card">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="adressItem.imageUrl" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="`A partir du ${nextDateComputed}`">
              <h4>{{ adressItem.title }}</h4>
              <b-card-text>
                {{ adressItem.adress }}, <br /><span>{{ adressItem.city }} {{ adressItem.zip }},
                  {{ adressItem.region }}</span>.
              </b-card-text>

              <b-form-checkbox class="click-and-collect-checkbox" v-model="adressSelected" name="check-button" size="lg"
                :value="adressItem" switch @change="submitAdress(adressSelected, index)">
                <!-- Switch Checkbox <b>( {{ adressSelected.city }})</b> -->
              </b-form-checkbox>

              <b-button class="theme-btn-one btn-black btn_sm btn-contact-shop">Contacter le magasin</b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-form-radio-group>
  </div>
</template>

<script>
export default {
  name: "ClickAndCollectSelect",
  data() {
    return {
      // checked: false,
      adresses: [
        {
          id: 1,
          title: "Ville de Saint-Paul",
          imageUrl: require("/assets/img/common/littora-peche-img.jpg"),
          collectDate: "Retrait mardi 23/09",
          adress: "61 Rue Marius et Ary Leblond",
          city: "Saint-Paul",
          zip: "97460",
          region: "La Réunion",
          checked: true,
        },
        // {
        //   id: 2,
        //   title: "Ville de Saint-Denis",
        //   imageUrl: require("/assets/img/common/littora-peche-img.jpg"),
        //   collectDate: "Retrait mardi 23/09",
        //   adress: "61 Rue Marius et Ary Leblond",
        //   city: "Saint-Denis",
        //   zip: "97460",
        //   region: "La Réunion",
        //   checked: false,
        // },
      ],
      adressSelected: {
        id: 1,
        title: "Ville de Saint-Paul",
        imageUrl: require("/assets/img/common/littora-peche-img.jpg"),
        collectDate: "Retrait mardi 23/09",
        adress: "61 Rue Marius et Ary Leblond",
        city: "Saint-Paul",
        zip: "97460",
        region: "La Réunion",
        checked: true,
      },
    };
  },
  computed: {
    nextDateComputed() {
      // const tz = "Indian/Reunion";
      // const dayjsReunion = this.$dayjs().dayjsLocal.tz(tz);
      let day = this.$dayjs().day();
      // console.log("day:", day);
      if (1 <= day && day < 6) {
        return this.$dayjs().add(1, "day").format("dddd DD.MM");
      } else if (day == 6) {
        return this.$dayjs().add(3, "day").format("dddd DD.MM");
      } else if (day == 0) {
        return this.$dayjs().add(2, "day").format("dddd DD.MM");
      }
    },
  },
  methods: {
    async submitAdress(adressSelected, index) {
      const adressLength = this.adresses.length;

      for (let i = 0; i < adressLength; i++) {
        this.adresses[i].checked = false;
      }
      this.adresses[index].checked = true;

      try {
        this.$emit("click-collect-adress", { adressSelected: adressSelected });
      } catch (error) {
        console.log("error:", error);
      }
    },
  },
  mounted() {
    this.$emit("click-collect-adress", { adressSelected: this.adressSelected });
  },
};
</script>

<style >
.click-and-collect-card {
  margin: 30px 0 0 0;

  /* cursor: pointer; */
}

/* .click-and-collect-card:focus {
  border: 10px solid green;
} */
.click-and-collect-card h4 {
  text-transform: uppercase;
}

.click-and-collect-card span {
  text-transform: uppercase;
  font-weight: bold;
}

.btn-contact-shop {
  width: 100%;
  margin: 15px 0 0 0;
}

.adressClassSelected {
  border: 10px solid #efc69d;
}

/* .click-and-collect-checkbox input {
  width: 100%;
} */
.card-title {
  color: #f79837;
}
</style>