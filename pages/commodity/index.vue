<template>
	<!-- 商品（没有点批量报价的商品） -->
	<view class="commodity">
		<!-- 输入框 -->
		<view class="inp_area">
			<!-- 全选 -->
			<view class="allChoose">
				<u-checkbox v-model="allChecked" :active-color='activeColor' @change="checkboxAllChange">
					<text class="allChoose_text">全选</text>
				</u-checkbox>
			</view>
			<u-field v-model="name" placeholder="请输入产品编号或名称" label-width="0" class="ufield" :border-bottom="false">
			</u-field>
			<u-button @click="checkedAll" type="error" size='mini' class="search_btn">搜索</u-button>
		</view>
		<view class="commodity_list_tips" @click="toSoonExpire">您有{{day3AfterList.length}}个产品价格将在3天之后过期</view>

		<!-- 商品列表 -->
		<view class="commodity_list">
			<u-checkbox-group :wrap="true" :active-color='activeColor'>
				<u-checkbox @change="checkboxOneChange" v-model="item.checked" v-for="(item, index) in list" :key="item.id" :name="item.name">
					<view class="checkbox_view">
						<view class="checkbox_view_oneline">
							<text :class="{checkbox_view_name:true,gray:item.isGray}">{{item.spuName}}</text>
							<text class="mg15">:</text>
							<text :class="{gray:item.isGray,deepgray:!item.isGray}">{{item.brand}}</text>
						</view>

						<view class="checkbox_view_oneline">
							<text :class="{gray:item.isGray,deepgray:!item.isGray}">规格</text>
							<text class="mg15">:</text>
							<text :class="{gray:item.isGray,deepgray:!item.isGray}">{{item.spuSpec}}</text>
						</view>

						<view class="checkbox_view_oneline">
							<text :class="{gray:item.isGray,deepgray:!item.isGray}">最新报价(USD)</text>
							<text class="mg15">:</text>
							<text :class="{gray:item.isGray,deepgray:!item.isGray}">{{item.bidAmount?item.bidAmount:"未报价"}}</text>
							<u-tag text="已失效" type="info" class="utag" v-if="item.isGray" />
							<u-tag text="三天后到期" type="error" plain class="utag" v-if="item.day3After" />
						</view>
						<view class="checkbox_view_oneline">
							<text :class="{gray:item.isGray,deepgray:!item.isGray}">有效期</text>
							<text class="mg15">:</text>
							<text :class="{gray:item.isGray,deepgray:!item.isGray}">{{item.expiredDate||'NA'}}</text>
						</view>
						<view class="checkbox_view_oneline" v-if="!item.checked">
							<u-button type="error" size="mini" class="checkbox_view_oneline_btn" plain @click.stop="showInquiryModal(item)">更新报价</u-button>
						</view>

						<view class="price_change" v-if="item.checked">
							<text class="gray pricetext">价格</text>
							<text class="mg15"></text>
							<u-input class="ufield" :label-width="0" v-model.number="item.price" @click.stop placeholder=" "></u-input>
							<text class="mg15"></text>
							<text v-if="item.currency==='USD'">USD</text>
							<text v-if="item.currency==='CNY'">CNY</text>
							<text class="mg15"></text>
							<text class="change" @click.stop="changeCurrency(item)">切换</text>
						</view>
					</view>
				</u-checkbox>
			</u-checkbox-group>
		</view>

		<!-- 底部批量报价区域 -->
		<view class="quotation_area" v-if="checkedNum>0">
			<view class="quotation_area_oneline">
				<view class="quotation_area_oneline_item">
					<view class="text">有效期</view>
					<u-input :border-bottom="true" class="ufield" type="select" @click="showValidity" :label-width="0" :clearable="false"
					 v-model="inquiryForm.validity" placeholder=" "></u-input>
				</view>
				<view class="quotation_area_oneline_item">
					<view class="text">交货天数</view>
					<u-field :border-bottom="true" class="ufield" :label-width="0" :clearable="false" v-model="inquiryForm.day"></u-field>
				</view>
			</view>
			<view class="quotation_area_oneline">
				<view class="quotation_area_oneline_item">
					<view class="text">价格趋势</view>
					<u-input type="select" @click="showTrendSelect" placeholder="请选择价格趋势" v-model="inquiryForm.trend" />
				</view>
				<view class="quotation_area_oneline_item">
					<view class="text">趋势说明</view>
					<u-field :border-bottom="true" class="ufield" :label-width="0" :clearable="false" v-model="inquiryForm.explain"></u-field>
				</view>
			</view>
			<view class="quotation_area_oneline btnarea">
				<u-button type="error" class="btn" @click="submitSomeBidding">批量报价</u-button>
			</view>
		</view>

		<!-- 询盘模态框 -->
		<u-modal v-model="inquiryShow" :show-title="false" :show-confirm-button="false">
			<view class="inquiryModal_content">
				<u-form :model="inquiryForm" ref="iForm1" :label-width="145">
					<u-form-item label="币种" prop="currency">
						<u-input v-model="inquiryForm.currency" type="select" @click="showCurrencySelect" placeholder="请选择币种" />
					</u-form-item>
					<u-form-item label="价格" prop="price" v-if="inquiryForm.currency!=='USD'">
						<u-input v-model="inquiryForm.price" placeholder="请输入价格" />
					</u-form-item>
					<view class="red" v-if="inquiryForm.currency==='CNY'&&inquiryForm.price===''">请填写含税含运费价格</view>
					<u-form-item label="美元价格" prop="price" v-if="inquiryForm.currency==='USD'">
						<u-input v-model="inquiryForm.price" placeholder="请输入美元价格" />
					</u-form-item>
					<u-form-item label="有效期" prop="validity">
						<u-input v-model="inquiryForm.validity" type="select" @click="showValidity" placeholder="请输入有效期" />
					</u-form-item>
					<u-form-item label="交货天数" prop="day">
						<u-input v-model="inquiryForm.day" placeholder="请输入交货天数" />
					</u-form-item>
					<u-form-item label="价格趋势">
						<u-input v-model="inquiryForm.trend" type="select" @click="showTrendSelect" placeholder="请选择价格趋势" />
					</u-form-item>
					<u-form-item label="趋势说明" placeholder="请输入趋势说明">
						<u-input v-model="inquiryForm.explain" />
					</u-form-item>
					<u-form-item label="备注" placeholder="请输入备注">
						<u-input v-model="inquiryForm.remark" />
					</u-form-item>
					<view class="btn-area">
						<u-row gutter="16">
							<u-col span="6">
								<u-button type="error" plain @click="showInquiryModalCancel">取消</u-button>
							</u-col>
							<u-col span="6">
								<u-button type="error" @click="submitBidding">提交报价</u-button>
							</u-col>
						</u-row>
					</view>
				</u-form>
			</view>
		</u-modal>
		<!-- 价格趋势下拉框 -->
		<u-select v-model="selectPriceTrendShow" :list="selectPriceTrendList" @confirm="confirmPriceTrend"></u-select>
		<!-- 报价币种下拉框 -->
		<u-select v-model="selectTypesCurrencyShow" :list="selectTypesCurrencyList" @confirm="confirmCurrency"></u-select>
		<!-- 时间选择 -->
		<u-picker v-model="dateTime" mode="time" :params="params" :defaultTime="defaultTime" @confirm="confirmTime"></u-picker>
		<!-- toast -->
		<u-toast ref="toast" position="top" />
		<!-- 底部导航 -->
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	import Tabbar from '../../my_common_components/Tabbar.vue'
	import fetch from '../../utils/fetch.js'
	import moment from 'moment'
	export default {
		components: {
			Tabbar
		},

		data() {
			return {
				name: "",
				//默认checkbox选中颜色
				activeColor: "#D0021B",
				//选中个数
				checkedNum: 0,
				//全选
				allChecked: false,
				//三天后过期的时间戳
				day3After: (new Date(new Date(new Date().toLocaleDateString()).getTime() + 3 * 24 * 60 * 60 * 1000 - 1)).valueOf(),
				//所有数据
				list: [],
				//询盘模态框是否显示
				inquiryShow: false,
				// 报价表格
				inquiryForm: {
					//币种
					currency: "",
					//价格
					price: "",
					//有效期
					validity: "",
					//交货天数
					day: "",
					//价格趋势
					trend: "",
					pricetrendValue: "",
					//趋势说明
					explain: "",
					//备注
					remark: "",
				},
				//校验规则
				rules1: {
					currency: [{
						required: true,
						message: '请选择币种',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],

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
					validity: [{
						required: true,
						message: '请选择有效期',
						trigger: ['change']
					}],

					day: [{
						required: true,
						type: 'number',
						message: '请填写正确的交货天数',
						trigger: ['change']
					}]
				},
				selectPriceTrendShow: false,
				selectPriceTrendList: [{
						value: "1",
						label: "上升",
					},
					{
						value: "2",
						label: "平稳",
					},
					{
						value: "3",
						label: "下降",
					},
				],
				// 报价币种
				selectTypesCurrencyShow: false,
				selectTypesCurrencyList: [{
						value: "1",
						label: "CNY",
					},
					{
						value: "2",
						label: "USD",
					},
				],
				//时间选择器
				dateTime: false,
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true
				},
				defaultTime: moment().format('YYYY-MM-DD HH:mm:ss'),
				commodityInfo: {
					spuId: "",
					spuName: "",
					skuId: "",
					spuSpec: "",
					unit: "",
				},
				//选中数据所组成的数组
				checkedList: []
			}
		},

		created() {
			this.getSupplierProduct()
		},
		onReady() {
			this.$refs.iForm1.setRules(this.rules1)
		},
		methods: {
			//获取商品列表
			async getSupplierProduct() {
				let res = await fetch(this.api.v2.supplier_product, {
					method: "get",
					data: {
						accessToken: uni.getStorageSync('accessToken'),
						keyword: this.name
					}
				})

				if (res.data.code === '0') {
					this.list = res.data.data
					if (this.list.length > 0) {
						this.list.forEach((item, index) => {
							item.checked = false
							item.down = false
							item.name = index
							item.id = index
							item.currency = 'CNY'
							item.isGray = new Date(item.expiredDate).getTime() < (+new Date())
							item.day3After = ((new Date()).valueOf() < new Date(item.expiredDate).getTime()) && (new Date(item.expiredDate)
								.getTime() < this.day3After)
						})
					}
				}
			},
			// 全选
			checkboxAllChange() {
				this.allChecked ?
					this.list.map((val) => {
						val.checked = true;
					}) :
					this.list.map((val) => {
						val.checked = false;
					});
				this.checkedNum = this.list.filter((val) => val.checked).length
				this.checkedList = this.list.filter((val) => val.checked)
				this.$forceUpdate()
			},

			//单选
			checkboxOneChange(e) {
				this.allChecked = (this.list.length === this.list.filter(val => val.checked).length)
				this.checkedNum = this.list.filter((val) => val.checked).length
				this.checkedList = this.list.filter((val) => val.checked)
				this.$forceUpdate()
			},

			//批量填写
			batchFilling() {
				uni.navigateTo({
					url: '../batchQuotation/index'
				});
			},

			//点击去过期页面
			toSoonExpire() {
				uni.setStorageSync('day3AfterList', this.day3AfterList)
				if(this.day3AfterList.length>0){
					uni.navigateTo({
						url: '../soonExpire/index'
					});
				}else{
					this.$refs.toast.show({
						title: '暂无3天内即将过期的商品',
						type: 'error',
						position: 'top'
					})
				}
				
			},

			//点击搜索
			checkedAll() {
				this.getSupplierProduct()
			},

			//切换币种
			changeCurrency(item) {
				if (item.currency === 'USD') {
					item.currency = 'CNY'
					this.$forceUpdate()
					return;
				}
				if (item.currency === 'CNY') {
					item.currency = 'USD'
					this.$forceUpdate()
					return;
				}
			},

			//点击取消 取消询盘弹窗显示
			showInquiryModalCancel() {
				this.resetInquiryForm()
				this.inquiryShow = false
			},

			//点击报价
			showInquiryModal(item) {
				this.resetInquiryForm()
				this.inquiryShow = true
				this.commodityInfo = {
					spuId: item.spuId,
					spuName: item.spuName,
					skuId: item.skuId,
					spuSpec: item.spuSpec,
					unit: item.unit,
				}
			},

			//提交报价
			async submitBidding() {
				this.$refs.iForm1.validate(async valid => {
					if (valid) {
						let res = await fetch(this.api.v2.submitProduct, {
							method: "post",
							data: {
								accessToken: uni.getStorageSync('accessToken'),
								list: [{
									cur: this.inquiryForm.currency,
									price: this.inquiryForm.price,
									deliveryDay: this.inquiryForm.day,
									expiredDate: this.inquiryForm.validity,
									spuId: this.commodityInfo.spuId,
									spuName: this.commodityInfo.spuName,
									skuId: this.commodityInfo.skuId,
									spuSpec: this.commodityInfo.spuSpec,
									unit: this.commodityInfo.unit
								}]
							}
						})

						this.inquiryShow = false
						if (res.data.code === '0') {
							this.$refs.toast.show({
								title: '提交报价成功',
								type: 'success',
								position: 'top'
							})
							this.getSupplierProduct()
						} else {
							this.$refs.toast.show({
								title: '提交报价失败',
								type: 'error',
								position: 'top'
							})
						}
					}
				})
			},

			//重置报价模态框
			resetInquiryForm() {
				this.inquiryForm = {
					//币种
					currency: "",
					//价格
					price: "",
					//有效期
					validity: "",
					//交货天数
					day: "",
					//价格趋势
					trend: "",
					pricetrendValue: "",
					//趋势说明
					explain: "",
					//备注
					remark: "",
				}
				this.$refs['iForm1'].resetFields();
			},
			//点击打开价格趋势下拉框
			showTrendSelect() {
				this.selectPriceTrendShow = true;
			},
			//确认价格趋势
			confirmPriceTrend(e) {
				this.inquiryForm.trend = e[0].label
				this.inquiryForm.pricetrendValue = e[0].value
			},
			//点击打开币种拉框
			showCurrencySelect() {
				this.selectTypesCurrencyShow = true;
			},
			//确认币种
			confirmCurrency(e) {
				this.inquiryForm.currency = e[0].label
			},
			//确认价格趋势
			confirmPriceTrend(e) {
				this.inquiryForm.trend = e[0].label
				this.inquiryForm.pricetrendValue = e[0].value
			},
			//询盘确实时间
			confirmTime(e) {
				this.inquiryForm.validity = `${e.year}-${e.month}-${e.day} ${e.hour}:${e.minute}`
			},
			//询盘打开选时间
			showValidity() {
				this.dateTime = true
			},

			//批量报价
			async submitSomeBidding() {
				let tempArr = []
				this.checkedList.forEach(item => {
					let obj = {
						cur: item.currency,
						price: item.price,
						deliveryDay: this.inquiryForm.day,
						expiredDate: this.inquiryForm.validity,
						spuId: item.spuId,
						spuName: item.spuName,
						skuId: item.skuId,
						spuSpec: item.spuSpec,
						unit: item.unit
					}
					tempArr.push(obj)
				})
				let res = await fetch(this.api.v2.submitProduct, {
					method: "post",
					data: {
						accessToken: uni.getStorageSync('accessToken'),
						list: tempArr
					}
				})

				if (res.data.code === '0') {
					this.$refs.toast.show({
						title: '提交报价成功',
						type: 'success',
						position: 'top'
					})
					this.getSupplierProduct()
				} else {
					this.$refs.toast.show({
						title: '提交报价失败',
						type: 'error',
						position: 'top'
					})
				}
			}
		},
		computed: {
			//三天后就过期的数据
			day3AfterList() {
				return this.list.filter(item => {
					return ((new Date()).valueOf() < new Date(item.expiredDate).getTime()) && (new Date(item.expiredDate).getTime() <
						this.day3After)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	//公共样式
	.gray {
		color: #c9c9c9 !important;
	}

	.deepgray {
		color: #868686 !important;
	}

	.red {
		color: #d0021b !important;
	}

	.commodity {
		.inp_area {
			padding: 0 30rpx 0 10rpx;
			display: flex;

			.allChoose {
				padding-left: 30rpx;
				align-self: center;
				padding-top: 2rpx;
			}

			.search_btn {
				// float: right;
				align-self: center;
			}

			.ufield {
				flex: 1
			}
		}

		.commodity_list_tips {
			background-color: #f2f2f2;
			height: 70rpx;
			color: #D0021B;
			text-align: center;
			line-height: 70rpx;
		}

		//商品列表
		.commodity_list {
			padding: 0 40rpx;

			/deep/ .u-checkbox {
				border-bottom: 2rpx solid #f6f6f6;
			}

			.checkbox_view {
				margin-left: 20rpx;
				padding: 25rpx 0;
				color: #868686;

				.checkbox_view_name {
					font-weight: 700;
					font-size: 32rpx;
					color: #666;
				}

				.utag {
					margin-left: 30rpx;
				}

				.checkbox_view_oneline {
					font-size: 24rpx;
				}

				.price_change {
					display: flex;

					/deep/ .u-input__input {
						min-height: 30px !important;
					}

					.pricetext {
						margin-left: 6rpx;
					}

					.ufield {
						flex: 1;
						border-bottom: 2rpx solid #ccc;
					}

					text {
						align-self: center;
					}

					.change {
						color: #00a6db;
					}
				}
			}
		}

		.btn {
			padding: 0 40rpx;
		}

		//底部批量报价区域
		.quotation_area {
			position: fixed;
			bottom: 165rpx;
			z-index: 999;
			border-top: 5rpx solid #f8f8f8;
			background-color: #fefefe;

			.quotation_area_oneline {
				padding: 0 20rpx;
				display: flex;

				.quotation_area_oneline_item {
					display: flex;
					width: 50%;

					/deep/.u-input__input {
						margin-top: 8rpx;
					}

					.ufield {
						// flex: 1;
					}

					.text {
						align-self: center;
						color: #868686;
					}
				}
			}

			.quotation_area_oneline.btnarea {
				margin-top: 20rpx;

				.btn {
					width: 100%;
				}
			}
		}

		// 报价模态框
		.inquiryModal_content {
			padding: 20rpx;

			.btn-area {
				margin-top: 20rpx;
			}
		}
	}
</style>
