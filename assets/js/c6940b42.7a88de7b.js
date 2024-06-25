"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[261],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||r;return n?i.createElement(d,a(a({ref:t},c),{},{components:n})):i.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9812:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l}});var i=n(3117),o=(n(7294),n(3905));const r={sidebar_position:7},a="\ud83d\udced Push notifications example",s={unversionedId:"intro/examples/push-notifications-example",id:"intro/examples/push-notifications-example",title:"\ud83d\udced Push notifications example",description:"Here's an example of how you can handle push notifications in your application (when in foreground) using Firebase",source:"@site/docs/intro/examples/push-notifications-example.md",sourceDirName:"intro/examples",slug:"/intro/examples/push-notifications-example",permalink:"/react-native-notificated/docs/intro/examples/push-notifications-example",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"intro",previous:{title:"\ud83d\udd25 Redux example",permalink:"/react-native-notificated/docs/intro/examples/redux-example"},next:{title:"\ud83d\udd14 Notifcation In Modal Example",permalink:"/react-native-notificated/docs/intro/examples/notification-in-modal-example"}},p={},l=[{value:"\ud83d\udca1 Setup",id:"-setup",level:2},{value:"\ud83d\udc40 Example Implementation",id:"-example-implementation",level:2},{value:"App in Foreground",id:"app-in-foreground",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-push-notifications-example"},"\ud83d\udced Push notifications example"),(0,o.kt)("p",null,"Here's an example of how you can handle push notifications in your application (when in foreground) using ",(0,o.kt)("a",{parentName:"p",href:"https://rnfirebase.io/"},"Firebase"),"\nLet's go then! \ud83d\udcaa"),(0,o.kt)("h2",{id:"-setup"},"\ud83d\udca1 Setup"),(0,o.kt)("p",null,"Before we jump into setup proccess, make sure that you have created a new firebase project. You will need it later to send push notifications. If you haven't done it yet, you can do it ",(0,o.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"here"),"."),(0,o.kt)("p",null,"With a new firebase project created, it's time to proceed with installation of these two packages that will be necessary to handle push notifications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rnfirebase.io/#prerequisites"},"@react-native-firebase")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rnfirebase.io/messaging/usage#installation"},"@react-native-firebase/messaging"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Documentation clearly describes the whole process of installation, so I will not focus on it here.\nBefore proceeding to the next step, make sure you have done all previous steps.")),(0,o.kt)("h2",{id:"-example-implementation"},"\ud83d\udc40 Example Implementation"),(0,o.kt)("h3",{id:"app-in-foreground"},"App in Foreground"),(0,o.kt)("p",null,"To handle push notifications in foreground we have to create a listener which will subscribe for all incoming firebase push events.\nWe can do this by using ",(0,o.kt)("inlineCode",{parentName:"p"},"messaging().onMessage()")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@react-native-firebase/messaging"),". Method ",(0,o.kt)("inlineCode",{parentName:"p"},"onMessage()")," takes an asynchronous function as a parameter, with an argument which is the push notification payload. Now we can use this data to set our in-app notification with a ",(0,o.kt)("inlineCode",{parentName:"p"},"notify()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// ** imports\nimport messaging from '@react-native-firebase/messaging'\nimport { useNotifications } from 'react-native-notificated'\n\nexport const App = () => {\n  const { notify } = useNotifications()\n\n  useEffect(() => {\n    const unsubscribe = messaging().onMessage(async (remoteMessage) => {\n      notify('info', {\n        params: {\n          title: remoteMessage.notification?.title || 'defalut title',\n          description: remoteMessage.notification?.body,\n        },\n      })\n    })\n\n    return unsubscribe\n  }, [notify])\n\n  return // Some JSX\n}\n")))}u.isMDXComponent=!0}}]);