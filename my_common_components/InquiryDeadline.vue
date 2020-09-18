<template>
	<view class="settimeout">{{time}}</view>
</template>



<script>
	export default {
		data() {
			return {
				time: '',
				flag: false,
				//是否期望时间>现在时间(证明定时器还要跑)
				isRun: true,
			}
		},
		mounted() {
			let time = setInterval(() => {
				if (this.flag == true) {
					clearInterval(time)
				}
				this.timeDown()
			}, 500)
		},
		props: {
			endTime: {
				type: String
			}
		},
		methods: {
			timeDown() {
				const endTime = new Date(this.endTime)
				const nowTime = new Date();
				let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000)
				let d = parseInt(leftTime / (24 * 60 * 60))
				let h = this.formate(parseInt(leftTime / (60 * 60) % 24))
				let m = this.formate(parseInt(leftTime / 60 % 60))
				let s = this.formate(parseInt(leftTime % 60))
				console.log(leftTime)
				//如期望时间<现在时间 就停掉
				if (leftTime <= 0) {
					this.isRun = false
					this.flag = true
					this.$emit('time-end')
				}
				this.time = `${d}天${h}小时${m}分` // 需要修改时间样式的话 ，比如需要什么30分钟倒计时，就只保留分和秒
			},
			formate(time) {
				if (time >= 10) {
					return time
				} else {
					return `0${time}`
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.settimeout {
		background-color: #d0021b;
		padding: 20rpx 60rpx;
		border-radius: 20rpx;
		color: #fff;
		text-align: center;
	}
</style>
