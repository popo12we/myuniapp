(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/index"],{"080b":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t("a34a")),u=r(t("14cd"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,o,u,r,a){try{var i=e[r](a),c=i.value}catch(f){return void t(f)}i.done?n(c):Promise.resolve(c).then(o,u)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(o,u){var r=e.apply(n,t);function i(e){a(r,o,u,i,c,"next",e)}function c(e){a(r,o,u,i,c,"throw",e)}i(void 0)}))}}var c=function(){t.e("my_common_components/Tabbar").then(function(){return resolve(t("27cb"))}.bind(null,t)).catch(t.oe)},f={components:{Tabbar:c},onShow:function(){this.isRole=1===e.getStorageSync("roleId"),this.getSupplierInfo()},data:function(){return{userName:"",offerCount:0,giveupCount:0,modelShow:!1,isRole:1===e.getStorageSync("roleId")}},methods:{getSupplierInfo:function(){var n=this;return i(o.default.mark((function t(){var r;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,u.default)(n.api.v2.supplierInfo,{method:"get",data:{accessToken:e.getStorageSync("accessToken")}});case 2:r=t.sent,"0"===r.data.code&&(n.userName=r.data.data.userName,n.offerCount=r.data.data.offerCount,n.giveupCount=r.data.data.giveupCount);case 4:case"end":return t.stop()}}),t)})))()},toEditPassword:function(){e.navigateTo({url:"../editPassword/index"})},loginOut:function(){this.modelShow=!0},confirmLoginOut:function(){e.removeStorageSync("roleId"),e.removeStorageSync("accessToken"),e.navigateTo({url:"../login/index"})}}};n.default=f}).call(this,t("543d")["default"])},4904:function(e,n,t){"use strict";t.r(n);var o=t("be9e"),u=t("59f3");for(var r in u)"default"!==r&&function(e){t.d(n,e,(function(){return u[e]}))}(r);t("e8d6");var a,i=t("f0c5"),c=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,"82706102",null,!1,o["a"],a);n["default"]=c.exports},"59f3":function(e,n,t){"use strict";t.r(n);var o=t("080b"),u=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=u.a},"9e12":function(e,n,t){"use strict";(function(e){t("82ff");o(t("66fd"));var n=o(t("4904"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},b1bb:function(e,n,t){},be9e:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return o}));var o={uImage:function(){return t.e("node-modules/uview-ui/components/u-image/u-image").then(t.bind(null,"5802"))},uModal:function(){return t.e("node-modules/uview-ui/components/u-modal/u-modal").then(t.bind(null,"d223"))}},u=function(){var e=this,n=e.$createElement;e._self._c},r=[]},e8d6:function(e,n,t){"use strict";var o=t("b1bb"),u=t.n(o);u.a}},[["9e12","common/runtime","common/vendor"]]]);