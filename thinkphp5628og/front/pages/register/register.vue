<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"100rpx","backgroundSize":"100% 100%","backgroundImage":"url(http://codegen.caihongy.cn/20221107/5de367739bac41f786f0f48471fd97e5.jpg)","height":"100%"}'>
		<view :style='{"padding":"8%","boxShadow":"0px 0px 12rpx #ccc","margin":"160rpx 0","borderRadius":"32rpx","background":"#fffcfc","display":"block","width":"100%","height":"auto"}'>
			<image :style='{"border":"2rpx solid #eee","padding":"12rpx","margin":"0 auto 24rpx auto","borderRadius":"50%","objectFit":"cover","display":"block","width":"160rpx","height":"160rpx"}' src="http://codegen.caihongy.cn/20221107/6f01b7d8019c4a2897302330e1ce0ae5.png" mode="aspectFill"></image>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","borderColor":"#b8b6b6","borderStyle":"solid","borderWidth":"0 0 2rpx 0","height":"auto"}' v-if="tableName=='yuangong'" class="uni-form-item uni-column">
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","background":"none","width":"100%","fontSize":"28rpx","height":"80rpx"}'  v-model="ruleForm.yuangonggonghao"  type="text"  class="uni-input" name="" placeholder="员工工号" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","borderColor":"#b8b6b6","borderStyle":"solid","borderWidth":"0 0 2rpx 0","height":"auto"}' v-if="tableName=='yuangong'" class="uni-form-item uni-column">
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","background":"none","width":"100%","fontSize":"28rpx","height":"80rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","borderColor":"#b8b6b6","borderStyle":"solid","borderWidth":"0 0 2rpx 0","height":"auto"}' v-if="tableName=='yuangong'" class="uni-form-item uni-column">
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","background":"none","width":"100%","fontSize":"28rpx","height":"80rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","borderColor":"#b8b6b6","borderStyle":"solid","borderWidth":"0 0 2rpx 0","height":"auto"}' v-if="tableName=='yuangong'" class="uni-form-item uni-column">
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","background":"none","width":"100%","fontSize":"28rpx","height":"80rpx"}'  v-model="ruleForm.yuangongxingming"  type="text"  class="uni-input" name="" placeholder="员工姓名" />
			</view>
			<picker :style='{"width":"100%","margin":"0 auto","height":"auto"}' v-if="tableName=='yuangong'"  @change="yuangongxingbieChange" :value="yuangongxingbieIndex" :range="yuangongxingbieOptions">
				<view :style='{"padding":"0 0 0 24rpx","borderColor":"#b8b6b6","color":"#888","textAlign":"left","borderWidth":"0 0 2rpx 0","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
			</picker>
            <view :style='{"width":"100%","margin":"0 0 24rpx 0","borderColor":"#b8b6b6","borderStyle":"solid","borderWidth":"0 0 2rpx 0","height":"auto"}' v-if="tableName=='yuangong'" @tap="yuangongtouxiangTap" class="">
                <view>请上传头像</view>
                <image :style='{"width":"160rpx","borderRadius":"16rpx","display":"block","height":"160rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"width":"160rpx","borderRadius":"16rpx","display":"block","height":"160rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<picker :style='{"width":"100%","margin":"0 auto","height":"auto"}' v-if="tableName=='yuangong'" disabled="true" @change="yuangongbumenChange1" :value="yuangongbumenIndex" :range="yuangongbumenOptions">
				<view :style='{"padding":"0 0 0 24rpx","borderColor":"#b8b6b6","color":"#888","textAlign":"left","borderWidth":"0 0 2rpx 0","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="uni-input">{{ruleForm.bumen?ruleForm.bumen:"请选择部门"}}</view>
			</picker>
			<picker :style='{"width":"100%","margin":"0 auto","height":"auto"}' v-if="tableName=='yuangong'" disabled="true" @change="yuangongzhiweiChange" :value="yuangongzhiweiIndex" :range="yuangongzhiweiOptions">
				<view :style='{"padding":"0 0 0 24rpx","borderColor":"#b8b6b6","color":"#888","textAlign":"left","borderWidth":"0 0 2rpx 0","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="uni-input">{{ruleForm.zhiwei?ruleForm.zhiwei:"请选择职位"}}</view>
			</picker>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","borderColor":"#b8b6b6","borderStyle":"solid","borderWidth":"0 0 2rpx 0","height":"auto"}' v-if="tableName=='yuangong'" class="uni-form-item uni-column">
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","background":"none","width":"100%","fontSize":"28rpx","height":"80rpx"}'  v-model="ruleForm.shouji"  type="text"  class="uni-input" name="" placeholder="手机" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","borderColor":"#b8b6b6","borderStyle":"solid","borderWidth":"0 0 2rpx 0","height":"auto"}' v-if="tableName=='yuangong'" class="uni-form-item uni-column">
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","background":"none","width":"100%","fontSize":"28rpx","height":"80rpx"}'  v-model="ruleForm.shenfenzheng"  type="text"  class="uni-input" name="" placeholder="身份证" />
			</view>
			<button :style='{"border":"0","padding":"0px","margin":"40rpx 0 24rpx 0","color":"rgb(255, 255, 255)","borderRadius":"40rpx","background":"#4F977E","width":"100%","lineHeight":"80rpx","fontSize":"36rpx","height":"80rpx"}' class="btn-submit" @tap="register" type="primary">注册</button>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
                yuangongxingbieOptions: [],
                yuangongxingbieIndex: 0,
                yuangongbumenOptions: [],
                yuangongbumenIndex: 0,
                yuangongzhiweiOptions: [],
                yuangongzhiweiIndex: 0,
				ruleForm: {
				},
				emailcode: "",
				tableName:""
			}
		},
        computed: {
            baseUrl() {
                return this.$base.url;
            }
        },
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
            this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='yuangong'){
                this.yuangongxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.yuangongxingbieOptions[0]
			}
			if(this.tableName=='yuangong'){
                res = await this.$api.option(`bumen`,`bumen`,{});
                this.yuangongbumenOptions = res.data;
                this.yuangongbumenOptions.unshift("请选择部门");
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
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				if((!this.ruleForm.yuangonggonghao) && `yuangong` == this.tableName){
					this.$utils.msg(`员工工号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yuangong` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`yuangong` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
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
				await this.$api.register(`${this.tableName}`, this.ruleForm, this.emailcode);
				this.$utils.msgBack('注册成功');;
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
