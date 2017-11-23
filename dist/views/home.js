// { "framework": "Vue"} 

!function(t){function e(i){if(o[i])return o[i].exports;var r=o[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=39)}([,,function(t,e,o){"use strict";t.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:"88px"},title:{default:""},titleColor:{default:"black"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(t){this.$emit("naviBarRightItemClick")},onclickleftitem:function(t){this.$emit("naviBarLeftItemClick")}}}},,,function(t,e){t.exports={container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36,fontWeight:"bold"},"left-image":{position:"absolute",bottom:20,left:28,width:50,height:50},"right-image":{position:"absolute",bottom:20,right:28,width:50,height:50}}},,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["container"],style:{height:t.height,backgroundColor:t.backgroundColor},attrs:{dataRole:t.dataRole}},[t.rightItemSrc?t._e():o("text",{staticClass:["right-text"],style:{color:t.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[t._v(t._s(t.rightItemTitle)+"\n    ")]),t.rightItemSrc?o("image",{staticClass:["right-image"],attrs:{naviItemPosition:"right",src:t.rightItemSrc},on:{click:t.onclickrightitem}}):t._e(),t.leftItemSrc?t._e():o("text",{staticClass:["left-text"],style:{color:t.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:t.onclickleftitem}},[t._v(t._s(t.leftItemTitle)+"\n    ")]),t.leftItemSrc?o("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:t.leftItemSrc},on:{click:t.onclickleftitem}}):t._e(),o("text",{staticClass:["center-text"],style:{color:t.titleColor},attrs:{naviItemPosition:"center"}},[t._v(t._s(t.title)+"\n    ")])])},staticRenderFns:[]},t.exports.render._withStripped=!0},,function(t,e,o){"use strict";var i=o(20),r=function(t){return t&&t.__esModule?t:{default:t}}(i);t.exports={components:{XNavbar:r.default},props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:"88px"},title:{default:""},titleColor:{default:"black"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{naviBarRightItemClick:function(t){this.$emit("naviBarRightItemClick",t)},naviBarLeftItemClick:function(t){this.$emit("naviBarLeftItemClick",t)}}}},,function(t,e){t.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["wrapper"]},[o("x-navbar",{attrs:{dataRole:t.dataRole,height:t.height,backgroundColor:t.backgroundColor,title:t.title,titleColor:t.titleColor,leftItemSrc:t.leftItemSrc,leftItemTitle:t.leftItemTitle,leftItemColor:t.leftItemColor,rightItemSrc:t.rightItemSrc,rightItemTitle:t.rightItemTitle,rightItemColor:t.rightItemColor},on:{naviBarRightItemClick:t.naviBarRightItemClick,naviBarLeftItemClick:t.naviBarLeftItemClick}}),o("div",{staticClass:["wrapper"],style:{marginTop:t.height}},[t._t("default")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},,,,,function(t,e,o){var i,r,n=[];n.push(o(5)),i=o(2);var a=o(8);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/zhangcheng/zhangcheng/my-projects/test-projects/hello-weex/src/components/x-navbar/index.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-e7703dae",r.style=r.style||{},n.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,n),t.exports=i},,,,,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(37),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={components:{XNavpage:r.default},data:function(){return{navBarHeight:88,title:"Navigator",dir:"examples",baseURL:""}},methods:{update:function(t){this.target="Weex",console.log("target:",this.target)},goNextPage:function(){this.push("/me")}}}},,function(t,e){t.exports={wrapper:{alignItems:"center",marginTop:120},title:{paddingTop:40,paddingBottom:40,fontSize:48},logo:{width:360,height:156},desc:{paddingTop:20,color:"#888888",fontSize:24}}},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["wrapper"],on:{click:t.update}},[o("x-navpage",{attrs:{dataRole:"none",height:t.navBarHeight,backgroundColor:"#ff5898",title:t.title,titleColor:"white",leftItemTitle:"More",leftItemColor:"white",rightItemSrc:"http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"}}),o("text",{staticClass:["desc"],on:{click:function(e){t.goNextPage()}}},[t._v("我是首页")])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},,,,,,,,function(t,e,o){var i,r,n=[];n.push(o(12)),i=o(10);var a=o(15);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/zhangcheng/zhangcheng/my-projects/test-projects/hello-weex/src/components/x-navpage/index.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-2c3abee2",r.style=r.style||{},n.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,n),t.exports=i},,function(t,e,o){var i,r,n=[];n.push(o(27)),i=o(25);var a=o(29);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=i=i.default),"function"==typeof r&&(r=r.options),r.__file="/Users/zhangcheng/zhangcheng/my-projects/test-projects/hello-weex/src/views/home.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-761266c8",r.style=r.style||{},n.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,n),t.exports=i,t.exports.el="true",new Vue(t.exports)}]);