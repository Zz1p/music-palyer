(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-19130f46":"26ec6801","chunk-2a916975":"bfef65e2","chunk-5dbcc8fa":"07d03018","chunk-64d3465e":"a1fad842","chunk-c7c6e1c0":"0c8e3f56"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-19130f46":1,"chunk-2a916975":1,"chunk-5dbcc8fa":1,"chunk-64d3465e":1,"chunk-c7c6e1c0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-19130f46":"3b742f8a","chunk-2a916975":"43517308","chunk-5dbcc8fa":"3001f32d","chunk-64d3465e":"837a9785","chunk-c7c6e1c0":"e8b1cc08"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"41ed":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=(n("d3b7"),n("bc3a")),a=n.n(o),c={baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).baseURL||Object({NODE_ENV:"production",BASE_URL:"/"}).apiUrl||"http://localhost:3000/api",headers:{Authorization:localStorage.getItem("token")||""}},u=a.a.create(c);u.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=u,window.axios=u,Object.defineProperties(e.prototype,{axios:{get:function(){return u}},$axios:{get:function(){return u}}})},r["default"].use(Plugin);Plugin;var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("my-header"),n("router-view")],1)},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.$route.path,router:"",mode:"horizontal"}},[n("el-menu-item",{attrs:{claass:"is-active"}},[e._v("音乐播放器后台管理系统")]),e.hasLogin?n("el-menu-item",{staticClass:"right",on:{click:e.bindLogout}},[e._v("退出登录")]):e._e(),e.hasLogin?e._e():n("el-menu-item",{staticClass:"right",attrs:{index:"/login"}},[e._v("登录")]),e.hasLogin?e._e():n("el-menu-item",{staticClass:"right",attrs:{index:"/register"}},[e._v("注册")]),n("el-menu-item",{staticClass:"right",attrs:{index:"/poster"}},[e._v("推荐管理")]),n("el-menu-item",{staticClass:"right",attrs:{index:"/playlist"}},[e._v("歌单管理")]),n("el-menu-item",{staticClass:"right",attrs:{index:"/song"}},[e._v("歌曲管理")])],1),n("div",{staticClass:"line"})],1)},f=[],d=n("5530"),h=n("2f62"),p={name:"Header",data:function(){return{}},computed:Object(d["a"])({},Object(h["d"])(["hasLogin"])),methods:Object(d["a"])({},Object(h["c"])(["logout"]),{bindLogout:function(){this.logout(),window.location.reload()}})},m=p,g=(n("e354"),n("2877")),v=Object(g["a"])(m,l,f,!1,null,"98799a8c",null),b=v.exports,y={components:{myHeader:b},methods:{}},k=y,_=(n("7c55"),Object(g["a"])(k,i,s,!1,null,null,null)),w=_.exports;n("b64b");r["default"].use(h["a"]);var O=new h["a"].Store({state:{userInfo:{id:"",userId:"",username:"",collection:"",role:"",token:""},hasLogin:void 0,playlist:""},mutations:{login:function(e,t){e.userInfo=t||"新用户",e.hasLogin=!0,localStorage.setItem("token","Bearer "+t.token)},logout:function(e){for(var t=0,n=Object.keys(e.userInfo);t<n.length;t++){var r=n[t];e.userInfo[r]=""}e.hasLogin=!1,localStorage.setItem("token","")}},actions:{login:function(e,t){var n=e.commit;return axios.post("login",t).then((function(e){var t=e.data;return!0===t.validUser&&"admin"===t.userInfo.role&&n("login",t.userInfo),t})).catch((function(e){console.log(e)}))},register:function(e,t){e.commit;return axios.post("register",t).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},authentication:function(e){var t=e.commit;return axios.get("auth").then((function(e){var n=e.data;return!0===n.validUser&&t("login",n.userInfo),n})).catch((function(e){console.log(e),t("logout")}))}},modules:{}}),j=(n("45fc"),n("b0c0"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),x=n("8c4f"),L=x["a"].prototype.replace;x["a"].prototype.replace=function(e){return L.call(this,e).catch((function(e){return e}))};var P=x["a"].prototype.push;x["a"].prototype.push=function(e){return P.call(this,e).catch((function(e){return e}))},r["default"].use(x["a"]);var E=[{path:"",redirect:"/song"},{path:"/login",name:"Login",component:function(){return n.e("chunk-5dbcc8fa").then(n.bind(null,"0866"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-64d3465e").then(n.bind(null,"04e9"))}},{path:"/song",name:"Song",component:function(){return n.e("chunk-c7c6e1c0").then(n.bind(null,"5325"))},meta:{auth:!0}},{path:"/Playlist",name:"Playlist",component:function(){return n.e("chunk-2a916975").then(n.bind(null,"9972"))},meta:{auth:!0}},{path:"/poster",name:"Poster",component:function(){return n.e("chunk-19130f46").then(n.bind(null,"191d"))},meta:{auth:!0}},{path:"*",redirect:""}],S=new x["a"]({mode:"hash",base:"/",routes:E});S.beforeEach(function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t,n,r){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.dispatch("authentication");case 2:o=e.sent,console.log(o),t.matched.some((function(e){return e.meta.auth}))?o.validUser?r():r("/login"):"Login"!==t.name&&"Register"!==t.name||o.validUser?r(""):r();case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var C=S,I=n("5c96"),U=n.n(I);n("0fae");r["default"].config.productionTip=!1,r["default"].use(U.a),new r["default"]({store:O,router:C,render:function(e){return e(w)}}).$mount("#app")},"5ba8":function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("5ba8"),o=n.n(r);o.a},e354:function(e,t,n){"use strict";var r=n("41ed"),o=n.n(r);o.a}});
//# sourceMappingURL=app.46fe04d2.js.map