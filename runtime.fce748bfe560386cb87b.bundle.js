(()=>{"use strict";var e,t,r,n,a,o,i={},l={};function d(e){if(l[e])return l[e].exports;var t=l[e]={exports:{}};return i[e].call(t.exports,t,t.exports,d),t.exports}d.m=i,d.x=e=>{},d.F={},d.E=e=>{Object.keys(d.F).map((t=>{d.F[t](e)}))},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var a=Object.create(null);d.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,d.d(a,o),a},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>e+"."+{209:"6ea86394c49b40551ec0",352:"b347749b42ad407c3814",568:"6f22ea36032c884b1a05",582:"24866edb38972ba792f3",626:"19fd2397354c3f01c26d",846:"c4c9a2d25a4edcbd2e93",869:"335bb377fd73cbf9436e",901:"a97aa65f6a6e5620cc73",921:"e5b23d596408fae0b289"}[e]+".bundle.js",d.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{179:"cabd9cd8dc58601e6571",209:"6ea86394c49b40551ec0",352:"b347749b42ad407c3814",626:"19fd2397354c3f01c26d",736:"f1be82baad3439f952dd",846:"c4c9a2d25a4edcbd2e93"}[e]+".css"),d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="ref-talk:",d.l=(e,t,a,o)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var f=c[u];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+a){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",n+a),i.src=e),r[e]=[t];var s=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var a=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="",a=e=>new Promise(((t,r)=>{var n=d.miniCssF(e),a=d.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===t)return i}})(n,a))return t();((e,t,r,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=l,a.parentNode.removeChild(a),n(d)}},a.href=t,document.head.appendChild(a)})(e,a,t,r)})),o={666:0},d.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{209:1,352:1,626:1,846:1}[e]&&t.push(o[e]=a(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={666:0},t=[];d.f.j=(t,r)=>{var n=d.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(209|626)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>{n=e[t]=[r,a]}));r.push(n[2]=a);var o=d.p+d.u(t),i=new Error;d.l(o,(r=>{if(d.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}},d.F.j=t=>{if(!(d.o(e,t)&&void 0!==e[t]||/^(209|626)$/.test(t))){e[t]=null;var r=document.createElement("link");d.nc&&r.setAttribute("nonce",d.nc),r.rel="prefetch",r.as="script",r.href=d.p+d.u(t),document.head.appendChild(r)}};var r=e=>{},n=(n,a)=>{for(var o,i,[l,c,u,f]=a,s=0,p=[];s<l.length;s++)i=l[s],d.o(e,i)&&e[i]&&p.push(e[i][0]),e[i]=0;for(o in c)d.o(c,o)&&(d.m[o]=c[o]);for(u&&u(d),n&&n(a);p.length;)p.shift()();return f&&t.push.apply(t,f),r()},a=self.webpackChunkref_talk=self.webpackChunkref_talk||[];function o(){for(var r,n=0;n<t.length;n++){for(var a=t[n],o=!0,i=1;i<a.length;i++){var l=a[i];0!==e[l]&&(o=!1)}o&&(t.splice(n--,1),r=d(d.s=a[0]))}return 0===t.length&&(d.x(),d.x=e=>{}),r}a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a));var i=d.x;d.x=()=>(d.x=i||(e=>{}),(r=o)())})();d.x()})();