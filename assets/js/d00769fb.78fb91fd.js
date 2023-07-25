"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7620],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},v="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),v=p(t),u=o,f=v["".concat(l,".").concat(u)]||v[u]||d[u]||a;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[v]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10034:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(83117),o=(t(67294),t(3905));const a={sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},i=void 0,s={unversionedId:"terraform/terraform-provider",id:"version-v1.0/terraform/terraform-provider",title:"Harvester Terraform Provider",description:"Requirements",source:"@site/versioned_docs/version-v1.0/terraform/terraform-provider.md",sourceDirName:"terraform",slug:"/terraform/terraform-provider",permalink:"/v1.0/terraform/terraform-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/terraform/terraform-provider.md",tags:[],version:"v1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},sidebar:"tutorialSidebar",previous:{title:"Harvester CSI Driver",permalink:"/v1.0/rancher/csi-driver"},next:{title:"Settings",permalink:"/v1.0/settings/"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Install The Provider",id:"install-the-provider",level:2},{value:"Using the provider",id:"using-the-provider",level:2}],c={toc:p},v="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(v,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/terraform/terraform-provider"})),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform")," >= 0.13.x"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Go")," 1.18 to build the provider plugin")),(0,o.kt)("h2",{id:"install-the-provider"},"Install The Provider"),(0,o.kt)("p",null,"copy and paste this code into your Terraform configuration. Then, run ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform init")," to initialize it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'terraform {\n  required_providers {\n    harvester = {\n      source = "harvester/harvester"\n      version = "<replace to the latest release version>"\n    }\n  }\n}\n\nprovider "harvester" {\n  # Configuration options\n}\n')),(0,o.kt)("h2",{id:"using-the-provider"},"Using the provider"),(0,o.kt)("p",null,"More details about the provider-specific configurations can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest/docs"},"docs"),"."),(0,o.kt)("p",null,"Github Repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/harvester/terraform-provider-harvester"},"https://github.com/harvester/terraform-provider-harvester")))}d.isMDXComponent=!0}}]);