(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/prepareQuoted/index"],{"2ebd":function(e,n,t){},"4b4d":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("4795"));t("f3ec");var i=u(t("9f7c")),o=u(t("7da1"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return l(e)||d(e)||a(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,n){if(e){if("string"===typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}function d(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e){if(Array.isArray(e))return f(e)}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n,t,r,i,o,u){try{var c=e[o](u),s=c.value}catch(a){return void t(a)}c.done?n(s):Promise.resolve(s).then(r,i)}function m(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function u(e){h(o,r,i,u,c,"next",e)}function c(e){h(o,r,i,u,c,"throw",e)}u(void 0)}))}}var p=function(){t.e("my_common_components/Tabbar").then(function(){return resolve(t("b7b6"))}.bind(null,t)).catch(t.oe)},y={components:{Tabbar:p},data:function(){return{checkedList:[],checkedNum:0,defaultTime:(0,o.default)().format("YYYY-MM-DD HH:mm:ss"),keywords:"",activeColor:"#D0021B",selectTypesCurrencyShow:!1,selectTypesCurrencyList:[{value:"1",label:"RMB"},{value:"2",label:"USD"}],selectPriceTrendShow:!1,selectPriceTrendList:[{value:"1",label:"上升"},{value:"2",label:"平稳"},{value:"3",label:"下降"}],allChecked:!1,indicatorDots:!0,inquiryShow:!1,inquiryForm:{currency:"",price:"",validity:"",day:"",trend:"",pricetrendValue:"",explain:"",remark:""},rules1:{currency:[{required:!0,message:"请选择币种",trigger:["change","blur"]}],price:[{trigger:["blur","change"],required:!0,validator:function(e,n,t){var r=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;r.test(n)?t():t(new Error("请输入准确的价格"))}}],validity:[{required:!0,message:"请选择有效期",trigger:["change"]}],day:[{type:"number",message:"请选择有效期",trigger:["change"]}]},rules2:{price:[{trigger:["blur","change"],required:!0,validator:function(e,n,t){var r=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;r.test(n)?t():t(new Error("请输入准确的价格"))}}],validity:[{required:!0,message:"请选择有效期",trigger:["change"]}]},binddingShow:!1,giveupbiddingShow:!1,giveupModalProduct:"",collapseItemIsChecked:[],inquiryList:[],biddingList:[],Inquiry:[],realOrderList:[],offerId:"",dateTime:!1,params:{year:!0,month:!0,day:!0,hour:!0,minute:!0}}},created:function(){this.getInquiryList()},onReady:function(){this.$refs.iForm1.setRules(this.rules1),this.$refs.iForm2.setRules(this.rules2)},methods:{getInquiryList:function(){var n=this;return m(r.default.mark((function t(){var o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,i.default)(n.api.v2.inquiryList,{method:"get",data:{accessToken:e.getStorageSync("accessToken"),keywords:n.keywords}});case 2:o=t.sent,n.biddingList=[],n.inquiryList=[],n.Inquiry=[],n.realOrderList=[],"0"===o.data.code&&(n.inquiryList=o.data.data.list,n.inquiryList.length>0&&n.inquiryList.forEach((function(e,t){e.checked=!1,e.down=!1,e.name=t,e.id=t,e.currency="RMB","是"===e.biddingMode?n.biddingList.push(e):("询盘询价"===e.inquiryType&&n.Inquiry.push(e),"实单询价"===e.inquiryType&&n.realOrderList.push(e))})));case 8:case"end":return t.stop()}}),t)})))()},checkboxAllChange:function(){this.resetInquiryForm(),this.allChecked?this.Inquiry.map((function(e){e.checked=!0})):this.Inquiry.map((function(e){e.checked=!1})),this.$forceUpdate(),this.checkedNum=this.Inquiry.filter((function(e){return e.checked})).length,this.checkedList=this.Inquiry.filter((function(e){return e.checked}))},checkboxOneChange:function(e){this.resetInquiryForm(),this.checkedList=this.Inquiry.filter((function(e){return e.checked})),this.checkedNum=this.Inquiry.filter((function(e){return e.checked})).length,this.allChecked=this.Inquiry.length===this.Inquiry.filter((function(e){return e.checked})).length,this.$forceUpdate()},showTrendSelect:function(){this.selectPriceTrendShow=!0},showCurrencySelect:function(){this.selectTypesCurrencyShow=!0},showInquiryModal:function(e){this.resetInquiryForm(),e&&(this.offerId=e.join(",")),this.inquiryShow=!0},toBindding:function(e){console.log(e),this.resetInquiryForm(),e&&(this.offerId=e.join(",")),this.binddingShow=!0,this.inquiryForm.currency="USD"},giveupbidding:function(e){e.offerId&&(this.offerId=e.offerId.join(",")),this.giveupModalProduct=e.spuName,this.giveupbiddingShow=!0},showInquiryModalCancel:function(){this.resetInquiryForm(),this.inquiryShow=!1},changeCollapseItem:function(e){!0===e.show?0===this.collapseItemIsChecked.length?this.collapseItemIsChecked.push(e.index):this.collapseItemIsChecked.some((function(n){return n!==e.index}))&&this.collapseItemIsChecked.push(e.index):this.collapseItemIsChecked=this.collapseItemIsChecked.filter((function(n){return n!==e.index})),this.inquiryList[e.index].down=e.show},confirmCurrency:function(e){this.inquiryForm.currency=e[0].label},confirmPriceTrend:function(e){this.inquiryForm.trend=e[0].label,this.inquiryForm.pricetrendValue=e[0].value},cancelBidding:function(){this.resetInquiryForm(),this.binddingShow=!1},submitBidding:function(){var n=this;return m(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.$refs.iForm1.validate(function(){var t=m(r.default.mark((function t(o){var u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!o){t.next=7;break}return t.next=3,(0,i.default)(n.api.v2.submitQuotation,{method:"post",data:{accessToken:e.getStorageSync("accessToken"),list:[{offerId:n.offerId,cur:n.inquiryForm.currency,price:n.inquiryForm.price,deliveryDay:n.inquiryForm.day,expiredDate:n.inquiryForm.validity,pricetrend:n.inquiryForm.pricetrendValue,priceInfo:n.inquiryForm.explain,remarks:n.inquiryForm.remark}]}});case 3:u=t.sent,n.inquiryShow=!1,n.binddingShow=!1,"0"===u.data.code?n.$refs.toast.show({title:"提交报价成功",type:"success",position:"top"}):n.$refs.toast.show({title:"提交报价失败",type:"error",position:"top"});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()},submitBidding2:function(){var n=this;return m(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.$refs.iForm2.validate(function(){var t=m(r.default.mark((function t(o){var u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!o){t.next=7;break}return t.next=3,(0,i.default)(n.api.v2.submitQuotation,{method:"post",data:{accessToken:e.getStorageSync("accessToken"),list:[{offerId:n.offerId,cur:n.inquiryForm.currency,price:n.inquiryForm.price,deliveryDay:n.inquiryForm.day,expiredDate:n.inquiryForm.validity,pricetrend:n.inquiryForm.pricetrendValue,priceInfo:n.inquiryForm.explain,remarks:n.inquiryForm.remark}]}});case 3:u=t.sent,n.inquiryShow=!1,n.binddingShow=!1,"0"===u.data.code?n.$refs.toast.show({title:"提交报价成功",type:"success",position:"top"}):n.$refs.toast.show({title:"提交报价失败",type:"error",position:"top"});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()},showValidity:function(){this.dateTime=!0},confirmTime:function(e){this.inquiryForm.validity="".concat(e.year,"-").concat(e.month,"-").concat(e.day," ").concat(e.hour,":").concat(e.minute)},sureGiveupBidding:function(){var n=this;return m(r.default.mark((function t(){var o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,i.default)(n.api.v2.giveupOffer,{method:"post",data:{accessToken:e.getStorageSync("accessToken"),offerId:n.offerId}});case 2:o=t.sent,"0"===o.data.code?n.$refs.toast.show({title:"放弃报价成功",type:"success",position:"top"}):n.$refs.toast.show({title:"放弃报价失败",type:"error",position:"top"});case 4:case"end":return t.stop()}}),t)})))()},navigateTobidding:function(){e.navigateTo({url:"../bidding/index"})},checkedAll:function(){this.getInquiryList()},resetInquiryForm:function(){this.inquiryForm={currency:"",price:"",validity:"",day:"",trend:"",pricetrendValue:"",explain:"",remark:""},this.$refs["iForm1"].resetFields()},changeCurrency:function(e){return"USD"===e.currency?(e.currency="RMB",void this.$forceUpdate()):"RMB"===e.currency?(e.currency="USD",void this.$forceUpdate()):void 0},submitSomeBidding:function(){var n=this;return m(r.default.mark((function t(){var o,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(n.checkedList),o=[],n.checkedList.forEach((function(e){var t={offerId:e.offerId[0],cur:e.currency,price:e.price,deliveryDay:n.inquiryForm.day,expiredDate:n.inquiryForm.validity,pricetrend:n.inquiryForm.pricetrendValue,priceInfo:n.inquiryForm.explain};o.push(t)})),t.next=5,(0,i.default)(n.api.v2.submitQuotation,{method:"post",data:{accessToken:e.getStorageSync("accessToken"),list:o}});case 5:u=t.sent,"0"===u.data.code?n.$refs.toast.show({title:"提交报价成功",type:"success",position:"top"}):n.$refs.toast.show({title:"提交报价失败",type:"error",position:"top"});case 7:case"end":return t.stop()}}),t)})))()}},computed:{isRole:function(){return 1===e.getStorageSync("roleId")},swiperList:function(){return[].concat(c(this.biddingList),c(this.realOrderList))}}};n.default=y}).call(this,t("543d")["default"])},"6d24":function(e,n,t){"use strict";t.r(n);var r=t("e550"),i=t("a4e3");for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t("f63c");var u,c=t("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"3ffa702c",null,!1,r["a"],u);n["default"]=s.exports},"8e39":function(e,n,t){"use strict";(function(e){t("a70e");r(t("66fd"));var n=r(t("6d24"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},a4e3:function(e,n,t){"use strict";t.r(n);var r=t("4b4d"),i=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=i.a},e550:function(e,n,t){"use strict";var r={uCheckbox:function(){return t.e("node-modules/uview-ui/components/u-checkbox/u-checkbox").then(t.bind(null,"8fb5"))},uField:function(){return t.e("node-modules/uview-ui/components/u-field/u-field").then(t.bind(null,"b871"))},uButton:function(){return t.e("node-modules/uview-ui/components/u-button/u-button").then(t.bind(null,"50a4"))},uCheckboxGroup:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-checkbox-group/u-checkbox-group")]).then(t.bind(null,"d313"))},uCollapse:function(){return t.e("node-modules/uview-ui/components/u-collapse/u-collapse").then(t.bind(null,"2f15"))},uRow:function(){return t.e("node-modules/uview-ui/components/u-row/u-row").then(t.bind(null,"3878"))},uCol:function(){return t.e("node-modules/uview-ui/components/u-col/u-col").then(t.bind(null,"26b8"))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-input/u-input")]).then(t.bind(null,"8497"))},uCollapseItem:function(){return t.e("node-modules/uview-ui/components/u-collapse-item/u-collapse-item").then(t.bind(null,"768b"))},uModal:function(){return t.e("node-modules/uview-ui/components/u-modal/u-modal").then(t.bind(null,"06da"))},uForm:function(){return t.e("node-modules/uview-ui/components/u-form/u-form").then(t.bind(null,"cd3f"))},uFormItem:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-form-item/u-form-item")]).then(t.bind(null,"1dea"))},uToast:function(){return t.e("node-modules/uview-ui/components/u-toast/u-toast").then(t.bind(null,"da1a"))},uSelect:function(){return t.e("node-modules/uview-ui/components/u-select/u-select").then(t.bind(null,"8733"))},uPicker:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-picker/u-picker")]).then(t.bind(null,"3215"))}},i=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return r}))},f63c:function(e,n,t){"use strict";var r=t("2ebd"),i=t.n(r);i.a}},[["8e39","common/runtime","common/vendor"]]]);