(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Be=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rf={exports:{}},Mo={},of={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),T0=Symbol.for("react.portal"),I0=Symbol.for("react.fragment"),R0=Symbol.for("react.strict_mode"),A0=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),L0=Symbol.for("react.context"),M0=Symbol.for("react.forward_ref"),D0=Symbol.for("react.suspense"),b0=Symbol.for("react.memo"),H0=Symbol.for("react.lazy"),lu=Symbol.iterator;function $0(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var af={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lf=Object.assign,sf={};function tr(e,t,n){this.props=e,this.context=t,this.refs=sf,this.updater=n||af}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uf(){}uf.prototype=tr.prototype;function Kl(e,t,n){this.props=e,this.context=t,this.refs=sf,this.updater=n||af}var Zl=Kl.prototype=new uf;Zl.constructor=Kl;lf(Zl,tr.prototype);Zl.isPureReactComponent=!0;var su=Array.isArray,cf=Object.prototype.hasOwnProperty,Jl={current:null},ff={key:!0,ref:!0,__self:!0,__source:!0};function df(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)cf.call(t,r)&&!ff.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Jr,type:e,key:o,ref:a,props:i,_owner:Jl.current}}function B0(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function es(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function F0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uu=/\/+/g;function fa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?F0(""+e.key):t.toString(36)}function $i(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Jr:case T0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+fa(a,0):r,su(i)?(n="",e!=null&&(n=e.replace(uu,"$&/")+"/"),$i(i,t,n,"",function(u){return u})):i!=null&&(es(i)&&(i=B0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(uu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",su(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+fa(o,l);a+=$i(o,t,n,s,i)}else if(s=$0(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+fa(o,l++),a+=$i(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function mi(e,t,n){if(e==null)return e;var r=[],i=0;return $i(e,r,"","",function(o){return t.call(n,o,i++)}),r}function U0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Bi={transition:null},V0={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Bi,ReactCurrentOwner:Jl};function pf(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:mi,forEach:function(e,t,n){mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mi(e,function(){t++}),t},toArray:function(e){return mi(e,function(t){return t})||[]},only:function(e){if(!es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=tr;L.Fragment=I0;L.Profiler=A0;L.PureComponent=Kl;L.StrictMode=R0;L.Suspense=D0;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V0;L.act=pf;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lf({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Jl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)cf.call(t,s)&&!ff.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Jr,type:e.type,key:i,ref:o,props:r,_owner:a}};L.createContext=function(e){return e={$$typeof:L0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:z0,_context:e},e.Consumer=e};L.createElement=df;L.createFactory=function(e){var t=df.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:M0,render:e}};L.isValidElement=es;L.lazy=function(e){return{$$typeof:H0,_payload:{_status:-1,_result:e},_init:U0}};L.memo=function(e,t){return{$$typeof:b0,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Bi.transition;Bi.transition={};try{e()}finally{Bi.transition=t}};L.unstable_act=pf;L.useCallback=function(e,t){return Ce.current.useCallback(e,t)};L.useContext=function(e){return Ce.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};L.useEffect=function(e,t){return Ce.current.useEffect(e,t)};L.useId=function(){return Ce.current.useId()};L.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return Ce.current.useMemo(e,t)};L.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};L.useRef=function(e){return Ce.current.useRef(e)};L.useState=function(e){return Ce.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return Ce.current.useTransition()};L.version="18.3.1";of.exports=L;var B=of.exports;const Pe=Gl(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=B,Y0=Symbol.for("react.element"),Q0=Symbol.for("react.fragment"),X0=Object.prototype.hasOwnProperty,q0=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G0={key:!0,ref:!0,__self:!0,__source:!0};function mf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)X0.call(t,r)&&!G0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Y0,type:e,key:o,ref:a,props:i,_owner:q0.current}}Mo.Fragment=Q0;Mo.jsx=mf;Mo.jsxs=mf;rf.exports=Mo;var d=rf.exports,Xa={},hf={exports:{}},De={},gf={exports:{}},vf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,T){var R=P.length;P.push(T);e:for(;0<R;){var H=R-1>>>1,$=P[H];if(0<i($,T))P[H]=T,P[R]=$,R=H;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var T=P[0],R=P.pop();if(R!==T){P[0]=R;e:for(var H=0,$=P.length,Jt=$>>>1;H<Jt;){var Qe=2*(H+1)-1,_t=P[Qe],Ie=Qe+1,dt=P[Ie];if(0>i(_t,R))Ie<$&&0>i(dt,_t)?(P[H]=dt,P[Ie]=R,H=Ie):(P[H]=_t,P[Qe]=R,H=Qe);else if(Ie<$&&0>i(dt,R))P[H]=dt,P[Ie]=R,H=Ie;else break e}}return T}function i(P,T){var R=P.sortIndex-T.sortIndex;return R!==0?R:P.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],m=1,g=null,h=3,y=!1,S=!1,C=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=P)r(u),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(u)}}function v(P){if(C=!1,p(P),!S)if(n(s)!==null)S=!0,lr(k);else{var T=n(u);T!==null&&Zt(v,T.startTime-P)}}function k(P,T){S=!1,C&&(C=!1,f(j),j=-1),y=!0;var R=h;try{for(p(T),g=n(s);g!==null&&(!(g.expirationTime>T)||P&&!pe());){var H=g.callback;if(typeof H=="function"){g.callback=null,h=g.priorityLevel;var $=H(g.expirationTime<=T);T=e.unstable_now(),typeof $=="function"?g.callback=$:g===n(s)&&r(s),p(T)}else r(s);g=n(s)}if(g!==null)var Jt=!0;else{var Qe=n(u);Qe!==null&&Zt(v,Qe.startTime-T),Jt=!1}return Jt}finally{g=null,h=R,y=!1}}var x=!1,w=null,j=-1,z=5,I=-1;function pe(){return!(e.unstable_now()-I<z)}function nt(){if(w!==null){var P=e.unstable_now();I=P;var T=!0;try{T=w(!0,P)}finally{T?ft():(x=!1,w=null)}}else x=!1}var ft;if(typeof c=="function")ft=function(){c(nt)};else if(typeof MessageChannel<"u"){var Kt=new MessageChannel,ar=Kt.port2;Kt.port1.onmessage=nt,ft=function(){ar.postMessage(null)}}else ft=function(){N(nt,0)};function lr(P){w=P,x||(x=!0,ft())}function Zt(P,T){j=N(function(){P(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,lr(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var R=h;h=T;try{return P()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,T){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var R=h;h=P;try{return T()}finally{h=R}},e.unstable_scheduleCallback=function(P,T,R){var H=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?H+R:H):R=H,P){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=R+$,P={id:m++,callback:T,priorityLevel:P,startTime:R,expirationTime:$,sortIndex:-1},R>H?(P.sortIndex=R,t(u,P),n(s)===null&&P===n(u)&&(C?(f(j),j=-1):C=!0,Zt(v,R-H))):(P.sortIndex=$,t(s,P),S||y||(S=!0,lr(k))),P},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(P){var T=h;return function(){var R=h;h=T;try{return P.apply(this,arguments)}finally{h=R}}}})(vf);gf.exports=vf;var K0=gf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0=B,Me=K0;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yf=new Set,Lr={};function wn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(Lr[e]=t,e=0;e<t.length;e++)yf.add(t[e])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qa=Object.prototype.hasOwnProperty,J0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cu={},fu={};function em(e){return qa.call(fu,e)?!0:qa.call(cu,e)?!1:J0.test(e)?fu[e]=!0:(cu[e]=!0,!1)}function tm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nm(e,t,n,r){if(t===null||typeof t>"u"||tm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var ts=/[\-:]([a-z])/g;function ns(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ts,ns);de[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ts,ns);de[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ts,ns);de[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function rs(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nm(t,n,i,r)&&(n=null),r||i===null?em(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=Z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),En=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),is=Symbol.for("react.strict_mode"),Ga=Symbol.for("react.profiler"),xf=Symbol.for("react.provider"),wf=Symbol.for("react.context"),os=Symbol.for("react.forward_ref"),Ka=Symbol.for("react.suspense"),Za=Symbol.for("react.suspense_list"),as=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),Sf=Symbol.for("react.offscreen"),du=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,da;function yr(e){if(da===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);da=t&&t[1]||""}return`
`+da+e}var pa=!1;function ma(e,t){if(!e||pa)return"";pa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{pa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yr(e):""}function rm(e){switch(e.tag){case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 2:case 15:return e=ma(e.type,!1),e;case 11:return e=ma(e.type.render,!1),e;case 1:return e=ma(e.type,!0),e;default:return""}}function Ja(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case En:return"Portal";case Ga:return"Profiler";case is:return"StrictMode";case Ka:return"Suspense";case Za:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wf:return(e.displayName||"Context")+".Consumer";case xf:return(e._context.displayName||"Context")+".Provider";case os:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case as:return t=e.displayName||null,t!==null?t:Ja(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return Ja(e(t))}catch{}}return null}function im(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ja(t);case 8:return t===is?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function om(e){var t=Cf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gi(e){e._valueTracker||(e._valueTracker=om(e))}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ef(e,t){t=t.checked,t!=null&&rs(e,"checked",t,!1)}function tl(e,t){Ef(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&nl(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nl(e,t,n){(t!=="number"||oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xr=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(xr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function _f(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vi,Pf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vi=vi||document.createElement("div"),vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},am=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){am.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_r[t]=_r[e]})});function Of(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_r.hasOwnProperty(e)&&_r[e]?(""+t).trim():t+"px"}function Nf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Of(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var lm=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ol(e,t){if(t){if(lm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function al(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ll=null;function ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,bn=null,Hn=null;function vu(e){if(e=ni(e)){if(typeof sl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Bo(t),sl(e.stateNode,e.type,t))}}function Tf(e){bn?Hn?Hn.push(e):Hn=[e]:bn=e}function If(){if(bn){var e=bn,t=Hn;if(Hn=bn=null,vu(e),t)for(e=0;e<t.length;e++)vu(t[e])}}function Rf(e,t){return e(t)}function Af(){}var ha=!1;function zf(e,t,n){if(ha)return e(t,n);ha=!0;try{return Rf(e,t,n)}finally{ha=!1,(bn!==null||Hn!==null)&&(Af(),If())}}function Dr(e,t){var n=e.stateNode;if(n===null)return null;var r=Bo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var ul=!1;if(wt)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){ul=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{ul=!1}function sm(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var jr=!1,ao=null,lo=!1,cl=null,um={onError:function(e){jr=!0,ao=e}};function cm(e,t,n,r,i,o,a,l,s){jr=!1,ao=null,sm.apply(um,arguments)}function fm(e,t,n,r,i,o,a,l,s){if(cm.apply(this,arguments),jr){if(jr){var u=ao;jr=!1,ao=null}else throw Error(E(198));lo||(lo=!0,cl=u)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yu(e){if(Sn(e)!==e)throw Error(E(188))}function dm(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return yu(i),e;if(o===r)return yu(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Mf(e){return e=dm(e),e!==null?Df(e):null}function Df(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Df(e);if(t!==null)return t;e=e.sibling}return null}var bf=Me.unstable_scheduleCallback,xu=Me.unstable_cancelCallback,pm=Me.unstable_shouldYield,mm=Me.unstable_requestPaint,te=Me.unstable_now,hm=Me.unstable_getCurrentPriorityLevel,ss=Me.unstable_ImmediatePriority,Hf=Me.unstable_UserBlockingPriority,so=Me.unstable_NormalPriority,gm=Me.unstable_LowPriority,$f=Me.unstable_IdlePriority,Do=null,st=null;function vm(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Do,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:wm,ym=Math.log,xm=Math.LN2;function wm(e){return e>>>=0,e===0?32:31-(ym(e)/xm|0)|0}var yi=64,xi=4194304;function wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=wr(l):(o&=a,o!==0&&(r=wr(o)))}else a=n&~i,a!==0?r=wr(a):o!==0&&(r=wr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Sm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ze(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=Sm(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function fl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bf(){var e=yi;return yi<<=1,!(yi&4194240)&&(yi=64),e}function ga(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function km(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function us(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var b=0;function Ff(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uf,cs,Vf,Wf,Yf,dl=!1,wi=[],bt=null,Ht=null,$t=null,br=new Map,Hr=new Map,At=[],Em="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":br.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(t.pointerId)}}function fr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ni(t),t!==null&&cs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _m(e,t,n,r,i){switch(t){case"focusin":return bt=fr(bt,e,t,n,r,i),!0;case"dragenter":return Ht=fr(Ht,e,t,n,r,i),!0;case"mouseover":return $t=fr($t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return br.set(o,fr(br.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Hr.set(o,fr(Hr.get(o)||null,e,t,n,r,i)),!0}return!1}function Qf(e){var t=ln(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=Lf(n),t!==null){e.blockedOn=t,Yf(e.priority,function(){Vf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ll=r,n.target.dispatchEvent(r),ll=null}else return t=ni(n),t!==null&&cs(t),e.blockedOn=n,!1;t.shift()}return!0}function Su(e,t,n){Fi(e)&&n.delete(t)}function jm(){dl=!1,bt!==null&&Fi(bt)&&(bt=null),Ht!==null&&Fi(Ht)&&(Ht=null),$t!==null&&Fi($t)&&($t=null),br.forEach(Su),Hr.forEach(Su)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,dl||(dl=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,jm)))}function $r(e){function t(i){return dr(i,e)}if(0<wi.length){dr(wi[0],e);for(var n=1;n<wi.length;n++){var r=wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bt!==null&&dr(bt,e),Ht!==null&&dr(Ht,e),$t!==null&&dr($t,e),br.forEach(t),Hr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Qf(n),n.blockedOn===null&&At.shift()}var $n=Et.ReactCurrentBatchConfig,co=!0;function Pm(e,t,n,r){var i=b,o=$n.transition;$n.transition=null;try{b=1,fs(e,t,n,r)}finally{b=i,$n.transition=o}}function Om(e,t,n,r){var i=b,o=$n.transition;$n.transition=null;try{b=4,fs(e,t,n,r)}finally{b=i,$n.transition=o}}function fs(e,t,n,r){if(co){var i=pl(e,t,n,r);if(i===null)ja(e,t,r,fo,n),wu(e,r);else if(_m(i,e,t,n,r))r.stopPropagation();else if(wu(e,r),t&4&&-1<Em.indexOf(e)){for(;i!==null;){var o=ni(i);if(o!==null&&Uf(o),o=pl(e,t,n,r),o===null&&ja(e,t,r,fo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ja(e,t,r,null,n)}}var fo=null;function pl(e,t,n,r){if(fo=null,e=ls(r),e=ln(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fo=e,null}function Xf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hm()){case ss:return 1;case Hf:return 4;case so:case gm:return 16;case $f:return 536870912;default:return 16}default:return 16}}var Mt=null,ds=null,Ui=null;function qf(){if(Ui)return Ui;var e,t=ds,n=t.length,r,i="value"in Mt?Mt.value:Mt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ui=i.slice(e,1<r?1-r:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function Cu(){return!1}function be(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Si:Cu,this.isPropagationStopped=Cu,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ps=be(nr),ti=Z({},nr,{view:0,detail:0}),Nm=be(ti),va,ya,pr,bo=Z({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(va=e.screenX-pr.screenX,ya=e.screenY-pr.screenY):ya=va=0,pr=e),va)},movementY:function(e){return"movementY"in e?e.movementY:ya}}),ku=be(bo),Tm=Z({},bo,{dataTransfer:0}),Im=be(Tm),Rm=Z({},ti,{relatedTarget:0}),xa=be(Rm),Am=Z({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),zm=be(Am),Lm=Z({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mm=be(Lm),Dm=Z({},nr,{data:0}),Eu=be(Dm),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$m={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$m[e])?!!t[e]:!1}function ms(){return Bm}var Fm=Z({},ti,{key:function(e){if(e.key){var t=bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ms,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Um=be(Fm),Vm=Z({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=be(Vm),Wm=Z({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ms}),Ym=be(Wm),Qm=Z({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xm=be(Qm),qm=Z({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gm=be(qm),Km=[9,13,27,32],hs=wt&&"CompositionEvent"in window,Pr=null;wt&&"documentMode"in document&&(Pr=document.documentMode);var Zm=wt&&"TextEvent"in window&&!Pr,Gf=wt&&(!hs||Pr&&8<Pr&&11>=Pr),ju=" ",Pu=!1;function Kf(e,t){switch(e){case"keyup":return Km.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function Jm(e,t){switch(e){case"compositionend":return Zf(t);case"keypress":return t.which!==32?null:(Pu=!0,ju);case"textInput":return e=t.data,e===ju&&Pu?null:e;default:return null}}function eh(e,t){if(jn)return e==="compositionend"||!hs&&Kf(e,t)?(e=qf(),Ui=ds=Mt=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gf&&t.locale!=="ko"?null:t.data;default:return null}}var th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!th[e.type]:t==="textarea"}function Jf(e,t,n,r){Tf(r),t=po(t,"onChange"),0<t.length&&(n=new ps("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Or=null,Br=null;function nh(e){cd(e,0)}function Ho(e){var t=Nn(e);if(kf(t))return e}function rh(e,t){if(e==="change")return t}var ed=!1;if(wt){var wa;if(wt){var Sa="oninput"in document;if(!Sa){var Nu=document.createElement("div");Nu.setAttribute("oninput","return;"),Sa=typeof Nu.oninput=="function"}wa=Sa}else wa=!1;ed=wa&&(!document.documentMode||9<document.documentMode)}function Tu(){Or&&(Or.detachEvent("onpropertychange",td),Br=Or=null)}function td(e){if(e.propertyName==="value"&&Ho(Br)){var t=[];Jf(t,Br,e,ls(e)),zf(nh,t)}}function ih(e,t,n){e==="focusin"?(Tu(),Or=t,Br=n,Or.attachEvent("onpropertychange",td)):e==="focusout"&&Tu()}function oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ho(Br)}function ah(e,t){if(e==="click")return Ho(t)}function lh(e,t){if(e==="input"||e==="change")return Ho(t)}function sh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:sh;function Fr(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qa.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function Iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ru(e,t){var n=Iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Iu(n)}}function nd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rd(){for(var e=window,t=oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oo(e.document)}return t}function gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uh(e){var t=rd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nd(n.ownerDocument.documentElement,n)){if(r!==null&&gs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ru(n,o);var a=Ru(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ch=wt&&"documentMode"in document&&11>=document.documentMode,Pn=null,ml=null,Nr=null,hl=!1;function Au(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hl||Pn==null||Pn!==oo(r)||(r=Pn,"selectionStart"in r&&gs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Fr(Nr,r)||(Nr=r,r=po(ml,"onSelect"),0<r.length&&(t=new ps("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function Ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionend:Ci("Transition","TransitionEnd")},Ca={},id={};wt&&(id=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function $o(e){if(Ca[e])return Ca[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in id)return Ca[e]=t[n];return e}var od=$o("animationend"),ad=$o("animationiteration"),ld=$o("animationstart"),sd=$o("transitionend"),ud=new Map,zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){ud.set(e,t),wn(t,[e])}for(var ka=0;ka<zu.length;ka++){var Ea=zu[ka],fh=Ea.toLowerCase(),dh=Ea[0].toUpperCase()+Ea.slice(1);Xt(fh,"on"+dh)}Xt(od,"onAnimationEnd");Xt(ad,"onAnimationIteration");Xt(ld,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(sd,"onTransitionEnd");Un("onMouseEnter",["mouseout","mouseover"]);Un("onMouseLeave",["mouseout","mouseover"]);Un("onPointerEnter",["pointerout","pointerover"]);Un("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ph=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));function Lu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fm(r,t,void 0,e),e.currentTarget=null}function cd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Lu(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Lu(i,l,u),o=s}}}if(lo)throw e=cl,lo=!1,cl=null,e}function U(e,t){var n=t[wl];n===void 0&&(n=t[wl]=new Set);var r=e+"__bubble";n.has(r)||(fd(t,e,2,!1),n.add(r))}function _a(e,t,n){var r=0;t&&(r|=4),fd(n,e,r,t)}var ki="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[ki]){e[ki]=!0,yf.forEach(function(n){n!=="selectionchange"&&(ph.has(n)||_a(n,!1,e),_a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ki]||(t[ki]=!0,_a("selectionchange",!1,t))}}function fd(e,t,n,r){switch(Xf(t)){case 1:var i=Pm;break;case 4:i=Om;break;default:i=fs}n=i.bind(null,t,n,e),i=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ja(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=ln(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}zf(function(){var u=o,m=ls(n),g=[];e:{var h=ud.get(e);if(h!==void 0){var y=ps,S=e;switch(e){case"keypress":if(Vi(n)===0)break e;case"keydown":case"keyup":y=Um;break;case"focusin":S="focus",y=xa;break;case"focusout":S="blur",y=xa;break;case"beforeblur":case"afterblur":y=xa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Im;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ym;break;case od:case ad:case ld:y=zm;break;case sd:y=Xm;break;case"scroll":y=Nm;break;case"wheel":y=Gm;break;case"copy":case"cut":case"paste":y=Mm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=_u}var C=(t&4)!==0,N=!C&&e==="scroll",f=C?h!==null?h+"Capture":null:h;C=[];for(var c=u,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Dr(c,f),v!=null&&C.push(Vr(c,v,p)))),N)break;c=c.return}0<C.length&&(h=new y(h,S,null,n,m),g.push({event:h,listeners:C}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==ll&&(S=n.relatedTarget||n.fromElement)&&(ln(S)||S[St]))break e;if((y||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=u,S=S?ln(S):null,S!==null&&(N=Sn(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=u),y!==S)){if(C=ku,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(C=_u,v="onPointerLeave",f="onPointerEnter",c="pointer"),N=y==null?h:Nn(y),p=S==null?h:Nn(S),h=new C(v,c+"leave",y,n,m),h.target=N,h.relatedTarget=p,v=null,ln(m)===u&&(C=new C(f,c+"enter",S,n,m),C.target=p,C.relatedTarget=N,v=C),N=v,y&&S)t:{for(C=y,f=S,c=0,p=C;p;p=Cn(p))c++;for(p=0,v=f;v;v=Cn(v))p++;for(;0<c-p;)C=Cn(C),c--;for(;0<p-c;)f=Cn(f),p--;for(;c--;){if(C===f||f!==null&&C===f.alternate)break t;C=Cn(C),f=Cn(f)}C=null}else C=null;y!==null&&Mu(g,h,y,C,!1),S!==null&&N!==null&&Mu(g,N,S,C,!0)}}e:{if(h=u?Nn(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var k=rh;else if(Ou(h))if(ed)k=lh;else{k=oh;var x=ih}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=ah);if(k&&(k=k(e,u))){Jf(g,k,n,m);break e}x&&x(e,h,u),e==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&nl(h,"number",h.value)}switch(x=u?Nn(u):window,e){case"focusin":(Ou(x)||x.contentEditable==="true")&&(Pn=x,ml=u,Nr=null);break;case"focusout":Nr=ml=Pn=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,Au(g,n,m);break;case"selectionchange":if(ch)break;case"keydown":case"keyup":Au(g,n,m)}var w;if(hs)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else jn?Kf(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Gf&&n.locale!=="ko"&&(jn||j!=="onCompositionStart"?j==="onCompositionEnd"&&jn&&(w=qf()):(Mt=m,ds="value"in Mt?Mt.value:Mt.textContent,jn=!0)),x=po(u,j),0<x.length&&(j=new Eu(j,e,null,n,m),g.push({event:j,listeners:x}),w?j.data=w:(w=Zf(n),w!==null&&(j.data=w)))),(w=Zm?Jm(e,n):eh(e,n))&&(u=po(u,"onBeforeInput"),0<u.length&&(m=new Eu("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:u}),m.data=w))}cd(g,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function po(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Dr(e,n),o!=null&&r.unshift(Vr(e,o,i)),o=Dr(e,t),o!=null&&r.push(Vr(e,o,i))),e=e.return}return r}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mu(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Dr(n,o),s!=null&&a.unshift(Vr(n,s,l))):i||(s=Dr(n,o),s!=null&&a.push(Vr(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var mh=/\r\n?/g,hh=/\u0000|\uFFFD/g;function Du(e){return(typeof e=="string"?e:""+e).replace(mh,`
`).replace(hh,"")}function Ei(e,t,n){if(t=Du(t),Du(e)!==t&&n)throw Error(E(425))}function mo(){}var gl=null,vl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xl=typeof setTimeout=="function"?setTimeout:void 0,gh=typeof clearTimeout=="function"?clearTimeout:void 0,bu=typeof Promise=="function"?Promise:void 0,vh=typeof queueMicrotask=="function"?queueMicrotask:typeof bu<"u"?function(e){return bu.resolve(null).then(e).catch(yh)}:xl;function yh(e){setTimeout(function(){throw e})}function Pa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$r(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$r(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),lt="__reactFiber$"+rr,Wr="__reactProps$"+rr,St="__reactContainer$"+rr,wl="__reactEvents$"+rr,xh="__reactListeners$"+rr,wh="__reactHandles$"+rr;function ln(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hu(e);e!==null;){if(n=e[lt])return n;e=Hu(e)}return t}e=n,n=e.parentNode}return null}function ni(e){return e=e[lt]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Bo(e){return e[Wr]||null}var Sl=[],Tn=-1;function qt(e){return{current:e}}function W(e){0>Tn||(e.current=Sl[Tn],Sl[Tn]=null,Tn--)}function F(e,t){Tn++,Sl[Tn]=e.current,e.current=t}var Qt={},ve=qt(Qt),Oe=qt(!1),hn=Qt;function Vn(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function ho(){W(Oe),W(ve)}function $u(e,t,n){if(ve.current!==Qt)throw Error(E(168));F(ve,t),F(Oe,n)}function dd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,im(e)||"Unknown",i));return Z({},n,r)}function go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,hn=ve.current,F(ve,e),F(Oe,Oe.current),!0}function Bu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=dd(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,W(Oe),W(ve),F(ve,e)):W(Oe),F(Oe,n)}var ht=null,Fo=!1,Oa=!1;function pd(e){ht===null?ht=[e]:ht.push(e)}function Sh(e){Fo=!0,pd(e)}function Gt(){if(!Oa&&ht!==null){Oa=!0;var e=0,t=b;try{var n=ht;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,Fo=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),bf(ss,Gt),i}finally{b=t,Oa=!1}}return null}var In=[],Rn=0,vo=null,yo=0,He=[],$e=0,gn=null,vt=1,yt="";function nn(e,t){In[Rn++]=yo,In[Rn++]=vo,vo=e,yo=t}function md(e,t,n){He[$e++]=vt,He[$e++]=yt,He[$e++]=gn,gn=e;var r=vt;e=yt;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var o=32-Ze(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,vt=1<<32-Ze(t)+i|n<<i|r,yt=o+e}else vt=1<<o|n<<i|r,yt=e}function vs(e){e.return!==null&&(nn(e,1),md(e,1,0))}function ys(e){for(;e===vo;)vo=In[--Rn],In[Rn]=null,yo=In[--Rn],In[Rn]=null;for(;e===gn;)gn=He[--$e],He[$e]=null,yt=He[--$e],He[$e]=null,vt=He[--$e],He[$e]=null}var Le=null,ze=null,Q=!1,Ke=null;function hd(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,ze=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:vt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,ze=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kl(e){if(Q){var t=ze;if(t){var n=t;if(!Fu(e,t)){if(Cl(e))throw Error(E(418));t=Bt(n.nextSibling);var r=Le;t&&Fu(e,t)?hd(r,n):(e.flags=e.flags&-4097|2,Q=!1,Le=e)}}else{if(Cl(e))throw Error(E(418));e.flags=e.flags&-4097|2,Q=!1,Le=e}}}function Uu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function _i(e){if(e!==Le)return!1;if(!Q)return Uu(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=ze)){if(Cl(e))throw gd(),Error(E(418));for(;t;)hd(e,t),t=Bt(t.nextSibling)}if(Uu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Le?Bt(e.stateNode.nextSibling):null;return!0}function gd(){for(var e=ze;e;)e=Bt(e.nextSibling)}function Wn(){ze=Le=null,Q=!1}function xs(e){Ke===null?Ke=[e]:Ke.push(e)}var Ch=Et.ReactCurrentBatchConfig;function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function ji(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vu(e){var t=e._init;return t(e._payload)}function vd(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Wt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,c,p,v){return c===null||c.tag!==6?(c=La(p,f.mode,v),c.return=f,c):(c=i(c,p),c.return=f,c)}function s(f,c,p,v){var k=p.type;return k===_n?m(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===It&&Vu(k)===c.type)?(v=i(c,p.props),v.ref=mr(f,c,p),v.return=f,v):(v=Ki(p.type,p.key,p.props,null,f.mode,v),v.ref=mr(f,c,p),v.return=f,v)}function u(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Ma(p,f.mode,v),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function m(f,c,p,v,k){return c===null||c.tag!==7?(c=dn(p,f.mode,v,k),c.return=f,c):(c=i(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=La(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case hi:return p=Ki(c.type,c.key,c.props,null,f.mode,p),p.ref=mr(f,null,c),p.return=f,p;case En:return c=Ma(c,f.mode,p),c.return=f,c;case It:var v=c._init;return g(f,v(c._payload),p)}if(xr(c)||ur(c))return c=dn(c,f.mode,p,null),c.return=f,c;ji(f,c)}return null}function h(f,c,p,v){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:l(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hi:return p.key===k?s(f,c,p,v):null;case En:return p.key===k?u(f,c,p,v):null;case It:return k=p._init,h(f,c,k(p._payload),v)}if(xr(p)||ur(p))return k!==null?null:m(f,c,p,v,null);ji(f,p)}return null}function y(f,c,p,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,l(c,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hi:return f=f.get(v.key===null?p:v.key)||null,s(c,f,v,k);case En:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,k);case It:var x=v._init;return y(f,c,p,x(v._payload),k)}if(xr(v)||ur(v))return f=f.get(p)||null,m(c,f,v,k,null);ji(c,v)}return null}function S(f,c,p,v){for(var k=null,x=null,w=c,j=c=0,z=null;w!==null&&j<p.length;j++){w.index>j?(z=w,w=null):z=w.sibling;var I=h(f,w,p[j],v);if(I===null){w===null&&(w=z);break}e&&w&&I.alternate===null&&t(f,w),c=o(I,c,j),x===null?k=I:x.sibling=I,x=I,w=z}if(j===p.length)return n(f,w),Q&&nn(f,j),k;if(w===null){for(;j<p.length;j++)w=g(f,p[j],v),w!==null&&(c=o(w,c,j),x===null?k=w:x.sibling=w,x=w);return Q&&nn(f,j),k}for(w=r(f,w);j<p.length;j++)z=y(w,f,j,p[j],v),z!==null&&(e&&z.alternate!==null&&w.delete(z.key===null?j:z.key),c=o(z,c,j),x===null?k=z:x.sibling=z,x=z);return e&&w.forEach(function(pe){return t(f,pe)}),Q&&nn(f,j),k}function C(f,c,p,v){var k=ur(p);if(typeof k!="function")throw Error(E(150));if(p=k.call(p),p==null)throw Error(E(151));for(var x=k=null,w=c,j=c=0,z=null,I=p.next();w!==null&&!I.done;j++,I=p.next()){w.index>j?(z=w,w=null):z=w.sibling;var pe=h(f,w,I.value,v);if(pe===null){w===null&&(w=z);break}e&&w&&pe.alternate===null&&t(f,w),c=o(pe,c,j),x===null?k=pe:x.sibling=pe,x=pe,w=z}if(I.done)return n(f,w),Q&&nn(f,j),k;if(w===null){for(;!I.done;j++,I=p.next())I=g(f,I.value,v),I!==null&&(c=o(I,c,j),x===null?k=I:x.sibling=I,x=I);return Q&&nn(f,j),k}for(w=r(f,w);!I.done;j++,I=p.next())I=y(w,f,j,I.value,v),I!==null&&(e&&I.alternate!==null&&w.delete(I.key===null?j:I.key),c=o(I,c,j),x===null?k=I:x.sibling=I,x=I);return e&&w.forEach(function(nt){return t(f,nt)}),Q&&nn(f,j),k}function N(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===_n&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hi:e:{for(var k=p.key,x=c;x!==null;){if(x.key===k){if(k=p.type,k===_n){if(x.tag===7){n(f,x.sibling),c=i(x,p.props.children),c.return=f,f=c;break e}}else if(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===It&&Vu(k)===x.type){n(f,x.sibling),c=i(x,p.props),c.ref=mr(f,x,p),c.return=f,f=c;break e}n(f,x);break}else t(f,x);x=x.sibling}p.type===_n?(c=dn(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=Ki(p.type,p.key,p.props,null,f.mode,v),v.ref=mr(f,c,p),v.return=f,f=v)}return a(f);case En:e:{for(x=p.key;c!==null;){if(c.key===x)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Ma(p,f.mode,v),c.return=f,f=c}return a(f);case It:return x=p._init,N(f,c,x(p._payload),v)}if(xr(p))return S(f,c,p,v);if(ur(p))return C(f,c,p,v);ji(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=La(p,f.mode,v),c.return=f,f=c),a(f)):n(f,c)}return N}var Yn=vd(!0),yd=vd(!1),xo=qt(null),wo=null,An=null,ws=null;function Ss(){ws=An=wo=null}function Cs(e){var t=xo.current;W(xo),e._currentValue=t}function El(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){wo=e,ws=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(ws!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(wo===null)throw Error(E(308));An=e,wo.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var sn=null;function ks(e){sn===null?sn=[e]:sn.push(e)}function xd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ks(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function Es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ct(e,n)}return i=r.interleaved,i===null?(t.next=t,ks(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ct(e,n)}function Wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,us(e,n)}}function Wu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function So(e,t,n,r){var i=e.updateQueue;Rt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=s))}if(o!==null){var g=i.baseState;a=0,m=u=s=null,l=o;do{var h=l.lane,y=l.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,C=l;switch(h=t,y=n,C.tag){case 1:if(S=C.payload,typeof S=="function"){g=S.call(y,g,h);break e}g=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=C.payload,h=typeof S=="function"?S.call(y,g,h):S,h==null)break e;g=Z({},g,h);break e;case 2:Rt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=y,s=g):m=m.next=y,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(s=g),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);yn|=a,e.lanes=a,e.memoizedState=g}}function Yu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ri={},ut=qt(ri),Yr=qt(ri),Qr=qt(ri);function un(e){if(e===ri)throw Error(E(174));return e}function _s(e,t){switch(F(Qr,t),F(Yr,e),F(ut,ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=il(t,e)}W(ut),F(ut,t)}function Qn(){W(ut),W(Yr),W(Qr)}function Sd(e){un(Qr.current);var t=un(ut.current),n=il(t,e.type);t!==n&&(F(Yr,e),F(ut,n))}function js(e){Yr.current===e&&(W(ut),W(Yr))}var G=qt(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Na=[];function Ps(){for(var e=0;e<Na.length;e++)Na[e]._workInProgressVersionPrimary=null;Na.length=0}var Yi=Et.ReactCurrentDispatcher,Ta=Et.ReactCurrentBatchConfig,vn=0,K=null,oe=null,le=null,ko=!1,Tr=!1,Xr=0,kh=0;function me(){throw Error(E(321))}function Os(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function Ns(e,t,n,r,i,o){if(vn=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yi.current=e===null||e.memoizedState===null?Ph:Oh,e=n(r,i),Tr){o=0;do{if(Tr=!1,Xr=0,25<=o)throw Error(E(301));o+=1,le=oe=null,t.updateQueue=null,Yi.current=Nh,e=n(r,i)}while(Tr)}if(Yi.current=Eo,t=oe!==null&&oe.next!==null,vn=0,le=oe=K=null,ko=!1,t)throw Error(E(300));return e}function Ts(){var e=Xr!==0;return Xr=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?K.memoizedState=le=e:le=le.next=e,le}function We(){if(oe===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=le===null?K.memoizedState:le.next;if(t!==null)le=t,oe=e;else{if(e===null)throw Error(E(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?K.memoizedState=le=e:le=le.next=e}return le}function qr(e,t){return typeof t=="function"?t(e):t}function Ia(e){var t=We(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var m=u.lane;if((vn&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=g,a=r):s=s.next=g,K.lanes|=m,yn|=m}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,tt(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ra(e){var t=We(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);tt(o,t.memoizedState)||(_e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Cd(){}function kd(e,t){var n=K,r=We(),i=t(),o=!tt(r.memoizedState,i);if(o&&(r.memoizedState=i,_e=!0),r=r.queue,Is(jd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Gr(9,_d.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(E(349));vn&30||Ed(n,t,i)}return i}function Ed(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _d(e,t,n,r){t.value=n,t.getSnapshot=r,Pd(t)&&Od(e)}function jd(e,t,n){return n(function(){Pd(t)&&Od(e)})}function Pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function Od(e){var t=Ct(e,1);t!==null&&Je(t,e,1,-1)}function Qu(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:e},t.queue=e,e=e.dispatch=jh.bind(null,K,e),[t.memoizedState,e]}function Gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nd(){return We().memoizedState}function Qi(e,t,n,r){var i=it();K.flags|=e,i.memoizedState=Gr(1|t,n,void 0,r===void 0?null:r)}function Uo(e,t,n,r){var i=We();r=r===void 0?null:r;var o=void 0;if(oe!==null){var a=oe.memoizedState;if(o=a.destroy,r!==null&&Os(r,a.deps)){i.memoizedState=Gr(t,n,o,r);return}}K.flags|=e,i.memoizedState=Gr(1|t,n,o,r)}function Xu(e,t){return Qi(8390656,8,e,t)}function Is(e,t){return Uo(2048,8,e,t)}function Td(e,t){return Uo(4,2,e,t)}function Id(e,t){return Uo(4,4,e,t)}function Rd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ad(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4,4,Rd.bind(null,t,e),n)}function Rs(){}function zd(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Os(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ld(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Os(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Md(e,t,n){return vn&21?(tt(n,t)||(n=Bf(),K.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function Eh(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=Ta.transition;Ta.transition={};try{e(!1),t()}finally{b=n,Ta.transition=r}}function Dd(){return We().memoizedState}function _h(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bd(e))Hd(t,n);else if(n=xd(e,t,n,r),n!==null){var i=Se();Je(n,e,r,i),$d(n,t,r)}}function jh(e,t,n){var r=Vt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bd(e))Hd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,tt(l,a)){var s=t.interleaved;s===null?(i.next=i,ks(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=xd(e,t,i,r),n!==null&&(i=Se(),Je(n,e,r,i),$d(n,t,r))}}function bd(e){var t=e.alternate;return e===K||t!==null&&t===K}function Hd(e,t){Tr=ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $d(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,us(e,n)}}var Eo={readContext:Ve,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Ph={readContext:Ve,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qi(4194308,4,Rd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qi(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_h.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:Qu,useDebugValue:Rs,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=Qu(!1),t=e[0];return e=Eh.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=it();if(Q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ue===null)throw Error(E(349));vn&30||Ed(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Xu(jd.bind(null,r,o,e),[e]),r.flags|=2048,Gr(9,_d.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=it(),t=ue.identifierPrefix;if(Q){var n=yt,r=vt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Oh={readContext:Ve,useCallback:zd,useContext:Ve,useEffect:Is,useImperativeHandle:Ad,useInsertionEffect:Td,useLayoutEffect:Id,useMemo:Ld,useReducer:Ia,useRef:Nd,useState:function(){return Ia(qr)},useDebugValue:Rs,useDeferredValue:function(e){var t=We();return Md(t,oe.memoizedState,e)},useTransition:function(){var e=Ia(qr)[0],t=We().memoizedState;return[e,t]},useMutableSource:Cd,useSyncExternalStore:kd,useId:Dd,unstable_isNewReconciler:!1},Nh={readContext:Ve,useCallback:zd,useContext:Ve,useEffect:Is,useImperativeHandle:Ad,useInsertionEffect:Td,useLayoutEffect:Id,useMemo:Ld,useReducer:Ra,useRef:Nd,useState:function(){return Ra(qr)},useDebugValue:Rs,useDeferredValue:function(e){var t=We();return oe===null?t.memoizedState=e:Md(t,oe.memoizedState,e)},useTransition:function(){var e=Ra(qr)[0],t=We().memoizedState;return[e,t]},useMutableSource:Cd,useSyncExternalStore:kd,useId:Dd,unstable_isNewReconciler:!1};function qe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vo={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Vt(e),o=xt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(Je(t,e,i,r),Wi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Vt(e),o=xt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(Je(t,e,i,r),Wi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Vt(e),i=xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(Je(t,e,r,n),Wi(t,e,r))}};function qu(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(i,o):!0}function Bd(e,t,n){var r=!1,i=Qt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ve(o):(i=Ne(t)?hn:ve.current,r=t.contextTypes,o=(r=r!=null)?Vn(e,i):Qt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vo.enqueueReplaceState(t,t.state,null)}function jl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Es(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ve(o):(o=Ne(t)?hn:ve.current,i.context=Vn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_l(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vo.enqueueReplaceState(i,i.state,null),So(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t){try{var n="",r=t;do n+=rm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Aa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Th=typeof WeakMap=="function"?WeakMap:Map;function Fd(e,t,n){n=xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){jo||(jo=!0,Dl=r),Pl(e,t)},n}function Ud(e,t,n){n=xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Pl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Pl(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Th;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vh.bind(null,e,t,n),t.then(e,e))}function Zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ju(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var Ih=Et.ReactCurrentOwner,_e=!1;function we(e,t,n,r){t.child=e===null?yd(t,null,n,r):Yn(t,e.child,n,r)}function ec(e,t,n,r,i){n=n.render;var o=t.ref;return Bn(t,i),r=Ns(e,t,n,r,o,i),n=Ts(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(Q&&n&&vs(t),t.flags|=1,we(e,t,r,i),t.child)}function tc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$s(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Vd(e,t,o,r,i)):(e=Ki(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(a,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=Wt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Fr(o,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,kt(e,t,i)}return Ol(e,t,n,r,i)}function Wd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Ln,Ae),Ae|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Ln,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,F(Ln,Ae),Ae|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,F(Ln,Ae),Ae|=r;return we(e,t,i,n),t.child}function Yd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ol(e,t,n,r,i){var o=Ne(n)?hn:ve.current;return o=Vn(t,o),Bn(t,i),n=Ns(e,t,n,r,o,i),r=Ts(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(Q&&r&&vs(t),t.flags|=1,we(e,t,n,i),t.child)}function nc(e,t,n,r,i){if(Ne(n)){var o=!0;go(t)}else o=!1;if(Bn(t,i),t.stateNode===null)Xi(e,t),Bd(t,n,r),jl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Ne(n)?hn:ve.current,u=Vn(t,u));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Gu(t,a,r,u),Rt=!1;var h=t.memoizedState;a.state=h,So(t,r,a,i),s=t.memoizedState,l!==r||h!==s||Oe.current||Rt?(typeof m=="function"&&(_l(t,n,m,r),s=t.memoizedState),(l=Rt||qu(t,n,l,r,h,s,u))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,wd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:qe(t.type,l),a.props=u,g=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ve(s):(s=Ne(n)?hn:ve.current,s=Vn(t,s));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||h!==s)&&Gu(t,a,r,s),Rt=!1,h=t.memoizedState,a.state=h,So(t,r,a,i);var S=t.memoizedState;l!==g||h!==S||Oe.current||Rt?(typeof y=="function"&&(_l(t,n,y,r),S=t.memoizedState),(u=Rt||qu(t,n,u,r,h,S,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),a.props=r,a.state=S,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,o,i)}function Nl(e,t,n,r,i,o){Yd(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Bu(t,n,!1),kt(e,t,o);r=t.stateNode,Ih.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Yn(t,e.child,null,o),t.child=Yn(t,null,l,o)):we(e,t,l,o),t.memoizedState=r.state,i&&Bu(t,n,!0),t.child}function Qd(e){var t=e.stateNode;t.pendingContext?$u(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$u(e,t.context,!1),_s(e,t.containerInfo)}function rc(e,t,n,r,i){return Wn(),xs(i),t.flags|=256,we(e,t,n,r),t.child}var Tl={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xd(e,t,n){var r=t.pendingProps,i=G.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(G,i&1),e===null)return kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Qo(a,r,0,null),e=dn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Il(n),t.memoizedState=Tl,e):As(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Rh(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Wt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Wt(l,o):(o=dn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Il(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Tl,r}return o=e.child,e=o.sibling,r=Wt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function As(e,t){return t=Qo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pi(e,t,n,r){return r!==null&&xs(r),Yn(t,e.child,null,n),e=As(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rh(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Aa(Error(E(422))),Pi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Qo({mode:"visible",children:r.children},i,0,null),o=dn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Yn(t,e.child,null,a),t.child.memoizedState=Il(a),t.memoizedState=Tl,o);if(!(t.mode&1))return Pi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(E(419)),r=Aa(o,r,void 0),Pi(e,t,a,r)}if(l=(a&e.childLanes)!==0,_e||l){if(r=ue,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ct(e,i),Je(r,e,i,-1))}return Hs(),r=Aa(Error(E(421))),Pi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Wh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Bt(i.nextSibling),Le=t,Q=!0,Ke=null,e!==null&&(He[$e++]=vt,He[$e++]=yt,He[$e++]=gn,vt=e.id,yt=e.overflow,gn=t),t=As(t,r.children),t.flags|=4096,t)}function ic(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),El(e.return,t,n)}function za(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function qd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(we(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,n,t);else if(e.tag===19)ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),za(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}za(t,!0,n,null,o);break;case"together":za(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ah(e,t,n){switch(t.tag){case 3:Qd(t),Wn();break;case 5:Sd(t);break;case 1:Ne(t.type)&&go(t);break;case 4:_s(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(xo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Xd(e,t,n):(F(G,G.current&1),e=kt(e,t,n),e!==null?e.sibling:null);F(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Wd(e,t,n)}return kt(e,t,n)}var Gd,Rl,Kd,Zd;Gd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rl=function(){};Kd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(ut.current);var o=null;switch(n){case"input":i=el(e,i),r=el(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=rl(e,i),r=rl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mo)}ol(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&U("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Zd=function(e,t,n,r){n!==r&&(t.flags|=4)};function hr(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zh(e,t,n){var r=t.pendingProps;switch(ys(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ne(t.type)&&ho(),he(t),null;case 3:return r=t.stateNode,Qn(),W(Oe),W(ve),Ps(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&($l(Ke),Ke=null))),Rl(e,t),he(t),null;case 5:js(t);var i=un(Qr.current);if(n=t.type,e!==null&&t.stateNode!=null)Kd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return he(t),null}if(e=un(ut.current),_i(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[lt]=t,r[Wr]=o,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<Sr.length;i++)U(Sr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":pu(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":hu(r,o),U("invalid",r)}ol(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ei(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ei(r.textContent,l,e),i=["children",""+l]):Lr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&U("scroll",r)}switch(n){case"input":gi(r),mu(r,o,!0);break;case"textarea":gi(r),gu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=mo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[lt]=t,e[Wr]=r,Gd(e,t,!1,!1),t.stateNode=e;e:{switch(a=al(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<Sr.length;i++)U(Sr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":pu(e,r),i=el(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),U("invalid",e);break;case"textarea":hu(e,r),i=rl(e,r),U("invalid",e);break;default:i=r}ol(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Nf(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Pf(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Mr(e,s):typeof s=="number"&&Mr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Lr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&U("scroll",e):s!=null&&rs(e,o,s,a))}switch(n){case"input":gi(e),mu(e,r,!1);break;case"textarea":gi(e),gu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Dn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Zd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=un(Qr.current),un(ut.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(o=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:Ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ei(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return he(t),null;case 13:if(W(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&ze!==null&&t.mode&1&&!(t.flags&128))gd(),Wn(),t.flags|=98560,o=!1;else if(o=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[lt]=t}else Wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),o=!1}else Ke!==null&&($l(Ke),Ke=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ae===0&&(ae=3):Hs())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Qn(),Rl(e,t),e===null&&Ur(t.stateNode.containerInfo),he(t),null;case 10:return Cs(t.type._context),he(t),null;case 17:return Ne(t.type)&&ho(),he(t),null;case 19:if(W(G),o=t.memoizedState,o===null)return he(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)hr(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Co(e),a!==null){for(t.flags|=128,hr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>qn&&(t.flags|=128,r=!0,hr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Co(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Q)return he(t),null}else 2*te()-o.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,hr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,n=G.current,F(G,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return bs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Lh(e,t){switch(ys(t),t.tag){case 1:return Ne(t.type)&&ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qn(),W(Oe),W(ve),Ps(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return js(t),null;case 13:if(W(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(G),null;case 4:return Qn(),null;case 10:return Cs(t.type._context),null;case 22:case 23:return bs(),null;case 24:return null;default:return null}}var Oi=!1,ge=!1,Mh=typeof WeakSet=="function"?WeakSet:Set,O=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Al(e,t,n){try{n()}catch(r){ee(e,t,r)}}var oc=!1;function Dh(e,t){if(gl=co,e=rd(),gs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,m=0,g=e,h=null;t:for(;;){for(var y;g!==n||i!==0&&g.nodeType!==3||(l=a+i),g!==o||r!==0&&g.nodeType!==3||(s=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(y=g.firstChild)!==null;)h=g,g=y;for(;;){if(g===e)break t;if(h===n&&++u===i&&(l=a),h===o&&++m===r&&(s=a),(y=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(vl={focusedElem:e,selectionRange:n},co=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var C=S.memoizedProps,N=S.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?C:qe(t.type,C),N);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){ee(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return S=oc,oc=!1,S}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Al(t,n,o)}i=i.next}while(i!==r)}}function Wo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jd(e){var t=e.alternate;t!==null&&(e.alternate=null,Jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Wr],delete t[wl],delete t[xh],delete t[wh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ep(e){return e.tag===5||e.tag===3||e.tag===4}function ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mo));else if(r!==4&&(e=e.child,e!==null))for(Ll(e,t,n),e=e.sibling;e!==null;)Ll(e,t,n),e=e.sibling}function Ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ml(e,t,n),e=e.sibling;e!==null;)Ml(e,t,n),e=e.sibling}var ce=null,Ge=!1;function Pt(e,t,n){for(n=n.child;n!==null;)tp(e,t,n),n=n.sibling}function tp(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Do,n)}catch{}switch(n.tag){case 5:ge||zn(n,t);case 6:var r=ce,i=Ge;ce=null,Pt(e,t,n),ce=r,Ge=i,ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?Pa(e.parentNode,n):e.nodeType===1&&Pa(e,n),$r(e)):Pa(ce,n.stateNode));break;case 4:r=ce,i=Ge,ce=n.stateNode.containerInfo,Ge=!0,Pt(e,t,n),ce=r,Ge=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Al(n,t,a),i=i.next}while(i!==r)}Pt(e,t,n);break;case 1:if(!ge&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,t,l)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,Pt(e,t,n),ge=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mh),t.forEach(function(r){var i=Yh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ce=l.stateNode,Ge=!1;break e;case 3:ce=l.stateNode.containerInfo,Ge=!0;break e;case 4:ce=l.stateNode.containerInfo,Ge=!0;break e}l=l.return}if(ce===null)throw Error(E(160));tp(o,a,i),ce=null,Ge=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)np(t,e),t=t.sibling}function np(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),rt(e),r&4){try{Ir(3,e,e.return),Wo(3,e)}catch(C){ee(e,e.return,C)}try{Ir(5,e,e.return)}catch(C){ee(e,e.return,C)}}break;case 1:Xe(t,e),rt(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(Xe(t,e),rt(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var i=e.stateNode;try{Mr(i,"")}catch(C){ee(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ef(i,o),al(l,a);var u=al(l,o);for(a=0;a<s.length;a+=2){var m=s[a],g=s[a+1];m==="style"?Nf(i,g):m==="dangerouslySetInnerHTML"?Pf(i,g):m==="children"?Mr(i,g):rs(i,m,g,u)}switch(l){case"input":tl(i,o);break;case"textarea":_f(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Dn(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?Dn(i,!!o.multiple,o.defaultValue,!0):Dn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Wr]=o}catch(C){ee(e,e.return,C)}}break;case 6:if(Xe(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(C){ee(e,e.return,C)}}break;case 3:if(Xe(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$r(t.containerInfo)}catch(C){ee(e,e.return,C)}break;case 4:Xe(t,e),rt(e);break;case 13:Xe(t,e),rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ms=te())),r&4&&lc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||m,Xe(t,e),ge=u):Xe(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(O=e,m=e.child;m!==null;){for(g=O=m;O!==null;){switch(h=O,y=h.child,h.tag){case 0:case 11:case 14:case 15:Ir(4,h,h.return);break;case 1:zn(h,h.return);var S=h.stateNode;if(typeof S.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(C){ee(r,n,C)}}break;case 5:zn(h,h.return);break;case 22:if(h.memoizedState!==null){uc(g);continue}}y!==null?(y.return=h,O=y):uc(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{i=g.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=g.stateNode,s=g.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Of("display",a))}catch(C){ee(e,e.return,C)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(C){ee(e,e.return,C)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Xe(t,e),rt(e),r&4&&lc(e);break;case 21:break;default:Xe(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ep(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mr(i,""),r.flags&=-33);var o=ac(e);Ml(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ac(e);Ll(e,l,a);break;default:throw Error(E(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bh(e,t,n){O=e,rp(e)}function rp(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Oi;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ge;l=Oi;var u=ge;if(Oi=a,(ge=s)&&!u)for(O=i;O!==null;)a=O,s=a.child,a.tag===22&&a.memoizedState!==null?cc(i):s!==null?(s.return=a,O=s):cc(i);for(;o!==null;)O=o,rp(o),o=o.sibling;O=i,Oi=l,ge=u}sc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):sc(e)}}function sc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Wo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Yu(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yu(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&$r(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ge||t.flags&512&&zl(t)}catch(h){ee(t,t.return,h)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function uc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function cc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wo(4,t)}catch(s){ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ee(t,i,s)}}var o=t.return;try{zl(t)}catch(s){ee(t,o,s)}break;case 5:var a=t.return;try{zl(t)}catch(s){ee(t,a,s)}}}catch(s){ee(t,t.return,s)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var Hh=Math.ceil,_o=Et.ReactCurrentDispatcher,zs=Et.ReactCurrentOwner,Ue=Et.ReactCurrentBatchConfig,M=0,ue=null,re=null,fe=0,Ae=0,Ln=qt(0),ae=0,Kr=null,yn=0,Yo=0,Ls=0,Rr=null,Ee=null,Ms=0,qn=1/0,pt=null,jo=!1,Dl=null,Ut=null,Ni=!1,Dt=null,Po=0,Ar=0,bl=null,qi=-1,Gi=0;function Se(){return M&6?te():qi!==-1?qi:qi=te()}function Vt(e){return e.mode&1?M&2&&fe!==0?fe&-fe:Ch.transition!==null?(Gi===0&&(Gi=Bf()),Gi):(e=b,e!==0||(e=window.event,e=e===void 0?16:Xf(e.type)),e):1}function Je(e,t,n,r){if(50<Ar)throw Ar=0,bl=null,Error(E(185));ei(e,n,r),(!(M&2)||e!==ue)&&(e===ue&&(!(M&2)&&(Yo|=n),ae===4&&zt(e,fe)),Te(e,r),n===1&&M===0&&!(t.mode&1)&&(qn=te()+500,Fo&&Gt()))}function Te(e,t){var n=e.callbackNode;Cm(e,t);var r=uo(e,e===ue?fe:0);if(r===0)n!==null&&xu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xu(n),t===1)e.tag===0?Sh(fc.bind(null,e)):pd(fc.bind(null,e)),vh(function(){!(M&6)&&Gt()}),n=null;else{switch(Ff(r)){case 1:n=ss;break;case 4:n=Hf;break;case 16:n=so;break;case 536870912:n=$f;break;default:n=so}n=fp(n,ip.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ip(e,t){if(qi=-1,Gi=0,M&6)throw Error(E(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=uo(e,e===ue?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Oo(e,r);else{t=r;var i=M;M|=2;var o=ap();(ue!==e||fe!==t)&&(pt=null,qn=te()+500,fn(e,t));do try{Fh();break}catch(l){op(e,l)}while(!0);Ss(),_o.current=o,M=i,re!==null?t=0:(ue=null,fe=0,t=ae)}if(t!==0){if(t===2&&(i=fl(e),i!==0&&(r=i,t=Hl(e,i))),t===1)throw n=Kr,fn(e,0),zt(e,r),Te(e,te()),n;if(t===6)zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!$h(i)&&(t=Oo(e,r),t===2&&(o=fl(e),o!==0&&(r=o,t=Hl(e,o))),t===1))throw n=Kr,fn(e,0),zt(e,r),Te(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:rn(e,Ee,pt);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=Ms+500-te(),10<t)){if(uo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xl(rn.bind(null,e,Ee,pt),t);break}rn(e,Ee,pt);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ze(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hh(r/1960))-r,10<r){e.timeoutHandle=xl(rn.bind(null,e,Ee,pt),r);break}rn(e,Ee,pt);break;case 5:rn(e,Ee,pt);break;default:throw Error(E(329))}}}return Te(e,te()),e.callbackNode===n?ip.bind(null,e):null}function Hl(e,t){var n=Rr;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=Oo(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&$l(t)),e}function $l(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function $h(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~Ls,t&=~Yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function fc(e){if(M&6)throw Error(E(327));Fn();var t=uo(e,0);if(!(t&1))return Te(e,te()),null;var n=Oo(e,t);if(e.tag!==0&&n===2){var r=fl(e);r!==0&&(t=r,n=Hl(e,r))}if(n===1)throw n=Kr,fn(e,0),zt(e,t),Te(e,te()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Ee,pt),Te(e,te()),null}function Ds(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(qn=te()+500,Fo&&Gt())}}function xn(e){Dt!==null&&Dt.tag===0&&!(M&6)&&Fn();var t=M;M|=1;var n=Ue.transition,r=b;try{if(Ue.transition=null,b=1,e)return e()}finally{b=r,Ue.transition=n,M=t,!(M&6)&&Gt()}}function bs(){Ae=Ln.current,W(Ln)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gh(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(ys(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ho();break;case 3:Qn(),W(Oe),W(ve),Ps();break;case 5:js(r);break;case 4:Qn();break;case 13:W(G);break;case 19:W(G);break;case 10:Cs(r.type._context);break;case 22:case 23:bs()}n=n.return}if(ue=e,re=e=Wt(e.current,null),fe=Ae=t,ae=0,Kr=null,Ls=Yo=yn=0,Ee=Rr=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}sn=null}return e}function op(e,t){do{var n=re;try{if(Ss(),Yi.current=Eo,ko){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ko=!1}if(vn=0,le=oe=K=null,Tr=!1,Xr=0,zs.current=null,n===null||n.return===null){ae=1,Kr=t,re=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=fe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=l,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Zu(a);if(y!==null){y.flags&=-257,Ju(y,a,l,o,t),y.mode&1&&Ku(o,u,t),t=y,s=u;var S=t.updateQueue;if(S===null){var C=new Set;C.add(s),t.updateQueue=C}else S.add(s);break e}else{if(!(t&1)){Ku(o,u,t),Hs();break e}s=Error(E(426))}}else if(Q&&l.mode&1){var N=Zu(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Ju(N,a,l,o,t),xs(Xn(s,l));break e}}o=s=Xn(s,l),ae!==4&&(ae=2),Rr===null?Rr=[o]:Rr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Fd(o,s,t);Wu(o,f);break e;case 1:l=s;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ut===null||!Ut.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Ud(o,l,t);Wu(o,v);break e}}o=o.return}while(o!==null)}sp(n)}catch(k){t=k,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function ap(){var e=_o.current;return _o.current=Eo,e===null?Eo:e}function Hs(){(ae===0||ae===3||ae===2)&&(ae=4),ue===null||!(yn&268435455)&&!(Yo&268435455)||zt(ue,fe)}function Oo(e,t){var n=M;M|=2;var r=ap();(ue!==e||fe!==t)&&(pt=null,fn(e,t));do try{Bh();break}catch(i){op(e,i)}while(!0);if(Ss(),M=n,_o.current=r,re!==null)throw Error(E(261));return ue=null,fe=0,ae}function Bh(){for(;re!==null;)lp(re)}function Fh(){for(;re!==null&&!pm();)lp(re)}function lp(e){var t=cp(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?sp(e):re=t,zs.current=null}function sp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lh(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}else if(n=zh(n,t,Ae),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function rn(e,t,n){var r=b,i=Ue.transition;try{Ue.transition=null,b=1,Uh(e,t,n,r)}finally{Ue.transition=i,b=r}return null}function Uh(e,t,n,r){do Fn();while(Dt!==null);if(M&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(km(e,o),e===ue&&(re=ue=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ni||(Ni=!0,fp(so,function(){return Fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ue.transition,Ue.transition=null;var a=b;b=1;var l=M;M|=4,zs.current=null,Dh(e,n),np(n,e),uh(vl),co=!!gl,vl=gl=null,e.current=n,bh(n),mm(),M=l,b=a,Ue.transition=o}else e.current=n;if(Ni&&(Ni=!1,Dt=e,Po=i),o=e.pendingLanes,o===0&&(Ut=null),vm(n.stateNode),Te(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jo)throw jo=!1,e=Dl,Dl=null,e;return Po&1&&e.tag!==0&&Fn(),o=e.pendingLanes,o&1?e===bl?Ar++:(Ar=0,bl=e):Ar=0,Gt(),null}function Fn(){if(Dt!==null){var e=Ff(Po),t=Ue.transition,n=b;try{if(Ue.transition=null,b=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Po=0,M&6)throw Error(E(331));var i=M;for(M|=4,O=e.current;O!==null;){var o=O,a=o.child;if(O.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(O=u;O!==null;){var m=O;switch(m.tag){case 0:case 11:case 15:Ir(8,m,o)}var g=m.child;if(g!==null)g.return=m,O=g;else for(;O!==null;){m=O;var h=m.sibling,y=m.return;if(Jd(m),m===u){O=null;break}if(h!==null){h.return=y,O=h;break}O=y}}}var S=o.alternate;if(S!==null){var C=S.child;if(C!==null){S.child=null;do{var N=C.sibling;C.sibling=null,C=N}while(C!==null)}}O=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,O=a;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ir(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,O=f;break e}O=o.return}}var c=e.current;for(O=c;O!==null;){a=O;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,O=p;else e:for(a=c;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wo(9,l)}}catch(k){ee(l,l.return,k)}if(l===a){O=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,O=v;break e}O=l.return}}if(M=i,Gt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Do,e)}catch{}r=!0}return r}finally{b=n,Ue.transition=t}}return!1}function dc(e,t,n){t=Xn(n,t),t=Fd(e,t,1),e=Ft(e,t,1),t=Se(),e!==null&&(ei(e,1,t),Te(e,t))}function ee(e,t,n){if(e.tag===3)dc(e,e,n);else for(;t!==null;){if(t.tag===3){dc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Xn(n,e),e=Ud(t,e,1),t=Ft(t,e,1),e=Se(),t!==null&&(ei(t,1,e),Te(t,e));break}}t=t.return}}function Vh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(fe&n)===n&&(ae===4||ae===3&&(fe&130023424)===fe&&500>te()-Ms?fn(e,0):Ls|=n),Te(e,t)}function up(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var n=Se();e=Ct(e,t),e!==null&&(ei(e,t,n),Te(e,n))}function Wh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),up(e,n)}function Yh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),up(e,n)}var cp;cp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Ah(e,t,n);_e=!!(e.flags&131072)}else _e=!1,Q&&t.flags&1048576&&md(t,yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xi(e,t),e=t.pendingProps;var i=Vn(t,ve.current);Bn(t,n),i=Ns(null,t,r,e,i,n);var o=Ts();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,go(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Es(t),i.updater=Vo,t.stateNode=i,i._reactInternals=t,jl(t,r,e,n),t=Nl(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&vs(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xh(r),e=qe(r,e),i){case 0:t=Ol(null,t,r,e,n);break e;case 1:t=nc(null,t,r,e,n);break e;case 11:t=ec(null,t,r,e,n);break e;case 14:t=tc(null,t,r,qe(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Ol(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),nc(e,t,r,i,n);case 3:e:{if(Qd(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,wd(e,t),So(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Xn(Error(E(423)),t),t=rc(e,t,r,n,i);break e}else if(r!==i){i=Xn(Error(E(424)),t),t=rc(e,t,r,n,i);break e}else for(ze=Bt(t.stateNode.containerInfo.firstChild),Le=t,Q=!0,Ke=null,n=yd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===i){t=kt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Sd(t),e===null&&kl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,yl(r,i)?a=null:o!==null&&yl(r,o)&&(t.flags|=32),Yd(e,t),we(e,t,a,n),t.child;case 6:return e===null&&kl(t),null;case 13:return Xd(e,t,n);case 4:return _s(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),ec(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,F(xo,r._currentValue),r._currentValue=a,o!==null)if(tt(o.value,a)){if(o.children===i.children&&!Oe.current){t=kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=xt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),El(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(E(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),El(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Bn(t,n),i=Ve(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=qe(r,t.pendingProps),i=qe(r.type,i),tc(e,t,r,i,n);case 15:return Vd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Xi(e,t),t.tag=1,Ne(r)?(e=!0,go(t)):e=!1,Bn(t,n),Bd(t,r,i),jl(t,r,i,n),Nl(null,t,r,!0,e,n);case 19:return qd(e,t,n);case 22:return Wd(e,t,n)}throw Error(E(156,t.tag))};function fp(e,t){return bf(e,t)}function Qh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new Qh(e,t,n,r)}function $s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xh(e){if(typeof e=="function")return $s(e)?1:0;if(e!=null){if(e=e.$$typeof,e===os)return 11;if(e===as)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ki(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")$s(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _n:return dn(n.children,i,o,t);case is:a=8,i|=8;break;case Ga:return e=Fe(12,n,t,i|2),e.elementType=Ga,e.lanes=o,e;case Ka:return e=Fe(13,n,t,i),e.elementType=Ka,e.lanes=o,e;case Za:return e=Fe(19,n,t,i),e.elementType=Za,e.lanes=o,e;case Sf:return Qo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xf:a=10;break e;case wf:a=9;break e;case os:a=11;break e;case as:a=14;break e;case It:a=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Fe(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function dn(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Qo(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Sf,e.lanes=n,e.stateNode={isHidden:!1},e}function La(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function Ma(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bs(e,t,n,r,i,o,a,l,s){return e=new qh(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Fe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Es(o),e}function Gh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dp(e){if(!e)return Qt;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ne(n))return dd(e,n,t)}return t}function pp(e,t,n,r,i,o,a,l,s){return e=Bs(n,r,!0,e,i,o,a,l,s),e.context=dp(null),n=e.current,r=Se(),i=Vt(n),o=xt(r,i),o.callback=t??null,Ft(n,o,i),e.current.lanes=i,ei(e,i,r),Te(e,r),e}function Xo(e,t,n,r){var i=t.current,o=Se(),a=Vt(i);return n=dp(n),t.context===null?t.context=n:t.pendingContext=n,t=xt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,a),e!==null&&(Je(e,i,a,o),Wi(e,i,a)),a}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fs(e,t){pc(e,t),(e=e.alternate)&&pc(e,t)}function Kh(){return null}var mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Us(e){this._internalRoot=e}qo.prototype.render=Us.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Xo(e,t,null,null)};qo.prototype.unmount=Us.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){Xo(null,e,null,null)}),t[St]=null}};function qo(e){this._internalRoot=e}qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&Qf(e)}};function Vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mc(){}function Zh(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=No(a);o.call(u)}}var a=pp(t,r,e,0,null,!1,!1,"",mc);return e._reactRootContainer=a,e[St]=a.current,Ur(e.nodeType===8?e.parentNode:e),xn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=No(s);l.call(u)}}var s=Bs(e,0,!1,null,null,!1,!1,"",mc);return e._reactRootContainer=s,e[St]=s.current,Ur(e.nodeType===8?e.parentNode:e),xn(function(){Xo(t,s,n,r)}),s}function Ko(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=No(a);l.call(s)}}Xo(t,a,e,i)}else a=Zh(n,t,e,i,r);return No(a)}Uf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wr(t.pendingLanes);n!==0&&(us(t,n|1),Te(t,te()),!(M&6)&&(qn=te()+500,Gt()))}break;case 13:xn(function(){var r=Ct(e,1);if(r!==null){var i=Se();Je(r,e,1,i)}}),Fs(e,1)}};cs=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Se();Je(t,e,134217728,n)}Fs(e,134217728)}};Vf=function(e){if(e.tag===13){var t=Vt(e),n=Ct(e,t);if(n!==null){var r=Se();Je(n,e,t,r)}Fs(e,t)}};Wf=function(){return b};Yf=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};sl=function(e,t,n){switch(t){case"input":if(tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Bo(r);if(!i)throw Error(E(90));kf(r),tl(r,i)}}}break;case"textarea":_f(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};Rf=Ds;Af=xn;var Jh={usingClientEntryPoint:!1,Events:[ni,Nn,Bo,Tf,If,Ds]},gr={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e1={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mf(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||Kh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{Do=Ti.inject(e1),st=Ti}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jh;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vs(t))throw Error(E(200));return Gh(e,t,null,n)};De.createRoot=function(e,t){if(!Vs(e))throw Error(E(299));var n=!1,r="",i=mp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bs(e,1,!1,null,null,n,!1,r,i),e[St]=t.current,Ur(e.nodeType===8?e.parentNode:e),new Us(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Mf(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return xn(e)};De.hydrate=function(e,t,n){if(!Go(t))throw Error(E(200));return Ko(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!Vs(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=mp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=pp(t,null,e,1,n??null,i,!1,o,a),e[St]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qo(t)};De.render=function(e,t,n){if(!Go(t))throw Error(E(200));return Ko(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!Go(e))throw Error(E(40));return e._reactRootContainer?(xn(function(){Ko(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};De.unstable_batchedUpdates=Ds;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Go(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ko(e,t,n,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";function hp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hp)}catch(e){console.error(e)}}hp(),hf.exports=De;var gp=hf.exports,hc=gp;Xa.createRoot=hc.createRoot,Xa.hydrateRoot=hc.hydrateRoot;var Ws={};Ws.match=a1;Ws.parse=vp;var t1=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n1=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,r1=/^(?:(min|max)-)?(.+)/,i1=/(em|rem|px|cm|mm|in|pt|pc)?$/,o1=/(dpi|dpcm|dppx)?$/;function a1(e,t){return vp(e).some(function(n){var r=n.inverse,i=n.type==="all"||t.type===n.type;if(i&&r||!(i||r))return!1;var o=n.expressions.every(function(a){var l=a.feature,s=a.modifier,u=a.value,m=t[l];if(!m)return!1;switch(l){case"orientation":case"scan":return m.toLowerCase()===u.toLowerCase();case"width":case"height":case"device-width":case"device-height":u=yc(u),m=yc(m);break;case"resolution":u=vc(u),m=vc(m);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":u=gc(u),m=gc(m);break;case"grid":case"color":case"color-index":case"monochrome":u=parseInt(u,10)||1,m=parseInt(m,10)||0;break}switch(s){case"min":return m>=u;case"max":return m<=u;default:return m===u}});return o&&!r||!o&&r})}function vp(e){return e.split(",").map(function(t){t=t.trim();var n=t.match(t1),r=n[1],i=n[2],o=n[3]||"",a={};return a.inverse=!!r&&r.toLowerCase()==="not",a.type=i?i.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map(function(l){var s=l.match(n1),u=s[1].toLowerCase().match(r1);return{modifier:u[1],feature:u[2],value:s[2]}}),a})}function gc(e){var t=Number(e),n;return t||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),t=n[1]/n[2]),t}function vc(e){var t=parseFloat(e),n=String(e).match(o1)[1];switch(n){case"dpcm":return t/2.54;case"dppx":return t*96;default:return t}}function yc(e){var t=parseFloat(e),n=String(e).match(i1)[1];switch(n){case"em":return t*16;case"rem":return t*16;case"cm":return t*96/2.54;case"mm":return t*96/2.54/10;case"in":return t*96;case"pt":return t*72;case"pc":return t*72/12;default:return t}}var l1=Ws.match,xc=typeof window<"u"?window.matchMedia:null;function s1(e,t,n){var r=this,i;xc&&!n&&(i=xc.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(l)):(this.matches=l1(e,t),this.media=e),this.addListener=o,this.removeListener=a,this.dispose=s;function o(u){i&&i.addListener(u)}function a(u){i&&i.removeListener(u)}function l(u){r.matches=u.matches,r.media=u.media}function s(){i&&i.removeListener(l)}}function u1(e,t,n){return new s1(e,t,n)}var c1=u1;const f1=Gl(c1);var d1=/[A-Z]/g,p1=/^ms-/,Da={};function m1(e){return"-"+e.toLowerCase()}function yp(e){if(Da.hasOwnProperty(e))return Da[e];var t=e.replace(d1,m1);return Da[e]=p1.test(t)?"-"+t:t}function h1(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let o=0;o<i;o++){const a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}var xp={exports:{}},g1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",v1=g1,y1=v1;function wp(){}function Sp(){}Sp.resetWarningCache=wp;var x1=function(){function e(r,i,o,a,l,s){if(s!==y1){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Sp,resetWarningCache:wp};return n.PropTypes=n,n};xp.exports=x1();var ii=xp.exports;const _=Gl(ii),xe=_.oneOfType([_.string,_.number]),Ys={all:_.bool,grid:_.bool,aural:_.bool,braille:_.bool,handheld:_.bool,print:_.bool,projection:_.bool,screen:_.bool,tty:_.bool,tv:_.bool,embossed:_.bool},Cp={orientation:_.oneOf(["portrait","landscape"]),scan:_.oneOf(["progressive","interlace"]),aspectRatio:_.string,deviceAspectRatio:_.string,height:xe,deviceHeight:xe,width:xe,deviceWidth:xe,color:_.bool,colorIndex:_.bool,monochrome:_.bool,resolution:xe,type:Object.keys(Ys)},{type:zy,...w1}=Cp,kp={minAspectRatio:_.string,maxAspectRatio:_.string,minDeviceAspectRatio:_.string,maxDeviceAspectRatio:_.string,minHeight:xe,maxHeight:xe,minDeviceHeight:xe,maxDeviceHeight:xe,minWidth:xe,maxWidth:xe,minDeviceWidth:xe,maxDeviceWidth:xe,minColor:_.number,maxColor:_.number,minColorIndex:_.number,maxColorIndex:_.number,minMonochrome:_.number,maxMonochrome:_.number,minResolution:xe,maxResolution:xe,...w1},S1={...Ys,...kp};var C1={all:S1,types:Ys,matchers:Cp,features:kp};const k1=e=>`not ${e}`,E1=(e,t)=>{const n=yp(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?k1(n):`(${n}: ${t})`},_1=e=>e.join(" and "),j1=e=>{const t=[];return Object.keys(C1.all).forEach(n=>{const r=e[n];r!=null&&t.push(E1(n,r))}),_1(t)},P1=B.createContext(void 0),O1=e=>e.query||j1(e),wc=e=>e?Object.keys(e).reduce((n,r)=>(n[yp(r)]=e[r],n),{}):void 0,Ep=()=>{const e=B.useRef(!1);return B.useEffect(()=>{e.current=!0},[]),e.current},N1=e=>{const t=B.useContext(P1),n=()=>wc(e)||wc(t),[r,i]=B.useState(n);return B.useEffect(()=>{const o=n();h1(r,o)||i(o)},[e,t]),r},T1=e=>{const t=()=>O1(e),[n,r]=B.useState(t);return B.useEffect(()=>{const i=t();n!==i&&r(i)},[e]),n},I1=(e,t)=>{const n=()=>f1(e,t||{},!!t),[r,i]=B.useState(n),o=Ep();return B.useEffect(()=>{if(o){const a=n();return i(a),()=>{a&&a.dispose()}}},[e,t]),r},R1=e=>{const[t,n]=B.useState(e.matches);return B.useEffect(()=>{const r=i=>{n(i.matches)};return e.addListener(r),n(e.matches),()=>{e.removeListener(r)}},[e]),t},ba=(e,t,n)=>{const r=N1(t),i=T1(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const o=I1(i,r),a=R1(o),l=Ep();return B.useEffect(()=>{l&&n&&n(a)},[a]),B.useEffect(()=>()=>{o&&o.dispose()},[]),a};var je=function(){return je=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},je.apply(this,arguments)};function To(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var V="-ms-",zr="-moz-",D="-webkit-",_p="comm",Zo="rule",Qs="decl",A1="@import",jp="@keyframes",z1="@layer",Pp=Math.abs,Xs=String.fromCharCode,Bl=Object.assign;function L1(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function Op(e){return e.trim()}function mt(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function Zi(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function Gn(e,t,n){return e.slice(t,n)}function ot(e){return e.length}function Np(e){return e.length}function Cr(e,t){return t.push(e),e}function M1(e,t){return e.map(t).join("")}function Sc(e,t){return e.filter(function(n){return!mt(n,t)})}var Jo=1,Kn=1,Tp=0,Ye=0,ne=0,ir="";function ea(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Jo,column:Kn,length:a,return:"",siblings:l}}function Tt(e,t){return Bl(ea("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function kn(e){for(;e.root;)e=Tt(e.root,{children:[e]});Cr(e,e.siblings)}function D1(){return ne}function b1(){return ne=Ye>0?se(ir,--Ye):0,Kn--,ne===10&&(Kn=1,Jo--),ne}function et(){return ne=Ye<Tp?se(ir,Ye++):0,Kn++,ne===10&&(Kn=1,Jo++),ne}function pn(){return se(ir,Ye)}function Ji(){return Ye}function ta(e,t){return Gn(ir,e,t)}function Fl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H1(e){return Jo=Kn=1,Tp=ot(ir=e),Ye=0,[]}function $1(e){return ir="",e}function Ha(e){return Op(ta(Ye-1,Ul(e===91?e+2:e===40?e+1:e)))}function B1(e){for(;(ne=pn())&&ne<33;)et();return Fl(e)>2||Fl(ne)>3?"":" "}function F1(e,t){for(;--t&&et()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return ta(e,Ji()+(t<6&&pn()==32&&et()==32))}function Ul(e){for(;et();)switch(ne){case e:return Ye;case 34:case 39:e!==34&&e!==39&&Ul(ne);break;case 40:e===41&&Ul(e);break;case 92:et();break}return Ye}function U1(e,t){for(;et()&&e+ne!==57;)if(e+ne===84&&pn()===47)break;return"/*"+ta(t,Ye-1)+"*"+Xs(e===47?e:et())}function V1(e){for(;!Fl(pn());)et();return ta(e,Ye)}function W1(e){return $1(eo("",null,null,null,[""],e=H1(e),0,[0],e))}function eo(e,t,n,r,i,o,a,l,s){for(var u=0,m=0,g=a,h=0,y=0,S=0,C=1,N=1,f=1,c=0,p="",v=i,k=o,x=r,w=p;N;)switch(S=c,c=et()){case 40:if(S!=108&&se(w,g-1)==58){Zi(w+=A(Ha(c),"&","&\f"),"&\f",Pp(u?l[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:w+=Ha(c);break;case 9:case 10:case 13:case 32:w+=B1(S);break;case 92:w+=F1(Ji()-1,7);continue;case 47:switch(pn()){case 42:case 47:Cr(Y1(U1(et(),Ji()),t,n,s),s);break;default:w+="/"}break;case 123*C:l[u++]=ot(w)*f;case 125*C:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+m:f==-1&&(w=A(w,/\f/g,"")),y>0&&ot(w)-g&&Cr(y>32?kc(w+";",r,n,g-1,s):kc(A(w," ","")+";",r,n,g-2,s),s);break;case 59:w+=";";default:if(Cr(x=Cc(w,t,n,u,m,i,l,p,v=[],k=[],g,o),o),c===123)if(m===0)eo(w,t,x,x,v,o,g,l,k);else switch(h===99&&se(w,3)===110?100:h){case 100:case 108:case 109:case 115:eo(e,x,x,r&&Cr(Cc(e,x,x,0,0,i,l,p,i,v=[],g,k),k),i,k,g,l,r?v:k);break;default:eo(w,x,x,x,[""],k,0,l,k)}}u=m=y=0,C=f=1,p=w="",g=a;break;case 58:g=1+ot(w),y=S;default:if(C<1){if(c==123)--C;else if(c==125&&C++==0&&b1()==125)continue}switch(w+=Xs(c),c*C){case 38:f=m>0?1:(w+="\f",-1);break;case 44:l[u++]=(ot(w)-1)*f,f=1;break;case 64:pn()===45&&(w+=Ha(et())),h=pn(),m=g=ot(p=w+=V1(Ji())),c++;break;case 45:S===45&&ot(w)==2&&(C=0)}}return o}function Cc(e,t,n,r,i,o,a,l,s,u,m,g){for(var h=i-1,y=i===0?o:[""],S=Np(y),C=0,N=0,f=0;C<r;++C)for(var c=0,p=Gn(e,h+1,h=Pp(N=a[C])),v=e;c<S;++c)(v=Op(N>0?y[c]+" "+p:A(p,/&\f/g,y[c])))&&(s[f++]=v);return ea(e,t,n,i===0?Zo:l,s,u,m,g)}function Y1(e,t,n,r){return ea(e,t,n,_p,Xs(D1()),Gn(e,2,-2),0,r)}function kc(e,t,n,r,i){return ea(e,t,n,Qs,Gn(e,0,r),Gn(e,r+1,-1),r,i)}function Ip(e,t,n){switch(L1(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return zr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+zr+e+V+e+e;case 5936:switch(se(e,t+11)){case 114:return D+e+V+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+V+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+V+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+V+e+e;case 6165:return D+e+V+"flex-"+e+e;case 5187:return D+e+A(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return D+e+V+"flex-item-"+A(e,/flex-|-self/g,"")+(mt(e,/flex-|baseline/)?"":V+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return D+e+V+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+V+A(e,"shrink","negative")+e;case 5292:return D+e+V+A(e,"basis","preferred-size")+e;case 6060:return D+"box-"+A(e,"-grow","")+D+e+V+A(e,"grow","positive")+e;case 4554:return D+A(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!mt(e,/flex-|baseline/))return V+"grid-column-align"+Gn(e,t)+e;break;case 2592:case 3360:return V+A(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,mt(r.props,/grid-\w+-end/)})?~Zi(e+(n=n[t].value),"span",0)?e:V+A(e,"-start","")+e+V+"grid-row-span:"+(~Zi(n,"span",0)?mt(n,/\d+/):+mt(n,/\d+/)-+mt(e,/\d+/))+";":V+A(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return mt(r.props,/grid-\w+-start/)})?e:V+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ot(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+zr+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Zi(e,"stretch",0)?Ip(A(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return V+i+":"+o+u+(a?V+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(se(e,t+6)===121)return A(e,":",":"+D)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(se(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+V+"$2box$3")+e;case 100:return A(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function Io(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Q1(e,t,n,r){switch(e.type){case z1:if(e.children.length)break;case A1:case Qs:return e.return=e.return||e.value;case _p:return"";case jp:return e.return=e.value+"{"+Io(e.children,r)+"}";case Zo:if(!ot(e.value=e.props.join(",")))return""}return ot(n=Io(e.children,r))?e.return=e.value+"{"+n+"}":""}function X1(e){var t=Np(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function q1(e){return function(t){t.root||(t=t.return)&&e(t)}}function G1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Qs:e.return=Ip(e.value,e.length,n);return;case jp:return Io([Tt(e,{value:A(e.value,"@","@"+D)})],r);case Zo:if(e.length)return M1(n=e.props,function(i){switch(mt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":kn(Tt(e,{props:[A(i,/:(read-\w+)/,":"+zr+"$1")]})),kn(Tt(e,{props:[i]})),Bl(e,{props:Sc(n,r)});break;case"::placeholder":kn(Tt(e,{props:[A(i,/:(plac\w+)/,":"+D+"input-$1")]})),kn(Tt(e,{props:[A(i,/:(plac\w+)/,":"+zr+"$1")]})),kn(Tt(e,{props:[A(i,/:(plac\w+)/,V+"input-$1")]})),kn(Tt(e,{props:[i]})),Bl(e,{props:Sc(n,r)});break}return""})}}var K1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Re={},Zn=typeof process<"u"&&Re!==void 0&&(Re.REACT_APP_SC_ATTR||Re.SC_ATTR)||"data-styled",Rp="active",Ap="data-styled-version",na="6.1.11",qs=`/*!sc*/
`,Gs=typeof window<"u"&&"HTMLElement"in window,Z1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Re!==void 0&&Re.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Re.REACT_APP_SC_DISABLE_SPEEDY!==""?Re.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Re.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Re!==void 0&&Re.SC_DISABLE_SPEEDY!==void 0&&Re.SC_DISABLE_SPEEDY!==""&&Re.SC_DISABLE_SPEEDY!=="false"&&Re.SC_DISABLE_SPEEDY),ra=Object.freeze([]),Jn=Object.freeze({});function J1(e,t,n){return n===void 0&&(n=Jn),e.theme!==n.theme&&e.theme||t||n.theme}var zp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tg=/(^-|-$)/g;function Ec(e){return e.replace(eg,"-").replace(tg,"")}var ng=/(a)(d)/gi,Ii=52,_c=function(e){return String.fromCharCode(e+(e>25?39:97))};function Vl(e){var t,n="";for(t=Math.abs(e);t>Ii;t=t/Ii|0)n=_c(t%Ii)+n;return(_c(t%Ii)+n).replace(ng,"$1-$2")}var $a,Lp=5381,Mn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Mp=function(e){return Mn(Lp,e)};function rg(e){return Vl(Mp(e)>>>0)}function ig(e){return e.displayName||e.name||"Component"}function Ba(e){return typeof e=="string"&&!0}var Dp=typeof Symbol=="function"&&Symbol.for,bp=Dp?Symbol.for("react.memo"):60115,og=Dp?Symbol.for("react.forward_ref"):60112,ag={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sg=(($a={})[og]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$a[bp]=Hp,$a);function jc(e){return("type"in(t=e)&&t.type.$$typeof)===bp?Hp:"$$typeof"in e?sg[e.$$typeof]:ag;var t}var ug=Object.defineProperty,cg=Object.getOwnPropertyNames,Pc=Object.getOwnPropertySymbols,fg=Object.getOwnPropertyDescriptor,dg=Object.getPrototypeOf,Oc=Object.prototype;function $p(e,t,n){if(typeof t!="string"){if(Oc){var r=dg(t);r&&r!==Oc&&$p(e,r,n)}var i=cg(t);Pc&&(i=i.concat(Pc(t)));for(var o=jc(e),a=jc(t),l=0;l<i.length;++l){var s=i[l];if(!(s in lg||n&&n[s]||a&&s in a||o&&s in o)){var u=fg(t,s);try{ug(e,s,u)}catch{}}}}return e}function er(e){return typeof e=="function"}function Ks(e){return typeof e=="object"&&"styledComponentId"in e}function cn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Nc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Zr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Wl(e,t,n){if(n===void 0&&(n=!1),!n&&!Zr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Wl(e[r],t[r]);else if(Zr(t))for(var r in t)e[r]=Wl(e[r],t[r]);return e}function Zs(e,t){Object.defineProperty(e,"toString",{value:t})}function oi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var pg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw oi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(qs);return n},e}(),to=new Map,Ro=new Map,no=1,Ri=function(e){if(to.has(e))return to.get(e);for(;Ro.has(no);)no++;var t=no++;return to.set(e,t),Ro.set(t,e),t},mg=function(e,t){no=t+1,to.set(e,t),Ro.set(t,e)},hg="style[".concat(Zn,"][").concat(Ap,'="').concat(na,'"]'),gg=new RegExp("^".concat(Zn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vg=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},yg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(qs),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(gg);if(s){var u=0|parseInt(s[1],10),m=s[2];u!==0&&(mg(m,u),vg(e,m,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function xg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Bp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Zn,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Zn,Rp),r.setAttribute(Ap,na);var a=xg();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},wg=function(){function e(t){this.element=Bp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw oi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Sg=function(){function e(t){this.element=Bp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Cg=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Tc=Gs,kg={isServer:!Gs,useCSSOMInjection:!Z1},Fp=function(){function e(t,n,r){t===void 0&&(t=Jn),n===void 0&&(n={});var i=this;this.options=je(je({},kg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Gs&&Tc&&(Tc=!1,function(o){for(var a=document.querySelectorAll(hg),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(Zn)!==Rp&&(yg(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Zs(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(g){var h=function(f){return Ro.get(f)}(g);if(h===void 0)return"continue";var y=o.names.get(h),S=a.getGroup(g);if(y===void 0||S.length===0)return"continue";var C="".concat(Zn,".g").concat(g,'[id="').concat(h,'"]'),N="";y!==void 0&&y.forEach(function(f){f.length>0&&(N+="".concat(f,","))}),s+="".concat(S).concat(C,'{content:"').concat(N,'"}').concat(qs)},m=0;m<l;m++)u(m);return s}(i)})}return e.registerId=function(t){return Ri(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(je(je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Cg(i):r?new wg(i):new Sg(i)}(this.options),new pg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ri(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ri(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ri(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Eg=/&/g,_g=/^\s*\/\/.*$/gm;function Up(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Up(n.children,t)),n})}function jg(e){var t,n,r,i=Jn,o=i.options,a=o===void 0?Jn:o,l=i.plugins,s=l===void 0?ra:l,u=function(h,y,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):h},m=s.slice();m.push(function(h){h.type===Zo&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Eg,n).replace(r,u))}),a.prefix&&m.push(G1),m.push(Q1);var g=function(h,y,S,C){y===void 0&&(y=""),S===void 0&&(S=""),C===void 0&&(C="&"),t=C,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var N=h.replace(_g,""),f=W1(S||y?"".concat(S," ").concat(y," { ").concat(N," }"):N);a.namespace&&(f=Up(f,a.namespace));var c=[];return Io(f,X1(m.concat(q1(function(p){return c.push(p)})))),c};return g.hash=s.length?s.reduce(function(h,y){return y.name||oi(15),Mn(h,y.name)},Lp).toString():"",g}var Pg=new Fp,Yl=jg(),Vp=Pe.createContext({shouldForwardProp:void 0,styleSheet:Pg,stylis:Yl});Vp.Consumer;Pe.createContext(void 0);function Ic(){return B.useContext(Vp)}var Og=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Yl);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Zs(this,function(){throw oi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Yl),this.name+t.hash},e}(),Ng=function(e){return e>="A"&&e<="Z"};function Rc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Ng(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Wp=function(e){return e==null||e===!1||e===""},Yp=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Wp(o)&&(Array.isArray(o)&&o.isCss||er(o)?r.push("".concat(Rc(i),":"),o,";"):Zr(o)?r.push.apply(r,To(To(["".concat(i," {")],Yp(o),!1),["}"],!1)):r.push("".concat(Rc(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in K1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function mn(e,t,n,r){if(Wp(e))return[];if(Ks(e))return[".".concat(e.styledComponentId)];if(er(e)){if(!er(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return mn(i,t,n,r)}var o;return e instanceof Og?n?(e.inject(n,r),[e.getName(r)]):[e]:Zr(e)?Yp(e):Array.isArray(e)?Array.prototype.concat.apply(ra,e.map(function(a){return mn(a,t,n,r)})):[e.toString()]}function Tg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(er(n)&&!Ks(n))return!1}return!0}var Ig=Mp(na),Rg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Tg(t),this.componentId=n,this.baseHash=Mn(Ig,n),this.baseStyle=r,Fp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=cn(i,this.staticRulesId);else{var o=Nc(mn(this.rules,t,n,r)),a=Vl(Mn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=cn(i,a),this.staticRulesId=a}else{for(var s=Mn(this.baseHash,r.hash),u="",m=0;m<this.rules.length;m++){var g=this.rules[m];if(typeof g=="string")u+=g;else if(g){var h=Nc(mn(g,t,n,r));s=Mn(s,h+m),u+=h}}if(u){var y=Vl(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=cn(i,y)}}return i},e}(),Qp=Pe.createContext(void 0);Qp.Consumer;var Fa={};function Ag(e,t,n){var r=Ks(e),i=e,o=!Ba(e),a=t.attrs,l=a===void 0?ra:a,s=t.componentId,u=s===void 0?function(v,k){var x=typeof v!="string"?"sc":Ec(v);Fa[x]=(Fa[x]||0)+1;var w="".concat(x,"-").concat(rg(na+x+Fa[x]));return k?"".concat(k,"-").concat(w):w}(t.displayName,t.parentComponentId):s,m=t.displayName,g=m===void 0?function(v){return Ba(v)?"styled.".concat(v):"Styled(".concat(ig(v),")")}(e):m,h=t.displayName&&t.componentId?"".concat(Ec(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,S=t.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(t.shouldForwardProp){var N=t.shouldForwardProp;S=function(v,k){return C(v,k)&&N(v,k)}}else S=C}var f=new Rg(n,h,r?i.componentStyle:void 0);function c(v,k){return function(x,w,j){var z=x.attrs,I=x.componentStyle,pe=x.defaultProps,nt=x.foldedComponentIds,ft=x.styledComponentId,Kt=x.target,ar=Pe.useContext(Qp),lr=Ic(),Zt=x.shouldForwardProp||lr.shouldForwardProp,P=J1(w,ar,pe)||Jn,T=function(_t,Ie,dt){for(var sr,en=je(je({},Ie),{className:void 0,theme:dt}),ca=0;ca<_t.length;ca+=1){var pi=er(sr=_t[ca])?sr(en):sr;for(var jt in pi)en[jt]=jt==="className"?cn(en[jt],pi[jt]):jt==="style"?je(je({},en[jt]),pi[jt]):pi[jt]}return Ie.className&&(en.className=cn(en.className,Ie.className)),en}(z,w,P),R=T.as||Kt,H={};for(var $ in T)T[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&T.theme===P||($==="forwardedAs"?H.as=T.forwardedAs:Zt&&!Zt($,R)||(H[$]=T[$]));var Jt=function(_t,Ie){var dt=Ic(),sr=_t.generateAndInjectStyles(Ie,dt.styleSheet,dt.stylis);return sr}(I,T),Qe=cn(nt,ft);return Jt&&(Qe+=" "+Jt),T.className&&(Qe+=" "+T.className),H[Ba(R)&&!zp.has(R)?"class":"className"]=Qe,H.ref=j,B.createElement(R,H)}(p,v,k)}c.displayName=g;var p=Pe.forwardRef(c);return p.attrs=y,p.componentStyle=f,p.displayName=g,p.shouldForwardProp=S,p.foldedComponentIds=r?cn(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=h,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(k){for(var x=[],w=1;w<arguments.length;w++)x[w-1]=arguments[w];for(var j=0,z=x;j<z.length;j++)Wl(k,z[j],!0);return k}({},i.defaultProps,v):v}}),Zs(p,function(){return".".concat(p.styledComponentId)}),o&&$p(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Ac(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var zc=function(e){return Object.assign(e,{isCss:!0})};function zg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(er(e)||Zr(e))return zc(mn(Ac(ra,To([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?mn(r):zc(mn(Ac(r,t)))}function Ql(e,t,n){if(n===void 0&&(n=Jn),!t)throw oi(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,zg.apply(void 0,To([i],o,!1)))};return r.attrs=function(i){return Ql(e,t,je(je({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ql(e,t,je(je({},n),i))},r}var Xp=function(e){return Ql(Ag,e)},ie=Xp;zp.forEach(function(e){ie[e]=Xp(e)});const Lg="/Yoga-IClub-LandingPage-React-Vite/assets/bela-about-desktop-CiaJkcbW.png",Mg=ie.section`
background: var(--C2-50p);
color: var(--C4);

.about-section  {
  display: flex;
  justify-content: space-between;
  margin: auto;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 3rem;
  padding: var(--spacing-s7, 56px) 76px;
}

.img-container {
  width: 45%;
}

.image {
  border-radius: 337px 337px var(--spacing-spacing-none, 0px) var(--spacing-spacing-none, 0px);
  border-right: 16px solid var(--C2, #C9D3D0);
  border-bottom: 16px solid var(--C2, #C9D3D0);
  background: url(${Lg}) lightgray 50% / cover no-repeat;
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  height: 100%;
}

.text-container {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 3rem;
  justify-content: center;
  text-align: center;
  width: 45%;
}

.about-title {
  text-align: center;
    font-family: syne, ivy, sans-serif;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em;
}

.text-container p {
  text-align: center;
}

@media screen and (max-width: 960px) {
  .about-section  {
    flex-direction: column;
    padding: 32px var(--spacing-s5, 40px) var(--spacing-s5, 40px) var(--spacing-s5, 40px);
  }
  .img-container {
    width: 100%;
    height: 600px;
    border-radius: 337px 337px var(--spacing-spacing-none, 0px) var(--spacing-spacing-none, 0px);
  }
  .image {
    max-width: 100%;
  }
  .text-container {
    width: 100%;
  }
}
@media screen and (max-width: 550px) {
  .about-section  {
    padding: var(--spacing-s3, 24px) 16px 28px 16px;
  }}
`,Dg=ie.section`
  color: var(--C4);
  flex-direction: row;
  padding: var(--spacing-s7, 56px) 76px;
  display: flex;
  justify-content: space-between;
  .doubt-about-title {
  font-family: syne, ivy, sans-serif;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em;
  }
.doubt-about-button {
  display: flex;
  width: 269px;
  color: var(--C1);
  padding: var(--spacing-s2, 16px);
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: var(--radius-radius-full, 360px);
  background: var(--C4, #123939);
  /* Sombra */
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  font-family: syne;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: 1px;
  text-transform: lowercase;
  border: 0.1rem solid transparent;
  }
.doubt-about-button:hover {
  color: var(--C4);
  background-color: inherit;
  border: 0.1rem solid var(--C4);
}
  @media screen and (max-width: 960px) {
    padding: 32px;
    .doubt-about-title {
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 600;
      letter-spacing: 0.1ch;
      line-height: 1.2em; 
    }
  }
@media screen and (max-width: 550px) {
  .doubt-about-title {
    text-align: center;
  
  }
    padding: 32px 16px;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
}
`;function qp({isMobile:e,isTablet:t}){const n=()=>e?"text-xs":t?"text-sm":"text-lg";return d.jsxs(d.Fragment,{children:[d.jsx(Mg,{id:"contact","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"150","data-aos-offset":"0",children:d.jsxs("div",{className:"about-section","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back",children:[!t&&d.jsx("h4",{className:"about-title",children:"Olá! Eu sou Isabella Cayuela,"}),d.jsx("div",{className:"img-container",children:d.jsx("div",{className:"image",alt:"Isabella Cayuela"})}),d.jsxs("div",{className:"text-xs text-container",children:[t&&d.jsx("h4",{className:"about-title",children:"Olá! Eu sou Isabella Cayuela,"}),d.jsx("p",{className:n(),children:"Há mais de 7 anos estudo, vivencio e ensino o Yoga para quem se propõe a embarcar na sua jornada de autoconhecimento e autocuidado."}),d.jsx("p",{className:n(),children:"Minha missão é transformar a vida das pessoas através da prática, fortalecer o corpo e a mente de quem firma o compromisso com sua melhor versão."}),d.jsx("p",{className:n(),children:"Com o objetivo de democratizar e acessibilizar o Yoga, criei o Yoga iClub, em 2021. Nossa plataforma conta com mais de 100 aulas entre elas: práticas de Yoga, respiratórios e meditações guiados. Aulas novas são adicionadas na plataforma toda semana."}),d.jsx("p",{className:n(),children:"Através da minha metodologia, tivemos mais de 500 vidas impactadas e transformadas. Vem fazer parte dessa comunidade também!"})]})]})}),d.jsxs(Dg,{children:[d.jsx("h4",{className:"doubt-about-title",children:"Ainda com dúvidas?"}),d.jsx("button",{className:"doubt-about-button",type:"button",children:d.jsx("a",{href:"https://api.whatsapp.com/send/?phone=5531996793158",target:"_blank",rel:"noopener noreferrer",children:"CONVERSE COMIGO"})})]})]})}qp.propTypes={isMobile:_.bool.isRequired,isTablet:_.bool.isRequired};const bg=ie.section`
  color: var(--C4);
  padding: var(--spacing-s7, 56px) 76px;
  padding-bottom: 3.2rem;
  .main_container {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  .doubt-main-title {
    font-family: syne, ivy, sans-serif;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.1ch;
    line-height: 1.2em;
    color: var(--C4);
    margin-bottom: 3.2rem;
  }
@media screen and (max-width: 960px) {
  padding: 32px 32px 48px 32px;
  .doubt-main-title {
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.1ch;
    line-height: 1.2em; 
    margin-bottom: 2.4rem;
  }
}
@media screen and (max-width: 550px) {
    .doubt-main-title {
    text-align: center;
  }
}
`,Hg=ie.div`
align-items: flex-start;
background: var(--C2-50p);
border-radius: var(--radius-radius-rounded);
box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
flex-shrink: 0;
gap: 2.4rem;
justify-content: space-between;
padding: 1.6rem 0;
width: 100%;

.question {
  background: var(--C2);
  padding: 1rem 3.2rem;
  width: 100%;
}

.answer {
  padding: 0 3.2rem;
  width: 100%;
}
`;function kr({question:e,answer:t,isMobile:n,isTablet:r}){const i=()=>n?"H6":r?"H5":"H4";return d.jsxs(Hg,{children:[d.jsx("h4",{className:`${i()} question`,children:e}),d.jsx("p",{className:`${n?"text-md":"text-xl"} answer`,children:t})]})}kr.propTypes={question:_.string.isRequired,answer:_.string.isRequired,isMobile:_.bool.isRequired,isTablet:_.bool.isRequired};function Gp({isMobile:e,isTabletAndMobile:t,isTablet:n}){return d.jsxs(bg,{id:"doubts","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"150","data-aos-offset":"0",children:[d.jsx("h4",{className:"doubt-main-title",children:"Dúvidas comuns"}),d.jsxs("div",{className:"main_container",children:[d.jsx(kr,{isTabletAndMobile:t,isMobile:e,isTablet:n,question:"Tenho passe livre pelas aulas ao vivo?",answer:"Sim, nós temos 4 aulas ao vivo na semana você escolhe quando praticar. As turmas são nas terças: 8h e 19h30, e quintas: 8h e 9h."}),d.jsx(kr,{isTabletAndMobile:t,isMobile:e,isTablet:n,question:"Posso pagar por boleto ou pix?",answer:"Sim, facilitamos todas as condições de pagamento para você."}),d.jsx(kr,{isTabletAndMobile:t,isMobile:e,isTablet:n,question:"Como funciona o crédito recorrente?",answer:"O valor total do iClub Pro anual é R$2.160,00, porém esse valor não irá comprometer totalmente o limite do seu cartão de crédito e sim apenas os R$180,00 por mês"}),d.jsx(kr,{isTabletAndMobile:t,isMobile:e,isTablet:n,question:"Nas aulas ao vivo o contato é direto com a Isabella Cayuela?",answer:"Sim, você terá contato direto comigo nas aulas ao vivo, onde conseguirei te corrigir sempre que necessário e guiar ao vivo técnicas exclusivas e mais avançadas."})]})]})}Gp.propTypes={isMobile:_.bool.isRequired,isTabletAndMobile:_.bool.isRequired,isTablet:_.bool.isRequired};var J={},Js={},ai={},li={},Kp="Expected a function",Lc=NaN,$g="[object Symbol]",Bg=/^\s+|\s+$/g,Fg=/^[-+]0x[0-9a-f]+$/i,Ug=/^0b[01]+$/i,Vg=/^0o[0-7]+$/i,Wg=parseInt,Yg=typeof Be=="object"&&Be&&Be.Object===Object&&Be,Qg=typeof self=="object"&&self&&self.Object===Object&&self,Xg=Yg||Qg||Function("return this")(),qg=Object.prototype,Gg=qg.toString,Kg=Math.max,Zg=Math.min,Ua=function(){return Xg.Date.now()};function Jg(e,t,n){var r,i,o,a,l,s,u=0,m=!1,g=!1,h=!0;if(typeof e!="function")throw new TypeError(Kp);t=Mc(t)||0,Ao(n)&&(m=!!n.leading,g="maxWait"in n,o=g?Kg(Mc(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h);function y(x){var w=r,j=i;return r=i=void 0,u=x,a=e.apply(j,w),a}function S(x){return u=x,l=setTimeout(f,t),m?y(x):a}function C(x){var w=x-s,j=x-u,z=t-w;return g?Zg(z,o-j):z}function N(x){var w=x-s,j=x-u;return s===void 0||w>=t||w<0||g&&j>=o}function f(){var x=Ua();if(N(x))return c(x);l=setTimeout(f,C(x))}function c(x){return l=void 0,h&&r?y(x):(r=i=void 0,a)}function p(){l!==void 0&&clearTimeout(l),u=0,r=s=i=l=void 0}function v(){return l===void 0?a:c(Ua())}function k(){var x=Ua(),w=N(x);if(r=arguments,i=this,s=x,w){if(l===void 0)return S(s);if(g)return l=setTimeout(f,t),y(s)}return l===void 0&&(l=setTimeout(f,t)),a}return k.cancel=p,k.flush=v,k}function e2(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(Kp);return Ao(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Jg(e,t,{leading:r,maxWait:t,trailing:i})}function Ao(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function t2(e){return!!e&&typeof e=="object"}function n2(e){return typeof e=="symbol"||t2(e)&&Gg.call(e)==$g}function Mc(e){if(typeof e=="number")return e;if(n2(e))return Lc;if(Ao(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ao(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Bg,"");var n=Ug.test(e);return n||Vg.test(e)?Wg(e.slice(2),n?2:8):Fg.test(e)?Lc:+e}var r2=e2,si={};Object.defineProperty(si,"__esModule",{value:!0});si.addPassiveEventListener=function(t,n,r){var i=r.name;i||(i=n,console.warn("Listener must be a named function.")),ro.has(n)||ro.set(n,new Set);var o=ro.get(n);if(!o.has(i)){var a=function(){var l=!1;try{var s=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",null,s)}catch{}return l}();t.addEventListener(n,r,a?{passive:!0}:!1),o.add(i)}};si.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r),ro.get(n).delete(r.name||n)};var ro=new Map;Object.defineProperty(li,"__esModule",{value:!0});var i2=r2,o2=l2(i2),a2=si;function l2(e){return e&&e.__esModule?e:{default:e}}var s2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,o2.default)(t,n)},X={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=s2(function(i){X.scrollHandler(t)},n);X.scrollSpyContainers.push(t),(0,a2.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return X.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=X.scrollSpyContainers[X.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(X.currentPositionX(t),X.currentPositionY(t))})},addStateHandler:function(t){X.spySetState.push(t)},addSpyHandler:function(t,n){var r=X.scrollSpyContainers[X.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(X.currentPositionX(n),X.currentPositionY(n))},updateStates:function(){X.spySetState.forEach(function(t){return t()})},unmount:function(t,n){X.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),X.spySetState&&X.spySetState.length&&X.spySetState.indexOf(t)>-1&&X.spySetState.splice(X.spySetState.indexOf(t),1),document.removeEventListener("scroll",X.scrollHandler)},update:function(){return X.scrollSpyContainers.forEach(function(t){return X.scrollHandler(t)})}};li.default=X;var or={},ui={};Object.defineProperty(ui,"__esModule",{value:!0});var u2=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,i=r?"#"+r:"",o=window&&window.location,a=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},c2=function(){return window.location.hash.replace(/^#/,"")},f2=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},d2=function(t){return getComputedStyle(t).position!=="static"},Va=function(t,n){for(var r=t.offsetTop,i=t.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},p2=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(d2(t)){if(n.offsetParent!==t){var i=function(m){return m===t||m===document},o=Va(n,i),a=o.offsetTop,l=o.offsetParent;if(l!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var s=function(m){return m===document};return Va(n,s).offsetTop-Va(t,s).offsetTop};ui.default={updateHash:u2,getHash:c2,filterElementInContainer:f2,scrollOffset:p2};var ia={},eu={};Object.defineProperty(eu,"__esModule",{value:!0});eu.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var tu={};Object.defineProperty(tu,"__esModule",{value:!0});var m2=si,h2=["mousedown","mousewheel","touchmove","keydown"];tu.default={subscribe:function(t){return typeof document<"u"&&h2.forEach(function(n){return(0,m2.addPassiveEventListener)(document,n,t)})}};var ci={};Object.defineProperty(ci,"__esModule",{value:!0});var Xl={registered:{},scrollEvent:{register:function(t,n){Xl.registered[t]=n},remove:function(t){Xl.registered[t]=null}}};ci.default=Xl;Object.defineProperty(ia,"__esModule",{value:!0});var g2=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v2=ui;oa(v2);var y2=eu,Dc=oa(y2),x2=tu,w2=oa(x2),S2=ci,at=oa(S2);function oa(e){return e&&e.__esModule?e:{default:e}}var Zp=function(t){return Dc.default[t.smooth]||Dc.default.defaultEasing},C2=function(t){return typeof t=="function"?t:function(){return t}},k2=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},ql=function(){return k2()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),Jp=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},e0=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},t0=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},E2=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},_2=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},j2=function e(t,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){at.default.registered.end&&at.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=e.bind(null,t,n);ql.call(window,o);return}at.default.registered.end&&at.default.registered.end(i.to,i.target,i.currentPosition)},nu=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},fi=function(t,n,r,i){n.data=n.data||Jp(),window.clearTimeout(n.data.delayTimeout);var o=function(){n.data.cancel=!0};if(w2.default.subscribe(o),nu(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?e0(n):t0(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){at.default.registered.end&&at.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=C2(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var a=Zp(n),l=j2.bind(null,a,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){at.default.registered.begin&&at.default.registered.begin(n.data.to,n.data.target),ql.call(window,l)},n.delay);return}at.default.registered.begin&&at.default.registered.begin(n.data.to,n.data.target),ql.call(window,l)},aa=function(t){return t=g2({},t),t.data=t.data||Jp(),t.absolute=!0,t},P2=function(t){fi(0,aa(t))},O2=function(t,n){fi(t,aa(n))},N2=function(t){t=aa(t),nu(t),fi(t.horizontal?E2(t):_2(t),t)},T2=function(t,n){n=aa(n),nu(n);var r=n.horizontal?e0(n):t0(n);fi(t+r,n)};ia.default={animateTopScroll:fi,getAnimationType:Zp,scrollToTop:P2,scrollToBottom:N2,scrollTo:O2,scrollMore:T2};Object.defineProperty(or,"__esModule",{value:!0});var I2=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R2=ui,A2=ru(R2),z2=ia,L2=ru(z2),M2=ci,Ai=ru(M2);function ru(e){return e&&e.__esModule?e:{default:e}}var zi={},bc=void 0;or.default={unmount:function(){zi={}},register:function(t,n){zi[t]=n},unregister:function(t){delete zi[t]},get:function(t){return zi[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return bc=t},getActiveLink:function(){return bc},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=I2({},n,{absolute:!1});var i=n.containerId,o=n.container,a=void 0;i?a=document.getElementById(i):o&&o.nodeType?a=o:a=document,n.absolute=!0;var l=n.horizontal,s=A2.default.scrollOffset(a,r,l)+(n.offset||0);if(!n.smooth){Ai.default.registered.begin&&Ai.default.registered.begin(t,r),a===document?n.horizontal?window.scrollTo(s,0):window.scrollTo(0,s):a.scrollTop=s,Ai.default.registered.end&&Ai.default.registered.end(t,r);return}L2.default.animateTopScroll(s,n,t,r)}};var la={};Object.defineProperty(la,"__esModule",{value:!0});var D2=ui,Wa=b2(D2);function b2(e){return e&&e.__esModule?e:{default:e}}var H2={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,i=r.get(t);if(i&&(n||t!==r.getActiveLink())){var o=this.containers[t]||document;r.scrollTo(t,{container:o})}},getHash:function(){return Wa.default.getHash()},changeHash:function(t,n){this.isInitialized()&&Wa.default.getHash()!==t&&Wa.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};la.default=H2;Object.defineProperty(ai,"__esModule",{value:!0});var Li=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$2=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B2=B,Hc=di(B2),F2=li,Mi=di(F2),U2=or,V2=di(U2),W2=ii,Y=di(W2),Y2=la,Ot=di(Y2);function di(e){return e&&e.__esModule?e:{default:e}}function Q2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X2(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function q2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var $c={to:Y.default.string.isRequired,containerId:Y.default.string,container:Y.default.object,activeClass:Y.default.string,activeStyle:Y.default.object,spy:Y.default.bool,horizontal:Y.default.bool,smooth:Y.default.oneOfType([Y.default.bool,Y.default.string]),offset:Y.default.number,delay:Y.default.number,isDynamic:Y.default.bool,onClick:Y.default.func,duration:Y.default.oneOfType([Y.default.number,Y.default.func]),absolute:Y.default.bool,onSetActive:Y.default.func,onSetInactive:Y.default.func,ignoreCancelEvents:Y.default.bool,hashSpy:Y.default.bool,saveHashHistory:Y.default.bool,spyThrottle:Y.default.number};ai.default=function(e,t){var n=t||V2.default,r=function(o){q2(a,o);function a(l){Q2(this,a);var s=X2(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return i.call(s),s.state={active:!1},s}return $2(a,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,u=this.props.container;return s&&!u?document.getElementById(s):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();Mi.default.isMounted(s)||Mi.default.mount(s,this.props.spyThrottle),this.props.hashSpy&&(Ot.default.isMounted()||Ot.default.mount(n),Ot.default.mapContainer(this.props.to,s)),Mi.default.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){Mi.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var u={};this.state&&this.state.active?u=Li({},this.props.style,this.props.activeStyle):u=Li({},this.props.style);var m=Li({},this.props);for(var g in $c)m.hasOwnProperty(g)&&delete m[g];return m.className=s,m.style=u,m.onClick=this.handleClick,Hc.default.createElement(e,m)}}]),a}(Hc.default.PureComponent),i=function(){var a=this;this.scrollTo=function(l,s){n.scrollTo(l,Li({},a.state,s))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(l,s){var u=a.getScrollSpyContainer();if(!(Ot.default.isMounted()&&!Ot.default.isInitialized())){var m=a.props.horizontal,g=a.props.to,h=null,y=void 0,S=void 0;if(m){var C=0,N=0,f=0;if(u.getBoundingClientRect){var c=u.getBoundingClientRect();f=c.left}if(!h||a.props.isDynamic){if(h=n.get(g),!h)return;var p=h.getBoundingClientRect();C=p.left-f+l,N=C+p.width}var v=l-a.props.offset;y=v>=Math.floor(C)&&v<Math.floor(N),S=v<Math.floor(C)||v>=Math.floor(N)}else{var k=0,x=0,w=0;if(u.getBoundingClientRect){var j=u.getBoundingClientRect();w=j.top}if(!h||a.props.isDynamic){if(h=n.get(g),!h)return;var z=h.getBoundingClientRect();k=z.top-w+s,x=k+z.height}var I=s-a.props.offset;y=I>=Math.floor(k)&&I<Math.floor(x),S=I<Math.floor(k)||I>=Math.floor(x)}var pe=n.getActiveLink();if(S){if(g===pe&&n.setActiveLink(void 0),a.props.hashSpy&&Ot.default.getHash()===g){var nt=a.props.saveHashHistory,ft=nt===void 0?!1:nt;Ot.default.changeHash("",ft)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(g,h))}if(y&&(pe!==g||a.state.active===!1)){n.setActiveLink(g);var Kt=a.props.saveHashHistory,ar=Kt===void 0?!1:Kt;a.props.hashSpy&&Ot.default.changeHash(g,ar),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(g,h))}}}};return r.propTypes=$c,r.defaultProps={offset:0},r};Object.defineProperty(Js,"__esModule",{value:!0});var G2=B,Bc=n0(G2),K2=ai,Z2=n0(K2);function n0(e){return e&&e.__esModule?e:{default:e}}function J2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ev(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var tv=function(e){ev(t,e);function t(){var n,r,i,o;J2(this,t);for(var a=arguments.length,l=Array(a),s=0;s<a;s++)l[s]=arguments[s];return o=(r=(i=Fc(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(l))),i),i.render=function(){return Bc.default.createElement("a",i.props,i.props.children)},r),Fc(i,o)}return t}(Bc.default.Component);Js.default=(0,Z2.default)(tv);var iu={};Object.defineProperty(iu,"__esModule",{value:!0});var nv=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),rv=B,Uc=r0(rv),iv=ai,ov=r0(iv);function r0(e){return e&&e.__esModule?e:{default:e}}function av(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function sv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var uv=function(e){sv(t,e);function t(){return av(this,t),lv(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return nv(t,[{key:"render",value:function(){return Uc.default.createElement("button",this.props,this.props.children)}}]),t}(Uc.default.Component);iu.default=(0,ov.default)(uv);var ou={},sa={};Object.defineProperty(sa,"__esModule",{value:!0});var cv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fv=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),dv=B,Vc=ua(dv),pv=gp;ua(pv);var mv=or,Wc=ua(mv),hv=ii,Yc=ua(hv);function ua(e){return e&&e.__esModule?e:{default:e}}function gv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function yv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}sa.default=function(e){var t=function(n){yv(r,n);function r(i){gv(this,r);var o=vv(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return fv(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Wc.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){Wc.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return Vc.default.createElement(e,cv({},this.props,{parentBindings:this.childBindings}))}}]),r}(Vc.default.Component);return t.propTypes={name:Yc.default.string,id:Yc.default.string},t};Object.defineProperty(ou,"__esModule",{value:!0});var Qc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xv=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),wv=B,Xc=au(wv),Sv=sa,Cv=au(Sv),kv=ii,qc=au(kv);function au(e){return e&&e.__esModule?e:{default:e}}function Ev(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function jv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i0=function(e){jv(t,e);function t(){return Ev(this,t),_v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return xv(t,[{key:"render",value:function(){var r=this,i=Qc({},this.props);return delete i.name,i.parentBindings&&delete i.parentBindings,Xc.default.createElement("div",Qc({},i,{ref:function(a){r.props.parentBindings.domNode=a}}),this.props.children)}}]),t}(Xc.default.Component);i0.propTypes={name:qc.default.string,id:qc.default.string};ou.default=(0,Cv.default)(i0);var Ya=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gc=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Kc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Jc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Di=B,tn=li,Qa=or,q=ii,Nt=la,ef={to:q.string.isRequired,containerId:q.string,container:q.object,activeClass:q.string,spy:q.bool,smooth:q.oneOfType([q.bool,q.string]),offset:q.number,delay:q.number,isDynamic:q.bool,onClick:q.func,duration:q.oneOfType([q.number,q.func]),absolute:q.bool,onSetActive:q.func,onSetInactive:q.func,ignoreCancelEvents:q.bool,hashSpy:q.bool,spyThrottle:q.number},Pv={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Qa,i=function(a){Jc(l,a);function l(s){Kc(this,l);var u=Zc(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,s));return o.call(u),u.state={active:!1},u}return Gc(l,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,m=this.props.container;return u?document.getElementById(u):m&&m.nodeType?m:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();tn.isMounted(u)||tn.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Nt.isMounted()||Nt.mount(r),Nt.mapContainer(this.props.to,u)),this.props.spy&&tn.addStateHandler(this.stateHandler),tn.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){tn.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var m=Ya({},this.props);for(var g in ef)m.hasOwnProperty(g)&&delete m[g];return m.className=u,m.onClick=this.handleClick,Di.createElement(t,m)}}]),l}(Di.Component),o=function(){var l=this;this.scrollTo=function(s,u){r.scrollTo(s,Ya({},l.state,u))},this.handleClick=function(s){l.props.onClick&&l.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),l.scrollTo(l.props.to,l.props)},this.stateHandler=function(){r.getActiveLink()!==l.props.to&&(l.state!==null&&l.state.active&&l.props.onSetInactive&&l.props.onSetInactive(),l.setState({active:!1}))},this.spyHandler=function(s){var u=l.getScrollSpyContainer();if(!(Nt.isMounted()&&!Nt.isInitialized())){var m=l.props.to,g=null,h=0,y=0,S=0;if(u.getBoundingClientRect){var C=u.getBoundingClientRect();S=C.top}if(!g||l.props.isDynamic){if(g=r.get(m),!g)return;var N=g.getBoundingClientRect();h=N.top-S+s,y=h+N.height}var f=s-l.props.offset,c=f>=Math.floor(h)&&f<Math.floor(y),p=f<Math.floor(h)||f>=Math.floor(y),v=r.getActiveLink();if(p)return m===v&&r.setActiveLink(void 0),l.props.hashSpy&&Nt.getHash()===m&&Nt.changeHash(),l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive()),tn.updateStates();if(c&&v!==m)return r.setActiveLink(m),l.props.hashSpy&&Nt.changeHash(m),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(m)),tn.updateStates()}}};return i.propTypes=ef,i.defaultProps={offset:0},i},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Jc(i,r);function i(o){Kc(this,i);var a=Zc(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return a.childBindings={domNode:null},a}return Gc(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Qa.unregister(this.props.name)}},{key:"registerElems",value:function(a){Qa.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return Di.createElement(t,Ya({},this.props,{parentBindings:this.childBindings}))}}]),i}(Di.Component);return n.propTypes={name:q.string,id:q.string},n}},Ov=Pv;Object.defineProperty(J,"__esModule",{value:!0});J.Helpers=J.ScrollElement=J.ScrollLink=J.animateScroll=J.scrollSpy=J.Events=J.scroller=J.Element=J.Button=gt=J.Link=void 0;var Nv=Js,o0=ct(Nv),Tv=iu,a0=ct(Tv),Iv=ou,l0=ct(Iv),Rv=or,s0=ct(Rv),Av=ci,u0=ct(Av),zv=li,c0=ct(zv),Lv=ia,f0=ct(Lv),Mv=ai,d0=ct(Mv),Dv=sa,p0=ct(Dv),bv=Ov,m0=ct(bv);function ct(e){return e&&e.__esModule?e:{default:e}}var gt=J.Link=o0.default;J.Button=a0.default;J.Element=l0.default;J.scroller=s0.default;J.Events=u0.default;J.scrollSpy=c0.default;J.animateScroll=f0.default;J.ScrollLink=d0.default;J.ScrollElement=p0.default;J.Helpers=m0.default;J.default={Link:o0.default,Button:a0.default,Element:l0.default,scroller:s0.default,Events:u0.default,scrollSpy:c0.default,animateScroll:f0.default,ScrollLink:d0.default,ScrollElement:p0.default,Helpers:m0.default};const Hv="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%2011.355C22.821%2011.355%2023.1547%2011.3651%2024.2669%2011.4157C25.2983%2011.4662%2025.8544%2011.6381%2026.2285%2011.7797C26.724%2011.9718%2027.0677%2012.2044%2027.4419%2012.5684C27.816%2012.9425%2028.0384%2013.2863%2028.2305%2013.7817C28.3721%2014.1558%2028.544%2014.7119%2028.5945%2015.7433C28.6451%2016.8555%2028.6552%2017.1892%2028.6552%2020.0102C28.6552%2022.8313%2028.6451%2023.1649%2028.5945%2024.2772C28.544%2025.3085%2028.3721%2025.8646%2028.2305%2026.2387C28.0384%2026.7342%2027.8059%2027.078%2027.4419%2027.4521C27.0779%2027.8161%2026.724%2028.0486%2026.2285%2028.2408C25.8544%2028.3823%2025.2983%2028.5542%2024.2669%2028.6048C23.1547%2028.6553%2022.821%2028.6654%2020%2028.6654C17.179%2028.6654%2016.8453%2028.6553%2015.7331%2028.6048C14.7017%2028.5542%2014.1456%2028.3823%2013.7715%2028.2408C13.276%2028.0486%2012.9323%2027.8161%2012.5581%2027.4521C12.184%2027.078%2011.9616%2026.7342%2011.7695%2026.2387C11.6279%2025.8646%2011.456%2025.3085%2011.4055%2024.2772C11.3549%2023.1649%2011.3448%2022.8313%2011.3448%2020.0102C11.3448%2017.1892%2011.3549%2016.8555%2011.4055%2015.7433C11.456%2014.7119%2011.6279%2014.1558%2011.7695%2013.7817C11.9616%2013.2863%2012.1941%2012.9425%2012.5581%2012.5684C12.9323%2012.1942%2013.276%2011.9718%2013.7715%2011.7797C14.1456%2011.6381%2014.7017%2011.4662%2015.7331%2011.4157C16.8453%2011.3651%2017.179%2011.355%2020%2011.355ZM20%209.4541C17.1385%209.4541%2016.7745%209.46421%2015.6522%209.51477C14.5298%209.56532%2013.7614%209.74733%2013.094%2010.0102C12.3964%2010.2832%2011.8099%2010.6371%2011.2235%2011.2236C10.637%2011.81%2010.273%2012.3965%2010.0101%2013.0941C9.74723%2013.7615%209.57534%2014.5299%209.52478%2015.6523C9.47422%2016.7746%209.46411%2017.1386%209.46411%2020.0001C9.46411%2022.8616%209.47422%2023.2256%209.52478%2024.3479C9.57534%2025.4703%209.75734%2026.2387%2010.0101%2026.9061C10.2831%2027.6037%2010.637%2028.1902%2011.2235%2028.7766C11.8099%2029.3631%2012.3964%2029.7271%2013.094%2029.99C13.7614%2030.2529%2014.5298%2030.4248%2015.6522%2030.4854C16.7745%2030.536%2017.1385%2030.5461%2020%2030.5461C22.8615%2030.5461%2023.2255%2030.536%2024.3478%2030.4854C25.4702%2030.4349%2026.2386%2030.2529%2026.906%2029.99C27.6036%2029.717%2028.1901%2029.3631%2028.7765%2028.7766C29.363%2028.1902%2029.727%2027.6037%2029.9899%2026.9061C30.2528%2026.2387%2030.4247%2025.4703%2030.4853%2024.3479C30.5359%2023.2256%2030.546%2022.8616%2030.546%2020.0001C30.546%2017.1386%2030.5359%2016.7746%2030.4853%2015.6523C30.4348%2014.5299%2030.2528%2013.7615%2029.9899%2013.0941C29.7169%2012.3965%2029.363%2011.81%2028.7765%2011.2236C28.1901%2010.6371%2027.6036%2010.2731%2026.906%2010.0102C26.2386%209.74733%2025.4702%209.57544%2024.3478%209.51477C23.2255%209.46421%2022.8615%209.4541%2020%209.4541Z'%20fill='%23123939'/%3e%3cpath%20d='M19.9999%2014.5806C17.007%2014.5806%2014.5803%2017.0073%2014.5803%2020.0002C14.5803%2022.9931%2017.007%2025.4198%2019.9999%2025.4198C22.9929%2025.4198%2025.4196%2022.9931%2025.4196%2020.0002C25.4196%2017.0073%2022.9929%2014.5806%2019.9999%2014.5806ZM19.9999%2023.5189C18.0586%2023.5189%2016.4812%2021.9415%2016.4812%2020.0002C16.4812%2018.0588%2018.0586%2016.4815%2019.9999%2016.4815C21.9413%2016.4815%2023.5186%2018.0588%2023.5186%2020.0002C23.5186%2021.9415%2021.9413%2023.5189%2019.9999%2023.5189Z'%20fill='%23123939'/%3e%3cpath%20d='M26.896%2014.3679C26.896%2015.0656%2026.3297%2015.6318%2025.6321%2015.6318C24.9344%2015.6318%2024.3682%2015.0656%2024.3682%2014.3679C24.3682%2013.6702%2024.9344%2013.104%2025.6321%2013.104C26.3297%2013.104%2026.896%2013.6702%2026.896%2014.3679Z'%20fill='%23123939'/%3e%3c/svg%3e",$v="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.5461%2019.4641C30.4046%2013.9029%2025.8242%209.44385%2020.1922%209.44385C14.5603%209.44385%2010.081%2013.8018%209.83833%2019.2821C9.83833%2019.4337%209.83833%2019.5854%209.83833%2019.7371C9.83833%2021.6784%2010.3843%2023.4984%2011.3247%2025.0455L9.4541%2030.5662L15.1973%2028.7462C16.6836%2029.5652%2018.3924%2030.0303%2020.2023%2030.0303C25.9253%2030.0303%2030.5663%2025.4297%2030.5663%2019.7472C30.5663%2019.6562%2030.5663%2019.5753%2030.5663%2019.4843L30.5461%2019.4641ZM20.1922%2028.3721C18.4228%2028.3721%2016.7746%2027.8463%2015.3995%2026.9363L12.0527%2028.0081L13.1346%2024.7927C12.0931%2023.367%2011.4763%2021.6178%2011.4763%2019.727C11.4763%2019.4438%2011.4865%2019.1607%2011.5168%2018.8877C11.9415%2014.5096%2015.6725%2011.0819%2020.1821%2011.0819C24.6917%2011.0819%2028.5138%2014.6006%2028.8676%2019.0495C28.8879%2019.272%2028.898%2019.4944%2028.898%2019.727C28.898%2024.4995%2024.9849%2028.3721%2020.1821%2028.3721H20.1922Z'%20fill='%23123939'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.9443%2021.81C24.6915%2021.6887%2023.4377%2021.0719%2023.2052%2020.991C22.9726%2020.9%2022.8007%2020.8697%2022.6288%2021.1123C22.457%2021.3651%2021.9716%2021.9314%2021.82%2022.0931C21.6683%2022.265%2021.5267%2022.2852%2021.2638%2022.1538C21.0111%2022.0325%2020.192%2021.7696%2019.2214%2020.9C18.4731%2020.2327%2017.9575%2019.4137%2017.8058%2019.1609C17.6642%2018.9081%2017.7957%2018.7767%2017.917%2018.6452C18.0282%2018.534%2018.1698%2018.352%2018.3012%2018.2003C18.3316%2018.1599%2018.3619%2018.1194%2018.3922%2018.079C18.4529%2017.988%2018.4934%2017.897%2018.554%2017.7756C18.645%2017.6038%2018.5945%2017.4622%2018.5338%2017.3307C18.4731%2017.2094%2017.9575%2015.9657%2017.7451%2015.4602C17.5328%2014.9546%2017.3205%2015.0456%2017.1688%2015.0456C17.0171%2015.0456%2016.8553%2015.0254%2016.6835%2015.0254C16.5116%2015.0254%2016.2386%2015.0861%2016.006%2015.3388C15.7734%2015.5916%2015.1162%2016.1983%2015.1162%2017.442C15.1162%2017.7352%2015.1668%2018.0284%2015.2477%2018.3014C15.5004%2019.1912%2016.0566%2019.9192%2016.1577%2020.0507C16.279%2020.2124%2017.917%2022.8414%2020.4954%2023.8626C23.0839%2024.8636%2023.0839%2024.5299%2023.549%2024.4895C24.0141%2024.4491%2025.0555%2023.8828%2025.2578%2023.2863C25.4701%2022.6998%2025.4701%2022.1942%2025.4094%2022.083C25.3488%2021.9819%2025.1769%2021.9212%2024.9241%2021.7898L24.9443%2021.81Z'%20fill='%23123939'/%3e%3c/svg%3e",h0="/Yoga-IClub-LandingPage-React-Vite/assets/yoga_iclub-DT47OFC5.svg",Bv="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M29.1608%2011.5166C27.3105%2011.0212%2020.7483%2011.001%2020.0001%2011.001C19.2518%2011.001%2012.6896%2011.0111%2010.8393%2011.5166C9.52483%2011.8705%208.49349%2012.912%208.13959%2014.2265C7.63403%2016.1173%207.63403%2019.8382%207.63403%2020C7.63403%2020.1617%207.63403%2023.8827%208.13959%2025.7735C8.49349%2027.0879%209.52483%2028.1294%2010.8393%2028.4833C12.6896%2028.9787%2019.2518%2028.999%2020.0001%2028.999C20.7483%2028.999%2027.3105%2028.9888%2029.1608%2028.4833C30.4753%2028.1294%2031.5066%2027.0879%2031.8605%2025.7735C32.3661%2023.8827%2032.3661%2020.1617%2032.3661%2020C32.3661%2019.8382%2032.3661%2016.1173%2031.8605%2014.2265C31.5066%2012.912%2030.4753%2011.8705%2029.1608%2011.5166ZM30.0001%2025.278C29.8282%2025.9353%2029.3125%2026.4509%2028.6654%2026.6228C27.452%2026.9464%2022.8211%2027.0677%2020.0102%2027.0677C17.1993%2027.0677%2012.5683%2026.9464%2011.355%2026.6228C10.7078%2026.4509%2010.1922%2025.9353%2010.0203%2025.278C9.65628%2023.913%209.57539%2021.001%209.57539%2020C9.57539%2018.999%209.65628%2016.0869%2010.0203%2014.7219C10.1922%2014.0647%2010.7078%2013.549%2011.355%2013.3771C12.5683%2013.0536%2017.1993%2012.9322%2020.0102%2012.9322C22.8211%2012.9322%2027.452%2013.0536%2028.6654%2013.3771C29.3125%2013.549%2029.8282%2014.0647%2030.0001%2014.7219C30.3641%2016.0869%2030.445%2018.999%2030.445%2020C30.445%2021.001%2030.3641%2023.913%2030.0001%2025.278Z'%20fill='%23123939'/%3e%3cpath%20d='M23.4176%2019.6459L18.0788%2016.6126C18.0182%2016.5721%2017.9474%2016.562%2017.8766%2016.562C17.8058%2016.562%2017.7351%2016.5822%2017.6744%2016.6227C17.5531%2016.6935%2017.4722%2016.8249%2017.4722%2016.9766V23.0534C17.4722%2023.195%2017.5531%2023.3264%2017.6744%2023.4073C17.7957%2023.4781%2017.9575%2023.4781%2018.0788%2023.4073L23.4176%2020.3739C23.549%2020.3032%2023.6198%2020.1616%2023.6198%2020.0201C23.6198%2019.8785%2023.5389%2019.7369%2023.4176%2019.6662V19.6459Z'%20fill='%23123939'/%3e%3c/svg%3e",Lt={spy:!0,smooth:"easeInOutQuart",duration:900,offset:-70,delay:300},Fv=ie.div`
background: var(--C2);
color: var(--C4);
display: flex;
padding: var(--spacing-s3, 24px) 76px;
justify-content: space-between;
align-items: center;
align-self: center;

.logo {
  width: 14.188rem;
  height: 3.6rem;
}
.social-links-footer {
    gap: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.social-links a img{
  width: 4rem;
}
.home-icon{
  width: 2.6rem;
  height: 2.6rem;
}
@media screen and (max-width: 960px) {
  padding: var(--spacing-s3, 24px) 32px;
}
@media screen and (max-width: 550px) {
  padding: var(--spacing-s3, 24px) 16px;
}
@media screen and (max-width: 390px) {
  justify-content: center;
  .logo {
    display: none;
  }
}

`;var g0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},tf=Pe.createContext&&Pe.createContext(g0),Uv=["attr","size","title"];function Vv(e,t){if(e==null)return{};var n=Wv(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wv(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function zo(){return zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zo.apply(this,arguments)}function nf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Lo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nf(Object(n),!0).forEach(function(r){Yv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yv(e,t,n){return t=Qv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qv(e){var t=Xv(e,"string");return typeof t=="symbol"?t:t+""}function Xv(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function v0(e){return e&&e.map((t,n)=>Pe.createElement(t.tag,Lo({key:n},t.attr),v0(t.child)))}function qv(e){return t=>Pe.createElement(Gv,zo({attr:Lo({},e.attr)},t),v0(e.child))}function Gv(e){var t=n=>{var{attr:r,size:i,title:o}=e,a=Vv(e,Uv),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Pe.createElement("svg",zo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:s,style:Lo(Lo({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&Pe.createElement("title",null,o),e.children)};return tf!==void 0?Pe.createElement(tf.Consumer,null,n=>t(n)):t(g0)}function Kv(e){return qv({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z"},child:[]}]})(e)}function Zv(e){return d.jsxs(Fv,{isMobile:e,children:[d.jsxs("nav",{className:"social-links-footer",children:[d.jsx("a",{href:"https://www.instagram.com/isabellacayuela/",target:"_blank",rel:"noopener noreferrer",children:d.jsx("img",{src:Hv,alt:"instagram"})}),d.jsx("a",{href:"https://api.whatsapp.com/send/?phone=5531996793158",target:"_blank",rel:"noopener noreferrer",children:d.jsx("img",{src:$v,alt:"whatsapp"})}),d.jsx("a",{href:"https://www.youtube.com/@isabellacayuelayoga",target:"_blank",rel:"noopener noreferrer",children:d.jsx("img",{src:Bv,alt:"youtube"})}),d.jsx("a",{href:"https://yogaiclub.isabellacayuela.com.br",target:"_blank",rel:"noopener noreferrer",children:d.jsx(Kv,{className:"home-icon"})})]}),d.jsx(gt,{className:"",to:"prices",...Lt,children:d.jsx("img",{className:"logo",src:h0,alt:"yoga-logo"})})]})}const Jv=ie.header`
background: var(--C2);
padding: 1.7rem 7.6rem ;
width: 100%;
position: sticky;
top: 0;
z-index: 99;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);

.link {
  height: 100%;
  align-items: center;
  display: flex;
}

.header-link {
  font-family: syne;
  font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 30px */
letter-spacing: 0.5px;
}
.headerNav {
  flex-direction: row;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}//1.5 de padding para não ficar colado no scroll da tela

.headerNav img {
  width: 141.882px;
}

.button_container {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.button {
  color: var(--C4);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button:active {
  scale: 0.98;
}

/* Tablet */
@media screen and (max-width: 960px) {
  padding: 1.7rem 3.2rem ;
  .headerNav {
    max-width: 538px;
    margin: auto;
  }
  .desktop-link {
    display: none;
  }
}
@media screen and (max-width: 550px) { 
  .header-link  {
    display: none;
  }
  .logo-header {
    margin: auto;
  }
}
`;function y0(){return d.jsx(Jv,{children:d.jsxs("nav",{className:" headerNav",children:[d.jsx("button",{className:"header-link",type:"button",children:d.jsx(gt,{to:"start",...Lt,children:" início "})}),d.jsx("button",{className:"header-link desktop-link",type:"button",children:d.jsx(gt,{to:"students",...Lt,children:" depoimentos "})}),d.jsx(gt,{className:"logo-header",to:"prices",...Lt,children:d.jsx("img",{alt:"logo",src:h0})}),d.jsx("button",{className:"header-link desktop-link",type:"button",children:d.jsx(gt,{to:"doubts",...Lt,children:" dúvidas"})}),d.jsx("button",{className:"header-link",type:"button",children:d.jsx(gt,{to:"contact",...Lt,children:" contato "})})]})})}y0.propTypes={isTablet:_.bool.isRequired};const ey="/Yoga-IClub-LandingPage-React-Vite/assets/hero-D59aOg0h.jpg",ty=ie.section`
  flex-direction: row;
  display: flex;
  justify-content: center;
  padding: var(--radius-r5, 128px) 76px 164px 76px;
  padding-top: 5.2rem;
  background: url(${ey}) ;
  background-size: cover;
  background-position: center;
  position: relative;
  .hero-color-bg {
    background: #C9D3D0A6;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .divider-hero {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 136px;
    transform: translateY(50%);
    z-index: 1;
  }
  @media screen and (max-width: 960px) {
    padding-top: 5.8rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    padding-bottom: 12.8rem;
  }
`,ny=ie.div`
  max-width: 744px;
  position: relative;
  z-index: 2;
  padding: 40px 24px 52px 24px;
  padding-top: 5.8rem;
  padding-bottom: 5.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  color: var(--C4);
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  justify-content: center;
  text-align: center;
  width: 100%;
  border-radius: var(--spacing-s5, 40px);
  background: rgba(201, 211, 208, 0.65);
.text-hero {
  font-family: syne;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
  letter-spacing: 0.54px;
}
.hero-button {
  display: flex;
  padding: var(--spacing-s2, 16px) var(--spacing-s4, 32px);
  justify-content: center;
  align-items: center;
  color: var(--C1, #EFEFEF);
  border-radius: var(--radius-radius-full, 360px);
  background: var(--C4, #123939);
  font-family: syne;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: 1px;
  text-transform: lowercase;
  border: 0.1rem solid var(--C4);
}
.hero-button:hover {
  background-color: inherit;
  border: 0.1rem solid var(--C4);
  color: var(--C4);
}

@media screen and (max-width: 960px) {
  max-width: 100%;
  display: flex;
  max-width: 680px;
  padding: 32px 32px var(--spacing-s5, 40px) 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s3, 24px);
  align-self: stretch;
  .text-hero {
    font-family: syne;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 155.556% */
    letter-spacing: 0.54px;
  }
  .hero-button  {
    display: flex;
    padding: var(--spacing-s2, 16px) var(--spacing-s4, 32px);
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s1, 8px);
    font-family: syne;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21.6px; /* 120% */
    letter-spacing: 0.9px;
    text-transform: lowercase;

  }
}

@media screen and (max-width: 550px) {
  .text-hero {
    font-size: 11.5px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 139.13% */
    letter-spacing: 0.345px;
  }
  .hero-button {
    padding: 12px 18px 13.5px 18px;
    gap: var(--spacing-s1, 8px);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 22.5px */
    letter-spacing: 0.375px;
    height: 35.5px;
  }

}
`;function x0({isMobile:e,isTablet:t}){const n=()=>{let r="H2";return t&&(r="H3"),e&&(r="H4"),r};return d.jsxs(ny,{className:"hero_text",children:[d.jsx("h2",{className:`${n()} main_title`,children:"Olá, meu nome é Isabella Cayuela, seja muito bem vinda ao nosso espaço de Yoga!"}),d.jsx("div",{children:d.jsx("p",{className:"text-hero",children:"Você já sabe que está há um passo de encontrar uma vida com mais calma e leveza né?! Mas quero saber se está preparada para além da leveza e calmaria se sentir muito bem com seu corpo e consigo mesma?"})}),d.jsx("div",{className:"button_container",children:d.jsx(gt,{className:"link",to:"prices",...Lt,children:d.jsx("button",{className:"hero-button",type:"button",children:"Quero começar agora!"})})})]})}x0.propTypes={isTabletAndMobile:_.bool.isRequired,isTablet:_.bool.isRequired,isMobile:_.bool.isRequired};const w0="/Yoga-IClub-LandingPage-React-Vite/assets/DIVISOR-C-56YPhB.png";function S0({isTabletAndMobile:e,isMobile:t,isTablet:n}){return d.jsxs(ty,{id:"start",children:[d.jsx(x0,{isTabletAndMobile:e,isMobile:t,isTablet:n}),d.jsx("div",{className:"hero-color-bg "}),d.jsx("img",{className:"divider-hero",src:w0,alt:""})]})}S0.propTypes={isTabletAndMobile:_.bool.isRequired,isTablet:_.bool.isRequired,isMobile:_.bool.isRequired};const C0="/Yoga-IClub-LandingPage-React-Vite/assets/pillarFirst-8-PXftxA.png",k0="/Yoga-IClub-LandingPage-React-Vite/assets/pillarSecond-CK57ILom.png",E0="/Yoga-IClub-LandingPage-React-Vite/assets/pillarThird-CGUfr13z.png",ry=ie.section`
  color: var(--C4);
  width: 100%;
  display: flex;
  padding: var(--spacing-spacing-none, 0px) 76px var(--spacing-s3, 24px) 76px;
  flex-direction: column;
  align-items: flex-start;
.pillar-question {
  font-family: syne, ivy, sans-serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 530;
  line-height: 1.5em;
  letter-spacing: 0.2ch;
  color: var(--C4, #123939);
  position: relative;
  z-index: 2;
}
.pillars_container {
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  padding-right: 0;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  margin-bottom: 4rem;
  gap: 3rem;
}
.pillar-main-title {
  position: relative;
  z-index: 2;
  margin-bottom: 1.6rem;
  font-family: syne;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px; /* 137.143% */
}
.pillar-main-text {
  color: var(--C4, #123939);
  text-align: center;
  font-family: syne;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  letter-spacing: 0.72px; 
  max-width: 936px;
  margin: 0 auto;
  margin-bottom: 2.8rem;
}
.pillar-main-button{
  display: flex;
  padding: var(--spacing-s2, 16px) var(--spacing-s4, 32px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s1, 8px);
  border-radius: var(--radius-radius-full, 360px);
  background: var(--C4, #123939);
  /* Sombra */
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  color: var(--C1, #ffffff);
  font-family: Arial , sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.1ch;
  text-transform: uppercase;
  padding: 0.6em 1.2em;
  line-height: 1.5em;
  margin: 0 auto;
  border: 1px solid var(--C4, #123939);
  transition: all 0.3s;
}
.pillar-main-button:hover  {
  background: transparent;
  color: var(--C4, #123939);
}

@media screen and (max-width: 960px) {
  padding: var(--spacing-spacing-none, 0px) 32px 32px 32px;
  .pillar-main-title { 
    margin-bottom: 2.4rem;
  }
  .pillar-question {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 0.32px;
  }
  .pillar-main-title {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; /* 125% */
  }
  .pillar-main-text {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 144.444% */
    letter-spacing: 0.27px;
  }
  .pillar-main-button {
    padding: var(--spacing-s2, 16px) var(--spacing-s4, 32px);
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s1, 8px);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21.6px; /* 120% */
    letter-spacing: 0.9px;
  }
}
@media screen and (max-width: 760px) {
  .pillars_container {
    display: grid;
    grid-template-columns: 1fr;
  }}
@media screen and (max-width: 550px) {
  padding: var(--spacing-spacing-none, 0px) var(--spacing-s3, 24px) 32px var(--spacing-s3, 24px);
  .pillar-main-title {
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 34px; /* 121.429% */
  }
  .pillar-main-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
    letter-spacing: 0.08px;
  }
  .pillar-main-button {
    padding: 12px 18px 13.5px 18px;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s1, 8px);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 22.5px */
    letter-spacing: 0.375px;
  }
}
`,iy=ie.div`
.pillar-title {
  font-family: ivy , syne, sans-serif;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.15ch;
  line-height: 1.5em;
  margin-bottom: 0.8rem;
}
.pillar-front {
  height: 365px;
  width: 324px;
  position: relative;
  border-radius: var(--spacing-s3, 24px);
}
.pillar-front.first {
  background: url(${C0}) ;
  background-size: cover;
  background-position: center;
}
.pillar-front.second{
  background: url(${k0}) ;
  background-size: cover;
  background-position: center;
}
.pillar-front.third {
  background: url(${E0}) ;
  background-size: cover;
  background-position: center;
}
.plus-aba {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 52px;
  height: 52px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 0px 24px 0px 28px;
  background: var(--c-375, rgba(140, 160, 154, 0.75));
}
.pillar-back {
  height: 365px;
  width: 324px;
  display: flex;
  padding: var(--spacing-s3, 24px) 16px;
  flex-direction: column;
  border-radius: var(--spacing-s3, 24px);
  background: var(--c-250, rgba(201, 211, 208, 0.50));
  align-self: stretch;
}
.pilar-paragraph {
  color: var(--C4, #123939);
  font-family: syne;
  font-size: 18px;
  text-align: justify;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.36px;
  margin-bottom: 1.4rem;
}
.pillar-card-button {
  border-radius: var(--radius-radius-full, 360px);
  background: var(--C4, #123939);
  display: flex;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  height: 47px;
  /* Sombra */
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  color: var(--C1, #EFEFEF);
  font-family: syne;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: 0.5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  border: 1px solid var(--C4, #123939);
  transition: all 0.3s;
}
.pillar-card-button:hover  {
  background: transparent;
  color: var(--C4, #123939);
}
.pillar-span {
  font-weight: 600;
}
@media screen and (max-width: 960px) {
  &&:nth-child(3) {
    margin: auto;
  }
}
@media screen and (max-width: 760px) {
  .pillar-back {
    width: 100%;
    height: 100%;
  }
  .pillar-front {
    width: 100%;
  }
  .pillar_img{
    width: 100%;
  }
  &&:nth-child(3) {
    margin: 0;
  }
  .pillar-front.first {
    background-position: top;
  }
  .pillar-front.second{
    background-position: top;
  }
  .pillar-front.third {
    background-position: bottom;
  }
}
@media screen and (max-width: 550px) {

}
`;var _0={},an=Be&&Be.__assign||function(){return an=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},an.apply(this,arguments)},oy=Be&&Be.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),ay=Be&&Be.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),ly=Be&&Be.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&oy(t,e,n);return ay(t,e),t};Object.defineProperty(_0,"__esModule",{value:!0});var bi=ly(B),Hi=B,sy=function(e){var t=an({cardStyles:{back:{},front:{}},cardZIndex:"auto",containerStyle:{},flipDirection:"horizontal",flipSpeedBackToFront:.6,flipSpeedFrontToBack:.6,infinite:!1,isFlipped:!1},e),n=t.cardStyles,r=n.back,i=n.front,o=t.cardZIndex,a=t.containerStyle,l=t.containerClassName,s=t.flipDirection,u=t.flipSpeedFrontToBack,m=t.flipSpeedBackToFront,g=t.infinite,h=t.isFlipped,y=(0,Hi.useState)(h),S=y[0],C=y[1],N=(0,Hi.useState)(0),f=N[0],c=N[1];(0,Hi.useEffect)(function(){h!==S&&(C(h),c(function(I){return I+180}))},[h]);var p=(0,Hi.useMemo)(function(){var I="react-card-flip";return l&&(I+=" ".concat(l)),I},[l]),v=function(I){if(e.children.length!==2)throw new Error("Component ReactCardFlip requires 2 children to function");return e.children[I]},k="rotateY(".concat(g?f:h?180:0,"deg)"),x="rotateY(".concat(g?f+180:h?0:-180,"deg)"),w="rotateX(".concat(g?f:h?180:0,"deg)"),j="rotateX(".concat(g?f+180:h?0:-180,"deg)"),z={back:an({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:h?"relative":"absolute",top:"0",transform:s==="horizontal"?x:j,transformStyle:"preserve-3d",transition:"".concat(u,"s"),width:"100%",zIndex:h?"2":"1"},r),container:{zIndex:"".concat(o)},flipper:{height:"100%",perspective:"1000px",position:"relative",width:"100%"},front:an({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:h?"absolute":"relative",top:"0",transform:s==="horizontal"?k:w,transformStyle:"preserve-3d",transition:"".concat(m,"s"),width:"100%",zIndex:"2"},i)};return bi.createElement("div",{className:p,style:an(an({},z.container),a)},bi.createElement("div",{className:"react-card-flipper",style:z.flipper},bi.createElement("div",{className:"react-card-front",style:z.front},v(0)),bi.createElement("div",{className:"react-card-back",style:z.back},v(1))))},uy=_0.default=sy;const cy="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.5%2014C24.5%2014.2321%2024.4078%2014.4546%2024.2437%2014.6187C24.0796%2014.7828%2023.8571%2014.875%2023.625%2014.875H14.875V23.625C14.875%2023.8571%2014.7828%2024.0796%2014.6187%2024.2437C14.4546%2024.4078%2014.2321%2024.5%2014%2024.5C13.7679%2024.5%2013.5454%2024.4078%2013.3813%2024.2437C13.2172%2024.0796%2013.125%2023.8571%2013.125%2023.625V14.875H4.375C4.14294%2014.875%203.92038%2014.7828%203.75628%2014.6187C3.59219%2014.4546%203.5%2014.2321%203.5%2014C3.5%2013.7679%203.59219%2013.5454%203.75628%2013.3813C3.92038%2013.2172%204.14294%2013.125%204.375%2013.125H13.125V4.375C13.125%204.14294%2013.2172%203.92038%2013.3813%203.75628C13.5454%203.59219%2013.7679%203.5%2014%203.5C14.2321%203.5%2014.4546%203.59219%2014.6187%203.75628C14.7828%203.92038%2014.875%204.14294%2014.875%204.375V13.125H23.625C23.8571%2013.125%2024.0796%2013.2172%2024.2437%2013.3813C24.4078%2013.5454%2024.5%2013.7679%2024.5%2014Z'%20fill='%23EFEFEF'/%3e%3c/svg%3e";function io({img:e,firstPart:t,title:n,secondPart:r,strongTxt:i,className:o}){const[a,l]=Pe.useState(!1);return d.jsxs(iy,{className:"pillar",children:[d.jsx("h4",{className:"pillar-title",children:n}),d.jsxs(uy,{isFlipped:a,flipSpeedBackToFront:1.3,flipSpeedFrontToBack:1.3,children:[d.jsx("button",{onClick:()=>l(!a),type:"button",className:`pillar-front ${o}`,"aria-label":i,children:d.jsx("div",{className:"plus-aba",children:d.jsx("img",{src:cy})})}),d.jsxs("button",{onClick:()=>l(!a),type:"button",className:"pillar-back",children:[d.jsxs("p",{className:"pilar-paragraph",children:[d.jsx("span",{className:"pillar-span",children:i})," ",t]}),d.jsx("p",{className:"pilar-paragraph",children:r})]})]})]})}io.propTypes={isTabletAndMobile:_.bool.isRequired,img:_.string.isRequired,text:_.string.isRequired,title:_.string.isRequired,strongTxt:_.string.isRequired,firstPart:_.string.isRequired,secondPart:_.string.isRequired};function j0({isMobile:e,isTabletAndMobile:t}){return d.jsxs(ry,{isMobile:e,id:"iclub","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"150","data-aos-offset":"0",children:[d.jsx("span",{className:"pillar-question",children:"Você deve estar se perguntando..."}),d.jsx("h3",{className:"pillar-main-title",children:"Será que as aulas são mesmo pra mim?"}),d.jsxs("div",{className:"pillars_container",children:[d.jsx(io,{isTabletAndMobile:t,img:C0,title:"Iniciantes",strongTxt:"Iniciante:",firstPart:"aulas exclusivas para quem está começando ou nunca praticou.",secondPart:"Práticas bem detalhadas e mais explicativas para se sentir seguro, confiante e evoluir em sua jornada.",className:"first"}),d.jsx(io,{isTabletAndMobile:t,img:k0,title:"Avançados",strongTxt:"Intermediário:",firstPart:"práticas mais longas e intensas, ásanas desafiadores, pranayamas mais avançados e meditações profundas.",secondPart:"Aulas desenvolvidas para aperfeiçoar a sua técnica e lapidar sua prática.",className:"second"}),d.jsx(io,{img:E0,title:"Avançados",strongTxt:"Avançado:",firstPart:"aulas completas onde mergulharemos em todas as técnicas milenares do yoga com profundidade.",secondPart:"Ásanas, pranayamas, kriya purificação, mudras, laya entre outras técnicas que farão das suas práticas e meditações seu momento favorito do dia.",className:"third"})]}),d.jsx("p",{className:"pillar-main-text",children:"Já se imaginou tendo mais clareza na mente e paz no coração, menos ansiedade e estresse e mais vontade e energia para fazer a vida acontecer? Na sua primeira aula você já perceberá os benefícios da prática!"}),d.jsx(gt,{className:"pillar-main-button",to:"prices",...Lt,children:"quero começar agora!"})]})}j0.propTypes={isMobile:_.bool.isRequired,isTabletAndMobile:_.bool.isRequired};function on({title:e,subTitle:t,price:n,list:r,link:i,isPremium:o,isTabletAndMobile:a,isMobile:l,isTablet:s}){const u=()=>l?o?"text-xl":"text-2xl":o?"text-xl":"text-3xl";return d.jsxs("div",{className:`${o?"premium":"notPremium"} card_container`,children:[d.jsxs("div",{children:[d.jsxs("div",{className:"title_container",children:[d.jsx("h1",{className:`${l?"H2":"H1"} price-title`,children:e}),d.jsx("h4",{className:`${u()} price-sub-title`,children:t})]}),d.jsx("h4",{className:"price",children:n}),d.jsx("ul",{className:"text-md list",children:r.map((m,g)=>d.jsx("li",{children:m},`${m} ${g}`))})]}),d.jsx("button",{className:"Button button ",type:"button",children:d.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:"quero começar"})})]})}on.propTypes={title:_.string.isRequired,subTitle:_.string.isRequired,price:_.string.isRequired,list:_.arrayOf(_.string).isRequired,link:_.string.isRequired,isPremium:_.bool.isRequired,isMobile:_.bool.isRequired,isTabletAndMobile:_.bool.isRequired,isTablet:_.bool.isRequired};const fy=ie.section`
background: var(--C2-50p);
padding: var(--spacing-s7, 56px) 76px;
.prices-main-title {
  margin-bottom: 2.4rem;
}
.prices_section {
  color: var(--C4);
  margin: auto;
}

.main_container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 3rem;
}

.card_container {
  border-radius: 2.5rem;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 34rem;
}

.premium {
  background: var(--C4);
  border-radius: 2.5rem;
  box-shadow: 4px 4px 50px 0 var(--C4);
  color: var(--C1);
}

.notPremium {
  background: var(--C2);
}

.title_container {
  align-items: flex-end;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1.6rem;
}

.title_container h4 {
  padding-bottom: 0.7rem;
}

.price {
  align-items: center;
  background: var(--c-3, #8ca09a);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  font-family: syne , ivy , sans-serif;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 600;
  justify-content: center;
  text-align: center;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.6rem;
}

.button {
  background: var(--C4);
  border: 3px solid transparent;
  border-radius: var(--radius-radius-full);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  margin: 4rem 3rem;
}

.button:hover {
  background-color: inherit;
  border: 3px solid var(--C3);
  color: var(--C4);
}

.premium .button {
  background: var(--C1);
  color: var(--C4);
}

.premium .button:hover {
  background: var(--C4);
  color: var(--C1);
}

@media screen and (max-width: 1127px) {
  .notPremium{
    height: 100%;
  }

  .main_container {
    justify-content: space-around;
    align-items: center;
  }

  .premium {
    max-width: 45rem;
  }

  .premium .list {
    gap: 1.8rem;
  }

  .notPremium .list {
    gap: 0.2rem;
  }
}
@media screen  and (max-width: 960px){
  padding: 32px 32px 48px 32px;
}
@media screen and (max-width: 850px) {
  .premium {
    max-width: 50%;
    width: 50%; 
  }

  .notPremium{
    max-width: 45%;
    width: 45%;
  }
}
@media screen and (max-width: 700px) {
  .premium {
    max-width: 100%;
    width: 100%; 
  }

  .notPremium{
    max-width: 100%;
    width: 100%;
  }
}

@media screen and (max-width: 420px) {
  .premium .price-title {
    font-size: 3.8rem;
  }
}

@media screen and (max-width: 380px) {
  .premium .price-title {
    font-size: 3.2rem;
  }
}

@media screen and (max-width: 350px) {
  .premium .price-title {
    font-size: 2.8rem;
  }

  .premium .price-sub-title {
    font-size: 2rem;
    padding-bottom: 0.2rem;
  }
}
@media screen and (max-width: 550px){
  .prices-main-title {
  margin-bottom: 2rem;
  text-align: center;
}
}

`;function P0({isTabletAndMobile:e,isMobile:t}){return d.jsx(fy,{id:"prices","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"150","data-aos-offset":"0",children:d.jsxs("div",{className:"prices_section",children:[d.jsx("h4",{className:`${t?"text-2xl":"text-3xl"} prices-main-title`,children:"Planos e preços:"}),d.jsx("div",{className:"main_container",children:e?d.jsxs(d.Fragment,{children:[d.jsx(on,{isPremium:!0,isMobile:t,isTabletAndMobile:e,title:"iClub Pro",subTitle:"(anual)",price:"R$ 180,00/mês",link:"https://pay.hotmart.com/J71174272X?off=md84l2lk",list:["Acesso as aulas AO VIVO 2x por semana","Acesso a plataforma com aulas gravadas","Temas novos todos os meses","Aulas de Hatha e Vinyasa","Aulas práticas e teóricas","Aulas didáticas para avançar e   lapidar sua prática","Acesso a bônus exclusivos da comunidade","Pagamento recorrente, 12x de R$180 (não compromete o limite do cartão)"]}),d.jsx(on,{isPremium:!1,isMobile:t,isTabletAndMobile:e,title:"iClub",subTitle:"anual",price:"R$ 39,90/mês",link:"https://pay.hotmart.com/J71174272X?off=sghdkt84",list:["Acesso a plataforma com aulas gravadas","Temas novos todos os meses","Aulas de Hatha e Vinyasa","Aulas práticas e teóricas","Aulas didáticas para avançar e lapidar sua prática","Acesso a bônus exclusivos da comunidade","Acesso a bônus exclusivos da comunidade","Pagamento parcelado, até 12x de R$39,90"]}),d.jsx(on,{isPremium:!1,isMobile:t,isTabletAndMobile:e,title:"iClub",subTitle:"mensal",price:"R$ 69,90/mês",link:"https://pay.hotmart.com/J71174272X?off=4o7gr397",list:["Acesso a plataforma com aulas gravadas","Temas novos todos os meses","Aulas de Hatha e Vinyasa","Aulas práticas e teóricas","Aulas didáticas para avançar e lapidar sua prática","Acesso a bônus exclusivos da comunidade","Pagamento mensal"]})]}):d.jsxs(d.Fragment,{children:[d.jsx(on,{isPremium:!1,isMobile:t,isTabletAndMobile:e,title:"iClub",subTitle:"anual",price:"R$ 39,90/mês",link:"https://pay.hotmart.com/J71174272X?off=sghdkt84",list:["Acesso a plataforma com aulas gravadas","Temas novos todos os meses","Aulas de Hatha e Vinyasa","Aulas práticas e teóricas","Aulas didáticas para avançar e lapidar sua prática","Acesso a bônus exclusivos da comunidade","Acesso a bônus exclusivos da comunidade","Pagamento parcelado, até 12x de R$39,90"]}),d.jsx(on,{isPremium:!0,isMobile:t,isTabletAndMobile:e,title:"iClub Pro",subTitle:"(anual)",price:"R$ 180,00/mês",link:"https://pay.hotmart.com/J71174272X?off=md84l2lk",list:["Acesso as aulas AO VIVO 2x por semana","Acesso a plataforma com aulas gravadas","Temas novos todos os meses","Aulas de Hatha e Vinyasa","Aulas práticas e teóricas","Aulas didáticas para avançar e   lapidar sua prática","Acesso a bônus exclusivos da comunidade","Pagamento recorrente, 12x de R$180 (não compromete o limite do cartão)"]}),d.jsx(on,{isPremium:!1,isMobile:t,isTabletAndMobile:e,title:"iClub",subTitle:"mensal",price:"R$ 69,90/mês",link:"https://pay.hotmart.com/J71174272X?off=4o7gr397",list:["Acesso a plataforma com aulas gravadas","Temas novos todos os meses","Aulas de Hatha e Vinyasa","Aulas práticas e teóricas","Aulas didáticas para avançar e lapidar sua prática","Acesso a bônus exclusivos da comunidade","Pagamento mensal"]})]})})]})})}P0.propTypes={isTabletAndMobile:_.bool.isRequired,isMobile:_.bool.isRequired};const dy=ie.section`
display: flex;
padding: var(--spacing-s7, 56px) 76px;
flex-direction: column;
align-items: center;
gap: var(--spacing-s3, 24px);
align-self: stretch;
.reviews-main-title {
  color: var(--C4);
  margin-right: auto;
    font-family: syne, ivy, sans-serif;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em;
}
.reviews-sub-container {
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
}
.review-card {
  display: flex;
  min-width: 296px;
  max-width: 360px;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
}
.review-img {
  width: 96px;
  height: 96px;
  border-radius: 50%;
}
.review-text{
  font-family: syne , ivy , sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.1ch;
  font-style: normal;
  font-weight: 520;
  line-height: 1.5em;
  color: var(--C4, #123939);
  text-align: center;
}
.review-name {
  color: var(--C4, #123939);
  text-align: center;
  font-family: Syne;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
  letter-spacing: 0.27px;
}
.stars-container {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
  }
}
@media screen and (max-width: 960px){
  padding: var(--spacing-s5, 40px) 32px 32px 32px;
  .reviews-main-title {
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.1ch;
    line-height: 1.2em; 
  }
  .reviews-sub-container {
    justify-content: space-around;
    gap: 1.6rem;
  }
  .review-card:last-child {
    max-width: 600px;
  }
}
@media screen and (max-width: 550px){
  padding: 28px var(--spacing-s3, 24px) 36px var(--spacing-s3, 24px);
  .review-card {
    max-width: 600px;
  }
  .reviews-main-title {
    text-align: center;
    margin-right: 0;
  }
}
`,py="/Yoga-IClub-LandingPage-React-Vite/assets/client1-CxJrjSnr.png",my="/Yoga-IClub-LandingPage-React-Vite/assets/client2-BXZJhB-m.png",hy="/Yoga-IClub-LandingPage-React-Vite/assets/client3-CycUGlL0.png",ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEOSURBVHgBtVLbbcJAENy5KFI+EsslOBUk6cCWkkj5wx1AB+kgrZAS8pUPkEgqSDqADjhASAjwLeuHgDv8ACFGWnvtnR3vzpnokuC+N0yjjqOqm+9acgvS4N5teLIAMdrbHPiooqG099sP6NrYo6+W93hbjEoFuOe9E/ghGxkIiMmX3He4WkIEWGe5oS+8zrq5QN8blzQ0As9TFB5wp/jCkZ0pl+M8LcAD2duYgYwfNDSPSCUxovm/JbAVScwfVa+j6Wr5hGhnpjog1HshtRtrVVtgvX6kJjgcZwIVWo+MX7l+1nHcFXJ1ZOcd42USylG15R/p5O/2OAUOTTSmRUp1EWnt1HwyidRWP/smno0NrapcVCHHPd8AAAAASUVORK5CYII=";function O0({isTabletAndMobile:e,isMobile:t}){return d.jsxs(dy,{isTabletAndMobile:e,id:"students","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"150","data-aos-offset":"0",children:[d.jsx("h4",{className:"reviews-main-title",children:"O que o alunos estão dizendo:"}),d.jsxs("div",{className:"reviews-sub-container",children:[d.jsxs("div",{className:"review-card",children:[d.jsx("img",{className:"review-img",src:py}),d.jsx("p",{className:"review-text",children:"Começar a fazer Yoga na pandemia  foi a melhor escolha que fiz. O Yoga me ajuda a estar mais presente no agora e assim acalmar a ansiedade do dia a dia. 🧘🏼‍♀️"}),d.jsxs("div",{children:[d.jsx("h5",{className:"review-name",children:"- Marina Lavalle - "}),d.jsxs("div",{className:"stars-container",children:[d.jsx("img",{src:ye}),d.jsx("img",{src:ye}),d.jsx("img",{src:ye}),d.jsx("img",{src:ye}),d.jsx("img",{src:ye})]})]})]}),d.jsxs("div",{className:"review-card",children:[d.jsx("img",{className:"review-img",src:hy}),d.jsx("p",{className:"review-text",children:"As práticas com a Isa são pra mim momentos de exercitar o corpo, acalmar a mente, praticar a gratidão, o autoconhecimento e o autocuidado."}),d.jsxs("div",{children:[d.jsx("h5",{className:"review-name",children:"- Luisa Kfouri -"}),d.jsxs("div",{className:"stars-container",children:[d.jsx("img",{src:ye}),d.jsx("img",{src:ye}),d.jsx("img",{src:ye}),d.jsx("img",{src:ye}),d.jsx("img",{src:ye})]})]})]}),d.jsxs("div",{className:"review-card",children:[d.jsx("img",{className:"review-img",src:my}),d.jsx("p",{className:"review-text",children:"É notável o quanto evolui com a prática online! Pratico com intensidades variadas e a Bella está sempre disposta a ajudar quando surgem dúvidas."}),d.jsxs("div",{children:[d.jsx("h5",{className:"review-name",children:"- Dani Morais -"}),d.jsxs("div",{className:"stars-container",children:[d.jsx("img",{src:ye}),d.jsx("img",{src:ye}),d.jsx("img",{src:ye}),d.jsx("img",{src:ye}),d.jsx("img",{src:ye})]})]})]})]})]})}O0.propTypes={isMobile:_.bool.isRequired,isTabletAndMobile:_.bool.isRequired};const gy=ie.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
padding: 32px 76px 48px 76px;
gap: 3.2rem;
.numbers-main-title {
  font-family: syne, ivy, sans-serif;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em; 
  color: var(--C4, #123939);
  margin-right: auto;
}
.numbers-sub-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media screen and (max-width: 960px) {
  padding: var(--spacing-s3, 24px) 32px 32px 32px;
  gap: 2.4rem;
  .numbers-sub-container {
    justify-content: space-around;
    gap: 1.6rem;
  }
  .numbers-main-title {
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 34px; /* 121.429% */
    letter-spacing: 0.56px;
  }
}
@media screen and (max-width: 550px) { 
    padding: var(--spacing-s3, 24px) var(--spacing-s3, 24px) 28px var(--spacing-s3, 24px);
    .numbers-main-title {
      text-align: center;
      font-family: Syne;
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 134%; /* 29.48px */
      letter-spacing: 0.55px;
    }
}



`,vr=ie.div`
max-width: 20.64rem;
display: flex;
flex-direction: column;
align-items: center;
.percent-number {
  color: var(--C4, #123939);
text-align: center;
font-family: ivy;
font-size: 75px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 3.75px;
}
.percent-text {
  color: var(--C4, #123939);
  width: 172px;
  text-align: center;
  font-family: syne , ivy , sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.1ch;
  font-style: normal;
  font-weight: 520;
  line-height: 1.5em;
}
@media screen and (max-width: 960px) {
  .percent-number {
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 3.2px;
  }
  .percent-text {
    font-size: 13.5px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 148.148% */
    letter-spacing: 0.54px;
  }
}
@media screen and (max-width: 550px){
  
}
`;function vy(){return d.jsxs(gy,{"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"150","data-aos-offset":"0",children:[d.jsx("h4",{className:"numbers-main-title",children:"De todos os nossos praticantes presenciais e online ao redor do mundo: "}),d.jsxs("div",{className:"numbers-sub-container",children:[d.jsxs(vr,{children:[d.jsx("span",{className:"percent-number",children:"81%"}),d.jsx("p",{className:"percent-text",children:"sentiram que as dores diminuíram drasticamente"})]}),d.jsxs(vr,{children:[d.jsx("span",{className:"percent-number",children:"72%"}),d.jsx("p",{className:"percent-text",children:"melhoram o humor durante o dia e a produtividade"})]}),d.jsxs(vr,{children:[d.jsx("span",{className:"percent-number",children:"79%"}),d.jsx("p",{className:"percent-text",children:"melhoraram o relacionamento consigo e com o outro"})]}),d.jsxs(vr,{children:[d.jsx("span",{className:"percent-number",children:"88%"}),d.jsx("p",{className:"percent-text",children:"têm menos estresse e estão mais equilibrados emocionalmente"})]}),d.jsxs(vr,{children:[d.jsx("span",{className:"percent-number",children:"86%"}),d.jsx("p",{className:"percent-text",children:"dormem melhor e reconheceram que precisavam desacelerar"})]})]})]})}const yy="/Yoga-IClub-LandingPage-React-Vite/assets/arow-D5pq3bg1.png",xy="/Yoga-IClub-LandingPage-React-Vite/assets/girlYoga-CnX08zFX.png",wy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADhCAYAAAAZHVOSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAN80lEQVR4Ae3dD5DOdR7A8c8+y5L/ohaVP6morqsrRVIuJNHUcFJtGk2UUiqVTnKDGWmcMDmHotgohWLzb86ef1GkKyLj37TW35RWK3Yty7rv5zdtF+f5Pc8++zxrP8++XzNGc/ebmma9+/1+33+/hKysrCGBQGCwADCnoKBgaEAAmEbEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGFdOgCg4WVAgp06dkmhJDAQkISFBEBoRo1i2ZmbK23PmSMbu3RK9hEWqVakiXdu1kw6tWnlBIzgiRsR2798vvQYPln0HDkgsrPnmG8k7flz+4mJGcPwnDhGbsWhRzAJWx/PzZeLMmQJ/RIyI7dy3T2Jtx969An9EjIhd3qCBxFo0B8viFREjYt3vvluuKIGQ4Y+BLUSsdo0aMm/cOElfvVrWbdkiBW6aKVx5x47JJytWSE5urqB4iBjFUi4xUe5y00D6qyhGpaaGHbA+UjNnHByP0yhxazZskDdnzQr7+sPcrX0RMUrUl99+K48PHeqt8EJ0EDFKTMaePfLciBGSc/SoIHqIGCUiKztb+g4fLvuzsgTRRcSIuSPunfb5kSNlS2bmWf//cuXKSXLt2oLIEDFiStc+D3LTUKvWrQt6TesbbpBenTsLIkPEiJkTJ07I36dMkXnLlwe9JrlWLRn0+ONSvWpVQWSIGDFxzN2B33jvPUlNSwt6Tf06dWTCK69I/bp1BZEjYkSd3oHfmTNHps2fH/Sa2jVryuA+feTapk0FxUPEiKqCU6dkqrv7Tv74Yzmck3PWawIJCTKwVy+5zb0Lo/hYdomo0eWRaUuXysjUVO9uHMzQp56Se2+/XcJVPjFREBx3YkSFBjzXBfzK2LG+Afd7+GFJ6dhRiuK8ihUFwRExoqIw4GP5+UGv6dmlizz94IOC6OJxGsWi78Bzly2Tl994I+gdONE9Dj/UqZP3HozoI2JETPcPz1q8WIZOnOgbsB5097x7jPYTCLLVkC2IoRExInLi5EnvoLxhb77p/fXZBAIBL2C9A1etXNn376dzxnr9mQcLsBwzNN6JUWR6131r1iwZOmGCb8CdbrtNXu3bN2TAqmnjxtKuRYvT7rx64MCzKSkCf9yJUSQ6cDXaTSHpPHAw+gjduU0bGdCzpxdzOCq7EeghTz4pNapWlc0ZGd6miAc6dJDObdsK/BExwqb7gPX996P0dN/rvEfoxx6TqpUqSVHoOurhzzzj7XqqkJQkSeXLC0IjYoRl1/798uqkSfLv1auDXqN3z27t28tLjz5a5IAL6eN0OI/f+B8iRkjfbt8uwydPli83bQp6jd419Qjb57p3l8rnnScoOUQMX5u++04GuDngLTt2+B7k/njXrvJkt25SsUIFQckiYpyVLuJYsGKFt6H/iM9pkzq/O6h3b+lxzz2Cc4OIcVb/nDFDxrlfwaaQVHn3Djy6f3/peOutgnOHiHEanQMe5gawps2b53tdJTclNGnIEGnxxz8Kzi0ihkffd/W9t//o0d48bVDu8fmqSy+VoX36yPVXXik494gY3iPzZ+vWyYsu4IPZ2UGvSwgE5GZ359WAL734YkHpQMRlXE5ensxYuFDGf/CBHDpyJOh1+v576/XXy2vPPusdrYPSg4jLMP1I+F/HjPGd/1WV3LyvTiH17NzZexdG6ULEZZA+Pq/6+msZ8c47sm3nTt9r9VSNYU8/LZ3cCLSuyELpw0+ljNGA9dF5Slqa/OLz+KzqXXCBjOjXT26+9lr29ZZiRFxG6OjzN9u2yetTp8rajRtDfpWwS9u20q9HD6nHft5Sj4jLgFO/HiP71uzZ8uPBg77X6h7eR927b9+UFN5/jSDiOKdfIRzp3n0Xrlolx30OsVMXuFHnIU88Ie1atvRihg1EHKcK776jUlPl6LFjIa/XlVfjBw2S6lWqCGwh4ji098ABGTZxoiz22ftbKMmNOPfu1k2evP9+qRDBJvzsw4fl/QUL5KvNm+XgoUOS73PmdLh0TlrP3HqwY0eWdYaBiOOIDlZ9sGiRjJk2TX7+5ZeQ1194/vky5qWXpPk110Q0+qyfLb3vhRckY88eibYNbhBuwcqVMm7gQOlwyy2C4Ig4DuS5x+Wv3Z1w4qxZ8vn69b77flW1ypWlU+vW0sfdgetdeKFEavHnn8ck4EL67zFm+nQiDoGIjTvo7rg67zs7PT3oB8x+T5dMvtyzp3cSZfliLt7I2L1bYk3/GRoz89TBEbFRx92j7OI1a7xvAIcTk546+edmzeTlXr2itnnhyNGjEmt6DnVuXh5H/vggYmN0xdUXGzZ4Z15tzcwM+eisLk5OliF9+nifEk0M2DtqPNTClLKOiI0o3O876aOPvHfRcKaN9NjXu91j8zMpKXKxG+1FfCJiA3TqRj+ZMnXuXO8dOBwXubvv33r3lttvvJGFG3GOiEux73/6Sd795BOZuXixZIcZ7/nVq0uvLl0kpVOniM9+hi1EXAr9kJUlacuWycdLlsj2EFsFC+lIc5vmzaX/I49Io4suEpQdRFyK6NZAXeOsd9+MvXslP8Ra50LXXH65t2FfB66qV60qKFuIuBTIdVM1usNo+oIFYa20KlSrRg156oEH5KGOHdmwX4bxkz+HdMDq3XnzvONhdQ1yuHTOV++8ve+7T2pWqyYo24j4HNj3448yff58SXWPzbr+uCjatmghL/boIVc0aCCAIuISoJ9E0bvu+q1bZZoLd+2mTd6Kq3DpVwJbXXedPNu9u1xOvDgDEceQLtDIys6WtOXLZeHKlbJx27YirT6q4qaIdIfRI/feKze533W+V/+e+t68fdcu3yNmdVDszLt8pQoVJDHIu7PuI9a7u37km3XKthBxDGg82zIzvY9xp69Z400ZFYXeea9t0kTuv/NOaX/zzacNWn361VcyePx42b1/v0Rb/bp15dW+faWlu+vDDiKOEl2or8e/pq9e7W3G1yWSBUVc86uL/PWdVwetmjZq9H8rrfR4nRdHjfIezWNh1/ffywuvvy6fTp1a7B1OKDn8pIrBe1x2QX25caOkrVjh/V6UUeZCOsKsWwO7u6mixvXre6PPZ/Pd7t0xC7iQHqS3w81RM3BmBxFHQJdAbnZ3Wr3r6uOyjjYXmXvvrJ+cLO1btpQu7dp50YR6Fw11TnS0ZBdhrhrnHhGH6aeff/Y+d7Lkiy+8rYA6YHUszBVVv6ePqTdcdZXc36GDtzlB339Lm3C2N6L0IOIQdDT5PTen+/acOXLAPWpGEq7SEzVaN2smKe6RWT8NmhTBoXTA2RBxCK9NnuytqNLN+EWl77aXuXfcLm3aeANW+lmUim6aB4gmIvbx2fr1MmXuXCkqfUTW6SH9FEoTN8oMxBIR+9D34HDpsTe3ucflzu6u287ddfVUDaAkELEPPbhcYzwWZImkjib/4bLL5O7WraVjq1bFOv4ViBQR+0iuVUv+MWCADBw79rdjcfTM5j9deaW0uekmb0mknhzJMkWcS0Qcgg5IzXZzuOu2bpXz3KBUk4YN5ZI6dQgXpQYRh+GSunW9X0BpZO8QYgCn4U4cJl30cSQ3N+Q3fsOhj+L6BcLSuFoL9hBxCCdOnJA5S5fKnCVLvM0N+REs+jhTwEWs79dXN24sj3XtKg3r1RMgUkQcwvgPP5Sx778fk/XEG7dvl6Vr18rCCROkJqdUIkK8E4egXxuM5YYA3fq33IUMRIqIfej7774DByTWdP8uECki9qHH7JTEtjz9dCcQKSIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjEvIysoaEggEBkuc2ZaZKbPT02Xzjh1y8uRJ73+rXKmSJAb8/7uVe/SonPj1+pMFBfKfTZsk1s6vXl2Sa9UKeV1uXp7s3LdPYq1BvXpSqWLFkNf9kJUlBw8dklhrdvXVv/3cKiQleb/86M8tJzfX++vExERp0rChdL3jDmnaqJHEm4KCgqFxGfH0BQtk5JQpcuTXHySQVL68DH7iCXngrrsknmjEcfc4nePupKlpaQSM0xzPz5cJM2d6fz7iTdxFrD+swzk5Apwp7/hx789HvIm7iPXdqVbNmgKcqXaNGt64SLyJu4irVaki/bp3lzphDBSh7NA/D8+5PxdJ5cpJvIm/fyOnbfPmcklysvxr9WrZkpEhBadOCcomN2grTd3odPuWLeUK93s8isuIExISpImbTmgSh1MKwJlY7AEYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYVy4QCEhCQoIAsEf7/S9+IFQPTGvCwwAAAABJRU5ErkJggg==",Sy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADhCAYAAAAZHVOSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKlklEQVR4Ae3de2zV5R3H8c85bU9bqAVKLSAIglDF6ryBAkZxTJnTqkvMdAY3xx8Yh2L2x+LMJgoZEadk8RKX8I9i/AMWt4mOZUOGoJNLFTaI3JpwMzgo2sOtBXo5Pd3v+SkZKdDipfV8n+f9Sk5MyPnDwHmf5/d7fs95nkQ6nZ6VTCafFABzstns7KQAmEbEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHH5wpd2uKFB9YcOqbm1VehefUpKNKCsTPn5fFTPhL+Zs7Rm40YtXr5caz/6SJ/s3y/0nPy8PI2tqtLkCRN056RJcdj4v0Q6nZ6VTCafFE5rT12dZr70kv61fr3w7SsrLdWcGTN0cxR0MpFQ6LLZ7Gzuic+gvb1df3nnHd360EMEnEMOHDmih+fO1a+ff16tmYzAxNYZrdu8WY+/8IKOHT8u5JZo9NGfli3TswsWCER8WkeOHo0/IM0tLUJucldKry1Zos07dih0RHwaS959V+u3bBFyW0v0JfvSwoVqPHZMISPiDrLRN/wb0b0wbFi1YYPq6usVMiLu4LMDB7Rzzx7BBjcKb6itVch4TtzBx/v2qamLe+HCVEqjR4xQae/e4iFH92lqbdXW6J7XzVF0ZuvOnQoZEXfQ1NwcT5p05qrRo/XCY4+pV3GxEjyr7DbZtjb9celS/Xb+/E7fd6ihIZ6xTibDvLAk4g7cs8e26APRmZIo3rI+fYRuVlCgwRUVXb7NPUVwcxmh3htyT9xBi1sP3cVILEZf5BAiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOHb26KB/377qV1qqlkzm1GNC2tuVyWY1oH9/AbmCiDsYU1WlN557Lt69wx3kdTK3bU9bW5vKo9CBXEHEHbjRd9C55wqwgntiwDgiBowjYsA4IgaMI2LAOCIGjAv6EVMmeuZ7rKlJuagolVKqoEBAV4KJ+GgU67pNm/TX997T5u3btWffPh1vblYuK8jP13kVFaocNkw3jxunmydMiE9iBE7mfcTuhMNtu3bpxYULtXTVKlniDnf7eO/e+LVszRpd8tZbmnHvvZp0zTXKz2edDj7n9T2xC3jFhx/q53PmmAv4dLbs2KGHn3pKv3/ttc8PfgPk+UjsTpCfMXdufOawL9z67fmvvx6P0o9OnRpfciNs3o7Ehxsb9eyCBV4FfLI/L1umv0X394C3ES9bu1brN2+Wr9yX1CtvvqlDR44IYfMy4sMNDXp96dL4EZLP3Cz78g8+EMLmZcRbdu5U7e7d8p2buHs7mrVG2LycFVleU6OGo0c7fU8ikVDfc85RaUmJcpF7hl1/8KCy0URWZ9yMdSaa5OKRU7i8+5d3O2/8Z9u2Lt83/Z579Iv77lMymbsXI+uie/r7H3+808m5401NOhDdF1eUlQlhCnbt9HVXXpnTATujR4zocoWW+9LimXHYgo04L8cDdtweX7n+RYNvH58QwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2Lj2qNX1vNdPdE5IjbOnQjR2sVmevAbEQPGETHMc9sPu1eo2Kw4EG5XzOaWFlnS1t6ujbW1Xb6vuLDQxMaH3YWIAzFp2jR9UlcnHw0oL1fIuJwOgNuX2teAnYuGD1fIiDgAqYIC+cptrn/VxRcrZEQciF5FRfJR9cSJqujXTyEjYphV3rev7quuDv4wOSIORXu7fOKuLO699VaNGjpUoWN2OhDHjT1e6ky/0tL4RMsf33ILZ1WJiIOQjUbhdg9GYhfsZaNG6VdTp2rspZcS8BeIOABuLdOlI0eqLp2WJe5USDez7magL6us1PfHj9fVVVXeTtJ9VUQcALckcdEzz6jJ2CW1+//Oi0IuSqVUEPjkVWf4mwlEcTR6FTOCeYmbCsA4RuJALF29Wtt27eryfe7HBBYvXTNtbTrW1HTKn/fu1UvXXX65Lh4+3NtfOhFxIB55+mllMhmFyM1iV99wg2ZNn64+JSXyDZfTgQg1YCebzeqtlSv1h0WL5CMiRjDejm4pjp7mkts6IkYw3CO2Fo9Wrp1AxMYlo8ma/LNZuRTw9jUn9C4ujp87+4aIjUt+sSCiK8WplEI37Lzz4tVfviHiQGQ9+xXTl+VmqCdPmCAfEXEgrG2S902rHDZM3x07Vj4iYnivvF8/PTp1qirKyuQjIobXioqK9Mv779d1V1whX7FiC94aNmiQZkyZEq/W8nkLHyIORGFBgZpbW+U7N4F1eWWlptx2m35w/fXxzxh9R8SBWDRvnvbX18tXbqR1G+eNGDIkfh4cEiIOxHdGjZLcC94JdmKL/Zngi2A/yaxggi8YjgDjgo34YGOjcp07CK01gBllfD3BTmzNW7BAI88/X7ksffhw/AI6E2zE7vDqsznAGsh13BMDxhHxN8A9rho6aJAuufBCFRUWCuhJLPb4moYMHKiZ06ZpTFWVknl5+uzAAf3u5Ze1vKZGQE/wciTuqY1o3PK+l2fP1k3jx6tvaWm8a8SF0WTZ/CeeiA/+6gluuSGjf9i8i9htVVN5wQXqCVUjR2r44MGn/LnbpPyHkyapJ7jN3n3cSxlnz8uReGx0adsT3I/Mz7R8c2B5uXqCuw/nsLGweRnx9VdfrcEDBqi7bdmxI16QcTr/3rpV3S0v+gK588YbhbB5GbH7SdqPJk9Wd9u9d6/+sXr1KQd419XXa/GKFepuI4cO1Q1jxghh8/Y67KfV1fr7+++r9iwOEfuq3PEgM198UXuimKsnTownmDZt3655r76q9MGD6k7u8O1HpkwJ7rezOFUinU7Piu7rnpSHanfv1vQ5c+IRs7u5qNzJ9sd64JgQN3H2mwce0M/uuMPbk/5wdqKBZLbXiz0uimapZz74YDz5090fdndv3BMBF6ZSmnbXXfrJ7bcTMGLeT2veGN0zDqmo0CuLF+vNlSt13OiBWoloEsvtzvHg3Xfre9deG09qAY7Xl9Mnc/ev//30U/2zpkY1GzdqV3SJfaSx8ZRJqVzhnneX9Oqlgf37x8+jbxo3Lv6v2/AOOMFdTgcT8claM5l4RG5xZ/bm8PEmLmQ3cZUiXJyBizjIVQJucUQBq5zgCW6sAOOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB4/KTyaQSiYQA2OP6/R+ELaT/1j4cUAAAAABJRU5ErkJggg==",Cy=ie.section`
background: var(--C2-50p);
.access_section {
  color: var(--C4);
  padding: 32px 76px 48px 76px;
}
.access-title {
  text-align: left;
  margin-bottom: 3.2rem;
  font-family: syne, ivy, sans-serif;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em;
  color: var(--C4, #123939);
}
.main_container {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: auto;
  width: 100%;
}
@media screen and (max-width: 960px) {
  .access-title {
  margin-bottom: 2.4rem;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em; 
  }
  .access_section {
  padding: var(--spacing-s3, 24px) 32px 32px 32px;
  }
  .main_container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 550px) {
  .access_section {
    padding: 28px var(--spacing-s3, 24px) 36px var(--spacing-s3, 24px);
  }
  .main_container {
  grid-template-columns: 1fr ;
  }
  .access-title {
    text-align: center;
  }
}
`,ky=ie.section`
align-items: center;
background: var(--C2);
border-radius: 1.6rem;
flex-shrink: 0;
padding: 1rem 1.3rem;
text-align: center;
max-width: 100%;
padding-bottom: 2rem;
border-radius: 1.6rem;

img {
  width: 100%;
  margin-bottom:2rem;
  border-radius: 1rem;
}

`;function Er({isMobile:e,img:t,text:n}){return d.jsxs(ky,{className:"pillar",children:[d.jsx("img",{alt:"tech-img",src:t}),d.jsx("p",{className:e?"text-sm":"text-md",children:n})]})}Er.propTypes={isMobile:_.bool.isRequired,img:_.string.isRequired,text:_.string.isRequired};function N0({isMobile:e}){return d.jsx(Cy,{children:d.jsxs("div",{className:"access_section ","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"150","data-aos-offset":"0",children:[d.jsx("h4",{className:" access-title",children:"O que terá acesso?"}),d.jsxs("div",{className:"main_container",children:[d.jsx(Er,{isMobile:e,img:Sy,text:"Aulas ao vivo toda terça: 8h e 19h30, e quinta: 8h e 9h, com correções e ajustes"}),d.jsx(Er,{isMobile:e,img:wy,text:`Aulas com diferentes níveis e durações para não se sentir\r
            desestimulado`}),d.jsx(Er,{isMobile:e,img:xy,text:"Módulos desenvolvidos para cultivar disciplina, constância e presença"}),d.jsx(Er,{isMobile:e,img:yy,text:"Estilos diferentes para variar sua prática: Hatha e Vinyasa"})]})]})})}N0.propTypes={isMobile:_.bool.isRequired};const Ey="/Yoga-IClub-LandingPage-React-Vite/assets/heroSub-DmLkYMkX.jpg",_y=ie.section`
  position: relative;
  display: flex;
  padding: 32px var(--spacing-s12, 96px) var(--spacing-s7, 56px) 76px;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  align-self: stretch;
  background: var(--C2);
  .sub-hero-sub-img {
    position: relative;
    z-index: 2;
    width: 456px;
    height: 344px;
    background: url(${Ey});
    border-radius: 24px;
    background-size: cover;
    background-position: center;
  }
  .divider-hero {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 136px;
    transform: translateY(50%);
    z-index: 1;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    padding: var(--spacing-spacing-none, 0px) 32px 32px 32px;
    gap: var(--spacing-s3, 24px);
    .sub-hero-sub-img {
      width: 100%;
      height: 504px;
    }
  }
  @media screen and (max-width: 550px) {
      .sub-hero-sub-img {
      width: 100%;
      height: 240px;
    }
  }
`,jy=ie.div`
color: var(--C4, #123939);
width: 604px;
text-align: center;
display: flex;
flex-direction: column;
gap: 16px;
position: relative;
z-index: 2;
.sub-hero-strong-txt {
text-align: center;
font-family: syne;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 27px; /* 150% */
letter-spacing: 0.54px;
}
.sub-hero-normal-txt {
font-family: syne;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.32px;
}

@media screen and (max-width: 960px) {
  width: 100%;
  .sub-hero-strong-txt {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px; /* 164.286% */
    letter-spacing: 0.14px;
  }
  .sub-hero-normal-txt  {
    font-size: 13.5px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.54px;
  }
  @media screen and (max-width: 550px) {
      .sub-hero-strong-txt {
        font-size: 12.5px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 160% */
        letter-spacing: 0.5px;
      }
      .sub-hero-normal-txt  {
          font-size: 11.5px;
          font-style: normal;
          font-weight: 500;
          line-height: 19px;
          letter-spacing: 0.575px;
      }
  }
}
`;function Py(){return d.jsxs(_y,{children:[d.jsx("div",{className:"sub-hero-sub-img",alt:"sub-hero","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"150","data-aos-offset":"0"}),d.jsxs(jy,{"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"150","data-aos-offset":"0",children:[d.jsx("p",{className:"sub-hero-strong-txt ",children:"Este é um espaço para aquelas que se sentem fora da caixa, que querem abraçar o mundo, resolver mil coisas de uma vez mas precisam de um tempo para desacelerar e organizar não só as ideias e a cabeça mas algumas prioridades também!"}),d.jsx("p",{className:"sub-hero-normal-txt",children:"Nossas aulas irão te conduzir numa jornada de práticas e filosofia que elevarão seus dias te ajudando a ter maior equilíbrio emocional, disciplina e disposição para lidar com as demandas da vida cotidiana além de te devolver a vontade de fazer a vida acontecer. "}),d.jsx("p",{className:"sub-hero-normal-txt",children:"Aqui o cuidado com o corpo e mente é o nosso compromisso inegociável com nossa própria Alma. Você é seu maior recurso, para cuidar do mundo é preciso cuidar de você antes! 🪬"})]}),d.jsx("img",{className:"divider-hero",src:w0,alt:""})]})}const Oy=ie.section`
display: flex;
align-items: center;
align-self: stretch;
justify-content: center;
padding-bottom: 4.8rem;
flex-direction: column;
padding-left: 76px;
padding-right: 76px;
position: relative;
.seal-container {
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;
  padding-bottom: 4.4rem;
}
.seal-img {
  width: 15rem;
  height: 15rem;
}
.seal-text {
color: var(--C4, #123939);
max-width: 60rem;
text-align: center;
/* text-md */
font-family: syne;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 26px; /* 144.444% */
letter-spacing: 0.36px;
}
.seal-text span {
  color: var(--C4, #123939);
font-family: syne;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 26px;
letter-spacing: 0.4px;
}
.seal-button {
  display: flex;
  padding-left: 32px;
  padding-right: 32px;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s1, 8px);
  border-radius: var(--radius-radius-full, 360px);
  background: var(--C4, #123939);
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  font-family: syne;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: 1px;
  text-transform: lowercase;
  color: var(--C1);
  height: 5.6rem;
}
.seal-elipse {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 177px;
  z-index: -1;
}
@media screen and (max-width: 960px) {
  .seal-text{
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 0.32px;
  }
  .seal-text span {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.32px;
  }
  .seal-button {
  display: flex;
  padding: var(--spacing-s2, 16px) var(--spacing-s4, 32px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s1, 8px);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 21.6px; /* 120% */
  letter-spacing: 0.9px;
  text-transform: lowercase;
  }
}
@media screen and (max-width: 550px) {
  padding: var(--spacing-s3, 24px) 16px 28px 16px;
  .seal-img {
    width: 15rem;
    height: 15rem;
  }
  .seal-container {
    flex-direction: column;
    gap: 1.6rem;
    padding-bottom: 3.6rem;
  }
  .seal-elipse {
    height: 100%;
  }
  .seal-button {
    display: flex;
    padding: 16px 24px 18px 24px;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s1, 8px);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 30px */
    letter-spacing: 0.5px;
  }

}

`,Ny="/Yoga-IClub-LandingPage-React-Vite/assets/Selo-d0HIC-Jg.png",Ty="/Yoga-IClub-LandingPage-React-Vite/assets/EllipseSeal-CB9uJNAJ.png";function Iy(){return d.jsxs(Oy,{"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"150","data-aos-offset":"0",children:[d.jsxs("div",{className:"seal-container",children:[d.jsx("img",{src:Ny,className:"seal-img"}),d.jsxs("p",{className:"seal-text",children:["Nós do Yoga iClub criamos o ",d.jsx("span",{children:"7payback"}),", que da a você 7 dias para solicitar seu reembolso sem questionamento ou burocracia alguma caso não esteja satisfeito com o produto."]})]}),d.jsx("img",{src:Ty,className:"seal-elipse"}),d.jsx("a",{className:"seal-button",children:"quero começar agora!"})]})}function Ry(){const e=ba({query:"(max-width: 960px)"}),t=ba({query:"(max-width: 550px)"}),n=ba({minWidth:550,maxWidth:960}),r={isTabletAndMobile:e,isMobile:t,isTablet:n};return d.jsxs(d.Fragment,{children:[d.jsx(y0,{...r}),d.jsx(S0,{...r}),d.jsx(Py,{...r}),d.jsx(j0,{...r}),d.jsx(vy,{...r}),d.jsx(N0,{...r}),d.jsx(O0,{...r}),d.jsx(P0,{...r}),d.jsx(Gp,{...r}),d.jsx(Iy,{...r}),d.jsx(qp,{...r}),d.jsx(Zv,{...r})]})}function Ay(){return d.jsx(Ry,{})}Xa.createRoot(document.getElementById("root")).render(d.jsx(Pe.StrictMode,{children:d.jsx(Ay,{})}));
