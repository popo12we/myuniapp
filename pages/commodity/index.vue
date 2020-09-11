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

						<view class="checkbox_view_oneline" v-if="!item.checked">
							<text :class="{gray:item.isGray,deepgray:!item.isGray}">最新报价(USD)</text>
							<text class="mg15">:</text>
							<text :class="{gray:item.isGray,deepgray:!item.isGray}">{{item.bidAmount?item.bidAmount:"未报价"}}</text>
							<u-tag text="已失效" type="info" class="utag" v-if="item.isGray" />
							<u-tag text="三天后到期" type="error" plain class="utag" v-if="item.day3After" />
						</view>
						<view class="checkbox_view_oneline" v-if="!item.checked">
							<text :class="{gray:item.isGray,deepgray:!item.isGray}">有效期</text>
							<text class="mg15">:</text>
							<text :class="{gray:item.isGray,deepgray:!item.isGray}">{{item.expiredDate||'NA'}}</text>
						</view>
						<view class="checkbox_view_oneline" v-if="!item.checked">
							<u-button type="error" size="mini" class="checkbox_view_oneline_btn" plain>更新报价</u-button>
						</view>
						
						<view class="price_change" v-if="item.checked">
							<text class="gray pricetext">价格</text>
							<text class="mg15"></text>
							<u-input class="ufield" :label-width="0" v-model.number="item.price" @click.stop
							 placeholder=" "></u-input>
							<text class="mg15"></text>
							<text v-if="item.currency==='USD'">USD</text>
							<text v-if="item.currency==='RMB'">RMB</text>
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
		<!-- 底部导航 -->
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	import Tabbar from '../../my_common_components/Tabbar.vue'
	import fetch from '../../utils/fetch.js'
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
				list: [{
						bidAmount: 200,
						cur: "USD",
						enSpuName: "",
						expiredDate: "2020-09-08",
						skuCode: "",
						skuId: 1186884,
						spuId: 6359071,
						spuName: "冯振鑫商品",
						spuSpec: "SW001",
						state: 0,
						unit: 18
					},
					{
						bidAmount: 200,
						cur: "USD",
						enSpuName: "",
						expiredDate: "2020-09-11",
						skuCode: "",
						skuId: 1186884,
						spuId: 6359071,
						spuName: "冯振鑫商品",
						spuSpec: "SW001",
						state: 0,
						unit: 18
					},
					{
						bidAmount: 200,
						cur: "USD",
						enSpuName: "",
						expiredDate: "2020-09-12",
						skuCode: "",
						skuId: 1186884,
						spuId: 6359071,
						spuName: "冯振鑫商品",
						spuSpec: "SW001",
						state: 0,
						unit: 18
					},
					{
						bidAmount: 200,
						cur: "USD",
						enSpuName: "",
						expiredDate: "2020-09-15",
						skuCode: "",
						skuId: 1186884,
						spuId: 6359071,
						spuName: "冯振鑫商品",
						spuSpec: "SW001",
						state: 0,
						unit: 18
					}
				],
				
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
			};
		},

		created() {
			this.getSupplierProduct()
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
					this.list.push({
						bidAmount: 200,
						cur: "USD",
						enSpuName: "",
						expiredDate: "2020-09-08",
						skuCode: "",
						skuId: 1186884,
						spuId: 6359071,
						spuName: "冯振鑫商品",
						spuSpec: "SW001",
						state: 0,
						unit: 18
					}, {
						bidAmount: 200,
						cur: "USD",
						enSpuName: "",
						expiredDate: "2020-09-11",
						skuCode: "",
						skuId: 1186884,
						spuId: 6359071,
						spuName: "冯振鑫商品",
						spuSpec: "SW001",
						state: 0,
						unit: 18
					}, {
						bidAmount: 200,
						cur: "USD",
						enSpuName: "",
						expiredDate: "2020-09-12",
						skuCode: "",
						skuId: 1186884,
						spuId: 6359071,
						spuName: "冯振鑫商品",
						spuSpec: "SW001",
						state: 0,
						unit: 18
					}, {
						bidAmount: 200,
						cur: "USD",
						enSpuName: "",
						expiredDate: "2020-09-15",
						skuCode: "",
						skuId: 1186884,
						spuId: 6359071,
						spuName: "冯振鑫商品",
						spuSpec: "SW001",
						state: 0,
						unit: 18
					})
					if (this.list.length > 0) {
						this.list.forEach((item, index) => {
							item.checked = false
							item.down = false
							item.name = index
							item.id = index
							item.currency = 'RMB'
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
				this.$forceUpdate()
			},

			//单选
			checkboxOneChange(e) {
				this.allChecked = (this.list.length === this.list.filter(val => val.checked).length)
				this.checkedNum = this.list.filter((val) => val.checked).length
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
				uni.navigateTo({
					url: '../soonExpire/index'
				});
			},

			//点击搜索
			checkedAll() {
				this.getSupplierProduct()
			},
			
			//切换币种
			changeCurrency(item) {
				if (item.currency === 'USD') {
					item.currency = 'RMB'
					this.$forceUpdate()
					return;
				}
				if (item.currency === 'RMB') {
					item.currency = 'USD'
					this.$forceUpdate()
					return;
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
					/deep/ .u-input__input{
						min-height: 30px !important;
					}
					.pricetext {
						margin-left: 6rpx;
					}
				
					.ufield {
						flex: 1;
						border-bottom:2rpx solid #ccc;
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
	}
</style>
