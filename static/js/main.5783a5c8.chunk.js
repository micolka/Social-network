(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return h}));var r=n(5),a=n.n(r),s=n(12),o=n(49),i=n(9),c=n(38),u=function(e,t,n){return e.map((function(e){return e.id===t?Object(i.a)({},e,{},n):e}))},l={users:[],pageSize:10,totalUsersCount:0,filterProps:{currentPage:1,friend:!1,allUsers:!0,term:""},isFetching:!1,followingQueie:[]},p={follow:function(e){return{type:"RSN/users/FOLLOW",userId:e}},unfollow:function(e){return{type:"RSN/users/UNFOLLOW",userId:e}},setUsers:function(e){return{type:"RSN/users/SET-USERS",users:e}},setCurrentPage:function(e){return{type:"RSN/users/SET-CURRENT-PAGE",currentPage:e}},setUsersFilter:function(e,t,n){return{type:"RSN/users/SET-USERS-FILTER",friend:e,allUsers:t,term:n}},setTotalUsersCount:function(e){return{type:"RSN/users/SET-USERS-TOTAL-COUNT",totalUsersCount:e}},toggleIsFetching:function(e){return{type:"RSN/users/TOGGLE-IS-FETCHING",isFetching:e}},toggleIsFollowingProgress:function(e,t){return{type:"RSN/users/TOGGLE-IS-FOLLOWING-PROGRESS",followingInProgress:e,userId:t}}},f=function(e,t,n,r){return function(){var o=Object(s.a)(a.a.mark((function s(o){var i;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o(p.toggleIsFetching(!0)),a.next=3,c.a.getUsers(e,t,n,r);case 3:i=a.sent,o(p.setUsers(i.items)),o(p.setTotalUsersCount(i.totalCount)),o(p.toggleIsFetching(!1));case 7:case"end":return a.stop()}}),s)})));return function(e){return o.apply(this,arguments)}}()},d=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(p.toggleIsFetching(!0)),t(p.toggleIsFollowingProgress(!0,n)),e.next=4,r(n);case 4:0===e.sent.resultCode&&t(s(n)),t(p.toggleIsFollowingProgress(!1,n)),t(p.toggleIsFetching(!1));case 8:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d(n,e,c.a.unfollowUser.bind(c.a),p.unfollow);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d(n,e,c.a.followUser.bind(c.a),p.follow);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RSN/users/FOLLOW":return Object(i.a)({},e,{users:u(e.users,t.userId,{followed:!0})});case"RSN/users/UNFOLLOW":return Object(i.a)({},e,{users:u(e.users,t.userId,{followed:!1})});case"RSN/users/SET-USERS":return Object(i.a)({},e,{users:t.users});case"RSN/users/SET-CURRENT-PAGE":return Object(i.a)({},e,{filterProps:Object(i.a)({},e.filterProps,{currentPage:t.currentPage})});case"RSN/users/SET-USERS-FILTER":return Object(i.a)({},e,{filterProps:Object(i.a)({},e.filterProps,{friend:t.friend,allUsers:t.allUsers,term:t.term})});case"RSN/users/SET-USERS-TOTAL-COUNT":return Object(i.a)({},e,{totalUsersCount:t.totalUsersCount});case"RSN/users/TOGGLE-IS-FETCHING":return Object(i.a)({},e,{isFetching:t.isFetching});case"RSN/users/TOGGLE-IS-FOLLOWING-PROGRESS":return Object(i.a)({},e,{followingQueie:t.followingInProgress?[].concat(Object(o.a)(e.followingQueie),[t.userId]):e.followingQueie.filter((function(e){return e!==t.userId}))});default:return e}}},100:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(49),a=n(9),s={dialogs:[{id:1,name:"Juan"},{id:2,name:"Pedro"},{id:3,name:"Ramona"},{id:4,name:"Fernandes"},{id:5,name:"Alexandro"}],messages:[{id:1,message:"Hola!"},{id:2,message:"Como te llama?"},{id:3,message:"Cerdo)"},{id:4,message:"Quiero salir a calle!"}]},o={addDialogMessage:function(e){return{type:"RSN/dialogs/ADD-DIALOG-MESSAGE",postMessage:e}}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RSN/dialogs/ADD-DIALOG-MESSAGE":return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:5,message:t.postMessage}])});default:return e}}},11:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return r}));var r,a=n(133),s=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"fa2f2c57-0831-4062-8c5f-c032c25a7a17"}});!function(e){e[e.Succes=0]="Succes",e[e.Error=1]="Error"}(r||(r={}))},139:function(e,t,n){e.exports=n.p+"static/media/ball-triangle.49c8c1d4.svg"},140:function(e,t){e.exports="data:image/png;base64,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"},16:function(e,t,n){e.exports={nav:"Navbar_nav__3K3FK",items:"Navbar_items__3vuzC",item:"Navbar_item__1HwlQ",activeLink:"Navbar_activeLink__2yH5U"}},166:function(e,t,n){e.exports=n(293)},17:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2U4cp",UsersBox:"users_UsersBox__1V81Y",selector:"users_selector__1i3hI",restItems:"users_restItems__1OAPV",selectedItem:"users_selectedItem__2FF4l",btnFollow:"users_btnFollow__9BZP3",searchBlock:"users_searchBlock__26BIs",searchInput:"users_searchInput__1-g6k",searchButton:"users_searchButton__cXGZF"}},249:function(e,t,n){},291:function(e,t,n){},292:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);n(99);var r,a=n(7),s=n(100),o=n(68),i=n(10),c=n(5),u=n.n(c),l=n(12),p=n(9),f=n(11);!function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}));var d=function(){return f.b.get("/auth/me").then((function(e){return e.data}))},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return f.b.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},h=function(){return f.b.delete("/auth/login").then((function(e){return e.data}))},g=function(){return f.b.get("/security/get-captcha-url").then((function(e){return e.data}))},E=n(32),v={userId:null,email:null,login:null,isAuthorised:!1,captchaURL:null},b=function(e,t,n){return{type:"RSN/auth/SET-USER-DATA",data:{userId:e,email:t,login:n}}},S=function(){return{type:"RSN/auth/CLEAR-USER-DATA"}},A=function(e){return{type:"RSN/auth/SET-CAPTCHA-URL",url:e}},O=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,a,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:(n=e.sent).resultCode===f.a.Succes&&(r=n.data,a=r.id,s=r.login,o=r.email,t(b(a,o,s)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:n=e.sent,t(A(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RSN/auth/SET-USER-DATA":return Object(p.a)({},e,{},t.data,{isAuthorised:!0});case"RSN/auth/CLEAR-USER-DATA":return{userId:null,email:null,login:null,isAuthorised:!1,captchaURL:null};case"RSN/auth/SET-CAPTCHA-URL":return Object(p.a)({},e,{captchaURL:t.url});default:return e}},N=n(134),I=n(132),P={isInitialized:!1},R=function(){return{type:"RSN/app/SET-APP-INITIALISED"}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RSN/app/SET-APP-INITIALISED":return Object(p.a)({},e,{isInitialized:!0});default:return e}},C=Object(a.c)({dialogsData:s.a,profileData:o.a,usersData:i.a,authData:j,appData:w,form:I.a}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,y=Object(a.e)(C,F(Object(a.a)(N.a)));window.store=y;var k=y,T=n(0),D=n.n(T),M=n(69),L=n.n(M),x=n(25),K=n(26),Q=n(28),G=n(27),_=n(29),B=(n(249),n(16)),z=n.n(B),W=n(15),q=n(94),V=n.n(q),Z=n(70),J=n.n(Z),Y=function(e){return e.isAuthorized?D.a.createElement("div",{className:V.a.friends},"My friends",e.friendsData.map((function(e){return D.a.createElement("div",{className:V.a.item,key:e.id},D.a.createElement("img",{src:null!=e.photos.small?e.photos.small:J.a,alt:"avaFr"}),D.a.createElement("div",null,e.name))}))):D.a.createElement(D.a.Fragment,null)},H=n(13),X=function(e){function t(){return Object(x.a)(this,t),Object(Q.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(K.a)(t,[{key:"componentDidMount",value:function(){this.props.isAuthorized&&this.props.getFriends()}},{key:"componentDidUpdate",value:function(e){this.props.isAuthorized&&!e.isAuthorized&&this.props.getFriends()}},{key:"render",value:function(){return D.a.createElement(D.a.Fragment,null,D.a.createElement(Y,{friendsData:this.props.friendsData,isAuthorized:this.props.isAuthorized}))}}]),t}(D.a.Component),$=Object(a.d)(Object(H.b)((function(e){return{friendsData:e.profileData.friendsData,isAuthorized:e.authData.isAuthorised}}),{getFriends:o.b}))(X),ee=function(){return D.a.createElement("nav",{className:z.a.nav},D.a.createElement("div",{className:z.a.items},D.a.createElement("div",{className:z.a.item},D.a.createElement(W.b,{to:"/profile",activeClassName:z.a.activeLink},"Profile")),D.a.createElement("div",{className:z.a.item},D.a.createElement(W.b,{to:"/dialogs",activeClassName:z.a.activeLink},"Messages")),D.a.createElement("div",{className:z.a.item},D.a.createElement(W.b,{to:"/news",activeClassName:z.a.activeLink},"News")),D.a.createElement("div",{className:z.a.item},D.a.createElement(W.b,{to:"/musik",activeClassName:z.a.activeLink},"Music")),D.a.createElement("div",{className:z.a.item},D.a.createElement(W.b,{to:"/settings",activeClassName:z.a.activeLink},"Settings")),D.a.createElement("div",{className:z.a.item},D.a.createElement(W.b,{to:"/users",activeClassName:z.a.activeLink},"Users"))),D.a.createElement($,null))},te=function(){return D.a.createElement("div",null,"News")},ne=function(){return D.a.createElement("div",null,"Music")},re=function(){return D.a.createElement("div",null,"Settings")},ae=n(37),se=n(54),oe=n(17),ie=n.n(oe),ce=n(74),ue=n.n(ce),le=function(e){var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=9,a=Math.round(r/2);if(r>t&&(r=t,a=t),e.currentPage<=a)for(var s=1;s<=r;s++)n.push(s);else if(e.currentPage>=t-a)for(var o=t-r;o<=t;o++)n.push(o);else for(var i=e.currentPage-a+1;i<=r+(e.currentPage-a);i++)n.push(i);return D.a.createElement("div",{className:ue.a.selector},n.map((function(t){return D.a.createElement("span",{className:e.currentPage===t?ue.a.selectedPage:ue.a.restPages,onClick:function(){e.onPageChanged(t)}},t)}))," Total items count: "+e.totalUsersCount)},pe=n(131),fe=n(30),de=Object(pe.a)({form:"searchForm"})((function(e){return D.a.createElement("form",{onSubmit:e.handleSubmit,className:ie.a.searchBlock},Object(fe.c)("Type to search","term",fe.a,[],ie.a.searchInput),D.a.createElement("button",{className:ie.a.searchButton},"Search"))})),me=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.onPageChanged,a=Object(se.a)(e,["totalUsersCount","pageSize","onPageChanged"]);return D.a.createElement("div",null,D.a.createElement("div",{className:ie.a.selector},a.isAuthorized&&D.a.createElement("div",null,D.a.createElement("span",{className:a.filterProps.allUsers?ie.a.selectedItem:ie.a.restItems,onClick:function(){a.onFilterChanged(!1,!0,a.filterProps.term)}},"All"),D.a.createElement("span",{className:a.filterProps.friend?ie.a.selectedItem:ie.a.restItems,onClick:function(){a.onFilterChanged(!0,!1,a.filterProps.term)}},"Friends"),D.a.createElement("span",{className:a.filterProps.friend||a.filterProps.allUsers?ie.a.restItems:ie.a.selectedItem,onClick:function(){a.onFilterChanged(!1,!1,a.filterProps.term)}},"Rest")),D.a.createElement(de,{initialValues:a.filterProps,onSubmit:function(e){var t=e.term;a.onFilterChanged(a.filterProps.friend,a.filterProps.allUsers,t)}})),D.a.createElement("div",{className:ie.a.UsersBox},a.users.map((function(e){return D.a.createElement("div",null,D.a.createElement("span",null,D.a.createElement("div",null,D.a.createElement(W.b,{to:"/profile/"+e.id},D.a.createElement("img",{src:null!=e.photos.small?e.photos.small:J.a,className:ie.a.userPhoto,alt:"avas"}))),D.a.createElement("div",null,e.followed?D.a.createElement("button",{disabled:a.followingQueie.some((function(t){return t===e.id})),onClick:function(){a.unfollowUser(e.id)},className:ie.a.btnFollow},"Unfollow"):D.a.createElement("button",{disabled:a.followingQueie.some((function(t){return t===e.id})),onClick:function(){a.followUser(e.id)},className:ie.a.btnFollow},"Follow"))),D.a.createElement("span",null,D.a.createElement("div",null,e.name)))}))),D.a.createElement(le,{totalUsersCount:t,pageSize:n,currentPage:a.filterProps.currentPage,onPageChanged:r}))},he=n(138),ge=function(e){return e.usersData.pageSize},Ee=function(e){return e.usersData.totalUsersCount},ve=function(e){return e.usersData.isFetching},be=function(e){return e.usersData.followingQueie},Se=Object(he.a)((function(e){return e.usersData.users}),(function(e){return e.filter((function(e){return!0}))})),Ae=function(e){function t(){var e,n;Object(x.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(Q.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){n.props.setCurrentPage(e)},n.onFilterChanged=function(e,t,r){n.props.setUsersFilter(e,t,r),n.props.setCurrentPage(1)},n.returnFriend=function(){return!!n.props.filterProps.friend||!!n.props.filterProps.allUsers&&void 0},n}return Object(_.a)(t,e),Object(K.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.filterProps.currentPage,this.props.pageSize,this.returnFriend(),this.props.filterProps.term)}},{key:"componentDidUpdate",value:function(e){this.props.filterProps!==e.filterProps&&this.props.getUsers(this.props.filterProps.currentPage,this.props.pageSize,this.returnFriend(),this.props.filterProps.term)}},{key:"render",value:function(){return D.a.createElement(D.a.Fragment,null,D.a.createElement(me,{onPageChanged:this.onPageChanged,users:this.props.users,followingQueie:this.props.followingQueie,unfollowUser:this.props.unfollowUserThunckCreator,followUser:this.props.followUserThunckCreator,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,onFilterChanged:this.onFilterChanged,filterProps:this.props.filterProps,isAuthorized:this.props.isAuthorized}))}}]),t}(D.a.Component),Oe=Object(a.d)(Object(H.b)((function(e){return{users:Se(e),pageSize:ge(e),totalUsersCount:Ee(e),isFetching:ve(e),followingQueie:be(e),filterProps:e.usersData.filterProps,isAuthorized:e.authData.isAuthorised}}),{setCurrentPage:i.e.setCurrentPage,setUsersFilter:i.e.setUsersFilter,getUsers:i.c,unfollowUserThunckCreator:i.d,followUserThunckCreator:i.b}))(Ae),Ue=(n(291),n(50)),je=n.n(Ue),Ne=n(72),Ie=n(140),Pe=n.n(Ie),Re=function(e){return D.a.createElement("header",{className:je.a.header},D.a.createElement("img",{className:je.a.logoImg,src:Pe.a,alt:"logo"}),D.a.createElement("div",{className:je.a.preloader},e.isFetching?D.a.createElement(Ne.a,null):null),D.a.createElement("div",{className:je.a.loginBlock},e.isAuthorised?D.a.createElement("div",null,D.a.createElement("div",null,e.login),D.a.createElement("button",{className:je.a.btnExit,onClick:function(){e.disconnectMe()}},"Exit")):D.a.createElement("div",{className:"navLogin"},D.a.createElement(W.b,{to:"/login"},"Login"))))},we=function(e){function t(){return Object(x.a)(this,t),Object(Q.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(K.a)(t,[{key:"render",value:function(){return D.a.createElement(Re,this.props)}}]),t}(D.a.Component),Ce=Object(H.b)((function(e){return{isAuthorised:e.authData.isAuthorised,login:e.authData.login,isFetching:e.usersData.isFetching}}),{disconnectMe:function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:e.sent.resultCode===f.a.Succes&&(t(S()),t(i.e.setCurrentPage(1)),t(i.e.setUsersFilter(!1,!0,"")));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(we),Fe=n(92),ye=n(48),ke=n(39),Te=n.n(ke),De=Object(ye.a)(30),Me=Object(ye.a)(10),Le=Object(pe.a)({form:"loginForm"})((function(e){var t=e.handleSubmit,n=e.captchaURL,r=e.error;return D.a.createElement("form",{onSubmit:t},Object(fe.c)("Login","login",fe.a,[ye.b,De],Te.a.inputLogin),Object(fe.c)("Password","password",fe.a,[ye.b,De],Te.a.inputLogin,{type:"password"}),D.a.createElement("div",{className:Te.a.remMe},D.a.createElement(Fe.a,{component:"input",name:"rememberMe",type:"checkbox"}),"Remember me"),n&&D.a.createElement("div",null,Object(fe.c)("Captcha","captcha",fe.a,[ye.b,Me],Te.a.inputLogin),D.a.createElement("div",null,D.a.createElement("img",{src:n,alt:"captcha"}))),D.a.createElement("div",null,D.a.createElement("button",{className:Te.a.btnLogin},"Login")),r&&D.a.createElement("div",{className:Te.a.formError},r))})),xe=function(e){return D.a.createElement("div",{className:Te.a.loginCommon},D.a.createElement("h1",null,"LOGIN"),D.a.createElement(Le,{onSubmit:function(t){var n=t.login,r=t.password,a=t.rememberMe,s=t.captcha;e.loginMe(n,r,a,s)},captchaURL:e.captchaURL}))},Ke=function(e){function t(){return Object(x.a)(this,t),Object(Q.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(K.a)(t,[{key:"render",value:function(){return this.props.isAuth?D.a.createElement(ae.a,{to:"/profile"}):D.a.createElement(xe,this.props)}}]),t}(D.a.Component),Qe=Object(H.b)((function(e){return{isAuth:e.authData.isAuthorised,captchaURL:e.authData.captchaURL}}),{loginMe:function(e,t,n,a){return function(){var s=Object(l.a)(u.a.mark((function s(o){var i,c;return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,m(e,t,n,a);case 2:(i=s.sent).resultCode===f.a.Succes?o(O()):(i.resultCode===r.CaptchaIsRequired&&o(U()),c=i.messages.length>0?i.messages[0]:"Uncaught message!",o(Object(E.a)("loginForm",{_error:c})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})(Ke),Ge=(n(292),function(){return D.a.createElement("div",{className:"cssload-loader"},D.a.createElement("div",{className:"cssload-inner cssload-one"}),D.a.createElement("div",{className:"cssload-inner cssload-two"}),D.a.createElement("div",{className:"cssload-inner cssload-three"}))}),_e=D.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),Be=D.a.lazy((function(){return n.e(3).then(n.bind(null,302))})),ze=function(e){function t(){var e,n;Object(x.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(Q.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(a)))).cathAllUnhandledErrors=function(){console.log("Some error ocured")},n}return Object(_.a)(t,e),Object(K.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.cathAllUnhandledErrors)}},{key:"componentWillMount",value:function(){window.removeEventListener("unhandledrejection",this.cathAllUnhandledErrors)}},{key:"render",value:function(){return this.props.isInit?D.a.createElement("div",{className:"app-wrapper"},D.a.createElement(Ce,null),D.a.createElement(ee,null),D.a.createElement("div",{className:"app-wrapper-content"},D.a.createElement(T.Suspense,{fallback:D.a.createElement("div",null,D.a.createElement(Ne.a,null))},D.a.createElement(ae.b,{path:"/dialogs",render:function(){return D.a.createElement(_e,null)}}),D.a.createElement(ae.b,{path:"/profile/:userId?",render:function(){return D.a.createElement(Be,null)}}),D.a.createElement(ae.b,{exact:!0,path:"/",render:function(){return D.a.createElement(ae.a,{to:"/profile"})}})),D.a.createElement(ae.b,{path:"/news",render:function(){return D.a.createElement(te,null)}}),D.a.createElement(ae.b,{path:"/musik",render:function(){return D.a.createElement(ne,null)}}),D.a.createElement(ae.b,{path:"/settings",render:function(){return D.a.createElement(re,null)}}),D.a.createElement(ae.b,{path:"/users",render:function(){return D.a.createElement(Oe,null)}}),D.a.createElement(ae.b,{path:"/login",render:function(){return D.a.createElement(Qe,null)}}))):D.a.createElement("div",{className:"preloaderWrapper"},D.a.createElement("div",{className:"preloaderTriangle"},D.a.createElement(Ge,null)))}}]),t}(D.a.Component),We=Object(a.d)(ae.f,Object(H.b)((function(e){return{isInit:e.appData.isInitialized}}),{initializeApp:function(){return function(e){var t=e(O());Promise.all([t]).then((function(){e(R())}))}}}))(ze);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));L.a.render(D.a.createElement(W.a,null,D.a.createElement(H.a,{store:k},D.a.createElement(We,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f}));var r=n(54),a=n(0),s=n.n(a),o=n(96),i=n.n(o),c=n(92),u=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,o=n&&r;return s.a.createElement("div",{className:i.a.customTextArea+" "+(o?i.a.error:"")},a,s.a.createElement("div",null,o&&s.a.createElement("span",null,r)))},l=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return s.a.createElement(u,e," ",s.a.createElement("textarea",Object.assign({},t,n)))},p=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return s.a.createElement(u,e," ",s.a.createElement("input",Object.assign({},t,n)))};function f(e,t,n,r,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return s.a.createElement("div",null,s.a.createElement(c.a,Object.assign({placeholder:e,name:t,component:n,validate:r,className:a},o)))}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(11),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return r.b.get("/users?page=".concat(e,"&count=").concat(t,"&term=").concat(a,"&friend=").concat(n)).then((function(e){return e.data}))},unfollowUser:function(e){return r.b.delete("/follow/".concat(e)).then((function(e){return e.data}))},followUser:function(e){return r.b.post("/follow/".concat(e)).then((function(e){return e.data}))}}},39:function(e,t,n){e.exports={loginCommon:"Login_loginCommon__2vpgU",formError:"Login_formError__3eW9S",inputLogin:"Login_inputLogin__6By6x",inputPass:"Login_inputPass__dKgF1",remMe:"Login_remMe__1esjx",btnLogin:"Login_btnLogin__2O83E"}},48:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(!(t.length<=e))return"Max length is ".concat(e," symbols")}}},50:function(e,t,n){e.exports={header:"Header_header__2SM_z",logoImg:"Header_logoImg__1kZFR",preloader:"Header_preloader__BmA3b",loginBlock:"Header_loginBlock__2wptP",btnExit:"Header_btnExit__3PrEG"}},68:function(e,t,n){"use strict";var r=n(5),a=n.n(r),s=n(12),o=n(49),i=n(9),c=n(11),u=function(e){return c.b.get("profile/".concat(e)).then((function(e){return e.data}))},l=function(e){return c.b.get("/profile/status/".concat(e)).then((function(e){return e.data}))},p=function(e){return c.b.put("/profile/status",{status:e}).then((function(e){return e.data}))},f=function(e){var t=new FormData;return t.append("image",e),c.b.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},d=function(e){return c.b.put("/profile",e).then((function(e){return e.data}))},m=n(10),h=n(32),g=n(38);n.d(t,"d",(function(){return v})),n.d(t,"f",(function(){return b})),n.d(t,"b",(function(){return S})),n.d(t,"g",(function(){return A})),n.d(t,"c",(function(){return O})),n.d(t,"h",(function(){return U})),n.d(t,"e",(function(){return j}));var E={posts:[{id:1,message:"Hola! Como esta?",likeCount:23},{id:2,message:"Que pasa aqui?",likeCount:12},{id:3,message:"Vamos a la plalla",likeCount:50},{id:4,message:"Quiero salir a calle!",likeCount:2}],profile:null,status:"",textAreaValue:"",friendsData:[]},v={addPost:function(e){return{type:"RSN/profile/ADD-POST",postMessage:e}},setUserProfile:function(e){return{type:"RSN/profile/SET-USER-PROFILE",profile:e}},setStatus:function(e){return{type:"RSN/profile/SET-STATUS",status:e}},setUserPhoto:function(e){return{type:"RSN/profile/SET-USER-PHOTO",photos:e}},setFriendsData:function(e){return{type:"RSN/profile/SET-FRIENDS-DATA",friendsData:e}},clearUserProfile:function(){return{type:"RSN/profile/CLEAR-USER-PROFILE"}}},b=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(m.e.toggleIsFetching(!0)),t.next=3,u(e);case 3:r=t.sent,n(v.setUserProfile(r)),n(m.e.toggleIsFetching(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3?arguments[3]:void 0;return function(){var o=Object(s.a)(a.a.mark((function s(o){var i;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.getUsers(e,t,n,r);case 2:i=a.sent,o(v.setFriendsData(i.items));case 4:case"end":return a.stop()}}),s)})));return function(e){return o.apply(this,arguments)}}()},A=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(m.e.toggleIsFetching(!0)),n.next=3,d(e);case 3:if(0!==(s=n.sent).resultCode){n.next=8;break}r(b(t)),n.next=12;break;case 8:if(1!==s.resultCode){n.next=12;break}return o=s.messages.length>0?s.messages[0]:"Uncaught message!",r(Object(h.a)("editProfileForm",{_error:o})),n.abrupt("return",Promise.reject(o));case 12:r(m.e.toggleIsFetching(!1));case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(m.e.toggleIsFetching(!0)),t.next=3,l(e);case 3:r=t.sent,n(v.setStatus(r)),n(m.e.toggleIsFetching(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(m.e.toggleIsFetching(!0)),t.prev=1,t.next=4,p(e);case 4:0===(r=t.sent).resultCode&&n(v.setStatus(e)),1===r.resultCode&&console.log("mas length 300"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("some err");case 12:n(m.e.toggleIsFetching(!1));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(m.e.toggleIsFetching(!0)),t.next=3,f(e);case 3:0===(r=t.sent).resultCode&&(n(v.setUserPhoto(r.data.photos)),n(m.e.toggleIsFetching(!1)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RSN/profile/ADD-POST":return Object(i.a)({},e,{posts:[].concat(Object(o.a)(e.posts),[{id:5,message:t.postMessage,likeCount:0}]),textAreaValue:""});case"RSN/profile/SET-USER-PROFILE":return Object(i.a)({},e,{profile:t.profile});case"RSN/profile/SET-STATUS":return Object(i.a)({},e,{status:t.status});case"RSN/profile/SET-USER-PHOTO":return Object(i.a)({},e,{profile:Object(i.a)({},e.profile,{photos:t.photos})});case"RSN/profile/CLEAR-USER-PROFILE":return Object(i.a)({},e,{profile:null});case"RSN/profile/SET-FRIENDS-DATA":return Object(i.a)({},e,{friendsData:t.friendsData});default:return e}}},70:function(e,t,n){e.exports=n.p+"static/media/userDefaultPhoto.75a87902.png"},72:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(139),o=n.n(s);t.a=function(){return a.a.createElement("img",{src:o.a,alt:"preloader"})}},74:function(e,t,n){e.exports={selector:"paginator_selector__3QTl5",restPages:"paginator_restPages__86jCY",selectedPage:"paginator_selectedPage__3k0dF"}},94:function(e,t,n){e.exports={friends:"Friendsbar_friends__gdc4o",item:"Friendsbar_item__Ty9MI"}},96:function(e,t,n){e.exports={customTextArea:"customTextArea_customTextArea__2Gv09",error:"customTextArea_error__1US7i"}},99:function(e,t,n){}},[[166,1,2]]]);
//# sourceMappingURL=main.5783a5c8.chunk.js.map