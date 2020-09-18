<template>
	<!-- 登录 -->
	<view class="login">
		<u-loading mode="flower" :show="isLoading" class="loading"></u-loading>
		<u-toast ref="errorLoginToast" position="top" />
		<view class="login_center">
			<view class="login_center_logo">Foodchem</view>
			<view class="login_center_title">枫晴供应链管理系统</view>
			<u-form :model="form" ref="uForm">
				<u-form-item label="账号" prop="username">
					<u-input v-model="form.username" placeholder="请输入账号" />
				</u-form-item>
				<u-form-item label="密码" prop="password">
					<u-input v-model="form.password" type="password" placeholder="请输入密码" />
				</u-form-item>
			</u-form>
			<view class="verificationcode-login-area clearfix">
				<text class="verificationcode-login">验证码登录</text>
			</view>
			<view class="loginbtn-area">
				<!-- <button open-type="getUserInfo" @getuserinfo="onGotUserInfo">按钮</button> -->
				<u-button type="error" open-type="getUserInfo" @click="login">登录</u-button>
			</view>
		</view>

	</view>
</template>

<script>
	import fetch from '../../utils/fetch.js'
	let RSA = require('../../utils/wxapp_rsa.js')
	export default {
		data() {
			return {
				form: {
					//账号
					username: '',
					//密码
					password: '',
				},
				//校验规则
				rules: {
					username: [{
							required: true,
							message: '请输入账号',
							trigger: ['change', 'blur']
						},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							trigger: ['change', 'blur'],
						}
					],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: ['change', 'blur']
					}]
				},
				//是否打开加载动画
				isLoading: false,
			}
		},
		created() {
			this.isUpdated()
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},

		methods: {
			//是否更新
			isUpdated() {
				const updateManager = wx.getUpdateManager()
				updateManager.onUpdateReady(function() {
					wx.showModal({
						title: '更新提示',
						content: '新版本已经准备好，是否重启应用？',
						success: function(res) {
							if (res.confirm) {
								// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
								updateManager.applyUpdate()
							}
						}
					})
				})

				updateManager.onUpdateFailed(function() {
					// 新版本下载失败
					this.$refs.toast.show({
						title: '下载失败',
						type: 'error',
						position: 'top'
					})
				})
			},
			//点击登录
			// async onGotUserInfo(e) {
			// 	console.log(e)
			// 	let encryptedData=e.mp.detail.encryptedData
			// 	let iv=e.mp.detail.iv

			// 	this.$refs.uForm.validate(async valid => {
			// 		if (valid) {
			// 			this.isLoading = true
			// 			//加密公钥私钥
			// 			let publicKey_pkcs1 =
			// 				`-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJUEyICiHyhpZPZM/qCJkHMXvrsbqPbhxGNp+rCBI4TTgpqlvyzJ5i0n3DIsF2rRT8kN0dETkCWlDwLnOqQnFN8CAwEAAQ==-----END PUBLIC KEY-----`;
			// 			let privateKey_pkcs1 =
			// 				`-----BEGIN PRIVATE KEY-----MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAlQTIgKIfKGlk9kz+oImQcxe+uxuo9uHEY2n6sIEjhNOCmqW/LMnmLSfcMiwXatFPyQ3R0ROQJaUPAuc6pCcU3wIDAQABAkABRfkwoDID9mKWeDH0zTgew6UtlB7tfSBgeRdbSr8y81hXfgJcyI/rbQDgDs0T6RTJluZsWANFRArJUqfToD8BAiEA53Yjk02hN52QC7zZvbuETo/JsPVVdTcO3Z7PJGqQx/kCIQCk0SXlG/5NpvFG1I4sjzpmZx+NFvjLuAsymHalo5xplwIhALR744u2SdMTMsJkVSlkcevMpUouU5/d+eKINh/AVPsJAiBKftY4Bj0dcBWiRDS2404sNvRF21o9CkTVa6BFIfxypQIgfwJt2qdBDpJX76DsW1TIFKNYOENMFinaH3qPLGkUZQ4=-----END PRIVATE KEY-----`;
			// 			// 加密 【加密字段长度不大于117】
			// 			let encrypt_rsa = new RSA.RSAKey();
			// 			encrypt_rsa = RSA.KEYUTIL.getKey(publicKey_pkcs1);
			// 			let encStr = encrypt_rsa.encrypt(this.form.password)
			// 			encStr = RSA.hex2b64(encStr);
			// 			let res = await fetch(this.api.v2.login, {
			// 				method: "post",
			// 				data: {
			// 					account: this.form.username,
			// 					password: encStr
			// 				}
			// 			})
			// 			if (res) {
			// 				this.isLoading = false
			// 			}
			// 			if (res.data.code === '0') {
			// 				// res.data.supplierNature  1采购供应商2物流供应商
			// 				uni.setStorageSync('roleId', res.data.data.supplierNature)
			// 				uni.setStorageSync('accessToken', res.data.data.accessToken)
			// 				var accessToken = res.data.data.accessToken
			// 				// 1调wx.login
			// 				wx.login({
			// 					success: async res => {
			// 						if (res.code) {
			// 							let res1 = await fetch(this.api.v2.encryedData, {
			// 								method: "post",
			// 								data: {
			// 									code: res.code,
			// 									encryptedData,
			// 									iv,
			// 									accessToken
			// 								}
			// 							})
			// 							if (res1.data.code === '0') {
			// 								uni.switchTab({
			// 									url: '../prepareQuoted/index'
			// 								})
			// 							}else{
			// 								this.$refs.errorLoginToast.show({
			// 									title: res1.data.msg,
			// 									type: 'error',
			// 									position: 'top'
			// 								})
			// 							}
			// 						} else {
			// 							this.$refs.errorLoginToast.show({
			// 								title: res1.data.msg,
			// 								type: 'error',
			// 								position: 'top'
			// 							})
			// 						}
			// 					}
			// 				})

			// 			} else {
			// 				this.$refs.errorLoginToast.show({
			// 					title: res.data.msg,
			// 					type: 'error',
			// 					position: 'top'
			// 				})
			// 			}
			// 		}
			// 	})
			// }
			login() {
				wx.login({
					success: async res => {
						let code=res.code
						if (res.code) {
							//wx.login就是要拿这个res.code
							wx.getUserInfo({
								success: res => {
									let encryptedData = res.encryptedData
									let iv = res.iv

									this.$refs.uForm.validate(async valid => {
										if (valid) {
											this.isLoading = true
											//加密公钥私钥
											let publicKey_pkcs1 =
												`-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJUEyICiHyhpZPZM/qCJkHMXvrsbqPbhxGNp+rCBI4TTgpqlvyzJ5i0n3DIsF2rRT8kN0dETkCWlDwLnOqQnFN8CAwEAAQ==-----END PUBLIC KEY-----`;
											let privateKey_pkcs1 =
												`-----BEGIN PRIVATE KEY-----MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAlQTIgKIfKGlk9kz+oImQcxe+uxuo9uHEY2n6sIEjhNOCmqW/LMnmLSfcMiwXatFPyQ3R0ROQJaUPAuc6pCcU3wIDAQABAkABRfkwoDID9mKWeDH0zTgew6UtlB7tfSBgeRdbSr8y81hXfgJcyI/rbQDgDs0T6RTJluZsWANFRArJUqfToD8BAiEA53Yjk02hN52QC7zZvbuETo/JsPVVdTcO3Z7PJGqQx/kCIQCk0SXlG/5NpvFG1I4sjzpmZx+NFvjLuAsymHalo5xplwIhALR744u2SdMTMsJkVSlkcevMpUouU5/d+eKINh/AVPsJAiBKftY4Bj0dcBWiRDS2404sNvRF21o9CkTVa6BFIfxypQIgfwJt2qdBDpJX76DsW1TIFKNYOENMFinaH3qPLGkUZQ4=-----END PRIVATE KEY-----`;
											// 加密 【加密字段长度不大于117】
											let encrypt_rsa = new RSA.RSAKey();
											encrypt_rsa = RSA.KEYUTIL.getKey(publicKey_pkcs1);
											let encStr = encrypt_rsa.encrypt(this.form.password)
											encStr = RSA.hex2b64(encStr);
											let res = await fetch(this.api.v2.login, {
												method: "post",
												data: {
													account: this.form.username,
													password: encStr
												}
											})
											if (res) {
												this.isLoading = false
											}
											if (res.data.code === '0') {
												// res.data.supplierNature  1采购供应商2物流供应商
												uni.setStorageSync('roleId', res.data.data.supplierNature)
												uni.setStorageSync('accessToken', res.data.data.accessToken)
												var accessToken = res.data.data.accessToken

												let res1 = await fetch(this.api.v2.encryedData, {
													method: "post",
													data: {
														code,
														encryptedData,
														iv,
														accessToken
													}
												})
												if (res1.data.code === '0') {
													uni.switchTab({
														url: '../prepareQuoted/index'
													})
												} else {
													this.$refs.errorLoginToast.show({
														title: res1.data.msg,
														type: 'error',
														position: 'top'
													})
												}




											} else {
												this.$refs.errorLoginToast.show({
													title: res.data.msg,
													type: 'error',
													position: 'top'
												})
											}
										}
									})
								}
							})
						}
					}
				})
			}

		}
	}
</script>
<style lang="scss" scoped>
	.login {
		position: relative;

		.loading {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}

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
	}
</style>
