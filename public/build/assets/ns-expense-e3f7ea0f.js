import{e as P,p as A,F as N,a as y}from"./bootstrap-f2d81cbc.js";import B from"./ns-alert-popup-883dcb0b.js";import{_ as c,n as F}from"./currency-47ec5b79.js";import"./npm~@dicebear~avatars_-e73ed2cc.js";import"./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./npm~moment-fbc5633a.js";import"./ns-switch-0a4d4345.js";import S from"./ns-pos-confirm-popup-268ffc19.js";import"./npm~vue2-daterange-picker-f17f6b76.js";import"./npm~vuedraggable-90a90e9d.js";import"./npm~vue-upload-component-9e5d4563.js";import"./npm~lodash-f7a36ac5.js";import{ae as _,a6 as a,z as l,A as o,c as v,ax as d,H as b,y as m,F as g,ac as C,x as w}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as u,z as U}from"./npm~@vue~shared_-82b01912.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~axios-0ec1b34a.js";import"./npm~form-data-87061074.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~runtime-dom_-a668b91e.js";import"./npm~@vue~reactivity_-481192b6.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-1dff8408.js";import"./npm~@babel~runtime_-34ca84e8.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-15c479db.js";import"./npm~fraction.js-52b397f9.js";import"./npm~typed-function-e88d1f37.js";import"./npm~seedrandom-b246f2f9.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./npm~numeral-faf61dd1.js";import"./npm~currency.js-57f74176.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-a2b86d8a.js";import"./npm~omit-deep-3a616dcc.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1784d248.js";import"./npm~eventemitter3-c7e30f9c.js";import"./npm~xml-lexer-6516179a.js";import"./npm~@ckeditor~ckeditor5-vue_-b5744b68.js";import"./npm~sortablejs-9be29f79.js";const V={name:"ns-expense-selector",props:["popup"],data(){return{configurations:[],warningMessage:!1,type:null}},mounted(){this.configurations=this.popup.params.configurations,this.warningMessage=this.popup.params.warningMessage,this.type=this.popup.params.type},methods:{__:c,nsCurrency:F,popupResolver:P,popupCloser:A,selectType(e){this.popupResolver(e)}}},j={class:"w-6/7-screen md:w-4/7-screen lg:w-3/7-screen flex flex-col shadow-lg ns-box"},O={class:"ns-box-header p-2 border-b flex justify-between items-center"},H={class:"font-bold text-xl"},R={key:0,class:"p-2"},W=["innerHTML"],q={class:"grid grid-cols-2"},z=["onClick"],D=["src","alt"],J={class:"font-bold"};function Y(e,s,t,f,i,n){const h=_("ns-notice");return a(),l("div",j,[o("div",O,[o("h3",H,u(n.__("Expense Type")),1)]),i.warningMessage?(a(),l("div",R,[v(h,{color:"info"},{title:d(()=>[b(u(n.__("Warning")),1)]),default:d(()=>[o("span",{innerHTML:i.warningMessage},null,8,W)]),_:1})])):m("",!0),o("div",q,[(a(!0),l(g,null,C(i.configurations,r=>(a(),l("div",{class:U([i.type===r.identifier?"info":"","h-40 elevation-surface hoverable flex-col flex items-center justify-center cursor-pointer"]),onClick:k=>n.selectType(r),key:r.identifier},[o("img",{src:r.icon,class:"w-20 my-2",alt:r.label},null,8,D),o("h3",J,u(r.label),1)],10,z))),128))])])}const G=E(V,[["render",Y]]),I={props:[],data(){return{configurations:[],activeTab:"create-customers",selectedConfiguration:{},isLoading:!1,tabs:[],unavailableType:!1,expense:{},originalRecurrence:[],validation:new N,recurrence:[],warningMessage:!1}},computed:{},mounted(){window.nsExpenseData!==void 0&&(this.expense=window.nsExpenseData),this.init()},watch:{},methods:{__:c,nsCurrency:F,confirmBeforeSave(){Popup.show(S,{title:c("Confirm Your Action"),message:c("The expense is about to be saved. Would you like to confirm your action ?"),onAction:e=>{e&&this.saveExpense()}})},saveExpense(){const e=this.expense.id!==void 0?"put":"post",s=this.expense.id!==void 0?`/api/crud/ns.expenses/${this.expense.id}`:"/api/crud/ns.expenses",t=this.configurations.filter(r=>r.identifier===this.selectedConfiguration.identifier);if(t.length!==1)return y.error(c("No configuration were choosen. Unable to proceed.")).subscribe();if(!this.validation.validateFields(t[0].fields))return y.error(c("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(t[0].fields);const f=this.validation.extractFields(t[0].fields),i=this.validation.extractFields(this.recurrence),n={...f,...i},h={general:{}};for(let r in n)r==="name"?h[r]=n[r]:h.general[r]=n[r];nsHttpClient[e](s,h).subscribe({next:r=>{y.success(r.message).subscribe(),setTimeout(()=>{document.location=r.data.editUrl},1e3)},error:r=>{this.validation.enableFields(t[0].fields),y.error(r.message||c("An unexpected error occured.")).subscribe()}})},updateSelectLabel(){this.recurrence.length>0&&(this.recurrence[0].options=this.recurrence[0].options.map((e,s)=>{const t=this.originalRecurrence[0].options[s];return["x_after_month_starts","x_before_month_ends"].includes(e.value)?(e.label=t.label.replace("{day}",this.recurrence[1].value>=0&&this.recurrence[1].value<=1?`${this.recurrence[1].value} day`:`${this.recurrence[1].value} days`),e.label=t.label.replace("{day}",this.recurrence[1].value>=0&&this.recurrence[1].value<=1?`${this.recurrence[1].value} day`:`${this.recurrence[1].value} days`)):["on_specific_day"].includes(e.value)&&(e.label=t.label.replace("{day}",this.ordinalSuffix(this.recurrence[1].value))),e}))},setActiveTab(e){this.activeTab=e,this.updateSelectLabel()},executeCondition(e,s){if(e.shows){const t=s.filter(i=>Object.keys(e.shows).includes(i.name));return t.filter(i=>e.shows[i.name].includes(i.value)).length===t.length}return!0},setTabs(){const e=[{label:this.selectedConfiguration.label||c("N/A"),identifier:"general",active:!0,fields:this.selectedConfiguration.fields}];["ns.recurring-expenses","ns.salary-expenses"].includes(this.selectedConfiguration.identifier)&&e.push({label:c("Conditions"),identifier:"recurrence"}),this.tabs=e},async init(){try{this.isLoading=!0;const{configurations:e,recurrence:s,warningMessage:t}=await this.loadConfiguration();if(this.configurations=e,this.recurrence=s,this.warningMessage=t,this.originalRecurrence=JSON.parse(JSON.stringify(s)),this.expense.type===void 0)await this.selectExpenseType();else{const f=this.configurations.filter(i=>i.identifier===this.expense.type);if(f.length==0)return this.unavailableType=!0,this.isLoading=!1,Popup.show(B,{title:c("Unable to load the Expense"),message:c("You cannot edit this expense if NexoPOS cannot perform background requests.")});this.processSelectedConfiguration(f[0])}this.isLoading=!1,this.setTabs()}catch(e){console.log(e)}},processSelectedConfiguration(e){e.fields=this.validation.createFields(e.fields),e.fields.forEach(s=>{s.name==="recurring"&&(["ns.recurring-expenses","ns.salary-expenses"].includes(e.identifier)?s.value=!0:s.value=!1),s.name==="type"&&(s.value=e.identifier)}),this.selectedConfiguration=e},async selectExpenseType(){try{const e=await new Promise((s,t)=>{Popup.show(G,{resolve:s,reject:t,configurations:this.configurations,type:this.expense.type,warningMessage:this.warningMessage})});this.processSelectedConfiguration(e)}catch(e){console.log(e)}},confirmTypeChange(){Popup.show(S,{title:c("Change Type"),message:c("By proceeding the current for and all your entries will be cleared. Would you like to proceed?"),onAction:e=>{e&&(delete this.expense.type,this.init())}})},ordinalSuffix(e){var s=e%10,t=e%100;return s==1&&t!=11?e+"st":s==2&&t!=12?e+"nd":s==3&&t!=13?e+"rd":e+"th"},loadConfiguration(){return new Promise((e,s)=>{nsHttpClient.get(`/api/expenses/configurations/${this.expense.id?this.expense.id:""}`).subscribe({next:t=>{e(t)},error:t=>{s(t)}})})}}},K={key:0,class:"h-half w-full flex items-center justify-center"},Q={key:1,class:"flex items-center justify-center"},X={key:2},Z={class:"md:flex hidden flex-col md:flex-row -mx-2"},$={class:"px-2"},ee={class:"ns-button info"},se={class:"px-2"},te={class:"ns-button success"},ie={class:"my-3 md:hidden"},ne={class:"flex -mx-2"},re={class:"px-2"},oe={class:"ns-button info"},ae={class:"px-2"},ce={class:"ns-button success"};function le(e,s,t,f,i,n){const h=_("ns-spinner"),r=_("ns-button"),k=_("ns-notice"),T=_("ns-field"),L=_("ns-tabs-item"),M=_("ns-tabs");return a(),l(g,null,[i.isLoading&&!i.unavailableType?(a(),l("div",K,[v(h)])):m("",!0),i.unavailableType&&!i.isLoading?(a(),l("div",Q,[v(k,{color:"warning"},{title:d(()=>[b(u(n.__("Unable to edit this expense")),1)]),description:d(()=>[b(u(n.__("This expense was created with a type that is no longer available. This type is no longer available because NexoPOS is unable to perform background requests.")),1)]),controls:d(()=>[v(r,{target:"_blank",href:"https://my.nexopos.com/en/documentation/troubleshooting/workers-or-async-requests-disabled?utm_source=nexopos&utm_campaign=warning&utm_medium=app",type:"warning"},{default:d(()=>[b(u(n.__("Learn More")),1)]),_:1})]),_:1})])):m("",!0),i.tabs.length>0&&!i.isLoading?(a(),l("div",X,[v(M,{active:i.activeTab,onActive:s[5]||(s[5]=p=>n.setActiveTab(p))},{extra:d(()=>[o("div",Z,[o("div",$,[o("div",ee,[o("button",{onClick:s[0]||(s[0]=p=>n.confirmTypeChange()),class:"py-1 px-2 text-sm rounded"},u(n.__("Change Type")),1)])]),o("div",se,[o("div",te,[o("button",{onClick:s[1]||(s[1]=p=>n.confirmBeforeSave()),class:"py-1 px-2 text-sm rounded"},u(n.__("Save Expense")),1)])])])]),default:d(()=>[(a(!0),l(g,null,C(i.tabs,p=>(a(),w(L,{key:p.identifier,identifier:p.identifier,label:p.label},{default:d(()=>[p.fields?(a(),l(g,{key:0},[i.selectedConfiguration.identifier==="ns.salary-expenses"?(a(),w(k,{key:0,class:"mb-2",color:"info"},{title:d(()=>[b(u(n.__("Warning")),1)]),description:d(()=>[b(u(n.__("While selecting salary expense, the amount defined will be multiplied by the total user assigned to the User group selected.")),1)]),_:1})):m("",!0),(a(!0),l(g,null,C(p.fields,x=>(a(),w(T,{key:x.name,field:x},null,8,["field"]))),128))],64)):m("",!0),p.identifier==="recurrence"?(a(!0),l(g,{key:1},C(i.recurrence,x=>(a(),l(g,{key:x.name},[n.executeCondition(x,i.recurrence)?(a(),w(T,{key:0,onChange:s[2]||(s[2]=pe=>n.updateSelectLabel()),field:x},null,8,["field"])):m("",!0)],64))),128)):m("",!0)]),_:2},1032,["identifier","label"]))),128)),o("div",ie,[o("div",ne,[o("div",re,[o("div",oe,[o("button",{onClick:s[3]||(s[3]=p=>n.confirmTypeChange()),class:"py-1 px-2 text-sm rounded"},u(n.__("Change Type")),1)])]),o("div",ae,[o("div",ce,[o("button",{onClick:s[4]||(s[4]=p=>n.confirmBeforeSave()),class:"py-1 px-2 text-sm rounded"},u(n.__("Save Expense")),1)])])])])]),_:1},8,["active"])])):m("",!0)],64)}const gs=E(I,[["render",le]]);export{gs as default};