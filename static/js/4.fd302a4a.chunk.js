(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{293:function(e,a,t){"use strict";t.d(a,"a",(function(){return _}));var s=t(53),n=t(30),i=t(31),o=t(33),c=t(32),l=t(34),r=t(0),m=t.n(r),g=t(37),u=t(17),d=function(e){return{isAuth:e.authData.isAuthorised}},_=function(e){var a=function(a){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,a),Object(i.a)(t,[{key:"render",value:function(){var a=this.props,t=a.isAuth,n=Object(s.a)(a,["isAuth"]);return t?m.a.createElement(e,n):m.a.createElement(g.a,{to:"/login"})}}]),t}(m.a.Component);return Object(u.b)(d)(a)}},295:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__12HX7",dialogsItems:"Dialogs_dialogsItems__2EKR9",active:"Dialogs_active__2OfC7",messages:"Dialogs_messages__1O0BJ",inputMessage:"Dialogs_inputMessage__3SgSD",btnSendMessage:"Dialogs_btnSendMessage__2EXCb"}},296:function(e,a,t){e.exports={dialogs:"DialogItem_dialogs__2Cr-H",dialogsItems:"DialogItem_dialogsItems__P02DH",active:"DialogItem_active__3hPhD"}},297:function(e,a,t){e.exports={messages:"Message_messages__pbb-I",message:"Message_message__1yHBd"}},302:function(e,a,t){"use strict";t.r(a);var s=t(98),n=t(0),i=t.n(n),o=t(295),c=t.n(o),l=t(296),r=t.n(l),m=t(14),g=function(e){return i.a.createElement("div",{className:r.a.dialogsItems},i.a.createElement(m.b,{to:"/dialogs/"+e.id},e.name))},u=t(297),d=t.n(u),_=function(e){return i.a.createElement("div",{className:d.a.message},i.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png",alt:"ninja"}),i.a.createElement("span",null,e.message))},b=t(130),p=t(47),f=t(25),D=Object(p.a)(100),v=Object(b.a)({form:"sendMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,Object(f.c)("Say hello to momy!","messTxtValue",f.b,[p.b,D],c.a.inputMessage)),i.a.createElement("div",null,i.a.createElement("button",{className:c.a.btnSendMessage},"Send")))})),E=function(e){var a=e.dialogsData.dialogs.map((function(e){return i.a.createElement(g,{name:e.name,id:e.id})})),t=e.dialogsData.messages.map((function(e){return i.a.createElement(_,{message:e.message,id:e.id})}));return i.a.createElement("div",{className:c.a.dialogs},i.a.createElement("div",{className:c.a.dialogsItems},a),i.a.createElement("div",{className:c.a.messages},t,i.a.createElement(v,{onSubmit:function(a){var t=a.messTxtValue;e.addDialogMessage(t)}})))},h=t(17),j=t(293),O=t(8);a.default=Object(O.d)(Object(h.b)((function(e){return{dialogsData:e.dialogsData}}),{addDialogMessage:s.b.addDialogMessage}),j.a)(E)}}]);
//# sourceMappingURL=4.fd302a4a.chunk.js.map