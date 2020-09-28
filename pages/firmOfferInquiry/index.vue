<template>
	<!-- 物流供应商待报价页面(实盘询价) -->
	<view class="firmOfferInquiry">
		<!-- 竞价信息(物流常规询价) -->
		<view class="binding-info" v-if="bindingVuexCheckeddata.titletext==='物流待报价'||bindingVuexCheckeddata.status==='物流已报价实盘询价'">
			<view class="binding-info_oneline  binding-info_oneline_title">
				<view class="secondtext">
					{{bindingVuexCheckeddata.startPort}}
				</view>
				<view class="thirdtext">
					<view>{{bindingData.transferMethod}}</view>
					<view>——</view>
				</view>
				<view class="fourthtext">
					{{bindingVuexCheckeddata.arrivePort}}
				</view>
				<view class="fifthtext gray">
					1*20'GP
				</view>
				<text :class="{bidding_sign:true,redbg:showTag(bindingVuexCheckeddata)==='实盘',bluebg:showTag(bindingVuexCheckeddata)==='常规'}">{{showTag(bindingVuexCheckeddata)}}</text>
			</view>
			<view :class="{isWinBidding:true,graybg:showTagState(bindingVuexCheckeddata)==='已结束'||showTagState(bindingVuexCheckeddata)==='已放弃'||showTagIsoutbid(bindingVuexCheckeddata)==='未中标',redbg:showTagIsoutbid(bindingVuexCheckeddata)==='已中标',orangebg:showTagState(bindingVuexCheckeddata)==='已报价'}"  v-if="bindingVuexCheckeddata.status==='物流已报价实盘询价'">{{showTagIsoutbid(bindingVuexCheckeddata)||showTagState(bindingVuexCheckeddata)}}</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="12">
						<view class="gray">{{"周"+bindingData.schedule}}</view>
					</u-col>
				</u-row>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="12">
						<text class="gray">预计出运</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.planshipDate}}</text>
					</u-col>
				</u-row>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">货盘类型</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.palletType}}</text>
					</u-col>
					<u-col span="5">
						<text class="gray">货物总量</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.footNumber}}*{{bindingData.cabinetType}}</text>
					</u-col>
				</u-row>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">货物毛重</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.gw}}</text>
					</u-col>
					<u-col span="5">
						<text class="gray">指定承运人</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.carrier}}</text>
					</u-col>
				</u-row>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">{{bindingData.loadDock}}</text>
						<text class="mg15">--</text>
						<text class="gray">{{bindingData.unLoadDock}}</text>
					</u-col>
					<u-col span="5">
						<text class="gray">鉴定书</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.isCertificate===1?"是":"否"}}</text>
					</u-col>
				</u-row>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">危险品</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.danger===1?"是":"否"}}</text>
					</u-col>
				</u-row>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">贸易订单号</text>
						<text class="mg15">:</text>
						<text class="gray"></text>
					</u-col>
				</u-row>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">订舱要求</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.booking}}</text>
					</u-col>
				</u-row>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="12">
						<text class="red">{{bindingData.biddeadLine}}</text>
						<text class="red">截止报价</text>
					</u-col>
				</u-row>
			</view>
		</view>

		<!-- 常规询价 -->
		<view class="binding-info" v-if="bindingVuexCheckeddata.titletext==='物流已报价'&&bindingVuexCheckeddata.status==='物流已报价常规询价'">
			<view class="binding-info_oneline  binding-info_oneline_title">
				<view class="secondtext">
					{{bindingData.logisticsbIdVo.startPort}}
				</view>
				<view class="thirdtext">
					<view>{{bindingData.logisticsbIdVo.transferMethod}}</view>
					<view>——</view>
				</view>
				<view class="fourthtext">
					{{bindingData.logisticsbIdVo.arrivePort}}
				</view>
				<text :class="{bidding_sign:true,redbg:showTag(bindingVuexCheckeddata)==='实盘',bluebg:showTag(bindingVuexCheckeddata)==='常规'}">{{showTag(bindingVuexCheckeddata)}}</text>
				<view :class="{isWinBidding:true,graybg:showTagState(bindingVuexCheckeddata)==='已结束'||showTagState(bindingVuexCheckeddata)==='已放弃'||showTagIsoutbid(bindingVuexCheckeddata)==='未中标',redbg:showTagIsoutbid(bindingVuexCheckeddata)==='已中标',orangebg:showTagState(bindingVuexCheckeddata)==='已报价'}"  v-if="bindingVuexCheckeddata.status==='物流已报价常规询价'">{{showTagIsoutbid(bindingVuexCheckeddata)||showTagState(bindingVuexCheckeddata)}}</view>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">货物总量</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.logisticsbIdVo.footNumber}}*{{bindingData.logisticsbIdVo.cabinetType}}</text>
					</u-col>
					<u-col span="5">
						<text class="red">截止日期</text>
						<text class="mg15">:</text>
						<text class="red">{{bindingData.logisticsbIdVo.biddeadLine}}</text>
					</u-col>
				</u-row>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">货盘类型</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.logisticsbIdVo.palletType}}</text>
					</u-col>
					<u-col span="5">
						<text class="gray">危险品</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.logisticsbIdVo.danger===1?"是":"否"}}</text>
					</u-col>
				</u-row>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">货物毛重</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.logisticsbIdVo.gw}}</text>
					</u-col>
					<u-col span="5">
						<text class="gray">预计出运</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.logisticsbIdVo.planshipDate}}</text>
					</u-col>
				</u-row>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">备注</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.logisticsbIdVo.remarks}}</text>
					</u-col>
				</u-row>
			</view>
		</view>
       
		<!-- 竞价排名 -->
		<view class="binding-ranking" v-if="bindingData.logisticsbidsupplierVos&&bindingVuexCheckeddata.titletext==='物流待报价'">
			<view class="binding-ranking-title">
				全部供应商报价排名(价格从低到高)
			</view>
			<!-- 具体的报价记录 -->
			<view class="binding-record" v-if="bindingData.logisticsbidsupplierVos">
				<view class="binding-record_item" v-for="(item,index) in bindingData.logisticsbidsupplierVos" :key="index">
					<u-row gutter="16">
						<u-col span="2">
							<view class="binding-record_item_sort">
								{{item.isMy=='1'?"我":index+1}}
							</view>
						</u-col>
						<u-col span="3">
							<view class="binding-record_item_content">
								<view>价格USD</view>
								<view class="mg-t24">日期</view>
							</view>
						</u-col>
						<u-col span="6">
							<view class="binding-record_item_info">
								<view v-if="item.isMy!=='1'">*******</view>
								<view v-if="item.isMy=='1'">{{item.price}}</view>
								<view class="mg-t24">{{item.offerTime}}</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
		</view>
			
		<!-- 我的报价记录 -->
		<view class="binding-ranking" v-if="bindingVuexCheckeddata.titletext==='物流已报价'">
			<view class="binding-ranking-title">
				我的报价记录
			</view>
			<!-- 具体的报价记录 -->
			<view class="binding-record" v-if="myBindingData">
				<view class="binding-record-item">
					<text class="gray">价格(USD)</text>
					<text class="mg15">:</text>
					<text class="gray">{{myBindingData.price}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">有效期</text>
					<text class="mg15">:</text>
					<text class="gray">{{myBindingData.expiredDate}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">船公司</text>
					<text class="mg15">:</text>
					<text class="gray">{{myBindingData.shippingName}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">船期</text>
					<text class="mg15">:</text>
					<text class="gray">{{"周"+myBindingData.schedule}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">转运方式</text>
					<text class="mg15">:</text>
					<text class="gray">{{myBindingData.transferMethod}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">航程</text>
					<text class="mg15">:</text>
					<text class="gray">{{myBindingData.voyage}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">价格趋势</text>
					<text class="mg15">:</text>
					<text class="gray">{{myBindingData.pricetrendType}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">趋势说明</text>
					<text class="mg15">:</text>
					<text class="gray">{{myBindingData.pricetrendRemark}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">备注</text>
					<text class="mg15">:</text>
					<text class="gray">{{myBindingData.remark}}</text>
				</view>
			</view>
		</view>
		
		<view class="binding-info_oneline" v-if="bindingVuexCheckeddata.titletext==='物流待报价'">
			<u-row gutter="16">
				<u-col span="6">
					<u-button type="error" plain @click="giveupbidding">放弃报价</u-button>
				</u-col>
				<u-col span="6">
					<u-button type="error" @click="modalOpen">我要竞价</u-button>
				</u-col>
			</u-row>
		</view>
		
		<!-- 物流报价模态框 -->
		<u-modal v-model="logisticQuotationFormShow" :show-title="false" :show-confirm-button="false" z-index="10000">
			<view class="inquiryModal_content">
				<u-form :model="logisticQuotationForm" ref="iForm3" :label-width="145">
					<u-form-item label="价格" prop="price">
						<u-input v-model="logisticQuotationForm.price" placeholder="请输入价格" />
					</u-form-item>
					<u-form-item label="开始时间" prop="startDate">
						<u-input v-model="logisticQuotationForm.startDate" type="select" @click="showValidityStart" placeholder="请输入开始时间" />
					</u-form-item>
					<u-form-item label="结束时间" prop="expiredDate">
						<u-input v-model="logisticQuotationForm.expiredDate" type="select" @click="showValidityEnd" placeholder="请输入结束时间" />
					</u-form-item>
					<u-form-item label="船公司" prop="shippingName">
						<u-input v-model="logisticQuotationForm.shippingName" placeholder="请输入船公司" />
					</u-form-item>
					<u-form-item label="船期" prop="schedule">
						<!-- <u-input v-model="logisticQuotationForm.schedule" placeholder="请输入船期" /> -->
						<u-checkbox-group @change="checkboxGroupChange">
							<u-checkbox v-model="item.checked" v-for="(item, index) in checkscheduleList" :key="index" :name="item.name">
								{{ item.name }}
							</u-checkbox>
						</u-checkbox-group>
					</u-form-item>
					<u-form-item label="转运方式" prop="transferMethod">
						<u-input v-model="logisticQuotationForm.transferMethodValue" type="select" @click="showTransferMethod"
						 placeholder="请输入转运方式" />
					</u-form-item>
					<u-form-item label="航程" prop="voyage">
						<u-input v-model="logisticQuotationForm.voyage" placeholder="请输入航程" />
					</u-form-item>
					<u-form-item label="鉴定书" prop="appraisalCertificate">
						<u-input v-model="logisticQuotationForm.appraisalCertificateValue" type="select" @click="showAppraisalCertificate"
						 placeholder="是否有鉴定书" />
					</u-form-item>
					<u-form-item label="价格趋势" prop="trend">
						<u-input v-model="logisticQuotationForm.trendValue" type="select" @click="showTrendSelect" placeholder="请选择价格趋势" />
					</u-form-item>
					<u-form-item label="趋势说明" placeholder="请输入趋势说明">
						<u-input v-model="logisticQuotationForm.explain" />
					</u-form-item>
					<u-form-item label="备注" placeholder="请输入备注">
						<u-input v-model="logisticQuotationForm.remark" />
					</u-form-item>
					<view class="btn-area">
						<u-row gutter="16">
							<u-col span="6">
								<u-button type="error" plain @click="giveuptoLogisticQuotation">取消</u-button>
							</u-col>
							<u-col span="6">
								<u-button type="error" @click="logisticSubmitBidding(item)">提交报价</u-button>
							</u-col>
						</u-row>
					</view>
				</u-form>
			</view>
		</u-modal>
		<!-- 放弃报价模态框 -->
		<u-modal v-model="giveupbiddingShow" :show-title="false" :show-cancel-button="true" @confirm="sureGiveupBidding"
		 confirm-text="确认放弃" confirm-color="#D0021B" class="giveupbiddingModal">
			<view class="giveupbiddingModal_oneline">确定放弃报价？</view>
		</u-modal>
		<!-- 时间选择(开始) -->
		<u-picker v-model="dateTimeStart" mode="time" :params="paramsLogistic" :defaultTime="defaultTime" @confirm="confirmTimeStart"></u-picker>
		<!-- 时间选择(结束时间) -->
		<u-picker v-model="dateTimeEnd" mode="time" :params="paramsLogistic" :defaultTime="defaultTime" @confirm="confirmTimeEnd"></u-picker>
		<!-- 价格趋势下拉框 -->
		<u-select v-model="selectPriceTrendShow" :list="selectPriceTrendList" @confirm="confirmPriceTrend"></u-select>
		<!-- 报价中转下拉框 -->
		<u-select v-model="selectTransferMethodShow" :list="selectTransferMethodList" @confirm="confirmTransferMethod"></u-select>
		<!-- 报价鉴定书下拉框 -->
		<u-select v-model="selectAppraisalCertificateShow" :list="selectAppraisalCertificateList" @confirm="confirmAppraisalCertificate"></u-select>
		<!-- toast -->
		<u-toast ref="toast" position="top" />
	</view>
</template>

<script>
	import fetch from '../../utils/fetch.js'
	export default {
		data() {
			return {
				//竞价模态框是否显示
				logisticQuotationFormShow: false,
				remark: "",
				//是已报价还是未报价 已报价true 未报价false
				quotedPrice: true,
				//从上一个页面拿到的数据
				bindingVuexCheckeddata: this.$store.state.checkedData,
				bindingData: {},
				//我的报价记录
				myBindingData:'',
				//物流报价模态框
				logisticQuotationForm: {
					// 价格
					price: "",
					//开始时间
					startDate: "",
					// 有效期（结束时间）
					expiredDate: "",
					// 船公司
					shippingName: "",
					// 船期
					schedule: "",
					// 转运方式
					transferMethod: "",
					// 航程
					voyage: "",
					//价格趋势
					trend: "",
					// 鉴定书
					appraisalCertificate: "",
					// 趋势说明
					explain: "",
					// 备注
					remark: "",
					appraisalCertificateValue: "",
					trendValue: "",
					appraisalCertificateValue: ""
				},
				rules3: {
					price: [{
						trigger: ['blur', 'change'],
						required: true,
						validator: (rule, value, callback) => {
							let reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/
							if (!reg.test(value)) {
								callback(new Error('请输入准确的价格'))
							} else {
								callback()
							}
							return
						}
					}],
					startDate: [{
						required: true,
						message: '请选择开始时间',
						trigger: ['change']
					}],
					expiredDate: [{
							required: true,
							message: '请选择结束时间',
							trigger: ['change']
						},
						{
							// 结束时间大于开始时间
							validator: (rule, value, callback) => {
								return new Date(value) > new Date(this.logisticQuotationForm.startDate)
							},
							message: '结束时间要大于开始时间',
							trigger: ['change'],
						}
					],
					shippingName: [{
						required: true,
						message: '请填写船公司',
						trigger: ['change', 'blur'],
					}],
					schedule: [{
						required: true,
						message: '请选择船期',
						schedule: ['change'],
					}],
					transferMethod: [{
						required: true,
						message: '请选择转运方式',
						trigger: ['change']
					}],
					appraisalCertificate: [{
						required: true,
						message: '请选择是否有鉴定书',
						trigger: ['change']
					}],
					voyage: [{
							required: true,
							message: '请填写航程',
							trigger: ['change', 'blur'],
						},
						{
							pattern: /^(0|[1-9][0-9]*)(\.\d+)?$/,
							message: '请输入准确的数字',
							trigger: ['change', 'blur']
						}
					],
					trend: [{
						required: true,
						message: '请选择价格趋势',
						schedule: ['change'],
					}],
				},
				// 物流报价中转
				selectTransferMethodShow: false,
				selectTransferMethodList: [{
						value: "1",
						label: "中转",
					},
					{
						value: "2",
						label: "直达",
					},
				],
				// 物流报价鉴定书
				selectAppraisalCertificateShow: false,
				selectAppraisalCertificateList: [{
						value: "0",
						label: "否",
					},
					{
						value: "1",
						label: "是",
					},
				],
				//价格趋势
				selectPriceTrendShow: false,
				selectPriceTrendList: [{
						value: "0",
						label: "上升",
					},
					{
						value: "1",
						label: "平稳",
					},
					{
						value: "2",
						label: "下降",
					},
				],
				checkscheduleList: [{
						name: '周一',
						checked: false,
					},
					{
						name: '周二',
						checked: false,
					},
					{
						name: '周三',
						checked: false,
					},
					{
						name: '周四',
						checked: false,
					},
					{
						name: '周五',
						checked: false,
					},
					{
						name: '周六',
						checked: false,
					},
					{
						name: '周日',
						checked: false,
					},
				],
				//物流时间选择器配置
				paramsLogistic: {
					year: true,
					month: true,
					day: true
				},
				//开始时间的选择器
				dateTimeStart: false,
				//结束时间的选择器
				dateTimeEnd: false,
				//放弃模态框是否显示
				giveupbiddingShow: false,
			}
		},

		created() {
			this.getDetails()
		},
		onReady() {
			this.$refs.iForm3.setRules(this.rules3)
		},

		methods: {
			//拿到详细信息
			async getDetails() {
				let data = {}
				this.myBindingData=''
				if (this.bindingVuexCheckeddata.titletext === "物流待报价"||this.bindingVuexCheckeddata.status === "物流已报价实盘询价") {
					data = {
						accessToken: uni.getStorageSync('accessToken'),
						actionType: "details",
						dataType: 'ungeneral',
						bidId: this.bindingVuexCheckeddata.bidId
					}
				} else {
					data = {
						accessToken: uni.getStorageSync('accessToken'),
						actionType: "details",
						dataType: 'general',
						inaploId: this.bindingVuexCheckeddata.inaploId,
						inaplosuppId: this.bindingVuexCheckeddata.inaplosuppId
					}
				}
				let res = await fetch(this.api.v2.logisticssupplier, {
					method: "get",
					data
				})
				if (res.data.code === '0') {
					this.bindingData = res.data.data
					if(this.bindingVuexCheckeddata.titletext==='物流已报价'){
						if(this.bindingData.logisticsbidsupplierVos&&this.bindingData.logisticsbidsupplierVos.length>0){
							for(let i=0;i<this.bindingData.logisticsbidsupplierVos.length;i++){
								if(this.bindingData.logisticsbidsupplierVos[i].isMy=='1'){
									this.myBindingData=this.bindingData.logisticsbidsupplierVos[i]
									break;
								}
							}
							
						}
						
					}
				}
			},
			//点击打开竞价模态框
			modalOpen() {
				this.logisticQuotationFormShow = true
			},
			//询盘打开选开始时间
			showValidityStart() {
				this.dateTimeStart = true
			},
			//询盘打开选开始时间
			showValidityEnd() {
				this.dateTimeEnd = true
			},
			//确认开始时间
			confirmTimeStart(e) {
				this.logisticQuotationForm.startDate = `${e.year}-${e.month}-${e.day}`
			},
			//确认结束时间
			confirmTimeEnd(e) {
				this.logisticQuotationForm.expiredDate = `${e.year}-${e.month}-${e.day}`
			},
			//点击打开价格趋势下拉框
			showTrendSelect() {
				this.selectPriceTrendShow = true;
			},
			//点击打开鉴定书下拉框
			showAppraisalCertificate() {
				this.selectAppraisalCertificateShow = true;
			},
			//点击打开直达中转拉框
			showTransferMethod() {
				this.selectTransferMethodShow = true;
			},
			//确认中转方式
			confirmTransferMethod(e) {
				this.logisticQuotationForm.transferMethodValue = e[0].label
				this.logisticQuotationForm.transferMethod = e[0].value
			},
			//确认有无鉴定书
			confirmAppraisalCertificate(e) {
				this.logisticQuotationForm.appraisalCertificate = e[0].value
				this.logisticQuotationForm.appraisalCertificateValue = e[0].label
			},
			//确认价格趋势
			confirmPriceTrend(e) {
				this.logisticQuotationForm.trend = e[0].value
				this.logisticQuotationForm.trendValue = e[0].label
			},
			//船期多选框
			checkboxGroupChange(e) {
				let tempArr = []
				if (e.length > 0) {
					if (e.includes('周一')) tempArr.push(1)
					if (e.includes('周二')) tempArr.push(2)
					if (e.includes('周三')) tempArr.push(3)
					if (e.includes('周四')) tempArr.push(4)
					if (e.includes('周五')) tempArr.push(5)
					if (e.includes('周六')) tempArr.push(6)
					if (e.includes('周日')) tempArr.push(7)
				}
				let tempStr = tempArr.join(',')
				this.logisticQuotationForm.schedule = tempStr
			},
			//物流模态框提价报价
			logisticSubmitBidding() {
				this.$refs.iForm3.validate(async valid => {
					if (valid) {
						let res = await fetch(this.api.v2.logisticsBidQuotation, {
							method: "post",
							data: {
								accessToken: uni.getStorageSync('accessToken'),
								type: "real",
								list: [{
									bidId: this.bindingVuexCheckeddata.bidId,
									custId:this.bindingVuexCheckeddata.custId,
									//价格
									price: this.logisticQuotationForm.price && Number(this.logisticQuotationForm.price),
									//开始时间
									startDate: this.logisticQuotationForm.startDate + " " + "00:00:00",
									//有效期(结束时间)
									expiredDate: this.logisticQuotationForm.expiredDate + " " + "23:59:59",
									//船公司
									shippingName: this.logisticQuotationForm.shippingName,
									//船期
									schedule: this.logisticQuotationForm.schedule,
									//转运方式
									transferMethod: this.logisticQuotationForm.transferMethod && Number(this.logisticQuotationForm.transferMethod),
									//航程
									voyage: this.logisticQuotationForm.voyage && Number(this.logisticQuotationForm.voyage),
									//鉴定书
									isCertificate: this.logisticQuotationForm.appraisalCertificate & Number(this.logisticQuotationForm.appraisalCertificate),
									//价格趋势
									priceTrendType: this.logisticQuotationForm.trend & Number(this.logisticQuotationForm.trend),
									//趋势说明
									priceTrendRemark: this.logisticQuotationForm.explain,
									// 备注
									remark: this.logisticQuotationForm.remark,
								}]
							}
						})
						if (res.data.code === '0') {
							this.$refs.toast.show({
								title: '提交报价成功',
								type: 'success',
								position: 'top'
							})
						} else {
							this.$refs.toast.show({
								title: '提交报价失败',
								type: 'error',
								position: 'top'
							})
						}
						this.resetLogisticQuotationForm()
						this.logisticQuotationFormShow = false
					}
				})
			},
			
			//点击放弃竞价出的弹框
			giveupbidding() {
				this.giveupbiddingShow = true;
			},
			
			//确认放弃报价
			async sureGiveupBidding() {
				let res = await fetch(this.api.v2.giveUpLogisticsBid, {
					method: "post",
					data: {
						accessToken: uni.getStorageSync('accessToken'),
						type: "real" ,
						bidId: this.bindingVuexCheckeddata.bidId,
						custId: this.bindingVuexCheckeddata.custId
					}
				})
				
				if (res.data.code === '0') {
					this.$refs.toast.show({
						title: '放弃报价成功',
						type: 'success',
						position: 'top'
					})
					this.logicInquiryList()
				} else {
					this.$refs.toast.show({
						title: '放弃报价失败',
						type: 'error',
						position: 'top'
					})
				}
			},
			//重置报价模态框
			resetLogisticQuotationForm() {
				this.logisticQuotationForm = {
					// 价格
					price: "",
					// 开始时间
					startDate: "",
					// 有效期(结束时间)
					expiredDate: "",
					// 船公司
					shippingName: "",
					// 船期
					schedule: "",
					// 转运方式
					transferMethod: "",
					// 航程
					voyage: "",
					//价格趋势
					trend: "",
					// 鉴定书
					appraisalCertificate: "",
					// 趋势说明
					explain: "",
					// 备注
					remark: "",
					appraisalCertificateValue: "",
					trendValue: "",
					appraisalCertificateValue: ""
				}
				this.$refs['iForm3'].resetFields();
			},
		},
		watch: {
			'$store.state.checkData': {
				deep: true,
				immediate: true,
				handler() {
					wx.setNavigationBarTitle({
						title: '实盘询价'
					})
				}

			}
		},
		computed:{
			showTag() {
				return function(item) {
					return item.moduleCode === 'PC007' ? '实盘' :  "常规"
				}
			},
			//报价状态
			showTagState() {
				return function(item) {
					return item.state === 1 ? '已报价' : item.state === 3 ? "已放弃" : item.state === 4 ? '已结束' : '未报价'
				}
			},
			//是否中标
			showTagIsoutbid() {
				return function(item) {
					if(item.isoutbid === 1){
						return '已中标'
					}else if(item.isoutbid === 0){
						return '未中标'
					}else{
						return ''
					}
					
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.firmOfferInquiry {
		background-color: #f9f9f9;
		margin-bottom: 30rpx;

		// 竞价信息
		.binding-info {
			background-color: #fff;
			padding: 24rpx;
			position: relative;

			.isWinBidding {
				position: absolute;
				top: 0;
				left: 80%;
				width: 120rpx;
				height: 50rpx;
				text-align: center;
				line-height: 48rpx;
				border-bottom-left-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
				font-size: 24rpx;
			}

			.binding-info_oneline_title {
				margin-top: 40rpx;
				margin-left: 10rpx;
				text-align: center;
				display: flex;

			}

			.binding-info_oneline {
				margin-bottom: 25rpx;

				.firsttext {
					font-size: 24rpx;
					line-height: 50rpx;
				}

				.secondtext {
					font-weight: 700;
					font-size: 32rpx;
					margin: 0 10rpx;
				}

				.thirdtext {
					line-height: 20rpx;
				}

				.fourthtext {
					font-weight: 700;
					font-size: 32rpx;
					margin: 0 10rpx;
				}

				.fifthtext {
					font-size: 24rpx;
					line-height: 50rpx;

				}

				.bidding_name {
					font-weight: 700;
				}

				.bidding_sign {
					padding: 6rpx 14rpx;
					background-color: #D0021B;
					border-radius: 14rpx;
					color: #fff;
					font-size: 24rpx;
					margin-left:20rpx;
				}
			}
		}

		//竞价排名
		.binding-ranking {
			margin-top: 20rpx;
			background-color: #fff;
			padding: 0 30rpx;

			.binding-ranking-title {
				height: 66rpx;
				line-height: 66rpx;
			}

			//具体的报价记录
			.binding-record {
				.binding-record-item{
					padding: 20rpx 0;
				}
				.binding-record_item {
					padding: 20rpx 30rpx;
					border: 2rpx solid #d9d9d9;
					border-radius: 20rpx;
					margin-bottom: 25rpx;

					.binding-record_item_sort {
						marigin-top: 22rpx;
						border: 6rpx solid #D0021B;
						width: 72rpx;
						height: 72rpx;
						border-radius: 50%;
						text-align: center;
						line-height: 72rpx;
						color: #D0021B;
						font-weight: 700;
						font-size: 32rpx;
					}
				}
			}
		}

		//竞价模态框
		.slot-content {
			padding: 30rpx;

			.slot-content_oneline {
				height: 84rpx;
				line-height: 84rpx;
				border-bottom: 2rpx solid #f8f8f8;
			}

			.remark {
				height: 84rpx;
				line-height: 84rpx;
				overflow: hidden;
			}
		}
		
		// 竞价模态框
		.inquiryModal_content {
			padding: 20rpx;
		
			.btn-area {
				margin-top: 20rpx;
			}
		}
		//放弃报价模态框
		.giveupbiddingModal {
			.giveupbiddingModal_oneline {
				text-align: center;
				margin: 20rpx 0;
			}
		}
	}
</style>
