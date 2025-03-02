"use strict";(self.webpackChunkhenhack25=self.webpackChunkhenhack25||[]).push([[5393],{58272:(e,t,r)=>{r.d(t,{X:()=>n,b:()=>i});const n=50,i=5},86524:(e,t,r)=>{r.d(t,{Ge:()=>d,WT:()=>h});var n=r(31633),i=r(19247),s=r(23701),o=r(13312),a=r(7137),l=r(1438),c=r(80963),u=r(45417),p=r(58272);function d(e,t,r){const n=1===e?10:e;return n**(r?Math.round(function(e,t){return Math.log(e)/Math.log(t)}(p.X/t,n)):0)}function h(e,t,r){const p="number"==typeof e?null:e,d=r??p?.spatialReference;if(null==d||!(0,c.fn)(d)||function(e){const{isGeographic:t,isWebMercator:r}=e;return!t&&!r}(d))return(0,n.GA)(d);let h=p?.x??e,g=p?.y??t;const f=1/Math.sqrt(2);let M=h+f,v=g+f;const{isWebMercator:y,isGeographic:S}=d;let w=S&&!(0,a.TT)(d)?o.A.WGS84:d;if(y){let e=new i.A({x:h,y:g,spatialReference:d});(0,u.ci)(e,!0,e),h=e.x,g=e.y,e=new i.A({x:M,y:v,spatialReference:d}),(0,u.ci)(e,!0,e),M=e.x,v=e.y,w=o.A.WGS84}const R=new s.A({paths:[[[h,g],[M,v]]],spatialReference:w}),P=(0,l.XX)(R,10);let x;try{[x]=(0,a.l1)([P],"meters")}catch{return(0,n.GA)(d)}return x}},95393:(e,t,r)=>{r.d(t,{GridSnappingEngine:()=>w});var n=r(35143),i=r(91967),s=r(76460),o=r(15941),a=r(31633),l=r(46053),c=(r(81806),r(47249),r(85842)),u=r(20664),p=r(9624),d=r(1438),h=r(68002),g=r(58272),f=r(86524),M=r(23862),v=r(70330),y=r(90836),S=r(45633);let w=class extends i.A{constructor(e){super(e),this.options=null}destroy(){this._set("options",null)}get grid(){return this.view.grid}get effectiveViewRotation(){return this.grid?.rotateWithMap?0:(0,o.kU)(this.view.rotation??0)}get gridRotation(){return(0,o.kU)(this.grid?.rotation??0)}get gridCenter(){const{spatialReference:e,grid:t}=this;if(!t||!e||!(0,p.isLoadedOrLoadFor)(t.center.spatialReference,e))return null;try{const r=(0,p.project)(t.center,e),n=e.isWrappable&&null!=this.view?.center?(0,d.O7)(r.x,this.view.center.x,e):r.x;return(0,M.vt)(n,r.y,r.z)}catch(r){return s.A.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.",r),null}}get offsetScaleFactor(){const{pixelsPerStride:e,grid:t}=this;if(!t||!e)return 1;const{majorLineInterval:r,dynamicScaling:n}=t;return r<1?null:(0,f.Ge)(r,e,n)}get spatialReference(){return this.view.spatialReference}get gridMetersPerStride(){const{grid:e}=this;return e?(0,a.oU)(e.spacing,e.units,"meters"):null}get viewMetersPerPixel(){const{viewMetersPerSRUnit:e}=this;return null==e?null:e*(0,h.i1)(this.view.scale,this.view.spatialReference)}get viewMetersPerSRUnit(){const{spatialReference:e}=this.view;return this.gridCenter?(0,f.WT)(this.gridCenter[0],this.gridCenter[1],e):null}get pixelsPerStride(){const{gridMetersPerStride:e,viewMetersPerPixel:t}=this;return t&&e?e/t:null}get updating(){return null!=this.grid&&null!=this.spatialReference&&null==this.viewMetersPerSRUnit}async fetchCandidates(e,t,r){const{options:n,view:i}=this;if(!n?.effectiveGridEnabled||!i.grid||r.feature?.attributes&&v.io in r.feature.attributes)return[];const s=r.coordinateHelper.arrayToPoint(e),o=n.distance*("touch"===r.pointer?n.touchSensitivityMultiplier:1);return this.fetchCandidatesSync(s,o)}fetchCandidatesSync(e,t){const r=[],{grid:n,effectiveViewRotation:i,gridRotation:s,gridCenter:o,viewMetersPerPixel:a,viewMetersPerSRUnit:l,offsetScaleFactor:c,spatialReference:u,gridMetersPerStride:d,pixelsPerStride:h}=this;if(!(n&&a&&l&&o&&u&&c&&d&&h))return r;if(!n.dynamicScaling&&h<g.b)return r;if(!(0,p.isLoadedOrLoadFor)(e.spatialReference,u))return r;const f=(0,p.project)(e,u),v=(0,M.vt)(f.x,f.y,f.z),w=R(v,-s,o,-i),b=d/l*c,Z=P(w,b,o),{shouldSnapX:G,shouldSnapY:C}=x(Z,w,t,a,l);if(!G&&!C)return[];const A=(0,M.vt)((G?Z:w)[0],(C?Z:w)[1]),k=R(A,s,o,i),L=R(Z,s,o,i);if(C){const e=_(Z,w,b,"y"),t=R(e,s,o,i);r.push(new S.o({lineStart:L,lineEnd:t,targetPoint:k,isDraped:!1}))}if(G){const e=_(Z,w,b,"x"),t=R(e,s,o,i);r.push(new S.o({lineStart:L,lineEnd:t,targetPoint:k,isDraped:!1}))}return G&&C&&r.push(new y.N(k,r[0],r[1],!1)),r}};(0,n._)([(0,l.MZ)({constructOnly:!0})],w.prototype,"view",void 0),(0,n._)([(0,l.MZ)()],w.prototype,"options",void 0),(0,n._)([(0,l.MZ)()],w.prototype,"grid",null),(0,n._)([(0,l.MZ)()],w.prototype,"effectiveViewRotation",null),(0,n._)([(0,l.MZ)()],w.prototype,"gridRotation",null),(0,n._)([(0,l.MZ)()],w.prototype,"gridCenter",null),(0,n._)([(0,l.MZ)()],w.prototype,"offsetScaleFactor",null),(0,n._)([(0,l.MZ)()],w.prototype,"spatialReference",null),(0,n._)([(0,l.MZ)()],w.prototype,"gridMetersPerStride",null),(0,n._)([(0,l.MZ)()],w.prototype,"viewMetersPerPixel",null),(0,n._)([(0,l.MZ)()],w.prototype,"viewMetersPerSRUnit",null),(0,n._)([(0,l.MZ)()],w.prototype,"pixelsPerStride",null),(0,n._)([(0,l.MZ)()],w.prototype,"updating",null),w=(0,n._)([(0,c.$)("esri.views.interactive.snapping.GridSnappingEngine")],w);const R=(e,t,r,n)=>{const i=(0,M.Hh)(e[0],e[1],e[2]);return(0,u.L)(i,(0,u.L)(i,i,r,t),r,n)},P=(e,t,r)=>{const n=(e[0]-r[0])/t,i=(e[1]-r[1])/t,s=Math.trunc(n),o=Math.trunc(i),a=Math.round(n%1),l=Math.round(i%1),c=r[0]+(s+a)*t,u=r[1]+(o+l)*t;return(0,M.vt)(c,u)},x=(e,t,r,n,i)=>{if(n<=0)return{shouldSnapX:!1,shouldSnapY:!1};const s=(e[0]-t[0])/n,o=(e[1]-t[1])/n;return{shouldSnapX:Math.abs(s*i)<r,shouldSnapY:Math.abs(o*i)<r}},_=(e,t,r,n)=>{if("y"===n){const n=t[0]>e[0]?1:-1;return(0,M.vt)(e[0]+r*n,e[1])}const i=t[1]>e[1]?1:-1;return(0,M.vt)(e[0],e[1]+r*i)}}}]);
//# sourceMappingURL=5393.6a465ad5.chunk.js.map