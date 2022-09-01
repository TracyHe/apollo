"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[970],{14970:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(38495);function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.map=null,this.controls=[]}var t,n;return t=e,n=[{key:"isInitialized",value:function(){return null!==this.map}},{key:"loadMap",value:function(e,t){var n={center:e,zoom:20,mapTypeId:google.maps.MapTypeId.ROADMAP,fullscreenControl:!1};this.map=new google.maps.Map(document.getElementById(t),n)}},{key:"setCenter",value:function(e){this.map.setCenter(e)}},{key:"setZoom",value:function(e){this.map.setZoom(e)}},{key:"addEventHandler",value:function(e,t){google.maps.event.addListener(this.map,e,(function(e){var n=e.latLng;t(n)}))}},{key:"createPoint",value:function(e){var t=e.lat,n=e.lng;return new google.maps.LatLng(t,n)}},{key:"createMarker",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=new google.maps.Marker({position:e,label:t,draggable:n,map:this.map});return o}},{key:"createPolyline",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=new google.maps.Polyline({path:e,geodesic:!0,strokeColor:t,strokeOpacity:n,strokeWeight:o,map:this.map});return r}},{key:"createControl",value:function(e){var t=e.text,n=e.tip,o=e.color,r=(e.offsetX,e.offsetY,e.onClickHandler),l=document.createElement("div"),a=document.createElement("div");a.style.backgroundColor=o,a.style.border="2px solid #fff",a.style.borderRadius="3px",a.style.boxShadow="0 2px 6px rgba(0,0,0,.3)",a.style.cursor="pointer",a.style.marginBottom="22px",a.style.textAlign="center",a.title=n,l.appendChild(a);var i=document.createElement("div");i.style.color="rgb(25,25,25)",i.style.fontFamily="Roboto,Arial,sans-serif",i.style.fontSize="16px",i.style.lineHeight="38px",i.style.paddingLeft="5px",i.style.paddingRight="5px",i.innerHTML=t,a.appendChild(i),a.addEventListener("click",(function(){r(i)})),this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(l),this.controls.push(l)}},{key:"disableControls",value:function(){this.controls.forEach((function(e){e.style.display="none"}))}},{key:"enableControls",value:function(){this.controls.forEach((function(e){e.style.display="block"}))}},{key:"getMarkerPosition",value:function(e){var t=e.getPosition();return{lat:t.lat(),lng:t.lng()}}},{key:"updatePolyline",value:function(e,t){e.setPath(t)}},{key:"removePolyline",value:function(e){e.setMap(null)}},{key:"applyCoordinateOffset",value:function(e){var t,n,l=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,l=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(l.push(o.value),!t||l.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw r}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=l[0],i=l[1];return(0,o.WGS84ToGCJ02)(a,i)}}],n&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=a}}]);