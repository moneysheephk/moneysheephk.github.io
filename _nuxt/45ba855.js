(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{163:function(t,e,l){var content=l(165);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(65).default)("6c913864",content,!0,{sourceMap:!1})},164:function(t,e,l){"use strict";l(163)},165:function(t,e,l){var n=l(64)(!1);n.push([t.i,".row[data-v-3472ec1e]{justify-content:center}.email[data-v-3472ec1e],.follow-button[data-v-3472ec1e],.whatsapp[data-v-3472ec1e]{cursor:pointer}",""]),t.exports=n},166:function(t,e,l){"use strict";var n={name:"Footer",data:function(){return{scrollBtn:!1,whatsappLink:"https://api.whatsapp.com/send?phone=85254407482&app=facebook&entry_point=page_cta&fbclid=IwAR155hKk6PZq-9X0jaivk57VMwjiRSJCj02Ej2IhHozW_Pkr2X9oVf56gM8",facebookLink:"https://www.facebook.com/moneysheephk",twitterLink:"",youtubeLink:""}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},openBrowser:function(link){link&&window.open(link)},scrollTop:function(){window.scrollTo(0,0)}}},o=(l(164),l(28)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("footer",{staticClass:"footer secondery-bg"},[l("div",{staticClass:"footer-top pt-110 pb-70"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"footer-widget text-center"},[t._m(0),t._v(" "),l("div",{staticClass:"footer-social-area"},[l("ul",{staticClass:"social-list mb--0 list-unstyled"},[l("li",[l("a",{staticClass:"follow-button",on:{click:function(e){return t.openBrowser(t.twitterLink)}}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{staticClass:"follow-button",on:{click:function(e){return t.openBrowser(t.facebookLink)}}},[l("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),l("li",[l("a",{staticClass:"follow-button",on:{click:function(e){return t.openBrowser(t.youtubeLink)}}},[l("i",{staticClass:"fa fa-youtube"})])])])])])]),t._v(" "),l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"footer-widget text-right"},[t._m(1),t._v(" "),l("div",{staticClass:"footer-contact-info"},[l("div",{staticClass:"whatsapp",on:{click:function(e){return t.openBrowser(t.whatsappLink)}}},[t._v("\n                  5440 7482\n                ")]),t._v(" "),l("a",{staticClass:"email",attrs:{href:"mailto:moneysheephk2021@gmail.com"}},[t._v("moneysheephk2021@gmail.com")])])])])])])]),t._v(" "),l("div",{staticClass:"footer-bottom text-center"})]),t._v(" "),l("div",{class:"back-to-top "+(t.scrollBtn?"show":""),on:{click:t.scrollTop}},[t._m(2)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"widget-title"},[l("h3",[t._v("Follow")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"widget-title"},[l("h3",[t._v("Contact")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-chevron-up"})])}],!1,null,"3472ec1e",null);e.a=component.exports},171:function(t,e,l){"use strict";var n=l(169),o=(l(170),{name:"TestimonialTwo",components:{Swiper:n.Swiper,SwiperSlide:n.SwiperSlide},directives:{swiper:n.directive},data:function(){return{swiperOptions:{slidesPerView:1,loop:!0,speed:1e3,spaceBetween:30,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}}),r=l(28),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"pt-120 pb-110 blue-bg2"},[l("div",{staticClass:"container"},[t._m(0),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"testionial-carousel-wrap type2"},[l("div",{staticClass:"testionial-carousel2"},[l("swiper",{attrs:{options:t.swiperOptions}},[l("swiper-slide",[l("div",{staticClass:"single-testimonial text-center"},[l("div",{staticClass:"testi-quate"},[l("img",{attrs:{src:"/assets/img/qort-icon.png",alt:""}})]),t._v(" "),l("p",[t._v("There are many variations of passages of available but the majority have alteration in some form by inject humour or random words which don't look even slightly they will believe you.")]),t._v(" "),l("div",{staticClass:"testimonial-author"},[l("div",{staticClass:"testimonial-author-deg"},[l("h4",[t._v("Kevin Martin")]),t._v(" "),l("p",[t._v("Manager")])]),t._v(" "),l("img",{attrs:{src:"/assets/img/team/author4.png",alt:""}})])])]),t._v(" "),l("swiper-slide",[l("div",{staticClass:"single-testimonial text-center"},[l("div",{staticClass:"testi-quate"},[l("img",{attrs:{src:"/assets/img/qort-icon.png",alt:""}})]),t._v(" "),l("p",[t._v("There are many variations of passages of available but the majority have alteration in some form by inject humour or random words which don't look even slightly they will believe you.")]),t._v(" "),l("div",{staticClass:"testimonial-author"},[l("div",{staticClass:"testimonial-author-deg"},[l("h4",[t._v("Kevin Martin")]),t._v(" "),l("p",[t._v("Manager")])]),t._v(" "),l("img",{attrs:{src:"/assets/img/team/author4.png",alt:""}})])])]),t._v(" "),l("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),l("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1)],1)])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-8"},[l("div",{staticClass:"section-title text-center"},[l("span",{staticClass:"schoolbell"},[t._v("Our Feedbacks")]),t._v(" "),l("h2",{staticClass:"text-white"},[t._v("Testimonials")])])])])}],!1,null,"405be618",null);e.a=component.exports},174:function(t,e,l){var content=l(180);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(65).default)("e37392de",content,!0,{sourceMap:!1})},175:function(t,e,l){var content=l(182);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(65).default)("4ff366a4",content,!0,{sourceMap:!1})},179:function(t,e,l){"use strict";l(174)},180:function(t,e,l){var n=l(64)(!1);n.push([t.i,'.main-header.header-style2[data-v-41ebe16a]{background-color:#4eddad}.main-logo[data-v-41ebe16a]{width:80px}a[data-v-41ebe16a]{font-family:"genJyuuGothic-regular";font-size:20px;line-height:1.5}',""]),t.exports=n},181:function(t,e,l){"use strict";l(175)},182:function(t,e,l){var n=l(64)(!1);n.push([t.i,".banner-area-inner[data-v-5214f72c]{padding-top:100px;min-height:700px;height:80vh}.banner-wrap.home-banner2[data-v-5214f72c]{background-image:url(/banner.png);background-size:cover}",""]),t.exports=n},184:function(t,e,l){"use strict";l.r(e);var n={name:"NavTwo",data:function(){return{sticky:!1,mobileToggle:!1,whatsappLink:"https://api.whatsapp.com/send?phone=85254407482&app=facebook&entry_point=page_cta&fbclid=IwAR155hKk6PZq-9X0jaivk57VMwjiRSJCj02Ej2IhHozW_Pkr2X9oVf56gM8"}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{openBrowser:function(link){link&&window.open(link)},handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},o=(l(179),l(28)),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"header"},[l("div",{class:"main-header header-style2 "+(t.sticky?"sticky fadeInDown":"")},[l("div",{staticClass:"main-menu-wrap"},[l("div",{staticClass:"container-fluide"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6"},[l("div",{staticClass:"logo"},[l("nuxt-link",{attrs:{to:"/"}},[l("img",{staticClass:"main-logo",attrs:{src:"/logo.png","data-rjs":"2",alt:"Money Sheep"}})])],1)]),t._v(" "),l("div",{staticClass:"col-xl-6 col-lg-6 col-md-4 col-sm-4 col-6 menu-button"},[l("div",{staticClass:"menu--inner-area clearfix"},[l("div",{staticClass:"menu-wraper"},[l("nav",[l("div",{staticClass:"header-menu dosis"},[l("div",{attrs:{id:"menu-button"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[l("i",{staticClass:"fa fa-bars"})]),t._v(" "),l("ul",[l("li",{staticClass:"active"},[l("nuxt-link",{attrs:{to:"/"}},[t._v("主頁"),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("關於我們 "),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"#"}},[t._v("服務簡介"),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"#"}},[t._v("Blog "),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("聯絡我們"),l("img",{attrs:{src:"/assets/img/line2.png",alt:""}})])],1)])])])])])]),t._v(" "),l("div",{staticClass:"col-lg-3 col-md-4 col-sm-4"},[l("div",{staticClass:"urgent-call text-right"},[t._m(0),l("a",{attrs:{href:"#"},on:{click:function(e){return t.openBrowser(t.whatsappLink)}}},[t._v("5440 7482")])])]),t._v(" "),l("div",{staticClass:"mobile-nav"},[l("ul",{staticClass:"open",style:"display: "+(t.mobileToggle?"block":"none")},[t._m(1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),l("li",{staticClass:"has-sub-item"},[l("span",{staticClass:"submenu-button"}),l("a",{attrs:{href:"#"}},[t._v("Service")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/service"}},[t._v("Service")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/service-details"}},[t._v("Service Details")])],1)])]),t._v(" "),l("li",{staticClass:"has-sub-item"},[l("span",{staticClass:"submenu-button"}),t._v(" "),l("a",{attrs:{href:"#"}},[t._v("Blog")]),t._v(" "),l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/blog"}},[t._v("Blog Layout")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])]),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("img",{staticClass:"svg",attrs:{src:"/assets/img/icons/call.svg",alt:"Contact Number"}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",{staticClass:"active has-sub-item"},[l("span",{staticClass:"submenu-button submenu-opened"}),l("a",{attrs:{href:"#"}},[t._v("Home")])])}],!1,null,"41ebe16a",null).exports,c={name:"BannerTwo"},v=(l(181),Object(o.a)(c,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-area-inner"},[e("div",{staticClass:"banner-wrap home-banner2"})])}],!1,null,"5214f72c",null).exports),d=l(166),_={name:"QualityArea"},m=Object(o.a)(_,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"pt-120 pb-120 quality",staticStyle:{"background-image":"url(/assets/img/qulity.png)"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6 offset-md-6"},[l("div",{staticClass:"section-title type2"},[l("span",{staticClass:"schoolbell"},[t._v("Shortly About Us")]),t._v(" "),l("h2",[t._v("Learn About Mineralo")])]),t._v(" "),l("div",{staticClass:"our-quality-inner"},[l("p",[t._v("Mineralo water industries is pleased to introduce itself as a new entrant in the market for supply of revitalizing, refreshing, pure clean & healthy mineralized water.")]),t._v(" "),l("div",{staticClass:"our-quality-feature media"},[l("div",{staticClass:"our-quality-left"},[l("ul",{staticClass:"mb-0 list-unstyled"},[l("li",[l("span",[t._v("1")]),t._v("\n                                        Calcium\n                                    ")]),t._v(" "),l("li",[l("span",[t._v("2")]),t._v("\n                                        Magnesium\n                                    ")]),t._v(" "),l("li",[l("span",[t._v("3")]),t._v("\n                                        Sodium\n                                    ")]),t._v(" "),l("li",[l("span",[t._v("4")]),t._v("\n                                        Potassium\n                                    ")])])]),t._v(" "),l("div",{staticClass:"our-quality-right"},[l("ul",{staticClass:"mb-0 list-unstyled"},[l("li",[l("span",[t._v("5")]),t._v("\n                                        Chloride\n                                    ")]),t._v(" "),l("li",[l("span",[t._v("6")]),t._v("\n                                        Nitrate\n                                    ")]),t._v(" "),l("li",[l("span",[t._v("7")]),t._v("\n                                        TDS\n                                    ")]),t._v(" "),l("li",[l("span",[t._v("8")]),t._v("\n                                        PH\n                                    ")])])])])])])])])])}],!1,null,"4c102bfc",null).exports,f={name:"BottleDeliver"},h=Object(o.a)(f,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"pt-120 pb-120"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"section-title text-center"},[l("span",{staticClass:"schoolbell"},[t._v("Water Bottles")]),t._v(" "),l("h2",[t._v("We Deliver Bottles")])])])]),t._v(" "),l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"single-bottle-inner text-center"},[l("div",{staticClass:"bottle-image"},[l("img",{staticClass:"svg",attrs:{src:"/assets/img/icons/water-gallon.svg",alt:""}})]),t._v(" "),l("div",{staticClass:"single-bottle-text"},[l("h4",[t._v("10 Litre Gallon")]),t._v(" "),l("p",[t._v("Sed quia magni eos qui lorem ratione volup tatem.")]),t._v(" "),l("a",{attrs:{href:"/service-details"}},[l("i",{staticClass:"fa fa-arrow-circle-o-right"}),t._v("Order")])])])]),t._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"single-bottle-inner text-center"},[l("div",{staticClass:"bottle-image"},[l("img",{staticClass:"svg",attrs:{src:"/assets/img/icons/big-bottle-of-water.svg",alt:""}})]),t._v(" "),l("div",{staticClass:"single-bottle-text"},[l("h4",[t._v("20 Litre Gallon")]),t._v(" "),l("p",[t._v("Sed quia magni eos qui lorem ratione volup tatem.")]),t._v(" "),l("a",{attrs:{href:"/service-details"}},[l("i",{staticClass:"fa fa-arrow-circle-o-right"}),t._v("Order")])])])]),t._v(" "),l("div",{staticClass:"col-lg-4 col-md-6"},[l("div",{staticClass:"single-bottle-inner text-center"},[l("div",{staticClass:"bottle-image"},[l("img",{staticClass:"svg",attrs:{src:"/assets/img/icons/bottle-of-water.svg",alt:""}})]),t._v(" "),l("div",{staticClass:"single-bottle-text"},[l("h4",[t._v("1 Litre Gallon")]),t._v(" "),l("p",[t._v("Sed quia magni eos qui lorem ratione volup tatem.")]),t._v(" "),l("a",{attrs:{href:"/service-details"}},[l("i",{staticClass:"fa fa-arrow-circle-o-right"}),t._v("Order")])])])]),t._v(" "),l("div",{staticClass:"col-12"},[l("div",{staticClass:"deliver-btn text-center"},[l("a",{staticClass:"btn",attrs:{href:"/service"}},[t._v("View all Bottle")])])])])])])}],!1,null,"65d6f963",null).exports,C=l(171),w={name:"Blog"},y=Object(o.a)(w,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"pt-120 pb-90 top-shape"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-center"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"section-title text-center"},[l("span",{staticClass:"schoolbell"},[t._v("News & Articles")]),t._v(" "),l("h2",[t._v("Latest Blog Posts")])])])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6 col-lg-4"},[l("div",{staticClass:"single-blog-inner"},[l("div",{staticClass:"post-image"},[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:"/assets/img/blog/blog1.png",alt:""}})]),t._v(" "),l("div",{staticClass:"post-date"},[l("p",[l("span",[t._v("30")]),t._v("Sep")])])]),t._v(" "),l("div",{staticClass:"post-content"},[l("div",{staticClass:"post-details"},[l("div",{staticClass:"post-title"},[l("h3",[l("a",{attrs:{href:"#"}},[t._v("Great taste fresh & consistent")])])]),t._v(" "),l("p",[t._v("There are many variations of passages of available but majority have alteration in some by inject humour or random words.")]),t._v(" "),l("a",{attrs:{href:"/blog-details"}},[l("i",{staticClass:"fa fa-arrow-circle-o-right"}),t._v("More")])]),t._v(" "),l("div",{staticClass:"post-info d-flex"},[l("a",{attrs:{href:"#"}},[l("span",[t._v("By")]),t._v("Admin")]),t._v(" "),l("a",{attrs:{href:"#"}},[l("span",[t._v("2")]),t._v(" Comeent")])])])])]),t._v(" "),l("div",{staticClass:"col-md-6 col-lg-4"},[l("div",{staticClass:"single-blog-inner"},[l("div",{staticClass:"post-image"},[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:"/assets/img/blog/blog3.png",alt:""}})]),t._v(" "),l("div",{staticClass:"post-date"},[l("p",[l("span",[t._v("30")]),t._v("Sep")])])]),t._v(" "),l("div",{staticClass:"post-content"},[l("div",{staticClass:"post-details"},[l("div",{staticClass:"post-title"},[l("h3",[l("a",{attrs:{href:"#"}},[t._v("Water delivered to your home")])])]),t._v(" "),l("p",[t._v("There are many variations of passages of available but majority have alteration in some by inject humour or random words.")]),t._v(" "),l("a",{attrs:{href:"/blog-details"}},[l("i",{staticClass:"fa fa-arrow-circle-o-right"}),t._v("More")])]),t._v(" "),l("div",{staticClass:"post-info d-flex"},[l("a",{attrs:{href:"#"}},[l("span",[t._v("By")]),t._v("Admin")]),t._v(" "),l("a",{attrs:{href:"#"}},[l("span",[t._v("2")]),t._v(" Comeent")])])])])]),t._v(" "),l("div",{staticClass:"col-md-6 col-lg-4"},[l("div",{staticClass:"single-blog-inner"},[l("div",{staticClass:"post-image"},[l("a",{attrs:{href:"#"}},[l("img",{attrs:{src:"/assets/img/blog/blog2.png",alt:""}})]),t._v(" "),l("div",{staticClass:"post-date"},[l("p",[l("span",[t._v("30")]),t._v("Sep")])])]),t._v(" "),l("div",{staticClass:"post-content"},[l("div",{staticClass:"post-details"},[l("div",{staticClass:"post-title"},[l("h3",[l("a",{attrs:{href:"#"}},[t._v("Delicious water always on tap")])])]),t._v(" "),l("p",[t._v("There are many variations of passages of available but majority have alteration in some by inject humour or random words.")]),t._v(" "),l("a",{attrs:{href:"/blog-details"}},[l("i",{staticClass:"fa fa-arrow-circle-o-right"}),t._v("More")])]),t._v(" "),l("div",{staticClass:"post-info d-flex"},[l("a",{attrs:{href:"#"}},[l("span",[t._v("By")]),t._v("Admin")]),t._v(" "),l("a",{attrs:{href:"#"}},[l("span",[t._v("2")]),t._v(" Comeent")])])])])])])])])}],!1,null,"68b9320b",null).exports,k={name:"CallToAction"},x=Object(o.a)(k,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"pt-120 pb-100 blue-bg"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-md-8"},[l("div",{staticClass:"callto-heading"},[l("span",{staticClass:"schoolbell"},[t._v("Free Delivery on All Orders")]),t._v(" "),l("h2",{staticClass:"text-white"},[t._v("We are Ready to Take Your Call! 000 8888 999")])])]),t._v(" "),l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"call-action-btn text-right"},[l("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Book Your Order Now")])])])])])])}],!1,null,"03185825",null).exports,j={components:{NavTwo:r,BannerTwo:v,QualityArea:m,TestimonialTwo:C.a,BottleDeliver:h,Blog:y,CallToAction:x,Footer:d.a},head:function(){return{title:"Money Sheep 懶羊羊理財"}}},B=Object(o.a)(j,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("NavTwo"),t._v(" "),l("BannerTwo"),t._v(" "),l("QualityArea"),t._v(" "),l("BottleDeliver"),t._v(" "),l("TestimonialTwo"),t._v(" "),l("Blog"),t._v(" "),l("CallToAction"),t._v(" "),l("Footer")],1)}),[],!1,null,null,null);e.default=B.exports}}]);