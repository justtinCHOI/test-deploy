/*! For license information please see 677.js.LICENSE.txt */
"use strict";(self.webpackChunkmq_navigator3_0client=self.webpackChunkmq_navigator3_0client||[]).push([[677],{6677:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var r=n(6540),o=n(2295),a=n(8639),i=n(8046),l=(n(2216),n(7767)),u=n(216),c=n(7525),s=n(2845),f=n(246);function d(e){var t=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),r=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0"),a=String(e.getSeconds()).padStart(2,"0");return"".concat(t).concat(n," ").concat(r).concat(o).concat(a)}function v(e){var t=Math.floor(e/36e5),n=Math.floor(e%36e5/6e4),r=Math.floor(e%6e4/1e3);return"".concat(String(t).padStart(2,"0"),":").concat(String(n).padStart(2,"0"),":").concat(String(r).padStart(2,"0"))}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return(t=function(e){var t=function(e){if("object"!=p(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}const E=function(e){var t,n,o=e.gateState,a=e.isModify,l=e.onGateChange,u=e.handleRemoveGate,c=g((0,r.useState)(o.time?d(new Date(o.time)):null),2),f=c[0],v=c[1],p=g((0,r.useState)(o.coordinate?o.coordinate.latitude:null),2),h=p[0],y=p[1],b=g((0,r.useState)(o.coordinate?o.coordinate.longitude:null),2),E=b[0],w=b[1],S=g((0,r.useState)(null!==(t=o.coordinate)&&void 0!==t&&t.latitude?o.coordinate.latitude>=0?"north":"south":null),2),O=S[0],x=S[1],A=g((0,r.useState)(null!==(n=o.coordinate)&&void 0!==n&&n.longitude?o.coordinate.longitude>=0?"east":"west":null),2),j=A[0],C=A[1];return(0,r.useEffect)((function(){var e,t,n,r;v(o.time?d(new Date(o.time)):null),y(o.coordinate?o.coordinate.latitude:null),w(o.coordinate?o.coordinate.longitude:null),null!==(null===(e=o.coordinate)||void 0===e?void 0:e.latitude)&&void 0!==(null===(t=o.coordinate)||void 0===t?void 0:t.latitude)&&x(o.coordinate.latitude>=0?"north":"south"),null!==(null===(n=o.coordinate)||void 0===n?void 0:n.longitude)&&void 0!==(null===(r=o.coordinate)||void 0===r?void 0:r.longitude)&&C(o.coordinate.longitude>=0?"east":"west")}),[o.coordinate,o.time]),r.createElement(i.UC,null,r.createElement(i.wV,null,r.createElement(i.lV,{className:"width70px"},o.sequence),r.createElement(i.U9,{className:"width120px",value:f||"",onChange:function(e){v(e.target.value)},onBlur:function(e){var t=e.target.value;if(!/^\d{4} \d{6}$/.test(t))return v(t),s.oR.warn("Invalid time format. Please use MMDD hhmmss."),void e.target.classList.add("warning");e.target.classList.remove("warning");try{var n=function(e){var t=parseInt(e.slice(0,2),10)-1,n=parseInt(e.slice(2,4),10),r=parseInt(e.slice(5,7),10),o=parseInt(e.slice(7,9),10),a=parseInt(e.slice(9,11),10),i=(new Date).getFullYear();return new Date(i,t,n,r,o,a)}(t);v(n.toISOString()),l(m(m({},o),{},{time:n.toISOString()})),s.oR.dismiss(),s.oR.success("Time has been successfully converted")}catch(e){console.error("Time conversion error:",e),s.oR.error("Failed to convert time.")}},disabled:!a}),r.createElement(i.OQ,{className:"width50px",value:O||"",onChange:function(e){var t=e.target.value;if(x(t),null!==h){var n,r,a="south"===t?-Math.abs(h):Math.abs(h);y(a),l(m(m({},o),{},{coordinate:m(m({},o.coordinate),{},{latitude:a,longitude:null!==(n=null===(r=o.coordinate)||void 0===r?void 0:r.longitude)&&void 0!==n?n:null})}))}},disabled:!a},r.createElement("option",{value:"north"},"N"),r.createElement("option",{value:"south"},"S")),r.createElement(i.U9,{className:"flex ".concat(null===h?"warning":""),type:"number",step:"0.01",value:null!==h?Math.abs(h):"",onChange:function(e){y(parseFloat(e.target.value))},onBlur:function(e){if(null!==h&&(h<0||h>90))s.oR.warn("Latitude must be between 0 and 90."),y(null);else if(null!==h){var t,n,r=Number(e.target.value);"south"==O&&(r=-1*Math.abs(r)),y(r),l(m(m({},o),{},{coordinate:m(m({},o.coordinate),{},{latitude:r,longitude:null!==(t=null===(n=o.coordinate)||void 0===n?void 0:n.longitude)&&void 0!==t?t:null})}))}},disabled:!a}),r.createElement(i.OQ,{className:"width50px",value:j||"",onChange:function(e){var t=e.target.value;if(C(t),null!==E){var n,r,a="west"===t?-Math.abs(E):Math.abs(E);w(a),l(m(m({},o),{},{coordinate:m(m({},o.coordinate),{},{latitude:null!==(n=null===(r=o.coordinate)||void 0===r?void 0:r.latitude)&&void 0!==n?n:null,longitude:a})}))}},disabled:!a},r.createElement("option",{value:"east"},"E"),r.createElement("option",{value:"west"},"W")),r.createElement(i.U9,{className:"flex ".concat(null===E?"warning":""),type:"number",step:"0.01",value:null!==E?Math.abs(E):"",onChange:function(e){w(parseFloat(e.target.value))},onBlur:function(e){if(null!==E&&(E<0||E>180))s.oR.warn("Longitude must be between 0 and 180."),w(null);else if(null!==E){var t,n,r=Number(e.target.value);"west"==j&&(r=-1*Math.abs(r)),w(r),l(m(m({},o),{},{coordinate:m(m({},o.coordinate),{},{longitude:r,latitude:null!==(t=null===(n=o.coordinate)||void 0===n?void 0:n.latitude)&&void 0!==t?t:null})}))}},disabled:!a}),r.createElement(i.JH,{onClick:u,disabled:!a},r.createElement("i",{className:"fa-solid fa-xmark"}))))};function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function S(){S=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var a=t&&t.prototype instanceof y?t:y,i=Object.create(a.prototype),l=new P(r||[]);return o(i,"_invoke",{value:T(e,n,l)}),i}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var d="suspendedStart",v="suspendedYield",p="executing",h="completed",m={};function y(){}function g(){}function b(){}var E={};c(E,i,(function(){return this}));var O=Object.getPrototypeOf,x=O&&O(O(L([])));x&&x!==n&&r.call(x,i)&&(E=x);var A=b.prototype=y.prototype=Object.create(E);function j(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(o,a,i,l){var u=f(e[o],e,a);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==w(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(s).then((function(e){c.value=e,i(c)}),(function(e){return n("throw",e,i,l)}))}l(u.arg)}var a;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return a=a?a.then(o,o):o()}})}function T(t,n,r){var o=d;return function(a,i){if(o===p)throw Error("Generator is already running");if(o===h){if("throw"===a)throw i;return{value:e,done:!0}}for(r.method=a,r.arg=i;;){var l=r.delegate;if(l){var u=_(l,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var c=f(t,n,r);if("normal"===c.type){if(o=r.done?h:v,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=h,r.method="throw",r.arg=c.arg)}}}function _(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,_(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=f(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw new TypeError(w(t)+" is not iterable")}return g.prototype=b,o(A,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=c(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,u,"GeneratorFunction")),e.prototype=Object.create(A),e},t.awrap=function(e){return{__await:e}},j(C.prototype),c(C.prototype,l,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new C(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},j(A),c(A,u,"Generator"),c(A,i,(function(){return this})),c(A,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=L,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return l.type="throw",l.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:L(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}function O(e,t,n,r,o,a,i){try{var l=e[a](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,o)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){O(a,r,o,i,l,"next",e)}function l(e){O(a,r,o,i,l,"throw",e)}i(void 0)}))}}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return(t=function(e){var t=function(e){if("object"!=w(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==w(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return N(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}const P=function(){var e=(0,u.A)(),t=e.gatesState,n=e.updateGatesHook,d=_((0,r.useState)([]),2),v=d[0],p=d[1],h=(0,c.A)(),m=h.workspaceState,y=h.postAddRouteAsyncHook,g=h.putRouteAsyncHook,b=h.putRoutesAsyncHook,w=m.route,O=m.routes,A=_((0,r.useState)(m.route),2),C=A[0],k=A[1],N=_((0,r.useState)(m.routes),2),P=N[0],L=N[1],D=_((0,r.useState)(!1),2),I=D[0],G=D[1],R=(0,l.g)().url;(0,r.useEffect)((function(){p(t)}),[t]),(0,r.useEffect)((function(){k(w)}),[w]),(0,r.useEffect)((function(){L(O)}),[O]),(0,r.useEffect)((function(){console.log("Updated gates after set:",v),Z(v)}),[v]),(0,r.useEffect)((function(){var e=document.getElementById("sortable-gates");if(e&&I){var t=f.Ay.create(e,{onEnd:function(e){var t=T(v);if(null!=e.oldIndex&&null!=e.newIndex){var n=_(t.splice(e.oldIndex,1),1)[0];t.splice(e.newIndex,0,n);var r=t.map((function(e,t){return j(j({},e),{},{sequence:t})}));p(r)}}});return function(){t.destroy()}}}),[I,v]);var M=(0,r.useCallback)(x(S().mark((function e(){return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!R){e.next=17;break}return e.prev=1,console.log("save : ",v),e.next=5,n(R,v);case 5:return e.next=7,g(R,C);case 7:return e.next=9,b(R,P);case 9:G(!1),s.oR.dismiss(),s.oR.success("The gates have been successfully updated"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),s.oR.error("Failed to update the gates");case 17:case"end":return e.stop()}}),e,null,[[1,14]])}))),[n,g,b,R,v,w,O]),B=function(){var e=x(S().mark((function e(t){var n,r,o,a,i;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("createRoute"!==(n=t.target.value)||!R){e.next=22;break}return e.prev=2,e.next=5,y(R,{id:0,name:"New Route",coordinates:[]});case 5:return r=e.sent,k(r),L((function(e){return[].concat(T(e),[r])})),o=U(v,r),p(o),e.next=12,b(R,[].concat(T(O),[r]));case 12:s.oR.dismiss(),s.oR.success("New route created and gates updated"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),s.oR.error("Failed to create route"),console.error("Error creating new route:",e.t0);case 20:e.next=24;break;case 22:(a=O.find((function(e){return e.id.toString()===n})))&&(k(a),i=U(v,a),p(i));case 24:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}(),U=(0,r.useCallback)((function(e,t){var n=e.map((function(e,n){return j(j({},e),{},{coordinate:t.coordinates[n]||{latitude:null,longitude:null}})}));if(e.length<t.coordinates.length)for(var r=e.length;r<t.coordinates.length;r++)n.push({id:0,sequence:r,time:null,coordinate:{latitude:t.coordinates[r].latitude,longitude:t.coordinates[r].longitude},traveledDistance:null});return n}),[]),V=(0,r.useCallback)((function(){p((function(e){return[].concat(T(e),[F(e.length)])}))}),[]),F=(0,r.useCallback)((function(e){return{id:0,sequence:e,time:null,coordinate:{latitude:null,longitude:null},traveledDistance:null}}),[]),Z=(0,r.useCallback)((function(e){var t=e.map((function(e){return e.coordinate}));if(C){var n=j(j({},C),{},{coordinates:t});k(n);var r=null==P?void 0:P.map((function(e){return e.id===n.id?j(j({},e),{},{coordinates:t}):e}));L(r)}}),[C,P]),H=(0,r.useCallback)((function(e){p((function(t){return t.filter((function(t,n){return n!==e}))}))}),[]);return r.createElement(i.UC,{style:{height:"calc((100vh - 126px) / 2)"}},r.createElement(i.UC,{style:{height:"120px"}},r.createElement(i.wV,{style:{justifyContent:"space-between",alignItems:"center"}},I&&r.createElement(i.By,{onClick:V},"Add New Gate"),r.createElement(i.OQ,{style:{margin:"0 auto"},value:(null==C?void 0:C.id)||"createRoute",onChange:B,disabled:!I},P.map((function(e,t){return r.createElement("option",{key:t,value:e.id},e.name)})),r.createElement("option",{value:"createRoute"},"Change Route Directly")),r.createElement("div",{style:{display:"inline-flex",gap:"10px"}},I?r.createElement(i.By,{onClick:function(){return M()}},"Save"):r.createElement(i.By,{onClick:function(){G(!0)}},"Modify"))),r.createElement(i.wV,null,r.createElement(i.lV,{className:"width70px"},"Gate",r.createElement("br",null),"Number"),r.createElement(i.lV,{className:"width120px"},"Time",r.createElement("br",null),"MMDD hhmmss"),r.createElement(i.lV,{className:"flex"},"Latitude"),r.createElement(i.lV,{className:"flex"},"Longitude"),r.createElement(i.JH,{style:{visibility:"hidden"}},"X"),r.createElement("div",{className:"width6px"}))),r.createElement(a.a,{style:{height:"calc((100vh - 126px) / 2) - 120px"}},r.createElement(o.ur,null,r.createElement("div",{id:"sortable-gates"},v.map((function(e,t){return r.createElement(E,{key:e.id,keyValue:e.sequence,gateState:e,isModify:I,onGateChange:function(e){return function(e,t){p((function(n){return n.map((function(n,r){return r===e?t:n}))}))}(t,e)},handleRemoveGate:function(){return H(t)}})}))))))};var L=n(5878);function D(e){return e==L.aZ.FIRST_GATE?"first gate":e==L.aZ.LAST_GATE?"last gate":e==L.aZ.SELECTED_POINT?"selected point":e==L.aZ.CURRENT_POINT?"current point":e==L.aZ.PREVIOUS_GATE_BASED_ON_SELECTED?"previous gate based on selected":e==L.aZ.LATEST_GATE_BASED_ON_SELECTED?"latest gate based on selected":e==L.aZ.NEXT_GATE_BASED_ON_SELECTED?"next gate based on selected":e==L.aZ.PREVIOUS_GATE_BASED_ON_CURRENT?"previous gate based on current":e==L.aZ.LATEST_GATE_BASED_ON_CURRENT?"latest gate based on current":e==L.aZ.NEXT_GATE_BASED_ON_CURRENT?"next gate based on current":void 0}var I=n(8779),G=n(437),R=n(6375);function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}const U=function(e){var t=e.keyValue,n=e.start,o=e.end,a=e.sectionDatas,l=e.speedPredictionInterval,c=(0,u.A)().gatesState,s=(0,I.A)().playbarState,f=M((0,r.useState)(null),2),d=f[0],p=f[1],h=M((0,r.useState)(null),2),m=h[0],y=h[1],g=M((0,r.useState)(null),2),b=g[0],E=g[1],w=M((0,r.useState)(null),2),S=w[0],O=w[1],x=M((0,r.useState)(null),2),A=x[0],j=x[1],C=M((0,r.useState)(null),2),T=C[0],_=C[1],k=M((0,r.useState)(null),2),N=k[0],P=k[1];(0,r.useEffect)((function(){p((0,G.CT)(s,n)),y((0,G.CT)(s,o));var e=(0,G.gd)(d,m);E(e);var t=(0,G.Ye)(d,m);O(t);var r=(0,G.r8)(d,m);_(r);var a,i,u,c,f=null,v=null,h=null;if(l==L.sH.FIRST)null!=s&&null!==(a=s.firstGate)&&void 0!==a&&a.time&&null!=s&&null!==(i=s.latestGateBasedOnCurrent)&&void 0!==i&&i.time&&(v=null==s||null===(u=s.firstGate)||void 0===u?void 0:u.time,f=null==s||null===(c=s.latestGateBasedOnCurrent)||void 0===c?void 0:c.time,h=(0,G.gd)(null==s?void 0:s.firstGate,null==s?void 0:s.latestGateBasedOnCurrent));else if(l==L.sH.PREVIOUS){var g,w,S,x;null!=s&&null!==(g=s.previousGateBasedOnCurrent)&&void 0!==g&&g.time&&null!=s&&null!==(w=s.latestGateBasedOnCurrent)&&void 0!==w&&w.time&&(v=null==s||null===(S=s.previousGateBasedOnCurrent)||void 0===S?void 0:S.time,f=null==s||null===(x=s.latestGateBasedOnCurrent)||void 0===x?void 0:x.time,h=(0,G.gd)(null==s?void 0:s.previousGateBasedOnCurrent,null==s?void 0:s.latestGateBasedOnCurrent))}if(f&&v&&h){var A=h/(new Date(f).getTime()-new Date(v).getTime());P(3600*A),b&&j(b/A)}}),[n,o,c,s,d,m,l,b]);var B=(0,r.useCallback)((function(){}),[]);return r.createElement(i.UC,null,3===t&&r.createElement(R.vD,{onClick:B}),r.createElement(i.wV,null,r.createElement(i.lV,{className:"width300px"},D(n)," ~ ",D(o)),a.map((function(e,t){return r.createElement(i.lV,{key:"".concat(e,"-").concat(t),className:"flex"},e===L.uK.DISTANCE&&null!==b?(0,G.mr)(b):"",e===L.uK.ELAPSED_TIME&&null!==S?v(S):"",e===L.uK.ESTIMATED_TIME&&null!==A?v(A):"",e===L.uK.ELAPSED_SPEED&&null!==T?(0,G.mr)(T):"",e===L.uK.ESTIMATED_SPEED&&null!==N?(0,G.mr)(N):"")}))))};var V=n(7180);const F=function(){var e=(0,V.A)().settingState,t=e.displaySections,n=e.sectionDatas,l=e.speedPredictionInterval;return r.createElement(i.UC,{style:{height:"calc((100vh - 126px) / 2)"}},r.createElement(i.UC,{style:{height:"60px"}},r.createElement(i.wV,null,r.createElement(i.lV,{className:"width300px"},"Gate Range"),n.map((function(e,t){return r.createElement(i.lV,{key:"".concat(e,"-").concat(t),className:"flex"},e.charAt(0).toUpperCase()+e.slice(1).toLowerCase().replace("_"," "),r.createElement("br",null),(0,G.c3)(e)," ")})))),r.createElement(a.a,{style:{height:"calc((100vh - 126px) / 2) - 60px"}},r.createElement(o.ur,null,t.map((function(e,t){return r.createElement(U,{key:t+1,keyValue:t,start:e.start,end:e.end,sectionDatas:n,speedPredictionInterval:l})})))))},Z=function(){return r.createElement(r.Fragment,null,r.createElement(a.w,null,r.createElement(P,null)),r.createElement(a.w,null,r.createElement(F,null)))}},8639:(e,t,n)=>{n.d(t,{a:()=>u,w:()=>l});var r,o,a=n(3530);function i(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l=a.A.section(r||(r=i(["\n  margin: 0 10px 10px 10px;\n  border: 1px solid #eee;\n  display: flex;\n  flex-direction: column;\n"]))),u=a.A.div(o||(o=i(["\n  width: 100%;\n  display: flex;\n  flex: 1;\n"])))}}]);
//# sourceMappingURL=677.js.map