/*! For license information please see 677.js.LICENSE.txt */
"use strict";(self.webpackChunkmq_navigator3_0client=self.webpackChunkmq_navigator3_0client||[]).push([[677],{6677:(t,e,n)=>{n.r(e),n.d(e,{default:()=>H});var r=n(6540),o=n(7767),a=n(2295),i=n(8639),l=n(8046),u=(n(2216),n(216)),c=n(7525),s=n(2845),f=n(246);function d(t){var e=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),r=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return"".concat(e).concat(n," ").concat(r).concat(o).concat(a)}function v(t){var e=Math.floor(t/36e5),n=Math.floor(t%36e5/6e4),r=Math.floor(t%6e4/1e3);return"".concat(String(e).padStart(2,"0"),":").concat(String(n).padStart(2,"0"),":").concat(String(r).padStart(2,"0"))}function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return(e=function(t){var e=function(t){if("object"!=p(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==p(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}const E=function(t){var e,n,o=t.gateState,a=t.isModify,i=t.onGateChange,u=t.handleRemoveGate,c=g((0,r.useState)(o.time?d(new Date(o.time)):null),2),f=c[0],v=c[1],p=g((0,r.useState)(o.coordinate?o.coordinate.latitude:null),2),h=p[0],y=p[1],b=g((0,r.useState)(o.coordinate?o.coordinate.longitude:null),2),E=b[0],w=b[1],S=g((0,r.useState)(null!==(e=o.coordinate)&&void 0!==e&&e.latitude?o.coordinate.latitude>=0?"north":"south":null),2),O=S[0],x=S[1],A=g((0,r.useState)(null!==(n=o.coordinate)&&void 0!==n&&n.longitude?o.coordinate.longitude>=0?"east":"west":null),2),j=A[0],C=A[1];(0,r.useEffect)((function(){var t,e,n,r;v(o.time?d(new Date(o.time)):null),y(o.coordinate?o.coordinate.latitude:null),w(o.coordinate?o.coordinate.longitude:null),null!==(null===(t=o.coordinate)||void 0===t?void 0:t.latitude)&&void 0!==(null===(e=o.coordinate)||void 0===e?void 0:e.latitude)&&x(o.coordinate.latitude>=0?"north":"south"),null!==(null===(n=o.coordinate)||void 0===n?void 0:n.longitude)&&void 0!==(null===(r=o.coordinate)||void 0===r?void 0:r.longitude)&&C(o.coordinate.longitude>=0?"east":"west")}),[o.coordinate,o.time]);var T=(0,r.useCallback)((function(t){var e=t.target.value,n=function(t){if(!/^\d{4} \d{6}$/.test(t))return null;var e=parseInt(t.slice(0,2),10)-1,n=parseInt(t.slice(2,4),10),r=parseInt(t.slice(5,7),10),o=parseInt(t.slice(7,9),10),a=parseInt(t.slice(9,11),10),i=new Date((new Date).getFullYear(),e,n,r,o,a);return i.getMonth()!==e||i.getDate()!==n?null:i}(e);if(!n)return s.oR.warn("Invalid time format or date. Please use MMDD hhmmss."),void v(o.time?d(new Date(o.time)):null);console.log("formattedTime ",n);var r,a,l,u,c,f,p,h,y=(a=(r=n).getFullYear(),l=String(r.getMonth()+1).padStart(2,"0"),u=String(r.getDate()).padStart(2,"0"),c=String(r.getHours()).padStart(2,"0"),f=String(r.getMinutes()).padStart(2,"0"),p=String(r.getSeconds()).padStart(2,"0"),h=String(r.getMilliseconds()).padStart(3,"0"),"".concat(a,"-").concat(l,"-").concat(u,"T").concat(c,":").concat(f,":").concat(p,".").concat(h));console.log("formattedTime ",y),v(e),i(m(m({},o),{},{time:y})),s.oR.dismiss(),s.oR.success("Time has been successfully converted")}),[o,i]);return r.createElement(l.UC,null,r.createElement(l.wV,null,r.createElement(l.lV,{className:"width70px"},o.sequence),r.createElement(l.U9,{className:"width120px",value:f||"",onChange:function(t){v(t.target.value)},onBlur:T,disabled:!a}),r.createElement(l.OQ,{className:"width50px",value:O||"",onChange:function(t){var e=t.target.value;if(x(e),null!==h){var n,r,a="south"===e?-Math.abs(h):Math.abs(h);y(a),i(m(m({},o),{},{coordinate:m(m({},o.coordinate),{},{latitude:a,longitude:null!==(n=null===(r=o.coordinate)||void 0===r?void 0:r.longitude)&&void 0!==n?n:null})}))}},disabled:!a},r.createElement("option",{value:"north"},"N"),r.createElement("option",{value:"south"},"S")),r.createElement(l.U9,{className:"flex ".concat(null===h?"warning":""),type:"number",step:"0.01",value:null!==h?Math.abs(h):"",onChange:function(t){y(parseFloat(t.target.value))},onBlur:function(t){if(null!==h&&(h<0||h>90))s.oR.warn("Latitude must be between 0 and 90."),y(null);else if(null!==h){var e,n,r=Number(t.target.value);"south"==O&&(r=-1*Math.abs(r)),y(r),i(m(m({},o),{},{coordinate:m(m({},o.coordinate),{},{latitude:r,longitude:null!==(e=null===(n=o.coordinate)||void 0===n?void 0:n.longitude)&&void 0!==e?e:null})}))}},disabled:!a}),r.createElement(l.OQ,{className:"width50px",value:j||"",onChange:function(t){var e=t.target.value;if(C(e),null!==E){var n,r,a="west"===e?-Math.abs(E):Math.abs(E);w(a),i(m(m({},o),{},{coordinate:m(m({},o.coordinate),{},{latitude:null!==(n=null===(r=o.coordinate)||void 0===r?void 0:r.latitude)&&void 0!==n?n:null,longitude:a})}))}},disabled:!a},r.createElement("option",{value:"east"},"E"),r.createElement("option",{value:"west"},"W")),r.createElement(l.U9,{className:"flex ".concat(null===E?"warning":""),type:"number",step:"0.01",value:null!==E?Math.abs(E):"",onChange:function(t){w(parseFloat(t.target.value))},onBlur:function(t){if(null!==E&&(E<0||E>180))s.oR.warn("Longitude must be between 0 and 180."),w(null);else if(null!==E){var e,n,r=Number(t.target.value);"west"==j&&(r=-1*Math.abs(r)),w(r),i(m(m({},o),{},{coordinate:m(m({},o.coordinate),{},{longitude:r,latitude:null!==(e=null===(n=o.coordinate)||void 0===n?void 0:n.latitude)&&void 0!==e?e:null})}))}},disabled:!a}),r.createElement(l.JH,{onClick:u,disabled:!a},r.createElement("i",{className:"fa-solid fa-xmark"}))))};var w=n(8779);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function O(){O=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof y?e:y,i=Object.create(a.prototype),l=new N(r||[]);return o(i,"_invoke",{value:T(t,n,l)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var d="suspendedStart",v="suspendedYield",p="executing",h="completed",m={};function y(){}function g(){}function b(){}var E={};c(E,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==n&&r.call(x,i)&&(E=x);var A=b.prototype=y.prototype=Object.create(E);function j(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function n(o,a,i,l){var u=f(t[o],t,a);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==S(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,i,l)}),(function(t){n("throw",t,i,l)})):e.resolve(s).then((function(t){c.value=t,i(c)}),(function(t){return n("throw",t,i,l)}))}l(u.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function T(e,n,r){var o=d;return function(a,i){if(o===p)throw Error("Generator is already running");if(o===h){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var l=r.delegate;if(l){var u=_(l,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var c=f(e,n,r);if("normal"===c.type){if(o=r.done?h:v,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=h,r.method="throw",r.arg=c.arg)}}}function _(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=f(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(S(e)+" is not iterable")}return g.prototype=b,o(A,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=c(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,u,"GeneratorFunction")),t.prototype=Object.create(A),t},e.awrap=function(t){return{__await:t}},j(C.prototype),c(C.prototype,l,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new C(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(A),c(A,u,"Generator"),c(A,i,(function(){return this})),c(A,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return l.type="throw",l.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),D(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;D(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function x(t,e,n,r,o,a,i){try{var l=t[a](i),u=l.value}catch(t){return void n(t)}l.done?e(u):Promise.resolve(u).then(r,o)}function A(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){x(a,r,o,i,l,"next",t)}function l(t){x(a,r,o,i,l,"throw",t)}i(void 0)}))}}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t,e,n){return(e=function(t){var e=function(t){if("object"!=S(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==S(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t){return function(t){if(Array.isArray(t))return N(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||D(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t,e)||D(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){if(t){if("string"==typeof t)return N(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}const P=function(){var t=(0,u.A)(),e=t.gatesState,n=t.updateGatesHook,d=k((0,r.useState)([]),2),v=d[0],p=d[1],h=(0,c.A)(),m=h.workspaceState,y=h.postAddRouteAsyncHook,g=h.putRouteAsyncHook,b=h.putRoutesAsyncHook,S=m.route,x=m.routes,j=k((0,r.useState)(m.route),2),T=j[0],D=j[1],N=k((0,r.useState)(m.routes),2),P=N[0],L=N[1],I=(0,w.A)().isLive,G=(0,o.KC)().setIsModify,R=k((0,r.useState)(!1),2),M=R[0],B=R[1],U=(0,o.g)().url;(0,r.useEffect)((function(){p(e)}),[e]),(0,r.useEffect)((function(){D(S)}),[S]),(0,r.useEffect)((function(){L(x)}),[x]),(0,r.useEffect)((function(){K(v)}),[v]),(0,r.useEffect)((function(){var t=document.getElementById("sortable-gates");if(t&&M){var e=f.Ay.create(t,{onEnd:function(t){var e=_(v);if(null!=t.oldIndex&&null!=t.newIndex){var n=k(e.splice(t.oldIndex,1),1)[0];e.splice(t.newIndex,0,n);var r=e.map((function(t,e){return C(C({},t),{},{sequence:e})}));p(r)}}});return function(){e.destroy()}}}),[M,v]);var V=(0,r.useCallback)(A(O().mark((function t(){return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!U){t.next=17;break}return t.prev=1,t.next=4,n(U,v);case 4:return t.next=6,g(U,T);case 6:return t.next=8,b(U,P);case 8:B(!1),G(!1),s.oR.dismiss(),s.oR.success("The gates have been successfully updated"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),s.oR.error("Failed to update the gates");case 17:case"end":return t.stop()}}),t,null,[[1,14]])}))),[n,g,b,U,v,S,x]),F=function(){var t=A(O().mark((function t(e){var n,r,o,a,i;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("createRoute"!==(n=e.target.value)||!U){t.next=22;break}return t.prev=2,t.next=5,y(U,{id:0,name:"New Route",coordinates:[]});case 5:return r=t.sent,D(r),L((function(t){return[].concat(_(t),[r])})),o=H(v,r),p(o),t.next=12,b(U,[].concat(_(x),[r]));case 12:s.oR.dismiss(),s.oR.success("New route created and gates updated"),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(2),s.oR.error("Failed to create route"),console.error("Error creating new route:",t.t0);case 20:t.next=24;break;case 22:(a=x.find((function(t){return t.id.toString()===n})))&&(D(a),i=H(v,a),p(i));case 24:case"end":return t.stop()}}),t,null,[[2,16]])})));return function(e){return t.apply(this,arguments)}}(),H=(0,r.useCallback)((function(t,e){var n=t.map((function(t,n){return C(C({},t),{},{coordinate:e.coordinates[n]||{latitude:null,longitude:null}})}));if(t.length<e.coordinates.length)for(var r=t.length;r<e.coordinates.length;r++)n.push({id:0,sequence:r,time:null,coordinate:{latitude:e.coordinates[r].latitude,longitude:e.coordinates[r].longitude},traveledDistance:null});return n}),[]),Z=(0,r.useCallback)((function(){p((function(t){return[].concat(_(t),[q(t[t.length-1],t.length)])}))}),[]),q=(0,r.useCallback)((function(t,e){var n,r;return{id:0,sequence:e,time:t.time||null,coordinate:{latitude:(null===(n=t.coordinate)||void 0===n?void 0:n.latitude)||null,longitude:(null===(r=t.coordinate)||void 0===r?void 0:r.longitude)||null},traveledDistance:t.traveledDistance||null}}),[]),K=(0,r.useCallback)((function(t){var e=t.map((function(t){return t.coordinate}));if(T){var n=C(C({},T),{},{coordinates:e});D(n);var r=null==P?void 0:P.map((function(t){return t.id===n.id?C(C({},t),{},{coordinates:e}):t}));L(r)}}),[T,P]),Y=(0,r.useCallback)((function(t){p((function(e){return e.filter((function(e,n){return n!==t}))}))}),[]);return r.createElement(l.UC,{style:{height:"calc((100vh - 126px) / 2)"}},r.createElement(l.UC,{style:{height:"120px"}},r.createElement(l.wV,{style:{justifyContent:"center",alignItems:"center",height:"53px",position:"relative"}},M&&r.createElement(l.By,{style:{position:"absolute",left:"10px"},onClick:Z},"Add New Gate"),r.createElement(l.OQ,{style:{margin:"0 auto",position:"absolute"},value:(null==T?void 0:T.id)||"createRoute",onChange:F,disabled:!M},P.map((function(t,e){return r.createElement("option",{key:e,value:t.id},t.name)})),r.createElement("option",{value:"createRoute"},"Change Route Directly")),!I&&(M?r.createElement(l.By,{style:{position:"absolute",right:"0"},onClick:function(){return V()}},"Save"):r.createElement(l.By,{style:{position:"absolute",right:"0"},onClick:function(){return B(!0),void G(!0)}},"Modify"))),r.createElement(l.wV,null,r.createElement(l.lV,{className:"width70px"},"Gate",r.createElement("br",null),"Number"),r.createElement(l.lV,{className:"width120px"},"Time",r.createElement("br",null),"MMDD hhmmss"),r.createElement(l.lV,{className:"flex"},"Latitude"),r.createElement(l.lV,{className:"flex"},"Longitude"),r.createElement(l.JH,{style:{visibility:"hidden"}},"X"),r.createElement("div",{className:"width6px"}))),r.createElement(i.a,{style:{height:"calc((100vh - 126px) / 2) - 120px"}},r.createElement(a.ur,null,r.createElement("div",{id:"sortable-gates"},v.map((function(t,e){return r.createElement(E,{key:"".concat(t.id,"-").concat(e),keyValue:t.sequence,gateState:t,isModify:M,onGateChange:function(t){return function(t,e){p((function(n){return n.map((function(n,r){return r===t?e:n}))}))}(e,t)},handleRemoveGate:function(){return Y(e)}})}))))))};var L=n(5878);function I(t){return t==L.aZ.FIRST_GATE?"first gate":t==L.aZ.LAST_GATE?"last gate":t==L.aZ.SELECTED_POINT?"selected point":t==L.aZ.CURRENT_POINT?"current point":t==L.aZ.PREVIOUS_GATE_BASED_ON_SELECTED?"previous gate based on selected":t==L.aZ.LATEST_GATE_BASED_ON_SELECTED?"latest gate based on selected":t==L.aZ.NEXT_GATE_BASED_ON_SELECTED?"next gate based on selected":t==L.aZ.PREVIOUS_GATE_BASED_ON_CURRENT?"previous gate based on current":t==L.aZ.LATEST_GATE_BASED_ON_CURRENT?"latest gate based on current":t==L.aZ.NEXT_GATE_BASED_ON_CURRENT?"next gate based on current":void 0}var G=n(437),R=n(6375);function M(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return B(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}const U=function(t){var e=t.keyValue,n=t.start,o=t.end,a=t.sectionDatas,i=t.speedPredictionInterval,c=(0,u.A)().gatesState,s=(0,w.A)().playbarState,f=M((0,r.useState)(null),2),d=f[0],p=f[1],h=M((0,r.useState)(null),2),m=h[0],y=h[1],g=M((0,r.useState)(null),2),b=g[0],E=g[1],S=M((0,r.useState)(null),2),O=S[0],x=S[1],A=M((0,r.useState)(null),2),j=A[0],C=A[1],T=M((0,r.useState)(null),2),_=T[0],k=T[1],D=M((0,r.useState)(null),2),N=D[0],P=D[1];(0,r.useEffect)((function(){p((0,G.CT)(s,n)),y((0,G.CT)(s,o));var t=(0,G.gd)(d,m);E(t);var e=(0,G.Ye)(d,m);x(e);var r=(0,G.r8)(d,m);k(r);var a,l,u,c,f=null,v=null,h=null;if(i==L.sH.FIRST)null!=s&&null!==(a=s.firstGate)&&void 0!==a&&a.time&&null!=s&&null!==(l=s.latestGateBasedOnCurrent)&&void 0!==l&&l.time&&(v=null==s||null===(u=s.firstGate)||void 0===u?void 0:u.time,f=null==s||null===(c=s.latestGateBasedOnCurrent)||void 0===c?void 0:c.time,h=(0,G.gd)(null==s?void 0:s.firstGate,null==s?void 0:s.latestGateBasedOnCurrent));else if(i==L.sH.PREVIOUS){var g,w,S,O;null!=s&&null!==(g=s.previousGateBasedOnCurrent)&&void 0!==g&&g.time&&null!=s&&null!==(w=s.latestGateBasedOnCurrent)&&void 0!==w&&w.time&&(v=null==s||null===(S=s.previousGateBasedOnCurrent)||void 0===S?void 0:S.time,f=null==s||null===(O=s.latestGateBasedOnCurrent)||void 0===O?void 0:O.time,h=(0,G.gd)(null==s?void 0:s.previousGateBasedOnCurrent,null==s?void 0:s.latestGateBasedOnCurrent))}if(f&&v&&h){var A=h/(new Date(f).getTime()-new Date(v).getTime());P(3600*A),b&&C(b/A)}}),[n,o,c,s,d,m,i,b]);var B=(0,r.useCallback)((function(){}),[]);return r.createElement(l.UC,null,3===e&&r.createElement(R.vD,{onClick:B}),r.createElement(l.wV,null,r.createElement(l.lV,{className:"width300px"},I(n)," ~ ",I(o)),a.map((function(t,e){return r.createElement(l.lV,{key:"".concat(t,"-").concat(e),className:"flex"},t===L.uK.DISTANCE&&null!==b?(0,G.mr)(b):"",t===L.uK.ELAPSED_TIME&&null!==O?v(O):"",t===L.uK.ESTIMATED_TIME&&null!==j?v(j):"",t===L.uK.ELAPSED_SPEED&&null!==_?(0,G.mr)(_):"",t===L.uK.ESTIMATED_SPEED&&null!==N?(0,G.mr)(N):"")}))))};var V=n(7180);const F=function(){var t=(0,V.A)().settingState,e=t.displaySections,n=t.sectionDatas,o=t.speedPredictionInterval;return r.createElement(l.UC,{style:{height:"calc((100vh - 126px) / 2)"}},r.createElement(l.UC,{style:{height:"60px"}},r.createElement(l.wV,null,r.createElement(l.lV,{className:"width300px"},"Gate Range"),n.map((function(t,e){return r.createElement(l.lV,{key:"".concat(t,"-").concat(e),className:"flex"},t.charAt(0).toUpperCase()+t.slice(1).toLowerCase().replace("_"," "),r.createElement("br",null),(0,G.c3)(t)," ")})))),r.createElement(i.a,{style:{height:"calc((100vh - 126px) / 2) - 60px"}},r.createElement(a.ur,null,e.map((function(t,e){return r.createElement(U,{key:e+1,keyValue:e,start:t.start,end:t.end,sectionDatas:n,speedPredictionInterval:o})})))))},H=function(){return r.createElement(r.Fragment,null,r.createElement(i.w,null,r.createElement(P,null)),r.createElement(i.w,null,r.createElement(F,null)))}},8639:(t,e,n)=>{n.d(e,{a:()=>u,w:()=>l});var r,o,a=n(3530);function i(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var l=a.A.section(r||(r=i(["\n  margin: 0 10px 10px 10px;\n  border: 1px solid #eee;\n  display: flex;\n  flex-direction: column;\n"]))),u=a.A.div(o||(o=i(["\n  width: 100%;\n  display: flex;\n  flex: 1;\n"])))}}]);
//# sourceMappingURL=677.js.map