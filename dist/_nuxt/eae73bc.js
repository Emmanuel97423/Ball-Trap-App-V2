(window.webpackJsonp=window.webpackJsonp||[]).push([[45,8,9,10],{290:function(t,o,r){t.exports=r.p+"img/product3.f1fd90f.png"},291:function(t,o,r){t.exports=r.p+"img/product5.f1fd90f.png"},292:function(t,o,r){t.exports=r.p+"img/post2.7f0bc74.png"},293:function(t,o,r){t.exports=r.p+"img/post3.7f0bc74.png"},294:function(t,o,r){t.exports=r.p+"img/post4.7f0bc74.png"},295:function(t,o,r){t.exports=r.p+"img/post5.7f0bc74.png"},296:function(t,o,r){t.exports=r.p+"img/post6.7f0bc74.png"},297:function(t,o,r){t.exports=r.p+"img/post7.7f0bc74.png"},298:function(t,o,r){t.exports=r.p+"img/post8.7f0bc74.png"},299:function(t,o,r){t.exports=r.p+"img/post9.7f0bc74.png"},300:function(t,o,r){t.exports=r.p+"img/post10.7f0bc74.png"},301:function(t,o,r){t.exports=r.p+"img/post11.7f0bc74.png"},302:function(t,o,r){t.exports=r.p+"img/post12.7f0bc74.png"},303:function(t,o,r){"use strict";r.r(o);var e={name:"instagram-area",data:function(){return{swiperOptionInstagram:{slidesPerView:5,spaceBetween:0,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,autoplay:{autoplay:!0,delay:2500,disableOnInteraction:!0},breakpoints:{992:{slidesPerView:5},991:{slidesPerView:3},768:{slidesPerView:3},767:{slidesPerView:3},766:{slidesPerView:3},575:{slidesPerView:2},400:{slidesPerView:2},0:{slidesPerView:1}}},instagramItems:[{id:1,instagramImg:r(292)},{id:2,instagramImg:r(293)},{id:3,instagramImg:r(294)},{id:4,instagramImg:r(295)},{id:5,instagramImg:r(296)},{id:6,instagramImg:r(297)},{id:7,instagramImg:r(298)},{id:8,instagramImg:r(299)},{id:9,instagramImg:r(300)},{id:10,instagramImg:r(301)},{id:11,instagramImg:r(302)}]}}},c=r(38),component=Object(c.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("section",{attrs:{id:"instagram_area_one"}},[r("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("swiper",{staticClass:"swiper",attrs:{options:t.swiperOptionInstagram}},t._l(t.instagramItems,(function(t){return r("swiper-slide",{key:t.id},[r("InstagramSliderItem",{attrs:{instagramImg:t.instagramImg}})],1)})),1)],1)])])])}),[function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"center_heading"},[r("h2",[t._v("Follow Us Instagram")]),t._v(" "),r("p",[t._v("Mauris luctus nisi sapien tristique dignissim ornare")])])])])}],!1,null,null,null);o.default=component.exports;installComponents(component,{InstagramSliderItem:r(305).default})},304:function(t,o,r){"use strict";r.r(o);r(202);var e={name:"ProductBox1",props:{productImg1:String,productImg2:String,productTagClass:String,productTag:String,productTitle:String,productDescription:String,productPrice:Number,totalPrice:Number},data:function(){return{swiperOption:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0,loop:!0,mousewheel:!0,keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0},autoplay:!0},value:1}},methods:{toggleModal:function(){this.$refs["product-details-popup"].toggle("#toggle-btn")}}},c=r(38),component=Object(c.a)(e,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"product_wrappers_one"},[e("div",{staticClass:"thumb"},[e("nuxt-link",{staticClass:"image",attrs:{to:"/product/"+t.productTitle}},[e("img",{attrs:{src:t.productImg1,alt:"Product"}}),t._v(" "),e("img",{staticClass:"hover-image",attrs:{src:t.productImg2,alt:"Product"}})]),t._v(" "),e("span",{staticClass:"badges"},[e("span",{class:t.productTagClass},[t._v(t._s(t.productTag))])]),t._v(" "),e("div",{staticClass:"actions"},[e("nuxt-link",{staticClass:"action wishlist",attrs:{to:"/my-account/wishlist",title:"Wishlist"}},[e("i",{staticClass:"far fa-heart"})]),t._v(" "),e("a",{staticClass:"action quickview",attrs:{href:"#!",id:"toggle-btn",title:"Quick view"},on:{click:t.toggleModal}},[e("i",{staticClass:"fas fa-expand"})]),t._v(" "),e("nuxt-link",{staticClass:"action compare",attrs:{to:"/my-account/compare",title:"Compare"}},[e("i",{staticClass:"fas fa-exchange-alt"})])],1),t._v(" "),e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.offcanvas-add-cart",modifiers:{"offcanvas-add-cart":!0}}],staticClass:"add-to-cart offcanvas-toggle",attrs:{title:"Add To Cart"}},[t._v("Add To Cart")])],1),t._v(" "),e("div",{staticClass:"content"},[e("h5",{staticClass:"title"},[e("nuxt-link",{attrs:{to:"/product/"+t.productTitle}},[t._v(t._s(t.productTitle))])],1),t._v(" "),e("span",{staticClass:"price"},[e("span",{staticClass:"new"},[t._v("$"+t._s(t.productPrice))])])]),t._v(" "),e("div",[e("b-modal",{ref:"product-details-popup",staticClass:"product_one_modal_top",attrs:{centered:"","hide-footer":"",title:"Using Component Methods",id:"product_slider_one"},scopedSlots:t._u([{key:"modal-header",fn:function(t){var o=t.close;return[e("button",{staticClass:"close close_modal_icon",attrs:{type:"button"},on:{click:function(t){return o()}}},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])]}}])},[t._v(" "),e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5 col-md-6 col-sm-12 col-12"},[e("div",{staticClass:"products_modal_sliders"},[e("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[e("swiper-slide",[e("img",{attrs:{src:r(198),alt:"img"}})]),t._v(" "),e("swiper-slide",[e("img",{attrs:{src:r(136),alt:"img"}})]),t._v(" "),e("swiper-slide",[e("img",{attrs:{src:r(290),alt:"img"}})]),t._v(" "),e("swiper-slide",[e("img",{attrs:{src:r(137),alt:"img"}})]),t._v(" "),e("swiper-slide",[e("img",{attrs:{src:r(291),alt:"img"}})]),t._v(" "),e("swiper-slide",[e("img",{attrs:{src:r(199),alt:"img"}})]),t._v(" "),e("swiper-slide",[e("img",{attrs:{src:r(200),alt:"img"}})]),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)]),t._v(" "),e("div",{staticClass:"col-lg-7 col-md-6 col-sm-12 col-12"},[e("div",{staticClass:"modal_product_content_one"},[e("h3",[t._v(t._s(t.productTitle))]),t._v(" "),e("div",{staticClass:"reviews_rating"},[e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("i",{staticClass:"fas fa-star"}),t._v(" "),e("span",[t._v("(2 Customer Review)")])]),t._v(" "),e("h4",[t._v("$"+t._s(t.productPrice))]),t._v(" "),e("p",[t._v(t._s(t.productDescription))]),t._v(" "),e("div",{staticClass:"variable-single-item"},[e("span",[t._v("Color")]),t._v(" "),e("div",{staticClass:"product-variable-color"},[e("label",{attrs:{for:"modal-product-color-red"}},[e("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-red",type:"radio",checked:""}}),t._v(" "),e("span",{staticClass:"product-color-red"})]),t._v(" "),e("label",{attrs:{for:"modal-product-color-tomato"}},[e("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-tomato",type:"radio"}}),t._v(" "),e("span",{staticClass:"product-color-tomato"})]),t._v(" "),e("label",{attrs:{for:"modal-product-color-green"}},[e("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-green",type:"radio"}}),t._v(" "),e("span",{staticClass:"product-color-green"})]),t._v(" "),e("label",{attrs:{for:"modal-product-color-light-green"}},[e("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-light-green",type:"radio"}}),t._v(" "),e("span",{staticClass:"product-color-light-green"})]),t._v(" "),e("label",{attrs:{for:"modal-product-color-blue"}},[e("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-blue",type:"radio"}}),t._v(" "),e("span",{staticClass:"product-color-blue"})]),t._v(" "),e("label",{attrs:{for:"modal-product-color-light-blue"}},[e("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-light-blue",type:"radio"}}),t._v(" "),e("span",{staticClass:"product-color-light-blue"})])])]),t._v(" "),e("form",{attrs:{id:"product_count_form_one"}},[e("div",{staticClass:"product_count_one"},[e("b-form-spinbutton",{staticClass:"border-0",attrs:{id:"sb-inline",inline:""},model:{value:t.value,callback:function(o){t.value=o},expression:"value"}}),t._v(" "),e("nuxt-link",{staticClass:"theme-btn-one btn-black-overlay btn_sm",attrs:{to:"/cart"}},[t._v("Add To Cart")])],1)]),t._v(" "),e("div",{staticClass:"modal_share_icons_one"},[e("h4",[t._v("SHARE THIS PRODUCT")]),t._v(" "),e("div",{staticClass:"posted_icons_one"},[e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-instagram"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-linkedin-in"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-google-plus-g"})]),t._v(" "),e("a",{attrs:{href:"#!"}},[e("i",{staticClass:"fab fa-pinterest-p"})])])])])])])])])],1)])])}),[],!1,null,null,null);o.default=component.exports},305:function(t,o,r){"use strict";r.r(o);var e={name:"instagram-slider-item",props:{instagramImg:String}},c=r(38),component=Object(c.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"instgram_post"},[r("a",{attrs:{href:"#!"}},[r("i",{staticClass:"fab fa-instagram"}),t._v(" "),r("img",{attrs:{src:t.instagramImg,alt:"img"}})])])}),[],!1,null,null,null);o.default=component.exports},310:function(t,o,r){t.exports=r.p+"img/product9.f1fd90f.png"},311:function(t,o,r){t.exports=r.p+"img/product10.f1fd90f.png"},312:function(t,o,r){t.exports=r.p+"img/product11.f1fd90f.png"},313:function(t,o,r){t.exports=r.p+"img/product12.f1fd90f.png"},314:function(t,o,r){t.exports=r.p+"img/product13.f1fd90f.png"},315:function(t,o,r){t.exports=r.p+"img/product14.f1fd90f.png"},316:function(t,o,r){t.exports=r.p+"img/product15.f1fd90f.png"},387:function(t,o,r){"use strict";r.r(o);var e=r(304),c=r(303),l={name:"shop-three-grid",components:{ProductBox1:e.default,InstagramArea:c.default},data:function(){return{title:"Shop",productItems:[{id:1,productImg1:r(198),productImg2:r(136),productTagClass:"",productTag:"",productTitle:"Black T-Shirt For Woman",productDescription:"Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",productPrice:38.5},{id:2,productImg1:r(290),productImg2:r(137),productTagClass:"new",productTag:"new",productTitle:"T-Shirt Form Girls",productDescription:"Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",productPrice:738.5},{id:3,productImg1:r(291),productImg2:r(199),productTagClass:"hot",productTag:"hot",productTitle:"White Black Line Dress",productDescription:"Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",productPrice:50.5},{id:4,productImg1:r(200),productImg2:r(201),productTagClass:"",productTag:"",productTitle:"Blue Dress For Woman",productDescription:"Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",productPrice:738.5},{id:5,productImg1:r(310),productImg2:r(311),productTagClass:"new",productTag:"new",productTitle:"Black T-Shirt For Woman",productDescription:"Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",productPrice:99.5},{id:6,productImg1:r(312),productImg2:r(313),productTagClass:"hot",productTag:"hot",productTitle:"Blue Dress For Woman",productDescription:"Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",productPrice:738.5},{id:7,productImg1:r(314),productImg2:r(315),productTagClass:"new",productTag:"new",productTitle:"T-Shirt Form Girls",productDescription:"Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",productPrice:48.5},{id:8,productImg1:r(316),productImg2:r(198),productTagClass:"",productTag:"",productTitle:"T-Shirt Form Girls",productDescription:"Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",productPrice:738.5},{id:9,productImg1:r(136),productImg2:r(290),productTagClass:"new",productTag:"new",productTitle:"Blue Dress For Woman",productDescription:"Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",productPrice:300}],breadcrumbItems:[{text:"Home",to:"/"},{text:"Shop",to:"/shop/shop-2"}],rows:60,currentPage:1}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Shop page - AndShop Ecommerce Vue js, Nuxt js Template"}]}}},n=r(38),component=Object(n.a)(l,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",[r("section",{attrs:{id:"common_banner_one"}},[r("div",{staticClass:"container "},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"common_banner_text"},[r("h2",[t._v(t._s(this.title))]),t._v(" "),r("b-breadcrumb",{staticClass:"bg-transparent",attrs:{items:t.breadcrumbItems}})],1)])])])]),t._v(" "),r("section",{staticClass:"ptb-100",attrs:{id:"shop_main_area"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t._m(0),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-12"},[r("div",{staticClass:"product_shot"},[t._m(1),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"product_shot_view"},[r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/shop/shop-3"}},[r("i",{staticClass:"fas fa-list"})])],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"active",attrs:{to:"/shop/shop-2"}},[r("i",{staticClass:"fas fa-th-large"})])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/shop"}},[r("i",{staticClass:"fas fa-th"})])],1)])])])])]),t._v(" "),r("div",{staticClass:"row"},[t._l(t.productItems,(function(t){return r("div",{key:t.id,staticClass:"col-lg-4 col-md-4 col-sm-6 col-12"},[r("ProductBox1",{attrs:{productImg1:t.productImg1,productImg2:t.productImg2,productTagClass:t.productTagClass,productTag:t.productTag,productTitle:t.productTitle,productPrice:t.productPrice}})],1)})),t._v(" "),r("div",{staticClass:"col-lg-12"},[r("b-pagination",{attrs:{pills:"","total-rows":t.rows},model:{value:t.currentPage,callback:function(o){t.currentPage=o},expression:"currentPage"}})],1)],2)])]),t._v(" "),r("InstagramArea")],1)}),[function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"col-lg-6 col-md-12"},[r("div",{staticClass:"product_filter"},[r("div",{staticClass:"customs_selects"},[r("select",{staticClass:"customs_sel_box",attrs:{name:"product"}},[r("option",{attrs:{value:"Filter"}},[t._v("Filter")]),t._v(" "),r("option",{attrs:{value:"most_popular"}},[t._v("Most Popular")]),t._v(" "),r("option",{attrs:{value:"best_seller"}},[t._v("Best Seller")]),t._v(" "),r("option",{attrs:{value:"tranding"}},[t._v("Tranding")]),t._v(" "),r("option",{attrs:{value:"featured"}},[t._v("Featured")])])])])])},function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"product_shot_title"},[r("p",[t._v("Sort By:")])])},function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"customs_selects"},[r("select",{staticClass:"customs_sel_box",attrs:{name:"product"}},[r("option",{attrs:{value:"popularity"}},[t._v("Sort by Popularity")]),t._v(" "),r("option",{attrs:{value:"new"}},[t._v("Sort by new")]),t._v(" "),r("option",{attrs:{value:"low"}},[t._v("Price: low to high")]),t._v(" "),r("option",{attrs:{value:"high"}},[t._v("Price: high to low")])])])}],!1,null,null,null);o.default=component.exports;installComponents(component,{ProductBox1:r(304).default,InstagramArea:r(303).default})}}]);