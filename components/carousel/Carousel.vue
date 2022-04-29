<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      fade="true"
      background="#fff"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://picsum.photos/id/237/2000/350">
        <div class="banner_text_one">
          <h1>Lorem ipsum<span>Lorem</span></h1>
          <h3>Economisez 50%</h3>
          <nuxt-link to="#" class="theme-btn-one bg-black btn_md"
            >Achetez maintenant</nuxt-link
          >
        </div>
      </b-carousel-slide>
      <b-carousel-slide
        img-src="https://picsum.photos/2000/350?grayscale"
        img-height="10"
      >
        <!-- <div class="banner_text_one">
          <h1>Lorem ipsum<span>Lorem</span></h1>
          <h3>Economisez 50%</h3>
          <nuxt-link to="#" class="theme-btn-one bg-black btn_md"
            >Achetez maintenant</nuxt-link
          >
        </div> -->
      </b-carousel-slide>
      <!--Slide 2-->
      <b-carousel-slide img-src="https://picsum.photos/seed/picsum/2000/350">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style scoped>
.banner_text_one h1 {
  color: #fff;
  margin: 0 0 20px 0;
}
.banner_text_one :nth-child(3) {
  margin: 20px 0 50px 0;
}
</style>