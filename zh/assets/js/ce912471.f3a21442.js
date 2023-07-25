"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5240],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(r),g=a,m=d["".concat(o,".").concat(g)]||d[g]||c[g]||s;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,p=new Array(s);p[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:a,p[1]=l;for(var i=2;i<s;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},98785:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=r(83117),a=(r(67294),r(3905));const s={sidebar_position:5,sidebar_label:"\u6545\u969c\u6392\u9664",title:"\u6545\u969c\u6392\u9664"},p=void 0,l={unversionedId:"upgrade/troubleshooting",id:"version-v1.0/upgrade/troubleshooting",title:"\u6545\u969c\u6392\u9664",description:"\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/upgrade/troubleshooting.md",sourceDirName:"upgrade",slug:"/upgrade/troubleshooting",permalink:"/zh/v1.0/upgrade/troubleshooting",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/upgrade/troubleshooting.md",tags:[],version:"v1.0",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\u6545\u969c\u6392\u9664",title:"\u6545\u969c\u6392\u9664"},sidebar:"tutorialSidebar",previous:{title:"\u4ece v1.0.0 \u5347\u7ea7\u5230 v1.0.1",permalink:"/zh/v1.0/upgrade/previous-releases/v1-0-0-to-v1-0-1"},next:{title:"\u8eab\u4efd\u9a8c\u8bc1",permalink:"/zh/v1.0/authentication"}},o={},i=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5347\u7ea7\u6d41\u7a0b",id:"\u5347\u7ea7\u6d41\u7a0b",level:2},{value:"\u9636\u6bb5 1\uff1a\u9884\u914d\u7f6e\u5347\u7ea7\u4ed3\u5e93 VM\u3002",id:"\u9636\u6bb5-1\u9884\u914d\u7f6e\u5347\u7ea7\u4ed3\u5e93-vm",level:3},{value:"\u9636\u6bb5 2\uff1a\u9884\u52a0\u8f7d\u5bb9\u5668\u955c\u50cf",id:"\u9636\u6bb5-2\u9884\u52a0\u8f7d\u5bb9\u5668\u955c\u50cf",level:3},{value:"\u9636\u6bb5 3\uff1a\u5347\u7ea7\u7cfb\u7edf\u670d\u52a1",id:"\u9636\u6bb5-3\u5347\u7ea7\u7cfb\u7edf\u670d\u52a1",level:3},{value:"\u9636\u6bb5 4\uff1a\u5347\u7ea7\u8282\u70b9",id:"\u9636\u6bb5-4\u5347\u7ea7\u8282\u70b9",level:3},{value:"\u9636\u6bb5 5\uff1a\u6e05\u7406",id:"\u9636\u6bb5-5\u6e05\u7406",level:3},{value:"\u5e38\u7528\u64cd\u4f5c",id:"\u5e38\u7528\u64cd\u4f5c",level:2},{value:"\u91cd\u65b0\u5f00\u59cb\u5347\u7ea7",id:"\u91cd\u65b0\u5f00\u59cb\u5347\u7ea7",level:3}],u={toc:i},d="wrapper";function c(e){let{components:t,...s}=e;return(0,a.kt)(d,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u89e3\u51b3\u5347\u7ea7\u5931\u8d25\u7684\u4e00\u4e9b\u63d0\u793a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b",(0,a.kt)("a",{parentName:"li",href:"/zh/v1.0/upgrade/automatic#%E5%8D%87%E7%BA%A7%E6%94%AF%E6%8C%81%E7%9F%A9%E9%98%B5"},"\u7248\u672c\u7684\u5347\u7ea7\u8bf4\u660e"),"\u3002\u4f60\u53ef\u4ee5\u5355\u51fb\u652f\u6301\u77e9\u9635\u8868\u4e2d\u7684\u7248\u672c\u67e5\u770b\u662f\u5426\u5b58\u5728\u5df2\u77e5\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6df1\u5165\u4e86\u89e3\u5347\u7ea7",(0,a.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/blob/master/enhancements/20220413-zero-downtime-upgrade.md"},"\u8bbe\u8ba1\u65b9\u6848"),"\u3002\u4ee5\u4e0b\u7b80\u8981\u4ecb\u7ecd\u4e86\u5347\u7ea7\u7684\u5404\u4e2a\u9636\u6bb5\u4ee5\u53ca\u53ef\u80fd\u7684\u89e3\u51b3\u65b9\u6cd5\u3002")),(0,a.kt)("h2",{id:"\u5347\u7ea7\u6d41\u7a0b"},"\u5347\u7ea7\u6d41\u7a0b"),(0,a.kt)("p",null,"Harvester \u5347\u7ea7\u5305\u542b\u4e86\u51e0\u4e2a\u9636\u6bb5\uff1a\n",(0,a.kt)("img",{src:r(9721).Z,width:"1345",height:"602"})),(0,a.kt)("h3",{id:"\u9636\u6bb5-1\u9884\u914d\u7f6e\u5347\u7ea7\u4ed3\u5e93-vm"},"\u9636\u6bb5 1\uff1a\u9884\u914d\u7f6e\u5347\u7ea7\u4ed3\u5e93 VM\u3002"),(0,a.kt)("p",null,"Harvester controller \u4e0b\u8f7d Harvester \u7248\u672c ISO \u6587\u4ef6\u5e76\u4f7f\u7528\u5b83\u6765\u914d\u7f6e VM\u3002\u5728\u6b64\u9636\u6bb5\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u5347\u7ea7\u72b6\u6001\u7a97\u53e3\u663e\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(56034).Z,width:"1132",height:"1238"})),(0,a.kt)("p",null,"\u5b8c\u6210\u7684\u65f6\u95f4\u53d6\u51b3\u4e8e\u7528\u6237\u7684\u7f51\u7edc\u901f\u5ea6\u548c\u96c6\u7fa4\u8d44\u6e90\u5229\u7528\u7387\u3002\u7531\u4e8e\u7f51\u7edc\u901f\u5ea6\uff0c\u6211\u4eec\u770b\u5230\u6b64\u9636\u6bb5\u51fa\u73b0\u4e86\u6545\u969c\u3002\u5982\u679c\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\uff0c\u7528\u6237\u53ef\u4ee5\u518d\u6b21",(0,a.kt)("a",{parentName:"p",href:"#%E9%87%8D%E6%96%B0%E5%BC%80%E5%A7%8B%E5%8D%87%E7%BA%A7"},"\u91cd\u65b0\u5f00\u59cb\u5347\u7ea7"),"\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u68c0\u67e5\u4ed3\u5e93 VM\uff08\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"upgrade-repo-hvst-xxxx")," \u683c\u5f0f\u547d\u540d\uff09\u72b6\u6001\u53ca\u5176\u5bf9\u5e94\u7684 Pod\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get vm -n harvester-system\nNAME                              AGE    STATUS     READY\nupgrade-repo-hvst-upgrade-9gmg2   101s   Starting   False\n\n$ kubectl get pods -n harvester-system | grep upgrade-repo-hvst\nvirt-launcher-upgrade-repo-hvst-upgrade-9gmg2-4mnmq     1/1     Running     0          4m44s\n")),(0,a.kt)("h3",{id:"\u9636\u6bb5-2\u9884\u52a0\u8f7d\u5bb9\u5668\u955c\u50cf"},"\u9636\u6bb5 2\uff1a\u9884\u52a0\u8f7d\u5bb9\u5668\u955c\u50cf"),(0,a.kt)("p",null,"Harvester controller \u5728\u6bcf\u4e2a Harvester \u8282\u70b9\u4e0a\u521b\u5efa Job\uff0c\u4ee5\u4fbf\u4ece\u4ed3\u5e93 VM \u4e0b\u8f7d\u955c\u50cf\u5e76\u8fdb\u884c\u9884\u52a0\u8f7d\u3002\u8fd9\u4e9b\u662f\u4e0b\u4e00\u4e2a\u7248\u672c\u6240\u9700\u7684\u5bb9\u5668\u955c\u50cf\u3002"),(0,a.kt)("p",null,"\u5728\u6b64\u9636\u6bb5\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u5347\u7ea7\u72b6\u6001\u7a97\u53e3\u663e\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(47536).Z,width:"1128",height:"556"})),(0,a.kt)("p",null,"\u6240\u6709\u8282\u70b9\u90fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u6765\u9884\u52a0\u8f7d\u955c\u50cf\u3002\u5982\u679c\u5347\u7ea7\u5728\u6b64\u9636\u6bb5\u5931\u8d25\uff0c\u7528\u6237\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Job \u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get jobs -n cattle-system | grep prepare\napply-hvst-upgrade-9gmg2-prepare-on-node1-with-2bbea1599a-f0e86   0/1           47s        47s\napply-hvst-upgrade-9gmg2-prepare-on-node4-with-2bbea1599a-041e4   1/1           2m3s       2m50s\n\n$ kubectl logs jobs/apply-hvst-upgrade-9gmg2-prepare-on-node1-with-2bbea1599a-f0e86 -n cattle-system\n...\n")),(0,a.kt)("p",null,"\u5982\u679c\u5347\u7ea7\u5728\u6b64\u9636\u6bb5\u5931\u8d25\uff0c",(0,a.kt)("a",{parentName:"p",href:"#%E9%87%8D%E6%96%B0%E5%BC%80%E5%A7%8B%E5%8D%87%E7%BA%A7"},"\u91cd\u65b0\u5f00\u59cb\u5347\u7ea7"),"\u4e5f\u662f\u5b89\u5168\u7684\u3002"),(0,a.kt)("h3",{id:"\u9636\u6bb5-3\u5347\u7ea7\u7cfb\u7edf\u670d\u52a1"},"\u9636\u6bb5 3\uff1a\u5347\u7ea7\u7cfb\u7edf\u670d\u52a1"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6858).Z,width:"1132",height:"970"})),(0,a.kt)("p",null,"\u5728\u6b64\u9636\u6bb5\uff0cHarvester controller \u4f7f\u7528 Job \u6765\u5347\u7ea7\u7ec4\u4ef6 Helm Chart\u3002\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"apply-manifest")," Job\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get jobs -n harvester-system -l harvesterhci.io/upgradeComponent=manifest\nNAME                                 COMPLETIONS   DURATION   AGE\nhvst-upgrade-9gmg2-apply-manifests   0/1           46s        46s\n\n$ kubectl logs jobs/hvst-upgrade-9gmg2-apply-manifests -n harvester-system\n...\n")),(0,a.kt)("h3",{id:"\u9636\u6bb5-4\u5347\u7ea7\u8282\u70b9"},"\u9636\u6bb5 4\uff1a\u5347\u7ea7\u8282\u70b9"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(10747).Z,width:"1134",height:"946"})),(0,a.kt)("p",null,"Harvester controller \u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\uff08\u4e00\u4e2a\u63a5\u4e00\u4e2a\uff09\u521b\u5efa Job \u4ee5\u5347\u7ea7\u8282\u70b9\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c RKE2 \u8fd0\u884c\u65f6\u3002\u5bf9\u4e8e\u591a\u8282\u70b9\u96c6\u7fa4\uff0c\u66f4\u65b0\u8282\u70b9\u7684 Job \u6709\u4e24\u79cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pre-drain")," Job\uff1a\u70ed\u8fc1\u79fb\u6216\u5173\u95ed\u8282\u70b9\u4e0a\u7684\u865a\u62df\u673a\u3002Job \u5b8c\u6210\u540e\uff0c\u5d4c\u5165\u5f0f Rancher \u670d\u52a1\u4f1a\u5347\u7ea7\u8282\u70b9\u4e0a\u7684 RKE2 \u8fd0\u884c\u65f6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"post-drain")," Job\uff1a\u5347\u7ea7\u64cd\u4f5c\u7cfb\u7edf\u5e76\u91cd\u65b0\u542f\u52a8\u3002")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5355\u8282\u70b9\u96c6\u7fa4\uff0c\u6bcf\u4e2a\u8282\u70b9\u53ea\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"single-node-upgrade")," \u7c7b\u578b\u7684 Job\uff08\u547d\u540d\u683c\u5f0f\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"hvst-upgrade-xxx-single-node-upgrade-<hostname> "),"\uff09\u3002"),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u68c0\u67e5\u8282\u70b9 Job\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get jobs -n harvester-system -l harvesterhci.io/upgradeComponent=node\nNAME                                  COMPLETIONS   DURATION   AGE\nhvst-upgrade-9gmg2-post-drain-node1   1/1           118s       6m34s\nhvst-upgrade-9gmg2-post-drain-node2   0/1           9s         9s\nhvst-upgrade-9gmg2-pre-drain-node1    1/1           3s         8m14s\nhvst-upgrade-9gmg2-pre-drain-node2    1/1           7s         85s\n\n$ kubectl logs -n harvester-system jobs/hvst-upgrade-9gmg2-post-drain-node2\n...\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5347\u7ea7\u5728\u6b64\u9636\u6bb5\u5931\u8d25\uff0c\u8bf7\u4e0d\u8981\u91cd\u65b0\u5f00\u59cb\u5347\u7ea7\u3002")),(0,a.kt)("h3",{id:"\u9636\u6bb5-5\u6e05\u7406"},"\u9636\u6bb5 5\uff1a\u6e05\u7406"),(0,a.kt)("p",null,"Harvester controller \u4f1a\u5220\u9664\u5347\u7ea7\u4ed3\u5e93 VM \u548c\u4e0d\u518d\u9700\u8981\u7684\u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u5e38\u7528\u64cd\u4f5c"},"\u5e38\u7528\u64cd\u4f5c"),(0,a.kt)("h3",{id:"\u91cd\u65b0\u5f00\u59cb\u5347\u7ea7"},"\u91cd\u65b0\u5f00\u59cb\u5347\u7ea7"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u767b\u5f55\u5230 control plane \u8282\u70b9\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5217\u51fa\u96c6\u7fa4\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Upgrade")," CR\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"# \u4f7f\u7528 root\n$ sudo -i\n\n# \u5217\u51fa\u8fdb\u884c\u4e2d\u7684\u5347\u7ea7\n$ kubectl get upgrade.harvesterhci.io -n harvester-system -l harvesterhci.io/latestUpgrade=true\nNAME                 AGE\nhvst-upgrade-9gmg2   10m\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5220\u9664 Upgrade CR"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ kubectl delete upgrade.harvesterhci.io/hvst-upgrade-9gmg2 -n harvester-system\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5355\u51fb Harvester \u4eea\u8868\u677f\u4e2d\u7684\u5347\u7ea7\u6309\u94ae\uff0c\u91cd\u65b0\u5f00\u59cb\u5347\u7ea7\u3002"))))}c.isMDXComponent=!0},56034:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ts_status_phase1-55652281986041ac3e4b3fb4bbc07e74.png"},47536:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ts_status_phase2-940f14e6d6329de62a8aea1cc5facf5c.png"},6858:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ts_status_phase3-364e71e68c693b088072a1b1ae4eb6b3.png"},10747:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ts_status_phase4-0f10c9f6b9c4e6533a40ad10b51ff0e4.png"},9721:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ts_upgrade_phases-7336371ca32df446a0f9da46e79729b6.png"}}]);