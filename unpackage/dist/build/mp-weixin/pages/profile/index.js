(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/index"],{4796:function(n,e,t){"use strict";var u={uImage:function(){return t.e("node-modules/uview-ui/components/u-image/u-image").then(t.bind(null,"26d9"))}},a=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return u}))},6672:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(t("4795")),a=o(t("9f7c"));function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,u,a,o,r){try{var c=n[o](r),i=c.value}catch(f){return void t(f)}c.done?e(i):Promise.resolve(i).then(u,a)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(u,a){var o=n.apply(e,t);function c(n){r(o,u,a,c,i,"next",n)}function i(n){r(o,u,a,c,i,"throw",n)}c(void 0)}))}}var i=function(){t.e("my_common_components/Tabbar").then(function(){return resolve(t("b7b6"))}.bind(null,t)).catch(t.oe)},f={components:{Tabbar:i},created:function(){this.getSupplierInfo()},data:function(){return{userName:"",offerCount:0,giveupCount:0}},methods:{getSupplierInfo:function(){var e=this;return c(u.default.mark((function t(){var o;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.default)(e.api.v2.supplierInfo,{method:"get",data:{accessToken:n.getStorageSync("accessToken")}});case 2:o=t.sent,console.log(o),"0"===o.data.code&&(e.userName=o.data.data.userName,e.offerCount=o.data.data.offerCount,e.giveupCount=o.data.data.giveupCount);case 5:case"end":return t.stop()}}),t)})))()},toEditPassword:function(){n.navigateTo({url:"../editPassword/index"})}}};e.default=f}).call(this,t("543d")["default"])},"6bae":function(n,e,t){"use strict";(function(n){t("a70e");u(t("66fd"));var e=u(t("af27"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},a50c:function(n,e,t){"use strict";var u=t("b209"),a=t.n(u);a.a},af27:function(n,e,t){"use strict";t.r(e);var u=t("4796"),a=t("f83d");for(var o in a)"default"!==o&&function(n){t.d(e,n,(function(){return a[n]}))}(o);t("a50c");var r,c=t("f0c5"),i=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,"403a6192",null,!1,u["a"],r);e["default"]=i.exports},b209:function(n,e,t){},f83d:function(n,e,t){"use strict";t.r(e);var u=t("6672"),a=t.n(u);for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);e["default"]=a.a}},[["6bae","common/runtime","common/vendor"]]]);