"use strict";(self.webpackChunkhenhack25=self.webpackChunkhenhack25||[]).push([[8618],{98618:(e,t,n)=>{n.d(t,{B2:()=>I,BW:()=>L,Ch:()=>le,DF:()=>P,Di:()=>_,E2:()=>$,IE:()=>M,Nl:()=>te,Q4:()=>ue,Rk:()=>ie,Ux:()=>K,Ye:()=>C,ZF:()=>W,eU:()=>B,eY:()=>X,hK:()=>ae,jH:()=>ee,jQ:()=>se,kz:()=>ne,oN:()=>D,q3:()=>J,qK:()=>O,qN:()=>q,z5:()=>Y,zv:()=>Q});var o=n(50076),r=n(76460),s=n(30726),l=n(42294),u=n(2413),c=n(19902),i=n(20176),f=n(75146),a=n(1484);function h(e,t){return e?t?4:3:t?3:2}const d=()=>r.A.getLogger("esri.layers.graphics.featureConversionUtils"),g={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryMultiPatch:3,esriGeometryEnvelope:0},m=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s},y=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2]},p=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+3]},w=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2],e[n+3]=t[o+3]};function b(e,t,n,o){if(e){if(n)return t&&o?w:y;if(t&&o)return p}else if(t&&o)return y;return m}function M(e,t){let{scale:n,translate:o}=e;return Math.round((t-o[0])/n[0])}function I(e,t){let{scale:n,translate:o}=e;return Math.round((o[1]-t)/n[1])}function G(e,t){let{scale:n,translate:o}=e;return Math.round((t-o[0])/n[0])}function v(e,t){let{scale:n,translate:o}=e;return Math.round((t-o[1])/n[1])}function N(e,t,n){let{scale:o,translate:r}=e;return t*o[n]+r[n]}function P(e,t,n){return e?t?n?j(e):F(e):n?k(e):T(e):null}function T(e){const t=e.coords;return{x:t[0],y:t[1]}}function A(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function F(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function Z(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function k(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function x(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function j(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function z(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function E(e,t){return e&&t?z:e?Z:t?x:A}function q(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:E(null!=t.z,null!=t.m))(e,t)}function O(e,t,n){if(null==e)return null;const o=h(t,n),r=[];for(let s=0;s<e.coords.length;s+=o){const t=[];for(let n=0;n<o;n++)t.push(e.coords[s+n]);r.push(t)}return t?n?{points:r,hasZ:t,hasM:n}:{points:r,hasZ:t}:n?{points:r,hasM:n}:{points:r}}function U(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h(t.hasZ,t.hasM);e.lengths[0]=t.points.length;const o=e.coords;let r=0;for(const s of t.points)for(let e=0;e<n;e++)o[r++]=s[e];return e}function L(e,t,n){if(!e)return null;const o=h(t,n),{coords:r,lengths:s}=e,l=[];let u=0;for(const c of s){const e=[];for(let t=0;t<c;t++){const t=[];for(let e=0;e<o;e++)t.push(r[u++]);e.push(t)}l.push(e)}return t?n?{paths:l,hasZ:t,hasM:n}:{paths:l,hasZ:t}:n?{paths:l,hasM:n}:{paths:l}}function R(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h(t.hasZ,t.hasM);const{lengths:o,coords:r}=e;let s=0;for(const l of t.paths){for(const e of l)for(let t=0;t<n;t++)r[s++]=e[t];o.push(l.length)}return e}function Y(e,t,n){if(!e)return null;const o=h(t,n),{coords:r,lengths:s}=e,l=[];let u=0;for(const c of s){const e=[];for(let t=0;t<c;t++){const t=[];for(let e=0;e<o;e++)t.push(r[u++]);e.push(t)}l.push(e)}return t?n?{rings:l,hasZ:t,hasM:n}:{rings:l,hasZ:t}:n?{rings:l,hasM:n}:{rings:l}}function C(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.hasZ,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.hasM;return B(e,t.rings,n,o)}function B(e,t,n,o){const r=h(n,o),{lengths:s,coords:l}=e;let u=0;he(e);for(const c of t){for(const e of c)for(let t=0;t<r;t++)l[u++]=e[t];s.push(c.length)}return e}const S=[],V=[];function $(e,t,n,o,r){S[0]=e;const[s]=_(V,S,t,n,o,r);return de(S),de(V),s}function _(e,t,n,r,s,l){if(de(e),!n){for(const n of t){const t=l?n.attributes[l]:void 0;e.push(new i.Om(null,n.attributes,null,t))}return e}switch(n){case"esriGeometryPoint":return function(e,t,n,o,r){const s=E(n,o);for(const{geometry:l,attributes:u}of t){const t=null!=l?s(new a.A,l):null;e.push(new i.Om(t,u,null,r?u[r]:void 0))}return e}(e,t,r,s,l);case"esriGeometryMultipoint":return function(e,t,n,o,r){const s=h(n,o);for(const{geometry:l,attributes:u}of t){const t=null!=l?U(new a.A,l,s):null;e.push(new i.Om(t,u,null,r?u[r]:void 0))}return e}(e,t,r,s,l);case"esriGeometryPolyline":return function(e,t,n,o,r){const s=h(n,o);for(const{geometry:l,attributes:u,centroid:c}of t){const t=null!=l?R(new a.A,l,s):null,n=null!=c?q(new a.A,c):null;e.push(new i.Om(t,u,n,r?u[r]:void 0))}return e}(e,t,r,s,l);case"esriGeometryPolygon":case"esriGeometryMultiPatch":return function(e,t,n,o,r){for(const{geometry:s,centroid:l,attributes:u}of t){const t=null!=s?C(new a.A,s,n,o):null,c=r?u[r]:void 0;null!=l?e.push(new i.Om(t,u,A(new a.A,l),c)):e.push(new i.Om(t,u,null,c))}return e}(e,t,r,s,l);default:d().error("convertToFeatureSet:unknown-geometry",new o.A(`Unable to parse unknown geometry type '${n}'`)),de(e)}return e}function D(e,t,n,o){V[0]=e,H(S,V,t,n,o);const r=S[0];return de(S),de(V),r}function K(e,t,n){if(null==e)return null;const r=new a.A;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==n&&(n=e.hasM),(0,c.fT)(e)?E(null!=t?t:null!=e.z,null!=n?n:null!=e.m)(r,e):(0,c.Bi)(e)?C(r,e,t,n):(0,c.Rg)(e)?R(r,e,h(t,n)):(0,c.U9)(e)?U(r,e,h(t,n)):void d().error("convertFromGeometry:unknown-geometry",new o.A(`Unable to parse unknown geometry type '${e}'`))}function Q(e,t,n,r){const s=e&&("coords"in e?e:e.geometry);if(null==s)return null;switch(t){case"esriGeometryPoint":{let e=T;return n&&r?e=j:n?e=F:r&&(e=k),e(s)}case"esriGeometryMultipoint":return O(s,n,r);case"esriGeometryPolyline":return L(s,n,r);case"esriGeometryPolygon":return Y(s,n,r);default:return d().error("convertToGeometry:unknown-geometry",new o.A(`Unable to parse unknown geometry type '${t}'`)),null}}function H(e,t,n,r,s){if(de(e),null==n)return function(e,t){for(const n of t)e.push({attributes:n.attributes});return e}(e,t);switch(n){case"esriGeometryPoint":return function(e,t,n,o){let r=T;n&&o?r=j:n?r=F:o&&(r=k);for(const s of t){const{geometry:t,attributes:n}=s,o=null!=t?r(t):null;e.push({attributes:n,geometry:o})}return e}(e,t,r,s);case"esriGeometryMultipoint":return function(e,t,n,o){for(const{geometry:r,attributes:s}of t)e.push({attributes:s,geometry:null!=r?O(r,n,o):null});return e}(e,t,r,s);case"esriGeometryPolyline":return function(e,t,n,o){for(const{geometry:r,attributes:s}of t)e.push({attributes:s,geometry:null!=r?L(r,n,o):null});return e}(e,t,r,s);case"esriGeometryPolygon":return function(e,t,n,o){for(const{geometry:r,attributes:s,centroid:l}of t){const t=null!=r?Y(r,n,o):null;if(null!=l){const n=T(l);e.push({attributes:s,centroid:n,geometry:t})}else e.push({attributes:s,geometry:t})}return e}(e,t,r,s);default:d().error("convertToFeatureSet:unknown-geometry",new o.A(`Unable to parse unknown geometry type '${n}'`))}return e}function W(e){const{objectIdFieldName:t,spatialReference:n,transform:o,fields:r,hasM:s,hasZ:l,features:u,geometryType:c,exceededTransferLimit:i,uniqueIdField:f,queryGeometry:a,queryGeometryType:h}=e,d={features:H([],u,c,l,s),fields:r,geometryType:c,objectIdFieldName:t,spatialReference:n,uniqueIdField:f,queryGeometry:Q(a,h,!1,!1)};return o&&(d.transform=o),i&&(d.exceededTransferLimit=i),s&&(d.hasM=s),l&&(d.hasZ=l),d}function J(e,t){const n=new f.A,{hasM:r,hasZ:s,features:l,objectIdFieldName:u,spatialReference:c,geometryType:i,exceededTransferLimit:a,transform:h,fields:g}=e;return g&&(n.fields=g),n.geometryType=i??null,n.objectIdFieldName=u??t??null,n.spatialReference=c??null,n.objectIdFieldName?(l&&_(n.features,l,i,s,r,n.objectIdFieldName),a&&(n.exceededTransferLimit=a),r&&(n.hasM=r),s&&(n.hasZ=s),h&&(n.transform=h),n):(d().error(new o.A("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function X(e){const{transform:t,features:n,hasM:o,hasZ:r}=e;if(!t)return e;for(const s of n)null!=s.geometry&&le(s.geometry,s.geometry,o,r,t),null!=s.centroid&&le(s.centroid,s.centroid,o,r,t);return e.transform=null,e}function ee(e,t){const{geometryType:n,features:o,hasM:r,hasZ:s}=t;if(!e)return t;for(let l=0;l<o.length;l++){const t=o[l],u=t.weakClone();u.geometry=new a.A,te(u.geometry,t.geometry,r,s,n,e),t.centroid&&(u.centroid=new a.A,te(u.centroid,t.centroid,r,s,"esriGeometryPoint",e)),o[l]=u}return t.transform=e,t}function te(e,t,n,o,r,s){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:n,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:o;if(he(e),!t?.coords.length)return null;const c=g[r],{coords:i,lengths:f}=t,a=h(n,o),d=h(n&&l,o&&u),m=b(n,o,l,u);if(!f.length)return m(e.coords,i,0,0,M(s,i[0]),I(s,i[1])),he(e,a,0),e;let y,p,w,G,v=0,N=0,P=N;for(const h of f){if(h<c)continue;let t=0;N=P,w=y=M(s,i[v]),G=p=I(s,i[v+1]),m(e.coords,i,N,v,w,G),t++,v+=a,N+=d;for(let n=1;n<h;n++,v+=a)w=M(s,i[v]),G=I(s,i[v+1]),w===y&&G===p||(m(e.coords,i,N,v,w-y,G-p),N+=d,t++,y=w,p=G);t>=c&&(e.lengths.push(t),P=N)}return de(e.coords,P),e.coords.length?e:null}function ne(e,t,n,o,r,s){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:n,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:o;if(he(e),!t?.coords.length)return null;const c=g[r],{coords:i,lengths:f}=t,a=h(n,o),d=h(n&&l,o&&u),m=b(n,o,l,u);if(!f.length)return m(e.coords,i,0,0,i[0],i[1]),he(e,a,0),e;let y=0;const p=s*s;for(const h of f){if(h<c){y+=h*a;continue}const t=e.coords.length/d,n=y,o=y+(h-1)*a;m(e.coords,i,e.coords.length,n,i[n],i[n+1]),re(e.coords,i,a,p,m,n,o),m(e.coords,i,e.coords.length,o,i[o],i[o+1]);const r=e.coords.length/d-t;r>=c?e.lengths.push(r):de(e.coords,t*d),y+=h*a}return e.coords.length?e:null}function oe(e,t,n,o){const r=e[t],s=e[t+1],l=e[n],u=e[n+1],c=e[o],i=e[o+1];let f=l,a=u,h=c-f,d=i-a;if(0!==h||0!==d){const e=((r-f)*h+(s-a)*d)/(h*h+d*d);e>1?(f=c,a=i):e>0&&(f+=h*e,a+=d*e)}return h=r-f,d=s-a,h*h+d*d}function re(e,t,n,o,r,s,l){let u,c=o,i=0;for(let f=s+n;f<l;f+=n)u=oe(t,f,s,l),u>c&&(i=f,c=u);c>o&&(i-s>n&&re(e,t,n,o,r,s,i),r(e,t,e.length,i,t[i],t[i+1]),l-i>n&&re(e,t,n,o,r,i,l))}function se(e,t,n,o){if(!t?.coords?.length)return null;const r=h(n,o);let s=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,f=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=r){const n=e[t],o=e[t+1];s=Math.min(s,n),i=Math.max(i,n),c=Math.min(c,o),f=Math.max(f,o)}}return(0,l.is)(e)?(0,l.BI)(e,s,c,i,f):(0,u.fA)(s,c,i,f,e),e}function le(e,t,n,o,r){const{coords:l,lengths:u}=t,c=h(n,o);if(!l.length)return e!==t&&he(e),e;(0,s.Lw)(r);const{originPosition:i,scale:f,translate:a}=r,d=ge;d.originPosition=i;const g=d.scale;g[0]=f[0]??1,g[1]=-(f[1]??1),g[2]=f[2]??1,g[3]=f[3]??1;const m=d.translate;if(m[0]=a[0]??0,m[1]=a[1]??0,m[2]=a[2]??0,m[3]=a[3]??0,!u.length){for(let t=0;t<c;++t)e.coords[t]=N(d,l[t],t);return e!==t&&he(e,c,0),e}let y=0;for(let s=0;s<u.length;s++){const t=u[s];e.lengths[s]=t;for(let r=0;r<c;++r)e.coords[y+r]=N(d,l[y+r],r);let n=e.coords[y],o=e.coords[y+1];y+=c;for(let r=1;r<t;r++,y+=c){n+=l[y]*g[0],o+=l[y+1]*g[1],e.coords[y]=n,e.coords[y+1]=o;for(let t=2;t<c;++t)e.coords[y+t]=N(d,l[y+t],t)}}return e!==t&&he(e,l.length,u.length),e}function ue(e,t,n,o,r,s){if(he(e),e.lengths.push(...t.lengths),n===r&&o===s)for(let l=0;l<t.coords.length;l++)e.coords.push(t.coords[l]);else{const l=h(n,o),u=b(n,o,r,s),c=t.coords;for(let t=0;t<c.length;t+=l)u(e.coords,c,e.coords.length,t,c[t],c[t+1])}return e}function ce(e,t,n,o){let r=0,s=e[o*t],l=e[o*(t+1)];for(let u=1;u<n;u++){const n=s+e[o*(t+u)],c=l+e[o*(t+u)+1],i=(n-s)*(c+l);s=n,l=c,r+=i}return.5*r}function ie(e,t){const{coords:n,lengths:o}=e;let r=0,s=0;for(let l=0;l<o.length;l++){const e=o[l];s+=ce(n,r,e,t),r+=e}return Math.abs(s)}function fe(e,t,n,o){return 0===e*o-n*t&&e*n+t*o>0}function ae(e,t,n,o,r){const s=h(o,r);if(!e.lengths.length){if(e.coords.length<2)return null;const[n,o]=e.coords,r=G(t,n),s=v(t,o);return new a.A([],[r,s])}const l=new a.A([],[0,0]),u=g[n],c="esriGeometryPolygon"===n||"esriGeometryPolyline"===n;let i=0,f=0;for(let a=0;a<e.lengths.length;a++){const n=e.lengths[a],o=f;let r=G(t,e.coords[s*i]),h=v(t,e.coords[s*i+1]);l.coords[f++]=r,l.coords[f++]=h;let d=0,g=0,m=1;for(let u=1;u<n;u++){const n=G(t,e.coords[s*(u+i)]),o=v(t,e.coords[s*(u+i)+1]);if(n!==r||o!==h){const e=n-r,t=o-h;c&&fe(d,g,e,t)?(l.coords[f-2]+=e,l.coords[f-1]+=t,r+=e,h+=t):(l.coords[f++]=n,l.coords[f++]=o,r=n,h=o,d=e,g=t,m+=1)}}m<u?f=o:l.lengths.push(m),i+=n}return 0===l.lengths.length?null:l}function he(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;de(e.lengths,n),de(e.coords,t)}function de(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.length!==t&&(e.length=t)}const ge={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]}}}]);
//# sourceMappingURL=8618.d47bc701.chunk.js.map