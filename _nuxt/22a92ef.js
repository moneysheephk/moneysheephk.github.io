(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{163:function(t,e,l){"use strict";var r={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},n=l(28),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t._m(0),t._v(" "),l("div",{class:"back-to-top "+(t.scrollBtn?"show":""),on:{click:t.scrollTop}},[t._m(1)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"footer secondery-bg"},[l("div",{staticClass:"footer-top pt-110 pb-70"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"footer-widget"},[l("div",{staticClass:"widget-title"},[l("h3",[t._v("Address")])]),t._v(" "),l("p",[t._v("666 Road Broklyn Street, 88 New York, USA")])])]),t._v(" "),l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"footer-widget text-center"},[l("div",{staticClass:"widget-title"},[l("h3",[t._v("Follow")])]),t._v(" "),l("div",{staticClass:"footer-social-area"},[l("ul",{staticClass:"social-list mb--0 list-unstyled"},[l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-pinterest"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-youtube"})])])])])])]),t._v(" "),l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"footer-widget text-right"},[l("div",{staticClass:"widget-title"},[l("h3",[t._v("Contact")])]),t._v(" "),l("div",{staticClass:"footer-contact-info"},[l("a",{attrs:{href:"0008888999"}},[t._v("000 8888 999")]),t._v(" "),l("a",{attrs:{href:"needhelp@mineralo.com"}},[t._v("needhelp@mineralo.com")])])])])])])]),t._v(" "),l("div",{staticClass:"footer-bottom text-center"},[l("div",{staticClass:"footer-bottom-text"},[l("p",[t._v("© Copyright 2020 by "),l("a",{attrs:{href:"#"}},[t._v("Layerdrops.com")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-chevron-up"})])}],!1,null,"11a69b12",null);e.a=component.exports},164:function(t,e,l){"use strict";var r={name:"NavOne",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},n=l(28),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"header"},[l("div",{class:"main-header "+(t.sticky?"sticky fadeInDown":"")},[l("div",{staticClass:"main-menu-wrap"},[l("div",{staticClass:"container-fluide"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6"},[l("div",{staticClass:"logo"},[l("nuxt-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/assets/img/logo.png","data-rjs":"2",alt:"mineralo"}})])],1)]),t._v(" "),l("div",{staticClass:"col-xl-6 col-lg-6 col-md-4 col-sm-4 col-6 menu-button"},[l("div",{staticClass:"menu--inner-area clearfix"},[l("div",{staticClass:"menu-wraper"},[l("nav",[l("div",{staticClass:"header-menu dosis"},[l("div",{attrs:{id:"menu-button"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[l("i",{staticClass:"fa fa-bars"})]),t._v(" "),l("ul",[l("li",{staticClass:"active"},[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home "),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})]),t._v(" "),l("ul",[l("li",{staticClass:"active"},[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home v1")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Home v2")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-3"}},[t._v("Home v3")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About "),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"#"}},[t._v("Service"),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/service"}},[t._v("Service")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/service-details"}},[t._v("Service Details")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"#"}},[t._v("Blog "),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/blog"}},[t._v("Blog Layout")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact"),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})])],1)])])])])])]),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"mobile-nav"},[l("ul",{staticClass:"open",style:"display: "+(t.mobileToggle?"block":"none")},[l("li",{staticClass:"active has-sub-item"},[l("span",{staticClass:"submenu-button submenu-opened"}),l("a",{attrs:{href:"#"}},[t._v("Home")]),t._v(" "),l("ul",[l("li",{staticClass:"active"},[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home v1")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Home v2")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/index-3"}},[t._v("Home v3")])],1)])]),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),l("li",{staticClass:"has-sub-item"},[l("span",{staticClass:"submenu-button"}),l("a",{attrs:{href:"#"}},[t._v("Service")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/service"}},[t._v("Service")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/service-details"}},[t._v("Service Details")])],1)])]),t._v(" "),l("li",{staticClass:"has-sub-item"},[l("span",{staticClass:"submenu-button"}),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Blog")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/blog"}},[t._v("Blog Layout")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])]),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-3 col-md-4 col-sm-4"},[l("div",{staticClass:"urgent-call text-right"},[l("span",[l("img",{staticClass:"svg",attrs:{src:"/assets/img/icons/call.svg",alt:""}})]),l("a",{attrs:{href:"#"}},[t._v("666 888 0000")])])])}],!1,null,"264d7f5c",null);e.a=component.exports},165:function(t,e,l){"use strict";var r={name:"PageHeader",props:{title:{type:String}}},n=l(28),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"page-title-wrap primary-bg"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("div",{staticClass:"page-title-content text-center"},[l("ul",{staticClass:"mb-0 list-unstyle nav"},[l("li",[l("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v(t._s(t.title))])])]),t._v(" "),l("h1",{staticClass:"h2"},[t._v(t._s(t.title))])])])])])])}),[],!1,null,"1416c1c1",null);e.a=component.exports},172:function(t,e,l){"use strict";var r={name:"BlogPage"},n=l(28),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"pt-120 pb-90 top-shape"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"single-blog-inner"},[l("div",{staticClass:"post-image"},[l("nuxt-link",{attrs:{to:"/blog-details"}},[l("img",{attrs:{src:"/assets/img/blog/blog1.png",alt:""}})]),t._v(" "),t._m(0)],1),t._v(" "),l("div",{staticClass:"post-content"},[l("div",{staticClass:"post-details"},[l("div",{staticClass:"post-title"},[l("h3",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Great taste fresh & consistent")])],1)]),t._v(" "),l("p",[t._v("There are many variations of passages of available but majority have alteration in some by inject humour or random words.")]),t._v(" "),l("nuxt-link",{attrs:{to:"/blog-details"}},[l("i",{staticClass:"fa fa-arrow-circle-o-right"}),t._v("More")])],1),t._v(" "),t._m(1)])])]),t._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"single-blog-inner"},[l("div",{staticClass:"post-image"},[l("nuxt-link",{attrs:{to:"/blog-details"}},[l("img",{attrs:{src:"/assets/img/blog/blog3.png",alt:""}})]),t._v(" "),t._m(2)],1),t._v(" "),l("div",{staticClass:"post-content"},[l("div",{staticClass:"post-details"},[t._m(3),t._v(" "),l("p",[t._v("There are many variations of passages of available but majority have alteration in some by inject humour or random words.")]),t._v(" "),l("nuxt-link",{attrs:{to:"/blog-details"}},[l("i",{staticClass:"fa fa-arrow-circle-o-right"}),t._v("More")])],1),t._v(" "),t._m(4)])])]),t._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"single-blog-inner"},[l("div",{staticClass:"post-image"},[l("nuxt-link",{attrs:{to:"/blog-details"}},[l("img",{attrs:{src:"/assets/img/blog/blog2.png",alt:""}})]),t._v(" "),t._m(5)],1),t._v(" "),l("div",{staticClass:"post-content"},[l("div",{staticClass:"post-details"},[l("div",{staticClass:"post-title"},[l("h3",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Delicious water always on tap")])],1)]),t._v(" "),l("p",[t._v("There are many variations of passages of available but majority have alteration in some by inject humour or random words.")]),t._v(" "),t._m(6)]),t._v(" "),t._m(7)])])]),t._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"single-blog-inner"},[l("div",{staticClass:"post-image"},[l("nuxt-link",{attrs:{to:"/blog-details"}},[l("img",{attrs:{src:"/assets/img/blog/blog9.png",alt:""}})]),t._v(" "),t._m(8)],1),t._v(" "),l("div",{staticClass:"post-content"},[l("div",{staticClass:"post-details"},[l("div",{staticClass:"post-title"},[l("h3",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Great taste fresh & consistent")])],1)]),t._v(" "),l("p",[t._v("There are many variations of passages of available but majority have alteration in some by inject humour or random words.")]),t._v(" "),l("nuxt-link",{attrs:{to:"/blog-details"}},[l("i",{staticClass:"fa fa-arrow-circle-o-right"}),t._v("More")])],1),t._v(" "),t._m(9)])])]),t._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"single-blog-inner"},[l("div",{staticClass:"post-image"},[l("nuxt-link",{attrs:{to:"/blog-details"}},[l("img",{attrs:{src:"/assets/img/blog/blog8.png",alt:""}})]),t._v(" "),t._m(10)],1),t._v(" "),l("div",{staticClass:"post-content"},[l("div",{staticClass:"post-details"},[l("div",{staticClass:"post-title"},[l("h3",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Water delivered to your home")])],1)]),t._v(" "),l("p",[t._v("There are many variations of passages of available but majority have alteration in some by inject humour or random words.")]),t._v(" "),l("nuxt-link",{attrs:{to:"/blog-details"}},[l("i",{staticClass:"fa fa-arrow-circle-o-right"}),t._v("More")])],1),t._v(" "),t._m(11)])])]),t._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"single-blog-inner"},[l("div",{staticClass:"post-image"},[l("nuxt-link",{attrs:{to:"/blog-details"}},[l("img",{attrs:{src:"/assets/img/blog/blog9.png",alt:""}})]),t._v(" "),t._m(12)],1),t._v(" "),l("div",{staticClass:"post-content"},[l("div",{staticClass:"post-details"},[l("div",{staticClass:"post-title"},[l("h3",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Delicious water always on tap")])],1)]),t._v(" "),l("p",[t._v("There are many variations of passages of available but majority have alteration in some by inject humour or random words.")]),t._v(" "),l("nuxt-link",{attrs:{to:"/blog-details"}},[l("i",{staticClass:"fa fa-arrow-circle-o-right"}),t._v("More")])],1),t._v(" "),t._m(13)])])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-date"},[l("p",[l("span",[t._v("10")]),t._v("Sep")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-info d-flex"},[l("a",{attrs:{href:"#"}},[l("span",[t._v("By")]),t._v("Admin")]),t._v(" "),l("a",{attrs:{href:"#"}},[l("span",[t._v("2")]),t._v(" Comeent")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-date"},[l("p",[l("span",[t._v("30")]),t._v("Sep")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-title"},[l("h3",[l("a",{attrs:{href:"/blog-details"}},[t._v("Water delivered to your home")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-info d-flex"},[l("a",{attrs:{href:"#"}},[l("span",[t._v("By")]),t._v("Admin")]),t._v(" "),l("a",{attrs:{href:"#"}},[l("span",[t._v("2")]),t._v(" Comeent")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-date"},[l("p",[l("span",[t._v("30")]),t._v("Sep")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("a",{attrs:{href:"/blog-details"}},[l("i",{staticClass:"fa fa-arrow-circle-o-right"}),t._v("More")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-info d-flex"},[l("a",{attrs:{href:"#"}},[l("span",[t._v("By")]),t._v("Admin")]),t._v(" "),l("a",{attrs:{href:"#"}},[l("span",[t._v("2")]),t._v(" Comeent")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-date"},[l("p",[l("span",[t._v("20")]),t._v("Sep")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-info d-flex"},[l("a",{attrs:{href:"#"}},[l("span",[t._v("By")]),t._v("Admin")]),t._v(" "),l("a",{attrs:{href:"#"}},[l("span",[t._v("2")]),t._v(" Comeent")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-date"},[l("p",[l("span",[t._v("06")]),t._v("Sep")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-info d-flex"},[l("a",{attrs:{href:"#"}},[l("span",[t._v("By")]),t._v("Admin")]),t._v(" "),l("a",{attrs:{href:"#"}},[l("span",[t._v("2")]),t._v(" Comeent")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-date"},[l("p",[l("span",[t._v("10")]),t._v("Sep")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-info d-flex"},[l("a",{attrs:{href:"#"}},[l("span",[t._v("By")]),t._v("Admin")]),t._v(" "),l("a",{attrs:{href:"#"}},[l("span",[t._v("2")]),t._v(" Comeent")])])}],!1,null,"6305ef68",null);e.a=component.exports},191:function(t,e,l){"use strict";l.r(e);var r=l(164),n=l(165),o=l(172),v=l(163),c={name:"BlogDetails"},d=l(28),_={components:{BlogDetails:Object(d.a)(c,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"pt-120 pb-120 top-shape"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-8"},[l("div",{staticClass:"blog-details-wrap"},[l("div",{staticClass:"blog-details-image"},[l("img",{attrs:{src:"/assets/img/blog/blog-details.png",alt:""}}),t._v(" "),l("div",{staticClass:"post-date"},[l("p",[l("span",[t._v("30")]),t._v("Sep")])])]),t._v(" "),l("div",{staticClass:"blog-details-head"},[l("h2",[t._v("Delicious water always on tap")])]),t._v(" "),l("div",{staticClass:"post-info d-flex"},[l("a",{attrs:{href:"#"}},[l("span",[t._v("By")]),t._v("Admin")]),t._v(" "),l("a",{attrs:{href:"#"}},[l("span",[t._v("2")]),t._v(" Comeent")])]),t._v(" "),l("div",{staticClass:"blog-details-body"},[l("p",[t._v("\n                                There something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")]),t._v(" "),l("p",[t._v("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.")])]),t._v(" "),l("div",{staticClass:"post-tag-share d-flex align-items-center"},[l("div",{staticClass:"post-tag"},[l("h4",[t._v("Tags:")]),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Water")]),t._v(",\n                                "),l("a",{attrs:{href:"#"}},[t._v("Delivery")]),t._v(",\n                                "),l("a",{attrs:{href:"#"}},[t._v("Filter")])]),t._v(" "),l("div",{staticClass:"post-share"},[l("ul",{staticClass:"social-list mb--0 list-unstyled"},[l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa fa-pinterest"})])])])])]),t._v(" "),l("div",{staticClass:"post-author-inner midea"},[l("img",{attrs:{src:"/assets/img/blog/post-author.png",alt:""}}),t._v(" "),l("div",{staticClass:"author-details"},[l("h4",[t._v("Christine Eve")]),t._v(" "),l("p",[t._v("Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer nullam condimentum purus.")]),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("View All Posts")])])]),t._v(" "),l("div",{staticClass:"post-comment"},[l("h3",[t._v("2 Comments")]),t._v(" "),l("ul",{staticClass:"post-comments p-0 m-0 list-unstyled"},[l("li",[l("div",{staticClass:"comment-author-details media"},[l("img",{attrs:{src:"/assets/img/blog/comment-author.png",alt:""}}),t._v(" "),l("div",{staticClass:"comment-author-content"},[l("h5",[t._v("David Martin")]),t._v(" "),l("h6",[t._v("20 oct, 2018   -   4:00 pm")]),t._v(" "),l("p",[t._v("Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.")]),t._v(" "),l("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Reply")])])])]),t._v(" "),l("li",{staticClass:"d-flex"},[l("div",{staticClass:"comment-author-details media"},[l("img",{attrs:{src:"/assets/img/blog/comment-author2.png",alt:""}}),t._v(" "),l("div",{staticClass:"comment-author-content"},[l("h5",[t._v("Jasseca Brown")]),t._v(" "),l("h6",[t._v("20 oct, 2018   -   4:00 pm")]),t._v(" "),l("p",[t._v("Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.")]),t._v(" "),l("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Reply")])])])])])]),t._v(" "),l("div",{staticClass:"contact-form contact-page-form parsley-validate"},[l("h3",[t._v("Leave a Comment")]),t._v(" "),l("form",{attrs:{action:"#",novalidate:""}},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6"},[l("input",{staticClass:"theme-input-style",attrs:{type:"text",name:"name",placeholder:"Full Name",required:""}})]),t._v(" "),l("div",{staticClass:"col-md-6"},[l("input",{staticClass:"theme-input-style",attrs:{type:"email",name:"email",placeholder:"Email Address",required:""}})])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12"},[l("textarea",{staticClass:"theme-input-style",attrs:{name:"message",placeholder:"Write Message"}}),t._v(" "),l("div",{staticClass:"submite-btn"},[l("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Send Message")])])])])])])])]),t._v(" "),l("div",{staticClass:"col-lg-4"},[l("aside",[l("div",{staticClass:"single-sidebar-widget mb-30"},[l("div",{staticClass:"search-form parsley-validate"},[l("form",{attrs:{action:"#",novalidate:""}},[l("input",{attrs:{type:"text",required:"",placeholder:"Search here"}})])])]),t._v(" "),l("div",{staticClass:"single-sidebar-widget mb-30"},[l("div",{staticClass:"sidebar-title"},[l("h4",[t._v("Latest Posts")])]),t._v(" "),l("ul",{staticClass:"treading-posts p-0 m-0 list-unstyled"},[l("li",{staticClass:"d-flex"},[l("img",{attrs:{src:"/assets/img/blog/latest.png",alt:""}}),t._v(" "),l("div",{staticClass:"latest-poat"},[l("h6",[l("a",{attrs:{href:"#"}},[t._v("Water delivered to your home")])])])]),t._v(" "),l("li",{staticClass:"d-flex"},[l("img",{attrs:{src:"/assets/img/blog/latest2.png",alt:""}}),t._v(" "),l("div",{staticClass:"latest-poat"},[l("h6",[l("a",{attrs:{href:"#"}},[t._v("Great taste fresh & consistent")])])])]),t._v(" "),l("li",{staticClass:"d-flex"},[l("img",{attrs:{src:"/assets/img/blog/latest3.png",alt:""}}),t._v(" "),l("div",{staticClass:"latest-poat"},[l("h6",[l("a",{attrs:{href:"#"}},[t._v("Fresh spring water delivery")])])])])])]),t._v(" "),l("div",{staticClass:"single-sidebar-widget mb-30"},[l("div",{staticClass:"sidebar-title"},[l("h4",[t._v("Catagories")])]),t._v(" "),l("ul",{staticClass:"catagory-widget list-unstyled mb-0"},[l("li",[l("a",{attrs:{href:"#"}},[t._v("Water")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Pure Mineral")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Soft Drinking Water")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Filter Water")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Spring Water")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Water Delivery")])])])]),t._v(" "),l("div",{staticClass:"single-sidebar-widget mb-30"},[l("div",{staticClass:"sidebar-title"},[l("h4",[t._v("Tags")])]),t._v(" "),l("div",{staticClass:"tag-clouds list-unstyled mb-0"},[l("a",{attrs:{href:"#"}},[t._v("Water")]),t._v(",\n                                "),l("a",{attrs:{href:"#"}},[t._v("Pure Mineral")]),t._v(",\n                                "),l("a",{attrs:{href:"#"}},[t._v("Soft Drinking Water")]),t._v(",\n                                "),l("a",{attrs:{href:"#"}},[t._v("Filter Water")]),t._v(",\n                                "),l("a",{attrs:{href:"#"}},[t._v("Spring Water")]),t._v(",\n                                "),l("a",{attrs:{href:"#"}},[t._v("Water Delivery")])])])])])])])])}],!1,null,"87c10a48",null).exports,Footer:v.a,BlogPage:o.a,PageHeader:n.a,NavOne:r.a},head:function(){return{title:"Mineralo - Blog Detail"}}},m=Object(d.a)(_,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("NavOne"),t._v(" "),l("PageHeader",{attrs:{title:"Blog Detail"}}),t._v(" "),l("BlogDetails"),t._v(" "),l("Footer")],1)}),[],!1,null,null,null);e.default=m.exports}}]);