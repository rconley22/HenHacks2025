"use strict";(self.webpackChunkhenhack25=self.webpackChunkhenhack25||[]).push([[6548],{56548:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var r=i(35143),a=i(94643),n=i(46053),s=(i(81806),i(76460),i(47249),i(85842)),o=i(23246);const l=e=>{let t=class extends e{constructor(){super(...arguments),this.layerViews=new a.A}get dynamicGroupLayerView(){return this.layerViews.find((e=>e.layer===this.layer?.dynamicGroupLayer))}get footprintLayerView(){return this.layerViews.find((e=>e.layer===this.layer?.footprintLayer))}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return(0,r._)([(0,n.MZ)()],t.prototype,"layer",void 0),(0,r._)([(0,n.MZ)()],t.prototype,"layerViews",void 0),(0,r._)([(0,n.MZ)({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),(0,r._)([(0,n.MZ)({readOnly:!0})],t.prototype,"footprintLayerView",null),t=(0,r._)([(0,s.$)("esri.views.layers.CatalogLayerView")],t),t};var d=i(91196);let y=class extends(l((0,o.e)(d.A))){constructor(){super(...arguments),this.layerViews=new a.A}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange((()=>this.layerViews),(()=>this._updateStageChildren()),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))}};(0,r._)([(0,n.MZ)()],y.prototype,"layerViews",void 0),y=(0,r._)([(0,s.$)("esri.views.2d.layers.CatalogLayerView2D")],y);const h=y}}]);
//# sourceMappingURL=6548.d0360779.chunk.js.map