"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2,sidebar_label:"Creating an RKE1 Kubernetes Cluster",title:"",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration","RKE1"],Description:"Users can now provision RKE1 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver."},l="Creating an RKE1 Kubernetes Cluster",i={unversionedId:"rancher/node/rke1-cluster",id:"version-v0.3/rancher/node/rke1-cluster",title:"",description:"Users can now provision RKE1 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver.",source:"@site/versioned_docs/version-v0.3/rancher/node/rke1-cluster.md",sourceDirName:"rancher/node",slug:"/rancher/node/rke1-cluster",permalink:"/v0.3/rancher/node/rke1-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/rancher/node/rke1-cluster.md",tags:[],version:"v0.3",lastUpdatedAt:1664266430,formattedLastUpdatedAt:"Sep 27, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Creating an RKE1 Kubernetes Cluster",title:"",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration","RKE1"],Description:"Users can now provision RKE1 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver."},sidebar:"tutorialSidebar",previous:{title:"Harvester Node Driver",permalink:"/v0.3/rancher/node/node-driver"},next:{title:"Creating an RKE2 Kubernetes Cluster",permalink:"/v0.3/rancher/node/rke2-cluster"}},s={},c=[{value:"Create Your Cloud Credentials",id:"create-your-cloud-credentials",level:3},{value:"Create Node Template",id:"create-node-template",level:3},{value:"Create RKE1 Kubernetes Cluster",id:"create-rke1-kubernetes-cluster",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-an-rke1-kubernetes-cluster"},"Creating an RKE1 Kubernetes Cluster"),(0,a.kt)("p",null,"Users can now provision RKE1 Kubernetes clusters on top of the Harvester cluster in Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6.1+")," using the built-in Harvester node driver."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rke1-cluster",src:r(14261).Z,width:"3570",height:"1554"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Harvester RKE1 node driver is in tech preview."),(0,a.kt)("li",{parentName:"ul"},"VLAN network is required for Harvester node driver."))),(0,a.kt)("h3",{id:"create-your-cloud-credentials"},"Create Your Cloud Credentials"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Harvester"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your cloud credential name."),(0,a.kt)("li",{parentName:"ol"},'Select "Imported Harvester" or "External Harvester".'),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-harvester-cloud-credentials",src:r(9077).Z,width:"3582",height:"1406"})),(0,a.kt)("h3",{id:"create-node-template"},"Create Node Template"),(0,a.kt)("p",null,"You can use the Harvester node driver to create node templates and eventually node pools for your Kubernetes cluster."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure the  ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,a.kt)("li",{parentName:"ol"},"Configure ",(0,a.kt)("strong",{parentName:"li"},"Instance Options"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Configure the CPU, memory, and disk"),(0,a.kt)("li",{parentName:"ul"},"Select an OS image that is compatible with the ",(0,a.kt)("inlineCode",{parentName:"li"},"cloud-init")," config."),(0,a.kt)("li",{parentName:"ul"},"Select a network that the node driver is able to connect to; currently, only ",(0,a.kt)("inlineCode",{parentName:"li"},"VLAN")," is supported."),(0,a.kt)("li",{parentName:"ul"},"Enter the SSH User; the username will be used to ssh to nodes. For example, a default user of the Ubuntu cloud image will be ",(0,a.kt)("inlineCode",{parentName:"li"},"ubuntu"),"."))),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"RANCHER TEMPLATE")," name.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(69250).Z,width:"3120",height:"1848"})),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/cluster-provisioning/rke-clusters/node-pools/"},"nodes hosted by an infrastructure provider")," for more information."),(0,a.kt)("h3",{id:"create-rke1-kubernetes-cluster"},"Create RKE1 Kubernetes Cluster"),(0,a.kt)("p",null,"Users can create an RKE1 Kubernetes cluster from the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Management")," page via the Harvester RKE1 node driver."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," menu."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create")," button."),(0,a.kt)("li",{parentName:"ol"},"Toggle Switch to ",(0,a.kt)("strong",{parentName:"li"},"RKE1"),"."),(0,a.kt)("li",{parentName:"ol"},"Select Harvester node driver."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Name Prefix")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Template")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"etcd")," and ",(0,a.kt)("strong",{parentName:"li"},"Control Plane")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-rke-harvester-cluster",src:r(51563).Z,width:"1919",height:"970"})))}p.isMDXComponent=!0},51563:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-rke-harvester-cluster-d8038687882cd19796516efe89c597c6.png"},9077:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-create-cloud-credentials-aff4e94b5cc164cc67fa7c67803db099.png"},69250:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/node-template-4d4e88bf75025e0eede053c1d57c1814.png"},14261:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rke1-node-driver-e6038ae5d3644dc2e6cb75cbf31d903c.png"}}]);