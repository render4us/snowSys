var m=Object.defineProperty;var a=(s,r,t)=>r in s?m(s,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[r]=t;var e=(s,r,t)=>(a(s,typeof r!="symbol"?r+"":r,t),t);import{a as i}from"./bootstrap-0380d638.js";import{B as o}from"./npm~rxjs-eeb06f17.js";import"./npm~lodash-3db1c062.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~laravel-echo-0c2ba8ed.js";import"./npm~pusher-js-bbfae226.js";import"./npm~axios-c24e582b.js";import"./npm~chart.js-3fed1729.js";import"./npm~moment-a9aaa855.js";import"./npm~vue-3512c1bf.js";import"./npm~@vue~runtime-dom_-9455b728.js";import"./npm~@vue~runtime-core_-29a19feb.js";import"./npm~@vue~reactivity_-beabd60a.js";import"./npm~@vue~shared_-951a29c4.js";import"./npm~@vue~compiler-dom_-614ecb28.js";import"./npm~@vue~compiler-core_-eb33010d.js";import"./npm~rx-f450d610.js";import"./currency-dc6217f5.js";import"./npm~numeral-304d6dd9.js";import"./npm~currency.js-57f74176.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-b10bd4cd.js";import"./npm~@babel~runtime_-9313f80d.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-dc0d19c5.js";import"./npm~fraction.js-cb0643cb.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-37239647.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./npm~tslib-8dbab242.js";class p{constructor(){e(this,"_day");e(this,"_bestCustomers");e(this,"_bestCashiers");e(this,"_weeksSummary");e(this,"_recentOrders");e(this,"_reports",{day:i.get("/api/dashboard/day"),bestCustomers:i.get("/api/dashboard/best-customers"),weeksSummary:i.get("/api/dashboard/weeks"),bestCashiers:i.get("/api/dashboard/best-cashiers"),recentOrders:i.get("/api/dashboard/recent-orders")});this._day=new o({}),this._bestCustomers=new o([]),this._weeksSummary=new o({}),this._bestCashiers=new o([]),this._recentOrders=new o([]);for(let r in this._reports)this.loadReport(r)}loadReport(r){return this._reports[r].subscribe(t=>{this[`_${r}`].next(t)})}get day(){return this._day}get bestCustomers(){return this._bestCustomers}get bestCashiers(){return this._bestCashiers}get recentOrders(){return this._recentOrders}get weeksSummary(){return this._weeksSummary}}window.Dashboard=new p;