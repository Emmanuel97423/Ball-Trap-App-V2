(window.webpackJsonp=window.webpackJsonp||[]).push([[31,6],{653:function(t,e,l){t.exports=l.p+"img/post2.726a257.png"},654:function(t,e,l){t.exports=l.p+"img/post3.726a257.png"},655:function(t,e,l){t.exports=l.p+"img/post1.726a257.png"},675:function(t,e,l){t.exports=l.p+"img/post4.726a257.png"},710:function(t,e,l){"use strict";l.r(e);var o={name:"BlogItem2",props:{blogThumb:String,blogPublishDate:String,blogTitle:String,blogDescription:String}},n=l(40),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog_list_item img-zoom-hover"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-4 col-md-12 col-sm-12 col-12"},[l("div",{staticClass:"blog_one_img"},[l("nuxt-link",{attrs:{to:"/blog/"+t.blogTitle}},[l("img",{attrs:{src:t.blogThumb,alt:"img"}})])],1)]),t._v(" "),l("div",{staticClass:"col-lg-8 col-md-12 col-sm-12 col-12"},[l("div",{staticClass:"blog_text"},[l("h5",{staticClass:"date_area"},[l("nuxt-link",{attrs:{to:"/blog/"+t.blogTitle}},[t._v(t._s(t.blogPublishDate))])],1),t._v(" "),l("h4",{staticClass:"heading"},[l("nuxt-link",{attrs:{to:"/blog/"+t.blogTitle}},[t._v(t._s(t.blogTitle))])],1),t._v(" "),l("p",{staticClass:"para"},[t._v(t._s(t.blogDescription))]),t._v(" "),l("nuxt-link",{staticClass:"button",attrs:{to:"/blog/"+t.blogTitle}},[t._v("Read More"),l("i",{staticClass:"fas fa-arrow-right"})])],1)])])])}),[],!1,null,null,null);e.default=component.exports},815:function(t,e,l){"use strict";l.r(e);var o={name:"blog-list",components:{BlogItem2:l(710).default},data:function(){return{title:this.title,blogItems:[{id:1,blogThumb:l(655),blogTitle:"This Designer Bronzer Has Even The Drugstore-Beauty-Buyers Splurging!",blogDescription:"Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys I’ve been",blogPublishDate:"24 February 2021"},{id:2,blogThumb:l(653),blogTitle:"4 Fresh Ways To Style Leather Shorts For Spring",blogDescription:"We spent spring break this year in California with Cody’s family and it was such a fun getaway. Cody’s family always goes hard on vacation",blogPublishDate:"29 jan 2018"},{id:3,blogThumb:l(654),blogTitle:"Shopbop Spring Sale Selects All Under Around $100!",blogDescription:"STRAIGHT LEG DENIM (UNDER $100) – Love all the Ribcage Levi’s styles! They are all really flattering. but since these are wider leg I stuck with my usual size (25).",blogPublishDate:"24 February 2021"},{id:4,blogThumb:l(675),blogTitle:"This Made Me Splurge on The Apple Watch",blogDescription:"From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there.",blogPublishDate:"21 February 2019"}],breadcrumbItems:[{text:"Home",to:"/"},{text:"Blog",to:"/blog/blog-3"}],rows:60,currentPage:1}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Blog page - AndShop Ecommerce Vue js, Nuxt js Template"}]}}},n=l(40),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("section",{attrs:{id:"common_banner_one"}},[l("div",{staticClass:"container "},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"common_banner_text"},[l("h2",[t._v(t._s(this.title))]),t._v(" "),l("b-breadcrumb",{staticClass:"bg-transparent",attrs:{items:t.breadcrumbItems}})],1)])])])]),t._v(" "),l("section",{staticClass:"ptb-100",attrs:{id:"blog_list_area"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[t._l(t.blogItems,(function(t){return l("div",{key:t.id,staticClass:"col-lg-12 col-md-6 col-sm-6 col-12"},[l("BlogItem2",{attrs:{blogThumb:t.blogThumb,blogTitle:t.blogTitle,blogDescription:t.blogDescription,blogPublishDate:t.blogPublishDate}})],1)})),t._v(" "),l("div",{staticClass:"col-lg-12"},[l("b-pagination",{attrs:{pills:"","total-rows":t.rows},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],2)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogItem2:l(710).default})}}]);