(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbe774e6"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},2241:function(t,e,n){"use strict";var o=n("c31d"),i=n("2b0e"),a=n("d282"),s=n("ea8e"),r=n("b1d2"),c=n("6605"),l=n("2638"),u=n.n(l),d=n("ba31");function f(t,e){var n=e.to,o=e.url,i=e.replace;if(n&&t){var a=t[i?"replace":"push"](n);a&&a.catch&&a.catch((function(t){if(t&&"NavigationDuplicated"!==t.name)throw t}))}else o&&(i?location.replace(o):location.href=o)}function h(t){f(t.parent&&t.parent.$router,t.props)}var p={url:String,replace:Boolean,to:[String,Object]},v=n("ad06"),g=n("543e"),y=Object(a["a"])("button"),m=y[0],b=y[1];function w(t,e,n,o){var i,a=e.tag,s=e.icon,c=e.type,l=e.color,f=e.plain,p=e.disabled,y=e.loading,m=e.hairline,w=e.loadingText,C={};function k(t){y||p||(Object(d["a"])(o,"click",t),h(o))}function O(t){Object(d["a"])(o,"touchstart",t)}l&&(C.color=f?l:r["e"],f||(C.background=l),-1!==l.indexOf("gradient")?C.border=0:C.borderColor=l);var B=[b([c,e.size,{plain:f,loading:y,disabled:p,hairline:m,block:e.block,round:e.round,square:e.square}]),(i={},i[r["b"]]=m,i)];function S(){var o,i=[];return y?i.push(t(g["a"],{class:b("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}})):s&&i.push(t(v["a"],{attrs:{name:s,classPrefix:e.iconPrefix},class:b("icon")})),o=y?w:n.default?n.default():e.text,o&&i.push(t("span",{class:b("text")},[o])),i}return t(a,u()([{style:C,class:B,attrs:{type:e.nativeType,disabled:p},on:{click:k,touchstart:O}},Object(d["b"])(o)]),[S()])}w.props=Object(o["a"])(Object(o["a"])({},p),{},{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}});var C,k=m(w),O=Object(a["a"])("dialog"),B=O[0],S=O[1],x=O[2],j=B({mixins:[Object(c["a"])()],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genButtons:function(){var t,e=this,n=this.$createElement,o=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[r["c"],S("footer",{buttons:o})]},[this.showCancelButton&&n(k,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||x("cancel")},class:S("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(k,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||x("confirm")},class:[S("confirm"),(t={},t[r["a"]]=o,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])}},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.message,o=this.messageAlign,i=this.slots(),a=this.slots("title")||this.title,r=a&&e("div",{class:S("header",{isolated:!n&&!i})},[a]),c=(i||n)&&e("div",{class:S("content")},[i||e("div",{domProps:{innerHTML:n},class:S("message",(t={"has-title":a},t[o]=o,t))})]);return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||n},class:[S(),this.className],style:{width:Object(s["a"])(this.width)}},[r,c,this.genButtons()])])}}}),_=n("a142");function D(t){return document.body.contains(t)}function E(){C&&C.$destroy(),C=new(i["a"].extend(j))({el:document.createElement("div"),propsData:{lazyRender:!1}}),C.$on("input",(function(t){C.value=t}))}function A(t){return _["e"]?Promise.resolve():new Promise((function(e,n){C&&D(C.$el)||E(),Object(o["a"])(C,A.currentOptions,t,{resolve:e,reject:n})}))}A.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){C["confirm"===t?"resolve":"reject"](t)}},A.alert=A,A.confirm=function(t){return A(Object(o["a"])({showCancelButton:!0},t))},A.close=function(){C&&(C.value=!1)},A.setDefaultOptions=function(t){Object(o["a"])(A.currentOptions,t)},A.resetDefaultOptions=function(){A.currentOptions=Object(o["a"])({},A.defaultOptions)},A.resetDefaultOptions(),A.install=function(){i["a"].use(j)},A.Component=j,i["a"].prototype.$dialog=A;e["a"]=A},"2fcb":function(t,e,n){},"841c":function(t,e,n){"use strict";var o=n("d784"),i=n("825a"),a=n("1d80"),s=n("129f"),r=n("14c3");o("search",1,(function(t,e,n){return[function(e){var n=a(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,n):new RegExp(e)[t](String(n))},function(t){var o=n(e,t,this);if(o.done)return o.value;var a=i(t),c=String(this),l=a.lastIndex;s(l,0)||(a.lastIndex=0);var u=r(a,c);return s(a.lastIndex,l)||(a.lastIndex=l),null===u?-1:u.index}]}))},"8d5f":function(t,e,n){"use strict";var o=n("c401f"),i=n.n(o);i.a},b1d2:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return c}));var o="#fff",i="van-hairline",a=i+"--top",s=i+"--left",r=i+"--surround",c=i+"-unset--top-bottom"},bc1b:function(t,e,n){},c401f:function(t,e,n){},cf4e:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"search-content"},[n("div",{staticClass:"search-top"},[n("div",{staticClass:"search-top-close",on:{click:function(e){return t.$router.go(-1)}}}),n("div",{staticClass:"search-top-wrap"},[n("div",{staticClass:"wrap-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"search",attrs:{type:"text",placeholder:"输入商品名称"},domProps:{value:t.keywords},on:{input:function(e){e.target.composing||(t.keywords=e.target.value)}}})]),n("div",{staticClass:"wrap-right",on:{click:function(e){return t.goKeywords()}}})])]),n("div",{staticClass:"search-main"},[n("div",{staticClass:"search-main-title"},[n("div",{staticClass:"title-text"},[t._v("最近搜索")]),n("div",{staticClass:"title-icon",on:{click:function(e){return t.clearKeywords()}}})]),n("div",{staticClass:"search-main-wrap"},t._l(t.keywordsData,(function(e,o){return n("div",{key:o,staticClass:"main-wrap-keywords",on:{click:function(n){return t.goKeywords(e)}}},[t._v(t._s(e))])})),0)]),n("div",{staticClass:"search-main"},[t._m(0),n("div",{staticClass:"search-main-wrap"},t._l(t.hotkeywords,(function(e,o){return n("div",{key:o,staticClass:"main-wrap-keywords",on:{click:function(n){return t.goKeywords(e.title)}}},[t._v(t._s(e.title))])})),0)])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-main-title"},[n("div",{staticClass:"title-text"},[t._v("热门搜索")])])}],a=(n("a434"),n("ac1f"),n("841c"),n("e17f"),n("2241")),s=n("5530"),r=n("2f62"),c={data:function(){return{keywords:""}},created:function(){document.title=this.$route.meta.title,this.keywordsArray=this.keywordsData?this.keywordsData:[],this.hotKeywords()},computed:Object(s["a"])({},Object(r["e"])({keywordsData:function(t){return t.search.keywordsData},hotkeywords:function(t){return t.search.hotkeywords}})),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(r["d"])({SET_KEYWORDS:"search/SET_KEYWORDS",CLEAR_KEYWORD:"search/CLEAR_KEYWORD"})),Object(r["b"])({hotKeywords:"search/hotKeywords"})),{},{clearKeywords:function(){var t=this;this.keywordsData.length>0&&a["a"].confirm({title:"",message:"确认要清除吗?"}).then((function(){t.CLEAR_KEYWORD()})).catch((function(){}))},goKeywords:function(t){var e=t||this.keywords||"";if(e){if(this.keywordsArray.length>0)for(var n=0;n<this.keywordsArray.length;n++)this.keywordsArray[n]===e&&this.keywordsArray.splice(n--,1);this.keywordsArray.unshift(e),this.SET_KEYWORDS({keywordsData:this.keywordsArray})}this.$router.push("/goods/search/content?kwords="+e)}})},l=c,u=(n("8d5f"),n("2877")),d=Object(u["a"])(l,o,i,!1,null,"20ad3722",null);e["default"]=d.exports},e17f:function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("bc1b"),n("2fcb")}}]);
//# sourceMappingURL=chunk-fbe774e6.d712ae2b.js.map