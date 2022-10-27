<template>
    <div>

        <!-- <b-button v-b-modal.modalId variant="primary">xl modal</b-button> -->
        <button v-b-modal=modalId class="theme-btn-one btn-black-overlay btn_md">Gérer la
            commande</button>
        <b-modal :id="modalId" size="xl" title="Gérer la commande" hide-footer>
            Commande N° {{ order.orderNumberId }}<br>
            Status actuel: {{ order.status }}
            <b-form-select v-model="orderStatusSelected" :options="orderStatusOptions" size="sm" class="mt-3">
            </b-form-select>

            <button class="theme-btn-one btn-black-overlay btn_md btn-modal">Sauvegarder</button>
        </b-modal>

    </div>
</template>
<script>
export default {
    name: "OrderModal",
    props: { order: Object },
    data() {
        return {
            orderStatusOptions: [
                { value: null, text: 'Modifier le status' },
                { value: "En attente...", text: "En attente..." },
                { value: "En cours de préparation", text: "En cours de préparation" },
                { value: "Commande prête", text: "Commande prête" },
                { value: "Commande retirée", text: "Commande retirée" },
            ],
            orderStatusSelected: null
        }
    },
    computed: {
        modalId() {
            return this.order._id
        }
    }
}
</script>
<style >
.btn-modal {
    margin: 20px 0 0 0;
}
</style>