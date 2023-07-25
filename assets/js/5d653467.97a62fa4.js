"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>w});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),k=c(n),d=a,w=k["".concat(l,".").concat(d)]||k[d]||p[d]||o;return n?r.createElement(w,i(i({ref:t},u),{},{components:n})):r.createElement(w,i({ref:t},u))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[k]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const o={sidebar_position:2,sidebar_label:"VM Network",title:"VM Network",keywords:["Harvester","Network"]},i=void 0,s={unversionedId:"networking/harvester-network",id:"networking/harvester-network",title:"VM Network",description:"Harvester provides three types of networks for virtual machines (VMs), including:",source:"@site/docs/networking/harvester-network.md",sourceDirName:"networking",slug:"/networking/harvester-network",permalink:"/dev/networking/harvester-network",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/networking/harvester-network.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"VM Network",title:"VM Network",keywords:["Harvester","Network"]},sidebar:"sidebar",previous:{title:"Cluster Network",permalink:"/dev/networking/index"},next:{title:"Harvester Network Deep Dive",permalink:"/dev/networking/deep-dive"}},l={},c=[{value:"Management Network",id:"management-network",level:2},{value:"How to use management network",id:"how-to-use-management-network",level:3},{value:"VLAN Network",id:"vlan-network",level:2},{value:"How to use VLAN network",id:"how-to-use-vlan-network",level:3},{value:"Create a VM with VLAN Network",id:"create-a-vm-with-vlan-network",level:3},{value:"Untagged Network",id:"untagged-network",level:2},{value:"How to use untagged network",id:"how-to-use-untagged-network",level:3}],u={toc:c},k="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(k,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/networking/harvester-network"})),(0,a.kt)("p",null,"Harvester provides three types of networks for virtual machines (VMs), including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Management Network"),(0,a.kt)("li",{parentName:"ul"},"VLAN Network"),(0,a.kt)("li",{parentName:"ul"},"Untagged Network")),(0,a.kt)("p",null,"The management network is usually used for VMs whose traffic only flows inside the cluster. If your VMs need to connect to the external network, use the VLAN network or untagged network."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.0.1")),(0,a.kt)("p",null,"Harvester also introduced storage networking to separate the storage traffic from other cluster-wide workloads. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/dev/advanced/storagenetwork"},"the storage network document")," for more details."),(0,a.kt)("h2",{id:"management-network"},"Management Network"),(0,a.kt)("p",null,"Harvester uses ",(0,a.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/getting-started/kubernetes/flannel/flannel"},"Canal")," as its default management network. It is a built-in network that can be used directly from the cluster.\nBy default, the management network IP of a VM can only be accessed within the cluster nodes, and the management network IP will change after the VM reboot. This is non-typical behaviour that needs to be taken note of since VM IPs are expected to remain unchanged after a reboot."),(0,a.kt)("p",null,"However, you can leverage the Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubevirt.io/user-guide/virtual_machines/service_objects/"},"service object")," to create a stable IP for your VMs with the management network."),(0,a.kt)("h3",{id:"how-to-use-management-network"},"How to use management network"),(0,a.kt)("p",null,"Since the management network is built-in and doesn't require extra operations, you can add it directly when configuring the VM network."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(32082).Z,width:"3566",height:"1236"})),(0,a.kt)("h2",{id:"vlan-network"},"VLAN Network"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-network-controller"},"Harvester network-controller")," leverages the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"multus")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"bridge")," CNI plugins to implement its customized L2 bridge VLAN network. It helps to connect your VMs to the host network interface and can be accessed from internal and external networks using the physical switch."),(0,a.kt)("h3",{id:"how-to-use-vlan-network"},"How to use VLAN network"),(0,a.kt)("p",null,"To create a new VLAN network, go to the ",(0,a.kt)("strong",{parentName:"p"},"Networks > VM Networks")," page and click the ",(0,a.kt)("strong",{parentName:"p"},"Create")," button."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Specify the name, select the type ",(0,a.kt)("inlineCode",{parentName:"p"},"L2VlanNetwork"),", input the VLAN ID and select the cluster network."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(73485).Z,width:"3454",height:"1492"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure a route to allow the hosts to connect to the VLAN network using IPv4 addresses. The CIDR and gateway of the VLAN network are mandatory parameters for the route configuration.  You can configure the route by choosing one of the following options:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Auto(DHCP): the Harvester network controller will get the CIDR and gateway values from the DHCP server using the DHCP protocol. Optionally, you can specify the DHCP server address.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(66947).Z,width:"3450",height:"1084"})),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Manual: You need to specify the CIDR and gateway values manually.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(46911).Z,width:"3450",height:"1046"})))),(0,a.kt)("h3",{id:"create-a-vm-with-vlan-network"},"Create a VM with VLAN Network"),(0,a.kt)("p",null,"You can now create a new VM using the VLAN network configured above:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Create")," button on the ",(0,a.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,a.kt)("li",{parentName:"ul"},"Specify the required parameters and click the ",(0,a.kt)("strong",{parentName:"li"},"Networks")," tab."),(0,a.kt)("li",{parentName:"ul"},"Either configure the default network to be a VLAN network or select an additional network to add.")),(0,a.kt)("h2",{id:"untagged-network"},"Untagged Network"),(0,a.kt)("p",null,"As is known, the traffic under a VLAN network has a VLAN ID tag and we can use the VLAN network with ",(0,a.kt)("inlineCode",{parentName:"p"},"PVID")," (default 1) to communicate with any normal untagged traffic. However, some network devices may not expect to receive an explicitly tagged VLAN ID that matches the native VLAN on the switch the uplink belongs to. That's the reason why we provide the untagged network."),(0,a.kt)("h3",{id:"how-to-use-untagged-network"},"How to use untagged network"),(0,a.kt)("p",null,"The usage of untagged network is similar to ",(0,a.kt)("a",{parentName:"p",href:"/dev/networking/harvester-network#how-to-use-vlan-network"},"the VLAN network"),"."),(0,a.kt)("p",null,"To create a new untagged network, go to the ",(0,a.kt)("strong",{parentName:"p"},"Networks > Networks")," page and click the ",(0,a.kt)("strong",{parentName:"p"},"Create")," button. You have to specify the name, select the type ",(0,a.kt)("inlineCode",{parentName:"p"},"Untagged Network")," and choose the cluster network."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6399).Z,width:"3454",height:"1006"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Starting from Harvester v1.1.2, Harvester supports updating and deleting VM networks. Make sure to stop all affected VMs before updating or deleting VM networks.")))}p.isMDXComponent=!0},66947:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-network-auto-3618d9cd389a84ca8185fb09b041592e.png"},46911:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-network-manual-d1eeea0862b8c37ac58c6cf08033c069.png"},6399:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-untagged-network-b8fd83d075ff3707598f4aa121927607.png"},73485:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-vlan-network-b49901aa27b8a9a0433047ddd118cb98.png"},32082:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/management-network-7e0ec51483792bed6b8124c98be4844d.png"}}]);