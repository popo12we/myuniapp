<template>
	<!-- 底部导航条 -->
	<u-tabbar v-model="current" :list="tabbarList" @change="changeTab"></u-tabbar>
</template>

<script>
	export default {
		data(){
			return {
				
				//底部导航
				tabbarList: [{
						iconPath: "home",
						text: '待报价',
						customIcon: false,
					},
					{
						iconPath: "photo",
						text: '商品',
						customIcon: false,
					},
					{
						iconPath: "play-right",
						text: '已报价',
						customIcon: false,
					},
					{
						iconPath: "account",
						text: '我的',
						customIcon: false,
					},
				]
			}
		},
		
		methods:{
			changeTab(e){
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
