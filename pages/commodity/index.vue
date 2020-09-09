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
		<view class="commodity_list_tips">您有两个产品价格将在三天之后过期</view>

		<!-- 商品列表 -->
		<view class="commodity_list">
			<u-checkbox-group :wrap="true" :active-color='activeColor'>
				<u-checkbox @change="checkboxOneChange" v-model="item.checked" v-for="(item, index) in list" :key="item.id" :name="item.name">
					<view class="checkbox_view">
						<view class="checkbox_view_oneline">
							<text class="checkbox_view_name gray">{{item.spuName}}</text>
							<text class="mg15">:</text>
							<text class="gray">{{item.brand}}</text>
						</view>

						<view class="checkbox_view_oneline">
							<text class="gray">规格</text>
							<text class="mg15">:</text>
							<text class="gray">{{item.spuSpec}}</text>
						</view>

						<view class="checkbox_view_oneline">
							<text class="gray">最新报价(USD)</text>
							<text class="mg15">:</text>
							<text class="gray">{{item.bidAmount}}</text>
							<u-tag text="已失效" type="info" class="utag" />
							<u-button type="error" size="mini" class="checkbox_view_oneline_btn">更新报价</u-button>
						</view>
					</view>
				</u-checkbox>
			</u-checkbox-group>
		</view>
		<view class="btn">
			<u-button @click="batchFilling" type="error" plain>批量填写</u-button>
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
        created(){
			console.log(this.$store)
		},
		data() {
			return {
				name: "",
				//默认checkbox选中颜色
				activeColor: "#D0021B",
				//全选
				allChecked: false,
				list: []
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
						accessToken:uni.getStorageSync('accessToken')
					}
				})
			
				if (res.data.code === '0') {
					this.list=res.data.data
					if (this.list.length > 0) {
						this.list.forEach((item, index) => {
							item.checked = false
							item.down = false
							item.name = index
							item.id = index
						})
					}
				}
			},
			// 全选
			checkboxAllChange() {
				this.allChecked ? this.list.map(val => {
					val.checked = true;
				}) : this.list.map(val => {
					val.checked = false;
				})
				this.$forceUpdate()
			},

			//单选
			checkboxOneChange(e) {
				this.allChecked = (this.list.length === this.list.filter(val => val.checked).length)
				this.$forceUpdate()
			},

			//批量填写
			batchFilling() {
				uni.navigateTo({
					url: '../batchQuotation/index'
				});
			},
			
			//点击搜索
			checkedAll(){
				
			}

		}
	};
</script>

<style lang="scss" scoped>
	//公共样式
	.gray {
		color: #c9c9c9 !important;
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
				float: none;
				display: block;
				margin-left: 20rpx;
				padding: 25rpx 0;
				width: 100%;
				color: #868686;

				.checkbox_view_name {
					font-weight: 700;
					font-size: 32rpx;
					color: #666;
				}

				.utag {
					margin-left: 20rpx;
				}

				.checkbox_view_oneline_btn {
					margin-left: 20rpx;
				}
			}
		}

		.btn {
			padding: 0 40rpx;
		}
	}
</style>
