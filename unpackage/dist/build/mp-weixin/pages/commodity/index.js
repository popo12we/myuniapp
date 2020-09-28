(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commodity/index"],{"138a":function(e,t,n){"use strict";var i=n("44e8"),u=n.n(i);u.a},2422:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("a34a")),u=o(n("14cd")),r=o(n("d854"));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,i,u,r,o){try{var c=e[r](o),a=c.value}catch(s){return void n(s)}c.done?t(a):Promise.resolve(a).then(i,u)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(i,u){var r=e.apply(t,n);function o(e){c(r,i,u,o,a,"next",e)}function a(e){c(r,i,u,o,a,"throw",e)}o(void 0)}))}}var s=function(){n.e("my_common_components/Tabbar").then(function(){return resolve(n("27cb"))}.bind(null,n)).catch(n.oe)},d={components:{Tabbar:s},data:function(){return{name:"",activeColor:"#D0021B",checkedNum:0,allChecked:!1,day3After:new Date(new Date((new Date).toLocaleDateString()).getTime()+2592e5-1).valueOf(),list:[],inquiryShow:!1,inquiryForm:{currency:"",price:"",validity:"",day:"",trend:"",pricetrendValue:"",explain:"",remark:""},rules1:{currency:[{required:!0,message:"请选择币种",trigger:["change","blur"]}],price:[{trigger:["blur","change"],required:!0,validator:function(e,t,n){var i=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;i.test(t)?n():n(new Error("请输入准确的价格"))}}],validity:[{required:!0,message:"请选择有效期",trigger:["change"]}],day:[{required:!0,type:"number",message:"请填写正确的交货天数",trigger:["change"]}]},selectPriceTrendShow:!1,selectPriceTrendList:[{value:"1",label:"上升"},{value:"2",label:"平稳"},{value:"3",label:"下降"}],selectTypesCurrencyShow:!1,selectTypesCurrencyList:[{value:"1",label:"CNY"},{value:"2",label:"USD"}],dateTime:!1,params:{year:!0,month:!0,day:!0,hour:!0,minute:!0},defaultTime:(0,r.default)().format("YYYY-MM-DD HH:mm:ss"),commodityInfo:{spuId:"",spuName:"",skuId:"",spuSpec:"",unit:""},checkedList:[],isRole:1===e.getStorageSync("roleId")}},created:function(){this.isRole=1===e.getStorageSync("roleId"),this.getSupplierProduct()},onReady:function(){this.$refs.iForm1.setRules(this.rules1)},methods:{getSupplierProduct:function(){var t=this;return a(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,u.default)(t.api.v2.supplier_product,{method:"get",data:{accessToken:e.getStorageSync("accessToken"),keyword:t.name}});case 2:r=n.sent,"0"===r.data.code&&(t.list=r.data.data,t.list&&t.list.length>0&&t.list.forEach((function(e,n){e.checked=!1,e.down=!1,e.name=n,e.id=n,e.currency="CNY",e.isGray=new Date(e.expiredDate).getTime()<+new Date,e.day3After=(new Date).valueOf()<new Date(e.expiredDate).getTime()&&new Date(e.expiredDate).getTime()<t.day3After})));case 4:case"end":return n.stop()}}),n)})))()},checkboxAllChange:function(){this.allChecked?this.list.map((function(e){e.checked=!0})):this.list.map((function(e){e.checked=!1})),this.checkedNum=this.list.filter((function(e){return e.checked})).length,this.checkedList=this.list.filter((function(e){return e.checked})),this.$forceUpdate()},checkboxOneChange:function(e){this.allChecked=this.list.length===this.list.filter((function(e){return e.checked})).length,this.checkedNum=this.list.filter((function(e){return e.checked})).length,this.checkedList=this.list.filter((function(e){return e.checked})),this.$forceUpdate()},batchFilling:function(){e.navigateTo({url:"../batchQuotation/index"})},toSoonExpire:function(){e.setStorageSync("day3AfterList",this.day3AfterList),this.day3AfterList.length>0?e.navigateTo({url:"../soonExpire/index"}):this.$refs.toast.show({title:"暂无3天内即将过期的商品",type:"error",position:"top"})},checkedAll:function(){this.getSupplierProduct()},changeCurrency:function(e){return"USD"===e.currency?(e.currency="CNY",void this.$forceUpdate()):"CNY"===e.currency?(e.currency="USD",void this.$forceUpdate()):void 0},showInquiryModalCancel:function(){this.resetInquiryForm(),this.inquiryShow=!1},showInquiryModal:function(e){this.resetInquiryForm(),this.inquiryShow=!0,this.commodityInfo={spuId:e.spuId,spuName:e.spuName,skuId:e.skuId,spuSpec:e.spuSpec,unit:e.unit}},submitBidding:function(){var t=this;return a(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$refs.iForm1.validate(function(){var n=a(i.default.mark((function n(r){var o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!r){n.next=6;break}return n.next=3,(0,u.default)(t.api.v2.submitProduct,{method:"post",data:{accessToken:e.getStorageSync("accessToken"),list:[{cur:t.inquiryForm.currency,price:t.inquiryForm.price,deliveryDay:t.inquiryForm.day,expiredDate:t.inquiryForm.validity,spuId:t.commodityInfo.spuId,spuName:t.commodityInfo.spuName,skuId:t.commodityInfo.skuId,spuSpec:t.commodityInfo.spuSpec,unit:t.commodityInfo.unit}]}});case 3:o=n.sent,t.inquiryShow=!1,"0"===o.data.code?(t.$refs.toast.show({title:"提交报价成功",type:"success",position:"top"}),t.getSupplierProduct()):t.$refs.toast.show({title:"提交报价失败",type:"error",position:"top"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 1:case"end":return n.stop()}}),n)})))()},resetInquiryForm:function(){this.inquiryForm={currency:"",price:"",validity:"",day:"",trend:"",pricetrendValue:"",explain:"",remark:""},this.$refs["iForm1"].resetFields()},showTrendSelect:function(){this.selectPriceTrendShow=!0},confirmPriceTrend:function(e){this.inquiryForm.trend=e[0].label,this.inquiryForm.pricetrendValue=e[0].value},showCurrencySelect:function(){this.selectTypesCurrencyShow=!0},confirmCurrency:function(e){this.inquiryForm.currency=e[0].label},confirmTime:function(e){this.inquiryForm.validity="".concat(e.year,"-").concat(e.month,"-").concat(e.day," ").concat(e.hour,":").concat(e.minute)},showValidity:function(){this.dateTime=!0},submitSomeBidding:function(){var t=this;return a(i.default.mark((function n(){var r,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=[],t.checkedList.forEach((function(e){var n={cur:e.currency,price:e.price,deliveryDay:t.inquiryForm.day,expiredDate:t.inquiryForm.validity,spuId:e.spuId,spuName:e.spuName,skuId:e.skuId,spuSpec:e.spuSpec,unit:e.unit};r.push(n)})),n.next=4,(0,u.default)(t.api.v2.submitProduct,{method:"post",data:{accessToken:e.getStorageSync("accessToken"),list:r}});case 4:o=n.sent,"0"===o.data.code?(t.$refs.toast.show({title:"提交报价成功",type:"success",position:"top"}),t.getSupplierProduct()):t.$refs.toast.show({title:"提交报价失败",type:"error",position:"top"});case 6:case"end":return n.stop()}}),n)})))()}},computed:{day3AfterList:function(){var e=this;if(this.list&&this.list.length>0)return this.list.filter((function(t){return(new Date).valueOf()<new Date(t.expiredDate).getTime()&&new Date(t.expiredDate).getTime()<e.day3After}))}}};t.default=d}).call(this,n("543d")["default"])},"44e8":function(e,t,n){},"47f0":function(e,t,n){"use strict";n.r(t);var i=n("7c2a"),u=n("4853");for(var r in u)"default"!==r&&function(e){n.d(t,e,(function(){return u[e]}))}(r);n("138a");var o,c=n("f0c5"),a=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,"286be344",null,!1,i["a"],o);t["default"]=a.exports},4853:function(e,t,n){"use strict";n.r(t);var i=n("2422"),u=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=u.a},"61fc":function(e,t,n){"use strict";(function(e){n("82ff");i(n("66fd"));var t=i(n("47f0"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"7c2a":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uCheckbox:function(){return n.e("node-modules/uview-ui/components/u-checkbox/u-checkbox").then(n.bind(null,"9305"))},uField:function(){return n.e("node-modules/uview-ui/components/u-field/u-field").then(n.bind(null,"f05b"))},uButton:function(){return n.e("node-modules/uview-ui/components/u-button/u-button").then(n.bind(null,"78c9"))},uCheckboxGroup:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-checkbox-group/u-checkbox-group")]).then(n.bind(null,"d5df"))},uTag:function(){return n.e("node-modules/uview-ui/components/u-tag/u-tag").then(n.bind(null,"2e64"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-input/u-input")]).then(n.bind(null,"65df"))},uModal:function(){return n.e("node-modules/uview-ui/components/u-modal/u-modal").then(n.bind(null,"d223"))},uForm:function(){return n.e("node-modules/uview-ui/components/u-form/u-form").then(n.bind(null,"4956"))},uFormItem:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-form-item/u-form-item")]).then(n.bind(null,"f0be"))},uRow:function(){return n.e("node-modules/uview-ui/components/u-row/u-row").then(n.bind(null,"fe9a"))},uCol:function(){return n.e("node-modules/uview-ui/components/u-col/u-col").then(n.bind(null,"43a8"))},uSelect:function(){return n.e("node-modules/uview-ui/components/u-select/u-select").then(n.bind(null,"e40e"))},uPicker:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-picker/u-picker")]).then(n.bind(null,"3ab2"))},uToast:function(){return n.e("node-modules/uview-ui/components/u-toast/u-toast").then(n.bind(null,"fa6f"))}},u=function(){var e=this,t=e.$createElement;e._self._c},r=[]}},[["61fc","common/runtime","common/vendor"]]]);