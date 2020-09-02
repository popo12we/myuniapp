<template>
	<!-- 登录 -->
	<view class="login">
		<u-toast ref="errorLoginToast" position="top" />
		<view class="login_center">
			<view class="login_center_logo">Foodchem</view>
			<view class="login_center_title">枫晴供应链管理系统</view>
			<view class="login_center_inputarea">
				<u-field border="true" v-model="textvalue" icon="account" placeholder="账号" border-top="true" required
				 :error-message="errorTextValueMessage">
				</u-field>
				<u-field border="true" type="password" v-model="password" icon="lock" placeholder="密码/验证码" required :error-message="errorPasswordValueMessage">
				</u-field>
			</view>
			<view class="verificationcode-login-area clearfix">
				<text class="verificationcode-login">验证码登录</text>
			</view>
			<view class="loginbtn-area">
				<u-button type="error" @click="login">登录</u-button>
			</view>
		</view>

	</view>
</template>

<script>
	import fetch from '../../utils/fetch.js'
	var RSA = require('../../utils/wxapp_rsa.js')
	export default {
		data() {
			return {
				//账号
				textvalue: '',
				//密码
				password: '',
				//账号的错误提示信息
				errorTextValueMessage: '',
				//密码的错误提示信息
				errorPasswordValueMessage: ''
			}
		},

		methods: {
			//点击登录
			async login() {
				//加密公钥私钥
				let publicKey_pkcs1 =
					`-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJUEyICiHyhpZPZM/qCJkHMXvrsbqPbhxGNp+rCBI4TTgpqlvyzJ5i0n3DIsF2rRT8kN0dETkCWlDwLnOqQnFN8CAwEAAQ==-----END PUBLIC KEY-----`;
				let privateKey_pkcs1 =
					`-----BEGIN PRIVATE KEY-----MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAlQTIgKIfKGlk9kz+oImQcxe+uxuo9uHEY2n6sIEjhNOCmqW/LMnmLSfcMiwXatFPyQ3R0ROQJaUPAuc6pCcU3wIDAQABAkABRfkwoDID9mKWeDH0zTgew6UtlB7tfSBgeRdbSr8y81hXfgJcyI/rbQDgDs0T6RTJluZsWANFRArJUqfToD8BAiEA53Yjk02hN52QC7zZvbuETo/JsPVVdTcO3Z7PJGqQx/kCIQCk0SXlG/5NpvFG1I4sjzpmZx+NFvjLuAsymHalo5xplwIhALR744u2SdMTMsJkVSlkcevMpUouU5/d+eKINh/AVPsJAiBKftY4Bj0dcBWiRDS2404sNvRF21o9CkTVa6BFIfxypQIgfwJt2qdBDpJX76DsW1TIFKNYOENMFinaH3qPLGkUZQ4=-----END PRIVATE KEY-----`;
				// 加密 【加密字段长度不大于117】
				let encrypt_rsa = new RSA.RSAKey();
				encrypt_rsa = RSA.KEYUTIL.getKey(publicKey_pkcs1);
				let encStr = encrypt_rsa.encrypt(this.password)
				encStr = RSA.hex2b64(encStr);
				let res = await fetch(this.api.v2.login, {
					method: "post",
					data: {
						account: 13011111111,
						password: encStr
					}
				})

				if (res.data.code === '0') {
					// res.data.supplierNature  1采购供应商2物流供应商
					uni.setStorageSync('roleId', res.data.data.supplierNature)
					uni.setStorageSync('accessToken', res.data.data.accessToken)
					var accessToken = res.data.data.accessToken
					wx.login({
						success: async res => {
							if (res.code) {
								// console.log(res.code)
								let res1 = await fetch(this.api.v2.codeSession, {
									method: "get",
									data: {
										code: res.code,
										accessToken
									}
								})
								if(res1.data.code==='0'){
									uni.switchTab({
										url: '../prepareQuoted/index'
									})
								}
							} else {
								this.$refs.errorLoginToast.show({
									title: res1.data.msg,
									type: 'error',
									position: 'top'
								})
							}
						}
					})
					
				} else {
					this.$refs.errorLoginToast.show({
						title: res.data.msg,
						type: 'error',
						position: 'top'
					})
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.login_center {
		width: 70%;
		margin: 100rpx auto;
		z-index: 1;
	}

	.login_center_logo {
		color: #cb352f;
		font-size: 80rpx;
		font-weight: 700;
	}

	.login_center_title {
		margin: 25rpx 0 30rpx;
		font-size: 32rpx;
		font-weight: 700;
	}

	.verificationcode-login-area {
		margin-top: 40rpx;
	}

	.verificationcode-login {
		color: #4395ff;
		float: right;
	}

	.loginbtn-area {
		margin-top: 40rpx;
	}
</style>
