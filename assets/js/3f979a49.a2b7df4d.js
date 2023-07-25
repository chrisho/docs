"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3805],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||s;return a?i.createElement(g,o(o({ref:t},c),{},{components:a})):i.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:n,o[1]=r;for(var d=2;d<s;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93571:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=a(83117),n=(a(67294),a(3905));const s={sidebar_position:2,sidebar_label:"StorageClass",title:"StorageClass"},o=void 0,r={unversionedId:"advanced/storageclass",id:"advanced/storageclass",title:"StorageClass",description:"A StorageClass allows administrators to describe the classes of storage they offer. Different Longhorn StorageClasses might map to replica policies, or to node schedule policies, or disk schedule policies determined by the cluster administrators. This concept is sometimes called profiles in other storage systems.",source:"@site/docs/advanced/storageclass.md",sourceDirName:"advanced",slug:"/advanced/storageclass",permalink:"/dev/advanced/storageclass",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/storageclass.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"StorageClass",title:"StorageClass"},sidebar:"sidebar",previous:{title:"Settings",permalink:"/dev/advanced/index"},next:{title:"Storage Network",permalink:"/dev/advanced/storagenetwork"}},l={},d=[{value:"Creating a StorageClass",id:"creating-a-storageclass",level:2},{value:"Header Section",id:"header-section",level:3},{value:"Parameters Tab",id:"parameters-tab",level:3},{value:"Number of Replicas",id:"number-of-replicas",level:4},{value:"Stale Replica Timeout",id:"stale-replica-timeout",level:4},{value:"Node Selector (Optional)",id:"node-selector-optional",level:4},{value:"Disk Selector (Optional)",id:"disk-selector-optional",level:4},{value:"Migratable",id:"migratable",level:4},{value:"Customize Tab",id:"customize-tab",level:3},{value:"Reclaim Policy",id:"reclaim-policy",level:4},{value:"Allow Volume Expansion",id:"allow-volume-expansion",level:4},{value:"Volume Binding Mode",id:"volume-binding-mode",level:4},{value:"Appendix - Use Case",id:"appendix---use-case",level:2},{value:"HDD Scenario",id:"hdd-scenario",level:3},{value:"Recommended Practice",id:"recommended-practice",level:4}],c={toc:d},p="wrapper";function m(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A StorageClass allows administrators to describe the ",(0,n.kt)("strong",{parentName:"p"},"classes")," of storage they offer. Different Longhorn StorageClasses might map to replica policies, or to node schedule policies, or disk schedule policies determined by the cluster administrators. This concept is sometimes called ",(0,n.kt)("strong",{parentName:"p"},"profiles")," in other storage systems."),(0,n.kt)("h2",{id:"creating-a-storageclass"},"Creating a StorageClass"),(0,n.kt)("p",null,"You can create one or more StorageClasses from the ",(0,n.kt)("strong",{parentName:"p"},"Advanced > StorageClasses")," page."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(38091).Z,width:"1783",height:"771"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"After a StorageClass is created, nothing can be changed except ",(0,n.kt)("inlineCode",{parentName:"p"},"Description"),".")),(0,n.kt)("h3",{id:"header-section"},"Header Section"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Name"),": name of the StorageClass"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Description")," (optional): description of the StorageClass")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(98836).Z,width:"1783",height:"771"})),(0,n.kt)("h3",{id:"parameters-tab"},"Parameters Tab"),(0,n.kt)("h4",{id:"number-of-replicas"},"Number of Replicas"),(0,n.kt)("p",null,"The number of replicas created for each volume in Longhorn. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(65030).Z,width:"1783",height:"771"})),(0,n.kt)("h4",{id:"stale-replica-timeout"},"Stale Replica Timeout"),(0,n.kt)("p",null,"Determines when Longhorn would clean up an error replica after the replica's status is ERROR. The unit is minute. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"30")," minutes in Harvester."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(55708).Z,width:"1783",height:"771"})),(0,n.kt)("h4",{id:"node-selector-optional"},"Node Selector (Optional)"),(0,n.kt)("p",null,"Select the node tags to be matched in the volume scheduling stage. You can add node tags by going to ",(0,n.kt)("strong",{parentName:"p"},"Host > Edit Config"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(38742).Z,width:"1783",height:"771"})),(0,n.kt)("h4",{id:"disk-selector-optional"},"Disk Selector (Optional)"),(0,n.kt)("p",null,"Select the disk tags to be matched in the volume scheduling stage. You can add disk tags by going to ",(0,n.kt)("strong",{parentName:"p"},"Host > Edit Config"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(92106).Z,width:"1783",height:"771"})),(0,n.kt)("h4",{id:"migratable"},"Migratable"),(0,n.kt)("p",null,"Whether ",(0,n.kt)("a",{parentName:"p",href:"/dev/vm/live-migration"},"Live Migration")," is supported. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"Yes"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(11647).Z,width:"1783",height:"771"})),(0,n.kt)("h3",{id:"customize-tab"},"Customize Tab"),(0,n.kt)("h4",{id:"reclaim-policy"},"Reclaim Policy"),(0,n.kt)("p",null,"Volumes dynamically created by a StorageClass will have the reclaim policy specified in the ",(0,n.kt)("inlineCode",{parentName:"p"},"reclaimPolicy")," field of the class. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete")," mode is used by default."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Delete"),": Deletes volumes and the underlying devices when the volume claim is deleted."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Retain"),": Retains the volume for manual cleanup.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(20527).Z,width:"1791",height:"770"})),(0,n.kt)("h4",{id:"allow-volume-expansion"},"Allow Volume Expansion"),(0,n.kt)("p",null,"Volumes can be configured to be expandable. This feature is ",(0,n.kt)("inlineCode",{parentName:"p"},"Enabled")," by default, which allows users to resize the volume by editing the corresponding PVC object."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(11561).Z,width:"1791",height:"770"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can only use the volume expansion feature to grow a Volume, not to shrink it.")),(0,n.kt)("h4",{id:"volume-binding-mode"},"Volume Binding Mode"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"volumeBindingMode")," field controls when volume binding and dynamic provisioning should occur. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Immediate")," mode is used by default."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Immediate"),": Binds and provisions a persistent volume once the PersistentVolumeClaim is created."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"WaitForFirstConsumer"),": Binds and provisions a persistent volume once a VM using the PersistentVolumeClaim is created.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(3884).Z,width:"1791",height:"770"})),(0,n.kt)("h2",{id:"appendix---use-case"},"Appendix - Use Case"),(0,n.kt)("h3",{id:"hdd-scenario"},"HDD Scenario"),(0,n.kt)("p",null,"With the introduction of ",(0,n.kt)("em",{parentName:"p"},"StorageClass"),", users can now use ",(0,n.kt)("strong",{parentName:"p"},"HDDs")," for tiered or archived cold storage."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"HDD is not recommended for guest RKE2 clusters or VMs with good performance disk requirements.")),(0,n.kt)("h4",{id:"recommended-practice"},"Recommended Practice"),(0,n.kt)("p",null,"First, add your HDD on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Host")," page and specify the disk tags as needed, such as",(0,n.kt)("inlineCode",{parentName:"p"},"HDD")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"ColdStorage"),". For more information on how to add extra disks and disk tags, see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/host/#multi-disk-management"},"Multi-disk Management")," for details."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(28184).Z,width:"1785",height:"772"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(89253).Z,width:"1919",height:"1079"})),(0,n.kt)("p",null,"Then, create a new ",(0,n.kt)("inlineCode",{parentName:"p"},"StorageClass")," for the HDD (use the above disk tags). For hard drives with large capacity but slow performance, the number of replicas can be reduced to improve performance. For details, see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/advanced/storageclass"},"storageclass")," for details."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(21138).Z,width:"1785",height:"767"})),(0,n.kt)("p",null,"You can now create a volume using the above ",(0,n.kt)("inlineCode",{parentName:"p"},"StorageClass")," with HDDs mostly for cold storage or archiving purpose."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(43941).Z,width:"1789",height:"767"})))}m.isMDXComponent=!0},28184:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add_hdd_on_host_page-3ccc34f2a8bc65e511cc35776100e80d.png"},89253:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add_tags-00cf25164f80f53cdd438eaecee15665.png"},21138:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_hdd_storageclass-8e158b236ade10694195738114374437.png"},92106:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_disk_selector-c60a5061987f68f18252a819732640e6.png"},38091:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_entry-e4e255f7a07230ce65351e3966c056ff.png"},98836:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_header_sections-9d615b806de3fb6314419c0e76e30663.png"},11647:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_migratable-dde41ae11a1e2dbf156b91b4cc488a7a.png"},38742:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_node_selector-e055498ee31e10df985dd0452a825c21.png"},65030:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_replicas-720c4cf37f05197846b7d021a3d3fd7c.png"},55708:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_stale_timeout-5602affc442bba6fe5f933a309c3847f.png"},43941:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_volume_hdd-91b7f44277ede22bd6bd230b00697aa4.png"},11561:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/customize_tab_allow_vol_expansion-a76850a093cf3669eb31341081d8b51c.png"},20527:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/customize_tab_reclaim_policy-5440e3059223d00fcf3fe0398afbaec0.png"},3884:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/customize_tab_vol_binding_mode-54f01765773587a542eedc6a2afe43fa.png"}}]);