(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{131:function(e,n){},132:function(e,n){},175:function(e,n,t){"use strict";t.r(n);var i=t(3),o=t.n(i),a=t(84),r=t.n(a),d=(t(90),t(13)),c=t(29);var s=function(e){return Object(i.useEffect)((function(){var n=document.getElementById("myvideo"),t=document.getElementById("canvas"),i=t.getContext("2d"),o=document.getElementById("updatenote"),a=null;function r(){n.height=window.innerHeight,n.width=window.innerWidth,a.detect(n).then((function(o){if(o.length){var d=o[0].bbox,c=d[2],s=d[3],u=c/2+d[0],m=s/2+d[1],l=(c+s)/4;e.onCoordiantesChange({radius:l,x:u,y:m})}a.renderPredictions(o,t,i,n),requestAnimationFrame(r)}))}return c.a({flipHorizontal:!0,maxNumBoxes:1,iouThreshold:.5,scoreThreshold:.6}).then((function(e){a=e,o.innerText="Loaded Model!"})),o.innerText="Starting video",c.b(n).then((function(e){console.log("video started",e),e?(o.innerText="Video started. Now tracking",r()):o.innerText="Please enable video"})),function(){o.innerText="Stopping video",c.c(n)}}),[]),o.a.createElement("div",null,o.a.createElement("h1",null,"TrackingComponent"),o.a.createElement("div",{id:"updatenote"}," loading model .."),o.a.createElement("video",{autoPlay:"autoplay",id:"myvideo",style:{display:"none",width:"100%",height:"100%"}}),o.a.createElement("canvas",{id:"canvas"}))},u=t(174);var m=function(e){var n=Object(i.useState)(null),t=Object(d.a)(n,2),a=t[0],r=t[1];return Object(i.useEffect)((function(){var e=new u.Scene,n=new u.PerspectiveCamera(40,window.innerWidth/window.innerHeight,.1,1e3),t=new u.WebGLRenderer;t.setSize(window.innerWidth,window.innerHeight),document.getElementById("threejsarea").appendChild(t.domElement);var i=new u.BoxGeometry(5,5,5),o=new u.MeshBasicMaterial({wireframe:!0,transparent:!0,opacity:.5,color:16776960}),a=(new u.Mesh(i,o),new u.SphereGeometry(1.5,32,32)),d=new u.MeshBasicMaterial({wireframe:!0,transparent:!1,opacity:1,color:16777215}),c=(new u.Mesh(a,d),new u.SphereGeometry(.5,32,32)),s=new u.MeshBasicMaterial({wireframe:!0,transparent:!1,opacity:100,color:16777215}),m=new u.Mesh(c,s);e.add(m),m.position.set(5,0,0),r(m),console.log("sourceSphere.position",m.position),n.position.z=20;!function i(){requestAnimationFrame(i),t.render(e,n)}()}),[]),Object(i.useEffect)((function(){a&&a.position.set(e.coordiantes.x,e.coordiantes.y,e.coordiantes.z)}),[e.coordiantes.z,e.coordiantes.x,e.coordiantes.y]),o.a.createElement("div",null,o.a.createElement("h1",null,"ThreeJsComponent"),o.a.createElement("div",{id:"threejsarea"}))},l={radius:{max:368,min:41},x:{max:void 0,min:void 0},z:{max:void 0,min:void 0}},h={z:{max:18,min:-2},x:{max:void 0,min:void 0},y:{max:void 0,min:void 0}};var p=function(){var e=Object(i.useState)(!1),n=Object(d.a)(e,2),t=n[0],a=n[1],r=Object(i.useState)({radius:0,x:0,y:0}),c=Object(d.a)(r,2),u=c[0],p=c[1];return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return a(!t)}},t?"STOP":"START"),t&&o.a.createElement(s,{onCoordiantesChange:function(e){p(e)}}),t&&o.a.createElement(m,{coordiantes:function(){var e=l.radius.max-l.radius.min,n=h.z.max-h.z.min;return{z:u.radius/e*n+h.z.min,x:0,y:0}}()}))};r.a.render(o.a.createElement(p,null),document.getElementById("root"))},85:function(e,n,t){e.exports=t(175)},90:function(e,n,t){},96:function(e,n){},98:function(e,n){}},[[85,1,2]]]);
//# sourceMappingURL=main.1e9adc18.chunk.js.map