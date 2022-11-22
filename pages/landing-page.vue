<template>
    <div class="landingpage_container">
        <div class="landingpage_calltoaction-01" :style="slide.image">
            <div>
                <h1>Le Black Friday arrive</h1>
                <h2>Et il est plus intense que jamais!</h2>
                <Button class="landingpage_calltoaction-01-btn" text="En savoir plus" />
            </div>
            <!-- <img :src="require('@/assets/img/slide/call-to-action-01.jpg')" /> -->

        </div>
    </div>
</template>
<script>
import Button from "@/components/Button/Button"
export default {
    layout: "default",
    components: {
        Button,
    },
    data() {
        return {
            slide: {
                image: { backgroundImage: `url(${require('@/assets/img/slide/call-to-action-01.jpg')})` }
            }
        }
    }
}
</script>
<style >
.landingpage_container {
    background-color: black;
}

.landingpage_calltoaction-01 {
    position: relative;
    width: 100%;
    height: 550px;
    max-height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 35%;
    padding: 150px 100px;
}

.landingpage_calltoaction-01::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
}

.landingpage_calltoaction-01 h1,
h2 {
    padding: 0 0 20px 0;
    position: relative;
    color: #ffffff;
    line-height: 0.9;
}

.landingpage_calltoaction-01-btn {
    width: 40%;
    position: relative;
    color: #ffff;
}
</style>