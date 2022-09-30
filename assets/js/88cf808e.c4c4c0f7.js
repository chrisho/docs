"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},60688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:1,sidebar_label:"Rancher Integration",title:"",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],Description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},o=void 0,s={unversionedId:"rancher/rancher-integration",id:"version-v0.3/rancher/rancher-integration",title:"",description:"Rancher Integration",source:"@site/versioned_docs/version-v0.3/rancher/rancher-integration.md",sourceDirName:"rancher",slug:"/rancher/rancher-integration",permalink:"/v0.3/rancher/rancher-integration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/rancher/rancher-integration.md",tags:[],version:"v0.3",lastUpdatedAt:1664266430,formattedLastUpdatedAt:"Sep 27, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Rancher Integration",title:"",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],Description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/v0.3/monitoring/"},next:{title:"Virtualization Management",permalink:"/v0.3/rancher/virtualization-management"}},c={},l=[{value:"Rancher Integration",id:"rancher-integration",level:2},{value:"Deploying Rancher",id:"deploying-rancher",level:2},{value:"Quick Start Guide",id:"quick-start-guide",level:3},{value:"Virtualization Management",id:"virtualization-management",level:2},{value:"Creating Kubernetes Clusters using the Harvester Node Driver",id:"creating-kubernetes-clusters-using-the-harvester-node-driver",level:2}],u={toc:l};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rancher-integration"},"Rancher Integration"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher"},"Rancher")," is an open-source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."),(0,a.kt)("p",null,"Users can now import and manage multiple Harvester clusters using the Rancher ",(0,a.kt)("a",{parentName:"p",href:"/v0.3/rancher/virtualization-management"},"Virtualization Management")," page and leverage the Rancher ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/authentication/"},"authentication")," feature and RBAC control for ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/"},"multi-tenancy")," support."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"virtualization-management",src:r(94944).Z,width:"2559",height:"1055"})),(0,a.kt)("h2",{id:"deploying-rancher"},"Deploying Rancher"),(0,a.kt)("p",null,"Previously in Harvester v0.2.0, users had the option to enable the embedded Rancher server. This option has been removed from Harvester ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.3.0"),". "),(0,a.kt)("p",null,"To use Rancher with Harvester, please install the Rancher server separately from the Harvester. As an option, You can spin up a VM in the Harvester and install the Rancher v2.6.1 or above to try out the integration features."),(0,a.kt)("h3",{id:"quick-start-guide"},"Quick Start Guide"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Begin creation of a custom cluster by provisioning a Linux host. Your host can be any of the following:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A cloud-hosted virtual machine (VM)"),(0,a.kt)("li",{parentName:"ul"},"An on-premises VM"),(0,a.kt)("li",{parentName:"ul"},"A bare-metal server"))),(0,a.kt)("li",{parentName:"ol"},"Log into your Linux host using your preferred shell, such as PuTTy or a remote terminal connection."),(0,a.kt)("li",{parentName:"ol"},"From your shell, enter the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# for a quick evaluation, you can run the Rancher server with the following command\n$ sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher:v2.6.2\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For more information about how to deploy the Rancher server, please refer to the Rancher ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/"},"documentation"),".")),(0,a.kt)("h2",{id:"virtualization-management"},"Virtualization Management"),(0,a.kt)("p",null,"With Rancher's Virtualization Management, users can now import and manage Harvester clusters. By clicking on one of the clusters, users are able to view and manage the downstream Harvester resources such as VMs, images, volumes, etc. Additionally, Rancher's VM feature has leveraged existing Rancher features such as authentication with various auth providers and multi-tenant support."),(0,a.kt)("p",null,"For more details, please reference the ",(0,a.kt)("a",{parentName:"p",href:"/v0.3/rancher/virtualization-management"},"virtualization management")," page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"import-cluster",src:r(71899).Z,width:"2559",height:"988"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Virtualization Management is in Tech Preview.")),(0,a.kt)("h2",{id:"creating-kubernetes-clusters-using-the-harvester-node-driver"},"Creating Kubernetes Clusters using the Harvester Node Driver"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/v0.3/rancher/node/node-driver"},"Harvester node driver")," is used to provision VMs in the Harvester cluster, which Rancher uses to launch and manage Kubernetes clusters."),(0,a.kt)("p",null,"Starting with Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6.1"),", the Harvester node driver has been added by default. Users can reference this ",(0,a.kt)("a",{parentName:"p",href:"/v0.3/rancher/node/node-driver"},"doc")," for more details."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Harvester Node Driver is in Tech Preview.")))}h.isMDXComponent=!0},71899:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/import-harvester-cluster-f79a5e502100ff314e9e6405e39c7dcc.png"},94944:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/virtualization-management-ae828e59eb26dddfb2b64eed2fc56652.png"}}]);