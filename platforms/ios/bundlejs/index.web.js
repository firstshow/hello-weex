// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=10)}([function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var l=a.computed||(a.computed={});Object.keys(r).forEach(function(t){var e=r[t];l[t]=function(){return e}})}return{esModule:o,exports:i,options:a}}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function i(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return g;r.parentNode.removeChild(r)}if(m){var i=f++;r=d||(d=o()),e=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=v(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function a(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(3),u={},p=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,h=!1,g=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var o=c(t,e);return r(o),function(e){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=u[s.id];a.refs--,n.push(a)}e?(o=c(t,e),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete u[a.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=i[0],a=i[1],l=i[2],c=i[3],u={id:t+":"+o,css:a,media:l,sourceMap:c};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}},,function(t,e,n){n(16);var r=n(1)(n(7),n(14),null,null);r.options.__file="/Users/zhangcheng/zhangcheng/my-projects/test-projects/hello-weex/src/index.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=weex.requireModule("webview"),s=weex.requireModule("modal");e.default={mixins:[o.default],data:{logoUrl:"http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",target:"World",imageList:[{src:"https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"},{src:"https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg"},{src:"https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"}],state:"----",src:"http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4",url:"https://m.alibaba.com",value:"https://m.alibaba.com",lists:[1,2,3,4,5]},methods:{update:function(t){this.target="Weex",console.log("target:",this.target)},jump:function(t){this.push(t)},loadURL:function(t){var e=this;this.url=this.value,s.toast({message:"load url:"+this.url}),setTimeout(function(){console.log("will go back."),s.toast({message:"will go back"}),i.goBack(e.$refs.webview)},1e4)},reload:function(t){console.log("will reload webview"),s.toast({message:"reload"}),i.reload(this.$refs.webview)},start:function(t){console.log("pagestart",t),s.toast({message:"pagestart"})},finish:function(t){console.log("pagefinish",t),s.toast({message:"pagefinish"})},error:function(t){console.log("error",t),s.toast({message:"error"})},downloadImages:function(){this.$refs.testImage.save(function(t){t.success?s.toast({message:"保存成功"}):s.toast({message:"保存失败"+t.errorDesc})})},fetch:function(t){var e=this;s.toast({message:"loadmore",duration:1}),setTimeout(function(){for(var t=e.lists.length,n=t;n<t+4;++n)e.lists.push(n+1)},800)}}}},function(t,e,n){"use strict";(function(t){function n(){return"weex"===t.env.COMPILE_ENV}Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{push:function(t){var e=weex.config.bundleUrl.split("/").slice(0,-1).join("/")+"/"+t+".js";weex.requireModule("navigator").push({url:e,animated:"true"})},pop:function(){n()?weex.requireModule("navigator").pop({animated:"true"}):window.history.back()}}}}).call(e,n(13))},,function(t,e,n){"use strict";var r=n(5);r.el="#root",new Vue(r)},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"\n.scroller {\n  width: 700px;\n  height: 700px;\n  border-width: 3px;\n  border-style: solid;\n  border-color: rgb(162, 217, 192);\n  margin-left: 25px;\n}\n.wrapper { align-items: center; margin-top: 120px;background-color: #f1f1f1;\n}\n.title { padding-top:40px; padding-bottom: 40px; font-size: 48px;\n}\n.logo { width: 360px; height: 156px;\n}\n.desc { padding-top: 20px; color:#888; font-size: 24px;\n}\n.image {\n  width: 350px;\n  height: 350px;\n}\n.slider {\n  margin-top: 25px;\n  margin-left: 25px;\n  width: 350px;\n  height: 350px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #41B883;\n}\n.frame {\n  width: 350px;\n  height: 350px;\n  position: relative;\n}\n.indicator {\n  width: 350px;\n  height: 350px;\n  item-color: green;\n  item-selected-color: red;\n  item-size: 50px;\n  position: absolute;\n  top: 200px;\n  left: 200px;\n}\n.example {\n  flex-direction: row;\n  justify-content: flex-start;\n  margin-top: 60px;\n}\n.label {\n  font-size: 14px;\n  line-height: 60px;\n  width: 150px;\n  color: #666;\n  text-align: right;\n  margin-right: 20px;\n}\n.info {\n  font-size: 30px;\n  line-height: 60px;\n  color: #BBB;\n  margin-left: 10px;\n}\n.video {\n  width: 350px;\n  height: 350px;\n  margin-top: 60px;\n}\n.info {\n  margin-top: 40px;\n  font-size: 40px;\n  text-align: center;\n}\n.webview {\n  width: 350px;\n  height: 750px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #41B883;\n}\n.button {\n  width: 225px;\n  text-align: center;\n  background-color: #D3D3D3;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 30px;\n  font-size: 30px;\n}\n.panel {\n  width: 600px;\n  height: 250px;\n  margin-left: 75px;\n  margin-top: 35px;\n  margin-bottom: 35px;\n  flex-direction: column;\n  justify-content: center;\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgb(162, 217, 192);\n  background-color: rgba(162, 217, 192, 0.2);\n}\n.loading {\n  wudth: 350px;\n  height: 350px;\n  justify-content: center;\n}\n",""])},,function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(p===clearTimeout)return clearTimeout(t);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function s(){g&&f&&(g=!1,f.length?h=f.concat(h):m=-1,h.length&&a())}function a(){if(!g){var t=o(s);g=!0;for(var e=h.length;e;){for(f=h,h=[];++m<e;)f&&f[m].run();m=-1,e=h.length}f=null,g=!1,i(t)}}function l(t,e){this.fun=t,this.array=e}function c(){}var u,p,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(t){p=r}}();var f,h=[],g=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new l(t,e)),1!==h.length||g||o(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroller",{staticClass:"scroller"},[n("image",{staticClass:"logo",attrs:{src:t.logoUrl}}),t._v(" "),n("text",{staticClass:"title"},[t._v("Hello "+t._s(t.target))]),t._v(" "),n("a",{attrs:{href:"home.js"}},[n("text",[t._v("去首页")])]),t._v(" "),n("text",{staticClass:"desc",on:{click:function(e){t.jump("home")}}},[t._v("到首页1")]),t._v(" "),n("text",{staticClass:"desc",on:{click:function(e){t.jump("home")}}},[t._v("到首页")]),t._v(" "),n("div",{staticClass:"example"},[n("text",{staticClass:"label"},[t._v("onchange")]),t._v(" "),n("switch"),t._v(" "),n("text",{staticClass:"info"})]),t._v(" "),n("textarea",{staticClass:"textarea"}),t._v(" "),n("video",{staticClass:"video",attrs:{src:t.src,autoplay:"",controls:""}}),t._v(" "),n("text",{staticClass:"info"},[t._v("state: "+t._s(t.state))]),t._v(" "),n("image",{ref:"testImage",staticStyle:{width:"350px",height:"560px"},attrs:{src:"https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"}}),t._v(" "),n("text",{staticClass:"button",on:{click:t.downloadImages}},[t._v("下载图片")]),t._v(" "),n("slider",{staticClass:"slider",attrs:{interval:"3000","auto-play":"true"}},t._l(t.imageList,function(t){return n("div",{staticClass:"frame"},[n("image",{staticClass:"image",attrs:{resize:"cover",src:t.src}})])})),t._v(" "),n("div",{staticClass:"group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"input",staticClass:"input",attrs:{type:"url",autofocus:"false"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"group"},[n("text",{staticClass:"button",on:{click:t.loadURL}},[t._v("LoadURL")]),t._v(" "),n("text",{staticClass:"button",on:{click:t.reload}},[t._v("reload")])]),t._v(" "),n("web",{ref:"webview",staticClass:"webview",attrs:{src:t.url},on:{pagestart:t.start,pagefinish:t.finish,error:t.error}}),t._v(" "),n("list",{staticClass:"list",attrs:{loadmoreoffset:"10"},on:{loadmore:t.fetch}},t._l(t.lists,function(e){return n("cell",{staticClass:"cell"},[n("div",{staticClass:"panel"},[n("text",{staticClass:"text"},[t._v(t._s(e))])])])})),t._v(" "),n("loading",{staticClass:"loading",attrs:{display:"show"}},[n("text",{staticClass:"indicator"},[t._v("Loading ...")])])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},,function(t,e,n){var r=n(11);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("10e97c1c",r,!1)}]);