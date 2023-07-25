"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(n),k=a,c=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return n?r.createElement(c,i(i({ref:t},d),{},{components:n})):r.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},16849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:3,sidebar_label:"Harvester \u7f51\u7edc\u6df1\u5ea6\u89e3\u91ca",title:"Harvester \u7f51\u7edc\u6df1\u5ea6\u89e3\u91ca",keywords:["Harvester","\u7f51\u7edc","\u62d3\u6251"]},i=void 0,o={unversionedId:"networking/deep-dive",id:"version-v1.1/networking/deep-dive",title:"Harvester \u7f51\u7edc\u6df1\u5ea6\u89e3\u91ca",description:"\u4e0b\u9762\u7684\u7f51\u7edc\u62d3\u6251\u5c55\u793a\u4e86\u6211\u4eec\u662f\u5982\u4f55\u5b9e\u73b0 Harvester \u7f51\u7edc\u7684\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/networking/deep-dive.md",sourceDirName:"networking",slug:"/networking/deep-dive",permalink:"/zh/v1.1/networking/deep-dive",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/networking/deep-dive.md",tags:[],version:"v1.1",lastUpdatedAt:1672296666,formattedLastUpdatedAt:"2022\u5e7412\u670829\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Harvester \u7f51\u7edc\u6df1\u5ea6\u89e3\u91ca",title:"Harvester \u7f51\u7edc\u6df1\u5ea6\u89e3\u91ca",keywords:["Harvester","\u7f51\u7edc","\u62d3\u6251"]},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc",permalink:"/zh/v1.1/networking/harvester-network"},next:{title:"\u65e5\u5fd7\u5ba1\u8ba1\u4e8b\u4ef6",permalink:"/zh/v1.1/logging/"}},p={},m=[{value:"KubeVirt \u7f51\u7edc",id:"kubevirt-\u7f51\u7edc",level:2},{value:"Harvester \u7f51\u7edc",id:"harvester-\u7f51\u7edc",level:2},{value:"\u6865\u63a5\u7f51\u7edc",id:"\u6865\u63a5\u7f51\u7edc",level:3},{value:"\u7ba1\u7406\u7f51\u7edc",id:"\u7ba1\u7406\u7f51\u7edc",level:3},{value:"\u5916\u90e8\u7f51\u7edc",id:"\u5916\u90e8\u7f51\u7edc",level:2}],d={toc:m},u="wrapper";function s(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u7f51\u7edc\u62d3\u6251\u5c55\u793a\u4e86\u6211\u4eec\u662f\u5982\u4f55\u5b9e\u73b0 Harvester \u7f51\u7edc\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(23489).Z,width:"1175",height:"660"})),(0,a.kt)("p",null,"\u8be5\u56fe\u5305\u542b",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.1/networking/clusternetwork#%E5%86%85%E7%BD%AE%E9%9B%86%E7%BE%A4%E7%BD%91%E7%BB%9C"},"\u5185\u7f6e\u96c6\u7fa4\u7f51\u7edc mgmt")," \u548c\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"oob")," \u7684",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.1/networking/clusternetwork#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%9B%86%E7%BE%A4%E7%BD%91%E7%BB%9C"},"\u81ea\u5b9a\u4e49\u96c6\u7fa4\u7f51\u7edc"),"\u3002"),(0,a.kt)("p",null,"\u5982\u4e0a\u6240\u793a\uff0cHarvester \u7f51\u7edc\u4e3b\u8981\u5173\u6ce8 OSI \u6a21\u578b\u7b2c 2 \u5c42\u3002\u6211\u4eec\u5229\u7528 Linux \u7f51\u7edc\u8bbe\u5907\u548c\u534f\u8bae\uff0c\u4e3a VM \u5230 VM\u3001VM \u5230\u4e3b\u673a\u4ee5\u53ca VM \u5230\u5916\u90e8\u7f51\u7edc\u8bbe\u5907\u4e4b\u95f4\u7684\u901a\u4fe1\u6784\u5efa\u6d41\u91cf\u8def\u5f84\u3002"),(0,a.kt)("p",null,"Harvester \u7f51\u7edc\u7531\u4e09\u5c42\u7ec4\u6210\uff0c\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"KubeVirt \u7f51\u7edc\u5c42")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Harvester \u7f51\u7edc\u5c42")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5916\u90e8\u7f51\u7edc\u5c42"))),(0,a.kt)("h2",{id:"kubevirt-\u7f51\u7edc"},"KubeVirt \u7f51\u7edc"),(0,a.kt)("p",null,"KubeVirt \u4e00\u822c\u7528\u4e8e\u5728 Kubernetes Pod \u5185\u8fd0\u884c VM\u3002KubeVirt \u7f51\u7edc\u5728 Pod \u548c VM \u4e4b\u95f4\u6784\u5efa\u7f51\u7edc\u8def\u5f84\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://kubevirt.io/2018/KubeVirt-Network-Deep-Dive.html"},"KubeVirt \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"harvester-\u7f51\u7edc"},"Harvester \u7f51\u7edc"),(0,a.kt)("p",null,"Harvester \u7f51\u7edc\u65e8\u5728\u6784\u5efa Pod \u548c\u4e3b\u673a\u7f51\u7edc\u4e4b\u95f4\u7684\u7f51\u7edc\u8def\u5f84\uff0c\u5b9e\u73b0\u4e86\u7ba1\u7406\u7f51\u7edc\u3001VLAN \u7f51\u7edc\u548c Untagged \u7f51\u7edc\u3002\u6211\u4eec\u53ef\u4ee5\u5c06\u540e\u9762\u7684\u4e24\u4e2a\u7f51\u7edc\u79f0\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u6865\u63a5\u7f51\u7edc"),"\uff0c\u56e0\u4e3a\u6865\u63a5\u5bf9\u5b83\u4eec\u7684\u5b9e\u73b0\u975e\u5e38\u5173\u952e\u3002"),(0,a.kt)("h3",{id:"\u6865\u63a5\u7f51\u7edc"},"\u6865\u63a5\u7f51\u7edc"),(0,a.kt)("p",null,"\u6211\u4eec\u5229\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"multus CNI")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"bridge CNI")," \u6765\u5b9e\u73b0\u6865\u63a5\u7f51\u7edc\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Multus CNI \u662f Kubernetes \u7684\u4e00\u4e2a\u5bb9\u5668\u7f51\u7edc\u63a5\u53e3 (CNI) \u63d2\u4ef6\uff0c\u53ef\u4ee5\u5c06\u591a\u4e2a\u7f51\u7edc\u63a5\u53e3\u9644\u52a0\u5230\u4e00\u4e2a Pod\u3002\u5b83\u5141\u8bb8\u865a\u62df\u673a\u6709\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406\u7f51\u7edc\u7684 NIC\uff0c\u4ee5\u53ca\u591a\u4e2a\u7528\u4e8e\u6865\u63a5\u7f51\u7edc\u7684 NIC\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u7f51\u6865 CNI \u540e\uff0cVM Pod \u5c06\u63a5\u5165\u5230\u7f51\u7edc\u9644\u52a0\u5b9a\u4e49\u914d\u7f6e\u4e2d\u6307\u5b9a\u7684 L2 \u7f51\u6865\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'# Example 1\n{\n    "cniVersion": "0.3.1",\n    "name": "vlan100",\n    "type": "bridge",\n    "bridge": "mgmt-br",\n    "promiscMode": true,\n    "vlan": 100,\n}\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'# Example 2\n{\n    "cniVersion": "0.3.1",\n    "name": "untagged-network",\n    "type": "bridge",\n    "bridge": "oob-br",\n    "promiscMode": true,\n    "ipam": {}\n}\n')),(0,a.kt)("p",{parentName:"li"},"\u793a\u4f8b 1 \u662f VLAN ID \u4e3a 100 \u7684\u5178\u578b VLAN \u914d\u7f6e\uff0c\u800c\u793a\u4f8b 2 \u662f\u6ca1\u6709 VLAN ID \u7684 Untagged \u7f51\u7edc\u914d\u7f6e\u3002\u4f7f\u7528\u793a\u4f8b 1 \u914d\u7f6e\u7684 VM Pod \u5c06\u63a5\u5165\u7f51\u6865 ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-br"),"\uff0c\u800c\u4f7f\u7528\u793a\u4f8b 2 \u7684 VM Pod \u5c06\u63a5\u5165\u7f51\u6865 ",(0,a.kt)("inlineCode",{parentName:"p"},"oob-br"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u5b9e\u73b0\u9ad8\u53ef\u7528\u548c\u5bb9\u9519\uff0c\u521b\u5efa\u7ed1\u5b9a\u771f\u5b9e\u7f51\u5361\u7684 bond \u8bbe\u5907\uff0c\u5c06\u5176\u4f5c\u4e3a\u7f51\u6865\u7684\u4e0a\u884c\u94fe\u8def\u3002\u6b64 bond \u8bbe\u5907\u5141\u8bb8\u4f20\u8f93\u5e26\u6709\u76ee\u6807\u6807\u7b7e\u7684\u6d41\u91cf/\u6570\u636e\u5305\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"harvester-0:/home/rancher # bridge -c vlan show dev oob-bo\nport       vlan ids\noob-bo     1 PVID Egress Untagged\n           100\n           200\n")),(0,a.kt)("p",{parentName:"li"},"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0cbond ",(0,a.kt)("inlineCode",{parentName:"p"},"oob-bo")," \u5141\u8bb8\u5e26\u6709\u6807\u7b7e 1\u3001100 \u6216 200 \u7684\u5305\u901a\u8fc7\u3002"))),(0,a.kt)("h3",{id:"\u7ba1\u7406\u7f51\u7edc"},"\u7ba1\u7406\u7f51\u7edc"),(0,a.kt)("p",null,"\u7ba1\u7406\u7f51\u7edc\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/getting-started/kubernetes/flannel/flannel"},"Canal")," \u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0cHarvester \u914d\u7f6e\u8282\u70b9 IP \u7684 Canal \u63a5\u53e3\uff0c\u662f\u7f51\u6865 ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-br")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-br")," \u7684 VLAN \u5b50\u63a5\u53e3\u3002\u8be5\u8bbe\u8ba1\u6709\u4e24\u4e2a\u597d\u5904\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"mgmt")," \u96c6\u7fa4\u7f51\u7edc\u540c\u65f6\u652f\u6301\u7ba1\u7406\u7f51\u7edc\u548c\u6865\u63a5\u7f51\u7edc\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 VLAN \u7f51\u7edc\u63a5\u53e3\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a\u7ba1\u7406\u7f51\u7edc\u5206\u914d\u4e00\u4e2a VLAN ID\u3002")),(0,a.kt)("p",null,"\u4f5c\u4e3a mgmt \u96c6\u7fa4\u7f51\u7edc\u7684\u7ec4\u6210\u90e8\u5206\uff0c\u7f51\u6865 mgmt-br\u3001bond mgmt-bo \u548c VLAN \u8bbe\u5907\u65e0\u6cd5\u88ab\u5220\u9664\u6216\u66f4\u6539\u3002"),(0,a.kt)("h2",{id:"\u5916\u90e8\u7f51\u7edc"},"\u5916\u90e8\u7f51\u7edc"),(0,a.kt)("p",null,"\u5916\u90e8\u7f51\u7edc\u8bbe\u5907\u901a\u5e38\u6307\u4ea4\u6362\u673a\u548c DHCP \u670d\u52a1\u5668\u3002\u901a\u8fc7\u96c6\u7fa4\u7f51\u7edc\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u4e3b\u673a\u7f51\u5361\u5206\u7ec4\uff0c\u5e76\u5c06\u5b83\u4eec\u8fde\u63a5\u5230\u4e0d\u540c\u7684\u4ea4\u6362\u673a\u6765\u8fdb\u884c\u6d41\u91cf\u9694\u79bb\u3002\u4f7f\u7528\u8bf4\u660e\u5982\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8981\u5141\u8bb8\u5e26\u6709\u6807\u7b7e\u7684\u6570\u636e\u5305\u901a\u8fc7\uff0c\u4f60\u9700\u8981\u5c06\u5916\u90e8\u4ea4\u6362\u673a\u6216\u5176\u4ed6\u8bbe\u5907\uff08\u5982 DHCP \u670d\u52a1\u5668\uff09\u7684\u7aef\u53e3\u7c7b\u578b\u8bbe\u7f6e\u4e3a Trunk \u6216 Hybrid \u6a21\u5f0f\uff0c\u5e76\u5141\u8bb8\u6307\u5b9a\u7684 VLAN \u6807\u7b7e\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f60\u9700\u8981\u6839\u636e\u5bf9\u7b49\u4e3b\u673a\u7684 Bond \u6a21\u5f0f\u5728\u4ea4\u6362\u673a\u4e0a\u914d\u7f6e\u94fe\u8def\u805a\u5408\u3002\u94fe\u8def\u805a\u5408\u652f\u6301\u624b\u52a8\u6a21\u5f0f\u548c LACP \u6a21\u5f0f\u3002\u4e0b\u9762\u5217\u51fa\u4e86 Bond \u6a21\u5f0f\u548c\u94fe\u8def\u805a\u5408\u6a21\u5f0f\u7684\u5bf9\u5e94\u5173\u7cfb\u3002"),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Bond \u6a21\u5f0f"),(0,a.kt)("th",{parentName:"tr",align:null},"\u94fe\u8def\u805a\u5408\u6a21\u5f0f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 0(balance-rr)"),(0,a.kt)("td",{parentName:"tr",align:null},"manual")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 1(active-backup)"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mdoe 2(balance-oxr)"),(0,a.kt)("td",{parentName:"tr",align:null},"manual")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 3(broadcast)"),(0,a.kt)("td",{parentName:"tr",align:null},"manual")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 4(802.3ad)"),(0,a.kt)("td",{parentName:"tr",align:null},"LACP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 5(balance-tlb)"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 6(balance-alb)"),(0,a.kt)("td",{parentName:"tr",align:null},"none"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u5e0c\u671b VLAN \u4e2d\u7684\u865a\u62df\u673a\u80fd\u591f\u901a\u8fc7 DHCP \u534f\u8bae\u83b7\u53d6 IP \u5730\u5740\uff0c\u8bf7\u5728 DHCP \u670d\u52a1\u5668\u4e2d\u4e3a\u8be5 VLAN \u914d\u7f6e IP \u6c60\u3002"))))}s.isMDXComponent=!0},23489:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/topology-92ab59d983544bad738764a2105c9a06.png"}}]);