(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{32:function(e,s,c){},33:function(e,s,c){},34:function(e,s,c){},59:function(e,s,c){},60:function(e,s,c){},62:function(e,s,c){"use strict";c.r(s);var a=c(1),t=c.n(a),r=c(26),n=c.n(r),o=(c(32),c.p,c(33),c(10)),l=c(2),i=c(8),d=(c(34),c.p+"static/media/logo.adf33f56.svg"),j=c.p+"static/media/login 2.994e2d6f.jpg",m="http://54.193.26.203:5000",b=c(12),u=c.n(b),h=c(0);var g=function(){var e=Object(a.useState)(""),s=Object(i.a)(e,2),c=s[0],t=s[1],r=Object(a.useState)(""),n=Object(i.a)(r,2),o=n[0],b=n[1],g=Object(l.f)();return Object(a.useEffect)((function(){var e=localStorage.getItem("userdata");console.log(JSON.parse(e));var s=JSON.parse(e);console.log(s),console.log(typeof s),s&&"undefined"!=typeof s&&g.push("/dashboard")}),[]),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"card login-card",children:Object(h.jsxs)("div",{className:"row no-gutters",children:[Object(h.jsx)("div",{className:"col-md-5",children:Object(h.jsx)("img",{src:j,alt:"login",className:"login-card-img"})}),Object(h.jsx)("div",{className:"col-md-7",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("div",{className:"brand-wrapper",children:Object(h.jsx)("img",{src:d,alt:"logo",className:"logo"})}),Object(h.jsx)("p",{className:"login-card-description",children:"Sign into your account"}),Object(h.jsxs)("form",{action:"#!",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"username",className:"sr-only",children:"Username"}),Object(h.jsx)("input",{type:"text",name:"username",id:"username",className:"form-control",placeholder:"Enter Username",required:!0,onChange:function(e){return t(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group mb-4",children:[Object(h.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(h.jsx)("input",{type:"password",name:"password",id:"password",className:"form-control",placeholder:"***********",required:!0,onChange:function(e){return b(e.target.value)}})]}),Object(h.jsx)("input",{name:"login",id:"login",className:"btn btn-block login-btn mb-4",type:"button",value:"Login",onClick:function(){return function(){var e={username:c,password:o};u.a.post(m+"/users/login",e).then((function(e){console.log(e.data),200===e.data.status&&(localStorage.setItem("userdata",JSON.stringify(e.data.data[0])),g.push("/dashboard"))})).catch((function(e){console.log(e)}))}()}})]}),Object(h.jsx)("a",{href:"#!",className:"forgot-password-link",children:"Forgot password?"}),Object(h.jsxs)("p",{className:"login-card-footer-text",children:["Don't have an account? ",Object(h.jsx)("a",{href:"/register",className:"text-reset",children:"Register here"})]}),Object(h.jsxs)("nav",{className:"login-card-footer-nav",children:[Object(h.jsx)("a",{href:"#!",children:"Terms of use."}),Object(h.jsx)("a",{href:"#!",children:"Privacy policy"})]})]})})]})})})};c(59);var p=function(){var e=Object(a.useState)(""),s=Object(i.a)(e,2),c=s[0],t=s[1],r=Object(a.useState)(""),n=Object(i.a)(r,2),o=n[0],b=n[1],g=Object(a.useState)(""),p=Object(i.a)(g,2),O=p[0],f=p[1],x=Object(a.useState)(""),N=Object(i.a)(x,2),v=N[0],w=N[1],y=Object(l.f)();return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"card login-card",children:Object(h.jsxs)("div",{className:"row no-gutters",children:[Object(h.jsx)("div",{className:"col-md-5",children:Object(h.jsx)("img",{src:j,alt:"login",className:"login-card-img"})}),Object(h.jsx)("div",{className:"col-md-7",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("div",{className:"brand-wrapper",children:Object(h.jsx)("img",{src:d,alt:"logo",className:"logo"})}),Object(h.jsx)("p",{className:"login-card-description",children:"Register your account"}),Object(h.jsxs)("form",{action:"#!",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"username",className:"sr-only",children:"Username"}),Object(h.jsx)("input",{type:"text",name:"username",id:"username",className:"form-control",placeholder:"Enter Username",required:!0,onChange:function(e){return t(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"age",className:"sr-only",children:"Age"}),Object(h.jsx)("input",{type:"number",name:"age",id:"age",className:"form-control",placeholder:"Enter Age",required:!0,onChange:function(e){return f(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"score",className:"sr-only",children:"Score"}),Object(h.jsx)("input",{type:"number",name:"score",id:"score",className:"form-control",placeholder:"Enter score",required:!0,onChange:function(e){return w(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group mb-4",children:[Object(h.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(h.jsx)("input",{type:"password",name:"password",id:"password",className:"form-control",placeholder:"***********",required:!0,onChange:function(e){return b(e.target.value)}})]}),Object(h.jsx)("input",{name:"login",id:"login",className:"btn btn-block login-btn mb-4",type:"button",value:"Register",onClick:function(){return function(){var e={username:c,password:o,age:O,score:v};u.a.post(m+"/users/register",e).then((function(e){console.log(e.data),200===e.data.status&&(alert(e.data.message),y.push("/"))})).catch((function(e){console.log(e)}))}()}})]}),Object(h.jsxs)("p",{className:"login-card-footer-text",children:["Already have account? ",Object(h.jsx)("a",{href:"/",className:"text-reset",children:"Login here"})]}),Object(h.jsxs)("nav",{className:"login-card-footer-nav",children:[Object(h.jsx)("a",{href:"#!",children:"Terms of use."}),Object(h.jsx)("a",{href:"#!",children:"Privacy policy"})]})]})})]})})})};c(60);var O=function(){var e=Object(a.useState)([]),s=Object(i.a)(e,2),c=s[0],t=s[1],r=Object(l.f)();return Object(a.useEffect)((function(){var e=localStorage.getItem("userdata");console.log(JSON.parse(e));var s=JSON.parse(e);console.log(s),"undefined"!==typeof s&&null!==s&&"null"!==s||r.push("/"),t(s)}),[]),Object(h.jsx)("div",{className:"page-content page-container",id:"page-content",children:Object(h.jsx)("div",{className:"padding",children:Object(h.jsx)("div",{className:"row container d-flex justify-content-center",children:Object(h.jsx)("div",{className:"col-xl-6 col-md-12",children:Object(h.jsx)("div",{className:"card user-card-full",children:Object(h.jsxs)("div",{className:"row m-l-0 m-r-0",children:[Object(h.jsx)("div",{className:"col-sm-4 bg-c-lite-green user-profile",children:Object(h.jsxs)("div",{className:"card-block text-center text-white",children:[Object(h.jsxs)("div",{className:"m-b-25",children:[" ",Object(h.jsx)("img",{src:"https://img.icons8.com/bubbles/100/000000/user.png",className:"img-radius",alt:"User-Profile-Image"})," "]}),Object(h.jsx)("h6",{className:"f-w-600",children:c.username}),Object(h.jsx)("i",{className:" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"})]})}),Object(h.jsx)("div",{className:"col-sm-8",children:Object(h.jsxs)("div",{className:"card-block",children:[Object(h.jsx)("h6",{className:"m-b-20 p-b-5 b-b-default f-w-600",children:"Information"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-sm-6",children:[Object(h.jsx)("p",{className:"m-b-10 f-w-600",children:"Age"}),Object(h.jsx)("h6",{className:"text-muted f-w-400",children:c.age})]}),Object(h.jsxs)("div",{className:"col-sm-6",children:[Object(h.jsx)("p",{className:"m-b-10 f-w-600",children:"Score"}),Object(h.jsx)("h6",{className:"text-muted f-w-400",children:c.score})]})]}),Object(h.jsx)("h6",{className:"m-b-20 m-t-40 p-b-5 b-b-default f-w-600",children:"Projects"}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-sm-12",children:Object(h.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return localStorage.removeItem("userdata"),void r.push("/")},children:"Logout"})})})]})})]})})})})})})};var f=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",component:g}),Object(h.jsx)(l.a,{exact:!0,path:"/register",component:p}),Object(h.jsx)(l.a,{exact:!0,path:"/dashboard",component:O})]})})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,r=s.getLCP,n=s.getTTFB;c(e),a(e),t(e),r(e),n(e)}))};c(61);n.a.render(Object(h.jsx)(t.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),x(),function(){function e(){return function(e){for(var s="=".repeat((4-e.length%4)%4),c=(e+s).replace(/-/g,"+").replace(/_/g,"/"),a=window.atob(c),t=new Uint8Array(a.length),r=0;r<a.length;++r)t[r]=a.charCodeAt(r);return t}("BNeEyCSlv04R-gTVNGkLrr_L7dexR-Pk4nFHbw-BVSzRB-NVEhun-wWE1OfVDIUaPMjYEmA-p4lso-i3gZogXQ4")}var s="".concat("","/sw.js");navigator.serviceWorker.register(s).then((function(s){if(console.log("response",s),s.installing)console.log("service worker is installing");else if(s.waiting)console.log("Service worker is installed");else if(s.active)return console.log("Service worker active"),s.pushManager.getSubscription().then((function(c){return s.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e()})}));"PushManager"in window?"denied"!==Notification.permission||console.log("The user has blocked notifications."):console.log("Push messaging isn't supported.")}))}()}},[[62,1,2]]]);
//# sourceMappingURL=main.5ca7b26c.chunk.js.map