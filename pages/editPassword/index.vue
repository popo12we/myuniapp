<template>
	<!-- 修改密码 -->
	<view class="editpassword">
		<u-form :model="form" ref="uForm" label-width="135">
			<u-form-item label="旧密码" prop="oldPassword">
				<u-input v-model="form.oldPassword" placeholder="请输入旧密码" />
			</u-form-item>
			<u-form-item label="新密码" prop="newPassword">
				<u-input v-model="form.newPassword" placeholder="请输入新密码" />
			</u-form-item>
			<u-form-item label="确认密码" prop="confirmPassword">
				<u-input v-model="form.confirmPassword" placeholder="请输入确认密码" />
			</u-form-item>
		</u-form>
		<u-button type="error" class="btn" @click="submitEditPassword">提交</u-button>
		<!-- toast -->
		<u-toast ref="toast" position="top" />
	</view>
</template>

<script>
	import fetch from '../../utils/fetch.js'
	let RSA = require('../../utils/wxapp_rsa.js')
	export default {
		data() {
			return {
				form: {
					oldPassword: "",
					newPassword: "",
					confirmPassword: ""
				},
				//校验规则
				rules: {
					oldPassword: [{
						required: true,
						message: '请输入旧密码',
						trigger: ['change', 'blur']
					}],
					newPassword: [{
						required: true,
						message: '请输入新密码',
						trigger: ['change', 'blur']
					}],
					confirmPassword: [{
						required: true,
						message: '请确认新密码',
						trigger: ['change', 'blur']
					}],
				}
			}
		},
		
		onReady() {
			this.$refs.uForm.setRules(this.rules)
		},
		
		methods: {
			//修改密码
			async submitEditPassword() {
				this.$refs.uForm.validate(async valid => {
					if (valid) {
						//加密公钥私钥
						let publicKey_pkcs1 =
							`-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJUEyICiHyhpZPZM/qCJkHMXvrsbqPbhxGNp+rCBI4TTgpqlvyzJ5i0n3DIsF2rRT8kN0dETkCWlDwLnOqQnFN8CAwEAAQ==-----END PUBLIC KEY-----`;
						let privateKey_pkcs1 =
							`-----BEGIN PRIVATE KEY-----MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAlQTIgKIfKGlk9kz+oImQcxe+uxuo9uHEY2n6sIEjhNOCmqW/LMnmLSfcMiwXatFPyQ3R0ROQJaUPAuc6pCcU3wIDAQABAkABRfkwoDID9mKWeDH0zTgew6UtlB7tfSBgeRdbSr8y81hXfgJcyI/rbQDgDs0T6RTJluZsWANFRArJUqfToD8BAiEA53Yjk02hN52QC7zZvbuETo/JsPVVdTcO3Z7PJGqQx/kCIQCk0SXlG/5NpvFG1I4sjzpmZx+NFvjLuAsymHalo5xplwIhALR744u2SdMTMsJkVSlkcevMpUouU5/d+eKINh/AVPsJAiBKftY4Bj0dcBWiRDS2404sNvRF21o9CkTVa6BFIfxypQIgfwJt2qdBDpJX76DsW1TIFKNYOENMFinaH3qPLGkUZQ4=-----END PRIVATE KEY-----`;
						// 加密 【加密字段长度不大于117】
						let encrypt_rsa = new RSA.RSAKey()
						encrypt_rsa = RSA.KEYUTIL.getKey(publicKey_pkcs1);
						let oldPassword = encrypt_rsa.encrypt(this.form.oldPassword)
						oldPassword = RSA.hex2b64(oldPassword)
						let newPassword = encrypt_rsa.encrypt(this.form.newPassword)
						newPassword = RSA.hex2b64(newPassword)
						let confirmPassword = encrypt_rsa.encrypt(this.form.confirmPassword)
						confirmPassword = RSA.hex2b64(confirmPassword)
						let res = await fetch(this.api.v2.updatePassword, {
							method: "post",
							data: {
								accessToken: uni.getStorageSync('accessToken'),
								oldPassword,
								newPassword,
								confirmPassword
							}
						})
						if (res.data.code === '0') {
							this.$refs.toast.show({
								title: '修改密码成功',
								type: 'success',
								position: 'top'
							})
							setTimeout(function(){
								uni.navigateTo({
									url: '../login/index'
								})
							},2000)
						} else {
							this.$refs.toast.show({
								title: '修改密码失败',
								type: 'error',
								position: 'top'
							})
						}
						this.clearForm()
					}
				})
			},
			//清空密码
			clearForm() {
				this.form = {
					oldPassword: "",
					newPassword: "",
					confirmPassword: ""
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.editpassword {
		padding: 0 40rpx;

		.btn {
			margin-top: 30rpx;
		}
	}
</style>
