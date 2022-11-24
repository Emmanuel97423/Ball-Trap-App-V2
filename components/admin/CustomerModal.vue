<template>
    <div>
        <!-- <b-button v-b-modal.modalId variant="primary">xl modal</b-button> -->
        <button v-b-modal=customerId class="theme-btn-one btn-black-overlay btn-sm">Gérer</button>
        <b-modal :id="customerId" size="xl" title="Gérer la validation client" hide-footer>
            <!-- {{ customer }}
            {{ accountVerification }} -->
            <b-list-group>
                <b-list-group-item v-for="(item, index) in accountVerification" :key="index">
                    <i v-if="item.statusCode" class="fas fa-check item_valided-icon"></i>
                    <i v-else class="fas fa-ban item_unvalided-icon"></i>
                    {{ item.title }}
                    <b-form-checkbox v-model="item.statusCode" name="check-button" switch>

                    </b-form-checkbox>
                </b-list-group-item>
            </b-list-group>

            <button class="theme-btn-one btn-black-overlay btn_md"
                @click="handleChangeValidationCustomer()">Sauvegarder</button>
        </b-modal>

    </div>
</template>
<script>
export default {
    name: "CustomerModal",
    props: { customer: Object },
    data() {
        return {
            validationOptions: [],
            accountVerification: [
                {
                    id: 1,
                    title: "Pièce d'identité recto (CNI ou passeport)",
                    status: "unValided",
                    statusCode: null
                },
                {
                    id: 2,
                    title: "Pièce d'identité Verso (CNI)",
                    status: "unValided",
                    statusCode: null
                },
                {
                    id: 3,
                    title: "Justificatif de domicile (- de 3 mois)",
                    status: "unValided",
                    statusCode: null
                },
                {
                    id: 4,
                    title: "Permis de chasser",
                    status: "unValided",
                    statusCode: null
                },
                {
                    id: 5,
                    title: "Licence de Tir en cours de validité",
                    status: "unValided",
                    statusCode: null
                },
                {
                    id: 6,
                    title: "Licence de Tir FFT Verso",
                    status: "unValided",
                    statusCode: null
                },
                {
                    id: 7,
                    title: "Validation du permis de chasser de l'année en cours ou licence de Tir FFBT ou FFTir en cours de validité signée et tamponnée par le médecin.",
                    status: "unValided",
                    statusCode: null
                }


            ]
        }
    },
    // watch: {
    //     orderStatusOptions() {
    //         this.handleChangeOrderStatus()
    //     }
    // },
    computed: {
        customerId() {
            return this.customer._id
        },

    },
    methods: {
        handleChangeValidationCustomer() {
            this.$emit("handleChangeValidationCustomer", {
                "verification": this.accountVerification, "customerId": this.customer._id
            })
            this.$bvModal.hide(this.customerId)
        }

    },
    mounted() {
        this.accountVerification[0].statusCode = this.customer.validationOptions.identityJustificatifRecto;
        this.accountVerification[1].statusCode = this.customer.validationOptions.identityJustificatifVerso;
        this.accountVerification[2].statusCode = this.customer.validationOptions.adressJustificatif;
        this.accountVerification[3].statusCode = this.customer.validationOptions.chassePermisJustificatif;
        this.accountVerification[4].statusCode = this.customer.validationOptions.licenceTirJustificatif;
        this.accountVerification[5].statusCode = this.customer.validationOptions.licenceTirFftJustificatif;
        this.accountVerification[6].statusCode = this.customer.validationOptions.permisChasseFFBTJustificatif;
    }
}
</script>
<style >
.btn-modal {
    padding: 20px;
}
</style>