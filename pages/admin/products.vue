<template>
    <div>
        <h1>Articles</h1>
    </div>
</template>
<script>
export default {
    layout: 'admin',
    middleware: "auth",
    mounted() {
        if (this.$store.state.auth.user) {
            const userAuthObject = this.$store.state.auth.user.userObject;
            const role = this.$store.state.auth.user.userObject.role;
            if (role !== "administrator") {
                this.$router.push('/admin/no-access')
            }
        }
    },
}
</script>
<style>

</style>