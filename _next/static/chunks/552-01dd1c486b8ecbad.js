"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{911:function(e,t,n){var r=n(5893),s=n(7294);let i=e=>{let{className:t,categories:n,totalEntries:i,selectCategory:l,selectSite:a}=e,[c,o]=(0,s.useState)();return(0,r.jsxs)("aside",{className:"w-full sm:w-1/3 xl:w-1/5 flex-shrink-0 p-6 sm:overflow-auto overscroll-contain ".concat(t),children:[(0,r.jsx)("h1",{className:"font-serif",children:"Feeds"}),(0,r.jsxs)("h2",{className:"cursor-pointer",children:[(0,r.jsx)("a",{className:"font-serif no-underline hover:underline mr-2",onClick:()=>a&&a("all"),children:"All sites"}),null!==i&&(0,r.jsxs)("small",{className:"text-sm font-light",children:["(",i,")"]})]}),n.map(e=>(0,r.jsxs)(s.Fragment,{children:[(0,r.jsxs)("h2",{className:"cursor-pointer",children:[(0,r.jsx)("a",{className:"font-serif no-underline hover:underline mr-2",onClick:()=>o(e.title),children:e.title}),(0,r.jsxs)("small",{className:"text-sm font-light",children:["(",e.totalEntries,")"]})]}),e.title===c&&(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"cursor-pointer",children:(0,r.jsx)("a",{className:"font-serif no-underline hover:underline",onClick:()=>l&&l(c),children:"All sites"})}),e.sites.map(e=>(0,r.jsxs)("li",{className:"cursor-pointer",children:[(0,r.jsx)("a",{className:"font-serif no-underline hover:underline mr-2",onClick:()=>a&&a(e.key),children:e.title}),(0,r.jsxs)("small",{className:"text-sm font-light",children:["(",e.totalEntries,")"]})]},e.key))]})]},e.title)),(0,r.jsx)("div",{className:"pb-8"})]})};t.Z=i},9451:function(e,t,n){var r=n(5893),s=n(2125),i=n(7294);let l=e=>{let{className:t,content:n,selectBack:l}=e,a=null;return(0,i.useEffect)(()=>{a&&a.scrollTo(0,0)},[n]),(0,r.jsxs)("article",{ref:e=>{a=e},className:"pb-4 max-w-full break-words flex-grow p-6 xl:overflow-auto overscroll-contain ".concat(t),children:[(0,r.jsx)("a",{className:"cursor-pointer xl:hidden",onClick:l,children:"← Back"}),n&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:(0,r.jsx)("a",{className:"font-serif font-bold no-underline hover:underline",href:n.url,target:"_blank",children:n.title})}),(0,r.jsxs)("div",{className:"xl:hidden",children:[(0,r.jsx)("strong",{children:n.siteTitle}),(0,r.jsxs)("span",{children:[", ",(0,s.Z)(1e3*n.timestamp,new Date)]})]}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n.content}})]}),(0,r.jsx)("div",{className:"pb-8"})]})};t.Z=l},6724:function(e,t,n){var r=n(5893),s=n(7294),i=n(2125),l=n(5191);let a=e=>{let{index:t,entry:n,selectedEntryHash:s,selectEntry:l,selectSite:a,entryRef:c}=e;return(0,r.jsxs)("div",{ref:c,className:"rounded px-4 ".concat(s===n.key&&"bg-gray-200"||"").trim(),children:[(0,r.jsx)("h3",{children:(0,r.jsxs)("a",{className:"font-serif no-underline hover:underline cursor-pointer",onClick:()=>l&&l(n.key),children:[t+1,". ",n.title]})}),(0,r.jsxs)("small",{children:[(0,r.jsx)("a",{className:"cursor-pointer",onClick:()=>a&&a(n.site.key),children:n.site.title}),n.timestamp&&(0,r.jsxs)("span",{children:[", ",(0,i.Z)(1e3*n.timestamp,new Date)]})]})]})},c=e=>{let{className:t,basePath:n,locationState:i,selectEntry:c,selectSite:o,selectBack:u}=e,[y,d]=(0,s.useState)("loading"),[f,m]=(0,s.useState)(""),[h,g]=(0,s.useState)([]),[p,x]=(0,s.useState)(0),[w,j]=(0,s.useState)(""),[k,b]=(0,s.useState)(0),v=(0,s.useRef)(),C=null,E=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=await (0,l.Sl)((0,l.c0)(e),e);switch(t.type){case"category":{let e=t.category,[s,i]=await Promise.all([(0,l.cA)(r,e,n),(0,l.pW)(r,e)]);return{entries:s,totalEntry:i}}case"site":{let{siteKey:e}=t,[s,i]="all"===e?await Promise.all([(0,l.C0)(r,n),(0,l.M8)(r)]):await Promise.all([(0,l.V3)(r,e,n),(0,l.J4)(r,e)]);return{entries:s,totalEntry:i}}case"entry":let{parent:s}=t,{key:i}=s;if("category"===s.type){let[e,t]=await Promise.all([(0,l.cA)(r,i,n),(0,l.pW)(r,i)]);return{entries:e,totalEntry:t}}let[a,c]="all"===i?await Promise.all([(0,l.C0)(r,n),(0,l.M8)(r)]):await Promise.all([(0,l.V3)(r,i,n),(0,l.J4)(r,i)]);return{entries:a,totalEntry:c}}},N=async e=>{if("loading"===y||h.length===p)return;let{entries:t}=await E(n,i,e);g(h.concat(t))};(0,s.useEffect)(()=>{switch(i.type){case"category":if(f===i.category)return;return m(i.category);case"site":if(f===i.siteKey)return;return m(i.siteKey)}},[i]),(0,s.useEffect)(()=>{C&&(async e=>{let{entries:t,totalEntry:r}=await E(n,i);d("loaded"),g(t),x(r),b(0),e.scrollTo(0,0)})(C)},[f]),(0,s.useEffect)(()=>{if(!(null==v?void 0:v.current))return;let e=new IntersectionObserver(e=>{let[t]=e;"loading"!==y&&t.isIntersecting&&(d("loading"),N(k+1).then(()=>{b(e=>e+1),d("loaded")}))});return e.observe(v.current),()=>{e.disconnect()}},[v,p,h]);let T="entry"===i.type?i.parent.type:i.type,K="entry"===i.type?i.parent.key:"category"===i.type?i.category:i.siteKey;return(0,r.jsxs)("section",{ref:e=>{C=e},className:"pb-4 w-full sm:w-2/3 xl:w-2/6 flex-shrink-0 p-6 overflow-auto overscroll-contain ".concat(t),children:[(0,r.jsx)("a",{className:"cursor-pointer sm:hidden",onClick:u,children:"← Back"}),h.map((e,t)=>(0,r.jsx)(a,{index:t,entry:e,selectedEntryHash:w,selectEntry:async e=>{j(e),c&&c(T,K,e)},selectSite:o,entryRef:h.length-5===t&&h.length<p?v:null},e.key)),0===h.length&&(0,r.jsx)("div",{children:(0,r.jsx)("h3",{children:"No contents"})},"none"),(0,r.jsx)("div",{className:"pb-8"})]})};t.Z=c},5413:function(e,t,n){var r=n(5893);n(7294);var s=n(9008),i=n.n(s);let l=()=>(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"Feeds"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=Edge"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:"Feeds Aggregator"})]});t.Z=l},5191:function(e,t,n){n.d(t,{C0:function(){return f},CP:function(){return a},J4:function(){return y},L5:function(){return m},M8:function(){return u},Sl:function(){return i},V3:function(){return o},c0:function(){return l},cA:function(){return c},pW:function(){return d}});var r=n(2891);let s=null;async function i(e,t){return s||(s=await (0,r.createDbWorker)([e],"".concat(t,"/sqlite.worker.js"),"".concat(t,"/sql-wasm.wasm"))),s}function l(e){return{from:"inline",config:{serverMode:"full",requestChunkSize:4096,url:"".concat(e,"/data.sqlite3")}}}async function a(e){let t=await e.db.query("select category, siteKey, siteTitle from SiteCategories"),n=(await e.db.query("select category, count(*) as totalEntries from EntryCategories group by category")).reduce((e,t)=>(e[t.category]=t.totalEntries,e),{}),r=(await e.db.query("select siteKey, count(*) as totalEntries from EntryCategories group by siteKey;")).reduce((e,t)=>(e[t.siteKey]=t.totalEntries,e),{}),s=t.reduce((e,t)=>(e[t.category]||(e[t.category]={totalEntries:n[t.category],sites:[]}),e[t.category].sites.push({key:t.siteKey,title:t.siteTitle,totalEntries:r[t.siteKey]}),e),{});return Object.keys(s).map(e=>({title:e,sites:s[e].sites,totalEntries:s[e].totalEntries}))}async function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=await e.db.query("select * from EntryCategories where category = ? and entryContentTime is not null order by entryContentTime desc limit ? offset ?",[t,30,30*n]);return r.map(e=>({key:e.entryKey,title:e.entryTitle,site:{key:e.siteKey,title:e.siteTitle},timestamp:e.entryContentTime}))}async function o(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=await e.db.query("select entryKey, siteKey, siteTitle, entryTitle, entryContentTime from EntryCategories where siteKey = ? order by entryContentTime desc limit ? offset ?",[t,30,30*n]);return r.map(e=>({key:e.entryKey,title:e.entryTitle,site:{key:e.siteKey,title:e.siteTitle},timestamp:e.entryContentTime}))}async function u(e){let t=await e.db.query("select count(*) as total from EntryCategories");return t[0].total}async function y(e,t){let n=await e.db.query("select count(*) as total from EntryCategories where siteKey = ?",[t]);return n[0].total}async function d(e,t){let n=await e.db.query("select count(*) as total from EntryCategories where category = ?",[t]);return n[0].total}async function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=await e.db.query("select entryKey, siteKey, siteTitle, entryTitle, entryContentTime from EntryCategories where entryContentTime is not null order by entryContentTime desc limit ? offset ?",[30,30*t]);return n.map(e=>({key:e.entryKey,title:e.entryTitle,site:{key:e.siteKey,title:e.siteTitle},timestamp:e.entryContentTime}))}async function m(e,t){let n=await e.db.query("select title, content, url, siteKey, siteTitle, contentTime as timestamp from Entries where key = ?",[t]);return 0===n.length?null:n[0]}},3047:function(e,t,n){n.d(t,{BJ:function(){return l},Dq:function(){return s},EH:function(){return i},GJ:function(){return c},hX:function(){return a}}),n(7294);var r=n(5191);let s=e=>"article"===e?"block":"hidden xl:block",i=e=>{switch(e){case"article":return"hidden xl:block";case"entries":return"block";default:return"hidden sm:block"}},l=e=>{switch(e){case"article":return"hidden xl:block";case"entries":return"hidden sm:block";default:return"block"}},a=e=>{let t=e.split("/");if(t.shift(),![2,4].includes(t.length))return null;if(2===t.length){if(!t[1].trim())return null;switch(t[0]){case"categories":return{type:"category",category:t[1]};case"sites":return{type:"site",siteKey:t[1]};default:return null}}return t[3].trim()&&["categories","sites"].includes(t[0])&&"entries"===t[2]?{type:"entry",entryKey:t[3],parent:{type:"categories"===t[0]?"category":"site",key:t[1]}}:null},c=async(e,t,n,s)=>{if(!e)return null;let i=await (0,r.Sl)((0,r.c0)(t),t);switch(e.type){case"category":case"site":n(null),s("entries");return;case"entry":{let{entryKey:t}=e,l=await (0,r.L5)(i,t);if(!l)return;n(l),s("article");return}}}}}]);