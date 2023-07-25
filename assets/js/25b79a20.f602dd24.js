"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,g=c["".concat(s,".").concat(k)]||c[k]||u[k]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},33307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:3,sidebar_label:"Storage Network",title:"Storage Network"},i=void 0,l={unversionedId:"advanced/storagenetwork",id:"advanced/storagenetwork",title:"Storage Network",description:"Harvester uses Longhorn as its built-in storage system to provide block device volumes for VMs and Pods. If the user wishes to isolate Longhorn replication traffic from the Kubernetes cluster network (i.e. the management network) or other cluster-wide workloads. Users can allocate a dedicated storage network for Longhorn replication traffic to get better network bandwidth and performance.",source:"@site/docs/advanced/storagenetwork.md",sourceDirName:"advanced",slug:"/advanced/storagenetwork",permalink:"/dev/advanced/storagenetwork",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/storagenetwork.md",tags:[],version:"current",lastUpdatedAt:1672296666,formattedLastUpdatedAt:"Dec 29, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Storage Network",title:"Storage Network"},sidebar:"sidebar",previous:{title:"StorageClass",permalink:"/dev/advanced/storageclass"},next:{title:"Addons",permalink:"/dev/advanced/addons"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration Example",id:"configuration-example",level:2},{value:"Configuration Process",id:"configuration-process",level:2},{value:"Before Applying Harvester Storage Network Setting",id:"before-applying-harvester-storage-network-setting",level:3},{value:"Same Physical Interfaces",id:"same-physical-interfaces",level:4},{value:"Different Physical Interfaces",id:"different-physical-interfaces",level:4},{value:"Harvester Storage Network Setting",id:"harvester-storage-network-setting",level:3},{value:"Web UI",id:"web-ui",level:4},{value:"CLI",id:"cli",level:4},{value:"After Applying Harvester Storage Network Setting",id:"after-applying-harvester-storage-network-setting",level:3},{value:"Verify Configuration is Completed",id:"verify-configuration-is-completed",level:3},{value:"Step 1",id:"step-1",level:4},{value:"Step 2",id:"step-2",level:4},{value:"Start VM Manually",id:"start-vm-manually",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Harvester uses Longhorn as its built-in storage system to provide block device volumes for VMs and Pods. If the user wishes to isolate Longhorn replication traffic from the Kubernetes cluster network (i.e. the management network) or other cluster-wide workloads. Users can allocate a dedicated storage network for Longhorn replication traffic to get better network bandwidth and performance."),(0,a.kt)("p",null,"For more informations, please refer ",(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.3.2/advanced-resources/deploy/storage-network/"},"Longhorn Storage Network")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Configuring Longhorn settings directly is not recommended, as this can lead to untested situations.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"There are some prerequisites before configuring the Harvester Storage Network setting."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Well-configured Cluster Network and VLAN Config.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Users have to ensure the Cluster Network is configured and VLAN Config will cover all nodes and ensure the network connectivity is working and expected in all nodes. "))),(0,a.kt)("li",{parentName:"ul"},"All VMs should be stopped.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We recommend checking the VM status with the following command and should get an empty result."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubectl get -A vmi")))),(0,a.kt)("li",{parentName:"ul"},"All pods that are attached to Longhorn Volumes should be stopped.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Users could skip this step with the Harvester Storage Network setting. Harvester will stop Longhorn-related pods automatically.")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If the Harvester cluster was upgraded from v1.0.3, please check if Whereabouts CNI is installed properly before you move on to the next step. We will always recommend following this guide to check. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3168"},"Issue 3168")," describes that the Harvester cluster will not always install Whereabouts CNI properly."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Verify the ",(0,a.kt)("inlineCode",{parentName:"li"},"ippools.whereabouts.cni.cncf.io")," CRD exists with the following command.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubectl get crd ippools.whereabouts.cni.cncf.io")))),(0,a.kt)("li",{parentName:"ul"},"If the Harvester cluster doesn't have ",(0,a.kt)("inlineCode",{parentName:"li"},"ippools.whereabouts.cni.cncf.io"),", please add ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/tree/v1.1.0/deploy/charts/harvester/dependency_charts/whereabouts/crds"},"these two CRDs")," before configuring ",(0,a.kt)("inlineCode",{parentName:"li"},"storage-network")," setting.")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/harvester/harvester/v1.1.0/deploy/charts/harvester/dependency_charts/whereabouts/crds/whereabouts.cni.cncf.io_ippools.yaml\nkubectl apply -f https://raw.githubusercontent.com/harvester/harvester/v1.1.0/deploy/charts/harvester/dependency_charts/whereabouts/crds/whereabouts.cni.cncf.io_overlappingrangeipreservations.yaml\n"))),(0,a.kt)("h2",{id:"configuration-example"},"Configuration Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VLAN ID",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Please check with your network switch setting, and provide a dedicated VLAN ID for Storage Network."))),(0,a.kt)("li",{parentName:"ul"},"Well-configured Cluster Network and VLAN Config",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Please refer Networking page for more details and configure ",(0,a.kt)("inlineCode",{parentName:"li"},"Cluster Network")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"VLAN Config")," but not ",(0,a.kt)("inlineCode",{parentName:"li"},"Networks"),"."))),(0,a.kt)("li",{parentName:"ul"},"IP range for Storage Network",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"IP range should not conflict or overlap with Kubernetes cluster networks(",(0,a.kt)("inlineCode",{parentName:"li"},"10.42.0.0/16"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"10.43.0.0/16"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"10.52.0.0/16")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"10.53.0.0/16")," are reserved)."),(0,a.kt)("li",{parentName:"ul"},"IP range should be IPv4 CIDR format and 4 times the number of your cluster nodes. Longhorn will use 2 IPs per node, and the upgrade process will run two versions of Longhorn simultaneously. It will consume 4 IPs per node in the upgrade process."),(0,a.kt)("li",{parentName:"ul"},"If your cluster has 250 nodes, the IP range should be larger than ",(0,a.kt)("inlineCode",{parentName:"li"},"/22"),".")))),(0,a.kt)("p",null,"We will take the following configuration as an example to explain the details of the Storage Network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VLAN ID for Storage Network: ",(0,a.kt)("inlineCode",{parentName:"li"},"100")),(0,a.kt)("li",{parentName:"ul"},"Cluster Network: ",(0,a.kt)("inlineCode",{parentName:"li"},"storage")),(0,a.kt)("li",{parentName:"ul"},"IP range: ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.0.0/24"))),(0,a.kt)("h2",{id:"configuration-process"},"Configuration Process"),(0,a.kt)("p",null,"Harvester will create Multus NetworkAttachmentDefinition from the configuration, stop pods related to Longhorn Volume, update Longhorn setting, and restart previous pods."),(0,a.kt)("h3",{id:"before-applying-harvester-storage-network-setting"},"Before Applying Harvester Storage Network Setting"),(0,a.kt)("p",null,"Here we have two cases."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Expect that VM VLAN traffic and Longhorn Storage Network use the same group of physical interfaces."),(0,a.kt)("li",{parentName:"ul"},"Expect that VM VLAN traffic and Longhorn Storage Network use different physical interfaces.")),(0,a.kt)("p",null,"Longhorn will send replication traffic through the specific interfaces shown as the red line in the figure."),(0,a.kt)("h4",{id:"same-physical-interfaces"},"Same Physical Interfaces"),(0,a.kt)("p",null,"Take ",(0,a.kt)("inlineCode",{parentName:"p"},"eth2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eth3")," as an example for VM VLAN traffic and Longhorn Storage Network simultaneously."),(0,a.kt)("p",null,"Please refer Networking page to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"VLAN Config")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"eth2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eth3")," and remember the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," name for the further step."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"storagenetwork-same.png",src:n(43799).Z,width:"1521",height:"661"})),(0,a.kt)("h4",{id:"different-physical-interfaces"},"Different Physical Interfaces"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"eth2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eth3")," are for VM VLAN Traffic. ",(0,a.kt)("inlineCode",{parentName:"p"},"eth4")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eth5")," are for Longhorn Storage Network."),(0,a.kt)("p",null,"Please refer Networking page to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"VLAN Config")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"eth4")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eth5")," for Storage Network and remember the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," name for the further step."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"storagenetwork-diff.png",src:n(14490).Z,width:"1551",height:"741"})),(0,a.kt)("h3",{id:"harvester-storage-network-setting"},"Harvester Storage Network Setting"),(0,a.kt)("p",null,"Harvester Storage Network setting will need ",(0,a.kt)("inlineCode",{parentName:"p"},"range"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterNetwork"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"vlan")," field to construct Multus NetworkAttachmentDefinition for Storage Network usage. You could apply this setting via Web UI or CLI."),(0,a.kt)("h4",{id:"web-ui"},"Web UI"),(0,a.kt)("p",null,"Harvester Storage Network setting could be easily modified on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings > storage-network")," page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"storagenetwork-ui.png",src:n(36273).Z,width:"1715",height:"946"})),(0,a.kt)("h4",{id:"cli"},"CLI"),(0,a.kt)("p",null,"Users could use this command to edit Harvester Storage Network setting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit settings.harvesterhci.io storage-network\n")),(0,a.kt)("p",null,"The value format is JSON string or empty string as shown in below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "vlan": 100,\n    "clusterNetwork": "storage",\n    "range": "192.168.0.0/24"\n}\n')),(0,a.kt)("p",null,"The full configuration will be like this example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: harvesterhci.io/v1beta1\nkind: Setting\nmetadata:\n  name: storage-network\nvalue: \'{"vlan":100,"clusterNetwork":"storage","range":"192.168.0.0/24"}\'\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Because of the design, Harvester will treat extra and insignificant characters in JSON string as a different configuration.")),(0,a.kt)("h3",{id:"after-applying-harvester-storage-network-setting"},"After Applying Harvester Storage Network Setting"),(0,a.kt)("p",null,"After applying Harvester's Storage Network setting, Harvester will stop all pods that are related to Longhorn volumes. Currently, Harvester has some pods listed below that will be stopped during setting."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prometheus"),(0,a.kt)("li",{parentName:"ul"},"Grafana"),(0,a.kt)("li",{parentName:"ul"},"Alertmanager"),(0,a.kt)("li",{parentName:"ul"},"VM Import Controller")),(0,a.kt)("p",null,"Harvester will also create a new NetworkAttachmentDefinition and update the Longhorn Storage Network setting."),(0,a.kt)("p",null,"Once Longhorn setting is updated, Longhorn will restart all ",(0,a.kt)("inlineCode",{parentName:"p"},"instance-manager-r")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"instance-manager-e")," to apply the new network configuration, and Harvester will restart pods."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Harvester will not start VM automatically. Users should check whether the configuration is completed or not in the next section and start VM manually on demand.")),(0,a.kt)("h3",{id:"verify-configuration-is-completed"},"Verify Configuration is Completed"),(0,a.kt)("h4",{id:"step-1"},"Step 1"),(0,a.kt)("p",null,"Check if Harvester Storage Network setting's status is ",(0,a.kt)("inlineCode",{parentName:"p"},"True")," and the type is ",(0,a.kt)("inlineCode",{parentName:"p"},"configured"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get settings.harvesterhci.io storage-network -o yaml\n")),(0,a.kt)("p",null,"Completed Setting Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: harvesterhci.io/v1beta1\nkind: Setting\nmetadata:\n  annotations:\n    storage-network.settings.harvesterhci.io/hash: da39a3ee5e6b4b0d3255bfef95601890afd80709\n    storage-network.settings.harvesterhci.io/net-attach-def: ""\n    storage-network.settings.harvesterhci.io/old-net-attach-def: ""\n  creationTimestamp: "2022-10-13T06:36:39Z"\n  generation: 51\n  name: storage-network\n  resourceVersion: "154638"\n  uid: 2233ad63-ee52-45f6-a79c-147e48fc88db\nstatus:\n  conditions:\n  - lastUpdateTime: "2022-10-13T13:05:17Z"\n    reason: Completed\n    status: "True"\n    type: configured\n')),(0,a.kt)("h4",{id:"step-2"},"Step 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check if all Longhorn ",(0,a.kt)("inlineCode",{parentName:"li"},"instance-manager-e")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"instance-manager-r")," are ready and networks are correct."),(0,a.kt)("li",{parentName:"ul"},"Check if Annotations ",(0,a.kt)("inlineCode",{parentName:"li"},"k8s.v1.cni.cncf.io/network-status")," has an interface named ",(0,a.kt)("inlineCode",{parentName:"li"},"lhnet1")," and the IP address is in the IP range.")),(0,a.kt)("p",null,"Users could use the following command to show all Longhorn Instance Manager to verify."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n longhorn-system -l longhorn.io/component=instance-manager -o yaml\n")),(0,a.kt)("p",null,"Correct Network Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  annotations:\n    cni.projectcalico.org/containerID: 2518b0696f6635896645b5546417447843e14208525d3c19d7ec6d7296cc13cd\n    cni.projectcalico.org/podIP: 10.52.2.122/32\n    cni.projectcalico.org/podIPs: 10.52.2.122/32\n    k8s.v1.cni.cncf.io/network-status: |-\n      [{\n          "name": "k8s-pod-network",\n          "ips": [\n              "10.52.2.122"\n          ],\n          "default": true,\n          "dns": {}\n      },{\n          "name": "harvester-system/storagenetwork-95bj4",\n          "interface": "lhnet1",\n          "ips": [\n              "192.168.0.3"\n          ],\n          "mac": "2e:51:e6:31:96:40",\n          "dns": {}\n      }]\n    k8s.v1.cni.cncf.io/networks: \'[{"namespace": "harvester-system", "name": "storagenetwork-95bj4",\n      "interface": "lhnet1"}]\'\n    k8s.v1.cni.cncf.io/networks-status: |-\n      [{\n          "name": "k8s-pod-network",\n          "ips": [\n              "10.52.2.122"\n          ],\n          "default": true,\n          "dns": {}\n      },{\n          "name": "harvester-system/storagenetwork-95bj4",\n          "interface": "lhnet1",\n          "ips": [\n              "192.168.0.3"\n          ],\n          "mac": "2e:51:e6:31:96:40",\n          "dns": {}\n      }]\n    kubernetes.io/psp: global-unrestricted-psp\n    longhorn.io/last-applied-tolerations: \'[{"key":"kubevirt.io/drain","operator":"Exists","effect":"NoSchedule"}]\'\n\nOmitted...\n')),(0,a.kt)("h3",{id:"start-vm-manually"},"Start VM Manually"),(0,a.kt)("p",null,"After verifying the configuration, users could start VM manually on demand."))}u.isMDXComponent=!0},14490:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/storagenetwork-diff-27850c359733ffa1a4ce550cc16af4a5.png"},43799:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/storagenetwork-same-cc797fc537845a0b6eb4290c78252e7e.png"},36273:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/storagenetwork-ui-cb75b9781f2196e3bba724b398edd066.png"}}]);