"use strict";(self.webpackChunkhenhack25=self.webpackChunkhenhack25||[]).push([[2466,7995],{1484:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(97255);class s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.lengths=e??[],this.coords=t??[]}static fromJSON(e){return new s(e.lengths,e.coords)}static fromRect(e){const[t,n,r,i]=e,o=r-t,l=i-n;return new s([5],[t,n,o,0,0,l,-o,0,0,-l])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}get usedMemory(){return 64+(0,r.Qf)(this.lengths,this.coords)}area(){let e=0,t=0;if(!this.lengths.length)return 0;for(let n=0;n<this.lengths.length;n++){const r=this.lengths[n];if(r<3)continue;let s=this.coords[2*t],i=this.coords[2*t+1];for(let n=1;n<r;n+=1){const r=this.coords[2*(n+t)],o=this.coords[2*(n+t)+1];e+=-.5*(r-s)*(o+i),s=r,i=o}t+=r}return e}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const r=this.lengths[n];for(let n=0;n<r;n++)e(this.coords[2*(n+t)],this.coords[2*(n+t)+1]);t+=r}}deltaDecode(){const e=this.clone(),{coords:t,lengths:n}=e;let r=0;for(const s of n){for(let e=1;e<s;e++)t[2*(r+e)]+=t[2*(r+e)-2],t[2*(r+e)+1]+=t[2*(r+e)-1];r+=s}return e}clone(e){if(0===this.lengths.length)return new s([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),n=this.coords.slice(0,t);return e?(e.set(n),new s(this.lengths,e)):new s(Array.from(this.lengths),Array.from(n))}}},20176:(e,t,n)=>{n.d(t,{N3:()=>l,Om:()=>o});var r=n(97255),s=n(90321),i=n(1484);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.geometry=e,this.attributes=t,this.centroid=n,this.objectId=r,this.displayId=s}static fromJSON(e){const t=e.geometry?i.A.fromJSON(e.geometry):null,n=e.centroid?i.A.fromJSON(e.centroid):null,r=e.objectId;return new o(t,e.attributes,n,r)}weakClone(){const e=new o(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e}clone(){const e=this.geometry?.clone(),t=new o(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t}ensureCentroid(e){return this.centroid??=(0,s.Q)(new i.A,this.geometry,e.hasZ,e.hasM),this.centroid}get usedMemory(){return 128+(0,r.lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function l(e){return!!e.geometry?.coords?.length}},72940:(e,t,n)=>{n.r(t),n.d(t,{Dictionary:()=>o.A,Voxel:()=>m,arcade:()=>r.h,arcadeFeature:()=>l.A,convertFeatureLayerToFeatureSet:()=>L,convertJsonToArcade:()=>R,convertMapToFeatureSetCollection:()=>q,convertServiceUrlToWorkspace:()=>D,createExecContext:()=>E,createFeature:()=>_,createFunction:()=>S,createSyntaxTree:()=>x,dependsOnView:()=>G,enableFeatureSetOperations:()=>Z,enableGeometryOperations:()=>j,evalSyntaxTree:()=>V,executeAsyncFunction:()=>M,executeFunction:()=>O,extractFieldNames:()=>C,getArcadeType:()=>F,getViewInfo:()=>Y,hasGeometryFunctions:()=>X,hasGeometryOperations:()=>U,hasVariable:()=>k,loadScriptDependencies:()=>J,updateExecContext:()=>P});var r=n(69175),s=n(46405),i=n(66240),o=n(67253),l=n(48015),u=n(43036),a=n(9861),c=n(98264),h=n(85632);const f="Voxel.Position",d="Voxel.LocalTime";class m{constructor(e,t){this._graphic=e,this._timeZone=t,this.arcadeDeclaredClass="esri.arcade.Voxel",this._layer=e.layer}getPosition(){return void 0!==this._position?this._position:this._position=function(e){const t=e.getAttribute(f);if("string"!=typeof t)throw new a.D$(null,a.TX.InvalidParameter,null);const n=JSON.parse(t);if(!Array.isArray(n)||"number"!=typeof n[0]||"number"!=typeof n[1]||"number"!=typeof n[2])throw new a.D$(null,a.TX.InvalidParameter,null);return new c.A(n)}(this._graphic)}getLocalTime(){return void 0!==this._localTime?this._localTime:this._localTime=function(e,t){const n=e.getAttribute(d);if(null==n)return null;if(!(0,h.$P)(n))throw new a.D$(null,a.TX.InvalidParameter,null);return s.lY.dateJSAndZoneToArcadeDate(n,t)}(this._graphic,this._timeZone??"system")}keys(){return this._layer.fields.map((e=>e.name)).sort()}hasField(e){return this._layer.fieldsIndex.has(e)}field(e){const t=this._layer.fieldsIndex?.get(e)?.name;if(null==t)throw new a.D$(null,a.TX.FieldNotFound,null,{key:e});switch(t){case f:return this.getPosition();case d:return this.getLocalTime()}return this._graphic.attributes[t]??null}castToText(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t={...this._graphic.attributes};t[f]=this.getPosition(),d in t&&(t[d]=this.getLocalTime());for(const n of Object.keys(t))this._layer.fieldsIndex?.has(n)||delete t[n];return(0,u.c)(t,{useNumbersForDates:e})}}var g=n(53084),p=n(16503),y=n(14902),I=n(76797),b=n(66388),T=n(19247),v=n(65215),N=n(23701);const A={vars:{$feature:"any",$view:"any"},spatialReference:null};function w(e){return e.replaceAll(/[|\\{}()[\]^$+*?.]/g,"\\$&")}function F(e){return null==e?null:(0,h.cy)(e)||(0,u.m)(e)?"array":(0,u.g)(e)?"date":(0,h.Kg)(e)?"text":(0,h.Lm)(e)?"boolean":(0,h.Et)(e)?"number":e instanceof o.A?"dictionary":(0,u.n)(e)?"feature":e instanceof T.A?"point":e instanceof v.A?"polygon":e instanceof N.A?"polyline":e instanceof b.A?"multipoint":e instanceof I.A?"extent":e instanceof p.n?"dateOnly":e instanceof y.k?"time":(0,u.p)(e)?"featureSet":(0,u.o)(e)?"featureSetCollection":null}function x(e){if(!e)return null;try{return(0,r.p)(e)}catch(t){}return null}function S(e,t){const n="string"==typeof e?x(e):e;if(!n)return null;try{return t=t||(0,g.o8)(A),(0,r.c)(n,t)}catch(s){}return null}function E(e,t,n){return{vars:{$feature:null==e?new l.A:l.A.createFromGraphic(e,n),$view:t?.view},spatialReference:t?.sr,timeZone:n??null}}function _(e,t,n){return l.A.createFromGraphicLikeObject(t,e,n,null)}function P(e,t){null!=e.vars&&(e.vars.$feature=t)}function V(e,t){let n;try{n=(0,r.e)(e,t)}catch(s){n=null}return n}function O(e,t){let n;try{n=e?e(t):null}catch(r){n=null}return n}function M(e,t){try{return e?e(t):Promise.resolve(null)}catch(n){return Promise.resolve(null)}}const $=new Set(["$feature","$aggregatedFeatures","$voxel"].map((e=>(0,i.X)(e))));function C(e,t){if(!e)return[];const n="string"==typeof e?x(e):e;if(!n)return[];const s=(0,r.a)(n).filter((e=>{let{varId:t}=e;return $.has(t)})).map((e=>{let{memberNamePattern:t}=e;return t})).flatMap((e=>{if(e.includes("*")){if(null==t)return[];const n=new RegExp(`^${e.split(/\*+/).map(w).join(".*")}$`,"i");return t.filter((e=>n.test(e)))}return e.toLowerCase()}));return[...new Set(s.sort())]}function G(e){return(0,r.r)(e,"$view")}function k(e,t){return!!e&&(0,r.r)(e,t)}function Y(e){if(!e||null==e.spatialReference&&(null==e.scale||null==e.viewingMode))return;let t,n;const{timeProperties:r,timeZone:i}=e;if(null!=r){const{currentStart:e,currentEnd:o}=r;null!=i?(t=null!=e?s.lY.dateJSAndZoneToArcadeDate(e,i):null,n=null!=o?s.lY.dateJSAndZoneToArcadeDate(o,i):null):(t=null!=e?s.lY.dateJSToArcadeDate(e):null,n=null!=o?s.lY.dateJSToArcadeDate(o):null)}return{view:e.viewingMode&&null!=e.scale?new o.A({viewingMode:e.viewingMode,scale:e.scale,timeProperties:null!=t||null!=n?new o.A({currentStart:t,currentEnd:n,startIncluded:!0,endIncluded:!0}):null}):null,sr:e.spatialReference}}function D(e){let{url:t,spatialReference:n,lrucache:s,interceptor:i}=e;const o=(0,r.f)();return o?o.createFeatureSetCollectionFromService(t,n,s,i):null}function L(e){let{layer:t,spatialReference:n,outFields:s,returnGeometry:i,lrucache:o,interceptor:l}=e;if(null===t)return null;const u=(0,r.f)();return u?u.constructFeatureSet(t,n,s,i??!0,o,l):null}function q(e){if(null===e?.map)return null;const t=(0,r.f)();return t?t.createFeatureSetCollectionFromMap(e.map,e.spatialReference,e.lrucache,e.interceptor):null}function R(e,t){return o.A.convertJsonToArcade(e,t)}function J(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return(0,r.l)(e,t,n)}function j(){return(0,r.b)()}function Z(){return(0,r.d)()}function z(e,t){if(!e)return!1;if("string"==typeof e)return t(e);const n=e;if(function(e){return"type"in e&&("class-breaks"===e.type||"dictionary"===e.type||"dot-density"===e.type||"pie-chart"===e.type||"simple"===e.type||"unique-value"===e.type)}(n)){if("dot-density"===n.type){const e=n.attributes?.some((e=>t(e.valueExpression)));if(e)return e}const e=n.visualVariables,r=!!e&&e.some((e=>{let n=t(e.valueExpression);return"size"===e.type&&(W(e.minSize)&&(n=n||t(e.minSize.valueExpression)),W(e.maxSize)&&(n=n||t(e.maxSize.valueExpression))),n}));return!(!("valueExpression"in n)||!t(n.valueExpression))||r}if(function(e){return"esri.layers.support.LabelClass"===e.declaredClass}(n)){const e=n.labelExpressionInfo?.expression;return!(!e||!t(e))||!1}return!!function(e){return"esri.PopupTemplate"===e.declaredClass}(n)&&(!!n.expressionInfos&&n.expressionInfos.some((e=>t(e.expression)))||Array.isArray(n.content)&&n.content.some((e=>"expression"===e.type&&t(e.expressionInfo?.expression))))}function Q(e){const t=x(e);return!!t&&(0,r.s)(t)}function X(e){return z(e,Q)}function K(e){const t=x(e);return!!t&&(0,r.g)(t)}function U(e){return z(e,K)}function W(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}},75146:(e,t,n)=>{n.d(t,{A:()=>r});class r{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new r;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},90321:(e,t,n)=>{function r(e,t){return e?t?4:3:t?3:2}function s(e,t,n,s){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const l=e.coords,u=[],a=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:c,coords:h}=t,f=r(n,s);let d=0;for(const r of c){const e=i(a,h,d,r,n,s);e&&u.push(e),d+=r*f}if(u.sort(((e,t)=>{let r=e[2]-t[2];return 0===r&&n&&(r=e[4]-t[4]),r})),u.length){let e=6*u[0][2];l[0]=u[0][0]/e,l[1]=u[0][1]/e,n&&(e=6*u[0][4],l[2]=0!==e?u[0][3]/e:0),(l[0]<a[0]||l[0]>a[1]||l[1]<a[2]||l[1]>a[3]||n&&(l[2]<a[4]||l[2]>a[5]))&&(l.length=0)}if(!l.length){const e=t.lengths[0]?o(h,0,c[0],n,s):null;if(!e)return null;l[0]=e[0],l[1]=e[1],n&&e.length>2&&(l[2]=e[2])}return e}function i(e,t,n,s,i,o){const l=r(i,o);let u=n,a=n+l,c=0,h=0,f=0,d=0,m=0;for(let r=0,p=s-1;r<p;r++,u+=l,a+=l){const n=t[u],r=t[u+1],s=t[u+2],o=t[a],l=t[a+1],g=t[a+2];let p=n*l-o*r;d+=p,c+=(n+o)*p,h+=(r+l)*p,i&&(p=n*g-o*s,f+=(s+g)*p,m+=p),n<e[0]&&(e[0]=n),n>e[1]&&(e[1]=n),r<e[2]&&(e[2]=r),r>e[3]&&(e[3]=r),i&&(s<e[4]&&(e[4]=s),s>e[5]&&(e[5]=s))}if(d>0&&(d*=-1),m>0&&(m*=-1),!d)return null;const g=[c,h,.5*d];return i&&(g[3]=f,g[4]=.5*m),g}function o(e,t,n,s,i){const o=r(s,i);let h=t,f=t+o,d=0,m=0,g=0,p=0;for(let r=0,y=n-1;r<y;r++,h+=o,f+=o){const t=e[h],n=e[h+1],r=e[h+2],i=e[f],o=e[f+1],y=e[f+2],I=s?u(t,n,r,i,o,y):l(t,n,i,o);if(I)if(d+=I,s){const e=c(t,n,r,i,o,y);m+=I*e[0],g+=I*e[1],p+=I*e[2]}else{const e=a(t,n,i,o);m+=I*e[0],g+=I*e[1]}}return d>0?s?[m/d,g/d,p/d]:[m/d,g/d]:n>0?s?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,n,r){const s=n-e,i=r-t;return Math.sqrt(s*s+i*i)}function u(e,t,n,r,s,i){const o=r-e,l=s-t,u=i-n;return Math.sqrt(o*o+l*l+u*u)}function a(e,t,n,r){return[e+.5*(n-e),t+.5*(r-t)]}function c(e,t,n,r,s,i){return[e+.5*(r-e),t+.5*(s-t),n+.5*(i-n)]}n.d(t,{Q:()=>s})},97255:(e,t,n)=>{n.d(t,{Qf:()=>u,Qh:()=>o,RS:()=>s,ez:()=>h,i5:()=>f,lM:()=>i,qK:()=>c});var r=n(78393);const s=16;function i(e){if(!e)return 0;let t=c;for(const n in e)e.hasOwnProperty(n)&&(t+=l(e[n],!1));return t}function o(e){if(!e)return 0;if("number"==typeof e[0])return u(e);if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return a(e,8);let n=h;for(let r=0;r<t;r++)n+=l(e[r]);return n}(e);let t=c;for(const n in e)e.hasOwnProperty(n)&&(t+=l(e[n]));return t}function l(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];switch(typeof e){case"object":return t?o(e):c;case"string":return function(e){return 32+e.length}(e);case"number":return s;case"boolean":return 4;default:return 8}}function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>e+(t?(0,r.iu)(t)?t.byteLength+f:Array.isArray(t)?a(t,s):0:0)),0)}function a(e,t){return h+e.length*t}const c=32,h=16,f=145}}]);
//# sourceMappingURL=2466.6d74ef92.chunk.js.map