(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-aboutus-add-or-update"],{1492:function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-4553a540]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),t.exports=e},"17af":function(t,e,r){"use strict";var i=r("6511"),n=r.n(i);n.a},4297:function(t,e,r){"use strict";var i=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("a481"),r("c5f6"),r("f559"),r("ac6a"),r("28a5"),r("96cf");var n=i(r("3b8d")),a=i(r("e2b1")),o=i(r("064f")),s={data:function(){return{cross:"",ruleForm:{title:"",subtitle:"",content:"",picture1:"",picture2:"",picture3:""},user:{},ro:{title:!1,subtitle:!1,content:!1,picture1:!1,picture2:!1,picture3:!1}}},components:{wPicker:a.default,xiaEditor:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){var r,i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(i=t.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){t.next=13;break}return this.ruleForm.id=e.id,t.next=11,this.$api.info("aboutus",this.ruleForm.id);case 11:i=t.sent,this.ruleForm=i.data;case 13:if(this.cross=e.cross,!e.cross){t.next=45;break}n=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(n);case 17:if((t.t1=t.t0()).done){t.next=45;break}if(a=t.t1.value,"title"!=a){t.next=23;break}return this.ruleForm.title=n[a],this.ro.title=!0,t.abrupt("continue",17);case 23:if("subtitle"!=a){t.next=27;break}return this.ruleForm.subtitle=n[a],this.ro.subtitle=!0,t.abrupt("continue",17);case 27:if("content"!=a){t.next=31;break}return this.ruleForm.content=n[a],this.ro.content=!0,t.abrupt("continue",17);case 31:if("picture1"!=a){t.next=35;break}return this.ruleForm.picture1=n[a].split(",")[0],this.ro.picture1=!0,t.abrupt("continue",17);case 35:if("picture2"!=a){t.next=39;break}return this.ruleForm.picture2=n[a].split(",")[0],this.ro.picture2=!0,t.abrupt("continue",17);case 39:if("picture3"!=a){t.next=43;break}return this.ruleForm.picture3=n[a].split(",")[0],this.ro.picture3=!0,t.abrupt("continue",17);case 43:t.next=17;break;case 45:this.styleChange();case 46:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),methods:{contentChange:function(t){this.ruleForm.content=t},styleChange:function(){this.$nextTick((function(){}))},picture1Tap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.picture1="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},picture2Tap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.picture2="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},picture3Tap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.picture3="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){var e,r,i,n,a,o,s,u,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.title){t.next=3;break}return this.$utils.msg("标题不能为空"),t.abrupt("return");case 3:if(this.ruleForm.content){t.next=6;break}return this.$utils.msg("内容不能为空"),t.abrupt("return");case 6:if(!this.cross){t.next=22;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){t.next=22;break}if(e||(e=uni.getStorageSync("crossObj")),a.startsWith("[")){t.next=18;break}for(s in e)s==a&&(e[s]=o);return u=uni.getStorageSync("crossTable"),t.next=16,this.$api.update("".concat(u),e);case 16:t.next=22;break;case 18:r=Number(uni.getStorageSync("userid")),i=e["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 22:if(!i||!r){t.next=44;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=i,c={page:1,limit:10,crossuserid:r,crossrefid:i},t.next=28,this.$api.list("aboutus",c);case 28:if(l=t.sent,!(l.data.total>=n)){t.next=34;break}return this.$utils.msg(uni.getStorageSync("tips")),t.abrupt("return",!1);case 34:if(!this.ruleForm.id){t.next=39;break}return t.next=37,this.$api.update("aboutus",this.ruleForm);case 37:t.next=41;break;case 39:return t.next=41,this.$api.add("aboutus",this.ruleForm);case 41:this.$utils.msgBack("提交成功");case 42:t.next=52;break;case 44:if(!this.ruleForm.id){t.next=49;break}return t.next=47,this.$api.update("aboutus",this.ruleForm);case 47:t.next=51;break;case 49:return t.next=51,this.$api.add("aboutus",this.ruleForm);case 51:this.$utils.msgBack("提交成功");case 52:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,r=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===t?r-=60:"end"===t&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(t){this.$refs[t].show()}}};e.default=s},"4d2b":function(t,e,r){"use strict";r.r(e);var i=r("4297"),n=r.n(i);for(var a in i)"default"!==a&&function(t){r.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},6511:function(t,e,r){var i=r("1492");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=r("4f06").default;n("07fd72fe",i,!0,{sourceMap:!1,shadowMode:!1})},7546:function(t,e,r){"use strict";r.r(e);var i=r("f094"),n=r("4d2b");for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);r("17af");var o,s=r("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"4553a540",null,!1,i["a"],o);e["default"]=u.exports},f094:function(t,e,r){"use strict";var i={"xia-editor":r("064f").default},n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{minHeight:"100vh",width:"100%",padding:"0 0 240rpx",position:"relative",background:"url() fixed,#fff",height:"auto"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",display:"block",height:"auto"}},[r("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",display:"flex",minHeight:"120rpx",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("标题")]),r("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:t.ro.title,placeholder:"标题"},model:{value:t.ruleForm.title,callback:function(e){t.$set(t.ruleForm,"title",e)},expression:"ruleForm.title"}})],1),r("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",display:"flex",minHeight:"120rpx",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("副标题")]),r("v-uni-input",{style:{border:"0",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:t.ro.subtitle,placeholder:"副标题"},model:{value:t.ruleForm.subtitle,callback:function(e){t.$set(t.ruleForm,"subtitle",e)},expression:"ruleForm.subtitle"}})],1),r("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",display:"flex",minHeight:"120rpx",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.picture1Tap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("图片1")]),t.ruleForm.picture1?r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:t.baseUrl+t.ruleForm.picture1.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",display:"flex",minHeight:"120rpx",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.picture2Tap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("图片2")]),t.ruleForm.picture2?r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:t.baseUrl+t.ruleForm.picture2.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{style:{padding:"12rpx 0",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx 0",borderColor:"#e9be70",alignItems:"baseline",display:"flex",minHeight:"120rpx",borderRadius:"0",borderWidth:"0px 0px 0px",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.picture3Tap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[t._v("图片3")]),t.ruleForm.picture3?r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:t.baseUrl+t.ruleForm.picture3.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 0px 0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#111",fontWeight:"500"}},[t._v("内容")]),r("xia-editor",{ref:"editor",style:{minHeight:"300rpx",padding:"24rpx 40rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",borderColor:"#e9be70",borderRadius:"0",background:"url(http://codegen.caihongy.cn/20221221/c8ff0c9649f9472e926677fcfdbbdd44.png) repeat-x left bottom,#d7eff8",borderWidth:"0px 0px 0px",width:"100%",borderStyle:"solid",height:"auto"},attrs:{placeholder:"内容"},on:{editorChange:function(e){arguments[0]=e=t.$handleEvent(e),t.contentChange.apply(void 0,arguments)}},model:{value:t.ruleForm.content,callback:function(e){t.$set(t.ruleForm,"content",e)},expression:"ruleForm.content"}})],1),r("v-uni-view",{staticClass:"btn",style:{width:"100%",margin:"40rpx 0 0 0",justifyContent:"center",display:"flex",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"2rpx 4rpx 8rpx #ccc",margin:"0 40rpx 0 0",borderColor:"#ef6d0d",color:"#333",display:"inline",minWidth:"200rpx",borderRadius:"40rpx",background:"linear-gradient(180deg, rgba(253,246,139,1) 0%, rgba(254,233,97,1) 84%, rgba(255,220,52,1) 100%),#ffdc34",borderWidth:"0 0 8rpx",width:"auto",lineHeight:"72rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSubmitTap.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)],1)},a=[];r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return i}))}}]);