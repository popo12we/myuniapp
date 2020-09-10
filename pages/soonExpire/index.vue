<template>
	<!-- 产品供应商商品（即将过期） -->
	<view class="soonExpire">
		<!-- 商品列表 -->
		<view class="commodity_list">
			<u-checkbox-group :wrap="true" :active-color='activeColor'>
				<u-checkbox @change="checkboxOneChange" v-model="item.checked" v-for="(item, index) in list" :key="item.id" :name="item.name">
					<view class="checkbox_view">
						<view class="checkbox_view_oneline">
							<text :class="{checkbox_view_name:true,gray:new Date(item.expiredDate).getTime()<(new Date()).valueOf()}">{{item.spuName}}</text>
							<text class="mg15">:</text>
							<text :class="{gray:new Date(item.expiredDate).getTime()<(new Date()).valueOf(),deepgray:new Date(item.expiredDate).getTime()>=(new Date()).valueOf()}">{{item.brand}}</text>
						</view>

						<view class="checkbox_view_oneline">
							<text :class="{gray:new Date(item.expiredDate).getTime()<(new Date()).valueOf(),deepgray:new Date(item.expiredDate).getTime()>=(new Date()).valueOf()}">规格</text>
							<text class="mg15">:</text>
							<text :class="{gray:new Date(item.expiredDate).getTime()<(new Date()).valueOf(),deepgray:new Date(item.expiredDate).getTime()>=(new Date()).valueOf()}">{{item.spuSpec}}</text>
						</view>

						<view class="checkbox_view_oneline">
							<text :class="{gray:new Date(item.expiredDate).getTime()<(new Date()).valueOf(),deepgray:new Date(item.expiredDate).getTime()>=(new Date()).valueOf()}">最新报价(USD)</text>
							<text class="mg15">:</text>
							<text :class="{gray:new Date(item.expiredDate).getTime()<(new Date()).valueOf(),deepgray:new Date(item.expiredDate).getTime()>=(new Date()).valueOf()}">{{item.bidAmount}}</text>
							<u-tag text="已失效" type="info" class="utag" v-if="new Date(item.expiredDate).getTime()<(new Date()).valueOf()" />
							<u-tag text="三天后到期" type="error" plain class="utag" v-if="((new Date()).valueOf()<new Date(item.expiredDate).getTime())&&(new Date(item.expiredDate).getTime()<day3After)" />
						</view>
						<view class="checkbox_view_oneline">
							<text :class="{gray:new Date(item.expiredDate).getTime()<(new Date()).valueOf(),deepgray:new Date(item.expiredDate).getTime()>=(new Date()).valueOf()}">有效期</text>
							<text class="mg15">:</text>
							<text :class="{gray:new Date(item.expiredDate).getTime()<(new Date()).valueOf(),deepgray:new Date(item.expiredDate).getTime()>=(new Date()).valueOf()}">{{item.expiredDate||'NA'}}</text>
						</view>
						<view class="checkbox_view_oneline">
							<u-button type="error" size="mini" class="checkbox_view_oneline_btn" plain>更新报价</u-button>
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
		data() {
			return {
				//默认checkbox选中颜色
				activeColor: "#D0021B",
				//全选
				allChecked: false,
				//三天后过期的时间戳
				day3After: (new Date(new Date(new Date().toLocaleDateString()).getTime() + 3 * 24 * 60 * 60 * 1000 - 1)).valueOf(),
				//所有数据
				list: uni.getStorageSync('day3AfterList')
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
				this.$forceUpdate()
			},

			//单选
			checkboxOneChange(e) {
				this.allChecked = (this.list.length === this.list.filter(val => val.checked).length)
				this.$forceUpdate()
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

	.soonExpire {
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
			}
		}

		.btn {
			padding: 0 40rpx;
		}
	}
</style>
