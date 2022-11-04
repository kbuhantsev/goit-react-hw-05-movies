"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[724],{9784:function(n,e,t){t.d(e,{Z:function(){return y}});t(2791);var r,a,i,o,s,c,u,l=t(7689),d=t(168),f=t(1087),p=t(6444),x=(0,p.ZP)(f.rU)(r||(r=(0,d.Z)(["\n  display: block;\n  height: 100%;\n"]))),m=p.ZP.ul(a||(a=(0,d.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  row-gap: 20px;\n  column-gap: 20px;\n  padding-top: 20px;\n  padding-bottom: 40px;\n"]))),h=p.ZP.li(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n  overflow: hidden;\n  flex-basis: 280px;\n  transition: transform ",";\n\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 20px * 2) / 3);\n  }\n\n  @media screen and (min-width: 1280px) {\n    flex-basis: calc((100% - 20px * 3) / 4);\n  }\n\n  &:hover {\n    transform: scale(1.02);\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.animation.easeFast})),g=p.ZP.img(o||(o=(0,d.Z)(["\n  width: 100%;\n  /* height: 400px; */\n\n  @media screen and (min-width: 768px) {\n    /* height: 450px; */\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* height: 575px; */\n  }\n"]))),v=p.ZP.ul(s||(s=(0,d.Z)(["\n  padding: 10px 5px;\n  gap: 5px;\n"]))),Z=p.ZP.p(c||(c=(0,d.Z)(["\n  color: ",";\n  font-weight: ",";\n  font-size: ",";\n  text-transform: uppercase;\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.fontSizes.m})),b=p.ZP.p(u||(u=(0,d.Z)(["\n  color: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontWeights.medium})),w=t(2785),k=t(184);function y(n){var e=n.items,t=(0,l.TH)(),r=function(n){n.target.src=w,n.target.style.height="400px"};return(0,k.jsx)(m,{children:e.map((function(n){var e=n.poster_path,a=n.release_date,i=n.genres,o=n.id,s=n.title;return(0,k.jsx)(h,{children:(0,k.jsxs)(x,{to:"/movies/"+o,state:{from:t},children:[(0,k.jsx)(g,{src:e?"https://image.tmdb.org/t/p/w780/"+e:"#",className:"gallery__image",alt:e?s:"broken",loading:"lazy",width:"280",onError:r}),(0,k.jsxs)(v,{children:[(0,k.jsx)("li",{children:(0,k.jsx)(Z,{children:s})}),(0,k.jsx)("li",{children:(0,k.jsxs)(b,{children:[null===i||void 0===i?void 0:i.slice(0,3).map((function(n){return n.name})).join(", "),"\xa0",null===a||void 0===a?void 0:a.slice(0,4)]})})]})]})},o)}))})}},9155:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(4476),a=(t(2791),t(6444)),i=t(184);function o(n){var e=n.titleText,t=void 0===e?"":e,o=(0,a.Fg)();return(0,i.jsx)(r.Z,{backgroundColor:o.colors.main,alignItems:"center",pt:2,pb:2,mt:4,borderRadius:"normal",children:(0,i.jsx)(r.Z,{as:"h2",children:t})})}},9425:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(2791),a=t(9718),i=t.n(a),o=(t(6892),t(184));function s(n){var e=n.totalItems,t=n.currentPage,a=n.updateCurrentPage,s=(0,r.useRef)(null);return(0,r.useEffect)((function(){var n=new(i())(s.current,{totalItems:e,itemsPerPage:20,visiblePages:5});n.movePageTo(t),n.on("beforeMove",(function(n){var e=n.page;a(e),window.scrollTo({top:100,behavior:"smooth"})}))}),[t,e,a]),(0,o.jsx)("div",{ref:s,id:"tui-pagination-container",className:"tui-pagination"})}},8079:function(n,e,t){t.d(e,{Z:function(){return f}});var r=t(7762),a=t(5861),i=t(885),o=t(7757),s=t.n(o),c=t(2791),u=t(1087),l=t(1044),d="99eb21030dfb3afeff4792ddc8f57a63";function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"trends",e=(0,c.useState)(null),t=(0,i.Z)(e,2),o=t[0],f=t[1],p=(0,u.lr)(),x=(0,i.Z)(p,2),m=x[0],h=x[1],g=(0,c.useState)(null),v=(0,i.Z)(g,2),Z=v[0],b=v[1],w=(0,c.useMemo)((0,a.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.ZP.get("/genre/movie/list",{params:{api_key:d}});case 2:return e=n.sent,n.abrupt("return",e.data.genres);case 4:case"end":return n.stop()}}),n)}))),[]),k=(0,c.useCallback)(function(){var e=(0,a.Z)(s().mark((function e(t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("trends"!==n){e.next=14;break}return e.next=3,l.ZP.get("/trending/movie/week",{params:{api_key:d,page:t}});case 3:if(!(r=e.sent)){e.next=12;break}return e.t0=P,e.t1=r.data,e.next=9,w;case 9:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),b(r.data);case 12:e.next=28;break;case 14:if("searchMovie"!==n){e.next=28;break}if(o){e.next=17;break}return e.abrupt("return");case 17:return e.next=19,l.ZP.get("/search/movie",{params:{api_key:d,page:t,query:o}});case 19:if(!(a=e.sent)){e.next=28;break}return e.t3=P,e.t4=a.data,e.next=25,w;case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5),b(a.data);case 28:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[o,w,n]),y=(0,c.useCallback)(function(){var n=(0,a.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k(e);case 2:t={page:e},(r=m.get("query"))&&(t.query=r),h(t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[k,h]);(0,c.useEffect)((function(){(0,a.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k(m.get("page")||1);case 2:case"end":return n.stop()}}),n)})))()}),[k]);var P=function(n,e){if(e){var t,a=(0,r.Z)(n.results);try{for(a.s();!(t=a.n()).done;){var i=t.value;i.genres=[];var o,s=(0,r.Z)(i.genre_ids);try{var c=function(){var n=o.value,t=e.find((function(e){return e.id===n}));i.genres.push({id:t.id,name:t.name})};for(s.s();!(o=s.n()).done;)c()}catch(u){s.e(u)}finally{s.f()}}}catch(u){a.e(u)}finally{a.f()}}};return{data:Z,handlePage:y,setQuery:f}}l.ZP.defaults.baseURL="https://api.themoviedb.org/3/"},993:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,a=t(9784),i=t(8079),o=t(9155),s=t(9425),c=t(885),u=t(3881),l=t.n(u),d=t(2791),f=t(6355),p=t(168),x=t(6444).ZP.div(r||(r=(0,p.Z)(["\n  position: fixed;\n  width: 100%;\n  left: 90%;\n  bottom: 60px;\n  height: 20px;\n  font-size: 3rem;\n  z-index: 1;\n  cursor: pointer;\n  color: ",";\n"])),(function(n){return n.theme.colors.accent})),m=t(184);function h(){var n=(0,d.useState)(!1),e=(0,c.Z)(n,2),t=e[0],r=e[1];(0,d.useEffect)((function(){return window.addEventListener("scroll",l()((function(n){a(n)}),500)),function(){window.removeEventListener("scroll",a())}}),[]);var a=function(){var n=document.documentElement.scrollTop,e=document.documentElement.clientHeight;r(n>e)};return(0,m.jsx)(x,{children:(0,m.jsx)(f.nbd,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:t?"inline":"none"}})})}function g(){var n=(0,i.Z)("trends"),e=n.data,t=n.handlePage;if(e)return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Z,{titleText:"Trending today"}),(0,m.jsx)(a.Z,{items:e.results}),(0,m.jsx)(s.Z,{totalItems:e.total_pages,currentPage:null===e||void 0===e?void 0:e.page,updateCurrentPage:t}),(0,m.jsx)(h,{})]})}},2785:function(n,e,t){n.exports=t.p+"static/media/empty.716616fe664224e2915b.png"}}]);
//# sourceMappingURL=724.2b7fb05f.chunk.js.map