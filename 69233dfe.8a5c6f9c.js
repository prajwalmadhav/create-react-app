/*! For license information please see 69233dfe.8a5c6f9c.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return f}));var r=n(1),o=n(9),a=(n(178),n(177)),s={id:"adding-a-css-modules-stylesheet",title:"Adding a CSS Modules Stylesheet",sidebar_label:"Adding CSS Modules"},u=[{value:"<code>Button.module.css</code>",id:"buttonmodulecss",children:[]},{value:"<code>another-stylesheet.css</code>",id:"another-stylesheetcss",children:[]},{value:"<code>Button.js</code>",id:"buttonjs",children:[]},{value:"Result",id:"result",children:[]}],c={id:"adding-a-css-modules-stylesheet",title:"Adding a CSS Modules Stylesheet",description:"> Note: this feature is available with `react-scripts@2.0.0` and higher.",source:"@site/../docs/adding-a-css-modules-stylesheet.md",permalink:"/docs/adding-a-css-modules-stylesheet",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/adding-a-css-modules-stylesheet.md",lastUpdatedBy:"Hardo",lastUpdatedAt:1546615104,sidebar_label:"Adding CSS Modules",sidebar:"docs",previous:{title:"Adding a Stylesheet",permalink:"/docs/adding-a-stylesheet"},next:{title:"Adding a Sass Stylesheet",permalink:"/docs/adding-a-sass-stylesheet"}},l={rightToc:u,metadata:c},i="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(i,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),Object(a.b)("p",null,"This project supports ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules"}),"CSS Modules")," alongside regular stylesheets using the ",Object(a.b)("inlineCode",{parentName:"p"},"[name].module.css")," file naming convention. CSS Modules allows the scoping of CSS by automatically creating a unique classname of the format ",Object(a.b)("inlineCode",{parentName:"p"},"[filename]\\_[classname]\\_\\_[hash]"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Tip:")," Should you want to preprocess a stylesheet with Sass then make sure to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/adding-a-sass-stylesheet"}),"follow the installation instructions")," and then change the stylesheet file extension as follows: ",Object(a.b)("inlineCode",{parentName:"p"},"[name].module.scss")," or ",Object(a.b)("inlineCode",{parentName:"p"},"[name].module.sass"),".")),Object(a.b)("p",null,"CSS Modules let you use the same CSS class name in different files without worrying about naming clashes. Learn more about CSS Modules ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://css-tricks.com/css-modules-part-1-need/"}),"here"),"."),Object(a.b)("h2",{id:"buttonmodulecss"},Object(a.b)("inlineCode",{parentName:"h2"},"Button.module.css")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".error {\n  background-color: red;\n}\n")),Object(a.b)("h2",{id:"another-stylesheetcss"},Object(a.b)("inlineCode",{parentName:"h2"},"another-stylesheet.css")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".error {\n  color: red;\n}\n")),Object(a.b)("h2",{id:"buttonjs"},Object(a.b)("inlineCode",{parentName:"h2"},"Button.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\nimport styles from './Button.module.css'; // Import css modules stylesheet as styles\nimport './another-stylesheet.css'; // Import regular stylesheet\n\nclass Button extends Component {\n  render() {\n    // reference as a js object\n    return <button className={styles.error}>Error Button</button>;\n  }\n}\n")),Object(a.b)("h2",{id:"result"},"Result"),Object(a.b)("p",null,"No clashes from other ",Object(a.b)("inlineCode",{parentName:"p"},".error")," class names"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- This button has red background but not red text --\x3e\n<button class="Button_error_ax7yz">Error Button</button>\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This is an optional feature.")," Regular ",Object(a.b)("inlineCode",{parentName:"p"},"<link>")," stylesheets and CSS files are fully supported. CSS Modules are turned on for files ending with the ",Object(a.b)("inlineCode",{parentName:"p"},".module.css")," extension."))}f.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r),a=o.a.createContext({}),s=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},u=function(e){var t=s(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},i=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),i=s(n),f=r,p=i[u+"."+f]||i[f]||l[f]||a;return n?o.a.createElement(p,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(p,Object.assign({},{ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=i;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:r,s[1]=u;for(var f=2;f<a;f++)s[f]=n[f];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";e.exports=n(179)},179:function(e,t,n){"use strict";var r=n(180),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,s=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,i=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function O(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||g}function v(){}function S(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=O.prototype;var w=S.prototype=new v;w.constructor=S,r(w,O.prototype),w.isPureReactComponent=!0;var C={current:null},k={current:null},_=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,o={},s=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(s=""+t.key),t)_.call(t,r)&&!N.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),i=0;i<c;i++)l[i]=arguments[i+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:s,ref:u,props:o,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,P=[];function $(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function T(e,t,n){return null==e?0:function e(t,n,r,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case s:c=!0}}if(c)return r(o,t,""===n?"."+A(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var i=n+A(u=t[l],l);c+=e(u,i,r,o)}else if(null===t||"object"!=typeof t?i=null:i="function"==typeof(i=y&&t[y]||t["@@iterator"])?i:null,"function"==typeof i)for(t=i.call(t),l=0;!(u=t.next()).done;)c+=e(u=u.value,i=n+A(u,l++),r,o);else if("object"===u)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function B(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function I(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(R,"$&/")+"/"),T(e,q,t=$(t,a,r,o)),M(t)}function U(){var e=C.current;if(null===e)throw Error(h(321));return e}var D={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return I(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,B,t=$(null,null,t,n)),M(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,n){return U().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,n){return U().useReducer(e,t,n)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:u,Profiler:l,StrictMode:c,Suspense:d,createElement:x,cloneElement:function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),s=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=k.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(i in t)_.call(t,i)&&!N.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==l?l[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){l=Array(i);for(var f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:s,ref:u,props:o,_owner:c}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r}},L={default:D},F=L&&D||L;e.exports=F.default||F},180:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,u,c=s(e),l=1;l<arguments.length;l++){for(var i in n=Object(arguments[l]))o.call(n,i)&&(c[i]=n[i]);if(r){u=r(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(c[u[f]]=n[u[f]])}}return c}}}]);