"use strict";(self.webpackChunkhenhack25=self.webpackChunkhenhack25||[]).push([[135,8067],{135:(e,t,n)=>{n.d(t,{a:()=>i,e:()=>s,l:()=>u,s:()=>a});var r=n(4207),o=n(58067);function s(e){return(0,o.toPoint)((0,r.g7)((0,o.fromGeometry)(e)),(0,o.getSpatialReference)(e))}function i(e){const t=e.map(o.fromGeometry),n=(0,o.getSpatialReference)(e);return(0,r.zo)(t).map((e=>(0,o.toPoint)(e,n)))}const a=(0,r.fz)(),u=Object.freeze(Object.defineProperty({__proto__:null,execute:s,executeMany:i,supportsCurves:a},Symbol.toStringTag,{value:"Module"}))},4207:(e,t,n)=>{n.d(t,{fz:()=>d,g7:()=>f,zo:()=>P});var r=n(68707),o=n(97799),s=n(91523),i=n(79186),a=n(21557),u=n(26871),c=n(82103),l=n(67612),g=n(78429);class m extends r.G{progress_(){}tock(){return!0}getRank(){return 1}constructor(e,t){super(),this.m_index=-1,this.m_progressCounter=0,this.m_progressTracker=t,this.m_inputGeoms=e}next(){const e=this.m_inputGeoms.next();return e?((0,o.d)(e),this.m_index=this.m_inputGeoms.getGeometryID(),this.labelPoint(e)):null}getGeometryID(){return this.m_index}labelPoint(e){if(null===e&&(0,o.t)("null pointer is not allowed"),e.getGeometryType()===o.G.enumPoint)return e;if(e.isEmpty())return new s.P({vd:e.getDescription()});switch(e.getGeometryType()){case o.G.enumPolygon:return this.labelPointPolygon(e);case o.G.enumPolyline:return this.labelPointPolyline(e);case o.G.enumMultiPoint:return this.labelPointMultiPoint(e);case o.G.enumEnvelope:return this.labelPointEnvelope(e);default:(0,o.t)("geometry is not supported")}}labelPointPolygon(e){const t=new a.J;e.queryEnvelope(t);const n=(0,s.c)(null,t,!0).total();let r=null,m=e;if(e.hasNonLinearSegments()){const t=new i.a({copy:e}),s=(0,c.ah)(t,.25*n,n);(0,o.g)(s!==e),r=s,m=r}let h=0,f=0;for(let o=0,s=m.getPathCount();o<s;++o){const e=Math.abs(m.calculateRingArea2D(o));e>f&&(f=e,h=o)}const P=new u.P;if(Math.abs(f)<=2*n*n?P.setNAN():P.assign((0,l.a)(m,h)),Number.isNaN(P.x)){const e=new a.J;return m.queryPathEnvelope(h,e),new s.P({pt:e.getCenter()})}if(m.getPointCount()<4)return new s.P({x:P.x,y:P.y});const d=u.P.getNAN(),y=[d.clone(),d.clone(),d.clone(),d.clone()],x=[Number.NaN,Number.NaN,Number.NaN,Number.NaN],N=[Number.NaN,Number.NaN,Number.NaN,Number.NaN];let p=!1,C=(new g.O).getNearestCoordinate(m,P,!0,!1);if(0===C.m_distance&&(p=!0,y[0]=P,C=(new g.O).getNearestCoordinate(m,P,!1,!1),C.m_distance>.25*t.minDimension()*1.66666666))return new s.P({x:P.x,y:P.y});x[0]=C.m_distance,N[0]=0;const b=new u.P;let w=!1,G=.25,S=-1;const D=new a.J;m.queryPathEnvelope(h,D);do{let e=Number.NaN;if(y[1]=this.calculateParacentroid_(m,(0,u.q)(D.xmin,D.xmax,G),n),y[1].isNAN()||(C=(new g.O).getNearestCoordinate(m,y[1],!1,!1),e=C.m_distance),e>n&&1===(0,c.g)(m,y[1],n))w=!0,x[1]=e,N[1]=u.P.sqrDistance(y[1],P);else if(e>S&&(S=e,b.setCoordsPoint2D(y[1])),G-=.01,G<.1){if(!(S>=0))break;w=!0,x[1]=S,y[1]=b,N[1]=u.P.sqrDistance(y[1],P)}}while(!w);w=!1,G=.5,S=-1;let V=.01,v=1;do{let e=Number.NaN;if(y[2]=this.calculateParacentroid_(m,(0,u.q)(D.xmin,D.xmax,G),n),y[2].isNAN()||(C=(new g.O).getNearestCoordinate(m,y[2],!1,!1),e=C.m_distance),e>n&&1===(0,c.g)(m,y[2],n))w=!0,x[2]=e,N[2]=u.P.sqrDistance(y[2],P);else if(e>S&&(S=e,b.setCoordsPoint2D(y[2])),G=.5+V*v,V+=.01,v*=-1,G<.3||G>.7){if(!(S>=0))break;w=!0,x[2]=S,y[2]=b,N[2]=u.P.sqrDistance(y[2],P)}}while(!w);w=!1,G=.75,S=-1;do{let e=Number.NaN;if(y[3]=this.calculateParacentroid_(m,(0,u.q)(D.xmin,D.xmax,G),n),y[3].isNAN()||(C=(new g.O).getNearestCoordinate(m,y[3],!1,!1),e=C.m_distance),e>n&&1===(0,c.g)(m,y[3],n))w=!0,x[3]=e,N[3]=u.P.sqrDistance(y[3],P);else if(e>S&&(S=e,b.setCoordsPoint2D(y[3])),G+=.01,G>.9){if(!(S>=0))break;w=!0,x[3]=S,y[3]=b,N[3]=u.P.sqrDistance(y[3],P)}}while(!w);const R=[0,1,2,3],A=p?0:1;for(let o=A;o<4;o++)for(let e=A;e<3;e++){const t=N[e],n=N[e+1];if((0,u.r)(t,n)>0){const r=R[e];R[e]=R[e+1],R[e+1]=r,N[e]=n,N[e+1]=t}}let M=A,E=0,T=0;for(let o=A;o<4;o++){switch(o){case 0:T=2*x[R[o]];break;case 1:T=1.66666666*x[R[o]];break;case 2:T=1.33333333*x[R[o]];break;case 3:T=x[R[o]]}T>E&&(E=T,M=R[o])}return(0,o.g)(!y[M].isNAN()),new s.P({x:y[M].x,y:y[M].y})}labelPointPolyline(e){const t=new u.P;if(e.getPointCount()>2*e.getPathCount()){let n=-1,r=-Number.MAX_VALUE;for(let t=0,a=e.getPathCount();t<a;t++)if(e.getPathSize(t)>2){const o=e.calculatePathLength2D(t);o>r&&(r=o,n=t)}const o=e.getPathStart(n),s=e.getPathEnd(n),i=Math.trunc((o+s)/2);t.assign(e.getXY(i))}else{let n=-Number.MAX_VALUE;const r=e.querySegmentIterator();for(;r.nextPath();)if(r.hasNextSegment()){const e=r.nextSegment(),o=e.calculateLength2D();o>n&&(n=o,t.assign(e.getCoord2D(e.lengthToT(.5*o))))}}return new s.P({x:t.x,y:t.y})}labelPointMultiPoint(e){const t=new a.J;e.queryEnvelope(t);const n=t.getCenter(),r=(new g.O).getNearestCoordinate(e,n,!1,!1).m_coordinate;return new s.P({x:r.x,y:r.y})}labelPointEnvelope(e){const t=e.getCenterXY();return new s.P({x:t.x,y:t.y})}calculateParacentroid_(e,t,n){const r=new a.J;e.queryEnvelope(r);const s=new u.P(t,0);let c=Number.MAX_VALUE,l=Number.MAX_VALUE,g=!1,m=!1;const h=new i.L;h.setStartXYCoords(s.x,r.ymin-1),h.setEndXYCoords(s.x,r.ymax+1);const f=new a.J,P=new u.P,d=new u.P,y=(0,u.m)(u.P,2),x=e.querySegmentIterator();for(;x.nextPath();)for(;x.hasNextSegment();){const e=x.nextSegment();if(e.queryEnvelope(f),(0,o.g)(e.isMonotoneQuickAndDirty()),P.setCoordsPoint2D(h.getStartXY()),d.setCoordsPoint2D(h.getEndXY()),0===f.clipLine(P,d))continue;if(1!==h.intersect(e,y,null,null,n))continue;const t=y[0].y;c>l?t<c&&(c=t,g=!0):t<l&&(l=t,m=!0)}return g&&m?s.y=(c+l)/2:s.setNAN(),s}}const h=new class{getOperatorType(){return 10203}accelerateGeometry(e,t,n){return!1}canAccelerateGeometry(e){return!1}supportsCurves(){return!0}executeMany(e,t){return new m(e,t)}execute(e,t){return new m(null,t).labelPoint(e)}};function f(e){return h.execute(e,null)}function P(e){const t=h.executeMany(new r.S(e),null);return Array.from(t)}function d(){return h.supportsCurves()}},58067:(e,t,n)=>{n.r(t),n.d(t,{fromExtent:()=>N,fromGeometry:()=>x,fromMultipoint:()=>p,fromPoint:()=>C,fromPolygon:()=>b,fromPolyline:()=>w,fromSpatialReference:()=>G,getSpatialReference:()=>y,toExtent:()=>D,toGeometry:()=>S,toMultipoint:()=>V,toPoint:()=>v,toPolygon:()=>R,toPolyline:()=>A});var r=n(26871),o=(n(21557),n(97799)),s=n(91523),i=n(79186),a=n(82103),u=n(76797),c=n(66388),l=n(19247),g=n(65215),m=n(23701),h=(n(59739),n(48045));const f="_gxVersion",P=2,d=1;function y(e){return Array.isArray(e)?e[0].spatialReference:e.spatialReference}function x(e){switch(e.type){case"point":return C(e);case"multipoint":return p(e);case"polyline":return w(e);case"polygon":return b(e);case"extent":return N(e);default:throw new Error(`Unsupported geometry type: ${e.type}`)}}function N(e){if(!e.getCacheValue(f)){const t=new s.E;t.setCoords(e.xmin,e.ymin,e.xmax,e.ymax),e.hasM&&t.setInterval(P,0,e.mmin,e.mmax),e.hasZ&&t.setInterval(d,0,e.zmin,e.zmax),e.setCacheValue(f,t)}return e.getCacheValue(f)}function p(e){if(!e.getCacheValue(f)){const t=new i.M,n=new s.P,r=e.points,o=e.hasM,a=e.hasZ,u=a?3:2;for(let e=0,s=r.length;e<s;e++){const s=r[e];n.setXYCoords(s[0],s[1]),a&&n.setZ(s[2]??0),o&&n.setM(s[u]??NaN),t.add(n)}e.setCacheValue(f,t)}return e.getCacheValue(f)}function C(e){if(!e.getCacheValue(f)){const t=new s.P;t.setXYCoords(e.x,e.y),e.hasM&&t.setM(e.m),e.hasZ&&t.setZ(e.z),e.setCacheValue(f,t)}return e.getCacheValue(f)}function b(e){if(!e.getCacheValue(f)){const{curveRings:t,hasM:n,hasZ:r,rings:o}=e,s=(0,h.fromGeometryToGXGeometry)({curveRings:t,hasM:n,hasZ:r,rings:o});e.setCacheValue(f,s)}return e.getCacheValue(f)}function w(e){if(!e.getCacheValue(f)){const{curvePaths:t,hasM:n,hasZ:r,paths:o}=e,s=(0,h.fromGeometryToGXGeometry)({curvePaths:t,hasM:n,hasZ:r,paths:o});e.setCacheValue(f,s)}return e.getCacheValue(f)}function G(e){if(e.wkid)return(0,a.c)(e.wkid);const t=e.wkt2||e.wkt;return t?(0,a.a)(t):null}function S(e,t){if(e)switch(e.getGeometryType()){case o.G.enumPoint:return v(e,t);case o.G.enumEnvelope:return D(e,t);case o.G.enumMultiPoint:return V(e,t);case o.G.enumPolyline:return A(e,t);case o.G.enumPolygon:return R(e,t)}return null}function D(e,t){if(e.isEmpty())return null;const n=new u.A({xmin:e.getXMin(),ymin:e.getYMin(),xmax:e.getXMax(),ymax:e.getYMax(),spatialReference:t}),r=e.getDescription();if(r.hasM()){const t=e.queryInterval(P,0);n.mmin=t.vmin,n.mmax=t.vmax}if(r.hasZ()){const t=e.queryInterval(d,0);n.zmin=t.vmin,n.zmax=t.vmax}return n.setCacheValue(f,e),n}function V(e,t){if(e.isEmpty())return null;const n=e.getDescription(),r=n.hasM(),o=n.hasZ(),i=[],a=new s.P;for(let s=0,c=e.getPointCount();s<c;s++){e.getPointByVal(s,a);const t=[a.getX(),a.getY()];o&&t.push(a.getZ()),r&&t.push(a.getM()),i.push(t)}const u=new c.A({hasM:r,hasZ:o,points:i,spatialReference:t});return u.setCacheValue(f,e),u}function v(e,t){if(e instanceof r.P)return new l.A({x:e.x,y:e.y,spatialReference:t});if(e.isEmpty())return null;const n=new l.A({x:e.getX(),y:e.getY(),spatialReference:t}),o=e.getDescription();return o.hasM()&&(n.m=e.getM()),o.hasZ()&&(n.z=e.getZ()),n.setCacheValue(f,e),n}function R(e,t){if(e.isEmpty())return null;const n=g.A.fromJSON({spatialReference:t,...(0,h.toGeometry)(e,null)});return n.setCacheValue(f,e),n}function A(e,t){if(e.isEmpty())return null;const n=m.A.fromJSON({spatialReference:t,...(0,h.toGeometry)(e,null)});return n.setCacheValue(f,e),n}},67612:(e,t,n)=>{n.d(t,{a:()=>i,c:()=>s});var r=n(97799),o=n(26871);function s(e,t){if(!e.isEmpty())switch(e.getGeometryType()){case r.G.enumPolygon:return a(e);case r.G.enumPolyline:return g(e.getImpl());case r.G.enumLine:case r.G.enumBezier:case r.G.enumEllipticArc:return function(e){const t=e.calculateLength2D();return 0===t?e.getStartXY():e.calculateWeightedCentroid2D().mul(1/t)}(e);case r.G.enumMultiPoint:return function(e){const t=new o.K(0),n=new o.K(0),r=e.getImpl(),s=r.getAttributeStreamRef(0),i=r.getPointCount(),a=new o.P;for(let o=0;o<i;o++)s.queryPoint2D(2*o,a),t.add(a.x),n.add(a.y);const u=new o.P;return u.setCoords(t.getResult(),n.getResult()),u.divThis(i)}(e);case r.G.enumEnvelope:return e.getCenterXY();case r.G.enumPoint:return e.getXY();default:return o.P.construct(Number.NaN,Number.NaN)}return o.P.construct(Number.NaN,Number.NaN)}function i(e,t){return a(e,t)}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;const n=new o.K(0),r=new o.K(0),s=e.getImpl();let i;const a=s.hasNonLinearSegments();let g;const m=s.getXY(0);if(-1===t){if(g=s.calculateArea2D(),0===g)return l(e);a&&(i=s.querySegmentIterator());for(let e=0,t=s.getPathCount();e<t;e++)u(m,s,e,n,r),a&&c(m,i,n,r)}else{if(g=s.calculateRingArea2D(t),0===g)return l(e,t);a&&(i=s.querySegmentIterator(),i.resetToPath(t)),u(m,s,t,n,r),a&&c(m,i,n,r)}const h=new o.P,f=new o.P;return h.setCoords(n.getResult(),r.getResult()),f.assign(h.mul(1/g).add(m)),f}function u(e,t,n,r,s){const i=t.getPathStart(n),a=t.getPathEnd(n);if(a-i<3)return;const u=t.getAttributeStreamRef(0),c=u.readPoint2D(2*i),l=u.readPoint2D(2*(i+1));l.subThis(c);const g=new o.K(0),m=t.hasNonLinearSegments(),h=1/3,f=new o.P;for(let o=i+2;o<a;o++){u.queryPoint2D(2*o,f),f.subThis(c);const e=.5*f.crossProduct(l);m&&g.add(e);const t=h*e;r.add((l.x+f.x)*t),s.add((l.y+f.y)*t),l.setCoordsPoint2D(f)}const P=m?g.getResult():t.calculateRingArea2D(n),d=c.sub(e).mul(P);r.add(d.x),s.add(d.y)}function c(e,t,n,o){let s;for(t.nextPath()||(0,r.c)("centroid");null!==(s=t.nextCurve());){const t=s.calculateWeightedAreaCentroid2D(e);n.add(t.x),o.add(t.y)}}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return g(e.getImpl(),t)}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;const n=-1===t?e.calculateLength2D():e.calculatePathLength2D(t);if(0===n)return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;if(-1!==t)return e.getXY(e.getPathStart(t));const n=new o.K(0),r=new o.K(0);for(let o=0;o<e.getPathCount();++o){const t=e.getXY(e.getPathStart(o));n.add(t.x),r.add(t.y)}return o.P.construct(n.getResult(),r.getResult()).mul(1/e.getPathCount())}(e,t);const r=new o.K(0),s=new o.K(0),i=e.querySegmentIterator();for(-1!==t&&i.resetToPath(t);i.nextPath();){const n=i.getPathIndex(),o=e.getXY(e.getPathStart(n));for(;i.hasNextSegment();){const e=i.nextSegment(),t=e.calculateLength2D();if(0===t)continue;const n=e.calculateWeightedCentroid2D().sub(o.mul(t));r.add(n.x),s.add(n.y)}const a=o.mul(e.calculatePathLength2D(n));if(r.add(a.x),s.add(a.y),-1!==t)break}const a=new o.P;return a.setCoords(r.getResult(),s.getResult()),a.mul(1/n)}},78429:(e,t,n)=>{n.d(t,{O:()=>m});var r=n(97799),o=n(21557),s=n(26871),i=n(82103);function a(){return u(new s.P,-1,Number.NaN)}function u(e,t,n){return{m_coordinate:e.clone(),m_vertexIndex:t,m_geometryIndex:0,m_distance:n,m_bRightSide:!1,isEmpty:c}}function c(){return Number.isNaN(this.m_distance)}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1;if(e.isEmpty())return 3;const u=e.getGeometryType();if((0,r.f)(u))return function(e,t,n,o){if(n>=0||o>=0)return(0,r.t)("");if(e.isDegenerate(0))return e.getStartXY().equals(t)?2:3;if(!e.isCurve()){const n=s.P.orientationRobust(t,e.getStartXY(),e.getEndXY());return n<0?1:n>0?0:2}const i=e.getClosestCoordinate(t,!1),a=e.getTangent(i),u=e.getCoord2D(i),c=s.P.orientationRobust(t,u,u.add(a));return c<0?1:c>0?0:2}(e,t,n,a);if(u===r.G.enumPolygon)return function(e,t,n,s){(n>=0||s>=0)&&(0,r.t)("");const a=new o.J;e.queryEnvelope(a);const u=(0,i.g)(e,t,0);return 0===u?0:1===u?1:2}(e,t,n,a);if(u===r.G.enumPolyline)return function(e,t,n,o){(n<0&&o>=0||n>=0&&o<0)&&(0,r.t)("");const i=e.querySegmentIterator();if(n<0){let e=Number.MAX_VALUE,r=0;for(;i.nextPath();)for(;i.hasNextSegment();){const a=i.nextSegment(),u=a.getClosestCoordinate(t,!1),c=a.getCoord2D(u),l=s.P.sqrDistance(c,t);l<e?(r=1,n=i.getStartPointIndex(),o=i.getPathIndex(),e=l):l===e&&r++}if(0===r)return 3;if(1===r)return i.resetToVertex(n,o),l(i.nextSegment(),t)}const a=function(e,t,n,r){const o={i1:-1,i2:-1,bRight1:!1,bRight2:!1};if(o.i1=function(e,t,n){for(e.resetToVertex(t,n);e.hasNextSegment();)if(!e.nextSegment().isDegenerate(0))return e.getStartPointIndex();for(e.resetToVertex(t,n);e.hasPreviousSegment();)if(!e.previousSegment().isDegenerate(0))return e.getStartPointIndex();return-1}(t,n,r),-1!==o.i1){t.resetToVertex(o.i1,-1);const n=t.nextSegment(),r=n.getClosestCoordinate(e,!1),i=n.getCoord2D(r),a=s.P.sqrDistance(i,e);{const t=i.clone();t.subThis(n.getStartXY());const r=e.clone();r.subThis(n.getStartXY()),o.bRight1=t.crossProduct(r)<0}if(o.i2=function(e,t){for(e.resetToVertex(t,-1),e.nextSegment();e.hasNextSegment();)if(!e.nextSegment().isDegenerate(0))return e.getStartPointIndex();return-1}(t,o.i1),-1!==o.i2){t.resetToVertex(o.i2,-1);const n=t.nextSegment(),r=n.getClosestCoordinate(e,!1),i=n.getCoord2D(r);if(s.P.sqrDistance(i,e)>a)o.i2=-1;else{const t=i.clone();t.subThis(n.getStartXY());const r=e.clone();r.subThis(n.getStartXY()),o.bRight2=t.crossProduct(r)<0}}if(-1===o.i2&&(o.i2=function(e,t){for(e.resetToVertex(t,-1);e.hasPreviousSegment();)if(!e.previousSegment().isDegenerate(0))return e.getStartPointIndex();return-1}(t,o.i1),-1!==o.i2)){t.resetToVertex(o.i2,-1);const n=t.nextSegment(),r=n.getClosestCoordinate(e,!1),i=n.getCoord2D(r);if(s.P.sqrDistance(i,e)>a)o.i2=-1;else{const t=i.clone();t.subThis(n.getStartXY());const r=e.clone();r.subThis(n.getStartXY()),o.bRight2=t.crossProduct(r)<0;const s=o.i1;o.i1=o.i2,o.i2=s;const a=o.bRight1;o.bRight1=o.bRight2,o.bRight2=a}}}return o}(t,i,n,o);if(-1!==a.i1&&-1===a.i2)return a.bRight1?1:0;if(-1!==a.i1&&-1!==a.i2){if(a.bRight1===a.bRight2)return a.bRight1?1:0;{i.resetToVertex(a.i1,-1);const e=i.nextSegment().getTangent(1);i.resetToVertex(a.i2,-1);const t=i.nextSegment().getTangent(0);return e.crossProduct(t)>=0?1:0}}return i.resetToVertex(n,o),l(i.nextSegment(),t)}(e,t,n,a);if(u===r.G.enumEnvelope){const n=new o.J;return e.queryEnvelope(n),n.contains(t)?n.containsExclusive(t)?1:2:0}return 3}var g=n(91523);class m{getOperatorType(){return 10500}accelerateGeometry(e,t,n){return!1}canAccelerateGeometry(e){return!1}supportsCurves(){return!0}getNearestCoordinate(e,t,n,o){if(t.isNAN()&&(0,r.t)("NAN xy coordinates are not allowed"),e.isEmpty())return a();switch(e.getGeometryType()){case r.G.enumPoint:return this.pointGetNearestVertex(e,t);case r.G.enumMultiPoint:return this.multiVertexGetNearestVertex(e,t);case r.G.enumPolyline:case r.G.enumPolygon:return this.multiPathGetNearestCoordinate(e,t,n,o);default:(0,r.b)("")}}getNearestVertex(e,t){if(t.isNAN()&&(0,r.t)("NAN xy coordinates are not allowed"),e.isEmpty())return a();switch(e.getGeometryType()){case r.G.enumPoint:return this.pointGetNearestVertex(e,t);case r.G.enumMultiPoint:case r.G.enumPolyline:case r.G.enumPolygon:return this.multiVertexGetNearestVertex(e,t);default:(0,r.b)("")}}getNearestVertices(e,t,n,o){if(0===o&&(0,r.t)(""),t.isNAN()&&(0,r.t)("NAN xy coordinates are not allowed"),e.isEmpty())return[];switch(e.getGeometryType()){case r.G.enumPoint:return this.pointGetNearestVertices(e,t,n,o);case r.G.enumMultiPoint:case r.G.enumPolyline:case r.G.enumPolygon:return this.multiVertexGetNearestVertices(e,t,n,o);default:(0,r.b)("")}}multiPathGetNearestCoordinate(e,t,n,a){if(e.getGeometryType()===r.G.enumPolygon&&n){const n=new o.J;e.queryEnvelope(n);const r=(0,g.a)(null,n,!1);let s;if(s=(0,i.g)(e,t,a?0:r),0!==s){const e=u(t,-1,0);return a&&(e.m_bRightSide=!0),e}}const c=e.querySegmentIterator(),m=new s.P;let h=-1,f=-1,P=Number.MAX_VALUE,d=0;for(;c.nextPath();)for(;c.hasNextSegment();){const e=c.nextSegment(),n=e.getClosestCoordinate(t,!1),r=e.getCoord2D(n),o=s.P.sqrDistance(r,t);o<P?(d=1,m.assign(r),h=c.getStartPointIndex(),f=c.getPathIndex(),P=o):o===P&&d++}-1===h&&(0,r.t)("");const y=u(m,h,Math.sqrt(P));if(a)if(e.getGeometryType()!==r.G.enumPolygon){let n=!1;if(d>1){const r=l(e,t,h,f);n=0!==r&&3!==r}else{c.resetToVertex(h,f);n=0!==l(c.nextSegment(),t)}y.m_bRightSide=n}else n||0!==(0,i.g)(e,t,0)&&(y.m_bRightSide=!0);return y}pointGetNearestVertex(e,t){const n=e.getXY();return u(n,0,s.P.distance(n,t))}multiVertexGetNearestVertex(e,t){const n=e.getAttributeStreamRef(0),r=e.getPointCount();let o=-1;const i=new s.P;let a=Number.MAX_VALUE;const c=new s.P;for(let u=0;u<r;u++){n.queryPoint2D(2*u,c);const e=s.P.sqrDistance(c,t);e<a&&(i.assign(c),o=u,a=e)}return u(i,o,Math.sqrt(a))}pointGetNearestVertices(e,t,n,r){const o=[];if(0!==r){const r=n*n,i=e.getXY(),a=s.P.sqrDistance(i,t);a<=r&&o.push(u(i,0,Math.sqrt(a)))}return o}multiVertexGetNearestVertices(e,t,n,r){const o=[];if(0!==r){const i=e.getAttributeStreamRef(0),a=e.getPointCount();o.length=r+1;const c=n*n;for(let e=0;e<a;e++){const n=i.read(2*e),r=i.read(2*e+1),a=t.x-n,l=t.y-r,g=a*a+l*l;g<=c&&o.push(u(s.P.construct(n,r),e,Math.sqrt(g)))}o.sort(((e,t)=>e.m_distance-t.m_distance))}return o.slice(0,r)}}}}]);
//# sourceMappingURL=135.65e4f6a7.chunk.js.map