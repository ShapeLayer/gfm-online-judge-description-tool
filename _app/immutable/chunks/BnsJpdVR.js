import{v as fr,a8 as nr,h as M,x as b,g as lr,j as ur,E as P,O as or,a9 as cr,aa as U,e as S,k as O,l as vr,ab as W,w as j,ac as _r,ad as $,q as m,z,ae as X,Z as dr,C as F,K as hr,af as G,ag as gr,o as Ar,ah as pr,ai as Er,aj as V,ak as Nr,b as Tr,al as br,am as rr,an as Cr,ao as Ir,J as yr,ap as wr,aq as Lr,ar as Or}from"./Di4OxQdd.js";import{e as Rr,f as Sr,g as kr,j as Dr,n as Hr,k as Mr}from"./DDtYQ3ip.js";function Jr(r,a){return a}function $r(r,a,e,s){for(var t=[],n=a.length,o=0;o<n;o++)gr(a[o].e,t,!0);var v=n>0&&t.length===0&&e!==null;if(v){var _=e.parentNode;Ar(_),_.append(e),s.clear(),w(r,a[0].prev,a[n-1].next)}pr(t,()=>{for(var p=0;p<n;p++){var g=a[p];v||(s.delete(g.k),w(r,g.prev,g.next)),Er(g.e,!v)}})}function Zr(r,a,e,s,t,n=null){var o=r,v={flags:a,items:new Map,first:null},_=(a&rr)!==0;if(_){var p=r;o=b?M(lr(p)):p.appendChild(fr())}b&&ur();var g=null,I=!1,c=or(()=>{var h=e();return hr(h)?h:h==null?[]:m(h)});nr(()=>{var h=P(c),l=h.length;if(I&&l===0)return;I=l===0;let T=!1;if(b){var E=o.data===cr;E!==(l===0)&&(o=U(),M(o),S(!1),T=!0)}if(b){for(var d=null,N,u=0;u<l;u++){if(O.nodeType===8&&O.data===vr){o=O,T=!0,S(!1);break}var i=h[u],f=s(i,u);N=ar(O,v,d,null,i,f,u,t,a,e),v.items.set(f,N),d=N}l>0&&M(U())}b||Gr(h,v,o,t,a,s,e),n!==null&&(l===0?g?W(g):g=j(()=>n(o)):g!==null&&_r(g,()=>{g=null})),T&&S(!0),P(c)}),b&&(o=O)}function Gr(r,a,e,s,t,n,o){var K,Y,q,x;var v=(t&Cr)!==0,_=(t&(V|G))!==0,p=r.length,g=a.items,I=a.first,c=I,h,l=null,T,E=[],d=[],N,u,i,f;if(v)for(f=0;f<p;f+=1)N=r[f],u=n(N,f),i=g.get(u),i!==void 0&&((K=i.a)==null||K.measure(),(T??(T=new Set)).add(i));for(f=0;f<p;f+=1){if(N=r[f],u=n(N,f),i=g.get(u),i===void 0){var y=c?c.e.nodes_start:e;l=ar(y,a,l,l===null?a.first:l.next,N,u,f,s,t,o),g.set(u,l),E=[],d=[],c=l.next;continue}if(_&&Vr(i,N,f,t),(i.e.f&$)!==0&&(W(i.e),v&&((Y=i.a)==null||Y.unfix(),(T??(T=new Set)).delete(i))),i!==c){if(h!==void 0&&h.has(i)){if(E.length<d.length){var A=d[0],C;l=A.prev;var k=E[0],D=E[E.length-1];for(C=0;C<E.length;C+=1)J(E[C],A,e);for(C=0;C<d.length;C+=1)h.delete(d[C]);w(a,k.prev,D.next),w(a,l,k),w(a,D,A),c=A,l=D,f-=1,E=[],d=[]}else h.delete(i),J(i,c,e),w(a,i.prev,i.next),w(a,i,l===null?a.first:l.next),w(a,l,i),l=i;continue}for(E=[],d=[];c!==null&&c.k!==u;)(c.e.f&$)===0&&(h??(h=new Set)).add(c),d.push(c),c=c.next;if(c===null)continue;i=c}E.push(i),l=i,c=i.next}if(c!==null||h!==void 0){for(var L=h===void 0?[]:m(h);c!==null;)(c.e.f&$)===0&&L.push(c),c=c.next;var H=L.length;if(H>0){var tr=(t&rr)!==0&&p===0?e:null;if(v){for(f=0;f<H;f+=1)(q=L[f].a)==null||q.measure();for(f=0;f<H;f+=1)(x=L[f].a)==null||x.fix()}$r(a,L,tr,g)}}v&&br(()=>{var B;if(T!==void 0)for(i of T)(B=i.a)==null||B.apply()}),z.first=a.first&&a.first.e,z.last=l&&l.e}function Vr(r,a,e,s){(s&V)!==0&&X(r.v,a),(s&G)!==0?X(r.i,e):r.i=e}function ar(r,a,e,s,t,n,o,v,_,p){var g=(_&V)!==0,I=(_&Nr)===0,c=g?I?dr(t):F(t):t,h=(_&G)===0?o:F(o),l={i:h,v:c,k:n,a:null,e:null,prev:e,next:s};try{return l.e=j(()=>v(r,c,h,p),b),l.e.prev=e&&e.e,l.e.next=s&&s.e,e===null?a.first=l:(e.next=l,e.e.next=l.e),s!==null&&(s.prev=l,s.e.prev=l.e),l}finally{}}function J(r,a,e){for(var s=r.next?r.next.e.nodes_start:e,t=a?a.e.nodes_start:e,n=r.e.nodes_start;n!==s;){var o=Tr(n);t.before(n),n=o}}function w(r,a,e){a===null?r.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}function er(r){var a,e,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var t=r.length;for(a=0;a<t;a++)r[a]&&(e=er(r[a]))&&(s&&(s+=" "),s+=e)}else for(e in r)r[e]&&(s&&(s+=" "),s+=e);return s}function Kr(){for(var r,a,e=0,s="",t=arguments.length;e<t;e++)(r=arguments[e])&&(a=er(r))&&(s&&(s+=" "),s+=a);return s}function Yr(r){return typeof r=="object"?Kr(r):r??""}const Z=[...` 	
\r\f \v\uFEFF`];function qr(r,a,e){var s=r==null?"":""+r;if(e){for(var t in e)if(e[t])s=s?s+" "+t:t;else if(s.length)for(var n=t.length,o=0;(o=s.indexOf(t,o))>=0;){var v=o+n;(o===0||Z.includes(s[o-1]))&&(v===s.length||Z.includes(s[v]))?s=(o===0?"":s.substring(0,o))+s.substring(v+1):o=v}}return s===""?null:s}function xr(r,a,e,s,t,n){var o=r.__className;if(b||o!==e){var v=qr(e,s,n);(!b||v!==r.getAttribute("class"))&&(v==null?r.removeAttribute("class"):a?r.className=v:r.setAttribute("class",v)),r.__className=e}else if(n)for(var _ in n){var p=!!n[_];(t==null||p!==!!t[_])&&r.classList.toggle(_,p)}return n}const R=Symbol("class");function Br(r,a){a?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function Pr(r,a,e,s){var t=r.__attributes??(r.__attributes={});b&&(t[a]=r.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&r.nodeName==="LINK")||t[a]!==(t[a]=e)&&(a==="style"&&"__styles"in r&&(r.__styles={}),a==="loading"&&(r[Ir]=e),e==null?r.removeAttribute(a):typeof e!="string"&&sr(r).includes(a)?r[a]=e:r.setAttribute(a,e))}function Qr(r,a,e,s,t=!1,n=!1,o=!1){let v=b&&n;v&&S(!1);var _=a||{},p=r.tagName==="OPTION";for(var g in a)g in e||(e[g]=null);e.class?e.class=Yr(e.class):e[R]&&(e.class=null);var I=sr(r),c=r.__attributes??(r.__attributes={});for(const u in e){let i=e[u];if(p&&u==="value"&&i==null){r.value=r.__value="",_[u]=i;continue}if(u==="class"){var h=r.namespaceURI==="http://www.w3.org/1999/xhtml";xr(r,h,i,s,a==null?void 0:a[R],e[R]),_[u]=i,_[R]=e[R];continue}var l=_[u];if(i!==l){_[u]=i;var T=u[0]+u[1];if(T!=="$$"){if(T==="on"){const f={},y="$$"+u;let A=u.slice(2);var E=Mr(A);if(Rr(A)&&(A=A.slice(0,-7),f.capture=!0),!E&&l){if(i!=null)continue;r.removeEventListener(A,_[y],f),_[y]=null}if(i!=null)if(E)r[`__${A}`]=i,kr([A]);else{let C=function(k){_[u].call(this,k)};_[y]=Sr(A,r,C,f)}else E&&(r[`__${A}`]=void 0)}else if(u==="style"&&i!=null)r.style.cssText=i+"";else if(u==="autofocus")Dr(r,!!i);else if(!n&&(u==="__value"||u==="value"&&i!=null))r.value=r.__value=i;else if(u==="selected"&&p)Br(r,i);else{var d=u;t||(d=Hr(d));var N=d==="defaultValue"||d==="defaultChecked";if(i==null&&!n&&!N)if(c[u]=null,d==="value"||d==="checked"){let f=r;const y=a===void 0;if(d==="value"){let A=f.defaultValue;f.removeAttribute(d),f.defaultValue=A,f.value=f.__value=y?A:null}else{let A=f.defaultChecked;f.removeAttribute(d),f.defaultChecked=A,f.checked=y?A:!1}}else r.removeAttribute(u);else N||I.includes(d)&&(n||typeof i!="string")?r[d]=i:typeof i!="function"&&Pr(r,d,i)}u==="style"&&"__styles"in r&&(r.__styles={})}}}return v&&S(!0),_}var Q=new Map;function sr(r){var a=Q.get(r.nodeName);if(a)return a;Q.set(r.nodeName,a=[]);for(var e,s=r,t=Element.prototype;t!==s;){e=wr(s);for(var n in e)e[n].set&&a.push(n);s=yr(s)}return a}const Ur="data-no-translate",Wr="paraglide:lang",jr="paraglide_lang",ir={},zr=()=>Or(ir),mr=r=>{Lr(ir,r)};function ra(){const r=zr();function a(s,t){return typeof s!="string"||!r?s:r.translateHref(s,t)}function e(s,t){if(s[Ur])return s;for(const{attribute_name:n,lang_attribute_name:o}of t)if(n in s){const v=s[n],_=o?s[o]:void 0;s[n]=a(v,typeof _=="string"?_:void 0)}return s}return[a,e]}export{R as C,jr as L,mr as a,Wr as b,xr as c,Yr as d,Zr as e,Qr as f,ra as g,Jr as i,Pr as s};
