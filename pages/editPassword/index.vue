<template>
	<!-- 修改密码 -->
	<view class="editpassword">
		<u-form :model="form" ref="uForm" label-width="135">
				<u-form-item label="旧密码"><u-input v-model="form.oldPassword" /></u-form-item>
				<u-form-item label="新密码"><u-input v-model="form.newPassword" /></u-form-item>
				<u-form-item label="确认密码"><u-input v-model="form.comfirmPassword"/></u-form-item>
	   </u-form>
	   <u-button type="error" class="btn">提交</u-button>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				form:{
					oldPassword:"",
					newPassword:"",
					comfirmPassword:""
				}
			}
		}
	}
</script>

<style  lang="scss" scoped>
	.editpassword{
		padding:0 40rpx;
		.btn{
			margin-top:30rpx;
			}
	}
</style>
