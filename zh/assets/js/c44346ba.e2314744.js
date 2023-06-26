"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),k=n,v=u["".concat(d,".").concat(k)]||u[k]||c[k]||l;return r?a.createElement(v,i(i({ref:t},s),{},{components:r})):a.createElement(v,i({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},83349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],Description:"Harvester \u4e2d\u7684 k8s \u96c6\u7fa4\u4f7f\u7528\u7684 Harvester Cloud Provider \u63d0\u4f9b\u4e86\u4e00\u4e2a CSI \u63a5\u53e3\u548c Cloud Controller Manager (CCM)\uff0c\u6765\u5b9e\u73b0\u4e00\u4e2a\u5185\u7f6e\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u3002"},i=void 0,o={unversionedId:"rancher/cloud-provider",id:"version-v1.0/rancher/cloud-provider",title:"Harvester Cloud Provider",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u7684 Harvester \u4e3b\u673a\u9a71\u52a8\u5728 Rancher \u4e2d\u914d\u7f6e RKE1 \u548c RKE2 \u96c6\u7fa4\u3002Harvester \u4f1a\u4e3a\u8fd9\u4e9b Kubernetes \u96c6\u7fa4\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u5668\u548c\u96c6\u7fa4\u6301\u4e45\u5b58\u50a8\u652f\u6301\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/rancher/cloud-provider.md",sourceDirName:"rancher",slug:"/rancher/cloud-provider",permalink:"/zh/v1.0/rancher/cloud-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/rancher/cloud-provider.md",tags:[],version:"v1.0",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],Description:"Harvester \u4e2d\u7684 k8s \u96c6\u7fa4\u4f7f\u7528\u7684 Harvester Cloud Provider \u63d0\u4f9b\u4e86\u4e00\u4e2a CSI \u63a5\u53e3\u548c Cloud Controller Manager (CCM)\uff0c\u6765\u5b9e\u73b0\u4e00\u4e2a\u5185\u7f6e\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa K3s Kubernetes \u96c6\u7fa4",permalink:"/zh/v1.0/rancher/node/k3s-cluster"},next:{title:"Harvester CSI Driver",permalink:"/zh/v1.0/rancher/csi-driver"}},d={},p=[{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u524d\u63d0",id:"\u524d\u63d0",level:3},{value:"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230 RKE1 \u96c6\u7fa4",id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230-rke1-\u96c6\u7fa4",level:3},{value:"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230 RKE2 \u96c6\u7fa4\u5b9e\u9a8c\u529f\u80fd",id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230-rke2-\u96c6\u7fa4\u5b9e\u9a8c\u529f\u80fd",level:3},{value:"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230 K3s \u96c6\u7fa4\u5b9e\u9a8c\u6027",id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230-k3s-\u96c6\u7fa4\u5b9e\u9a8c\u6027",level:3},{value:"\u90e8\u7f72\u5916\u90e8\u4e91\u63d0\u4f9b\u5546",id:"\u90e8\u7f72\u5916\u90e8\u4e91\u63d0\u4f9b\u5546",level:3},{value:"\u5347\u7ea7 Cloud Provider",id:"\u5347\u7ea7-cloud-provider",level:2},{value:"\u5347\u7ea7 RKE2",id:"\u5347\u7ea7-rke2",level:3},{value:"\u5347\u7ea7 RKE/K3s",id:"\u5347\u7ea7-rkek3s",level:3},{value:"\u8d1f\u8f7d\u5747\u8861\u5668\u652f\u6301",id:"\u8d1f\u8f7d\u5747\u8861\u5668\u652f\u6301",level:2},{value:"IPAM",id:"ipam",level:3},{value:"\u5065\u5eb7\u68c0\u67e5",id:"\u5065\u5eb7\u68c0\u67e5",level:3}],s={toc:p};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u7684 Harvester \u4e3b\u673a\u9a71\u52a8\u5728 Rancher \u4e2d\u914d\u7f6e ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.0/rancher/node/rke1-cluster"},"RKE1")," \u548c ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.0/rancher/node/rke2-cluster"},"RKE2")," \u96c6\u7fa4\u3002Harvester \u4f1a\u4e3a\u8fd9\u4e9b Kubernetes \u96c6\u7fa4\u63d0\u4f9b",(0,n.kt)("a",{parentName:"p",href:"#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%99%A8%E6%94%AF%E6%8C%81"},"\u8d1f\u8f7d\u5747\u8861\u5668"),"\u548c",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.0/rancher/csi-driver"},"\u96c6\u7fa4\u6301\u4e45\u5b58\u50a8"),"\u652f\u6301\u3002"),(0,n.kt)("p",null,"\u4f60\u5c06\u5728\u672c\u6587\u4e2d\u5b66\u4e60\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5728 RKE1 \u548c RKE2 \u4e2d\u90e8\u7f72 Harvester Cloud Provider\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%99%A8%E6%94%AF%E6%8C%81"},"Harvester \u8d1f\u8f7d\u5747\u8861\u5668"),"\u3002")),(0,n.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,n.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4\u662f\u5728 Harvester \u865a\u62df\u673a\u4e4b\u4e0a\u6784\u5efa\u7684\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a Kubernetes \u8282\u70b9\u8fd0\u884c\u7684 Harvester \u865a\u62df\u673a\u4f4d\u4e8e\u76f8\u540c\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u3002")),(0,n.kt)("h3",{id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230-rke1-\u96c6\u7fa4"},"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230 RKE1 \u96c6\u7fa4"),(0,n.kt)("p",null,"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u542f\u52a8 RKE \u96c6\u7fa4\u65f6\uff0c\u4f60\u53ef\u4ee5\u6267\u884c\u4e24\u4e2a\u6b65\u9aa4\u6765\u90e8\u7f72 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester")," \u4e91\u63d0\u4f9b\u5546\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester(Out-of-tree)")," \u9009\u9879\u3002"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:r(60300).Z,width:"3066",height:"436"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ece Rancher \u5e94\u7528\u5e02\u573a\u4e2d\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester Cloud Provider"),"\u3002"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:r(26200).Z,width:"3480",height:"886"})))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u4f60\u9700\u8981\u6307\u5b9a",(0,n.kt)("inlineCode",{parentName:"p"},"\u96c6\u7fa4\u540d\u79f0"),"\u3002\u5982\u679c\u672a\u6307\u5b9a",(0,n.kt)("inlineCode",{parentName:"p"},"\u96c6\u7fa4\u540d\u79f0"),"\uff0c\u5219\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u503c ",(0,n.kt)("inlineCode",{parentName:"p"},"kubernetes"),"\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"\u96c6\u7fa4\u540d\u79f0"),"\u7528\u6765\u533a\u5206 Harvester \u8d1f\u8f7d\u5747\u8861\u5668\u7684\u6240\u6709\u6743\u3002")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5982\u6709\u9700\u8981\uff0c\u4ece Rancher \u5e94\u7528\u5e02\u573a\u4e2d\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester CSI Driver"),"\u3002"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:r(98631).Z,width:"3468",height:"850"})))),(0,n.kt)("h3",{id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230-rke2-\u96c6\u7fa4\u5b9e\u9a8c\u529f\u80fd"},"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230 RKE2 \u96c6\u7fa4","[\u5b9e\u9a8c\u529f\u80fd]"),(0,n.kt)("p",null,"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u542f\u52a8 RKE2 \u96c6\u7fa4\u65f6\uff0c\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester")," \u4e91\u63d0\u4f9b\u5546\u3002\u7136\u540e\uff0c\u4e3b\u673a\u9a71\u52a8\u5c06\u81ea\u52a8\u90e8\u7f72 CSI \u9a71\u52a8\u548c CCM\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(19474).Z,width:"1669",height:"315"})),(0,n.kt)("h3",{id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230-k3s-\u96c6\u7fa4\u5b9e\u9a8c\u6027"},"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230 K3s \u96c6\u7fa4","[\u5b9e\u9a8c\u6027]"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e3a K3s \u9009\u62e9 Kubernetes \u7248\u672c\uff0c\u5e76\u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"p"},"Edit as YAML")," \u6309\u94ae\uff0c\u6765\u914d\u7f6e K3s \u96c6\u7fa4 YAML\uff08\u5bf9\u4e8e\u73b0\u6709\u96c6\u7fa4\uff0c\u4f60\u4e5f\u53ef\u4ee5\u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"p"},"Edit YAML")," \u6309\u94ae\u8fdb\u884c\u66f4\u65b0)\uff1a"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:r(45650).Z,width:"2249",height:"601"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u8f91 K3s \u96c6\u7fa4 YAML\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"disable-cloud-provider: true")," \u4ee5\u7981\u7528\u9ed8\u8ba4\u7684 K3s \u4e91\u63d0\u4f9b\u5546\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6dfb\u52a0 ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-provider=external")," \u4ee5\u4f7f\u7528 Harvester \u4e91\u63d0\u4f9b\u5546\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(2883).Z,width:"457",height:"706"}))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/cloud-provider-harvester/blob/master/deploy/generate_addon.sh"},"\u751f\u6210 addon \u914d\u7f6e"),"\u5e76\u653e\u5165 K3s \u865a\u62df\u673a ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/cloud-config"),"\u3002"))),(0,n.kt)("h3",{id:"\u90e8\u7f72\u5916\u90e8\u4e91\u63d0\u4f9b\u5546"},"\u90e8\u7f72\u5916\u90e8\u4e91\u63d0\u4f9b\u5546"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u57fa\u4e8e RKE2 \u548c K3s \u7684\u96c6\u7fa4\u800c\u8a00\uff0c\u90e8\u7f72\u5916\u90e8\u4e91\u63d0\u4f9b\u5546\u7684\u6b65\u9aa4\u662f\u76f8\u4f3c\u7684\u3002"),(0,n.kt)("p",null,"\u6309\u7167\u4e0a\u8ff0\u6b65\u9aa4\u7981\u7528 in-tree \u4e91\u63d0\u4f9b\u5546\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u90e8\u7f72\u5916\u90e8\u4e91\u63d0\u4f9b\u5546\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(9003).Z,width:"1599",height:"764"})),(0,n.kt)("p",null,"\u793a\u4f8b manifest \u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: harvester-cloud-provider\n  namespace: kube-system\nspec:\n  targetNamespace: kube-system\n  bootstrap: true\n  repo: https://charts.harvesterhci.io/\n  chart: harvester-cloud-provider\n  version: 0.1.12\n  helmVersion: v3\n")),(0,n.kt)("p",null,"\u4e91\u63d0\u4f9b\u5546\u9700\u8981\u4e00\u4e2a kubeconfig \u6587\u4ef6\u624d\u80fd\u5de5\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/cloud-provider-harvester"},"harvester/cloud-provider-harvester")," \u4ed3\u5e93\u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"generate_addon.sh")," \u811a\u672c\u6765\u751f\u6210\u4e00\u4e2a\u6709\u9650\u8303\u56f4\u7684\u6587\u4ef6\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u811a\u672c\u9700\u8981\u8bbf\u95ee Harvester \u96c6\u7fa4 kubeconfig \u624d\u80fd\u5de5\u4f5c\u3002\u6b64\u5916\uff0c\u547d\u540d\u7a7a\u95f4\u9700\u8981\u662f\u5c06\u5728\u5176\u4e2d\u521b\u5efa\u5de5\u4f5c\u8d1f\u8f7d\u96c6\u7fa4\u7684\u547d\u540d\u7a7a\u95f4\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# \u4f9d\u8d56 kubectl \u6765\u64cd\u4f5c Harvester \u96c6\u7fa4\n./deploy/generate_addon.sh <serviceaccount name> <namespace>\n")),(0,n.kt)("p",null,"\u8f93\u51fa\u5c06\u5982\u4e0b\u6240\u793a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'(\u2388 |local:default)\u279c  cloud-provider-harvester git:(master) \u2717 ./deploy/generate_addon.sh harvester-cloud-provider default\nCreating target directory to hold files in ./tmp/kube...done\nCreating a service account in default namespace: harvester-cloud-provider\nW0506 16:44:15.429068 3008674 helpers.go:598] --dry-run is deprecated and can be replaced with --dry-run=client.\nserviceaccount/harvester-cloud-provider configured\n\nCreating a role in default namespace: harvester-cloud-provider\nrole.rbac.authorization.k8s.io/harvester-cloud-provider unchanged\n\nCreating a rolebinding in default namespace: harvester-cloud-provider\nW0506 16:44:23.798293 3008738 helpers.go:598] --dry-run is deprecated and can be replaced with --dry-run=client.\nrolebinding.rbac.authorization.k8s.io/harvester-cloud-provider configured\n\nGetting secret of service account harvester-cloud-provider on default\nSecret name: harvester-cloud-provider-token-5zkk9\n\nExtracting ca.crt from secret...done\nGetting user token from secret...done\nSetting current context to: local\nCluster name: local\nEndpoint: https://HARVESTER_ENDPOINT/k8s/clusters/local\n\nPreparing k8s-harvester-cloud-provider-default-conf\nSetting a cluster entry in kubeconfig...Cluster "local" set.\nSetting token credentials entry in kubeconfig...User "harvester-cloud-provider-default-local" set.\nSetting a context entry in kubeconfig...Context "harvester-cloud-provider-default-local" created.\nSetting the current-context in the kubeconfig file...Switched to context "harvester-cloud-provider-default-local".\n########## cloud config ############\napiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: CACERT\n    server: https://HARVESTER-ENDPOINT/k8s/clusters/local\n  name: local\ncontexts:\n- context:\n    cluster: local\n    namespace: default\n    user: harvester-cloud-provider-default-local\n  name: harvester-cloud-provider-default-local\ncurrent-context: harvester-cloud-provider-default-local\nkind: Config\npreferences: {}\nusers:\n- name: harvester-cloud-provider-default-local\n  user:\n    token: TOKEN\n')),(0,n.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8282\u70b9\u6c60 ",(0,n.kt)("inlineCode",{parentName:"p"},"Advanced Options")," \u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"user-data")," \u6ce8\u5165\u8fd9\u4e2a cloud-config \u6587\u4ef6\uff1a\n",(0,n.kt)("img",{src:r(26108).Z,width:"2069",height:"497"})),(0,n.kt)("p",null,"\u6709\u4e86\u8fd9\u4e9b\u8bbe\u7f6e\uff0cK3s/RKE2 \u96c6\u7fa4\u5e94\u8be5\u53ef\u4ee5\u5728\u4f60\u4f7f\u7528\u5916\u90e8\u4e91\u63d0\u4f9b\u5546\u65f6\u6210\u529f\u914d\u7f6e\u3002"),(0,n.kt)("h2",{id:"\u5347\u7ea7-cloud-provider"},"\u5347\u7ea7 Cloud Provider"),(0,n.kt)("h3",{id:"\u5347\u7ea7-rke2"},"\u5347\u7ea7 RKE2"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5347\u7ea7 RKE2 \u7248\u672c\u6765\u5347\u7ea7 Cloud Provider\u3002\u8981\u5347\u7ea7 RKE2 \u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u5347\u7ea7\u7684 guest \u96c6\u7fa4\uff0c\u7136\u540e\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"Kubernetes Version"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Save"),"\u3002")),(0,n.kt)("h3",{id:"\u5347\u7ea7-rkek3s"},"\u5347\u7ea7 RKE/K3s"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 Rancher UI \u5347\u7ea7 RKE/K3s cloud provider\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > RKE/K3s Cluster > Apps > Installed Apps"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u627e\u5230 cloud provider \u8868\u5e76\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit/Upgrade"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"Version"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Next > Update"),"\u3002")),(0,n.kt)("h2",{id:"\u8d1f\u8f7d\u5747\u8861\u5668\u652f\u6301"},"\u8d1f\u8f7d\u5747\u8861\u5668\u652f\u6301"),(0,n.kt)("p",null,"\u90e8\u7f72 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester Cloud Provider")," \u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Kubernetes ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," \u670d\u52a1\u5c06\u96c6\u7fa4\u5185\u7684\u5fae\u670d\u52a1\u516c\u5f00\u7ed9\u5916\u90e8\u3002\u5728\u4f60\u521b\u5efa Kubernetes ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," \u670d\u52a1\u65f6\uff0c\u4f1a\u4e3a\u8be5\u670d\u52a1\u5206\u914d\u4e00\u4e2a Harvester \u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Rancher UI \u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"Add-on Config")," \u5bf9\u5176\u8fdb\u884c\u7f16\u8f91\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(13506).Z,width:"3474",height:"1174"})),(0,n.kt)("h3",{id:"ipam"},"IPAM"),(0,n.kt)("p",null,"Harvester \u7684\u5185\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668\u540c\u65f6\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},"pool")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"dhcp")," \u6a21\u5f0f\u3002\u4f60\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u9009\u62e9\u6a21\u5f0f\uff0c\u968f\u540e Harvester \u5c06\u6ce8\u91ca ",(0,n.kt)("inlineCode",{parentName:"p"},"cloudprovider.harvesterhci.io/ipam")," \u6dfb\u52a0\u5230\u540e\u9762\u7684\u670d\u52a1\u4e2d\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"pool\uff1a\u9700\u8981\u63d0\u524d\u5728 Harvester \u4e2d\u914d\u7f6e\u4e00\u4e2a IP \u5730\u5740\u6c60\u3002Harvester LoadBalancer Controller \u5c06\u4ece IP \u5730\u5740\u6c60\u4e2d\u4e3a\u8d1f\u8f7d\u5747\u8861\u5668\u5206\u914d\u4e00\u4e2a IP \u5730\u5740\u3002"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:r(31011).Z,width:"3482",height:"932"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"dhcp\uff1a\u9700\u8981 DHCP \u670d\u52a1\u5668\u3002Harvester LoadBalancer Controller \u5c06\u4ece DHCP \u670d\u52a1\u5668\u8bf7\u6c42 IP \u5730\u5740\u3002"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u4e0d\u5141\u8bb8\u4fee\u6539 IPAM \u6a21\u5f0f\u3002\u5982\u679c\u9700\u8981\u4fee\u6539 IPAM \u6a21\u5f0f\uff0c\u4f60\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u670d\u52a1\u3002")),(0,n.kt)("h3",{id:"\u5065\u5eb7\u68c0\u67e5"},"\u5065\u5eb7\u68c0\u67e5"),(0,n.kt)("p",null,"Harvester \u8d1f\u8f7d\u5747\u8861\u5668\u652f\u6301 TCP \u5065\u5eb7\u68c0\u67e5\u3002\u5982\u679c\u542f\u7528\u4e86",(0,n.kt)("inlineCode",{parentName:"p"},"\u5065\u5eb7\u68c0\u67e5"),"\u9009\u9879\uff0c\u4f60\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u6307\u5b9a\u53c2\u6570\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(9384).Z,width:"3024",height:"1450"})),(0,n.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u624b\u52a8\u5c06\u6ce8\u91ca\u6dfb\u52a0\u5230\u670d\u52a1\u6765\u6307\u5b9a\u53c2\u6570\u3002\u652f\u6301\u4ee5\u4e0b\u6ce8\u91ca\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6ce8\u91ca\u952e"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u503c\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-port")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u7aef\u53e3\u3002\u63a2\u9488\u5c06\u8bbf\u95ee\u7531\u540e\u7aef\u670d\u52a1\u5668 IP \u548c\u7aef\u53e3\u7ec4\u6210\u7684\u5730\u5740\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-success-threshold")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5065\u5eb7\u68c0\u67e5\u6210\u529f\u9608\u503c\u3002\u9ed8\u8ba4\u503c\u4e3a 1\u3002\u5982\u679c\u63a2\u9488\u8fde\u7eed\u68c0\u6d4b\u5230\u67d0\u4e2a\u5730\u5740\u7684\u6210\u529f\u6b21\u6570\u8fbe\u5230\u6210\u529f\u9608\u503c\uff0c\u540e\u7aef\u670d\u52a1\u5668\u5c31\u53ef\u4ee5\u5f00\u59cb\u8f6c\u53d1\u6d41\u91cf\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-failure-threshold")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5065\u5eb7\u68c0\u67e5\u5931\u8d25\u9608\u503c\u3002\u9ed8\u8ba4\u503c\u4e3a 3\u3002\u5982\u679c\u5065\u5eb7\u68c0\u67e5\u5931\u8d25\u7684\u6570\u91cf\u8fbe\u5230\u5931\u8d25\u9608\u503c\uff0c\u540e\u7aef\u670d\u52a1\u5668\u5c06\u505c\u6b62\u8f6c\u53d1\u6d41\u91cf\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-periodseconds")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5065\u5eb7\u68c0\u67e5\u5468\u671f\u3002\u9ed8\u8ba4\u503c\u4e3a 5 \u79d2\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-timeoutseconds")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u6bcf\u6b21\u5065\u5eb7\u68c0\u67e5\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u9ed8\u8ba4\u503c\u4e3a 3 \u79d2\u3002")))))}c.isMDXComponent=!0},26108:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cloud-config-userdata-8f6db0afa2079998e6d0930ca7ace5a4.png"},45650:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/edit-k3s-cluster-yaml-244d7967b0be178a714944ddc2d8c465.png"},9003:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/external-cloud-provider-addon-c892cb3dec8e72bd9ef5117f55b6131d.png"},9384:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/health-check-530254bf13d824edd8587eac0d30016d.png"},26200:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install-harvester-cloud-provider-fcca9c86ea1d2c7eedf824c9b0b5d63a.png"},98631:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install-harvester-csi-driver-02e0ba91b02f08e31bf87a2d9df2afee.png"},2883:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/k3s-cluster-yaml-content-for-harvester-cloud-provider-2237fc21b54b0440297a3050fc4e5826.png"},13506:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/lb-svc-e475b5a9a67cfcd1f5d37c2d550fc917.png"},60300:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke-cloud-provider-8cf30f11940ab37bbda533f8ad2554b9.png"},19474:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke2-cloud-provider-2d541c4c966ae1adf2f7c375ea1743ac.png"},31011:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vip-pool-d544f501f104efd9aa4dd3e9015efd9d.png"}}]);