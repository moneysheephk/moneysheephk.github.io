(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{163:function(t,e,l){"use strict";var n={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},o=l(28),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t._m(0),t._v(" "),l("div",{class:"back-to-top "+(t.scrollBtn?"show":""),on:{click:t.scrollTop}},[t._m(1)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"footer secondery-bg"},[l("div",{staticClass:"footer-top pt-110 pb-70"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"footer-widget"},[l("div",{staticClass:"widget-title"},[l("h3",[t._v("Address")])]),t._v(" "),l("p",[t._v("666 Road Broklyn Street, 88 New York, USA")])])]),t._v(" "),l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"footer-widget text-center"},[l("div",{staticClass:"widget-title"},[l("h3",[t._v("Follow")])]),t._v(" "),l("div",{staticClass:"footer-social-area"},[l("ul",{staticClass:"social-list mb--0 list-unstyled"},[l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-pinterest"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-youtube"})])])])])])]),t._v(" "),l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"footer-widget text-right"},[l("div",{staticClass:"widget-title"},[l("h3",[t._v("Contact")])]),t._v(" "),l("div",{staticClass:"footer-contact-info"},[l("a",{attrs:{href:"0008888999"}},[t._v("000 8888 999")]),t._v(" "),l("a",{attrs:{href:"needhelp@mineralo.com"}},[t._v("needhelp@mineralo.com")])])])])])])]),t._v(" "),l("div",{staticClass:"footer-bottom text-center"},[l("div",{staticClass:"footer-bottom-text"},[l("p",[t._v("© Copyright 2020 by "),l("a",{attrs:{href:"#"}},[t._v("Layerdrops.com")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-chevron-up"})])}],!1,null,"11a69b12",null);e.a=component.exports},164:function(t,e,l){"use strict";var n={name:"NavOne",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},o=l(28),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"header"},[l("div",{class:"main-header "+(t.sticky?"sticky fadeInDown":"")},[l("div",{staticClass:"main-menu-wrap"},[l("div",{staticClass:"container-fluide"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6"},[l("div",{staticClass:"logo"},[l("nuxt-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/assets/img/logo.png","data-rjs":"2",alt:"mineralo"}})])],1)]),t._v(" "),l("div",{staticClass:"col-xl-6 col-lg-6 col-md-4 col-sm-4 col-6 menu-button"},[l("div",{staticClass:"menu--inner-area clearfix"},[l("div",{staticClass:"menu-wraper"},[l("nav",[l("div",{staticClass:"header-menu dosis"},[l("div",{attrs:{id:"menu-button"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[l("i",{staticClass:"fa fa-bars"})]),t._v(" "),l("ul",[l("li",{staticClass:"active"},[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home "),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})]),t._v(" "),l("ul",[l("li",{staticClass:"active"},[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home v1")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Home v2")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-3"}},[t._v("Home v3")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About "),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"#"}},[t._v("Service"),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/service"}},[t._v("Service")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/service-details"}},[t._v("Service Details")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"#"}},[t._v("Blog "),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/blog"}},[t._v("Blog Layout")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact"),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})])],1)])])])])])]),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"mobile-nav"},[l("ul",{staticClass:"open",style:"display: "+(t.mobileToggle?"block":"none")},[l("li",{staticClass:"active has-sub-item"},[l("span",{staticClass:"submenu-button submenu-opened"}),l("a",{attrs:{href:"#"}},[t._v("Home")]),t._v(" "),l("ul",[l("li",{staticClass:"active"},[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home v1")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Home v2")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-3"}},[t._v("Home v3")])],1)])]),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),l("li",{staticClass:"has-sub-item"},[l("span",{staticClass:"submenu-button"}),l("a",{attrs:{href:"#"}},[t._v("Service")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/service"}},[t._v("Service")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/service-details"}},[t._v("Service Details")])],1)])]),t._v(" "),l("li",{staticClass:"has-sub-item"},[l("span",{staticClass:"submenu-button"}),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Blog")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/blog"}},[t._v("Blog Layout")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])]),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-3 col-md-4 col-sm-4"},[l("div",{staticClass:"urgent-call text-right"},[l("span",[l("img",{staticClass:"svg",attrs:{src:"/assets/img/icons/call.svg",alt:""}})]),l("a",{attrs:{href:"#"}},[t._v("666 888 0000")])])])}],!1,null,"264d7f5c",null);e.a=component.exports},165:function(t,e,l){"use strict";var n={name:"PageHeader",props:{title:{type:String}}},o=l(28),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"page-title-wrap primary-bg"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("div",{staticClass:"page-title-content text-center"},[l("ul",{staticClass:"mb-0 list-unstyle nav"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v(t._s(t.title))])])]),t._v(" "),l("h1",{staticClass:"h2"},[t._v(t._s(t.title))])])])])])])}),[],!1,null,"1416c1c1",null);e.a=component.exports},173:function(t,e,l){"use strict";var n={name:"MapG"},o=l(28),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"google-map"},[e("iframe",{staticStyle:{width:"100%",height:"600px",border:"none"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd",allowFullScreen:""}})])}],!1,null,"09d0ad57",null);e.a=component.exports},192:function(t,e,l){"use strict";l.r(e);var n=l(164),o=l(165),c={name:"Contact"},r=l(28),v=Object(r.a)(c,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("section",{staticClass:"pt-120 top-shape"},[l("div",{staticClass:"conatct-info"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"single-conatct-info"},[l("h4",[t._v("About")]),t._v(" "),l("p",[t._v("Phaseus site amet tristique ligua donec iaculis leo sus.")])])]),t._v(" "),l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"single-conatct-info"},[l("h4",[t._v("Address")]),t._v(" "),l("p",[t._v("666 Road Broklyn Street, 88 New York, USA")])])]),t._v(" "),l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"single-conatct-info"},[l("h4",[t._v("Contact")]),t._v(" "),l("a",{attrs:{href:"needhelp@mineralo.com"}},[t._v("needhelp@mineralo.com")]),t._v(" "),l("a",{attrs:{href:"0008888999"}},[t._v("000 8888 999")])])])])])])]),t._v(" "),l("section",{staticClass:"pt-90 pb-120"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-8"},[l("div",{staticClass:"section-title text-center"},[l("span",{staticClass:"schoolbell"},[t._v("Contact Us")]),t._v(" "),l("h2",[t._v("Send Message")])])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-8 offset-lg-2 col-md-10 offset-md-1"},[l("div",{staticClass:"contact-form contact-page-form parsley-validate"},[l("form",{attrs:{action:"#",method:"post"}},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6"},[l("input",{staticClass:"theme-input-style",attrs:{type:"text",name:"name",placeholder:"Full Name",required:""}})]),t._v(" "),l("div",{staticClass:"col-md-6"},[l("input",{staticClass:"theme-input-style",attrs:{type:"email",name:"email",placeholder:"Email Address",required:""}})])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12"},[l("textarea",{staticClass:"theme-input-style",attrs:{name:"message",placeholder:"Write Message"}}),t._v(" "),l("div",{staticClass:"submite-btn text-center"},[l("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Send Message")])])])])])])])])])])])}],!1,null,"76e20d07",null).exports,d=l(173),m={components:{Footer:l(163).a,MapG:d.a,Contact:v,PageHeader:o.a,NavOne:n.a},head:function(){return{title:"Mineralo - Contact"}}},_=Object(r.a)(m,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("NavOne"),t._v(" "),l("PageHeader",{attrs:{title:"Contact"}}),t._v(" "),l("Contact"),t._v(" "),l("MapG"),t._v(" "),l("Footer")],1)}),[],!1,null,null,null);e.default=_.exports}}]);