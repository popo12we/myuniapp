<template>
	<!-- 产品供应商待报价页面（非竞价模式） -->
	<view class="prepareQuoted">
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
										<span class="iconfont icon_close">&#xe607;</span>
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
											<u-button type="error" size="mini" plain class="btn_end" @click="toBindding">我要竞价</u-button>
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
				<u-collapse :accordion="false">
					<u-checkbox @change="checkboxOneChange" v-model="item.checked" v-for="(item, index) in list" :key="index" :name="item.name">
						<view class="checkbox_view">
							<view class="checkbox_view_oneline">
								<text class="checkbox_view_name gray">大豆分离蛋白</text>
								<text class="mg15"></text>
								<text class="checkbox_view_tab" @click="showInquiryModal">询盘</text>
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
							<view class="price_change" v-if="item.checked&&(!item.down)">
								<text class="gray pricetext">价格</text>
								<text class="mg15"></text>
								<u-field :border-bottom="true" class="ufield" :label-width="0">
								</u-field>
								<text class="mg15"></text>
								<text>USD</text>
								<text class="mg15"></text>
								<text class="change">切换</text>
							</view>
							<u-collapse-item :index="index" @change="changeCollapseItem">
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
								<view class="price_change" v-if="list[index].checked&&item.down">
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
			<view class="quotation_area" v-if="checkedNum>0">
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
						name: 0,
						checked: false,
						down: false
					},
					{
						name: 1,
						checked: false,
						down: false
					},
					{
						name: 2,
						checked: false,
						down: false
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
				giveupbiddingShow: false,
				//记录哪些面板是展开的
				collapseItemIsChecked:[]
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
			},
			
			//点的折叠面板是开启还是关闭的 方便后续操作
			changeCollapseItem(e){
					
			    if(e.show===true){
					if(this.collapseItemIsChecked.length===0){
						this.collapseItemIsChecked.push(e.index)
					}else{
						if(this.collapseItemIsChecked.some(item=>item!==e.index)){
							this.collapseItemIsChecked.push(e.index)
						}
					}
				}else{
					this.collapseItemIsChecked=this.collapseItemIsChecked.filter(item=>item!==e.index)
				}
				this.list[e.index].down=e.show
			}
		},
			
		computed:{
			//选中的个数
			checkedNum(){
				return this.list.filter(val => val.checked).length
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

	.prepareQuoted {
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

				.swiper_center_title {
					margin-top: 30rpx;
				}

				.swiper_center_oneline {
					margin: 10rpx 0;
				}

				.settimeout {
					background-color: #D0021B;
					padding: 20rpx 60rpx;
					border-radius: 20rpx;
					color: #fff;
					text-align: center;
					float: left;
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

				.price_change {
					display: flex;
                    .pricetext{
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
					color:#868686;
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
