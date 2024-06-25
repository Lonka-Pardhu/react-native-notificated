"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[225],{3905:function(t,e,n){n.d(e,{Zo:function(){return f},kt:function(){return h}});var i=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=i.createContext({}),s=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},f=function(t){var e=s(t.components);return i.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,f=c(t,["components","mdxType","originalType","parentName"]),p=s(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?i.createElement(h,a(a({ref:e},f),{},{components:n})):i.createElement(h,a({ref:e},f))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=u;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[p]="string"==typeof t?t:o,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8903:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return s}});var i=n(3117),o=(n(7294),n(3905));const r={sidebar_position:2},a="\ud83d\udccf Notification width",c={unversionedId:"intro/default-variants-config/width",id:"intro/default-variants-config/width",title:"\ud83d\udccf Notification width",description:"\ud83c\udf9b Changing width",source:"@site/docs/intro/default-variants-config/width.md",sourceDirName:"intro/default-variants-config",slug:"/intro/default-variants-config/width",permalink:"/react-native-notificated/docs/intro/default-variants-config/width",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"intro",previous:{title:"\ud83d\udccc Notification position",permalink:"/react-native-notificated/docs/intro/default-variants-config/position"},next:{title:"\ud83d\udd04 Transitions",permalink:"/react-native-notificated/docs/intro/animations/changing-transitions"}},l={},s=[{value:"\ud83c\udf9b Changing width",id:"-changing-width",level:2},{value:"Set the width for all notifications in the global config object:",id:"set-the-width-for-all-notifications-in-the-global-config-object",level:3},{value:"Set the position locally inside config object in a single notification instance:",id:"set-the-position-locally-inside-config-object-in-a-single-notification-instance",level:3},{value:"\ud83d\udd26 Width config priority",id:"-width-config-priority",level:2}],f={toc:s};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-notification-width"},"\ud83d\udccf Notification width"),(0,o.kt)("h4",{id:""}),(0,o.kt)("h2",{id:"-changing-width"},"\ud83c\udf9b Changing width"),(0,o.kt)("p",null,"You can change the width of the notifications displayed on the screen. ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationWidth")," is set to 343 pixels. If you don't specify a value for ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationWidth"),", notifications will default to this width."),(0,o.kt)("p",null,"If the value you provide for ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationWidth")," exceeds the device's width, the notification's width will be adjusted to the device width minus the margin value."),(0,o.kt)("p",null,"Depending on whether you want to change the notification width for the whole app or only change it for a certain notification, you can either:"),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"set-the-width-for-all-notifications-in-the-global-config-object"},"Set the width for all notifications in the global config object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { SafeAreaView, Text } from 'react-native'\nimport { createNotifications } from 'react-native-notificated'\nimport { styles } from './styles'\n\nconst { NotificationsProvider, useNotifications } = createNotifications({\n  notificationWidth: 400,\n})\n\nexport const ExampleNotification = () => {\n  const { notify } = useNotifications()\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <NotificationsProvider />\n      <Text\n        onPress={() =>\n          notify('error', {\n            params: {\n              description: 'This is where the toast text goes. ',\n              title: 'Error',\n            },\n          })\n        }>\n        Emit error\n      </Text>\n    </SafeAreaView>\n  )\n}\n")),(0,o.kt)("p",null,"\"Now, all notifications in the application will be 400 pixels wide because we've set the ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationWidth"),' value to 400."'),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"set-the-position-locally-inside-config-object-in-a-single-notification-instance"},"Set the position locally inside config object in a single notification instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { SafeAreaView, Text } from 'react-native'\nimport { createNotifications } from 'react-native-notificated'\nimport { styles } from './styles'\n\nconst { NotificationsProvider, useNotifications } = createNotifications({\n  notificationWidth: 400,\n})\n\nexport const ExampleNotification = () => {\n  const { notify } = useNotifications()\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <NotificationsProvider />\n      <Text\n        onPress={() =>\n          notify('error', {\n            params: {\n              description: 'This is where the toast text goes',\n              title: 'Error',\n            },\n            config: {\n              notificationWidth: 500,\n            },\n          })\n        }>\n        Emit error\n      </Text>\n    </SafeAreaView>\n  )\n}\n")),(0,o.kt)("p",null,"Now, all notifications in the app will be displayed with a width of 400 pixels, except for the ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," notification mentioned in the previous example.",(0,o.kt)("br",null),"\nThat ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," notification will have a width of 500 pixels because local configuration overrides the global setting.",(0,o.kt)("br",null),"\nOf course, if you prefer, you can set the width locally without adjusting the global setting.",(0,o.kt)("br",null),"\n(You can read more about props overwriting in the ",(0,o.kt)("a",{parentName:"p",href:"../comprehensive-configuration/order-of-settings-overwriting"},"ORDER OF SETTINGS OVERWRITING")," section)"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"-width-config-priority"},"\ud83d\udd26 Width config priority"),(0,o.kt)("p",null,"For each subsequent notification, the library looks for a notification width in the following order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, it looks for a config defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"notify")," payload"),(0,o.kt)("li",{parentName:"ol"},"Secondly, it looks for a global config from ",(0,o.kt)("inlineCode",{parentName:"li"},"createNotification")),(0,o.kt)("li",{parentName:"ol"},"At last, when no config is found, it uses the default behavior, which is 343 pixels")),(0,o.kt)("br",null))}p.isMDXComponent=!0}}]);