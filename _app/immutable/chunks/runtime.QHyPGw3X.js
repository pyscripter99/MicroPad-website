const ne=()=>{};function H(e){for(var n=0;n<e.length;n++)e[n]()}function xe(e,n,t){if(e==null)return n(void 0),t&&t(void 0),ne;const u=e.subscribe(n,t);return u.unsubscribe?()=>u.unsubscribe():u}var re=Array.isArray,Ve=Array.from,Be=Object.keys,Ge=Object.assign,Ke=Object.defineProperty,Te=Object.getOwnPropertyDescriptor;const Se=1,Re=4,we=8,Ze=["touchstart","touchmove","touchend"],fe=1,N=2,Z=4,M=8,I=16,O=64,D=128,m=256,E=512,U=1024,X=2048,z=4096,W=Z|M|I,ce=0,Ae=1,V=Symbol();let Y=ce,B=!1,G=!1,d=[],w=[],$=[],C=0,k=null,c=null,_=null,v=0,S=null,R=!1,g=!1,P=!1,x=null,o=null,Q=!1;function K(e){const n=e||o;return n!==null&&n.r}function se(e,n){return e===n}function Ie(e,n){return{c:null,e:se,f:e,v:n,x:null}}function oe(e,n,t){return{b:t,c:null,d:null,e:null,f:e,i:null,r:null,v:n,x:null,y:null}}function le(e,n){const t=e.r;t===null?e.r=[n]:t.push(n)}function te(e){const n=e.f;if(n&E||e.v===V)return!0;if(n&U){const t=e.d;if(t!==null){const u=t.length;let r;for(r=0;r<u;r++){const f=t[r];if(f.f&U&&!te(f)){y(f,m);continue}if(f.f&E)if(f.f&N){if(he(f,!0),e.f&E)return!0}else return!0}}}return!1}function ie(e){const n=e.i,t=_,u=v,r=S,f=k,s=x,l=o,h=P,b=(e.f&I)!==0,T=R;_=null,v=0,S=null,k=e,x=e.b,o=e.x,P=c===null&&(e.f&D)!==0,R=!1,b&&o?.u!=null&&o.u.e();try{let i;b?i=n(e.b):i=n();let a=e.d;if(_!==null){let p;if(L(e,v,!1),a!==null&&v>0)for(a.length=v+_.length,p=0;p<_.length;p++)a[v+p]=_[p];else e.d=a=_;if(!P)for(p=v;p<a.length;p++){const J=a[p];J.c===null?J.c=[e]:J.c.push(e)}}else a!==null&&v<a.length&&(L(e,v,!1),a.length=v);return i}finally{_=t,v=u,S=r,k=f,x=s,o=l,P=h,R=T}}function L(e,n,t){const u=e.d;if(u!==null){let r;for(r=n;r<u.length;r++){const f=u[r],s=f.c;let l=0;if(s!==null){l=s.length-1;const h=s.indexOf(e);h!==-1&&(l===0?f.c=null:(s[h]=s[l],s.pop()))}t&&l===0&&f.f&D&&(y(f,E),L(f,0,!0))}}}function _e(e){const n=e.r;if(e.r=null,n!==null){let t;for(t=0;t<n.length;t++){const u=n[t];u.f&W?me(u):(L(u,0,!0),u.d=null)}}}function Oe(e,n){if(e!==null)throw n}function de(e){if(e.f&z)return;const n=e.v,t=c;c=e;try{_e(e),n!==null&&n();const r=ie(e);typeof r=="function"&&(e.v=r)}catch(r){const f=e.b;if(f!==null)Oe(f,r);else throw r}finally{c=t}const u=e.x;K(u)&&e.f&M&&d.length>0&&Pe(u)}function ae(){if(C>100)throw new Error("ERR_SVELTE_TOO_MANY_UPDATES");C++}function A(e){const n=e.length;if(n>0){ae();let t;for(t=0;t<n;t++){const u=e[t],r=u.f;r&(z|X)||(te(u)?(y(u,m),de(u)):r&U&&y(u,m))}e.length=0}}function De(){if(B=!1,C>101)return;const e=d,n=w;d=[],w=[],A(e),A(n),B||(C=0)}function F(e,n){const t=e.f;n?(de(e),y(e,m)):(Y===ce&&(B||(B=!0,queueMicrotask(De))),t&Z?w.push(e):d.push(e))}function pe(){G=!1;const e=$.slice();$=[],H(e)}function ze(e){G||(G=!0,setTimeout(pe,0)),$.push(e)}function Fe(){const e=[];for(let n=0;n<d.length;n++){const t=d[n];t.f&I&&t.x===o&&(e.push(t),d.splice(n,1),n--)}A(e)}function Pe(e){const n=[];for(let t=0;t<d.length;t++){const u=d[t];u.f&M&&u.x===e&&(n.push(u),d.splice(t,1),t--)}A(n)}function ve(e){const n=Y,t=d,u=w;try{ae();const r=[],f=[];Y=Ae,d=r,w=f,A(t),A(u),e!==void 0&&e(),(d.length>0||f.length>0)&&ve(),G&&pe(),C=0}finally{Y=n,d=t,w=u}}async function We(){await Promise.resolve(),ve()}function he(e,n){const t=Q;Q=!0;const u=ie(e);Q=t;const r=P||c===null&&e.f&D?E:m;y(e,r);const f=e.e;f(u,e.v)||(e.v=u,ue(e,E,n))}function Je(e,n,t){let u=t[n];const r=u===void 0;r&&(u={store:null,last_value:null,value:ye(V),unsubscribe:ne},t[n]=u),(r||u.store!==e)&&(u.unsubscribe(),u.store=e??null,u.unsubscribe=qe(e,u.value));const f=q(u.value);return f===V?u.last_value:f}function qe(e,n){return e==null?(ee(n,void 0),ne):xe(e,u=>{g=!0,ee(n,u),g=!1})}function Qe(e){He(()=>{let n;for(n in e)e[n].unsubscribe()})}function q(e){const n=e.f;if(n&z)return e.v;if(k!==null&&!(k.f&O)&&!R){const t=(k.f&D)!==0,u=k.d;_===null&&u!==null&&u[v]===e&&!(t&&c!==null)?v++:_===null?_=[e]:e!==_[_.length-1]&&_.push(e),S!==null&&c!==null&&c.f&m&&S.includes(e)&&(y(c,E),F(c,!1))}return n&N&&te(e)&&he(e,!1),e.v}function ee(e,n){return Ee(e,n),n}function Ne(e,n){const t=e.f;(t&X)!==0!==n&&(e.f^=X,!n&&t&W&&!(t&m)&&F(e,!1));const r=e.r;if(r!==null){let f;for(f=0;f<r.length;f++)Ne(r[f],n)}}function ue(e,n,t){const u=K(e.x),r=e.c;if(r!==null){const f=r.length;let s;for(s=0;s<f;s++){const l=r[s],h=l.f,b=(h&D)!==0,T=(h&E)!==0;T&&!b||(!t||!u)&&l===c||(y(l,n),(h&m||T&&b)&&(l.f&W?F(l,!1):ue(l,U,t)))}}}function Ee(e,n){if(!R&&!g&&k!==null&&K(e.x)&&k.f&N)throw new Error("ERR_SVELTE_UNSAFE_MUTATION");if(e.f&fe&&!e.e(n,e.v)){const t=e.x;if(e.v=n,K(t)&&c!==null&&c.c===null&&c.f&m&&(_!==null&&_.includes(e)?(y(c,E),F(c,!1)):S===null?S=[e]:S.push(e)),ue(e,E,!0),c===null&&d.length===0){const u=t?.u;if(u!=null){H(u.b);const r=je(()=>{me(r),H(u.a)})}}}}function me(e){const n=e.v,t=e.y,u=e.f;_e(e),L(e,0,!0),e.i=e.r=e.y=e.x=e.b=e.v=e.d=e.c=null,y(e,z),t!==null&&(re(t)?H(t):t()),n!==null&&u&W&&n()}function Ue(e){const n=c===null,t=n?N|D:N,u=oe(t|m,V,x);return u.i=e,u.x=o,u.e=se,n||le(c,u),u}function Ce(e){const n=Ie(fe|m,e);return n.x=o,n}function ye(e){const n=Ce(e);return n.e=ke,n}function Le(e){const n=R;try{return R=!0,e()}finally{R=n}}function j(e,n,t,u,r){const f=oe(e|E,null,u);return f.i=n,f.x=o,r&&F(f,t),c!==null&&!(e&O)&&le(c,f),f}function Xe(){return c?(c.f&O)===0:!1}function Me(e){if(c===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=c.f&I&&o!==null&&!o.m,t=j(Z,e,!1,x,!n);if(n){let u=o.e;u===null&&(u=o.e=[]),u.push(t)}return t}function je(e){return j(Z|O,e,!1,x,!0)}function $e(e,n){return j(M|O,e,n,x,!0)}function ge(e){if(c===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=c!==null&&(c.f&I)!==0;return j(M,()=>{const t=e();return Fe(),t},n,x,!0)}function en(e,n=x,t=!1,u=!0){let r=I;return t&&(r|=O),j(r,e,u,n,!0)}function nn(e,n){let t=e.y;t===null?e.y=n:re(t)?t.push(n):e.y=[t,n]}const Ye=~(E|U|m);function y(e,n){e.f=e.f&Ye|n}function tn(e){return typeof e=="object"&&e!==null&&typeof e.f=="number"}function un(e,n,t,u){var r=(t&Se)!==0,f=Te(e,n)?.set,s=e[n];s===void 0&&u!==void 0&&(t&we&&(u=u()),s=u,f&&f(s));var l=()=>{var i=e[n];return i!==void 0&&(u=void 0),i===void 0?u:i};if(!(t&Re))return l;if(f)return function(i){return arguments.length===1?(f(i),i):l()};var h=!1,b=ye(s),T=Ue(()=>{var i=l(),a=q(b);return h?(h=!1,a):b.v=i});return r||(T.e=ke),function(i,a=!1){var p=q(T);return arguments.length>0?((a||(r?i!==p:be(i,p)))&&(h=!0,ee(b,a?p:i),q(T)),i):p}}function be(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function ke(e,n){return!be(e,n)}function rn(e,n=1){const t=q(e);return Ee(e,t+n),t}function He(e){Me(()=>()=>Le(e))}function fn(e,n=!1){o={a:null,c:null,e:null,m:!1,p:o,s:e,r:n,u:null}}function cn(e){const n=o;if(n!==null){e!==void 0&&(n.a=e);const t=n.e;if(t!==null){n.e=null;for(let u=0;u<t.length;u++)F(t[u],!1)}o=n.p,n.m=!0}}export{H as A,nn as B,Be as C,o as D,Ve as E,de as F,Ge as G,ve as H,tn as I,Ze as P,V as U,ge as a,cn as b,fn as c,Ke as d,ee as e,Le as f,q as g,Qe as h,Je as i,re as j,rn as k,Q as l,Te as m,ye as n,Xe as o,un as p,x as q,en as r,Ce as s,We as t,Me as u,ze as v,Ne as w,$e as x,me as y,je as z};
