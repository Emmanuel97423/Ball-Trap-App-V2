<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      fade="true"
      background="#fff"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      img-width="1024px"
      img-height="400px"
    >
      <!--Slide 1-->
      <b-carousel-slide
        class="carousel-slide-img"
        img-src="@/assets/img/slide/slide-4.png"
      >
      </b-carousel-slide>

      <!--Slide 2-->
      <b-carousel-slide
        class="carousel-slide-img"
        img-src="@/assets/img/slide/slide-3.png"
      >
      </b-carousel-slide>
      <!--Slide 3-->

      <!-- <b-carousel-slide
        class="carousel-slide-img"
        img-src="@/assets/img/slide/slide-1.jpg"
        fade="true"
      >
      </b-carousel-slide> -->
      <!--Slide 4-->
      <!-- <b-carousel-slide
        class="carousel-slide-img"
        img-src="@/assets/img/slide/slide-2.jpg"
      >
      </b-carousel-slide> -->
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
<style>
.banner_text_one h1 {
  color: #fff;
  margin: 0 0 20px 0;
}
.banner_text_one :nth-child(3) {
  margin: 20px 0 50px 0;
}
/* .carousel-slide-img { */
/* display: block; */
/* height: 400px; */
/* } */
.carousel-slide-img img {
  object-fit: cover;
  /* object-position: 0 -400px; */
}
#visit-card {
  z-index: 2;
  display: block;
  width: 30%;
}
</style>