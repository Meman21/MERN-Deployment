(this.webpackJsonppet_shelter=this.webpackJsonppet_shelter||[]).push([[0],{26:function(e,t,a){e.exports=a(57)},31:function(e,t,a){},38:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(20),r=a.n(c),u=(a(31),a(2)),i=(a(38),a(8),a(1)),o=a(3),s=a.n(o),m=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),p=m[0],b=m[1],E=Object(n.useState)(""),d=Object(i.a)(E,2),h=d[0],f=d[1],j=Object(n.useState)(""),O=Object(i.a)(j,2),g=O[0],v=O[1],k=Object(n.useState)(""),y=Object(i.a)(k,2),S=y[0],C=y[1],x=Object(n.useState)(""),w=Object(i.a)(x,2),P=w[0],D=w[1],N=Object(n.useState)({}),A=Object(i.a)(N,2),_=A[0],q=A[1];return l.a.createElement("div",{class:"container"},l.a.createElement("form",{id:"contact",onSubmit:function(e){e.preventDefault();var t={name:c,type:p,description:h,skill1:g,skill2:S,skill3:P};s.a.post("http://localhost:8000/api/pets",t).then((function(e){e.data.errors?q(e.data.errors):Object(u.c)("/pets")})).catch((function(e){return console.log(e)}))}},l.a.createElement("fieldset",null,"\xa0",l.a.createElement("input",{placeholder:"Pet name:",type:"text",tabindex:"1",required:!0,autofocus:!0,onChange:function(e){return r(e.target.value)}}),l.a.createElement("p",null,l.a.createElement("span",{style:{color:"red"}},_.type?_.type.message:""))),l.a.createElement("fieldset",null,"\xa0",l.a.createElement("input",{placeholder:"Pet Type",type:"text",tabindex:"2",required:!0,onChange:function(e){return b(e.target.value)}}),l.a.createElement("p",null,l.a.createElement("span",{style:{color:"red"}},_.type?_.type.message:""))),l.a.createElement("fieldset",null,"\xa0",l.a.createElement("input",{placeholder:"Descrption",type:"text",tabindex:"3",required:!0,onChange:function(e){return f(e.target.value)}}),l.a.createElement("p",null,l.a.createElement("span",{style:{color:"red"}},_.description?_.description.message:""))),l.a.createElement("fieldset",null,"\xa0",l.a.createElement("input",{placeholder:"Skill 1",type:"text",tabindex:"4",required:!0,onChange:function(e){return v(e.target.value)}})),l.a.createElement("fieldset",null,"\xa0",l.a.createElement("input",{placeholder:"Skill 2",type:"text",tabindex:"4",required:!0,onChange:function(e){return C(e.target.value)}})),l.a.createElement("fieldset",null,"\xa0",l.a.createElement("input",{placeholder:"Skill 3",type:"text",tabindex:"4",required:!0,onChange:function(e){return D(e.target.value)}})),l.a.createElement("fieldset",null,"\xa0",l.a.createElement("button",{name:"submit",type:"submit",id:"contact-submit","data-submit":"...Sending"},"Add pet"),l.a.createElement(u.a,{to:"/pets"},"Cancel"))))},p=a(9),b=function(e){e.removeFromDom;var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=(a[0],a[1],Object(n.useState)([])),r=Object(i.a)(c,2),o=(r[0],r[1],Object(n.useState)("Ascending")),m=Object(i.a)(o,2),b=(m[0],m[1],Object(n.useState)({})),E=Object(i.a)(b,2),d=(E[0],E[1]);return Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets/"+e.id).then((function(e){return d(Object(p.a)({},e.data))}))}),[]),l.a.createElement("div",null,e.pet.map((function(e,t){return l.a.createElement("div",{class:"container"},l.a.createElement("table",{class:"table table-sm table-striped table-bordered"},l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Actions")),l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,l.a.createElement(u.a,{to:"/pets/"+e._id},"Details"),"\xa0\xa0\xa0\xa0\xa0\xa0",l.a.createElement(u.a,{to:"/pets/"+e._id+"/edit"},"Edit")))),l.a.createElement("br",null))})))},E=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),m=o[0],p=o[1],E=Object(n.useState)([]),d=Object(i.a)(E,2),h=(d[0],d[1]),f=Object(n.useState)("Ascending"),j=Object(i.a)(f,2);j[0],j[1];Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets").then((function(e){c(e.data),p(!0),h(e.data)})).catch((function(e){return console.log("Error: ",e)}))}),[]);return l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron jumbotron-fluid",style:{backgroundColor:"yellow"}}," ",l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Pet Shelter"),l.a.createElement("h4",null,"These pets are looking for a home!"))),l.a.createElement(u.a,{to:"/pets/new"},l.a.createElement("h1",null,"Add a Pet to the Shelter")),l.a.createElement("br",null),l.a.createElement("br",null),m&&l.a.createElement(b,{pet:a,removeFromDom:function(e){c(a.filter((function(t){return t._id!=e})))}}))},d=a(22),h=a(23),f=a(24),j=a(25),O=function(e){Object(j.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).vote=function(e){n.setState({likes:n.state.likes+1})},n.state={likes:0},n}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Likes: ",this.state.likes),l.a.createElement("button",{class:"btn btn-warning",disabled:this.state.likes,onClick:this.vote,id:this.props.petId},"Like this pet"))}}]),a}(n.Component),g=function(e){e.removeFromDom;var t=Object(n.useState)({}),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets/"+e.id).then((function(e){return r(Object(p.a)({},e.data))}))}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron jumbotron-fluid",style:{backgroundColor:"lightgreen"}},l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Pet Shelter"),l.a.createElement("h4",null,"Details about ",c.name)),l.a.createElement("p",null,"Pet type: ",c.type),l.a.createElement("p",null,"Description: ",c.description),l.a.createElement("p",null,"Skills:",l.a.createElement("p",null,c.skill1),l.a.createElement("p",null,c.skill2),l.a.createElement("p",null,c.skill3)),l.a.createElement(O,{petId:c.id}),l.a.createElement("br",null),l.a.createElement("button",{class:"btn btn-danger",onClick:function(e){var t;t=c._id,s.a.delete("http://localhost:8000/api/pets/"+t).then((function(e){Object(u.c)("/pets")}))}},"Adopt this pet!"),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement(u.a,{to:"/pets"},"Home"))},v=function(e){var t=e.id,a=Object(n.useState)(),c=Object(i.a)(a,2),r=c[0],o=c[1],m=Object(n.useState)(),p=Object(i.a)(m,2),b=p[0],E=p[1],d=Object(n.useState)(),h=Object(i.a)(d,2),f=h[0],j=h[1],O=Object(n.useState)(),g=Object(i.a)(O,2),v=g[0],k=g[1],y=Object(n.useState)(),S=Object(i.a)(y,2),C=S[0],x=S[1],w=Object(n.useState)(),P=Object(i.a)(w,2),D=P[0],N=P[1],A=Object(n.useState)({}),_=Object(i.a)(A,2),q=_[0],F=_[1];Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets/"+t).then((function(e){o(e.data.name),E(e.data.type),j(e.data.description),k(e.data.skill1),x(e.data.skill2),N(e.data.skill3)}))}),[]);return l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron jumbotron-fluid",style:{backgroundColor:"lightgreen"}}," ",l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Pet Shelter"),l.a.createElement("h4",null,"Edit this pet"))),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();s.a.put("http://localhost:8000/api/pets/"+t,{name:r,type:b,description:f,skill1:v,skill2:C,skill3:D}).then((function(e){e.data.errors?F(e.data.errors):Object(u.c)("/pets/"+t)}))}},l.a.createElement("p",null,l.a.createElement("label",null,"Pet name:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"name",value:r,onChange:function(e){o(e.target.value)}}),l.a.createElement("span",null,q.name?q.name.message:"")),l.a.createElement("p",null,l.a.createElement("label",null,"Pet type:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"type",value:b,onChange:function(e){E(e.target.value)}}),l.a.createElement("span",null,q.type?q.type.message:"")),l.a.createElement("p",null,l.a.createElement("label",null,"Description:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"description",value:f,onChange:function(e){j(e.target.value)}}),l.a.createElement("span",null,q.description?q.description.message:"")),l.a.createElement("p",null,"Skills (optional)"),l.a.createElement("p",null,l.a.createElement("label",null,"Skill 1:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"skill1",value:v,onChange:function(e){k(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Skill 2:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"skill2",value:C,onChange:function(e){x(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Skill 3:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"skill3",value:D,onChange:function(e){N(e.target.value)}})),l.a.createElement("button",{class:"btn btn-primary",type:"submit"},"Edit pet"),"\xa0",l.a.createElement(u.a,{to:"/pets"},"Cancel")),l.a.createElement("br",null),l.a.createElement(u.a,{to:"/pets"},"Home"))},k=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(!1),r=Object(i.a)(c,2),u=(r[0],r[1]);Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets").then((function(e){a(e.data),u(!0)})).catch((function(e){return console.log("Error: ",e)}))}),[]);return l.a.createElement("div",{className:"jumbotron jumbotron-fluid",style:{backgroundColor:"stone"}}," ",l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement("h4",null,"Know of a Pet needing a home?"),l.a.createElement(m,null)))};a(56);var y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u.b,null,l.a.createElement(E,{path:"/pets"}),l.a.createElement(k,{path:"/pets/new"}),l.a.createElement(g,{path:"/pets/:id"}),l.a.createElement(v,{path:"/pets/:id/edit"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.c711d7ba.chunk.js.map