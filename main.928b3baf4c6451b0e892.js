!function(t){function e(e){for(var n,a,c=e[0],u=e[1],l=e[2],s=0,p=[];s<c.length;s++)a=c[s],o[a]&&p.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(f&&f(e);p.length;)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={4:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=n);var i=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(t){return a.p+""+({}[t]||t)+"."+{0:"2819d67d3c9024e92385",1:"a4d9577a6e791c05a2e2",2:"076cb6472f35ae90483c"}[t]+".js"}(t);var u=setTimeout(function(){l({type:"timeout",target:c})},12e4);function l(e){c.onerror=c.onload=null,clearTimeout(u);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");a.type=n,a.request=i,r[1](a)}o[t]=void 0}}c.onerror=c.onload=l,i.appendChild(c)}return Promise.all(e)},a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;i.push([24,3]),r()}([,,function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return o});var n="FETCH_DATA_SUCCESS",o="SET_SELECTED_ACCOUNT"},,function(t,e,r){"use strict";r.d(e,"a",function(){return c}),r.d(e,"c",function(){return u}),r.d(e,"b",function(){return l});var n=r(2);function o(t){"@babel/helpers - typeof";return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:A(t,r,c)}),i}function y(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",h="suspendedYield",v="executing",m="completed",g={};function b(){}function w(){}function _(){}var j={};s(j,u,function(){return this});var E=Object.getPrototypeOf,O=E&&E(E(C([])));O&&O!==r&&n.call(O,u)&&(j=O);var x=_.prototype=b.prototype=Object.create(j);function S(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function P(t,e){function r(i,a,c,u){var l=y(t[i],t,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==o(s)&&n.call(s,"__await")?e.resolve(s.__await).then(function(t){r("next",t,c,u)},function(t){r("throw",t,c,u)}):e.resolve(s).then(function(t){f.value=t,c(f)},function(t){return r("throw",t,c,u)})}u(l.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new e(function(e,o){r(t,n,e,o)})}return i=i?i.then(o,o):o()}})}function A(e,r,n){var o=d;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=L(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=y(e,r,n);if("normal"===l.type){if(o=n.done?m:h,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function L(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=y(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(o(e)+" is not iterable")}return w.prototype=_,a(x,"constructor",{value:_,configurable:!0}),a(_,"constructor",{value:w,configurable:!0}),w.displayName=s(_,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s(t,f,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},S(P.prototype),s(P.prototype,l,function(){return this}),e.AsyncIterator=P,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new P(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},S(x),s(x,f,"Generator"),s(x,u,function(){return this}),s(x,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;D(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var c=function(){var t=function(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)})}}(i().mark(function t(e,r){var o,a,c;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=r.accounts,a=r.prefDocuments,c=o.reduce(function(t,e){var r=a.find(function(t){return t.account_key===e.key});return t[e.key]={accountName:e.description+" "+("IMA"!==e.typeDesc?e.id.slice(0,3)+"-"+e.id.slice(3):e.id)+" "+e.typeDesc,docs:r.docs},t},{}),e({type:n.a,payload:{finalData:c}});case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),u=function(t,e){t({type:n.b,payload:e})},l=function(t,e){var r=e.data;t({type:n.b,payload:r.default_accounts[0].account_key})}},function(t,e,r){"use strict";var n=r(0),o=r.n(n);const i={data:{default_accounts:[{preference_type:"EquityTrading",account_key:"NrjT8DvwYNWu3lJjUBDvw3TKqIkSHo3FNO3IfP3nH4Y=",currency_code:"CAD"}]},notifications:[]};var a={defaultAccount:i,accounts:[{id:"11112345",key:"NrjT8DvwYNWu3lJjUBDvw3TKqIkSHo3FNO3IfP3nH4Y=",description:"Company A",type:"1",typeDesc:"TFSA",currencyCode:null},{id:"11112346",key:"S2KYccuaQwcv_ThMlFRRNXc1wAEecPHMu7O8kB_Phcw=",description:"Company B",type:"2",typeDesc:"Margin",currencyCode:null},{id:"11112347",key:"LiKvx-bfXeb8os2P4fjUMIfQgeZTeYzMDNCqqSxp904=",description:"Company C",type:"1",typeDesc:"RRSP",currencyCode:null},{id:"11111T",key:"_ew_Muidp2ai62bo45_QGnU2mGKn66D_ocAZepW_CaM=",description:"Company D - IMA",type:"1",typeDesc:"IMA",currencyCode:null},{id:"11112348",key:"ps7jCLmR5M1ZiED5tpBwjJyuXzSmrjs7N73Y-0ckd7c=",description:"Company E",type:"1",typeDesc:"",currencyCode:null}],prefDocuments:[{account_key:"NrjT8DvwYNWu3lJjUBDvw3TKqIkSHo3FNO3IfP3nH4Y=",docs:[{document_type:"A",is_paper_flag:!1},{document_type:"C",is_paper_flag:!1},{document_type:"S",is_paper_flag:!1},{document_type:"T",is_paper_flag:!1}]},{account_key:"S2KYccuaQwcv_ThMlFRRNXc1wAEecPHMu7O8kB_Phcw=",docs:[{document_type:"T",is_paper_flag:!1},{document_type:"A",is_paper_flag:!1},{document_type:"C",is_paper_flag:!1},{document_type:"S",is_paper_flag:!1}]},{account_key:"LiKvx-bfXeb8os2P4fjUMIfQgeZTeYzMDNCqqSxp904=",docs:[{document_type:"A",is_paper_flag:!1},{document_type:"C",is_paper_flag:!1},{document_type:"S",is_paper_flag:!1},{document_type:"T",is_paper_flag:!1}]},{account_key:"_ew_Muidp2ai62bo45_QGnU2mGKn66D_ocAZepW_CaM=",docs:[{document_type:"ALL",is_paper_flag:!1}]},{account_key:"ps7jCLmR5M1ZiED5tpBwjJyuXzSmrjs7N73Y-0ckd7c=",docs:[{document_type:"ALL",is_paper_flag:!1}]}]},c=r(4),u=r(2);function l(t){"@babel/helpers - typeof";return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach(function(e){p(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function p(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==l(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y={accounts:{},selectedAccount:""},d={accountsReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u.a:return s(s({},t),{},{accounts:e.payload.finalData});case u.b:return s(s({},t),{},{selectedAccount:e.payload});default:return t}},initialState:y};function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",function(){return m}),r.d(e,"b",function(){return g});var m=Object(n.createContext)(null),g=Object(n.createContext)(null),b=d.accountsReducer,w=d.initialState;e.c=function(t){var e=t.children;Object(n.useEffect)(function(){Object(c.a)(l,a),Object(c.b)(l,i)},[]);var r=h(Object(n.useReducer)(b,w),2),u=r[0],l=r[1];return o.a.createElement(m.Provider,{value:u},o.a.createElement(g.Provider,{value:l},e))}},,,,,,,,function(t,e,r){"use strict";r.r(e);var n,o=r(0),i=r.n(o),a=r(12),c=r.n(a),u=(r(19),r(16),{AccountsProvider:r(5).c}),l=function(){return i.a.createElement("header",{className:"App-header",role:"banner"},i.a.createElement("h1",{className:"App-title",id:"main-heading"},"Demo Account and Document Preference Delivery"))};var f=r(26).a.div(n||(n=function(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n    width: 75%;\n    margin: 10px;\n    border: 1px solid #e8e8e8;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    padding: 20px;\n"]))),s=Object(o.lazy)(function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,28))}),p=Object(o.lazy)(function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,25))}),y=u.AccountsProvider,d=function(){return i.a.createElement(y,null,i.a.createElement("div",{className:"App"},i.a.createElement(l,null),i.a.createElement("main",{role:"main"},i.a.createElement("div",{className:"container"},i.a.createElement(f,{role:"region"},i.a.createElement(o.Suspense,{fallback:i.a.createElement("div",null,"Loading...")},i.a.createElement(s,null))),i.a.createElement(f,{role:"region","aria-label":"Account Table"},i.a.createElement(o.Suspense,{fallback:i.a.createElement("div",null,"Loading...")},i.a.createElement(p,null)))))))};c.a.render(i.a.createElement(d,null),document.getElementById("root"))},,function(t,e,r){(t.exports=r(7)(!1)).push([t.i,".App {\n    text-align: center;\n}\n\n.App-header {\n    background-color: #647882;\n    height: 50px;\n    padding: 20px;\n    color: white;\n}\n\n.App-title {\n    font-size: 1.2em;\n}\n\n.App-intro {\n    font-size: large;\n}\n\n.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n\n.detailsdiv {\n    min-height: 200px;\n}\n",""])},function(t,e,r){var n=r(15);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,o);n.locals&&(t.exports=n.locals)},,function(t,e,r){(t.exports=r(7)(!1)).push([t.i,"body {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n}",""])},function(t,e,r){var n=r(18);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,o);n.locals&&(t.exports=n.locals)},,,,,function(t,e,r){t.exports=r(13)}]);