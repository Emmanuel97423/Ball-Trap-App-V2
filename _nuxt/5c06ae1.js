(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{721:function(t,o,e){var content=e(761);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(52).default)("8383740c",content,!0,{sourceMap:!1})},760:function(t,o,e){"use strict";e(721)},761:function(t,o,e){var n=e(51)(!1);n.push([t.i,".login_submit{display:flex;flex-direction:column;justify-content:center;align-items:center}.login_submit a{margin:25px 0 0;text-decoration:none;text-transform:uppercase;font-weight:700;color:#696969}.login_submit span{text-transform:lowercase;font-weight:400;color:#9e9c9c}.forgot-password{text-align:center;margin:0 0 20px}.forgot-password a{text-decoration:none;color:#9e9c9c}.forgot-password a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.login-container{width:70%}.account_form h3{margin:0 0 20px}.fa-eye,.fa-eye-slash{cursor:pointer}.password-login-button input{border:none}.password-login-button button{width:100%;display:flex;justify-content:center;align-items:center;border-radius:5px;border:1px solid #ddd;background-color:#fff}@media (max-width:1024px){.login-container{width:80%}}@media (max-width:375px){.login-container{width:100%}}",""]),t.exports=n},806:function(t,o,e){"use strict";e.r(o);e(41);var n=e(92),r={middleware:"guest",name:"Login",components:{ValidationProvider:n.b,ValidationObserver:n.a},data:function(){return{enabled:!0,title:"Login",login:{email:"",password:"",showPassword:!1},breadcrumbItems:[{text:"Home",to:"/"},{text:"Login"}]}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Login page - AndShop Ecommerce Vue js, Nuxt js Template"}]}},methods:{onSubmit:function(){var t=this;this.$auth.loginWith("cookie",{data:this.login}).then((function(o){var e=o.data;t.$auth.setUser(e),t.$store.commit("user/LOGIN",e),t.$router.push("/my-account")})).catch((function(o){var e=o.response.data.error;"Mot de passe incorrect !"===e?t.$refs.loginForm.setErrors({password:[o.response.data.error]}):("Utilisateur non trouvé !"===e||"Veuillez confirmer votre e-mail!"===e)&&t.$refs.loginForm.setErrors({email:[o.response.data.error]})}))},showPassword:function(){var t=this;!1===this.login.showPassword?(this.login.showPassword=!0,console.log("this.login.showPassword:",this.login.showPassword)):this.login.showPassword=!1,setTimeout((function(){t.login.showPassword=!1}),3e3)}}},l=(e(760),e(40)),component=Object(l.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t.enabled?t._e():e("section",{attrs:{id:"common_banner_one"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"common_banner_text"},[e("h2",[t._v(t._s(this.title))]),t._v(" "),e("b-breadcrumb",{staticClass:"bg-transparent",attrs:{items:t.breadcrumbItems}})],1)])])])]),t._v(" "),e("section",{staticClass:"ptb-100",attrs:{id:"login_area"}},[e("div",{staticClass:"container login-container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12"},[e("div",{staticClass:"account_form"},[e("h3",[t._v("Bienvenue à la maison, shooter!")]),t._v(" "),e("ValidationObserver",{ref:"loginForm",scopedSlots:t._u([{key:"default",fn:function(o){var n=o.handleSubmit;return[e("form",{attrs:{id:"loginForm",name:"loginForm"},on:{submit:function(o){return o.preventDefault(),n(t.onSubmit)}}},[e("ValidationProvider",{attrs:{name:"email",vid:"email",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(o){var n=o.errors;return[e("div",{staticClass:"default-form-box"},[e("label",[t._v("Email "),e("span",[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"form-control",attrs:{name:"email",type:"email"},domProps:{value:t.login.email},on:{input:function(o){o.target.composing||t.$set(t.login,"email",o.target.value)}}}),t._v(" "),e("span",{staticClass:"error__message"},[t._v(t._s(n[0]))])])]}}],null,!0)}),t._v(" "),e("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(o){var n=o.errors;return[e("div",{staticClass:"default-form-box password-login-button"},[e("label",[t._v("Mot de passe "),e("span",[t._v("*")])]),t._v(" "),e("button",[t.login.showPassword?e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control",attrs:{name:"password",autocomplete:"on"},domProps:{value:t.login.password},on:{input:function(o){o.target.composing||t.$set(t.login,"password",o.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control",attrs:{name:"password",type:"password",autocomplete:"on"},domProps:{value:t.login.password},on:{input:function(o){o.target.composing||t.$set(t.login,"password",o.target.value)}}}),t._v(" "),t.login.showPassword?e("i",{staticClass:"fa fa-solid fa-eye-slash",on:{click:function(o){return o.stopPropagation(),o.preventDefault(),t.showPassword()}}}):e("i",{staticClass:"fa fa-solid fa-eye",on:{click:function(o){return o.stopPropagation(),o.preventDefault(),t.showPassword()}}})]),t._v(" "),e("span",{staticClass:"error__message"},[t._v(t._s(n[0]))])]),t._v(" "),e("div",{staticClass:"forgot-password"},[e("nuxt-link",{attrs:{to:"/resetting/request"}},[t._v("Mot de passe oublié?")])],1)]}}],null,!0)}),t._v(" "),e("div",{staticClass:"login_submit"},[e("button",{staticClass:"theme-btn-one btn-black-overlay btn_md",attrs:{type:"submit"}},[t._v("\n                    Pull!\n                  ")]),t._v(" "),e("nuxt-link",{attrs:{to:"/register"}},[e("span",[t._v("Ou ")]),t._v("créer un compte")])],1)],1)]}}])})],1)])])])])])}),[],!1,null,null,null);o.default=component.exports}}]);