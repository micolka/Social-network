(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{118:function(e,t,n){e.exports=n.p+"static/media/userDefaultPhoto.75a87902.png"},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return A})),n.d(t,"f",(function(){return O})),n.d(t,"c",(function(){return N})),n.d(t,"g",(function(){return y})),n.d(t,"b",(function(){return S}));var a=n(8),r=n.n(a),c=n(18),s=n(46),o=n(9),u=n(13),i="myReactSocialNet/usersReducer/FOLLOW",l="myReactSocialNet/usersReducer/UNFOLLOW",m="myReactSocialNet/usersReducer/SET-USERS",d="myReactSocialNet/usersReducer/SET-CURRENT-PAGE",p="myReactSocialNet/usersReducer/SET-USERS-TOTAL-COUNT",f="myReactSocialNet/usersReducer/TOGGLE-IS-FETCHING",g="myReactSocialNet/usersReducer/TOGGLE-IS-FOLLOWING-PROGRESS",h=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(o.a)({},e,{},a):e}))},b={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingQueie:[]},v=function(e){return{type:i,userId:e}},E=function(e){return{type:l,userId:e}},j=function(e){return{type:d,currentPage:e}},A=function(e){return{type:f,isFetching:e}},O=function(e,t){return{type:g,followingInProgress:e,UserID:t}},N=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(A(!0)),n.next=3,u.c.getUsers(e,t);case 3:c=n.sent,a(A(!1)),a((s=c.items,{type:m,users:s})),a((r=c.totalCount,{type:p,totalUsersCount:r}));case 7:case"end":return n.stop()}var r,s}),n)})));return function(e){return n.apply(this,arguments)}}()},U=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(O(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(c(n)),t(O(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),y=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U(n,e,u.c.unfollowUser.bind(u.c),E);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U(n,e,u.c.followUser.bind(u.c),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(o.a)({},e,{users:h(e.users,t.userId,"id",{followed:!0})});case l:return Object(o.a)({},e,{users:h(e.users,t.userId,"id",{followed:!1})});case m:return Object(o.a)({},e,{users:t.users});case d:return Object(o.a)({},e,{currentPage:t.currentPage});case p:return Object(o.a)({},e,{totalUsersCount:t.totalUsersCount});case f:return Object(o.a)({},e,{isFetching:t.isFetching});case g:return Object(o.a)({},e,{followingQueie:t.followingInProgress?[].concat(Object(s.a)(e.followingQueie),[t.UserID]):e.followingQueie.filter((function(e){return e!==t.UserID}))});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o}));var a=n(131),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"6a526b7b-f77a-432a-b7a4-40cad8b83d7b"}}),c={getAuthMe:function(){return r.get("/auth/me").then((function(e){return e.data}))},loginMe:function(e,t,n,a){return r.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},exitMe:function(){return r.delete("/auth/login").then((function(e){return e.data}))},getCaptchaURL:function(){return r.get("/security/get-captcha-url").then((function(e){return e.data}))}},s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollowUser:function(e){return r.delete("/follow/".concat(e)).then((function(e){return e.data}))},followUser:function(e){return r.post("/follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use ProfileAPI object."),o.getProfile(e)}},o={getProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("/profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("/profile/status",{status:e}).then((function(e){return e.data}))}}},137:function(e,t,n){e.exports=n.p+"static/media/ball-triangle.49c8c1d4.svg"},138:function(e,t){e.exports="data:image/png;base64,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"},14:function(e,t,n){e.exports={nav:"Navbar_nav__3K3FK",items:"Navbar_items__3vuzC",item:"Navbar_item__1HwlQ",activeLink:"Navbar_activeLink__2yH5U"}},164:function(e,t,n){e.exports=n(291)},247:function(e,t,n){},252:function(e,t,n){},290:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);n(96);var a=n(7),r=n(97),c=n(95),s=n(12),o=n(8),u=n.n(o),i=n(18),l=n(9),m=n(13),d=n(50),p="myReactSocialNet/authReducer/SET-USER-DATA",f="myReactSocialNet/authReducer/CLEAR-USER-DATA",g="myReactSocialNet/authReducer/SET-CAPTCHA-URL",h={userId:null,email:null,login:null,isAuthorised:!1,captchaURL:null},b=function(e,t,n){return{type:p,data:{userId:e,email:t,login:n}}},v=function(){return function(){var e=Object(i.a)(u.a.mark((function e(t){var n,a,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.getAuthMe();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,c=a.login,s=a.email,t(b(r,s,c)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(){return function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.getCaptchaURL();case 2:n=e.sent,t((a=n.url,{type:g,url:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)({},e,{},t.data,{isAuthorised:!0});case f:return{userId:null,email:null,login:null,isAuthorised:!1};case g:return Object(l.a)({},e,{captchaURL:t.url});default:return e}},A=n(132),O=n(130),N="myReactSocialNet/appReducer/SET-APP-INITIALISED",U={isInitialized:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(l.a)({},e,{isInitialized:!0});default:return e}},S=Object(a.c)({dialogsData:r.b,profileData:c.b,usersData:s.a,authData:j,appData:y,form:O.a}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,M=Object(a.e)(S,w(Object(a.a)(A.a))),P=n(0),R=n.n(P),k=n(67),C=n.n(k),I=n(27),x=n(28),L=n(30),D=n(29),K=n(31),F=(n(247),n(14)),T=n.n(F),Q=n(11),_=n(70),B=n.n(_),G=function(){return R.a.createElement("div",{className:B.a.friends},R.a.createElement("div",null,"Friends"),R.a.createElement("div",{className:B.a.item},R.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",alt:"ava1"}),R.a.createElement("div",null,"Pedro")),R.a.createElement("div",{className:B.a.item},R.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/users-avatars-2/128/superman-512.png",alt:"ava2"}),R.a.createElement("div",null,"Vasya")))},W=function(){return R.a.createElement("nav",{className:T.a.nav},R.a.createElement("div",{className:T.a.items},R.a.createElement("div",{className:T.a.item},R.a.createElement(Q.b,{to:"/profile",activeClassName:T.a.activeLink},"Profile")),R.a.createElement("div",{className:T.a.item},R.a.createElement(Q.b,{to:"/dialogs",activeClassName:T.a.activeLink},"Messages")),R.a.createElement("div",{className:T.a.item},R.a.createElement(Q.b,{to:"/news",activeClassName:T.a.activeLink},"News")),R.a.createElement("div",{className:T.a.item},R.a.createElement(Q.b,{to:"/musik",activeClassName:T.a.activeLink},"Musik")),R.a.createElement("div",{className:T.a.item},R.a.createElement(Q.b,{to:"/settings",activeClassName:T.a.activeLink},"Settings")),R.a.createElement("div",{className:T.a.item},R.a.createElement(Q.b,{to:"/users",activeClassName:T.a.activeLink},"Users"))),R.a.createElement(G,null))},z=function(){return R.a.createElement("div",null,"News")},q=function(){return R.a.createElement("div",null,"Musik")},V=function(){return R.a.createElement("div",null,"Settings")},J=n(34),Z=n(15),Y=n(47),X=n(48),H=n.n(X),$=n(118),ee=n.n($),te=n(71),ne=n.n(te),ae=function(e){var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[];if(e.currentPage<=5)for(var a=1;a<=9;a++)n.push(a);else if(e.currentPage>=t-5)for(var r=t-9;r<=t;r++)n.push(r);else for(var c=e.currentPage-5+1;c<=e.currentPage-5+9;c++)n.push(c);return R.a.createElement("div",{className:ne.a.selector},n.map((function(t){return R.a.createElement("span",{className:e.currentPage===t?ne.a.selectedPage:ne.a.restPages,onClick:function(){e.onPageChanged(t)}},t)})))},re=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.onPageChanged,r=e.currentPage,c=Object(Y.a)(e,["totalUsersCount","pageSize","onPageChanged","currentPage"]);return R.a.createElement("div",null,R.a.createElement(ae,{totalUsersCount:t,pageSize:n,currentPage:r,onPageChanged:a}),R.a.createElement("div",{className:H.a.UsersBox},c.users.map((function(e){return R.a.createElement("div",{className:H.a.userBlock},R.a.createElement("span",null,R.a.createElement("div",null,R.a.createElement(Q.b,{to:"/profile/"+e.id},R.a.createElement("img",{src:null!=e.photos.small?e.photos.small:ee.a,className:H.a.userPhoto,alt:"avas"}))),R.a.createElement("div",null,e.followed?R.a.createElement("button",{disabled:c.followingQueie.some((function(t){return t===e.id})),onClick:function(){c.unfollowUser(e.id)},className:H.a.btnFollow},"Unfollow"):R.a.createElement("button",{disabled:c.followingQueie.some((function(t){return t===e.id})),onClick:function(){c.followUser(e.id)},className:H.a.btnFollow},"Follow"))),R.a.createElement("span",null,R.a.createElement("div",null,e.name),R.a.createElement("div",null,e.status)))}))))},ce=n(136),se=function(e){return e.usersData.pageSize},oe=function(e){return e.usersData.totalUsersCount},ue=function(e){return e.usersData.currentPage},ie=function(e){return e.usersData.isFetching},le=function(e){return e.usersData.followingQueie},me=Object(ce.a)((function(e){return e.usersData.users}),(function(e){return e.filter((function(e){return!0}))})),de=function(e){function t(){var e,n;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(L.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){n.props.setCurrentPage(e),n.props.getUsers(e,n.props.pageSize)},n}return Object(K.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return R.a.createElement(R.a.Fragment,null,R.a.createElement(re,{currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followingQueie:this.props.followingQueie,toggleIsFollProgr:this.props.toggleIsFollowingProgress,unfollowUser:this.props.unfollowUserThunckCreator,followUser:this.props.followUserThunckCreator}))}}]),t}(R.a.Component),pe=Object(a.d)(Object(Z.b)((function(e){return{users:me(e),pageSize:se(e),totalUsersCount:oe(e),currentPage:ue(e),isFetching:ie(e),followingQueie:le(e)}}),{setCurrentPage:s.d,toggleIsFollowingProgress:s.f,getUsers:s.c,unfollowUserThunckCreator:s.g,followUserThunckCreator:s.b}))(de),fe=(n(252),n(49)),ge=n.n(fe),he=n(137),be=n.n(he),ve=function(){return R.a.createElement("img",{src:be.a,alt:"preloader"})},Ee=n(138),je=n.n(Ee),Ae=function(e){return R.a.createElement("header",{className:ge.a.header},R.a.createElement("img",{className:ge.a.logoImg,src:je.a,alt:"logo"}),R.a.createElement("div",{className:ge.a.preloader},e.isFetching?R.a.createElement(ve,null):null),R.a.createElement("div",{className:ge.a.loginBlock},e.isAuthorised?R.a.createElement("div",null,R.a.createElement("div",null,e.login),R.a.createElement("button",{className:ge.a.btnExit,onClick:function(){e.disconnectMe()}},"Exit")):R.a.createElement("div",{className:"navLogin"},R.a.createElement(Q.b,{to:"/login"},"Login"))))},Oe=function(e){function t(){return Object(I.a)(this,t),Object(L.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return R.a.createElement(Ae,this.props)}}]),t}(R.a.Component),Ne=Object(Z.b)((function(e){return{isAuthorised:e.authData.isAuthorised,login:e.authData.login,isFetching:e.usersData.isFetching}}),{disconnectMe:function(){return function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.exitMe();case 2:0===e.sent.resultCode&&t({type:f});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Oe),Ue=n(89),ye=n(129),Se=n(39),we=n(43),Me=n(35),Pe=n.n(Me),Re=Object(we.a)(30),ke=Object(we.a)(10),Ce=Object(ye.a)({form:"loginForm"})((function(e){var t=e.handleSubmit,n=e.captchaURL,a=e.error;return R.a.createElement("form",{onSubmit:t},Object(Se.c)("Login","login",Se.a,[we.b,Re],Pe.a.inputLogin),Object(Se.c)("Password","password",Se.a,[we.b,Re],Pe.a.inputLogin,{type:"password"}),R.a.createElement("div",{className:Pe.a.remMe},R.a.createElement(Ue.a,{component:"input",name:"rememberMe",type:"checkbox"}),"Remember me"),n&&R.a.createElement("div",null,Object(Se.c)("Captcha","captcha",Se.a,[we.b,ke],Pe.a.inputLogin),R.a.createElement("div",null,R.a.createElement("img",{src:n,alt:"captcha"}))),R.a.createElement("div",null,R.a.createElement("button",{className:Pe.a.btnLogin},"Login")),a&&R.a.createElement("div",{className:Pe.a.formError},a))})),Ie=function(e){return R.a.createElement("div",{className:Pe.a.loginCommon},R.a.createElement("h1",null,"LOGIN"),R.a.createElement(Ce,{onSubmit:function(t){var n=t.login,a=t.password,r=t.rememberMe,c=t.captcha;e.loginMe(n,a,r,c)},captchaURL:e.captchaURL}))},xe=function(e){function t(){return Object(I.a)(this,t),Object(L.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return this.props.isAuth?R.a.createElement(J.a,{to:"/profile"}):R.a.createElement(Ie,this.props)}}]),t}(R.a.Component),Le=Object(Z.b)((function(e){return{isAuth:e.authData.isAuthorised,captchaURL:e.authData.captchaURL}}),{loginMe:function(e,t,n,a){return function(){var r=Object(i.a)(u.a.mark((function r(c){var s,o;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.loginMe(e,t,n,a);case 2:0===(s=r.sent).resultCode?c(v()):(10===s.resultCode&&c(E()),o=s.messages.length>0?s.messages[0]:"Uncaught message!",c(Object(d.a)("loginForm",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})(xe),De=(n(290),function(){return R.a.createElement("div",{className:"cssload-loader"},R.a.createElement("div",{className:"cssload-inner cssload-one"}),R.a.createElement("div",{className:"cssload-inner cssload-two"}),R.a.createElement("div",{className:"cssload-inner cssload-three"}))}),Ke=R.a.lazy((function(){return n.e(4).then(n.bind(null,301))})),Fe=R.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),Te=function(e){function t(){return Object(I.a)(this,t),Object(L.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.isInit?R.a.createElement("div",{className:"app-wrapper"},R.a.createElement(Ne,null),R.a.createElement(W,null),R.a.createElement("div",{className:"app-wrapper-content"},R.a.createElement(P.Suspense,{fallback:R.a.createElement("div",null,R.a.createElement(ve,null))},R.a.createElement(J.b,{path:"/dialogs",render:function(){return R.a.createElement(Ke,null)}}),R.a.createElement(J.b,{path:"/profile/:userId?",render:function(){return R.a.createElement(Fe,null)}})),R.a.createElement(J.b,{path:"/news",render:function(){return R.a.createElement(z,null)}}),R.a.createElement(J.b,{path:"/musik",render:function(){return R.a.createElement(q,null)}}),R.a.createElement(J.b,{path:"/settings",render:function(){return R.a.createElement(V,null)}}),R.a.createElement(J.b,{path:"/users",render:function(){return R.a.createElement(pe,null)}}),R.a.createElement(J.b,{path:"/login",render:function(){return R.a.createElement(Le,null)}}))):R.a.createElement("div",{className:"preloaderWrapper"},R.a.createElement("div",{className:"preloaderTriangle"},R.a.createElement(De,null)))}}]),t}(R.a.Component),Qe=Object(a.d)(J.f,Object(Z.b)((function(e){return{isInit:e.appData.isInitialized}}),{initializeApp:function(){return function(e){var t=e(v());Promise.all([t]).then((function(){e({type:N})}))}}}))(Te);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));C.a.render(R.a.createElement(Q.a,null,R.a.createElement(Z.a,{store:M},R.a.createElement(Qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){e.exports={loginCommon:"Login_loginCommon__2vpgU",formError:"Login_formError__3eW9S",inputLogin:"Login_inputLogin__6By6x",inputPass:"Login_inputPass__dKgF1",remMe:"Login_remMe__1esjx",btnLogin:"Login_btnLogin__2O83E"}},39:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return d}));var a=n(47),r=n(0),c=n.n(r),s=n(92),o=n.n(s),u=n(89),i=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,s=Object(a.a)(e,["input","meta"]),u=n&&r;return c.a.createElement("div",{className:o.a.customTextArea+" "+(u?o.a.error:"")},s.children,c.a.createElement("div",null,u&&c.a.createElement("span",null,r)))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(i,e," ",c.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(i,e," ",c.a.createElement("input",Object.assign({},t,n)))},d=function(e,t,n,a,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return c.a.createElement("div",null,c.a.createElement(u.a,Object.assign({placeholder:e,name:t,component:n,validate:a,className:r},s)))}},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(!(t.length<=e))return"Max length is ".concat(e," symbols")}}},48:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2U4cp",UsersBox:"users_UsersBox__1V81Y",userBlock:"users_userBlock__3yTQA",selector:"users_selector__1i3hI",restPages:"users_restPages__TOnd2",selectedPage:"users_selectedPage__3uXQD",btnFollow:"users_btnFollow__9BZP3"}},49:function(e,t,n){e.exports={header:"Header_header__2SM_z",logoImg:"Header_logoImg__1kZFR",preloader:"Header_preloader__BmA3b",loginBlock:"Header_loginBlock__2wptP",btnExit:"Header_btnExit__3PrEG"}},70:function(e,t,n){e.exports={friends:"Friendsbar_friends__gdc4o",item:"Friendsbar_item__Ty9MI"}},71:function(e,t,n){e.exports={selector:"paginator_selector__3QTl5",restPages:"paginator_restPages__86jCY",selectedPage:"paginator_selectedPage__3k0dF"}},92:function(e,t,n){e.exports={customTextArea:"customTextArea_customTextArea__2Gv09",error:"customTextArea_error__1US7i"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return v}));var a=n(8),r=n.n(a),c=n(18),s=n(46),o=n(9),u=n(13),i=n(12),l="myReactSocialNet/profileReducer/ADD-POST",m="myReactSocialNet/profileReducer/SET-USER-PROFILE",d="myReactSocialNet/profileReducer/SET-STATUS",p={posts:[{id:1,message:"Hola! Como esta?",likeCount:23},{id:2,message:"Que pasa aqui?",likeCount:12},{id:3,message:"Vamos a la plalla",likeCount:50},{id:4,message:"Quiero salir a calle!",likeCount:2}],profile:null,status:""},f=function(e){return{type:l,postMessage:e}},g=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.e)(!0)),t.next=3,u.c.getProfile(e);case 3:a=t.sent,n({type:m,profile:a}),n(Object(i.e)(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.e)(!0)),t.next=3,u.b.getStatus(e);case 3:a=t.sent,n(g(a)),n(Object(i.e)(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(i.e)(!0)),t.next=3,u.b.updateStatus(e);case 3:0===t.sent.resultCode&&(n(g(e)),n(Object(i.e)(!1)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)({},e,{posts:[].concat(Object(s.a)(e.posts),[{id:5,message:t.postMessage,likeCount:0}]),textAreaValue:""});case m:return Object(o.a)({},e,{profile:t.profile});case d:return Object(o.a)({},e,{status:t.status});default:return e}}},96:function(e,t,n){},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(46),r=n(9),c="myReactSocialNet/dialogsReducer/ADD-DIALOG-MESSAGE",s={dialogs:[{id:1,name:"Juan"},{id:2,name:"Pedro"},{id:3,name:"Ramona"},{id:4,name:"Fernandes"},{id:5,name:"Alexandro"}],messages:[{id:1,message:"Hola!"},{id:2,message:"Como te llama?"},{id:3,message:"Cerdo)"},{id:4,message:"Quiero salir a calle!"}]},o=function(e){return{type:c,postMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:5,message:t.postMessage}])});default:return e}}}},[[164,1,2]]]);
//# sourceMappingURL=main.df706735.chunk.js.map