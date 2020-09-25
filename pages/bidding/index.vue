<template>
	<!-- 产品供应商待报价页面(竞价模式) -->
	<view class="binding">
		<!-- 竞价信息 -->
		<view class="binding-info">
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<text class="bidding_name">{{bindingData.detail.spuName}}</text>
					<text class="mg15"></text>
					<text :class="{bidding_sign:true,redbg:showTag(bindingVuexCheckeddata)==='竞价',bluebg:showTag(bindingVuexCheckeddata)==='询盘',orangebg:showTag(bindingVuexCheckeddata)==='实单'}">{{showTag(bindingVuexCheckeddata)}}</text>
					<view :class="{isWinBidding:true,graybg:bindingVuexCheckeddata.statusDesc==='已放弃'||bindingVuexCheckeddata.statusDesc==='已结束',orangebg:showTag(bindingVuexCheckeddata)==='实单'&&bindingVuexCheckeddata.statusDesc!=='已放弃'&&bindingVuexCheckeddata.statusDesc!=='已结束',redbg:showTag(bindingVuexCheckeddata)==='竞价'&&bindingVuexCheckeddata.statusDesc!=='已放弃'&&bindingVuexCheckeddata.statusDesc!=='已结束',bluebg:showTag(bindingVuexCheckeddata)==='询盘'&&bindingVuexCheckeddata.statusDesc!=='已放弃'&&bindingVuexCheckeddata.statusDesc!=='已结束'}"
					 v-if="bindingVuexCheckeddata.status==='quotedPrice'">{{bindingVuexCheckeddata.statusDesc}}</view>
				</u-row>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">规格</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.detail.spuSpec}}</text>
					</u-col>
					<u-col span="5">
						<text class="gray">品牌</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.detail.brand}}</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">包装</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.detail.packageInfo}}</text>
					</u-col>
					<u-col span="5">
						<text class="gray">数量</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.detail.saleQty}}{{bindingData.detail.unit}}</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">标的价格(USD)</text>
						<text class="mg15">:</text>
						<text class="gray">1.5</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">当前出价(USD)</text>
						<text class="mg15">:</text>
						<text class="gray">1.63</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">{{bindingData.detail.shipPort}}---</text>
						<text class="gray">{{bindingData.detail.destinationPort}}</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="12">
						<text class="gray">期望5天交货</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="gray">询价单编号</text>
						<text class="mg15">:</text>
						<text class="gray">{{bindingData.detail.inquiryCode}}</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="12">
						<text class="gray">备注</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="12">
						<text class="gray">{{bindingData.detail.remarks}}</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="12">
						<text class="red">{{bindingData.detail.inquiryDeadline}}</text>
						<text class="mg15"></text>
						<text class="red">截止报价</text>
					</u-col>
				</u-row>
			</view>
		</view>

		<!-- 竞价排名 -->
		<view class="binding-ranking" v-if="showTag(bindingVuexCheckeddata)==='竞价'&&bindingVuexCheckeddata.statusDesc!=='已放弃'&&bindingVuexCheckeddata.statusDesc!=='已结束'">
			<view class="binding-ranking-title">
				全部供应商报价排名(价格从低到高)
			</view>
			<!-- 具体的报价记录 -->
			<view class="binding-record">
				<view class="binding-record_item" v-for="(item,index) in bindingData.rank" :key="index">
					<u-row gutter="16">
						<u-col span="2">
							<view class="binding-record_item_sort">
								{{item.owner?"我":index+1}}
							</view>
						</u-col>
						<u-col span="3">
							<view class="binding-record_item_content">
								<view>价格{{item.cur}}</view>
								<view class="mg-t24">日期</view>
							</view>
						</u-col>
						<u-col span="6">
							<view class="binding-record_item_info">
								<view>{{item.price}}</view>
								<view class="mg-t24">{{item.offeredDate|dateFilter }}</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
		</view>
		<!-- 我的报价记录 -->
		<view class="mybinding" v-if="bindingVuexCheckeddata.statusDesc!=='已放弃'&&bindingVuexCheckeddata.statusDesc!=='已结束'">
			<view class="mybinding-title">
				我的报价记录
			</view>
			<!-- 我的具体报价记录 -->
			<view class="mybinding-recode">
				<view class="mybinding-recode_item" v-for="(item,index) in bindingData.history" :key="index">
					<view class="mybinding-recode_item_count">
						<text>第{{index+1}}次报价</text>
						<text class="red" v-if="item.sortNumber">(剩余报价次数{{item.sortNumber}}次)</text>
					</view>
					<view class="mybinding-recode_item_price">
						<text>价格{{item.cur}}:{{item.price}}</text>
					</view>
					<view class="mybinding-recode_item_remark">
						<text>备注:{{item.backinfo?item.backinfo:''}}</text>
					</view>
					<view class="mybinding-recode_item_ball"></view>
				</view>
			</view>

			<view class="binding-info_oneline" v-if="bindingVuexCheckeddata.titletext==='竞价'">
				<u-row gutter="16">
					<u-col span="6">
						<u-button type="error" plain @click="giveupbidding">放弃报价</u-button>
					</u-col>
					<u-col span="6">
						<u-button type="error" @click="modalOpen">我要竞价</u-button>
					</u-col>
				</u-row>
			</view>
		</view>

		<!-- 竞价模态框 -->
		<u-modal v-model="binddingShow" :show-confirm-button="false" :show-title="false" :negative-top="500">
			<view class="inquiryModal_content">
				<u-form :model="inquiryForm" ref="iForm2" :label-width="165">
					<u-form-item label="价格(USD)*" prop="price">
						<u-input v-model="inquiryForm.price" placeholder="请输入价格" />
					</u-form-item>
					<u-form-item label="有效期" prop="validity">
						<u-input v-model="inquiryForm.validity" type="select" @click="showValidity" placeholder="请输入有效期" />
					</u-form-item>
					<u-form-item label="备注" placeholder="请输入备注">
						<u-input v-model="inquiryForm.remark" />
					</u-form-item>
					<view class="btn-area">
						<u-row gutter="16">
							<u-col span="6">
								<u-button type="error" plain @click="cancelBidding">取消</u-button>
							</u-col>
							<u-col span="6">
								<u-button type="error" @click="submitBidding2">提交报价</u-button>
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
			<view class="red giveupbiddingModal_oneline red">{{bindingData.detail.spuName}}</view>
		</u-modal>
		<!-- 时间选择 -->
		<u-picker v-model="dateTime" mode="time" :params="params" :defaultTime="defaultTime" @confirm="confirmTime"></u-picker>
		<!-- toast -->
		<u-toast ref="toast" position="top" />
	</view>
</template>

<script>
	import fetch from '../../utils/fetch.js'
	import '../../utils/filter.js'
	export default {
		data() {
			return {
				//竞价模态框是否显示
				binddingShow: false,
				remark: "",
				bindingData: {},
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

				rules2: {
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
					}]
				},
				//时间选择器
				dateTime: false,
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true
				},
				//放弃模态框是否显示
				giveupbiddingShow: false,
				//从上一个页面拿到的数据
				bindingVuexCheckeddata: this.$store.state.checkedData
			}
		},
		onReady() {
			this.$refs.iForm2.setRules(this.rules2);
		},
		created() {
			this.getBiddingData()
		},
		methods: {
			//拿到详细的数据
			async getBiddingData() {

				let inquiryCode = this.$store.state.checkedData.inquiryCode
				let res = await fetch(this.api.v2.inquiryDetail, {
					method: "get",
					data: {
						accessToken: uni.getStorageSync('accessToken'),
						inquiryCode: inquiryCode
					}
				})
				if (res.data.code === '0') {
					this.bindingData = res.data.data
				}
			},
			//点击打开竞价模态框
			modalOpen() {
				this.binddingShow = true
			},

			//取消关闭竞价模态框
			cancelBidding() {
				this.binddingShow = false
			},

			// 打开选时间
			showValidity() {
				this.dateTime = true
			},
			//报价确认时间
			confirmTime(e) {
				this.inquiryForm.validity = `${e.year}-${e.month}-${e.day} ${e.hour}:${e.minute}`
			},

			//点击放弃竞价出的弹框
			giveupbidding() {
				this.giveupbiddingShow = true;
			},

			//提交报价
			async submitBidding2() {
				let offerId = ''
				if (this.$store.state.checkedData.offerId.length > 0) {
					offerId = this.$store.state.checkedData.offerId[0]
				}

				this.$refs.iForm2.validate(async valid => {
					if (valid) {
						let res = await fetch(this.api.v2.submitQuotation, {
							method: "post",
							data: {
								accessToken: uni.getStorageSync('accessToken'),
								list: [{
									offerId,
									cur: 'USD',
									price: this.inquiryForm.price,
									deliveryDay: this.inquiryForm.day,
									expiredDate: this.inquiryForm.validity,
									pricetrend: this.inquiryForm.pricetrendValue,
									priceInfo: this.inquiryForm.explain,
									remarks: this.inquiryForm.remark
								}]
							}
						})

						this.inquiryShow = false
						this.binddingShow = false
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
					}
				})
			},

			//确认放弃报价
			async sureGiveupBidding() {
				let offerId = ''
				if (this.$store.state.checkedData.offerId.length > 0) {
					offerId = this.$store.state.checkedData.offerId[0]
				}
				let res = await fetch(this.api.v2.giveupOffer, {
					method: "post",
					data: {
						accessToken: uni.getStorageSync('accessToken'),
						offerId
					}
				})

				if (res.data.code === '0') {
					this.$refs.toast.show({
						title: '放弃报价成功',
						type: 'success',
						position: 'top'
					})
				} else {
					this.$refs.toast.show({
						title: '放弃报价失败',
						type: 'error',
						position: 'top'
					})
				}
			}
		},
		computed: {
			showTag() {
				return function(item) {
					return item.biddingMode === '是' ? '竞价' : item.inquiryType === "询盘询价" ? "询盘" : "实单"
				}
			}
		},
		watch: {
			'$store.state.checkData': {
				deep: true,
				immediate: true,
				handler() {
					wx.setNavigationBarTitle({
						title: this.bindingVuexCheckeddata.titletext
					})
				}

			}
		}
	}
</script>
<style lang="scss" scoped>
	.binding {
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
				left: 75%;
				width: 120rpx;
				height: 50rpx;
				text-align: center;
				line-height: 48rpx;
				border-bottom-left-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
				font-size: 24rpx;
			}

			.binding-info_oneline {
				margin-bottom: 25rpx;

				.bidding_name {
					font-weight: 700;
				}

				.bidding_sign {
					padding: 4rpx 14rpx;
					border-radius: 14rpx;
					font-size: 20rpx;
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

		//我的报价记录
		.mybinding {
			margin-top: 20rpx;
			background-color: #fff;
			padding: 0 30rpx;

			.mybinding-title {
				height: 66rpx;
				line-height: 66rpx;
			}

			//我的报价记录具体内容
			.mybinding-recode {
				.mybinding-recode_item {
					padding-left: 50rpx;
					border-left: 8rpx solid #c9c9c9;
					position: relative;

					>view {
						margin-bottom: 20rpx;
					}

					.mybinding-recode_item_price,
					.mybinding-recode_item_remark {
						color: #868686;
					}

					.mybinding-recode_item_remark {
						border-bottom: 2rpx solid #f8f8f8;
						padding-bottom: 25rpx;
					}

					.mybinding-recode_item_ball {
						width: 28rpx;
						height: 28rpx;
						background-color: #D0021B;
						border-radius: 50%;
						position: absolute;
						top: 50%;
						left: 0;
						transform: translate(-60%, -50%);
					}
				}

			}
		}

		//竞价模态框
		.inquiryModal_content {
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

		//放弃报价模态框
		.giveupbiddingModal {
			.giveupbiddingModal_oneline {
				text-align: center;
				margin: 20rpx 0;
			}
		}
	}
</style>
