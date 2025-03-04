import{x as u,g as _,o as V,Y as C,ak as g,al as y,X as L,y as p,am as W,ag as q,N as j,v as E,M as B,an as F,H,b as A,e as N,h as b,k as c,ao as U,ap as $,j as G,aq as Y}from"./entry.DdgCM4kq.js";function ie(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const z=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function se(e){return z.includes(e)}const X={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function ue(e){return e=e.toLowerCase(),X[e]??e}const J=["touchstart","touchmove"];function ce(e){return J.includes(e)}function le(e,t){if(t){const r=document.body;e.autofocus=!0,C(()=>{document.activeElement===r&&e.focus()})}}function fe(e){u&&_(e)!==null&&V(e)}let x=!1;function K(){x||(x=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function I(e){var t=L,r=p;g(null),y(null);try{return e()}finally{g(t),y(r)}}function de(e,t,r,o=r){e.addEventListener(t,()=>I(r));const n=e.__on_r;n?e.__on_r=()=>{n(),o(!0)}:e.__on_r=()=>o(!0),K()}const Q=new Set,Z=new Set;function ee(e,t,r,o){function n(a){if(o.capture||te.call(t,a),!a.cancelBubble)return I(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?C(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function _e(e,t,r,o,n){var a={capture:o,passive:n},i=ee(e,t,r,a);(t===document.body||t===window||t===document)&&W(()=>{t.removeEventListener(e,i,a)})}function pe(e){for(var t=0;t<e.length;t++)Q.add(e[t]);for(var r of Z)r(e)}function te(e){var k;var t=this,r=t.ownerDocument,o=e.type,n=((k=e.composedPath)==null?void 0:k.call(e))||[],a=n[0]||e.target,i=0,d=e.__root;if(d){var l=n.indexOf(d);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var T=n.indexOf(t);if(T===-1)return;l<=T&&(i=l)}if(a=n[i]||e.target,a!==t){q(e,"currentTarget",{configurable:!0,get(){return a||r}});var P=L,O=p;g(null),y(null);try{for(var v,S=[];a!==null;){var w=a.assignedSlot||a.parentNode||a.host||null;try{var h=a["__"+o];if(h!==void 0&&!a.disabled)if(j(h)){var[D,...R]=h;D.apply(a,[e,...R])}else h.call(a,e)}catch(m){v?S.push(m):v=m}if(e.cancelBubble||w===t||w===null)break;a=w}if(v){for(let m of S)queueMicrotask(()=>{throw m});throw v}}finally{e.__root=t,delete e.currentTarget,g(P),y(O)}}}let s;function ve(){s=void 0}function he(e){let t=null,r=u;var o;if(u){for(t=c,s===void 0&&(s=_(document.head));s!==null&&(s.nodeType!==8||s.data!==H);)s=A(s);s===null?N(!1):s=b(A(s))}u||(o=document.head.appendChild(E()));try{B(()=>e(o),F)}finally{r&&(N(!0),s=c,b(t))}}function M(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function f(e,t){var r=p;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function re(e,t){var r=(t&U)!==0,o=(t&$)!==0,n,a=!e.startsWith("<!>");return()=>{if(u)return f(c,null),c;n===void 0&&(n=M(a?e:"<!>"+e),r||(n=_(n)));var i=o?document.importNode(n,!0):n.cloneNode(!0);if(r){var d=_(i),l=i.lastChild;f(d,l)}else f(i,i);return i}}function me(e,t){var r=re(e,t);return()=>ae(r())}function ge(e,t,r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(u)return f(c,null),c;if(!a){var i=M(n),d=_(i);a=_(d)}var l=a.cloneNode(!0);return f(l,l),l}}function ae(e){if(u)return e;const t=e.nodeType===11,r=e.tagName==="SCRIPT"?[e]:e.querySelectorAll("script"),o=p;for(const a of r){const i=document.createElement("script");for(var n of a.attributes)i.setAttribute(n.name,n.value);i.textContent=a.textContent,(t?e.firstChild===a:e===a)&&(o.nodes_start=i),(t?e.lastChild===a:e===a)&&(o.nodes_end=i),a.replaceWith(i)}return e}function ye(e=""){if(!u){var t=E(e+"");return f(t,t),t}var r=c;return r.nodeType!==3&&(r.before(r=E()),b(r)),f(r,r),r}function Ee(){if(u)return f(c,null),c;var e=document.createDocumentFragment(),t=document.createComment(""),r=E();return e.append(t,r),f(t,r),e}function we(e,t){if(u){p.nodes_end=c,G();return}e!==null&&e.before(t)}const ne="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ne);Y();export{we as a,Q as b,ve as c,f as d,ie as e,ee as f,pe as g,te as h,ce as i,le as j,se as k,Ee as l,ye as m,ue as n,he as o,M as p,de as q,Z as r,_e as s,re as t,ge as u,fe as v,me as w};
