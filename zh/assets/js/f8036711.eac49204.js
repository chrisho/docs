"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),k=a,g=c["".concat(p,".").concat(k)]||c[k]||d[k]||l;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},88279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(83117),a=(r(67294),r(3905));const l={sidebar_position:2,sidebar_label:"\u865a\u62df\u673a\u7f51\u7edc",title:"\u865a\u62df\u673a\u7f51\u7edc",keywords:["Harvester","\u7f51\u7edc"]},i=void 0,o={unversionedId:"networking/harvester-network",id:"networking/harvester-network",title:"\u865a\u62df\u673a\u7f51\u7edc",description:"Harvester \u4e3a\u865a\u62df\u673a\u63d0\u4f9b\u4e86\u4e09\u79cd\u7c7b\u578b\u7684\u7f51\u7edc\uff0c\u5305\u62ec\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/networking/harvester-network.md",sourceDirName:"networking",slug:"/networking/harvester-network",permalink:"/zh/dev/networking/harvester-network",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/networking/harvester-network.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u865a\u62df\u673a\u7f51\u7edc",title:"\u865a\u62df\u673a\u7f51\u7edc",keywords:["Harvester","\u7f51\u7edc"]},sidebar:"sidebar",previous:{title:"\u96c6\u7fa4\u7f51\u7edc",permalink:"/zh/dev/networking/index"},next:{title:"Harvester \u7f51\u7edc\u6df1\u5ea6\u89e3\u91ca",permalink:"/zh/dev/networking/deep-dive"}},p={},s=[{value:"\u7ba1\u7406\u7f51\u7edc",id:"\u7ba1\u7406\u7f51\u7edc",level:2},{value:"\u5982\u4f55\u4f7f\u7528\u7ba1\u7406\u7f51\u7edc",id:"\u5982\u4f55\u4f7f\u7528\u7ba1\u7406\u7f51\u7edc",level:3},{value:"VLAN \u7f51\u7edc",id:"vlan-\u7f51\u7edc",level:2},{value:"\u5982\u4f55\u4f7f\u7528 VLAN \u7f51\u7edc",id:"\u5982\u4f55\u4f7f\u7528-vlan-\u7f51\u7edc",level:3},{value:"\u4f7f\u7528 VLAN \u7f51\u7edc\u521b\u5efa\u865a\u62df\u673a",id:"\u4f7f\u7528-vlan-\u7f51\u7edc\u521b\u5efa\u865a\u62df\u673a",level:3},{value:"Untagged \u7f51\u7edc",id:"untagged-\u7f51\u7edc",level:2},{value:"\u5982\u4f55\u4f7f\u7528 Untagged \u7f51\u7edc",id:"\u5982\u4f55\u4f7f\u7528-untagged-\u7f51\u7edc",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(c,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Harvester \u4e3a\u865a\u62df\u673a\u63d0\u4f9b\u4e86\u4e09\u79cd\u7c7b\u578b\u7684\u7f51\u7edc\uff0c\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u7f51\u7edc"),(0,a.kt)("li",{parentName:"ul"},"VLAN \u7f51\u7edc"),(0,a.kt)("li",{parentName:"ul"},"Untagged \u7f51\u7edc")),(0,a.kt)("p",null,"\u7ba1\u7406\u7f51\u7edc\u901a\u5e38\u7528\u4e8e\u6d41\u91cf\u4ec5\u5728\u96c6\u7fa4\u5185\u90e8\u6d41\u52a8\u7684\u865a\u62df\u673a\u3002\u5982\u679c\u4f60\u7684\u865a\u62df\u673a\u9700\u8981\u8fde\u63a5\u5230\u5916\u90e8\u7f51\u7edc\uff0c\u8bf7\u4f7f\u7528 VLAN \u7f51\u7edc\u6216 Untagged \u7f51\u7edc\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4ece v1.0.1 \u8d77\u53ef\u7528")),(0,a.kt)("p",null,"Harvester \u8fd8\u5f15\u5165\u4e86\u5b58\u50a8\u7f51\u7edc\uff0c\u7528\u4e8e\u5c06\u5b58\u50a8\u6d41\u91cf\u4e0e\u5176\u4ed6\u96c6\u7fa4\u5185\u5de5\u4f5c\u8d1f\u8f7d\u5206\u5f00\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/advanced/storagenetwork"},"\u5b58\u50a8\u7f51\u7edc\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u7ba1\u7406\u7f51\u7edc"},"\u7ba1\u7406\u7f51\u7edc"),(0,a.kt)("p",null,"Harvester \u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/getting-started/kubernetes/flannel/flannel"},"Canal")," \u4f5c\u4e3a\u9ed8\u8ba4\u7ba1\u7406\u7f51\u7edc\u3002\u5b83\u662f\u4e00\u4e2a\u5185\u7f6e\u7f51\u7edc\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ece\u96c6\u7fa4\u4e2d\u4f7f\u7528\u3002\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u865a\u62df\u673a\u7684\u7ba1\u7406\u7f51\u7edc IP \u53ea\u80fd\u5728\u96c6\u7fa4\u8282\u70b9\u5185\u8bbf\u95ee\uff0c\u865a\u62df\u673a\u91cd\u542f\u540e\u7ba1\u7406\u7f51\u7edc IP \u4f1a\u6539\u53d8\u3002\u8fd9\u662f\u9700\u8981\u6ce8\u610f\u7684\u975e\u5178\u578b\u884c\u4e3a\uff0c\u56e0\u4e3a\u4e00\u822c\u6211\u4eec\u4f1a\u8ba4\u4e3a VM IP \u5728\u91cd\u542f\u540e\u4f1a\u4fdd\u6301\u4e0d\u53d8\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u5229\u7528 Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubevirt.io/user-guide/virtual_machines/service_objects/"},"\u670d\u52a1\u5bf9\u8c61"),"\u4e3a\u4f60\u7684\u865a\u62df\u673a\u4e0e\u7ba1\u7406\u7f51\u7edc\u521b\u5efa\u4e00\u4e2a\u7a33\u5b9a\u7684 IP\u3002"),(0,a.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528\u7ba1\u7406\u7f51\u7edc"},"\u5982\u4f55\u4f7f\u7528\u7ba1\u7406\u7f51\u7edc"),(0,a.kt)("p",null,"\u7531\u4e8e\u7ba1\u7406\u7f51\u7edc\u662f\u5185\u7f6e\u7684\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7684\u64cd\u4f5c\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u5728\u914d\u7f6e VM \u7f51\u7edc\u65f6\u76f4\u63a5\u6dfb\u52a0\u5b83\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(32082).Z,width:"3566",height:"1236"})),(0,a.kt)("h2",{id:"vlan-\u7f51\u7edc"},"VLAN \u7f51\u7edc"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-network-controller"},"Harvester network-controller")," \u5229\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"multus")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"bridge")," CNI \u63d2\u4ef6\u6765\u5b9e\u73b0\u5b83\u81ea\u5b9a\u4e49\u7684 L2 \u6865\u63a5 VLAN \u7f51\u7edc\u3002\u8fd9\u6709\u52a9\u4e8e\u5c06\u4f60\u7684\u865a\u62df\u673a\u8fde\u63a5\u5230\u4e3b\u673a\u7f51\u7edc\u63a5\u53e3\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528\u7269\u7406\u4ea4\u6362\u673a\u4ece\u5185\u90e8\u548c\u5916\u90e8\u7f51\u7edc\u8fdb\u884c\u8bbf\u95ee\u3002"),(0,a.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528-vlan-\u7f51\u7edc"},"\u5982\u4f55\u4f7f\u7528 VLAN \u7f51\u7edc"),(0,a.kt)("p",null,"\u8981\u521b\u5efa\u65b0\u7684 VLAN \u7f51\u7edc\uff0c\u8f6c\u5230 ",(0,a.kt)("strong",{parentName:"p"},"Networks > VM Networks")," \u9875\u9762\u5e76\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Create")," \u6309\u94ae\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6307\u5b9a\u540d\u79f0\uff0c\u9009\u62e9\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"L2VlanNetwork"),"\uff0c\u8f93\u5165 VLAN ID\uff0c\u5e76\u9009\u62e9\u96c6\u7fa4\u7f51\u7edc\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(73485).Z,width:"3454",height:"1492"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e\u8def\u7531\u4ee5\u5141\u8bb8\u4e3b\u673a\u4f7f\u7528 IPv4 \u5730\u5740\u8fde\u63a5\u5230 VLAN \u7f51\u7edc\u3002VLAN \u7f51\u7edc\u7684 CIDR \u548c\u7f51\u5173\u662f\u8def\u7531\u914d\u7f6e\u7684\u5fc5\u5907\u53c2\u6570\u3002\u4f60\u53ef\u4ee5\u9009\u62e9\u4ee5\u4e0b\u9009\u9879\u4e4b\u4e00\u6765\u914d\u7f6e\u8def\u7531\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Auto(DHCP)\uff1aHarvester \u7f51\u7edc\u63a7\u5236\u5668\u5c06\u4f7f\u7528 DHCP \u534f\u8bae\u4ece DHCP \u670d\u52a1\u5668\u83b7\u53d6 CIDR \u548c\u7f51\u5173\u3002\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a DHCP \u670d\u52a1\u5668\u5730\u5740\u3002")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(66947).Z,width:"3450",height:"1084"})),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Manual\uff1a\u4f60\u9700\u8981\u81ea\u884c\u6307\u5b9a CIDR \u548c\u7f51\u5173\u3002")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(46911).Z,width:"3450",height:"1046"})))),(0,a.kt)("h3",{id:"\u4f7f\u7528-vlan-\u7f51\u7edc\u521b\u5efa\u865a\u62df\u673a"},"\u4f7f\u7528 VLAN \u7f51\u7edc\u521b\u5efa\u865a\u62df\u673a"),(0,a.kt)("p",null,"\u4f60\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528\u4e0a\u9762\u914d\u7f6e\u7684 VLAN \u7f51\u7edc\u521b\u5efa\u65b0 VM\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Virtual Machines")," \u9875\u9762\u4e0a\u7684 ",(0,a.kt)("strong",{parentName:"li"},"Create")," \u6309\u94ae\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6240\u9700\u53c2\u6570\u5e76\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Networks")," \u9009\u9879\u5361\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u9ed8\u8ba4\u7f51\u7edc\u914d\u7f6e\u4e3a VLAN \u7f51\u7edc\uff0c\u6216\u9009\u62e9\u8981\u6dfb\u52a0\u7684\u5176\u4ed6\u7f51\u7edc\u3002")),(0,a.kt)("h2",{id:"untagged-\u7f51\u7edc"},"Untagged \u7f51\u7edc"),(0,a.kt)("p",null,"\u6211\u4eec\u90fd\u77e5\u9053\uff0cVLAN \u7f51\u7edc\u4e0b\u7684\u6d41\u91cf\u5177\u6709 VLAN ID \u6807\u7b7e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"PVID"),"\uff08\u9ed8\u8ba4\u503c 1\uff09\u7684 VLAN \u7f51\u7edc\u6765\u4e0e\u6b63\u5e38\u7684\u672a\u6807\u8bb0\u6d41\u91cf\u8fdb\u884c\u901a\u4fe1\u3002\u4f46\u662f\uff0c\u67d0\u4e9b\u7f51\u7edc\u8bbe\u5907\u53ef\u80fd\u4e0d\u5e0c\u671b\u63a5\u6536\u4e0e\u4e0a\u884c\u94fe\u8def\u6240\u5c5e\u4ea4\u6362\u673a\u4e0a\u7684 native VLAN \u5339\u914d\u7684\u663e\u5f0f\u6807\u8bb0\u7684 VLAN ID\u3002\u8fd9\u4e5f\u662f\u6211\u4eec\u5f15\u5165 Untagged \u7f51\u7edc\u7684\u539f\u56e0\u3002"),(0,a.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528-untagged-\u7f51\u7edc"},"\u5982\u4f55\u4f7f\u7528 Untagged \u7f51\u7edc"),(0,a.kt)("p",null,"Untagged \u7f51\u7edc\u7684\u4f7f\u7528\u7c7b\u4f3c\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/networking/harvester-network#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-vlan-%E7%BD%91%E7%BB%9C"},"VLAN \u7f51\u7edc"),"\u3002"),(0,a.kt)("p",null,"\u8981\u521b\u5efa\u65b0\u7684 Untagged \u7f51\u7edc\uff0c\u8bf7\u8f6c\u5230 ",(0,a.kt)("strong",{parentName:"p"},"Networks > Networks")," \u9875\u9762\u5e76\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Create")," \u6309\u94ae\u3002\u4f60\u9700\u8981\u6307\u5b9a\u540d\u79f0\uff0c\u9009\u62e9\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"Untagged Network")," \u5e76\u9009\u62e9\u96c6\u7fa4\u7f51\u7edc\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6399).Z,width:"3454",height:"1006"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Harvester v1.1.2 \u5f00\u59cb\uff0cHarvester \u652f\u6301\u66f4\u65b0\u548c\u5220\u9664 VM \u7f51\u7edc\u3002\u5728\u66f4\u65b0\u6216\u5220\u9664 VM \u7f51\u7edc\u4e4b\u524d\uff0c\u8bf7\u505c\u6b62\u6240\u6709\u53d7\u5f71\u54cd\u7684 VM\u3002")))}d.isMDXComponent=!0},66947:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-network-auto-3618d9cd389a84ca8185fb09b041592e.png"},46911:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-network-manual-d1eeea0862b8c37ac58c6cf08033c069.png"},6399:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-untagged-network-b8fd83d075ff3707598f4aa121927607.png"},73485:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-vlan-network-b49901aa27b8a9a0433047ddd118cb98.png"},32082:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/management-network-7e0ec51483792bed6b8124c98be4844d.png"}}]);