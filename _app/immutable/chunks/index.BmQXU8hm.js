import{v as ie,M as ne,x as N,h as S,j as W,N as fe,q as Z,O as le,P as U,e as D,k as L,Q as w,R as J,w as j,S as ue,y as X,T as q,U as oe,o as ce,V as _e,W as ve,g as de,l as he,X as pe,Y as ge,Z as H,_ as $,$ as Ae,a0 as z,a1 as m,a2 as Ee,a3 as Te,b as ye,a4 as Ne,a5 as Ie,a6 as be,a7 as Ce,a8 as ke}from"./entry.HEt-5xfa.js";import{e as Le,f as Oe,g as we,j as xe,n as Re,k as Me}from"./legacy.D8fDleAQ.js";function Xe(e,r){return r}function Se(e,r,a,s){for(var n=[],l=r.length,_=0;_<l;_++)oe(r[_].e,n,!0);var d=l>0&&n.length===0&&a!==null;if(d){var p=a.parentNode;ce(p),p.append(a),s.clear(),C(e,r[0].prev,r[l-1].next)}_e(n,()=>{for(var E=0;E<l;E++){var g=r[E];d||(s.delete(g.k),C(e,g.prev,g.next)),ve(g.e,!d)}})}function qe(e,r,a,s,n,l=null){var _=e,d={flags:r,items:new Map,first:null},p=(r&m)!==0;if(p){var E=e;_=N?S(de(E)):E.appendChild(ie())}N&&W();var g=null,y=!1;ne(()=>{var T=a(),u=fe(T)?T:T==null?[]:Z(T),c=u.length;if(y&&c===0)return;y=c===0;let i=!1;if(N){var I=_.data===le;I!==(c===0)&&(_=U(),S(_),D(!1),i=!0)}if(N){for(var f=null,o,h=0;h<c;h++){if(L.nodeType===8&&L.data===he){_=L,i=!0,D(!1);break}var A=u[h],t=s(A,h);o=ee(L,d,f,null,A,t,h,n,r),d.items.set(t,o),f=o}c>0&&S(U())}if(!N){var v=pe;De(u,d,_,n,r,(v.f&w)!==0,s)}l!==null&&(c===0?g?J(g):g=j(()=>l(_)):g!==null&&ue(g,()=>{g=null})),i&&D(!0),a()}),N&&(_=L)}function De(e,r,a,s,n,l,_,d){var G,Y,P,B;var p=(n&Ee)!==0,E=(n&(H|$))!==0,g=e.length,y=r.items,T=r.first,u=T,c,i=null,I,f=[],o=[],h,A,t,v;if(p)for(v=0;v<g;v+=1)h=e[v],A=_(h,v),t=y.get(A),t!==void 0&&((G=t.a)==null||G.measure(),(I??(I=new Set)).add(t));for(v=0;v<g;v+=1){if(h=e[v],A=_(h,v),t=y.get(A),t===void 0){var x=u?u.e.nodes_start:a;i=ee(x,r,i,i===null?r.first:i.next,h,A,v,s,n),y.set(A,i),f=[],o=[],u=i.next;continue}if(E&&He(t,h,v,n),t.e.f&w&&(J(t.e),p&&((Y=t.a)==null||Y.unfix(),(I??(I=new Set)).delete(t))),t!==u){if(c!==void 0&&c.has(t)){if(f.length<o.length){var O=o[0],b;i=O.prev;var V=f[0],R=f[f.length-1];for(b=0;b<f.length;b+=1)F(f[b],O,a);for(b=0;b<o.length;b+=1)c.delete(o[b]);C(r,V.prev,R.next),C(r,i,V),C(r,R,O),u=O,i=R,v-=1,f=[],o=[]}else c.delete(t),F(t,u,a),C(r,t.prev,t.next),C(r,t,i===null?r.first:i.next),C(r,i,t),i=t;continue}for(f=[],o=[];u!==null&&u.k!==A;)(l||!(u.e.f&w))&&(c??(c=new Set)).add(u),o.push(u),u=u.next;if(u===null)continue;t=u}f.push(t),i=t,u=t.next}if(u!==null||c!==void 0){for(var k=c===void 0?[]:Z(c);u!==null;)(l||!(u.e.f&w))&&k.push(u),u=u.next;var M=k.length;if(M>0){var te=n&m&&g===0?a:null;if(p){for(v=0;v<M;v+=1)(P=k[v].a)==null||P.measure();for(v=0;v<M;v+=1)(B=k[v].a)==null||B.fix()}Se(r,k,te,y)}}p&&ge(()=>{var K;if(I!==void 0)for(t of I)(K=t.a)==null||K.apply()}),X.first=r.first&&r.first.e,X.last=i&&i.e}function He(e,r,a,s){s&H&&q(e.v,r),s&$?q(e.i,a):e.i=a}function ee(e,r,a,s,n,l,_,d,p,E){var g=(p&H)!==0,y=(p&Te)===0,T=g?y?Ae(n):z(n):n,u=p&$?z(_):_,c={i:u,v:T,k:l,a:null,e:null,prev:a,next:s};try{return c.e=j(()=>d(e,T,u),N),c.e.prev=a&&a.e,c.e.next=s&&s.e,a===null?r.first=c:(a.next=c,a.e.next=c.e),s!==null&&(s.prev=c,s.e.prev=c.e),c}finally{}}function F(e,r,a){for(var s=e.next?e.next.e.nodes_start:a,n=r?r.e.nodes_start:a,l=e.e.nodes_start;l!==s;){var _=ye(l);n.before(l),l=_}}function C(e,r,a){r===null?e.first=a:(r.next=a,r.e.next=a&&a.e),a!==null&&(a.prev=r,a.e.prev=r&&r.e)}function ze(e,r,a,s,n){var d;N&&W();var l=(d=r.$$slots)==null?void 0:d[a],_=!1;l===!0&&(l=r.children,_=!0),l===void 0||l(e,_?()=>s:s)}function re(e){var r,a,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(r=0;r<n;r++)e[r]&&(a=re(e[r]))&&(s&&(s+=" "),s+=a)}else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}function $e(){for(var e,r,a=0,s="",n=arguments.length;a<n;a++)(e=arguments[a])&&(r=re(e))&&(s&&(s+=" "),s+=r);return s}function Ve(e){return typeof e=="object"?$e(e):e??""}function Ge(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ye(e,r,a,s){var n=e.__attributes??(e.__attributes={});N&&(n[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||n[r]!==(n[r]=a)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[be]=a),a==null?e.removeAttribute(r):typeof a!="string"&&ae(e).includes(r)?e[r]=a:e.setAttribute(r,a))}function Fe(e,r,a,s,n=!1,l=!1,_=!1){var d=r||{},p=e.tagName==="OPTION";for(var E in r)E in a||(a[E]=null);a.class&&(a.class=Ve(a.class));var g=ae(e),y=e.__attributes??(e.__attributes={});for(const f in a){let o=a[f];if(p&&f==="value"&&o==null){e.value=e.__value="",d[f]=o;continue}var T=d[f];if(o!==T){d[f]=o;var u=f[0]+f[1];if(u!=="$$"){if(u==="on"){const h={},A="$$"+f;let t=f.slice(2);var c=Me(t);if(Le(t)&&(t=t.slice(0,-7),h.capture=!0),!c&&T){if(o!=null)continue;e.removeEventListener(t,d[A],h),d[A]=null}if(o!=null)if(c)e[`__${t}`]=o,we([t]);else{let v=function(x){d[f].call(this,x)};d[A]=Oe(t,e,v,h)}else c&&(e[`__${t}`]=void 0)}else if(f==="style"&&o!=null)e.style.cssText=o+"";else if(f==="autofocus")xe(e,!!o);else if(f==="__value"||f==="value"&&o!=null)e.value=e[f]=e.__value=o;else if(f==="selected"&&p)Ge(e,o);else{var i=f;n||(i=Re(i));var I=i==="defaultValue"||i==="defaultChecked";if(o==null&&!l&&!I)if(y[f]=null,i==="value"||i==="checked"){let h=e;if(i==="value"){let A=h.defaultValue;h.removeAttribute(i),h.defaultValue=A}else{let A=h.defaultChecked;h.removeAttribute(i),h.defaultChecked=A}}else e.removeAttribute(f);else I||g.includes(i)&&(l||typeof o!="string")?e[i]=o:typeof o!="function"&&(N&&(i==="src"||i==="href"||i==="srcset")||Ye(e,i,o))}f==="style"&&"__styles"in e&&(e.__styles={})}}}return d}var Q=new Map;function ae(e){var r=Q.get(e.nodeName);if(r)return r;Q.set(e.nodeName,r=[]);for(var a,s=e,n=Element.prototype;n!==s;){a=Ie(s);for(var l in a)a[l].set&&r.push(l);s=Ne(s)}return r}const Pe="data-no-translate",Qe="paraglide:lang",We="paraglide_lang",se={},Be=()=>ke(se),Ze=e=>{Ce(se,e)};function Je(){const e=Be();function r(s,n){return typeof s!="string"||!e?s:e.translateHref(s,n)}function a(s,n){if(s[Pe])return s;for(const{attribute_name:l,lang_attribute_name:_}of n)if(l in s){const d=s[l],p=_?s[_]:void 0;s[l]=r(d,typeof p=="string"?p:void 0)}return s}return[r,a]}export{We as L,Ze as a,Qe as b,ze as c,Ve as d,qe as e,Fe as f,Je as g,Xe as i,Ye as s};
