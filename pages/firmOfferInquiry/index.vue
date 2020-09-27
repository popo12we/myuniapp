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
			</view>
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
		<view class="binding-ranking" v-if="bindingVuexCheckeddata.titletext==='物流待报价'">
			<view class="binding-ranking-title">
				我的报价记录
			</view>
			<!-- 具体的报价记录 -->
			<view class="binding-record" v-if="myBindingData.price">
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
		
		<!-- 我的报价记录 -->
		<view class="binding-ranking" v-if="bindingVuexCheckeddata.titletext==='物流已报价'">
			<view class="binding-ranking-title">
				我的报价记录
			</view>
			<!-- 具体的报价记录 -->
			<view class="binding-record" v-if="bindingData.logisticsbidsupplierVo">
				<view class="binding-record-item">
					<text class="gray">价格(USD)</text>
					<text class="mg15">:</text>
					<text class="gray">{{bindingData.logisticsbidsupplierVo.price}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">有效期</text>
					<text class="mg15">:</text>
					<text class="gray">{{bindingData.logisticsbidsupplierVo.expiredDate}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">船公司</text>
					<text class="mg15">:</text>
					<text class="gray">{{bindingData.logisticsbidsupplierVo.shippingName}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">船期</text>
					<text class="mg15">:</text>
					<text class="gray">{{"周"+bindingData.logisticsbidsupplierVo.schedule}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">转运方式</text>
					<text class="mg15">:</text>
					<text class="gray">{{bindingData.logisticsbidsupplierVo.transferMethod}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">航程</text>
					<text class="mg15">:</text>
					<text class="gray">{{bindingData.logisticsbidsupplierVo.voyage}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">价格趋势</text>
					<text class="mg15">:</text>
					<text class="gray">{{bindingData.logisticsbidsupplierVo.pricetrendType}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">趋势说明</text>
					<text class="mg15">:</text>
					<text class="gray">{{bindingData.logisticsbidsupplierVo.pricetrendRemark}}</text>
				</view>
				<view class="binding-record-item">
					<text class="gray">备注</text>
					<text class="mg15">:</text>
					<text class="gray">{{bindingData.logisticsbidsupplierVo.remark}}</text>
				</view>
			</view>
		</view>

		<!-- 竞价模态框 -->
		<u-modal v-model="modalShow" :show-confirm-button="false" :show-title="false" :negative-top="500">
			<view class="slot-content">
				<view class="slot-content_oneline">
					<u-row gutter="16">
						<u-col span="6">
							<text>价格（USD）*</text>
						</u-col>
						<u-col span="6">
							<text class="fr">1.63</text>
						</u-col>
					</u-row>
				</view>

				<view class="slot-content_oneline">
					<u-row gutter="16">
						<u-col span="6">
							<text>有效期*</text>
						</u-col>
						<u-col span="6">
							<text class="fr">2020-08-12</text>
						</u-col>
					</u-row>
				</view>
				<view class="remark">
					<u-row gutter="16">
						<u-col span="12">
							<text>备注*</text>
						</u-col>
					</u-row>
				</view>
				<view class="remark">
					<u-row gutter="16">
						<u-col span="12">
							<u-input v-model="remark" placeholder="请输入备注" />
						</u-col>
					</u-row>
				</view>
				<view class="remark">
					总共剩余1次报价机会
				</view>
				<view>
					<u-row gutter="16">
						<u-col span="6">
							<u-button type="error" plain>放弃报价</u-button>
						</u-col>
						<u-col span="6">
							<u-button type="error">我要报价</u-button>
						</u-col>
					</u-row>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import fetch from '../../utils/fetch.js'
	export default {
		data() {
			return {
				//竞价模态框是否显示
				modalShow: false,
				remark: "",
				//是已报价还是未报价 已报价true 未报价false
				quotedPrice: true,
				//从上一个页面拿到的数据
				bindingVuexCheckeddata: this.$store.state.checkedData,
				bindingData: {},
				//我的报价记录
				myBindingData:{}
			}
		},

		created() {
			this.getDetails()
		},

		methods: {
			//拿到详细信息
			async getDetails() {
				let data = {}
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
					if(this.bindingVuexCheckeddata.titletext==='物流待报价'){
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
				this.modalShow = true
			}
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
				left: 60%;
				width: 120rpx;
				height: 50rpx;
				color: #fff;
				text-align: center;
				line-height: 48rpx;
				border-bottom-left-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
				background-color: #D0021B;
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
					padding: 4rpx 14rpx;
					background-color: #D0021B;
					border-radius: 14rpx;
					color: #fff;
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
	}
</style>
