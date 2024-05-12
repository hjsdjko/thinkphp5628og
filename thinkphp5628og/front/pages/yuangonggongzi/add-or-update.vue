<template>
<view class="content">
	<view :style='{"width":"100%","padding":"0","position":"relative","background":"#fff","height":"100%"}'>
		<form :style='{"width":"calc(100% - 40rpx)","padding":"0","margin":"32rpx 20rpx","background":"none","display":"block","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">工资月份</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="gongziyuefenChange" :value="gongziyuefenIndex"  :range="gongziyuefenOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#50605d"}' class="uni-input">{{ruleForm.gongziyuefen?ruleForm.gongziyuefen:"请选择工资月份"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">员工工号</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="yuangonggonghaoChange" :value="yuangonggonghaoIndex"  :range="yuangonggonghaoOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#50605d"}' class="uni-input">{{yuangonggonghaoOptions[yuangonggonghaoIndex]}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">员工姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.yuangongxingming" v-model="ruleForm.yuangongxingming" placeholder="员工姓名"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">部门</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.bumen" v-model="ruleForm.bumen" placeholder="部门"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">性别</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.xingbie" v-model="ruleForm.xingbie" placeholder="性别"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">职位</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.zhiwei" v-model="ruleForm.zhiwei" placeholder="职位"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">底薪</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.dixin" v-model="ruleForm.dixin" placeholder="底薪"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">奖金</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.jiangjin" v-model="ruleForm.jiangjin" placeholder="奖金"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">绩效</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.jixiao" v-model="ruleForm.jixiao" placeholder="绩效"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">岗位补贴</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.gangweibutie" v-model="ruleForm.gangweibutie" placeholder="岗位补贴"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">全勤奖</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.quanqinjiang" v-model="ruleForm.quanqinjiang" placeholder="全勤奖"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">加班费</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.jiabanfei" v-model="ruleForm.jiabanfei" placeholder="加班费"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">扣绩效</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.koujixiao" v-model="ruleForm.koujixiao" placeholder="扣绩效"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">其它扣款</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.qitakoukuan" v-model="ruleForm.qitakoukuan" placeholder="其它扣款"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">扣五险一金</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.kouwuxianyijin" v-model="ruleForm.kouwuxianyijin" placeholder="扣五险一金"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">实发工资</view>
				<view :style='{"padding":"0px 24rpx","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"#50605d","flex":"1"}' class="right-input">
					{{shifagongzi}}
				</view>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">工资备注</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#50605d","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.gongzibeizhu" v-model="ruleForm.gongzibeizhu" placeholder="工资备注"></input>
			</view>
			<view :style='{"padding":"0px 20rpx","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center】"}' class="title">发布日期</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.faburiqi" @change="faburiqiChange">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#50605d"}' class="uni-input">{{ruleForm.faburiqi?ruleForm.faburiqi:"请选择发布日期"}}</view>
				</picker>
			</view>
			
			<!-- 否 -->
 

			
			
			<view :style='{"width":"100%","justifyContent":"space-between","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"border":"0","padding":"0px","margin":"0","color":"rgb(255, 255, 255)","borderRadius":"40rpx","background":"#4F977E","width":"48%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				gongziyuefen: '',
				yuangonggonghao: '',
				yuangongxingming: '',
				bumen: '',
				xingbie: '',
				zhiwei: '',
				dixin: '',
				jiangjin: '',
				jixiao: '',
				gangweibutie: '',
				quanqinjiang: '',
				jiabanfei: '',
				koujixiao: '',
				qitakoukuan: '',
				kouwuxianyijin: '',
				shifagongzi: '',
				gongzibeizhu: '',
				faburiqi: '',
				},
				gongziyuefenOptions: [],
				gongziyuefenIndex: 0,
				yuangonggonghaoOptions: [],
				yuangonggonghaoIndex: 0,
				// 登陆用户信息
				user: {},
                                ro:{
                                   gongziyuefen : false,
                                   yuangonggonghao : false,
                                   yuangongxingming : false,
                                   bumen : false,
                                   xingbie : false,
                                   zhiwei : false,
                                   dixin : false,
                                   jiangjin : false,
                                   jixiao : false,
                                   gangweibutie : false,
                                   quanqinjiang : false,
                                   jiabanfei : false,
                                   koujixiao : false,
                                   qitakoukuan : false,
                                   kouwuxianyijin : false,
                                   shifagongzi : false,
                                   gongzibeizhu : false,
                                   faburiqi : false,
                                },
			}
		},
		components: {
			wPicker,
            xiaEditor
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
			shifagongzi: {
			get: function () {
				return 0+parseFloat(this.ruleForm.dixin)+parseFloat(this.ruleForm.jiangjin)+parseFloat(this.ruleForm.jixiao)+parseFloat(this.ruleForm.gangweibutie)+parseFloat(this.ruleForm.quanqinjiang)+parseFloat(this.ruleForm.jiabanfei)-this.ruleForm.koujixiao-this.ruleForm.qitakoukuan-this.ruleForm.kouwuxianyijin || ''
			}
			},



		},
		async onLoad(options) {
            this.ruleForm.faburiqi = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取

            this.ro.yuangongxingming = true;
            this.ro.bumen = true;
            this.ro.xingbie = true;
            this.ro.zhiwei = true;
            this.ro.shifagongzi = true;

			// 自定义下拉框值
			this.gongziyuefenOptions = "一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月".split(',')
			// 下2
			res = await this.$api.option(`yuangong`,`yuangonggonghao`,{});
			this.yuangonggonghaoOptions = res.data;

			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`yuangonggongzi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='gongziyuefen'){
					this.ruleForm.gongziyuefen = obj[o];
					this.ro.gongziyuefen = true;
					continue;
					}
					if(o=='yuangonggonghao'){
					this.ruleForm.yuangonggonghao = obj[o];
					this.ro.yuangonggonghao = true;
					continue;
					}
					if(o=='yuangongxingming'){
					this.ruleForm.yuangongxingming = obj[o];
					this.ro.yuangongxingming = true;
					continue;
					}
					if(o=='bumen'){
					this.ruleForm.bumen = obj[o];
					this.ro.bumen = true;
					continue;
					}
					if(o=='xingbie'){
					this.ruleForm.xingbie = obj[o];
					this.ro.xingbie = true;
					continue;
					}
					if(o=='zhiwei'){
					this.ruleForm.zhiwei = obj[o];
					this.ro.zhiwei = true;
					continue;
					}
					if(o=='dixin'){
					this.ruleForm.dixin = obj[o];
					this.ro.dixin = true;
					continue;
					}
					if(o=='jiangjin'){
					this.ruleForm.jiangjin = obj[o];
					this.ro.jiangjin = true;
					continue;
					}
					if(o=='jixiao'){
					this.ruleForm.jixiao = obj[o];
					this.ro.jixiao = true;
					continue;
					}
					if(o=='gangweibutie'){
					this.ruleForm.gangweibutie = obj[o];
					this.ro.gangweibutie = true;
					continue;
					}
					if(o=='quanqinjiang'){
					this.ruleForm.quanqinjiang = obj[o];
					this.ro.quanqinjiang = true;
					continue;
					}
					if(o=='jiabanfei'){
					this.ruleForm.jiabanfei = obj[o];
					this.ro.jiabanfei = true;
					continue;
					}
					if(o=='koujixiao'){
					this.ruleForm.koujixiao = obj[o];
					this.ro.koujixiao = true;
					continue;
					}
					if(o=='qitakoukuan'){
					this.ruleForm.qitakoukuan = obj[o];
					this.ro.qitakoukuan = true;
					continue;
					}
					if(o=='kouwuxianyijin'){
					this.ruleForm.kouwuxianyijin = obj[o];
					this.ro.kouwuxianyijin = true;
					continue;
					}
					if(o=='shifagongzi'){
					this.ruleForm.shifagongzi = obj[o];
					this.ro.shifagongzi = true;
					continue;
					}
					if(o=='gongzibeizhu'){
					this.ruleForm.gongzibeizhu = obj[o];
					this.ro.gongzibeizhu = true;
					continue;
					}
					if(o=='faburiqi'){
					this.ruleForm.faburiqi = obj[o];
					this.ro.faburiqi = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},
			// 下二随
			async yuangonggonghaoChange (e) {
				this.yuangonggonghaoIndex = e.target.value
				this.ruleForm.yuangonggonghao = this.yuangonggonghaoOptions[this.yuangonggonghaoIndex]
				let res = await this.$api.follow(`yuangong`, `yuangonggonghao`,{
					columnValue: this.ruleForm.yuangonggonghao
				});
				if(res.data.yuangongxingming){
					this.ruleForm.yuangongxingming = res.data.yuangongxingming
				}
				if(res.data.bumen){
					this.ruleForm.bumen = res.data.bumen
				}
				if(res.data.xingbie){
					this.ruleForm.xingbie = res.data.xingbie
				}
				if(res.data.zhiwei){
					this.ruleForm.zhiwei = res.data.zhiwei
				}
			},

			// 多级联动参数

			faburiqiChange(e) {
				this.ruleForm.faburiqi = e.target.value;
				this.$forceUpdate();
			},


			// 下拉变化
			gongziyuefenChange(e) {
				this.gongziyuefenIndex = e.target.value
				this.ruleForm.gongziyuefen = this.gongziyuefenOptions[this.gongziyuefenIndex]
			},


			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {

				this.ruleForm.shifagongzi = this.shifagongzi




































//跨表计算判断
				var obj;
				if((!this.ruleForm.gongziyuefen)){
					this.$utils.msg(`工资月份不能为空`);
					return
				}
				if((!this.ruleForm.yuangonggonghao)){
					this.$utils.msg(`员工工号不能为空`);
					return
				}
				if((!this.ruleForm.dixin)){
					this.$utils.msg(`底薪不能为空`);
					return
				}
				if(this.ruleForm.dixin&&(!this.$validate.isIntNumer(this.ruleForm.dixin))){
					this.$utils.msg(`底薪应输入整数`);
					return
				}
				if((!this.ruleForm.jiangjin)){
					this.$utils.msg(`奖金不能为空`);
					return
				}
				if(this.ruleForm.jiangjin&&(!this.$validate.isIntNumer(this.ruleForm.jiangjin))){
					this.$utils.msg(`奖金应输入整数`);
					return
				}
				if((!this.ruleForm.jixiao)){
					this.$utils.msg(`绩效不能为空`);
					return
				}
				if(this.ruleForm.jixiao&&(!this.$validate.isIntNumer(this.ruleForm.jixiao))){
					this.$utils.msg(`绩效应输入整数`);
					return
				}
				if((!this.ruleForm.gangweibutie)){
					this.$utils.msg(`岗位补贴不能为空`);
					return
				}
				if(this.ruleForm.gangweibutie&&(!this.$validate.isIntNumer(this.ruleForm.gangweibutie))){
					this.$utils.msg(`岗位补贴应输入整数`);
					return
				}
				if((!this.ruleForm.quanqinjiang)){
					this.$utils.msg(`全勤奖不能为空`);
					return
				}
				if(this.ruleForm.quanqinjiang&&(!this.$validate.isIntNumer(this.ruleForm.quanqinjiang))){
					this.$utils.msg(`全勤奖应输入整数`);
					return
				}
				if((!this.ruleForm.jiabanfei)){
					this.$utils.msg(`加班费不能为空`);
					return
				}
				if(this.ruleForm.jiabanfei&&(!this.$validate.isIntNumer(this.ruleForm.jiabanfei))){
					this.$utils.msg(`加班费应输入整数`);
					return
				}
				if((!this.ruleForm.koujixiao)){
					this.$utils.msg(`扣绩效不能为空`);
					return
				}
				if(this.ruleForm.koujixiao&&(!this.$validate.isIntNumer(this.ruleForm.koujixiao))){
					this.$utils.msg(`扣绩效应输入整数`);
					return
				}
				if((!this.ruleForm.qitakoukuan)){
					this.$utils.msg(`其它扣款不能为空`);
					return
				}
				if(this.ruleForm.qitakoukuan&&(!this.$validate.isIntNumer(this.ruleForm.qitakoukuan))){
					this.$utils.msg(`其它扣款应输入整数`);
					return
				}
				if((!this.ruleForm.kouwuxianyijin)){
					this.$utils.msg(`扣五险一金不能为空`);
					return
				}
				if(this.ruleForm.kouwuxianyijin&&(!this.$validate.isIntNumer(this.ruleForm.kouwuxianyijin))){
					this.$utils.msg(`扣五险一金应输入整数`);
					return
				}
				if(this.ruleForm.shifagongzi&&(!this.$validate.isIntNumer(this.ruleForm.shifagongzi))){
					this.$utils.msg(`实发工资应输入整数`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`yuangonggongzi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`yuangonggongzi`, this.ruleForm);
						}else{
							await this.$api.add(`yuangonggongzi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`yuangonggongzi`, this.ruleForm);
					}else{
						await this.$api.add(`yuangonggongzi`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
