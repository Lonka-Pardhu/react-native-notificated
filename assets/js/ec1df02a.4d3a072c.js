"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[793],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4660:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var i=n(3117),o=(n(7294),n(3905));const r={sidebar_position:2},a="\ud83d\udd8a\ufe0f Dark mode examples",s={unversionedId:"intro/examples/dark-mode-examples",id:"intro/examples/dark-mode-examples",title:"\ud83d\udd8a\ufe0f Dark mode examples",description:"Code has been already described step by step in the DEFAULT EXAMPLES section.",source:"@site/docs/intro/examples/dark-mode-examples.md",sourceDirName:"intro/examples",slug:"/intro/examples/dark-mode-examples",permalink:"/react-native-notificated/docs/intro/examples/dark-mode-examples",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"intro",previous:{title:"\ud83d\udd0f Default examples",permalink:"/react-native-notificated/docs/intro/examples/default-examples"},next:{title:"\u2712\ufe0f Global config examples",permalink:"/react-native-notificated/docs/intro/examples/global-config-examples"}},l={},c=[{value:"Code",id:"code",level:2},{value:"Visualization of examples",id:"visualization-of-examples",level:2},{value:"Success notification",id:"success-notification",level:3},{value:"Error notification",id:"error-notification",level:3},{value:"Warning notification",id:"warning-notification",level:3},{value:"Info notification",id:"info-notification",level:3}],p={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-dark-mode-examples"},"\ud83d\udd8a\ufe0f Dark mode examples"),(0,o.kt)("br",null),(0,o.kt)("p",null,"Code has been already described step by step in the ",(0,o.kt)("a",{parentName:"p",href:"/react-native-notificated/docs/intro/examples/default-examples"},"DEFAULT EXAMPLES")," section.",(0,o.kt)("br",null),"\nSo I think there is no use to do it here again.",(0,o.kt)("br",null),"\nHere we have only a few differences I need to mention, and they are minimal:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we use ",(0,o.kt)("inlineCode",{parentName:"li"},"modify()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"remove()")," only if the ",(0,o.kt)("a",{parentName:"li",href:"/react-native-notificated/docs/intro/examples/default-examples"},"DEFAULT EXAMPLES")," because their usage is limited, and the explanation there is all we need to know. We can remove notification, or modify it. So, we will not use them here and in the other examples. Because of the same reason we will not use ",(0,o.kt)("inlineCode",{parentName:"li"},"useState")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"useNotificationController")," here."),(0,o.kt)("li",{parentName:"ul"},"we added one extra property - ",(0,o.kt)("inlineCode",{parentName:"li"},"darkMode")," in the global settings ",(0,o.kt)("br",null)," (because we want to show examples in the dark mode, right? \ud83d\ude09 )",(0,o.kt)("br",null))),(0,o.kt)("p",null,"That's the only difference between Default Examples and Dark Mode Examples.",(0,o.kt)("br",null),"\nLet's take a look at the code and the visualizations then:"),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { SafeAreaView } from 'react-native'\nimport { createNotifications } from 'react-native-notificated'\nimport { SuccessButton } from '../components/basicExamples/SuccessButton'\nimport { ErrorButton } from '../components/basicExamples/ErrorButton'\nimport { WarningButton } from '../components/basicExamples/WarningButton'\nimport { InfoButton } from '../components/basicExamples/InfoButton'\nimport { styles } from './styles'\n\nconst { useNotifications, NotificationsProvider } = createNotifications({\n  isNotch: true,\n  defaultStylesSettings: {\n    darkMode: true,\n  },\n})\n\nexport const DarkModeExamples = () => {\n  const { notify } = useNotifications()\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <NotificationsProvider />\n      <SuccessButton\n        onPress={() =>\n          notify('success', {\n            params: {\n              description: 'This is where the toast text goes',\n              title: 'Success',\n            },\n          })\n        }\n      />\n      <ErrorButton\n        onPress={() =>\n          notify('error', {\n            params: {\n              description: 'This is where the toast text goes. ',\n              title: 'Error',\n            },\n          })\n        }\n      />\n      <WarningButton\n        onPress={() =>\n          notify('warning', {\n            params: {\n              description: 'This is where the toast text goes',\n              title: 'Warning',\n            },\n          })\n        }\n      />\n      <InfoButton\n        onPress={() =>\n          notify('info', {\n            params: {\n              description: 'This is where the toast text goes.',\n              title: 'Info',\n            },\n          })\n        }\n      />\n    </SafeAreaView>\n  )\n}\n\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"visualization-of-examples"},"Visualization of examples"),(0,o.kt)("p",null,"Let's see the notifications we declared above:"),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"success-notification"},"Success notification"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Success",src:n(9581).Z,width:"736",height:"198"})),(0,o.kt)("h3",{id:"error-notification"},"Error notification"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error",src:n(61).Z,width:"744",height:"204"})),(0,o.kt)("h3",{id:"warning-notification"},"Warning notification"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Warning",src:n(1559).Z,width:"744",height:"202"})),(0,o.kt)("h3",{id:"info-notification"},"Info notification"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Info",src:n(5123).Z,width:"742",height:"212"})))}f.isMDXComponent=!0},61:function(e,t,n){t.Z=n.p+"assets/images/error-darkMode-32f76a3e561eaaf7252e67b7dcd4ceaa.png"},5123:function(e,t,n){t.Z=n.p+"assets/images/info-darkMode-31cafaa98e3be111ce5af33eb3c73587.png"},9581:function(e,t,n){t.Z=n.p+"assets/images/success-darkMode-fd614fef48b4bab04ed15f471284f2ac.png"},1559:function(e,t,n){t.Z=n.p+"assets/images/warning-darkMode-cd0d8fe07bf0489397139d8c34313ed6.png"}}]);