"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:3,sidebar_label:"\u64cd\u4f5c\u7cfb\u7edf",title:"\u64cd\u4f5c\u7cfb\u7edf"},i=void 0,l={unversionedId:"troubleshooting/os",id:"version-v1.1/troubleshooting/os",title:"\u64cd\u4f5c\u7cfb\u7edf",description:"Harvester \u5728\u57fa\u4e8e OpenSUSE \u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fd0\u884c\u3002\u8fd9\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u662f cOS toolkit \u7684\u9879\u76ee\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u76f8\u5173\u95ee\u9898\u8fdb\u884c\u6545\u969c\u6392\u9664\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/troubleshooting/os.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/os",permalink:"/zh/v1.1/troubleshooting/os",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/troubleshooting/os.md",tags:[],version:"v1.1",lastUpdatedAt:1672296666,formattedLastUpdatedAt:"2022\u5e7412\u670829\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u64cd\u4f5c\u7cfb\u7edf",title:"\u64cd\u4f5c\u7cfb\u7edf"},sidebar:"tutorialSidebar",previous:{title:"Harvester",permalink:"/zh/v1.1/troubleshooting/harvester"},next:{title:"\u76d1\u63a7",permalink:"/zh/v1.1/troubleshooting/monitoring"}},p={},s=[{value:"\u5982\u4f55\u767b\u5f55\u5230 Harvester \u8282\u70b9",id:"\u5982\u4f55\u767b\u5f55\u5230-harvester-\u8282\u70b9",level:2},{value:"\u5982\u4f55\u5b89\u88c5\u5305\uff1f\u4e3a\u4ec0\u4e48\u6709\u4e9b\u8def\u5f84\u662f\u53ea\u8bfb\u7684\uff1f",id:"\u5982\u4f55\u5b89\u88c5\u5305\u4e3a\u4ec0\u4e48\u6709\u4e9b\u8def\u5f84\u662f\u53ea\u8bfb\u7684",level:2},{value:"\u5982\u4f55\u6c38\u4e45\u7f16\u8f91\u5185\u6838\u53c2\u6570",id:"\u5982\u4f55\u6c38\u4e45\u7f16\u8f91\u5185\u6838\u53c2\u6570",level:2},{value:"\u5982\u4f55\u66f4\u6539\u9ed8\u8ba4\u7684 GRUB \u5f15\u5bfc\u83dc\u5355\u5165\u53e3",id:"\u5982\u4f55\u66f4\u6539\u9ed8\u8ba4\u7684-grub-\u5f15\u5bfc\u83dc\u5355\u5165\u53e3",level:2},{value:"\u5982\u4f55\u8c03\u8bd5\u7cfb\u7edf\u5d29\u6e83\u6216\u6302\u8d77",id:"\u5982\u4f55\u8c03\u8bd5\u7cfb\u7edf\u5d29\u6e83\u6216\u6302\u8d77",level:2},{value:"\u6536\u96c6\u5d29\u6e83\u65e5\u5fd7",id:"\u6536\u96c6\u5d29\u6e83\u65e5\u5fd7",level:3},{value:"\u6536\u96c6\u6545\u969c\u8f6c\u50a8",id:"\u6536\u96c6\u6545\u969c\u8f6c\u50a8",level:3}],d={toc:s},u="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Harvester \u5728\u57fa\u4e8e OpenSUSE \u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fd0\u884c\u3002\u8fd9\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/cOS-toolkit"},"cOS toolkit")," \u7684\u9879\u76ee\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u76f8\u5173\u95ee\u9898\u8fdb\u884c\u6545\u969c\u6392\u9664\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u767b\u5f55\u5230-harvester-\u8282\u70b9"},"\u5982\u4f55\u767b\u5f55\u5230 Harvester \u8282\u70b9"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u7528\u6237\u540d ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher")," \u548c\u5bc6\u7801\u6216\u5b89\u88c5\u65f6\u63d0\u4f9b\u7684 SSH \u5bc6\u94a5\u5bf9\u767b\u5f55\u5230 Harvester \u8282\u70b9\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"rancher")," \u7528\u6237\u53ef\u4ee5\u4e0d\u8f93\u5165\u5bc6\u7801\u5c31\u6267\u884c\u7279\u6743\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u8fd0\u884c\u7279\u6743\u547d\u4ee4\nrancher@node1:~> sudo blkid\n\n# \u6216\u6210\u4e3a root \u7528\u6237\nrancher@node1:~> sudo -i\nnode1:~ # blkid\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u5b89\u88c5\u5305\u4e3a\u4ec0\u4e48\u6709\u4e9b\u8def\u5f84\u662f\u53ea\u8bfb\u7684"},"\u5982\u4f55\u5b89\u88c5\u5305\uff1f\u4e3a\u4ec0\u4e48\u6709\u4e9b\u8def\u5f84\u662f\u53ea\u8bfb\u7684\uff1f"),(0,a.kt)("p",null,"\u64cd\u4f5c\u7cfb\u7edf\u6587\u4ef6\u7cfb\u7edf\uff0c\u5c31\u50cf\u5bb9\u5668\u955c\u50cf\u4e00\u6837\uff0c\u662f\u57fa\u4e8e\u955c\u50cf\u5e76\u4e14\u4e0d\u53ef\u53d8\u7684\uff08\u9664\u4e86\u67d0\u4e9b\u76ee\u5f55\uff09\u3002\u8981\u4e34\u65f6\u542f\u7528\u8bfb\u5199\u6a21\u5f0f\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8bfb\u5199\u6a21\u5f0f\u4e0b\uff0c\u6587\u4ef6\u88ab\u4fee\u6539\u53ef\u80fd\u4f1a\u7834\u574f\u4f60\u7684\u7cfb\u7edf\uff0c\u8bf7\u8c28\u614e\u4f7f\u7528\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u7248\u672c ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.3.0"),"\uff0c\u4f60\u9700\u8981\u5728\u542f\u7528\u8bfb\u5199\u6a21\u5f0f\u540e\u5148\u5e94\u7528\u89e3\u51b3\u65b9\u6cd5\uff0c\u6765",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1388"},"\u4f7f\u67d0\u4e9b\u76ee\u5f55\u4e0d\u91cd\u53e0"),"\u3002\u5728\u6b63\u5728\u8fd0\u884c\u7684 Harvester \u8282\u70b9\u4e0a\uff0c\u4ee5 root \u7528\u6237\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'cat > /oem/91_hack.yaml <<\'EOF\'\nname: "Rootfs Layout Settings for debugrw"\nstages:\n  rootfs:\n    - if: \'grep -q root=LABEL=COS_ACTIVE /proc/cmdline && grep -q rd.cos.debugrw /proc/cmdline\'\n      name: "Layout configuration for debugrw"\n      environment_file: /run/cos/cos-layout.env\n      environment:\n        RW_PATHS: " "\nEOF\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u91cd\u65b0\u542f\u52a8\u7cfb\u7edf\u5230 GRUB \u83dc\u5355\u3002\u6309 ESC \u505c\u7559\u5728\u83dc\u5355\u4e0a\u3002"),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("img",{src:n(55157).Z,width:"717",height:"394"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u7b2c\u4e00\u4e2a\u83dc\u5355\u9879\u4e0a\u6309 ",(0,a.kt)("inlineCode",{parentName:"p"},"e"),"\u3002\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"rd.cos.debugrw")," \u5c3e\u9644\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"linux (loop0)$kernel $kernelcmd")," \u884c\u3002\u6309 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + x")," \u542f\u52a8\u7cfb\u7edf\u3002"),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("img",{src:n(76927).Z,width:"716",height:"400"})))),(0,a.kt)("h2",{id:"\u5982\u4f55\u6c38\u4e45\u7f16\u8f91\u5185\u6838\u53c2\u6570"},"\u5982\u4f55\u6c38\u4e45\u7f16\u8f91\u5185\u6838\u53c2\u6570"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u6b65\u9aa4\u662f\u4e00\u79cd\u89e3\u51b3\u65b9\u6cd5\u3002\u5982\u679c\u6211\u4eec\u6709\u4e86\u6c38\u4e45\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u6211\u4eec\u5c06\u901a\u77e5\u793e\u533a\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 rw \u6a21\u5f0f\u91cd\u65b0\u6302\u8f7d\u72b6\u6001\u76ee\u5f55\uff1a",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"# blkid -L COS_STATE\n/dev/vda2\n# mount -o remount,rw /dev/vda2 /run/initramfs/cos-state\n"))),(0,a.kt)("li",{parentName:"ul"},"\u7f16\u8f91 grub \u914d\u7f6e\u6587\u4ef6\u5e76\u5c06\u53c2\u6570\u5c3e\u9644\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"linux (loop0)$kernel $kernelcmd")," \u884c\u3002\u4ee5\u4e0b\u793a\u4f8b\u6dfb\u52a0\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"nomodeset")," \u53c2\u6570\uff1a",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'# vim /run/initramfs/cos-state/grub2/grub.cfg\nmenuentry "Harvester ea6e7f5-dirty" --id cos {\n  search.fs_label COS_STATE root\n  set img=/cOS/active.img\n  set label=COS_ACTIVE\n  loopback loop0 /$img\n  set root=($root)\n  source (loop0)/etc/cos/bootargs.cfg\n  linux (loop0)$kernel $kernelcmd nomodeset\n  initrd (loop0)$initramfs\n}\n'))),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u542f\u52a8\u4ee5\u4f7f\u66f4\u6539\u751f\u6548\u3002")),(0,a.kt)("h2",{id:"\u5982\u4f55\u66f4\u6539\u9ed8\u8ba4\u7684-grub-\u5f15\u5bfc\u83dc\u5355\u5165\u53e3"},"\u5982\u4f55\u66f4\u6539\u9ed8\u8ba4\u7684 GRUB \u5f15\u5bfc\u83dc\u5355\u5165\u53e3"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u66f4\u6539\u9ed8\u8ba4\u7684\u5165\u53e3\uff0c\u5148\u68c0\u67e5\u83dc\u5355\u5165\u53e3\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"--id")," \u5c5e\u6027\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# cat /run/initramfs/cos-state/grub2/grub.cfg\n\n<...>\nmenuentry "Harvester ea6e7f5-dirty (debug)" --id cos-debug {\n  search.fs_label COS_STATE root\n  set img=/cOS/active.img\n  set label=COS_ACTIVE\n  loopback loop0 /$img\n')),(0,a.kt)("p",null,"\u4ee5\u4e0a\u5165\u53e3\u7684 id \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"cos-debug"),"\u3002\u7136\u540e\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8bbe\u7f6e\u9ed8\u8ba4\u5165\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# grub2-editenv /oem/grubenv set saved_entry=cos-debug\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u8c03\u8bd5\u7cfb\u7edf\u5d29\u6e83\u6216\u6302\u8d77"},"\u5982\u4f55\u8c03\u8bd5\u7cfb\u7edf\u5d29\u6e83\u6216\u6302\u8d77"),(0,a.kt)("h3",{id:"\u6536\u96c6\u5d29\u6e83\u65e5\u5fd7"},"\u6536\u96c6\u5d29\u6e83\u65e5\u5fd7"),(0,a.kt)("p",null,"\u5982\u679c\u7cfb\u7edf\u5d29\u6e83\u65f6\uff0c\u7cfb\u7edf\u65e5\u5fd7\u4e2d\u6ca1\u6709\u8bb0\u5f55\u5185\u6838\u6050\u614c\u8ddf\u8e2a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e32\u884c\u63a7\u5236\u53f0\u627e\u5230\u5d29\u6e83\u65e5\u5fd7\u3002"),(0,a.kt)("p",null,"\u8981\u5c06\u5185\u6838\u6d88\u606f\u8f93\u51fa\u5230\u4e32\u884c\u63a7\u5236\u53f0\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u7cfb\u7edf\u542f\u52a8\u5230 GRUB \u83dc\u5355\u3002\u6309 ESC \u505c\u7559\u5728\u83dc\u5355\u4e0a\u3002\n",(0,a.kt)("img",{src:n(55157).Z,width:"717",height:"394"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u7b2c\u4e00\u4e2a\u83dc\u5355\u9879\u4e0a\u6309 ",(0,a.kt)("inlineCode",{parentName:"p"},"e"),"\u3002\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"console=ttyS0,115200n8")," \u5c3e\u9644\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"linux (loop0)$kernel $kernelcmd")," \u884c\u3002\u6309 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + x")," \u542f\u52a8\u7cfb\u7edf\u3002"),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("img",{src:n(67225).Z,width:"714",height:"399"})))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u6839\u636e\u4f60\u7684\u73af\u5883\u8c03\u6574",(0,a.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/latest/admin-guide/serial-console.html"},"\u63a7\u5236\u53f0\u9009\u9879"),"\u3002",(0,a.kt)("strong",{parentName:"p"},"\u786e\u4fdd"),"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"console=")," \u5b57\u7b26\u4e32\u5c3e\u9644\u5230\u884c\u540e\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5230\u4e32\u884c\u7aef\u53e3\u6765\u6355\u83b7\u65e5\u5fd7\u3002")),(0,a.kt)("h3",{id:"\u6536\u96c6\u6545\u969c\u8f6c\u50a8"},"\u6536\u96c6\u6545\u969c\u8f6c\u50a8"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5185\u6838\u6050\u614c\u5d29\u6e83\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 kdump \u6765\u6536\u96c6\u5d29\u6e83\u8f6c\u50a8\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u64cd\u4f5c\u7cfb\u7edf\u4f1a\u5728\u672a\u542f\u7528 kdump \u529f\u80fd\u7684\u60c5\u51b5\u4e0b\u542f\u52a8\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u542f\u52a8\u65f6\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," \u83dc\u5355\u9879\u6765\u542f\u7528\u8be5\u529f\u80fd\uff0c\u5982\u4e0b\u4f8b\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(80154).Z,width:"716",height:"397"})),(0,a.kt)("p",null,"\u7cfb\u7edf\u5d29\u6e83\u65f6\uff0c\u5d29\u6e83\u8f6c\u50a8\u5c06\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/crash/<time>")," \u76ee\u5f55\u4e2d\u3002\u4f60\u53ef\u4ee5\u5c06\u5d29\u6e83\u8f6c\u50a8\u63d0\u4f9b\u7ed9\u5f00\u53d1\u4eba\u5458\uff0c\u4ece\u800c\u5e2e\u52a9\u4ed6\u4eec\u6392\u67e5\u6545\u969c\u548c\u89e3\u51b3\u95ee\u9898\u3002"))}c.isMDXComponent=!0},67225:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/os-edit-first-menuentry-add-console-d0a4d079aab7e7aab0e7236a11e30b58.png"},76927:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/os-edit-first-menuentry-add-debugrw-d91f61ee1babd6bc5d80f511a9502641.png"},80154:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/os-enable-kdump-96964fc062aa7c145bc5f34978be7173.png"},55157:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/os-stop-on-first-menuentry-2a56e0b304663f6908becc633e8befa9.png"}}]);