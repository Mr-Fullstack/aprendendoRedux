!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n=n||self).immer={})}(this,(function(n){function t(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[L]}function e(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===T}(n)||Array.isArray(n)||!!n[H]||!!n.constructor[H]||v(n)||s(n))}function i(n,t,r){void 0===r&&(r=!1),0===u(n)?(r?Object.keys:U)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function u(n){var t=n[L];return t?t.t>3?t.t-4:t.t:Array.isArray(n)?1:v(n)?2:s(n)?3:0}function o(n,t){return 2===u(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function f(n,t){return 2===u(n)?n.get(t):n[t]}function a(n,t,r){var e=u(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function v(n){return X&&n instanceof Map}function s(n){return q&&n instanceof Set}function l(n){return n.i||n.u}function p(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=V(n);delete t[L];for(var r=U(t),e=0;e<r.length;e++){var i=r[e],u=t[i];!1===u.writable&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(t[i]={configurable:!0,writable:!0,enumerable:u.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),t)}function d(n,t){return void 0===t&&(t=!1),y(n)||r(n)||!e(n)?n:(u(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),t&&i(n,(function(n,t){return d(t,!0)}),!0),n)}function h(){t(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function _(n){var r=Y[n];return r||t(18,n),r}function b(n,t){Y[n]||(Y[n]=t)}function m(){return N}function j(n,t){t&&(_("Patches"),n.o=[],n.v=[],n.s=t)}function O(n){w(n),n.l.forEach(P),n.l=null}function w(n){n===N&&(N=n.p)}function S(n){return N={l:[],p:N,h:n,_:!0,m:0}}function P(n){var t=n[L];0===t.t||1===t.t?t.j():t.O=!0}function M(n,r){r.m=r.l.length;var i=r.l[0],u=void 0!==n&&n!==i;return r.h.S||_("ES5").P(r,n,u),u?(i[L].M&&(O(r),t(4)),e(n)&&(n=g(r,n),r.p||x(r,n)),r.o&&_("Patches").g(i[L].u,n,r.o,r.v)):n=g(r,i,[]),O(r),r.o&&r.s(r.o,r.v),n!==G?n:void 0}function g(n,t,r){if(y(t))return t;var e=t[L];if(!e)return i(t,(function(i,u){return A(n,e,t,i,u,r)}),!0),t;if(e.A!==n)return t;if(!e.M)return x(n,e.u,!0),e.u;if(!e.R){e.R=!0,e.A.m--;var u=4===e.t||5===e.t?e.i=p(e.k):e.i;i(3===e.t?new Set(u):u,(function(t,i){return A(n,e,u,t,i,r)})),x(n,u,!1),r&&n.o&&_("Patches").F(e,r,n.o,n.v)}return e.i}function A(n,t,i,u,f,c){if(r(f)){var v=g(n,f,c&&t&&3!==t.t&&!o(t.D,u)?c.concat(u):void 0);if(a(i,u,v),!r(v))return;n._=!1}if(e(f)&&!y(f)){if(!n.h.K&&n.m<1)return;g(n,f),t&&t.A.p||x(n,f)}}function x(n,t,r){void 0===r&&(r=!1),n.h.K&&n._&&d(t,r)}function z(n,t){var r=n[L];return(r?l(r):n)[t]}function E(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r)}}function R(n){n.M||(n.M=!0,n.p&&R(n.p))}function k(n){n.i||(n.i=p(n.u))}function F(n,t,r){var e=v(t)?_("MapSet").$(t,r):s(t)?_("MapSet").C(t,r):n.S?function(n,t){var r=Array.isArray(n),e={t:r?1:0,A:t?t.A:m(),M:!1,R:!1,D:{},p:t,u:n,k:null,i:null,j:null,I:!1},i=e,u=Z;r&&(i=[e],u=nn);var o=Proxy.revocable(i,u),f=o.revoke,a=o.proxy;return e.k=a,e.j=f,a}(t,r):_("ES5").J(t,r);return(r?r.A:m()).l.push(e),e}function D(n){return r(n)||t(22,n),function n(t){if(!e(t))return t;var r,o=t[L],c=u(t);if(o){if(!o.M&&(o.t<4||!_("ES5").N(o)))return o.u;o.R=!0,r=K(t,c),o.R=!1}else r=K(t,c);return i(r,(function(t,e){o&&f(o.u,t)===e||a(r,t,n(e))})),3===c?new Set(r):r}(n)}function K(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return p(n)}function $(){function n(n,t){var r=f[n];return r?r.enumerable=t:f[n]=r={configurable:!0,enumerable:t,get:function(){return Z.get(this[L],n)},set:function(t){Z.set(this[L],n,t)}},r}function t(n){for(var t=n.length-1;t>=0;t--){var r=n[t][L];if(!r.M)switch(r.t){case 5:u(r)&&R(r);break;case 4:e(r)&&R(r)}}}function e(n){for(var t=n.u,r=n.k,e=U(r),i=e.length-1;i>=0;i--){var u=e[i];if(u!==L){var f=t[u];if(void 0===f&&!o(t,u))return!0;var a=r[u],v=a&&a[L];if(v?v.u!==f:!c(a,f))return!0}}var s=!!t[L];return e.length!==U(t).length+(s?0:1)}function u(n){var t=n.k;if(t.length!==n.u.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var e=0;e<t.length;e++)if(!t.hasOwnProperty(e))return!0;return!1}var f={};b("ES5",{J:function(t,r){var e=Array.isArray(t),i=function(t,r){if(t){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,n(i,!0));return e}var u=V(r);delete u[L];for(var o=U(u),f=0;f<o.length;f++){var a=o[f];u[a]=n(a,t||!!u[a].enumerable)}return Object.create(Object.getPrototypeOf(r),u)}(e,t),u={t:e?5:4,A:r?r.A:m(),M:!1,R:!1,D:{},p:r,u:t,k:i,i:null,O:!1,I:!1};return Object.defineProperty(i,L,{value:u,writable:!0}),i},P:function(n,e,f){f?r(e)&&e[L].A===n&&t(n.l):(n.o&&function n(t){if(t&&"object"==typeof t){var r=t[L];if(r){var e=r.u,f=r.k,a=r.D,c=r.t;if(4===c)i(f,(function(t){t!==L&&(void 0!==e[t]||o(e,t)?a[t]||n(f[t]):(a[t]=!0,R(r)))})),i(e,(function(n){void 0!==f[n]||o(f,n)||(a[n]=!1,R(r))}));else if(5===c){if(u(r)&&(R(r),a.length=!0),f.length<e.length)for(var v=f.length;v<e.length;v++)a[v]=!1;else for(var s=e.length;s<f.length;s++)a[s]=!0;for(var l=Math.min(f.length,e.length),p=0;p<l;p++)f.hasOwnProperty(p)||(a[p]=!0),void 0===a[p]&&n(f[p])}}}}(n.l[0]),t(n.l))},N:function(n){return 4===n.t?e(n):u(n)}})}function C(){function n(t){if(!e(t))return t;if(Array.isArray(t))return t.map(n);if(v(t))return new Map(Array.from(t.entries()).map((function(t){return[t[0],n(t[1])]})));if(s(t))return new Set(Array.from(t).map(n));var r=Object.create(Object.getPrototypeOf(t));for(var i in t)r[i]=n(t[i]);return o(t,H)&&(r[H]=t[H]),r}function a(t){return r(t)?n(t):t}var c="add";b("Patches",{W:function(r,e){return e.forEach((function(e){for(var i=e.path,o=e.op,a=r,v=0;v<i.length-1;v++){var s=u(a),l=""+i[v];0!==s&&1!==s||"__proto__"!==l&&"constructor"!==l||t(24),"function"==typeof a&&"prototype"===l&&t(24),"object"!=typeof(a=f(a,l))&&t(15,i.join("/"))}var p=u(a),d=n(e.value),h=i[i.length-1];switch(o){case"replace":switch(p){case 2:return a.set(h,d);case 3:t(16);default:return a[h]=d}case c:switch(p){case 1:return"-"===h?a.push(d):a.splice(h,0,d);case 2:return a.set(h,d);case 3:return a.add(d);default:return a[h]=d}case"remove":switch(p){case 1:return a.splice(h,1);case 2:return a.delete(h);case 3:return a.delete(e.value);default:return delete a[h]}default:t(17,o)}})),r},F:function(n,t,r,e){switch(n.t){case 0:case 4:case 2:return function(n,t,r,e){var u=n.u,v=n.i;i(n.D,(function(n,i){var s=f(u,n),l=f(v,n),p=i?o(u,n)?"replace":c:"remove";if(s!==l||"replace"!==p){var d=t.concat(n);r.push("remove"===p?{op:p,path:d}:{op:p,path:d,value:l}),e.push(p===c?{op:"remove",path:d}:"remove"===p?{op:c,path:d,value:a(s)}:{op:"replace",path:d,value:a(s)})}}))}(n,t,r,e);case 5:case 1:return function(n,t,r,e){var i=n.u,u=n.D,o=n.i;if(o.length<i.length){var f=[o,i];i=f[0],o=f[1];var v=[e,r];r=v[0],e=v[1]}for(var s=0;s<i.length;s++)if(u[s]&&o[s]!==i[s]){var l=t.concat([s]);r.push({op:"replace",path:l,value:a(o[s])}),e.push({op:"replace",path:l,value:a(i[s])})}for(var p=i.length;p<o.length;p++){var d=t.concat([p]);r.push({op:c,path:d,value:a(o[p])})}i.length<o.length&&e.push({op:"replace",path:t.concat(["length"]),value:i.length})}(n,t,r,e);case 3:return function(n,t,r,e){var i=n.u,u=n.i,o=0;i.forEach((function(n){if(!u.has(n)){var i=t.concat([o]);r.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}o++})),o=0,u.forEach((function(n){if(!i.has(n)){var u=t.concat([o]);r.push({op:c,path:u,value:n}),e.unshift({op:"remove",path:u,value:n})}o++}))}(n,t,r,e)}},g:function(n,t,r,e){r.push({op:"replace",path:[],value:t===G?void 0:t}),e.push({op:"replace",path:[],value:n})}})}function I(){function n(n,t){function r(){this.constructor=n}f(n,t),n.prototype=(r.prototype=t.prototype,new r)}function r(n){n.i||(n.D=new Map,n.i=new Map(n.u))}function u(n){n.i||(n.i=new Set,n.u.forEach((function(t){if(e(t)){var r=F(n.A.h,t,n);n.l.set(t,r),n.i.add(r)}else n.i.add(t)})))}function o(n){n.O&&t(3,JSON.stringify(l(n)))}var f=function(n,t){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},a=function(){function t(n,t){return this[L]={t:2,p:t,A:t?t.A:m(),M:!1,R:!1,i:void 0,D:void 0,u:n,k:this,I:!1,O:!1},this}n(t,Map);var u=t.prototype;return Object.defineProperty(u,"size",{get:function(){return l(this[L]).size}}),u.has=function(n){return l(this[L]).has(n)},u.set=function(n,t){var e=this[L];return o(e),l(e).has(n)&&l(e).get(n)===t||(r(e),R(e),e.D.set(n,!0),e.i.set(n,t),e.D.set(n,!0)),this},u.delete=function(n){if(!this.has(n))return!1;var t=this[L];return o(t),r(t),R(t),t.u.has(n)?t.D.set(n,!1):t.D.delete(n),t.i.delete(n),!0},u.clear=function(){var n=this[L];o(n),l(n).size&&(r(n),R(n),n.D=new Map,i(n.u,(function(t){n.D.set(t,!1)})),n.i.clear())},u.forEach=function(n,t){var r=this;l(this[L]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},u.get=function(n){var t=this[L];o(t);var i=l(t).get(n);if(t.R||!e(i))return i;if(i!==t.u.get(n))return i;var u=F(t.A.h,i,t);return r(t),t.i.set(n,u),u},u.keys=function(){return l(this[L]).keys()},u.values=function(){var n,t=this,r=this.keys();return(n={})[Q]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},u.entries=function(){var n,t=this,r=this.keys();return(n={})[Q]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},u[Q]=function(){return this.entries()},t}(),c=function(){function t(n,t){return this[L]={t:3,p:t,A:t?t.A:m(),M:!1,R:!1,i:void 0,u:n,k:this,l:new Map,O:!1,I:!1},this}n(t,Set);var r=t.prototype;return Object.defineProperty(r,"size",{get:function(){return l(this[L]).size}}),r.has=function(n){var t=this[L];return o(t),t.i?!!t.i.has(n)||!(!t.l.has(n)||!t.i.has(t.l.get(n))):t.u.has(n)},r.add=function(n){var t=this[L];return o(t),this.has(n)||(u(t),R(t),t.i.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[L];return o(t),u(t),R(t),t.i.delete(n)||!!t.l.has(n)&&t.i.delete(t.l.get(n))},r.clear=function(){var n=this[L];o(n),l(n).size&&(u(n),R(n),n.i.clear())},r.values=function(){var n=this[L];return o(n),u(n),n.i.values()},r.entries=function(){var n=this[L];return o(n),u(n),n.i.entries()},r.keys=function(){return this.values()},r[Q]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},t}();b("MapSet",{$:function(n,t){return new a(n,t)},C:function(n,t){return new c(n,t)}})}var J,N,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,G=W?Symbol.for("immer-nothing"):((J={})["immer-nothing"]=!0,J),H=W?Symbol.for("immer-draftable"):"__$immer_draftable",L=W?Symbol.for("immer-state"):"__$immer_state",Q="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",T=""+Object.prototype.constructor,U="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,V=Object.getOwnPropertyDescriptors||function(n){var t={};return U(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r)})),t},Y={},Z={get:function(n,t){if(t===L)return n;var r=l(n);if(!o(r,t))return function(n,t,r){var e,i=E(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,r,t);var i=r[t];return n.R||!e(i)?i:i===z(n.u,t)?(k(n),n.i[t]=F(n.A.h,i,n)):i},has:function(n,t){return t in l(n)},ownKeys:function(n){return Reflect.ownKeys(l(n))},set:function(n,t,r){var e=E(l(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(!n.M){var i=z(l(n),t),u=null==i?void 0:i[L];if(u&&u.u===r)return n.i[t]=r,n.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||o(n.u,t)))return!0;k(n),R(n)}return n.i[t]===r&&"number"!=typeof r&&(void 0!==r||t in n.i)||(n.i[t]=r,n.D[t]=!0,!0)},deleteProperty:function(n,t){return void 0!==z(n.u,t)||t in n.u?(n.D[t]=!1,k(n),R(n)):delete n.D[t],n.i&&delete n.i[t],!0},getOwnPropertyDescriptor:function(n,t){var r=l(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.t||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){t(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.u)},setPrototypeOf:function(){t(12)}},nn={};i(Z,(function(n,t){nn[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),nn.deleteProperty=function(n,t){return nn.set.call(this,n,t,void 0)},nn.set=function(n,t,r){return Z.set.call(this,n[0],t,r,n[0])};var tn=function(){function n(n){var r=this;this.S=B,this.K=!0,this.produce=function(n,i,u){if("function"==typeof n&&"function"!=typeof i){var o=i;i=n;var f=r;return function(n){var t=this;void 0===n&&(n=o);for(var r=arguments.length,e=Array(r>1?r-1:0),u=1;u<r;u++)e[u-1]=arguments[u];return f.produce(n,(function(n){var r;return(r=i).call.apply(r,[t,n].concat(e))}))}}var a;if("function"!=typeof i&&t(6),void 0!==u&&"function"!=typeof u&&t(7),e(n)){var c=S(r),v=F(r,n,void 0),s=!0;try{a=i(v),s=!1}finally{s?O(c):w(c)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return j(c,u),M(n,c)}),(function(n){throw O(c),n})):(j(c,u),M(a,c))}if(!n||"object"!=typeof n){if(void 0===(a=i(n))&&(a=n),a===G&&(a=void 0),r.K&&d(a,!0),u){var l=[],p=[];_("Patches").g(n,a,l,p),u(l,p)}return a}t(21,n)},this.produceWithPatches=function(n,t){if("function"==typeof n)return function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),u=1;u<e;u++)i[u-1]=arguments[u];return r.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(i))}))};var e,i,u=r.produce(n,t,(function(n,t){e=n,i=t}));return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(n){return[n,e,i]})):[u,e,i]},"boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze)}var i=n.prototype;return i.createDraft=function(n){e(n)||t(8),r(n)&&(n=D(n));var i=S(this),u=F(this,n,void 0);return u[L].I=!0,w(i),u},i.finishDraft=function(n,t){var r=(n&&n[L]).A;return j(r,t),M(void 0,r)},i.setAutoFreeze=function(n){this.K=n},i.setUseProxies=function(n){n&&!B&&t(20),this.S=n},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var u=_("Patches").W;return r(n)?u(n,t):this.produce(n,(function(n){return u(n,t)}))},n}(),rn=new tn,en=rn.produce,un=rn.produceWithPatches.bind(rn),on=rn.setAutoFreeze.bind(rn),fn=rn.setUseProxies.bind(rn),an=rn.applyPatches.bind(rn),cn=rn.createDraft.bind(rn),vn=rn.finishDraft.bind(rn);n.Immer=tn,n.applyPatches=an,n.castDraft=function(n){return n},n.castImmutable=function(n){return n},n.createDraft=cn,n.current=D,n.default=en,n.enableAllPlugins=function(){$(),I(),C()},n.enableES5=$,n.enableMapSet=I,n.enablePatches=C,n.finishDraft=vn,n.freeze=d,n.immerable=H,n.isDraft=r,n.isDraftable=e,n.nothing=G,n.original=function(n){return r(n)||t(23,n),n[L].u},n.produce=en,n.produceWithPatches=un,n.setAutoFreeze=on,n.setUseProxies=fn,Object.defineProperty(n,"__esModule",{value:!0})}));
//# sourceMappingURL=immer.umd.production.min.js.map
