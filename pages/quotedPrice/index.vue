<template>
	<view>
		<!-- 产品供应商已报价（非竞价模式） -->
		<view class="quotedPrice" v-if="isRole">
			<!-- 输入框 -->
			<view class="inp_area">
				<u-field v-model="keywords" placeholder="请输入产品编号或名称" label-width="0" class="ufield" :border-bottom="false">
				</u-field>
				<u-button @click="checkedAll" type="error" size='mini' class="search_btn">搜索</u-button>
			</view>

			<!-- 商品列表 -->
			<view class="commodity_list">
				<u-checkbox-group :wrap="true" :active-color='activeColor'>
					<u-collapse :accordion="false">
						<view class="checkbox_view" v-for="(item, index) in list" :key="index" :name="item.name">
							<view :class="{checkbox_view_oneline:true,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">
								<text :class="{checkbox_view_name:true,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">{{item.spuName}}</text>
								<text class="mg15"></text>
								<text :class="{checkbox_view_tab:true,redbg:showTag(item)==='竞价',bluebg:showTag(item)==='询盘',orangebg:showTag(item)==='实单'}">{{showTag(item)}}</text>
								<view :class="{isWinBidding:true,graybg:item.statusDesc==='已放弃'||item.statusDesc==='已结束',orangebg:showTag(item)==='实单'&&item.statusDesc!=='已放弃'&&item.statusDesc!=='已结束',redbg:showTag(item)==='竞价'&&item.statusDesc!=='已放弃'&&item.statusDesc!=='已结束',bluebg:showTag(item)==='询盘'&&item.statusDesc!=='已放弃'&&item.statusDesc!=='已结束'}">{{item.statusDesc}}</view>
							</view>

							<view class="checkbox_view_oneline">
								<u-row gutter="16">
									<u-col span="7">
										<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">规格</text>
										<text class="mg15">:</text>
										<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">{{item.spuSpec}}</text>
									</u-col>
									<u-col span="5">
										<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">品牌</text>
										<text class="mg15">:</text>
										<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">{{item.brand}}</text>
									</u-col>
								</u-row>
							</view>

							<view class="checkbox_view_oneline">
								<u-row gutter="16">
									<u-col span="7">
										<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">包装</text>
										<text class="mg15">:</text>
										<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">{{item.packageInfo}}</text>
									</u-col>
									<u-col span="5">
										<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">数量</text>
										<text class="mg15">:</text>
										<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">{{item.saleQty}}{{item.unit}}</text>
									</u-col>
								</u-row>
							</view>
							<view class="checkbox_view_oneline">
								<u-row gutter="16">
									<u-col span="12">
										<view>
											<text :class="{red:item.statusDesc!=='已放弃',shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">{{item.inquiryDeadline}}</text>
											<text :class="{red:item.statusDesc!=='已放弃',shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}"
											 v-if="item.inquiryDeadline">截止报价</text>

										</view>
									</u-col>
								</u-row>
							</view>
							<view class="checkbox_view_oneline">
								<u-row gutter="16">
									<u-col span="12">
										<u-button type="error" shape="circle" plain size="medium" class='fr mt15' @click="toBidding(item)">详情</u-button>
									</u-col>
								</u-row>
							</view>
							<u-collapse-item>
								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="7">
											<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">{{item.shipPort}}</text>
											<text class="mg15">---</text>
											<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">{{item.destinationPort}}</text>
										</u-col>
										<u-col span="5">
											<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">{{item.cargoWeight}}</text>
										</u-col>
									</u-row>
								</view>

								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="7">
											<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">期望{{item.expeDeliDay}}天交货</text>
										</u-col>
										<u-col span="5">
											<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">打托</text>
											<text class="mg15">:</text>
											<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">{{item.ifPlay}}</text>
										</u-col>
									</u-row>
								</view>
								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="12">
											<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">询价单编号：{{item.inquiryCode}}</text>
										</u-col>
									</u-row>
								</view>

								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="12">
											<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">备注:</text>
										</u-col>
									</u-row>
								</view>
								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="12">
											<text :class="{gray,shallowgray:item.statusDesc==='已放弃'||item.statusDesc==='已结束'}">{{item.remarks}}</text>
										</u-col>
									</u-row>
								</view>
							</u-collapse-item>
						</view>
					</u-collapse>
				</u-checkbox-group>
			</view>
		</view>

		<view class="logisticsQuotedPrice" v-if="!isRole">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#D0021B" ref="tabs" :list="tabTitlelist" :current="current" @change="change" :is-scroll="false"
				 swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<!-- 输入框 -->
							<view class="inp_area">
								<!-- 全选 -->
								<u-field v-model="name" placeholder="请输入产品编号或名称" label-width="0" class="ufield" :border-bottom="false">
								</u-field>
								<u-button @click="checkedAll" type="error" size='mini' class="search_btn">搜索</u-button>
							</view>

							<!-- 商品列表 -->
							<view class="commodity_list">
								<view class="checkbox_view" v-for="(item, index) in logisticsGeneralList" :key="index">
									<view class="checkbox_view_oneline  checkbox_view_oneline_title">
										<view :class="{secondtext:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.startPort}}</view>
										<view class="thirdtext">
											<view :class="{shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">直达</view>
											<view :class="{shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">——</view>
										</view>
										<view :class="{fourthtext:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.arrivePort}}</view>
										<text class="mg15"></text>
										<text :class="{checkbox_view_tab:true,redbg:showTagIsoutbid(item)==='已中标'||showTagState(item)==='已报价',graybg:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">实盘</text>
										<view :class="{isWinBidding:true,redbg:showTagIsoutbid(item)==='已中标',graybg:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标',orangebg:showTagState(item)==='已报价'}">{{showTagState(item)}}</view>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="7">
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">箱型</text>
												<text class="mg15">:</text>
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.cabinetType}}</text>
											</u-col>
											<u-col span="5">
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">截止日期</text>
												<text class="mg15">:</text>
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.biddeadLine}}</text>
											</u-col>
										</u-row>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="7">
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">货盘类型</text>
												<text class="mg15">:</text>
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.palletType}}</text>
											</u-col>
											<u-col span="5">
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">货物总量</text>
												<text class="mg15">:</text>
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.footNumber}}*{{item.cabinetType}}</text>
											</u-col>
										</u-row>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="7">
												<view>
													<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">货物毛重</text>
													<text class="mg15"></text>
													<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.gw}}</text>
												</view>
											</u-col>
											<u-col span="5">
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">预计出运</text>
												<text class="mg15">:</text>
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.planshipDate}}</text>
											</u-col>
										</u-row>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="7">
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.loadDock}}</text>
												<text class="mg15">--</text>
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.unLoadDock}}</text>
											</u-col>
											<u-col span="5">
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">货物类型</text>
												<text class="mg15">--</text>
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">一般化工品</text>
											</u-col>
										</u-row>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-button shape="circle" plain size="medium" class='fr' v-if="(showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标')"
											 @click="toBiddingLogistics(item,'实盘询价')">详情</u-button>
											<u-button type="error" shape="circle" plain size="medium" class='fr' v-if="!(showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标')"
											 @click="toBiddingLogistics(item,'实盘询价')">详情</u-button>
										</u-row>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<!-- 输入框 -->
							<view class="inp_area">
								<!-- 全选 -->
								<u-field v-model="name" placeholder="请输入产品编号或名称" label-width="0" class="ufield" :border-bottom="false">
								</u-field>
								<u-button @click="checkedAll" type="error" size='mini' class="search_btn">搜索</u-button>
							</view>

							<!-- 商品列表 -->
							<view class="commodity_list">
								<view class="checkbox_view" v-for="(item, index) in logisticsUngeneralList" :key="index">
									<view class="checkbox_view_oneline  checkbox_view_oneline_title">
										<view :class="{secondtext:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.startPort}}</view>
										<view class="thirdtext">
											<view :class="{shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">直达</view>
											<view :class="{shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">——</view>
										</view>
										<view :class="{fourthtext:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.arrivePort}}</view>
										<text class="mg15"></text>
										<text :class="{checkbox_view_tab:true,bluebg:showTagIsoutbid(item)==='已中标'||showTagState(item)==='已报价',graybg:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">常规</text>
										<view :class="{isWinBidding:true,redbg:showTagIsoutbid(item)==='已中标',graybg:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标',orangebg:showTagState(item)==='已报价'}">{{showTagState(item)}}</view>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="7">
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">货物总量</text>
												<text class="mg15">:</text>
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.footNumber}}*{{item.cabinetType}}</text>
											</u-col>
											<u-col span="5">
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">截止日期</text>
												<text class="mg15">:</text>
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.biddeadLine}}</text>
											</u-col>
										</u-row>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="7">
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">货盘类型</text>
												<text class="mg15">:</text>
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.palletType}}</text>
											</u-col>
											<u-col span="5">
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">危险品</text>
												<text class="mg15">:</text>
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.danger===1?'是':'否'}}*{{item.cabinetType}}</text>
											</u-col>
										</u-row>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="7">
												<view>
													<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">货物毛重</text>
													<text class="mg15"></text>
													<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.gw}}</text>
												</view>
											</u-col>
											<u-col span="5">
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">预计出运</text>
												<text class="mg15">:</text>
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.planshipDate}}</text>
											</u-col>
										</u-row>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="12">
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">备注</text>
												<text class="mg15">:</text>
												<text :class="{gray:true,shallowgray:showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标'}">{{item.remarks}}</text>
											</u-col>

										</u-row>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-button shape="circle" plain size="medium" class='fr' v-if="(showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标')"
											 @click="toBiddingLogistics(item,'常规询价')">详情</u-button>
											<u-button type="error" shape="circle" plain size="medium" class='fr' v-if="!(showTagState(item)==='已结束'||showTagIsoutbid(item)==='未中标')"
											 @click="toBiddingLogistics(item,'常规询价')">详情</u-button>
										</u-row>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 底部导航 -->
		<Tabbar :isRole="isRole"></Tabbar>
	</view>
</template>

<script>
	import Tabbar from '../../my_common_components/Tabbar.vue'
	import '../../common/font/iconfont.css';
	import fetch from '../../utils/fetch.js'
	export default {
		components: {
			Tabbar
		},
		onShow() {
			this.isRole = uni.getStorageSync('roleId') === 1 ? true : false
			this.currentPage = 0
			this.count=0
			if (this.isRole) {
				this.getInquiryList()
			} else {
				this.getLogisticsQuotedPriceList()
			}
		},
		data() {
			return {
				//上方全局搜索
				keywords: "",
				//默认checkbox选中颜色
				activeColor: "#D0021B",
				//全选
				allChecked: false,
				//总的数据
				list: [],
				//竞价数组
				biddingList: [],
				//询盘数组
				Inquiry: [],
				//实单数组
				realOrderList: [],
				//物流已报价tab栏标题
				tabTitlelist: [{
						name: '实盘询价'
					},
					{
						name: '常规询价'
					}
				],
				current: 0,
				swiperCurrent: 0,
				dx: 0,
				//实盘询价数据
				logisticsGeneralList: [],
				//常规询价数据
				logisticsUngeneralList: [],
				isRole: uni.getStorageSync('roleId') === 1 ? true : false,
				//用于下拉刷新
				currentPage: 0,
				size:5,
				count:0
			}
		},
		methods: {
			//点击详情跳转
			toBidding(obj) {
				obj.status = 'quotedPrice'
				this.$set(obj, 'titletext', '报价详情')
				this.$store.dispatch('checkOne', obj)
				uni.navigateTo({
					url: '../bidding/index',
				})
			},

			//询价单列表
			async getInquiryList() {
				let res = await fetch(this.api.v2.inquiryList, {
					method: "get",
					data: {
						accessToken: uni.getStorageSync('accessToken'),
						keywords: this.keywords
					}
				})
				if (res.data.code === '0') {
					this.list = []
					this.biddingList = []
					this.Inquiry = []
					this.realOrderList = []
					this.list = res.data.data.list
					if (this.list && this.list.length > 0) {
						this.list.forEach((item, index) => {
							item.checked = false
							item.down = false
							item.name = index
							item.id = index
							item.currency = 'CNY'
						})
					}
				}
			},
			//拿到历史报价
			async getLogisticsQuotedPriceList(index) {
				let dataType = ''
				if (!index) {
					dataType = 'ungeneral'
				} else {
					dataType = 'general'
				}
				let res = await fetch(this.api.v2.logisticssupplier, {
					method: "get",
					data: {
						accessToken: uni.getStorageSync('accessToken'),
						actionType: 'alreadyList',
						dataType,
						from: this.currentPage*this.size,
						size: this.size
					}
				})
				if (res.data.code === '0') {
					if (!index) {
						this.logisticsGeneralList = [...this.logisticsGeneralList,...res.data.data.logisticsbIdVos]
						
					} else {
						this.logisticsUngeneralList = [...this.logisticsUngeneralList,...res.data.data.logisticsbIdVos]
					}
					this.count=res.data.data.count
				}
			},
			//点击搜索按钮
			checkedAll() {
				this.getInquiryList()
			},
			// tab栏切换
			change(index) {
				this.logisticsGeneralList= []
				this.logisticsUngeneralList= []
				this.currentPage = 0
				this.count=0
				this.swiperCurrent = index
				this.getLogisticsQuotedPriceList(index)
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			toBiddingLogistics(obj, status) {
				this.$set(obj, 'titletext', status)
				this.$set(obj, 'status', status)
				this.$store.dispatch('checkOne', obj)
				uni.navigateTo({
					url: '../firmOfferInquiry/index',
				})
			},
			//下拉加载
			reachBottom() {
				//实盘
				if (this.swiperCurrent === 0) {
					if (this.count > (this.currentPage+1)*this.size) {
						this.currentPage+=1
						this.getLogisticsQuotedPriceList(this.swiperCurrent)
					}
				}
				//常规
				if (this.swiperCurrent === 1) {
					if (this.count > (this.currentPage+1)*this.size) {
						this.currentPage+=1
						this.getLogisticsQuotedPriceList(this.swiperCurrent)
					}
				}
			}
		},
		computed: {
			showTag() {
				return function(item) {
					return item.biddingMode === '是' ? '竞价' : item.inquiryType === "询盘询价" ? "询盘" : "实单"
				}
			},
			//报价状态
			showTagState() {
				return function(item) {
					return item.state === 1 ? '已报价' : item.state === 3 ? "已放弃" : item.state === 4 ? '已结束' : '未报价'
				}
			},
			showTagIsoutbid() {
				return function(item) {
					return item.state === 1 ? '已中标' : '未中标'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 产品供应商已报价（非竞价模式）
	.quotedPrice {
		/deep/ .u-field {
			padding: 20rpx 44rpx;
		}

		.inp_area {
			padding: 0 30rpx 0 10rpx;
			display: flex;

			.allChoose {
				padding-left: 20rpx;
				align-self: center;
				padding-top: 2rpx;
			}

			.search_btn {
				// float: right;
				align-self: center;
			}

			.ufield {
				flex: 1
			}
		}

		.commodity_list_tips {
			background-color: #f2f2f2;
			height: 70rpx;
			color: #D0021B;
			text-align: center;
			line-height: 70rpx;
		}

		//商品列表
		.commodity_list {
			padding: 0 40rpx;

			/deep/ .u-checkbox {
				border-bottom: 2rpx solid #f6f6f6;
				// align-items: flex-start;
				display: block;
			}

			/deep/ .u-checkbox__icon-wrap {
				margin-top: 38rpx;
				position: absolute;
				left: 27rpx;

			}

			/deep/ .u-collapse-head {
				padding: 0;
			}

			.checkbox_view {
				float: none;
				display: block;
				padding: 25rpx 0;
				width: 100%;
				color: #868686;
				position: relative;
				margin-left: 20rpx;

				.isWinBidding {
					position: absolute;
					top: 0;
					left: 75%;
					width: 120rpx;
					height: 50rpx;
					text-align: center;
					line-height: 48rpx;
					border-bottom-left-radius: 20rpx;
					border-bottom-right-radius: 20rpx;
					font-size: 24rpx;
				}

				.checkbox_view_oneline {
					margin: 20rpx 0;
					font-size: 24rpx;

					.checkbox_view_name {
						font-weight: 700;
						font-size: 32rpx;
						color: #333;
						margin-left: 10rpx;
					}

					.checkbox_view_tab {
						padding: 4rpx 16rpx;
						font-size: 24rpx;
						border-radius: 20rpx;
					}

					.giveupbindding {
						margin-right: 30rpx;
					}
				}

				.utag {
					margin-left: 20rpx;
				}

				.checkbox_view_oneline_btn {
					margin-left: 20rpx;
				}

				.price_change {
					display: flex;

					.pricetext {
						margin-left: 6rpx;
					}

					.ufield {
						flex: 1;
					}

					text {
						align-self: center;
					}

					.change {
						color: #00a6db;
					}
				}
			}
		}
	}

	// 物流供应商已报价（物流）
	.logisticsQuotedPrice {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;

		.swiper-box {
			flex: 1;
		}

		.swiper-item {
			height: 100%;
		}

		.inp_area {
			padding: 0 30rpx 0 10rpx;
			display: flex;

			.allChoose {
				padding-left: 20rpx;
				align-self: center;
				padding-top: 2rpx;
			}

			.search_btn {
				// float: right;
				align-self: center;
			}

			.ufield {
				flex: 1
			}
		}

		.commodity_list_tips {
			background-color: #f2f2f2;
			height: 70rpx;
			color: #D0021B;
			text-align: center;
			line-height: 70rpx;
		}

		//商品列表
		.commodity_list {
			padding: 0 40rpx;

			/deep/ .u-checkbox {
				border-bottom: 2rpx solid #f6f6f6;
				// align-items: flex-start;
				display: block;

			}

			/deep/ .u-checkbox__icon-wrap {
				margin-top: 38rpx;
			}

			/deep/ .u-collapse-head {
				padding: 0;
			}

			.checkbox_view {
				float: none;
				display: block;
				padding: 25rpx 0;
				width: 100%;
				color: #868686;
				position: relative;

				.isWinBidding {
					position: absolute;
					top: 0;
					left: 75%;
					width: 120rpx;
					height: 50rpx;
					text-align: center;
					line-height: 48rpx;
					border-bottom-left-radius: 20rpx;
					border-bottom-right-radius: 20rpx;
					font-size: 24rpx;
				}

				.checkbox_view_oneline_title {
					// margin-top: 40rpx;
					text-align: center;
					display: flex;

				}

				.checkbox_view_oneline {
					margin: 20rpx 0;
					font-size: 24rpx;

					.firsttext {
						font-size: 24rpx;
						line-height: 50rpx;
					}

					.secondtext {
						font-weight: 700;
						font-size: 32rpx;
						margin: 0 10rpx;
					}

					.thirdtext {
						line-height: 20rpx;

						view {
							font-size: 24rpx;
						}
					}

					.fourthtext {
						font-weight: 700;
						font-size: 32rpx;
						margin: 0 10rpx;
					}

					.fifthtext {
						font-size: 24rpx;
						line-height: 50rpx;
					}

					.checkbox_view_name {
						font-weight: 700;
						font-size: 32rpx;
						color: #666;
					}

					.checkbox_view_tab {
						padding: 4rpx 16rpx;
						font-size: 24rpx;
						border-radius: 20rpx;
					}

					.giveupbindding {
						margin-right: 30rpx;
					}
				}

				.utag {
					margin-left: 20rpx;
				}

				.checkbox_view_oneline_btn {
					margin-left: 20rpx;
				}

				.price_change {
					display: flex;

					.pricetext {
						margin-left: 6rpx;
					}

					.ufield {
						flex: 1;
					}

					text {
						align-self: center;
					}

					.change {
						color: #00a6db;
					}
				}
			}
		}
	}
</style>
