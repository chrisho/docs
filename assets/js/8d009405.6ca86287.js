"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6301],{3905:(A,e,t)=>{t.d(e,{Zo:()=>k,kt:()=>c});var n=t(67294);function i(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function s(A,e){if(null==A)return{};var t,n,i=function(A,e){if(null==A)return{};var t,n,i={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(i[t]=A[t]);return i}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(i[t]=A[t])}return i}var o=n.createContext({}),l=function(A){var e=n.useContext(o),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},k=function(A){var e=l(A.components);return n.createElement(o.Provider,{value:e},A.children)},I="mdxType",p={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(A,e){var t=A.components,i=A.mdxType,r=A.originalType,o=A.parentName,k=s(A,["components","mdxType","originalType","parentName"]),I=l(t),u=i,c=I["".concat(o,".").concat(u)]||I[u]||p[u]||r;return t?n.createElement(c,a(a({ref:e},k),{},{components:t})):n.createElement(c,a({ref:e},k))}));function c(A,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof A||i){var r=t.length,a=new Array(r);a[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=A,s[I]="string"==typeof A?A:i,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},98329:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=t(83117),i=(t(67294),t(3905));const r={sidebar_position:5,sidebar_label:"Volume Snapshots",title:"Volume Snapshots",keywords:["Volume Snapshot","Volume Snapshots"],Description:"Take a snapshot for a volume from the Volume page."},a=void 0,s={unversionedId:"volume/volume-snapshots",id:"version-v1.1/volume/volume-snapshots",title:"Volume Snapshots",description:"Create Volume Snapshots",source:"@site/versioned_docs/version-v1.1/volume/volume-snapshots.md",sourceDirName:"volume",slug:"/volume/volume-snapshots",permalink:"/v1.1/volume/volume-snapshots",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/volume/volume-snapshots.md",tags:[],version:"v1.1",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Volume Snapshots",title:"Volume Snapshots",keywords:["Volume Snapshot","Volume Snapshots"],Description:"Take a snapshot for a volume from the Volume page."},sidebar:"tutorialSidebar",previous:{title:"Export a Volume to Image",permalink:"/v1.1/volume/export-volume"},next:{title:"Cluster Network",permalink:"/v1.1/networking/clusternetwork"}},o={},l=[{value:"Create Volume Snapshots",id:"create-volume-snapshots",level:2},{value:"Restore a New Volume using Volume Snapshot",id:"restore-a-new-volume-using-volume-snapshot",level:2}],k={toc:l},I="wrapper";function p(A){let{components:e,...r}=A;return(0,i.kt)(I,(0,n.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-volume-snapshots"},"Create Volume Snapshots"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"A recurring snapshot is currently not supported and is tracked via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/572"},"harvester/harvester#572"))),(0,i.kt)("p",null,"After creating a volume, you can create volume snapshots by following the steps below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"\u22ee")," button and select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Take Snapshot")," option."),(0,i.kt)("li",{parentName:"ol"},"Configure the ",(0,i.kt)("inlineCode",{parentName:"li"},"Name")," of the new image and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-volume-snapshot-1",src:t(40798).Z,width:"2560",height:"726"}),"\n",(0,i.kt)("img",{alt:"create-volume-snapshot-2",src:t(36650).Z,width:"657",height:"214"})),(0,i.kt)("h2",{id:"restore-a-new-volume-using-volume-snapshot"},"Restore a New Volume using Volume Snapshot"),(0,i.kt)("p",null,"After creating a volume snapshot, you can restore a new volume using the volume snapshot by following the steps below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Backup & Snapshot > Volume Snapshots")," page or the ",(0,i.kt)("inlineCode",{parentName:"li"},"Snapshots")," tab in each ",(0,i.kt)("inlineCode",{parentName:"li"},"Volumes")," Detail page."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"\u22ee")," button and select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Restore")," option."),(0,i.kt)("li",{parentName:"ol"},"Specify the ",(0,i.kt)("inlineCode",{parentName:"li"},"Name")," of the new Volume."),(0,i.kt)("li",{parentName:"ol"},"If the source volume is not an image volume, you can also select a different ",(0,i.kt)("inlineCode",{parentName:"li"},"StorageClass"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"restore-volume-snapshot-1",src:t(64184).Z,width:"2558",height:"654"}),"\n",(0,i.kt)("img",{alt:"restore-volume-snapshot-2",src:t(17718).Z,width:"2560",height:"726"}),"\n",(0,i.kt)("img",{alt:"restore-volume-snapshot-3",src:t(85941).Z,width:"657",height:"214"}),"\n",(0,i.kt)("img",{alt:"restore-volume-snapshot-4",src:t(88138).Z,width:"659",height:"304"})))}p.isMDXComponent=!0},40798:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/create-volume-snapshot-1-6bf56d2d8ccc01c47824404d4e2f4471.png"},36650:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApEAAADWCAYAAACJ6dk2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB7mSURBVHhe7Z3dqyTHfYb9R+jGf4zRhTG+M+hCIF8aLDC5CVjgu4DAwbkRBolcGONApBjnQggCjoUJsYVjVkRKjInXZjG7tgnelWIbCZ2z2j3ar9Opt7re7l/X9JwzdebMaM7M86CX/qjq6uqehX5U1TPnM2+++R/d22//sjs6utudnp6mdGV52j15UjKsP+keP57mkfLo8WTdeZiX4z5tD3moPCKEEEIIIWtl6lijiz2ptlPsb2E9Rq43db/eCaMjyhnljlkilwtkaqisP64EciKPpWN9R/vtfCFRFIftcd+DZXlACCGEEEImmXOmlMG17FnZucK+7Ge9o43rweGK2w2ZiGS/bj9M/+Wl3DFLZNypDAJZlmrQy2G0sSzdmVESU4fzerjAuYuPNyXlkwcPx3xCCCGEEEImCa5Ue9SsY5Xt6GZRKr2MbhedL7rgnEgWiawEsiwXRh/DiWIHFsTRHS8XYTEct0uqm3NCCCGEEELOTO1P9qrBs/K+IJrBzSZCGVwuOl50v+mo5FQkw0jkcoEcDDVk6EAy2loc1fm8LOv1RccbcXLyYCH3CSGEEELIJHPOFJ2q9qy8LT8LbjYVyqlMTmKJVJaI5CCRubBUmghkasjLwVjLiYeOqHPFeN354SLKReaLz9sPpzflfkncRwghhBBClmfGn+RYcq1+vSQ4mUWyHqW0TEbXiw6YY5Esy0EizxLIcRSyfxlTmcijOxQ66U4PFxYvMq3fy/kkxzeh3zctm+QeIYQQQsiBZM6FgiuN/jSW5X0z7hXdzL4WHS5HMlk8b/hlneKAy0RylMg8GrlMIGWoQSBT4sij5XGh4+Xi+mVKuikfDzmptqt8fEIIIYQQQpQ5V0rpXWos7wV06mATN0tZkEk5XfG7LJLJ+ex/tUhmgSwz2L1Elo1BIL0sDfTDnEkgi6n6xAvyWDo52HK5sEEW00246xtR1hdyN2SunBBCCCHkkHKOG1ky43p0sOxkUShLokwqWSST69n77IHRDRUPPg4jkf0Q5VQe8xR2FMiSQSCDOI7y2HfaojgRxnDxx2n9+O79PscleV/YTwghhBBCSoonDd407rdf2bWig+WlhLJ4mr0ti2TKIJHB9UaRHL2wF8jkitkZB4kc7dIVPS+ep7BDo7LWevQxd6p0sO9ob8O+kHyB4WKP0nqfe2G93n+v++iIEEIIIeSwYy9a7kz9+iCVZX0ilcXPxtHJJJPB5ex30fmiC0aRtExmiRwE0ikVs0CWOfIokPr2j+rpmzkAAAAAcDWRy8np/M3uQSSL/0WBtCfaG6cSGSrqq95uYJi+LgKpIUwAAAAA2A/kdhbJYXrbIpkSHXFBIm2Xw9BleQ9S39hxYxruVB0AAAAA2C/keHI9e59/iSe/H1n80L44lUgVlAyjkBrOlEimhvwlGqawAQAAAPYPOV5+P7KIpD1w2Whklkgb5cIopOSxRI0qAAAAALCf2Pfsf5bJOBrpGexeItOOPvpJn3EU0n/7OjdYfsIHAAAAAPaT4SeAkvvJAf23t8fRyHH2upLI3jAno5DFSJFIAAAAgP0mSqQccDIaGXxRGaazPY09GYksIqmG1Kh+WwgAAAAA9hP/KHmWyCCQHon0tHY1nV1NZQeB9CikfqQSAAAAAPYTud5kNHJGJD2lPZnOHqayH4Sp7EEg+187BwAAAID9ZPirNkUkhylt/9xPccaJRHo6e34q+0FuVH82BwAAAAD2E/+JRLnf/Ehkmc62RC4IZIoFMo9EykrL318EAAAAgP1Erifnk/tNprQlkZVIlpHImfchJZB5FHKcymYkEgAAAGB/8Ujk5As2KXPvRY7T2RbI6n1IJTeWGj2+e7+cAgAAAAD2DbmenE/uZw9ceC8yS2T1TuQwClkyjkT2o5DHx20S+frrb3RPPfXZpXn22S93H3zwYam9iI5/4YVvpM6vPwKqNtRWPP8777xbSj9d1I/z7sUq6PjXXvt+2QIAAABoQ643vhdZRiKLF3o08ux3IlX5JElkss/4PuQ6I5ESHImSxHBVLksiLZAvvfTtsufyxO0yuKy+qJ14jQAAAAAtyPXq9yLlhNPp7PBO5JxE9qOQZSrbI5FXVCJv3ryVzv1cXu4ilyWRul9IJAAAAFyULJFlJLIfjey/I3OORPYF8ZvZ9ZdqjhqnsyPLJFLSs2x6u5ZISeDTT39+2Oc2ffwygZKknTV97ZHKt976WV66vbqv2naZ+hGl1ALncym1AC+7Vkvkm2/+eLZcuI8uj+evy5T63AAAAADnIdcbJbL66zWDRPZT2r1EyiglkRqFrCTS09nHdy9fIiVVUfzq7SiRFkiLYN2eRSoeb6Jk1XImXB7FTOeJ27Evy7bVvs/v/nnbouhzazuWxWPra/F2fb5aZFXfxwAAAAC0IteT83k6e0EiU7JEJndclMhUqZZIT2UfHd8rp2hnTiJratGyqN25897CsS6zVAkJ1fPPf21BEoVFzCN1is4Xy2L77q/r1OhccYp8rj/a5+uZKzf1dYtYX+W1MM71GYkEAACAdZDreUp7QSJTZiSyH54cJDJV9te64/uQm5BIiZEEyWIXZUp1vb+WI227LKaWsTncF9c9SyLn9vlcZ41Uiih/8dj6WpZJpPfF9YjaiefUdt02AAAAwKpEiZQD2gfnfitydYk8lkRe/nS2pMqjfbVMWcyuX/91ljHXEyqbEyYJVS1bc0jsPJK4ikRqqb56Ox4vtP8siTQ+11nXLdSe98X1CBIJAAAAl0mezk5ZTyJT4t/MvmyJ9HYUw1qmopjVQjYnXi1ECTxPIufK4/Ei9tVo37I+qszCd55E1tcu5vqERAIAAMA61BI5/A3t8yRy8tdqaom85C/W1BLk8ihTKotiJkHytutHaZJs1SInVCdKmM/tY+u+iLq/qlvXj22qXtzWUts+Xkuv1+c7TyJdX9G6y2uxVP9c5/btO2UvAAAAwGpkiUzONyeR/Zdrkkg2SWRqbBPfzpY8aVpXUdmtW7/LEmSZUt0oTpapWq7chqRKbbp+RILleoqFULid2Le6v5ZCn0dT7C+++M2JROpLPYrPEdtTfbU3d/7zJFLMXWsUSBH7WLcHAAAAcB6DRKasLpGayl6QyPJD41ki1/tizb4j6YvCCwAAAHDVGL5YM0hk+XZ2lMjkjIsSKYFMUeVBIj8e/+QhErkcJBIAAACuOhOJTA5oicwiKYlMWU0ik4EikauBRAIAAMBVZ0EikwuuJ5EpSCQAAADAfjNIZHI/JBIAAAAAVmJjEvnRERIJAAAAsK/I9ZBIAAAAAGgCiQQAAACAZpBIAAAAAGgGiQQAAACAZpBIAAAAAGgGiQQAAACAZnZGIm/9/n1CCCGEEPIppgVGIgEAAACgGSQSAAAAAJpBIgEAAACgGSQSAAAAAJpBIgEAAACgGSQSAAAAAJpBIgEAAACgmZ2SyJNHp90r197vnnntRve571wnhBBCCCEbjJxL7iUHa2VnJFKd/+obt7qXr73X3Tl+WPYCAAAAwKaQc8m95GCtIrkzEikL1kUAAAAAwHaRg8nFWtgZidRwKiOQAAAAANtHDiYXa2FnJFLz8gAAAADw6dDqYkgkAAAAACCRAAAAANAOEgkAAAAAzSCRAAAAANAMEgkAAAAAzSCRAAAAANAMEgkAAAAAzSCRAAAAANAMEgkAAAAAzSCRAAAAANAMEgkAAAAAzRyURP7wxofdF773m+7dP94te0ZuHz3ovvTqjVxnVzi9d697+N3v5iUAAADALnFwEqnjvvL6ze7ok8dlb88uSaSk8ZOvfz0LpPPgW98qpQAAAACfPgcpkcoLP/pD2duziyORj77//e7+F7+Yl6d/+QsjkgAAALAzHJxEahTy7966nY+Pwjgnkd43J54qe+4Hv+3+4b/+lKfIXa4RTp3Dx9RS+vK194ayZVPrjEQCAADAriOXaWEvJFKiJ+GLEldL5Krbbs9SGetIGLWtsrlt1VsmkoJ3IgEAAGBXOViJtARa6rxtAZxD4unRyLn6KnP7QnKoOloua1/HSC4BAAAArhIHK5FCcqeRQIncMsmL08/KeRLpchEl0ueKbTlIJAAAAFw15DAt7JVECu1TW3/zb/87kUJLoqJ1ESWxVSJVX9PdWq+58ef7ZQ0AAADganDwEikkfmpPsRRqGQVSrCOROqfOzagjAAAA7ANIZMKCFyUyCqDQfpVfVCKFBDJ+kcbnjW0AAAAAXAWQyMIyKdR5LI8qW0ciheq7TbfLdDYAAABcNeQxLVxpiQQAAACAywGJBAAAAIBmkEgAAAAAaAaJBAAAAIBmkEgAAAAAaAaJBAAAAIBmkEgAAAAAaAaJBAAAAIBmkEgAAAAAaAaJBAAAAIBmDk4i33zzx93Nm7fKVtednJx0L7zwje71198oe3YH9Ul9Ux/hfC7zs6z/nQAAAMCUg5JIScaLL34TidxTLuuznPt3AgAAAFMOSiI/+ODD7vnnv4ZE7imX9VnO/TsBAACAKQcjke+882731FOfnUT7LB6vvvpPeemyWkTq47W9DLf50kvfLnt6JCfPPvvloW1vu02ta5+pJVLtxTZrabL8aCr26ac/n9tUfddb1veWazNq1/Vjv3WszvXWWz+bLRf1dcdr8jVcv/7rpX2W3Pn6FF//RT/LeP66TDnrfqhtHa+l6+vc/szEsv6Ki35m8Xw6DuEFAIBtc1AjkXrQPvvsc5MHrh/W8UGsB/ZZ21pq+yy5qI8R2mehskhFgdF6FC6JQhQSlcf67rulxG36GAuKrtl9Vd14joteW92G+6V1i5BwH73tPrr9ZduxT+qzt+tr1rannl0Wj1W79XaUMp8v3lfVrf+dLEP9UHv1Z+Dtuq162/VbPrN6u75GAACAbYBEVlIi/GDXw3muXGg7ikfN3HGq720towiIeF6hOpYLoePjOetz1McL1Y9txHtw0Wur+xXRuevrOqu+iNc1dw3ep3bmys3c9cT6Lq+vre7z3L+TZcxdW7yemrqPc9ejY2ObsT/Lrl/HxOsGAADYNEjkGeKhfV731GGMRUH14n4/4LXfMlCfuxYF4b7EdmMd7XeZqPu+TEjiMbEf512b2/c+1dUx8bjYtqiFTKh/c/vcbmzHbcdrmLsvOqYefavvh3B72hfXI2pDbfmc8R4ZlcX+ug0t42ck1M+5fXPHz12v6vpaReyP+xrbqtsEAADYBkjkOeLh8viQN6oXRaEmnq+WjTnR8LksEHPHRLlwffe9VUh8/EWuTfh4CYzb0FJ90PFG/fM+9zHWiX10eeyTzxOvQ6iOzu175Hq+H8LtaV9cj+henCeRy1BbPr9RP73PbS/r49z1xvshYn9UX9Pdc327fftOWQMAANg8SOQ54iHqh3oLOs5f9IiioLZ1Dp3L1EJRC0rdj3WFRNTlF0Hndxs6d31d8VrnymMf5q7B+3ydEZVZqs77LF1eX2/dp7l/J8tQu/EzEmrf++ryuo9z1xvvh4j9qY8HAAD4tDg4ifSIkx7eeiDPPZSjeAjVj6NtQg/5VR7kPjZKivA5oixoPdZT+1FAtF2Xx2lMt7mqkIiLXJvKXF7fP7VTX6vKvG/Z+d1HX0Pss9Z9vKLzuf14vot8li6v71H972QZajd+RkJteV/sn1D9dT8zHav+edvXHdsAAADYNAclkUIPZz3E/SBfRTyExcLH6hg/xM9iTlKMy9xmlA2h80dBcV9dX+Vq1/28iJCI1mvTz+/Efsf2a2kS6l/cp/rxWB3jNnwNsU48VkuN7LpsTqbi5+b24j6dz8crsf8mnj8eW6Oy+BkJHet9c5+ZI9y/1s9s7hqYzgYAgG1ycBIJu82cVAEAAMDugUTCToFEAgAAXA2QSNgpkEgAAICrARIJAAAAAM0gkQAAAADQDBIJAAAAAM0gkQAAAADQDBIJAAAAAM0gkQAAAADQDBIJAAAAAM0gkQAAAADQDBIJAAAAAM0gkQAAAADQDBIJAAAAAM0gkQAAAADQDBIJAAAAAM1cWYl85rUb3Z3jh2ULAAAAALaFHEwu1sLOSOQr197vXr72XtkCAAAAgG0hB5OLtbAzEnny6LT76hu38kUwIgkAAACweeRcci85mFyshZ2RSKHOy4I1nKp5eUIIIYQQsrnIueRerQIpdkoiAQAAAOBqgEQCAAAAQDNIJAAAAAA0g0QCAAAAQDNIJAAAAAA0g0QCAAAAQDNIJAAAAAA0g0QCAAAAQDNIJAAAAAA0g0QCAAAAQDNIJAAAAAA0g0QCAAAAQDNIJAAAAAA0g0QCAAAAQDNIJAAAAAA0g0QCAAAAQDNIJAAAAAA0g0QCAAAAQDNIJAAAAAA0g0QCAAAAQDNIJAAAAAA0g0QCAAAAQDNIJAAAHCwnj067V6693z3z2o3uc9+5TjYQ3VvdY93ri8BntNms8/kgkQAAcJDoofnVN251L197r7tz/LDshctG91b3WPe6VVT8Gc3JD7ncXOTzQSIBAOAg0eiL5Aa2g+617nkLqj8nPGQzaf18kEgAADhINI3HCOT20L3WPW+BKeztpvXzQSIBAOAg0UMTtkvrPY+CQ7aTFpBIAAA4SFofmLA+rfc8yg3ZTlpAIgEA4CBpfWDC+rTe8yg3ZDtpAYkEAICDpPWBCevTes+j3JDtpAUkEgAADpLWByasT+s9j3JDtpMWkEgAADhIWh+YsD6t9zzKDdlOWkAiAQDgIGl9YML6tN7zKDdkO2kBiQQAgIOk9YEJ69N6z6PckO2kBSQSAAAOktYHJqxP6z2PckO2kxaQSAAAOEhaH5iwPq33PMoN2U5aQCIBAOAgaX1gwvq03vMoN2Q7aQGJBACAg6T1gQnr03rPo9yQ7aQFJBIAAA6S1gfmOrx87b2Fh/UPb3xYSj9djj553H3l9Zu5j5um9Z7X94xsPi0gkQAAcJC0PjAvwu2jB92XXr3RfeF7v+ne/ePdsrfLAqnzb0PczgOJvN797U//2N17+KSctefPHz/s/vqHv5+tf5nROa7/372tnGuVtIBEAgDAQdL6wLwIL/zoD1nQJGq7yqFL5H/f7uX+Dx9+MuyT0EkiJZYSzFj/svOPv/hTdyf9zwYSiUQCAMAVofWB2YpGHjUCueq0dZzyrkcuVSYhjXVqOfWo51y5RfGsskOUSAncwyen3b+WkeFPIzr3tkY9V0kLSCQAABwkrQ/MViRlkjrJ3XmobhS7uW3116JnYay3JZpGZYolMZbFEdJDlkiNPq4icBqN/OjkcRY+T3trBFNlHrU0dXv1VHkc8dR6JI58nnXcJtMCEgkAAAdJ6wOzFUnZqhJZo1FIHevRSLUVpVJIBC2GGu1cdq65Mq0/94Pf5vYPVSItaZbBs+K6UfIUC2QthhZJH+eRznpb0fmXiWctqtsQyRaQSAAAOEhaH5ittEqk6qm+H+ZxSnuZRHpfXK/RsW4zxu0jkatLZD3t7ZFJlce6GrXUVHms60gEowzOSeTcPrWnduO5NpEWkEgAADhIWh+YrUjQVn0n0qJnkdOxq4xEriKROv9cmbYlrloikfN1nGUSqWPn0HuWUSLreudJpMrnqIV1E2kBiQQAgIOk9YHZiuVsmdyZOYlrlcizprPrtmrmzr8pWu95lJtNRLJWC9xclkmktueO17aO8XFR/lYdiYx1HLdb77/MtLAxiTw6RiIBAGB3aX1gXgRPUdeCJ+nT+S1uEkJFWOpaprN9HrchtK7zuL14vNrVO5GHPBKpSAJFLYd1lkmkRhu1f9nUtepHgVRWkci547aVFuR6SCQAABwcrQ/MdZDQxQd1/RM+Wtc+l/30dx91f/Uvv1tZIoVF0udQ+Y0/389lou7DP//PXw5eIhVPNWvpfRI6iZ1FbplEul6UwPjuYi2ZOl7UEunz/P3b7+d9Pl+sp2Nr2dxEWrh8ibyLRAIAwO7T+sCE9Wm951FuNhlJnt5jjESBWyaRjupG/v3mR/mYukzramOubRHfpbSgGv+e5U5KZHK/9STyPhIJAABXh9YHJqxP6z2PckO2kxYWJDK54GoS+aCXyJMokclAkUgAALgKtD4wYX1a73mUG7KdtDCRyOSAlki5YZbI5IqLEpmyKJEPgkSepIbH9zAAAAB2jdYHJqxP6z2PckO2kxbkenK+USLLKGSUyOSMq0vkx0gkAADsPq0PTFif1nse5YZsJy0MEpncr0kih/ci5yQyNYpEAgDALtP6wIT1ab3nUW7IdtJClsiUOYn0+5DnS6QOQiIBAOAK0frAhPVpvedRbsh20kItkfbB9SSSL9YAAMCO0/rAhPVpvedRbsh20sLwxZrVJfJxL5KWyJR+OvuT/PtASCQAAFwFWh+YsD6t9zzKDdlOWogSKQccvp2d3NASKWeUOy5KZEotkfqdIL5YAwAAu07rAxPWp/WeR7kh20kLeTpb38yek0iNQi5I5KMikSm1RH58rx/OlJEikQAAsMu0PjBhfVrveZQbsp20INfzVLYccEEis0CmJHcMEvl48l5kL5H9O5HxvUgAAIBdpfWBCevTes+j3JDtpIX4PqTib2dP34dM3niWRJ6cJJFMB3o623+1BgAAYFdpfWDC+rTe8yg3ZDtpIUtkmM7uv1Qzvg+5IJGPJJEpg0CWjFPa48/8AAAA7CrPvHaju3P8sGzBptG91j1vQfXnRIdsJq2fz/Q3Isep7DydnSJXlDPKHUeJ9Chk/Ks1GsL0lLYkkpFIAADYYV659n738rX3yhZsGt1r3fMWVH9Odshm0vr5yPXkfHI/e6CcMEuk/lqNJDI5Y5DIJ71ETqaz+znw+ss1AAAAu8rJo9Puq2/cynLDiOTm0L3VPda91j1vwZ/RnPCQy81FPp/xfcjwpZqU6XS2JPLJknciUzydLQON70UCAADsMnpoavSFadPNRfdW97hVUAyf0WazzudTvw/p6Wz/vM/SdyIXvlxTRDL+DW0AAAAA2E/G9yGDQKbUAjl5J9Ii2Y9ETt+LjFPaAAAAALCfTKaykwMuvA9ZnLGSyJn3IlOGKe0skkgkAAAAwL7Sj0JWU9kp40hk/z7kKJGPk0CmjTxEuUQkPRoJAAAAAPvJ5As1MwI5TGcnd5xMZyvDlHYRSH9L26ORAAAAALCfTEYhK5GMU9lKJZHVlHaRSSQSAAAAYP+JEikHnH4re5zKHiXy8ZPusae0FX1LuwhkHo20SKYAAAAAwH5i37P/DaOQZRpbkTMO09l5I+104mjkIJOl0dPTi/0mFAAAAADsLnK8LJAplsecYRRydEW54yiRJQujkQ96C1XUsOoAAAAAwH4hx5Pr2fvGP3M4jkLaFycSuXQ0MsWN5aHNk4fdkyeMRgIAAADsC3I7OZ6nsBV74Nwo5KJEOhbJFDcgE/X8uE6iekxtAwAAAFxd5HJyOguk4insLJDFCXOKJ04k8smTcUcUSCc3VuITaLjT0Td58t/XLn/VRtGfzdHfX9Ty+O797vg4RcuUo7Te515Yr/ff6z46IoQQQgg57NiLljtTv27PsnNFF7Of5d+BTMv8LezgchOBLIkuaD+0L8odi0Sedo/ThmXSFfuf/EkHl/cjnWF62yfXV8HLTwApg0y607qIcCG9WBa59MXmC672E0IIIYSQkuJJgzeN++1XgzQq0cXKj4hneSzeluUxZZi+Dq5n/4s/6WN57J3xtEjk6WkvksUuPVTpgyYi+XCUyCySKdFkR5lMS3c6L0eZnIhlHV28M1dOCCGEEHJIOceNLIpxPTpYdjLLY3A2OVx0Or++OArkKI9xGlvOKHccRiJ7kRwr5AO9tEimpefI/Y2dWZl0J0OnR6l0glzOxTeCEEIIIeTQM+dKKZbFuC3nig42cbOUKI/Z5eR0xe/y9HUQSLvgKJApZfBxlMgyNKkhynmRHH/+x6Zqiaxl0n8mx52NHR+EMo9WjkOq/b5p2SS+MYQQQggh+545FwquNPrTWJb3zbhXdLOJPJZljgWyON+cQHoa286YJVLfzDlLJL3sG5ah9kOdE5kMI5Pu5NDpyUUsTn9PLpoQQgghhJydGX/yN6z79ZLgZIM8FmfLKU7nn/Gx60UHzKkEUu44SOQgkmU5EcnSUEy21Vomy3Ls5CiV7nzczokXWhJvCCGEEEIIWfSlnOBUtWflbflZcLPobJZHi+MklkfFAlkc0d5YJLL/naCzRDLLZGlUy2FUUikd0LIWytzxZLxD5/P2KJgx8UYQQgghhJDF1P5krxo8K++bjjZ6GZ0tulx0vOh+ywQy/RdHIiuR9EFFJL0cRiXLMnYgGu0glEq8iHpfSRZNp745hBBCCCGHnuBKtUfNOlbZnoijXC24W3Q6LaPzRResBVLLLJFHR3cnO5XhoLK+MCqppBPm9dKJvjOjXA5SOXR+um9ywTHxphBCCCGEkHlnShlcy56VnSvsy37WO9q4HhyuuN0Qy2N2wHmBlDtmiXz77V+eIZJupG9ocpKUiUyWdafv6LgvX5QTZJIQQgghhFw0U8caXWwqjTn2t7AeM4w+Bg+0F6b/8lLOKHf8zM9//otOIkkIIYQQQsiq+czH9x50v7p+s/vJT/5ztgIhhBBCCCGOnPFX1292/w9UFKm7oFWoiAAAAABJRU5ErkJggg=="},64184:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/restore-volume-snapshot-1-29600c51af297e8ff75bc639a0b88f58.png"},17718:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/restore-volume-snapshot-2-014dde2cc3900e73c8a7c9cd503ebdad.png"},85941:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},88138:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/restore-volume-snapshot-4-c6171e652ca2533906aba1fb6df5da5f.png"}}]);