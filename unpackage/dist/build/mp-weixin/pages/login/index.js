(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{"040e":function(e,t,n){},"53de":function(e,t,n){"use strict";var o={uLoading:function(){return n.e("node-modules/uview-ui/components/u-loading/u-loading").then(n.bind(null,"3732"))},uToast:function(){return n.e("node-modules/uview-ui/components/u-toast/u-toast").then(n.bind(null,"da1a"))},uField:function(){return n.e("node-modules/uview-ui/components/u-field/u-field").then(n.bind(null,"b871"))},uButton:function(){return n.e("node-modules/uview-ui/components/u-button/u-button").then(n.bind(null,"50a4"))}},a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o}))},"609c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n("4795")),a=u(n("9f7c"));function u(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,o,a,u,r){try{var i=e[u](r),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(o,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var u=e.apply(t,n);function i(e){r(u,o,a,i,s,"next",e)}function s(e){r(u,o,a,i,s,"throw",e)}i(void 0)}))}}var s=n("8921"),c={data:function(){return{username:"",password:"",errorTextValueMessage:"",errorPasswordValueMessage:"",isLoading:!1}},created:function(){this.isUpdated()},methods:{isUpdated:function(){var e=wx.getUpdateManager();e.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(t){t.confirm&&e.applyUpdate()}})})),e.onUpdateFailed((function(){this.$refs.toast.show({title:"下载失败",type:"error",position:"top"})}))},login:function(){var t=this;return i(o.default.mark((function n(){var u,r,c,d,f;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.isLoading=!0,u="-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJUEyICiHyhpZPZM/qCJkHMXvrsbqPbhxGNp+rCBI4TTgpqlvyzJ5i0n3DIsF2rRT8kN0dETkCWlDwLnOqQnFN8CAwEAAQ==-----END PUBLIC KEY-----","-----BEGIN PRIVATE KEY-----MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAlQTIgKIfKGlk9kz+oImQcxe+uxuo9uHEY2n6sIEjhNOCmqW/LMnmLSfcMiwXatFPyQ3R0ROQJaUPAuc6pCcU3wIDAQABAkABRfkwoDID9mKWeDH0zTgew6UtlB7tfSBgeRdbSr8y81hXfgJcyI/rbQDgDs0T6RTJluZsWANFRArJUqfToD8BAiEA53Yjk02hN52QC7zZvbuETo/JsPVVdTcO3Z7PJGqQx/kCIQCk0SXlG/5NpvFG1I4sjzpmZx+NFvjLuAsymHalo5xplwIhALR744u2SdMTMsJkVSlkcevMpUouU5/d+eKINh/AVPsJAiBKftY4Bj0dcBWiRDS2404sNvRF21o9CkTVa6BFIfxypQIgfwJt2qdBDpJX76DsW1TIFKNYOENMFinaH3qPLGkUZQ4=-----END PRIVATE KEY-----",r=new s.RSAKey,r=s.KEYUTIL.getKey(u),c=r.encrypt(t.password),c=s.hex2b64(c),n.next=9,(0,a.default)(t.api.v2.login,{method:"post",data:{account:t.username,password:c}});case 9:d=n.sent,d&&(t.isLoading=!1),"0"===d.data.code?(e.setStorageSync("roleId",d.data.data.supplierNature),e.setStorageSync("accessToken",d.data.data.accessToken),f=d.data.data.accessToken,wx.login({success:function(){var n=i(o.default.mark((function n(u){var r;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!u.code){n.next=7;break}return n.next=3,(0,a.default)(t.api.v2.codeSession,{method:"get",data:{code:u.code,accessToken:f}});case 3:r=n.sent,"0"===r.data.code&&e.switchTab({url:"../prepareQuoted/index"}),n.next=8;break;case 7:t.$refs.errorLoginToast.show({title:res1.data.msg,type:"error",position:"top"});case 8:case"end":return n.stop()}}),n)})));function u(e){return n.apply(this,arguments)}return u}()})):t.$refs.errorLoginToast.show({title:d.data.msg,type:"error",position:"top"});case 12:case"end":return n.stop()}}),n)})))()}}};t.default=c}).call(this,n("543d")["default"])},"7d99":function(e,t,n){"use strict";(function(e){n("a70e");o(n("66fd"));var t=o(n("dc6f"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},a8d9:function(e,t,n){"use strict";n.r(t);var o=n("609c"),a=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=a.a},c06c:function(e,t,n){"use strict";var o=n("040e"),a=n.n(o);a.a},dc6f:function(e,t,n){"use strict";n.r(t);var o=n("53de"),a=n("a8d9");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("c06c");var r,i=n("f0c5"),s=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"236adc83",null,!1,o["a"],r);t["default"]=s.exports}},[["7d99","common/runtime","common/vendor"]]]);