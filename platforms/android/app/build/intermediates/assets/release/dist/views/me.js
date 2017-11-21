// { "framework": "Vue"} 

!function(t){function e(o){if(r[o])return r[o].exports;var i=r[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=19)}({0:function(t,e,r){"use strict";(function(t){function r(){return"weex"===t.env.COMPILE_ENV}Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{push:function(t){if(r()){var e=weex.config.bundleUrl.split("/").slice(0,-1).join("/")+"/"+t+".js";weex.requireModule("navigator").push({url:e,animated:"true"})}else this.$router.push(t)},pop:function(){r()?weex.requireModule("navigator").pop({animated:"true"}):window.history.back()}}}}).call(e,r(1))},1:function(t,e){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(u===setTimeout)return setTimeout(t,0);if((u===r||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function n(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function s(){h&&p&&(h=!1,p.length?g=p.concat(g):m=-1,g.length&&a())}function a(){if(!h){var t=i(s);h=!0;for(var e=g.length;e;){for(p=g,g=[];++m<e;)p&&p[m].run();m=-1,e=g.length}p=null,h=!1,n(t)}}function l(t,e){this.fun=t,this.array=e}function c(){}var u,d,f=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:r}catch(t){u=r}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(t){d=o}}();var p,g=[],h=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];g.push(new l(t,e)),1!==g.length||h||i(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroller",{staticClass:["scroller"]},[r("image",{staticClass:["logo"],attrs:{src:t.logoUrl}}),r("text",{staticClass:["title"]},[t._v("Hello "+t._s(t.target))]),r("a",{attrs:{href:"home.js"}},[r("text",[t._v("去首页")])]),r("text",{staticClass:["desc"],on:{click:function(e){t.jump("home")}}},[t._v("到首页1")]),r("text",{staticClass:["desc"],on:{click:function(e){t.jump("home")}}},[t._v("到首页")]),t._m(0),r("textarea",{staticClass:["textarea"]}),r("video",{staticClass:["video"],attrs:{src:t.src,autoplay:"",controls:""}}),r("text",{staticClass:["info"]},[t._v("state: "+t._s(t.state))]),r("image",{ref:"testImage",staticStyle:{width:"350px",height:"560px"},attrs:{src:"https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"}}),r("text",{staticClass:["button"],on:{click:t.downloadImages}},[t._v("下载图片")]),r("slider",{staticClass:["slider"],attrs:{interval:"3000",autoPlay:"true"}},t._l(t.imageList,function(t){return r("div",{staticClass:["frame"]},[r("image",{staticClass:["image"],attrs:{resize:"cover",src:t.src}})])})),r("div",{staticClass:["group"]},[r("input",{ref:"input",staticClass:["input"],attrs:{type:"url",autofocus:"false",value:t.value},on:{input:function(e){t.value=e.target.attr.value}}})]),r("div",{staticClass:["group"]},[r("text",{staticClass:["button"],on:{click:t.loadURL}},[t._v("LoadURL")]),r("text",{staticClass:["button"],on:{click:t.reload}},[t._v("reload")])]),r("web",{ref:"webview",staticClass:["webview"],attrs:{src:t.url},on:{pagestart:t.start,pagefinish:t.finish,error:t.error}}),r("list",{staticClass:["list"],attrs:{loadmoreoffset:"10"},on:{loadmore:t.fetch}},t._l(t.lists,function(e){return r("cell",{staticClass:["cell"],appendAsTree:!0,attrs:{append:"tree"}},[r("div",{staticClass:["panel"]},[r("text",{staticClass:["text"]},[t._v(t._s(e))])])])})),r("loading",{staticClass:["loading"],attrs:{display:"show"}},[r("text",{staticClass:["indicator"]},[t._v("Loading ...")])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["example"]},[r("text",{staticClass:["label"]},[t._v("onchange")]),r("switch"),r("text",{staticClass:["info"]})])}]},t.exports.render._withStripped=!0},19:function(t,e,r){var o,i,n=[];n.push(r(7)),o=r(4);var s=r(10);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/zhangcheng/zhangcheng/my-projects/test-projects/hello-weex/src/views/me.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-7ecc097e",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=o,t.exports.el="true",new Vue(t.exports)},4:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=function(t){return t&&t.__esModule?t:{default:t}}(o),n=weex.requireModule("webview"),s=weex.requireModule("modal");e.default={mixins:[i.default],data:function(){return{logoUrl:"http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",target:"World",imageList:[{src:"https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"},{src:"https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg"},{src:"https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"}],state:"----",src:"http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4",url:"https://m.alibaba.com",value:"https://m.alibaba.com",lists:[1,2,3,4,5]}},methods:{update:function(t){this.target="Weex",console.log("target:",this.target)},jump:function(t){this.push(t)},loadURL:function(t){var e=this;this.url=this.value,s.toast({message:"load url:"+this.url}),setTimeout(function(){console.log("will go back."),s.toast({message:"will go back"}),n.goBack(e.$refs.webview)},1e4)},reload:function(t){console.log("will reload webview"),s.toast({message:"reload"}),n.reload(this.$refs.webview)},start:function(t){console.log("pagestart",t),s.toast({message:"pagestart"})},finish:function(t){console.log("pagefinish",t),s.toast({message:"pagefinish"})},error:function(t){console.log("error",t),s.toast({message:"error"})},downloadImages:function(){this.$refs.testImage.save(function(t){t.success?s.toast({message:"保存成功"}):s.toast({message:"保存失败"+t.errorDesc})})},fetch:function(t){var e=this;s.toast({message:"loadmore",duration:1}),setTimeout(function(){for(var t=e.lists.length,r=t;r<t+4;++r)e.lists.push(r+1)},800)}}}},7:function(t,e){t.exports={scroller:{width:700,height:700,borderWidth:3,borderStyle:"solid",borderColor:"rgb(162,217,192)",marginLeft:25},wrapper:{alignItems:"center",marginTop:120,backgroundColor:"#f1f1f1"},title:{paddingTop:40,paddingBottom:40,fontSize:48},logo:{width:360,height:156},desc:{paddingTop:20,color:"#888888",fontSize:24},image:{width:350,height:350},slider:{marginTop:25,marginLeft:25,width:350,height:350,borderWidth:2,borderStyle:"solid",borderColor:"#41B883"},frame:{width:350,height:350,position:"relative"},indicator:{width:350,height:350,itemColor:"green",itemSelectedColor:"red",itemSize:50,position:"absolute",top:200,left:200},example:{flexDirection:"row",justifyContent:"flex-start",marginTop:60},label:{fontSize:14,lineHeight:60,width:150,color:"#666666",textAlign:"right",marginRight:20},info:{fontSize:40,lineHeight:60,color:"#BBBBBB",marginLeft:10,marginTop:40,textAlign:"center"},video:{width:350,height:350,marginTop:60},webview:{width:350,height:750,borderWidth:2,borderStyle:"solid",borderColor:"#41B883"},button:{width:225,textAlign:"center",backgroundColor:"#D3D3D3",paddingTop:15,paddingBottom:15,marginBottom:30,fontSize:30},panel:{width:600,height:250,marginLeft:75,marginTop:35,marginBottom:35,flexDirection:"column",justifyContent:"center",borderWidth:2,borderStyle:"solid",borderColor:"rgb(162,217,192)",backgroundColor:"rgba(162,217,192,0.2)"},loading:{wudth:350,height:350,justifyContent:"center"}}}});