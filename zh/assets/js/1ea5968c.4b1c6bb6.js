"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4447],{3905:(A,e,t)=>{t.d(e,{Zo:()=>I,kt:()=>E});var n=t(67294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function s(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function g(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},s=Object.keys(A);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(A);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var C=n.createContext({}),i=function(A){var e=n.useContext(C),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},I=function(A){var e=i(A.components);return n.createElement(C.Provider,{value:e},A.children)},o="mdxType",d={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},B=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,s=A.originalType,C=A.parentName,I=g(A,["components","mdxType","originalType","parentName"]),o=i(t),B=r,E=o["".concat(C,".").concat(B)]||o[B]||d[B]||s;return t?n.createElement(E,a(a({ref:e},I),{},{components:t})):n.createElement(E,a({ref:e},I))}));function E(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var s=t.length,a=new Array(s);a[0]=B;var g={};for(var C in e)hasOwnProperty.call(e,C)&&(g[C]=e[C]);g.originalType=A,g[o]="string"==typeof A?A:r,a[1]=g;for(var i=2;i<s;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}B.displayName="MDXCreateElement"},66092:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>C,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>g,toc:()=>i});var n=t(87462),r=(t(67294),t(3905));const s={sidebar_position:5,sidebar_label:"Management Address",title:"Management Address",keywords:["VIP"],Description:"The Harvester provides a virtual IP as the management address."},a=void 0,g={unversionedId:"install/management-address",id:"version-v0.3/install/management-address",title:"Management Address",description:"Harvester provides a fixed virtual IP (VIP) as the management address. Users can see the management address on the console dashboard after installation.",source:"@site/versioned_docs/version-v0.3/install/management-address.md",sourceDirName:"install",slug:"/install/management-address",permalink:"/zh/v0.3/install/management-address",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/install/management-address.md",tags:[],version:"v0.3",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Management Address",title:"Management Address",keywords:["VIP"],Description:"The Harvester provides a virtual IP as the management address."},sidebar:"tutorialSidebar",previous:{title:"Harvester Configuration",permalink:"/zh/v0.3/install/harvester-configuration"},next:{title:"Authentication",permalink:"/zh/v0.3/authentication"}},C={},i=[{value:"Usages",id:"usages",level:2},{value:"Configure VIP",id:"configure-vip",level:2}],I={toc:i},o="wrapper";function d(A){let{components:e,...s}=A;return(0,r.kt)(o,(0,n.Z)({},I,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Harvester provides a fixed virtual IP (VIP) as the management address. Users can see the management address on the console dashboard after installation."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(93900).Z,width:"1580",height:"770"})),(0,r.kt)("h2",{id:"usages"},"Usages"),(0,r.kt)("p",null,"The management address has two usages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Allow users to access the Harvester UI via ",(0,r.kt)("inlineCode",{parentName:"p"},"https")," protocol.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Used by the other nodes to join the cluster. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(66680).Z,width:"608",height:"142"})))),(0,r.kt)("h2",{id:"configure-vip"},"Configure VIP"),(0,r.kt)("p",null,"Users can specify the VIP during installation. It can either be configured via DHCP or assigned a static one."),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,"In PXE boot, Harvester does not support setting the VIP via DHCP. It will be addressed in the next release.\nIssue: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1410"},"https://github.com/harvester/harvester/issues/1410")),(0,r.kt)("p",null,":::"))}d.isMDXComponent=!0},66680:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},93900:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/console-dashboard-343c1a408fde89500699144f7e2739b0.png"}}]);