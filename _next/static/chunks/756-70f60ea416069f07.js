(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[756],{43652:function(e,t,n){"use strict";n.d(t,{MT:function(){return x}});var o=n(2784),r=n(87211);new WeakMap;function u(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const i=o.createContext(null);i.displayName="PressResponderContext";let a=null,c=new Set,l=!1,d=!1,s=!1;function f(e,t){for(let n of c)n(e,t)}function m(e){d=!0,function(e){return!(e.metaKey||!(0,r.V5)()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(a="keyboard",f("keyboard",e))}function p(e){a="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(d=!0,f("pointer",e))}function b(e){u(e)&&(d=!0,a="virtual")}function v(e){e.target!==window&&e.target!==document&&(d||s||(a="virtual",f("virtual",e)),d=!1,s=!1)}function y(){d=!1,s=!0}function E(){if("undefined"===typeof window||l)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){d=!0,e.apply(this,arguments)},document.addEventListener("keydown",m,!0),document.addEventListener("keyup",m,!0),document.addEventListener("click",b,!0),window.addEventListener("focus",v,!0),window.addEventListener("blur",y,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",p,!0),document.addEventListener("pointermove",p,!0),document.addEventListener("pointerup",p,!0)):(document.addEventListener("mousedown",p,!0),document.addEventListener("mousemove",p,!0),document.addEventListener("mouseup",p,!0)),l=!0}"undefined"!==typeof document&&("loading"!==document.readyState?E():document.addEventListener("DOMContentLoaded",E));function w(e){if("virtual"===a){let t=document.activeElement;(0,r.QB)((()=>{document.activeElement===t&&document.contains(e)&&(0,r.Ao)(e)}))}else(0,r.Ao)(e)}function g(e,t){return"#comment"!==e.nodeName&&function(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,o="none"!==t&&"hidden"!==n&&"collapse"!==n;if(o){const{getComputedStyle:t}=e.ownerDocument.defaultView;let{display:n,visibility:r}=t(e);o="none"!==n&&"hidden"!==r&&"collapse"!==r}return o}(e)&&function(e,t){return!e.hasAttribute("hidden")&&("DETAILS"!==e.nodeName||!t||"SUMMARY"===t.nodeName||e.hasAttribute("open"))}(e,t)&&(!e.parentElement||g(e.parentElement,e))}const h=o.createContext(null);let L=null,N=new Map;function x(e){let{children:t,contain:n,restoreFocus:u,autoFocus:i}=e,a=(0,o.useRef)(),c=(0,o.useRef)(),l=(0,o.useRef)([]),d=(0,o.useContext)(h),s=null==d?void 0:d.scopeRef;(0,r.bt)((()=>{let e=a.current.nextSibling,t=[];for(;e&&e!==c.current;)t.push(e),e=e.nextSibling;l.current=t}),[t,s]),(0,r.bt)((()=>(N.set(l,s),()=>{l!==L&&!M(l,L)||s&&!N.has(s)||(L=s),N.delete(l)})),[l,s]),function(e,t){let n=(0,o.useRef)(),u=(0,o.useRef)(null);(0,r.bt)((()=>{let o=e.current;if(!t)return;let r=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||e!==L)return;let n=document.activeElement,o=e.current;if(!R(n,o))return;let r=K(k(o),{tabbable:!0},o);r.currentNode=n;let u=t.shiftKey?r.previousNode():r.nextNode();u||(r.currentNode=t.shiftKey?o[o.length-1].nextElementSibling:o[0].previousElementSibling,u=t.shiftKey?r.previousNode():r.nextNode()),t.preventDefault(),u&&A(u,!0)},i=t=>{!L||M(L,e)?(L=e,n.current=t.target):e!==L||D(t.target,e)?e===L&&(n.current=t.target):n.current?n.current.focus():L&&F(L.current)},a=t=>{u.current=requestAnimationFrame((()=>{e!==L||D(document.activeElement,e)||(L=e,n.current=t.target,n.current.focus())}))};return document.addEventListener("keydown",r,!1),document.addEventListener("focusin",i,!1),o.forEach((e=>e.addEventListener("focusin",i,!1))),o.forEach((e=>e.addEventListener("focusout",a,!1))),()=>{document.removeEventListener("keydown",r,!1),document.removeEventListener("focusin",i,!1),o.forEach((e=>e.removeEventListener("focusin",i,!1))),o.forEach((e=>e.removeEventListener("focusout",a,!1)))}}),[e,t]),(0,o.useEffect)((()=>()=>cancelAnimationFrame(u.current)),[u])}(l,n),function(e,t,n){(0,r.bt)((()=>{if(!t)return;let o=e.current,r=document.activeElement,u=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey)return;let t=document.activeElement;if(!R(t,o))return;let n=K(document.body,{tabbable:!0});n.currentNode=t;let u=e.shiftKey?n.previousNode():n.nextNode();if(document.body.contains(r)&&r!==document.body||(r=null),(!u||!R(u,o))&&r){n.currentNode=r;do{u=e.shiftKey?n.previousNode():n.nextNode()}while(R(u,o));e.preventDefault(),e.stopPropagation(),u?A(u,!0):!function(e){for(let t of N.keys())if(R(e,t.current))return!0;return!1}(r)?t.blur():A(r,!0)}};return n||document.addEventListener("keydown",u,!0),()=>{n||document.removeEventListener("keydown",u,!0),t&&r&&R(document.activeElement,o)&&requestAnimationFrame((()=>{document.body.contains(r)&&A(r)}))}}),[e,t,n])}(l,u,n),function(e,t){const n=o.useRef(t);(0,o.useEffect)((()=>{n.current&&(L=e,R(document.activeElement,L.current)||F(e.current)),n.current=!1}),[])}(l,i);let f=function(e){return{focusNext(t){void 0===t&&(t={});let n=e.current,{from:o,tabbable:r,wrap:u}=t,i=o||document.activeElement,a=n[0].previousElementSibling,c=K(k(n),{tabbable:r},n);c.currentNode=R(i,n)?i:a;let l=c.nextNode();return!l&&u&&(c.currentNode=a,l=c.nextNode()),l&&A(l,!0),l},focusPrevious(t){void 0===t&&(t={});let n=e.current,{from:o,tabbable:r,wrap:u}=t,i=o||document.activeElement,a=n[n.length-1].nextElementSibling,c=K(k(n),{tabbable:r},n);c.currentNode=R(i,n)?i:a;let l=c.previousNode();return!l&&u&&(c.currentNode=a,l=c.previousNode()),l&&A(l,!0),l},focusFirst(t){void 0===t&&(t={});let n=e.current,{tabbable:o}=t,r=K(k(n),{tabbable:o},n);r.currentNode=n[0].previousElementSibling;let u=r.nextNode();return u&&A(u,!0),u},focusLast(t){void 0===t&&(t={});let n=e.current,{tabbable:o}=t,r=K(k(n),{tabbable:o},n);r.currentNode=n[n.length-1].nextElementSibling;let u=r.previousNode();return u&&A(u,!0),u}}}(l);return o.createElement(h.Provider,{value:{scopeRef:l,focusManager:f}},o.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:a}),t,o.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:c}))}const S=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],C=S.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";S.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const T=S.join(':not([hidden]):not([tabindex="-1"]),');function k(e){return e[0].parentElement}function R(e,t){return t.some((t=>t.contains(e)))}function D(e,t){for(let n of N.keys())if((n===t||M(t,n))&&R(e,n.current))return!0;return!1}function M(e,t){let n=N.get(t);return!!n&&(n===e||M(e,n))}function A(e,t){if(void 0===t&&(t=!1),null==e||t){if(null!=e)try{e.focus()}catch(n){}}else try{w(e)}catch(n){}}function F(e){let t=e[0].previousElementSibling,n=K(k(e),{tabbable:!0},e);n.currentNode=t,A(n.nextNode())}function K(e,t,n){let o=null!=t&&t.tabbable?T:C,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var r;return null!=t&&null!=(r=t.from)&&r.contains(e)?NodeFilter.FILTER_REJECT:e.matches(o)&&g(e)&&(!n||R(e,n))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return null!=t&&t.from&&(r.currentNode=t.from),r}},87211:function(e,t,n){"use strict";n.d(t,{bt:function(){return u},Me:function(){return a},Ao:function(){return c},QB:function(){return m},V5:function(){return b}});var o=n(14267),r=n(2784);const u="undefined"!==typeof window?r.useLayoutEffect:()=>{};let i=new Map;function a(e){let t=(0,r.useRef)(!0);t.current=!0;let[n,a]=(0,r.useState)(e),c=(0,r.useRef)(null),l=(0,o.gP)(n),d=e=>{t.current?c.current=e:a(e)};return i.set(l,d),u((()=>{t.current=!1}),[d]),u((()=>{let e=l;return()=>{i.delete(e)}}),[l]),(0,r.useEffect)((()=>{let e=c.current;e&&(a(e),c.current=null)}),[a,d]),l}new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);function c(e){if(function(){if(null==l){l=!1;try{document.createElement("div").focus({get preventScroll(){return l=!0,!0}})}catch(e){}}return l}())e.focus({preventScroll:!0});else{let t=function(e){var t=e.parentNode,n=[],o=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==o;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;o instanceof HTMLElement&&n.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:o}of e)t.scrollTop=n,t.scrollLeft=o}(t)}}let l=null;let d=new Map,s=new Set;function f(){if("undefined"===typeof window)return;let e=t=>{let n=d.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),d.delete(t.target)),0===d.size)){for(let e of s)e();s.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=d.get(t.target);n||(n=new Set,d.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}function m(e){requestAnimationFrame((()=>{0===d.size?e():s.add(e)}))}"undefined"!==typeof document&&("loading"!==document.readyState?f():document.addEventListener("DOMContentLoaded",f));"undefined"!==typeof window&&window.visualViewport;new Map;function p(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function b(){return p(/^Mac/)}},50381:function(e,t,n){"use strict";var o=n(91706),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,u,i,a,c,l,d=!1;t||(t={}),n=t.debug||!1;try{if(i=o(),a=document.createRange(),c=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=r[t.format]||r.default;window.clipboardData.setData(u,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(l),a.selectNodeContents(l),c.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(s){n&&console.error("unable to copy using execCommand: ",s),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(s){n&&console.error("unable to copy using clipboardData: ",s),n&&console.error("falling back to prompt"),u=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(u,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(a):c.removeAllRanges()),l&&document.body.removeChild(l),i()}return d}},84501:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,u]=t;if(o&&u){o=parseInt(o),u=parseInt(u);const e=o<u?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(u+=e);for(let t=o;t!==u;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},91706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);