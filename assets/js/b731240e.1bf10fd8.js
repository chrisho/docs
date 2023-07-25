"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7964],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>v});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(o),d=n,v=u["".concat(p,".").concat(d)]||u[d]||c[d]||a;return o?r.createElement(v,l(l({ref:t},s),{},{components:o})):r.createElement(v,l({ref:t},s))}));function v(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var m=2;m<a;m++)l[m]=o[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},99482:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=o(87462),n=(o(67294),o(3905));const a={sidebar_position:4,sidebar_label:"Export a Volume to Image",title:"Export a Volume to Image",keywords:["Volume"],Description:"Export volume to image from the Volume page."},l=void 0,i={unversionedId:"volume/export-volume",id:"version-v1.1/volume/export-volume",title:"Export a Volume to Image",description:"You can select and export an existing volume to an image by following the steps below:",source:"@site/versioned_docs/version-v1.1/volume/export-volume.md",sourceDirName:"volume",slug:"/volume/export-volume",permalink:"/v1.1/volume/export-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/volume/export-volume.md",tags:[],version:"v1.1",lastUpdatedAt:1678206083,formattedLastUpdatedAt:"Mar 7, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Export a Volume to Image",title:"Export a Volume to Image",keywords:["Volume"],Description:"Export volume to image from the Volume page."},sidebar:"tutorialSidebar",previous:{title:"Clone a Volume",permalink:"/v1.1/volume/clone-volume"},next:{title:"Volume Snapshots",permalink:"/v1.1/volume/volume-snapshots"}},p={},m=[],s={toc:m},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can select and export an existing volume to an image by following the steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"\u22ee")," button and select the ",(0,n.kt)("inlineCode",{parentName:"li"},"Export Image")," option."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("inlineCode",{parentName:"li"},"Namespace")," of the new image."),(0,n.kt)("li",{parentName:"ol"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"li"},"Name")," of the new image."),(0,n.kt)("li",{parentName:"ol"},"Select an existing ",(0,n.kt)("inlineCode",{parentName:"li"},"StorageClass"),"."),(0,n.kt)("li",{parentName:"ol"},"(Optional) You can download the exported image from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Images")," page by clicking the ",(0,n.kt)("inlineCode",{parentName:"li"},"\u22ee")," button and selecting the ",(0,n.kt)("inlineCode",{parentName:"li"},"Download")," option.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"export-volume-to-image-1",src:o(40326).Z,width:"2560",height:"726"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"export-volume-to-image-2",src:o(45433).Z,width:"659",height:"391"})))}c.isMDXComponent=!0},40326:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/export-volume-to-image-1-7eadd6b18692690838773948966a5836.png"},45433:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/export-volume-to-image-2-5697ce35fbe6270578c515b14431058e.png"}}]);