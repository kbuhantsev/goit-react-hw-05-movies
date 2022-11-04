"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[649],{9784:function(n,e,t){t.d(e,{Z:function(){return k}});t(2791);var r,a,i,o,u,s,c,l=t(7689),f=t(168),d=t(1087),p=t(6444),m=(0,p.ZP)(d.rU)(r||(r=(0,f.Z)(["\n  display: block;\n  height: 100%;\n"]))),h=p.ZP.ul(a||(a=(0,f.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  row-gap: 20px;\n  column-gap: 20px;\n  padding-top: 20px;\n  padding-bottom: 40px;\n"]))),x=p.ZP.li(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n  overflow: hidden;\n  flex-basis: 280px;\n  transition: transform ",";\n\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 20px * 2) / 3);\n  }\n\n  @media screen and (min-width: 1280px) {\n    flex-basis: calc((100% - 20px * 3) / 4);\n  }\n\n  &:hover {\n    transform: scale(1.02);\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.animation.easeFast})),g=p.ZP.img(o||(o=(0,f.Z)(["\n  width: 100%;\n  /* height: 400px; */\n\n  @media screen and (min-width: 768px) {\n    /* height: 450px; */\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* height: 575px; */\n  }\n"]))),v=p.ZP.ul(u||(u=(0,f.Z)(["\n  padding: 10px 5px;\n  gap: 5px;\n"]))),b=p.ZP.p(s||(s=(0,f.Z)(["\n  color: ",";\n  font-weight: ",";\n  font-size: ",";\n  text-transform: uppercase;\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.fontSizes.m})),Z=p.ZP.p(c||(c=(0,f.Z)(["\n  color: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontWeights.medium})),w=t(2785),y=t(184);function k(n){var e=n.items,t=(0,l.TH)(),r=function(n){n.target.src=w,n.target.style.height="400px"};return(0,y.jsx)(h,{children:e.map((function(n){var e=n.poster_path,a=n.release_date,i=n.genres,o=n.id,u=n.title;return(0,y.jsx)(x,{children:(0,y.jsxs)(m,{to:"/movies/"+o,state:{from:t},children:[(0,y.jsx)(g,{src:e?"https://image.tmdb.org/t/p/w780/"+e:"#",className:"gallery__image",alt:e?u:"broken",loading:"lazy",width:"280",onError:r}),(0,y.jsxs)(v,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(b,{children:u})}),(0,y.jsx)("li",{children:(0,y.jsxs)(Z,{children:[null===i||void 0===i?void 0:i.slice(0,3).map((function(n){return n.name})).join(", "),"\xa0",null===a||void 0===a?void 0:a.slice(0,4)]})})]})]})},o)}))})}},9155:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(4476),a=(t(2791),t(6444)),i=t(184);function o(n){var e=n.titleText,t=void 0===e?"":e,o=(0,a.Fg)();return(0,i.jsx)(r.Z,{backgroundColor:o.colors.main,alignItems:"center",pt:2,pb:2,mt:4,borderRadius:"normal",children:(0,i.jsx)(r.Z,{as:"h2",children:t})})}},9425:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(2791),a=t(9718),i=t.n(a),o=(t(6892),t(184));function u(n){var e=n.totalItems,t=n.currentPage,a=n.updateCurrentPage,u=(0,r.useRef)(null);return(0,r.useEffect)((function(){var n=new(i())(u.current,{totalItems:e,itemsPerPage:20,visiblePages:5});n.movePageTo(t),n.on("beforeMove",(function(n){var e=n.page;a(e),window.scrollTo({top:100,behavior:"smooth"})}))}),[t,e,a]),(0,o.jsx)("div",{ref:u,id:"tui-pagination-container",className:"tui-pagination"})}},1339:function(n,e,t){t.d(e,{L1:function(){return l},OQ:function(){return d},l_:function(){return f},tN:function(){return c}});var r,a,i,o,u=t(168),s=t(6444),c=s.ZP.form(r||(r=(0,u.Z)(["\n  display: flex;\n  gap: 5px;\n  margin: 20px;\n"]))),l=s.ZP.label(a||(a=(0,u.Z)(["\n  align-self: center;\n"]))),f=s.ZP.input(i||(i=(0,u.Z)(["\n  border: 1px solid ",";\n"])),(function(n){return n.theme.colors.main})),d=s.ZP.button(o||(o=(0,u.Z)(["\n  display: inline-flex;\n  width: fit-content;\n  gap: 5px;\n  cursor: pointer;\n  font-size: ",";\n  font-weight: ",";\n  padding: 4px 8px;\n  border-radius: ",";\n  color: ",";\n  border: 1px solid ",";\n\n  transition: background-color ",",\n    color ",";\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.animation.easeFast}),(function(n){return n.theme.animation.easeFast}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}))},8079:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(7762),a=t(5861),i=t(885),o=t(7757),u=t.n(o),s=t(2791),c=t(1087),l=t(1044),f="99eb21030dfb3afeff4792ddc8f57a63";function d(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"trends",e=(0,s.useState)(null),t=(0,i.Z)(e,2),o=t[0],d=t[1],p=(0,c.lr)(),m=(0,i.Z)(p,2),h=m[0],x=m[1],g=(0,s.useState)(null),v=(0,i.Z)(g,2),b=v[0],Z=v[1],w=(0,s.useMemo)((0,a.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.ZP.get("/genre/movie/list",{params:{api_key:f}});case 2:return e=n.sent,n.abrupt("return",e.data.genres);case 4:case"end":return n.stop()}}),n)}))),[]),y=(0,s.useCallback)(function(){var e=(0,a.Z)(u().mark((function e(t){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("trends"!==n){e.next=14;break}return e.next=3,l.ZP.get("/trending/movie/week",{params:{api_key:f,page:t}});case 3:if(!(r=e.sent)){e.next=12;break}return e.t0=j,e.t1=r.data,e.next=9,w;case 9:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),Z(r.data);case 12:e.next=28;break;case 14:if("searchMovie"!==n){e.next=28;break}if(o){e.next=17;break}return e.abrupt("return");case 17:return e.next=19,l.ZP.get("/search/movie",{params:{api_key:f,page:t,query:o}});case 19:if(!(a=e.sent)){e.next=28;break}return e.t3=j,e.t4=a.data,e.next=25,w;case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5),Z(a.data);case 28:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[o,w,n]),k=(0,s.useCallback)(function(){var n=(0,a.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y(e);case 2:t={page:e},(r=h.get("query"))&&(t.query=r),x(t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[y,x]);(0,s.useEffect)((function(){(0,a.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y(h.get("page")||1);case 2:case"end":return n.stop()}}),n)})))()}),[y]);var j=function(n,e){if(e){var t,a=(0,r.Z)(n.results);try{for(a.s();!(t=a.n()).done;){var i=t.value;i.genres=[];var o,u=(0,r.Z)(i.genre_ids);try{var s=function(){var n=o.value,t=e.find((function(e){return e.id===n}));i.genres.push({id:t.id,name:t.name})};for(u.s();!(o=u.n()).done;)s()}catch(c){u.e(c)}finally{u.f()}}}catch(c){a.e(c)}finally{a.f()}}};return{data:b,handlePage:k,setQuery:d}}l.ZP.defaults.baseURL="https://api.themoviedb.org/3/"},1743:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r=t(885),a=t(9784),i=t(8079),o=t(9155),u=t(9425),s=t(2791),c=t(5705),l=t(2797),f=t(1087),d=t(1339),p=t(6907),m=t(184);function h(){var n=(0,f.lr)(),e=(0,r.Z)(n,2),t=e[0],a=e[1],i=t.get("query"),o=(0,c.TA)({initialValues:{input:null!==i&&void 0!==i?i:""},onSubmit:function(n){var e=n.input;a({query:e})},validationSchema:l.Ry({input:l.Z_().min(2,"Must be 2 characters or more").required("Required")})});return(0,m.jsxs)(d.tN,{onSubmit:o.handleSubmit,children:[(0,m.jsx)(d.L1,{htmlFor:"input",children:"Film name:"}),(0,m.jsx)(d.l_,{id:"input",name:"input",type:"text",onChange:o.handleChange,value:o.values.input,placeholder:"Batman"}),(0,m.jsxs)(d.OQ,{type:"submit",children:[(0,m.jsx)(p.tHH,{}),"Search"]})]})}function x(){var n=(0,i.Z)("searchMovie"),e=n.data,t=n.handlePage,c=n.setQuery,l=(0,f.lr)(),d=(0,r.Z)(l,1)[0];return(0,s.useEffect)((function(){var n=d.get("query");c(n||null)}),[d,c]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Z,{titleText:"Movies search"}),(0,m.jsx)(h,{}),e&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.Z,{items:e.results}),(0,m.jsx)(u.Z,{totalItems:e.total_results,currentPage:null===e||void 0===e?void 0:e.page,updateCurrentPage:t})]})]})}},2785:function(n,e,t){n.exports=t.p+"static/media/empty.716616fe664224e2915b.png"}}]);
//# sourceMappingURL=649.e6559e0e.chunk.js.map