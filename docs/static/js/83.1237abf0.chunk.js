(this.webpackJsonpcyfral=this.webpackJsonpcyfral||[]).push([[83],{1280:function(e,t,a){"use strict";a.r(t);var c=a(30),n=a.n(c),r=a(103),l=a(73),s=a(0),o=a(562),i=a.n(o),m=a(312),u=a(533),d=a(3337),b=a(471),p=a(121),v=a(623),f=a(2),j={name:[{required:!0,message:"Por favor digite el nombre de la zona"},{whitespace:!0,message:"Nombre de la zona no puede ser un caracter en blanco"},{min:3,message:"EL nombre minimo debe tener 3 caracteres"}]};t.default=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=(t[1],Object(s.useState)(!1)),o=Object(l.a)(c,2),O=o[0],h=o[1],g=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,"https://cyfral.herokuapp.com/api/zones",e.next=5,i.a.post("https://cyfral.herokuapp.com/api/zones",t,{headers:{"x-token":localStorage.getItem("x-token")}});case 5:a=e.sent,console.log(a),h(!1),m.b.success({content:"Estacion creada correctamente!",duration:2}),document.getElementById("miformulario").reset(),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),console.error("Error: ",{error:e.t0}),m.b.error("Error al crear zona",4),h(!1);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:a?v.a:Object(f.jsx)(u.a,{children:Object(f.jsxs)(d.a,{id:"miformulario",layout:"vertical",name:"register-form",onFinish:g,onFinishFailed:function(e){console.log(e)},children:[Object(f.jsx)(d.a.Item,{name:"zone",label:"Nombre de la zona",rules:j.name,hasFeedback:!0,children:Object(f.jsx)(b.a,{size:"small"})}),Object(f.jsx)(d.a.Item,{children:Object(f.jsx)(p.a,{type:"primary",htmlType:"submit",block:!0,loading:O,children:"Crear zona"})})]})})})}},533:function(e,t,a){"use strict";var c=a(5),n=a(3),r=a(0),l=a(6),s=a.n(l),o=a(37),i=a(49),m=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},u=function(e){var t=e.prefixCls,a=e.className,l=e.hoverable,o=void 0===l||l,u=m(e,["prefixCls","className","hoverable"]);return r.createElement(i.a,null,(function(e){var l=(0,e.getPrefixCls)("card",t),i=s()("".concat(l,"-grid"),a,Object(c.a)({},"".concat(l,"-grid-hoverable"),o));return r.createElement("div",Object(n.a)({},u,{className:i}))}))},d=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},b=function(e){return r.createElement(i.a,null,(function(t){var a=t.getPrefixCls,c=e.prefixCls,l=e.className,o=e.avatar,i=e.title,m=e.description,u=d(e,["prefixCls","className","avatar","title","description"]),b=a("card",c),p=s()("".concat(b,"-meta"),l),v=o?r.createElement("div",{className:"".concat(b,"-meta-avatar")},o):null,f=i?r.createElement("div",{className:"".concat(b,"-meta-title")},i):null,j=m?r.createElement("div",{className:"".concat(b,"-meta-description")},m):null,O=f||j?r.createElement("div",{className:"".concat(b,"-meta-detail")},f,j):null;return r.createElement("div",Object(n.a)({},u,{className:p}),v,O)}))},p=a(532),v=a(527),f=a(528),j=a(56),O=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a};var h=function(e){var t,a,l,m=r.useContext(i.b),d=m.getPrefixCls,b=m.direction,h=r.useContext(j.b),g=e.prefixCls,y=e.className,x=e.extra,E=e.headStyle,C=void 0===E?{}:E,N=e.bodyStyle,w=void 0===N?{}:N,P=e.title,k=e.loading,z=e.bordered,q=void 0===z||z,S=e.size,T=e.type,A=e.cover,I=e.actions,B=e.tabList,K=e.children,M=e.activeTabKey,F=e.defaultActiveTabKey,L=e.tabBarExtraContent,X=e.hoverable,H=e.tabProps,D=void 0===H?{}:H,J=O(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),V=d("card",g),Y=0===w.padding||"0px"===w.padding?{padding:24}:void 0,G=r.createElement("div",{className:"".concat(V,"-loading-block")}),Q=r.createElement("div",{className:"".concat(V,"-loading-content"),style:Y},r.createElement(v.a,{gutter:8},r.createElement(f.a,{span:22},G)),r.createElement(v.a,{gutter:8},r.createElement(f.a,{span:8},G),r.createElement(f.a,{span:15},G)),r.createElement(v.a,{gutter:8},r.createElement(f.a,{span:6},G),r.createElement(f.a,{span:18},G)),r.createElement(v.a,{gutter:8},r.createElement(f.a,{span:13},G),r.createElement(f.a,{span:9},G)),r.createElement(v.a,{gutter:8},r.createElement(f.a,{span:4},G),r.createElement(f.a,{span:3},G),r.createElement(f.a,{span:16},G))),R=void 0!==M,U=Object(n.a)(Object(n.a)({},D),(t={},Object(c.a)(t,R?"activeKey":"defaultActiveKey",R?M:F),Object(c.a)(t,"tabBarExtraContent",L),t)),W=B&&B.length?r.createElement(p.a,Object(n.a)({size:"large"},U,{className:"".concat(V,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),B.map((function(e){return r.createElement(p.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(P||x||W)&&(l=r.createElement("div",{className:"".concat(V,"-head"),style:C},r.createElement("div",{className:"".concat(V,"-head-wrapper")},P&&r.createElement("div",{className:"".concat(V,"-head-title")},P),x&&r.createElement("div",{className:"".concat(V,"-extra")},x)),W));var Z=A?r.createElement("div",{className:"".concat(V,"-cover")},A):null,$=r.createElement("div",{className:"".concat(V,"-body"),style:w},k?Q:K),_=I&&I.length?r.createElement("ul",{className:"".concat(V,"-actions")},function(e){return e.map((function(t,a){return r.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},r.createElement("span",null,t))}))}(I)):null,ee=Object(o.a)(J,["onTabChange"]),te=S||h,ae=s()(V,(a={},Object(c.a)(a,"".concat(V,"-loading"),k),Object(c.a)(a,"".concat(V,"-bordered"),q),Object(c.a)(a,"".concat(V,"-hoverable"),X),Object(c.a)(a,"".concat(V,"-contain-grid"),function(){var t;return r.Children.forEach(e.children,(function(e){e&&e.type&&e.type===u&&(t=!0)})),t}()),Object(c.a)(a,"".concat(V,"-contain-tabs"),B&&B.length),Object(c.a)(a,"".concat(V,"-").concat(te),te),Object(c.a)(a,"".concat(V,"-type-").concat(T),!!T),Object(c.a)(a,"".concat(V,"-rtl"),"rtl"===b),a),y);return r.createElement("div",Object(n.a)({},ee,{className:ae}),l,Z,$,_)};h.Grid=u,h.Meta=b;t.a=h},623:function(e,t,a){"use strict";var c=a(90),n=a(91),r=a(117),l=a(118),s=a(0),o=a(533),i=a(519),m=a(509),u=a(646),d=a(503),b=a(472),p=a(158),v=a(2),f=o.a.Meta,j=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0},e.onChange=function(t){e.setState({loading:!t})},e}return Object(n.a)(a,[{key:"render",value:function(){var e=this.state.loading;return Object(v.jsxs)("div",{children:[Object(v.jsx)(i.a,{checked:!e,onChange:this.onChange}),Object(v.jsx)(o.a,{style:{width:300,marginTop:16},loading:e,children:Object(v.jsx)(f,{avatar:Object(v.jsx)(m.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Card title",description:"This is the description"})}),Object(v.jsx)(o.a,{style:{width:300,marginTop:16},actions:[Object(v.jsx)(d.a,{},"setting"),Object(v.jsx)(b.a,{},"edit"),Object(v.jsx)(p.a,{},"ellipsis")],children:Object(v.jsx)(u.a,{loading:e,avatar:!0,active:!0,children:Object(v.jsx)(f,{avatar:Object(v.jsx)(m.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Card title",description:"This is the description"})})})]})}}]),a}(s.Component);t.a=j},646:function(e,t,a){"use strict";var c=a(5),n=a(3),r=a(24),l=a(0),s=a(6),o=a.n(s),i=function(e){var t=e.prefixCls,a=e.className,c=e.width,r=e.style;return l.createElement("h3",{className:o()(t,a),style:Object(n.a)({width:c},r)})},m=a(13),u=function(e){var t=function(t){var a=e.width,c=e.rows,n=void 0===c?2:c;return Array.isArray(a)?a[t]:n-1===t?a:void 0},a=e.prefixCls,c=e.className,n=e.style,r=e.rows,s=Object(m.a)(Array(r)).map((function(e,a){return l.createElement("li",{key:a,style:{width:t(a)}})}));return l.createElement("ul",{className:o()(a,c),style:n},s)},d=a(49),b=function(e){var t,a,r=e.prefixCls,s=e.className,i=e.style,m=e.size,u=e.shape,d=o()((t={},Object(c.a)(t,"".concat(r,"-lg"),"large"===m),Object(c.a)(t,"".concat(r,"-sm"),"small"===m),t)),b=o()((a={},Object(c.a)(a,"".concat(r,"-circle"),"circle"===u),Object(c.a)(a,"".concat(r,"-square"),"square"===u),Object(c.a)(a,"".concat(r,"-round"),"round"===u),a)),p="number"===typeof m?{width:m,height:m,lineHeight:"".concat(m,"px")}:{};return l.createElement("span",{className:o()(r,d,b,s),style:Object(n.a)(Object(n.a)({},p),i)})},p=a(37),v=function(e){var t=function(t){var a=t.getPrefixCls,r=e.prefixCls,s=e.className,i=e.active,m=a("skeleton",r),u=Object(p.a)(e,["prefixCls","className"]),d=o()(m,"".concat(m,"-element"),Object(c.a)({},"".concat(m,"-active"),i),s);return l.createElement("div",{className:d},l.createElement(b,Object(n.a)({prefixCls:"".concat(m,"-avatar")},u)))};return l.createElement(d.a,null,t)};v.defaultProps={size:"default",shape:"circle"};var f=v,j=function(e){var t=function(t){var a,r=t.getPrefixCls,s=e.prefixCls,i=e.className,m=e.active,u=e.block,d=void 0!==u&&u,v=r("skeleton",s),f=Object(p.a)(e,["prefixCls"]),j=o()(v,"".concat(v,"-element"),(a={},Object(c.a)(a,"".concat(v,"-active"),m),Object(c.a)(a,"".concat(v,"-block"),d),a),i);return l.createElement("div",{className:j},l.createElement(b,Object(n.a)({prefixCls:"".concat(v,"-button")},f)))};return l.createElement(d.a,null,t)};j.defaultProps={size:"default"};var O=j,h=function(e){var t=function(t){var a=t.getPrefixCls,r=e.prefixCls,s=e.className,i=e.active,m=a("skeleton",r),u=Object(p.a)(e,["prefixCls"]),d=o()(m,"".concat(m,"-element"),Object(c.a)({},"".concat(m,"-active"),i),s);return l.createElement("div",{className:d},l.createElement(b,Object(n.a)({prefixCls:"".concat(m,"-input")},u)))};return l.createElement(d.a,null,t)};h.defaultProps={size:"default"};var g=h,y=function(e){var t=function(t){var a=t.getPrefixCls,c=e.prefixCls,n=e.className,r=e.style,s=a("skeleton",c),i=o()(s,"".concat(s,"-element"),n);return l.createElement("div",{className:i},l.createElement("div",{className:o()("".concat(s,"-image"),n),style:r},l.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(s,"-image-svg")},l.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(s,"-image-path")}))))};return l.createElement(d.a,null,t)};function x(e){return e&&"object"===Object(r.a)(e)?e:{}}var E=function(e){var t=function(t){var a=t.getPrefixCls,r=t.direction,s=e.prefixCls,m=e.loading,d=e.className,p=e.children,v=e.avatar,f=e.title,j=e.paragraph,O=e.active,h=e.round,g=a("skeleton",s);if(m||!("loading"in e)){var y,E,C,N=!!v,w=!!f,P=!!j;if(N){var k=Object(n.a)(Object(n.a)({prefixCls:"".concat(g,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(w,P)),x(v));E=l.createElement("div",{className:"".concat(g,"-header")},l.createElement(b,k))}if(w||P){var z,q;if(w){var S=Object(n.a)(Object(n.a)({prefixCls:"".concat(g,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(N,P)),x(f));z=l.createElement(i,S)}if(P){var T=Object(n.a)(Object(n.a)({prefixCls:"".concat(g,"-paragraph")},function(e,t){var a={};return e&&t||(a.width="61%"),a.rows=!e&&t?3:2,a}(N,w)),x(j));q=l.createElement(u,T)}C=l.createElement("div",{className:"".concat(g,"-content")},z,q)}var A=o()(g,(y={},Object(c.a)(y,"".concat(g,"-with-avatar"),N),Object(c.a)(y,"".concat(g,"-active"),O),Object(c.a)(y,"".concat(g,"-rtl"),"rtl"===r),Object(c.a)(y,"".concat(g,"-round"),h),y),d);return l.createElement("div",{className:A},E,C)}return p};return l.createElement(d.a,null,t)};E.defaultProps={avatar:!1,title:!0,paragraph:!0},E.Button=O,E.Avatar=f,E.Input=g,E.Image=y;var C=E;t.a=C}}]);
//# sourceMappingURL=83.1237abf0.chunk.js.map