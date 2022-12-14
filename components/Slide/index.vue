<template>
    <div>
        <h1>{{ slideObject.title }}</h1>
        <h2>{{ slideObject.description }}</h2>
        <!-- <img :src="#" alt="" />
        <Button class="landingpage_calltoaction-01-btn" text="En savoir plus" /> -->
    </div>
</template>
<script>
export default {
    props: {
        slideObject: Object
    },

    // data() {
    //     return {
    //         slideObject: ""
    //     }
    // },

    async fetch() {

        // try {
        //     const slideData = await this.$axios.get('/slides');
        //     console.log('slideData:', slideData.data.slide);
        //     this.slideObject = slideData.data.slide
        // } catch (error) {
        //     console.log('error:', error)

        // }

    }

}
</script>
<style>

</style>