import{l as b,a as d,t as N,o as W}from"../chunks/DDtYQ3ip.js";import{aI as Y,aJ as Z,aK as Q,a8 as I,x as w,j as X,ac as $,w as O,k as S,U as aa,as as ea,aL as B,ai as na,aM as ta,p as j,f as p,a as D,E as e,N as L,aN as G,t as ra,a0 as sa,a1 as U,aO as ia,aP as oa,c as ca,r as la}from"../chunks/Di4OxQdd.js";import{a as M,s as F,b as A,d as H,n as K,p as E,e as R,i as ua}from"../chunks/D69dNfDS.js";import{e as ga,i as fa,s as C,L as ha,a as da,b as ma}from"../chunks/BnsJpdVR.js";function va(t,a,o){w&&X();var c=t,s=aa,n,r=Y()?Z:Q;I(()=>{r(s,s=a())&&(n&&$(n),n=O(()=>o(c)))}),w&&(c=S)}function q(t,a,...o){var c=t,s=B,n;I(()=>{s!==(s=a())&&(n&&(na(n),n=null),n=O(()=>s(c,...o)))},ea),w&&(c=S)}const _a=ta;function La(t,a){return t.protocol!==a.protocol?a.href:a.password||a.username?"//"+[a.username,a.password].filter(Boolean).join(":")+"@"+a.host+a.pathname+a.search+a.hash:t.host!==a.host?"//"+a.host+a.pathname+a.search+a.hash:a.pathname+a.search+a.hash}function ba(t,a,o){const c=new URL(o??"/",a).pathname;return t.origin!==a.origin||!t.pathname.startsWith(c)}var pa=N('<link rel="alternate">');function Pa(t,a){j(a,!0);const[o,c]=F(),s=()=>H(E,"$page",o),n=L(()=>K(G,new URL(s().url))||"/"),r=(i,f)=>{const l=[];for(const P of a.availableLanguageTags){const _=f.getLocalisedPath(i,P),h=A(_,e(n),void 0),m=new URL(h,new URL(s().url)).href;l.push(m)}return l},v=L(()=>R(s().url.pathname,e(n))[0]),x=L(()=>a.strategy.getCanonicalPath(e(v),a.currentLang)),y=L(()=>r(e(x),a.strategy));var k=b(),u=p(k);{var g=i=>{var f=b(),l=p(f);ga(l,17,()=>e(y),fa,(P,_,h)=>{var m=pa();ra(()=>{C(m,"hreflang",a.availableLanguageTags[h]),C(m,"href",e(_))}),d(P,m)}),d(i,f)};M(u,i=>{a.availableLanguageTags.length>=1&&i(g)})}d(t,k),D(),c()}const ya=(t,a)=>`${ha}=${t};Path=${a};SameSite=lax;Max-Age=31557600`;function ka(t,a){j(a,!0);const[o,c]=F(),s=()=>H(E,"$page",o),n=L(()=>K(G,new URL(s().url))||"/"),r=L(()=>a.languageTag??a.i18n.getLanguageFromUrl(s().url));sa(()=>{a.i18n.config.runtime.setLanguageTag(e(r)),document.documentElement.lang=e(r),document.documentElement.dir=a.i18n.config.textDirection[e(r)]??"ltr"});let v=0;U(()=>{e(r)&&(v+=1)}),U(()=>{e(r)&&(v>1||_a)&&ia(ma)});function x(u,g){try{const i=new URL(oa(E).url),[f,l]=R(i.pathname,e(n)),P=a.i18n.strategy.getCanonicalPath(f,e(r)),_=new URL(i);_.pathname=A(P,e(n),l);const h=new URL(u,new URL(_));if(ba(h,i,e(n))||a.i18n.config.exclude(h.pathname))return u;const m=g??e(r),[z,J]=R(h.pathname,e(n)),V=a.i18n.strategy.getLocalisedPath(z,m),T=new URL(h);return T.pathname=A(V,e(n),J),La(i,T)}catch{return u}}da({translateHref:x}),U(()=>{document.cookie=ya(e(r),e(n))});var y=b();W(u=>{var g=b(),i=p(g);{var f=l=>{Pa(l,{get availableLanguageTags(){return a.i18n.config.runtime.availableLanguageTags},get strategy(){return a.i18n.strategy},get currentLang(){return e(r)}})};M(i,l=>{a.i18n.config.seo.noAlternateLinks!==!0&&!a.i18n.config.exclude(s().url.pathname)&&l(f)})}d(u,g)});var k=p(y);va(k,()=>e(r),u=>{var g=b(),i=p(g);q(i,()=>a.children??B),d(u,g)}),d(t,y),D(),c()}const xa=!0,Ta=Object.freeze(Object.defineProperty({__proto__:null,prerender:xa},Symbol.toStringTag,{value:"Module"}));var Ua=N('<div class="flex relative h-screen max-h-screen flex-col p-8"><!></div>');function Ca(t,a){var o=Ua(),c=ca(o);ka(c,{i18n:ua,children:(s,n)=>{var r=b(),v=p(r);q(v,()=>a.children),d(s,r)},$$slots:{default:!0}}),la(o),d(t,o)}export{Ca as component,Ta as universal};
