(this["webpackJsonp@ucinema/cinema-ui"]=this["webpackJsonp@ucinema/cinema-ui"]||[]).push([[0],{190:function(e,t,a){e.exports=a(342)},341:function(e,t,a){},342:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(39),l=a.n(c),i=a(60),u=a(182),o=a(34),s=a(18),m={intraBaseUrl:"https://192.168.29.233:9000",googleSheetId:"1xqxT4Q0Zh4n9W5GYew-ltxfb4oG42icVlHQEX_RErQE",checkerUrl:"/checker",movieUrl:"/movies"},d=a(49),h=a.n(d),p=a(82),E=a(83);function f(){return(f=Object(E.a)(h.a.mark((function e(t){var a,n,r,c,l,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.spreadsheetId,n=t.sheetNum,r=n||1,c="https://spreadsheets.google.com/feeds/cells/".concat(a,"/").concat(r,"/public/full?alt=json"),e.next=5,fetch(c).then((function(e){return 200===e.status?e.json():{feed:{entry:[]}}}));case 5:return l=e.sent,i=l.feed.entry.reduce((function(e,t){var a=t.gs$cell,n=a.row,r=a.col,c=t.content.$t,l=n-1,i=r-1;return e[l]?e[l]["col".concat(i)]=c:e[l]=Object(p.a)({},"col".concat(i),c),e}),[]),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=function(e){return f.apply(this,arguments)},v=a(167),g=["hidden","y"],j=function(e){var t=Object(v.a)(e),a=t[0],n=void 0===a?{}:a,r=t.slice(1),c=Object.keys(n);return r.reduce((function(e,t){var a=c.reduce((function(e,a){var r=n[a]||a,c=t[a];return e[r]="hidden"===r?g.indexOf(c)>-1:c,e}),{});return e.push(a),e}),[])};function O(){return(O=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return 200===e.status?{data:e.json(),status:!0}:{status:!1}}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(e){return O.apply(this,arguments)},y=r.a.createContext({}),I={isLoading:!0,data:[],subData:{},intranet:!1,cloudData:[],cloudSubData:{}};function C(e,t){switch(t.type){case"fetchGoogleSuccess":return Object(s.a)(Object(s.a)({},e),{},{isLoading:!1,data:t.payload.data,subData:t.payload.subData});case"intraSuccess":return Object(s.a)(Object(s.a)({},e),{},{intranet:!0});case"fetchCloudSuccess":return Object(s.a)(Object(s.a)({},e),{},{cloudData:t.payload});case"update":return Object(s.a)(Object(s.a)({},e),t.payload);default:throw new Error}}var S=function(e){var t=Object(n.useReducer)(C,I),a=Object(o.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){b({spreadsheetId:m.googleSheetId,sheetNum:1}).then(j).then((function(e){var t={},a=e.filter((function(e){if(e.parentId){var a=t[e.parentId]||[];t[e.parentId]=[].concat(Object(u.a)(a),[e])}return!e.hidden&&!e.parentId}));return l({type:"fetchGoogleSuccess",payload:{data:a,subData:t}}),a})).then((function(e){return w("".concat(m.intraBaseUrl).concat(m.checkerUrl))})).then((function(e){return!!e.status&&(l({type:"intraSuccess"}),fetch("".concat(m.intraBaseUrl).concat(m.movieUrl)).then((function(e){if(200===e.status)return e.json()})).then((function(e){l({type:"fetchCloudSuccess",payload:e})})),!0)}))}),[]);var i=Object(s.a)(Object(s.a)({},c),{},{dispatch:l});return r.a.createElement(y.Provider,{value:i},e.children)},x=a(19),D=a(14),W=(a(198),a(355)),k=a(358),R=a(352),U=a(349),G={baseRoute:""},B=function(e){var t=Object(n.useState)({loading:!1,value:"",results:[]}),a=Object(o.a)(t,2),r=a[0],c=a[1],l=Object(D.f)();return{data:r,handleSearchChange:Object(n.useCallback)((function(t,a){var n=a.value;c({loading:!0,value:n,results:[]});var r=e.filter((function(e){return e.title.toLowerCase().indexOf(n)>-1}));c({loading:!1,value:n,results:r})}),[e]),handleResultSelect:Object(n.useCallback)((function(e,t){var a=t.result;c({loading:!1,value:"",results:[]}),l.push("/watch/".concat(a.id))}),[l])}},F=G.baseRoute,N=Object(D.h)((function(e){var t=e.location.pathname,a=Object(n.useContext)(y),c=B(a.data),l=c.data,i=c.handleSearchChange,u=c.handleResultSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{fixed:"top",inverted:!0},r.a.createElement(W.a.Item,{header:!0},"uCinema"),r.a.createElement(W.a.Item,{as:x.b,name:"home",active:t==="".concat(F,"/"),href:"".concat(F,"/"),to:"".concat(F,"/")}),r.a.createElement(W.a.Item,{as:x.b,name:"movies",active:t==="".concat(F,"/movies"),href:"".concat(F,"/movies"),to:"".concat(F,"/movies")}),r.a.createElement(W.a.Item,{as:x.b,name:"tv-series",active:t==="".concat(F,"/tv-series"),href:"".concat(F,"/tv-series"),to:"".concat(F,"/tv-series")}),a.intranet&&r.a.createElement(W.a.Item,{as:x.b,name:"intra-movies",active:t==="".concat(F,"/intra-movies"),href:"".concat(F,"/intra-movies"),to:"".concat(F,"/intra-movies")}),r.a.createElement(W.a.Menu,{position:"right"},r.a.createElement(W.a.Item,null,r.a.createElement(k.a,{as:R.a,loading:l.loading,results:l.results,value:l.value,onSearchChange:i,onResultSelect:u,minWidth:550})))),r.a.createElement(k.a,{as:U.a,maxWidth:550,style:{padding:"60px 0 20px"}},r.a.createElement(R.a,{loading:l.loading,results:l.results,value:l.value,onSearchChange:i,onResultSelect:u,minWidth:550,input:{style:{width:"100%"}}})),r.a.createElement(k.a,{as:"div",minWidth:550,style:{paddingBottom:84}}))})),P=a(26),T=a(354),L=a(181),Y=(a(341),G.baseRoute),M=function(e){var t=e.id,a=e.title,n=e.imgUrl,c=(e.createdDate,n||"https://i.imgur.com/0FX7ZPe.jpg"),l=e.intra?"".concat(Y,"/intra/watch/").concat(t):"".concat(Y,"/watch/").concat(t);return r.a.createElement(T.a,{as:x.b,href:l,to:l,className:"video-card"},r.a.createElement(L.a,{className:"fixed-height",size:"medium",src:c,wrapped:!0,ui:!1}),r.a.createElement(T.a.Content,{className:"content-over-image"},r.a.createElement(T.a.Description,{className:"color-white"},a)))},Q=function(e){var t=e.list,a=e.intra;return r.a.createElement(T.a.Group,null,t.map((function(e){return r.a.createElement(M,{intra:a,key:e.id,id:e.id,title:e.title,imgUrl:e.imgUrl,createdDate:e.createdDate})})))},$=function(){var e=Object(n.useContext)(y);return r.a.createElement(U.a,null,r.a.createElement(P.a,null,r.a.createElement("title",null,"uCinema"),r.a.createElement("meta",{name:"description",content:"Watch movies on uCinema"})),r.a.createElement(Q,{list:e.data}))},z=function(){var e=Object(n.useContext)(y).data.filter((function(e){return"movie"===e.category}));return r.a.createElement(U.a,null,r.a.createElement(P.a,null,r.a.createElement("title",null,"Movies | uCinema"),r.a.createElement("meta",{name:"description",content:"Watch movies on uCinema"})),r.a.createElement(Q,{list:e}))},J=function(){var e=Object(n.useContext)(y).data.filter((function(e){return"series"===e.category}));return r.a.createElement(U.a,null,r.a.createElement(P.a,null,r.a.createElement("title",null,"Tv Series | uCinema"),r.a.createElement("meta",{name:"description",content:"Watch tv series on uCinema"})),r.a.createElement(Q,{list:e}))},X=function(){var e=Object(n.useContext)(y);return console.log(e),r.a.createElement(U.a,null,r.a.createElement(P.a,null,r.a.createElement("title",null,"IntraMovies | uCinema"),r.a.createElement("meta",{name:"description",content:"Watch movies on uCinema"})),r.a.createElement(Q,{intra:!0,list:e.cloudData}))},Z=a(89),q=a(356),A=a(357),H=a(350),V=a(353),_=G.baseRoute,K=function(e){var t=e.eps,a=e.epId;return r.a.createElement(Z.a.Group,{style:{paddingTop:"20px"}},t.map((function(e){return r.a.createElement(Z.a,{as:x.b,key:e.title,content:e.title,icon:"mail",active:a===e.id,href:"".concat(_,"/watch/").concat(e.parentId,"/").concat(e.id),to:"".concat(_,"/watch/").concat(e.parentId,"/").concat(e.id)})})))},ee=function(){var e=Object(n.useContext)(y),t=Object(D.g)(),a=t.name,c=t.subname,l=e.data.filter((function(e){return a===e.id}))[0],i=Object(n.useState)(null),u=Object(o.a)(i,2),m=u[0],d=u[1];Object(n.useEffect)((function(){l&&l.imdbID&&fetch("http://www.omdbapi.com/?i=".concat(l.imdbID,"&apikey=c11086ed&plot=full")).then((function(e){return e.json()})).then((function(e){return d(e)}))}),[l]);var h=l&&l.widerImgUrl?{placeholder:l.widerImgUrl}:{},p=[];l&&(p=e.subData[l.id]||[]);var E=c;if(E||p.length>0&&(E=p[0].id),p.length>0){var f=p.filter((function(e){return E===e.id}))[0]||{},b=f.title,v=f.url,g=f.type;l=Object(s.a)(Object(s.a)({},l),{},{title:b,url:v,type:g})}return r.a.createElement(U.a,null,l&&r.a.createElement(P.a,null,r.a.createElement("title",null,"Watch ",l.title," | uCinema"),r.a.createElement("meta",{name:"description",content:"Watch ".concat(l.title)})),e.isLoading&&r.a.createElement(q.a,{loading:!0},r.a.createElement(L.a,{src:"https://react.semantic-ui.com/images/wireframe/paragraph.png"})),l&&r.a.createElement(A.a,{as:"h2"},l.title,r.a.createElement(A.a.Subheader,null,l.desc)),l&&("youtube"===l.type?r.a.createElement(H.a,Object.assign({id:l.url,source:"youtube",iframe:{allowFullScreen:!0}},h)):r.a.createElement(H.a,Object.assign({url:l.url,iframe:{allowFullScreen:!0}},h))),r.a.createElement(K,{eps:p,epId:E}),m&&r.a.createElement(V.a.Group,{items:[{image:m.Poster,header:m.Title,description:m.Plot,meta:r.a.createElement("div",null,r.a.createElement("b",null,"Year:")," ",m.Year," ",r.a.createElement("br",null),r.a.createElement("b",null,"Released:")," ",m.Released," ",r.a.createElement("br",null),r.a.createElement("b",null,"Genre:")," ",m.Genre," ",r.a.createElement("br",null),r.a.createElement("b",null,"Director:")," ",m.Director," ",r.a.createElement("br",null),r.a.createElement("b",null,"Writer:")," ",m.Writer),extra:""}]}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))},te=G.baseRoute,ae=function(e){var t=e.eps,a=e.epId;return r.a.createElement(Z.a.Group,{style:{paddingTop:"20px"}},t.map((function(e){return r.a.createElement(Z.a,{as:x.b,key:e.title,content:e.title,icon:"mail",active:a===e.id,href:"".concat(te,"/intra/watch/").concat(e.parentId,"/").concat(e.id),to:"".concat(te,"/intra/watch/").concat(e.parentId,"/").concat(e.id)})})))},ne=function(){var e=Object(n.useContext)(y),t=Object(D.g)(),a=t.name,c=t.subname,l=e.cloudData.filter((function(e){return a===e.id}))[0],i=Object(n.useState)(null),u=Object(o.a)(i,2),d=u[0],h=u[1];Object(n.useEffect)((function(){l&&l.imdbID&&fetch("http://www.omdbapi.com/?i=".concat(l.imdbID,"&apikey=c11086ed&plot=full")).then((function(e){return e.json()})).then((function(e){return h(e)}))}),[l]);var p=l&&l.widerImgUrl?{placeholder:l.widerImgUrl}:{},E=[];l&&(E=e.cloudSubData[l.id]||[]);var f=c;if(f||E.length>0&&(f=E[0].id),E.length>0){var b=E.filter((function(e){return f===e.id}))[0]||{},v=b.title,g=b.url,j=b.type;l=Object(s.a)(Object(s.a)({},l),{},{title:v,url:g,type:j})}return r.a.createElement(U.a,null,l&&r.a.createElement(P.a,null,r.a.createElement("title",null,"Watch ",l.title," | uCinema"),r.a.createElement("meta",{name:"description",content:"Watch ".concat(l.title)})),e.isLoading&&r.a.createElement(q.a,{loading:!0},r.a.createElement(L.a,{src:"https://react.semantic-ui.com/images/wireframe/paragraph.png"})),l&&r.a.createElement(A.a,{as:"h2"},l.title,r.a.createElement(A.a.Subheader,null,l.desc)),l&&("youtube"===l.type?r.a.createElement(H.a,Object.assign({id:l.url,source:"youtube",iframe:{allowFullScreen:!0}},p)):r.a.createElement(H.a,Object.assign({url:"".concat(m.intraBaseUrl).concat(l.url),iframe:{allowFullScreen:!0}},p))),r.a.createElement(ae,{eps:E,epId:f}),d&&r.a.createElement(V.a.Group,{items:[{image:d.Poster,header:d.Title,description:d.Plot,meta:r.a.createElement("div",null,r.a.createElement("b",null,"Year:")," ",d.Year," ",r.a.createElement("br",null),r.a.createElement("b",null,"Released:")," ",d.Released," ",r.a.createElement("br",null),r.a.createElement("b",null,"Genre:")," ",d.Genre," ",r.a.createElement("br",null),r.a.createElement("b",null,"Director:")," ",d.Director," ",r.a.createElement("br",null),r.a.createElement("b",null,"Writer:")," ",d.Writer),extra:""}]}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))},re=function(){var e=Object(D.f)();return Object(n.useEffect)((function(){return e.listen((function(e){i.a.set({page:e.pathname}),i.a.pageview(e.pathname)}))}),[e]),r.a.createElement("div",null)},ce=G.baseRoute;var le=function(){return r.a.createElement(x.a,null,r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement(N,null),r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"".concat(ce,"/")},r.a.createElement($,null)),r.a.createElement(D.a,{path:"".concat(ce,"/movies")},r.a.createElement(z,null)),r.a.createElement(D.a,{path:"".concat(ce,"/tv-series")},r.a.createElement(J,null)),r.a.createElement(D.a,{path:"".concat(ce,"/watch/:name/:subname?")},r.a.createElement(ee,null)),r.a.createElement(D.a,{path:"".concat(ce,"/intra-movies")},r.a.createElement(X,null)),r.a.createElement(D.a,{path:"".concat(ce,"/intra/watch/:name/:subname?")},r.a.createElement(ne,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null,r.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),i.a.initialize("UA-17018575-1")}},[[190,1,2]]]);
//# sourceMappingURL=main.b33f32f4.chunk.js.map