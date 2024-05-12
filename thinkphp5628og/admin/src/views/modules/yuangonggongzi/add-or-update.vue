<template>
	<div class="addEdit-block" style="width: 100%;">
		<el-form
			:style='{"borderRadius":"6px","padding":"30px","margin":"0 0 0 70px"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="140px"
		>
			<template >
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="select" v-if="type!='info'"  label="工资月份" prop="gongziyuefen">
					<el-select :disabled="ro.gongziyuefen" v-model="ruleForm.gongziyuefen" placeholder="请选择工资月份" >
						<el-option
							v-for="(item,index) in gongziyuefenOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="工资月份" prop="gongziyuefen">
					<el-input v-model="ruleForm.gongziyuefen"
						placeholder="工资月份" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="select" v-if="type!='info'" label="员工工号" prop="yuangonggonghao">
					<el-select :disabled="ro.yuangonggonghao" @change="yuangonggonghaoChange" v-model="ruleForm.yuangonggonghao" placeholder="请选择员工工号">
						<el-option
							v-for="(item,index) in yuangonggonghaoOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.yuangonggonghao" label="员工工号" prop="yuangonggonghao">
					<el-input v-model="ruleForm.yuangonggonghao" placeholder="员工工号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="员工姓名" prop="yuangongxingming">
					<el-input v-model="ruleForm.yuangongxingming" placeholder="员工姓名" clearable  :readonly="ro.yuangongxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="员工姓名" prop="yuangongxingming">
					<el-input v-model="ruleForm.yuangongxingming" placeholder="员工姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="部门" prop="bumen">
					<el-input v-model="ruleForm.bumen" placeholder="部门" clearable  :readonly="ro.bumen"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="部门" prop="bumen">
					<el-input v-model="ruleForm.bumen" placeholder="部门" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="性别" prop="xingbie">
					<el-input v-model="ruleForm.xingbie" placeholder="性别" clearable  :readonly="ro.xingbie"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="性别" prop="xingbie">
					<el-input v-model="ruleForm.xingbie" placeholder="性别" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="职位" prop="zhiwei">
					<el-input v-model="ruleForm.zhiwei" placeholder="职位" clearable  :readonly="ro.zhiwei"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="职位" prop="zhiwei">
					<el-input v-model="ruleForm.zhiwei" placeholder="职位" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="底薪" prop="dixin">
					<el-input v-model="ruleForm.dixin" placeholder="底薪" clearable  :readonly="ro.dixin"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="底薪" prop="dixin">
					<el-input v-model="ruleForm.dixin" placeholder="底薪" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="奖金" prop="jiangjin">
					<el-input v-model="ruleForm.jiangjin" placeholder="奖金" clearable  :readonly="ro.jiangjin"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="奖金" prop="jiangjin">
					<el-input v-model="ruleForm.jiangjin" placeholder="奖金" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="绩效" prop="jixiao">
					<el-input v-model="ruleForm.jixiao" placeholder="绩效" clearable  :readonly="ro.jixiao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="绩效" prop="jixiao">
					<el-input v-model="ruleForm.jixiao" placeholder="绩效" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="岗位补贴" prop="gangweibutie">
					<el-input v-model="ruleForm.gangweibutie" placeholder="岗位补贴" clearable  :readonly="ro.gangweibutie"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="岗位补贴" prop="gangweibutie">
					<el-input v-model="ruleForm.gangweibutie" placeholder="岗位补贴" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="全勤奖" prop="quanqinjiang">
					<el-input v-model="ruleForm.quanqinjiang" placeholder="全勤奖" clearable  :readonly="ro.quanqinjiang"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="全勤奖" prop="quanqinjiang">
					<el-input v-model="ruleForm.quanqinjiang" placeholder="全勤奖" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="加班费" prop="jiabanfei">
					<el-input v-model="ruleForm.jiabanfei" placeholder="加班费" clearable  :readonly="ro.jiabanfei"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="加班费" prop="jiabanfei">
					<el-input v-model="ruleForm.jiabanfei" placeholder="加班费" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="扣绩效" prop="koujixiao">
					<el-input v-model="ruleForm.koujixiao" placeholder="扣绩效" clearable  :readonly="ro.koujixiao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="扣绩效" prop="koujixiao">
					<el-input v-model="ruleForm.koujixiao" placeholder="扣绩效" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="其它扣款" prop="qitakoukuan">
					<el-input v-model="ruleForm.qitakoukuan" placeholder="其它扣款" clearable  :readonly="ro.qitakoukuan"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="其它扣款" prop="qitakoukuan">
					<el-input v-model="ruleForm.qitakoukuan" placeholder="其它扣款" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="扣五险一金" prop="kouwuxianyijin">
					<el-input v-model="ruleForm.kouwuxianyijin" placeholder="扣五险一金" clearable  :readonly="ro.kouwuxianyijin"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="扣五险一金" prop="kouwuxianyijin">
					<el-input v-model="ruleForm.kouwuxianyijin" placeholder="扣五险一金" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'" label="实发工资" prop="shifagongzi">
					<el-input v-model="shifagongzi" placeholder="实发工资" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.shifagongzi" label="实发工资" prop="shifagongzi">
					<el-input v-model="ruleForm.shifagongzi" placeholder="实发工资" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="工资备注" prop="gongzibeizhu">
					<el-input v-model="ruleForm.gongzibeizhu" placeholder="工资备注" clearable  :readonly="ro.gongzibeizhu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="工资备注" prop="gongzibeizhu">
					<el-input v-model="ruleForm.gongzibeizhu" placeholder="工资备注" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="date" v-if="type!='info'" label="发布日期" prop="faburiqi">
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.faburiqi" 
						type="date"
						:readonly="ro.faburiqi"
						placeholder="发布日期"
					></el-date-picker> 
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.faburiqi" label="发布日期" prop="faburiqi">
					<el-input v-model="ruleForm.faburiqi" placeholder="发布日期" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#000000","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"1px solid #000000","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#000000","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"1px solid #000000","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#000000","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
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
			yuangonggonghaoOptions: [],
			
			rules: {
				gongziyuefen: [
					{ required: true, message: '工资月份不能为空', trigger: 'blur' },
				],
				yuangonggonghao: [
					{ required: true, message: '员工工号不能为空', trigger: 'blur' },
				],
				yuangongxingming: [
				],
				bumen: [
				],
				xingbie: [
				],
				zhiwei: [
				],
				dixin: [
					{ required: true, message: '底薪不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				jiangjin: [
					{ required: true, message: '奖金不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				jixiao: [
					{ required: true, message: '绩效不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				gangweibutie: [
					{ required: true, message: '岗位补贴不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				quanqinjiang: [
					{ required: true, message: '全勤奖不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				jiabanfei: [
					{ required: true, message: '加班费不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				koujixiao: [
					{ required: true, message: '扣绩效不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				qitakoukuan: [
					{ required: true, message: '其它扣款不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				kouwuxianyijin: [
					{ required: true, message: '扣五险一金不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				shifagongzi: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				gongzibeizhu: [
				],
				faburiqi: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {
		shifagongzi: {
			get: function () {
				return 0+parseFloat(this.ruleForm.dixin==""?0:this.ruleForm.dixin)+parseFloat(this.ruleForm.jiangjin==""?0:this.ruleForm.jiangjin)+parseFloat(this.ruleForm.jixiao==""?0:this.ruleForm.jixiao)+parseFloat(this.ruleForm.gangweibutie==""?0:this.ruleForm.gangweibutie)+parseFloat(this.ruleForm.quanqinjiang==""?0:this.ruleForm.quanqinjiang)+parseFloat(this.ruleForm.jiabanfei==""?0:this.ruleForm.jiabanfei)-parseFloat(this.ruleForm.koujixiao==""?0:this.ruleForm.koujixiao)-parseFloat(this.ruleForm.qitakoukuan==""?0:this.ruleForm.qitakoukuan)-parseFloat(this.ruleForm.kouwuxianyijin==""?0:this.ruleForm.kouwuxianyijin) || 0
			}
		},



	},
	created() {
		this.ruleForm.faburiqi = this.getCurDate()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
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
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(this.$storage.get("role")!="管理员") {
						this.ro.yuangongxingming = true;
					}
					if(this.$storage.get("role")!="管理员") {
						this.ro.bumen = true;
					}
					if(this.$storage.get("role")!="管理员") {
						this.ro.xingbie = true;
					}
					if(this.$storage.get("role")!="管理员") {
						this.ro.zhiwei = true;
					}
					if(this.$storage.get("role")!="管理员") {
						this.ro.shifagongzi = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.gongziyuefenOptions = "一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月".split(',')
            this.$http({
				url: `option/yuangong/yuangonggonghao`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.yuangonggonghaoOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
			// 下二随
			yuangonggonghaoChange () {
				this.$http({
					url: `follow/yuangong/yuangonggonghao?columnValue=`+ this.ruleForm.yuangonggonghao,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						if(data.data.yuangongxingming){
							this.ruleForm.yuangongxingming = data.data.yuangongxingming
						}
						if(data.data.bumen){
							this.ruleForm.bumen = data.data.bumen
						}
						if(data.data.xingbie){
							this.ruleForm.xingbie = data.data.xingbie
						}
						if(data.data.zhiwei){
							this.ruleForm.zhiwei = data.data.zhiwei
						}
					} else {
						this.$message.error(data.msg);
					}
				});
			},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `yuangonggongzi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
        this.ruleForm.shifagongzi = this.shifagongzi





































var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "yuangonggongzi/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `yuangonggongzi/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.yuangonggongziCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `yuangonggongzi/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.yuangonggongziCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.yuangonggongziCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #666;
	  	  font-weight: 600;
	  	  width: 140px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 140px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 1px solid #000;
	  	  border-radius: 0;
	  	  padding: 0 12px;
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 1px solid #000;
	  	  border-radius: 0;
	  	  padding: 0 10px;
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 1px solid #000;
	  	  border-radius: 0;
	  	  padding: 0 10px 0 30px;
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px dashed #000;
	  	  cursor: pointer;
	  	  border-radius: 0;
	  	  color: #000;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px dashed #000;
	  	  cursor: pointer;
	  	  border-radius: 0;
	  	  color: #000;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px dashed #000;
	  	  cursor: pointer;
	  	  border-radius: 0;
	  	  color: #000;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid #000;
	  	  border-radius: 0;
	  	  padding: 12px;
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
</style>
