(this.webpackJsonpucinema=this.webpackJsonpucinema||[]).push([[0],{179:function(e,t,a){e.exports=a(331)},330:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),l=a.n(c),o=a(45),u=a(103),i=a.n(u),s=a(157),m=a(158);function d(){return(d=Object(m.a)(i.a.mark((function e(t){var a,n,r,c,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.spreadsheetId,n=t.sheetNum,r=n||1,c="https://spreadsheets.google.com/feeds/cells/".concat(a,"/").concat(r,"/public/full?alt=json"),e.next=5,fetch(c).then((function(e){return 200===e.status?e.json():{feed:{entry:[]}}}));case 5:return l=e.sent,o=l.feed.entry.reduce((function(e,t){var a=t.gs$cell,n=a.row,r=a.col,c=t.content.$t,l=n-1,o=r-1;return e[l]?e[l]["col".concat(o)]=c:e[l]=Object(s.a)({},"col".concat(o),c),e}),[]),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e){return d.apply(this,arguments)},f=r.a.createContext({}),h=function(e){var t=Object(n.useState)({isLoading:!0,data:[]}),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){E({spreadsheetId:"1xqxT4Q0Zh4n9W5GYew-ltxfb4oG42icVlHQEX_RErQE",sheetNum:1}).then((function(e){var t=e.map((function(e){return{id:e.col0,title:e.col1,desc:e.col2,url:e.col3,imgUrl:e.col4,widerImgUrl:e.col5,category:e.col6,type:e.col7,createdDate:e.col8,imdbID:e.col9}}));return l({isLoading:!1,data:t}),t}))}),[]),r.a.createElement(f.Provider,{value:c},e.children)},b=a(345),v=a(30),p=a(22),g=(a(185),a(344)),w=a(341),j={baseRoute:""},O=j.baseRoute,x=Object(p.h)((function(e){var t=e.location.pathname,a=Object(n.useContext)(f),c=Object(p.f)(),l=Object(n.useState)({loading:!1,value:"",results:[]}),u=Object(o.a)(l,2),i=u[0],s=u[1],m=Object(n.useCallback)((function(e,t){var n=t.value;s({loading:!0,value:n,results:[]});var r=a.data.filter((function(e){return e.title.toLowerCase().indexOf(n)>-1}));s({loading:!1,value:n,results:r})}),[a]),d=Object(n.useCallback)((function(e,t){var a=t.result;s({loading:!1,value:"",results:[]}),c.push("/watch/".concat(a.id))}),[c]);return r.a.createElement(g.a,{inverted:!0},r.a.createElement(g.a.Item,{header:!0},"uCinema"),r.a.createElement(g.a.Item,{as:v.b,name:"home",active:t==="".concat(O,"/"),href:"".concat(O,"/"),to:"".concat(O,"/")}),r.a.createElement(g.a.Item,{as:v.b,name:"movies",active:t==="".concat(O,"/movies"),href:"".concat(O,"/movies"),to:"".concat(O,"/movies")}),r.a.createElement(g.a.Item,{as:v.b,name:"tv-series",active:t==="".concat(O,"/tv-series"),href:"".concat(O,"/tv-series"),to:"".concat(O,"/tv-series")}),r.a.createElement(g.a.Menu,{position:"right"},r.a.createElement(g.a.Item,null,r.a.createElement(w.a,{loading:i.loading,results:i.results,value:i.value,onSearchChange:m,onResultSelect:d}))))})),y=a(338),I=a(343),C=a(171),k=(a(330),j.baseRoute),D=function(e){var t=e.id,a=e.title,n=e.imgUrl,c=(e.createdDate,n||"https://as2.ftcdn.net/jpg/02/56/58/31/500_F_256583172_kTP1xZVrVevahIk7P5wsr8VUgeC3X2q8.jpg");return r.a.createElement(I.a,{as:v.b,href:"".concat(k,"/watch/").concat(t),to:"".concat(k,"/watch/").concat(t),className:"video-card"},r.a.createElement(C.a,{className:"fixed-height",size:"medium",src:c,wrapped:!0,ui:!1}),r.a.createElement(I.a.Content,{className:"content-over-image"},r.a.createElement(I.a.Description,{className:"color-white"},a)))},S=function(e){var t=e.list;return r.a.createElement(I.a.Group,null,t.map((function(e){return r.a.createElement(D,{key:e.id,id:e.id,title:e.title,imgUrl:e.imgUrl,createdDate:e.createdDate})})))},R=function(){var e=Object(n.useContext)(f);return r.a.createElement(y.a,null,r.a.createElement(S,{list:e.data}))},U=function(){var e=Object(n.useContext)(f).data.filter((function(e){return"movie"===e.category}));return r.a.createElement(y.a,null,r.a.createElement(S,{list:e}))},G=function(){var e=Object(n.useContext)(f).data.filter((function(e){return"series"===e.category}));return r.a.createElement(y.a,null,r.a.createElement(S,{list:e}))},N=a(346),P=a(339),W=a(342),L=function(){var e=Object(n.useContext)(f),t=Object(p.g)().name,a=e.data.filter((function(e){return t===e.id}))[0],c=Object(n.useState)(null),l=Object(o.a)(c,2),u=l[0],i=l[1];Object(n.useEffect)((function(){a&&a.imdbID&&fetch("http://www.omdbapi.com/?i=".concat(a.imdbID,"&apikey=c11086ed&plot=full")).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[a]);var s=a&&a.widerImgUrl?{placeholder:a.widerImgUrl}:{};return r.a.createElement(y.a,null,e.isLoading&&r.a.createElement(b.a,{loading:!0},r.a.createElement(C.a,{src:"https://react.semantic-ui.com/images/wireframe/paragraph.png"})),a&&r.a.createElement(N.a,{as:"h2"},a.title,r.a.createElement(N.a.Subheader,null,a.desc)),a&&("youtube"===a.type?r.a.createElement(P.a,Object.assign({id:a.url,source:"youtube",iframe:{allowFullScreen:!0}},s)):r.a.createElement(P.a,Object.assign({url:a.url,iframe:{allowFullScreen:!0}},s))),u&&r.a.createElement(W.a.Group,{items:[{image:u.Poster,header:u.Title,description:u.Plot,meta:r.a.createElement("div",null,r.a.createElement("b",null,"Year:")," ",u.Year," ",r.a.createElement("br",null),r.a.createElement("b",null,"Released:")," ",u.Released," ",r.a.createElement("br",null),r.a.createElement("b",null,"Genre:")," ",u.Genre," ",r.a.createElement("br",null),r.a.createElement("b",null,"Director:")," ",u.Director," ",r.a.createElement("br",null),r.a.createElement("b",null,"Writer:")," ",u.Writer),extra:""}]}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))},V=j.baseRoute;var _=function(){return r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement(x,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"".concat(V,"/")},r.a.createElement(R,null)),r.a.createElement(p.a,{path:"".concat(V,"/movies")},r.a.createElement(U,null)),r.a.createElement(p.a,{path:"".concat(V,"/tv-series")},r.a.createElement(G,null)),r.a.createElement(p.a,{path:"".concat(V,"/watch/:name")},r.a.createElement(L,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[179,1,2]]]);
//# sourceMappingURL=main.c6e46d76.chunk.js.map