"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3213],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=m(a),c=r,u=s["".concat(o,".").concat(c)]||s[c]||d[c]||l;return a?n.createElement(u,i(i({ref:t},k),{},{components:a})):n.createElement(u,i({ref:t},k))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28813:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(83117),r=(a(67294),a(3905));const l={sidebar_position:5,sidebar_label:"\u865a\u62df\u673a\u5907\u4efd\u3001\u5feb\u7167\u548c\u8fd8\u539f",title:"\u865a\u62df\u673a\u5907\u4efd\u3001\u5feb\u7167\u548c\u8fd8\u539f",keywords:["Harvester","harvester","Rancher","rancher","\u865a\u62df\u673a\u5907\u4efd\u3001\u5feb\u7167\u548c\u8fd8\u539f"],Description:"\u4f60\u53ef\u4ee5\u5728\u201c\u865a\u62df\u673a\u201d\u9875\u9762\u521b\u5efa\u865a\u62df\u673a\u5907\u4efd\u3002VM \u5907\u4efd\u5377\u5c06\u5b58\u50a8\u5728 Backup Target\uff08NFS \u6216 S3 \u670d\u52a1\u5668\uff09\u4e2d\uff0c\u7528\u4e8e\u8fd8\u539f\u65b0 VM \u6216\u66ff\u6362\u73b0\u6709 VM\u3002\u865a\u62df\u673a\u5feb\u7167\u53ef\u4ee5\u5728\u6ca1\u6709 Backup Target \u7684\u60c5\u51b5\u4e0b\u5de5\u4f5c\u3002"},i=void 0,p={unversionedId:"vm/backup-restore",id:"vm/backup-restore",title:"\u865a\u62df\u673a\u5907\u4efd\u3001\u5feb\u7167\u548c\u8fd8\u539f",description:"\u865a\u62df\u673a\u5907\u4efd\u548c\u6062\u590d",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/vm/backup-restore.md",sourceDirName:"vm",slug:"/vm/backup-restore",permalink:"/zh/dev/vm/backup-restore",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/backup-restore.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\u865a\u62df\u673a\u5907\u4efd\u3001\u5feb\u7167\u548c\u8fd8\u539f",title:"\u865a\u62df\u673a\u5907\u4efd\u3001\u5feb\u7167\u548c\u8fd8\u539f",keywords:["Harvester","harvester","Rancher","rancher","\u865a\u62df\u673a\u5907\u4efd\u3001\u5feb\u7167\u548c\u8fd8\u539f"],Description:"\u4f60\u53ef\u4ee5\u5728\u201c\u865a\u62df\u673a\u201d\u9875\u9762\u521b\u5efa\u865a\u62df\u673a\u5907\u4efd\u3002VM \u5907\u4efd\u5377\u5c06\u5b58\u50a8\u5728 Backup Target\uff08NFS \u6216 S3 \u670d\u52a1\u5668\uff09\u4e2d\uff0c\u7528\u4e8e\u8fd8\u539f\u65b0 VM \u6216\u66ff\u6362\u73b0\u6709 VM\u3002\u865a\u62df\u673a\u5feb\u7167\u53ef\u4ee5\u5728\u6ca1\u6709 Backup Target \u7684\u60c5\u51b5\u4e0b\u5de5\u4f5c\u3002"},sidebar:"sidebar",previous:{title:"\u8bbf\u95ee\u865a\u62df\u673a",permalink:"/zh/dev/vm/access-to-the-vm"},next:{title:"\u70ed\u8fc1\u79fb",permalink:"/zh/dev/vm/live-migration"}},o={},m=[{value:"\u865a\u62df\u673a\u5907\u4efd\u548c\u6062\u590d",id:"\u865a\u62df\u673a\u5907\u4efd\u548c\u6062\u590d",level:2},{value:"\u914d\u7f6e\u5907\u4efd\u76ee\u6807",id:"\u914d\u7f6e\u5907\u4efd\u76ee\u6807",level:3},{value:"\u521b\u5efa\u865a\u62df\u673a\u5907\u4efd",id:"\u521b\u5efa\u865a\u62df\u673a\u5907\u4efd",level:3},{value:"\u4f7f\u7528\u5907\u4efd\u6062\u590d\u865a\u62df\u673a",id:"\u4f7f\u7528\u5907\u4efd\u6062\u590d\u865a\u62df\u673a",level:3},{value:"\u4f7f\u7528\u5907\u4efd\u66ff\u6362\u73b0\u6709\u865a\u62df\u673a",id:"\u4f7f\u7528\u5907\u4efd\u66ff\u6362\u73b0\u6709\u865a\u62df\u673a",level:3},{value:"\u5728\u53e6\u4e00\u4e2a Harvester \u96c6\u7fa4\u4e0a\u6062\u590d\u65b0\u865a\u62df\u673a",id:"\u5728\u53e6\u4e00\u4e2a-harvester-\u96c6\u7fa4\u4e0a\u6062\u590d\u65b0\u865a\u62df\u673a",level:3},{value:"\u5c06\u76f8\u540c\u7684\u865a\u62df\u673a\u955c\u50cf\u4e0a\u4f20\u5230\u65b0\u96c6\u7fa4",id:"\u5c06\u76f8\u540c\u7684\u865a\u62df\u673a\u955c\u50cf\u4e0a\u4f20\u5230\u65b0\u96c6\u7fa4",level:4},{value:"\u5728\u65b0\u96c6\u7fa4\u4e2d\u6062\u590d\u65b0\u865a\u62df\u673a",id:"\u5728\u65b0\u96c6\u7fa4\u4e2d\u6062\u590d\u65b0\u865a\u62df\u673a",level:4},{value:"\u865a\u62df\u673a\u5feb\u7167\u548c\u8fd8\u539f",id:"\u865a\u62df\u673a\u5feb\u7167\u548c\u8fd8\u539f",level:2},{value:"\u521b\u5efa\u865a\u62df\u673a\u5feb\u7167",id:"\u521b\u5efa\u865a\u62df\u673a\u5feb\u7167",level:3},{value:"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u865a\u62df\u673a",id:"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u865a\u62df\u673a",level:3},{value:"\u4f7f\u7528\u5feb\u7167\u66ff\u6362\u73b0\u6709\u865a\u62df\u673a",id:"\u4f7f\u7528\u5feb\u7167\u66ff\u6362\u73b0\u6709\u865a\u62df\u673a",level:3}],k={toc:m},s="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,n.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u865a\u62df\u673a\u5907\u4efd\u548c\u6062\u590d"},"\u865a\u62df\u673a\u5907\u4efd\u548c\u6062\u590d"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v0.3.0 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u865a\u62df\u673a\u5907\u4efd\u662f\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Virtual Machines")," \u9875\u9762\u4e2d\u521b\u5efa\u7684\u3002\u865a\u62df\u673a\u5907\u4efd\u5377\u5c06\u5b58\u50a8\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Backup Target"),"\uff08NFS \u6216 S3 \u670d\u52a1\u5668\uff09\u4e2d\uff0c\u7528\u4e8e\u8fd8\u539f\u65b0\u865a\u62df\u673a\u6216\u66ff\u6362\u73b0\u6709\u865a\u62df\u673a\u3002\n",(0,r.kt)("img",{alt:"vm-backup.png",src:a(91254).Z,width:"2560",height:"1200"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5fc5\u987b\u8bbe\u7f6e\u5907\u4efd\u76ee\u6807\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"#%E9%85%8D%E7%BD%AE%E5%A4%87%E4%BB%BD%E7%9B%AE%E6%A0%87"},"\u914d\u7f6e\u5907\u4efd\u76ee\u6807"),"\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u5907\u4efd\u76ee\u6807\uff0c\u4f60\u4f1a\u6536\u5230\u8fdb\u884c\u8bbe\u7f6e\u7684\u63d0\u793a\u3002")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u5907\u4efd\u76ee\u6807"},"\u914d\u7f6e\u5907\u4efd\u76ee\u6807"),(0,r.kt)("p",null,"\u5907\u4efd\u76ee\u6807\u662f\u4e00\u4e2a\u7528\u4e8e\u8bbf\u95ee Harvester \u4e2d\u7684\u5907\u4efd\u5b58\u50a8\u7684\u7aef\u70b9\u3002\u5907\u4efd\u5b58\u50a8\u662f\u4e00\u4e2a NFS \u670d\u52a1\u5668\u6216 S3 \u517c\u5bb9\u670d\u52a1\u5668\uff0c\u7528\u4e8e\u5b58\u50a8\u865a\u62df\u673a\u5377\u7684\u5907\u4efd\u3002\u5907\u4efd\u76ee\u6807\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings > backup-target")," \u4e2d\u8bbe\u7f6e\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9009\u62e9 S3 \u6216 NFS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u914d\u7f6e\u670d\u52a1\u5668\u6216 IP \u5730\u5740\u3002\u5982\u679c\u662f AWS S3\uff0c\u5219\u53ef\u4ee5\u7559\u7a7a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BucketName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bucket \u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BucketRegion"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bucket \u6240\u5728\u7684\u533a\u57df")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AccessKeyID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u552f\u4e00\u6807\u8bc6\u4f60\u7684\u8d26\u53f7\u7684\u7528\u6237 ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SecretAccessKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f60\u8d26\u53f7\u7684\u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Certificate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7c98\u8d34\u4ee5\u4f7f\u7528 S3 \u670d\u52a1\u5668\u7684\u81ea\u7b7e\u540d SSL \u8bc1\u4e66\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"VirtualHostedStyle"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ec5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"VirtualHostedStyle")," \u8bbf\u95ee\uff0c\u4f8b\u5982\u963f\u91cc\u4e91 (Aliyun) OSS\u3002")))),(0,r.kt)("h3",{id:"\u521b\u5efa\u865a\u62df\u673a\u5907\u4efd"},"\u521b\u5efa\u865a\u62df\u673a\u5907\u4efd"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u597d\u5907\u4efd\u76ee\u6807\u540e\uff0c\u524d\u5f80 ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," \u9875\u9762\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u76ee\u6807\u865a\u62df\u673a\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"li"},"Take Backup"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u5907\u4efd\u7684\u540d\u79f0\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"li"},"Create"),"\u3002\n",(0,r.kt)("img",{alt:"create-backup.png",src:a(70495).Z,width:"4232",height:"2080"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5907\u4efd\u5df2\u521b\u5efa\u3002\u4f60\u5c06\u6536\u5230\u4e00\u6761\u901a\u77e5\u6d88\u606f\u3002\u4f60\u4e5f\u53ef\u4ee5\u524d\u5f80 ",(0,r.kt)("inlineCode",{parentName:"p"},"Backup & Snapshot > VM Backups")," \u9875\u9762\u67e5\u770b\u6240\u6709 VM \u5907\u4efd\u3002"),(0,r.kt)("p",null,"\u5907\u4efd\u5b8c\u6210\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ReadyToUse")," \u72b6\u6001\u4f1a\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5907\u4efd\u6062\u590d\u4e00\u4e2a\u65b0\u865a\u62df\u673a\uff0c\u6216\u66ff\u6362\u73b0\u6709\u865a\u62df\u673a\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5907\u4efd\u6062\u590d\u865a\u62df\u673a"},"\u4f7f\u7528\u5907\u4efd\u6062\u590d\u865a\u62df\u673a"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u5907\u4efd\u6062\u590d\u4e00\u4e2a\u65b0\u865a\u62df\u673a\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,r.kt)("inlineCode",{parentName:"li"},"VM Backups")," \u9875\u9762\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u65b0\u865a\u62df\u673a\u7684\u540d\u79f0\u5e76\u5355\u51fb ",(0,r.kt)("inlineCode",{parentName:"li"},"Create"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u4f7f\u7528\u5907\u4efd\u5377\u548c\u5143\u6570\u636e\u8fd8\u539f\u65b0\u865a\u62df\u673a\u3002\u6b64\u540e\uff0c\u4f60\u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machine")," \u9875\u9762\u8bbf\u95ee\u5b83\u3002\n",(0,r.kt)("img",{alt:"restore-vm.png",src:a(27921).Z,width:"2560",height:"1400"}))),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5907\u4efd\u66ff\u6362\u73b0\u6709\u865a\u62df\u673a"},"\u4f7f\u7528\u5907\u4efd\u66ff\u6362\u73b0\u6709\u865a\u62df\u673a"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5177\u6709\u76f8\u540c\u5907\u4efd\u76ee\u6807\u7684\u5907\u4efd\uff0c\u6765\u66ff\u6362\u73b0\u6709\u7684\u865a\u62df\u673a\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u9009\u62e9\u5220\u9664\u6216\u4fdd\u7559\u4e4b\u524d\u7684\u5377\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u4e4b\u524d\u7684\u5377\u90fd\u5c06\u88ab\u5220\u9664\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8981\u6c42"),"\uff1a\u865a\u62df\u673a\u5fc5\u987b\u5b58\u5728\u4e14\u9700\u8981\u5904\u4e8e\u5173\u673a\u72b6\u6001\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,r.kt)("inlineCode",{parentName:"li"},"VM Backups")," \u9875\u9762\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("inlineCode",{parentName:"li"},"Replace Existing"),"\u3002")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Virtual Machine")," \u9875\u9762\u67e5\u770b\u8fd8\u539f\u8fdb\u5ea6\u3002"),(0,r.kt)("h3",{id:"\u5728\u53e6\u4e00\u4e2a-harvester-\u96c6\u7fa4\u4e0a\u6062\u590d\u65b0\u865a\u62df\u673a"},"\u5728\u53e6\u4e00\u4e2a Harvester \u96c6\u7fa4\u4e0a\u6062\u590d\u65b0\u865a\u62df\u673a"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.0.0 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u7528\u6237\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528\u865a\u62df\u673a\u5143\u6570\u636e\u548c\u5185\u5bb9\u5907\u4efd\u529f\u80fd\uff0c\u5728\u53e6\u4e00\u4e2a\u96c6\u7fa4\u4e0a\u6062\u590d\u65b0\u865a\u62df\u673a\u3002"),(0,r.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4f60\u5fc5\u987b\u5148\u5728\u65b0\u96c6\u7fa4\u4e0a\u624b\u52a8\u914d\u7f6e\u540c\u540d\u7684\u865a\u62df\u673a\u955c\u50cf\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u6b63\u5e38\u6062\u590d\u3002")),(0,r.kt)("h4",{id:"\u5c06\u76f8\u540c\u7684\u865a\u62df\u673a\u955c\u50cf\u4e0a\u4f20\u5230\u65b0\u96c6\u7fa4"},"\u5c06\u76f8\u540c\u7684\u865a\u62df\u673a\u955c\u50cf\u4e0a\u4f20\u5230\u65b0\u96c6\u7fa4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u73b0\u6709\u955c\u50cf\u7684\u540d\u79f0\uff08\u901a\u5e38\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"image-")," \u5f00\u5934\uff09\uff0c\u5e76\u5728\u65b0\u96c6\u7fa4\u4e0a\u521b\u5efa\u76f8\u540c\u7684\u540d\u79f0\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get vmimages -A\nNAMESPACE   NAME                               DISPLAY-NAME                              SIZE         AGE\ndefault     image-79hdq                        focal-server-cloudimg-amd64.img           566886400    5h36m\ndefault     image-l7924                        harvester-v1.0.0-rc2-amd64.iso            3964551168   137m\ndefault     image-lvqxn                        opensuse-leap-15.3.x86_64-nocloud.qcow2   568524800    5h35m\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728\u65b0\u96c6\u7fa4\u4e2d\u5e94\u7528\u5177\u6709\u76f8\u540c\u540d\u79f0\u548c\u5185\u5bb9\u7684\u865a\u62df\u673a\u955c\u50cf YAML\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ cat <<EOF | kubectl apply -f -\napiVersion: harvesterhci.io/v1beta1\nkind: VirtualMachineImage\nmetadata:\n  name: image-lvqxn\n  namespace: default\nspec:\n  displayName: opensuse-leap-15.3.x86_64-nocloud.qcow2\n  pvcName: ""\n  pvcNamespace: ""\n  sourceType: download\n  url: http://download.opensuse.org/repositories/Cloud:/Images:/Leap_15.3/images/openSUSE-Leap-15.3.x86_64-NoCloud.qcow2\nEOF\n')),(0,r.kt)("h4",{id:"\u5728\u65b0\u96c6\u7fa4\u4e2d\u6062\u590d\u65b0\u865a\u62df\u673a"},"\u5728\u65b0\u96c6\u7fa4\u4e2d\u6062\u590d\u65b0\u865a\u62df\u673a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u65b0\u96c6\u7fa4\u4e2d\u8bbe\u7f6e\u76f8\u540c\u7684\u5907\u4efd\u76ee\u6807\u3002\u6b64\u540e\uff0c\u5907\u4efd\u63a7\u5236\u5668\u4f1a\u81ea\u52a8\u5c06\u5907\u4efd\u5143\u6570\u636e\u540c\u6b65\u5230\u65b0\u96c6\u7fa4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,r.kt)("inlineCode",{parentName:"li"},"VM Backups")," \u9875\u9762\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5df2\u540c\u6b65\u7684\u865a\u62df\u673a\u5907\u4efd\u5143\u6570\u636e\uff0c\u7136\u540e\u9009\u62e9\u4f7f\u7528\u6307\u5b9a\u7684\u865a\u62df\u673a\u540d\u79f0\u8fd8\u539f\u65b0\u7684\u865a\u62df\u673a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u65b0\u7684\u865a\u62df\u673a\u5c06\u4f7f\u7528\u5907\u4efd\u5377\u548c\u5143\u6570\u636e\u8fdb\u884c\u8fd8\u539f\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," \u9875\u9762\u8bbf\u95ee\u865a\u62df\u673a\u3002")),(0,r.kt)("h2",{id:"\u865a\u62df\u673a\u5feb\u7167\u548c\u8fd8\u539f"},"\u865a\u62df\u673a\u5feb\u7167\u548c\u8fd8\u539f"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.1.0 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u865a\u62df\u673a\u5feb\u7167\u662f\u5728 ",(0,r.kt)("strong",{parentName:"p"},"Virtual Machines")," \u9875\u9762\u4e2d\u521b\u5efa\u7684\u3002VM \u5feb\u7167\u5377\u5c06\u5b58\u50a8\u5728\u96c6\u7fa4\u4e2d\uff0c\u5b83\u4eec\u53ef\u7528\u4e8e\u8fd8\u539f\u65b0 VM \u6216\u66ff\u6362\u73b0\u6709 VM\u3002\n",(0,r.kt)("img",{alt:"vm-snapshot.png",src:a(31418).Z,width:"2560",height:"1160"})),(0,r.kt)("h3",{id:"\u521b\u5efa\u865a\u62df\u673a\u5feb\u7167"},"\u521b\u5efa\u865a\u62df\u673a\u5feb\u7167"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," \u9875\u9762\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb VM \u64cd\u4f5c\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Take VM Snapshot")," \u521b\u5efa\u65b0\u7684 VM \u5feb\u7167\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u5feb\u7167\u7684\u540d\u79f0\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"li"},"Create"),"\u3002\n",(0,r.kt)("img",{alt:"create-snapshot.png",src:a(3601).Z,width:"2558",height:"1276"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5feb\u7167\u5df2\u521b\u5efa\u3002\u4f60\u4e5f\u53ef\u4ee5\u524d\u5f80 ",(0,r.kt)("inlineCode",{parentName:"p"},"Backup & Snapshot > VM Snapshots")," \u9875\u9762\u67e5\u770b\u6240\u6709 VM \u5feb\u7167\u3002"),(0,r.kt)("p",null,"\u5feb\u7167\u5b8c\u6210\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ReadyToUse")," \u72b6\u6001\u4f1a\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5feb\u7167\u6062\u590d\u4e00\u4e2a\u65b0\u865a\u62df\u673a\uff0c\u6216\u66ff\u6362\u73b0\u6709\u865a\u62df\u673a\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u865a\u62df\u673a"},"\u4f7f\u7528\u5feb\u7167\u6062\u590d\u865a\u62df\u673a"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u5feb\u7167\u6062\u590d\u4e00\u4e2a\u65b0\u865a\u62df\u673a\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,r.kt)("inlineCode",{parentName:"li"},"VM Snapshots")," \u9875\u9762\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u65b0\u865a\u62df\u673a\u7684\u540d\u79f0\u5e76\u5355\u51fb ",(0,r.kt)("inlineCode",{parentName:"li"},"Create"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u4f7f\u7528\u5feb\u7167\u5377\u548c\u5143\u6570\u636e\u8fd8\u539f\u65b0\u865a\u62df\u673a\u3002\u6b64\u540e\uff0c\u4f60\u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machine")," \u9875\u9762\u8bbf\u95ee\u5b83\u3002\n",(0,r.kt)("img",{alt:"restore-vm-snapshot.png",src:a(62123).Z,width:"2560",height:"1398"}))),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5feb\u7167\u66ff\u6362\u73b0\u6709\u865a\u62df\u673a"},"\u4f7f\u7528\u5feb\u7167\u66ff\u6362\u73b0\u6709\u865a\u62df\u673a"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5feb\u7167\u66ff\u6362\u73b0\u6709 VM\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4f60\u53ea\u80fd\u9009\u62e9\u4fdd\u7559\u4ee5\u524d\u7684\u5377\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,r.kt)("inlineCode",{parentName:"li"},"VM Snapshots")," \u9875\u9762\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("inlineCode",{parentName:"li"},"Replace Existing"),"\u3002")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Virtual Machine")," \u9875\u9762\u67e5\u770b\u8fd8\u539f\u8fdb\u5ea6\u3002"))}d.isMDXComponent=!0},70495:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-backup-8533bf901f53858ff667e9d6f095fa02.png"},3601:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-snapshot-1ec69bb2f7c0c21d187f889b40686dc9.png"},62123:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restore-vm-snapshot-82e23610c43dcd363db52d7f39d159bd.png"},27921:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restore-vm-e2e76cf3c514c73d5e2deaf2b9f20c77.png"},91254:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-backup-222f8a51fa815826979b6e4fa0329856.png"},31418:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-snapshot-01b716f8a3f41c05fb54e3ccd4e753e8.png"}}]);