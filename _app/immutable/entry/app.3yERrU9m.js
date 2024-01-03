import{d as z,e as L,f as F,u as G,p as H,b as J,g as O,h as D,t as K,i as I}from"../chunks/runtime.CzAkxY_o.js";import{h as Q,i as x,c as f,j as P,k as X,e as q,p as Y,o as Z,b as v,s as B,l as y,f as $,a as tt,m as et,n as R,d as U}from"../chunks/render.BqB05fpx.js";import"../chunks/disclose-version.15-3dQtY.js";import{o as rt}from"../chunks/main-client.N9ZNmLik.js";function st(n){return class extends ot{constructor(t){super({component:n,...t})}}}class ot{#t={};#e;constructor(t){this.#e=Q(t.component,{target:t.target,props:{...t.props,$$events:this.#t},context:t.context,intro:t.intro,recover:t.recover});for(const e of Object.keys(this.#e))e==="$set"||e==="$destroy"||z(this,e,{get(){return this.#e[e]},set(o){this.#e[e]=o},enumerable:!0})}$set(t){this.#e.$set(t)}$on(t,e){this.#t[t]=this.#t[t]||[];const o=(...a)=>e.call(this,...a);return this.#t[t].push(o),()=>{this.#t[t]=this.#t[t].filter(a=>a!==o)}}$destroy(){this.#e.$destroy()}}const nt="modulepreload",at=function(n,t){return new URL(n,t).href},j={},h=function(t,e,o){let a=Promise.resolve();if(e&&e.length>0){const l=document.getElementsByTagName("link");a=Promise.all(e.map(r=>{if(r=at(r,o),r in j)return;j[r]=!0;const u=r.endsWith(".css"),w=u?'[rel="stylesheet"]':"";if(!!o)for(let m=l.length-1;m>=0;m--){const s=l[m];if(s.href===r&&(!u||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${w}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":nt,u||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),u)return new Promise((m,s)=>{i.addEventListener("load",m),i.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${r}`)))})}))}return a.then(()=>t()).catch(l=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=l,window.dispatchEvent(r),!r.defaultPrevented)throw l})},ht={};var it=U('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),ct=U("<!> <!>",!0);function lt(n,t){J(t,!0);let e=L(t,"components",11,()=>[]),o=L(t,"data_0",3,null),a=L(t,"data_1",3,null),l=L(t,"data_2",3,null);F(()=>t.stores.page.set(t.page)),G(()=>{t.stores,t.page,t.constructors,e(),t.form,o(),a(),l(),t.stores.page.notify()});let r=I(!1),u=I(!1),w=I(null);rt(()=>{const s=t.stores.page.subscribe(()=>{O(r)&&(D(u,!0),K().then(()=>{D(w,Y(document.title||"untitled page"))}))});return D(r,!0),s});var T=Z(n,!0,ct),i=v(T),m=B(B(i));x(i,()=>t.constructors[1],s=>{var d=y(s),_=v(d);P(_,()=>t.constructors[0],g=>{R(g(_,{get data(){return o()},children:(c,ut)=>{var V=y(c),M=v(V);x(M,()=>t.constructors[2],b=>{var p=y(b),k=v(p);P(k,()=>t.constructors[1],A=>{R(A(k,{get data(){return a()},children:(E,dt)=>{var C=y(E),S=v(C);P(S,()=>t.constructors[2],N=>{R(N(S,{get data(){return l()},get form(){return t.form}}),W=>e()[2]=W)}),f(E,C)}}),E=>e()[1]=E)}),f(b,p)},b=>{var p=y(b),k=v(p);P(k,()=>t.constructors[1],A=>{R(A(k,{get data(){return a()},get form(){return t.form}}),E=>e()[1]=E)}),f(b,p)}),f(c,V)}}),c=>e()[0]=c)}),f(s,d)},s=>{var d=y(s),_=v(d);P(_,()=>t.constructors[0],g=>{R(g(_,{get data(){return o()},get form(){return t.form}}),c=>e()[0]=c)}),f(s,d)}),x(m,()=>O(r),s=>{var d=$(s,!0,it),_=tt(d);x(_,()=>O(u),g=>{var c=et(g);X(c,()=>O(w)),q(g,c)},null),q(s,d)},null),f(n,T),H()}const gt=st(lt),Et=[()=>h(()=>import("../nodes/0.thuHH6zF.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>h(()=>import("../nodes/1.4bl-mnDH.js"),__vite__mapDeps([7,1,2,3,8,4]),import.meta.url),()=>h(()=>import("../nodes/2.GK8BU-z4.js"),__vite__mapDeps([9,10,1,2,11,3,12]),import.meta.url),()=>h(()=>import("../nodes/3.n3TexoD3.js"),__vite__mapDeps([13,1,2,3]),import.meta.url),()=>h(()=>import("../nodes/4.UZ_WZK-h.js"),__vite__mapDeps([14,1,2]),import.meta.url),()=>h(()=>import("../nodes/5.l9AqP-1C.js"),__vite__mapDeps([15,10,1,2]),import.meta.url),()=>h(()=>import("../nodes/6.uBFHB1kH.js"),__vite__mapDeps([16,11,1,2,3]),import.meta.url)],yt=[],bt={"/":[3],"/docs":[4,[2]],"/docs/quickstart":[5,[2]],"/docs/quickstart/install":[6,[2]]},pt={handleError:({error:n})=>{console.error(n)}};export{bt as dictionary,pt as hooks,ht as matchers,Et as nodes,gt as root,yt as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.thuHH6zF.js","../chunks/disclose-version.15-3dQtY.js","../chunks/runtime.CzAkxY_o.js","../chunks/render.BqB05fpx.js","../chunks/paths.c_VyziRd.js","../chunks/main-client.N9ZNmLik.js","../assets/0.xqfxjCpQ.css","../nodes/1.4bl-mnDH.js","../chunks/singletons.AJ-Vi0fW.js","../nodes/2.GK8BU-z4.js","../chunks/5.BeY3mwzr.js","../chunks/6.L8EqC9OI.js","../chunks/control.pJ1mnnAb.js","../nodes/3.n3TexoD3.js","../nodes/4.UZ_WZK-h.js","../nodes/5.l9AqP-1C.js","../nodes/6.uBFHB1kH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}