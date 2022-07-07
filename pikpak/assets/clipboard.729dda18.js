import{au as Y,av as G}from"./vendor.ee4a40f2.js";var O={exports:{}};/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(C,J){(function(_,m){C.exports=m()})(Y,function(){return function(){var w={134:function(f,a,e){e.d(a,{default:function(){return z}});var o=e(279),u=e.n(o),s=e(370),p=e.n(s),d=e(817),g=e.n(d);function l(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l=function(t){return typeof t}:l=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(r)}function y(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function h(r,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function b(r,n,t){return n&&h(r.prototype,n),t&&h(r,t),r}var L=function(){function r(n){y(this,r),this.resolveOptions(n),this.initSelection()}return b(r,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t=document.documentElement.getAttribute("dir")==="rtl";this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(i,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,i=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(i),this.selectedText=g()(i),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=g()(this.target),this.copyText()}},{key:"copyText",value:function(){var t;try{t=document.execCommand(this.action)}catch{t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"copy";if(this._action=t,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(t!==void 0)if(t&&l(t)==="object"&&t.nodeType===1){if(this.action==="copy"&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=t}else throw new Error('Invalid "target" value, use a valid Element')},get:function(){return this._target}}]),r}(),R=L;function E(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?E=function(t){return typeof t}:E=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(r)}function F(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function A(r,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function P(r,n,t){return n&&A(r.prototype,n),t&&A(r,t),r}function j(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(n&&n.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),n&&T(r,n)}function T(r,n){return T=Object.setPrototypeOf||function(i,c){return i.__proto__=c,i},T(r,n)}function N(r){var n=D();return function(){var i=S(r),c;if(n){var v=S(this).constructor;c=Reflect.construct(i,arguments,v)}else c=i.apply(this,arguments);return M(this,c)}}function M(r,n){return n&&(E(n)==="object"||typeof n=="function")?n:H(r)}function H(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function D(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function S(r){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},S(r)}function x(r,n){var t="data-clipboard-".concat(r);if(!!n.hasAttribute(t))return n.getAttribute(t)}var I=function(r){j(t,r);var n=N(t);function t(i,c){var v;return F(this,t),v=n.call(this),v.resolveOptions(c),v.listenClick(i),v}return P(t,[{key:"resolveOptions",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof c.action=="function"?c.action:this.defaultAction,this.target=typeof c.target=="function"?c.target:this.defaultTarget,this.text=typeof c.text=="function"?c.text:this.defaultText,this.container=E(c.container)==="object"?c.container:document.body}},{key:"listenClick",value:function(c){var v=this;this.listener=p()(c,"click",function(k){return v.onClick(k)})}},{key:"onClick",value:function(c){var v=c.delegateTarget||c.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new R({action:this.action(v),target:this.target(v),text:this.text(v),container:this.container,trigger:v,emitter:this})}},{key:"defaultAction",value:function(c){return x("action",c)}},{key:"defaultTarget",value:function(c){var v=x("target",c);if(v)return document.querySelector(v)}},{key:"defaultText",value:function(c){return x("text",c)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],v=typeof c=="string"?[c]:c,k=!!document.queryCommandSupported;return v.forEach(function(U){k=k&&!!document.queryCommandSupported(U)}),k}}]),t}(u()),z=I},828:function(f){var a=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function o(u,s){for(;u&&u.nodeType!==a;){if(typeof u.matches=="function"&&u.matches(s))return u;u=u.parentNode}}f.exports=o},438:function(f,a,e){var o=e(828);function u(d,g,l,y,h){var b=p.apply(this,arguments);return d.addEventListener(l,b,h),{destroy:function(){d.removeEventListener(l,b,h)}}}function s(d,g,l,y,h){return typeof d.addEventListener=="function"?u.apply(null,arguments):typeof l=="function"?u.bind(null,document).apply(null,arguments):(typeof d=="string"&&(d=document.querySelectorAll(d)),Array.prototype.map.call(d,function(b){return u(b,g,l,y,h)}))}function p(d,g,l,y){return function(h){h.delegateTarget=o(h.target,g),h.delegateTarget&&y.call(d,h)}}f.exports=s},879:function(f,a){a.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},a.nodeList=function(e){var o=Object.prototype.toString.call(e);return e!==void 0&&(o==="[object NodeList]"||o==="[object HTMLCollection]")&&"length"in e&&(e.length===0||a.node(e[0]))},a.string=function(e){return typeof e=="string"||e instanceof String},a.fn=function(e){var o=Object.prototype.toString.call(e);return o==="[object Function]"}},370:function(f,a,e){var o=e(879),u=e(438);function s(l,y,h){if(!l&&!y&&!h)throw new Error("Missing required arguments");if(!o.string(y))throw new TypeError("Second argument must be a String");if(!o.fn(h))throw new TypeError("Third argument must be a Function");if(o.node(l))return p(l,y,h);if(o.nodeList(l))return d(l,y,h);if(o.string(l))return g(l,y,h);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function p(l,y,h){return l.addEventListener(y,h),{destroy:function(){l.removeEventListener(y,h)}}}function d(l,y,h){return Array.prototype.forEach.call(l,function(b){b.addEventListener(y,h)}),{destroy:function(){Array.prototype.forEach.call(l,function(b){b.removeEventListener(y,h)})}}}function g(l,y,h){return u(document.body,l,y,h)}f.exports=s},817:function(f){function a(e){var o;if(e.nodeName==="SELECT")e.focus(),o=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var u=e.hasAttribute("readonly");u||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),u||e.removeAttribute("readonly"),o=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var s=window.getSelection(),p=document.createRange();p.selectNodeContents(e),s.removeAllRanges(),s.addRange(p),o=s.toString()}return o}f.exports=a},279:function(f){function a(){}a.prototype={on:function(e,o,u){var s=this.e||(this.e={});return(s[e]||(s[e]=[])).push({fn:o,ctx:u}),this},once:function(e,o,u){var s=this;function p(){s.off(e,p),o.apply(u,arguments)}return p._=o,this.on(e,p,u)},emit:function(e){var o=[].slice.call(arguments,1),u=((this.e||(this.e={}))[e]||[]).slice(),s=0,p=u.length;for(s;s<p;s++)u[s].fn.apply(u[s].ctx,o);return this},off:function(e,o){var u=this.e||(this.e={}),s=u[e],p=[];if(s&&o)for(var d=0,g=s.length;d<g;d++)s[d].fn!==o&&s[d].fn._!==o&&p.push(s[d]);return p.length?u[e]=p:delete u[e],this}},f.exports=a,f.exports.TinyEmitter=a}},_={};function m(f){if(_[f])return _[f].exports;var a=_[f]={exports:{}};return w[f](a,a.exports,m),a.exports}return function(){m.n=function(f){var a=f&&f.__esModule?function(){return f.default}:function(){return f};return m.d(a,{a}),a}}(),function(){m.d=function(f,a){for(var e in a)m.o(a,e)&&!m.o(f,e)&&Object.defineProperty(f,e,{enumerable:!0,get:a[e]})}}(),function(){m.o=function(f,a){return Object.prototype.hasOwnProperty.call(f,a)}}(),m(134)}().default})})(O);var X=G(O.exports);export{X as C};
