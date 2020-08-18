<template>
	<view class="login">
		<view class="login_center">
			<view class="login_center_logo">Foodchem</view>
			<view class="login_center_title">枫晴供应链管理系统</view>
			<view class="login_center_inputarea">
				<u-field 
				border="true"
				 v-model="textvalue"
				  icon="account" 
				  placeholder="账号" 
				  border-top="true" 
				  required
			      :error-message="errorTextValueMessage"
				  >
				</u-field>
				<u-field 
				border="true"
				type="password"
				v-model="password" 
				icon="lock" 
				placeholder="密码/验证码" 
				required
				:error-message="errorPasswordValueMessage"
				>
				</u-field>
			</view>
			<view class="verificationcode-login-area clearfix">
				<text class="verificationcode-login">验证码登录</text>
			</view>
			<view class="loginbtn-area">
				<u-button  type="primary">登录</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//账号
				textvalue: '',
				//密码
				password: '',
				//账号的错误提示信息
				errorTextValueMessage:'',
				//密码的错误提示信息
				errorPasswordValueMessage:''
			}
		}
	}
</script>
<style lang="scss" scoped>
	.login_center {
		width: 70%;
		margin: 100rpx auto;
	}
    .login_center_logo{
		color:#cb352f;
		font-size: 80rpx;
		font-weight: 700;
	}
	.login_center_title {
		margin: 25rpx 0 30rpx;
		font-size: 32rpx;
		font-weight:700 ;
	}
	.verificationcode-login-area{
		margin-top:40rpx;
	}
	.verificationcode-login{
		color:#4395ff;
		float: right;
	}
	.loginbtn-area{
		margin-top:40rpx;
	}
</style>
