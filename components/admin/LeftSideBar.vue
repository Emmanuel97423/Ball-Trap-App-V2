<template>
    <div>
        <Logo class="admin-logo" />
        <b-nav v-for="menuItem in menu" :key="menu.name" vertical class="w-25">
            <!-- <b-nav-item @click="handleChangeSection(menuItem.link)">{{ menuItem.name }}</b-nav-item> -->
            <b-nav-item :to='`${"/admin/" + menuItem.link}`'>
                <h4>{{ menuItem.name }}</h4>
            </b-nav-item>
        </b-nav>
    </div>
</template>
<script>
import Logo from "@/components/Logo"
export default {
    name: "LeftSideBar",
    components: { Logo },
    data() {
        return {
            menu: [
                {
                    name: "Tableau de bord",
                    link: ""
                },
                {
                    name: "Commandes",
                    link: "orders"
                },
                {
                    name: "Clients",
                    link: "customers"
                },
                {
                    name: "Articles",
                    link: "products"
                },
                {
                    name: "Slides",
                    link: "slides"
                },
                {
                    name: "Documentation",
                    link: "docs"
                },

            ]
        }
    },
    methods: {
        // handleChangeSection(e) {
        //     console.log('e:', e)
        //     this.$router.push("/admin/" + e)

        // }
    }
}
</script>
<style scoped>
.admin-logo {
    padding: 20px 0;
}
</style>