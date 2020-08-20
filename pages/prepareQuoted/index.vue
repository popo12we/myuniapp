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

		<!-- 商品列表 -->
		<view class="commodity_list">
			<u-checkbox-group :wrap="true" :active-color='activeColor'>
				<u-collapse>

					<u-checkbox @change="checkboxOneChange" v-model="item.checked" v-for="(item, index) in list" :key="index" :name="item.name">
						<view class="checkbox_view">
							<view class="checkbox_view_oneline">
								<text class="checkbox_view_name gray">大豆分离蛋白</text>
								<text class="mg15">:</text>
								<text class="gray">菊兰</text>
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
										<view class="checkbox_view_oneline_timeend">
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
				]
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

			//批量填写
			batchFilling() {
				uni.navigateTo({
					url: '../batchQuotation/index'
				});
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
				align-items: flex-start;
			}
			/deep/ .u-checkbox__icon-wrap{
				margin-top:38rpx;
			}
            /deep/ .u-collapse-head{
				padding:0;
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

					// .checkbox_view_oneline_timeend {
					// 	padding-bottom: 10rpx;
					// 	border-bottom: 2rpx solid #c9c9c9;
					// }
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
