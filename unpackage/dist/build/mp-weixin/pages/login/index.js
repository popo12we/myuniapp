(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{"2b3e":function(e,n,t){"use strict";var o={uLoading:function(){return t.e("node-modules/uview-ui/components/u-loading/u-loading").then(t.bind(null,"3732"))},uToast:function(){return t.e("node-modules/uview-ui/components/u-toast/u-toast").then(t.bind(null,"da1a"))},uForm:function(){return t.e("node-modules/uview-ui/components/u-form/u-form").then(t.bind(null,"cd3f"))},uFormItem:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-form-item/u-form-item")]).then(t.bind(null,"1dea"))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-input/u-input")]).then(t.bind(null,"8497"))},uButton:function(){return t.e("node-modules/uview-ui/components/u-button/u-button").then(t.bind(null,"50a4"))}},r=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return o}))},"4af1":function(e,n,t){"use strict";var o=t("5fd1"),r=t.n(o);r.a},"5fd1":function(e,n,t){},"609c":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(t("4795")),r=u(t("9f7c"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,o,r,u,a){try{var i=e[u](a),s=i.value}catch(c){return void t(c)}i.done?n(s):Promise.resolve(s).then(o,r)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(o,r){var u=e.apply(n,t);function i(e){a(u,o,r,i,s,"next",e)}function s(e){a(u,o,r,i,s,"throw",e)}i(void 0)}))}}var s=t("8921"),c={data:function(){var e=this;return{form:{username:"",password:""},rules:{username:[{required:!0,message:"请输入账号",trigger:["change","blur"]},{validator:function(n,t,o){return e.$u.test.mobile(t)},message:"手机号码不正确",trigger:["change","blur"]}],password:[{required:!0,message:"请输入密码",trigger:["change","blur"]}]},isLoading:!1}},created:function(){this.isUpdated()},onReady:function(){this.$refs.uForm.setRules(this.rules)},methods:{isUpdated:function(){var e=wx.getUpdateManager();e.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(n){n.confirm&&e.applyUpdate()}})})),e.onUpdateFailed((function(){this.$refs.toast.show({title:"下载失败",type:"error",position:"top"})}))},login:function(){var n=this;return i(o.default.mark((function t(){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.$refs.uForm.validate(function(){var t=i(o.default.mark((function t(u){var a,c,d,f,l;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!u){t.next=13;break}return n.isLoading=!0,a="-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJUEyICiHyhpZPZM/qCJkHMXvrsbqPbhxGNp+rCBI4TTgpqlvyzJ5i0n3DIsF2rRT8kN0dETkCWlDwLnOqQnFN8CAwEAAQ==-----END PUBLIC KEY-----","-----BEGIN PRIVATE KEY-----MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAlQTIgKIfKGlk9kz+oImQcxe+uxuo9uHEY2n6sIEjhNOCmqW/LMnmLSfcMiwXatFPyQ3R0ROQJaUPAuc6pCcU3wIDAQABAkABRfkwoDID9mKWeDH0zTgew6UtlB7tfSBgeRdbSr8y81hXfgJcyI/rbQDgDs0T6RTJluZsWANFRArJUqfToD8BAiEA53Yjk02hN52QC7zZvbuETo/JsPVVdTcO3Z7PJGqQx/kCIQCk0SXlG/5NpvFG1I4sjzpmZx+NFvjLuAsymHalo5xplwIhALR744u2SdMTMsJkVSlkcevMpUouU5/d+eKINh/AVPsJAiBKftY4Bj0dcBWiRDS2404sNvRF21o9CkTVa6BFIfxypQIgfwJt2qdBDpJX76DsW1TIFKNYOENMFinaH3qPLGkUZQ4=-----END PRIVATE KEY-----",c=new s.RSAKey,c=s.KEYUTIL.getKey(a),d=c.encrypt(n.form.password),d=s.hex2b64(d),t.next=10,(0,r.default)(n.api.v2.login,{method:"post",data:{account:n.form.username,password:d}});case 10:f=t.sent,f&&(n.isLoading=!1),"0"===f.data.code?(e.setStorageSync("roleId",f.data.data.supplierNature),e.setStorageSync("accessToken",f.data.data.accessToken),l=f.data.data.accessToken,wx.login({success:function(){var t=i(o.default.mark((function t(u){var a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!u.code){t.next=7;break}return t.next=3,(0,r.default)(n.api.v2.codeSession,{method:"get",data:{code:u.code,accessToken:l}});case 3:a=t.sent,"0"===a.data.code&&e.switchTab({url:"../prepareQuoted/index"}),t.next=8;break;case 7:n.$refs.errorLoginToast.show({title:res1.data.msg,type:"error",position:"top"});case 8:case"end":return t.stop()}}),t)})));function u(e){return t.apply(this,arguments)}return u}()})):n.$refs.errorLoginToast.show({title:f.data.msg,type:"error",position:"top"});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()}}};n.default=c}).call(this,t("543d")["default"])},"7d99":function(e,n,t){"use strict";(function(e){t("a70e");o(t("66fd"));var n=o(t("dc6f"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},a8d9:function(e,n,t){"use strict";t.r(n);var o=t("609c"),r=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=r.a},dc6f:function(e,n,t){"use strict";t.r(n);var o=t("2b3e"),r=t("a8d9");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("4af1");var a,i=t("f0c5"),s=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,"75e629d6",null,!1,o["a"],a);n["default"]=s.exports}},[["7d99","common/runtime","common/vendor"]]]);