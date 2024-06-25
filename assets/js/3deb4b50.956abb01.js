"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[873],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||r;return t?i.createElement(m,a(a({ref:n},p),{},{components:t})):i.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[f]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6893:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var i=t(3117),o=(t(7294),t(3905));const r={sidebar_position:4},a="\ud83d\udd8b\ufe0f Global types config examples",s={unversionedId:"intro/examples/global-types-config-examples",id:"intro/examples/global-types-config-examples",title:"\ud83d\udd8b\ufe0f Global types config examples",description:"Code has been already described step by step in the DEFAULT EXAMPLES section, so I think there is no use to do it here again.",source:"@site/docs/intro/examples/global-types-config-examples.md",sourceDirName:"intro/examples",slug:"/intro/examples/global-types-config-examples",permalink:"/react-native-notificated/docs/intro/examples/global-types-config-examples",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"intro",previous:{title:"\u2712\ufe0f Global config examples",permalink:"/react-native-notificated/docs/intro/examples/global-config-examples"},next:{title:"\ud83e\udded Custom examples",permalink:"/react-native-notificated/docs/intro/examples/custom-examples"}},l={},c=[{value:"Code",id:"code",level:2},{value:"Visualization of examples",id:"visualization-of-examples",level:2},{value:"Success notification",id:"success-notification",level:3},{value:"Error notification",id:"error-notification",level:3},{value:"Warning notification",id:"warning-notification",level:3},{value:"Info notification",id:"info-notification",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function f(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-global-types-config-examples"},"\ud83d\udd8b\ufe0f Global types config examples"),(0,o.kt)("br",null),(0,o.kt)("p",null,"Code has been already described step by step in the ",(0,o.kt)("a",{parentName:"p",href:"/react-native-notificated/docs/intro/examples/default-examples"},"DEFAULT EXAMPLES")," section, so I think there is no use to do it here again."),(0,o.kt)("p",null,"Here we have only a few differences I need to mention, and they are minimal:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we use ",(0,o.kt)("inlineCode",{parentName:"li"},"modify()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"remove()")," only in the ",(0,o.kt)("a",{parentName:"li",href:"/react-native-notificated/docs/intro/examples/default-examples"},"DEFAULT EXAMPLES")," because their usage is limited, and the explanation there is all we need to know. We can remove the notification, or modify it, and therefore we will not be using them here and in the other examples as well. For that same reason, we will not be using ",(0,o.kt)("inlineCode",{parentName:"li"},"useState")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"useNotificationController")," here. "),(0,o.kt)("li",{parentName:"ul"},"we filled the ",(0,o.kt)("inlineCode",{parentName:"li"},"successConfig"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"errorConfig"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"warningConfig")," and the ",(0,o.kt)("inlineCode",{parentName:"li"},"infoConfig")," objects in the ",(0,o.kt)("inlineCode",{parentName:"li"},"defaultStylesSettings"),". Those objects are responsible for setting properties for all notifications in the given type. To read more please go back to the ",(0,o.kt)("a",{parentName:"li",href:"/react-native-notificated/docs/intro/default-variants-config/global-config"},"GLOBAL CONFIG")," section.",(0,o.kt)("br",null))),(0,o.kt)("p",null,"That's the only difference between Default Examples and Global Types Config Examples.",(0,o.kt)("br",null),"\nLet's take a look at the code and the visualizations then:"),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { SafeAreaView } from 'react-native'\nimport { createNotifications } from 'react-native-notificated'\nimport { SuccessButton } from '../components/basicExamples/SuccessButton'\nimport { ErrorButton } from '../components/basicExamples/ErrorButton'\nimport { WarningButton } from '../components/basicExamples/WarningButton'\nimport { InfoButton } from '../components/basicExamples/InfoButton'\nimport { styles } from './styles'\n\nconst { useNotifications, NotificationsProvider } = createNotifications({\n  isNotch: true,\n  defaultStylesSettings: {\n    successConfig: {\n      leftIconSource: require('../../assets/custom-success-icon.png'),\n      titleSize: 15,\n      titleColor: '#006400',\n      descriptionSize: 12,\n      descriptionColor: '#006400',\n      bgColor: '#F5F5F5',\n      borderRadius: 5,\n      accentColor: '#7FFF00',\n      borderWidth: 2,\n    },\n    errorConfig: {\n      leftIconSource: require('../../assets/custom-error-icon.png'),\n      titleSize: 18,\n      titleColor: '#8B0000',\n      descriptionSize: 12,\n      bgColor: '#DEB887',\n      borderRadius: 15,\n      accentColor: '#8B0000',\n    },\n    warningConfig: {\n      leftIconSource: require('../../assets/custom-warning-icon.png'),\n      titleSize: 20,\n      titleColor: '#fff',\n      descriptionSize: 14,\n      descriptionColor: '#fff',\n      bgColor: '#191970',\n      borderRadius: 10,\n      accentColor: '#FF8C00',\n      borderWidth: 3,\n      multiline: 3,\n    },\n    infoConfig: {\n      leftIconSource: require('../../assets/custom-info-icon.png'),\n      titleSize: 20,\n      titleColor: '#1E90FF',\n      descriptionSize: 14,\n      descriptionColor: '#1E90FF',\n      borderWidth: 0,\n      multiline: 4,\n    },\n  },\n})\n\nexport const GlobalTypesConfigExamples = () => {\n  const { notify } = useNotifications()\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <NotificationsProvider />\n      <SuccessButton\n        onPress={() =>\n          notify('success', {\n            params: {\n              description: 'This is where the toast text goes',\n              title: 'Success',\n            },\n          })\n        }\n      />\n      <ErrorButton\n        onPress={() =>\n          notify('error', {\n            params: {\n              description: 'This is where the toast text goes. ',\n              title: 'Error',\n            },\n          })\n        }\n      />\n      <WarningButton\n        onPress={() =>\n          notify('warning', {\n            params: {\n              description: 'This is where the toast text goes',\n              title: 'Warning',\n            },\n          })\n        }\n      />\n      <InfoButton\n        onPress={() =>\n          notify('info', {\n            params: {\n              description: 'This is where the toast text goes.',\n              title: 'Info',\n            },\n          })\n        }\n      />\n    </SafeAreaView>\n  )\n}\n\n\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"visualization-of-examples"},"Visualization of examples"),(0,o.kt)("p",null,"Let's see the notifications we declared above:"),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"success-notification"},"Success notification"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Success",src:t(9093).Z,width:"752",height:"210"})),(0,o.kt)("h3",{id:"error-notification"},"Error notification"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Error",src:t(8140).Z,width:"746",height:"216"})),(0,o.kt)("h3",{id:"warning-notification"},"Warning notification"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Warning",src:t(9786).Z,width:"742",height:"224"})),(0,o.kt)("h3",{id:"info-notification"},"Info notification"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Info",src:t(890).Z,width:"748",height:"218"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"All notifications of the same type will have the same style properties."),(0,o.kt)("p",null,"Importantly, the ",(0,o.kt)("inlineCode",{parentName:"p"},"successConfig"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"errorConfig"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"warningConfig")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"infoConfig")," overwrites the ",(0,o.kt)("inlineCode",{parentName:"p"},"globalConfig")," setting, but only for its own types.",(0,o.kt)("br",null),"\nTo find out more, go back to the ",(0,o.kt)("a",{parentName:"p",href:"/react-native-notificated/docs/intro/default-variants-config/global-config"},"GLOBAL CONFIG"),(0,o.kt)("br",null)," and the ",(0,o.kt)("a",{parentName:"p",href:"/react-native-notificated/docs/intro/comprehensive-configuration/order-of-settings-overwriting"},"ORDER OF SETTINGS OVERWRITING")," sections."))}f.isMDXComponent=!0},8140:function(e,n,t){n.Z=t.p+"assets/images/error-global-type-b2f0a5a2a67e3ab2b40ca53f171855f2.png"},890:function(e,n,t){n.Z=t.p+"assets/images/info-global-type-3e4192bdb309c1d53ee458a93c589b40.png"},9093:function(e,n,t){n.Z=t.p+"assets/images/success-global-type-1bea57007ceac25fe4e39601dc68cb26.png"},9786:function(e,n,t){n.Z=t.p+"assets/images/warning-global-type-21095ea82c7e9646e151a7e28edb1787.png"}}]);