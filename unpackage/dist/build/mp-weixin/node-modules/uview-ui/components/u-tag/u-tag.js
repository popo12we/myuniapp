(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/uview-ui/components/u-tag/u-tag"],{"1f04":function(t,e,o){},"2e64":function(t,e,o){"use strict";o.r(e);var n=o("8778"),r=o("7e56");for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);o("79d5");var l,u=o("f0c5"),s=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"34d2db66",null,!1,n["a"],l);e["default"]=s.exports},"79d5":function(t,e,o){"use strict";var n=o("1f04"),r=o.n(n);r.a},"7e56":function(t,e,o){"use strict";o.r(e);var n=o("e658"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},8778:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}));var n={uIcon:function(){return o.e("node-modules/uview-ui/components/u-icon/u-icon").then(o.bind(null,"787e"))}},r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.show?t.__get_style([t.customStyle]):null),n=t.show&&t.closeable?t.__get_style([t.iconStyle]):null;t.$mp.data=Object.assign({},{$root:{s0:o,s1:n}})},i=[]},e658:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-tag",props:{type:{type:String,default:"primary"},disabled:{type:[Boolean,String],default:!1},size:{type:String,default:"default"},shape:{type:String,default:"square"},text:{type:[String,Number],default:""},bgColor:{type:String,default:""},color:{type:String,default:""},borderColor:{type:String,default:""},closeColor:{type:String,default:""},index:{type:[Number,String],default:""},mode:{type:String,default:"light"},closeable:{type:Boolean,default:!1},show:{type:Boolean,default:!0}},data:function(){return{}},computed:{customStyle:function(){var t={};return this.color&&(t.color=this.color+"!important"),this.bgColor&&(t.backgroundColor=this.bgColor+"!important"),"plain"==this.mode&&this.color&&!this.borderColor?t.borderColor=this.color:t.borderColor=this.borderColor,t},iconStyle:function(){if(this.closeable){var t={};return"mini"==this.size?t.fontSize="20rpx":t.fontSize="22rpx","plain"==this.mode||"light"==this.mode?t.color=this.type:"dark"==this.mode&&(t.color="#ffffff"),this.closeColor&&(t.color=this.closeColor),t}},closeIconColor:function(){return this.closeColor?this.closeColor:this.color?this.color:"dark"==this.mode?"#ffffff":this.type}},methods:{clickTag:function(){this.disabled||this.$emit("click",this.index)},close:function(){this.$emit("close",this.index)}}};e.default=n}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/uview-ui/components/u-tag/u-tag-create-component',
    {
        'node-modules/uview-ui/components/u-tag/u-tag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2e64"))
        })
    },
    [['node-modules/uview-ui/components/u-tag/u-tag-create-component']]
]);
