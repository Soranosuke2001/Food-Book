var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,v,m,g,y,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function _(e){return e&&e.__esModule?e.default:e}var w={},k={},S=b.parcelRequire4d88;null==S&&((S=function(e){if(e in w)return w[e].exports;if(e in k){var t=k[e];delete k[e];var r={id:e,exports:{}};return w[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){k[e]=t},b.parcelRequire4d88=S);var E={},F={},L=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
F=L("object"==typeof globalThis&&globalThis)||L("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
L("object"==typeof self&&self)||L("object"==typeof b&&b)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||F||Function("return this")();var O={},j={};// Detect IE8's incomplete defineProperty implementation
O=!(j=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var M={},$={};$=!j(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var P=Function.prototype.call;M=$?P.bind(P):function(){return P.apply(P,arguments)};var x={}.propertyIsEnumerable,T=Object.getOwnPropertyDescriptor;o=T&&!x.call({1:2},1)?function(e){var t=T(this,e);return!!t&&t.enumerable}:x;var H={};H=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var q={},I={},N={},A=Function.prototype,C=A.call,D=$&&A.bind.bind(C,C),R={},z=(N=$?D:function(e){return function(){return C.apply(e,arguments)}})({}.toString),W=N("".slice);R=function(e){return W(z(e),8,-1)};var G=Object,U=N("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
I=j(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!G("z").propertyIsEnumerable(0)})?function(e){return"String"===R(e)?U(e,""):G(e)}:G;var B={},J={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
J=function(e){return null==e};var Y=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
B=function(e){if(J(e))throw Y("Can't call method on "+e);return e},q=function(e){return I(B(e))};var Q={},V={},K={},X={},Z={},ee="object"==typeof document&&document.all,et=(Z={all:ee,IS_HTMLDDA:void 0===ee&&void 0!==ee}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
X=Z.IS_HTMLDDA?function(e){return"function"==typeof e||e===et}:function(e){return"function"==typeof e};var er=Z.all;K=Z.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:X(e)||e===er}:function(e){return"object"==typeof e?null!==e:X(e)};var en={},ei={};ei=function(e,t){var r;return arguments.length<2?(r=F[e],X(r)?r:void 0):F[e]&&F[e][t]};var eo={};eo=N({}.isPrototypeOf);var ea={},es={},ec={},eu={};eu="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var el=F.process,ed=F.Deno,ep=el&&el.versions||ed&&ed.version,ef=ep&&ep.v8;ef&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(s=(a=ef.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&eu&&(!(a=eu.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=eu.match(/Chrome\/(\d+)/))&&(s=+a[1]),ec=s;var eh=F.String;ea=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(es=!!Object.getOwnPropertySymbols&&!j(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!eh(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&ec&&ec<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ev=Object;en=ea?function(e){return"symbol"==typeof e}:function(e){var t=ei("Symbol");return X(t)&&eo(t.prototype,ev(e))};var em={},eg={},ey={},eb=String;ey=function(e){try{return eb(e)}catch(e){return"Object"}};var e_=TypeError;// `Assert: IsCallable(argument) is true`
eg=function(e){if(X(e))return e;throw e_(ey(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
em=function(e,t){var r=e[t];return J(r)?void 0:eg(r)};var ew={},ek=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
ew=function(e,t){var r,n;if("string"===t&&X(r=e.toString)&&!K(n=M(r,e))||X(r=e.valueOf)&&!K(n=M(r,e))||"string"!==t&&X(r=e.toString)&&!K(n=M(r,e)))return n;throw ek("Can't convert object to primitive value")};var eS={},eE={};eE=!1;var eF={},eL={},eO=Object.defineProperty;eL=function(e,t){try{eO(F,e,{value:t,configurable:!0,writable:!0})}catch(r){F[e]=t}return t};var ej="__core-js_shared__";eF=F[ej]||eL(ej,{}),(eS=function(e,t){return eF[e]||(eF[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.2",mode:eE?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var eM={},e$={},eP=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
e$=function(e){return eP(B(e))};var ex=N({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
eM=Object.hasOwn||function(e,t){return ex(e$(e),t)};var eT={},eH=0,eq=Math.random(),eI=N(1..toString);eT=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eI(++eH+eq,36)};var eN=F.Symbol,eA=eS("wks"),eC=ea?eN.for||eN:eN&&eN.withoutSetter||eT,eD=TypeError,eR=(eM(eA,e="toPrimitive")||(eA[e]=es&&eM(eN,e)?eN[e]:eC("Symbol."+e)),eA[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
V=function(e,t){if(!K(e)||en(e))return e;var r,n=em(e,eR);if(n){if(void 0===t&&(t="default"),r=M(n,e,t),!K(r)||en(r))return r;throw eD("Can't convert object to primitive value")}return void 0===t&&(t="number"),ew(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
Q=function(e){var t=V(e,"string");return en(t)?t:t+""};var ez={},eW={},eG=F.document,eU=K(eG)&&K(eG.createElement);eW=function(e){return eU?eG.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
ez=!O&&!j(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eW("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eB=Object.getOwnPropertyDescriptor;i=O?eB:function(e,t){if(e=q(e),t=Q(t),ez)try{return eB(e,t)}catch(e){}if(eM(e,t))return H(!M(o,e,t),e[t])};var eJ={},eY={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eY=O&&j(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eQ={},eV=String,eK=TypeError;// `Assert: Type(argument) is Object`
eQ=function(e){if(K(e))return e;throw eK(eV(e)+" is not an object")};var eX=TypeError,eZ=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,e1="enumerable",e2="configurable",e4="writable";c=O?eY?function(e,t,r){if(eQ(e),t=Q(t),eQ(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e4 in r&&!r[e4]){var n=e0(e,t);n&&n[e4]&&(e[t]=r.value,r={configurable:e2 in r?r[e2]:n[e2],enumerable:e1 in r?r[e1]:n[e1],writable:!1})}return eZ(e,t,r)}:eZ:function(e,t,r){if(eQ(e),t=Q(t),eQ(r),ez)try{return eZ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eX("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eJ=O?function(e,t,r){return c(e,t,H(1,r))}:function(e,t,r){return e[t]=r,e};var e3={},e7={},e8=Function.prototype,e9=O&&Object.getOwnPropertyDescriptor,e5=eM(e8,"name")&&(!O||O&&e9(e8,"name").configurable),e6={},te=N(Function.toString);X(eF.inspectSource)||(eF.inspectSource=function(e){return te(e)}),e6=eF.inspectSource;var tt={},tr={},tn=F.WeakMap;tr=X(tn)&&/native code/.test(String(tn));var ti={},to=eS("keys");ti=function(e){return to[e]||(to[e]=eT(e))};var ta={};ta={};var ts="Object already initialized",tc=F.TypeError,tu=F.WeakMap;if(tr||eF.state){var tl=eF.state||(eF.state=new tu);/* eslint-disable no-self-assign -- prototype methods protection */tl.get=tl.get,tl.has=tl.has,tl.set=tl.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(e,t){if(tl.has(e))throw tc(ts);return t.facade=e,tl.set(e,t),t},l=function(e){return tl.get(e)||{}},d=function(e){return tl.has(e)}}else{var tp=ti("state");ta[tp]=!0,u=function(e,t){if(eM(e,tp))throw tc(ts);return t.facade=e,eJ(e,tp,t),t},l=function(e){return eM(e,tp)?e[tp]:{}},d=function(e){return eM(e,tp)}}var tf=(tt={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!K(t)||(r=l(t)).type!==e)throw tc("Incompatible receiver, "+e+" required");return r}}}).enforce,th=tt.get,tv=String,tm=Object.defineProperty,tg=N("".slice),ty=N("".replace),tb=N([].join),t_=O&&!j(function(){return 8!==tm(function(){},"length",{value:8}).length}),tw=String(String).split("String"),tk=e7=function(e,t,r){"Symbol("===tg(tv(t),0,7)&&(t="["+ty(tv(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eM(e,"name")||e5&&e.name!==t)&&(O?tm(e,"name",{value:t,configurable:!0}):e.name=t),t_&&r&&eM(r,"arity")&&e.length!==r.arity&&tm(e,"length",{value:r.arity});try{r&&eM(r,"constructor")&&r.constructor?O&&tm(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return eM(n,"source")||(n.source=tb(tw,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tk(function(){return X(this)&&th(this).source||e6(this)},"toString"),e3=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(X(r)&&e7(r,o,n),n.global)i?e[t]=r:eL(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tS={},tE={},tF={},tL={},tO={},tj={},tM=Math.ceil,t$=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tj=Math.trunc||function(e){var t=+e;return(t>0?t$:tM)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tO=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tj(t)};var tP=Math.max,tx=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tL=function(e,t){var r=tO(e);return r<0?tP(r+t,0):tx(r,t)};var tT={},tH={},tq=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tH=function(e){return e>0?tq(tO(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tT=function(e){return tH(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tI=function(e){return function(t,r,n){var i,o=q(t),a=tT(o),s=tL(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tN={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tI(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tI(!1)}.indexOf,tA=N([].push);tF=function(e,t){var r,n=q(e),i=0,o=[];for(r in n)!eM(ta,r)&&eM(n,r)&&tA(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)eM(n,r=t[i++])&&(~tN(o,r)||tA(o,r));return o};var tC=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tF(e,tC)},f=Object.getOwnPropertySymbols;var tD=N([].concat);// all object keys, includes non-enumerable and symbols
tE=ei("Reflect","ownKeys")||function(e){var t=p(eQ(e));return f?tD(t,f(e)):t},tS=function(e,t,r){for(var n=tE(t),o=0;o<n.length;o++){var a=n[o];eM(e,a)||r&&eM(r,a)||c(e,a,i(t,a))}};var tR={},tz=/#|\.prototype\./,tW=function(e,t){var r=tU[tG(e)];return r===tJ||r!==tB&&(X(t)?j(t):!!t)},tG=tW.normalize=function(e){return String(e).replace(tz,".").toLowerCase()},tU=tW.data={},tB=tW.NATIVE="N",tJ=tW.POLYFILL="P";tR=tW,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/E=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?F:l?F[c]||eL(c,{}):(F[c]||{}).prototype)for(n in t){// contained in target
if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tR(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tS(a,o)}(e.sham||o&&o.sham)&&eJ(a,"sham",!0),e3(r,n,a,e)}};var tY={},tQ={},tV=Function.prototype,tK=tV.apply,tX=tV.call;// eslint-disable-next-line es/no-reflect -- safe
tQ="object"==typeof Reflect&&Reflect.apply||($?tX.bind(tK):function(){return tX.apply(tK,arguments)});var tZ={},t0={},t1=(t0=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===R(e))return N(e)})(t0.bind);// optional / simple context binding
tZ=function(e,t){return eg(e),void 0===t?e:$?t1(e,t):function(){return e.apply(t,arguments)}};var t2={};t2=ei("document","documentElement");var t4={};t4=N([].slice);var t3={},t7=TypeError;t3=function(e,t){if(e<t)throw t7("Not enough arguments");return e};var t8={};// eslint-disable-next-line redos/no-vulnerable -- safe
t8=/(?:ipad|iphone|ipod).*applewebkit/i.test(eu);var t9={};t9="process"===R(F.process);var t5=F.setImmediate,t6=F.clearImmediate,re=F.process,rt=F.Dispatch,rr=F.Function,rn=F.MessageChannel,ri=F.String,ro=0,ra={},rs="onreadystatechange";j(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
h=F.location});var rc=function(e){if(eM(ra,e)){var t=ra[e];delete ra[e],t()}},ru=function(e){return function(){rc(e)}},rl=function(e){rc(e.data)},rd=function(e){// old engines have not location.origin
F.postMessage(ri(e),h.protocol+"//"+h.host)};t5&&t6||(t5=function(e){t3(arguments.length,1);var t=X(e)?e:rr(e),r=t4(arguments,1);return ra[++ro]=function(){tQ(t,void 0,r)},v(ro),ro},t6=function(e){delete ra[e]},t9?v=function(e){re.nextTick(ru(e))}:rt&&rt.now?v=function(e){rt.now(ru(e))}:rn&&!t8?(g=(m=new rn).port2,m.port1.onmessage=rl,v=tZ(g.postMessage,g)):F.addEventListener&&X(F.postMessage)&&!F.importScripts&&h&&"file:"!==h.protocol&&!j(rd)?(v=rd,F.addEventListener("message",rl,!1)):v=rs in eW("script")?function(e){t2.appendChild(eW("script"))[rs]=function(){t2.removeChild(this),rc(e)}}:function(e){setTimeout(ru(e),0)});var rp=(tY={set:t5,clear:t6}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
E({global:!0,bind:!0,enumerable:!0,forced:F.clearImmediate!==rp},{clearImmediate:rp});var rf=tY.set,rh={},rv={};/* global Bun -- Deno case */rv="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rm=F.Function,rg=/MSIE .\./.test(eu)||rv&&((t=F.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rh=function(e,t){var r=t?2:1;return rg?function(n,i/* , ...arguments */){var o=t3(arguments.length,1)>r,a=X(n)?n:rm(n),s=o?t4(arguments,r):[],c=o?function(){tQ(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var ry=F.setImmediate?rh(rf,!1):rf;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
E({global:!0,bind:!0,enumerable:!0,forced:F.setImmediate!==ry},{setImmediate:ry});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new O(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function m(){}function g(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=y.prototype=m.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function S(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function j(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return g.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},S(E.prototype),u(E.prototype,s,function(){return this}),e.AsyncIterator=E,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new E(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
S(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),v}},e}({});try{regeneratorRuntime=rb}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rb:Function("r","regeneratorRuntime = r")(rb)}var r_={};r_=new URL(S("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rw{_data;// Display the recipe section
render(e,t=!0){// Check if there is data
if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;// Display the recipe
this._clearHTML(),this._parentElement.insertAdjacentHTML("afterbegin",r)}// Updates the DOM without rerendering all the contents
update(e){// Create the new HTML string
this._data=e;let t=document.createRange().createContextualFragment(this._generateMarkup()),r=Array.from(this._parentElement.querySelectorAll("*")),n=Array.from(t.querySelectorAll("*"));// Check if the new element has ben updated
n.forEach((e,t)=>{let n=r[t];e.isEqualNode(n)||e.firstChild?.nodeValue.trim()===""||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach(e=>n.setAttribute(e.name,e.value))})}// Display the loading spinner
displaySpinner(){let e=`
    <div class="spinner">
      <svg>
        <use href="${/*@__PURE__*/_(r_)}#icon-loader"></use>
      </svg>
    </div>
    `;this._clearHTML(),this._parentElement.insertAdjacentHTML("afterbegin",e)}// Clear all HTML
_clearHTML(){this._parentElement.innerHTML=""}// Display success message
renderSuccess(e=this._successMessage){let t=`
    <div class="message">
        <div>
            <svg>
                <use href="${/*@__PURE__*/_(r_)}#icon-smile"></use>
            </svg>
        </div>
        <p>${e}</p>
    </div>
    `;this._clearHTML(),this._parentElement.insertAdjacentHTML("afterbegin",t)}// Display error message
renderError(e=this._errorMessage){let t=`
    <div class="error">
        <div>
            <svg>
                <use href="${/*@__PURE__*/_(r_)}#icon-alert-triangle"></use>
            </svg>
        </div>
        <p>${e}</p>
    </div>
    `;this._clearHTML(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},y=Fraction;class rk extends rw{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find the requested recipe. Please try another one!";_successMessage="";// When the page initially loads or the url changes
addHandlerRender(e){// Fetch recipe data
["hashchange","load"].forEach(t=>window.addEventListener(t,e))}// When the +/- servings button is clicked
addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}// When the bookmarks button is clicked
addHandlerAddBookmark(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--bookmark");r&&e()})}// Generate the HTML for the recipe section
_generateMarkup(){let{image:e,title:t,cookingTime:r,servings:n,ingredients:i,publisher:o,sourceUrl:a}=this._data;// Format HTML code to display recipe
return`
        <figure class="recipe__fig">
          <img src="${e}" alt="${t}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${t}</span>
          </h1>
        </figure>
    
        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/_(r_)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${r}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/_(r_)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${n}</span>
            <span class="recipe__info-text">servings</span>
    
            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${/*@__PURE__*/_(r_)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${/*@__PURE__*/_(r_)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>
    
          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/_(r_)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/_(r_)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>
    
        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${i.map(e=>this._generateIngredientMarkup(e)).join("")}
          </ul>
        </div>
    
        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${o}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${a}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(r_)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `}// Generate the HTML for the list of ingredients section
_generateIngredientMarkup(e){return`
        <li class="recipe__ingredient">
            <svg class="recipe__icon">
                <use href="${/*@__PURE__*/_(r_)}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
            <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
            </div>
        </li>
        `}}var rS=new rk;class rE{_parentElement=document.querySelector(".search");// Event listener to fetch query value
addHandlerSearch(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e()})}// Fetch the query submitted by the user
getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearSearchInput(),e}// Clear the search input
_clearSearchInput(){this._parentElement.querySelector(".search__field").value=""}}var rF=new rE,rL=new class extends rw{_parentElement="";// Return the HTML code to display the recipe preview
_generateMarkup(){let e=window.location.hash.slice(1);return`
    <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
            <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
            </div>
            <div class="preview__user-generated">
              <svg>
                <use href="${/*@__PURE__*/_(r_)}#icon-user"></use>
              </svg>
            </div>
        </a>
    </li>
    `}};class rO extends rw{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query. Please try again.";_successMessage="";// Return the entire HTML code to preview recipes
_generateMarkup(){return this._data.map(e=>rL.render(e,!1)).join("")}}var rj// <div class="preview__user-generated">
=new rO;class rM extends rw{_parentElement=document.querySelector(".pagination");// Page pagination button click handler
addHandlerClick(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");if(!r)return;// Fetch which is the next page
let n=+r.dataset.goto;// Rerender the list of preview recipes after paginating
e(n)})}// Render the HTML for pagination buttons
_generateMarkup(){let{currentPage:e,resultsPerPage:t,results:r}=this._data,n=Math.ceil(r.length/t);return(// If the current page is 1 and there is more than 1 page
1===e&&n>1?`
        <button class="btn--inline pagination__btn--next" data-goto="${e+1}">
            <span>${e+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(r_)}#icon-arrow-right"></use>
            </svg>
        </button>
      `:e===n&&n>1?`
        <button class="btn--inline pagination__btn--prev" data-goto="${e-1}">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(r_)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>
      `:e<n?`
      <button class="btn--inline pagination__btn--prev" data-goto="${e-1}">
        <svg class="search__icon">
            <use href="${/*@__PURE__*/_(r_)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>
      <button class="btn--inline pagination__btn--next" data-goto="${e+1}">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
            <use href="${/*@__PURE__*/_(r_)}#icon-arrow-right"></use>
        </svg>
      </button>
      `:"")}}var r$=new rM;class rP extends rw{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it!";_successMessage="";// render the bookmarks on page load
addHandlerRenderBookmarks(e){window.addEventListener("load",e)}// Return the entire HTML code to preview recipes
_generateMarkup(){return this._data.map(e=>rL.render(e,!1)).join("")}}var rx// <div class="preview__user-generated">
=new rP;class rT extends rw{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_buttonOpen=document.querySelector(".nav__btn--add-recipe");_buttonClose=document.querySelector(".btn--close-modal");_successMessage="Recipe was successfully published!";constructor(){super(),// Add teh click event listeners
this._addHandlerShowForm(),this._addHandlerHideForm()}// Show the form to submit a new recipe
_addHandlerShowForm(){this._buttonOpen.addEventListener("click",this.toggleFormWindow.bind(this))}// Hides the form to submit a new recipe
_addHandlerHideForm(){this._buttonClose.addEventListener("click",this.toggleFormWindow.bind(this)),this._overlay.addEventListener("click",this.toggleFormWindow.bind(this))}// Toggle the 'hidden' class
toggleFormWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}// Submit a new recipe
addHandlerSubmit(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();// Fetching the data from the form and converting to an object
let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}// Render the HTML for pagination buttons
_generateMarkup(){}}var rH=new rT;const rq="https://forkify-api.herokuapp.com/api/v2/recipes/",rI="f3dae45c-26ed-4a78-aac6-abd2721ca461";function rN(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})}async function rA(e){try{let t=await Promise.race([fetch(e),rN(5)]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}}async function rC(e,t){try{let r=await Promise.race([fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),rN(5)]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(e){throw e}}const rD={recipe:{},search:{query:"",results:[],resultsPerPage:10,currentPage:1},bookmarks:[]};// Transforming recipe object
function rR(e){// Restructuring the data received
let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,// Creates the 'key' property if there is a key in the recipe object
...t.key&&{key:t.key}}}async function rz(e){try{let t=await rA(`${rq}${e}?&key=${rI}`);rD.recipe=rR(t),rD.bookmarks.some(t=>t.id===e)?rD.recipe.bookmarked=!0:rD.recipe.bookmarked=!1}catch(e){throw console.error(e),e}}async function rW(e){try{let t=await rA(`${rq}?search=${e}&key=${rI}`);// Save the query result
rD.search.query=e,rD.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rD.search.currentPage=1}catch(e){throw console.error(e),e}}function rG(e){let t=(e-1)*rD.search.resultsPerPage,r=e*rD.search.resultsPerPage;return rD.search.results.slice(t,r)}function rU(e){// Add recipe to bookmarks array
rD.bookmarks.push(e),e.id===rD.recipe.id&&(rD.recipe.bookmarked=!0),// Update the bookmarks in local storage
rB()}// Update the bookmarks in local storage
function rB(){localStorage.setItem("bookmarks",JSON.stringify(rD.bookmarks))}async function rJ(e){try{// Fetch the ingredient entries
let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]),r=t.map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Please enter the correct ingredient format!");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:r},i=await rC(`${rq}?key=${rI}`,n);rD.recipe=rR(i),// Save the recipe in the bookmarks list
rU(rD.recipe)}catch(e){throw e}}// Displays a single recipe using a single recipe ID
async function rY(){try{// Fetch recipe ID from URL
let e=window.location.hash.slice(1);if(!e)return;rS.displaySpinner(),rj.update(rG(rD.search.currentPage)),rx.update(rD.bookmarks),// Fetch the recipe
await rz(e),rS.render(rD.recipe)}catch(e){console.error(e),rS.renderError()}}// Fetch the query search results
async function rQ(){try{rj.displaySpinner();// Fetch the query parameter from the user input
let e=rF.getQuery();if(!e)return;// Fetch the list of recipes
await rW(e),rj.render(rG(rD.search.currentPage)),r$.render(rD.search)}catch(e){console.error(e)}}// Upload the recipe to the API
async function rV(e){try{rH.displaySpinner(),await rJ(e),rS.render(rD.recipe),rH.renderSuccess(),rx.render(rD.bookmarks),// Change the URL to the new recipe
window.history.pushState(null,"",`#${rD.recipe.id}`),// Close the new recipe form
setTimeout(()=>{rH.toggleFormWindow()},2e3)}catch(e){console.error(e),rH.renderError(e)}}!// Fetching bookmarks from local storage
function(){// Fetch bookmarks from local storage
let e=localStorage.getItem("bookmarks");// Save the bookmarks to state variable if there is any
e&&(rD.bookmarks=JSON.parse(e))}(),rx.addHandlerRenderBookmarks(// Renders the bookmarks tab
function(){rx.render(rD.bookmarks)}),rS.addHandlerRender(rY),rS.addHandlerUpdateServings(// Update the recipe servings
function(e){// Calculate the new servings amount
rD.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rD.recipe.servings}),// Save the servings count
rD.recipe.servings=e,rS.update(rD.recipe)}),rS.addHandlerAddBookmark(// Saving recipes to the list of bookmarks
function(){rD.recipe.bookmarked?function(e){// Remove recipe from bookmarks array
let t=rD.bookmarks.findIndex(t=>t.id===e);rD.bookmarks.splice(t,1),e===rD.recipe.id&&(rD.recipe.bookmarked=!1),// Update the bookmarks in local storage
rB()}(rD.recipe.id):rU(rD.recipe),rS.update(rD.recipe),rx.render(rD.bookmarks)}),rF.addHandlerSearch(rQ),r$.addHandlerClick(// Render the new recipe preview list
function(e){rj.render(rG(e)),rD.search.currentPage=e,r$.render(rD.search)}),rH.addHandlerSubmit(rV);//# sourceMappingURL=index.3879022b.js.map

//# sourceMappingURL=index.3879022b.js.map
