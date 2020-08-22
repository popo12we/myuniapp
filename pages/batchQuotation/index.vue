<template>
	<!-- 商品（点了批量报价后） -->
	<view class="batchQuotation">
		<!-- 批量报价项 -->
		<view class="batchQuotation_list">
			<view class="batchQuotation_list_item">
				<view class="batchQuotation_list_item_oneline">
					<text class="batch_name">甜蜜素</text>
					<text class="mg15">:</text>
					<text class="gray">莲花</text>
				</view>
				<view class="batchQuotation_list_item_oneline">
					<text class="gray">规格</text>
					<text class="mg15">:</text>
					<text class="gray">Emulsion</text>
				</view>
				<view class="batchQuotation_list_item_oneline price_change">
					<text class="gray">价格</text>
					<text class="mg15"></text>
					<u-field :border-bottom="true" class="ufield" :label-width="0">
					</u-field>
					<text class="mg15"></text>
					<text>USD</text>
					<text class="mg15"></text>
					<text class="change">切换</text>
				</view>
			</view>

			<view class="batchQuotation_list_item">
				<view class="batchQuotation_list_item_oneline">
					<text class="batch_name">甜蜜素</text>
					<text class="mg15">:</text>
					<text class="gray">莲花</text>
				</view>
				<view class="batchQuotation_list_item_oneline">
					<text class="gray">规格</text>
					<text class="mg15">:</text>
					<text class="gray">Emulsion</text>
				</view>
				<view class="batchQuotation_list_item_oneline price_change">
					<text class="gray">价格</text>
					<text class="mg15"></text>
					<u-field :border-bottom="true" class="ufield" :label-width="0">
					</u-field>
					<text class="mg15"></text>
					<text>USD</text>
					<text class="mg15"></text>
					<text class="change">切换</text>
				</view>
			</view>
		</view>

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
					<text class="text">趋势说明</text>
					<u-field :border-bottom="true" class="ufield" :label-width="0" :clearable="false">
					</u-field>
				</view>
			</view>
		</view>
		
		<view class="btn-area">
			<u-button type="error">批量报价</u-button>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.batchQuotation {
		padding: 0 40rpx;

		//批量报价项
		.batchQuotation_list {
			/deep/ .u-field {
				padding: 0;
			}

			.batchQuotation_list_item {
				padding: 20rpx 0;
				border-bottom: 2rpx solid #f1f1f1;

				.batchQuotation_list_item_oneline {
					margin-top: 20rpx;

					.batch_name {
						color: #333;
						font-weight: 700;
						font-size: 32rpx;
					}
				}

			}

			.price_change {
				display: flex;

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

		//报价
		.quotation_area_oneline {
			display: flex;
			
			.quotation_area_oneline_item {
				display: flex;
				width: 50%;
				
				.ufield {
					flex: 1
				}
				.text{
					align-self: center;
				}
			}
		}
		
		.btn-area{
			margin-top:20rpx;
		}
	}
</style>
