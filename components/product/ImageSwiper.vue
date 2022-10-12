<template>
    <div class="thumb-example">
        <!-- swiper1 -->
        <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">

            <swiper-slide v-for="(product,index) in productVariants" :key=index class="slide-1">
                <img :src="product.imageUrl">
            </swiper-slide>



            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">


            <swiper-slide v-for="(product,index) in productVariants" :key=index class="slide-1">
                <img :src="product.imageUrl">
            </swiper-slide>


        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'ImageSwiper',
    title: 'Thumbs gallery with Two-way control',
    components: {
        Swiper,
        SwiperSlide
    },
    props: { productVariants: Array },
    data() {
        return {
            swiperOptionTop: {
                loop: true,
                loopedSlides: 5, // looped slides should be the same
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperOptionThumbs: {
                loop: true,
                loopedSlides: 5, // looped slides should be the same
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.$swiper
            const swiperThumbs = this.$refs.swiperThumbs.$swiper
            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
        })
    }
}
</script>

<style  scoped>
.swiper {}

.thumb-example {
    height: 480px;
    /* background-color: $black; */
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.gallery-top {
    height: 80%;
    width: 100%;
}

.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 5px;
}

.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.gallery-thumbs .swiper-slide-active {
    opacity: 1;
}

/* .swiper {
    .swiper-slide {
        background-size: cover;
        background-position: center;

        &.slide-1 {
            background-image: url('/images/example/1.jpg');
        }

        &.slide-2 {
            background-image: url('/images/example/2.jpg');
        }

        &.slide-3 {
            background-image: url('/images/example/4.jpg');
        }

        &.slide-4 {
            background-image: url('/images/example/5.jpg');
        }

        &.slide-5 {
            background-image: url('/images/example/6.jpg');
        }
    }

    &.gallery-top {
        height: 80%;
        width: 100%;
    }

    &.gallery-thumbs {
        height: 20%;
        box-sizing: border-box;
        padding: $gap 0;
    }

    &.gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
    }

    &.gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }
} */
</style>