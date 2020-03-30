(this.webpackJsonpucinema=this.webpackJsonpucinema||[]).push([[0],{151:function(e,t,a){e.exports=a(293)},291:function(e,t,a){},293:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),o=a(65),i=a(91),u=a.n(i),s=a(130),m=a(131);function d(){return(d=Object(m.a)(u.a.mark((function e(t){var a,n,r,c,l,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.spreadsheetId,n=t.sheetNum,r=n||1,c="https://spreadsheets.google.com/feeds/cells/".concat(a,"/").concat(r,"/public/full?alt=json"),e.next=5,fetch(c).then((function(e){return 200===e.status?e.json():{feed:{entry:[]}}}));case 5:return l=e.sent,o=l.feed.entry.reduce((function(e,t){var a=t.gs$cell,n=a.row,r=a.col,c=t.content.$t,l=n-1,o=r-1;return e[l]?e[l]["col".concat(o)]=c:e[l]=Object(s.a)({},"col".concat(o),c),e}),[]),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e){return d.apply(this,arguments)},h=r.a.createContext({}),f=function(e){var t=Object(n.useState)({isLoading:!0,data:[]}),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){E({spreadsheetId:"1xqxT4Q0Zh4n9W5GYew-ltxfb4oG42icVlHQEX_RErQE",sheetNum:1}).then((function(e){var t=e.map((function(e){return{id:e.col0,title:e.col1,desc:e.col2,url:e.col3,imgUrl:e.col4,widerImgUrl:e.col5,category:e.col6,type:e.col7,createdDate:e.col8,imdbID:e.col9}}));return l({isLoading:!1,data:t}),t}))}),[]),r.a.createElement(h.Provider,{value:c},e.children)},p=a(306),b=a(29),v=a(19),g=(a(157),a(305)),w=a(304),j={baseRoute:""},I=j.baseRoute,O=Object(v.g)((function(e){var t=e.location.pathname;return r.a.createElement(g.a,{inverted:!0},r.a.createElement(g.a.Item,{header:!0},"uCinema"),r.a.createElement(g.a.Item,{as:b.b,name:"home",active:t==="".concat(I,"/"),href:"".concat(I,"/"),to:"".concat(I,"/")}),r.a.createElement(g.a.Item,{as:b.b,name:"movies",active:t==="".concat(I,"/movies"),href:"".concat(I,"/movies"),to:"".concat(I,"/movies")}),r.a.createElement(g.a.Item,{as:b.b,name:"tv-series",active:t==="".concat(I,"/tv-series"),href:"".concat(I,"/tv-series"),to:"".concat(I,"/tv-series")}),r.a.createElement(g.a.Menu,{position:"right"},r.a.createElement(g.a.Item,null,r.a.createElement(w.a,{icon:"search",placeholder:"Search..."}))))})),x=a(299),y=a(303),k=a(142),D=(a(291),j.baseRoute),S=function(e){var t=e.id,a=e.title,n=e.imgUrl,c=(e.createdDate,n||"https://as2.ftcdn.net/jpg/02/56/58/31/500_F_256583172_kTP1xZVrVevahIk7P5wsr8VUgeC3X2q8.jpg");return r.a.createElement(y.a,{as:b.b,href:"".concat(D,"/watch/").concat(t),to:"".concat(D,"/watch/").concat(t),className:"video-card"},r.a.createElement(k.a,{className:"fixed-height",size:"medium",src:c,wrapped:!0,ui:!1}),r.a.createElement(y.a.Content,{className:"content-over-image"},r.a.createElement(y.a.Description,{className:"color-white"},a)))},U=function(){var e=Object(n.useContext)(h);return r.a.createElement(x.a,null,r.a.createElement(y.a.Group,null,e.data.map((function(e){return r.a.createElement(S,{key:e.id,id:e.id,title:e.title,imgUrl:e.imgUrl,createdDate:e.createdDate})}))))},P=function(){return r.a.createElement(x.a,null,"Movies - Work In Progress")},R=function(){return r.a.createElement(x.a,null,"TvSeries - Work In Progress")},W=a(307),C=a(300),G=a(302),N=function(){var e=Object(n.useContext)(h),t=Object(v.f)().name,a=e.data.filter((function(e){return t===e.id}))[0],c=Object(n.useState)(null),l=Object(o.a)(c,2),i=l[0],u=l[1];Object(n.useEffect)((function(){a&&a.imdbID&&fetch("http://www.omdbapi.com/?i=".concat(a.imdbID,"&apikey=c11086ed&plot=full")).then((function(e){return e.json()})).then((function(e){return u(e)}))}),[a]);var s=a&&a.widerImgUrl?{placeholder:a.widerImgUrl}:{};return r.a.createElement(x.a,null,e.isLoading&&r.a.createElement(p.a,{loading:!0},r.a.createElement(k.a,{src:"https://react.semantic-ui.com/images/wireframe/paragraph.png"})),a&&r.a.createElement(W.a,{as:"h2"},a.title,r.a.createElement(W.a.Subheader,null,a.desc)),a&&("youtube"===a.type?r.a.createElement(C.a,Object.assign({id:a.url,source:"youtube",iframe:{allowFullScreen:!0}},s)):r.a.createElement(C.a,Object.assign({url:a.url,iframe:{allowFullScreen:!0}},s))),i&&r.a.createElement(G.a.Group,{items:[{image:i.Poster,header:i.Title,description:i.Plot,meta:r.a.createElement("div",null,r.a.createElement("b",null,"Year:")," ",i.Year," ",r.a.createElement("br",null),r.a.createElement("b",null,"Released:")," ",i.Released," ",r.a.createElement("br",null),r.a.createElement("b",null,"Genre:")," ",i.Genre," ",r.a.createElement("br",null),r.a.createElement("b",null,"Director:")," ",i.Director," ",r.a.createElement("br",null),r.a.createElement("b",null,"Writer:")," ",i.Writer),extra:""}]}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))},T=j.baseRoute;var V=function(){return r.a.createElement(b.a,null,r.a.createElement(p.a,null,r.a.createElement(O,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"".concat(T,"/")},r.a.createElement(U,null)),r.a.createElement(v.a,{path:"".concat(T,"/movies")},r.a.createElement(P,null)),r.a.createElement(v.a,{path:"".concat(T,"/tv-series")},r.a.createElement(R,null)),r.a.createElement(v.a,{path:"".concat(T,"/watch/:name")},r.a.createElement(N,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null,r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.dcc234b5.chunk.js.map