import{S as t,i as s,s as e,e as a,t as r,b as i,c as o,d as n,f as l,g as c,h as g,j as f,k as m,a as d,n as h,l as u,u as v,m as p,o as k,p as x,q as $,r as b,v as E,w as y,x as w,y as A,z as L,A as I,B as D,C as q,D as M,E as V,F as j,G as O,H as Q}from"./main-314627b3.js";import{n as S}from"./store-b96b4bfd.js";function z(t){let s,e,u,v,p,k,x,$,b,E;return{c(){s=a("header"),e=a("div"),u=a("a"),v=a("span"),p=r("platformOS Admin"),k=i(),x=a("nav"),$=a("a"),b=r("Models"),this.h()},l(t){s=o(t,"HEADER",{class:!0});var a=n(s);e=o(a,"DIV",{class:!0});var r=n(e);u=o(r,"A",{href:!0,class:!0});var i=n(u);v=o(i,"SPAN",{class:!0});var f=n(v);p=l(f,"platformOS Admin"),f.forEach(c),i.forEach(c),k=g(r),x=o(r,"NAV",{class:!0});var m=n(x);$=o(m,"A",{class:!0,href:!0});var d=n($);b=l(d,"Models"),d.forEach(c),m.forEach(c),r.forEach(c),a.forEach(c),this.h()},h(){f(v,"class","text-xl"),f(u,"href","/"),f(u,"class","flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"),f($,"class","mr-5 text-lg text-blue-700 hover:underline"),f($,"href",E=t[0]("../Models/index")),f(x,"class","flex flex-wrap items-center justify-center mx-auto text-base"),f(e,"class","container flex flex-col flex-wrap items-center py-5 mx-auto md:flex-row"),f(s,"class","text-gray-700 body-font")},m(t,a){m(t,s,a),d(s,e),d(e,u),d(u,v),d(v,p),d(e,k),d(e,x),d(x,$),d($,b)},p(t,[s]){1&s&&E!==(E=t[0]("../Models/index"))&&f($,"href",E)},i:h,o:h,d(t){t&&c(s)}}}function G(t,s,e){let a;return u(t,v,t=>e(0,a=t)),[a]}class B extends t{constructor(t){super(),s(this,t,G,z,e,{})}}function C(t){let s,e,u,v,p,k,x,$,b,E,y,w,A,L,I,D,q;return{c(){s=a("footer"),e=a("div"),u=a("ul"),v=a("li"),p=r("Quick links:"),k=i(),x=a("li"),$=a("a"),b=r("GraphQL Editor"),E=i(),y=a("li"),w=a("a"),A=r("Liquid Evaluator"),L=i(),I=a("li"),D=a("a"),q=r("Documentation"),this.h()},l(t){s=o(t,"FOOTER",{class:!0});var a=n(s);e=o(a,"DIV",{class:!0});var r=n(e);u=o(r,"UL",{class:!0});var i=n(u);v=o(i,"LI",{class:!0});var f=n(v);p=l(f,"Quick links:"),f.forEach(c),k=g(i),x=o(i,"LI",{class:!0});var m=n(x);$=o(m,"A",{href:!0});var d=n($);b=l(d,"GraphQL Editor"),d.forEach(c),m.forEach(c),E=g(i),y=o(i,"LI",{class:!0});var h=n(y);w=o(h,"A",{href:!0});var M=n(w);A=l(M,"Liquid Evaluator"),M.forEach(c),h.forEach(c),L=g(i),I=o(i,"LI",{});var V=n(I);D=o(V,"A",{href:!0});var j=n(D);q=l(j,"Documentation"),j.forEach(c),V.forEach(c),i.forEach(c),r.forEach(c),a.forEach(c),this.h()},h(){f(v,"class","mr-6"),f($,"href","/gui/graphql"),f(x,"class","mr-6"),f(w,"href","/gui/liquid"),f(y,"class","mr-6"),f(D,"href","https://documentation.platformos.com"),f(u,"class","flex"),f(e,"class","container flex"),f(s,"class","py-8 mt-8 text-gray-700 border-t border-gray-400")},m(t,a){m(t,s,a),d(s,e),d(e,u),d(u,v),d(v,p),d(u,k),d(u,x),d(x,$),d($,b),d(u,E),d(u,y),d(y,w),d(w,A),d(u,L),d(u,I),d(I,D),d(D,q)},p:h,i:h,o:h,d(t){t&&c(s)}}}class F extends t{constructor(t){super(),s(this,t,null,C,e,{})}}const{document:H}=p;function N(t,s,e){const a=t.slice();return a[8]=s[e],a}function R(t,s){let e,h,u,v,p,E,y,w,A,L,I=s[8].msg+"";function D(...t){return s[4](s[8],...t)}return{key:t,first:null,c(){e=a("li"),h=a("div"),u=r(I),v=i(),p=a("div"),E=i(),this.h()},l(t){e=o(t,"LI",{class:!0,style:!0});var s=n(e);h=o(s,"DIV",{class:!0});var a=n(h);u=l(a,I),a.forEach(c),v=g(s),p=o(s,"DIV",{class:!0,style:!0}),n(p).forEach(c),E=g(s),s.forEach(c),this.h()},h(){f(h,"class","content svelte-1ggskci"),f(p,"class","progress svelte-1ggskci"),k(p,"animation-duration",s[8].timeout+"ms"),f(e,"class","toast svelte-1ggskci"),k(e,"background",s[8].background),this.first=e},m(t,s){m(t,e,s),d(e,h),d(h,u),d(e,v),d(e,p),d(e,E),w=!0,A||(L=x(p,"animationend",D),A=!0)},p(t,a){s=t,(!w||1&a)&&I!==(I=s[8].msg+"")&&$(u,I),(!w||1&a)&&k(p,"animation-duration",s[8].timeout+"ms"),(!w||1&a)&&k(e,"background",s[8].background)},i(t){w||(y&&y.end(1),w=!0)},o(t){y=b(e,Y,{}),w=!1},d(t){t&&c(e),t&&y&&y.end(),A=!1,L()}}}function U(t){let s,e,r=[],i=new Map,l=t[0];const g=t=>t[8].id;for(let s=0;s<l.length;s+=1){let e=N(t,l,s),a=g(e);i.set(a,r[s]=R(a,e))}return{c(){s=a("ul");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){s=o(t,"UL",{class:!0});var e=n(s);for(let t=0;t<r.length;t+=1)r[t].l(e);e.forEach(c),this.h()},h(){f(s,"class","toasts svelte-1ggskci")},m(t,a){m(t,s,a);for(let t=0;t<r.length;t+=1)r[t].m(s,null);e=!0},p(t,[e]){if(3&e){const a=t[0];E(),r=y(r,e,g,1,t,a,i,s,w,R,null,N),A()}},i(t){if(!e){for(let t=0;t<l.length;t+=1)L(r[t]);e=!0}},o(t){for(let t=0;t<r.length;t+=1)I(r[t]);e=!1},d(t){t&&c(s);for(let t=0;t<r.length;t+=1)r[t].d()}}}function Y(t,{delay:s=0,duration:e=300}){return{delay:s,duration:e,css:t=>`opacity: ${1*(t-.5)}; transform-origin: top right; transform: scaleX(${1*(t-.5)});`}}function P(t,s,e){let a,{themes:r={danger:"#bb2124",success:"#22bb33",warning:"#f0ad4e",info:"#5bc0de",default:"#aaaaaa"}}=s,{timeout:i=3e3}=s,o=0,n=[];function l(t){e(0,n=n.filter(s=>s.id!=t))}a=S.subscribe(t=>{t&&(!function(t,s,a){const l=r[s]||r.default;e(0,n=[{id:o,msg:t,background:l,timeout:a||i,width:"100%"},...n]),o+=1}(t.message,t.type,t.timeout),S.set())}),D(a);return t.$set=t=>{"themes"in t&&e(2,r=t.themes),"timeout"in t&&e(3,i=t.timeout)},[n,l,r,i,t=>l(t.id)]}class T extends t{constructor(t){var r;super(),H.getElementById("svelte-1ggskci-style")||((r=a("style")).id="svelte-1ggskci-style",r.textContent='.toasts{list-style:none;position:fixed;top:0;right:0;padding:0;margin:0;z-index:9999}.svelte-1ggskci.svelte-1ggskci.toasts>.toast.svelte-1ggskci.svelte-1ggskci{position:relative;margin:10px;min-width:40vw;position:relative;animation:svelte-1ggskci-animate-in 350ms forwards;color:#fff}.svelte-1ggskci.toasts>.toast.svelte-1ggskci>.content.svelte-1ggskci{padding:10px;display:block;font-weight:500}.svelte-1ggskci.toasts>.toast.svelte-1ggskci>.progress.svelte-1ggskci{position:absolute;bottom:0;background-color:rgb(0, 0, 0, 0.3);height:6px;width:100%;animation-name:svelte-1ggskci-shrink;animation-timing-function:linear;animation-fill-mode:forwards}.svelte-1ggskci.svelte-1ggskci.toasts>.toast.svelte-1ggskci.svelte-1ggskci:before,.svelte-1ggskci.svelte-1ggskci.toasts>.toast.svelte-1ggskci.svelte-1ggskci:after{content:"";position:absolute;z-index:-1;top:50%;bottom:0;left:10px;right:10px;border-radius:100px / 10px}.svelte-1ggskci.svelte-1ggskci.toasts>.toast.svelte-1ggskci.svelte-1ggskci:after{right:10px;left:auto;transform:skew(8deg) rotate(3deg)}@keyframes svelte-1ggskci-animate-in{0%{width:0;opacity:0;transform:scale(1.15) translateY(20px)}100%{width:40vw;opacity:1;transform:scale(1) translateY(0)}}@keyframes svelte-1ggskci-shrink{0%{width:40vw}100%{width:0}}',d(H.head,r)),s(this,t,P,U,e,{themes:2,timeout:3})}}function X(t){let s,e,a,r,o,n,l;s=new B({});const f=t[1].default,d=q(f,t,t[0],null);return r=new F({}),n=new T({}),{c(){M(s.$$.fragment),e=i(),d&&d.c(),a=i(),M(r.$$.fragment),o=i(),M(n.$$.fragment)},l(t){V(s.$$.fragment,t),e=g(t),d&&d.l(t),a=g(t),V(r.$$.fragment,t),o=g(t),V(n.$$.fragment,t)},m(t,i){j(s,t,i),m(t,e,i),d&&d.m(t,i),m(t,a,i),j(r,t,i),m(t,o,i),j(n,t,i),l=!0},p(t,[s]){d&&d.p&&1&s&&O(d,f,t,t[0],s,null,null)},i(t){l||(L(s.$$.fragment,t),L(d,t),L(r.$$.fragment,t),L(n.$$.fragment,t),l=!0)},o(t){I(s.$$.fragment,t),I(d,t),I(r.$$.fragment,t),I(n.$$.fragment,t),l=!1},d(t){Q(s,t),t&&c(e),d&&d.d(t),t&&c(a),Q(r,t),t&&c(o),Q(n,t)}}}function J(t,s,e){let{$$slots:a={},$$scope:r}=s;return t.$set=t=>{"$$scope"in t&&e(0,r=t.$$scope)},[r,a]}export default class extends t{constructor(t){super(),s(this,t,J,X,e,{})}}
