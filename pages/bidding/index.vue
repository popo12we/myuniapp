<template>
	<!-- 产品供应商待报价页面(竞价模式) -->
	<view class="binding">
		<!-- 竞价信息 -->
		<view class="binding-info">
			
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="bidding_name">大豆分离蛋白</text>
						<text class="mg15"></text>
						<text class="bidding_sign">竞价</text>
					</u-col>
					<u-col span="5">
						<view class="isWinBidding">已中标</view>
					</u-col>
				</u-row>
			</view>
			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="colorgary">规格</text>
						<text class="mg15">:</text>
						<text class="colorgary">Emulsion</text>
					</u-col>
					<u-col span="5">
						<text class="colorgary">品牌</text>
						<text class="mg15">:</text>
						<text class="colorgary">菊兰</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="colorgary">包装</text>
						<text class="mg15">:</text>
						<text class="colorgary">20 KG STEEL DRUM</text>
					</u-col>
					<u-col span="5">
						<text class="colorgary">数量</text>
						<text class="mg15">:</text>
						<text class="colorgary">25KG</text>

					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="colorgary">标的价格(USD)</text>
						<text class="mg15">:</text>
						<text class="colorgary">1.5</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="colorgary">当前出价(USD)</text>
						<text class="mg15">:</text>
						<text class="colorgary">1.63</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="colorgary">上海---</text>
						<text class="colorgary">拉各斯</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="12">
						<text class="colorgary">期望5天交货</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="7">
						<text class="colorgary">询价单编号</text>
						<text class="mg15">:</text>
						<text class="colorgary">IN2087973</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="12">
						<text class="colorgary">备注</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="12">
						<text class="colorgary">一种食品添加剂</text>
					</u-col>
				</u-row>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="12">
						<text class="colorred">2020-08-07</text>
						<text class="mg15">:</text>
						<text class="colorred">12:00截止报价</text>
					</u-col>
				</u-row>
			</view>
		</view>

		<!-- 竞价排名 -->
		<view class="binding-ranking">
			<view class="binding-ranking-title">
				全部供应商报价排名(价格从低到高)
			</view>
			<!-- 具体的报价记录 -->
			<view class="binding-record">
				<view class="binding-record_item">
					<u-row gutter="16">
						<u-col span="2">
							<view class="binding-record_item_sort">
								1
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
								<view>1.63</view>
								<view class="mg-t24">2020-08-16 12:00:00</view>
							</view>
						</u-col>
					</u-row>
				</view>

				<view class="binding-record_item">
					<u-row gutter="16">
						<u-col span="2">
							<view class="binding-record_item_sort">
								2
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
								<view>1.63</view>
								<view class="mg-t24">2020-08-16 12:00:00</view>
							</view>
						</u-col>
					</u-row>
				</view>

				<view class="binding-record_item">
					<u-row gutter="16">
						<u-col span="2">
							<view class="binding-record_item_sort">
								3
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
								<view>1.63</view>
								<view class="mg-t24">2020-08-16 12:00:00</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</view>
		</view>

		<!-- 我的报价记录 -->
		<view class="mybinding">
			<view class="mybinding-title">
				我的报价记录
			</view>
			<!-- 我的具体报价记录 -->
			<view class="mybinding-recode">
				<view class="mybinding-recode_item">
					<view class="mybinding-recode_item_count">
						<text>第二次报价</text>
						<text>(剩余报价次数1次)</text>
					</view>
					<view class="mybinding-recode_item_price">
						<text>价格(USD):1.71/KG</text>
					</view>
					<view class="mybinding-recode_item_remark">
						<text>最近工厂进度趋于稳定,价格稳定</text>
					</view>
					<view class="mybinding-recode_item_ball"></view>
				</view>

				<view class="mybinding-recode_item">
					<view class="mybinding-recode_item_count">
						<text>第二次报价</text>
						<text>(剩余报价次数1次)</text>
					</view>
					<view class="mybinding-recode_item_price">
						<text>价格(USD):1.71/KG</text>
					</view>
					<view class="mybinding-recode_item_remark">
						<text>最近工厂进度趋于稳定,价格稳定</text>
					</view>
					<view class="mybinding-recode_item_ball"></view>
				</view>

				<view class="mybinding-recode_item">
					<view class="mybinding-recode_item_count">
						<text>第二次报价</text>
						<text>(剩余报价次数1次)</text>
					</view>
					<view class="mybinding-recode_item_price">
						<text>价格(USD):1.71/KG</text>
					</view>
					<view class="mybinding-recode_item_remark">
						<text>最近工厂进度趋于稳定,价格稳定</text>
					</view>
					<view class="mybinding-recode_item_ball"></view>
				</view>
			</view>

			<view class="binding-info_oneline">
				<u-row gutter="16">
					<u-col span="6">
						<u-button type="error" plain>放弃报价</u-button>
					</u-col>
					<u-col span="6">
						<u-button type="error" @click="modalOpen">我要竞价</u-button>
					</u-col>
				</u-row>
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
								<u-button type="error">我要竞价</u-button>
							</u-col>
						</u-row>
					</view>
				</view>
			</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//竞价模态框是否显示
				modalShow: false,
				remark: "",
			}
		},
		created(){
			// this.getBiddingData()
		},
		methods: {
			//拿到详细的数据
			async getBiddingData(){
				let inquiryCode=this.$store.state.checkedData.inquiryCode
				// let custId=
				// let res = await fetch(this.api.v2.inquiryDetail, {
				// 	method: "get",
				// 	data: {
				// 		accessToken: uni.getStorageSync('accessToken'),
				// 		inquiryCode: this.name,
				// 		custId:1
				// 	}
				// })
			},
			//点击打开竞价模态框
			modalOpen() {
				this.modalShow = true
			}
		}
	}
</script>
<style lang="scss" scoped>
	// 公共
	.mg-t24 {
		margin-top: 24rpx;
	}

	.colorred {
		color: #d0021b;
	}
    .colorgary{
		color:#868686;
	}
	.binding {
		background-color: #f9f9f9;
		margin-bottom: 30rpx;

		// 竞价信息
		.binding-info {
			background-color: #fff;
			padding: 24rpx;
            position: relative;
			.isWinBidding{
				position: absolute;
				top:0;
				left:60%;
				width: 120rpx;
				height: 50rpx;
				color:#fff;
				text-align: center;
				line-height: 48rpx;
				border-bottom-left-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
				background-color: #D0021B;
				font-size: 24rpx;
			}
			.binding-info_oneline {
				margin-bottom: 25rpx;
				.bidding_name{
					font-weight: 700;
				}
				.bidding_sign{
					padding:4rpx 14rpx;
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
