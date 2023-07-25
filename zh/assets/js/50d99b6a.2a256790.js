"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9106],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),v=n,h=u["".concat(l,".").concat(v)]||u[v]||m[v]||i;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=v;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},31555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(83117),n=(r(67294),r(3905));const i={sidebar_position:1,sidebar_label:"Harvester \u4ecb\u7ecd",slug:"/",title:"Harvester \u4ecb\u7ecd",keywords:["Harvester","harvester","Rancher","rancher","Harvester \u4ecb\u7ecd"],Description:"Harvester \u662f\u57fa\u4e8e Kubernetes \u6784\u5efa\u7684\u5f00\u6e90\u8d85\u878d\u5408\u57fa\u7840\u67b6\u6784 (HCI) \u8f6f\u4ef6\u3002\u5b83\u662f vSphere \u548c Nutanix \u7684\u5f00\u6e90\u66ff\u4ee3\u65b9\u6848\u3002"},s=void 0,o={unversionedId:"index",id:"version-v1.1/index",title:"Harvester \u4ecb\u7ecd",description:"\u6211\u4eec\u4f1a\u5b9a\u671f\u66f4\u65b0\u4e2d\u6587\u6587\u6863\uff0c\u5982\u9700\u67e5\u770b\u6700\u65b0\u7684\u6587\u6863\u5185\u5bb9\uff0c\u8bf7\u8bbf\u95ee\u82f1\u6587\u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/index.md",sourceDirName:".",slug:"/",permalink:"/zh/v1.1/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/index.md",tags:[],version:"v1.1",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester \u4ecb\u7ecd",slug:"/",title:"Harvester \u4ecb\u7ecd",keywords:["Harvester","harvester","Rancher","rancher","Harvester \u4ecb\u7ecd"],Description:"Harvester \u662f\u57fa\u4e8e Kubernetes \u6784\u5efa\u7684\u5f00\u6e90\u8d85\u878d\u5408\u57fa\u7840\u67b6\u6784 (HCI) \u8f6f\u4ef6\u3002\u5b83\u662f vSphere \u548c Nutanix \u7684\u5f00\u6e90\u66ff\u4ee3\u65b9\u6848\u3002"},sidebar:"tutorialSidebar",next:{title:"\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42",permalink:"/zh/v1.1/install/requirements"}},l={},p=[{value:"Harvester \u67b6\u6784",id:"harvester-\u67b6\u6784",level:2},{value:"Harvester \u529f\u80fd",id:"harvester-\u529f\u80fd",level:2},{value:"Harvester \u4eea\u8868\u677f",id:"harvester-\u4eea\u8868\u677f",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u4f1a\u5b9a\u671f\u66f4\u65b0\u4e2d\u6587\u6587\u6863\uff0c\u5982\u9700\u67e5\u770b\u6700\u65b0\u7684\u6587\u6863\u5185\u5bb9\uff0c\u8bf7\u8bbf\u95ee",(0,n.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/"},"\u82f1\u6587\u6587\u6863"),"\u3002")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://harvesterhci.io/"},"Harvester")," \u662f\u4e00\u6b3e\u57fa\u4e8e Kubernetes \u6784\u5efa\u7684\u73b0\u4ee3\u3001\u5f00\u653e\u3001\u53ef\u4e92\u64cd\u4f5c\u7684",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hyper-converged_infrastructure"},"\u8d85\u878d\u5408\u57fa\u7840\u67b6\u6784\uff08HCI\uff09"),"\u4ea7\u54c1\u3002\u5b83\u662f\u4e00\u4e2a\u5f00\u6e90\u66ff\u4ee3\u65b9\u6848\uff0c\u4e13\u4e3a\u5bfb\u6c42",(0,n.kt)("a",{parentName:"p",href:"https://about.gitlab.com/topics/cloud-native/"},"\u4e91\u539f\u751f")," HCI \u89e3\u51b3\u65b9\u6848\u7684\u8fd0\u7ef4\u4eba\u5458\u800c\u8bbe\u8ba1\u3002Harvester \u8fd0\u884c\u5728\u88f8\u91d1\u5c5e\u670d\u52a1\u5668\u4e0a\uff0c\u63d0\u4f9b\u96c6\u6210\u7684\u865a\u62df\u5316\u548c\u5206\u5e03\u5f0f\u5b58\u50a8\u529f\u80fd\u3002\u9664\u4e86\u4f20\u7edf\u7684\u865a\u62df\u673a\u4e4b\u5916\uff0cHarvester \u8fd8\u901a\u8fc7\u4e0e ",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/integrations-in-rancher/harvester"},"Rancher")," \u96c6\u6210\u6765\u652f\u6301\u5bb9\u5668\u5316\u73af\u5883\u3002\u5b83\u53ef\u4ee5\u7edf\u4e00\u4f20\u7edf\u7684\u865a\u62df\u5316\u57fa\u7840\u67b6\u6784\uff0c\u540c\u65f6\u652f\u6301\u5728\u4e2d\u5fc3\u5230\u8fb9\u7f18\u7684\u4f4d\u7f6e\u91c7\u7528\u5bb9\u5668\u3002"),(0,n.kt)("h2",{id:"harvester-\u67b6\u6784"},"Harvester \u67b6\u6784"),(0,n.kt)("p",null,"Harvester \u67b6\u6784\u7531\u5c16\u7aef\u7684\u5f00\u6e90\u6280\u672f\u7ec4\u6210\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Linux \u64cd\u4f5c\u7cfb\u7edf"),"\u3002",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/elemental-toolkit"},"Elemental for SLE-Micro 5.3")," \u662f Harvester \u7684\u6838\u5fc3\uff0c\u5b83\u662f\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684 Linux \u53d1\u884c\u7248\uff0c\u65e8\u5728\u5c3d\u91cf\u51cf\u5c11 Kubernetes \u96c6\u7fa4\u4e2d\u8282\u70b9\u7684\u64cd\u4f5c\u7cfb\u7edf\u7ef4\u62a4\u5de5\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5efa\u7acb\u5728 Kubernetes \u4e4b\u4e0a"),"\u3002",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")," \u5df2\u6210\u4e3a\u4e3b\u6d41\u7684\u57fa\u7840\u67b6\u6784\u8bed\u8a00\uff0c\u800c Harvester \u662f\u5305\u542b Kubernetes \u7684 HCI \u89e3\u51b3\u65b9\u6848\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4f7f\u7528 Kubevirt \u8fdb\u884c\u865a\u62df\u5316\u7ba1\u7406"),"\u3002",(0,n.kt)("a",{parentName:"li",href:"https://kubevirt.io/"},"Kubevirt")," \u5728 Kubernetes \u4e4b\u4e0a\u4f7f\u7528 KVM \u6765\u63d0\u4f9b\u865a\u62df\u5316\u7ba1\u7406\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4f7f\u7528 Longhorn \u8fdb\u884c\u5b58\u50a8\u7ba1\u7406"),"\u3002",(0,n.kt)("a",{parentName:"li",href:"https://longhorn.io/"},"Longhorn")," \u63d0\u4f9b\u5206\u5e03\u5f0f\u5757\u5b58\u50a8\u548c\u5206\u5c42\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u901a\u8fc7 Grafana \u548c Prometheus \u8fdb\u884c\u89c2\u5bdf"),"\u3002",(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")," \u548c ",(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus")," \u63d0\u4f9b\u5f3a\u5927\u7684\u76d1\u63a7\u548c\u8bb0\u5f55\u529f\u80fd\u3002\u4f5c\u4e3a\u53ef\u542f\u52a8\u7684\u8bbe\u5907\u955c\u50cf\u63d0\u4f9b\uff0c")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(14740).Z,width:"943",height:"486"})),(0,n.kt)("h2",{id:"harvester-\u529f\u80fd"},"Harvester \u529f\u80fd"),(0,n.kt)("p",null,"Harvester \u662f\u4e00\u4e2a\u4f01\u4e1a\u5c31\u7eea\u3001\u6613\u4e8e\u4f7f\u7528\u7684\u57fa\u7840\u8bbe\u65bd\u5e73\u53f0\uff0c\u5b83\u4f7f\u7528\u672c\u5730\u3001\u76f4\u63a5\u8fde\u63a5\u7684\u5b58\u50a8\u800c\u4e0d\u662f\u590d\u6742\u7684\u5916\u90e8 SAN\u3002\u5b83\u4f7f\u7528 Kubernetes API \u4f5c\u4e3a\u8de8\u5bb9\u5668\u548c\u865a\u62df\u673a\u5de5\u4f5c\u8d1f\u8f7d\u7684\u7edf\u4e00\u81ea\u52a8\u5316\u8bed\u8a00\u3002Harvester \u7684\u4e00\u4e9b\u4e3b\u8981\u529f\u80fd\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6613\u4e8e\u4e0a\u624b"),"\u3002\u7531\u4e8e Harvester \u4f5c\u4e3a\u53ef\u542f\u52a8\u7684\u8bbe\u5907\u955c\u50cf\u63d0\u4f9b\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/releases"},"ISO \u955c\u50cf"),"\u5c06\u5176\u76f4\u63a5\u5b89\u88c5\u5728\u88f8\u673a\u670d\u52a1\u5668\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"https://docs.harvesterhci.io/dev/install/pxe-boot-install"},"iPXE")," \u811a\u672c\u8fdb\u884c\u81ea\u52a8\u5b89\u88c5\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u865a\u62df\u673a\u751f\u547d\u5468\u671f\u7ba1\u7406"),"\u3002\u8f7b\u677e\u521b\u5efa\u3001\u7f16\u8f91\u3001\u514b\u9686\u548c\u5220\u9664\u865a\u62df\u673a\uff0c\u5305\u62ec SSH-Key \u6ce8\u5165\u3001cloud-init \u914d\u7f6e\u3001\u4ee5\u53ca\u56fe\u5f62\u548c\u4e32\u884c\u7aef\u53e3\u63a7\u5236\u53f0\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"VM \u70ed\u8fc1\u79fb"),"\u3002\u5c06\u865a\u62df\u673a\u8fc1\u79fb\u5230\u4e0d\u540c\u7684\u4e3b\u673a\u6216\u8282\u70b9\uff0c\u6ca1\u6709\u505c\u673a\u65f6\u95f4\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u865a\u62df\u673a\u5907\u4efd\u3001\u5feb\u7167\u548c\u6062\u590d"),"\u3002\u4ece NFS\u3001S3 \u670d\u52a1\u5668\u6216 NAS \u8bbe\u5907\u5907\u4efd\u4f60\u7684\u865a\u62df\u673a\uff0c\u7136\u540e\u4f7f\u7528\u5907\u4efd\u6765\u6062\u590d\u6545\u969c\u7684\u865a\u62df\u673a\uff0c\u6216\u5728\u5176\u4ed6\u96c6\u7fa4\u4e0a\u521b\u5efa\u65b0\u7684\u865a\u62df\u673a\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5b58\u50a8\u7ba1\u7406"),"\u3002Harvester \u652f\u6301\u5206\u5e03\u5f0f\u5757\u5b58\u50a8\u548c\u5206\u5c42\u3002\u5377\u4ee3\u8868\u5b58\u50a8\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u3001\u7f16\u8f91\u3001\u514b\u9686\u6216\u5bfc\u51fa\u5377\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7f51\u7edc\u7ba1\u7406"),"\u3002\u652f\u6301\u4f7f\u7528\u865a\u62df IP (VIP) \u548c\u591a\u4e2a\u7f51\u5361 (NIC)\u3002\u5982\u679c\u4f60\u7684 VM \u9700\u8981\u8fde\u63a5\u5230\u5916\u90e8\u7f51\u7edc\uff0c\u8bf7\u521b\u5efa VLAN \u6216 Untagged \u7f51\u7edc\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4e0e Rancher \u96c6\u6210"),"\u3002\u901a\u8fc7 Rancher \u7684",(0,n.kt)("strong",{parentName:"li"},"\u865a\u62df\u5316\u7ba1\u7406"),"\u9875\u9762\u76f4\u63a5\u5728 Rancher \u4e2d\u8bbf\u95ee Harvester\uff0c\u5e76\u7ba1\u7406\u4f60\u7684\u865a\u62df\u673a\u5de5\u4f5c\u8d1f\u8f7d\u548c Kubernetes \u96c6\u7fa4\u3002")),(0,n.kt)("h2",{id:"harvester-\u4eea\u8868\u677f"},"Harvester \u4eea\u8868\u677f"),(0,n.kt)("p",null,"Harvester \u63d0\u4f9b\u4e86\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u4e14\u6613\u4e8e\u4f7f\u7528\u7684\u7f51\u9875\u4eea\u8868\u677f\uff0c\u7528\u4e8e\u53ef\u89c6\u5316\u548c\u7ba1\u7406\u4f60\u7684\u57fa\u7840\u8bbe\u65bd\u3002\u5b89\u88c5 Harvester \u540e\uff0c\u4f60\u53ef\u4ee5\u4ece\u8282\u70b9\u7684\u7ec8\u7aef\u8bbf\u95ee Harvester \u4eea\u8868\u677f\u7684 IP \u5730\u5740\u3002"),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("iframe",{width:"99%",height:"450",src:"https://www.youtube.com/embed/Ngsk7m6NYf4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}m.isMDXComponent=!0},14740:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/architecture-6e8723efeab0d976b53f60c563e3e843.svg"}}]);