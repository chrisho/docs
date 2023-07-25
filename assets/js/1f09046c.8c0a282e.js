"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8149],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37666:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:1,sidebar_label:"Create a Virtual Machine",title:"Create a Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Create a VM"],Description:"Create one or more virtual machines from the Virtual Machines page."},i=void 0,s={unversionedId:"vm/create-vm",id:"version-v0.3/vm/create-vm",title:"Create a Virtual Machine",description:"How to Create a VM",source:"@site/versioned_docs/version-v0.3/vm/create-vm.md",sourceDirName:"vm",slug:"/vm/create-vm",permalink:"/v0.3/vm/create-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/vm/create-vm.md",tags:[],version:"v0.3",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"Nov 25, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Create a Virtual Machine",title:"Create a Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Create a VM"],Description:"Create one or more virtual machines from the Virtual Machines page."},sidebar:"tutorialSidebar",previous:{title:"Host Management",permalink:"/v0.3/host/"},next:{title:"Access to the Virtual Machine",permalink:"/v0.3/vm/access-to-the-vm"}},l={},c=[{value:"How to Create a VM",id:"how-to-create-a-vm",level:2},{value:"Cloud Configuration Examples",id:"cloud-configuration-examples",level:2},{value:"Networks",id:"networks",level:2},{value:"Management Network",id:"management-network",level:3},{value:"Secondary Network",id:"secondary-network",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-to-create-a-vm"},"How to Create a VM"),(0,n.kt)("p",null,"Create one or more virtual machines from the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machines")," page."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Choose the option to create either one or multiple VM instances."),(0,n.kt)("li",{parentName:"ol"},"The VM Name is a required field."),(0,n.kt)("li",{parentName:"ol"},"The VM Template is optional. You can select ISO, raw, and Windows image templates as default options."),(0,n.kt)("li",{parentName:"ol"},"Configure the CPU and Memory of the VM."),(0,n.kt)("li",{parentName:"ol"},"Select SSH keys or upload new keys."),(0,n.kt)("li",{parentName:"ol"},"Select a custom VM image on the ",(0,n.kt)("strong",{parentName:"li"},"Volumes")," tab. The default disk will be the root disk. You can add more disks to the VM."),(0,n.kt)("li",{parentName:"ol"},"To configure networks, go to the ",(0,n.kt)("strong",{parentName:"li"},"Networks")," tab. The ",(0,n.kt)("strong",{parentName:"li"},"Management Network")," is added by default. It is also possible to add secondary networks to the VMs using VLAN networks. You may configure these on ",(0,n.kt)("strong",{parentName:"li"},"Advanced > Networks"),"."),(0,n.kt)("li",{parentName:"ol"},"Advanced options such as hostname and cloud-init data are optional. You may configure these in the ",(0,n.kt)("strong",{parentName:"li"},"Advanced Options")," section.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-vm",src:r(18059).Z,width:"3354",height:"1448"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-vm",src:r(45547).Z,width:"3338",height:"1686"})),(0,n.kt)("h2",{id:"cloud-configuration-examples"},"Cloud Configuration Examples"),(0,n.kt)("p",null,"Password configuration for the default user:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-YAML"},"#cloud-config\npassword: password\nchpasswd: { expire: False }\nssh_pwauth: True\n")),(0,n.kt)("p",null,"Network-data configuration using DHCP:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-YAML"},"version: 1\nconfig:\n  - type: physical\n    name: eth0\n    subnets:\n      - type: dhcp\n  - type: physical\n    name: eth1\n    subnets:\n      - type: dhcp\n")),(0,n.kt)("p",null,"You can also use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cloud Config Template")," feature to include a pre-defined cloud-init configuration for the VM."),(0,n.kt)("h2",{id:"networks"},"Networks"),(0,n.kt)("h3",{id:"management-network"},"Management Network"),(0,n.kt)("p",null,"A management network represents the default VM eth0 interface configured by the cluster network solution that is present in each VM."),(0,n.kt)("p",null,"By default, a VM can be accessed via the management network."),(0,n.kt)("h3",{id:"secondary-network"},"Secondary Network"),(0,n.kt)("p",null,"It is also possible to connect VMs using additional networks with Harvester's built-in ",(0,n.kt)("a",{parentName:"p",href:"/v0.3/networking/harvester-network"},"VLAN networks"),"."))}d.isMDXComponent=!0},45547:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/choose-vm-image-1560c4e512fa172b7fbaefcd95e5b374.png"},18059:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-vm-0ca8943777f01beee7fa8462995631ee.png"}}]);