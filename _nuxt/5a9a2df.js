(window.webpackJsonp=window.webpackJsonp||[]).push([[42,5,9,10,11,12,13,16,23],{631:function(t,e,o){t.exports=o.p+"img/product2.f1fd90f.png"},632:function(t,e,o){t.exports=o.p+"img/product4.f1fd90f.png"},633:function(t,e,o){t.exports=o.p+"img/product1.f1fd90f.png"},634:function(t,e,o){t.exports=o.p+"img/product6.f1fd90f.png"},635:function(t,e,o){t.exports=o.p+"img/product3.f1fd90f.png"},636:function(t,e,o){t.exports=o.p+"img/post2.7f0bc74.png"},637:function(t,e,o){t.exports=o.p+"img/post3.7f0bc74.png"},638:function(t,e,o){t.exports=o.p+"img/post4.7f0bc74.png"},639:function(t,e,o){t.exports=o.p+"img/post5.7f0bc74.png"},640:function(t,e,o){t.exports=o.p+"img/post6.7f0bc74.png"},641:function(t,e,o){t.exports=o.p+"img/post7.7f0bc74.png"},642:function(t,e,o){t.exports=o.p+"img/post8.7f0bc74.png"},643:function(t,e,o){t.exports=o.p+"img/post9.7f0bc74.png"},644:function(t,e,o){t.exports=o.p+"img/post10.7f0bc74.png"},645:function(t,e,o){t.exports=o.p+"img/post11.7f0bc74.png"},646:function(t,e,o){t.exports=o.p+"img/post12.7f0bc74.png"},647:function(t,e,o){t.exports=o.p+"img/product5.f1fd90f.png"},648:function(t,e,o){t.exports=o.p+"img/product7.f1fd90f.png"},649:function(t,e,o){"use strict";o.r(e);var r={name:"instagram-area",data:function(){return{swiperOptionInstagram:{slidesPerView:5,spaceBetween:0,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,autoplay:{autoplay:!0,delay:2500,disableOnInteraction:!0},breakpoints:{992:{slidesPerView:5},991:{slidesPerView:3},768:{slidesPerView:3},767:{slidesPerView:3},766:{slidesPerView:3},575:{slidesPerView:2},400:{slidesPerView:2},0:{slidesPerView:1}}},instagramItems:[{id:1,instagramImg:o(636)},{id:2,instagramImg:o(637)},{id:3,instagramImg:o(638)},{id:4,instagramImg:o(639)},{id:5,instagramImg:o(640)},{id:6,instagramImg:o(641)},{id:7,instagramImg:o(642)},{id:8,instagramImg:o(643)},{id:9,instagramImg:o(644)},{id:10,instagramImg:o(645)},{id:11,instagramImg:o(646)}]}}},n=o(40),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{attrs:{id:"instagram_area_one"}},[o("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("swiper",{staticClass:"swiper",attrs:{options:t.swiperOptionInstagram}},t._l(t.instagramItems,(function(t){return o("swiper-slide",{key:t.id},[o("InstagramSliderItem",{attrs:{instagramImg:t.instagramImg}})],1)})),1)],1)])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"center_heading"},[o("h2",[t._v("Suivez nous sur Instagram")]),t._v(" "),o("p",[t._v("Mauris luctus nisi sapien tristique dignissim ornare")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{InstagramSliderItem:o(651).default})},650:function(t,e,o){var content=o(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("46212f8d",content,!0,{sourceMap:!1})},651:function(t,e,o){"use strict";o.r(e);var r={name:"instagram-slider-item",props:{instagramImg:String}},n=o(40),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"instgram_post"},[o("a",{attrs:{href:"#!"}},[o("i",{staticClass:"fab fa-instagram"}),t._v(" "),o("img",{attrs:{src:t.instagramImg,alt:"img"}})])])}),[],!1,null,null,null);e.default=component.exports},652:function(t,e,o){"use strict";o.r(e);o(160);var r=document.getElementById("spinner__app"),n={name:"ProductBox1",props:{productImg1:String,productImg2:String,productTagClass:String,productTag:String,productTitle:String,productDescription:String,productPrice:Number,totalPrice:Number,productId:String,productQuantity:Number,productObject:Object},data:function(){return{enabled:!0,swiperOption:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0,loop:!0,mousewheel:!0,keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0},autoplay:!0},value:1}},methods:{addToCartByComponent:function(t,e,o){console.log("productQuantity:",this.productQuantity),console.log("productId:",e),console.log("productObject:",t);this.$store.state.products.productItems;this.$store.commit("cart/addToCartByComponent",t)},toggleModal:function(){this.$refs["product-details-popup"].toggle("#toggle-btn")},loading:function(){console.log("loading:"),r.style.display="block"}}},l=(o(657),o(40)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"product_wrappers_one"},[r("div",{staticClass:"thumb"},[r("nuxt-link",{attrs:{to:"/product/"+t.productId}},[r("img",{staticClass:"hover-image",attrs:{src:t.productImg2,alt:"Product",loading:"lazy"}})]),t._v(" "),r("span",{staticClass:"badges"},[t.productQuantity>0?r("span",{staticClass:"badges__stock",attrs:{id:"stock"}},[t._v("En stock")]):t._e(),t._v(" "),t.productQuantity<1?r("span",{staticClass:"badges__stock",attrs:{id:"no-stock"}},[t._v("Rupture")]):t._e(),t._v(" "),r("span",{class:t.productTagClass},[t._v(t._s(t.productTag))])]),t._v(" "),t.enabled?t._e():r("div",{staticClass:"actions"},[r("nuxt-link",{staticClass:"action wishlist",attrs:{to:"#",title:"Wishlist"}},[r("i",{staticClass:"far fa-heart"})]),t._v(" "),r("a",{staticClass:"action quickview",attrs:{href:"#!",id:"toggle-btn",title:"Quick view"},on:{click:t.toggleModal}},[r("i",{staticClass:"fas fa-expand"})]),t._v(" "),r("nuxt-link",{staticClass:"action compare",attrs:{to:"#",title:"Compare"}},[r("i",{staticClass:"fas fa-exchange-alt"})])],1)],1),t._v(" "),r("div",{staticClass:"content"},[r("h5",{staticClass:"title"},[r("nuxt-link",{attrs:{to:"/product/"+t.productId},on:{click:function(e){return t.loading()}}},[t._v(t._s(t.productTitle))])],1),t._v(" "),r("span",{staticClass:"price"},[r("span",{staticClass:"new"},[t._v(t._s(parseFloat(t.productPrice).toFixed(2))+" €\n          "),r("span",{attrs:{id:"tax"}},[t._v("T.T.C")])])])]),t._v(" "),r("div",[r("b-modal",{ref:"product-details-popup",staticClass:"product_one_modal_top",attrs:{centered:"","hide-footer":"",title:"Using Component Methods",id:"product_slider_one"},scopedSlots:t._u([{key:"modal-header",fn:function(t){var e=t.close;return[r("button",{staticClass:"close close_modal_icon",attrs:{type:"button"},on:{click:function(t){return e()}}},[r("span",{attrs:{"aria-hidden":"true"}},[r("i",{staticClass:"fas fa-times"})])])]}}])},[t._v(" "),r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-5 col-md-6 col-sm-12 col-12"},[r("div",{staticClass:"products_modal_sliders"},[r("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[r("swiper-slide",[r("img",{attrs:{src:o(633),alt:"img"}})]),t._v(" "),r("swiper-slide",[r("img",{attrs:{src:o(631),alt:"img"}})]),t._v(" "),r("swiper-slide",[r("img",{attrs:{src:o(635),alt:"img"}})]),t._v(" "),r("swiper-slide",[r("img",{attrs:{src:o(632),alt:"img"}})]),t._v(" "),r("swiper-slide",[r("img",{attrs:{src:o(647),alt:"img"}})]),t._v(" "),r("swiper-slide",[r("img",{attrs:{src:o(634),alt:"img"}})]),t._v(" "),r("swiper-slide",[r("img",{attrs:{src:o(648),alt:"img"}})]),t._v(" "),r("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)]),t._v(" "),r("div",{staticClass:"col-lg-7 col-md-6 col-sm-12 col-12"},[r("div",{staticClass:"modal_product_content_one"},[r("h3",[t._v(t._s(t.productTitle))]),t._v(" "),r("div",{staticClass:"reviews_rating"},[r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star"}),t._v(" "),r("span",[t._v("(2 Avis)")])]),t._v(" "),r("h4",[t._v(t._s(t.productPrice)+"€ T.T.C")]),t._v(" "),r("p",[t._v(t._s(t.productDescription))]),t._v(" "),r("div",{staticClass:"variable-single-item"},[r("span",[t._v("Couleur")]),t._v(" "),r("div",{staticClass:"product-variable-color"},[r("label",{attrs:{for:"modal-product-color-red"}},[r("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-red",type:"radio",checked:""}}),t._v(" "),r("span",{staticClass:"product-color-red"})]),t._v(" "),r("label",{attrs:{for:"modal-product-color-tomato"}},[r("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-tomato",type:"radio"}}),t._v(" "),r("span",{staticClass:"product-color-tomato"})]),t._v(" "),r("label",{attrs:{for:"modal-product-color-green"}},[r("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-green",type:"radio"}}),t._v(" "),r("span",{staticClass:"product-color-green"})]),t._v(" "),r("label",{attrs:{for:"modal-product-color-light-green"}},[r("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-light-green",type:"radio"}}),t._v(" "),r("span",{staticClass:"product-color-light-green"})]),t._v(" "),r("label",{attrs:{for:"modal-product-color-blue"}},[r("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-blue",type:"radio"}}),t._v(" "),r("span",{staticClass:"product-color-blue"})]),t._v(" "),r("label",{attrs:{for:"modal-product-color-light-blue"}},[r("input",{staticClass:"color-select",attrs:{name:"modal-product-color",id:"modal-product-color-light-blue",type:"radio"}}),t._v(" "),r("span",{staticClass:"product-color-light-blue"})])])]),t._v(" "),r("form",{attrs:{id:"product_count_form_one"}},[r("div",{staticClass:"product_count_one"},[r("b-form-spinbutton",{staticClass:"border-0",attrs:{id:"sb-inline",inline:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),r("nuxt-link",{staticClass:"theme-btn-one btn-black-overlay btn_sm",attrs:{to:"#"}},[t._v("Ajouter au panier")])],1)]),t._v(" "),r("div",{staticClass:"modal_share_icons_one"},[r("h4",[t._v("PARTAGER CET ARTICLE")]),t._v(" "),r("div",{staticClass:"posted_icons_one"},[r("a",{attrs:{href:"#!"}},[r("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),r("a",{attrs:{href:"#!"}},[r("i",{staticClass:"fab fa-instagram"})]),t._v(" "),r("a",{attrs:{href:"#!"}},[r("i",{staticClass:"fab fa-twitter"})]),t._v(" "),r("a",{attrs:{href:"#!"}},[r("i",{staticClass:"fab fa-linkedin-in"})]),t._v(" "),r("a",{attrs:{href:"#!"}},[r("i",{staticClass:"fab fa-google-plus-g"})]),t._v(" "),r("a",{attrs:{href:"#!"}},[r("i",{staticClass:"fab fa-pinterest-p"})])])])])])])])])],1)])])}),[],!1,null,"af6a2bda",null);e.default=component.exports},656:function(t,e,o){"use strict";o.r(e);var r={name:"BlogItem1",props:{blogThumb:String,blogPublishDate:String,blogTitle:String,blogDescription:String}},n=o(40),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog_one_item img-zoom-hover"},[o("div",{staticClass:"blog_one_img"},[o("nuxt-link",{attrs:{to:"/blog/"+t.blogTitle}},[o("img",{attrs:{src:t.blogThumb,alt:"img"}})])],1),t._v(" "),o("div",{staticClass:"blog_text"},[o("h5",{staticClass:"date_area"},[o("nuxt-link",{attrs:{to:"/blog/"+t.blogTitle}},[t._v(t._s(t.blogPublishDate))])],1),t._v(" "),o("h4",{staticClass:"heading"},[o("nuxt-link",{attrs:{to:"/blog/"+t.blogTitle}},[t._v(t._s(t.blogTitle))])],1),t._v(" "),o("p",{staticClass:"para"},[t._v(t._s(t.blogDescription))]),t._v(" "),o("nuxt-link",{staticClass:"button",attrs:{to:"/blog/"+t.blogTitle}},[t._v("Read More"),o("i",{staticClass:"fas fa-arrow-right"})])],1)])}),[],!1,null,null,null);e.default=component.exports},657:function(t,e,o){"use strict";o(650)},658:function(t,e,o){var r=o(51)(!1);r.push([t.i,".badges__stock[data-v-af6a2bda]{color:#fff;display:flex}#stock[data-v-af6a2bda]{background-color:green}#no-stock[data-v-af6a2bda]{background-color:red}.add-to-cart[data-v-af6a2bda]{background-color:#000}#tax[data-v-af6a2bda]{font-size:12px}",""]),t.exports=r},659:function(t,e,o){var content=o(674);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("a5ef78c4",content,!0,{sourceMap:!1})},670:function(t,e,o){"use strict";o.r(e);var r={name:"Carousel",data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},n=(o(673),o(40)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:5e3,controls:"",indicators:"",fade:"true",background:"#fff","img-width":"1024px","img-height":"400px"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[r("b-carousel-slide",{staticClass:"carousel-slide-img",attrs:{"img-src":o(671)}}),t._v(" "),r("b-carousel-slide",{staticClass:"carousel-slide-img",attrs:{"img-src":o(672)}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},671:function(t,e,o){t.exports=o.p+"img/slide-4.93ce597.png"},672:function(t,e,o){t.exports=o.p+"img/slide-3.272cb49.png"},673:function(t,e,o){"use strict";o(659)},674:function(t,e,o){var r=o(51)(!1);r.push([t.i,".banner_text_one h1{color:#fff;margin:0 0 20px}.banner_text_one :nth-child(3){margin:20px 0 50px}.carousel-slide-img img{-o-object-fit:cover;object-fit:cover}#visit-card{z-index:2;display:block;width:30%}",""]),t.exports=r},676:function(t,e,o){var r=o(10),n=Math.ceil,l=Math.floor;r({target:"Math",stat:!0},{trunc:function(t){return(t>0?l:n)(t)}})},682:function(t,e,o){var content=o(706);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("584e58aa",content,!0,{sourceMap:!1})},683:function(t,e,o){var content=o(708);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("3b522084",content,!0,{sourceMap:!1})},684:function(t,e,o){"use strict";o.r(e);o(41),o(676);var r={name:"Timer",mounted:function(){var t=this;window.setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},props:["date"],data:function(){return{timerdate:Math.trunc(new Date(this.date).getTime()/1e3),now:Math.trunc((new Date).getTime()/1e3)}},computed:{seconds:function(){return(this.timerdate-this.now)%60},minutes:function(){return Math.trunc((this.timerdate-this.now)/60)%60},hours:function(){return Math.trunc((this.timerdate-this.now)/60/60)%24},days:function(){return Math.trunc((this.timerdate-this.now)/60/60/24)}}},n=o(40),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"timer"},[o("ul",{attrs:{id:"demo"}},[o("li",[o("span",{staticClass:"timer-num"},[t._v(t._s(t.days))]),t._v("Days\n      ")]),t._v(" "),o("li",[o("span",{staticClass:"timer-num"},[t._v(t._s(t.hours))]),t._v("Hours\n      ")]),t._v(" "),o("li",[o("span",{staticClass:"timer-num"},[t._v(t._s(t.minutes))]),t._v("Minutes\n      ")]),t._v(" "),o("li",[o("span",{staticClass:"timer-num"},[t._v(t._s(t.seconds))]),t._v("Seconds\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},705:function(t,e,o){"use strict";o(682)},706:function(t,e,o){var r=o(51)(!1);r.push([t.i,".nav-categories ul[data-v-0caaa18b]{background-color:#e9e8e2;overflow-x:auto}.nav-categories ul[data-v-0caaa18b],.nav-links[data-v-0caaa18b]{height:48px;margin:0;display:flex;justify-content:center}.nav-links[data-v-0caaa18b]{width:1296px}.nav-links a[data-v-0caaa18b]{display:flex;align-items:center;text-transform:capitalize;color:#0f0f0f;margin:0 16px;font-weight:600;white-space:nowrap}@media only screen and (max-width:425px){.nav-categories ul[data-v-0caaa18b]{justify-content:flex-start}}",""]),t.exports=r},707:function(t,e,o){"use strict";o(683)},708:function(t,e,o){var r=o(51),n=o(368),l=o(709),c=r(!1),d=n(l);c.push([t.i,".box[data-v-740ca2a0]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:370px;background-image:url("+d+");background-position:50% 60%;-o-object-fit:cover;object-fit:cover;margin:15px 0 0}.box h2[data-v-740ca2a0]{background-color:#fff;margin:50px 0 0}.box a[data-v-740ca2a0],.box h2[data-v-740ca2a0]{padding:10px 20px}.box a[data-v-740ca2a0]{margin:20px 0 0;text-transform:uppercase;letter-spacing:1px}",""]),t.exports=c},709:function(t,e,o){t.exports=o.p+"img/promo.c4ff55b.jpg"},714:function(t,e,o){"use strict";o.r(e);var r={name:"CallToActionHomePage"},n=(o(707),o(40)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box"},[o("h2",[t._v("CALL TO ACTION #home")]),t._v(" "),o("nuxt-link",{staticClass:"bg-black justify-center",attrs:{to:"/"}},[t._v("\n    J'en profites\n  ")])],1)}),[],!1,null,"740ca2a0",null);e.default=component.exports},734:function(t,e,o){t.exports=o.p+"img/fusil-ball-trap.b8ee5ab.png"},735:function(t,e,o){var content=o(795);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("ed9414b6",content,!0,{sourceMap:!1})},742:function(t,e,o){"use strict";o.r(e);var r={name:"NavCategories",data:function(){return{menu:[{href:"/shop/shop-2",title:"Vêtements"},{href:"/",title:"Armes Cat. C."},{href:"/",title:"Armes Cat. D."},{href:"/",title:"Munitions"},{href:"/",title:"Accessoires"}]}}},n=(o(705),o(40)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"nav-categories"},[o("ul",[o("div",{staticClass:"nav-links"},t._l(t.menu,(function(e){return o("a",{key:e.id,attrs:{href:e.href}},[t._v(t._s(e.title))])})),0)])])}),[],!1,null,"0caaa18b",null);e.default=component.exports},791:function(t,e,o){t.exports=o.p+"img/accessoires.88c4eeb.png"},792:function(t,e,o){t.exports=o.p+"img/textile.f07792e.png"},793:function(t,e,o){t.exports=o.p+"img/munitions.3a1074d.png"},794:function(t,e,o){"use strict";o(735)},795:function(t,e,o){var r=o(51)(!1);r.push([t.i,".color_two[data-v-889f0b72],h1[data-v-889f0b72]{color:#fff}.banner_text_one h1[data-v-889f0b72]{color:#000}#carousel-home[data-v-889f0b72]{height:auto}.categories-section[data-v-889f0b72]{margin:0 auto}#textile-card[data-v-889f0b72]{text-align:center}.textile-img[data-v-889f0b72]{width:93%}.text-light[data-v-889f0b72]{background-color:#000;font-size:24px;text-align:center}#equipement-card h2[data-v-889f0b72],#munitions-card h2[data-v-889f0b72]{width:150%}#equipement-card[data-v-889f0b72],#munitions-card[data-v-889f0b72]{margin:0 0 15px}@media only screen and (min-width:768px){#weapon-card[data-v-889f0b72]{margin:0 0 15px}}@media only screen and (max-width:767px){.textile-img[data-v-889f0b72]{width:100%;margin:0 0 15px}}@media only screen and (max-width:576px){.textile-img[data-v-889f0b72]{width:100%;margin:0 0 15px}}",""]),t.exports=r},843:function(t,e,o){"use strict";o.r(e);var r=o(652),n=o(684),l=o(649),c=o(656),d=o(670),m=o(742),v=o(714),_={name:"Home",components:{ProductBox1:r.default,Timer:n.default,InstagramArea:l.default,BlogItem1:c.default,Carousel:d.default,NavCategories:m.default,CallToActionHomePage:v.default},data:function(){return{enabled:!1,title:"Home",slide:0,sliding:null}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Home page - AndShop Ecommerce Vue js, Nuxt js Template "}]}},computed:{productItems:function(){return this.$store.getters["products/productItems"]}},created:function(){this.$store.dispatch("products/getProducts")}},f=(o(794),o(40)),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[r("NavCategories"),t._v(" "),r("div",{attrs:{id:"carousel-home"}},[r("Carousel")],1),t._v(" "),r("section",{staticClass:"pt-15 categories-section categorie-section",attrs:{id:"product_variation_one"}},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4 col-md-12",attrs:{id:"col-1"}},[r("div",{staticClass:"product_variation_one_boxed img-zoom-hover",attrs:{id:"equipement-card"}},[r("nuxt-link",{attrs:{to:"/shop/shop-2"}},[r("img",{staticClass:"img",attrs:{src:o(791),alt:"img"}}),t._v(" "),r("div",{staticClass:"product_var_one_text"},[r("h4",{staticClass:"color_one"},[t._v("Ball trap")]),t._v(" "),r("h2",{staticClass:"color_two text-light"},[t._v("Accessoires")]),t._v(" "),r("nuxt-link",{staticClass:"theme-btn-one bg-black btn_sm",attrs:{to:"/shop/shop-2"}},[t._v("Pull!")])],1)])],1),t._v(" "),r("div",{staticClass:"product_variation_one_boxed img-zoom-hover",attrs:{id:"weapon-card"}},[r("nuxt-link",{attrs:{to:"/shop/shop-2"}},[r("img",{staticClass:"opacity-25",attrs:{src:o(734),alt:"img"}}),t._v(" "),r("div",{staticClass:"product_var_one_text"},[r("h2",{staticClass:"text-light"},[t._v("Armes")]),t._v(" "),r("h4",{staticClass:"color_one"},[t._v("Catégorie C.")]),t._v(" "),r("nuxt-link",{staticClass:"theme-btn-one bg-black btn_sm",attrs:{to:"/shop/shop-2"}},[t._v("Pull!")])],1)])],1)]),t._v(" "),r("div",{staticClass:"col-lg-4 col-md-6",attrs:{id:"visit-card-col"}},[r("div",{staticClass:"product_variation_one_boxed img-zoom-hover",attrs:{id:"textile-card"}},[r("nuxt-link",{attrs:{to:"#"}},[r("img",{staticClass:"textile-img",attrs:{src:o(792),alt:"img"}}),t._v(" "),r("div",{staticClass:"product_var_one_text"},[r("h2",{staticClass:"text-light"},[t._v("Textiles")]),t._v(" "),r("h4",{staticClass:"color_one"},[t._v("Ball Trap")]),t._v(" "),r("nuxt-link",{staticClass:"theme-btn-one bg-black btn_sm",attrs:{to:"/shop/shop-2"}},[t._v("Pull!")])],1)])],1)]),t._v(" "),r("div",{staticClass:"col-lg-4 col-md-6"},[r("div",{staticClass:"product_variation_one_boxed img-zoom-hover",attrs:{id:"munitions-card"}},[r("nuxt-link",{attrs:{to:"/shop/shop-2"}},[r("img",{attrs:{src:o(793),alt:"img"}}),t._v(" "),r("div",{staticClass:"product_var_one_text"},[r("h2",{staticClass:"text-light"},[t._v("Munitions")]),t._v(" "),r("nuxt-link",{staticClass:"theme-btn-one bg-black btn_sm",attrs:{to:"#"}},[t._v("Pull!")])],1)])],1),t._v(" "),r("div",{staticClass:"product_variation_one_boxed img-zoom-hover",attrs:{id:"weapon-d"}},[r("nuxt-link",{attrs:{to:"#"}},[r("img",{attrs:{src:o(734),alt:"img"}}),t._v(" "),r("div",{staticClass:"product_var_one_text"},[r("h2",{staticClass:"text-light"},[t._v("ARMES")]),t._v(" "),r("h4",{staticClass:"color_one"},[t._v("Catégorie D.")]),t._v(" "),r("nuxt-link",{staticClass:"theme-btn-one bg-black btn_sm",attrs:{to:"/shop/shop-2"}},[t._v("Pull!")])],1)])],1)])])])]),t._v(" "),t.enabled?r("section",{attrs:{id:"offer_timer_one"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8 offset-lg-4 col-md-7 offset-md-4 col-sm-12 col-12"},[r("div",{staticClass:"offer_time_flex"},[r("div",{staticClass:"count_down"},[r("div",{attrs:{id:"countdown"}},[r("Timer",{attrs:{date:"July 14, 2021"}})],1)]),t._v(" "),t._m(0)])])])])]):t._e(),t._v(" "),t.enabled?r("section",{staticClass:"ptb-100 slider_arrows_one",attrs:{id:"to_days_area"}},[r("div",{staticClass:"container"},[t._m(1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("carousel",{staticClass:"todays_slider",attrs:{autoplay:!0,loop:!0,nav:!0,dots:!1,smartSpeed:1e3,margin:30,responsive:{0:{items:1},600:{items:2},992:{items:3},1200:{items:4}}}},t._l(t.productItems,(function(t){return r("ProductBox1",{key:t.id,attrs:{productImg1:t.productImg1,productImg2:t.productImg2,productTagClass:t.productTagClass,productTag:t.productTag,productTitle:t.productTitle,productPrice:t.productPrice,productDescription:t.productDescription}})})),1)],1)])])]):t._e(),t._v(" "),t.enabled?r("section",{attrs:{id:"special_offer_one"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4 offset-lg-4 col-md-12 col-sm-12 col-12"},[r("div",{staticClass:"offer_banner_one text-center"},[r("h5",[t._v("TRENDING")]),t._v(" "),r("h2",[t._v("New Fashion")]),t._v(" "),r("p",[t._v("\n              Consectetur adipisicing elit. Dolores nisi distinctio magni,\n              iure deserunt doloribus optio\n            ")]),t._v(" "),r("nuxt-link",{staticClass:"theme-btn-one bg-whites btn_md",attrs:{to:"/shop"}},[t._v("Shop Now")])],1)])])])]):t._e(),t._v(" "),t.enabled?r("section",{staticClass:"ptb-100",attrs:{id:"blog_area_one"}},[r("div",{staticClass:"container"},[t._m(2),t._v(" "),r("div",{staticClass:"row"},t._l(t.blogItems.slice(0,3),(function(t){return r("div",{key:t.id,staticClass:"col-lg-4 col-md-4 col-sm-6 col-12"},[r("BlogItem1",{attrs:{blogThumb:t.blogThumb,blogTitle:t.blogTitle,blogDescription:t.blogDescription,blogPublishDate:t.blogPublishDate}})],1)})),0)])]):t._e(),t._v(" "),t.enabled?r("section",{attrs:{id:"special_offer_one"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4 offset-lg-4 col-md-12 col-sm-12 col-12"},[r("div",{staticClass:"offer_banner_one text-center"},[r("h5",[t._v("TRENDING")]),t._v(" "),r("h2",[t._v("New Fashion")]),t._v(" "),r("p",[t._v("\n              Consectetur adipisicing elit. Dolores nisi distinctio magni,\n              iure deserunt doloribus optio\n            ")]),t._v(" "),r("nuxt-link",{staticClass:"theme-btn-one bg-whites btn_md",attrs:{to:"/shop"}},[t._v("Shop Now")])],1)])])])]):t._e(),t._v(" "),r("div",{staticClass:"call-to-action"},[r("CallToActionHomePage")],1)],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"offer_timer_text"},[o("h2",[t._v("20% OFF FOR ALL T-SHIRT COLLECTION")]),t._v(" "),o("p",[t._v("\n                Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n                Porro quisquam, odit assumenda sit modi commodi esse\n                necessitatibus temporibus aperiam veritatis eveniet!\n              ")]),t._v(" "),o("a",{staticClass:"theme-btn-one bg-black btn_md",attrs:{href:"#!"}},[t._v("View More")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"center_heading"},[o("h2",[t._v("ToDay's Deal")]),t._v(" "),o("p",[t._v("Mauris luctus nisi sapien tristique dignissim ornare")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"center_heading"},[o("h2",[t._v("Latest Blog")]),t._v(" "),o("p",[t._v("Mauris luctus nisi sapien tristique dignissim ornare")])])])])}],!1,null,"889f0b72",null);e.default=component.exports;installComponents(component,{Carousel:o(670).default,ProductBox1:o(652).default,Carousel:o(670).default,BlogItem1:o(656).default,CallToActionHomePage:o(714).default})}}]);