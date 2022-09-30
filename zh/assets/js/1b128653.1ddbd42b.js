"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:3,sidebar_label:"Air Gapped Environment",title:"",keywords:["Harvester","offline","Air-gap","HTTP proxy"]},o="Air Gapped Environment",s={unversionedId:"airgap",id:"airgap",title:"",description:"This section describes how to use Harvester in an air gapped environment. Some use cases could be where Harvester will be installed offline, behind a firewall, or behind a proxy.",source:"@site/docs/airgap.md",sourceDirName:".",slug:"/airgap",permalink:"/zh/next/airgap",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/airgap.md",tags:[],version:"current",lastUpdatedAt:1664266430,formattedLastUpdatedAt:"2022\u5e749\u670827\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Air Gapped Environment",title:"",keywords:["Harvester","offline","Air-gap","HTTP proxy"]},sidebar:"tutorialSidebar",previous:{title:"Management Address",permalink:"/zh/next/install/management-address"},next:{title:"Upgrading Harvester",permalink:"/zh/next/upgrade/automatic"}},l={},p=[{value:"Working Behind an HTTP Proxy",id:"working-behind-an-http-proxy",level:2},{value:"Configure an HTTP Proxy During Installation",id:"configure-an-http-proxy-during-installation",level:3},{value:"Configure an HTTP Proxy in Harvester Settings",id:"configure-an-http-proxy-in-harvester-settings",level:3}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"air-gapped-environment"},"Air Gapped Environment"),(0,a.kt)("p",null,"This section describes how to use Harvester in an air gapped environment. Some use cases could be where Harvester will be installed offline, behind a firewall, or behind a proxy."),(0,a.kt)("p",null,"The Harvester ISO image contains all the packages to make it work in an air gapped environment."),(0,a.kt)("h2",{id:"working-behind-an-http-proxy"},"Working Behind an HTTP Proxy"),(0,a.kt)("p",null,"In some environments, the connection to external services, from the servers or VMs, requires an HTTP(S) proxy."),(0,a.kt)("h3",{id:"configure-an-http-proxy-during-installation"},"Configure an HTTP Proxy During Installation"),(0,a.kt)("p",null,"You can configure the HTTP(S) proxy during the ",(0,a.kt)("a",{parentName:"p",href:"/zh/next/install/iso-install"},"ISO installation")," as shown in picture below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"iso-proxy",src:n(96941).Z,width:"1596",height:"1198"})),(0,a.kt)("h3",{id:"configure-an-http-proxy-in-harvester-settings"},"Configure an HTTP Proxy in Harvester Settings"),(0,a.kt)("p",null,"You can configure the HTTP(S) proxy in the settings page of the Harvester dashboard:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the settings page of the Harvester UI."),(0,a.kt)("li",{parentName:"ol"},"Find the ",(0,a.kt)("inlineCode",{parentName:"li"},"http-proxy")," setting, click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit setting")),(0,a.kt)("li",{parentName:"ol"},"Enter the value(s) for ",(0,a.kt)("inlineCode",{parentName:"li"},"http-proxy"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"https-proxy")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"no-proxy"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"proxy-setting",src:n(43319).Z,width:"2860",height:"1164"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Harvester appends necessary addresses to user configured ",(0,a.kt)("inlineCode",{parentName:"p"},"no-proxy")," to ensure the internal traffic works.\ni.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,longhorn-system,cattle-system,cattle-system.svc,.svc,.cluster.local"))))}d.isMDXComponent=!0},96941:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/iso-proxy-4772156ef9e6a8688de2321ed356b078.png"},43319:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/proxy-setting-6433c2c6f3efd4cfb84757420ceeaf8a.png"}}]);