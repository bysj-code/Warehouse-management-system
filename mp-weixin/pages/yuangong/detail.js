(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yuangong/detail"],{"45ca":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,i,a,r,s){try{var u=t[r](s),o=u.value}catch(c){return void e(c)}u.done?n(o):Promise.resolve(o).then(i,a)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(i,a){var s=t.apply(n,e);function u(t){r(s,i,a,u,o,"next",t)}function o(t){r(s,i,a,u,o,"throw",t)}u(void 0)}))}}var u={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=s(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=n.id,n.userid&&(this.userid=n.userid);case 2:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onShow:function(){var n=s(i.default.mark((function n(e){var a,r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.init(),a=t.getStorageSync("nowTable"),n.next=4,this.$api.session(a);case 4:r=n.sent,this.user=r.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","yuangong"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(n){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(n.id,"&userid=")+this.userid)},onAcrossTap:function(n,e,i,a,r){if(t.setStorageSync("crossTable","yuangong"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",i),t.setStorageSync("statusColumnValue",r),t.setStorageSync("tips",a),""!=i&&!i.startsWith("[")){var s=t.getStorageSync("crossObj");for(var u in s)if(u==i&&s[u]==r)return void this.$utils.msg(a)}this.$utils.jump("../".concat(n,"/add-or-update?cross=true"))},init:function(){var t=s(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("yuangong",this.id);case 2:n=t.sent,this.detail=n.data,this.swiperList=this.detail.zhaopian?this.detail.zhaopian.split(","):[];case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=s(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.endSuccess(n.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(n){var e=this;n=e.$base.url+n,t.downloadFile({url:n,success:function(t){200===t.statusCode&&(e.$utils.msg("下载成功"),window.open(n))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=s(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discussyuangong/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onSHTap:function(){this.$refs.popup.open()}}};n.default=u}).call(this,e("543d")["default"])},"9bd7":function(t,n,e){"use strict";var i={"mescroll-uni":()=>Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"f05e"))},a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.swiperList,(function(n,e){var i=n.substring(0,4);return{$orig:t.__get_orig(n),g0:i}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},r=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}))},b179:function(t,n,e){"use strict";var i=e("dc0f"),a=e.n(i);a.a},dc0f:function(t,n,e){},e0ea:function(t,n,e){"use strict";(function(t){e("6cdc"),e("921b");i(e("66fd"));var n=i(e("f818"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},e6f7:function(t,n,e){"use strict";e.r(n);var i=e("45ca"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},f818:function(t,n,e){"use strict";e.r(n);var i=e("9bd7"),a=e("e6f7");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("b179");var s,u=e("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"5626ee04",null,!1,i["a"],s);n["default"]=o.exports}},[["e0ea","common/runtime","common/vendor"]]]);