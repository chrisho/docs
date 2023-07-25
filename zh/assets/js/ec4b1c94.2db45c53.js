"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7591],{3905:(t,e,r)=>{r.d(e,{Zo:()=>k,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),m=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},k=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},N="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),N=m(r),s=n,f=N["".concat(d,".").concat(s)]||N[s]||o[s]||l;return r?a.createElement(f,i(i({ref:e},k),{},{components:r})):a.createElement(f,i({ref:e},k))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[N]="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},93166:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=r(83117),n=(r(67294),r(3905));const l={id:"requirements",sidebar_position:1,sidebar_label:"\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42",title:"\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42",keywords:["\u5b89\u88c5\u8981\u6c42"],Description:"Harvester \u5b89\u88c5\u8981\u6c42\u6982\u8ff0"},i=void 0,p={unversionedId:"install/requirements",id:"install/requirements",title:"\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42",description:"Harvester \u662f\u8fd0\u884c\u5728\u88f8\u673a\u670d\u52a1\u5668\u4e0a\u7684 HCI \u89e3\u51b3\u65b9\u6848\uff0c\u8981\u6b63\u5e38\u8fd0\u884c\u548c\u5b89\u88c5 Harvester\uff0c\u8282\u70b9\u786c\u4ef6\u548c\u7f51\u7edc\u9700\u8981\u6ee1\u8db3\u6700\u4f4e\u8981\u6c42\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/requirements.md",sourceDirName:"install",slug:"/install/requirements",permalink:"/zh/dev/install/requirements",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/install/requirements.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"requirements",sidebar_position:1,sidebar_label:"\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42",title:"\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42",keywords:["\u5b89\u88c5\u8981\u6c42"],Description:"Harvester \u5b89\u88c5\u8981\u6c42\u6982\u8ff0"},sidebar:"sidebar",previous:{title:"Harvester \u4ecb\u7ecd",permalink:"/zh/dev/"},next:{title:"\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42",permalink:"/zh/dev/install/requirements"}},d={},m=[{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42",level:2},{value:"\u7f51\u7edc\u8981\u6c42",id:"\u7f51\u7edc\u8981\u6c42",level:2},{value:"Harvester \u8282\u70b9\u7684\u5165\u7ad9\u89c4\u5219",id:"harvester-\u8282\u70b9\u7684\u5165\u7ad9\u89c4\u5219",level:3},{value:"\u5c06 Harvester \u4e0e Rancher \u96c6\u6210\u7684\u5165\u7ad9\u89c4\u5219",id:"\u5c06-harvester-\u4e0e-rancher-\u96c6\u6210\u7684\u5165\u7ad9\u89c4\u5219",level:3},{value:"K3s \u6216 RKE/RKE2 \u96c6\u7fa4\u7684\u5165\u7ad9\u89c4\u5219",id:"k3s-\u6216-rkerke2-\u96c6\u7fa4\u7684\u5165\u7ad9\u89c4\u5219",level:3}],k={toc:m},N="wrapper";function o(t){let{components:e,...r}=t;return(0,n.kt)(N,(0,a.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Harvester \u662f\u8fd0\u884c\u5728\u88f8\u673a\u670d\u52a1\u5668\u4e0a\u7684 HCI \u89e3\u51b3\u65b9\u6848\uff0c\u8981\u6b63\u5e38\u8fd0\u884c\u548c\u5b89\u88c5 Harvester\uff0c\u8282\u70b9\u786c\u4ef6\u548c\u7f51\u7edc\u9700\u8981\u6ee1\u8db3\u6700\u4f4e\u8981\u6c42\u3002"),(0,n.kt)("h2",{id:"\u786c\u4ef6\u8981\u6c42"},"\u786c\u4ef6\u8981\u6c42"),(0,n.kt)("p",null,"\u8981\u8fdb\u884c\u5b89\u88c5\u548c\u6d4b\u8bd5\uff0cHarvester \u8282\u70b9\u786c\u4ef6\u7684\u8981\u6c42\u548c\u63a8\u8350\u8bbe\u7f6e\u5982\u4e0b\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8981\u6c42\u548c\u63a8\u8350"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4ec5\u652f\u6301 x86_64\u3002\u9700\u8981\u786c\u4ef6\u8f85\u52a9\u865a\u62df\u5316\u30028 \u6838\uff08\u81f3\u5c11\uff09\u7528\u4e8e\u6d4b\u8bd5\uff1b\u751f\u4ea7\u4e2d\u63a8\u8350\u4f7f\u7528 16 \u6838\u6216\u4ee5\u4e0a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5185\u5b58"),(0,n.kt)("td",{parentName:"tr",align:"left"},"32 GB\uff08\u81f3\u5c11\uff09\u7528\u4e8e\u6d4b\u8bd5\uff1b\u751f\u4ea7\u4e2d\u63a8\u8350\u4f7f\u7528 64 GB \u6216\u4ee5\u4e0a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u78c1\u76d8\u5bb9\u91cf"),(0,n.kt)("td",{parentName:"tr",align:"left"},"250 GB\uff08\u81f3\u5c11\uff09\u7528\u4e8e\u6d4b\u8bd5\uff1b\u751f\u4ea7\u4e2d\u63a8\u8350\u4f7f\u7528 500 GB \u6216\u4ee5\u4e0a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u78c1\u76d8\u6027\u80fd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u4e2a\u78c1\u76d8 5,000+ \u968f\u673a IOPS (SSD/NVMe)\u3002\u7ba1\u7406\u8282\u70b9\uff08\u524d 3 \u4e2a\u8282\u70b9\uff09\u5fc5\u987b",(0,n.kt)("a",{parentName:"td",href:"https://www.ibm.com/cloud/blog/using-fio-to-tell-whether-your-storage-is-fast-enough-for-etcd"},"\u5bf9 etcd \u800c\u8a00\u8db3\u591f\u5feb"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u5361"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1 Gbps \u4ee5\u592a\u7f51\uff08\u81f3\u5c11\uff09\u7528\u4e8e\u6d4b\u8bd5\uff1b\u751f\u4ea7\u4e2d\u5efa\u8bae\u4f7f\u7528 10 Gbps \u6216\u4ee5\u4e0a\u7684\u4ee5\u592a\u7f51")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u7edc\u4ea4\u6362\u673a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"VLAN \u652f\u6301\u6240\u9700\u7684\u7aef\u53e3\u4e2d\u7ee7\u3002")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u8981\u5145\u5206\u53d1\u6325 Harvester \u7684\u591a\u8282\u70b9\u7279\u6027\uff0c\u4f60\u9700\u8981\u4e00\u4e2a\u4e09\u8282\u70b9\u96c6\u7fa4\u3002"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u8282\u70b9\u9ed8\u8ba4\u4e3a\u96c6\u7fa4\u7684\u7ba1\u7406\u8282\u70b9\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5f53\u8282\u70b9\u6570\u91cf\u5927\u4e8e\u7b49\u4e8e\u4e09\u4e2a\u65f6\uff0c\u5148\u6dfb\u52a0\u7684\u53e6\u5916\u4e24\u4e2a\u8282\u70b9\u4f1a\u81ea\u52a8\u5347\u7ea7\u4e3a\u7ba1\u7406\u8282\u70b9\uff0c\u4ece\u800c\u5f62\u6210\u4e00\u4e2a\u9ad8\u53ef\u7528 (HA) \u96c6\u7fa4\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528\u670d\u52a1\u5668\u7ea7\u786c\u4ef6\u4ee5\u83b7\u5f97\u6700\u4f73\u6548\u679c\u3002\u7b14\u8bb0\u672c\u7535\u8111\u548c\u5d4c\u5957\u865a\u62df\u5316\u4e0d\u53d7\u5b98\u65b9\u652f\u6301\u3002"),(0,n.kt)("li",{parentName:"ul"},"Linux \u4e2d\u4ece ",(0,n.kt)("inlineCode",{parentName:"li"},"/sys/class/dmi/id/product_uuid")," \u83b7\u53d6\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"product_uuid")," \u5fc5\u987b\u5728\u6bcf\u4e2a\u8282\u70b9\u4e2d\u662f\u552f\u4e00\u7684\u3002\u5426\u5219\uff0c\u865a\u62df\u673a\u70ed\u8fc1\u79fb\u7b49\u529f\u80fd\u5c06\u53d7\u5230\u5f71\u54cd\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4025"},"#4025"),"\u3002"))),(0,n.kt)("h2",{id:"\u7f51\u7edc\u8981\u6c42"},"\u7f51\u7edc\u8981\u6c42"),(0,n.kt)("p",null,"Harvester \u8282\u70b9\u5177\u6709\u4ee5\u4e0b\u7f51\u7edc\u8981\u6c42\u3002"),(0,n.kt)("h3",{id:"harvester-\u8282\u70b9\u7684\u5165\u7ad9\u89c4\u5219"},"Harvester \u8282\u70b9\u7684\u5165\u7ad9\u89c4\u5219"),(0,n.kt)("p",null,"Harvester \u8282\u70b9\u9700\u8981\u4ee5\u4e0b\u7aef\u53e3\u8fde\u63a5\u6216\u5165\u7ad9\u89c4\u5219\u3002\u6240\u6709\u51fa\u7ad9\u6d41\u91cf\u901a\u5e38\u90fd\u662f\u5141\u8bb8\u7684\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u534f\u8bae"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7aef\u53e3"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6e90"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2379"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"etcd \u5ba2\u6237\u7aef\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2381"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"etcd \u5065\u5eb7\u68c0\u67e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2380"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"etcd \u5bf9\u7b49\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10010"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Containerd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6443"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9345"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10252"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager \u5065\u5eb7\u68c0\u67e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10257"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager \u5b89\u5168\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10251"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-scheduler \u5065\u5eb7\u68c0\u67e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10259"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"kube-scheduler \u5b89\u5168\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10250"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kubelet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10256"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-proxy \u5065\u5eb7\u68c0\u67e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10258"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-controller-manager")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9091"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Canal calico-node felix")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9099"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Canal CNI \u5065\u5eb7\u68c0\u67e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8472"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4f7f\u7528 VxLAN \u7684 Canal CNI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2112"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-vip")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6444"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RKE2 Agent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6060"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-disk-manager")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10246/10247/10248/10249"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx worker \u8fdb\u7a0b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8181"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8444"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10245"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"80"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9796"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-exporter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"30000-32767"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NodePort \u7aef\u53e3\u8303\u56f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sshd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"68"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Wicked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3260"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iscsid")))),(0,n.kt)("h3",{id:"\u5c06-harvester-\u4e0e-rancher-\u96c6\u6210\u7684\u5165\u7ad9\u89c4\u5219"},"\u5c06 Harvester \u4e0e Rancher \u96c6\u6210\u7684\u5165\u7ad9\u89c4\u5219"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u60f3",(0,n.kt)("a",{parentName:"p",href:"/zh/dev/rancher/index"},"\u5c06 Harvester \u4e0e Rancher \u96c6\u6210"),"\uff0c\u4f60\u9700\u8981\u786e\u4fdd\u6240\u6709 Harvester \u8282\u70b9\u90fd\u53ef\u4ee5\u8fde\u63a5\u5230 Rancher \u8d1f\u8f7d\u5747\u8861\u5668\u7684 TCP \u7aef\u53e3 ",(0,n.kt)("strong",{parentName:"p"},"443"),"\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528 Rancher \u5c06 Kubernetes \u96c6\u7fa4\u865a\u62df\u673a\u914d\u7f6e\u5230 Harvester \u65f6\uff0c\u4f60\u9700\u8981\u80fd\u591f\u8fde\u63a5\u5230 Rancher \u8d1f\u8f7d\u5747\u8861\u5668\u7684 TCP \u7aef\u53e3 ",(0,n.kt)("strong",{parentName:"p"},"443"),"\uff0c\u5426\u5219 Rancher \u5c06\u65e0\u6cd5\u7ba1\u7406\u96c6\u7fa4\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/overview/architecture/"},"Rancher \u67b6\u6784"),"\u3002"),(0,n.kt)("h3",{id:"k3s-\u6216-rkerke2-\u96c6\u7fa4\u7684\u5165\u7ad9\u89c4\u5219"},"K3s \u6216 RKE/RKE2 \u96c6\u7fa4\u7684\u5165\u7ad9\u89c4\u5219"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u90e8\u7f72\u5728 Harvester \u865a\u62df\u673a\u4e2d\u7684 Guest \u96c6\u7fa4\u7684\u7aef\u53e3\u8981\u6c42\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u94fe\u63a5\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/#networking"},"K3s \u7f51\u7edc")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/os/#ports"},"RKE \u7aef\u53e3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rke2.io/install/requirements#networking"},"RKE2 \u7f51\u7edc"))))}o.isMDXComponent=!0}}]);