(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{631:function(t,r,e){t.exports=e.p+"img/product2.f1fd90f.png"},632:function(t,r,e){t.exports=e.p+"img/product4.f1fd90f.png"},633:function(t,r,e){t.exports=e.p+"img/product1.f1fd90f.png"},634:function(t,r,e){t.exports=e.p+"img/product6.f1fd90f.png"},826:function(t,r,e){"use strict";e.r(r);e(135);var c={name:"compare",data:function(){return{title:"Compare",productItems:[{id:1,productImg1:e(633),productImg2:e(631),productTagClass:"",productTag:"",productTitle:"Black T-Shirt For Woman",productDescription:"Eye Glasses Are Very Important For Thos Whos Have Some Difficult In Their Eye To See Every Hing Clearly And Perfectly",productPrice:38.5,totalPrice:180,stock:"In Stock",color:"Black",quantity:1,rating:5},{id:2,productImg1:e(631),productImg2:e(632),productTagClass:"new",productTag:"new",productTitle:"T-Shirt Form Girls",productDescription:"Eye Glasses Are Very Important For Thos Whos Have Some Difficult In Their Eye To See Every Hing Clearly And Perfectly",productPrice:738.5,totalPrice:130,stock:"In Stock",color:"Black",quantity:1,rating:3},{id:3,productImg1:e(632),productImg2:e(634),productTagClass:"hot",productTag:"hot",productTitle:"White Black Line Dress",productDescription:"Eye Glasses Are Very Important For Thos Whos Have Some Difficult In Their Eye To See Every Hing Clearly And Perfectly",productPrice:50.5,totalPrice:160,stock:"In Stock",color:"Black",quantity:1,rating:4}],breadcrumbItems:[{text:"Home",to:"/"},{text:"Compare",to:"/my-account/compare"}]}},methods:{removeProductItem:function(t){this.productItems.splice(t,1)}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Compare page - AndShop Ecommerce Vue js, Nuxt js Template"}]}}},n=e(40),component=Object(n.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("section",{attrs:{id:"common_banner_one"}},[e("div",{staticClass:"container "},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"common_banner_text"},[e("h2",[t._v(t._s(this.title))]),t._v(" "),e("b-breadcrumb",{staticClass:"bg-transparent",attrs:{items:t.breadcrumbItems}})],1)])])])]),t._v(" "),e("section",{staticClass:"ptb-100",attrs:{id:"compare_area"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"table_desc"},[e("div",{staticClass:"table_page table-responsive compare-table mb-0"},[e("table",{staticClass:"table"},[t.productItems.length>0?e("tbody",[e("tr",[e("td",{staticClass:"first-column"},[t._v("Product")]),t._v(" "),t._l(t.productItems,(function(r){return e("td",{key:r.id,staticClass:"product-image-title"},[e("nuxt-link",{staticClass:"image",attrs:{to:"/product"}},[e("img",{attrs:{src:r.productImg1,alt:"Compare Product"}})]),t._v(" "),e("nuxt-link",{staticClass:"category",attrs:{to:"/shop/shop-4"}},[t._v("Furniture")]),t._v(" "),e("h5",[e("nuxt-link",{staticClass:"title",attrs:{to:"/shop/shop-4"}},[t._v(t._s(r.productTitle))])],1)],1)}))],2),t._v(" "),e("tr",[e("td",{staticClass:"first-column"},[t._v("Description")]),t._v(" "),t._l(t.productItems,(function(r){return e("td",{key:r.id,staticClass:"pro-desc"},[e("p",[t._v(t._s(r.productDescription))])])}))],2),t._v(" "),e("tr",[e("td",{staticClass:"first-column"},[t._v("Price")]),t._v(" "),t._l(t.productItems,(function(r){return e("td",{key:r.id,staticClass:"pro-price"},[t._v("$"+t._s(r.productPrice))])}))],2),t._v(" "),e("tr",[e("td",{staticClass:"first-column"},[t._v("Color")]),t._v(" "),t._l(t.productItems,(function(r){return e("td",{key:r.id,staticClass:"pro-color"},[t._v(t._s(r.color))])}))],2),t._v(" "),e("tr",[e("td",{staticClass:"first-column"},[t._v("Stock")]),t._v(" "),t._l(t.productItems,(function(r){return e("td",{key:r.id,staticClass:"pro-stock"},[t._v(t._s(r.stock))])}))],2),t._v(" "),e("tr",[e("td",{staticClass:"first-column"},[t._v("Add to cart")]),t._v(" "),t._l(t.productItems,(function(r){return e("td",{key:r.id,staticClass:"pro-addtocart"},[e("nuxt-link",{staticClass:"theme-btn-one btn-black-overlay btn_sm",attrs:{to:"/cart"}},[e("span",[t._v("ADD TO CART")])])],1)}))],2),t._v(" "),e("tr",[e("td",{staticClass:"first-column"},[t._v("Delete")]),t._v(" "),t._l(t.productItems,(function(r){return e("td",{key:r.id,staticClass:"pro-remove product_remove"},[e("button",{staticClass:"bg-transparent remove-btn",on:{click:function(r){return t.removeProductItem(t.index)}}},[e("i",{staticClass:"far fa-trash-alt"})])])}))],2),t._v(" "),e("tr",[e("td",{staticClass:"first-column"},[t._v("Rating")]),t._v(" "),t._l(t.productItems,(function(r){return e("td",{key:r.id,staticClass:"pro-ratting"},[5==r.rating?e("div",{staticClass:"product-review"},[t._m(0,!0),t._v(" "),t._m(1,!0),t._v(" "),t._m(2,!0),t._v(" "),t._m(3,!0),t._v(" "),t._m(4,!0)]):4==r.rating?e("div",{staticClass:"product-review"},[t._m(5,!0),t._v(" "),t._m(6,!0),t._v(" "),t._m(7,!0),t._v(" "),t._m(8,!0)]):3==r.rating?e("div",{staticClass:"product-review"},[t._m(9,!0),t._v(" "),t._m(10,!0),t._v(" "),t._m(11,!0)]):2==r.rating?e("div",{staticClass:"product-review"},[t._m(12,!0),t._v(" "),t._m(13,!0)]):1==r.rating?e("div",{staticClass:"product-review"},[t._m(14,!0)]):e("div",{staticClass:"product-review"},[e("span",{staticClass:"review-fill"},[t._v("No Rating")])])])}))],2)]):e("tbody",[t._m(15)])])])])])])])])])}),[function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"review-fill"},[r("i",{staticClass:"far fa-star"})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tr",[e("td",[t._v("No item found to compare!")])])}],!1,null,null,null);r.default=component.exports}}]);