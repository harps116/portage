"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e){return document.querySelectorAll(e)}function openNav(){document.getElementById("sideNav").style.width="250px"}function closeNav(){document.getElementById("sideNav").style.width="0"}if(_("#app").length>0)var Post=function e(t,n,a,i){_classCallCheck(this,e),this.title=t,this.link=n,this.price=a,this.img=i},app=new Vue({el:"#app",data:{keyword:"",postList:[new Post("Camp Stove","https://vuejs.org/","20.00","../img/gear/stove.jpg"),new Post("Water Filter","https://facebook.github.io/react/","5.00","../img/gear/filter.jpg"),new Post("Hatchet","https://angularjs.org/","10.00","../img/gear/hatchet.jpg"),new Post("Saw","http://emberjs.com/","10.00","../img/gear/saw.jpg"),new Post("Tent","https://www.meteor.com/","15.00","../img/gear/tent.jpg"),new Post("Compass","http://aurelia.io/","1.00","../img/gear/compass.jpg"),new Post("Sleeping Bag","https://nodejs.org/en/","40.00","../img/gear/sleeping.jpg"),new Post("Flashlight","https://pusher.com/","5.00","../img/gear/flashlight.jpg"),new Post("Kevlar Canoe","http://feathersjs.com/","200.00","../img/gear/canoe.jpg")]},computed:{filteredList:function(){var e=this;return this.postList.filter(function(t){return t.title.toLowerCase().includes(e.keyword)})}}});!function(){var e=document.getElementById("fire");if(e){var t=function(e){e.width=window.innerWidth,e.height=window.innerHeight,e.style.zIndex="-1"};t(e),window.addEventListener("resize",function(n){t(e)});var n=e.getContext("2d"),a=["#E25822","#E29822","#E2B822","#E2222C","#B22222","#FFFFF0"],i=[];!function(){function t(){i.forEach(function(e){n.fillStyle=a[Math.floor(5*Math.random())],n.beginPath(),n.arc(e.x,e.y,4,0,2*Math.PI),n.fill()})}function o(){n.clearRect(0,0,e.width,e.height),t(),i.forEach(function(t){t.y-=t.speed,t.y<-40&&(t.y=e.height+50)}),setTimeout(o,23)}for(var r=0;r<23;r++){var c={x:Math.floor(Math.random()*e.width+50),y:e.height+50,speed:Math.floor(11*Math.random())};i.push(c)}o()}();var o=_(".img"),r=_(".media:nth-child(even)"),c=_(".media:nth-child(odd)");(new TimelineLite).from(c,1,{x:105,autoAlpha:0,ease:Power1.easein}).from(r,.5,{x:-105,autoAlpha:0,ease:Power1.easein},"-=0.4").from(o,.5,{y:-105,autoAlpha:0,ease:Power1.easein},"-=0.25")}}(),document.addEventListener("DOMContentLoaded",function(){if(!isMobile.any()&&"undefined"!=typeof ScrollMagic){var e=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:"onLeave"}}),t=_(".right:first-child"),n=(_(".right:nth-of-type(2)"),_(".right:nth-of-type(3)"),_(".right > .inner"));_(".left:nth-of-type(1)"),_(".left:nth-of-type(2)"),_(".left:nth-of-type(3)"),_(".left > .inner"),_(".trees");_(".flex-container").forEach(function(t){new ScrollMagic.Scene({triggerElement:t}).setPin(t).addTo(e)});var a=new TimelineMax;new TimelineMax,new TimelineMax;a.from(t,3,{yPercent:50,xPercent:100,ease:Power4.easeOut}).from(n,1,{opacity:0,y:-205,scale:.98},"1"),new ScrollMagic.Scene({duration:"100%"}).setTween(a).triggerElement(_(".content")).addTo(e)}},!1);var animatedText=function(){var e=_(".word"),t=[],n=0;if(void 0!==e&&e.length>0){var a=function(){for(var a=t[n],r=n==e.length-1?t[0]:t[n+1],c=0;c<a.length;c++)i(a,c);for(var s=0;s<r.length;s++)r[s].className="letter behind",r[0].parentElement.style.opacity=1,o(r,s);n=n==t.length-1?0:n+1},i=function(e,t){setTimeout(function(){e[t].className="letter out"},80*t)},o=function(e,t){setTimeout(function(){e[t].className="letter in"},340+80*t)},r=function(e){var n=e.innerHTML;e.innerHTML="";for(var a=[],i=0;i<n.length;i++){var o=document.createElement("span");o.className="letter",o.innerHTML=n.charAt(i),e.appendChild(o),a.push(o)}t.push(a)};e[n].style.opacity=1,e.forEach(function(e){r(e)}),a(),setInterval(a,4e3)}}(),isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){for(var e in this)return!!this[e]()}};window.addEventListener("load",function(){}),function(){var e=document.getElementById("paths");if(e){var t=function(e){e.width=window.innerWidth,e.height=window.innerHeight,e.style.zIndex="-1"};t(e),window.addEventListener("resize",function(n){t(e)});var n=e.getContext("2d"),a=(Math.floor(e.width/2),Math.floor(e.height/2),["#b8c9ab","#849e73"," #4e5735","#a88f79","#6f4736","#362421"]),i=[];!function(){function t(){i.forEach(function(e){n.fillStyle=a[Math.floor(5*Math.random())],n.beginPath(),n.arc(e.x,e.y,4,0,2*Math.PI),n.fill()})}function o(){t(),i.forEach(function(t){t.y-=t.speed,t.choice(),t.y<-40&&(t.y=e.height+50)}),setTimeout(o,33)}for(var r=0;r<20;r++){var c={x:Math.floor(Math.random()*e.width+50),y:e.height+50,speed:Math.floor(4*Math.random()),choice:function(){var e=Math.floor(5*Math.random());0===e?this.x+=10:1===e?this.x-=10:3===e?this.y+=10:this.y-=10}};i.push(c)}o()}();var o=_(".img"),r=_(".media:nth-child(even)"),c=_(".media:nth-child(odd)");(new TimelineLite).from(c,1,{x:105,autoAlpha:0,ease:Power1.easein}).from(r,.5,{x:-105,autoAlpha:0,ease:Power1.easein},"-=0.4").from(o,.5,{y:-105,autoAlpha:0,ease:Power1.easein},"-=0.25")}}(),function(){if(document.querySelector(".wolf")){var e,t,n;e=document.querySelector(".wolf"),e.addEventListener("mouseover",function(){if(void 0===a)var a=0;if(0===a){t=e.innerText,n=t.length,function(n,a){var i,o;i=0,o=window.setInterval(function(){e.innerText=t.substring(0,i),i++===a&&window.clearInterval(o)},n)}(50,n)}a+=1})}}(),function(){function e(e){return document.querySelector(e)}if(e(".slider-next")){var t=e(".slider-next"),n=e(".slider-previous"),a=e(".slider-slides"),i=a.children.length,o=0,r=function(){var e=a.clientWidth,t=-o*e;a.setAttribute("style","transform: translate("+t+"px)")};t.addEventListener("click",function(){--o,o<0&&(o=i-1),r()}),n.addEventListener("click",function(){++o,o>=i&&(o=0),r()})}}(),function(){var e=document.getElementById("snow");if(e){var t=function(e){e.width=window.innerWidth,e.height=window.innerHeight,e.style.zIndex="-1"};t(e),window.addEventListener("resize",function(n){t(e)});var n=e.getContext("2d"),a=[];!function(){function t(){a.forEach(function(e){n.fillStyle="#F4F4F4",n.beginPath(),n.arc(e.x,e.y,4,0,2*Math.PI),n.fill()})}function i(){n.clearRect(0,0,e.width,e.height),t(),a.forEach(function(t){t.y+=t.speed,t.y>e.height&&(t.y=0)}),setTimeout(i,23)}for(var o=0;o<80;o++){var r={x:Math.floor(Math.random()*e.width+50),y:0,speed:Math.floor(11*Math.random())};a.push(r)}i()}();var i=_(".img"),o=_(".media:nth-child(even)"),r=_(".media:nth-child(odd)");(new TimelineLite).from(r,1,{x:105,autoAlpha:0,ease:Power1.easein}).from(o,.5,{x:-105,autoAlpha:0,ease:Power1.easein},"-=0.4").from(i,.5,{y:-105,autoAlpha:0,ease:Power1.easein},"-=0.25")}}();var dblPI=2*Math.PI,AMOUNT=500,dist_between_max=45,CON_RADIUS=90,ROTATION=.001,LINE_WIDTH=.6,canvas=document.getElementById("stars");if(canvas){var Star=function(){var e=this;this.x=Math.random()*canvas.width,this.y=Math.random()*canvas.height,this.radius=1.2*Math.random(),this.update=function(){e.y>boundry.bottom&&(e.y=boundry.top),e.y<boundry.top&&(e.y=boundry.bottom),e.x=Math.cos(ROTATION)*(e.x-centerCanvas.x)-Math.sin(ROTATION)*(e.y-centerCanvas.y)+centerCanvas.x,e.y=Math.sin(ROTATION)*(e.x-centerCanvas.x)+Math.cos(ROTATION)*(e.y-centerCanvas.y)+centerCanvas.y},this.draw=function(){ctx.beginPath(),ctx.fillStyle="#fff",ctx.arc(e.x,e.y,e.radius,0,dblPI,!1),ctx.fill()}},resize=function(){canvas.width=canvas.offsetWidth,canvas.height=canvas.offsetHeight,boundry.right=canvas.width-1,boundry.bottom=canvas.height-1,centerCanvas={x:Math.floor(canvas.width/2),y:Math.floor(canvas.height/2)},connectArea.destX=centerCanvas.x,connectArea.destY=.1*centerCanvas.y,stars.length=0;for(var e=(Math.floor(canvas.width*canvas.height/AMOUNT),0);e<AMOUNT;)stars.push(new Star),e+=1;window.innerWidth<800?dist_between_max/=2.5:dist_between_max=50},updateConnectArea=function(){var e=connectArea.destX-connectArea.x,t=connectArea.destY-connectArea.y;(e>5||e<5)&&(connectArea.x+=Math.floor(e/20),connectArea.y+=Math.floor(t/20))},connectStars=function(){for(var e,t=0;e=stars[t];t++)for(var n,a=t+1;n=stars[a];a++){var i=e.x-n.x,o=e.y-n.y,r=e.x-connectArea.x,c=e.y-connectArea.y;i<dist_between_max&&i>-dist_between_max&&o<dist_between_max&&o>-dist_between_max&&r<CON_RADIUS&&r>-CON_RADIUS&&c<CON_RADIUS&&c>-CON_RADIUS&&(ctx.beginPath(),ctx.strokeStyle="hsla(0,100%,100%,0.2)",ctx.moveTo(e.x+0,e.y+0),ctx.lineTo(n.x+0,n.y+0),ctx.stroke(),ctx.closePath())}},animateStars=function e(){requestAnimationFrame(e),ctx.clearRect(0,0,canvas.width,canvas.height),updateConnectArea();for(var t,n=0;t=stars[n];n++)t.update();connectStars();for(var a,i=0;a=stars[i];i++)a.draw()};canvas.width=canvas.offsetWidth,canvas.height=canvas.offsetHeight;var ctx=canvas.getContext("2d");ctx.lineWidth=LINE_WIDTH;var boundry={top:-10,left:-10,right:canvas.width+10,bottom:canvas.height+10},centerCanvas={x:Math.floor(canvas.width/2),y:Math.floor(canvas.height/2)},connectArea={destX:0,destY:0,x:centerCanvas.x,y:centerCanvas.y},stars=[];resize(),animateStars(),document.body.addEventListener("mousemove",function(e){connectArea.destX=e.clientX||e.touches&&e.touches[0].pageX,connectArea.destY=e.clientY||e.touches&&e.touches[0].pageY}),document.body.addEventListener("mouseleave",function(e){connectArea.destX=centerCanvas.x,connectArea.destY=centerCanvas.y}),window.addEventListener("resize",resize)}var app=function(){if(null!==document.getElementById("form")){var e=function(){var e=o(document.form);return t.apply(this,e)},t=function(e){if(void 0===e)return!1;var t,r,c,s=o(arguments);return s.forEach(function(e){"checkbox"==e.type?r=i(e,r):"radio"==e.type?c=i(e,c):"select-multiple"==e.type?2===e.selectedOptions.length?a(e):n(e):"textarea"==e.type||(t=Boolean(e.value),!1===t?n(e):a(e))}),t},n=function(e){(e=document.getElementById(e.classList[0]+"Err"))&&(e.classList.add("error-message"),e.classList.remove("hidden"))},a=function(e){(e=document.getElementById(e.classList[0]+"Err"))&&(e.classList.add("hidden"),e.classList.remove("error-message"))},i=function(e,t){return void 0===t&&(t=!1),e.checked&&(t=!0),t?a(e):n(e),t},o=function(e){return[].slice.call(e)};return document.getElementById("form").addEventListener("submit",function(t){return t.preventDefault(),t.stopPropagation(),e()}),app}}();