"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19],{8217:function(e,t,n){var r=n(5893),s=n(7294);t.Z=function(e){var t=e.className,n=e.categories,i=e.totalEntries,c=e.selectCategory,a=e.selectSite,u=(0,s.useState)(),o=u[0],l=u[1];return(0,r.jsxs)("aside",{className:"prose max-w-none w-full sm:w-48 xl:w-96 flex-shrink-0 p-6 ".concat(t),children:[(0,r.jsx)("h1",{children:"Feeds"}),(0,r.jsxs)("h2",{className:"cursor-pointer",children:[(0,r.jsx)("a",{className:"mr-2",onClick:function(){return a&&a("all")},children:"All sites"}),null!==i&&(0,r.jsxs)("small",{className:"text-sm font-light",children:["(",i,")"]})]}),n.map((function(e){return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)("h2",{className:"cursor-pointer",children:(0,r.jsx)("a",{onClick:function(){return l(e.title)},children:e.title})}),e.title===o&&(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"cursor-pointer",children:(0,r.jsx)("a",{onClick:function(){return c&&c(o)},children:"All sites"})}),e.sites.map((function(e){return(0,r.jsx)("li",{className:"cursor-pointer",children:(0,r.jsx)("a",{onClick:function(){return a&&a(e.key)},children:e.title})},e.key)}))]})]},e.title)})),(0,r.jsx)("div",{className:"pb-8"})]})}},5371:function(e,t,n){var r=n(5893),s=n(7294);t.Z=function(e){var t=e.className,n=e.content,i=e.selectBack,c=null;return(0,s.useEffect)((function(){c&&c.scrollTo(0,0)}),[n]),(0,r.jsxs)("article",{ref:function(e){c=e},className:"prose pb-4 max-w-full break-words flex-grow p-6 lg:overflow-auto ".concat(t),children:[(0,r.jsx)("a",{className:"cursor-pointer lg:hidden",onClick:i,children:"\u2190 Back"}),n&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:(0,r.jsx)("a",{href:n.url,target:"_blank",children:n.title})}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n.content}})]}),(0,r.jsx)("div",{className:"pb-8"})]})}},850:function(e,t,n){var r=n(8520),s=n.n(r),i=n(5893),c=n(7294),a=n(1574);function u(e,t,n,r,s,i,c){try{var a=e[i](c),u=a.value}catch(o){return void n(o)}a.done?t(u):Promise.resolve(u).then(r,s)}var o=function(e){var t=e.entry,n=e.selectedEntryHash,r=e.selectEntry,s=e.selectSite;return(0,i.jsxs)("div",{className:"rounded px-4 ".concat(n===t.key?"bg-gray-200":"").trim(),children:[(0,i.jsx)("h3",{children:(0,i.jsx)("a",{className:"cursor-pointer",onClick:function(){return r&&r(t.key)},children:t.title})}),(0,i.jsxs)("small",{children:[(0,i.jsx)("a",{className:"cursor-pointer",onClick:function(){return s&&s(t.site.key)},children:t.site.title}),t.timestamp&&(0,i.jsxs)("span",{children:[", ",(0,a.Z)(1e3*t.timestamp,new Date)]})]})]})};t.Z=function(e){var t=e.className,n=e.entries,r=e.selectEntry,a=e.selectSite,l=e.selectBack,f=(0,c.useState)(""),p=f[0],h=f[1],d=null;return(0,c.useEffect)((function(){d&&d.scrollTo(0,0)}),[n]),(0,i.jsxs)("section",{ref:function(e){d=e},className:"prose pb-4 w-full sm:w-96 flex-shrink-0 p-6 sm:overflow-auto ".concat(t),children:[(0,i.jsx)("a",{className:"cursor-pointer sm:hidden",onClick:l,children:"\u2190 Back"}),n.map((function(e){return(0,i.jsx)(o,{entry:e,selectedEntryHash:p,selectEntry:(t=s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h(t),r){e.next=3;break}return e.abrupt("return");case 3:r(t);case 4:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,s){var i=t.apply(e,n);function c(e){u(i,r,s,c,a,"next",e)}function a(e){u(i,r,s,c,a,"throw",e)}c(void 0)}))}),selectSite:a},"entry-".concat(e.key));var t})),0===n.length&&(0,i.jsx)("div",{children:(0,i.jsx)("h3",{children:"No contents"})},"none"),(0,i.jsx)("div",{className:"pb-8"})]})}},5090:function(e,t,n){var r=n(5893),s=(n(7294),n(9008));t.Z=function(){return(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Feeds"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=Edge"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:"Feeds Aggregator"})]})}},8688:function(e,t,n){n.d(t,{Sl:function(){return o},c0:function(){return f},CP:function(){return p},cA:function(){return d},V3:function(){return m},M8:function(){return v},C0:function(){return b},L5:function(){return j}});var r=n(8520),s=n.n(r),i=n(2891);function c(e,t,n,r,s,i,c){try{var a=e[i](c),u=a.value}catch(o){return void n(o)}a.done?t(u):Promise.resolve(u).then(r,s)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function a(e){c(i,r,s,a,u,"next",e)}function u(e){c(i,r,s,a,u,"throw",e)}a(void 0)}))}}var u=null;function o(e,t){return l.apply(this,arguments)}function l(){return(l=a(s().mark((function e(t,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=4;break}return e.next=3,(0,i.createDbWorker)([t],"".concat(n,"/sqlite.worker.js"),"".concat(n,"/sql-wasm.wasm"));case 3:u=e.sent;case 4:return e.abrupt("return",u);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return{from:"inline",config:{serverMode:"full",requestChunkSize:4096,url:"".concat(e,"/data.sqlite3")}}}function p(e){return h.apply(this,arguments)}function h(){return(h=a(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.db.query("select category, siteKey, siteTitle from SiteCategories");case 2:return n=e.sent,r=n.reduce((function(e,t){return e[t.category]||(e[t.category]=[]),e[t.category].push({key:t.siteKey,title:t.siteTitle}),e}),{}),e.abrupt("return",Object.keys(r).map((function(e){return{title:e,sites:r[e]}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return y.apply(this,arguments)}function y(){return(y=a(s().mark((function e(t,n,r){var i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===r?0:r,e.next=3,t.db.query("select * from EntryCategories where category = ? and entryContentTime is not null order by entryContentTime desc limit 30",[n]);case 3:return i=e.sent,e.abrupt("return",i.map((function(e){return{key:e.entryKey,title:e.entryTitle,site:{key:e.siteKey,title:e.siteTitle},timestamp:e.entryContentTime}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return x.apply(this,arguments)}function x(){return(x=a(s().mark((function e(t,n,r){var i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===r?0:r,e.next=3,t.db.query("select entryKey, siteKey, siteTitle, entryTitle, entryContentTime from EntryCategories where siteKey = ? order by entryContentTime desc limit 30",[n]);case 3:return i=e.sent,e.abrupt("return",i.map((function(e){return{key:e.entryKey,title:e.entryTitle,site:{key:e.siteKey,title:e.siteTitle},timestamp:e.entryContentTime}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return k.apply(this,arguments)}function k(){return(k=a(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.db.query("select count(*) as total from EntryCategories");case 2:return n=e.sent,e.abrupt("return",n[0].total);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return w.apply(this,arguments)}function w(){return(w=a(s().mark((function e(t,n){var r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 30,r=30*(void 0===n?0:n),e.next=5,t.db.query("select entryKey, siteKey, siteTitle, entryTitle, entryContentTime from EntryCategories where entryContentTime is not null order by entryContentTime desc limit ".concat(30," offset ").concat(r));case 5:return i=e.sent,e.abrupt("return",i.map((function(e){return{key:e.entryKey,title:e.entryTitle,site:{key:e.siteKey,title:e.siteTitle},timestamp:e.entryContentTime}})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return g.apply(this,arguments)}function g(){return(g=a(s().mark((function e(t,n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.db.query("select title, content, url, siteKey from Entries where key = ?",[n]);case 2:if(0!==(r=e.sent).length){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",r[0]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2461:function(e,t,n){n.d(t,{Dq:function(){return u},EH:function(){return o},BJ:function(){return l},hX:function(){return f},GJ:function(){return p}});var r=n(8520),s=n.n(r),i=n(8688);function c(e,t,n,r,s,i,c){try{var a=e[i](c),u=a.value}catch(o){return void n(o)}a.done?t(u):Promise.resolve(u).then(r,s)}var a,u=function(e){switch(e){case"article":return"block";default:return"hidden lg:block"}},o=function(e){switch(e){case"article":return"hidden lg:block";case"entries":return"block";default:return"hidden sm:block"}},l=function(e){switch(e){case"article":return"hidden lg:block";case"entries":return"hidden sm:block";default:return"block"}},f=function(e){var t=e.split("/");if(t.shift(),2!==t.length)return null;switch(t[0]){case"categories":return{type:t[0],category:t[1]};case"sites":return{type:t[0],siteHash:t[1]};case"entries":return{type:t[0],entryHash:t[1]};default:return null}},p=(a=s().mark((function e(t,n,r,c,a,u){var o,l,f,p,h,d,y,m;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,(0,i.Sl)((0,i.c0)(n),n);case 4:o=e.sent,e.t0=t.type,e.next="categories"===e.t0?8:"sites"===e.t0?16:"entries"===e.t0?31:45;break;case 8:return l=t.category,e.next=11,(0,i.cA)(o,l);case 11:return f=e.sent,c(f),a(null),u("entries"),e.abrupt("return");case 16:if("all"!==(p=t.siteHash)){e.next=23;break}return e.next=20,(0,i.C0)(o);case 20:e.t1=e.sent,e.next=26;break;case 23:return e.next=25,(0,i.V3)(o,p);case 25:e.t1=e.sent;case 26:return h=e.t1,c(h),a(null),u("entries"),e.abrupt("return");case 31:return d=t.entryHash,e.next=34,(0,i.L5)(o,d);case 34:if(y=e.sent){e.next=37;break}return e.abrupt("return");case 37:if(0!==r.length){e.next=42;break}return e.next=40,(0,i.V3)(o,y.siteKey);case 40:m=e.sent,c(m);case 42:return a(y),u("article"),e.abrupt("return");case 45:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(n,r){var s=a.apply(e,t);function i(e){c(s,n,r,i,u,"next",e)}function u(e){c(s,n,r,i,u,"throw",e)}i(void 0)}))})}}]);