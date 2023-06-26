"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=o(n),u=a,c=m["".concat(s,".").concat(u)]||m[u]||h[u]||i;return n?r.createElement(c,l(l({ref:t},d),{},{components:n})):r.createElement(c,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:4,sidebar_label:"PXE \u5f15\u5bfc\u5b89\u88c5",title:"PXE \u5f15\u5bfc\u5b89\u88c5",keywords:["Harvester","harvester","Rancher","rancher","\u5b89\u88c5 Harvester","\u5b89\u88c5 Harvester","Harvester \u5b89\u88c5","PXE \u5f15\u5bfc\u5b89\u88c5"],Description:"\u4ece `0.2.0` \u5f00\u59cb\uff0cHarvester \u53ef\u4ee5\u81ea\u52a8\u5b89\u88c5\u3002\u672c\u6587\u63d0\u4f9b\u4f7f\u7528 pxe \u5f15\u5bfc\u8fdb\u884c\u81ea\u52a8\u5b89\u88c5\u7684\u793a\u4f8b\u3002"},l=void 0,p={unversionedId:"install/pxe-boot-install",id:"install/pxe-boot-install",title:"PXE \u5f15\u5bfc\u5b89\u88c5",description:"\u4ece 0.2.0 \u5f00\u59cb\uff0cHarvester \u53ef\u4ee5\u81ea\u52a8\u5b89\u88c5\u3002\u672c\u6587\u63d0\u4f9b\u4f7f\u7528 pxe \u5f15\u5bfc\u8fdb\u884c\u81ea\u52a8\u5b89\u88c5\u7684\u793a\u4f8b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/pxe-boot-install.md",sourceDirName:"install",slug:"/install/pxe-boot-install",permalink:"/zh/dev/install/pxe-boot-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/install/pxe-boot-install.md",tags:[],version:"current",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"PXE \u5f15\u5bfc\u5b89\u88c5",title:"PXE \u5f15\u5bfc\u5b89\u88c5",keywords:["Harvester","harvester","Rancher","rancher","\u5b89\u88c5 Harvester","\u5b89\u88c5 Harvester","Harvester \u5b89\u88c5","PXE \u5f15\u5bfc\u5b89\u88c5"],Description:"\u4ece `0.2.0` \u5f00\u59cb\uff0cHarvester \u53ef\u4ee5\u81ea\u52a8\u5b89\u88c5\u3002\u672c\u6587\u63d0\u4f9b\u4f7f\u7528 pxe \u5f15\u5bfc\u8fdb\u884c\u81ea\u52a8\u5b89\u88c5\u7684\u793a\u4f8b\u3002"},sidebar:"tutorialSidebar",previous:{title:"U \u76d8\u5b89\u88c5",permalink:"/zh/dev/install/usb-install"},next:{title:"Harvester \u914d\u7f6e",permalink:"/zh/dev/install/harvester-configuration"}},s={},o=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:2},{value:"\u51c6\u5907 HTTP \u670d\u52a1\u5668",id:"\u51c6\u5907-http-\u670d\u52a1\u5668",level:2},{value:"\u51c6\u5907\u5f15\u5bfc\u6587\u4ef6",id:"\u51c6\u5907\u5f15\u5bfc\u6587\u4ef6",level:2},{value:"\u51c6\u5907 iPXE \u5f15\u5bfc\u811a\u672c",id:"\u51c6\u5907-ipxe-\u5f15\u5bfc\u811a\u672c",level:2},{value:"CREATE \u6a21\u5f0f",id:"create-\u6a21\u5f0f",level:3},{value:"JOIN \u6a21\u5f0f",id:"join-\u6a21\u5f0f",level:3},{value:"DHCP \u670d\u52a1\u5668\u914d\u7f6e",id:"dhcp-\u670d\u52a1\u5668\u914d\u7f6e",level:2},{value:"Harvester \u914d\u7f6e",id:"harvester-\u914d\u7f6e",level:2},{value:"UEFI HTTP \u542f\u52a8\u652f\u6301",id:"uefi-http-\u542f\u52a8\u652f\u6301",level:2},{value:"\u63d0\u4f9b iPXE \u7a0b\u5e8f",id:"\u63d0\u4f9b-ipxe-\u7a0b\u5e8f",level:3},{value:"DHCP \u670d\u52a1\u5668\u914d\u7f6e",id:"dhcp-\u670d\u52a1\u5668\u914d\u7f6e-1",level:3},{value:"\u7528\u4e8e UEFI \u542f\u52a8\u7684 iPXE \u811a\u672c",id:"\u7528\u4e8e-uefi-\u542f\u52a8\u7684-ipxe-\u811a\u672c",level:3},{value:"\u5b9e\u7528\u7684\u5185\u6838\u53c2\u6570",id:"\u5b9e\u7528\u7684\u5185\u6838\u53c2\u6570",level:2},{value:"<code>ip=dhcp</code>",id:"ipdhcp",level:3},{value:"<code>rd.net.dhcp.retry=&lt;cnt&gt;</code>",id:"rdnetdhcpretrycnt",level:3}],d={toc:o};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"0.2.0")," \u5f00\u59cb\uff0cHarvester \u53ef\u4ee5\u81ea\u52a8\u5b89\u88c5\u3002\u672c\u6587\u63d0\u4f9b\u4f7f\u7528 pxe \u5f15\u5bfc\u8fdb\u884c\u81ea\u52a8\u5b89\u88c5\u7684\u793a\u4f8b\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://ipxe.org/"},"iPXE")," \u8fdb\u884c\u7f51\u7edc\u542f\u52a8\u3002iPXE \u6bd4\u4f20\u7edf pxe \u5f15\u5bfc\u7a0b\u5e8f\u529f\u80fd\u66f4\u591a\uff0c\u800c\u4e14\u4e0e\u73b0\u4ee3\u7f51\u5361\u66f4\u5339\u914d\u3002\u5982\u679c\u4f60\u7684\u7f51\u5361\u4e0d\u652f\u6301 iPXE \u56fa\u4ef6\uff0c\u4f60\u53ef\u4ee5\u5148\u4ece TFTP \u670d\u52a1\u5668\u52a0\u8f7d iPXE \u56fa\u4ef6\u955c\u50cf\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u83b7\u5f97 iPXE \u811a\u672c\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/ipxe-examples"},"Harvester iPXE \u793a\u4f8b"),"\u3002"),(0,a.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8282\u70b9\u81f3\u5c11\u9700\u8981\u6709 ",(0,a.kt)("strong",{parentName:"p"},"8 GB")," \u7684\u5185\u5b58\uff0c\u6765\u8ba9\u5b89\u88c5\u7a0b\u5e8f\u5c06\u6574\u4e2a ISO \u6587\u4ef6\u52a0\u8f7d\u5230 tmpfs\u3002")),(0,a.kt)("h2",{id:"\u51c6\u5907-http-\u670d\u52a1\u5668"},"\u51c6\u5907 HTTP \u670d\u52a1\u5668"),(0,a.kt)("p",null,"\u9700\u8981 HTTP \u670d\u52a1\u5668\u6765\u63d0\u4f9b\u5f15\u5bfc\u6587\u4ef6\u3002\n\u5047\u8bbe NGINX HTTP \u670d\u52a1\u5668\u7684 IP \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"10.100.0.10"),"\uff0c\u5b83\u63d0\u4f9b ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html/")," \u76ee\u5f55\uff0c\u8def\u5f84\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"http://10.100.0.10/"),"\u3002"),(0,a.kt)("h2",{id:"\u51c6\u5907\u5f15\u5bfc\u6587\u4ef6"},"\u51c6\u5907\u5f15\u5bfc\u6587\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Harvester \u53d1\u5e03\u9875\u9762"),"\u4e0b\u8f7d\u6240\u9700\u6587\u4ef6\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ISO\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"harvester-<version>-amd64.iso")),(0,a.kt)("li",{parentName:"ul"},"\u5185\u6838\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"harvester-<version>-vmlinuz-amd64")),(0,a.kt)("li",{parentName:"ul"},"initrd\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"harvester-<version>-initrd-amd64")),(0,a.kt)("li",{parentName:"ul"},"rootfs squashfs \u955c\u50cf\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"harvester-<version>-rootfs-amd64.squashfs")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u63d0\u4f9b\u6587\u4ef6\u3002"),(0,a.kt)("p",{parentName:"li"}," \u5c06\u4e0b\u8f7d\u7684\u6587\u4ef6\u590d\u5236\u6216\u79fb\u52a8\u5230\u9002\u5f53\u7684\u4f4d\u7f6e\uff0c\u4ee5\u4fbf\u901a\u8fc7 HTTP \u670d\u52a1\u5668\u4e0b\u8f7d\u5b83\u4eec\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo mkdir -p /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-<version>-amd64.iso /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-<version>-vmlinuz-amd64 /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-<version>-initrd-amd64 /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-<version>-rootfs-amd64.squashfs /usr/share/nginx/html/harvester/\n")))),(0,a.kt)("h2",{id:"\u51c6\u5907-ipxe-\u5f15\u5bfc\u811a\u672c"},"\u51c6\u5907 iPXE \u5f15\u5bfc\u811a\u672c"),(0,a.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u4e24\u79cd\u6a21\u5f0f\u6267\u884c\u81ea\u52a8\u5b89\u88c5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CREATE"),"\uff1a\u5b89\u88c5\u4e00\u4e2a\u8282\u70b9\u6765\u6784\u5efa\u4e00\u4e2a\u521d\u59cb\u7684 Harvester \u96c6\u7fa4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JOIN"),"\uff1a\u5b89\u88c5\u4e00\u4e2a\u8282\u70b9\u6765\u52a0\u5165\u73b0\u6709\u7684 Harvester \u96c6\u7fa4\u3002")),(0,a.kt)("h3",{id:"create-\u6a21\u5f0f"},"CREATE \u6a21\u5f0f"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u5b89\u5168\u98ce\u9669"),"\uff1a\u4e0b\u9762\u7684\u914d\u7f6e\u6587\u4ef6\u5305\u542b\u5e94\u4fdd\u5bc6\u7684\u51ed\u8bc1\u3002\u8bf7\u4e0d\u8981\u516c\u5f00\u914d\u7f6e\u6587\u4ef6\u3002")),(0,a.kt)("p",null,"\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," \u6a21\u5f0f\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"config-create.yaml")," \u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/install/harvester-configuration"},"Harvester \u914d\u7f6e\u6587\u4ef6"),"\u3002\u6309\u7167\u9700\u8981\u4fee\u6539\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},"# cat /usr/share/nginx/html/harvester/config-create.yaml\nscheme_version: 1\ntoken: token # \u66ff\u6362\u4e3a\u6240\u9700\u7684 token\nos:\n  hostname: node1 # \u8bbe\u7f6e\u4e3b\u673a\u540d\u5982\u679c DHCP \u670d\u52a1\u5668\u63d0\u4f9b\u4e3b\u673a\u540d\uff0c\u53ef\u4ee5\u7701\u7565\n  ssh_authorized_keys:\n  - ssh-rsa ... # \u66ff\u6362\u4e3a\u4f60\u7684\u516c\u94a5\n  password: p@ssword     # \u66ff\u6362\u4e3a\u4f60\u7684\u5bc6\u7801\n  ntp_servers:\n  - 0.suse.pool.ntp.org\n  - 1.suse.pool.ntp.org\ninstall:\n  mode: create\n  management_interface: \u4ece v1.1.0 \u5f00\u59cb\u53ef\u7528\n    interfaces:\n      - name: ens5\n    default_route: true\n    method: dhcp\n    bond_options:\n      mode: balance-tlb\n      miimon: 100\n  device: /dev/sda # \u76ee\u6807\u78c1\u76d8\n#  data_disk: /dev/sdb # \u5efa\u8bae\u4f7f\u7528\u5355\u72ec\u7684\u78c1\u76d8\u6765\u5b58\u50a8 VM \u6570\u636e\n  iso_url: http://10.100.0.10/harvester/harvester-<version>-amd64.iso\n#  tty: ttyS1,115200n8   # \u7528\u4e8e\u6ca1\u6709 VGA \u63a7\u5236\u53f0\u7684\u4e3b\u673a\n\n  vip: 10.100.0.99        # \u8bbf\u95ee Harvester GUI \u7684 VIP\u3002\u8bf7\u786e\u4fdd IP \u53ef\u7528\n  vip_mode: static        # \u6216\u8005 dhcp\u3002\u8be6\u60c5\u8bf7\u67e5\u770b\u914d\u7f6e\u6587\u4ef6\u3002\n#  vip_hw_addr: 52:54:00:ec:0e:0b   # \u5982\u679c vip_mode \u8bbe\u4e3a static\uff0c\u5219\u7559\u7a7a\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," \u6a21\u5f0f\u5b89\u88c5\u7684\u8282\u70b9\uff0c\u4ee5\u4e0b\u662f\u4f7f\u7528\u4e0a\u8ff0\u914d\u7f6e\u542f\u52a8\u5185\u6838\u7684 iPXE \u811a\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!ipxe\nkernel harvester-<version>-vmlinuz ip=dhcp net.ifnames=1 rd.cos.disable rd.noverifyssl console=tty1 root=live:http://10.100.0.10/harvester/rootfs.squashfs harvester.install.automatic=true harvester.install.config_url=http://10.100.0.10/harvester/config-create.yaml\ninitrd harvester-<version>-initrd\nboot\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u5047\u8bbe iPXE \u811a\u672c\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html/harvester/ipxe-create")," \u4e2d\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6709\u591a\u4e2a\u7f51\u7edc\u63a5\u53e3\uff0c\u4f60\u53ef\u4ee5\u5229\u7528 dracut \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ip=")," \u53c2\u6570\u6765\u6307\u5b9a\u542f\u52a8\u754c\u9762\u4ee5\u53ca dracut \u652f\u6301\u7684\u5176\u4ed6\u7f51\u7edc\u914d\u7f6e\uff08\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ip=eth1:dhcp"),"\uff09\u3002\n\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/dracut.cmdline.7.html"},(0,a.kt)("inlineCode",{parentName:"a"},"man dracut.cmdline")),"\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ip=")," \u53c2\u6570\u4ec5\u6307\u5b9a\u542f\u52a8\u754c\u9762\uff0c\u56e0\u4e3a\u6211\u4eec\u4ec5\u652f\u6301",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"strong"},"ip=")," \u53c2\u6570"),"\u3002")),(0,a.kt)("h3",{id:"join-\u6a21\u5f0f"},"JOIN \u6a21\u5f0f"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u5b89\u5168\u98ce\u9669"),"\uff1a\u4e0b\u9762\u7684\u914d\u7f6e\u6587\u4ef6\u5305\u542b\u5e94\u4fdd\u5bc6\u7684\u51ed\u8bc1\u3002\u8bf7\u4e0d\u8981\u516c\u5f00\u914d\u7f6e\u6587\u4ef6\u3002")),(0,a.kt)("p",null,"\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN")," \u6a21\u5f0f\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"config-join.yaml")," \u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/install/harvester-configuration"},"Harvester \u914d\u7f6e\u6587\u4ef6"),"\u3002\u6309\u7167\u9700\u8981\u4fee\u6539\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},'# cat /usr/share/nginx/html/harvester/config-join.yaml\nscheme_version: 1\nserver_url: https://10.100.0.99:443  # "CREATE" \u4e2d\u914d\u7f6e\u7684 VIP\ntoken: token\nos:\n  hostname: node2\n  ssh_authorized_keys:\n    - ssh-rsa ... # \u66ff\u6362\u4e3a\u4f60\u7684\u516c\u94a5\n  password: p@ssword     # \u66ff\u6362\u4e3a\u4f60\u7684\u5bc6\u7801\n  dns_nameservers:\n  - 1.1.1.1\n  - 8.8.8.8\ninstall:\n  mode: join\n  management_interface: \u4ece v1.1.0 \u5f00\u59cb\u53ef\u7528\n    interfaces:\n      - name: ens5\n    default_route: true\n    method: dhcp\n    bond_options:\n      mode: balance-tlb\n      miimon: 100\n  device: /dev/sda # \u76ee\u6807\u78c1\u76d8\n#  data_disk: /dev/sdb # \u5efa\u8bae\u4f7f\u7528\u5355\u72ec\u7684\u78c1\u76d8\u6765\u5b58\u50a8 VM \u6570\u636e\n  iso_url: http://10.100.0.10/harvester/harvester-<version>-amd64.iso\n#  tty: ttyS1,115200n8   # \u7528\u4e8e\u6ca1\u6709 VGA \u63a7\u5236\u53f0\u7684\u4e3b\u673a\n')),(0,a.kt)("p",null,"\u6ce8\u610f ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"join")," \u5e76\u4e14\u9700\u8981\u63d0\u4f9b ",(0,a.kt)("inlineCode",{parentName:"p"},"server_url"),"\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN")," \u6a21\u5f0f\u5b89\u88c5\u7684\u8282\u70b9\uff0c\u4ee5\u4e0b\u662f\u4f7f\u7528\u4e0a\u8ff0\u914d\u7f6e\u542f\u52a8\u5185\u6838\u7684 iPXE \u811a\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!ipxe\nkernel harvester-<version>-vmlinuz ip=dhcp net.ifnames=1 rd.cos.disable rd.noverifyssl console=tty1 root=live:http://10.100.0.10/harvester/rootfs.squashfs harvester.install.automatic=true harvester.install.config_url=http://10.100.0.10/harvester/config-join.yaml\ninitrd harvester-<version>-initrd\nboot\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u5047\u8bbe iPXE \u811a\u672c\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html/harvester/ipxe-join")," \u4e2d\u3002"),(0,a.kt)("h2",{id:"dhcp-\u670d\u52a1\u5668\u914d\u7f6e"},"DHCP \u670d\u52a1\u5668\u914d\u7f6e"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u5982\u4f55\u914d\u7f6e ISC DHCP \u670d\u52a1\u5668\u4ee5\u63d0\u4f9b iPXE \u811a\u672c\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'option architecture-type code 93 = unsigned integer 16;\n\nsubnet 10.100.0.0 netmask 255.255.255.0 {\n    option routers 10.100.0.10;\n        option domain-name-servers 192.168.2.1;\n    range 10.100.0.100 10.100.0.253;\n}\n\ngroup {\n  # \u521b\u5efa\u7ec4\n  if exists user-class and option user-class = "iPXE" {\n    # ipxe \u5f15\u5bfc\n    if option architecture-type = 00:07 {\n      filename "http://10.100.0.10/harvester/ipxe-create-efi";\n    } else {\n      filename "http://10.100.0.10/harvester/ipxe-create";\n    }\n  } else {\n    # pxe \u5f15\u5bfc\n    if option architecture-type = 00:07 {\n      # UEFI\n      filename "ipxe.efi";\n    } else {\n      # Non-UEFI\n      filename "undionly.kpxe";\n    }\n  }\n\n  host node1 { hardware ethernet 52:54:00:6b:13:e2; }\n}\n\n\ngroup {\n  # join group\n  if exists user-class and option user-class = "iPXE" {\n    # ipxe \u5f15\u5bfc\n    if option architecture-type = 00:07 {\n      filename "http://10.100.0.10/harvester/ipxe-join-efi";\n    } else {\n      filename "http://10.100.0.10/harvester/ipxe-join";\n    }\n  } else {\n    # pxe \u5f15\u5bfc\n    if option architecture-type = 00:07 {\n      # UEFI\n      filename "ipxe.efi";\n    } else {\n      # Non-UEFI\n      filename "undionly.kpxe";\n    }\n  }\n\n  host node2 { hardware ethernet 52:54:00:69:d5:92; }\n}\n')),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u58f0\u660e\u4e86\u4e00\u4e2a\u5b50\u7f51\u548c\u4e24\u4e2a\u7ec4\u3002\u7b2c\u4e00\u7ec4\u7528\u4e8e\u4e3b\u673a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," \u6a21\u5f0f\u5f15\u5bfc\uff0c\u53e6\u4e00\u7ec4\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN")," \u6a21\u5f0f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u9009\u62e9 iPXE \u8def\u5f84\u3002\u4f46\u662f\uff0c\u5982\u679c\u6709 PXE \u5ba2\u6237\u7aef\uff0c\u5b83\u4f1a\u6839\u636e\u5ba2\u6237\u7aef\u67b6\u6784\u63d0\u4f9b iPXE \u955c\u50cf\u3002\u8bf7\u5148\u51c6\u5907\u8fd9\u4e9b\u955c\u50cf\u4ee5\u53ca TFTP \u670d\u52a1\u5668\u3002"),(0,a.kt)("h2",{id:"harvester-\u914d\u7f6e"},"Harvester \u914d\u7f6e"),(0,a.kt)("p",null,"\u6709\u5173 Harvester \u914d\u7f6e\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/install/harvester-configuration"},"Harvester \u914d\u7f6e"),"\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7b2c\u4e00\u4e2a\u8282\u70b9\u5c06\u662f\u96c6\u7fa4\u7684\u7ba1\u7406\u8282\u70b9\u3002\u5f53\u6709 3 \u4e2a\u8282\u70b9\u65f6\uff0c\u9996\u5148\u6dfb\u52a0\u7684\u53e6\u5916 2 \u4e2a\u8282\u70b9\u4f1a\u81ea\u52a8\u63d0\u5347\u4e3a\u7ba1\u7406\u8282\u70b9\uff0c\u4ece\u800c\u5f62\u6210 HA \u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u63d0\u5347\u5176\u5b83\u5730\u533a\u7684\u7ba1\u7406\u8282\u70b9\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh/dev/install/harvester-configuration#oslabels"},"os.labels")," \u4e2d\u6dfb\u52a0\u8282\u70b9\u6807\u7b7e ",(0,a.kt)("inlineCode",{parentName:"p"},"topology.kubernetes.io/zone"),"\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u81f3\u5c11\u9700\u8981\u4e09\u4e2a\u4e0d\u540c\u7684\u5730\u533a\u3002"),(0,a.kt)("p",null,"\u7528\u6237\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5185\u6838\u53c2\u6570\u63d0\u4f9b\u914d\u7f6e\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u9700\u8981\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," \u5b89\u88c5\u6a21\u5f0f\uff0c\u4f60\u53ef\u4ee5\u5728\u542f\u52a8\u65f6\u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester.install.mode=create")," \u5185\u6838\u53c2\u6570\u3002\u901a\u8fc7\u5185\u6838\u53c2\u6570\u4f20\u5165\u7684\u503c\u6bd4\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a\u7684\u503c\u5177\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7\u3002"),(0,a.kt)("h2",{id:"uefi-http-\u542f\u52a8\u652f\u6301"},"UEFI HTTP \u542f\u52a8\u652f\u6301"),(0,a.kt)("p",null,"UEFI \u56fa\u4ef6\u652f\u6301\u4ece HTTP \u670d\u52a1\u5668\u52a0\u8f7d\u542f\u52a8\u955c\u50cf\u3002\u672c\u8282\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528 UEFI \u7684 HTTP \u542f\u52a8\u6765\u52a0\u8f7d iPXE \u7a0b\u5e8f\u5e76\u6267\u884c\u81ea\u52a8\u5b89\u88c5\u3002"),(0,a.kt)("h3",{id:"\u63d0\u4f9b-ipxe-\u7a0b\u5e8f"},"\u63d0\u4f9b iPXE \u7a0b\u5e8f"),(0,a.kt)("p",null,"\u4ece ",(0,a.kt)("a",{parentName:"p",href:"http://boot.ipxe.org/ipxe.efi"},"http://boot.ipxe.org/ipxe.efi")," \u4e0b\u8f7d iPXE UEFI \u7a0b\u5e8f\uff0c\u5e76\u786e\u4fdd ",(0,a.kt)("inlineCode",{parentName:"p"},"ipxe.efi")," \u53ef\u4ee5\u4ece HTTP \u670d\u52a1\u5668\u4e0b\u8f7d\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/share/nginx/html/harvester/\nwget http://boot.ipxe.org/ipxe.efi\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"http://10.100.0.10/harvester/ipxe.efi"},"http://10.100.0.10/harvester/ipxe.efi")," \u672c\u5730\u4e0b\u8f7d\u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"dhcp-\u670d\u52a1\u5668\u914d\u7f6e-1"},"DHCP \u670d\u52a1\u5668\u914d\u7f6e"),(0,a.kt)("p",null,"\u5982\u679c\u7528\u6237\u8ba1\u5212\u901a\u8fc7\u5148\u83b7\u5f97\u4e00\u4e2a\u52a8\u6001 IP \u6765\u4f7f\u7528 UEFI HTTP \u542f\u52a8\u529f\u80fd\uff0cDHCP \u670d\u52a1\u5668\u5728\u770b\u5230\u8fd9\u6837\u7684\u8bf7\u6c42\u65f6\u9700\u8981\u63d0\u4f9b iPXE \u7a0b\u5e8f\u7684 URL\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u66f4\u65b0\u7684 ISC DHCP \u670d\u52a1\u5668\u7ec4\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'group {\n  # \u521b\u5efa\u7ec4\n  if exists user-class and option user-class = "iPXE" {\n    # ipxe \u5f15\u5bfc\n    if option architecture-type = 00:07 {\n      filename "http://10.100.0.10/harvester/ipxe-create-efi";\n    } else {\n      filename "http://10.100.0.10/harvester/ipxe-create";\n    }\n  } elsif substring (option vendor-class-identifier, 0, 10) = "HTTPClient" {\n    # UEFI HTTP \u542f\u52a8\n    option vendor-class-identifier "HTTPClient";\n    filename "http://10.100.0.10/harvester/ipxe.efi";\n  } else {\n    # pxe \u5f15\u5bfc\n    if option architecture-type = 00:07 {\n      # UEFI\n      filename "ipxe.efi";\n    } else {\n      # Non-UEFI\n      filename "undionly.kpxe";\n    }\n  }\n\n  host node1 { hardware ethernet 52:54:00:6b:13:e2; }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"elsif substring")," \u8bed\u53e5\u662f\u65b0\u7684\uff0c\u5b83\u5728\u770b\u5230 UEFI HTTP \u542f\u52a8 DHCP \u8bf7\u6c42\u65f6\u63d0\u4f9b ",(0,a.kt)("inlineCode",{parentName:"p"},"http://10.100.0.10/harvester/ipxe.efi"),"\u3002\u5728\u5ba2\u6237\u7aef\u83b7\u53d6 iPXE \u7a0b\u5e8f\u5e76\u8fd0\u884c\u540e\uff0ciPXE \u7a0b\u5e8f\u5c06\u518d\u6b21\u53d1\u9001 DHCP \u8bf7\u6c42\uff0c\u5e76\u4ece URL ",(0,a.kt)("inlineCode",{parentName:"p"},"http://10.100.0.10/harvester/ipxe-create-efi")," \u52a0\u8f7d iPXE \u811a\u672c\u3002"),(0,a.kt)("h3",{id:"\u7528\u4e8e-uefi-\u542f\u52a8\u7684-ipxe-\u811a\u672c"},"\u7528\u4e8e UEFI \u542f\u52a8\u7684 iPXE \u811a\u672c"),(0,a.kt)("p",null,"\u5728\u5185\u6838\u53c2\u6570\u4e2d\u6307\u5b9a UEFI \u542f\u52a8\u7684 initrd \u955c\u50cf\u662f\u5fc5\u987b\u7684\u3002\u4ee5\u4e0b\u793a\u4f8b\u662f\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," \u6a21\u5f0f\u66f4\u65b0\u7684 iPXE \u811a\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!ipxe\nkernel harvester-<version>-vmlinuz initrd=harvester-<version>-initrd ip=dhcp net.ifnames=1 rd.cos.disable rd.noverifyssl console=tty1 root=live:http://10.100.0.10/harvester/rootfs.squashfs harvester.install.automatic=true harvester.install.config_url=http://10.100.0.10/harvester/config-create.yaml\ninitrd harvester-<version>-initrd\nboot\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"initrd=harvester-<version>-initrd")," \u53c2\u6570\u662f\u5fc5\u987b\u7684\u3002"),(0,a.kt)("h2",{id:"\u5b9e\u7528\u7684\u5185\u6838\u53c2\u6570"},"\u5b9e\u7528\u7684\u5185\u6838\u53c2\u6570"),(0,a.kt)("p",null,"\u9664\u4e86 Harvester \u914d\u7f6e\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u6307\u5b9a\u7528\u4e8e\u5176\u4ed6\u573a\u666f\u7684\u5185\u6838\u53c2\u6570\u3002\n\u53e6\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/dracut.cmdline.7.html"},"dracut.cmdline(7)"),"\u3002"),(0,a.kt)("h3",{id:"ipdhcp"},(0,a.kt)("inlineCode",{parentName:"h3"},"ip=dhcp")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u6709\u591a\u4e2a\u7f51\u7edc\u63a5\u53e3\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"ip=dhcp")," \u53c2\u6570\uff0c\u4ee5\u4fbf\u901a\u8fc7\u6240\u6709\u63a5\u53e3\u4ece DHCP \u670d\u52a1\u5668\u83b7\u53d6 IP\u3002"),(0,a.kt)("h3",{id:"rdnetdhcpretrycnt"},(0,a.kt)("inlineCode",{parentName:"h3"},"rd.net.dhcp.retry=<cnt>")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u672a\u80fd\u4ece DHCP \u670d\u52a1\u5668\u83b7\u53d6 IP\uff0ciPXE \u5f15\u5bfc\u5c06\u4f1a\u5931\u8d25\u3002\u4f60\u53ef\u4ee5\u6dfb\u52a0\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"rd.net.dhcp.retry=<cnt>"),"\uff0c\u4ece\u800c\u91cd\u8bd5 DHCP \u8bf7\u6c42 ",(0,a.kt)("inlineCode",{parentName:"p"},"<cnt>")," \u6b21\u3002"))}h.isMDXComponent=!0}}]);