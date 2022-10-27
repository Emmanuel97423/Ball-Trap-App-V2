<template>
    <div>
        <b-nav v-for="menuItem in menu" :key="menu.name" vertical class="w-25">
            <!-- <b-nav-item @click="handleChangeSection(menuItem.link)">{{ menuItem.name }}</b-nav-item> -->
            <b-nav-item :to='`${"/admin/" + menuItem.link}`'>{{ menuItem.name }}</b-nav-item>

        </b-nav>
    </div>
</template>
<script>
export default {
    name: "LeftSideBar",
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
                    name: "Articles",
                    link: "products"
                }
            ]
        }
    },
    methods: {
        handleChangeSection(e) {
            console.log('e:', e)
            this.$router.push("/admin/" + e)

        }
    }
}
</script>
<style>

</style>