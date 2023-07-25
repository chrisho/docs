"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(83117),r=(n(67294),n(3905));const i={sidebar_position:3,sidebar_label:"USB Installation",title:"USB Installation"},o=void 0,l={unversionedId:"install/usb-install",id:"version-v1.0/install/usb-install",title:"USB Installation",description:"Create a bootable USB flash drive",source:"@site/versioned_docs/version-v1.0/install/usb-install.md",sourceDirName:"install",slug:"/install/usb-install",permalink:"/v1.0/install/usb-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/install/usb-install.md",tags:[],version:"v1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"USB Installation",title:"USB Installation"},sidebar:"tutorialSidebar",previous:{title:"ISO Installation",permalink:"/v1.0/install/iso-install"},next:{title:"PXE Boot Installation",permalink:"/v1.0/install/pxe-boot-install"}},s={},d=[{value:"Create a bootable USB flash drive",id:"create-a-bootable-usb-flash-drive",level:2},{value:"balenaEtcher",id:"balenaetcher",level:3},{value:"<code>dd</code> command",id:"dd-command",level:3},{value:"Common issues",id:"common-issues",level:2},{value:"When booting from a USB installation flash drive, a <code>GRUB _</code> text is displayed, but nothing happens",id:"when-booting-from-a-usb-installation-flash-drive-a-grub-_-text-is-displayed-but-nothing-happens",level:3},{value:"Graphics issue",id:"graphics-issue",level:3},{value:"Other issues",id:"other-issues",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-a-bootable-usb-flash-drive"},"Create a bootable USB flash drive"),(0,r.kt)("p",null,"There are a couple of ways to create a USB installation flash drive."),(0,r.kt)("h3",{id:"balenaetcher"},"balenaEtcher"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"balenaEtcher")," supports writing images to USB flash drives. It has a GUI and is easy to use. Select the Harvester installation ISO and the target USB device to create a USB installation flash drive."),(0,r.kt)("h3",{id:"dd-command"},(0,r.kt)("inlineCode",{parentName:"h3"},"dd")," command"),(0,r.kt)("p",null,"On Linux or other platforms that have the ",(0,r.kt)("inlineCode",{parentName:"p"},"dd")," command, users can use ",(0,r.kt)("inlineCode",{parentName:"p"},"dd")," to create a USB installation flash drive."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you choose the correct device. The process erases data on the selected device.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# sudo dd if=<path_to_iso> of=<path_to_usb_device> bs=64k\n")),(0,r.kt)("h2",{id:"common-issues"},"Common issues"),(0,r.kt)("h3",{id:"when-booting-from-a-usb-installation-flash-drive-a-grub-_-text-is-displayed-but-nothing-happens"},"When booting from a USB installation flash drive, a ",(0,r.kt)("inlineCode",{parentName:"h3"},"GRUB _")," text is displayed, but nothing happens"),(0,r.kt)("p",null,"If you are using the UEFI mode, try to boot from the UEFI boot partition on the USB device rather than the USB device itself. e.g.,"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(72986).Z,width:"730",height:"492"})),(0,r.kt)("p",null,"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"UEFI: USB disk 3.0 PMAP, Partition 1")," to boot. Note the representation varies from system to system."),(0,r.kt)("h3",{id:"graphics-issue"},"Graphics issue"),(0,r.kt)("p",null,"Firmwares of some graphic cards are not shipped in ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.3.0"),".\nYou can press ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," to edit the GRUB menu entry and append ",(0,r.kt)("inlineCode",{parentName:"p"},"nomodeset")," to the boot parameters. Press ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl + x")," to boot."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7067).Z,width:"712",height:"399"})),(0,r.kt)("h3",{id:"other-issues"},"Other issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Harvester installer is not displayed"),(0,r.kt)("p",{parentName:"li"},"  If a USB flash driver boots, but you can't see the harvester installer. You may try out the following workarounds:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Plug the USB flash drive into a USB 2.0 slot."),(0,r.kt)("li",{parentName:"ul"},"For version ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.3.0")," or above, try to remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"console=ttyS0")," parameter when booting. You can press ",(0,r.kt)("inlineCode",{parentName:"li"},"e")," to edit the GRUB menu entry and remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"console=ttyS0")," parameter.")))))}u.isMDXComponent=!0},7067:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/usb-install-nomodeset-e6dc881f325fe4654dde2b0c8b94276b.png"},72986:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/usb-install-select-correct-partition-bd8f4425f8740b6aeafb90cfd3652748.jpg"}}]);