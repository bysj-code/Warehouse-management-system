(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/huowupandian/add-or-update"],{"14be":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(t("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,a,i,r,u){try{var s=n[r](u),o=s.value}catch(c){return void t(c)}s.done?e(o):Promise.resolve(o).then(a,i)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(a,i){var u=n.apply(e,t);function s(n){r(u,a,i,s,o,"next",n)}function o(n){r(u,a,i,s,o,"throw",n)}s(void 0)}))}}var s=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},o=function(){return t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{pandianriqi:"",shangpinbianhao:"",shangpinmingcheng:"",shengchandi:"",shangpinfenlei:"",pandianshuliang:"",pandianqingkuang:"",pandianbeizhu:""},pandianqingkuangOptions:[],pandianqingkuangIndex:0,user:{},ro:{pandianriqi:!1,shangpinbianhao:!1,shangpinmingcheng:!1,shengchandi:!1,shangpinfenlei:!1,pandianshuliang:!1,pandianqingkuang:!1,pandianbeizhu:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=u(a.default.mark((function e(t){var i,r,u,s;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.pandianriqi=this.$utils.getCurDate(),i=n.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:if(r=e.sent,this.user=r.data,this.pandianqingkuangOptions="正常,盘盈,盘亏".split(","),this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=15;break}return this.ruleForm.id=t.id,e.next=13,this.$api.info("huowupandian",this.ruleForm.id);case 13:r=e.sent,this.ruleForm=r.data;case 15:if(this.cross=t.cross,!t.cross){e.next=55;break}u=n.getStorageSync("crossObj"),e.t0=a.default.keys(u);case 19:if((e.t1=e.t0()).done){e.next=55;break}if(s=e.t1.value,"pandianriqi"!=s){e.next=25;break}return this.ruleForm.pandianriqi=u[s],this.ro.pandianriqi=!0,e.abrupt("continue",19);case 25:if("shangpinbianhao"!=s){e.next=29;break}return this.ruleForm.shangpinbianhao=u[s],this.ro.shangpinbianhao=!0,e.abrupt("continue",19);case 29:if("shangpinmingcheng"!=s){e.next=33;break}return this.ruleForm.shangpinmingcheng=u[s],this.ro.shangpinmingcheng=!0,e.abrupt("continue",19);case 33:if("shengchandi"!=s){e.next=37;break}return this.ruleForm.shengchandi=u[s],this.ro.shengchandi=!0,e.abrupt("continue",19);case 37:if("shangpinfenlei"!=s){e.next=41;break}return this.ruleForm.shangpinfenlei=u[s],this.ro.shangpinfenlei=!0,e.abrupt("continue",19);case 41:if("pandianshuliang"!=s){e.next=45;break}return this.ruleForm.pandianshuliang=u[s],this.ro.pandianshuliang=!0,e.abrupt("continue",19);case 45:if("pandianqingkuang"!=s){e.next=49;break}return this.ruleForm.pandianqingkuang=u[s],this.ro.pandianqingkuang=!0,e.abrupt("continue",19);case 49:if("pandianbeizhu"!=s){e.next=53;break}return this.ruleForm.pandianbeizhu=u[s],this.ro.pandianbeizhu=!0,e.abrupt("continue",19);case 53:e.next=19;break;case 55:this.styleChange();case 56:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pandianriqiChange:function(n){this.ruleForm.pandianriqi=n.target.value,this.$forceUpdate()},pandianqingkuangChange:function(n){this.pandianqingkuangIndex=n.target.value,this.ruleForm.pandianqingkuang=this.pandianqingkuangOptions[this.pandianqingkuangIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(a.default.mark((function e(){var t,i,r,u,s,o,c,h,d,g;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.pandianqingkuang){e.next=3;break}return this.$utils.msg("盘点情况不能为空"),e.abrupt("return");case 3:if(!this.cross){e.next=19;break}if(s=n.getStorageSync("statusColumnName"),o=n.getStorageSync("statusColumnValue"),""==s){e.next=19;break}if(t||(t=n.getStorageSync("crossObj")),s.startsWith("[")){e.next=15;break}for(c in t)c==s&&(t[c]=o);return h=n.getStorageSync("crossTable"),e.next=13,this.$api.update("".concat(h),t);case 13:e.next=19;break;case 15:i=Number(n.getStorageSync("userid")),r=t["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 19:if(!r||!i){e.next=41;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=r,d={page:1,limit:10,crossuserid:i,crossrefid:r},e.next=25,this.$api.list("huowupandian",d);case 25:if(g=e.sent,!(g.data.total>=u)){e.next=31;break}return this.$utils.msg(n.getStorageSync("tips")),e.abrupt("return",!1);case 31:if(!this.ruleForm.id){e.next=36;break}return e.next=34,this.$api.update("huowupandian",this.ruleForm);case 34:e.next=38;break;case 36:return e.next=38,this.$api.add("huowupandian",this.ruleForm);case 38:this.$utils.msgBack("提交成功");case 39:e.next=49;break;case 41:if(!this.ruleForm.id){e.next=46;break}return e.next=44,this.$api.update("huowupandian",this.ruleForm);case 44:e.next=48;break;case 46:return e.next=48,this.$api.add("huowupandian",this.ruleForm);case 48:this.$utils.msgBack("提交成功");case 49:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,i=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),a=a>9?a:"0"+a,i=i>9?i:"0"+i,"".concat(t,"-").concat(a,"-").concat(i)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,t("543d")["default"])},"210e":function(n,e,t){"use strict";t.r(e);var a=t("14be"),i=t.n(a);for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);e["default"]=i.a},"4fc8":function(n,e,t){"use strict";t.r(e);var a=t("8cd4"),i=t("210e");for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);t("6052");var u,s=t("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"1387ac73",null,!1,a["a"],u);e["default"]=o.exports},6052:function(n,e,t){"use strict";var a=t("9c89"),i=t.n(a);i.a},"8cd4":function(n,e,t){"use strict";var a,i=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return a}))},"9c89":function(n,e,t){},f8ae:function(n,e,t){"use strict";(function(n){t("6cdc"),t("921b");a(t("66fd"));var e=a(t("4fc8"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])}},[["f8ae","common/runtime","common/vendor"]]]);