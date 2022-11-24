<template>
    <div>
        <!-- <b-button v-b-modal.modalId variant="primary">xl modal</b-button> -->
        <button v-b-modal=customerId class="theme-btn-one btn-black-overlay btn-sm">Gérer</button>
        <b-modal :id="customerId" size="xl" title="Gérer la validation client" hide-footer>
            <!-- <ul>
                <li v-for="itemValidation in customer" :key="index">{{ itemValidation }}</li>
            </ul> -->

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
        validation() {
            this.validationOptions.push(this.customer.validationOptions);
            return this.validationOptions

        }
    },
    methods: {
        handleChangeValidationCustomer() {
            this.$emit("handleChangeValidationCustomer", handleChangeValidationCustomer)
            this.$bvModal.hide(this.customerId)
        }
        // handleChangeOrderStatus() {
        //     const status = this.orderStatusSelected
        //     const orderStatusObject = {
        //         orderId: this.order.orderNumberId,
        //         status: status,
        //         userId: this.order.userId
        //     };

        //     this.$emit("handleChangeOrderStatus", orderStatusObject)
        //     this.$bvModal.hide(this.modalId)

        // }
    }
}
</script>
<style >
.btn-modal {
    padding: 20px;
}
</style>