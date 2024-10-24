"use strict";(self["webpackChunkilpi_administracao_frontend_vue3"]=self["webpackChunkilpi_administracao_frontend_vue3"]||[]).push([[68],{6068:function(e,t,i){i.r(t),i.d(t,{DragAndDrop:function(){return g}});var l=Object.defineProperty,a=(e,t,i)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,n=(e,t,i)=>a(e,"symbol"!==typeof t?t+"":t,i)
/**
  * vue-cal v4.10.0
  * (c) 2024 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */;const r=800;let u=null,s=null,c={id:null,date:null},o=!1,d=!0,v={el:null,cell:null,timeout:null};const h={_eid:null,fromVueCal:null,toVueCal:null},g=class{constructor(e){n(this,"_vuecal"),this._vuecal=e}_getEventStart(e){const{timeStep:t,timeCellHeight:i,timeFrom:l,utils:a}=this._vuecal;let{y:n}=a.cell.getPosition(e);return n-=1*e.dataTransfer.getData("cursor-grab-at"),Math.round(n*t/parseInt(i)+l)}_updateEventStartEnd(e,t,i,l){const a=1*i.duration||t.endTimeMinutes-t.startTimeMinutes;let n=Math.max(this._getEventStart(e),0);if(this._vuecal.snapToTime){const e=n+this._vuecal.snapToTime/2;n=e-e%this._vuecal.snapToTime}t.startTimeMinutes=n,t.start=new Date(new Date(l).setMinutes(n)),t.endTimeMinutes=Math.min(n+a,1440),t.end=new Date(new Date(l).setMinutes(t.endTimeMinutes))}eventDragStart(e,t){if(3===e.target.nodeType)return e.preventDefault();e.dataTransfer.dropEffect="move",e.dataTransfer.setData("event",JSON.stringify(t)),e.dataTransfer.setData("cursor-grab-at",e.offsetY);const{clickHoldAnEvent:i}=this._vuecal.domEvents;setTimeout((()=>{i._eid=null,clearTimeout(i.timeoutId),t.deleting=!1}),0),this._vuecal.domEvents.dragAnEvent._eid=t._eid,h._eid=t._eid,h.fromVueCal=this._vuecal._.uid,t.dragging=!0,setTimeout((()=>t.draggingStatic=!0),0),o=!1,c={id:this._vuecal.view.id,date:this._vuecal.view.startDate},d=!0}eventDragEnd(e){this._vuecal.domEvents.dragAnEvent._eid=null,h._eid=null,e.dragging=!1,e.draggingStatic=!1;const{fromVueCal:t,toVueCal:i}=h;i&&t!==i&&this._vuecal.utils.event.deleteAnEvent(e),h.fromVueCal=null,h.toVueCal=null,o&&d&&c.id&&this._vuecal.switchView(c.id,c.date,!0)}cellDragEnter(e,t,i){const l=e.currentTarget;if(!e.currentTarget.contains(e.relatedTarget)){if(l===v.el||!l.className.includes("vuecal__cell-content"))return!1;v.el&&(v.cell.highlighted=!1),v={el:l,cell:t,timeout:clearTimeout(v.timeout)},t.highlighted=!0,["years","year","month"].includes(this._vuecal.view.id)&&(v.timeout=setTimeout((()=>this._vuecal.switchToNarrowerView(i)),2e3))}}cellDragOver(e,t,i,l){e.preventDefault(),t.highlighted=!0,(l||0===l)&&(t.highlightedSplit=l)}cellDragLeave(e,t){e.preventDefault(),e.currentTarget.contains(e.relatedTarget)||(t.highlightedSplit=!1,v.cell===t&&(clearTimeout(v.timeout),v={el:null,cell:null,timeout:null},t.highlighted=!1))}cellDragDrop(e,t,i,l){e.preventDefault(),clearTimeout(v.timeout),v={el:null,cell:null,timeout:null};const a=JSON.parse(e.dataTransfer.getData("event")||"{}");let n,r;if(h.fromVueCal!==this._vuecal._.uid){const{_eid:e,start:t,end:r,duration:u,...s}=a;n=this._vuecal.utils.event.createAnEvent(i,u,{...s,split:l})}else if(n=this._vuecal.view.events.find((e=>e._eid===h._eid)),n||(n=this._vuecal.mutableEvents.find((e=>e._eid===h._eid)),r=!!n),!n){const e=a.endTimeMinutes-a.startTimeMinutes,{start:t,end:r,...u}=a;n=this._vuecal.utils.event.createAnEvent(i,e,{...u,split:l})}const{start:u,split:s}=n;this._updateEventStartEnd(e,n,a,i),r&&this._vuecal.addEventsToView([n]),n.dragging=!1,(l||0===l)&&(n.split=l),t.highlighted=!1,t.highlightedSplit=null,d=!1,h.toVueCal=this._vuecal._.uid;const c={event:this._vuecal.cleanupEvent(n),oldDate:u,newDate:n.start,...(l||0===l)&&{oldSplit:s,newSplit:l},originalEvent:this._vuecal.cleanupEvent(a),external:!h.fromVueCal};this._vuecal.$emit("event-drop",c),this._vuecal.$emit("event-change",{event:c.event,originalEvent:c.originalEvent}),setTimeout((()=>{h._eid&&this.eventDragEnd(n)}),300)}viewSelectorDragEnter(e,t,i){e.currentTarget.contains(e.relatedTarget)||(i.highlightedControl=t,clearTimeout(u),u=setTimeout((()=>{if(["previous","next"].includes(t))this._vuecal[t](),clearInterval(s),s=setInterval(this._vuecal[t],r);else if("today"===t){let e;clearInterval(s),this._vuecal.view.id.includes("year")&&(e=this._vuecal.enabledViews.filter((e=>!e.includes("year")))[0]),this._vuecal.switchView(e||this._vuecal.view.id,new Date((new Date).setHours(0,0,0,0)),!0)}else this._vuecal.switchView(t,null,!0);o=!0}),r))}viewSelectorDragLeave(e,t,i){e.currentTarget.contains(e.relatedTarget)||i.highlightedControl===t&&(i.highlightedControl=null,u&&(u=clearTimeout(u)),s&&(s=clearInterval(s)))}}}}]);
//# sourceMappingURL=68.2119744d.js.map