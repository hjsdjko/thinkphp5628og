(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yuangongkaoqin-detail"],{"841d":function(t,i,e){"use strict";var n=e("ac3c"),r=e.n(n);r.a},"85d1":function(t,i,e){"use strict";e.r(i);var n=e("9a17"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=r.a},"9a17":function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("f559"),e("55dd"),e("96cf");var r=n(e("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过","待审核"],count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=i.id,i.userid&&(this.userid=i.userid);case 2:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),onShow:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(i){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.init(),e=uni.getStorageSync("nowTable"),t.next=4,this.$api.session(e);case 4:n=t.sent,this.user=n.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","yuangongkaoqin"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(t){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(t.id,"&userid=")+this.userid)},onAcrossTap:function(t,i,e,n,r){if("是"!=i||"是"==this.detail.sfsh){if(uni.setStorageSync("crossTable","yuangongkaoqin"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",e),uni.setStorageSync("statusColumnValue",r),uni.setStorageSync("tips",n),""!=e&&!e.startsWith("[")){var a=uni.getStorageSync("crossObj");for(var s in a)if(s==e&&a[s]==r)return void this.$utils.msg(n)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))}else this.$utils.msg("请审核通过后再操作")},init:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("yuangongkaoqin",this.id);case 2:i=t.sent,this.detail=i.data;case 4:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.endSuccess(i.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var i=this;t=i.$base.url+t,uni.downloadFile({url:t,success:function(e){200===e.statusCode&&(i.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discussyuangongkaoqin/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),"待审核"==this.detail.sfsh&&(this.detail.sfsh="待审核"),t.next=11,this.$api.update("yuangongkaoqin",this.detail);case 11:this.$utils.msg("审核成功"),this.$refs.popup.close();case 13:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};i.default=a},ac09:function(t,i,e){"use strict";e.r(i);var n=e("f230"),r=e("85d1");for(var a in r)"default"!==a&&function(t){e.d(i,t,(function(){return r[t]}))}(a);e("841d");var s,o=e("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"98dcded8",null,!1,n["a"],s);i["default"]=l.exports},ac3c:function(t,i,e){var n=e("d1d1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("53760d42",n,!0,{sourceMap:!1,shadowMode:!1})},d1d1:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-98dcded8]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-98dcded8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-98dcded8]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-98dcded8]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-98dcded8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-98dcded8] .uni-audio-default{width:inherit}',""]),t.exports=i},f230:function(t,i,e){"use strict";var n={"mescroll-uni":e("f05e").default,"uni-popup":e("1c89").default},r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(i){arguments[0]=i=t.$handleEvent(i),t.mescrollInit.apply(void 0,arguments)},down:function(i){arguments[0]=i=t.$handleEvent(i),t.downCallback.apply(void 0,arguments)},up:function(i){arguments[0]=i=t.$handleEvent(i),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"container",style:{width:"100%",padding:"0",position:"relative",background:"#fff",height:"100%"}},[e("v-uni-view",{staticClass:"detail-content",style:{width:"100%",padding:"32rpx 24rpx 24rpx 24rpx",background:"#fff",height:"auto"}},[e("v-uni-view",{staticClass:"detail-list-item title",style:{margin:"0 0 24rpx 0",borderColor:"#c9f2e4",borderRadius:"40rpx",borderWidth:"2rpx",background:"#f3fcf9",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",background:"none",width:"180rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[t._v("操作时间：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"#50605d"}},[t._v(t._s(t.detail.caozuoshijian))])],1),e("v-uni-view",{staticClass:"detail-list-item title",style:{margin:"0 0 24rpx 0",borderColor:"#c9f2e4",borderRadius:"40rpx",borderWidth:"2rpx",background:"#f3fcf9",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",background:"none",width:"180rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[t._v("考勤类型：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"#50605d"}},[t._v(t._s(t.detail.kaoqinleixing))])],1),e("v-uni-view",{staticClass:"detail-list-item title",style:{margin:"0 0 24rpx 0",borderColor:"#c9f2e4",borderRadius:"40rpx",borderWidth:"2rpx",background:"#f3fcf9",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",background:"none",width:"180rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[t._v("考勤备注：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"#50605d"}},[t._v(t._s(t.detail.kaoqinbeizhu))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#c9f2e4",borderRadius:"40rpx",borderWidth:"2rpx",background:"#f3fcf9",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",background:"none",width:"180rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[t._v("员工工号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"#50605d"}},[t._v(t._s(t.detail.yuangonggonghao))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#c9f2e4",borderRadius:"40rpx",borderWidth:"2rpx",background:"#f3fcf9",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",background:"none",width:"180rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[t._v("员工姓名：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"#50605d"}},[t._v(t._s(t.detail.yuangongxingming))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#c9f2e4",borderRadius:"40rpx",borderWidth:"2rpx",background:"#f3fcf9",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",background:"none",width:"180rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[t._v("部门：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"#50605d"}},[t._v(t._s(t.detail.bumen))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#c9f2e4",borderRadius:"40rpx",borderWidth:"2rpx",background:"#f3fcf9",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",background:"none",width:"180rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[t._v("职位：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"#50605d"}},[t._v(t._s(t.detail.zhiwei))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#c9f2e4",borderRadius:"40rpx",borderWidth:"2rpx",background:"#f3fcf9",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",background:"none",width:"180rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[t._v("手机：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"#50605d"}},[t._v(t._s(t.detail.shouji))])],1),t.userid?e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#c9f2e4",borderRadius:"40rpx",borderWidth:"2rpx",background:"#f3fcf9",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",background:"none",width:"180rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[t._v("审核状态：")]),"是"==t.detail.sfsh?e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"#50605d"}},[t._v("通过")]):t._e(),"否"==t.detail.sfsh?e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"#50605d"}},[t._v("不通过")]):t._e(),"待审核"==t.detail.sfsh?e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"#50605d"}},[t._v("待审核")]):t._e()],1):t._e(),t.userid?e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#c9f2e4",borderRadius:"40rpx",borderWidth:"2rpx",background:"#f3fcf9",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",textAlign:"right",background:"none",width:"180rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[t._v("审核回复")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",lineHeight:"80rpx",fontSize:"28rpx",color:"#50605d"}},[t._v(t._s(t.detail.shhf))])],1):t._e(),e("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{width:"100%",padding:"10rpx 24rpx",flexWrap:"wrap",background:"#f3fcf9",display:"flex",height:"auto"}},[t.userid&&t.isAuth("yuangongkaoqin","审核")?e("v-uni-button",{style:{border:"0",padding:"0 20rpx",margin:"0",color:"rgb(255, 255, 255)",background:"rgb(255, 170, 51)",width:"auto",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onSHTap.apply(void 0,arguments)}}},[t._v("审核")]):t._e(),!t.userid&&t.isAuthFront("yuangongkaoqin","审核")?e("v-uni-button",{style:{border:"0",padding:"0 20rpx",margin:"0",color:"rgb(255, 255, 255)",background:"rgb(255, 170, 51)",width:"auto",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onSHTap.apply(void 0,arguments)}}},[t._v("审核")]):t._e()],1)],1),e("uni-popup",{ref:"popup",staticClass:"popup-content",attrs:{type:"center"}},[e("v-uni-form",{staticClass:"popup-form",staticStyle:{background:"#fff",width:"300px",display:"block","border-radius":"10px",padding:"20px","text-align":"center"}},[e("v-uni-view",{staticClass:" margin-top"},[e("v-uni-picker",{attrs:{value:t.sfshIndex,range:t.sfshOptions},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.sfshChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.detail.sfsh?t.detail.sfsh:"选择审核结果"))])],1)],1),e("v-uni-view",{},[e("v-uni-textarea",{staticStyle:{width:"200px"},attrs:{placeholder:"审核回复"},model:{value:t.detail.shhf,callback:function(i){t.$set(t.detail,"shhf",i)},expression:"detail.shhf"}})],1),e("v-uni-view",{staticClass:"btn-content"},[e("v-uni-button",{staticClass:"cu-btn bg-cyan",staticStyle:{margin:"0 10px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onCloseWinTap.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-button",{staticClass:"cu-btn bg-red",staticStyle:{margin:"0 10px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onFinishTap.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)],1)],1)],1)],1)},a=[];e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))}}]);