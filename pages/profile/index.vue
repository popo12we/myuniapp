<template>
	<!-- 个人中心(我的) -->
	<view class="profile">
		<view class="profile_info">
			<view class="avator">
				<u-image width="110rpx" height="110rpx" shape="circle" src="https://cdn.uviewui.com/uview/example/fade.jpg"></u-image>
			</view>
			<view class="company">
				<view class="companyname">{{userName}}</view>
			</view>
		</view>
		<view class="empty"></view>
		<view class="count">
			<view class="bind_count">
				<view>{{offerCount}}</view>
				<view>报价次数</view>
			</view>
			<view class="giveup_count">
				<view>{{giveupCount}}</view>
				<view>放弃次数</view>
			</view>
		</view>
		<view class="empty"></view>
		<view class="editpassword" @click="toEditPassword">
			修改密码
		</view>
		<view class="loginout" @click="loginOut">
			退出登录
		</view>
		<!-- 底部导航 -->
		<Tabbar :isRole="isRole"></Tabbar>
		<u-modal v-model="modelShow" content="是否退出登录" :show-title='false' :show-cancel-button="true" cancel-text="取消" @confirm="confirmLoginOut" confirm-color="#D0021B"></u-modal>
	</view>
</template>

<script>
	import Tabbar from '../../my_common_components/Tabbar.vue'
	import fetch from '../../utils/fetch.js'
	export default {
		components: {
			Tabbar
		},
		onShow() {
			this.isRole=uni.getStorageSync('roleId') === 1 ? true : false
			this.getSupplierInfo()
		},
		data() {
			return {
				//公司名字/用户名
				userName: "",
				//报价次数
				offerCount:0,
				//放弃报价次数
				giveupCount:0,
				//退出模态框
				modelShow:false,
				//判断哪个角色权限
				isRole :uni.getStorageSync('roleId') === 1 ? true : false
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
				if (res.data.code === '0') {
					this.userName = res.data.data.userName
					this.offerCount = res.data.data.offerCount
					this.giveupCount = res.data.data.giveupCount
				}
			},
			//跳转到修改密码
			toEditPassword() {
				uni.navigateTo({
					url: '../editPassword/index'
				})
			},
			//退出登录
			loginOut(){
				this.modelShow=true
			},
			
			//点击确定退出登录
			confirmLoginOut(){
				uni.removeStorageSync('roleId')
				uni.removeStorageSync('accessToken')
				uni.navigateTo({
					url: '../login/index'
				})
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
