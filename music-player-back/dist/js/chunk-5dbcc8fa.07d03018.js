(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dbcc8fa"],{"0866":function(e,o,r){"use strict";r.r(o);var n=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",{staticClass:"my-form",attrs:{id:"login"}},[r("h3",[e._v("管理员登录")]),r("el-form",{ref:"loginForm",staticClass:"demo-ruleForm",attrs:{model:e.loginForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username",rules:[{required:!0,message:"用户名不能为空"},{min:5,message:"用户名至少 5 个字符"}]}},[r("el-input",{model:{value:e.loginForm.username,callback:function(o){e.$set(e.loginForm,"username",o)},expression:"loginForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password",rules:[{required:!0,message:"密码不能为空"},{min:6,message:"密码至少 6 个字符"}]}},[r("el-input",{attrs:{type:"password"},model:{value:e.loginForm.password,callback:function(o){e.$set(e.loginForm,"password",o)},expression:"loginForm.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(o){return e.submitForm("loginForm")}}},[e._v("登录 ")])],1)],1)],1)},t=[],s=r("5530"),i=r("2f62"),a={name:"login",data:function(){return{loginForm:{username:"",password:""}}},methods:Object(s["a"])({},Object(i["b"])(["login"]),{submitForm:function(e){var o=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;o.login(o.loginForm).then((function(e){window.location.reload()}))}))}})},l=a,m=(r("e16a"),r("2877")),u=Object(m["a"])(l,n,t,!1,null,"8ae123c4",null);o["default"]=u.exports},"74d7":function(e,o,r){},e16a:function(e,o,r){"use strict";var n=r("74d7"),t=r.n(n);t.a}}]);
//# sourceMappingURL=chunk-5dbcc8fa.07d03018.js.map