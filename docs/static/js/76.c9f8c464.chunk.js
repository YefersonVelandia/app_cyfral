(this.webpackJsonpcyfral=this.webpackJsonpcyfral||[]).push([[76],{1284:function(e,t,a){"use strict";a.r(t);var c=a(30),n=a.n(c),r=a(103),l=a(73),i=a(0),o=a(562),s=a.n(o),u=a(533),d=a(1086),m=a(729),p=a(543),v=a(623),b=a(2);t.default=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],o=[{key:"1",title:"Nombre",dataIndex:"name",sorter:{compare:function(e,t){return(e=e.name.toLowerCase())>(t=t.name.toLowerCase())?-1:t>e?1:0}}},{key:"2",title:"Apellido",dataIndex:"lastname",sorter:{compare:function(e,t){return e.lastname.length-t.lastname.length}}},{key:"3",title:"Email",dataIndex:"email",sorter:{compare:function(e,t){return e.email.length-t.email.length}}},{key:"4",title:"Documento",dataIndex:"document",sorter:{compare:function(e,t){return e.document-t.document}}},{key:"5",title:"Rol",dataIndex:"role",sorter:{compare:function(e,t){return e.role.length-t.role.length}}},{key:"6",title:"Acciones ",dataIndex:"acciones",render:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m.a,{}),Object(b.jsx)(p.a,{onClick:function(){f(a[0].uid)},style:{color:"red",marginLeft:12}})]})}}];Object(i.useEffect)((function(){j()}),[]);var f=function(e){console.log("mi id : ",e)},j=function(){var e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cyfral.herokuapp.com/api/users",e.prev=1,e.next=4,s.a.get("https://cyfral.herokuapp.com/api/users",{headers:{"x-token":localStorage.getItem("x-token")}});case 4:t=e.sent,c(t.data.users),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[a?Object(b.jsx)(u.a,{bodyStyle:{padding:"0px"},children:Object(b.jsx)("div",{className:"table-responsive",children:Object(b.jsx)(d.a,{columns:o,dataSource:a},a.uid)})}):v.a,console.log(typeof a)]})}},533:function(e,t,a){"use strict";var c=a(5),n=a(3),r=a(0),l=a(6),i=a.n(l),o=a(37),s=a(49),u=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},d=function(e){var t=e.prefixCls,a=e.className,l=e.hoverable,o=void 0===l||l,d=u(e,["prefixCls","className","hoverable"]);return r.createElement(s.a,null,(function(e){var l=(0,e.getPrefixCls)("card",t),s=i()("".concat(l,"-grid"),a,Object(c.a)({},"".concat(l,"-grid-hoverable"),o));return r.createElement("div",Object(n.a)({},d,{className:s}))}))},m=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},p=function(e){return r.createElement(s.a,null,(function(t){var a=t.getPrefixCls,c=e.prefixCls,l=e.className,o=e.avatar,s=e.title,u=e.description,d=m(e,["prefixCls","className","avatar","title","description"]),p=a("card",c),v=i()("".concat(p,"-meta"),l),b=o?r.createElement("div",{className:"".concat(p,"-meta-avatar")},o):null,f=s?r.createElement("div",{className:"".concat(p,"-meta-title")},s):null,j=u?r.createElement("div",{className:"".concat(p,"-meta-description")},u):null,h=f||j?r.createElement("div",{className:"".concat(p,"-meta-detail")},f,j):null;return r.createElement("div",Object(n.a)({},d,{className:v}),b,h)}))},v=a(532),b=a(527),f=a(528),j=a(56),h=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a};var O=function(e){var t,a,l,u=r.useContext(s.b),m=u.getPrefixCls,p=u.direction,O=r.useContext(j.b),g=e.prefixCls,y=e.className,x=e.extra,E=e.headStyle,C=void 0===E?{}:E,N=e.bodyStyle,w=void 0===N?{}:N,k=e.title,P=e.loading,z=e.bordered,S=void 0===z||z,q=e.size,T=e.type,A=e.cover,I=e.actions,L=e.tabList,M=e.children,H=e.activeTabKey,B=e.defaultActiveTabKey,K=e.tabBarExtraContent,D=e.hoverable,X=e.tabProps,F=void 0===X?{}:X,R=h(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),J=m("card",g),V=0===w.padding||"0px"===w.padding?{padding:24}:void 0,Y=r.createElement("div",{className:"".concat(J,"-loading-block")}),G=r.createElement("div",{className:"".concat(J,"-loading-content"),style:V},r.createElement(b.a,{gutter:8},r.createElement(f.a,{span:22},Y)),r.createElement(b.a,{gutter:8},r.createElement(f.a,{span:8},Y),r.createElement(f.a,{span:15},Y)),r.createElement(b.a,{gutter:8},r.createElement(f.a,{span:6},Y),r.createElement(f.a,{span:18},Y)),r.createElement(b.a,{gutter:8},r.createElement(f.a,{span:13},Y),r.createElement(f.a,{span:9},Y)),r.createElement(b.a,{gutter:8},r.createElement(f.a,{span:4},Y),r.createElement(f.a,{span:3},Y),r.createElement(f.a,{span:16},Y))),Q=void 0!==H,U=Object(n.a)(Object(n.a)({},F),(t={},Object(c.a)(t,Q?"activeKey":"defaultActiveKey",Q?H:B),Object(c.a)(t,"tabBarExtraContent",K),t)),W=L&&L.length?r.createElement(v.a,Object(n.a)({size:"large"},U,{className:"".concat(J,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),L.map((function(e){return r.createElement(v.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(k||x||W)&&(l=r.createElement("div",{className:"".concat(J,"-head"),style:C},r.createElement("div",{className:"".concat(J,"-head-wrapper")},k&&r.createElement("div",{className:"".concat(J,"-head-title")},k),x&&r.createElement("div",{className:"".concat(J,"-extra")},x)),W));var Z=A?r.createElement("div",{className:"".concat(J,"-cover")},A):null,$=r.createElement("div",{className:"".concat(J,"-body"),style:w},P?G:M),_=I&&I.length?r.createElement("ul",{className:"".concat(J,"-actions")},function(e){return e.map((function(t,a){return r.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},r.createElement("span",null,t))}))}(I)):null,ee=Object(o.a)(R,["onTabChange"]),te=q||O,ae=i()(J,(a={},Object(c.a)(a,"".concat(J,"-loading"),P),Object(c.a)(a,"".concat(J,"-bordered"),S),Object(c.a)(a,"".concat(J,"-hoverable"),D),Object(c.a)(a,"".concat(J,"-contain-grid"),function(){var t;return r.Children.forEach(e.children,(function(e){e&&e.type&&e.type===d&&(t=!0)})),t}()),Object(c.a)(a,"".concat(J,"-contain-tabs"),L&&L.length),Object(c.a)(a,"".concat(J,"-").concat(te),te),Object(c.a)(a,"".concat(J,"-type-").concat(T),!!T),Object(c.a)(a,"".concat(J,"-rtl"),"rtl"===p),a),y);return r.createElement("div",Object(n.a)({},ee,{className:ae}),l,Z,$,_)};O.Grid=d,O.Meta=p;t.a=O},543:function(e,t,a){"use strict";var c=a(1),n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},l=a(9),i=function(e,t){return n.createElement(l.a,Object(c.a)(Object(c.a)({},e),{},{ref:t,icon:r}))};i.displayName="DeleteOutlined";t.a=n.forwardRef(i)},623:function(e,t,a){"use strict";var c=a(90),n=a(91),r=a(117),l=a(118),i=a(0),o=a(533),s=a(519),u=a(509),d=a(646),m=a(503),p=a(472),v=a(158),b=a(2),f=o.a.Meta,j=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0},e.onChange=function(t){e.setState({loading:!t})},e}return Object(n.a)(a,[{key:"render",value:function(){var e=this.state.loading;return Object(b.jsxs)("div",{children:[Object(b.jsx)(s.a,{checked:!e,onChange:this.onChange}),Object(b.jsx)(o.a,{style:{width:300,marginTop:16},loading:e,children:Object(b.jsx)(f,{avatar:Object(b.jsx)(u.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Card title",description:"This is the description"})}),Object(b.jsx)(o.a,{style:{width:300,marginTop:16},actions:[Object(b.jsx)(m.a,{},"setting"),Object(b.jsx)(p.a,{},"edit"),Object(b.jsx)(v.a,{},"ellipsis")],children:Object(b.jsx)(d.a,{loading:e,avatar:!0,active:!0,children:Object(b.jsx)(f,{avatar:Object(b.jsx)(u.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Card title",description:"This is the description"})})})]})}}]),a}(i.Component);t.a=j},646:function(e,t,a){"use strict";var c=a(5),n=a(3),r=a(24),l=a(0),i=a(6),o=a.n(i),s=function(e){var t=e.prefixCls,a=e.className,c=e.width,r=e.style;return l.createElement("h3",{className:o()(t,a),style:Object(n.a)({width:c},r)})},u=a(13),d=function(e){var t=function(t){var a=e.width,c=e.rows,n=void 0===c?2:c;return Array.isArray(a)?a[t]:n-1===t?a:void 0},a=e.prefixCls,c=e.className,n=e.style,r=e.rows,i=Object(u.a)(Array(r)).map((function(e,a){return l.createElement("li",{key:a,style:{width:t(a)}})}));return l.createElement("ul",{className:o()(a,c),style:n},i)},m=a(49),p=function(e){var t,a,r=e.prefixCls,i=e.className,s=e.style,u=e.size,d=e.shape,m=o()((t={},Object(c.a)(t,"".concat(r,"-lg"),"large"===u),Object(c.a)(t,"".concat(r,"-sm"),"small"===u),t)),p=o()((a={},Object(c.a)(a,"".concat(r,"-circle"),"circle"===d),Object(c.a)(a,"".concat(r,"-square"),"square"===d),Object(c.a)(a,"".concat(r,"-round"),"round"===d),a)),v="number"===typeof u?{width:u,height:u,lineHeight:"".concat(u,"px")}:{};return l.createElement("span",{className:o()(r,m,p,i),style:Object(n.a)(Object(n.a)({},v),s)})},v=a(37),b=function(e){var t=function(t){var a=t.getPrefixCls,r=e.prefixCls,i=e.className,s=e.active,u=a("skeleton",r),d=Object(v.a)(e,["prefixCls","className"]),m=o()(u,"".concat(u,"-element"),Object(c.a)({},"".concat(u,"-active"),s),i);return l.createElement("div",{className:m},l.createElement(p,Object(n.a)({prefixCls:"".concat(u,"-avatar")},d)))};return l.createElement(m.a,null,t)};b.defaultProps={size:"default",shape:"circle"};var f=b,j=function(e){var t=function(t){var a,r=t.getPrefixCls,i=e.prefixCls,s=e.className,u=e.active,d=e.block,m=void 0!==d&&d,b=r("skeleton",i),f=Object(v.a)(e,["prefixCls"]),j=o()(b,"".concat(b,"-element"),(a={},Object(c.a)(a,"".concat(b,"-active"),u),Object(c.a)(a,"".concat(b,"-block"),m),a),s);return l.createElement("div",{className:j},l.createElement(p,Object(n.a)({prefixCls:"".concat(b,"-button")},f)))};return l.createElement(m.a,null,t)};j.defaultProps={size:"default"};var h=j,O=function(e){var t=function(t){var a=t.getPrefixCls,r=e.prefixCls,i=e.className,s=e.active,u=a("skeleton",r),d=Object(v.a)(e,["prefixCls"]),m=o()(u,"".concat(u,"-element"),Object(c.a)({},"".concat(u,"-active"),s),i);return l.createElement("div",{className:m},l.createElement(p,Object(n.a)({prefixCls:"".concat(u,"-input")},d)))};return l.createElement(m.a,null,t)};O.defaultProps={size:"default"};var g=O,y=function(e){var t=function(t){var a=t.getPrefixCls,c=e.prefixCls,n=e.className,r=e.style,i=a("skeleton",c),s=o()(i,"".concat(i,"-element"),n);return l.createElement("div",{className:s},l.createElement("div",{className:o()("".concat(i,"-image"),n),style:r},l.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(i,"-image-svg")},l.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(i,"-image-path")}))))};return l.createElement(m.a,null,t)};function x(e){return e&&"object"===Object(r.a)(e)?e:{}}var E=function(e){var t=function(t){var a=t.getPrefixCls,r=t.direction,i=e.prefixCls,u=e.loading,m=e.className,v=e.children,b=e.avatar,f=e.title,j=e.paragraph,h=e.active,O=e.round,g=a("skeleton",i);if(u||!("loading"in e)){var y,E,C,N=!!b,w=!!f,k=!!j;if(N){var P=Object(n.a)(Object(n.a)({prefixCls:"".concat(g,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(w,k)),x(b));E=l.createElement("div",{className:"".concat(g,"-header")},l.createElement(p,P))}if(w||k){var z,S;if(w){var q=Object(n.a)(Object(n.a)({prefixCls:"".concat(g,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(N,k)),x(f));z=l.createElement(s,q)}if(k){var T=Object(n.a)(Object(n.a)({prefixCls:"".concat(g,"-paragraph")},function(e,t){var a={};return e&&t||(a.width="61%"),a.rows=!e&&t?3:2,a}(N,w)),x(j));S=l.createElement(d,T)}C=l.createElement("div",{className:"".concat(g,"-content")},z,S)}var A=o()(g,(y={},Object(c.a)(y,"".concat(g,"-with-avatar"),N),Object(c.a)(y,"".concat(g,"-active"),h),Object(c.a)(y,"".concat(g,"-rtl"),"rtl"===r),Object(c.a)(y,"".concat(g,"-round"),O),y),m);return l.createElement("div",{className:A},E,C)}return v};return l.createElement(m.a,null,t)};E.defaultProps={avatar:!1,title:!0,paragraph:!0},E.Button=h,E.Avatar=f,E.Input=g,E.Image=y;var C=E;t.a=C},729:function(e,t,a){"use strict";var c=a(1),n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"}}]},name:"edit",theme:"filled"},l=a(9),i=function(e,t){return n.createElement(l.a,Object(c.a)(Object(c.a)({},e),{},{ref:t,icon:r}))};i.displayName="EditFilled";t.a=n.forwardRef(i)}}]);
//# sourceMappingURL=76.c9f8c464.chunk.js.map