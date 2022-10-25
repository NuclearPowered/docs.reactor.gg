"use strict";(self.webpackChunkreactor_docs=self.webpackChunkreactor_docs||[]).push([[925],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),p=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return o.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(t),d=n,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return t?o.createElement(f,i(i({ref:r},u),{},{components:t})):o.createElement(f,i({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var p=2;p<s;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7166:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const s={title:"Custom server",sidebar_position:4},i=void 0,a={unversionedId:"guides/custom_server",id:"guides/custom_server",title:"Custom server",description:"Custom server is required to send Custom RPCs and generally is strongly recommended over playing on official servers.",source:"@site/docs/guides/custom_server.md",sourceDirName:"guides",slug:"/guides/custom_server",permalink:"/guides/custom_server",draft:!1,editUrl:"https://github.com/NuclearPowered/docs.reactor.gg/blob/master/docs/guides/custom_server.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Custom server",sidebar_position:4},sidebar:"docs",previous:{title:"Custom RPCs",permalink:"/guides/custom_rpcs"},next:{title:"Handshake",permalink:"/guides/handshake"}},l={},p=[{value:"Impostor",id:"impostor",level:2},{value:"Hindenburg",id:"hindenburg",level:2}],u={toc:p};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Custom server is required to send ",(0,n.kt)("a",{parentName:"p",href:"/guides/custom_rpcs"},"Custom RPCs")," and generally is strongly recommended over playing on official servers."),(0,n.kt)("h2",{id:"impostor"},"Impostor"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Impostor/Impostor"},"Impostor")," is a C# implementation of Among Us server with 1st party Reactor support."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install Impostor following their ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Impostor/Impostor/blob/master/docs/Running-the-server.md"},"docs")),(0,n.kt)("li",{parentName:"ol"},"Download Reactor.Impostor.dll from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/NuclearPowered/Reactor.Impostor/releases"},"NuclearPowered/Reactor.Impostor/releases")," and copy it to the server's ",(0,n.kt)("inlineCode",{parentName:"li"},"plugins")," folder"),(0,n.kt)("li",{parentName:"ol"},"Your server now supports modded handshake and custom rpcs! \ud83c\udf89")),(0,n.kt)("p",null,"Reactor.Impostor provides an API that you can use in your Impostor plugins to handle the custom rpcs on the server side."),(0,n.kt)("h2",{id:"hindenburg"},"Hindenburg"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/SkeldJS/Hindenburg"},"Hindenburg")," is another option, written in TypeScript NodeJS although not supported officialy by us."))}c.isMDXComponent=!0}}]);