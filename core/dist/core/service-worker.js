if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const l=e=>i(e,r),u={module:{uri:r},exports:t,require:l};s[r]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(o(...e),t)))}}define(["./workbox-bc3e3c26"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"main.b3a9dd9db89a0324.js",revision:null},{url:"polyfills.9209e96f4640b8d2.js",revision:null},{url:"styles.ef46db3751d8e999.css",revision:null}],{})}));
