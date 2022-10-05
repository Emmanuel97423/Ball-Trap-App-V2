<template>
  <div class="blog_one_item assurance_home">
    <div class="blog_one_img assurance_home_img">
      <img :src="blogThumb" alt="img" />
    </div>
    <div class="blog_text">
      <h4 class="heading text-center assurance_title">
        {{ blogTitle }}
      </h4>
      <p class="para text-center">{{ blogDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogItem1",
  props: {
    blogThumb: String,
    blogPublishDate: String,
    blogTitle: String,
    blogDescription: String,
  },
};
</script>

<style>
.assurance_home_img {
  /* position: relative; */
  height: 160px;
  margin: 20px 0 0 0;
}
.assurance_home {
  letter-spacing: 1px;
}
/* .assurance_home_img img {
} */
.assurance_title {
  /* position: absolute;
  top: 65px;
  left: 50px; */
  /* color: white;
  text-transform: uppercase; */
  /* background-color: black; */
  /* padding: 10px; */
}
</style>