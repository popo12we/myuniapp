<template>
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
		<view class="commodity_list_tips">您现在有2条竞价、2条实单</view>

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
											<view class="swiper-item_sign"><text>竞价</text></view>
										</view>
									</view>
									<view class="swiper-item_right">
										
									</view>
									<view class="swiper-item_center">
										<view class="swiper_center_title">
											<text>大豆分离蛋白</text>
											<text class="mg15"></text>
											<text>菊兰</text>
										</view>
										<view class="swiper_center_oneline">
											<u-row>
												<u-col span="12">
													<text class="gray">规格</text>
													<text class="mg15 gray">:</text>
													<text class="gray">Emulsion</text>
												</u-col>
											</u-row>
										</view>
										<view class="swiper_center_oneline">
											<u-row>
												<u-col span="12">
													<text class="gray">当前出价（USD):</text>
													<text class="mg15"></text>
													<text class="gray">1.63</text>
												</u-col>
											</u-row>
										</view>
										<view class="swiper_center_oneline">
											<u-row>
												<u-col span="12">
													<text class="gray">当前排名</text>
													<text class="mg15 gray">:</text>
													<text class="gray">2</text>
												</u-col>
											</u-row>
										</view>
										<view class="swiper_center_oneline settimeout_btn clearfix">
											<view class="settimeout">
												剩余1天12小时30分结束
											</view>
										</view>
										<view class="swiper_center_oneline center_btn_area">
											<u-button type="error" size="mini" plain class="btn_end">我要竞价</u-button>
										</view>
									</view>
								</view>
							</swiper-item>
							<swiper-item>
								<!-- 具体的轮播图页面 -->
								<view class="swiper-item">
									<view class="swiper-item_left">
										<view class="swiper-item_sign_box">
											<view class="swiper-item_sign"><text>竞价</text></view>
										</view>
									</view>
									<view class="swiper-item_right">
										
									</view>
									<view class="swiper-item_center">
										<view class="swiper_center_title">
											<text>甜味剂</text>
											<text class="mg15"></text>
											<text>莲花</text>
										</view>
										<view class="swiper_center_oneline">
											<u-row>
												<u-col span="12">
													<text class="gray">规格</text>
													<text class="mg15 gray">:</text>
													<text class="gray">Emulsion</text>
												</u-col>
											</u-row>
										</view>
										<view class="swiper_center_oneline">
											<u-row>
												<u-col span="12">
													<text class="gray">当前出价（USD):</text>
													<text class="mg15"></text>
													<text class="gray">1.63</text>
												</u-col>
											</u-row>
										</view>
										<view class="swiper_center_oneline">
											<u-row>
												<u-col span="12">
													<text class="gray">当前排名</text>
													<text class="mg15 gray">:</text>
													<text class="gray">2</text>
												</u-col>
											</u-row>
										</view>
										<view class="swiper_center_oneline settimeout_btn clearfix">
											<view class="settimeout">
												剩余1天12小时30分结束
											</view>
										</view>
										<view class="swiper_center_oneline center_btn_area">
											<u-button type="error" size="mini" plain class="btn_end">我要竞价</u-button>
										</view>
									</view>
								</view>
							</swiper-item>
							<swiper-item>
								<!-- 具体的轮播图页面 -->
								<view class="swiper-item">
									<view class="swiper-item_left">
										<view class="swiper-item_sign_box">
											<view class="swiper-item_sign"><text>竞价</text></view>
										</view>
									</view>
									<view class="swiper-item_right">
										
									</view>
									<view class="swiper-item_center">
										<view class="swiper_center_title">
											<text>山梨酸钾</text>
											<text class="mg15"></text>
											<text>康乐</text>
										</view>
										<view class="swiper_center_oneline">
											<u-row>
												<u-col span="12">
													<text class="gray">规格</text>
													<text class="mg15 gray">:</text>
													<text class="gray">Emulsion</text>
												</u-col>
											</u-row>
										</view>
										<view class="swiper_center_oneline">
											<u-row>
												<u-col span="12">
													<text class="gray">当前出价（USD):</text>
													<text class="mg15"></text>
													<text class="gray">1.63</text>
												</u-col>
											</u-row>
										</view>
										<view class="swiper_center_oneline">
											<u-row>
												<u-col span="12">
													<text class="gray">当前排名</text>
													<text class="mg15 gray">:</text>
													<text class="gray">2</text>
												</u-col>
											</u-row>
										</view>
										<view class="swiper_center_oneline settimeout_btn clearfix">
											<view class="settimeout">
												剩余1天12小时30分结束
											</view>
										</view>
										<view class="swiper_center_oneline center_btn_area">
											<u-button type="error" size="mini" plain class="btn_end">我要竞价</u-button>
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
								<text class="checkbox_view_name gray">大豆分离蛋白</text>
								<text class="mg15"></text>
								<text class="checkbox_view_tab">询盘</text>
							</view>

							<view class="checkbox_view_oneline">
								<u-row gutter="16">
									<u-col span="7">
										<text class="gray">规格</text>
										<text class="mg15">:</text>
										<text class="gray">Emulsion</text>
									</u-col>
									<u-col span="5">
										<text class="gray">品牌</text>
										<text class="mg15">:</text>
										<text class="gray">菊兰</text>
									</u-col>
								</u-row>
							</view>

							<view class="checkbox_view_oneline">
								<u-row gutter="16">
									<u-col span="7">
										<text class="gray">包装</text>
										<text class="mg15">:</text>
										<text class="gray">20 KG STEEL DRUM</text>
									</u-col>
									<u-col span="5">
										<text class="gray">数量</text>
										<text class="mg15">:</text>
										<text class="gray">100KG</text>
									</u-col>
								</u-row>
							</view>
							<view class="checkbox_view_oneline">
								<u-row gutter="16">
									<u-col span="12">
										<view>
											<text class="red">2020-07-30</text>
											<text class="mg15"></text>
											<text class="red">18：00截至报价</text>
										</view>
									</u-col>
								</u-row>
							</view>
							<u-collapse-item>
								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="7">
											<text class="gray">上海</text>
											<text class="mg15">---</text>
											<text class="gray">拉各斯</text>
										</u-col>
										<u-col span="5">
											<text class="gray">20GP</text>
										</u-col>
									</u-row>
								</view>

								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="7">
											<text class="gray">期望五天交货</text>
										</u-col>
										<u-col span="5">
											<text class="gray">打托</text>
											<text class="mg15">:</text>
											<text class="gray">是</text>
										</u-col>
									</u-row>
								</view>
								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="12">
											<text class="gray">询价单编号：IN2087973</text>
										</u-col>
									</u-row>
								</view>

								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="12">
											<text class="gray">备注:</text>
										</u-col>
									</u-row>
								</view>
								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="12">
											<text class="gray">一种食品添加剂</text>
										</u-col>
									</u-row>
								</view>
								<view class="checkbox_view_oneline mt15">
									<u-row gutter="16">
										<u-col span="12">
											<u-button type="info" size='mini' plain class="giveupbindding">放弃报价</u-button>
											<u-button type="error" size='mini' plain>我要报价</u-button>
										</u-col>
									</u-row>
								</view>
							</u-collapse-item>
						</view>

					</u-checkbox>

				</u-collapse>
			</u-checkbox-group>
		</view>

		<!-- 底部导航 -->
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	import Tabbar from '../../my_common_components/Tabbar.vue'
	export default {
		components: {
			Tabbar
		},
		data() {
			return {
				name: "",
				//默认checkbox选中颜色
				activeColor: "#D0021B",
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
				indicatorDots: true
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

		//轮播图区域
		.swiper_box {
			/deep/ .swiper{
				height: 450rpx;
			}

			.swiper-item_left {
				width: 150rpx;
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
				width: 150rpx;
				height: 55px;
				float: right;
				background-color: transparent;
			}

			.swiper-item_center {
				overflow: hidden;
				.swiper_center_title{
					margin-top:30rpx;
				}
				.swiper_center_oneline{
					margin:10rpx 0;
				}
				.settimeout {
					background-color: #D0021B;
					padding: 20rpx 60rpx;
					border-radius: 20rpx;
					color: #fff;
					text-align: center;
					float: left;
				}
				.center_btn_area{
					display: flex;
					justify-content: center;
					margin-top:30rpx !important;
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

				.checkbox_view_oneline {
					.checkbox_view_name {
						font-weight: 700;
						font-size: 32rpx;
						color: #666;
					}

					.checkbox_view_tab {
						background-color: #0099cc;
						color: #fff;
						padding: 4rpx 16rpx;
						font-size: 24rpx;
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
			}
		}
	}
</style>
