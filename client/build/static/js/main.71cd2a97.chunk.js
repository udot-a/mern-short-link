(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){e.exports={del:"LinkList_del__2X1y_"}},25:function(e,t,a){e.exports={winWidth:"AuthPage_winWidth__IfyBg"}},26:function(e,t,a){e.exports={burger:"Navbar_burger__1O4Xh"}},27:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=(a(18),a(9)),s=a(1),i=a.n(s),u=a(4),m=a(3),d=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),c=Object(m.a)(l,2),o=c[0],s=c[1];return{loading:a,request:Object(n.useCallback)(function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,l,c,o,u=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:"GET",n=u.length>2&&void 0!==u[2]?u[2]:null,l=u.length>3&&void 0!==u[3]?u[3]:{},r(!0),e.prev=4,n&&(n=JSON.stringify(n),l["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:n,headers:l});case 8:return c=e.sent,e.next=11,c.json();case 11:if(o=e.sent,c.ok){e.next=14;break}throw new Error(o.message||"Some thing go wrong!!!");case 14:return r(!1),e.abrupt("return",o);case 18:throw e.prev=18,e.t0=e.catch(4),r(!1),s(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:o,clearError:Object(n.useCallback)((function(){return s(null)}),[])}};function p(){}var E=Object(n.createContext)({token:null,userId:null,login:p,logout:p,isAuthenticated:!1}),f=function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"}},r.a.createElement("div",{className:"preloader-wrapper active"},r.a.createElement("div",{className:"spinner-layer spinner-red-only"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"})))))},b=a(6),v=a(22),h=a.n(v),g=function(){return Object(n.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[])},k=function(e){var t=e.links,a=e.fetchLinks,l=d().request,c=Object(n.useContext)(E).token,o=g();if(!t.length)return r.a.createElement("p",{className:"center"},"\u0421\u0441\u044b\u043b\u043e\u043a \u043f\u043e\u043a\u0430 \u043d\u0435\u0442!");return r.a.createElement("table",{className:"responsive-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u2116"),r.a.createElement("th",null,"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f"),r.a.createElement("th",null,"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u0430\u044f"),r.a.createElement("th",null,"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"),r.a.createElement("th",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))),r.a.createElement("tbody",null,t.map((function(e,t){var n,s=e.from,m=e.to,d=e._id;return r.a.createElement("tr",{key:d},r.a.createElement("td",null,t+1),r.a.createElement("td",null,s),r.a.createElement("td",null,m),r.a.createElement("td",null,r.a.createElement(b.b,{to:"/detail/".concat(d)},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")),r.a.createElement("td",null,r.a.createElement("i",{className:"large material-icons ".concat(h.a.del),onClick:(n=d,Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/api/link/".concat(n),"DELETE",null,{Authorization:"Bearer ".concat(c)});case 3:return o("\u0421\u0441\u044b\u043b\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430!"),e.next=6,a();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])}))))},"delete_forever")))}))))},O=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],c=a[1],o=d(),s=o.loading,p=o.request,b=Object(n.useContext)(E).token,v=Object(n.useCallback)(Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("/api/link","GET",null,{Authorization:"Bearer ".concat(b)});case 3:t=e.sent,c(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[b,p]);return Object(n.useEffect)((function(){v()}),[v]),s?r.a.createElement(f,null):r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement(k,{links:l,fetchLinks:v}))},j=function(e){var t=Object(o.g)(),a=Object(n.useContext)(E).token,l=d().request,c=Object(n.useState)(""),s=Object(m.a)(c,2),p=s[0],f=s[1],b=function(){var e=Object(u.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==n.key){e.next=11;break}return e.prev=2,e.next=5,l("api/link/generate","POST",{from:p},{Authorization:"Bearer ".concat(a)});case 5:r=e.sent,t.push("/detail/".concat(r.link._id)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.M.updateTextFields()}),[]),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 offset-s2",style:{paddingTop:"2rem"}},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443...",id:"link",name:"link",type:"text",onChange:function(e){var t=e.target.value;return f(t)},onKeyPress:b,value:p}),r.a.createElement("label",{htmlFor:"link"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443"))))},w=function(e){var t=e.link;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"\u0421\u0441\u044b\u043b\u043a\u0430"),r.a.createElement("p",null,"\u0412\u0430\u0448\u0430 \u0441\u0441\u044b\u043b\u043a\u0430:",r.a.createElement("a",{href:t.to,target:"_blank",rel:"noopener noreferrer"},t.to)),r.a.createElement("p",null,"\u041e\u0442\u043a\u0443\u0434\u0430:",r.a.createElement("a",{href:t.from,target:"_blank",rel:"noopener noreferrer"},t.from)),r.a.createElement("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0438\u043a\u043e\u0432 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435:",r.a.createElement("strong",null,t.clicks)),r.a.createElement("p",null,"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f:",r.a.createElement("strong",null,new Date(t.date).toLocaleDateString())))},x=function(e){var t=Object(n.useContext)(E).token,a=d(),l=a.request,c=a.loading,s=Object(o.h)().id,p=Object(n.useState)(),b=Object(m.a)(p,2),v=b[0],h=b[1],g=Object(n.useCallback)(Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/api/link/".concat(s),"GET",null,{Authorization:"Bearer ".concat(t)});case 3:a=e.sent,h(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t,s,l]);return Object(n.useEffect)((function(){g()}),[g]),c?r.a.createElement(f,null):r.a.createElement(r.a.Fragment,null,!c&&v&&r.a.createElement(w,{link:v}))},N=a(13),y=a(12),C=a(25),S=a.n(C),I=function(e){var t=Object(n.useContext)(E).login,a=g(),l=d(),c=l.loading,o=l.error,s=l.request,p=l.clearError,f=Object(n.useState)({email:"",password:""}),b=Object(m.a)(f,2),v=b[0],h=b[1];Object(n.useEffect)((function(){a(o),p()}),[o,a,p]),Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var k=function(e){var t=e.target,a=t.name,n=t.value;h(Object(y.a)(Object(y.a)({},v),{},Object(N.a)({},a,n)))},O=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("/api/auth/register","POST",Object(y.a)({},v));case 3:t=e.sent,a(t.message),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(i.a.mark((function e(){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("/api/auth/login","POST",Object(y.a)({},v));case 3:a=e.sent,n=a.token,r=a.userId,t(n,r),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:S.a.winWidth},r.a.createElement("h2",null," \u0421\u043e\u043a\u0440\u0430\u0442\u0438 \u0441\u0441\u044b\u043b\u043a\u0443"),r.a.createElement("div",{className:"card blue darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("div",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"Input email...",id:"email",name:"email",type:"text",className:"yellow-input",onChange:k,value:v.email}),r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"Input password...",id:"password",type:"password",name:"password",className:"yellow-input",onChange:k,value:v.password}),r.a.createElement("label",{htmlFor:"password"},"Password")))),r.a.createElement("div",{className:"card-action"},r.a.createElement("button",{className:"btn yellow darken-4",style:{margin:10},disabled:c,onClick:j},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement("button",{className:"btn grey lighten-1 black-text",disabled:c,onClick:O},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))))},_=(a(37),a(26)),T=a.n(_),F=function(){var e=Object(n.useContext)(E).logout,t=Object(o.g)(),a=function(a){a.preventDefault(),e(),t.push("/")};return Object(n.useEffect)((function(){window.M.AutoInit()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper blue darken-1",style:{padding:"0 2rem"}},r.a.createElement("span",{className:"brand-logo"},"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0441\u0441\u044b\u043b\u043e\u043a"),r.a.createElement("a",{href:"#!","data-target":"mobile-demo",className:"sidenav-trigger ".concat(T.a.burger)},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(b.c,{to:"/create"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")),r.a.createElement("li",null,r.a.createElement(b.c,{to:"/links"},"\u0421\u0441\u044b\u043b\u043a\u0438")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",onClick:a},"\u0412\u044b\u0439\u0442\u0438"))))),r.a.createElement("ul",{className:"sidenav blue lighten-2",id:"mobile-demo"},r.a.createElement("li",null,r.a.createElement(b.c,{className:"sidenav-close",to:"/create"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")),r.a.createElement("li",null,r.a.createElement(b.c,{className:"sidenav-close",to:"/links"},"\u0421\u0441\u044b\u043b\u043a\u0438")),r.a.createElement("li",null,r.a.createElement("a",{className:"sidenav-close",href:"/",onClick:a},"\u0412\u044b\u0439\u0442\u0438"))))};var A=function(){var e=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),c=Object(m.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)(null),u=Object(m.a)(i,2),d=u[0],p=u[1],E=Object(n.useCallback)((function(e,t){s(e),p(t),localStorage.setItem("userData",JSON.stringify({userId:t,token:e}))}),[]),f=Object(n.useCallback)((function(){s(null),p(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&E(e.token,e.userId),r(!0)}),[E]),{login:E,logout:f,token:o,userId:d,ready:a}}(),t=e.token,a=e.login,l=e.logout,c=e.userId,s=e.ready,i=!!t,u=i?r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/links",exact:!0},r.a.createElement(O,null)),r.a.createElement(o.b,{path:"/create",exact:!0},r.a.createElement(j,null)),r.a.createElement(o.b,{path:"/detail/:id",exact:!0},r.a.createElement(x,null)),r.a.createElement(o.a,{to:"/create"})):r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0},r.a.createElement(I,null)),r.a.createElement(o.a,{to:"/"}));return s?r.a.createElement(E.Provider,{value:{token:t,login:a,logout:l,userId:c,isAuthenticated:i}},r.a.createElement(b.a,null,i&&r.a.createElement(F,null),r.a.createElement("div",{className:"container"},u))):r.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.71cd2a97.chunk.js.map