import{_ as Q}from"../chunks/5.BeY3mwzr.js";import{_ as Z}from"../chunks/6.L8EqC9OI.js";import{R as $}from"../chunks/control.pJ1mnnAb.js";import"../chunks/disclose-version.15-3dQtY.js";import{j as A,r as w,k as ee,E as Y,l as te,m as I,n as le,o as j,q as R,v as q,w as ae,x as F,y as ne,z as K,i as D,p as P,b as X,A as E,B as se,g as H}from"../chunks/runtime.CzAkxY_o.js";import{u as re,v as y,w as G,x as oe,y as ie,S as B,z as ce,A as L,B as ue,C as fe,D as M,E as de,q as _e,e as S,i as ve,k as pe,t as he,F as N,c as ge,f as T,l as me,b as xe,a as b,s as C,d as z,r as Ee}from"../chunks/render.BqB05fpx.js";function be(){}function ye(e,t,l,a,n,o,c){const h=(l&I)!==0,s=oe(l,e);let u=null;re(e,h);let d,g=null,m=null;s.r=r=>{const f=u,v=f.s;v.add(r),r.f(()=>{v.delete(r),v.size===0&&f.e!==null&&(f.d!==null&&(y(f.d),f.d=null),A(f.e),f.e=null)})};const i=()=>{const r={d:null,e:null,s:new Set,p:u},f=w(()=>{const v=s.d;v!==null&&(y(v),s.d=null);let p=s.a;(s.f&I)!==0&&(p=ie(),s.a.appendChild(p)),o(p),r.d=s.d,s.d=null},s,!0);r.e=f,u=r},x=r=>{const f=r.f,v=(f&I)!==0,p=r.a;c(d,r,p,v,n,f,!0,g)},_=w(()=>{const r=t();d=ee(r)?r:r==null?[]:Array.from(r),a!==null?g=d.map(a):l&Y||d.map(be);const f=d.length;if(o!==null){if(f===0){if(s.v.length!==0||m===null){x(s),i();return}}else if(s.v.length===0&&u!==null){const v=u,p=v.s;p.size===0?v.d!==null&&(y(v.d),v.d=null):G(p,"out")}}m!==null&&le(m)},s,!1);m=w(x,s,!0),te(_,()=>{const r=s.f,f=s.a,v=(r&I)!==0;let p=u;for(;p!==null;){const k=p.d;k!==null&&y(k);const W=p.e;W!==null&&A(W),p=p.p}c([],s,f,v,n,r,!1,g),A(m)}),s.e=_}function we(e,t,l,a,n){ye(e,t,l,null,a,n,Ie)}function Ie(e,t,l,a,n,o,c){var h=B in e&&e[B].i,s=t.v,u=t.s;h&&(o&=~R);var d=s.length,g=e.length,m=Math.max(d,g),i=0,x,_;if(u.length!==0&&Se(u),g===0)for(x=[],a&&d!==0&&ce(l);i<m;)_=s[i++],O(_,u,c,a);else{var r;if(x=Array(g),L!==null)for(var f=L[0];i<m;i++){r=h?j(e,i):e[i];var v=ue(f);fe(v),f=v.at(-1).nextSibling.nextSibling,_=U(r,null,i,n,o),x[i]=_}else for(;i<m;i++)i>=d?(r=h?j(e,i):e[i],_=U(r,null,i,n,o),x[i]=_,Ae(_,l,a,null)):i>=g?(_=s[i],O(_,u,c)):(r=e[i],_=s[i],x[i]=_,Te(_,r,i,o))}t.v=x}function Ae(e,t,l,a){var n=e.d;return a===null?l?M(n,t,null):M(n,t.parentNode,t):M(n,null,a)}function Se(e){var t=e.length;if(t>0){for(var l=0,a,n;l<t;l++)a=e[l],n=a.r,n!==null&&(a.r=null,O(a,null,!1));e.length=0}}function Te(e,t,l,a){a&R?q(e.v,t):ae(e.v)&&(e.v.o[e.v.p]=t);const n=e.s,o=(a&F)!==0,c=e.a;n!==null&&a&Y&&c!==null&&c(e,n,l,o),o?q(e.i,l):e.i=l}function O(e,t,l,a=!1){const n=e.s;if(l&&n!==null){for(let c of n)c.r==="key"&&n.delete(c);if(n.size===0)e.s=null;else{G(n,"out"),t!==null&&t.push(e);return}}const o=e.d;!a&&o!==null&&y(o),A(e.e)}function U(e,t,l,a,n){const c=(n&R)===0?e:n&ne?D(e):K(e),h=n&F?D(l):l,s=de(c,h,t),u=w(d=>{a(null,d.v,d.i)},s,!0);return s.e=u,s}function Ce(e){const t="/src/routes/docs/";return e.startsWith(t)?"/docs/"+e.slice(t.length).replace(/\+page\.svx$/,"").replace(/\+/g,"/"):e}function J(){const e=Object.assign({"/src/routes/docs/quickstart/+page.svx":Q,"/src/routes/docs/quickstart/install/+page.svx":Z});let t=[];for(const l in e){const a=e[l],n=Ce(l);if(a&&typeof a=="object"&&"metadata"in a&&n){const c={...a.metadata,url:n};c.folder&&(c.children=[]);let h=t.filter(s=>s.folder&&c.url.startsWith(s.url));h.length==0?t.push(c):h.forEach(s=>{s.children.push(c)})}}return t}function V(e,t){throw new $(e,t.toString())}new TextEncoder;const ze=async({url:e})=>{const t=J();if(e.pathname=="/docs/")throw V(302,"/docs/quickstart/install/");return t.forEach(l=>{if(l.url==e.pathname&&l.folder)throw V(302,l.url.replace(/\/$/,"")+l.defaultItem)}),{}},Ne=Object.freeze(Object.defineProperty({__proto__:null,load:ze},Symbol.toStringTag,{value:"Module"}));var ke=z('<div><button class="bg-ctp-mantle rounded-xl p-2 hover:bg-ctp-crust transition-all duration-150 flex flex-row items-center w-full font-medium"><span> </span> <div class="bg-ctp-base w-fit h-fit rounded-full ml-auto"><div class="i-material-symbols:chevron-right-rounded text-3xl p-2 transition-all duration-150"></div></div></button></div>'),Me=z("<p> </p>"),Oe=z('<div class="flex flex-col gap-2 h-full p-6 w-xs"></div>');function Re(e,t){X(t,!1);const l=K(J());var a=T(e,!0,Oe);we(a,()=>H(l),9,(n,o,c)=>{var h=me(n),s=xe(h);ve(s,()=>E(o).folder,u=>{var d=T(u,!0,ke),g=b(d),m=b(g),i=b(m),x=C(C(m)),_=b(x);w(()=>{he(i,E(o).title),N(_,"rotate-90",E(o).expanded),N(_,"text-ctp-green",E(o).expanded)}),g.__click=()=>{E(o).expanded=!E(o).expanded,se(()=>H(l))},S(u,d)},u=>{var d=T(u,!0,Me),g=b(d);pe(g,()=>E(o).title),S(u,d)}),ge(n,h)},null),S(e,a),P()}_e(["click"]);var We=z('<div class="flex flex-row w-full"><!> <article class="prose text-ctp-text prose-zinc prose-invert m-10 w-full"><!></article></div>');function Ue(e,t){X(t,!1);var l=T(e,!0,We),a=b(l),n=C(C(a)),o=b(n);Ee(o,t.children,{},null),Re(a,{}),S(e,l),P()}export{Ue as component,Ne as universal};
