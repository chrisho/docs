"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8969],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},v={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=n,m=d["".concat(l,".").concat(u)]||d[u]||v[u]||i;return t?a.createElement(m,s(s({ref:r},p),{},{components:t})):a.createElement(m,s({ref:r},p))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54498:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const i={sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher \u96c6\u6210"]},s=void 0,o={unversionedId:"rancher/csi-driver",id:"version-v1.1/rancher/csi-driver",title:"Harvester CSI Driver",description:"Harvester CSI Driver \u63d0\u4f9b\u4e86\u4e00\u4e2a\u6807\u51c6\u7684 CSI \u63a5\u53e3\uff0c\u4f9b Harvester \u4e2d\u6240\u521b\u5efa\u7684 Kubernetes \u96c6\u7fa4\u4f7f\u7528\u3002\u8fd9\u4e2a CIS \u63a5\u53e3\u8fde\u63a5\u5230\u4e3b\u673a\u96c6\u7fa4\uff0c\u5e76\u5c06\u4e3b\u673a\u5377\u70ed\u63d2\u62d4\u5230\u865a\u62df\u673a\u6765\u63d0\u4f9b\u88f8\u91d1\u5c5e\u96c6\u7fa4\u78c1\u76d8\u7684\u5b58\u50a8\u6027\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/rancher/csi-driver.md",sourceDirName:"rancher",slug:"/rancher/csi-driver",permalink:"/zh/v1.1/rancher/csi-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/rancher/csi-driver.md",tags:[],version:"v1.1",lastUpdatedAt:1687158919,formattedLastUpdatedAt:"2023\u5e746\u670819\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher \u96c6\u6210"]},sidebar:"tutorialSidebar",previous:{title:"Harvester Cloud Provider",permalink:"/zh/v1.1/rancher/cloud-provider"},next:{title:"Harvester Terraform Provider",permalink:"/zh/v1.1/terraform/"}},l={},c=[{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u524d\u63d0",id:"\u524d\u63d0",level:3},{value:"\u4f7f\u7528 Harvester RKE1 \u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72",id:"\u4f7f\u7528-harvester-rke1-\u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72",level:3},{value:"\u4f7f\u7528 Harvester RKE2 \u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72",id:"\u4f7f\u7528-harvester-rke2-\u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72",level:3},{value:"\u4f7f\u7528 Harvester K3s \u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72",id:"\u4f7f\u7528-harvester-k3s-\u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72",level:3}],p={toc:c};function v(e){let{components:r,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Harvester CSI Driver \u63d0\u4f9b\u4e86\u4e00\u4e2a\u6807\u51c6\u7684 CSI \u63a5\u53e3\uff0c\u4f9b Harvester \u4e2d\u6240\u521b\u5efa\u7684 Kubernetes \u96c6\u7fa4\u4f7f\u7528\u3002\u8fd9\u4e2a CIS \u63a5\u53e3\u8fde\u63a5\u5230\u4e3b\u673a\u96c6\u7fa4\uff0c\u5e76\u5c06\u4e3b\u673a\u5377\u70ed\u63d2\u62d4\u5230\u865a\u62df\u673a\u6765\u63d0\u4f9b\u88f8\u91d1\u5c5e\u96c6\u7fa4\u78c1\u76d8\u7684\u5b58\u50a8\u6027\u80fd\u3002"),(0,n.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,n.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4\u662f\u5728 Harvester \u865a\u62df\u673a\u4e4b\u4e0a\u6784\u5efa\u7684\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a Kubernetes \u8282\u70b9\u8fd0\u884c\u7684 Harvester \u865a\u62df\u673a\u4f4d\u4e8e\u76f8\u540c\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u3002")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u76ee\u524d\uff0cHarvester CSI Driver \u4ec5\u652f\u6301\u5355\u8282\u70b9\u8bfb\u5199 (RWO) \u5377\u3002\u8bf7\u7559\u610f ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1992"},"issue #1992")," \u4ee5\u83b7\u5f97\u540e\u7eed\u591a\u8282\u70b9 ",(0,n.kt)("inlineCode",{parentName:"p"},"read-only")," (ROX) \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"read-write")," (RWX) \u7684\u652f\u6301\u3002")),(0,n.kt)("h3",{id:"\u4f7f\u7528-harvester-rke1-\u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72"},"\u4f7f\u7528 Harvester RKE1 \u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester(Out-of-tree)")," \u9009\u9879\uff08\u53ef\u9009\uff0c\u5982\u4e0d\u9700\u8981\u540c\u65f6\u4f7f\u7528 Cloud Provider \u529f\u80fd\u53ef\u4ee5\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"None")," \u9009\u9879\uff09\u3002"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:t(54688).Z,width:"2180",height:"223"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ece Rancher \u5e94\u7528\u5e02\u573a\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester CSI Driver"),"\uff1a"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:t(11179).Z,width:"2542",height:"405"})))),(0,n.kt)("h3",{id:"\u4f7f\u7528-harvester-rke2-\u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72"},"\u4f7f\u7528 Harvester RKE2 \u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72"),(0,n.kt)("p",null,"\u5f53\u4f7f\u7528 Rancher RKE2 \u4e3b\u673a\u9a71\u52a8\u542f\u52a8 Kubernetes \u96c6\u7fa4\u65f6\uff0cHarvester CSI Driver \u4f1a\u5728\u9009\u4e2d Harvester \u4e91\u63d0\u4f9b\u5546\u540e\u88ab\u81ea\u52a8\u90e8\u7f72\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"select-harvester-cloud-provider",src:t(76152).Z,width:"2238",height:"646"})),(0,n.kt)("h3",{id:"\u4f7f\u7528-harvester-k3s-\u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72"},"\u4f7f\u7528 Harvester K3s \u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester-csi-driver/blob/master/deploy/generate_addon_csi.sh"},"\u751f\u6210 addon \u914d\u7f6e"),"\u5e76\u653e\u5165 K3s \u865a\u62df\u673a ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/kubernetes/cloud-config"),"\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# \u4f9d\u8d56 kubectl \u6765\u64cd\u4f5c Harvester \u96c6\u7fa4\n./deploy/generate_addon.sh <serviceaccount name> <namespace>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ece Rancher \u5e94\u7528\u5e02\u573a\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester CSI Driver"),"\uff1a"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:t(39848).Z,width:"2039",height:"437"})))))}v.isMDXComponent=!0},39848:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/install-harvester-csi-driver-in-k3s-f9484289395513e6cad4f69b00f84fa5.png"},11179:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/install-harvester-csi-driver-28489139ba34a16156cfea27c6eb005f.png"},54688:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/rke-cloud-provider-1b375dbb96aba32a2b7f2b81357e98b8.png"},76152:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/rke2-cloud-provider-bcb7c991d0e6f041009c4920472d8ea8.png"}}]);