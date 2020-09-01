<template>
	<!-- 个人中心(我的) -->
	<view class="profile">
		<view class="profile_info">
			<view class="avator">
				<u-image width="110rpx" height="110rpx" shape="circle" src="https://cdn.uviewui.com/uview/example/fade.jpg"></u-image>
			</view>
			<view class="company">
				<view class="companyname">杭州红博化工有限公司</view>
				<view class="info">{{userName}}</view>
			</view>
		</view>
		<view class="empty"></view>
		<view class="count">
			<view class="bind_count">
				<view>5</view>
				<view>报价次数</view>
			</view>
			<view class="giveup_count">
				<view>2</view>
				<view>放弃次数</view>
			</view>
		</view>
		<view class="empty"></view>
		<view class="editpassword" @click="toEditPassword">
			修改密码
		</view>
		<view class="loginout">
			退出登录
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
		created() {
			this.getSupplierInfo()
		},
		data() {
			return {
				//公司名字/用户名
				userName: ""
			}
		},
		methods: {
			// 供应商信息
			async getSupplierInfo() {
				let res = await fetch(this.api.v2.supplierInfo, {
					method: "get",
					data: {
						accessToken: uni.getStorageSync('accessToken')
					}
				})
				console.log(res)
				if (res.data.code === '0') {
					this.userName = res.data.data.userName
				}
			},
			toEditPassword() {
				uni.navigateTo({
					url: '../editPassword/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.profile {
		padding: 0 40rpx;

		.empty {
			height: 15rpx;
			background-color: #f9f9f9;
		}

		.profile_info {
			display: flex;
			background-color: #fff;

			height: 185rpx;

			.company {
				margin-left: 40rpx;
				margin-top: 30rpx;

				.info {
					margin-top: 25rpx;
				}
			}

			,
			.avator {
				margin-top: 30rpx;
			}
		}

		.count {
			display: flex;
			background-color: #fff;

			>view {
				width: 50%;
				height: 130rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				>view {
					margin-top: 10rpx;
				}
			}
		}

		.editpassword,
		.loginout {
			height: 75rpx;
			line-height: 75rpx;
			border: 1px solid #f8f8f8;
			background-color: #fff;
		}

	}
</style>
