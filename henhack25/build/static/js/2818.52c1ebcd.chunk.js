"use strict";(self.webpackChunkhenhack25=self.webpackChunkhenhack25||[]).push([[2818],{82818:(e,t,i)=>{i.d(t,{PieChartAm5:()=>j,PieSeriesAm5:()=>O});var s=i(35143),a=i(19150),r=i(73318),l=i(87246),n=i(95429);class o extends r.w{constructor(){super(...arguments),Object.defineProperty(this,"_display",{enumerable:!0,configurable:!0,writable:!0,value:this._root._renderer.makeRadialText("",this.textStyle)})}_afterNew(){super._afterNew()}_beforeChanged(){super._beforeChanged(),this._display.clear(),this.isDirty("textType")&&(this._display.textType=this.get("textType"),this.markDirtyBounds()),this.isDirty("radius")&&(this._display.radius=this.get("radius"),this.markDirtyBounds()),this.isDirty("startAngle")&&(this._display.startAngle=(this.get("startAngle",0)+90)*r.x,this.markDirtyBounds()),this.isDirty("inside")&&(this._display.inside=this.get("inside"),this.markDirtyBounds()),this.isDirty("orientation")&&(this._display.orientation=this.get("orientation"),this.markDirtyBounds()),this.isDirty("kerning")&&(this._display.kerning=this.get("kerning"),this.markDirtyBounds())}}Object.defineProperty(o,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialText"}),Object.defineProperty(o,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:r.w.classNames.concat([o.className])});class h extends r.L{constructor(){super(...arguments),Object.defineProperty(this,"_flipped",{enumerable:!0,configurable:!0,writable:!0,value:!1})}_afterNew(){this._textKeys.push("textType","kerning"),super._afterNew()}_makeText(){this._text=this.children.push(o.new(this._root,{}))}baseRadius(){const e=this.getPrivate("radius",0),t=this.getPrivate("innerRadius",0),i=this.get("baseRadius",0);return t+(0,r.l)(i,e-t)}radius(){const e=this.get("inside",!1);return this.baseRadius()+this.get("radius",0)*(e?-1:1)}_updateChildren(){if(super._updateChildren(),this.isDirty("baseRadius")||this.isPrivateDirty("radius")||this.isPrivateDirty("innerRadius")||this.isDirty("labelAngle")||this.isDirty("radius")||this.isDirty("inside")||this.isDirty("orientation")||this.isDirty("textType")){const e=this.get("textType","adjusted"),t=this.get("inside",!1),i=this.get("orientation");let s=(0,r.y)(this.get("labelAngle",0));this._text.set("startAngle",this.get("labelAngle",0)),this._text.set("inside",t);const a=(0,r.A)(s),l=(0,r.z)(s);let n=this.baseRadius(),o=this.radius();if(this._display.angle=0,"circular"==e)this.setAll({paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}),this.setRaw("x",void 0),this.setRaw("y",void 0),this._text.set("orientation",i),this._text.set("radius",o);else{0==n&&(s=0,o=0);let t=o*l,h=o*a;"radial"==e?(this.setRaw("x",t),this.setRaw("y",h),s<90||s>270||"auto"!=i?(this._display.angle=s,this._flipped=!1):(this._display.angle=s+180,this._flipped=!0),this._dirty.rotation=!1):"adjusted"==e?(this.setRaw("centerX",r.p),this.setRaw("centerY",r.p),this.setRaw("x",t),this.setRaw("y",h)):"regular"==e&&(this.setRaw("x",t),this.setRaw("y",h))}this.markDirtyPosition(),this.markDirtyBounds()}}_updatePosition(){const e=this.get("textType","regular"),t=this.get("inside",!1);let i=0,s=0,a=this.get("labelAngle",0),l=this.localBounds(),n=l.right-l.left,o=l.bottom-l.top;if("radial"==e){if(this._flipped){let e=this.get("centerX");e instanceof r.P&&(n*=1-2*e.value),i=n*(0,r.z)(a),s=n*(0,r.A)(a)}}else t||"adjusted"!=e||(i=n/2*(0,r.z)(a),s=o/2*(0,r.A)(a));this.setRaw("dx",i),this.setRaw("dy",s),super._updatePosition()}get text(){return this._text}}Object.defineProperty(h,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialLabel"}),Object.defineProperty(h,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:r.L.classNames.concat([h.className])});const c=Math.abs,u=Math.atan2,d=Math.cos,p=Math.max,g=Math.min,y=Math.sin,b=Math.sqrt,f=1e-12,m=Math.PI,_=m/2,x=2*m;function v(e){return e>=1?_:e<=-1?-_:Math.asin(e)}function w(e){return e.innerRadius}function k(e){return e.outerRadius}function D(e){return e.startAngle}function A(e){return e.endAngle}function R(e){return e&&e.padAngle}function P(e,t,i,s,a,r,l){var n=e-i,o=t-s,h=(l?r:-r)/b(n*n+o*o),c=h*o,u=-h*n,d=e+c,g=t+u,y=i+c,f=s+u,m=(d+y)/2,_=(g+f)/2,x=y-d,v=f-g,w=x*x+v*v,k=a-r,D=d*f-y*g,A=(v<0?-1:1)*b(p(0,k*k*w-D*D)),R=(D*v-x*A)/w,P=(-D*x-v*A)/w,T=(D*v+x*A)/w,L=(-D*x+v*A)/w,N=R-m,C=P-_,S=T-m,j=L-_;return N*N+C*C>S*S+j*j&&(R=T,P=L),{cx:R,cy:P,x01:-c,y01:-u,x11:R*(a/k-1),y11:P*(a/k-1)}}function T(){var e=w,t=k,i=(0,a.c)(0),s=null,r=D,l=A,n=R,o=null,h=(0,a.w)(p);function p(){var a,p,w=+e.apply(this,arguments),k=+t.apply(this,arguments),D=r.apply(this,arguments)-_,A=l.apply(this,arguments)-_,R=c(A-D),T=A>D;if(o||(o=a=h()),k<w&&(p=k,k=w,w=p),k>f)if(R>x-f)o.moveTo(k*d(D),k*y(D)),o.arc(0,0,k,D,A,!T),w>f&&(o.moveTo(w*d(A),w*y(A)),o.arc(0,0,w,A,D,T));else{var L,N,C=D,S=A,j=D,O=A,I=R,M=R,B=n.apply(this,arguments)/2,z=B>f&&(s?+s.apply(this,arguments):b(w*w+k*k)),F=g(c(k-w)/2,+i.apply(this,arguments)),H=F,X=F;if(z>f){var Y=v(z/w*y(B)),V=v(z/k*y(B));(I-=2*Y)>f?(j+=Y*=T?1:-1,O-=Y):(I=0,j=O=(D+A)/2),(M-=2*V)>f?(C+=V*=T?1:-1,S-=V):(M=0,C=S=(D+A)/2)}var W=k*d(C),U=k*y(C),K=w*d(O),q=w*y(O);if(F>f){var E,G=k*d(S),J=k*y(S),Q=w*d(j),Z=w*y(j);if(R<m)if(E=function(e,t,i,s,a,r,l,n){var o=i-e,h=s-t,c=l-a,u=n-r,d=u*o-c*h;if(!(d*d<f))return[e+(d=(c*(t-r)-u*(e-a))/d)*o,t+d*h]}(W,U,Q,Z,G,J,K,q)){var $=W-E[0],ee=U-E[1],te=G-E[0],ie=J-E[1],se=1/y(function(e){return e>1?0:e<-1?m:Math.acos(e)}(($*te+ee*ie)/(b($*$+ee*ee)*b(te*te+ie*ie)))/2),ae=b(E[0]*E[0]+E[1]*E[1]);H=g(F,(w-ae)/(se-1)),X=g(F,(k-ae)/(se+1))}else H=X=0}M>f?X>f?(L=P(Q,Z,W,U,k,X,T),N=P(G,J,K,q,k,X,T),o.moveTo(L.cx+L.x01,L.cy+L.y01),X<F?o.arc(L.cx,L.cy,X,u(L.y01,L.x01),u(N.y01,N.x01),!T):(o.arc(L.cx,L.cy,X,u(L.y01,L.x01),u(L.y11,L.x11),!T),o.arc(0,0,k,u(L.cy+L.y11,L.cx+L.x11),u(N.cy+N.y11,N.cx+N.x11),!T),o.arc(N.cx,N.cy,X,u(N.y11,N.x11),u(N.y01,N.x01),!T))):(o.moveTo(W,U),o.arc(0,0,k,C,S,!T)):o.moveTo(W,U),w>f&&I>f?H>f?(L=P(K,q,G,J,w,-H,T),N=P(W,U,Q,Z,w,-H,T),o.lineTo(L.cx+L.x01,L.cy+L.y01),H<F?o.arc(L.cx,L.cy,H,u(L.y01,L.x01),u(N.y01,N.x01),!T):(o.arc(L.cx,L.cy,H,u(L.y01,L.x01),u(L.y11,L.x11),!T),o.arc(0,0,w,u(L.cy+L.y11,L.cx+L.x11),u(N.cy+N.y11,N.cx+N.x11),T),o.arc(N.cx,N.cy,H,u(N.y11,N.x11),u(N.y01,N.x01),!T))):o.arc(0,0,w,O,j,T):o.lineTo(K,q)}else o.moveTo(0,0);if(o.closePath(),a)return o=null,a+""||null}return p.centroid=function(){var i=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,s=(+r.apply(this,arguments)+ +l.apply(this,arguments))/2-m/2;return[d(s)*i,y(s)*i]},p.innerRadius=function(t){return arguments.length?(e="function"==typeof t?t:(0,a.c)(+t),p):e},p.outerRadius=function(e){return arguments.length?(t="function"==typeof e?e:(0,a.c)(+e),p):t},p.cornerRadius=function(e){return arguments.length?(i="function"==typeof e?e:(0,a.c)(+e),p):i},p.padRadius=function(e){return arguments.length?(s=null==e?null:"function"==typeof e?e:(0,a.c)(+e),p):s},p.startAngle=function(e){return arguments.length?(r="function"==typeof e?e:(0,a.c)(+e),p):r},p.endAngle=function(e){return arguments.length?(l="function"==typeof e?e:(0,a.c)(+e),p):l},p.padAngle=function(e){return arguments.length?(n="function"==typeof e?e:(0,a.c)(+e),p):n},p.context=function(e){return arguments.length?(o=e??null,p):o},p}class L extends r.e{constructor(){super(...arguments),Object.defineProperty(this,"ix",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"iy",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_generator",{enumerable:!0,configurable:!0,writable:!0,value:T()})}_getTooltipPoint(){let e=this.get("tooltipX"),t=this.get("tooltipY"),i=0,s=0;(0,r.k)(e)&&(i=e),(0,r.k)(t)&&(s=t);let a=this.get("radius",0),l=this.get("innerRadius",0);return a+=this.get("dRadius",0),l+=this.get("dInnerRadius",0),l<0&&(l=a+l),e instanceof r.P&&(i=this.ix*(l+(a-l)*e.value)),t instanceof r.P&&(s=this.iy*(l+(a-l)*t.value)),this.get("arc")>=360&&0==l&&(i=0,s=0),{x:i,y:s}}_beforeChanged(){super._beforeChanged(),(this.isDirty("radius")||this.isDirty("arc")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("dRadius")||this.isDirty("dInnerRadius")||this.isDirty("cornerRadius")||this.isDirty("shiftRadius"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){let e=this.get("startAngle",0),t=this.get("arc",0);const i=this._generator;t<0&&(e+=t,t*=-1),t>.1&&i.cornerRadius(this.get("cornerRadius",0)),i.context(this._display);let s=this.get("radius",0),a=this.get("innerRadius",0);s+=this.get("dRadius",0),a+=this.get("dInnerRadius",0),a<0&&(a=s+a),i({innerRadius:a,outerRadius:s,startAngle:(e+90)*r.x,endAngle:(e+t+90)*r.x});let l=e+t/2;this.ix=(0,r.z)(l),this.iy=(0,r.A)(l);const n=this.get("shiftRadius",0);this.setRaw("dx",this.ix*n),this.setRaw("dy",this.iy*n),this.markDirtyPosition()}}}Object.defineProperty(L,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Slice"}),Object.defineProperty(L,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:r.e.classNames.concat([L.className])});class N extends r.T{setupDefaultRules(){super.setupDefaultRules();const e=this._root.interfaceColors,t=this.rule.bind(this);t("PercentSeries").setAll({legendLabelText:"{category}",legendValueText:"{valuePercentTotal.formatNumber('0.00p')}",colors:l.C.new(this._root,{}),width:r.a,height:r.a}),t("PieChart").setAll({radius:(0,r.j)(80),startAngle:-90,endAngle:270}),t("PieSeries").setAll({alignLabels:!0,startAngle:-90,endAngle:270}),t("PieSeries").states.create("hidden",{endAngle:-90,opacity:0}),t("Slice",["pie"]).setAll({position:"absolute",isMeasured:!1,x:0,y:0,toggleKey:"active",tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}",strokeWidth:1,strokeOpacity:1,role:"figure",lineJoin:"round"}),t("Slice",["pie"]).states.create("active",{shiftRadius:20,scale:1}),t("Slice",["pie"]).states.create("hoverActive",{scale:1.04}),t("Slice",["pie"]).states.create("hover",{scale:1.04}),t("RadialLabel",["pie"]).setAll({textType:"aligned",radius:10,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",paddingTop:5,paddingBottom:5,populateText:!0}),t("Tick",["pie"]).setAll({location:1}),t("SlicedChart").setAll({paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10}),t("FunnelSeries").setAll({startLocation:0,endLocation:1,orientation:"vertical",alignLabels:!0,sequencedInterpolation:!0}),t("FunnelSlice").setAll({interactive:!0,expandDistance:0}),t("FunnelSlice").states.create("hover",{expandDistance:.15}),t("Label",["funnel"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:r.p}),t("Label",["funnel","horizontal"]).setAll({centerX:0,centerY:r.p,rotation:-90}),t("Label",["funnel","vertical"]).setAll({centerY:r.p,centerX:0}),t("Tick",["funnel"]).setAll({location:1}),t("FunnelSlice",["funnel","link"]).setAll({fillOpacity:.5,strokeOpacity:0,expandDistance:-.1}),t("FunnelSlice",["funnel","link","vertical"]).setAll({height:10}),t("FunnelSlice",["funnel","link","horizontal"]).setAll({width:10}),t("PyramidSeries").setAll({valueIs:"area"}),t("FunnelSlice",["pyramid","link"]).setAll({fillOpacity:.5}),t("FunnelSlice",["pyramid","link","vertical"]).setAll({height:0}),t("FunnelSlice",["pyramid","link","horizontal"]).setAll({width:0}),t("FunnelSlice",["pyramid"]).setAll({interactive:!0,expandDistance:0}),t("FunnelSlice",["pyramid"]).states.create("hover",{expandDistance:.15}),t("Label",["pyramid"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:r.p}),t("Label",["pyramid","horizontal"]).setAll({centerX:0,centerY:r.p,rotation:-90}),t("Label",["pyramid","vertical"]).setAll({centerY:r.p,centerX:0}),t("Tick",["pyramid"]).setAll({location:1}),t("FunnelSlice",["pictorial"]).setAll({interactive:!0,tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}"}),t("Label",["pictorial"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:r.p}),t("Label",["pictorial","horizontal"]).setAll({centerX:0,centerY:r.p,rotation:-90}),t("Label",["pictorial","vertical"]).setAll({centerY:r.p,centerX:0}),t("FunnelSlice",["pictorial","link"]).setAll({fillOpacity:.5,width:0,height:0}),t("Tick",["pictorial"]).setAll({location:.5});{const i=t("Graphics",["pictorial","background"]);i.setAll({fillOpacity:.2}),(0,n.s)(i,"fill",e,"alternativeBackground")}}}class C extends a.S{_afterNew(){this._defaultThemes.push(N.new(this._root)),super._afterNew(),this.chartContainer.children.push(this.seriesContainer),this.seriesContainer.children.push(this.bulletsContainer)}_processSeries(e){super._processSeries(e),this.seriesContainer.children.moveValue(this.bulletsContainer,this.seriesContainer.children.length-1)}}Object.defineProperty(C,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentChart"}),Object.defineProperty(C,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:a.S.classNames.concat([C.className])});class S extends a.a{constructor(){super(...arguments),Object.defineProperty(this,"slicesContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(r.g.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"labelsContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(r.g.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"ticksContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(r.g.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"_lLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_rLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_hLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slices",{enumerable:!0,configurable:!0,writable:!0,value:this.addDisposer(this._makeSlices())}),Object.defineProperty(this,"labels",{enumerable:!0,configurable:!0,writable:!0,value:this.addDisposer(this._makeLabels())}),Object.defineProperty(this,"ticks",{enumerable:!0,configurable:!0,writable:!0,value:this.addDisposer(this._makeTicks())})}makeSlice(e){const t=this.slicesContainer.children.push(this.slices.make());return t.on("fill",(()=>{this.updateLegendMarker(e)})),t.on("fillPattern",(()=>{this.updateLegendMarker(e)})),t.on("stroke",(()=>{this.updateLegendMarker(e)})),t._setDataItem(e),e.set("slice",t),this.slices.push(t),t}makeLabel(e){const t=this.labelsContainer.children.push(this.labels.make());return t._setDataItem(e),e.set("label",t),this.labels.push(t),t}_shouldMakeBullet(e){return null!=e.get("value")}makeTick(e){const t=this.ticksContainer.children.push(this.ticks.make());return t._setDataItem(e),e.set("tick",t),this.ticks.push(t),t}_afterNew(){this.fields.push("category","fill"),super._afterNew()}_onDataClear(){const e=this.get("colors");e&&e.reset();const t=this.get("patterns");t&&t.reset()}_prepareChildren(){if(super._prepareChildren(),this._lLabels=[],this._rLabels=[],this._hLabels=[],this._valuesDirty){let e=0,t=0,i=0,s=1/0,a=0;(0,r.i)(this._dataItems,(i=>{let s=i.get("valueWorking",0);e+=s,t+=Math.abs(s)})),(0,r.i)(this._dataItems,(e=>{let r=e.get("valueWorking",0);r>i&&(i=r),r<s&&(s=r),a++;let l=r/t;0==t&&(l=0),e.setRaw("valuePercentTotal",100*l)})),this.setPrivateRaw("valueLow",s),this.setPrivateRaw("valueHigh",i),this.setPrivateRaw("valueSum",e),this.setPrivateRaw("valueAverage",e/a),this.setPrivateRaw("valueAbsoluteSum",t)}}show(e){const t=Object.create(null,{show:{get:()=>super.show}});return(0,s.d)(this,void 0,void 0,(function*(){let i=[];i.push(t.show.call(this,e)),i.push(this._sequencedShowHide(!0,e)),yield Promise.all(i)}))}hide(e){const t=Object.create(null,{hide:{get:()=>super.hide}});return(0,s.d)(this,void 0,void 0,(function*(){let i=[];i.push(t.hide.call(this,e)),i.push(this._sequencedShowHide(!1,e)),yield Promise.all(i)}))}_updateChildren(){super._updateChildren(),this._valuesDirty&&(0,r.i)(this._dataItems,(e=>{e.get("label").text.markDirtyText()})),(this.isDirty("legendLabelText")||this.isDirty("legendValueText"))&&(0,r.i)(this._dataItems,(e=>{this.updateLegendValue(e)})),this._arrange()}_arrange(){this._arrangeDown(this._lLabels),this._arrangeUp(this._lLabels),this._arrangeDown(this._rLabels),this._arrangeUp(this._rLabels),this._arrangeLeft(this._hLabels),this._arrangeRight(this._hLabels),(0,r.i)(this.dataItems,(e=>{this._updateTick(e)}))}_afterChanged(){super._afterChanged(),this._arrange()}processDataItem(e){if(super.processDataItem(e),null==e.get("fill")){let t=this.get("colors");t&&e.setRaw("fill",t.next())}if(null==e.get("fillPattern")){let t=this.get("patterns");t&&e.setRaw("fillPattern",t.next())}}showDataItem(e,t){const i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return(0,s.d)(this,void 0,void 0,(function*(){const s=[i.showDataItem.call(this,e,t)];(0,r.k)(t)||(t=this.get("stateAnimationDuration",0));const a=this.get("stateAnimationEasing");let l=e.get("value");const n=e.animate({key:"valueWorking",to:l,duration:t,easing:a});n&&s.push(n.waitForStop());const o=e.get("tick");o&&s.push(o.show(t));const h=e.get("label");h&&s.push(h.show(t));const c=e.get("slice");c&&s.push(c.show(t)),c.get("active")&&c.states.applyAnimate("active"),yield Promise.all(s)}))}hideDataItem(e,t){const i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return(0,s.d)(this,void 0,void 0,(function*(){const s=[i.hideDataItem.call(this,e,t)],a=this.states.create("hidden",{});(0,r.k)(t)||(t=a.get("stateAnimationDuration",this.get("stateAnimationDuration",0)));const l=a.get("stateAnimationEasing",this.get("stateAnimationEasing")),n=e.animate({key:"valueWorking",to:0,duration:t,easing:l});n&&s.push(n.waitForStop());const o=e.get("tick");o&&s.push(o.hide(t));const h=e.get("label");h&&s.push(h.hide(t));const c=e.get("slice");c.hideTooltip(),c&&s.push(c.hide(t)),yield Promise.all(s)}))}disposeDataItem(e){super.disposeDataItem(e);let t=e.get("label");t&&(this.labels.removeValue(t),t.dispose());let i=e.get("tick");i&&(this.ticks.removeValue(i),i.dispose());let s=e.get("slice");s&&(this.slices.removeValue(s),s.dispose())}hoverDataItem(e){const t=e.get("slice");t&&!t.isHidden()&&t.hover()}unhoverDataItem(e){const t=e.get("slice");t&&t.unhover()}updateLegendMarker(e){if(e){const t=e.get("slice");if(t){const i=e.get("legendDataItem");if(i){const e=i.get("markerRectangle");(0,r.i)(r.v,(i=>{null!=t.get(i)&&e.set(i,t.get(i))}))}}}}_arrangeDown(e){if(e){let t=this._getNextDown();e.sort(((e,t)=>e.y>t.y?1:e.y<t.y?-1:0)),(0,r.i)(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.top;e.y+s<t&&(e.y=t-s),e.label.set("y",e.y),t=e.y+i.bottom}))}}_getNextUp(){return this.labelsContainer.maxHeight()}_getNextDown(){return 0}_arrangeUp(e){if(e){let t=this._getNextUp();e.sort(((e,t)=>e.y<t.y?1:e.y>t.y?-1:0)),(0,r.i)(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.bottom;e.y+s>t&&(e.y=t-s),e.label.set("y",e.y),t=e.y+i.top}))}}_arrangeRight(e){if(e){let t=0;e.sort(((e,t)=>e.y>t.y?1:e.y<t.y?-1:0)),(0,r.i)(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.left;e.y+s<t&&(e.y=t-s),e.label.set("x",e.y),t=e.y+i.right}))}}_arrangeLeft(e){if(e){let t=this.labelsContainer.maxWidth();e.sort(((e,t)=>e.y<t.y?1:e.y>t.y?-1:0)),(0,r.i)(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.right;e.y+s>t&&(e.y=t-s),e.label.set("x",e.y),t=e.y+i.left}))}}_updateSize(){super._updateSize(),this.markDirty()}_updateTick(e){}_dispose(){super._dispose();const e=this.chart;e&&e.series.removeValue(this)}}Object.defineProperty(S,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentSeries"}),Object.defineProperty(S,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:a.a.classNames.concat([S.className])});class j extends C{constructor(){super(...arguments),Object.defineProperty(this,"_maxRadius",{enumerable:!0,configurable:!0,writable:!0,value:1})}_afterNew(){super._afterNew(),this.seriesContainer.setAll({x:r.p,y:r.p})}_prepareChildren(){super._prepareChildren();const e=this.chartContainer,t=e.innerWidth(),i=e.innerHeight(),s=this.get("startAngle",0),a=this.get("endAngle",0),l=this.get("innerRadius");let n=(0,r.B)(0,0,s,a,1);const o=t/(n.right-n.left),h=i/(n.bottom-n.top);let c={left:0,right:0,top:0,bottom:0};if(l instanceof r.P){let e=l.value,n=Math.min(o,h);e=Math.max(n*e,n-Math.min(i,t))/n,c=(0,r.B)(0,0,s,a,e),this.setPrivateRaw("irModifyer",e/l.value)}n=(0,r.D)([n,c]);const u=this._maxRadius;this._maxRadius=Math.min(o,h);const d=(0,r.l)(this.get("radius",0),this._maxRadius);this.seriesContainer.setAll({dy:-d*(n.bottom+n.top)/2,dx:-d*(n.right+n.left)/2}),(this.isDirty("startAngle")||this.isDirty("endAngle")||u!=this._maxRadius)&&this.series.each((e=>{e._markDirtyKey("startAngle")})),(this.isDirty("innerRadius")||this.isDirty("radius"))&&this.series.each((e=>{e._markDirtyKey("innerRadius")}))}radius(e){let t=(0,r.l)(this.get("radius",0),this._maxRadius),i=(0,r.l)(this.get("innerRadius",0),t);if(e){let s=this.series.indexOf(e),a=this.series.length,l=e.get("radius");return null!=l?i+(0,r.l)(l,t-i):i+(t-i)/a*(s+1)}return t}innerRadius(e){const t=this.radius();let i=(0,r.l)(this.get("innerRadius",0),t);if(i<0&&(i=t+i),e){let s=this.series.indexOf(e),a=this.series.length,l=e.get("innerRadius");return null!=l?i+(0,r.l)(l,t-i):i+(t-i)/a*s}return i}_updateSize(){super._updateSize(),this.markDirtyKey("radius")}}Object.defineProperty(j,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieChart"}),Object.defineProperty(j,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:C.classNames.concat([j.className])});class O extends S{_makeSlices(){return new r.t(r.u.new({}),(()=>L._new(this._root,{themeTags:(0,r.m)(this.slices.template.get("themeTags",[]),["pie","series"])},[this.slices.template])))}_makeLabels(){return new r.t(r.u.new({}),(()=>h._new(this._root,{themeTags:(0,r.m)(this.labels.template.get("themeTags",[]),["pie","series"])},[this.labels.template])))}_makeTicks(){return new r.t(r.u.new({}),(()=>a.T._new(this._root,{themeTags:(0,r.m)(this.ticks.template.get("themeTags",[]),["pie","series"])},[this.ticks.template])))}processDataItem(e){super.processDataItem(e);const t=this.makeSlice(e);t.on("scale",(()=>{this._updateTick(e)})),t.on("shiftRadius",(()=>{this._updateTick(e)})),t.events.on("positionchanged",(()=>{this._updateTick(e)}));const i=this.makeLabel(e);i.events.on("positionchanged",(()=>{this._updateTick(e)})),this.makeTick(e),t.events.on("positionchanged",(()=>{i.markDirty()}))}_getNextUp(){const e=this.chart;return e?e._maxRadius:this.labelsContainer.maxHeight()/2}_getNextDown(){const e=this.chart;return e?-e._maxRadius:-this.labelsContainer.maxHeight()/2}_prepareChildren(){super._prepareChildren();const e=this.chart;if(e){if(this.isDirty("alignLabels")){let e=this.labels.template;if(this.get("alignLabels"))e.set("textType","aligned");else{let t=e.get("textType");null!=t&&"aligned"!=t||e.set("textType","adjusted")}}if(this._valuesDirty||this.isDirty("radius")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("endAngle")||this.isDirty("alignLabels")){this.markDirtyBounds();const t=this.get("startAngle",e.get("startAngle",-90)),i=this.get("endAngle",e.get("endAngle",270))-t;let s=t;const a=e.radius(this);this.setPrivateRaw("radius",a);let l=e.innerRadius(this)*e.getPrivate("irModifyer",1);l<0&&(l=a+l),(0,r.i)(this._dataItems,(e=>{this.updateLegendValue(e);let t=i*e.get("valuePercentTotal")/100;const n=e.get("slice");if(n){n.set("radius",a),n.set("innerRadius",l),n.set("startAngle",s),n.set("arc",t);const i=e.get("fill");n._setDefault("fill",i),n._setDefault("stroke",i);const r=e.get("fillPattern");n._setDefault("fillPattern",r)}let o=(0,r.y)(s+t/2);const h=e.get("label");if(h&&(h.setPrivate("radius",a),h.setPrivate("innerRadius",l),h.set("labelAngle",o),"aligned"==h.get("textType"))){let e=a+h.get("radius",0),t=a*(0,r.A)(o);o>90&&o<=270?(h.isHidden()||h.isHiding()||this._lLabels.push({label:h,y:t}),e*=-1,e-=this.labelsContainer.get("paddingLeft",0),h.set("centerX",r.a),h.setPrivateRaw("left",!0)):(h.isHidden()||h.isHiding()||this._rLabels.push({label:h,y:t}),e+=this.labelsContainer.get("paddingRight",0),h.set("centerX",0),h.setPrivateRaw("left",!1)),h.set("x",e),h.set("y",a*(0,r.A)(o))}s+=t,this._updateTick(e)}))}}}_updateTick(e){const t=e.get("tick"),i=e.get("label"),s=e.get("slice"),a=t.get("location",1);if(t&&i&&s){const e=(s.get("shiftRadius",0)+s.get("radius",0))*s.get("scale",1)*a,l=i.get("labelAngle",0),n=(0,r.z)(l),o=(0,r.A)(l),h=this.labelsContainer,c=h.get("paddingLeft",0),u=h.get("paddingRight",0);let d=0,p=0;d=i.x(),p=i.y();let g=[];if(0!=d||0!=p){if("circular"==i.get("textType")){const e=i.radius()-i.get("paddingBottom",0),t=i.get("labelAngle",0);d=e*(0,r.z)(t),p=e*(0,r.A)(t)}let t=-u;i.getPrivate("left")&&(t=c),g=[{x:s.x()+e*n,y:s.y()+e*o},{x:d+t,y:p},{x:d,y:p}]}t.set("points",g)}}_positionBullet(e){const t=e.get("sprite");if(t){const i=t.dataItem.get("slice");if(i){const s=i.get("innerRadius",0),a=i.get("radius",0),l=i.get("startAngle",0)+i.get("arc",0)*e.get("locationX",.5),n=s+(a-s)*e.get("locationY",.5);t.setAll({x:(0,r.z)(l)*n,y:(0,r.A)(l)*n})}}}}Object.defineProperty(O,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieSeries"}),Object.defineProperty(O,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:S.classNames.concat([O.className])})}}]);
//# sourceMappingURL=2818.52c1ebcd.chunk.js.map