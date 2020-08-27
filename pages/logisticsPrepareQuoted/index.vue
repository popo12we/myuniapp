<template>
	<!-- 物流供应商待报价页面（非竞价模式） -->
	<view class="logisticsPrepareQuoted">
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
		<view class="commodity_list_tips">您现在有 2 条实盘询价</view>

		<!-- 轮播图区域 -->
		<view class="swiper_box">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots">
							<swiper-item>
								<!-- 具体的轮播图页面 -->
								<view class="swiper-item">
									<view class="swiper-item_left">
										<view class="swiper-item_sign_box">
											<view class="swiper-item_sign"><text>实盘</text></view>
										</view>
									</view>
									<view class="swiper-item_right">
										<span class="iconfont icon_close">&#xe607;</span>
									</view>
									<view class="swiper-item_center">
										<view class="swiper_center_oneline_title clearfix">
											<view class="firsttext">
												黑海
											</view>
											<view class="secondtext">
												上海
											</view>
											<view class="thirdtext">
												<view>直达</view>
												<view>——</view>
											</view>
											<view class="fourthtext">
												奥德赛
											</view>
											<view class="fifthtext">
												1*20'GP
											</view>

										</view>
										<view class="swiper_center_oneline">
											周一，周三，周五
										</view>
										<view class="swiper_center_oneline">
											2020-08-05 至 2020-08-15
										</view>
										<view class="swiper_center_oneline settimeout_btn clearfix">
											<view class="settimeout">
												剩余1天12小时30分结束
											</view>
										</view>
										<view class="swiper_center_oneline center_btn_area">
											<u-button type="error" size="mini" plain class="btn_end" @click="toBindding">我要竞价</u-button>
										</view>
									</view>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>

		<!-- 商品列表 -->
		<view class="commodity_list">
			<u-checkbox-group :wrap="true" :active-color='activeColor'>
				<u-collapse>
					<u-checkbox @change="checkboxOneChange" v-model="item.checked" v-for="(item, index) in list" :key="index" :name="item.name">
						<view class="checkbox_view">
							<view class="checkbox_view_oneline">
								<view class="checkbox_view_oneline_title clearfix">
									<view class="secondtext">
										上海
									</view>
									<view class="thirdtext">
										<view>直达</view>
										<view>——</view>
									</view>
									<view class="fourthtext">
										奥德赛
									</view>
									<text class="checkbox_view_tab" @click="showInquiryModal">询盘</text>
								</view>
							</view>

							<view class="checkbox_view_oneline checkbox_view_oneline_first">
								<u-row gutter="16">
									<u-col span="6">
										<text class="gray">箱型</text>
										<text class="mg15">:</text>
										<text class="gray">20GP</text>
									</u-col>
									<u-col span="6">
										<text class="red">截止日期</text>
										<text class="mg15">:</text>
										<text class="red">2020-08-05</text>
									</u-col>
								</u-row>
							</view>
							<u-collapse-item>
								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="6">
											<text class="gray">货盘类型</text>
											<text class="mg15">:</text>
											<text class="gray">海运整箱</text>
										</u-col>
										<u-col span="6">
											<text class="gray">货物总量</text>
											<text class="mg15">:</text>
											<text class="gray">1*20‘GP</text>
										</u-col>
									</u-row>
								</view>
								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="6">
											<text class="gray">货物毛重</text>
											<text class="mg15">:</text>
											<text class="gray">200KG</text>
										</u-col>
										<u-col span="6">
											<text class="gray">预计出运</text>
											<text class="mg15">:</text>
											<text class="gray">2020-08-05</text>
										</u-col>
									</u-row>
								</view>
								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="6">
											<text class="gray">装货码头</text>
											<text class="mg15">:</text>
											<text class="gray">卸货码头</text>
										</u-col>
										<u-col span="6">
											<text class="gray">货物类型</text>
											<text class="mg15">:</text>
											<text class="gray">一般化工品</text>
										</u-col>
									</u-row>
								</view>

								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="12">
											<text class="gray">货物描述</text>
											<text class="mg15">:</text>
											<text class="gray">一种食品添加剂</text>
										</u-col>

									</u-row>
								</view>
								<view class="price_change">
									<text class="gray pricetext">价格</text>
									<text class="mg15"></text>
									<u-field :border-bottom="true" class="ufield" :label-width="0">
									</u-field>
									<text class="mg15"></text>
									<text>USD</text>
									<text class="mg15"></text>
									<text class="change">切换</text>
								</view>
								<view class="checkbox_view_oneline mt15">
									<u-row gutter="16">
										<u-col span="12">
											<u-button type="info" size='mini' plain class="giveupbindding" @click="giveupbidding">放弃报价</u-button>
											<u-button type="error" size='mini' plain>我要报价</u-button>
										</u-col>
									</u-row>
								</view>
							</u-collapse-item>
						</view>
					</u-checkbox>
				</u-collapse>
			</u-checkbox-group>
			<!-- 报价 -->
			<view class="quotation_area">
				<view class="quotation_area_oneline">
					<view class="quotation_area_oneline_item">
						<text class="text">有效期</text>
						<u-field :border-bottom="true" class="ufield" :label-width="0" :clearable="false">
						</u-field>
					</view>
					<view class="quotation_area_oneline_item">
						<text class="text">交货天数</text>
						<u-field :border-bottom="true" class="ufield" :label-width="0" :clearable="false">
						</u-field>
					</view>
				</view>

				<view class="quotation_area_oneline">
					<view class="quotation_area_oneline_item">
						<text class="text">价格趋势</text>
						<u-field :border-bottom="true" class="ufield" :label-width="0" :clearable="false">
						</u-field>
					</view>
					<view class="quotation_area_oneline_item">
						<text class="text">交货天数</text>
						<u-field :border-bottom="true" class="ufield" :label-width="0" :clearable="false">
						</u-field>
					</view>
				</view>
			</view>
		</view>



		<!-- 底部导航 -->
		<Tabbar></Tabbar>

		<!-- 询盘模态框 -->
		<u-modal v-model="inquiryShow" :show-title="false" :show-confirm-button="false" :mask-close-able="true">
			<view class="inquiryModal_content">
				<u-form :model="inquiryForm" ref="iForm" :label-width="145">
					<u-form-item label="币种">
						<u-input v-model="form.currency" />
					</u-form-item>
					<u-form-item label="价格">
						<u-input v-model="form.price" />
					</u-form-item>
					<u-form-item label="美元价格">
						<u-input v-model="form.usaPrice" />
					</u-form-item>
					<u-form-item label="有效期">
						<u-input v-model="form.validity" />
					</u-form-item>
					<u-form-item label="交货天数">
						<u-input v-model="form.day" />
					</u-form-item>
					<u-form-item label="价格趋势">
						<u-input v-model="form.trend" type="select" @click="showTrendSelect" />
					</u-form-item>
					<u-form-item label="趋势说明">
						<u-input v-model="form.explain" />
					</u-form-item>
					<u-form-item label="备注">
						<u-input v-model="form.remark" />
					</u-form-item>
					<view>
						<u-row gutter="16" class="btn-area">
							<u-col span="6">
								<u-button type="error" plain>取消</u-button>
							</u-col>
							<u-col span="6">
								<u-button type="error">提交报价</u-button>
							</u-col>
						</u-row>
					</view>
				</u-form>
			</view>
		</u-modal>

		<!-- 竞价模态框 -->
		<u-modal v-model="binddingShow" :show-confirm-button="false" :show-title="false" :negative-top="500" :mask-close-able="true">
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

		<!-- 放弃报价模态框 -->
		<u-modal v-model="giveupbiddingShow" :mask-close-able="true" :show-title="false" :show-cancel-button="true"
		 confirm-text="确认放弃" confirm-color="#D0021B" class="giveupbiddingModal">
			<view class="giveupbiddingModal_oneline">
				确定放弃报价？
			</view>
			<view class="red giveupbiddingModal_oneline">
				大豆分离蛋白
			</view>
		</u-modal>
		<u-select v-model="selectShow" :list="selectlist"></u-select>
	</view>
</template>

<script>
	import Tabbar from '../../my_common_components/Tabbar.vue'
	import '../../common/font/iconfont.css';
	export default {
		components: {
			Tabbar
		},
		data() {
			return {
				name: "",
				//默认checkbox选中颜色
				activeColor: "#D0021B",
				selectlist: [{
						value: '1',
						label: '江'
					},
					{
						value: '2',
						label: '湖'
					}
				],
				//全选
				allChecked: false,
				list: [{
						name: 'apple',
						checked: false,
						disabled: false
					},
					{
						name: 'banner',
						checked: false,
						disabled: false
					},
					{
						name: 'orange',
						checked: false,
						disabled: false
					}
				],

				//轮播图参数
				indicatorDots: true,
				selectShow: false,

				//询盘模态框是否显示
				inquiryShow: false,
				inquiryForm: {
					//币种
					currency: '',
					//价格
					price: '',
					//美元价格
					usaPrice: '',
					//有效期
					validity: '',
					//交货天数
					day: '',
					//价格趋势
					trend: '',
					//趋势说明
					explain: '',
					//备注
					remark: ''
				},
				//竞价模态框是否显示
				binddingShow: false,
				//放弃模态框是否显示
				giveupbiddingShow: false
			}
		},
		methods: {
			// 全选
			checkboxAllChange() {
				this.allChecked ? this.list.map(val => {
					val.checked = true;
				}) : this.list.map(val => {
					val.checked = false;
				})
			},

			//单选
			checkboxOneChange(e) {
				this.allChecked = (this.list.length === this.list.filter(val => val.checked).length)
			},

			//点击打开价格趋势下拉框
			showTrendSelect() {
				this.selectShow = true
			},

			//点击询盘打开询盘模态框
			showInquiryModal() {
				this.inquiryShow = true
			},

			//点击我要竞价按钮打开竞价模态框
			toBindding() {
				this.binddingShow = true
			},

			//点击放弃报价出的弹框
			giveupbidding() {
				this.giveupbiddingShow = true
			}
		}
	};
</script>

<style lang="scss" scoped>
	//公共样式
	.gray {
		color: #c9c9c9 !important;
	}

	.red {
		color: #D0021B !important
	}

	.mt15 {
		margin-top: 15rpx;
	}

	.logisticsPrepareQuoted {
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

		//轮播图区域
		.swiper_box {
			/deep/ .swiper {
				height: 450rpx;
			}

			.swiper-item_left {
				width: 110rpx;
				height: 100%;
				float: left;

				.swiper-item_sign_box {
					width: 110rpx;
					height: 110rpx;
					color: #fff;
					text-align: center;

					.swiper-item_sign {
						width: 0;
						height: 0;
						position: relative;
						border-top: 110rpx solid red;
						border-right: 110rpx solid transparent;

						text {
							position: absolute;
							left: 20rpx;
							top: -108rpx;
							color: #fff;
							font-size: 28rpx;
							transform: rotate(225deg);
						}
					}
				}
			}

			.swiper-item_right {
				width: 110rpx;
				height: 55px;
				float: right;
				background-color: transparent;
				position: relative;

				.icon_close {
					position: absolute;
					right: 20rpx;
					top: 20rpx;
				}
			}

			.swiper-item_center {
				overflow: hidden;
				position: relative;

				.swiper_center_oneline_title {
					margin-top: 40rpx;
					text-align: center;
					display: flex;
					justify-content: center;

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

				}

				.swiper_center_oneline {
					margin: 20rpx 0;
					text-align: center;
				}

				.settimeout {
					background-color: #D0021B;
					padding: 20rpx 60rpx;
					border-radius: 20rpx;
					color: #fff;
					text-align: center;
				}

				.center_btn_area {
					display: flex;
					justify-content: center;
					margin-top: 30rpx !important;
				}
			}
		}

		//商品列表
		.commodity_list {
			padding: 0 40rpx;

			/deep/ .u-checkbox {
				border-bottom: 2rpx solid #f6f6f6;
				align-items: flex-start;
			}

			/deep/ .u-checkbox__icon-wrap {
				margin-top: 38rpx;
			}

			/deep/ .u-collapse-head {
				padding: 0;
			}

			.checkbox_view {
				float: none;
				display: block;
				padding: 25rpx 0;
				width: 100%;
				color: #868686;

				.checkbox_view_oneline_first {
					margin-top: 10rpx;
				}

				.checkbox_view_oneline {
					font-size: 24rpx;

					.checkbox_view_oneline_title {
						text-align: center;
						display: flex;
						.secondtext {
							font-weight: 700;
							color:#515151;
							font-size: 28rpx;
							margin: 0 15rpx;
						}

						.thirdtext {
							line-height: 20rpx;
							font-size: 20rpx;
						}

						.fourthtext {
							font-weight: 700;
							color:#515151;
							font-size: 28rpx;
							margin: 0 15rpx;
						}


					}

					.checkbox_view_name {
						font-weight: 700;
						font-size: 32rpx;
						color: #666;
					}

					.checkbox_view_tab {
						margin-top: 10rpx;
						background-color: #0099cc;
						color: #fff;
						width: 60rpx;
						height: 40rpx;
						line-height: 40rpx;
						text-align: center;
						font-size: 20rpx;
						border-radius: 20rpx;
					}

					.giveupbindding {
						margin-right: 30rpx;
					}
				}

				.utag {
					margin-left: 20rpx;
				}

				.checkbox_view_oneline_btn {
					margin-left: 20rpx;
				}

				.price_change {
					display: flex;

					.pricetext {
						margin-left: 6rpx;
					}

					.ufield {
						flex: 1;
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

		//报价
		.quotation_area_oneline {
			display: flex;

			.quotation_area_oneline_item {
				display: flex;
				width: 50%;

				.ufield {
					flex: 1
				}

				.text {
					align-self: center;
					color: #868686;
				}
			}
		}

		// 询盘模态框
		.inquiryModal_content {
			padding: 20rpx;

			.btn-area {
				margin-top: 20rpx;
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

		.giveupbiddingModal {
			.giveupbiddingModal_oneline {
				text-align: center;
				margin: 20rpx 0;
			}
		}
	}
</style>
