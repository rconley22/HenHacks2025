"use strict";(self.webpackChunkhenhack25=self.webpackChunkhenhack25||[]).push([[4088],{74088:(t,e,n)=>{n.d(e,{previewSymbol2D:()=>Z});var o=n(69539),l=n(59784),i=n(50076),s=n(85504),a=n(76931),r=n(76279),h=n(87840),c=n(65709),u=n(26291),f=n(27790);const g="picture-fill",p="picture-marker",d="simple-fill",m="simple-line",y="simple-marker",w="text",x="Aa",M=c.CB.size,b=c.CB.maxSize,L=c.CB.maxOutlineSize,v=c.CB.lineWidth,z=225,S=document.createElement("canvas");function k(t,e,n){if("polygon"===t.type){const o=t.extent,l=0===o.width?1:o.width,i=0===o.height?1:o.height;t=(0,r.wp)({originPosition:"upperLeft",scale:[l/e,i/n],translate:[o.xmin,o.ymax]},{},t);let s="";for(let e=0;e<t.rings.length;e++){const n=t.rings[e];for(let t=0;t<n.length;t++){const e=n[t][0],o=n[t][1];let l="";0===t?(l=`M${e.toString()} ${o.toString()}`,""!==s&&(l=` ${l}`),s+=l):t===n.length-1?(l=`l${e.toString()} ${o.toString()} Z`,""!==s&&(l=` ${l}`),s+=l):(l=`l${e.toString()} ${o.toString()}`,""!==s&&(l=` ${l}`),s+=l)}}return s}if("polyline"===t.type){const o=t.extent,l=0===o.width?1:o.width,i=0===o.height?1:o.height;t=(0,r.QE)({originPosition:"upperLeft",scale:[l/e,i/n],translate:[o.xmin,o.ymax]},{},t);let s="";for(let e=0;e<t.paths.length;e++){const n=t.paths[e];for(let t=0;t<n.length;t++){const e=n[t][0],o=n[t][1];let l="";0===t?(l=`M${e.toString()} ${o.toString()}`,""!==s&&(l=` ${l}`),s+=l):(l=`l${e.toString()} ${o.toString()}`,""!==s&&(l=` ${l}`),s+=l)}}return s}return""}function C(t,e){const n=S.getContext("2d"),o=[];e&&(e.weight&&o.push(e.weight),e.size&&o.push(e.size+"px"),e.family&&o.push(e.family)),n.font=o.join(" ");const{width:l,actualBoundingBoxLeft:i,actualBoundingBoxRight:s,actualBoundingBoxAscent:a,actualBoundingBoxDescent:r}=n.measureText(t);return{width:Math.ceil(Math.max(l,i+s)),height:Math.ceil(a+r),x:Math.floor(i),y:Math.floor((a-r)/2)}}function $(t){const e=t?.size;return{width:null!=e&&"object"==typeof e&&"width"in e?(0,a.Lz)(e.width):null,height:null!=e&&"object"==typeof e&&"height"in e?(0,a.Lz)(e.height):null}}function P(t,e){return t>e?"dark":"light"}async function Z(t,e){const{shapeDescriptor:n,size:o,renderOptions:l,outputSize:r}=function(t,e){const n="number"==typeof e?.size?e?.size:null,o=null!=n?(0,a.Lz)(n):null,l=null!=e?.maxSize?(0,a.Lz)(e.maxSize):null;let i="angle"in t?t.angle:null;null!=e?.rotation&&(i=(i??0)+e.rotation);const s=(0,h.eH)(t);let r=(0,h.$4)(t);"dark"!==A(t,245)||e?.ignoreWhiteSymbols||(r={width:.75,...r,color:"#bdc3c7"});let u=null;const f={shape:null,fill:s,stroke:r,offset:[0,0]};r?.width&&(r.width=Math.min(r.width,L));const z=r?.width||0;let S=null!=e?.size&&(null==e?.scale||e?.scale),P=0,Z=0,B=!1;switch(t.type){case y:{const n=t.style,{width:s,height:r}=$(e);let h=s===r&&null!=s?s:null!=o?o:Math.min((0,a.Lz)(t.size),l||b);if(!0===e?.useMarkerSymbolSize&&null!==s&&null!==r){const e=Math.min((0,a.Lz)(t.size),l||b);h=e>s&&e>r?Math.min(s,r):e}switch(P=h,Z=h,n){case"circle":f.shape={type:"circle",cx:0,cy:0,r:.5*h},S||(P+=z,Z+=z);break;case"cross":f.shape={type:"path",path:[{command:"M",values:[0,.5*Z]},{command:"L",values:[P,.5*Z]},{command:"M",values:[.5*P,0]},{command:"L",values:[.5*P,Z]}]};break;case"diamond":f.shape={type:"path",path:[{command:"M",values:[0,.5*Z]},{command:"L",values:[.5*P,0]},{command:"L",values:[P,.5*Z]},{command:"L",values:[.5*P,Z]},{command:"Z",values:[]}]},S||(P+=z,Z+=z);break;case"square":f.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[P,0]},{command:"L",values:[P,Z]},{command:"L",values:[0,Z]},{command:"Z",values:[]}]},S||(P+=z,Z+=z),i&&(B=!0);break;case"triangle":f.shape={type:"path",path:[{command:"M",values:[.5*P,0]},{command:"L",values:[P,Z]},{command:"L",values:[0,Z]},{command:"Z",values:[]}]},S||(P+=z,Z+=z),i&&(B=!0);break;case"x":f.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[P,Z]},{command:"M",values:[P,0]},{command:"L",values:[0,Z]}]},i&&(B=!0);break;case"path":f.shape={type:"path",path:t.path||""},S||(P+=z,Z+=z),i&&(B=!0),S=!0}break}case m:{const{width:t,height:n}=$(e),l=(0,h.O0)(r).reduce(((t,e)=>t+e),0),i=l&&Math.ceil(v/l),s=n??o??z,a=t??(l*i||v);if(S=!0,"polyline"===e?.geometry?.type&&e?.geometry?.extent){P=a,Z=n??P;const t=1e3,o=.15*t;u=[P,Z],Z=u[0]>u[1]?t*u[1]/u[0]:t,P=u[0]>u[1]?t:t*u[0]/u[1],r?.width&&(r.width=r.width*t/(u[1]>u[0]?u[1]:u[0]),r.width>o&&(r.width=o)),f.shape={type:"path",path:k(e.geometry,P,Z)}}else P=null!=e?.maxSize?Math.min(a,e.maxSize):a,Z=s,r&&(r.width=s),f.shape={type:"path",path:[{command:"M",values:[s/2,Z/2]},{command:"L",values:[P-s/2,Z/2]}]};break}case g:case d:{const t="object"==typeof e?.symbolConfig&&!!e?.symbolConfig?.isSquareFill,{width:n,height:l}=$(e);P=!t&&n!==l||null==n?null!=o?o:M:n,Z=!t&&n!==l||null==l?P:l,S||(P+=z,Z+=z),S=!0,e?.geometry?.extent&&"polygon"===e?.geometry?.type?(u=[P,Z],Z=u[0]>u[1]?1e3*u[1]/u[0]:1e3,P=u[0]>u[1]?1e3:1e3*u[0]/u[1],f.shape={type:"path",path:k(e.geometry,P,Z)}):f.shape=t?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[P,0]},{command:"L",values:[P,Z]},{command:"L",values:[0,Z]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:c.nq.fill[0];break}case p:{const n=Math.min((0,a.Lz)(t.width),l||b),s=Math.min((0,a.Lz)(t.height),l||b),{width:r,height:h}=$(e),c=r===h&&null!=r?r:null!=o?o:Math.max(n,s),u=t.width/t.height;P=u<=1?Math.ceil(c*u):c,Z=u<=1?c:Math.ceil(c/u),f.shape={type:"image",x:-Math.round(P/2),y:-Math.round(Z/2),width:P,height:Z,src:t.url||""},i&&(B=!0);break}case w:{const n=t,i=e?.overrideText||n.text||x,s=n.font,{width:r,height:h}=$(e),c=null!=h?h:null!=o?o:Math.min((0,a.Lz)(s.size),l||b),{width:u,height:g}=C(i,{weight:s.weight,size:c,family:s.family}),p=/[\uE600-\uE6FF]/.test(i);P=r??(p?c:u),Z=p?c:g;let d=.5*(p?c:g);p&&(d+=5),f.shape={type:"text",text:i,x:n.xoffset||0,y:n.yoffset||d,align:"middle",alignBaseline:n.verticalAlignment,decoration:s&&s.decoration,rotated:n.rotated,kerning:n.kerning},f.font=s&&{size:c,style:s.style,decoration:s.decoration,weight:s.weight,family:s.family};break}}return{shapeDescriptor:f,size:[P,Z],outputSize:u,renderOptions:{node:e?.node,scale:S,opacity:e?.opacity,rotations:[i],useRotationSize:B,effectView:e?.effectView,ariaLabel:e?.ariaLabel}}}(t,e);if(!n.shape)throw new i.A("symbolPreview: renderPreviewHTML2D","symbol not supported.");await async function(t,e){const n=e.fill,o=t.color;if("pattern"===n?.type&&o&&t.type!==g){const t=await(0,h.rc)(n.src,o.toCss(!0));n.src=t,e.fill=n}}(t,n),await async function(t,e,n,o){if(!("font"in t)||!t.font||"text"!==e.shape.type)return;try{await(0,s.Al)(t.font)}catch{}const{width:l,height:i}=$(o);if(!/[\uE600-\uE6FF]/.test(e.shape.text)){const{width:s,height:a,x:r,y:h}=C(e.shape.text,{weight:e.font?.weight,size:e.font?.size,family:e.font?.family});n[0]=l??s,n[1]=i??a,e.shape.x=r,e.shape.y=h;let c="angle"in t?t.angle:null;if(null!=o?.rotation&&(c=(c??0)+o.rotation),c){const t=c*(Math.PI/180),e=Math.abs(Math.sin(t)),o=Math.abs(Math.cos(t));n[1]=n[0]*e+n[1]*o}}}(t,n,o,e);const z=[[n]];if("object"==typeof e?.symbolConfig&&e?.symbolConfig?.applyColorModulation){const t=.6*o[0];z.unshift([{...n,offset:[-t,0],fill:(0,c.QC)(n.fill,-.3)}]),z.push([{...n,offset:[t,0],fill:(0,c.QC)(n.fill,.3)}]),o[0]+=2*t,l.scale=!1}"text"===t.type&&function(t,e,n,o,l){if(null!=t.haloColor&&null!=t.haloSize){l.masking??=n.map((()=>[]));const i=(0,a.Lz)(t.haloSize);o[0]+=i,o[1]+=i,n.unshift([{...e,fill:null,stroke:{color:t.haloColor,width:2*i,join:"round",cap:"round"}}]),l.masking.unshift([{shape:{type:"rect",x:0,y:0,width:o[0]+2*f.y7,height:o[1]+2*f.y7},fill:[255,255,255],stroke:null},{...e,fill:[0,0,0,0],stroke:null}])}null==t.backgroundColor&&null==t.borderLineColor||(o[0]+=2*f.y7,o[1]+=2*f.y7,n.unshift([{shape:{type:"rect",x:0,y:0,width:o[0],height:o[1]},fill:t.backgroundColor,stroke:{color:t.borderLineColor,width:(0,a.Lz)(t.borderLineSize)}}]),l.masking?.unshift([]))}(t,n,z,o,l);const S=(0,u.fz)(z,o,l);if(r&&S){const t="img"===S.nodeName.toLowerCase()?S:S.firstChild;"svg"===t.nodeName.toLowerCase()&&t.setAttribute("viewBox",`0 0 ${o[0].toString()} ${o[1].toString()}`),t.setAttribute("width",r[0].toString()),t.setAttribute("height",r[1].toString()),r.length>2&&(t.style.setProperty("padding-left",r[2]?.toString()+"px"),t.style.setProperty("padding-right",r[2]?.toString()+"px"),t.style.setProperty("padding-top",r[3]?.toString()+"px"),t.style.setProperty("padding-bottom",r[3]?.toString()+"px"),t.style.setProperty("box-sizing","border-box"))}return S}function A(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z;const n=(0,h.eH)(t),i=(0,h.$4)(t),s=!n||"type"in n?null:new o.A(n),a=i?.color?new o.A(i?.color):null,r=s?P((0,l.Ws)(s),e):null,c=a?P((0,l.Ws)(a),e):null;return c?r?r===c?r:e>=z?"light":"dark":c:r}},76279:(t,e,n)=>{n.d(e,{$X:()=>P,B2:()=>s,Gy:()=>z,IE:()=>i,P5:()=>Z,Q1:()=>l,QE:()=>k,SW:()=>C,Tr:()=>$,VV:()=>o,wp:()=>S});n(19902);function o(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance,1,1]:[1,1,1,1],translate:null!=t.extent?[t.extent.xmin,t.extent.ymax,t.extent.zmin??0,t.extent.mmin??0]:[0,0,0,0]}:null}function l(t){if(function(t){return"lowerLeft"===t.originPosition&&4===t.scale.length&&4===t.translate.length}(t))return t;const{originPosition:e,scale:n,translate:o}=t,l=n[0]??1,i=n[1]??1;return{originPosition:"lowerLeft",scale:[l,"lowerLeft"===e?i:-i,n[2]??1,n[3]??1],translate:[o[0]??0,o[1]??0,o[2]??0,o[3]??0]}}function i(t,e){let{scale:n,translate:o}=t;return Math.round((e-o[0])/n[0])}function s(t,e){let{scale:n,translate:o}=t;return Math.round((e-o[1])/n[1])}function a(t,e){let{scale:n,translate:o}=t;return Math.round(((e??0)-o[2])/n[2])}function r(t,e){let{scale:n,translate:o}=t;return e?Math.round((e-o[3])/n[3]):0}function h(t,e){return t&&e?g:t&&!e?u:!t&&e?f:c}const c=(t,e)=>{const n=[];if(!e.length)return null;const o=e[0];let l=i(t,o[0]),a=s(t,o[1]);n.push([l,a]);for(let r=1;r<e.length;r++){const[o,h]=e[r],c=i(t,o),u=s(t,h);c===l&&u===a||n.push([c-l,u-a]),l=c,a=u}return n},u=(t,e)=>{const n=[];if(!e.length)return null;const o=e[0];let l=i(t,o[0]),r=s(t,o[1]),h=a(t,o[2]);n.push([l,r,h]);for(let c=1;c<e.length;c++){const[o,u,f]=e[c],g=i(t,o),p=s(t,u),d=a(t,f);g===l&&p===r&&d===h||n.push([g-l,p-r,d]),l=g,r=p,h=d}return n},f=(t,e)=>{const n=[];if(!e.length)return null;const o=e[0];let l=i(t,o[0]),a=s(t,o[1]),h=r(t,o[2]);n.push([l,a,h]);for(let c=1;c<e.length;c++){const[o,u,f]=e[c],g=i(t,o),p=s(t,u),d=r(t,f);g===l&&p===a&&d===h||n.push([g-l,p-a,d]),l=g,a=p,h=d}return n},g=(t,e)=>{const n=[];if(!e.length)return null;const o=e[0];let l=i(t,o[0]),h=s(t,o[1]),c=a(t,o[2]),u=r(t,o[3]);n.push([l,h,c,u]);for(let f=1;f<e.length;f++){const[o,g,p,d]=e[f],m=i(t,o),y=s(t,g),w=a(t,p),x=r(t,d);m===l&&y===h&&w===c&&x===u||n.push([m-l,y-h,w,x]),l=m,h=y,c=w,u=x}return n};function p(t,e){let{scale:n,translate:o}=t;return e*n[0]+o[0]}function d(t,e){let{scale:n,translate:o}=t;return e*n[1]+o[1]}function m(t,e){let{scale:n,translate:o}=t;return(e??0)*n[2]+o[2]}function y(t,e){let{scale:n,translate:o}=t;return e?e*n[3]+o[3]:0}function w(t,e){return t&&e?L:t&&!e?M:!t&&e?b:x}const x=(t,e)=>{const n=new Array(e.length);if(!e.length)return n;const o=e[0];let l=p(t,o[0]),i=d(t,o[1]);n[0]=[l,i];const{scale:s,originPosition:a}=t,r=s[0],h="lowerLeft"===a?s[1]:-s[1];for(let c=1;c<e.length;c++){const[t,o]=e[c];l+=r*t,i+=h*o,n[c]=[l,i]}return n},M=(t,e)=>{const n=new Array(e.length);if(!e.length)return n;const o=e[0];let l=p(t,o[0]),i=d(t,o[1]);n[0]=[l,i,m(t,o[2])];const{scale:s,originPosition:a}=t,r=s[0],h="lowerLeft"===a?s[1]:-s[1];for(let c=1;c<e.length;c++){const[o,s,a]=e[c];l+=r*o,i+=h*s,n[c]=[l,i,m(t,a)]}return n},b=(t,e)=>{const n=new Array(e.length);if(!e.length)return n;const o=e[0];let l=p(t,o[0]),i=d(t,o[1]);n[0]=[l,i,y(t,o[2])];const{scale:s,originPosition:a}=t,r=s[0],h="lowerLeft"===a?s[1]:-s[1];for(let c=1;c<e.length;c++){const[o,s,a]=e[c];l+=r*o,i+=h*s,n[c]=[l,i,y(t,a)]}return n},L=(t,e)=>{const n=new Array(e.length);if(!e.length)return n;const o=e[0];let l=p(t,o[0]),i=d(t,o[1]);n[0]=[l,i,m(t,o[2]),y(t,o[3])];const{scale:s,originPosition:a}=t,r=s[0],h="lowerLeft"===a?s[1]:-s[1];for(let c=1;c<e.length;c++){const[o,s,a,u]=e[c];l+=r*o,i+=h*s,n[c]=[l,i,m(t,a),y(t,u)]}return n};function v(t,e,n){const o=new Array(n.length);for(let l=0;l<n.length;l++)o[l]=e(t,n[l]);return o}function z(t,e,n){const o=l(t);return e.x=i(o,n.x),e.y=s(o,n.y),null!=n.z&&(e.z=a(o,n.z)),null!=n.m&&(e.m=r(o,n.m)),e}function S(t,e,n){const o=function(t,e,n,o){const l=[],i=h(n,o);for(let s=0;s<e.length;s++){const n=i(t,e[s]);n&&n.length>=3&&l.push(n)}return l.length?l:null}(l(t),n.rings,n.hasZ,n.hasM);return o?(e.rings=o,e.hasZ=n.hasZ??!1,e.hasM=n.hasM??!1,e):null}function k(t,e,n){const o=function(t,e,n,o){const l=[],i=h(n,o);for(let s=0;s<e.length;s++){const n=i(t,e[s]);n&&n.length>=2&&l.push(n)}return l.length?l:null}(l(t),n.paths,n.hasZ,n.hasM);return o?(e.paths=o,e.hasZ=n.hasZ??!1,e.hasM=n.hasM??!1,e):null}function C(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n?.hasZ??!1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n?.hasM??!1;if(null!=n){const s=l(t);e.points=w(o,i)(s,n.points),e.hasZ=o,e.hasM=i}return e}function $(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null!=n?.z,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null!=n?.m;if(null==n)return e;const s=l(t);return e.x=p(s,n.x),e.y=d(s,n.y),o&&(e.z=m(s,n.z)),i&&(e.m=y(s,n.m)),e}function P(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n?.hasZ??!1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n?.hasM??!1;if(null!=n){const s=l(t);e.rings=v(s,w(o,i),n.rings),e.hasZ=o,e.hasM=i}return e}function Z(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n?.hasZ??!1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n?.hasM??!1;if(null!=n){const s=l(t);e.paths=v(s,w(o,i),n.paths),e.hasZ=o,e.hasM=i}return e}},85504:(t,e,n)=>{n.d(e,{Al:()=>h,NZ:()=>c,Vb:()=>l,af:()=>u,rK:()=>f});var o=n(86560);const l="arial-unicode-ms",i="woff2",s=new Map,a=new Set;class r{constructor(t,e){this.fontFace=t,this.promise=e}}async function h(t){const e=g(t),n=f(t),l=s.get(e);if(l)return l.promise;const h=new FontFace(t.family,`url('${o.A.fontsUrl}/woff2/${n}.${i}') format('${i}')`,{style:t.style,weight:t.weight}),c=document.fonts;if(c.has(h)&&"loading"===h.status)return h.loaded;const u=h.load().then((()=>(c.add(h),h)));return s.set(e,new r(h,u)),a.add(h),u}function c(t){return a.has(t)}function u(t){if(!t)return l;const e=t.toLowerCase().split(" ").join("-");switch(e){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return e}}function f(t){const e=p(t)+d(t);return u(t.family)+(e.length>0?e:"-regular")}function g(t){const e=p(t)+d(t);return(t.family||l)+(e.length>0?e:"-regular")}function p(t){if(!t.weight)return"";switch(t.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function d(t){if(!t.style)return"";switch(t.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}}}]);
//# sourceMappingURL=4088.332d33a1.chunk.js.map