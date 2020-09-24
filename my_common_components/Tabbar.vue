<template>
	<!-- 底部导航条 -->
	<u-tabbar v-model="current" :list="isRole?tabbarFourList:tabbarThreeList" active-color="#D0021B"></u-tabbar>
</template>

<script>
	export default {
		props:['isRole'],
		data() {
			return {
				//底部导航
				tabbarFourList: [{
						iconPath: "photo",
						selectedIconPath: "photo-fill",
						text: '待报价',
						customIcon: false,
						pagePath: '/pages/prepareQuoted/index',

					},
					{
						iconPath: "gift",
						selectedIconPath: "gift-fill",
						text: '商品',
						customIcon: false,
						pagePath: '/pages/commodity/index'
					},
					{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '已报价',
						customIcon: false,
						pagePath: "/pages/quotedPrice/index",

					},

					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '用户中心',
						customIcon: false,
						pagePath: "/pages/profile/index",
					},
				],
				//底部导航
				tabbarThreeList: [{
						iconPath: "photo",
						selectedIconPath: "photo-fill",
						text: '待报价',
						customIcon: false,
						pagePath: '/pages/prepareQuoted/index',

					},
					{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '已报价',
						customIcon: false,
						pagePath: "/pages/quotedPrice/index",

					},

					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '用户中心',
						customIcon: false,
						pagePath: "/pages/profile/index",
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
