"use strict";(self.webpackChunkmq_navigator3_0client=self.webpackChunkmq_navigator3_0client||[]).push([[314],{9065:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(6540);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}const o=function(e){var n,t,o=(n=(0,r.useState)(e),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o,l,i=[],u=!0,c=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=o.call(t)).done)&&(i.push(r.value),i.length!==n);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(n,t)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],i=o[1];return[l,(0,r.useCallback)((function(e){i(e.target.value)}),[]),i]}},2314:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});var r=t(9065),a=t(6942),o=t(6540),l=t(7767),i=t(4976),u=t(5476),c=t(2845);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o,l,i=[],u=!0,c=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=o.call(t)).done)&&(i.push(r.value),i.length!==n);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return d(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}const p=function(){var e=(0,l.Zp)(),n=(0,u.A)(),t=n.doLogin,d=n.memberState,p=n.doSignup,m=((0,l.zy)().state||{from:{pathname:"/workspace/mqnavigator"}}).from,f=(0,u.A)().updateUrlAfterLogin,g=s((0,r.A)(""),2),b=g[0],h=g[1],v=s((0,r.A)(""),2),x=v[0],y=v[1],w=s((0,r.A)(""),3),A=w[0],E=w[2],k=s((0,r.A)(""),3),S=k[0],_=k[2],C=s((0,o.useState)(!1),2),j=C[0],O=C[1],z=s((0,o.useState)(!1),2),U=z[0],$=z[1],I=s((0,o.useState)(!1),2),D=I[0],J=I[1],V=(0,o.useCallback)((function(e){E(e.target.value),J(S!==e.target.value)}),[S,E]),q=(0,o.useCallback)((function(e){_(e.target.value),J(A!==e.target.value)}),[A,_]),L=(0,o.useCallback)((function(e){e.preventDefault(),x&&x.trim()&&(D||(O(!1),$(!1),p({email:b,nickname:x,password:A}).then((function(){c.oR.dismiss(),c.oR.success("Signup was successful",{closeOnClick:!0}),f().then()})).catch((function(e){var n,t;console.log(null===(n=e.response)||void 0===n?void 0:n.data),c.oR.error("Failed to signup",{position:"bottom-center"}),O(403===(null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.code))}))))}),[t,b,D,x,A,f]);return(0,o.useEffect)((function(){d.email&&e(m.pathname,{replace:!0})}),[d.email,m.pathname,e]),o.createElement(o.Fragment,null,o.createElement(a.Y9,null,"MQ-Navigator"),o.createElement(a.lV,{onSubmit:L},o.createElement(a.JU,{id:"email-label"},o.createElement("span",null,"이메일 주소"),o.createElement("div",null,o.createElement(a.pd,{type:"email",id:"email",name:"email",value:b,onChange:h}))),o.createElement(a.JU,{id:"nickname-label"},o.createElement("span",null,"닉네임"),o.createElement("div",null,o.createElement(a.pd,{type:"text",id:"nickname",name:"nickname",value:x,onChange:y}))),o.createElement(a.JU,{id:"password-label"},o.createElement("span",null,"비밀번호"),o.createElement("div",null,o.createElement(a.pd,{type:"password",id:"password",name:"password",value:A,onChange:V}))),o.createElement(a.JU,{id:"password-check-label"},o.createElement("span",null,"비밀번호 확인"),o.createElement("div",null,o.createElement(a.pd,{type:"password",id:"password-check",name:"password-check",value:S,onChange:q})),D&&o.createElement(a.$D,null,"비밀번호가 일치하지 않습니다."),!x&&o.createElement(a.$D,null,"닉네임을 입력해주세요."),j&&o.createElement(a.$D,null,"이미 가입된 이메일입니다."),U&&o.createElement(a.wV,null,"회원가입되었습니다! 로그인해주세요.")),o.createElement(a.$n,{type:"submit"},"회원가입")),o.createElement(a.mu,null,"이미 회원이신가요? ",o.createElement(i.N_,{to:"/member/login"},"로그인 하러가기")))}},6942:(e,n,t)=>{t.d(n,{$D:()=>v,$n:()=>h,JU:()=>g,Y9:()=>m,lV:()=>f,mu:()=>y,pd:()=>b,wV:()=>x});var r,a,o,l,i,u,c,s,d=t(3530);function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var m=d.A.header(r||(r=p(["\n  text-align: center;\n  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 46px;\n  letter-spacing: -0.75px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n"]))),f=d.A.form(a||(a=p(["\n  margin: 0 auto;\n  width: 400px;\n  max-width: 400px;\n"]))),g=d.A.label(o||(o=p(["\n  margin-bottom: 16px;\n\n  & > span {\n    display: block;\n    text-align: left;\n    padding-bottom: 8px;\n    font-size: 15px;\n    cursor: pointer;\n    line-height: 1.46666667;\n    font-weight: 700;\n  }\n"]))),b=d.A.input(l||(l=p(["\n  border-radius: 4px;\n  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);\n  border: 1px solid var(--saf-0);\n  transition: border 80ms ease-out, box-shadow 80ms ease-out;\n  box-sizing: border-box;\n  margin: 0 0 20px;\n  width: 100%;\n  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);\n  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);\n  padding: 12px;\n  height: 44px;\n  padding-top: 11px;\n  padding-bottom: 13px;\n  font-size: 18px;\n  line-height: 1.33333333;\n\n  &:focus {\n    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);\n  }\n"]))),h=d.A.button(i||(i=p(["\n  margin-bottom: 12px;\n  width: 100%;\n  max-width: 100%;\n  color: #fff;\n  background: rgba(20, 10, 110);\n  border: none;\n  font-size: 18px;\n  font-weight: 900;\n  height: 44px;\n  min-width: 96px;\n  padding: 0 16px 3px;\n  transition: all 80ms linear;\n  user-select: none;\n  outline: none;\n  cursor: pointer;\n  border-radius: 4px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n\n  &:hover {\n    background-color: rgba(50, 20, 160);\n    border: none;\n  }\n  &:focus {\n    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);\n    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);\n  }\n"]))),v=d.A.div(u||(u=p(["\n  color: #e01e5a;\n  margin: 8px 0 16px;\n  font-weight: bold;\n"]))),x=d.A.div(c||(c=p(["\n  color: #2eb67d;\n  font-weight: bold;\n"]))),y=d.A.p(s||(s=p(["\n  font-size: 13px;\n  color: #616061;\n  margin: 0 auto 8px;\n  width: 400px;\n  max-width: 400px;\n\n  & a {\n    color: #1264a3;\n    text-decoration: none;\n    font-weight: 700;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])))}}]);
//# sourceMappingURL=314.js.map