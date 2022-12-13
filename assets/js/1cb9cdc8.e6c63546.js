"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,d=u["".concat(a,".").concat(m)]||u[m]||f[m]||r;return n?o.createElement(d,s(s({ref:t},c),{},{components:n})):o.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[u]="string"==typeof e?e:i,s[1]=p;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=n(7462),i=(n(7294),n(3905));const r={},s=void 0,p={unversionedId:"Glific Documentation/Flows/Flow Actions/Configure Optin & Optout preferences in Glific",id:"Glific Documentation/Flows/Flow Actions/Configure Optin & Optout preferences in Glific",title:"Configure Optin & Optout preferences in Glific",description:"When any new beneficiary sends a message the very first time,  the beneficiary can get an Optin message  to give their consent to receive the messages from the BOT.",source:"@site/docs/Glific Documentation/3. Flows/1. Flow Actions/11. Configure Optin & Optout preferences in Glific.md",sourceDirName:"Glific Documentation/3. Flows/1. Flow Actions",slug:"/Glific Documentation/Flows/Flow Actions/Configure Optin & Optout preferences in Glific",permalink:"/glific/docs/Glific Documentation/Flows/Flow Actions/Configure Optin & Optout preferences in Glific",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Glific Documentation/3. Flows/1. Flow Actions/11. Configure Optin & Optout preferences in Glific.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to use HSM template messages in your flows",permalink:"/glific/docs/Glific Documentation/Flows/Flow Actions/How to use HSM template messages in your flows"},next:{title:"How to use the Interactive Message in Flow editor",permalink:"/glific/docs/Glific Documentation/Flows/Flow Actions/How to use the Interactive Message in Flow editor"}},a={},l=[{value:"Here&#39;s  how to configure Optin and Optout in flow.",id:"heres--how-to-configure-optin-and-optout-in-flow",level:2},{value:"Optin preferences update",id:"optin-preferences-update",level:2},{value:"Optout preferences update",id:"optout-preferences-update",level:2},{value:"Sample optin flow will  look like this",id:"sample-optin-flow-will--look-like-this",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When any new beneficiary sends a message the very first time,  the beneficiary can get an Optin message  to give their consent to receive the messages from the BOT."),(0,i.kt)("p",null,"In Glific NGOs can configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"optin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"optout")," process in flows."),(0,i.kt)("p",null,"Glific uses ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," variable to update the beneficiary","'","s profile details in the system."),(0,i.kt)("h2",{id:"heres--how-to-configure-optin-and-optout-in-flow"},"Here","'","s  how to configure Optin and Optout in flow."),(0,i.kt)("p",null,"1 . Create new flow or use the existing flow in the system with name optin and optout."),(0,i.kt)("p",null,"2 . Craft a message to let the user respond to their optin preference."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/Hr-qZQcJwS7DV1ci44VUEgG4.png",alt:null})),(0,i.kt)("p",null,"3 . Get the response form the user."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/toIaTxpeCwELFmWbeBRUJgkf.png",alt:null})),(0,i.kt)("h2",{id:"optin-preferences-update"},"Optin preferences update"),(0,i.kt)("p",null,"4 . On confirmation update the opt-in preferences for the beneficiary."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/6D55XW6_fd91EDIQxXfz_MSm.png",alt:null})),(0,i.kt)("h2",{id:""}),(0,i.kt)("h2",{id:"optout-preferences-update"},"Optout preferences update"),(0,i.kt)("p",null,"5 .  Create a flow for opt-out or use the existing flow in the system. Keywords for Optout flow could be  ",(0,i.kt)("strong",{parentName:"p"},"optout"),", ",(0,i.kt)("strong",{parentName:"p"},"stop.")," ",(0,i.kt)("em",{parentName:"p"},"(You can recommend us if you have better suggestions for the keywords)")),(0,i.kt)("p",null,"6 .  When beneficiary sends    ",(0,i.kt)("strong",{parentName:"p"},"optout")," or ",(0,i.kt)("strong",{parentName:"p"},"stop"),"  keyword to BOT, Opt-out preferences will be set for the beneficiary."),(0,i.kt)("p",null,"7 . Yon need use ",(0,i.kt)("strong",{parentName:"p"},"optout")," value to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," variable ."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/_fSBLxGI81Rs1Kl2ppBX1uCr.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")," - Make sure to use optin as keyword of this flow. optin is a special keyword which will execute the flow to get contact","'","s optin even if they are optedout"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/B5YFIu0r3x-5MuUfax8BMfaC.png",alt:null})),(0,i.kt)("h2",{id:"sample-optin-flow-will--look-like-this"},"Sample optin flow will  look like this"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/MP0wcueid3b9duZagRc8451z.png",alt:null})),(0,i.kt)("p",null,"Refer WhatsApp page to know more about getting Optins"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/whatsapp/overview/getting-opt-in/"},"https://developers.facebook.com/docs/whatsapp/overview/getting-opt-in/")))}u.isMDXComponent=!0}}]);