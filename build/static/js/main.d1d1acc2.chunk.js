(this["webpackJsonptask-tracker-firebase"]=this["webpackJsonptask-tracker-firebase"]||[]).push([[0],{34:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(3),s=a.n(n),c=a(25),o=a.n(c),i=(a(34),a(10)),l=a(6);a(40),a(42),a(53),a(54);l.a.initializeApp({apiKey:"AIzaSyC4AqLcu0oB49R0374JDOr-CQJOIsfS8Yw",authDomain:"task-tracker-84155.firebaseapp.com",databaseURL:"https://task-tracker-84155.firebaseio.com",projectId:"task-tracker-84155",storageBucket:"task-tracker-84155.appspot.com",messagingSenderId:"383114024098",appId:"1:383114024098:web:08712aa4c5d195057333fb",measurementId:"G-C9X0PD11Q6"}),l.a.functions().useEmulator("http://localhost:5001");l.a,a(45),a(46),a(49);var u=a(27),d=a(0);a(50);function m(){return setTimeout((function(){var e=document.querySelector(".return-pop-out");e.addEventListener("mouseenter",(function(e){e.target.style.cssText="-webkit-transform: translate(-205px, 0px);\ttransform: translate(-205px, 0px);"})),e.addEventListener("mouseleave",(function(e){e.target.style.cssText="-webkit-transform: translate(0px, 0px);\ttransform: translate(0px, 0px);"}))}),4500),Object(r.jsx)("aside",{children:Object(r.jsxs)("a",{href:"https://zkiu.github.io/portfolio/","aria-describedby":"return to resume link",tabIndex:"20",className:"return-pop-out",children:[Object(r.jsx)(d.b.Provider,{value:{className:"icon"},children:Object(r.jsx)(u.a,{})}),Object(r.jsx)("div",{id:"return",children:"Return to Kiu's resume page"})]})})}var b=a(22),j=a(4),p=a.n(j),h=a(7),f=function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.auth().signOut();case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error("Error with sign out");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();var O=function(e){var t=e.userObj;return Object(r.jsx)("nav",{className:"site-nav family-sans navbar navbar-expand bg-primary navbar-dark",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsxs)(i.a,{to:"/",className:"navbar-brand",children:[Object(r.jsx)(b.a,{className:"mr-1"}),"Task Tracker"]}),Object(r.jsxs)("div",{className:"navbar-nav ml-auto",children:[!t&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{className:"nav-item nav-link",to:"register",children:"register"}),Object(r.jsx)(i.a,{className:"nav-item nav-link",to:"login",children:"log in"})]}),t&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{className:"nav-item nav-link",to:"editUser/"+t.id,children:t.name+","}),Object(r.jsx)(i.a,{className:"nav-item nav-link",to:"/login",onClick:function(){f()},children:"log out"})]})]})]})})};var v=function(e){return e.isAuth&&Object(i.c)("/dashboard"),Object(r.jsx)("div",{className:"container text-center",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsxs)("div",{className:"col-10 col-md-10 col-lg-8 col-xl-7",children:[Object(r.jsx)("div",{className:"display-4 text-primary mt-3 mb-2",children:"Task Dashboard"}),Object(r.jsx)("p",{className:"lead text-white",children:"Please login to see your dashboard"}),Object(r.jsx)(i.a,{to:"/register",className:"btn btn-secondary mr-2",children:"Register"}),Object(r.jsx)(i.a,{to:"/login",className:"btn btn-secondary mr-2",children:"Log In"})]})})})},x=a(12),g=a(8),k=a(9);var y=function(e){return Object(r.jsx)("div",{className:"col-12 alert alert-danger px-3",children:e.errorMessage})},N=function(){var e=Object(h.a)(p.a.mark((function e(t,a){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.auth().signInWithEmailAndPassword(t,a);case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Error signing in");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}();var w=function(){var e=Object(n.useState)({email:"",password:"",errorMessage:null}),t=Object(k.a)(e,2),a=t[0],s=t[1];function c(e){s(Object(g.a)(Object(g.a)({},a),{},Object(x.a)({},e.target.name,e.target.value)))}return Object(r.jsx)("form",{className:"mt-3",onSubmit:function(e){e.preventDefault(),N(a.email,a.password).then((function(e){e&&Object(i.c)("/dashboard")})).catch((function(e){null!==e.message?s(Object(g.a)(Object(g.a)({},a),{},{errorMessage:e.message})):s(Object(g.a)(Object(g.a)({},a),{},{errorMessage:null}))}))},children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsx)("div",{className:"card bg-light",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h3",{className:"font-weight-light mb-3",children:"Log in"}),a.errorMessage&&Object(r.jsx)(y,{errorMessage:a.errorMessage}),Object(r.jsxs)("section",{className:"form-group",children:[Object(r.jsx)("label",{className:"form-control-label sr-only",htmlFor:"Email",children:"Email"}),Object(r.jsx)("input",{required:!0,autoFocus:!0,autoComplete:"true",className:"form-control border border-primary",type:"email",id:"email",name:"email",placeholder:"Email",value:a.email,onChange:c})]}),Object(r.jsx)("section",{className:"form-group",children:Object(r.jsx)("input",{required:!0,autoComplete:"true",className:"form-control border border-primary",type:"password",name:"password",placeholder:"Password",value:a.password,onChange:c})}),Object(r.jsx)("div",{className:"form-group text-right mb-0",children:Object(r.jsx)("button",{className:"btn btn-secondary",type:"submit",children:"Log in"})})]})})})})})})};function C(e,t){return L.apply(this,arguments)}function L(){return(L=Object(h.a)(p.a.mark((function e(t,a){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.auth().createUserWithEmailAndPassword(t,a);case 3:return r=e.sent,e.abrupt("return",r.user.uid);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function T(e,t,a,r){return D.apply(this,arguments)}function D(){return(D=Object(h.a)(p.a.mark((function e(t,a,r,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.a.firestore().collection("users").doc(t).set({name:a,email:r,jobLevel:n}).catch((function(e){throw new Error(e.message)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return I.apply(this,arguments)}function I(){return(I=Object(h.a)(p.a.mark((function e(t){var a,r,n,s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,r=t.email,n=t.jobLevel,s=t.password,e.prev=1,e.next=4,C(r,s);case 4:return c=e.sent,e.next=7,T(c,a,r,n);case 7:alert("Registration completed sucessfully"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}var E=function(){var e=Object(n.useState)({name:"",email:"",jobLevel:"",passOne:"",passTwo:""}),t=Object(k.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(null),o=Object(k.a)(c,2),l=o[0],u=o[1];function d(e){s(Object(g.a)(Object(g.a)({},a),{},Object(x.a)({},e.target.name,e.target.value)))}function m(){return(m=Object(h.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.passOne===a.passTwo){e.next=4;break}return u("Passwords do not match. Please fix before re-submitting."),e.abrupt("return");case 4:return r={name:a.name,email:a.email,jobLevel:a.jobLevel,password:a.passOne},e.next=7,S(r);case 7:Object(i.c)("/dashboard");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){a.passOne!==a.passTwo?u("Passwords do not match."):u(null)}),[a.passOne,a.passTwo]),Object(r.jsx)("form",{className:"mt-3",onSubmit:function(e){return m.apply(this,arguments)},children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{className:"col-lg-8",children:Object(r.jsx)("div",{className:"card bg-light",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h3",{className:"font-weight-light mb-3",children:"Register"}),Object(r.jsxs)("div",{className:"form-row",children:[l?Object(r.jsx)(y,{errorMessage:l}):null,Object(r.jsxs)("section",{className:"col-sm-12 form-group",children:[Object(r.jsx)("label",{className:"form-control-label sr-only",htmlFor:"name",children:"Name"}),Object(r.jsx)("input",{required:!0,autoFocus:!0,autoComplete:"true",className:"form-control border border-primary",type:"text",id:"name",placeholder:"Name",name:"name",value:a.name,onChange:d})]})]}),Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsxs)("section",{className:"col-sm-6 form-group",children:[Object(r.jsx)("label",{className:"form-control-label sr-only",htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{required:!0,autoComplete:"true",className:"form-control border border-primary",type:"email",id:"email",placeholder:"Email Address",name:"email",value:a.email,onChange:d})]}),Object(r.jsxs)("section",{className:"col-sm-6 form-group",children:[Object(r.jsx)("label",{className:"form-control-label sr-only",htmlFor:"name",children:"Job Level"}),Object(r.jsxs)("select",{className:"custom-select",name:"jobLevel",id:"jobLevel",value:a.jobLevel,onChange:d,required:!0,children:[Object(r.jsx)("option",{defaultValue:!0,value:"",children:"Job Level..."}),Object(r.jsx)("option",{value:"L1",children:"L1: General Employee"}),Object(r.jsx)("option",{value:"L2",children:"L2: Supervisor"})]})]})]}),Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsx)("section",{className:"col-sm-6 form-group",children:Object(r.jsx)("input",{required:!0,autoComplete:"true",className:"form-control border border-primary",type:"password",name:"passOne",placeholder:"Password",value:a.passOne,onChange:d})}),Object(r.jsx)("section",{className:"col-sm-6 form-group",children:Object(r.jsx)("input",{required:!0,autoComplete:"true",className:"form-control border border-primary",type:"password",name:"passTwo",placeholder:"Repeat Password",value:a.passTwo,onChange:d})})]}),Object(r.jsx)("div",{className:"form-group text-right mb-0",children:Object(r.jsx)("button",{className:"btn btn-secondary",type:"submit",children:"Register"})})]})})})})})})},A=a(28);function F(e){var t=e.filteredTasksArray;if(0===t.length)return Object(r.jsx)("h4",{className:"text-white-50 mt-4",children:"There are currently no task associated with your account."});var a=t.map((function(e){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-header p-0",id:e.id,children:Object(r.jsxs)("div",{className:"btn btn-block text-left",type:"button","data-toggle":"collapse","data-target":"#collapse".concat(e.id),"aria-expanded":"false","aria-controls":"collapse".concat(e.id),children:[Object(r.jsx)("button",{type:"button",className:"btn btn-lg btn-outline-secondary col-1 p-2",title:"Click to Edit Task",onClick:function(t){!function(e,t){e.stopPropagation(),Object(i.c)("editTask/"+t)}(t,e.id)},children:Object(r.jsx)(b.b,{})}),Object(r.jsx)("div",{className:"btn text-truncate text-nowrap text-left col-10",children:e.taskName}),Object(r.jsx)("div",{className:"btn col-1",children:Object(r.jsx)(A.a,{})})]})}),Object(r.jsx)("div",{id:"collapse".concat(e.id),className:"collapse","aria-labelledby":e.id,"data-parent":"#taskListaccordion",children:Object(r.jsxs)("div",{className:"card-body text-left ",children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"card-title row justify-content-between",children:[Object(r.jsxs)("span",{children:["Priority: ","p1"===e.priority&&" Low","p2"===e.priority&&" High"]}),Object(r.jsxs)("span",{children:["Due Date: ",e.dateDue]})]})}),Object(r.jsx)("p",{className:"card-text",children:e.taskDescription})]})})]},e.id)}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"accordion",id:"taskListaccordion",children:a})})}var R=a(16),P=function(){var e=l.a.auth().currentUser;return e?{id:e.uid,email:e.email}:null},q=function(){var e=B("nameTaskCreatorId"),t=B("nameResponsibleId");return function(e){var t=function(e){return e.id},a=new Set;return e.filter((function(e){return!a.has(t(e))&&(a.add(t(e)),!0)}))}([].concat(Object(R.a)(e),Object(R.a)(t)))},B=function(e){var t=P(),a=Object(n.useState)([]),r=Object(k.a)(a,2),s=r[0],c=r[1];return Object(n.useEffect)((function(){var a=[],r=l.a.firestore().collection("tasks").where(e,"==",t.id).onSnapshot((function(e){a=(a=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data({serverTimestamps:"estimate"}))}))).map((function(e){var t=e.dateCreated.toDate();return t=t.toISOString().slice(0,10),e.dateCreated=t,{id:e.id,dateCreated:e.dateCreated,dateDue:e.dateDue,priority:e.priority,status:e.status,nameTaskCreator:e.nameTaskCreator,nameTaskCreatorId:e.nameTaskCreatorId,nameResponsible:e.nameResponsible,nameResponsibleId:e.nameResponsibleId,taskName:e.taskName,taskDescription:e.taskDescription}})),c(a)}));return function(){return r()}}),[]),s};var U=a(19),M=function(e){return/[^a-z0-9\s\u0021\u003F\u002E\u0024\u0025\u0026\u002B\u002D]/gi.test(e)},J=function(e){var t=e.trim().toLowerCase().split(" ");return t=t.filter((function(e){return e.length>0}))},V=function(e,t,a){var r=[];switch(a){case"recent":r=function(e){return e.sort((function(e,t){return Date.parse(t.dateCreated)-Date.parse(e.dateCreated)}))}(e);break;case"dueDate":r=z(e);break;case"priority":r=function(e){var t=e.filter((function(e){return"p1"===e.priority})),a=e.filter((function(e){return"p2"===e.priority}));return[].concat(Object(R.a)(z(a)),Object(R.a)(z(t)))}(e)}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=[],r=[];if(0===t.length)return e;M(t)?console.error("This field only accepts letters, digits, and spaces"):(a=J(t),r=e.filter((function(e){var t,r=Object(U.a)(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(!e.taskName.toLowerCase().includes(n)&&!e.taskDescription.toLowerCase().includes(n))return!1}}catch(s){r.e(s)}finally{r.f()}return!0})));return r}(r,t)};function z(e){return e.sort((function(e,t){return Date.parse(e.dateDue)-Date.parse(t.dateDue)}))}function G(){var e=Object(n.useState)("recent"),t=Object(k.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),o=Object(k.a)(c,2),l=o[0],u=o[1],d=q(),m=[];return 0!==d.length&&void 0!==d&&null!==d&&(m=V(d,l,a)),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container text-center",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsxs)("div",{className:"col-10 col-md-10 col-lg-8 col-xl-7",children:[Object(r.jsx)("h1",{className:"display-4 text-primary mt-3 mb-2",children:"Task Dashboard"}),Object(r.jsx)("button",{className:"btn btn-secondary mt-4 mb-2",onClick:function(e){e.preventDefault(),Object(i.c)("editTask")},children:"Create New Task"}),Object(r.jsxs)("div",{className:"input-group mb-1",children:[Object(r.jsx)("input",{type:"text",className:"form-control border border-primary","aria-label":"Text input with dropdown button",placeholder:"Enter search keywords...",autoFocus:!0,value:l,onChange:function(e){return u(e.target.value)}}),Object(r.jsx)("input",{type:"Query Type Label",className:"form-control text-center col-lg-3","aria-label":"",value:"Order Search by:",disabled:!0}),Object(r.jsxs)("select",{className:"custom-select col-lg-3",name:"orderBy",value:a,onChange:function(e){return s(e.target.value)},required:!0,children:[Object(r.jsx)("option",{value:"recent",defaultValue:!0,children:"Recently Added"}),Object(r.jsx)("option",{value:"dueDate",children:"Due Date"}),Object(r.jsx)("option",{value:"priority",children:"Priority"})]})]}),Object(r.jsx)(F,{filteredTasksArray:m})]})})})})}var H=l.a.firestore(),Q=function(){var e=Object(h.a)(p.a.mark((function e(t){var a,r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=2;break}return e.abrupt("return",null);case 2:return a=H.collection("users").doc(t),e.next=5,a.get();case 5:if((r=e.sent).exists){e.next=8;break}return e.abrupt("return",null);case 8:return n=r.data(),e.abrupt("return",Object(g.a)(Object(g.a)({},n),{},{id:t}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(h.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=P()){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,Q(t.id);case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function K(e){return W.apply(this,arguments)}function W(){return(W=Object(h.a)(p.a.mark((function e(t){var a,r,n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.a.firestore().collection("tasks").doc(t),e.next=3,a.get();case 3:return r=e.sent,n=r.data(),s=(s=n.dateCreated.toDate()).toISOString().slice(0,10),e.abrupt("return",{id:t,dateCreated:s,dateDue:n.dateDue,priority:n.priority,status:n.status,nameResponsible:n.nameResponsible,nameResponsibleId:n.nameResponsibleId,nameTaskCreator:n.nameTaskCreator,nameTaskCreatorId:n.nameTaskCreatorId,taskDescription:n.taskDescription,taskName:n.taskName});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){var t=Object(n.useState)([]),a=Object(k.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){var t=l.a.firestore().collection("users").where("jobLevel","==",e).orderBy("name","asc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));s(t)}),(function(e){throw new Error("Error: "+e.message)}));return function(){return t()}}),[]),r}function Y(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(h.a)(p.a.mark((function e(t){var a,r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.a.firestore().collection("tasks"),e.prev=1,e.next=4,a.add(t);case 4:return r=e.sent,e.next=7,r.get();case 7:return n=e.sent,e.abrupt("return",Object(g.a)({id:r.id},n.data()));case 11:throw e.prev=11,e.t0=e.catch(1),alert(e.t0.message),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function _(e,t){return ee.apply(this,arguments)}function ee(){return(ee=Object(h.a)(p.a.mark((function e(t,a){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete a.dateCreated,r=l.a.firestore().collection("tasks").doc(t),e.prev=2,e.next=5,r.update(a);case 5:return e.abrupt("return",!0);case 8:throw e.prev=8,e.t0=e.catch(2),alert(e.t0.message),new Error("Could not update the Task. Please contact Helpdesk.");case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function te(e,t,a){return ae.apply(this,arguments)}function ae(){return(ae=Object(h.a)(p.a.mark((function e(t,a,r){var n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.a.firestore().collection("tasks").doc(t).collection("comments"),e.prev=1,e.next=4,n.add({comment:a,name:r.name,userId:r.id,email:r.email,timestamp:l.a.firestore.FieldValue.serverTimestamp()});case 4:return s=e.sent,e.abrupt("return",s.id);case 8:e.prev=8,e.t0=e.catch(1),alert("Errow with saving the comment: "+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function re(e){var t=e.taskId,a=void 0===t?null:t,s=Object(n.useState)({}),c=Object(k.a)(s,2),o=c[0],u=c[1],d=Object(n.useState)({priority:"",status:"",dateDue:"",nameResponsible:"",nameResponsibleId:"",taskName:"",taskDescription:""}),m=Object(k.a)(d,2),b=m[0],j=m[1],f=Object(n.useState)({priority:"",status:"",dateDue:"",nameResponsible:"",nameResponsibleId:"",taskName:"",taskDescription:""}),O=Object(k.a)(f,2),v=O[0],y=O[1],N=Object(n.useState)({dateCreated:"",nameTaskCreator:"",nameTaskCreatorId:""}),w=Object(k.a)(N,2),C=w[0],L=w[1],T=X("L1").map((function(e){return Object(r.jsx)("option",{"data-key":e.id,value:e.name,children:e.name},e.id)})),D=X("L2").map((function(e){return Object(r.jsx)("option",{"data-key":e.id,value:e.name,children:e.name},e.id)}));function S(e){j(Object(g.a)(Object(g.a)({},b),{},Object(x.a)({},e.target.name,e.target.value)))}function I(e){switch(e.value){case"":e.setAttribute("style","background-color:white; color:black");break;case"p1":e.setAttribute("style","background-color:yellow; color:black");break;case"p2":e.setAttribute("style","background-color:orange; color:white");break;case"s1":e.setAttribute("style","background-color:green; color:white");break;case"s2":e.setAttribute("style","background-color:gray; color:black");break;case"s3":e.setAttribute("style","background-color:black; color:white")}}function E(){return(E=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null!==a){e.next=14;break}if(!M(b.taskName)&&!M(b.taskDescription)){e.next=6;break}console.error("Comments cannot contain special characters other than !?.$%&+-. Please remove the other special characters before saving"),e.next=12;break;case 6:return e.next=8,Y(Object(g.a)(Object(g.a)({},b),{},{nameTaskCreator:o.name,nameTaskCreatorId:o.id,dateCreated:l.a.firestore.FieldValue.serverTimestamp()}));case 8:A(e.sent.id,"Auto Message: Task is created"),alert("New task is saved"),Object(i.c)("../dashboard");case 12:e.next=22;break;case 14:if(!M(b.taskName)&&!M(b.taskDescription)){e.next=18;break}console.error("Comments cannot contain special characters other than !?.$%&+-. Please remove the other special characters before saving"),e.next=22;break;case 18:return e.next=20,_(a,b);case 20:e.sent&&(A(a,"Auto Message: Task was modified"),alert("Task is updated"),y(b));case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return F.apply(this,arguments)}function F(){return(F=Object(h.a)(p.a.mark((function e(t,a){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$();case 3:if(r=e.sent){e.next=6;break}throw new Error("User information cannot be verified");case 6:return e.next=8,te(t,a,r);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){(function(){var e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){null===a&&j((function(e){return Object(g.a)(Object(g.a)({},e),{},{status:"s1"})}))}),[a]),Object(n.useEffect)((function(){null!==a&&function(){var e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(a);case 2:t=e.sent,L({dateCreated:t.dateCreated,nameTaskCreator:t.nameTaskCreator,nameTaskCreatorId:t.nameTaskCreatorId}),delete t.dateCreated,delete t.nameTaskCreator,delete t.nameTaskCreatorId,j(Object(g.a)({},t)),y(Object(g.a)({},t));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),Object(n.useEffect)((function(){var e=document.querySelectorAll("[data-secured]");if(null!==a&&"L1"===o.jobLevel){var t,r=Object(U.a)(e);try{for(r.s();!(t=r.n()).done;){t.value.attributes.setNamedItem(document.createAttribute("disabled"))}}catch(n){r.e(n)}finally{r.f()}}}),[a,o]),Object(n.useEffect)((function(){var e,t=document.querySelectorAll(".priority"),a=Object(U.a)(t);try{for(a.s();!(e=a.n()).done;){I(e.value)}}catch(c){a.e(c)}finally{a.f()}var r,n=document.querySelectorAll(".status"),s=Object(U.a)(n);try{for(s.s();!(r=s.n()).done;){I(r.value)}}catch(c){s.e(c)}finally{s.f()}}),[b]),Object(n.useEffect)((function(){var e=document.querySelector("#submitButton");b.status===v.status&&b.priority===v.priority&&b.dateDue===v.dateDue&&b.nameResponsible===v.nameResponsible&&b.taskName===v.taskName&&b.taskDescription===v.taskDescription?e.attributes.setNamedItem(document.createAttribute("disabled")):e.hasAttribute("disabled")&&e.attributes.removeNamedItem("disabled")}),[b,v]),Object(r.jsxs)(r.Fragment,{children:[null===a&&Object(r.jsx)("h2",{className:"text-primary my-3",children:"Create New Task Form"}),null!==a&&Object(r.jsx)("h2",{className:"text-primary my-3",children:"Update Task Form"}),Object(r.jsxs)("form",{className:"border p-2 bg-light card",onSubmit:function(e){return E.apply(this,arguments)},children:[Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsxs)("div",{className:"form-group col-md-3",children:[Object(r.jsx)("label",{className:"form-control-label",htmlFor:"priority",children:"Priority Level:"}),Object(r.jsxs)("select",{className:"custom-select priority",name:"priority",value:b.priority,onChange:function(e){S(e),I(e.target)},required:!0,children:[Object(r.jsx)("option",{defaultValue:!0,className:"priority",value:"",children:"Priority..."}),Object(r.jsx)("option",{value:"p1",className:"priority",children:"Low"}),Object(r.jsx)("option",{value:"p2",className:"priority",children:"High"})]})]}),Object(r.jsxs)("div",{className:"form-group col-md-3",children:[Object(r.jsx)("label",{className:"form-control-label",htmlFor:"dateDue",children:"Deadline:"}),Object(r.jsx)("input",{className:"form-control",type:"date",id:"dateDue",placeholder:"Select Task Deadline...",required:!0,name:"dateDue","data-secured":!0,value:b.dateDue,onChange:S})]}),Object(r.jsxs)("div",{className:"form-group col-md-6",children:[Object(r.jsx)("label",{className:"form-control-label",htmlFor:"nameResponsible",children:"Responsible Employee"}),Object(r.jsxs)("select",{className:"custom-select",name:"nameResponsible",id:"nameResponsible",required:!0,"data-secured":!0,value:b.nameResponsible,onChange:function(e){var t,a=e.target.options.selectedIndex,r=e.target.options[a].getAttribute("data-key");j(Object(g.a)(Object(g.a)({},b),{},(t={},Object(x.a)(t,e.target.name,e.target.value),Object(x.a)(t,"nameResponsibleId",r),t)))},children:[Object(r.jsx)("option",{value:"",defaultValue:!0,disabled:!0,hidden:!0,children:"Select Responsible Employee"}),Object(r.jsx)("optgroup",{label:"L1 General Employees:",children:T}),Object(r.jsx)("optgroup",{label:"L2 Supervisor Level:",children:D})]})]})]}),Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsxs)("div",{className:"form-group col-md-3",children:[Object(r.jsx)("label",{className:"form-control-label ",htmlFor:"status",children:"Task Status:"}),Object(r.jsxs)("select",{className:"custom-select status",name:"status",id:"status",value:b.status,onChange:function(e){S(e),I(e.target)},required:!0,children:[Object(r.jsx)("option",{defaultValue:!0,className:"status",value:"",children:"Status..."}),Object(r.jsx)("option",{className:"status",value:"s1",children:"In Progress"}),Object(r.jsx)("option",{className:"status",value:"s2",children:"Closing"}),Object(r.jsx)("option",{className:"status",value:"s3",children:"Archived"})]})]}),Object(r.jsx)("div",{className:"form-group col-md-3",children:null!==a&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("label",{className:"form-control-label",htmlFor:"dateCreated",children:"Date Created:"}),Object(r.jsx)("input",{className:"form-control",type:"date",id:"dateCreated",placeholder:"Loading...",name:"dateCreated",value:C.dateCreated,disabled:!0})]})}),Object(r.jsx)("div",{className:"form-group col-md-6",children:null!==a&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("label",{className:"form-control-label",htmlFor:"nameTaskCreator",children:"Task Creator"}),Object(r.jsx)("input",{className:"form-control",type:"text",id:"nameTaskCreator",placeholder:"Leader's Name",name:"nameTaskCreator",value:C.nameTaskCreator,disabled:!0})]})})]}),Object(r.jsx)("label",{className:"form-control-label",htmlFor:"taskName",children:"Task Name:"}),Object(r.jsx)("input",{className:"form-control border border-primary",type:"text",id:"taskName",placeholder:"Enter Task Name...",name:"taskName",required:!0,"data-secured":!0,value:b.taskName,onChange:S}),Object(r.jsx)("label",{className:"form-control-label",htmlFor:"taskDescription",children:"Task Description:"}),Object(r.jsx)("textarea",{className:"form-control border border-primary",name:"taskDescription",id:"taskDescription",required:!0,placeholder:"Enter Task Description...",value:b.taskDescription,onChange:S,cols:"30",rows:"5"}),Object(r.jsx)("div",{className:"form-group text-right mb-0",children:Object(r.jsxs)("button",{id:"submitButton",className:"btn btn-secondary mt-2",type:"submit",children:[null===a&&"Create Task",null!==a&&"Update Task"]})})]})]})}function ne(e,t){return se.apply(this,arguments)}function se(){return(se=Object(h.a)(p.a.mark((function e(t,a){var r,n,s,c,o,i=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=i.length>2&&void 0!==i[2]?i[2]:null,n=l.a.firestore().collection("tasks").doc(t).collection("comments").orderBy("timestamp","desc").limit(a),null!==r){e.next=8;break}return e.next=5,n.get();case 5:s=e.sent,e.next=11;break;case 8:return e.next=10,n.startAfter(r).get();case 10:s=e.sent;case 11:return c=s.docs[s.docs.length-1],o=s.docs.map((function(e){return Object(g.a)({id:e.id},e.data())})),e.abrupt("return",{lastComment:c,commentList:o});case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(e){var t=e.taskId,a=Object(n.useState)([]),s=Object(k.a)(a,2),c=s[0],o=s[1],i=Object(n.useState)([]),u=Object(k.a)(i,2),d=u[0],m=u[1],b=Object(n.useState)(null),j=Object(k.a)(b,2),f=j[0],O=j[1],v=Object(n.useState)(!0),x=Object(k.a)(v,2),y=x[0],N=x[1];function w(){return(w=Object(h.a)(p.a.mark((function e(a){var r,n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),N(!0),e.prev=2,e.next=5,ne(t,5,f);case 5:r=e.sent,n=r.lastComment,s=r.commentList,O(n),N(!1),m((function(e){return[].concat(Object(R.a)(e),Object(R.a)(s))})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error("Can't load additional comments");case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}Object(n.useEffect)((function(){N(!0);var e=l.a.firestore().collection("tasks").doc(t).collection("comments").orderBy("timestamp","desc").limit(5).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data({serverTimestamps:"estimate"}))}));o(t),m(t),O(e.docs[e.docs.length-1])}),(function(e){throw new Error("Error: "+e.message)}));return N(!1),function(){return e()}}),[t]),Object(n.useEffect)((function(){var e=document.querySelector("#commentBtn");c.length>=5&&e.removeAttribute("disabled"),c.length<4&&e.attributes.setNamedItem(document.createAttribute("disabled")),void 0===f&&e.attributes.setNamedItem(document.createAttribute("disabled"))}));var C=d.map((function(e){return Object(r.jsxs)("li",{className:"list-group-item list-group-item-action",children:[Object(r.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(r.jsx)("a",{className:"mb-1",href:"mailto:".concat(e.email,"?subject=taskId:").concat(t),children:Object(r.jsx)("small",{children:e.name})}),Object(r.jsx)("small",{className:"text-muted",children:e.timestamp.toDate().toDateString()})]}),Object(r.jsx)("div",{className:"text-muted",children:e.comment})]},e.id)}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("ul",{className:"list-group",children:C}),Object(r.jsx)("div",{children:y&&"Loading..."}),Object(r.jsx)("button",{id:"commentBtn",className:"btn btn-secondary mt-2",onClick:function(e){return w.apply(this,arguments)},children:"Load additional comments"})]})}function oe(e){var t=e.taskId,a=Object(n.useState)(""),s=Object(k.a)(a,2),c=s[0],o=s[1];function i(e){return l.apply(this,arguments)}function l(){return(l=Object(h.a)(p.a.mark((function e(a){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,$();case 4:if(r=e.sent){e.next=7;break}throw new Error("User information cannot be verified");case 7:if(!M(c)){e.next=11;break}console.error("Comments cannot contain special characters other than !?.$%&+-. Please remove the other special characters before saving"),e.next=14;break;case 11:return e.next=13,te(t,c,r);case 13:o("");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),alert(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}return Object(r.jsxs)("div",{className:"border p-2 card",children:[Object(r.jsxs)("form",{className:"input-group mb-3",onSubmit:i,children:[Object(r.jsx)("input",{name:"comment",type:"text",className:"form-control border border-primary",placeholder:"Add a new comment...","aria-label":"New comment input field","aria-describedby":"button-comment",value:c,onChange:function(e){e.preventDefault(),o(e.target.value)}}),Object(r.jsx)("div",{className:"input-group-append",children:Object(r.jsx)("button",{className:"btn btn-secondary",type:"button",id:"button-comment",onClick:i,children:"+ Comment"})})]}),Object(r.jsx)(ce,{taskId:t})]})}function ie(){var e=Object(i.d)().taskId;return void 0===e?Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(re,{taskId:null})}):Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(re,{taskId:e}),Object(r.jsx)("h4",{className:"text-primary mt-3",children:"Comment List:"}),Object(r.jsx)(oe,{taskId:e})]})}function le(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{children:"404: Page not founh"})})}var ue=l.a.firestore(),de=function(){var e=Object(h.a)(p.a.mark((function e(t,a){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=ue.collection("users").doc(t),e.next=4,r.update(a);case 4:return e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}();function me(){var e=Object(i.d)().userId,t=Object(n.useState)({name:"",jobLevel:""}),a=Object(k.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)({name:"",jobLevel:""}),l=Object(k.a)(o,2),u=l[0],d=l[1],m=Object(n.useState)(null),b=Object(k.a)(m,2),j=b[0],f=b[1];function O(e){d(Object(g.a)(Object(g.a)({},u),{},Object(x.a)({},e.target.name,e.target.value)))}function v(){return(v=Object(h.a)(p.a.mark((function t(a){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),r={name:u.name,jobLevel:u.jobLevel},t.next=4,de(e,r);case 4:t.sent?(alert("record updated"),c(r)):f("Trouble updating the information. Please try again.");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function t(){return(t=Object(h.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q(e);case 2:a=t.sent,c({name:a.name,jobLevel:a.jobLevel}),d({name:a.name,jobLevel:a.jobLevel});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(n.useEffect)((function(){var e=document.querySelector("#submitButton");u.name===s.name&&u.jobLevel===s.jobLevel?e.attributes.setNamedItem(document.createAttribute("disabled")):e.hasAttribute("disabled")&&e.attributes.removeNamedItem("disabled")}),[u,s]),Object(r.jsx)("form",{className:"mt-3",onSubmit:function(e){return v.apply(this,arguments)},children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("div",{className:"col-lg-8",children:Object(r.jsx)("div",{className:"card bg-light",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h3",{className:"font-weight-light mb-3",children:"Edit User Information"}),Object(r.jsxs)("div",{className:"form-row",children:[j?Object(r.jsx)(y,{errorMessage:j}):null,Object(r.jsxs)("section",{className:"col-sm-12 form-group",children:[Object(r.jsx)("label",{className:"form-control-label sr-only",htmlFor:"name",children:"Name"}),Object(r.jsx)("input",{required:!0,autoComplete:"true",className:"form-control border border-primary",type:"text",id:"name",placeholder:"Name",name:"name",value:u.name,onChange:O})]})]}),Object(r.jsx)("div",{className:"form-row",children:Object(r.jsxs)("section",{className:"col-sm-12 form-group",children:[Object(r.jsx)("label",{className:"form-control-label sr-only",htmlFor:"name",children:"Job Level"}),Object(r.jsxs)("select",{className:"custom-select",name:"jobLevel",id:"jobLevel",value:u.jobLevel,onChange:O,required:!0,children:[Object(r.jsx)("option",{defaultValue:!0,value:"",children:"Job Level..."}),Object(r.jsx)("option",{value:"L1",children:"L1: General Employee"}),Object(r.jsx)("option",{value:"L2",children:"L2: Supervisor"})]})]})}),Object(r.jsx)("div",{className:"form-group text-right mb-0",children:Object(r.jsx)("button",{id:"submitButton",className:"btn btn-secondary",type:"submit",children:"Update Info"})})]})})})})})})}var be=function(e){var t=e.isLoading,a=e.isAuth,n=e.children;return t?Object(r.jsx)("div",{children:"Loading..."}):(a||Object(i.c)("/login"),n)},je=function(){var e=Object(n.useState)((function(){var e=P();return{isLoading:!e,authUser:e}})),t=Object(k.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e;return e=function(e){r({isLoading:!1,authUser:e})},l.a.auth().onAuthStateChanged((function(t){e(t?{id:t.uid,email:t.email}:null)}))}),[]),a};var pe=function(){var e=null,t=je(),a=t.authUser,s=t.isLoading;null!==a&&(e=a.id);var c=function(e){var t=Object(n.useState)(null),a=Object(k.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){if(null!==e&&void 0!==e){var t=l.a.firestore().collection("users").doc(e).onSnapshot((function(t){s(Object(g.a)({id:e},t.data()))}),(function(e){throw new Error("Error finding the user document: "+e.message)}));return function(){return t()}}s(null)}),[e]),r}(e);return Object(r.jsxs)("div",{id:"app",children:[Object(r.jsx)(O,{userObj:c}),Object(r.jsx)(m,{}),Object(r.jsxs)(i.b,{children:[Object(r.jsx)(v,{path:"/",isAuth:!!a}),Object(r.jsx)(w,{path:"login"}),Object(r.jsx)(E,{path:"register"}),Object(r.jsxs)(be,{path:"/",isLoading:s,isAuth:!!a,children:[Object(r.jsx)(G,{path:"dashboard"}),Object(r.jsx)(me,{path:"editUser/:userId"}),Object(r.jsx)(ie,{path:"editTask"}),Object(r.jsx)(ie,{path:"editTask/:taskId"}),Object(r.jsx)(le,{default:!0})]})]})]})},he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,55)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(pe,{})}),document.getElementById("root")),he()}},[[52,1,2]]]);
//# sourceMappingURL=main.d1d1acc2.chunk.js.map