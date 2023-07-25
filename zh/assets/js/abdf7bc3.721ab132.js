"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),l=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),v=a,u=d["".concat(o,".").concat(v)]||d[v]||m[v]||r;return n?i.createElement(u,p(p({ref:t},s),{},{components:n})):i.createElement(u,p({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=v;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:a,p[1]=c;for(var l=2;l<r;l++)p[l]=n[l];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},80523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(83117),a=(n(67294),n(3905));const r={sidebar_position:6,sidebar_label:"PCI \u8bbe\u5907",title:"PCI \u8bbe\u5907\uff08\u5b9e\u9a8c\u529f\u80fd\uff09"},p=void 0,c={unversionedId:"advanced/pcidevices",id:"version-v1.1/advanced/pcidevices",title:"PCI \u8bbe\u5907\uff08\u5b9e\u9a8c\u529f\u80fd\uff09",description:"\u4ece v1.1.0 \u8d77\u53ef\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/advanced/pcidevices.md",sourceDirName:"advanced",slug:"/advanced/pcidevices",permalink:"/zh/v1.1/advanced/pcidevices",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/advanced/pcidevices.md",tags:[],version:"v1.1",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"PCI \u8bbe\u5907",title:"PCI \u8bbe\u5907\uff08\u5b9e\u9a8c\u529f\u80fd\uff09"},sidebar:"tutorialSidebar",previous:{title:"VM \u5bfc\u5165",permalink:"/zh/v1.1/advanced/vmimport"},next:{title:"Rancher \u96c6\u6210",permalink:"/zh/v1.1/rancher/rancher-integration"}},o={},l=[{value:"\u5728 PCI \u8bbe\u5907\u4e0a\u542f\u7528\u76f4\u901a",id:"\u5728-pci-\u8bbe\u5907\u4e0a\u542f\u7528\u76f4\u901a",level:2},{value:"\u5c06 PCI \u8bbe\u5907\u9644\u52a0\u5230 VM",id:"\u5c06-pci-\u8bbe\u5907\u9644\u52a0\u5230-vm",level:2},{value:"\u5728 VM \u5185\u4f7f\u7528\u76f4\u901a\u7684 PCI \u8bbe\u5907",id:"\u5728-vm-\u5185\u4f7f\u7528\u76f4\u901a\u7684-pci-\u8bbe\u5907",level:2},{value:"\u5728 VM \u5185\u4e3a PCI \u8bbe\u5907\u5b89\u88c5\u9a71\u52a8\u7a0b\u5e8f",id:"\u5728-vm-\u5185\u4e3a-pci-\u8bbe\u5907\u5b89\u88c5\u9a71\u52a8\u7a0b\u5e8f",level:2},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:2}],s={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4ece v1.1.0 \u8d77\u53ef\u7528")),(0,a.kt)("p",null,"\u5728 Harvester \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"PCIDevice")," \u6307\u7684\u662f\u5177\u6709 PCI \u5730\u5740\u7684\u4e3b\u673a\u8bbe\u5907\u3002\n\u4f60\u53ef\u4ee5\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"PCIDeviceClaim")," \u8d44\u6e90\u6216\u4f7f\u7528 UI\uff0c\u901a\u8fc7\u865a\u62df\u673a\u76d1\u63a7\u7a0b\u5e8f\u5c06\u8bbe\u5907\u76f4\u901a\u5230 VM\u3002\u901a\u8fc7\u865a\u62df\u673a\u76d1\u63a7\u7a0b\u5e8f\u76f4\u901a\u8bbe\u5907\u540e\uff0cVM \u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u8bbe\u5907\u5e76\u9ad8\u6548\u5730\u4f7f\u7528\u8bbe\u5907\u3002\u865a\u62df\u673a\u751a\u81f3\u53ef\u4ee5\u5b89\u88c5\u8be5\u8bbe\u5907\u7684\u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"\u8be5\u8fc7\u7a0b\u662f\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," \u63d2\u4ef6\u6765\u5b8c\u6210\u7684\u3002"),(0,a.kt)("p",null,"\u8981\u4f7f\u7528 PCI \u8bbe\u5907\u529f\u80fd\uff0c\u4f60\u9700\u8981\u5148\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," \u63d2\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(93400).Z,width:"1572",height:"596"})),(0,a.kt)("h2",{id:"\u5728-pci-\u8bbe\u5907\u4e0a\u542f\u7528\u76f4\u901a"},"\u5728 PCI \u8bbe\u5907\u4e0a\u542f\u7528\u76f4\u901a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u524d\u5f80 ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced > PCI Devices")," \u9875\u9762\uff1a"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(25199).Z,width:"1440",height:"810"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u8f93\u5165\u63d0\u4f9b\u5546\u540d\u79f0\uff08\u4f8b\u5982 NVIDIA\u3001Intel \u7b49\uff09\u6216\u8bbe\u5907\u540d\u79f0\u641c\u7d22\u4f60\u7684\u8bbe\u5907\uff1a"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(9902).Z,width:"1440",height:"810"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u542f\u7528\u76f4\u901a\u7684\u8bbe\u5907\uff1a"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(80007).Z,width:"1440",height:"810"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7136\u540e\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Enable Passthrough")," \u5e76\u9605\u8bfb\u8b66\u544a\u6d88\u606f\u3002\u5982\u679c\u4f60\u60f3\u542f\u7528\u8fd9\u4e9b\u8bbe\u5907\uff0c\u8bf7\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Enable")," \u5e76\u7b49\u5f85\u6240\u6709\u8bbe\u5907\u7684\u72b6\u6001\u53d8\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Enabled"),"\u3002"),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf7\u4e0d\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"\u5bbf\u4e3b\u673a\u4e13\u7528"),"\u7684 PCI \u8bbe\u5907\uff08\u4f8b\u5982\uff0c\u7ba1\u7406\u7f51\u7edc\u548c VLAN \u7f51\u7edc\u7684\u7f51\u5361\uff09\u3002\u9519\u8bef\u7684\u8bbe\u5907\u5206\u914d\u53ef\u80fd\u4f1a\u635f\u574f\u4f60\u7684\u96c6\u7fa4\uff08\u5305\u62ec\u8282\u70b9\u6545\u969c\uff09\u3002")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(60684).Z,width:"1440",height:"810"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(90003).Z,width:"1440",height:"810"})))),(0,a.kt)("h2",{id:"\u5c06-pci-\u8bbe\u5907\u9644\u52a0\u5230-vm"},"\u5c06 PCI \u8bbe\u5907\u9644\u52a0\u5230 VM"),(0,a.kt)("p",null,"\u542f\u7528\u8fd9\u4e9b PCI \u8bbe\u5907\u540e\uff0c\u4f60\u53ef\u4ee5\u5bfc\u822a\u5230 ",(0,a.kt)("strong",{parentName:"p"},"Virtual Machines")," \u9875\u9762\u5e76\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"p"},"Edit Config")," \u6765\u76f4\u901a\u8fd9\u4e9b\u8bbe\u5907\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(22659).Z,width:"1440",height:"810"})),(0,a.kt)("p",null,"\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"p"},"PCI Devices")," \u5e76\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"Available PCI Devices")," \u4e0b\u62c9\u83dc\u5355\u3002\u4ece\u663e\u793a\u7684\u5217\u8868\u4e2d\u9009\u62e9\u8981\u9644\u52a0\u7684\u8bbe\u5907\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Save"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(15465).Z,width:"1440",height:"810"})),(0,a.kt)("h2",{id:"\u5728-vm-\u5185\u4f7f\u7528\u76f4\u901a\u7684-pci-\u8bbe\u5907"},"\u5728 VM \u5185\u4f7f\u7528\u76f4\u901a\u7684 PCI \u8bbe\u5907"),(0,a.kt)("p",null,"\u542f\u52a8 VM \u5e76\u5728 VM \u4e2d\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"lspci"),"\uff0c\u5373\u4f7f VM \u4e2d\u7684 PCI \u5730\u5740\u4e0d\u4e00\u5b9a\u4e0e\u4e3b\u673a\u4e2d\u7684 PCI \u5730\u5740\u5339\u914d\uff0c\u9644\u52a0\u7684 PCI \u8bbe\u5907\u4e5f\u5c06\u663e\u793a\u5728\u8fd9\u91cc\u3002"),(0,a.kt)("h2",{id:"\u5728-vm-\u5185\u4e3a-pci-\u8bbe\u5907\u5b89\u88c5\u9a71\u52a8\u7a0b\u5e8f"},"\u5728 VM \u5185\u4e3a PCI \u8bbe\u5907\u5b89\u88c5\u9a71\u52a8\u7a0b\u5e8f"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6d89\u53ca\u7684\u64cd\u4f5c\u4e0e\u5728\u4e3b\u673a\u4e2d\u5b89\u88c5\u9a71\u52a8\u7a0b\u5e8f\u4e00\u6837\u3002PCI \u900f\u4f20\u529f\u80fd\u5c06\u4e3b\u673a\u8bbe\u5907\u7ed1\u5b9a\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"vfio-pci")," \u9a71\u52a8\u7a0b\u5e8f\uff0c\u8ba9 VM \u80fd\u591f\u4f7f\u7528\u81ea\u5df1\u7684\u9a71\u52a8\u7a0b\u5e8f\u3002\u4f60\u53ef\u4ee5\u67e5\u770b\u5b89\u88c5\u5728 VM \u4e2d\u7684 NVIDIA \u9a71\u52a8\u7a0b\u5e8f\u7684",(0,a.kt)("a",{parentName:"p",href:"https://tobilehman.com/posts/suse-harvester-pci/#toc"},"\u5c4f\u5e55\u622a\u56fe"),"\uff0c\u5176\u4e2d\u5305\u62ec\u8bc1\u660e\u8bbe\u5907\u9a71\u52a8\u7a0b\u5e8f\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u7684 CUDA \u793a\u4f8b\u3002"),(0,a.kt)("h2",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"1.1.0 \u7248\u672c\u7684 PCI \u76f4\u901a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"vendorId:deviceId")," \u6765\u5339\u914d VM \u4e0e\u8bbe\u5907\u3002\u6362\u8a00\u4e4b\uff0c\u5982\u679c\u591a\u4e2a\u8bbe\u5907\u5177\u6709\u76f8\u540c\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"vendorId:deviceId")," \u5bf9\uff0cKubeVirt \u5c06\u968f\u673a\u9009\u62e9\u5206\u914d\u7ed9 VM \u7684\u8bbe\u5907\u30021.1.2 \u7248\u672c\u5c06\u4f7f\u7528\u65b0\u7684 deviceplugin \u5b9e\u73b0\u6765\u89e3\u51b3\u6b64\u95ee\u9898\u3002")))}m.isMDXComponent=!0},25199:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/advanced-pcidevices-index-10becdf0d781a4e708413d422356740e.png"},90003:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/enable-pcidevices-done-6abc17f90036b1314c0085cd7ebe4808.png"},60684:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/enable-pcidevices-inprogress-c687c20689e9d90b585c892b4ab731c2.png"},9902:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/search-pcidevices-e72c0e5794891383d5de58edea8f58b0.png"},80007:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/select-pcidevices-9f4f0947bfb5f60b38f542f98f08575b.png"},15465:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/vm-pcidevices-attach-8909167894055bfbd363b32fcad812e1.png"},22659:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/vm-pcidevices-edit-config-fce9da60aa378d6213ba7a8352acfc16.png"},93400:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/EnableAddon-2d1d07ec9a24c2f478806943fb79214b.png"}}]);