<template>
<view class="content">
	<view class="box" :style='{"width":"100%","padding":"0","position":"relative","background":"#fff","height":"100%"}'>
		<view :style='{"width":"100%","padding":"32rpx 24rpx","background":"#fff","display":"block","height":"auto"}'>
			<view :style='{"padding":"0","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yuangong'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center"}'>员工工号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.yuangonggonghao" placeholder="员工工号"></input>
			</view>
			<view :style='{"padding":"0","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yuangong'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center"}'>密码</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'  type="password" v-model="ruleForm.mima" placeholder="密码"></input>
			</view>
			<view :style='{"padding":"0","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yuangong'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center"}'>员工姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.yuangongxingming" placeholder="员工姓名"></input>
			</view>
			<view v-if="tableName=='yuangong'" :style='{"padding":"0","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="yuangongxingbieChange" :value="yuangongxingbieIndex" :range="yuangongxingbieOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#50605d"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yuangong'" @tap="yuangongtouxiangTap" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center"}'>头像</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view v-if="tableName=='yuangong'" :style='{"padding":"0","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center"}' class="title">部门</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' disabled="true" @change="yuangongbumenChange1" :value="yuangongbumenIndex" :range="yuangongbumenOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#50605d"}' class="uni-input picker-select-input">{{ruleForm.bumen?ruleForm.bumen:"请选择部门"}}</view>
				</picker>
			</view>
			<view v-if="tableName=='yuangong'" :style='{"padding":"0","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center"}' class="title">职位</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' disabled="true" @change="yuangongzhiweiChange" :value="yuangongzhiweiIndex" :range="yuangongzhiweiOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#50605d"}' class="uni-input picker-select-input">{{ruleForm.zhiwei?ruleForm.zhiwei:"请选择职位"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yuangong'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center"}'>手机</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.shouji" placeholder="手机"></input>
			</view>
			<view :style='{"padding":"0","margin":"0 0 24rpx 0","borderColor":"#c9f2e4","alignItems":"center","borderRadius":"40rpx","borderWidth":"2rpx","background":"#f3fcf9","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yuangong'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"center"}'>身份证</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.shenfenzheng" placeholder="身份证"></input>
			</view>
			<view :style='{"width":"100%","margin":"40rpx 0 0 0","justifyContent":"center","display":"flex","height":"auto"}' class="btn">
				<button @tap="update()" class="cu-btn lg" :style='{"border":"0","padding":"0px","margin":"0 20rpx","color":"rgb(255, 255, 255)","borderRadius":"40rpx","background":"#4F977E","width":"48%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}'>保存</button>
				<button @tap="logout()" class="cu-btn lg" :style='{"border":"0","padding":"0px","margin":"0 20rpx","color":"#fff","borderRadius":"40rpx","background":"#89c997","width":"48%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}'>退出登录</button>
			</view>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				yuangongxingbieOptions: [],
				yuangongxingbieIndex: 0,
				yuangongbumenOptions: [],
				yuangongbumenIndex: 0,
				yuangongzhiweiOptions: [],
				yuangongzhiweiIndex: 0,
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.ruleForm = res.data;
			this.tableName = table;
			// 自定义下拉框值
			if(this.tableName=='yuangong'){
				this.yuangongxingbieOptions = "男,女".split(',');
				this.yuangongxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.yuangongxingbieIndex = index;
					}
				});
			}
			// 下拉框
			if(this.tableName=='yuangong'){
				res = await this.$api.option(`bumen`,`bumen`,{});
				this.yuangongbumenOptions = res.data;
                this.yuangongbumenOptions.unshift("请选择部门");
				this.yuangongbumenOptions.forEach((item, index) => {
					if(item==this.ruleForm.bumen) {
						this.yuangongbumenIndex = index;
					}
				});
			}
			this.styleChange()
		},
		methods: {
            // 下拉变化
            yuangongxingbieChange(e) {
                    this.yuangongxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.yuangongxingbieOptions[this.yuangongxingbieIndex]
            },
			yuangongtouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},
            async yuangongbumenChange1(e) {
                this.yuangongbumenIndex = e.target.value
                this.ruleForm.bumen = this.yuangongbumenOptions[this.yuangongbumenIndex]
                this.ruleForm.zhiwei = '';
                this.yuangongzhiweiOptions = [];
                this.yuangongzhiweiIndex = 0;
                let res = await this.$api.option(`zhiwei`, `zhiwei`, {conditionColumn:'bumen',conditionValue:this.yuangongbumenOptions[this.yuangongbumenIndex]});
                if (res && res.code === 0) {
                      this.yuangongzhiweiOptions = res.data;
                      this.yuangongzhiweiOptions.unshift("请选择职位");
                }
            },
            // 下拉变化
            yuangongzhiweiChange(e) {
                    this.yuangongzhiweiIndex = e.target.value
                    this.ruleForm.zhiwei = this.yuangongzhiweiOptions[this.yuangongzhiweiIndex]
            },
            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('. .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.userInfoForm.list.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.setStorageSync('token', '');
				this.$utils.jump('../login/login');
			},
			// 注册
			async update() {
				if((!this.ruleForm.yuangonggonghao) && `yuangong` == this.tableName){
					this.$utils.msg(`员工工号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yuangong` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if((!this.ruleForm.yuangongxingming) && `yuangong` == this.tableName){
					this.$utils.msg(`员工姓名不能为空`);
					return
				}
				if((!this.ruleForm.bumen) && `yuangong` == this.tableName){
					this.$utils.msg(`部门不能为空`);
					return
				}
				if((!this.ruleForm.zhiwei) && `yuangong` == this.tableName){
					this.$utils.msg(`职位不能为空`);
					return
				}
				if(`yuangong` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
					this.$utils.msg(`手机应输入手机格式`);
					return
				}
				if(`yuangong` == this.tableName && this.ruleForm.shenfenzheng&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzheng))){
					this.$utils.msg(`身份证应输入身份证格式`);
					return
				}
				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
			},

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
