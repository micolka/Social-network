(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){"use strict";var r=n(6),a=n.n(r),s=n(13),o=n(48),c=n(9),i=n(11),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return i.b.get("/users?page=".concat(e,"&count=").concat(t,"&term=").concat(r,"&friend=").concat(n)).then((function(e){return e.data}))},unfollowUser:function(e){return i.b.delete("/follow/".concat(e)).then((function(e){return e.data}))},followUser:function(e){return i.b.post("/follow/".concat(e)).then((function(e){return e.data}))}};n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return g})),n.d(t,"b",(function(){return h}));var l=function(e,t,n){return e.map((function(e){return e.id===t?Object(c.a)({},e,{},n):e}))},p={users:[],pageSize:10,totalUsersCount:0,filterProps:{currentPage:1,friend:!1,allUsers:!0,term:""},isFetching:!1,followingQueie:[]},f={follow:function(e){return{type:"RSN/users/FOLLOW",userId:e}},unfollow:function(e){return{type:"RSN/users/UNFOLLOW",userId:e}},setUsers:function(e){return{type:"RSN/users/SET-USERS",users:e}},setCurrentPage:function(e){return{type:"RSN/users/SET-CURRENT-PAGE",currentPage:e}},setUsersFilter:function(e,t,n){return{type:"RSN/users/SET-USERS-FILTER",friend:e,allUsers:t,term:n}},setTotalUsersCount:function(e){return{type:"RSN/users/SET-USERS-TOTAL-COUNT",totalUsersCount:e}},toggleIsFetching:function(e){return{type:"RSN/users/TOGGLE-IS-FETCHING",isFetching:e}},toggleIsFollowingProgress:function(e,t){return{type:"RSN/users/TOGGLE-IS-FOLLOWING-PROGRESS",followingInProgress:e,userId:t}}},d=function(e,t,n,r){return function(){var o=Object(s.a)(a.a.mark((function s(o){var c;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o(f.toggleIsFetching(!0)),a.next=3,u.getUsers(e,t,n,r);case 3:c=a.sent,o(f.setUsers(c.items)),o(f.setTotalUsersCount(c.totalCount)),o(f.toggleIsFetching(!1));case 7:case"end":return a.stop()}}),s)})));return function(e){return o.apply(this,arguments)}}()},m=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(f.toggleIsFetching(!0)),t(f.toggleIsFollowingProgress(!0,n)),e.next=4,r(n);case 4:0===e.sent.resultCode&&t(s(n)),t(f.toggleIsFollowingProgress(!1,n)),t(f.toggleIsFetching(!1));case 8:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m(n,e,u.unfollowUser.bind(u),f.unfollow);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m(n,e,u.followUser.bind(u),f.follow);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RSN/users/FOLLOW":return Object(c.a)({},e,{users:l(e.users,t.userId,{followed:!0})});case"RSN/users/UNFOLLOW":return Object(c.a)({},e,{users:l(e.users,t.userId,{followed:!1})});case"RSN/users/SET-USERS":return Object(c.a)({},e,{users:t.users});case"RSN/users/SET-CURRENT-PAGE":return Object(c.a)({},e,{filterProps:Object(c.a)({},e.filterProps,{currentPage:t.currentPage})});case"RSN/users/SET-USERS-FILTER":return Object(c.a)({},e,{filterProps:Object(c.a)({},e.filterProps,{friend:t.friend,allUsers:t.allUsers,term:t.term})});case"RSN/users/SET-USERS-TOTAL-COUNT":return Object(c.a)({},e,{totalUsersCount:t.totalUsersCount});case"RSN/users/TOGGLE-IS-FETCHING":return Object(c.a)({},e,{isFetching:t.isFetching});case"RSN/users/TOGGLE-IS-FOLLOWING-PROGRESS":return Object(c.a)({},e,{followingQueie:t.followingInProgress?[].concat(Object(o.a)(e.followingQueie),[t.userId]):e.followingQueie.filter((function(e){return e!==t.userId}))});default:return e}}},11:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return r}));var r,a=n(132),s=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"6a526b7b-f77a-432a-b7a4-40cad8b83d7b"}});!function(e){e[e.Succes=0]="Succes",e[e.Error=1]="Error"}(r||(r={}))},119:function(e,t,n){e.exports=n.p+"static/media/userDefaultPhoto.75a87902.png"},138:function(e,t,n){e.exports=n.p+"static/media/ball-triangle.49c8c1d4.svg"},139:function(e,t){e.exports="data:image/png;base64,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"},15:function(e,t,n){e.exports={nav:"Navbar_nav__3K3FK",items:"Navbar_items__3vuzC",item:"Navbar_item__1HwlQ",activeLink:"Navbar_activeLink__2yH5U"}},16:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2U4cp",UsersBox:"users_UsersBox__1V81Y",selector:"users_selector__1i3hI",restItems:"users_restItems__1OAPV",selectedItem:"users_selectedItem__2FF4l",btnFollow:"users_btnFollow__9BZP3",searchBlock:"users_searchBlock__26BIs",searchInput:"users_searchInput__1-g6k",searchButton:"users_searchButton__cXGZF"}},165:function(e,t,n){e.exports=n(292)},248:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f}));var r=n(53),a=n(0),s=n.n(a),o=n(93),c=n.n(o),i=n(90),u=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,o=n&&r;return s.a.createElement("div",{className:c.a.customTextArea+" "+(o?c.a.error:"")},a,s.a.createElement("div",null,o&&s.a.createElement("span",null,r)))},l=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return s.a.createElement(u,e," ",s.a.createElement("textarea",Object.assign({},t,n)))},p=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return s.a.createElement(u,e," ",s.a.createElement("input",Object.assign({},t,n)))};function f(e,t,n,r,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return s.a.createElement("div",null,s.a.createElement(i.a,Object.assign({placeholder:e,name:t,component:n,validate:r,className:a},o)))}},290:function(e,t,n){},291:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);n(97);var r,a=n(8),s=n(98),o=n(96),c=n(10),i=n(6),u=n.n(i),l=n(13),p=n(9),f=n(11);!function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}));var d=function(){return f.b.get("/auth/me").then((function(e){return e.data}))},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return f.b.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},g=function(){return f.b.delete("/auth/login").then((function(e){return e.data}))},h=function(){return f.b.get("/security/get-captcha-url").then((function(e){return e.data}))},E=n(27),v={userId:null,email:null,login:null,isAuthorised:!1,captchaURL:null},b=function(e,t,n){return{type:"RSN/auth/SET-USER-DATA",data:{userId:e,email:t,login:n}}},S=function(){return{type:"RSN/auth/CLEAR-USER-DATA"}},A=function(e){return{type:"RSN/auth/SET-CAPTCHA-URL",url:e}},U=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,a,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:(n=e.sent).resultCode===f.a.Succes&&(r=n.data,a=r.id,s=r.login,o=r.email,t(b(a,o,s)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:n=e.sent,t(A(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RSN/auth/SET-USER-DATA":return Object(p.a)({},e,{},t.data,{isAuthorised:!0});case"RSN/auth/CLEAR-USER-DATA":return{userId:null,email:null,login:null,isAuthorised:!1,captchaURL:null};case"RSN/auth/SET-CAPTCHA-URL":return Object(p.a)({},e,{captchaURL:t.url});default:return e}},j=n(133),P=n(131),I={isInitialized:!1},R=function(){return{type:"RSN/app/SET-APP-INITIALISED"}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RSN/app/SET-APP-INITIALISED":return Object(p.a)({},e,{isInitialized:!0});default:return e}},C=Object(a.c)({dialogsData:s.a,profileData:o.a,usersData:c.a,authData:N,appData:w,form:P.a}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,k=Object(a.e)(C,F(Object(a.a)(j.a)));window.store=k;var y=k,T=n(0),M=n.n(T),L=n(67),x=n.n(L),D=n(30),K=n(31),Q=n(33),G=n(32),_=n(34),B=(n(248),n(15)),W=n.n(B),z=n(14),q=n(71),V=n.n(q),Z=function(){return M.a.createElement("div",{className:V.a.friends},M.a.createElement("div",null,"Friends"),M.a.createElement("div",{className:V.a.item},M.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",alt:"ava1"}),M.a.createElement("div",null,"Pedro")),M.a.createElement("div",{className:V.a.item},M.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/users-avatars-2/128/superman-512.png",alt:"ava2"}),M.a.createElement("div",null,"Vasya")))},J=function(){return M.a.createElement("nav",{className:W.a.nav},M.a.createElement("div",{className:W.a.items},M.a.createElement("div",{className:W.a.item},M.a.createElement(z.b,{to:"/profile",activeClassName:W.a.activeLink},"Profile")),M.a.createElement("div",{className:W.a.item},M.a.createElement(z.b,{to:"/dialogs",activeClassName:W.a.activeLink},"Messages")),M.a.createElement("div",{className:W.a.item},M.a.createElement(z.b,{to:"/news",activeClassName:W.a.activeLink},"News")),M.a.createElement("div",{className:W.a.item},M.a.createElement(z.b,{to:"/musik",activeClassName:W.a.activeLink},"Music")),M.a.createElement("div",{className:W.a.item},M.a.createElement(z.b,{to:"/settings",activeClassName:W.a.activeLink},"Settings")),M.a.createElement("div",{className:W.a.item},M.a.createElement(z.b,{to:"/users",activeClassName:W.a.activeLink},"Users"))),M.a.createElement(Z,null))},Y=function(){return M.a.createElement("div",null,"News")},H=function(){return M.a.createElement("div",null,"Music")},X=function(){return M.a.createElement("div",null,"Settings")},$=n(37),ee=n(17),te=n(53),ne=n(16),re=n.n(ne),ae=n(119),se=n.n(ae),oe=n(72),ce=n.n(oe),ie=function(e){var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=9,a=Math.round(r/2);if(r>t&&(r=t,a=t),e.currentPage<=a)for(var s=1;s<=r;s++)n.push(s);else if(e.currentPage>=t-a)for(var o=t-r;o<=t;o++)n.push(o);else for(var c=e.currentPage-a+1;c<=r+(e.currentPage-a);c++)n.push(c);return M.a.createElement("div",{className:ce.a.selector},n.map((function(t){return M.a.createElement("span",{className:e.currentPage===t?ce.a.selectedPage:ce.a.restPages,onClick:function(){e.onPageChanged(t)}},t)})))},ue=n(130),le=n(25),pe=Object(ue.a)({form:"searchForm"})((function(e){return M.a.createElement("form",{onSubmit:e.handleSubmit,className:re.a.searchBlock},Object(le.c)("Type to search","term",le.a,[],re.a.searchInput),M.a.createElement("button",{className:re.a.searchButton},"Search"))})),fe=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.onPageChanged,a=Object(te.a)(e,["totalUsersCount","pageSize","onPageChanged"]);return M.a.createElement("div",null,M.a.createElement("div",{className:re.a.selector},a.isAuthorized&&M.a.createElement("div",null,M.a.createElement("span",{className:a.filterProps.allUsers?re.a.selectedItem:re.a.restItems,onClick:function(){a.onFilterChanged(!1,!0,a.filterProps.term)}},"All"),M.a.createElement("span",{className:a.filterProps.friend?re.a.selectedItem:re.a.restItems,onClick:function(){a.onFilterChanged(!0,!1,a.filterProps.term)}},"Friends"),M.a.createElement("span",{className:a.filterProps.friend||a.filterProps.allUsers?re.a.restItems:re.a.selectedItem,onClick:function(){a.onFilterChanged(!1,!1,a.filterProps.term)}},"Rest")),M.a.createElement(pe,{initialValues:a.filterProps,onSubmit:function(e){var t=e.term;a.onFilterChanged(a.filterProps.friend,a.filterProps.allUsers,t)}})),M.a.createElement("div",{className:re.a.UsersBox},a.users.map((function(e){return M.a.createElement("div",null,M.a.createElement("span",null,M.a.createElement("div",null,M.a.createElement(z.b,{to:"/profile/"+e.id},M.a.createElement("img",{src:null!=e.photos.small?e.photos.small:se.a,className:re.a.userPhoto,alt:"avas"}))),M.a.createElement("div",null,e.followed?M.a.createElement("button",{disabled:a.followingQueie.some((function(t){return t===e.id})),onClick:function(){a.unfollowUser(e.id)},className:re.a.btnFollow},"Unfollow"):M.a.createElement("button",{disabled:a.followingQueie.some((function(t){return t===e.id})),onClick:function(){a.followUser(e.id)},className:re.a.btnFollow},"Follow"))),M.a.createElement("span",null,M.a.createElement("div",null,e.name)))}))),M.a.createElement(ie,{totalUsersCount:t,pageSize:n,currentPage:a.filterProps.currentPage,onPageChanged:r}))},de=n(137),me=function(e){return e.usersData.pageSize},ge=function(e){return e.usersData.totalUsersCount},he=function(e){return e.usersData.isFetching},Ee=function(e){return e.usersData.followingQueie},ve=Object(de.a)((function(e){return e.usersData.users}),(function(e){return e.filter((function(e){return!0}))})),be=function(e){function t(){var e,n;Object(D.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(Q.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){n.props.setCurrentPage(e)},n.onFilterChanged=function(e,t,r){n.props.setUsersFilter(e,t,r),n.props.setCurrentPage(1)},n.returnFriend=function(){return!!n.props.filterProps.friend||!!n.props.filterProps.allUsers&&void 0},n}return Object(_.a)(t,e),Object(K.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.filterProps.currentPage,this.props.pageSize,this.returnFriend(),this.props.filterProps.term)}},{key:"componentDidUpdate",value:function(e){this.props.filterProps!==e.filterProps&&this.props.getUsers(this.props.filterProps.currentPage,this.props.pageSize,this.returnFriend(),this.props.filterProps.term)}},{key:"render",value:function(){return M.a.createElement(M.a.Fragment,null,M.a.createElement(fe,{onPageChanged:this.onPageChanged,users:this.props.users,followingQueie:this.props.followingQueie,unfollowUser:this.props.unfollowUserThunckCreator,followUser:this.props.followUserThunckCreator,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,onFilterChanged:this.onFilterChanged,filterProps:this.props.filterProps,isAuthorized:this.props.isAuthorized}))}}]),t}(M.a.Component),Se=Object(a.d)(Object(ee.b)((function(e){return{users:ve(e),pageSize:me(e),totalUsersCount:ge(e),isFetching:he(e),followingQueie:Ee(e),filterProps:e.usersData.filterProps,isAuthorized:e.authData.isAuthorised}}),{setCurrentPage:c.e.setCurrentPage,setUsersFilter:c.e.setUsersFilter,getUsers:c.c,unfollowUserThunckCreator:c.d,followUserThunckCreator:c.b}))(be),Ae=(n(290),n(49)),Ue=n.n(Ae),Oe=n(69),Ne=n(139),je=n.n(Ne),Pe=function(e){return M.a.createElement("header",{className:Ue.a.header},M.a.createElement("img",{className:Ue.a.logoImg,src:je.a,alt:"logo"}),M.a.createElement("div",{className:Ue.a.preloader},e.isFetching?M.a.createElement(Oe.a,null):null),M.a.createElement("div",{className:Ue.a.loginBlock},e.isAuthorised?M.a.createElement("div",null,M.a.createElement("div",null,e.login),M.a.createElement("button",{className:Ue.a.btnExit,onClick:function(){e.disconnectMe()}},"Exit")):M.a.createElement("div",{className:"navLogin"},M.a.createElement(z.b,{to:"/login"},"Login"))))},Ie=function(e){function t(){return Object(D.a)(this,t),Object(Q.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(K.a)(t,[{key:"render",value:function(){return M.a.createElement(Pe,this.props)}}]),t}(M.a.Component),Re=Object(ee.b)((function(e){return{isAuthorised:e.authData.isAuthorised,login:e.authData.login,isFetching:e.usersData.isFetching}}),{disconnectMe:function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:e.sent.resultCode===f.a.Succes&&(t(S()),t(c.e.setCurrentPage(1)),t(c.e.setUsersFilter(!1,!0,"")));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ie),we=n(90),Ce=n(47),Fe=n(38),ke=n.n(Fe),ye=Object(Ce.a)(30),Te=Object(Ce.a)(10),Me=Object(ue.a)({form:"loginForm"})((function(e){var t=e.handleSubmit,n=e.captchaURL,r=e.error;return M.a.createElement("form",{onSubmit:t},Object(le.c)("Login","login",le.a,[Ce.b,ye],ke.a.inputLogin),Object(le.c)("Password","password",le.a,[Ce.b,ye],ke.a.inputLogin,{type:"password"}),M.a.createElement("div",{className:ke.a.remMe},M.a.createElement(we.a,{component:"input",name:"rememberMe",type:"checkbox"}),"Remember me"),n&&M.a.createElement("div",null,Object(le.c)("Captcha","captcha",le.a,[Ce.b,Te],ke.a.inputLogin),M.a.createElement("div",null,M.a.createElement("img",{src:n,alt:"captcha"}))),M.a.createElement("div",null,M.a.createElement("button",{className:ke.a.btnLogin},"Login")),r&&M.a.createElement("div",{className:ke.a.formError},r))})),Le=function(e){return M.a.createElement("div",{className:ke.a.loginCommon},M.a.createElement("h1",null,"LOGIN"),M.a.createElement(Me,{onSubmit:function(t){var n=t.login,r=t.password,a=t.rememberMe,s=t.captcha;e.loginMe(n,r,a,s)},captchaURL:e.captchaURL}))},xe=function(e){function t(){return Object(D.a)(this,t),Object(Q.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(K.a)(t,[{key:"render",value:function(){return this.props.isAuth?M.a.createElement($.a,{to:"/profile"}):M.a.createElement(Le,this.props)}}]),t}(M.a.Component),De=Object(ee.b)((function(e){return{isAuth:e.authData.isAuthorised,captchaURL:e.authData.captchaURL}}),{loginMe:function(e,t,n,a){return function(){var s=Object(l.a)(u.a.mark((function s(o){var c,i;return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,m(e,t,n,a);case 2:(c=s.sent).resultCode===f.a.Succes?o(U()):(c.resultCode===r.CaptchaIsRequired&&o(O()),i=c.messages.length>0?c.messages[0]:"Uncaught message!",o(Object(E.a)("loginForm",{_error:i})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})(xe),Ke=(n(291),function(){return M.a.createElement("div",{className:"cssload-loader"},M.a.createElement("div",{className:"cssload-inner cssload-one"}),M.a.createElement("div",{className:"cssload-inner cssload-two"}),M.a.createElement("div",{className:"cssload-inner cssload-three"}))}),Qe=M.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),Ge=M.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),_e=function(e){function t(){var e,n;Object(D.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(Q.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(a)))).cathAllUnhandledErrors=function(){console.log("Some error ocured")},n}return Object(_.a)(t,e),Object(K.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.cathAllUnhandledErrors)}},{key:"componentWillMount",value:function(){window.removeEventListener("unhandledrejection",this.cathAllUnhandledErrors)}},{key:"render",value:function(){return this.props.isInit?M.a.createElement("div",{className:"app-wrapper"},M.a.createElement(Re,null),M.a.createElement(J,null),M.a.createElement("div",{className:"app-wrapper-content"},M.a.createElement(T.Suspense,{fallback:M.a.createElement("div",null,M.a.createElement(Oe.a,null))},M.a.createElement($.b,{path:"/dialogs",render:function(){return M.a.createElement(Qe,null)}}),M.a.createElement($.b,{path:"/profile/:userId?",render:function(){return M.a.createElement(Ge,null)}}),M.a.createElement($.b,{exact:!0,path:"/",render:function(){return M.a.createElement($.a,{to:"/profile"})}})),M.a.createElement($.b,{path:"/news",render:function(){return M.a.createElement(Y,null)}}),M.a.createElement($.b,{path:"/musik",render:function(){return M.a.createElement(H,null)}}),M.a.createElement($.b,{path:"/settings",render:function(){return M.a.createElement(X,null)}}),M.a.createElement($.b,{path:"/users",render:function(){return M.a.createElement(Se,null)}}),M.a.createElement($.b,{path:"/login",render:function(){return M.a.createElement(De,null)}}))):M.a.createElement("div",{className:"preloaderWrapper"},M.a.createElement("div",{className:"preloaderTriangle"},M.a.createElement(Ke,null)))}}]),t}(M.a.Component),Be=Object(a.d)($.f,Object(ee.b)((function(e){return{isInit:e.appData.isInitialized}}),{initializeApp:function(){return function(e){var t=e(U());Promise.all([t]).then((function(){e(R())}))}}}))(_e);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));x.a.render(M.a.createElement(z.a,null,M.a.createElement(ee.a,{store:y},M.a.createElement(Be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,n){e.exports={loginCommon:"Login_loginCommon__2vpgU",formError:"Login_formError__3eW9S",inputLogin:"Login_inputLogin__6By6x",inputPass:"Login_inputPass__dKgF1",remMe:"Login_remMe__1esjx",btnLogin:"Login_btnLogin__2O83E"}},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(!(t.length<=e))return"Max length is ".concat(e," symbols")}}},49:function(e,t,n){e.exports={header:"Header_header__2SM_z",logoImg:"Header_logoImg__1kZFR",preloader:"Header_preloader__BmA3b",loginBlock:"Header_loginBlock__2wptP",btnExit:"Header_btnExit__3PrEG"}},69:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(138),o=n.n(s);t.a=function(){return a.a.createElement("img",{src:o.a,alt:"preloader"})}},71:function(e,t,n){e.exports={friends:"Friendsbar_friends__gdc4o",item:"Friendsbar_item__Ty9MI"}},72:function(e,t,n){e.exports={selector:"paginator_selector__3QTl5",restPages:"paginator_restPages__86jCY",selectedPage:"paginator_selectedPage__3k0dF"}},93:function(e,t,n){e.exports={customTextArea:"customTextArea_customTextArea__2Gv09",error:"customTextArea_error__1US7i"}},96:function(e,t,n){"use strict";var r=n(6),a=n.n(r),s=n(13),o=n(48),c=n(9),i=n(11),u=function(e){return i.b.get("profile/".concat(e)).then((function(e){return e.data}))},l=function(e){return i.b.get("/profile/status/".concat(e)).then((function(e){return e.data}))},p=function(e){return i.b.put("/profile/status",{status:e}).then((function(e){return e.data}))},f=function(e){var t=new FormData;return t.append("image",e),i.b.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},d=function(e){return i.b.put("/profile",e).then((function(e){return e.data}))},m=n(10),g=n(27);n.d(t,"c",(function(){return E})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return b})),n.d(t,"b",(function(){return S})),n.d(t,"g",(function(){return A})),n.d(t,"d",(function(){return U}));var h={posts:[{id:1,message:"Hola! Como esta?",likeCount:23},{id:2,message:"Que pasa aqui?",likeCount:12},{id:3,message:"Vamos a la plalla",likeCount:50},{id:4,message:"Quiero salir a calle!",likeCount:2}],profile:null,status:"",textAreaValue:""},E={addPost:function(e){return{type:"RSN/profile/ADD-POST",postMessage:e}},setUserProfile:function(e){return{type:"RSN/profile/SET-USER-PROFILE",profile:e}},setStatus:function(e){return{type:"RSN/profile/SET-STATUS",status:e}},setUserPhoto:function(e){return{type:"RSN/profile/SET-USER-PHOTO",photos:e}},clearUserProfile:function(){return{type:"RSN/profile/CLEAR-USER-PROFILE"}}},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(m.e.toggleIsFetching(!0)),t.next=3,u(e);case 3:r=t.sent,n(E.setUserProfile(r)),n(m.e.toggleIsFetching(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(m.e.toggleIsFetching(!0)),n.next=3,d(e);case 3:if(0!==(s=n.sent).resultCode){n.next=8;break}r(v(t)),n.next=12;break;case 8:if(1!==s.resultCode){n.next=12;break}return o=s.messages.length>0?s.messages[0]:"Uncaught message!",r(Object(g.a)("editProfileForm",{_error:o})),n.abrupt("return",Promise.reject(o));case 12:r(m.e.toggleIsFetching(!1));case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(m.e.toggleIsFetching(!0)),t.next=3,l(e);case 3:r=t.sent,n(E.setStatus(r)),n(m.e.toggleIsFetching(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(m.e.toggleIsFetching(!0)),t.prev=1,t.next=4,p(e);case 4:0===(r=t.sent).resultCode&&n(E.setStatus(e)),1===r.resultCode&&console.log("mas length 300"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("some err");case 12:n(m.e.toggleIsFetching(!1));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(m.e.toggleIsFetching(!0)),t.next=3,f(e);case 3:0===(r=t.sent).resultCode&&(n(E.setUserPhoto(r.data.photos)),n(m.e.toggleIsFetching(!1)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RSN/profile/ADD-POST":return Object(c.a)({},e,{posts:[].concat(Object(o.a)(e.posts),[{id:5,message:t.postMessage,likeCount:0}]),textAreaValue:""});case"RSN/profile/SET-USER-PROFILE":return Object(c.a)({},e,{profile:t.profile});case"RSN/profile/SET-STATUS":return Object(c.a)({},e,{status:t.status});case"RSN/profile/SET-USER-PHOTO":return Object(c.a)({},e,{profile:Object(c.a)({},e.profile,{photos:t.photos})});case"RSN/profile/CLEAR-USER-PROFILE":return Object(c.a)({},e,{profile:null});default:return e}}},97:function(e,t,n){},98:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(48),a=n(9),s={dialogs:[{id:1,name:"Juan"},{id:2,name:"Pedro"},{id:3,name:"Ramona"},{id:4,name:"Fernandes"},{id:5,name:"Alexandro"}],messages:[{id:1,message:"Hola!"},{id:2,message:"Como te llama?"},{id:3,message:"Cerdo)"},{id:4,message:"Quiero salir a calle!"}]},o={addDialogMessage:function(e){return{type:"RSN/dialogs/ADD-DIALOG-MESSAGE",postMessage:e}}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RSN/dialogs/ADD-DIALOG-MESSAGE":return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:5,message:t.postMessage}])});default:return e}}}},[[165,1,2]]]);
//# sourceMappingURL=main.1a6570ac.chunk.js.map