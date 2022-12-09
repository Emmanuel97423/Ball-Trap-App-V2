<template>
    <article>
        <h1>{{ page.title }}</h1>
        <nuxt-content class="nuxt-content" :document="page" />
    </article>
</template>

<script>
export default {
    layout: 'admin',
    async asyncData({ $content }) {
        const page = await $content('docs/home').fetch()


        return {
            page
        }
    }
}
</script>
<style >
.nuxt-content {
    max-width: 768px;
    padding: 0 40px 40px 0;
}
</style>
