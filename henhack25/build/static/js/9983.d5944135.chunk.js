"use strict";(self.webpackChunkhenhack25=self.webpackChunkhenhack25||[]).push([[7995,9983],{1484:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(97255);class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.lengths=e??[],this.coords=t??[]}static fromJSON(e){return new i(e.lengths,e.coords)}static fromRect(e){const[t,n,s,r]=e,o=s-t,a=r-n;return new i([5],[t,n,o,0,0,a,-o,0,0,-a])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}get usedMemory(){return 64+(0,s.Qf)(this.lengths,this.coords)}area(){let e=0,t=0;if(!this.lengths.length)return 0;for(let n=0;n<this.lengths.length;n++){const s=this.lengths[n];if(s<3)continue;let i=this.coords[2*t],r=this.coords[2*t+1];for(let n=1;n<s;n+=1){const s=this.coords[2*(n+t)],o=this.coords[2*(n+t)+1];e+=-.5*(s-i)*(o+r),i=s,r=o}t+=s}return e}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const s=this.lengths[n];for(let n=0;n<s;n++)e(this.coords[2*(n+t)],this.coords[2*(n+t)+1]);t+=s}}deltaDecode(){const e=this.clone(),{coords:t,lengths:n}=e;let s=0;for(const i of n){for(let e=1;e<i;e++)t[2*(s+e)]+=t[2*(s+e)-2],t[2*(s+e)+1]+=t[2*(s+e)-1];s+=i}return e}clone(e){if(0===this.lengths.length)return new i([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),n=this.coords.slice(0,t);return e?(e.set(n),new i(this.lengths,e)):new i(Array.from(this.lengths),Array.from(n))}}},20176:(e,t,n)=>{n.d(t,{N3:()=>a,Om:()=>o});var s=n(97255),i=n(90321),r=n(1484);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.geometry=e,this.attributes=t,this.centroid=n,this.objectId=s,this.displayId=i}static fromJSON(e){const t=e.geometry?r.A.fromJSON(e.geometry):null,n=e.centroid?r.A.fromJSON(e.centroid):null,s=e.objectId;return new o(t,e.attributes,n,s)}weakClone(){const e=new o(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e}clone(){const e=this.geometry?.clone(),t=new o(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t}ensureCentroid(e){return this.centroid??=(0,i.Q)(new r.A,this.geometry,e.hasZ,e.hasM),this.centroid}get usedMemory(){return 128+(0,s.lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function a(e){return!!e.geometry?.coords?.length}},33328:(e,t,n)=>{n.d(t,{F:()=>l});var s=n(81806),i=n(70373),r=n(2413);const o={minX:0,minY:0,maxX:0,maxY:0};function a(e,t,n){(function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]})(t),e.search(o,n)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new i.w(9,(0,s.A)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,s)=>{e[t++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.Ie)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),a(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},33376:(e,t,n)=>{n.d(t,{T:()=>i});var s=n(20176);const i={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new s.Om(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>e.ensureCentroid(t)}},33754:(e,t,n)=>{n.d(t,{H:()=>i,L:()=>s});const s=1;function i(e,t){let n=0;for(const s of t){const t=s.attributes?.[e];"number"==typeof t&&isFinite(t)&&(n=Math.max(n,t))}return n}},35454:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var s=n(50076),i=n(19902),r=n(80963),o=n(98618),a=n(33754),l=n(78482),u=n(72547),d=n(24586),h=n(48094),c=n(40296),f=n(40098),m=n(1900),p=n(6127),y=n(53430),g=n(67478);const _=r.KK,I={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:r.KK},x={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryAttachmentOrderByFields:!1,supportsQueryBins:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0,supportsQueryWithCacheHint:!0},queryBinsCapabilities:f.PC};function b(e){return(0,i.fT)(e)?null!=e.z:!!e.hasZ}function B(e){return(0,i.fT)(e)?null!=e.m:!!e.hasM}class F{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const t=[],{features:n}=e,i=this._inferLayerProperties(n,e.fields),r=e.fields||[],o=null!=e.hasM?e.hasM:!!i.hasM,l=null!=e.hasZ?e.hasZ:!!i.hasZ,f=!e.spatialReference&&!i.spatialReference,b=f?_:e.spatialReference||i.spatialReference,B=f?I:null,F=e.geometryType||i.geometryType,M=!F;let T=e.objectIdField||i.objectIdField,v=e.timeInfo;const E=new m.A(r);if(!M&&(f&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!F))throw new s.A("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!T)throw new s.A("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(i.objectIdField&&T!==i.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${T}" doesn't match the field name "${i.objectIdField}", found in the provided fields`}),T=i.objectIdField),T&&!i.objectIdField){const e=E.get(T);e?(T=e.name,e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:T,name:T,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const a of r){if(null==a.name&&(a.name=a.alias),null==a.alias&&(a.alias=a.name),!a.name)throw new s.A("feature-layer:invalid-field-name","field name is missing",{field:a});if(a.name===T&&(a.type="esriFieldTypeOID"),!p.m.jsonValues.includes(a.type))throw new s.A("feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});null==a.length&&(a.length=(0,y._b)(a))}const w={};for(const s of r)if("esriFieldTypeOID"!==s.type&&"esriFieldTypeGlobalID"!==s.type){const e=(0,y.lD)(s);void 0!==e&&(w[s.name]=e)}if(v){if(v.startTimeField){const e=E.get(v.startTimeField);e?(v.startTimeField=e.name,e.type="esriFieldTypeDate"):v.startTimeField=null}if(v.endTimeField){const e=E.get(v.endTimeField);e?(v.endTimeField=e.name,e.type="esriFieldTypeDate"):v.endTimeField=null}if(v.trackIdField){const e=E.get(v.trackIdField);e?v.trackIdField=e.name:(v.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:v}}))}v.startTimeField||v.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:v}}),v=null)}const A=E.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??g.n$}:null;this._createDefaultAttributes=(0,c.Vx)(w,T);const N={warnings:t,featureErrors:[],layerDefinition:{...x,drawingInfo:(0,c.F0)(F),templates:(0,c.e2)(w),extent:B,geometryType:F,objectIdField:T,fields:r,hasZ:l,hasM:o,timeInfo:v,dateFieldsTimeReference:A},assignedObjectIds:{}};if(this._queryEngine=new h.do({fieldsIndex:m.A.fromLayerJSON({fields:r,timeInfo:v,dateFieldsTimeReference:A}),geometryType:F,hasM:o,hasZ:l,objectIdField:T,spatialReference:b,featureStore:new u.A({geometryType:F,hasM:o,hasZ:l}),timeInfo:v}),!n?.length)return this._nextObjectId=a.L,N;const R=(0,a.H)(T,n);return this._nextObjectId=R+1,await(0,d.Nk)(n,b),this._loadInitialFeatures(N,n)}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,f.$1)(t,n),(0,d.Nk)(e.adds,t),(0,d.Nk)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,l.J)(this._queryEngine,e,t.signal)}queryAttributeBins(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeAttributeBinsQuery(e,t.signal)}_inferLayerProperties(e,t){let n,s,r=null,o=null,a=null;for(const l of e){const e=l.geometry;if(null!=e&&(r||(r=(0,i.$B)(e)),o||(o=e.spatialReference),null==n&&(n=b(e)),null==s&&(s=B(e)),r&&o&&null!=n&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const n="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,n||s}))&&(a=e.name)}return{geometryType:r,spatialReference:o,objectIdField:a,hasM:s,hasZ:n}}async _loadInitialFeatures(e,t){const{geometryType:n,hasM:s,hasZ:r,objectIdField:a,spatialReference:l,featureStore:u,fieldsIndex:h}=this._queryEngine,c=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&n!==(0,i.$B)(o.geometry)){e.featureErrors.push((0,f.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=(0,f.MB)(h,t,o.attributes,!0);s?e.featureErrors.push(s):(this._assignObjectId(t,o.attributes,!0),o.attributes=t,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[a]),null!=o.geometry&&(o.geometry=(0,d.Cv)(o.geometry,o.geometry.spatialReference,l)),c.push(o))}u.addMany((0,o.Di)([],c,n,r,s,a));const{fullExtent:m,timeExtent:p}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=m,p){const{start:t,end:n}=p;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}async _applyEdits(e){const{adds:t,updates:n,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(i,t),n?.length&&this._applyUpdateEdits(i,n),s?.length){for(const e of s)i.deleteResults.push((0,f.bP)(e));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:r,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:o,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:s,hasM:r,hasZ:a,objectIdField:l,spatialReference:u,featureStore:h,fieldsIndex:c}=this._queryEngine,m=[];for(const o of t){if(o.geometry&&s!==(0,i.$B)(o.geometry)){n.push((0,f.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=(0,f.MB)(c,t,o.attributes);if(r)n.push(r);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[l];e.uidToObjectId[o.uid]=t}if(null!=o.geometry){const e=o.geometry.spatialReference??u;o.geometry=(0,d.Cv)((0,f.CR)(o.geometry,e),e,u)}m.push(o),n.push((0,f.bP)(o.attributes[l]))}}h.addMany((0,o.Di)([],m,s,a,r,l))}_applyUpdateEdits(e,t){let{updateResults:n}=e;const{geometryType:s,hasM:r,hasZ:a,objectIdField:l,spatialReference:u,featureStore:h,fieldsIndex:c}=this._queryEngine;for(const m of t){const{attributes:e,geometry:t}=m,p=e?.[l];if(null==p){n.push((0,f.Yx)(`Identifier field ${l} missing`));continue}if(!h.has(p)){n.push((0,f.Yx)(`Feature with object id ${p} missing`));continue}const y=(0,o.oN)(h.getFeature(p),s,a,r);if(null!=t){if(s!==(0,i.$B)(t)){n.push((0,f.Yx)("Incorrect geometry type."));continue}const e=t.spatialReference??u;y.geometry=(0,d.Cv)((0,f.CR)(t,e),e,u)}if(e){const t=(0,f.MB)(c,y.attributes,e);if(t){n.push(t);continue}}h.add((0,o.E2)(y,s,a,r,l)),n.push((0,f.bP)(p))}}_assignObjectId(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=this._queryEngine.objectIdField;n&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}},40098:(e,t,n)=>{n.d(t,{$1:()=>y,CR:()=>p,MB:()=>c,PC:()=>g,Yx:()=>l,bP:()=>d});var s=n(51344),i=n(80963),r=n(53430);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(e){return new a(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function d(e){return new u(e)}const h=new Set;function c(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];h.clear();for(const i in n){const o=e.get(i);if(!o)continue;const a=f(o,n[i]);if(h.add(o.name),o&&(s||o.editable)){const e=(0,r.CJ)(o,a);if(e)return l((0,r.uo)(e,o,a));t[o.name]=a}}for(const i of e.requiredFields??[])if(!h.has(i.name))return l(`missing required field "${i.name}"`);return null}function f(e,t){let n=t;return(0,r.WA)(e)&&"string"==typeof t?n=parseFloat(t):(0,r.yM)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,r.vE)(e)&&"string"==typeof t&&(n=(0,s._U)(t)),(0,r.WX)(n)}let m;function p(e,t){if(!e||!(0,i.fn)(t))return e;if("rings"in e||"paths"in e){if(null==m)throw new TypeError("geometry engine not loaded");return m.simplify(t,e)}return e}async function y(e,t){!(0,i.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==m&&(m=await Promise.all([n.e(2612),n.e(7983)]).then(n.bind(n,1669))),m}()}const g={supportsAutoIntervalBin:!0,supportsFixedIntervalBin:!0,supportsFixedBoundariesBin:!0,supportsDateBin:!0,supportsStackBy:!0,supportsSplitBy:!0,supportsNormalization:!0,supportedStatisticTypes:["COUNT","SUM","AVG","VAR","STDDEV","MIN","MAX","PERCENTILE_CONT","PERCENTILE_DISC","CentroidAggregate","EnvelopeAggregate","ConvexHullAggregate"],supportedNormalizationTypes:["field","log","naturalLog","percentOfTotal","squareRoot"]}},40296:(e,t,n)=>{n.d(t,{F0:()=>a,Vx:()=>d,e2:()=>c,f:()=>f});var s=n(81806),i=n(53084),r=n(8298),o=n(44460);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.Cb:"esriGeometryPolyline"===e?o.yM:o.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function d(e,t){if((0,s.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this${h(t)} = null;`;for(const t in e)n+=`this${h(t)} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new s}catch(n){return()=>({[t]:null,...e})}}function h(e){return l.test(e)?`.${e}`:`["${e}"]`}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.o8)(e)}}]}function f(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryAttributeBins:r.P,editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},51344:(e,t,n)=>{function s(e){return null!=a(e)||null!=o(e)}function i(e){return l.test(e)}function r(e){return a(e)??o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(d&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,s=0;for(;!t&&s<=e.length;)t=!u.test(e[s]),s++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){const t=l.exec(e);if(!t?.groups)return null;const n=t.groups,s=+n.year,i=+n.month-1,r=+n.day,o=+(n.hours??"0"),a=+(n.minutes??"0"),u=+(n.seconds??"0");if(o>23)return null;if(a>59)return null;if(u>59)return null;const d=n.ms??"0",h=d?+d.padEnd(3,"0").slice(0,3):0;let c;if(n.isUTC||!n.offsetSign)c=Date.UTC(s,i,r,o,a,u,h);else{const e=+n.offsetHours,t=+n.offsetMinutes;c=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(s,i,r,o,a,u,h)}return Number.isNaN(c)?null:c}n.d(t,{Br:()=>i,Cq:()=>s,_U:()=>r});const l=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,d=!Number.isNaN(new Date("technology 10").getTime())},70373:(e,t,n)=>{n.d(t,{E:()=>T,w:()=>a});var s=n(18690),i=n(4212),r=(n(81806),n(30015)),o=n(61196);class a{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=arguments.length>1?arguments[1]:void 0;this._compareMinX=c,this._compareMinY=f,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),b.prune(),B.prune(),F.prune(),M.prune()}all(e){l(this._data,e)}search(e,t){let n=this._data;const s=this._toBBox;if(I(e,n))for(b.clear();n;){for(let i=0,r=n.children.length;i<r;i++){const r=n.children[i],o=n.leaf?s(r):r;I(e,o)&&(n.leaf?t(r):_(e,o)?l(r,t):b.push(r))}n=b.pop()}}collides(e){let t=this._data;const n=this._toBBox;if(!I(e,t))return!1;for(b.clear();t;){for(let s=0,i=t.children.length;s<i;s++){const i=t.children[s],r=t.leaf?n(i):i;if(I(e,r)){if(t.leaf||_(e,r))return!0;b.push(i)}}t=b.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new E([]),this}remove(e){if(!e)return this;let t,n=this._data,r=null,o=0,a=!1;const l=this._toBBox(e);for(F.clear(),M.clear();n||F.length>0;){if(n||(n=F.pop(),r=F.data[F.length-1],o=M.pop()??0,a=!0),n.leaf&&(t=(0,s.qh)(n.children,(0,i.zI)(e),n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),F.push(n),this._condense(F),this;a||n.leaf||!_(n,l)?r?(o++,n=r.children[o],a=!1):n=null:(F.push(n),M.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_build(e,t,n,s){const i=n-t+1;let r=this._maxEntries;if(i<=r){const s=new E(e.slice(t,n+1));return u(s,this._toBBox),s}s||(s=Math.ceil(Math.log(i)/Math.log(r)),r=Math.ceil(i/r**(s-1)));const o=new w([]);o.height=s;const a=Math.ceil(i/r),l=a*Math.ceil(Math.sqrt(r));x(e,t,n,l,this._compareMinX);for(let u=t;u<=n;u+=l){const t=Math.min(u+l-1,n);x(e,u,t,a,this._compareMinY);for(let n=u;n<=t;n+=a){const i=Math.min(n+a-1,t);o.children.push(this._build(e,n,i,s-1))}}return u(o,this._toBBox),o}_insert(e,t,n){const s=this._toBBox,i=n?e:s(e);F.clear();const r=function(e,t,n,s){for(;s.push(t),!0!==t.leaf&&s.length-1!==n;){let n,s=1/0,i=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=m(o),l=y(e,o)-a;l<i?(i=l,s=a<s?a:s,n=o):l===i&&a<s&&(s=a,n=o)}t=n||t.children[0]}return t}(i,this._data,t,F);for(r.children.push(e),h(r,i);t>=0&&F.data[t].children.length>this._maxEntries;)this._split(F,t),t--;!function(e,t,n){for(let s=n;s>=0;s--)h(t.data[s],e)}(i,F,t)}_split(e,t){const n=e.data[t],s=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,s);const r=this._chooseSplitIndex(n,i,s);if(!r)return;const o=n.children.splice(r,n.children.length-r),a=n.leaf?new E(o):new w(o);a.height=n.height,u(n,this._toBBox),u(a,this._toBBox),t?e.data[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this._data=new w([e,t]),this._data.height=e.height+1,u(this._data,this._toBBox)}_chooseSplitIndex(e,t,n){let s,i,r;s=i=1/0;for(let o=t;o<=n-t;o++){const t=d(e,0,o,this._toBBox),a=d(e,o,n,this._toBBox),l=g(t,a),u=m(t)+m(a);l<s?(s=l,r=o,i=u<i?u:i):l===s&&u<i&&(i=u,r=o)}return r}_chooseSplitAxis(e,t,n){const s=e.leaf?this._compareMinX:c,i=e.leaf?this._compareMinY:f;this._allDistMargin(e,t,n,s)<this._allDistMargin(e,t,n,i)&&e.children.sort(s)}_allDistMargin(e,t,n,s){e.children.sort(s);const i=this._toBBox,r=d(e,0,t,i),o=d(e,n-t,n,i);let a=p(r)+p(o);for(let l=t;l<n-t;l++){const t=e.children[l];h(r,e.leaf?i(t):t),a+=p(r)}for(let l=n-t-1;l>=t;l--){const t=e.children[l];h(o,e.leaf?i(t):t),a+=p(o)}return a}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const i=e.data[t-1],r=i.children;r.splice((0,s.qh)(r,n,r.length,i.indexHint),1)}else this.clear();else u(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function l(e,t){let n=e;for(B.clear();n;){if(!0===n.leaf)for(const e of n.children)t((0,i.zI)(e));else B.pushArray(n.children);n=B.pop()??null}}function u(e,t){d(e,0,e.children.length,t,e)}function d(e,t,n,s,i){i||(i=new E([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],h(i,e.leaf?s(r):r);return i}function h(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function c(e,t){return e.minX-t.minX}function f(e,t){return e.minY-t.minY}function m(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function p(e){return e.maxX-e.minX+(e.maxY-e.minY)}function y(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function g(e,t){const n=Math.max(e.minX,t.minX),s=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,r-s)}function _(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function I(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function x(e,t,n,s,i){const r=[t,n];for(;r.length;){const t=r.pop(),n=r.pop();if(t-n<=s)continue;const a=n+Math.ceil((t-n)/s/2)*s;(0,o.q)(e,a,n,t,i),r.push(n,a,a,t)}}const b=new r.A,B=new r.A,F=new r.A,M=new r.A({deallocator:void 0});class T{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class v extends T{constructor(){super(...arguments),this.height=1,this.indexHint=new s.vW}}class E extends v{constructor(e){super(),this.children=e,this.leaf=!0}}class w extends v{constructor(e){super(),this.children=e,this.leaf=!1}}},72547:(e,t,n)=>{n.d(t,{A:()=>m});var s=n(18690),i=n(50076),r=n(54099),o=n(76460),a=n(42294),l=n(2413),u=n(98618),d=n(33328),h=n(55167),c=n(33376);const f=(0,a.vt)();class m{constructor(e){this.geometryInfo=e,this._boundsStore=new d.F,this._featuresById=new Map,this._usedMemory=0,this.events=new r.A,this.featureAdapter=c.T}get usedMemory(){return this._usedMemory}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;const[t,n,s,i]=this.fullBounds;return{xmin:t,ymin:n,xmax:s,ymax:i,spatialReference:(0,h.ag)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}upsertMany(e){const t=e.map((e=>this._upsert(e)));return this._emitChanged(),t.filter(s.Ru)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged(),this._usedMemory=0}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t((0,a.Jt)(f,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.A("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let s;if(n?(e.displayId=n.displayId,s=this._boundsStore.get(t),this._boundsStore.delete(t),this._usedMemory-=this.estimateFeatureUsedMemory?.(n)??0):null!=this.onFeatureAdd&&this.onFeatureAdd(e),!e.geometry?.coords?.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);s=(0,u.jQ)(null!=s?s:(0,l.vt)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=s&&this._boundsStore.set(t,s),this._featuresById.set(t,e),this._usedMemory+=this.estimateFeatureUsedMemory?.(e)??0}_upsert(e){const t=e?.objectId;if(null==t)return o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.A("featurestore:invalid-feature","feature id is missing",{feature:e})),null;const n=this._featuresById.get(t);if(!n)return this._add(e),e;this._usedMemory-=this.estimateFeatureUsedMemory?.(n)??0;const{geometry:s,attributes:r}=e;for(const i in r)n.attributes[i]=r[i];return s&&(n.geometry=s,this._boundsStore.set(t,(0,u.jQ)((0,l.vt)(),s,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),this._usedMemory+=this.estimateFeatureUsedMemory?.(n)??0,n}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._boundsStore.delete(t),this._featuresById.delete(t),this._usedMemory-=this.estimateFeatureUsedMemory?.(e)??0,e}}},75146:(e,t,n)=>{n.d(t,{A:()=>s});class s{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new s;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},78482:(e,t,n)=>{n.d(t,{J:()=>m});var s=n(53084),i=n(50346),r=n(19902),o=n(1438),a=n(80963),l=n(24586),u=n(48094),d=n(9345),h=n(71857),c=n(85932),f=n(81376);async function m(e,t,n){const m=(0,i.Mq)(n),{point:p,distance:y,returnEdge:g,vertexMode:_}=t;if(!g&&"none"===_)return{candidates:[]};let I=(0,s.o8)(t.query);I=await e.schedule((()=>(0,h.T2)(I,e.definitionExpression,e.spatialReference)),m),I=await e.reschedule((()=>(0,c.B4)(I,{availableFields:e.availableFields,fieldsIndex:e.fieldsIndex,geometryType:e.geometryType,spatialReference:e.spatialReference})),m);const x=!(0,a.aI)(p.spatialReference,e.spatialReference);x&&await(0,l.Nk)(p.spatialReference,e.spatialReference);const b="number"==typeof y?y:y.x,B="number"==typeof y?y:y.y,F={xmin:p.x-b,xmax:p.x+b,ymin:p.y-B,ymax:p.y+B,spatialReference:p.spatialReference},M=x?(0,l.Cv)(F,e.spatialReference):F;if(!M)return{candidates:[]};const T=(await(0,o.el)((0,r.rS)(p),null,{signal:m}))[0],v=(await(0,o.el)((0,r.rS)(M),null,{signal:m}))[0];if(null==T||null==v)return{candidates:[]};const E=new d.G(await e.reschedule((()=>e.searchFeatures((0,u.ux)(v.toJSON()))),m),I,e);await e.reschedule((()=>e.executeObjectIdsQuery(E)),m),await e.reschedule((()=>e.executeTimeQuery(E)),m),await e.reschedule((()=>e.executeAttributesQuery(E)),m),await e.reschedule((()=>async function(e,t,n){const{query:s}=t,{spatialRel:i}=s;if(!t?.items?.length||!s.geometry||!i)return;const r=await(0,f.xt)(i,s.geometry,e.geometryType,e.hasZ,e.hasM),o=await e.runSpatialFilter(t.items,(e=>r(e.geometry)),n);t.items=o}(e,E,m)),m);const w=T.toJSON(),A=x?(0,l.Cv)(w,e.spatialReference):w,N=x?Math.max(M.xmax-M.xmin,M.ymax-M.ymin)/2:y;return E.createSnappingResponse({...t,point:A,distance:N},p.spatialReference)}},90321:(e,t,n)=>{function s(e,t){return e?t?4:3:t?3:2}function i(e,t,n,i){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const a=e.coords,l=[],u=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:d,coords:h}=t,c=s(n,i);let f=0;for(const s of d){const e=r(u,h,f,s,n,i);e&&l.push(e),f+=s*c}if(l.sort(((e,t)=>{let s=e[2]-t[2];return 0===s&&n&&(s=e[4]-t[4]),s})),l.length){let e=6*l[0][2];a[0]=l[0][0]/e,a[1]=l[0][1]/e,n&&(e=6*l[0][4],a[2]=0!==e?l[0][3]/e:0),(a[0]<u[0]||a[0]>u[1]||a[1]<u[2]||a[1]>u[3]||n&&(a[2]<u[4]||a[2]>u[5]))&&(a.length=0)}if(!a.length){const e=t.lengths[0]?o(h,0,d[0],n,i):null;if(!e)return null;a[0]=e[0],a[1]=e[1],n&&e.length>2&&(a[2]=e[2])}return e}function r(e,t,n,i,r,o){const a=s(r,o);let l=n,u=n+a,d=0,h=0,c=0,f=0,m=0;for(let s=0,y=i-1;s<y;s++,l+=a,u+=a){const n=t[l],s=t[l+1],i=t[l+2],o=t[u],a=t[u+1],p=t[u+2];let y=n*a-o*s;f+=y,d+=(n+o)*y,h+=(s+a)*y,r&&(y=n*p-o*i,c+=(i+p)*y,m+=y),n<e[0]&&(e[0]=n),n>e[1]&&(e[1]=n),s<e[2]&&(e[2]=s),s>e[3]&&(e[3]=s),r&&(i<e[4]&&(e[4]=i),i>e[5]&&(e[5]=i))}if(f>0&&(f*=-1),m>0&&(m*=-1),!f)return null;const p=[d,h,.5*f];return r&&(p[3]=c,p[4]=.5*m),p}function o(e,t,n,i,r){const o=s(i,r);let h=t,c=t+o,f=0,m=0,p=0,y=0;for(let s=0,g=n-1;s<g;s++,h+=o,c+=o){const t=e[h],n=e[h+1],s=e[h+2],r=e[c],o=e[c+1],g=e[c+2],_=i?l(t,n,s,r,o,g):a(t,n,r,o);if(_)if(f+=_,i){const e=d(t,n,s,r,o,g);m+=_*e[0],p+=_*e[1],y+=_*e[2]}else{const e=u(t,n,r,o);m+=_*e[0],p+=_*e[1]}}return f>0?i?[m/f,p/f,y/f]:[m/f,p/f]:n>0?i?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function a(e,t,n,s){const i=n-e,r=s-t;return Math.sqrt(i*i+r*r)}function l(e,t,n,s,i,r){const o=s-e,a=i-t,l=r-n;return Math.sqrt(o*o+a*a+l*l)}function u(e,t,n,s){return[e+.5*(n-e),t+.5*(s-t)]}function d(e,t,n,s,i,r){return[e+.5*(s-e),t+.5*(i-t),n+.5*(r-n)]}n.d(t,{Q:()=>i})},97255:(e,t,n)=>{n.d(t,{Qf:()=>l,Qh:()=>o,RS:()=>i,ez:()=>h,i5:()=>c,lM:()=>r,qK:()=>d});var s=n(78393);const i=16;function r(e){if(!e)return 0;let t=d;for(const n in e)e.hasOwnProperty(n)&&(t+=a(e[n],!1));return t}function o(e){if(!e)return 0;if("number"==typeof e[0])return l(e);if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return u(e,8);let n=h;for(let s=0;s<t;s++)n+=a(e[s]);return n}(e);let t=d;for(const n in e)e.hasOwnProperty(n)&&(t+=a(e[n]));return t}function a(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];switch(typeof e){case"object":return t?o(e):d;case"string":return function(e){return 32+e.length}(e);case"number":return i;case"boolean":return 4;default:return 8}}function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>e+(t?(0,s.iu)(t)?t.byteLength+c:Array.isArray(t)?u(t,i):0:0)),0)}function u(e,t){return h+e.length*t}const d=32,h=16,c=145}}]);
//# sourceMappingURL=9983.d5944135.chunk.js.map