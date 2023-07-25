"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8728],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,c=e.originalType,o=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),u=l(r),m=s,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||c;return r?n.createElement(d,i(i({ref:t},h),{},{components:r})):n.createElement(d,i({ref:t},h))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var c=r.length,i=new Array(c);i[0]=m;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=r(83117),s=(r(67294),r(3905));const c={sidebar_position:4,sidebar_label:"Access to the Virtual Machine",title:"Access to the Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Access to the VM"],Description:"Once the VM is up and running, it can be accessed using either VNC or the serial console from the Harvester UI."},i=void 0,a={unversionedId:"vm/access-to-the-vm",id:"version-v0.3/vm/access-to-the-vm",title:"Access to the Virtual Machine",description:"Once the VM is up and running, you can access it using either the Virtual Network Computing (VNC) client or the serial console from the Harvester UI.",source:"@site/versioned_docs/version-v0.3/vm/access-to-the-vm.md",sourceDirName:"vm",slug:"/vm/access-to-the-vm",permalink:"/zh/v0.3/vm/access-to-the-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/vm/access-to-the-vm.md",tags:[],version:"v0.3",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Access to the Virtual Machine",title:"Access to the Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Access to the VM"],Description:"Once the VM is up and running, it can be accessed using either VNC or the serial console from the Harvester UI."},sidebar:"tutorialSidebar",previous:{title:"Create a Virtual Machine",permalink:"/zh/v0.3/vm/create-vm"},next:{title:"VM Backup & Restore",permalink:"/zh/v0.3/vm/backup-restore"}},o={},l=[{value:"Access with the Harvester UI",id:"access-with-the-harvester-ui",level:2},{value:"Access with the SSH Client",id:"access-with-the-ssh-client",level:2}],h={toc:l},u="wrapper";function p(e){let{components:t,...c}=e;return(0,s.kt)(u,(0,n.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Once the VM is up and running, you can access it using either the Virtual Network Computing (VNC) client or the serial console from the Harvester UI."),(0,s.kt)("p",null,"Additionally, you can connect directly from your computer's SSH client."),(0,s.kt)("h2",{id:"access-with-the-harvester-ui"},"Access with the Harvester UI"),(0,s.kt)("p",null,"VMs can be accessed from the UI directly using either VNC or the serial console."),(0,s.kt)("p",null,"If the VGA display is not enabled on the VM, as with the Ubuntu minimal cloud image, the VM can be accessed with the serial console."),(0,s.kt)("p",null,(0,s.kt)("img",{src:r(5745).Z,width:"3354",height:"1444"})),(0,s.kt)("h2",{id:"access-with-the-ssh-client"},"Access with the SSH Client"),(0,s.kt)("p",null,"Enter the IP address of the host in a terminal emulation client, such as PuTTY. You may also run the following command to access the VM directly from your computer's SSH client:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," ssh -i ~/.ssh/your-ssh-key user@<ip-address-or-hostname>\n")))}p.isMDXComponent=!0},5745:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/access-to-vm-b97f6b27951342b26e004ad807925804.png"}}]);