/*! For license information please see 246.js.LICENSE.txt */
"use strict";(self.webpackChunkmq_navigator3_0client=self.webpackChunkmq_navigator3_0client||[]).push([[246],{246:(t,e,n)=>{function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l.apply(this,arguments)}function s(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}n.d(e,{Ay:()=>ie});var c=s(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),u=s(/Edge/i),d=s(/firefox/i),h=s(/safari/i)&&!s(/chrome/i)&&!s(/android/i),f=s(/iP(ad|od|hone)/i),p=s(/chrome/i)&&s(/android/i),g={capture:!1,passive:!1};function v(t,e,n){t.addEventListener(e,n,!c&&g)}function m(t,e,n){t.removeEventListener(e,n,!c&&g)}function b(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function y(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function w(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&b(t,e):b(t,e))||o&&t===n)return t;if(t===n)break}while(t=y(t))}return null}var E,S=/\s+/g;function _(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(S," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(S," ")}}function D(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function T(t,e){var n="";if("string"==typeof t)n=t;else do{var o=D(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function C(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function x(){return document.scrollingElement||document.documentElement}function O(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,u,d,h;if(t!==window&&t.parentNode&&t!==x()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,u=r.right,d=r.height,h=r.width):(a=0,l=0,s=window.innerHeight,u=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,!c))do{if(i&&i.getBoundingClientRect&&("none"!==D(i,"transform")||n&&"static"!==D(i,"position"))){var f=i.getBoundingClientRect();a-=f.top+parseInt(D(i,"border-top-width")),l-=f.left+parseInt(D(i,"border-left-width")),s=a+r.height,u=l+r.width;break}}while(i=i.parentNode);if(o&&t!==window){var p=T(i||t),g=p&&p.a,v=p&&p.d;p&&(s=(a/=v)+(d/=v),u=(l/=g)+(h/=g))}return{top:a,left:l,bottom:s,right:u,width:h,height:d}}}function M(t,e,n){for(var o=k(t,!0),i=O(t)[e];o;){var r=O(o)[n];if(!("top"===n||"left"===n?i>=r:i<=r))return o;if(o===x())break;o=k(o,!1)}return!1}function N(t,e,n,o){for(var i=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Rt.ghost&&(o||a[r]!==Rt.dragged)&&w(a[r],n.draggable,t,!1)){if(i===e)return a[r];i++}r++}return null}function A(t,e){for(var n=t.lastElementChild;n&&(n===Rt.ghost||"none"===D(n,"display")||e&&!b(n,e));)n=n.previousElementSibling;return n||null}function I(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Rt.clone||e&&!b(t,e)||n++;return n}function P(t){var e=0,n=0,o=x();if(t)do{var i=T(t),r=i.a,a=i.d;e+=t.scrollLeft*r,n+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,n]}function k(t,e){if(!t||!t.getBoundingClientRect)return x();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=D(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return x();if(o||e)return n;o=!0}}}while(n=n.parentNode);return x()}function X(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function Y(t,e){return function(){if(!E){var n=arguments;1===n.length?t.call(this,n[0]):t.apply(this,n),E=setTimeout((function(){E=void 0}),e)}}}function R(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function B(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function F(t,e,n){var o={};return Array.from(t.children).forEach((function(i){var r,a,l,s;if(w(i,e.draggable,t,!1)&&!i.animated&&i!==n){var c=O(i);o.left=Math.min(null!==(r=o.left)&&void 0!==r?r:1/0,c.left),o.top=Math.min(null!==(a=o.top)&&void 0!==a?a:1/0,c.top),o.right=Math.max(null!==(l=o.right)&&void 0!==l?l:-1/0,c.right),o.bottom=Math.max(null!==(s=o.bottom)&&void 0!==s?s:-1/0,c.bottom)}})),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}var j="Sortable"+(new Date).getTime();var H=[],L={initializeByDefault:!0},W={mount:function(t){for(var e in L)L.hasOwnProperty(e)&&!(e in t)&&(t[e]=L[e]);H.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),H.push(t)},pluginEvent:function(t,e,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var r=t+"Global";H.forEach((function(o){e[o.pluginName]&&(e[o.pluginName][r]&&e[o.pluginName][r](i({sortable:e},n)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](i({sortable:e},n)))}))},initializePlugins:function(t,e,n,o){for(var i in H.forEach((function(o){var i=o.pluginName;if(t.options[i]||o.initializeByDefault){var r=new o(t,e,t.options);r.sortable=t,r.options=t.options,t[i]=r,l(n,r.defaults)}})),t.options)if(t.options.hasOwnProperty(i)){var r=this.modifyOption(t,i,t.options[i]);void 0!==r&&(t.options[i]=r)}},getEventProperties:function(t,e){var n={};return H.forEach((function(o){"function"==typeof o.eventProperties&&l(n,o.eventProperties.call(e[o.pluginName],t))})),n},modifyOption:function(t,e,n){var o;return H.forEach((function(i){t[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[e]&&(o=i.optionListeners[e].call(t[i.pluginName],n))})),o}};var z=["evt"],G=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.evt,r=function(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}(n,z);W.pluginEvent.bind(Rt)(t,e,i({dragEl:U,parentEl:V,ghostEl:Z,rootEl:K,nextEl:Q,lastDownEl:$,cloneEl:J,cloneHidden:tt,dragStarted:ft,putSortable:at,activeSortable:Rt.active,originalEvent:o,oldIndex:et,oldDraggableIndex:ot,newIndex:nt,newDraggableIndex:it,hideGhostForTarget:Pt,unhideGhostForTarget:kt,cloneNowHidden:function(){tt=!0},cloneNowShown:function(){tt=!1},dispatchSortableEvent:function(t){q({sortable:e,name:t,originalEvent:o})}},r))};function q(t){!function(t){var e=t.sortable,n=t.rootEl,o=t.name,r=t.targetEl,a=t.cloneEl,l=t.toEl,s=t.fromEl,d=t.oldIndex,h=t.newIndex,f=t.oldDraggableIndex,p=t.newDraggableIndex,g=t.originalEvent,v=t.putSortable,m=t.extraEventProperties;if(e=e||n&&n[j]){var b,y=e.options,w="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||c||u?(b=document.createEvent("Event")).initEvent(o,!0,!0):b=new CustomEvent(o,{bubbles:!0,cancelable:!0}),b.to=l||n,b.from=s||n,b.item=r||n,b.clone=a,b.oldIndex=d,b.newIndex=h,b.oldDraggableIndex=f,b.newDraggableIndex=p,b.originalEvent=g,b.pullMode=v?v.lastPutMode:void 0;var E=i(i({},m),W.getEventProperties(o,e));for(var S in E)b[S]=E[S];n&&n.dispatchEvent(b),y[w]&&y[w].call(e,b)}}(i({putSortable:at,cloneEl:J,targetEl:U,rootEl:K,oldIndex:et,oldDraggableIndex:ot,newIndex:nt,newDraggableIndex:it},t))}var U,V,Z,K,Q,$,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,vt,mt,bt=!1,yt=!1,wt=[],Et=!1,St=!1,_t=[],Dt=!1,Tt=[],Ct="undefined"!=typeof document,xt=f,Ot=u||c?"cssFloat":"float",Mt=Ct&&!p&&!f&&"draggable"in document.createElement("div"),Nt=function(){if(Ct){if(c)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),At=function(t,e){var n=D(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=N(t,0,e),r=N(t,1,e),a=i&&D(i),l=r&&D(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+O(i).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+O(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==u?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||s>=o&&"none"===n[Ot]||r&&"none"===n[Ot]&&s+c>o)?"vertical":"horizontal"},It=function(t){function e(t,n){return function(o,i,r,a){var l=o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name;if(null==t&&(n||l))return!0;if(null==t||!1===t)return!1;if(n&&"clone"===t)return t;if("function"==typeof t)return e(t(o,i,r,a),n)(o,i,r,a);var s=(n?o:i).options.group.name;return!0===t||"string"==typeof t&&t===s||t.join&&t.indexOf(s)>-1}}var n={},o=t.group;o&&"object"==r(o)||(o={name:o}),n.name=o.name,n.checkPull=e(o.pull,!0),n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n},Pt=function(){!Nt&&Z&&D(Z,"display","none")},kt=function(){!Nt&&Z&&D(Z,"display","")};Ct&&!p&&document.addEventListener("click",(function(t){if(yt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),yt=!1,!1}),!0);var Xt=function(t){if(U){t=t.touches?t.touches[0]:t;var e=(i=t.clientX,r=t.clientY,wt.some((function(t){var e=t[j].options.emptyInsertThreshold;if(e&&!A(t)){var n=O(t),o=i>=n.left-e&&i<=n.right+e,l=r>=n.top-e&&r<=n.bottom+e;return o&&l?a=t:void 0}})),a);if(e){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[j]._onDragOver(n)}}var i,r,a},Yt=function(t){U&&U.parentNode[j]._isOutsideThisEl(t.target)};function Rt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=l({},e),t[j]=this;var n,o,r={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return At(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Rt.supportPointer&&"PointerEvent"in window&&!h,emptyInsertThreshold:5};for(var a in W.initializePlugins(this,t,r),r)!(a in e)&&(e[a]=r[a]);for(var s in It(e),this)"_"===s.charAt(0)&&"function"==typeof this[s]&&(this[s]=this[s].bind(this));this.nativeDraggable=!e.forceFallback&&Mt,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?v(t,"pointerdown",this._onTapStart):(v(t,"mousedown",this._onTapStart),v(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(v(t,"dragover",this),v(t,"dragenter",this)),wt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),l(this,(o=[],{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach((function(t){if("none"!==D(t,"display")&&t!==Rt.ghost){o.push({target:t,rect:O(t)});var e=i({},o[o.length-1].rect);if(t.thisAnimationDuration){var n=T(t,!0);n&&(e.top-=n.f,e.left-=n.e)}t.fromRect=e}}))},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(o,{target:t}),1)},animateAll:function(t){var e=this;if(!this.options.animation)return clearTimeout(n),void("function"==typeof t&&t());var i=!1,r=0;o.forEach((function(t){var n=0,o=t.target,a=o.fromRect,l=O(o),s=o.prevFromRect,c=o.prevToRect,u=t.rect,d=T(o,!0);d&&(l.top-=d.f,l.left-=d.e),o.toRect=l,o.thisAnimationDuration&&X(s,l)&&!X(a,l)&&(u.top-l.top)/(u.left-l.left)==(a.top-l.top)/(a.left-l.left)&&(n=function(t,e,n,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation}(u,s,c,e.options)),X(l,a)||(o.prevFromRect=a,o.prevToRect=l,n||(n=e.options.animation),e.animate(o,u,l,n)),n&&(i=!0,r=Math.max(r,n),clearTimeout(o.animationResetTimer),o.animationResetTimer=setTimeout((function(){o.animationTime=0,o.prevFromRect=null,o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null}),n),o.thisAnimationDuration=n)})),clearTimeout(n),i?n=setTimeout((function(){"function"==typeof t&&t()}),r):"function"==typeof t&&t(),o=[]},animate:function(t,e,n,o){if(o){D(t,"transition",""),D(t,"transform","");var i=T(this.el),r=i&&i.a,a=i&&i.d,l=(e.left-n.left)/(r||1),s=(e.top-n.top)/(a||1);t.animatingX=!!l,t.animatingY=!!s,D(t,"transform","translate3d("+l+"px,"+s+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),D(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),D(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){D(t,"transition",""),D(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),o)}}}))}function Bt(t,e,n,o,i,r,a,l){var s,d,h=t[j],f=h.options.onMove;return!window.CustomEvent||c||u?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||O(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),f&&(d=f.call(h,s,a)),d}function Ft(t){t.draggable=!1}function jt(){Dt=!1}function Ht(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function Lt(t){return setTimeout(t,0)}function Wt(t){return clearTimeout(t)}Rt.prototype={constructor:Rt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(pt=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,U):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,n=this.el,o=this.options,i=o.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,l=(a||t).target,s=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,c=o.filter;if(function(t){Tt.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n];o.checked&&Tt.push(o)}}(n),!U&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||o.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!h||!l||"SELECT"!==l.tagName.toUpperCase())&&!((l=w(l,o.draggable,n,!1))&&l.animated||$===l)){if(et=I(l),ot=I(l,o.draggable),"function"==typeof c){if(c.call(this,t,l,this))return q({sortable:e,rootEl:s,name:"filter",targetEl:l,toEl:n,fromEl:n}),G("filter",e,{evt:t}),void(i&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(o){if(o=w(s,o.trim(),n,!1))return q({sortable:e,rootEl:o,name:"filter",targetEl:l,fromEl:n,toEl:n}),G("filter",e,{evt:t}),!0}))))return void(i&&t.cancelable&&t.preventDefault());o.handle&&!w(s,o.handle,n,!1)||this._prepareDragStart(t,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;if(n&&!U&&n.parentNode===r){var s=O(n);if(K=r,V=(U=n).parentNode,Q=U.nextSibling,$=n,rt=a.group,Rt.dragged=U,lt={target:U,clientX:(e||t).clientX,clientY:(e||t).clientY},dt=lt.clientX-s.left,ht=lt.clientY-s.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,U.style["will-change"]="all",o=function(){G("delayEnded",i,{evt:t}),Rt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!d&&i.nativeDraggable&&(U.draggable=!0),i._triggerDragStart(t,e),q({sortable:i,name:"choose",originalEvent:t}),_(U,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){C(U,t.trim(),Ft)})),v(l,"dragover",Xt),v(l,"mousemove",Xt),v(l,"touchmove",Xt),v(l,"mouseup",i._onDrop),v(l,"touchend",i._onDrop),v(l,"touchcancel",i._onDrop),d&&this.nativeDraggable&&(this.options.touchStartThreshold=4,U.draggable=!0),G("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(u||c))o();else{if(Rt.eventCanceled)return void this._onDrop();v(l,"mouseup",i._disableDelayedDrag),v(l,"touchend",i._disableDelayedDrag),v(l,"touchcancel",i._disableDelayedDrag),v(l,"mousemove",i._delayedDragTouchMoveHandler),v(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&v(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){U&&Ft(U),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;m(t,"mouseup",this._disableDelayedDrag),m(t,"touchend",this._disableDelayedDrag),m(t,"touchcancel",this._disableDelayedDrag),m(t,"mousemove",this._delayedDragTouchMoveHandler),m(t,"touchmove",this._delayedDragTouchMoveHandler),m(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?v(document,"pointermove",this._onTouchMove):v(document,e?"touchmove":"mousemove",this._onTouchMove):(v(U,"dragend",this),v(K,"dragstart",this._onDragStart));try{document.selection?Lt((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(bt=!1,K&&U){G("dragStarted",this,{evt:e}),this.nativeDraggable&&v(document,"dragover",Yt);var n=this.options;!t&&_(U,n.dragClass,!1),_(U,n.ghostClass,!0),Rt.active=this,t&&this._appendGhost(),q({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(st){this._lastX=st.clientX,this._lastY=st.clientY,Pt();for(var t=document.elementFromPoint(st.clientX,st.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(st.clientX,st.clientY))!==e;)e=t;if(U.parentNode[j]._isOutsideThisEl(t),e)do{if(e[j]&&e[j]._onDragOver({clientX:st.clientX,clientY:st.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break;t=e}while(e=y(e));kt()}},_onTouchMove:function(t){if(lt){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=Z&&T(Z,!0),a=Z&&r&&r.a,l=Z&&r&&r.d,s=xt&&mt&&P(mt),c=(i.clientX-lt.clientX+o.x)/(a||1)+(s?s[0]-_t[0]:0)/(a||1),u=(i.clientY-lt.clientY+o.y)/(l||1)+(s?s[1]-_t[1]:0)/(l||1);if(!Rt.active&&!bt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(Z){r?(r.e+=c-(ct||0),r.f+=u-(ut||0)):r={a:1,b:0,c:0,d:1,e:c,f:u};var d="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");D(Z,"webkitTransform",d),D(Z,"mozTransform",d),D(Z,"msTransform",d),D(Z,"transform",d),ct=c,ut=u,st=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Z){var t=this.options.fallbackOnBody?document.body:K,e=O(U,!0,xt,!0,t),n=this.options;if(xt){for(mt=t;"static"===D(mt,"position")&&"none"===D(mt,"transform")&&mt!==document;)mt=mt.parentNode;mt!==document.body&&mt!==document.documentElement?(mt===document&&(mt=x()),e.top+=mt.scrollTop,e.left+=mt.scrollLeft):mt=x(),_t=P(mt)}_(Z=U.cloneNode(!0),n.ghostClass,!1),_(Z,n.fallbackClass,!0),_(Z,n.dragClass,!0),D(Z,"transition",""),D(Z,"transform",""),D(Z,"box-sizing","border-box"),D(Z,"margin",0),D(Z,"top",e.top),D(Z,"left",e.left),D(Z,"width",e.width),D(Z,"height",e.height),D(Z,"opacity","0.8"),D(Z,"position",xt?"absolute":"fixed"),D(Z,"zIndex","100000"),D(Z,"pointerEvents","none"),Rt.ghost=Z,t.appendChild(Z),D(Z,"transform-origin",dt/parseInt(Z.style.width)*100+"% "+ht/parseInt(Z.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;G("dragStart",this,{evt:t}),Rt.eventCanceled?this._onDrop():(G("setupClone",this),Rt.eventCanceled||((J=B(U)).removeAttribute("id"),J.draggable=!1,J.style["will-change"]="",this._hideClone(),_(J,this.options.chosenClass,!1),Rt.clone=J),n.cloneId=Lt((function(){G("clone",n),Rt.eventCanceled||(n.options.removeCloneOnHide||K.insertBefore(J,U),n._hideClone(),q({sortable:n,name:"clone"}))})),!e&&_(U,i.dragClass,!0),e?(yt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(m(document,"mouseup",n._onDrop),m(document,"touchend",n._onDrop),m(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,U)),v(document,"drop",n),D(U,"transform","translateZ(0)")),bt=!0,n._dragStartId=Lt(n._dragStarted.bind(n,e,t)),v(document,"selectstart",n),ft=!0,h&&D(document.body,"user-select","none"))},_onDragOver:function(t){var e,n,o,r,a=this.el,l=t.target,s=this.options,c=s.group,u=Rt.active,d=rt===c,h=s.sort,f=at||u,p=this,g=!1;if(!Dt){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),l=w(l,s.draggable,a,!0),H("dragOver"),Rt.eventCanceled)return g;if(U.contains(t.target)||l.animated&&l.animatingX&&l.animatingY||p._ignoreWhileAnimating===l)return W(!1);if(yt=!1,u&&!s.disabled&&(d?h||(o=V!==K):at===this||(this.lastPutMode=rt.checkPull(this,u,U,t))&&c.checkPut(this,u,U,t))){if(r="vertical"===this._getDirection(t,l),e=O(U),H("dragOverValid"),Rt.eventCanceled)return g;if(o)return V=K,L(),this._hideClone(),H("revert"),Rt.eventCanceled||(Q?K.insertBefore(U,Q):K.appendChild(U)),W(!0);var v=A(a,s.draggable);if(!v||function(t,e,n){var o=O(A(n.el,n.options.draggable)),i=F(n.el,n.options,Z);return e?t.clientX>i.right+10||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>i.bottom+10||t.clientX>o.right&&t.clientY>o.top}(t,r,this)&&!v.animated){if(v===U)return W(!1);if(v&&a===t.target&&(l=v),l&&(n=O(l)),!1!==Bt(K,a,U,e,l,n,t,!!l))return L(),v&&v.nextSibling?a.insertBefore(U,v.nextSibling):a.appendChild(U),V=a,z(),W(!0)}else if(v&&function(t,e,n){var o=O(N(n.el,0,n.options,!0)),i=F(n.el,n.options,Z);return e?t.clientX<i.left-10||t.clientY<o.top&&t.clientX<o.right:t.clientY<i.top-10||t.clientY<o.bottom&&t.clientX<o.left}(t,r,this)){var m=N(a,0,s,!0);if(m===U)return W(!1);if(n=O(l=m),!1!==Bt(K,a,U,e,l,n,t,!1))return L(),a.insertBefore(U,m),V=a,z(),W(!0)}else if(l.parentNode===a){n=O(l);var b,y,E,S=U.parentNode!==a,T=!function(t,e,n){var o=n?t.left:t.top,i=n?t.right:t.bottom,r=n?t.width:t.height,a=n?e.left:e.top,l=n?e.right:e.bottom,s=n?e.width:e.height;return o===a||i===l||o+r/2===a+s/2}(U.animated&&U.toRect||e,l.animated&&l.toRect||n,r),C=r?"top":"left",x=M(l,"top","top")||M(U,"top","top"),P=x?x.scrollTop:void 0;if(pt!==l&&(y=n[C],Et=!1,St=!T&&s.invertSwap||S),b=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,h=!1;if(!a)if(l&&vt<c*i){if(!Et&&(1===gt?s>u+c*r/2:s<d-c*r/2)&&(Et=!0),Et)h=!0;else if(1===gt?s<u+vt:s>d-vt)return-gt}else if(s>u+c*(1-i)/2&&s<d-c*(1-i)/2)return function(t){return I(U)<I(t)?1:-1}(e);return(h=h||a)&&(s<u+c*r/2||s>d-c*r/2)?s>u+c/2?1:-1:0}(t,l,n,r,T?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,St,pt===l),0!==b){var k=I(U);do{k-=b,E=V.children[k]}while(E&&("none"===D(E,"display")||E===Z))}if(0===b||E===l)return W(!1);pt=l,gt=b;var X=l.nextElementSibling,Y=!1,B=Bt(K,a,U,e,l,n,t,Y=1===b);if(!1!==B)return 1!==B&&-1!==B||(Y=1===B),Dt=!0,setTimeout(jt,30),L(),Y&&!X?a.appendChild(U):l.parentNode.insertBefore(U,Y?X:l),x&&R(x,0,P-x.scrollTop),V=U.parentNode,void 0===y||St||(vt=Math.abs(y-O(l)[C])),z(),W(!0)}if(a.contains(U))return W(!1)}return!1}function H(s,c){G(s,p,i({evt:t,isOwner:d,axis:r?"vertical":"horizontal",revert:o,dragRect:e,targetRect:n,canSort:h,fromSortable:f,target:l,completed:W,onMove:function(n,o){return Bt(K,a,U,e,n,O(n),t,o)},changed:z},c))}function L(){H("dragOverAnimationCapture"),p.captureAnimationState(),p!==f&&f.captureAnimationState()}function W(e){return H("dragOverCompleted",{insertion:e}),e&&(d?u._hideClone():u._showClone(p),p!==f&&(_(U,at?at.options.ghostClass:u.options.ghostClass,!1),_(U,s.ghostClass,!0)),at!==p&&p!==Rt.active?at=p:p===Rt.active&&at&&(at=null),f===p&&(p._ignoreWhileAnimating=l),p.animateAll((function(){H("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(l===U&&!U.animated||l===a&&!l.animated)&&(pt=null),s.dragoverBubble||t.rootEl||l===document||(U.parentNode[j]._isOutsideThisEl(t.target),!e&&Xt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),g=!0}function z(){nt=I(U),it=I(U,s.draggable),q({sortable:p,name:"change",toEl:a,newIndex:nt,newDraggableIndex:it,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){m(document,"mousemove",this._onTouchMove),m(document,"touchmove",this._onTouchMove),m(document,"pointermove",this._onTouchMove),m(document,"dragover",Xt),m(document,"mousemove",Xt),m(document,"touchmove",Xt)},_offUpEvents:function(){var t=this.el.ownerDocument;m(t,"mouseup",this._onDrop),m(t,"touchend",this._onDrop),m(t,"pointerup",this._onDrop),m(t,"touchcancel",this._onDrop),m(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;nt=I(U),it=I(U,n.draggable),G("drop",this,{evt:t}),V=U&&U.parentNode,nt=I(U),it=I(U,n.draggable),Rt.eventCanceled||(bt=!1,St=!1,Et=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Wt(this.cloneId),Wt(this._dragStartId),this.nativeDraggable&&(m(document,"drop",this),m(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),h&&D(document.body,"user-select",""),D(U,"transform",""),t&&(ft&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),(K===V||at&&"clone"!==at.lastPutMode)&&J&&J.parentNode&&J.parentNode.removeChild(J),U&&(this.nativeDraggable&&m(U,"dragend",this),Ft(U),U.style["will-change"]="",ft&&!bt&&_(U,at?at.options.ghostClass:this.options.ghostClass,!1),_(U,this.options.chosenClass,!1),q({sortable:this,name:"unchoose",toEl:V,newIndex:null,newDraggableIndex:null,originalEvent:t}),K!==V?(nt>=0&&(q({rootEl:V,name:"add",toEl:V,fromEl:K,originalEvent:t}),q({sortable:this,name:"remove",toEl:V,originalEvent:t}),q({rootEl:V,name:"sort",toEl:V,fromEl:K,originalEvent:t}),q({sortable:this,name:"sort",toEl:V,originalEvent:t})),at&&at.save()):nt!==et&&nt>=0&&(q({sortable:this,name:"update",toEl:V,originalEvent:t}),q({sortable:this,name:"sort",toEl:V,originalEvent:t})),Rt.active&&(null!=nt&&-1!==nt||(nt=et,it=ot),q({sortable:this,name:"end",toEl:V,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){G("nulling",this),K=U=V=Z=Q=J=$=tt=lt=st=ft=nt=it=et=ot=pt=gt=at=rt=Rt.dragged=Rt.ghost=Rt.clone=Rt.active=null,Tt.forEach((function(t){t.checked=!0})),Tt.length=ct=ut=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":U&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)w(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Ht(t));return e},sort:function(t,e){var n={},o=this.el;this.toArray().forEach((function(t,e){var i=o.children[e];w(i,this.options.draggable,o,!1)&&(n[t]=i)}),this),e&&this.captureAnimationState(),t.forEach((function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return w(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=W.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&It(n)},destroy:function(){G("destroy",this);var t=this.el;t[j]=null,m(t,"mousedown",this._onTapStart),m(t,"touchstart",this._onTapStart),m(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(m(t,"dragover",this),m(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),wt.splice(wt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!tt){if(G("hideClone",this),Rt.eventCanceled)return;D(J,"display","none"),this.options.removeCloneOnHide&&J.parentNode&&J.parentNode.removeChild(J),tt=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(tt){if(G("showClone",this),Rt.eventCanceled)return;U.parentNode!=K||this.options.group.revertClone?Q?K.insertBefore(J,Q):K.appendChild(J):K.insertBefore(J,U),this.options.group.revertClone&&this.animate(U,J),D(J,"display",""),tt=!1}}else this._hideClone()}},Ct&&v(document,"touchmove",(function(t){(Rt.active||bt)&&t.cancelable&&t.preventDefault()})),Rt.utils={on:v,off:m,css:D,find:C,is:function(t,e){return!!w(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:Y,closest:w,toggleClass:_,clone:B,index:I,nextTick:Lt,cancelNextTick:Wt,detectDirection:At,getChild:N,expando:j},Rt.get=function(t){return t[j]},Rt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Rt.utils=i(i({},Rt.utils),t.utils)),W.mount(t)}))},Rt.create=function(t,e){return new Rt(t,e)},Rt.version="1.15.3";var zt,Gt,qt,Ut,Vt,Zt,Kt=[],Qt=!1;function $t(){Kt.forEach((function(t){clearInterval(t.pid)})),Kt=[]}function Jt(){clearInterval(Zt)}var te=Y((function(t,e,n,o){if(e.scroll){var i,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=e.scrollSensitivity,s=e.scrollSpeed,c=x(),u=!1;Gt!==n&&(Gt=n,$t(),zt=e.scroll,i=e.scrollFn,!0===zt&&(zt=k(n,!0)));var d=0,h=zt;do{var f=h,p=O(f),g=p.top,v=p.bottom,m=p.left,b=p.right,y=p.width,w=p.height,E=void 0,S=void 0,_=f.scrollWidth,T=f.scrollHeight,C=D(f),M=f.scrollLeft,N=f.scrollTop;f===c?(E=y<_&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),S=w<T&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<_&&("auto"===C.overflowX||"scroll"===C.overflowX),S=w<T&&("auto"===C.overflowY||"scroll"===C.overflowY));var A=E&&(Math.abs(b-r)<=l&&M+y<_)-(Math.abs(m-r)<=l&&!!M),I=S&&(Math.abs(v-a)<=l&&N+w<T)-(Math.abs(g-a)<=l&&!!N);if(!Kt[d])for(var P=0;P<=d;P++)Kt[P]||(Kt[P]={});Kt[d].vx==A&&Kt[d].vy==I&&Kt[d].el===f||(Kt[d].el=f,Kt[d].vx=A,Kt[d].vy=I,clearInterval(Kt[d].pid),0==A&&0==I||(u=!0,Kt[d].pid=setInterval(function(){o&&0===this.layer&&Rt.active._onTouchMove(Vt);var e=Kt[this.layer].vy?Kt[this.layer].vy*s:0,n=Kt[this.layer].vx?Kt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Rt.dragged.parentNode[j],n,e,t,Vt,Kt[this.layer].el)||R(Kt[this.layer].el,n,e)}.bind({layer:d}),24))),d++}while(e.bubbleScroll&&h!==c&&(h=k(h,!1)));Qt=u}}),30),ee=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(e){var s=n||i;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(c.clientX,c.clientY);l(),s&&!s.el.contains(u)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function ne(){}function oe(){}ne.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=N(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:ee},l(ne,{pluginName:"revertOnSpill"}),oe.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:ee},l(oe,{pluginName:"removeOnSpill"}),Rt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?v(document,"dragover",this._handleAutoScroll):this.options.supportPointer?v(document,"pointermove",this._handleFallbackAutoScroll):e.touches?v(document,"touchmove",this._handleFallbackAutoScroll):v(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?m(document,"dragover",this._handleAutoScroll):(m(document,"pointermove",this._handleFallbackAutoScroll),m(document,"touchmove",this._handleFallbackAutoScroll),m(document,"mousemove",this._handleFallbackAutoScroll)),Jt(),$t(),clearTimeout(E),E=void 0},nulling:function(){Vt=Gt=zt=Qt=Zt=qt=Ut=null,Kt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var n=this,o=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(o,i);if(Vt=t,e||this.options.forceAutoScrollFallback||u||c||h){te(t,this.options,r,e);var a=k(r,!0);!Qt||Zt&&o===qt&&i===Ut||(Zt&&Jt(),Zt=setInterval((function(){var r=k(document.elementFromPoint(o,i),!0);r!==a&&(a=r,$t()),te(t,n.options,r,e)}),10),qt=o,Ut=i)}else{if(!this.options.bubbleScroll||k(r,!0)===x())return void $t();te(t,this.options,k(r,!1),!1)}}},l(t,{pluginName:"scroll",initializeByDefault:!0})}),Rt.mount(oe,ne);const ie=Rt}}]);
//# sourceMappingURL=246.js.map