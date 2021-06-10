(()=>{"use strict";var n={d:(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},e={};n.r(e),n.d(e,{addRule:()=>q,addRuleByGroup:()=>J,removeRule:()=>Q,validate:()=>K});var t={};function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}n.r(t),n.d(t,{email:()=>w,english:()=>g,external:()=>y,idCard:()=>O,intranet:()=>j,licensePlate:()=>x,number:()=>P,phone:()=>A,space:()=>k,tel:()=>E});var i=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),o(this,"rules",[])}var e,t,i;return e=n,i=[{key:"getInstance",value:function(){return n.instance||(n.instance=new n),n.instance}}],(t=[{key:"add",value:function(n,e){n&&e&&this.rules.push({name:n,validate:e})}},{key:"addByGroup",value:function(n){this.rules=this.rules.concat(n)}},{key:"remove",value:function(n){var e=this;if(n){var t=[];this.rules.forEach((function(e,r){n===e.name&&t.push(r)})),t.forEach((function(n){return e.rules.splice(n,1)}))}}}])&&r(e.prototype,t),i&&r(e,i),n}();o(i,"instance",void 0);var u={d:function(n,e){for(var t in e)u.o(e,t)&&!u.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o:function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}},a={};u.d(a,{Rx:function(){return c},FU:function(){return f},Hd:function(){return l},m7:function(){return s},sN:function(){return d},Do:function(){return v},aY:function(){return h},GW:function(){return p},vZ:function(){return m},Dh:function(){return b}});var c=/^([0-9])+$/,f=/^([A-Za-z])+$/,l=/^0\d{2,3}-?\d{5,8}$/,s=/^1[3|4|5|6|7|8|9][0-9]{9}$/,d=/^[a-zA-Z0-9\u4E00-\u9FA5]{7,8}$/,v=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,h=/^(1[1-5]{1}|2[1-3]{1}|3[1-7]{1}|4[1-6]{1}|5[0-4]{1}|6[1-5]{1}|71|8[1-2]{1}|91)[0-9]{4}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|30|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/,p=/^(https?:|mailto:|tel:)/,m=/^(127\.0\.0\.1)|(localhost)|(10\.\d{1,3}\.\d{1,3}\.\d{1,3})|(172\.((1[6-9])|(2\d)|(3[01]))\.\d{1,3}\.\d{1,3})|(192\.168\.\d{1,3}\.\d{1,3})/,b=/^[\s]*$/,w=a.Do,g=a.FU,y=a.GW,O=a.aY,j=a.vZ,x=a.sN,P=a.Rx,A=a.m7,k=a.Dh,E=a.Hd,$={d:function(n,e){for(var t in e)$.o(e,t)&&!$.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o:function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}},I={};$.d(I,{Lq:function(){return W},Yg:function(){return F},wv:function(){return _},ij:function(){return H},hM:function(){return Y},pG:function(){return T},kJ:function(){return Z},jn:function(){return B},xb:function(){return N},Ft:function(){return U},hj:function(){return M},Kn:function(){return z},HD:function(){return C},o8:function(){return D}});var R,S,G=function(n,e){return Object.prototype.toString.call(n)===e},U=function(n){return G(n,"[object Null]")},Z=function(n){return G(n,"[object Array]")},C=function(n){return G(n,"[object String]")},M=function(n){return G(n,"[object Number]")},z=function(n){return G(n,"[object Object]")},B=function(n){return G(n,"[object Boolean]")},D=function(n){return G(n,"[object Undefined]")},N=function(n){return!(!U(n)&&!D(n)&&(C(n)?-1===["Null","null"].indexOf(n)&&-1===["Undefined","undefined"].indexOf(n)&&n:Z(n)?n.length:!z(n)||Object.keys(n).length))},W=function(){if(!window)return"unknown";var n=window.navigator.userAgent.toLowerCase(),e=n.match(/MicroMessenger/i)||[],t=n.match(/AliPay/i)||[],r=n.match(/wxwork/i)||[];return"micromessenger"===e[0]&&"wxwork"===r[0]?"WXWORK":"micromessenger"===e[0]?"WECHAT":"alipay"===t[0]?"ALIPAY":"unknown"},F=function(){if(!window)return"unknown";var n=window.navigator.userAgent,e=n.indexOf("Android")>-1||n.indexOf("Adr")>-1,t=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);return e?"android":t?"ios":"unknown"},H=function(n){if(!window)return"";var e,t=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i"),r=window.location.hash,o=window.location.search;return o&&(e=o.substr(1).match(t)),!e&&r&&-1!==r.indexOf("?")&&(e=location.hash.substring(location.hash.indexOf("?")).substr(1).match(t)),e?decodeURIComponent(e[2]):""},T=function(n){var e={};return window?(n.forEach((function(n){e[n]=H(n)})),e):e},Y=function(){if(!window)return{};var n=location.hash,e=location.search,t="";e&&-1!==e.indexOf("?")&&(t=e.substr(1)),n&&-1!==n.indexOf("?")&&(t+="&".concat(location.hash.substring(location.hash.indexOf("?")).substr(1)));var r=t.split("&"),o={};return r?(r.forEach((function(n){if(n){var e=n.split("=")[0],t=n.split("=")[1];o[e]=t}})),o):o},_=function(){var n,e;return{promise:new Promise((function(t,r){n=t,e=r})),resolve:n,reject:e}},L=I.wv,X=I.xb;function K(n,e){var t=L(),r=t.promise,o=t.resolve;if(X(e))return Promise.resolve().then((function(){return o({valid:!0,message:"",error:null})})),r;var u=i.getInstance().rules,a=0,c=function t(){var r=e[a];if(r){var i=[],c=r.type,f=r.message,l=r.validate;i=(i=l?[l(n)]:[]).concat(u.filter((function(n){return n.name===c})).map((function(e){return e.validate(n)})));var s=Promise.all(i);s.then((function(){a++,t()})),s.catch((function(n){o({valid:!1,message:f,error:n})}))}else o({valid:!0,message:"",error:null})};return Promise.resolve().then((function(){return c()})),r}function q(n,e){i.getInstance().add(n,e)}function J(n){i.getInstance().addByGroup(n)}function Q(n){i.getInstance().remove(n)}R=i.getInstance(),S=Object.keys(t).map((function(n){return{name:n,validate:function(e){var r=t[n],o=L(),i=o.promise,u=o.resolve,a=o.reject;return r.test(e)||(console.warn("validator warning. [type:".concat(n,", value:").concat(e,"]")),a(new Error("validator warning. [type:".concat(n,", value:").concat(e,"]")))),u(!0),i}}})),R.addByGroup(S),module.exports=e})();