(()=>{"use strict";var e,t,r,n,a,o,i={},l={};function c(e){if(l[e])return l[e].exports;var t=l[e]={exports:{}};return i[e].call(t.exports,t,t.exports,c),t.exports}c.m=i,c.x=e=>{},c.F={},c.E=e=>{Object.keys(c.F).map((t=>{c.F[t](e)}))},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var a=Object.create(null);c.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,c.d(a,o),a},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>e+"."+{209:"6ea86394c49b40551ec0",352:"b347749b42ad407c3814",568:"6f22ea36032c884b1a05",582:"24866edb38972ba792f3",626:"19fd2397354c3f01c26d",846:"c4c9a2d25a4edcbd2e93",869:"335bb377fd73cbf9436e",901:"a97aa65f6a6e5620cc73",921:"072aef57f93938763741"}[e]+".bundle.js",c.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{179:"9b6f7955a8b73c70d5c0",209:"6ea86394c49b40551ec0",352:"b347749b42ad407c3814",626:"19fd2397354c3f01c26d",736:"7136cc5f59be07945ed2",846:"c4c9a2d25a4edcbd2e93"}[e]+".css"),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="ref-talk:",c.l=(e,t,a,o)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var f=d[u];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+a){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",n+a),i.src=e),r[e]=[t];var s=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var a=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="",a=e=>new Promise(((t,r)=>{var n=c.miniCssF(e),a=c.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===t)return i}})(n,a))return t();((e,t,r,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,a.parentNode.removeChild(a),n(c)}},a.href=t,document.head.appendChild(a)})(e,a,t,r)})),o={666:0},c.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{209:1,352:1,626:1,846:1}[e]&&t.push(o[e]=a(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={666:0},t=[];c.f.j=(t,r)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(209|626)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>{n=e[t]=[r,a]}));r.push(n[2]=a);var o=c.p+c.u(t),i=new Error;c.l(o,(r=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}},c.F.j=t=>{if(!(c.o(e,t)&&void 0!==e[t]||/^(209|626)$/.test(t))){e[t]=null;var r=document.createElement("link");c.nc&&r.setAttribute("nonce",c.nc),r.rel="prefetch",r.as="script",r.href=c.p+c.u(t),document.head.appendChild(r)}};var r=e=>{},n=(n,a)=>{for(var o,i,[l,d,u,f]=a,s=0,p=[];s<l.length;s++)i=l[s],c.o(e,i)&&e[i]&&p.push(e[i][0]),e[i]=0;for(o in d)c.o(d,o)&&(c.m[o]=d[o]);for(u&&u(c),n&&n(a);p.length;)p.shift()();return f&&t.push.apply(t,f),r()},a=self.webpackChunkref_talk=self.webpackChunkref_talk||[];function o(){for(var r,n=0;n<t.length;n++){for(var a=t[n],o=!0,i=1;i<a.length;i++){var l=a[i];0!==e[l]&&(o=!1)}o&&(t.splice(n--,1),r=c(c.s=a[0]))}return 0===t.length&&(c.x(),c.x=e=>{}),r}a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a));var i=c.x;c.x=()=>(c.x=i||(e=>{}),(r=o)())})();c.x()})();