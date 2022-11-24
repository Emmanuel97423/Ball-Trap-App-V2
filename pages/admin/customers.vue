<template>
    <div class="container">
        <h1>Clients</h1>

        <div>
            <b-table striped hover :items="customers" :fields="fields">
                <template #cell(Numéro)="data">
                    {{ data.index + 1 }}
                </template>
                <template #cell(isValided)="data">
                    <i v-if="data.item.isValided" class="fas fa-check item_valided-icon"></i>
                    <i v-else class="fas fa-ban item_unvalided-icon"></i>
                </template>
                <template #cell(Gérer)="data">
                    <button class="theme-btn-one btn-black-overlay btn_sm">Gérer</button>
                </template>
            </b-table>
        </div>
    </div>

</template>
<script>
export default {
    layout: 'admin',
    data() {
        return {
            customers: "",
            fields: [
                "Numéro",
                {
                    key: "createdAt",
                    label: "Date d'inscription",
                    sortable: false,
                },
                {
                    key: "firstName",
                    label: "Pseudo",
                    sortable: false,
                },
                {
                    key: "isValided",
                    label: "Compte validé",
                    sortable: false,
                },

                "Gérer"
            ]
        }
    },
    async fetch() {
        try {
            const customers = await this.$axios.get("/user/getAllUsers")
            if (customers) {
                console.log('customers:', customers)
                this.customers = customers.data.user
            }
        } catch (error) {
            console.log('error:', error)

        }
    }
}
</script>
<style >
.item_unvalided-icon {
    color: rgb(177, 12, 12);
}

.item_valided-icon {
    color: rgb(55, 183, 0);
}
</style>