(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,r){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function i(t,e){switch(n(e)){case"Function":return"function() { [native code] }";default:return e}}function s(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];console[t].apply(console,r)}function a(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var s=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var a=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(o){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var r=n(t).toUpperCase();t="NUMBER"===r||"BOOLEAN"===r?"---BEGIN:"+r+"---"+t+"---END:"+r+"---":String(t)}return t})),u="";if(a.length>1){var c=a.pop();u=a.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=a[0];console[s](u)}r.r(e),r.d(e,"log",(function(){return s})),r.d(e,"default",(function(){return a}))},"1ef5":function(t,e,r){"use strict";r.r(e);var n=r("aed3"),o=r("2f86");for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);var s=r("f0c5"),a=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=a.exports},"2f86":function(t,e,r){"use strict";r.r(e);var n=r("df60"),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"31e2":function(t,e,r){(function(e){var r;r="iOS"==plus.os.name,t.exports={judgeIosPermission:function(t){return"location"==t?function(){var t,r=plus.ios.import("CLLocationManager"),n=r.authorizationStatus();return t=2!=n,e("log","\u5b9a\u4f4d\u6743\u9650\u5f00\u542f\uff1a"+t," at js_sdk/wa-permission/permission.js:48"),plus.ios.deleteObject(r),t}():"camera"==t?function(){var t=!1,r=plus.ios.import("AVCaptureDevice"),n=r.authorizationStatusForMediaType("vide");return e("log","authStatus:"+n," at js_sdk/wa-permission/permission.js:86"),3==n?(t=!0,e("log","\u76f8\u673a\u6743\u9650\u5df2\u7ecf\u5f00\u542f"," at js_sdk/wa-permission/permission.js:89")):e("log","\u76f8\u673a\u6743\u9650\u6ca1\u6709\u5f00\u542f"," at js_sdk/wa-permission/permission.js:91"),plus.ios.deleteObject(r),t}():"photoLibrary"==t?function(){var t=!1,r=plus.ios.import("PHPhotoLibrary"),n=r.authorizationStatus();return e("log","authStatus:"+n," at js_sdk/wa-permission/permission.js:102"),3==n?(t=!0,e("log","\u76f8\u518c\u6743\u9650\u5df2\u7ecf\u5f00\u542f"," at js_sdk/wa-permission/permission.js:105")):e("log","\u76f8\u518c\u6743\u9650\u6ca1\u6709\u5f00\u542f"," at js_sdk/wa-permission/permission.js:107"),plus.ios.deleteObject(r),t}():"record"==t?function(){var t=!1,r=plus.ios.import("AVAudioSession"),n=r.sharedInstance(),o=n.recordPermission();return e("log","permissionStatus:"+o," at js_sdk/wa-permission/permission.js:70"),1684369017==o||1970168948==o?e("log","\u9ea6\u514b\u98ce\u6743\u9650\u6ca1\u6709\u5f00\u542f"," at js_sdk/wa-permission/permission.js:72"):(t=!0,e("log","\u9ea6\u514b\u98ce\u6743\u9650\u5df2\u7ecf\u5f00\u542f"," at js_sdk/wa-permission/permission.js:75")),plus.ios.deleteObject(r),t}():"push"==t?function(){var t=!1,r=plus.ios.import("UIApplication"),n=r.sharedApplication(),o=0;if(n.currentUserNotificationSettings){var i=n.currentUserNotificationSettings();o=i.plusGetAttribute("types"),e("log","enabledTypes1:"+o," at js_sdk/wa-permission/permission.js:19"),0==o?e("log","\u63a8\u9001\u6743\u9650\u6ca1\u6709\u5f00\u542f"," at js_sdk/wa-permission/permission.js:21"):(t=!0,e("log","\u5df2\u7ecf\u5f00\u542f\u63a8\u9001\u529f\u80fd!"," at js_sdk/wa-permission/permission.js:24")),plus.ios.deleteObject(i)}else o=n.enabledRemoteNotificationTypes(),0==o?e("log","\u63a8\u9001\u6743\u9650\u6ca1\u6709\u5f00\u542f!"," at js_sdk/wa-permission/permission.js:30"):(t=!0,e("log","\u5df2\u7ecf\u5f00\u542f\u63a8\u9001\u529f\u80fd!"," at js_sdk/wa-permission/permission.js:33")),e("log","enabledTypes2:"+o," at js_sdk/wa-permission/permission.js:35");return plus.ios.deleteObject(n),plus.ios.deleteObject(r),t}():"contact"==t?function(){var t=!1,r=plus.ios.import("CNContactStore"),n=r.authorizationStatusForEntityType(0);return 3==n?(t=!0,e("log","\u901a\u8baf\u5f55\u6743\u9650\u5df2\u7ecf\u5f00\u542f"," at js_sdk/wa-permission/permission.js:120")):e("log","\u901a\u8baf\u5f55\u6743\u9650\u6ca1\u6709\u5f00\u542f"," at js_sdk/wa-permission/permission.js:122"),plus.ios.deleteObject(r),t}():"calendar"==t?function(){var t=!1,r=plus.ios.import("EKEventStore"),n=r.authorizationStatusForEntityType(0);return 3==n?(t=!0,e("log","\u65e5\u5386\u6743\u9650\u5df2\u7ecf\u5f00\u542f"," at js_sdk/wa-permission/permission.js:135")):e("log","\u65e5\u5386\u6743\u9650\u6ca1\u6709\u5f00\u542f"," at js_sdk/wa-permission/permission.js:137"),plus.ios.deleteObject(r),t}():"memo"==t&&function(){var t=!1,r=plus.ios.import("EKEventStore"),n=r.authorizationStatusForEntityType(1);return 3==n?(t=!0,e("log","\u5907\u5fd8\u5f55\u6743\u9650\u5df2\u7ecf\u5f00\u542f"," at js_sdk/wa-permission/permission.js:150")):e("log","\u5907\u5fd8\u5f55\u6743\u9650\u6ca1\u6709\u5f00\u542f"," at js_sdk/wa-permission/permission.js:152"),plus.ios.deleteObject(r),t}()},requestAndroidPermission:function(t){return new Promise((function(r,n){plus.android.requestPermissions([t],(function(t){for(var n=0,o=0;o<t.granted.length;o++){var i=t.granted[o];e("log","\u5df2\u83b7\u53d6\u7684\u6743\u9650\uff1a"+i," at js_sdk/wa-permission/permission.js:167"),n=1}for(o=0;o<t.deniedPresent.length;o++){var s=t.deniedPresent[o];e("log","\u62d2\u7edd\u672c\u6b21\u7533\u8bf7\u7684\u6743\u9650\uff1a"+s," at js_sdk/wa-permission/permission.js:172"),n=0}for(o=0;o<t.deniedAlways.length;o++){var a=t.deniedAlways[o];e("log","\u6c38\u4e45\u62d2\u7edd\u7533\u8bf7\u7684\u6743\u9650\uff1a"+a," at js_sdk/wa-permission/permission.js:177"),n=-1}r(n)}),(function(t){e("log","\u7533\u8bf7\u6743\u9650\u9519\u8bef\uff1a"+t.code+" = "+t.message," at js_sdk/wa-permission/permission.js:187"),r({code:t.code,message:t.message})}))}))},checkSystemEnableLocation:function(){if(r){var t=!1,n=plus.ios.import("CLLocationManager");t=n.locationServicesEnabled();return e("log","\u7cfb\u7edf\u5b9a\u4f4d\u5f00\u542f:"+t," at js_sdk/wa-permission/permission.js:253"),plus.ios.deleteObject(n),t}var o=plus.android.importClass("android.content.Context"),i=plus.android.importClass("android.location.LocationManager"),s=plus.android.runtimeMainActivity(),a=s.getSystemService(o.LOCATION_SERVICE);return t=a.isProviderEnabled(i.GPS_PROVIDER),e("log","\u7cfb\u7edf\u5b9a\u4f4d\u5f00\u542f:"+t," at js_sdk/wa-permission/permission.js:262"),t},gotoAppPermissionSetting:function(){if(r){var t=plus.ios.import("UIApplication"),e=t.sharedApplication(),n=plus.ios.import("NSURL"),o=n.URLWithString("app-settings:");e.openURL(o),plus.ios.deleteObject(o),plus.ios.deleteObject(n),plus.ios.deleteObject(e)}else{var i=plus.android.importClass("android.content.Intent"),s=plus.android.importClass("android.provider.Settings"),a=plus.android.importClass("android.net.Uri"),u=plus.android.runtimeMainActivity(),c=new i;c.setAction(s.ACTION_APPLICATION_DETAILS_SETTINGS);var l=a.fromParts("package",u.getPackageName(),null);c.setData(l),u.startActivity(c)}}}}).call(this,r("0de9")["default"])},"43bf":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.requireNativePlugin("callforwarding"),o={data:function(){return{phone:""}},onLoad:function(){},methods:{handleSetup:function(){this.phone?n.setOverallSituationPhone({phone:this.phone}):uni.showToast({title:"\u8bf7\u8f93\u5165\u6765\u7535\u8f6c\u79fb\u7535\u8bdd",icon:"error"})},handleExit:function(){uni.reLaunch({url:"../login/index"})}}};e.default=o},4744:function(t,e,r){"use strict";r.r(e);var n=r("e39d");for(var o in n)["default"].indexOf(o)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(o);var i=r("f0c5"),s=Object(i["a"])(n["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=s.exports},"4ea4":function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports["default"]=t.exports},"584d":function(t,e,r){"use strict";r.r(e);var n=r("43bf"),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},7037:function(t,e){function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports["default"]=t.exports},"7ec2":function(t,e,r){var n=r("7037")["default"];function o(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(C){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new E(n||[]);return s(i,"_invoke",{value:O(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}e.wrap=p;var h={};function v(){}function m(){}function g(){}var y={};f(y,u,(function(){return this}));var _=Object.getPrototypeOf,b=_&&_(_(P([])));b&&b!==r&&i.call(b,u)&&(y=b);var w=g.prototype=v.prototype=Object.create(y);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var r;s(this,"_invoke",{value:function(o,s){function a(){return new e((function(r,a){(function r(o,s,a,u){var c=d(t[o],t,s);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)})(o,s,r,a)}))}return r=r?r.then(a,a):a()}})}function O(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var s=r.delegate;if(s){var a=A(s,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function A(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator["return"]&&(e.method="return",e.arg=void 0,A(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=g,s(w,"constructor",{value:g,configurable:!0}),s(g,"constructor",{value:m,configurable:!0}),m.displayName=f(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},j(x.prototype),f(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var s=new x(p(t,r,n,o),i);return e.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},j(w),f(w,l,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=o,t.exports.__esModule=!0,t.exports["default"]=t.exports},"8bbf":function(t,e){t.exports=Vue},9523:function(t,e,r){var n=r("a395");t.exports=function(t,e,r){return e=n(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports["default"]=t.exports},a34a:function(t,e,r){var n=r("7037"),o=r("7ec2")();t.exports=o;try{regeneratorRuntime=o}catch(i){"object"===("undefined"===typeof globalThis?"undefined":n(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},a395:function(t,e,r){var n=r("7037")["default"],o=r("e50d");t.exports=function(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)},t.exports.__esModule=!0,t.exports["default"]=t.exports},aed3:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",{staticClass:t._$s(0,"sc","login"),attrs:{_i:0}},[r("div",{staticClass:t._$s(1,"sc","login-form"),attrs:{_i:1}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:t._$s(2,"sc","u-input login-form-item"),attrs:{_i:2},domProps:{value:t._$s(2,"v-model",t.username)},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:t._$s(3,"sc","u-input login-form-item"),attrs:{_i:3},domProps:{value:t._$s(3,"v-model",t.password)},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("div",{staticClass:t._$s(4,"sc","login-console"),attrs:{_i:4}},[r("button",{staticClass:t._$s(5,"sc","login-console-button u-button"),attrs:{_i:5},on:{click:t.handleLogon}})])])},o=[]},bf87:function(t,e,r){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var n=uni.requireGlobal();ArrayBuffer=n.ArrayBuffer,Int8Array=n.Int8Array,Uint8Array=n.Uint8Array,Uint8ClampedArray=n.Uint8ClampedArray,Int16Array=n.Int16Array,Uint16Array=n.Uint16Array,Int32Array=n.Int32Array,Uint32Array=n.Uint32Array,Float32Array=n.Float32Array,Float64Array=n.Float64Array,BigInt64Array=n.BigInt64Array,BigUint64Array=n.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/login/index",(function(){return Vue.extend(r("1ef5").default)})),__definePage("pages/home/index",(function(){return Vue.extend(r("e2f6").default)}))},c973:function(t,e){function r(t,e,r,n,o,i,s){try{var a=t[i](s),u=a.value}catch(c){return void r(c)}a.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var s=t.apply(e,n);function a(t){r(s,o,i,a,u,"next",t)}function u(t){r(s,o,i,a,u,"throw",t)}a(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},de0b:function(t,e,r){"use strict";var n=r("4ea4"),o=n(r("9523"));r("bf87");var i=n(r("8bbf")),s=n(r("4744"));function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}i.default.config.productionTip=!1,s.default.mpType="app";var u=new i.default(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){(0,o.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},s.default));u.$mount()},dee3:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",{staticClass:t._$s(0,"sc","home"),attrs:{_i:0}},[r("div",{staticClass:t._$s(1,"sc","home-exit"),attrs:{_i:1}},[r("icon",{staticClass:t._$s(2,"sc","home-exit-button e-icon"),attrs:{_i:2},on:{click:t.handleExit}})]),r("div",{staticClass:t._$s(3,"sc","home-form"),attrs:{_i:3}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:t._$s(4,"sc","u-input home-form-item"),attrs:{_i:4},domProps:{value:t._$s(4,"v-model",t.phone)},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),r("div",{staticClass:t._$s(5,"sc","home-console"),attrs:{_i:5}},[r("button",{staticClass:t._$s(6,"sc","home-console-button s-button"),attrs:{_i:6},on:{click:t.handleSetup}})])])},o=[]},df60:function(t,e,r){"use strict";var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r("a34a")),i=n(r("c973")),s=r("e657"),a=n(r("31e2")),u={data:function(){return{username:"",password:""}},onLoad:function(){this.initLogin(),this.obtainingAuthorization()},methods:{handleLogon:function(){var t=this;return(0,i.default)(o.default.mark((function e(){var r,n;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.username&&t.password){e.next=3;break}return uni.showToast({title:"\u8bf7\u8f93\u5165\u8d26\u53f7\u6216\u5bc6\u7801",icon:"error"}),e.abrupt("return");case 3:return r={username:t.username,password:t.password},e.next=6,(0,s.Login)(r);case 6:n=e.sent,n&&uni.reLaunch({url:"../home/index"});case 8:case"end":return e.stop()}}),e)})))()},initLogin:function(){},obtainingAuthorization:function(){return(0,i.default)(o.default.mark((function t(){var e,r;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.default.requestAndroidPermission("android.permission.CALL_PHONE");case 2:e=t.sent,r=1==e?"\u5df2\u83b7\u5f97\u6388\u6743":0==e?"\u672a\u83b7\u5f97\u6388\u6743":"\u88ab\u6c38\u4e45\u62d2\u7edd\u6743\u9650",uni.showModal({content:"android.permission.CALL_PHONE"+r,showCancel:!1});case 5:case"end":return t.stop()}}),t)})))()}}};e.default=u},e2f6:function(t,e,r){"use strict";r.r(e);var n=r("dee3"),o=r("584d");for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);var s=r("f0c5"),a=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=a.exports},e39d:function(t,e,r){"use strict";r.r(e);var n=r("fe47"),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},e50d:function(t,e,r){var n=r("7037")["default"];t.exports=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},e657:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Login=function(t){var e=t.username,r=t.password;if("admin"!==e)return void uni.showToast({title:"\u8d26\u53f7\u9519\u8bef!",icon:"error"});if("123"!==r)return void uni.showToast({title:"\u5bc6\u7801\u9519\u8bef!",icon:"error"});return Promise.resolve({token:"123",username:"\u7ba1\u7406\u5458"})}},f0c5:function(t,e,r){"use strict";function n(t,e,r,n,o,i,s,a,u,c){var l,f="function"===typeof t?t.options:t;if(u){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in u)p.call(u,d)&&!p.call(f.components,d)&&(f.components[d]=u[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=r,f._compiled=!0),n&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(f.functional){f._injectStyles=l;var h=f.render;f.render=function(t,e){return l.call(e),h(t,e)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:f}}r.d(e,"a",(function(){return n}))},fe47:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=r}).call(this,r("0de9")["default"])}},[["de0b","app-config"]]]);