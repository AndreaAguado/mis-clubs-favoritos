(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{11:function(e,n,c){},13:function(e,n,c){"use strict";c.r(n);var t=c(2),s=c(5),a=c.n(s),r=c(1),d=c(4),o=(c(11),c(6)),i=c(0);var l=function(){var e=Object(t.useState)(o),n=Object(d.a)(e,2),c=n[0],s=(n[1],Object(t.useState)({name:"",openOnWeekdays:"",openOnWeekend:""})),a=Object(d.a)(s,2),l=a[0],b=a[1],j=function(e){"name"===e.currentTarget.id?b(Object(r.a)(Object(r.a)({},l),{},{name:e.currentTarget.value})):"openOnWeekdays"===e.currentTarget.id?b(Object(r.a)(Object(r.a)({},l),{},{openOnWeekdays:e.currentTarget.checked})):"openOnWeekend"===e.currentTarget.id&&b(Object(r.a)(Object(r.a)({},l),{},{openOnWeekend:e.currentTarget.checked}))};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{children:"Mis Clubs"}),Object(i.jsxs)("form",{action:"",children:[Object(i.jsx)("label",{htmlFor:"schedule",children:"Mostrar"}),Object(i.jsxs)("select",{name:"schedule",id:"schedule",children:[Object(i.jsx)("option",{value:"everyday",children:"Todos"}),Object(i.jsx)("option",{value:"openOnWeekdays",children:"Los que abren entre semana"}),Object(i.jsx)("option",{value:"openOnWeekend",children:"Los que abren en fin de semana"})]})]})]}),Object(i.jsxs)("main",{children:[Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:c.map((function(e,n){return Object(i.jsx)("li",{id:n,children:Object(i.jsxs)("div",{className:"club",children:[Object(i.jsxs)("h3",{children:["#",n," ",e.name]}),Object(i.jsxs)("p",{children:["Abierto entre semana: ",e.openOnWeekdays="Si"]}),Object(i.jsxs)("p",{children:["Abierto el fin de semana: ",e.openOnWeekend="Si"]})]})},n)}))})}),Object(i.jsxs)("section",{children:[Object(i.jsx)("h2",{children:"A\xf1adir un nuevo club"}),Object(i.jsxs)("form",{className:"addClub",action:"",children:[Object(i.jsx)("label",{htmlFor:"name",children:"Nombre del club"}),Object(i.jsx)("input",{onChange:j,id:"name",type:"text",value:l.name}),Object(i.jsxs)("div",{className:"checkboxes",children:[Object(i.jsxs)("label",{htmlFor:"openOnWeekdays",children:["\xbfAbre entre semana?",Object(i.jsx)("input",{onChange:j,className:"input",type:"checkbox",name:"openOnWeekdays",id:"openOnWeekdays",checked:l.openOnWeekdays})]}),Object(i.jsxs)("label",{htmlFor:"openOnWeekend",children:["\xbfAbre los fines de semana?",Object(i.jsx)("input",{onChange:j,className:"input",type:"checkbox",name:"openOnWeekend",id:"openOnWeekend",checked:l.openOnWeekend})]})]}),Object(i.jsx)("input",{onClick:function(e){e.preventDefault()},className:"submit",type:"submit",value:"A\xf1adir un nuevo club"})]})]})]})]})};a.a.render(Object(i.jsx)(l,{}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[13,1,2]]]);
//# sourceMappingURL=main.6004a6ae.chunk.js.map