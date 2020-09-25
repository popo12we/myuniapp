<template>
	<view>
		<!-- 产品供应商待报价页面（非竞价模式） -->
		<view class="prepareQuoted" v-if="isRole">
			<!-- 输入框 -->
			<view class="inp_area">
				<!-- 全选 -->
				<view class="allChoose">
					<u-checkbox v-model="allChecked" :active-color="activeColor" @change="checkboxAllChange">
						<text class="allChoose_text">全选</text>
					</u-checkbox>
				</view>
				<u-field v-model="keywords" placeholder="请输入产品编号或名称" label-width="0" class="ufield" :border-bottom="false"></u-field>
				<u-button @click="checkedAll" type="error" size="mini" class="search_btn">搜索</u-button>
			</view>
			<view class="commodity_list_tips">您现在有{{biddingList.length}}条竞价、{{realOrderList.length}}条实单</view>

			<!-- 轮播图区域 -->
			<view class="swiper_box" v-if="swiperList.length>0">
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<!-- :autoplay='true' :circular='true' -->
							<swiper class="swiper" :indicator-dots="indicatorDots" indicator-color='rgba(0, 0, 0, .1)'
							 indicator-active-color='#666'>
								<swiper-item v-for="item in swiperList" :key="item.id" @click="navigateTobidding(item)">
									<!-- 具体的轮播图页面 -->
									<view class="swiper-item">
										<view class="swiper-item_left">
											<view class="swiper-item_sign_box_red" v-if="item.biddingMode==='是'">
												<view class="swiper-item_sign">
													<text>竞价</text>
												</view>
											</view>
											<view class="swiper-item_sign_box_yellow" v-if="item.biddingMode!=='是'&&item.inquiryType==='实单询价'">
												<view class="swiper-item_sign">
													<text>实单</text>
												</view>
											</view>
										</view>
										<view class="swiper-item_right">
											<span class="iconfont icon_close" @click.stop="giveupbidding(item)">&#xe607;</span>
										</view>
										<view class="swiper-item_center">
											<view class="swiper_center_title">
												<text>{{item.spuName}}</text>
												<text class="mg15"></text>
												<text>{{item.brand}}</text>
											</view>
											<view class="swiper_center_oneline">

												<text class="gray">规格</text>
												<text class="mg15 gray">:</text>
												<text class="gray">{{item.spuSpec}}</text>

											</view>
											<view class="swiper_center_oneline">

												<text class="gray">当前出价（USD):</text>
												<text class="mg15"></text>
												<text class="gray">{{item.bidAmount}}</text>

											</view>
											<view class="swiper_center_oneline">

												<text class="red">当前排名</text>
												<text class="mg15 red">:</text>
												<text class="red">2</text>

											</view>
											<view class="swiper_center_oneline settimeout_btn">
												<InquiryDeadline :endTime="item.inquiryDeadline"></InquiryDeadline>
											</view>
											<view class="swiper_center_oneline center_btn_area">
												<u-button type="error" size="mini" plain class="btn_end" @click="toBindding(item.offerId)">我要竞价</u-button>
											</view>
										</view>
									</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</view>

			<!-- 商品列表 -->
			<view class="commodity_list">
				<u-checkbox-group :wrap="true" :active-color="activeColor">
					<u-collapse :accordion="false">
						<u-checkbox @change="checkboxOneChange(item)" v-model="item.checked" v-for="(item, index) in Inquiry" :key="item.id"
						 :name="item.name">
							<view class="checkbox_view">
								<view class="checkbox_view_oneline">
									<text class="checkbox_view_name">{{item.spuName}}</text>
									<text class="mg15"></text>
									<text class="checkbox_view_tab" @click.stop="showInquiryModal(item.offerId)">询盘</text>
								</view>

								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="7">
											<text class="gray">规格</text>
											<text class="mg15">:</text>
											<text class="gray">{{item.spuSpec}}</text>
										</u-col>
										<u-col span="5">
											<text class="gray">数量</text>
											<text class="mg15">:</text>
											<text class="gray">{{item.saleQty}}{{item.unit}}</text>
										</u-col>
									</u-row>
								</view>

								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="7">
											<text class="gray">包装</text>
											<text class="mg15">:</text>
											<text class="gray">{{item.packageInfo}}</text>
										</u-col>
									</u-row>
								</view>
								<view class="checkbox_view_oneline">
									<u-row gutter="16">
										<u-col span="12">
											<view>
												<text class="red">{{item.inquiryDeadline}}</text>
												<text class="red" v-if="item.inquiryDeadline">截止报价</text>
											</view>
										</u-col>
									</u-row>
								</view>
								<view class="price_change" v-if="item.checked&&(!item.down)">
									<text class="gray pricetext">价格</text>
									<text class="mg15"></text>
									<u-input class="ufield" :label-width="0" v-model.number="item.price" @click.stop placeholder=" "></u-input>
									<text class="mg15"></text>
									<text v-if="item.currency==='USD'">USD</text>
									<text v-if="item.currency==='CNY'">CNY</text>
									<text class="mg15"></text>
									<text class="change" @click.stop="changeCurrency(item)">切换</text>
								</view>
								<view class="checkbox_view_oneline mt15" v-if="(!item.down)&&(!item.checked)">
									<u-row gutter="16">
										<u-col span="12">
											<u-button type="info" size="mini" plain class="giveupbindding" @click="giveupbidding(item)">放弃报价</u-button>
											<u-button type="error" size="mini" plain @click="showInquiryModal(item.offerId)">我要报价</u-button>
										</u-col>
									</u-row>
								</view>
								<u-collapse-item :index="index" @change="changeCollapseItem">
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="7">
												<text class="gray">{{item.shipPort}}</text>
												<text class="mg15">---</text>
												<text class="gray">{{item.destinationPort}}</text>
											</u-col>
											<u-col span="5">
												<text class="gray">{{item.cargoWeight}}</text>
											</u-col>
										</u-row>
									</view>

									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="7">
												<text class="gray">期望{{item.expeDeliDay}}天交货</text>
											</u-col>
											<u-col span="5">
												<text class="gray">打托</text>
												<text class="mg15">:</text>
												<text class="gray">{{item.ifPlay=="1"?"是":"否"}}</text>
											</u-col>
										</u-row>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="12">
												<text class="gray">询价单编号：{{item.inquiryCode}}</text>
											</u-col>
										</u-row>
									</view>

									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="12">
												<text class="gray">备注:</text>
											</u-col>
										</u-row>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="12">
												<text class="gray">{{item.remarks}}</text>
											</u-col>
										</u-row>
									</view>
									<view class="price_change" v-if="Inquiry[index].checked&&item.down">
										<text class="gray pricetext">价格</text>
										<text class="mg15"></text>
										<u-input class="ufield" :label-width="0" v-model.number="item.price" @click.stop placeholder=" "></u-input>
										<text class="mg15"></text>
										<text v-if="item.currency==='USD'">USD</text>
										<text v-if="item.currency==='CNY'">CNY</text>
										<text class="mg15"></text>
										<text class="change" @click.stop="changeCurrency(item)">切换</text>
									</view>

									<view class="checkbox_view_oneline mt15" v-if="!item.checked">
										<u-row gutter="16">
											<u-col span="12">
												<u-button type="info" size="mini" plain class="giveupbindding" @click="giveupbidding(item)">放弃报价</u-button>
												<u-button type="error" size="mini" plain @click="showInquiryModal(item.offerId)">我要报价</u-button>
											</u-col>
										</u-row>
									</view>
								</u-collapse-item>
							</view>
						</u-checkbox>
					</u-collapse>
				</u-checkbox-group>
			</view>

			<view class="quotation_area" v-if="checkedNum>0">
				<view class="quotation_area_oneline">
					<view class="quotation_area_oneline_item">
						<view class="text">有效期</view>
						<u-input :border-bottom="true" class="ufield" type="select" @click="showValidity" :label-width="0" :clearable="false"
						 v-model="inquiryForm.validity" placeholder=" "></u-input>
					</view>
					<view class="quotation_area_oneline_item">
						<view class="text">交货天数</view>
						<u-field :border-bottom="true" class="ufield" :label-width="0" :clearable="false" v-model="inquiryForm.day"></u-field>
					</view>
				</view>
				<view class="quotation_area_oneline">
					<view class="quotation_area_oneline_item">
						<view class="text">价格趋势</view>
						<u-input type="select" @click="showTrendSelect" placeholder="请选择价格趋势" v-model="inquiryForm.trend" />
					</view>
					<view class="quotation_area_oneline_item">
						<view class="text">趋势说明</view>
						<u-field :border-bottom="true" class="ufield" :label-width="0" :clearable="false" v-model="inquiryForm.explain"></u-field>
					</view>
				</view>
				<view class="quotation_area_oneline btnarea">
					<u-button type="error" class="btn" @click="submitSomeBidding">批量报价</u-button>
				</view>
			</view>
		</view>

		<!-- 物流供应商待报价页面（非竞价模式） -->
		<view class="logisticsPrepareQuoted" v-if="!isRole">
			<!-- 输入框 -->
			<view class="inp_area">
				<!-- 全选 -->
				<view class="allChoose">
					<u-checkbox v-model="allChecked" :active-color="activeColor" @change="checkboxAllChange">
						<text class="allChoose_text">全选</text>
					</u-checkbox>
				</view>
				<u-field v-model="name" placeholder="请输入目的港查询" label-width="0" class="ufield" :border-bottom="false"></u-field>
				<u-button @click="checkedAll" type="error" size="mini" class="search_btn">搜索</u-button>
			</view>
			<view class="commodity_list_tips">您现在有 {{logicSwiperList.length}} 条实盘询价</view>

			<!-- 轮播图区域 -->
			<view class="swiper_box" v-if="logicSwiperList.length>0">
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper" :indicator-dots="indicatorDots">
								<swiper-item v-for="item in logicSwiperList" :key="item.id" @click="navigateTobidding(item)">
									<!-- 具体的轮播图页面 -->
									<view class="swiper-item">
										<view class="swiper-item_left">
											<view class="swiper-item_sign_box">
												<view class="swiper-item_sign">
													<text>实盘</text>
												</view>
											</view>
										</view>
										<view class="swiper-item_right">
											<span class="iconfont icon_close" @click.stop="giveupbidding(item)">&#xe607;</span>
										</view>
										<view class="swiper-item_center">
											<view class="swiper_center_oneline_title clearfix">
												<view class="secondtext">{{item.startPort}}</view>
												<view class="thirdtext">
													<view class="unlinetext">{{item.transferMethod}}</view>
													<view>——</view>
												</view>
												<view class="fourthtext">{{item.arrivePort}}</view>
												<view class="fifthtext">{{item.cargoWeight}}</view>
											</view>
											<view class="swiper_center_oneline" v-if="item.schedule">{{`周`+item.schedule}}</view>
											<view class="swiper_center_oneline" v-if="item.planshipDate">预计出运:{{item.planshipDate}}</view>
											<view class="swiper_center_oneline settimeout_btn">
												<view class="settimeout">{{item.daysRemaining}}</view>
											</view>
											<view class="swiper_center_oneline center_btn_area">
												<u-button type="error" size="mini" plain class="btn_end" @click="toLogisticQuotation(item)">我要竞价</u-button>
											</view>
										</view>
									</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</view>

			<!-- 商品列表 -->
			<view class="commodity_list">
				<u-checkbox-group :wrap="true" :active-color="activeColor">
					<u-collapse :accordion="false">
						<u-checkbox @change="checkboxOneChange(item)" v-model="item.checked" v-for="(item, index) in logisticRoutineList"
						 :key="item.id" :name="item.name">
							<view class="checkbox_view">
								<view class="checkbox_view_oneline">
									<view class="checkbox_view_oneline_title clearfix">
										<view class="secondtext">{{item.startPort}}</view>
										<view class="thirdtext">
											<view class="unlinetext">{{item.transferMethod}}</view>
											<view>——</view>
										</view>
										<view class="fourthtext">{{item.arrivePort}}</view>
										<text class="checkbox_view_tab">常规</text>
									</view>
								</view>

								<view class="checkbox_view_oneline checkbox_view_oneline_first">
									<u-row gutter="16">
										<u-col span="6">
											<text class="gray">箱型</text>
											<text class="mg15">:</text>
											<text class="gray">{{item.cabinetType}}</text>
										</u-col>
										<u-col span="6">
											<text class="red">截止日期</text>
											<text class="mg15">:</text>
											<text class="red inquiryDeadline">{{item. biddeadLine}}</text>
										</u-col>
									</u-row>
								</view>
								<view class="checkbox_view_oneline" v-if="(!item.checked)&&(!item.down)">
									<u-row gutter="16">
										<u-col span="12">
											<u-button type="info" size="mini" plain class="giveupbindding" @click="giveupbidding(item)">放弃报价</u-button>
											<u-button type="error" size="mini" plain @click="toLogisticQuotation(item)">我要报价</u-button>
										</u-col>
									</u-row>
								</view>
								<view class="price_change" v-if="item.checked&&(!item.down)">
									<text class="gray pricetext">价格</text>
									<text class="mg15"></text>
									<u-input class="ufield" :label-width="0" v-model.number="item.price" @click.stop placeholder=" "></u-input>
									<text class="mg15"></text>
									<text>USD</text>
								</view>
								<u-collapse-item :index="index" @change="changeCollapseItem">
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="6">
												<text class="gray">货盘类型</text>
												<text class="mg15">:</text>
												<text class="gray">{{item.palletType}}</text>
											</u-col>
											<u-col span="6">
												<text class="gray">货物总量</text>
												<text class="mg15">:</text>
												<text class="gray" v-if="item.footNumber&&item.cabinetType">{{item.footNumber}}*{{item.cabinetType}}</text>
											</u-col>
										</u-row>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="6">
												<text class="gray">货物毛重</text>
												<text class="mg15">:</text>
												<text class="gray">{{item.gw}}</text>
											</u-col>
											<u-col span="6">
												<text class="gray">预计出运</text>
												<text class="mg15">:</text>
												<text class="gray">{{item.planshipDate}}</text>
											</u-col>
										</u-row>
									</view>
									<view class="checkbox_view_oneline">
										<u-row gutter="16">
											<u-col span="12">
												<text class="gray">备注</text>
												<text class="mg15">:</text>
												<text class="gray">{{item.remarks}}</text>
											</u-col>
										</u-row>
									</view>
									
									<view class="price_change" v-if="logisticRoutineList[index].checked&&item.down">
										<text class="gray pricetext">价格</text>
										<text class="mg15"></text>
										<u-input class="ufield" :label-width="0" v-model.number="item.price" @click.stop placeholder=" "></u-input>
										<text class="mg15"></text>
										<text>USD</text>
									</view>
									<view class="checkbox_view_oneline mt15">
										<u-row gutter="16">
											<u-col span="12">
												<u-button type="info" size="mini" plain class="giveupbindding" @click="giveupbidding(item)">放弃报价</u-button>
												<u-button type="error" size="mini" plain @click="toLogisticQuotation(item)">我要报价</u-button>
											</u-col>
										</u-row>
									</view>
								</u-collapse-item>
							</view>
						</u-checkbox>
					</u-collapse>
				</u-checkbox-group>
				<!-- 报价 -->
				<view class="quotation_area" v-if="checkedNum>0">
					<view class="quotation_area_oneline">
						<view class="quotation_area_oneline_item">
							<text class="text">有效期</text>
							<u-field :border-bottom="true" class="ufield" :label-width="0" :clearable="false"></u-field>
						</view>
						<view class="quotation_area_oneline_item">
							<text class="text">交货天数</text>
							<u-field :border-bottom="true" class="ufield" :label-width="0" :clearable="false"></u-field>
						</view>
					</view>

					<view class="quotation_area_oneline">
						<view class="quotation_area_oneline_item">
							<text class="text">价格趋势</text>
							<u-field :border-bottom="true" class="ufield" :label-width="0" :clearable="false"></u-field>
						</view>
						<view class="quotation_area_oneline_item">
							<text class="text">交货天数</text>
							<u-field :border-bottom="true" class="ufield" :label-width="0" :clearable="false"></u-field>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部导航 -->
		<Tabbar :isRole="isRole"></Tabbar>

		<!-- 询盘模态框 -->
		<u-modal v-model="inquiryShow" :show-title="false" :show-confirm-button="false">
			<view class="inquiryModal_content">
				<u-form :model="inquiryForm" ref="iForm1" :label-width="145">
					<u-form-item label="币种" prop="currency">
						<u-input v-model="inquiryForm.currency" type="select" @click="showCurrencySelect" placeholder="请选择币种" />
					</u-form-item>
					<u-form-item label="价格" prop="price" v-if="inquiryForm.currency!=='USD'">
						<u-input v-model="inquiryForm.price" placeholder="请输入价格" />
					</u-form-item>
					<view class="red" v-if="inquiryForm.currency==='CNY'&&inquiryForm.price===''">请填写含税含运费价格</view>
					<u-form-item label="美元价格" prop="price" v-if="inquiryForm.currency==='USD'">
						<u-input v-model="inquiryForm.price" placeholder="请输入美元价格" />
					</u-form-item>
					<u-form-item label="有效期" prop="validity">
						<u-input v-model="inquiryForm.validity" type="select" @click="showValidity" placeholder="请输入有效期" />
					</u-form-item>
					<u-form-item label="交货天数" prop="day">
						<u-input v-model="inquiryForm.day" placeholder="请输入交货天数" />
					</u-form-item>
					<u-form-item label="价格趋势">
						<u-input v-model="inquiryForm.trend" type="select" @click="showTrendSelect" placeholder="请选择价格趋势" />
					</u-form-item>
					<u-form-item label="趋势说明" placeholder="请输入趋势说明">
						<u-input v-model="inquiryForm.explain" />
					</u-form-item>
					<u-form-item label="备注" placeholder="请输入备注">
						<u-input v-model="inquiryForm.remark" />
					</u-form-item>
					<view class="btn-area">
						<u-row gutter="16">
							<u-col span="6">
								<u-button type="error" plain @click="showInquiryModalCancel">取消</u-button>
							</u-col>
							<u-col span="6">
								<u-button type="error" @click="submitBidding">提交报价</u-button>
							</u-col>
						</u-row>
					</view>
				</u-form>
			</view>
		</u-modal>

		<!-- 竞价模态框 -->
		<u-modal v-model="binddingShow" :show-confirm-button="false" :show-title="false" :negative-top="500">
			<view class="inquiryModal_content">
				<u-form :model="inquiryForm" ref="iForm2" :label-width="165">
					<u-form-item label="价格(USD)*" prop="price">
						<u-input v-model="inquiryForm.price" placeholder="请输入价格" />
					</u-form-item>
					<u-form-item label="有效期" prop="validity">
						<u-input v-model="inquiryForm.validity" type="select" @click="showValidity" placeholder="请输入有效期" />
					</u-form-item>
					<u-form-item label="备注" placeholder="请输入备注">
						<u-input v-model="inquiryForm.remark" />
					</u-form-item>
					<view class="btn-area">
						<u-row gutter="16">
							<u-col span="6">
								<u-button type="error" plain @click="cancelBidding">取消</u-button>
							</u-col>
							<u-col span="6">
								<u-button type="error" @click="submitBidding2">提交报价</u-button>
							</u-col>
						</u-row>
					</view>
				</u-form>
			</view>
		</u-modal>
		<!-- toast -->
		<u-toast ref="toast" position="top" />
		<!-- 放弃报价模态框 -->
		<u-modal v-model="giveupbiddingShow" :show-title="false" :show-cancel-button="true" @confirm="sureGiveupBidding"
		 confirm-text="确认放弃" confirm-color="#D0021B" class="giveupbiddingModal">
			<view class="giveupbiddingModal_oneline">确定放弃报价？</view>
			<view class="red giveupbiddingModal_oneline">{{giveupModalProduct}}</view>
		</u-modal>
		<!-- 价格趋势下拉框 -->
		<u-select v-model="selectPriceTrendShow" :list="selectPriceTrendList" @confirm="confirmPriceTrend"></u-select>
		<!-- 报价币种下拉框 -->
		<u-select v-model="selectTypesCurrencyShow" :list="selectTypesCurrencyList" @confirm="confirmCurrency"></u-select>
		<!-- 报价中转下拉框 -->
		<u-select v-model="selectTransferMethodShow" :list="selectTransferMethodList" @confirm="confirmTransferMethod"></u-select>
		<!-- 报价鉴定书下拉框 -->
		<u-select v-model="selectAppraisalCertificateShow" :list="selectAppraisalCertificateList" @confirm="confirmAppraisalCertificate"></u-select>
		<!-- 时间选择 -->
		<u-picker v-model="dateTime" mode="time" :params="params" :defaultTime="defaultTime" @confirm="confirmTime"></u-picker>
		<!-- 时间选择(开始) -->
		<u-picker v-model="dateTimeStart" mode="time" :params="paramsLogistic" :defaultTime="defaultTime" @confirm="confirmTimeStart"></u-picker>
		<!-- 时间选择(开始) -->
		<u-picker v-model="dateTimeEnd" mode="time" :params="paramsLogistic" :defaultTime="defaultTime" @confirm="confirmTimeEnd"></u-picker>

		<!-- 物流报价模态框 -->
		<u-modal v-model="logisticQuotationFormShow" :show-title="false" :show-confirm-button="false" z-index="10000">
			<view class="inquiryModal_content">
				<u-form :model="logisticQuotationForm" ref="iForm3" :label-width="145">
					<u-form-item label="价格" prop="price">
						<u-input v-model="logisticQuotationForm.price" placeholder="请输入价格" />
					</u-form-item>
					<u-form-item label="开始时间" prop="startDate">
						<u-input v-model="logisticQuotationForm.startDate" type="select" @click="showValidityStart" placeholder="请输入开始时间" />
					</u-form-item>
					<u-form-item label="结束时间" prop="expiredDate">
						<u-input v-model="logisticQuotationForm.expiredDate" type="select" @click="showValidityEnd" placeholder="请输入结束时间" />
					</u-form-item>
					<u-form-item label="船公司" prop="shippingName">
						<u-input v-model="logisticQuotationForm.shippingName" placeholder="请输入船公司" />
					</u-form-item>
					<u-form-item label="船期" prop="schedule">
						<!-- <u-input v-model="logisticQuotationForm.schedule" placeholder="请输入船期" /> -->
						<u-checkbox-group @change="checkboxGroupChange">
							<u-checkbox v-model="item.checked" v-for="(item, index) in checkscheduleList" :key="index" :name="item.name">
								{{ item.name }}
							</u-checkbox>
						</u-checkbox-group>
					</u-form-item>
					<u-form-item label="转运方式" prop="transferMethod">
						<u-input v-model="logisticQuotationForm.transferMethodValue" type="select" @click="showTransferMethod"
						 placeholder="请输入转运方式" />
					</u-form-item>
					<u-form-item label="航程" prop="voyage">
						<u-input v-model="logisticQuotationForm.voyage" placeholder="请输入航程" />
					</u-form-item>
					<u-form-item label="鉴定书" prop="appraisalCertificate">
						<u-input v-model="logisticQuotationForm.appraisalCertificateValue" type="select" @click="showAppraisalCertificate"
						 placeholder="是否有鉴定书" />
					</u-form-item>
					<u-form-item label="价格趋势" prop="trend">
						<u-input v-model="logisticQuotationForm.trendValue" type="select" @click="showTrendSelect" placeholder="请选择价格趋势" />
					</u-form-item>
					<u-form-item label="趋势说明" placeholder="请输入趋势说明">
						<u-input v-model="logisticQuotationForm.explain" />
					</u-form-item>
					<u-form-item label="备注" placeholder="请输入备注">
						<u-input v-model="logisticQuotationForm.remark" />
					</u-form-item>
					<view class="btn-area">
						<u-row gutter="16">
							<u-col span="6">
								<u-button type="error" plain @click="giveuptoLogisticQuotation">取消</u-button>
							</u-col>
							<u-col span="6">
								<u-button type="error" @click="logisticSubmitBidding(item)">提交报价</u-button>
							</u-col>
						</u-row>
					</view>
				</u-form>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import Tabbar from "../../my_common_components/Tabbar.vue"
	import InquiryDeadline from "../../my_common_components/InquiryDeadline.vue"
	import "../../common/font/iconfont.css"
	import fetch from '../../utils/fetch.js'
	import moment from 'moment'
	export default {
		components: {
			Tabbar,
			InquiryDeadline
		},
		data() {
			return {
				//选中数据所组成的数组
				checkedList: [],
				//选中个数
				checkedNum: 0,
				defaultTime: moment().format('YYYY-MM-DD HH:mm:ss'),
				//上方全局搜索
				keywords: "",
				//默认checkbox选中颜色
				activeColor: "#D0021B",
				// 报价币种
				selectTypesCurrencyShow: false,
				selectTypesCurrencyList: [{
						value: "1",
						label: "CNY",
					},
					{
						value: "2",
						label: "USD",
					},
				],

				selectPriceTrendShow: false,
				selectPriceTrendList: [{
						value: "0",
						label: "上升",
					},
					{
						value: "1",
						label: "平稳",
					},
					{
						value: "2",
						label: "下降",
					},
				],
				//全选
				allChecked: false,
				//轮播图参数
				indicatorDots: true,
				//询盘模态框是否显示
				inquiryShow: false,
				inquiryForm: {
					//币种
					currency: "",
					//价格
					price: "",
					//有效期
					validity: "",
					//交货天数
					day: "",
					//价格趋势
					trend: "",
					pricetrendValue: "",
					//趋势说明
					explain: "",
					//备注
					remark: "",
				},

				//校验规则
				rules1: {
					currency: [{
						required: true,
						message: '请选择币种',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],

					price: [{
						trigger: ['blur', 'change'],
						required: true,
						validator: (rule, value, callback) => {
							let reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/
							if (!reg.test(value)) {
								callback(new Error('请输入准确的价格'))
							} else {
								callback()
							}
							return
						}
					}],
					validity: [{
						required: true,
						message: '请选择有效期',
						trigger: ['change']
					}],

					day: [{
						type: 'number',
						message: '请填写正确的交货天数',
						trigger: ['change']
					}]
				},

				rules2: {
					price: [{
						trigger: ['blur', 'change'],
						required: true,
						validator: (rule, value, callback) => {
							let reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/
							if (!reg.test(value)) {
								callback(new Error('请输入准确的价格'))
							} else {
								callback()
							}
							return
						}
					}],
					validity: [{
						required: true,
						message: '请选择有效期',
						trigger: ['change']
					}]
				},

				//竞价模态框是否显示
				binddingShow: false,
				//放弃模态框是否显示
				giveupbiddingShow: false,
				//放弃模态框商品名
				giveupModalProduct: "",
				//记录哪些面板是展开的
				collapseItemIsChecked: [],
				//总的询价单列表
				inquiryList: [],
				// 竞价询价单
				biddingList: [],
				// 询盘
				Inquiry: [],
				// 实单
				realOrderList: [],
				// 询价单号
				offerId: "",
				//时间选择器
				dateTime: false,
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true
				},
				//物流供应商数据
				list: [],
				//物流报价模态框
				logisticQuotationForm: {
					// 价格
					price: "",
					//开始时间
					startDate: "",
					// 有效期（结束时间）
					expiredDate: "",
					// 船公司
					shippingName: "",
					// 船期
					schedule: "",
					// 转运方式
					transferMethod: "",
					// 航程
					voyage: "",
					//价格趋势
					trend: "",
					// 鉴定书
					appraisalCertificate: "",
					// 趋势说明
					explain: "",
					// 备注
					remark: "",
					appraisalCertificateValue: "",
					trendValue: "",
					appraisalCertificateValue: ""
				},
				rules3: {
					price: [{
						trigger: ['blur', 'change'],
						required: true,
						validator: (rule, value, callback) => {
							let reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/
							if (!reg.test(value)) {
								callback(new Error('请输入准确的价格'))
							} else {
								callback()
							}
							return
						}
					}],
					startDate: [{
						required: true,
						message: '请选择开始时间',
						trigger: ['change']
					}],
					expiredDate: [{
							required: true,
							message: '请选择结束时间',
							trigger: ['change']
						},
						{
							// 结束时间大于开始时间
							validator: (rule, value, callback) => {
								return new Date(value) > new Date(this.logisticQuotationForm.startDate)
							},
							message: '结束时间要大于开始时间',
							trigger: ['change'],
						}
					],
					shippingName: [{
						required: true,
						message: '请填写船公司',
						trigger: ['change', 'blur'],
					}],
					schedule: [{
						required: true,
						message: '请选择船期',
						schedule: ['change'],
					}],
					transferMethod: [{
						required: true,
						message: '请选择转运方式',
						trigger: ['change']
					}],
					appraisalCertificate: [{
						required: true,
						message: '请选择是否有鉴定书',
						trigger: ['change']
					}],
					voyage: [{
							required: true,
							message: '请填写航程',
							trigger: ['change', 'blur'],
						},
						{
							pattern: /^(0|[1-9][0-9]*)(\.\d+)?$/,
							message: '请输入准确的数字',
							trigger: ['change', 'blur']
						}
					],
					trend: [{
						required: true,
						message: '请选择价格趋势',
						schedule: ['change'],
					}],
				},
				//是否展示物流报价模态框
				logisticQuotationFormShow: false,
				//报价参数
				bidId: '',
				custId: '',
				//物流实单数组
				logisticRealOrderList: [],
				//物流常规数组
				logisticRoutineList: [],
				// 物流报价中转
				selectTransferMethodShow: false,
				selectTransferMethodList: [{
						value: "1",
						label: "中转",
					},
					{
						value: "2",
						label: "直达",
					},
				],
				// 物流报价鉴定书
				selectAppraisalCertificateShow: false,
				selectAppraisalCertificateList: [{
						value: "0",
						label: "否",
					},
					{
						value: "1",
						label: "是",
					},
				],
				checkscheduleList: [{
						name: '周一',
						checked: false,
					},
					{
						name: '周二',
						checked: false,
					},
					{
						name: '周三',
						checked: false,
					},
					{
						name: '周四',
						checked: false,
					},
					{
						name: '周五',
						checked: false,
					},
					{
						name: '周六',
						checked: false,
					},
					{
						name: '周日',
						checked: false,
					},
				],
				//物流时间选择器配置
				paramsLogistic: {
					year: true,
					month: true,
					day: true
				},
				//开始时间的选择器
				dateTimeStart: false,
				//结束时间的选择器
				dateTimeEnd: false,
				logisticQuotationData: "",
				inaploId: "",
				//判断哪个角色权限
				isRole: uni.getStorageSync('roleId') === 1 ? true : false,
				inaplosuppId: ""
			}
		},
		onShow() {
			this.isRole = uni.getStorageSync('roleId') === 1 ? true : false
			//是展示产品询价单数据还是物流询价单数据
			if (this.isRole) {
				this.getInquiryList()
			} else {
				this.logicInquiryList()
			}

		},
		onReady() {

			if (this.isRole) {
				this.$refs.iForm1.setRules(this.rules1);
				this.$refs.iForm2.setRules(this.rules2);
			} else {
				this.$refs.iForm3.setRules(this.rules3);
			}
		},
		methods: {
			//询价单列表
			async getInquiryList() {
				let res = await fetch(this.api.v2.inquiryList, {
					method: "get",
					data: {
						accessToken: uni.getStorageSync('accessToken'),
						status: 0,
						keywords: this.keywords
					}
				})
				this.biddingList = []
				this.inquiryList = []
				this.Inquiry = []
				this.realOrderList = []
				if (res.data.code === '0') {
					this.inquiryList = res.data.data.list
					if (this.inquiryList && this.inquiryList.length > 0) {
						this.inquiryList.forEach((item, index) => {
							item.checked = false
							item.down = false
							item.name = index
							item.id = index
							item.currency = 'CNY'
							if (item.biddingMode === '是') {
								// 竞价数组
								this.biddingList.push(item)
							} else {
								if (item.inquiryType === "询盘询价") {
									//询盘数组
									this.Inquiry.push(item)
								}
								if (item.inquiryType === "实单询价") {
									//实单数组
									this.realOrderList.push(item)
								}
							}
						})
					}
				}
			},

			// 物流供应商列表
			async logicInquiryList() {
				let res = await fetch(this.api.v2.logisticssupplier, {
					method: "get",
					data: {
						accessToken: uni.getStorageSync('accessToken'),
						actionType: "pendingList"
						// keywords: this.keywords
					}
				})

				this.logisticRoutineList = []
				this.logisticRealOrderList = []
				if (res.data.code === '0') {
					this.list = res.data.data
					if (this.list && this.list.length > 0) {
						this.list.forEach((item, index) => {
							item.checked = false
							item.down = false
							item.name = index
							item.id = index
							item.currency = 'CNY'
							if (item.moduleCode === 'PC007') {
								// 实单数组
								this.logisticRealOrderList.push(item)
							}
							if (item.moduleCode === 'PC006') {
								// 常规数组
								this.logisticRoutineList.push(item)
							}
						})
					}
				}
			},
			// 全选
			checkboxAllChange() {
				this.resetInquiryForm()
				this.resetLogisticQuotationForm()
				if (this.isRole) {
					this.allChecked ?
						this.Inquiry.map((val) => {
							val.checked = true;
						}) :
						this.Inquiry.map((val) => {
							val.checked = false;
						});
					this.$forceUpdate()
					this.checkedNum = this.Inquiry.filter((val) => val.checked).length
					this.checkedList = this.Inquiry.filter((val) => val.checked)
				} else {
					this.allChecked ?
						this.logisticRoutineList.map((val) => {
							val.checked = true;
						}) :
						this.logisticRoutineList.map((val) => {
							val.checked = false;
						});
					this.$forceUpdate()
					this.checkedNum = this.list.filter((val) => val.checked).length
					this.checkedList = this.list.filter((val) => val.checked)
				}

			},

			//单选
			checkboxOneChange(item) {
				this.resetInquiryForm()
				this.resetLogisticQuotationForm()
				if (this.isRole) {
					this.checkedList = this.Inquiry.filter((val) => val.checked)
					this.checkedNum = this.Inquiry.filter((val) => val.checked).length
					this.allChecked =
						this.Inquiry.length === this.Inquiry.filter((val) => val.checked).length;
					this.$forceUpdate()
				} else {
					this.checkedList = this.logisticRoutineList.filter((val) => val.checked)
					this.checkedNum = this.logisticRoutineList.filter((val) => val.checked).length
					this.allChecked =
						this.logisticRoutineList.length === this.logisticRoutineList.filter((val) => val.checked).length;
					this.$forceUpdate()
				}
			},

			//点击打开价格趋势下拉框
			showTrendSelect() {
				this.selectPriceTrendShow = true;
			},

			//点击打开币种下拉框
			showCurrencySelect() {
				this.selectTypesCurrencyShow = true;
			},
			//点击打开鉴定书下拉框
			showAppraisalCertificate() {
				this.selectAppraisalCertificateShow = true;
			},
			//点击打开直达中转拉框
			showTransferMethod() {
				this.selectTransferMethodShow = true;
			},

			//点击询盘/我要报价打开询盘模态框
			showInquiryModal(offerId) {
				this.resetInquiryForm()
				if (offerId) {
					this.offerId = offerId.join(',')
				}
				this.inquiryShow = true;
			},

			//点击我要竞价按钮打开竞价模态框
			toBindding(offerId) {
				this.resetInquiryForm()
				if (offerId) {
					this.offerId = offerId.join(',')
				}
				this.binddingShow = true;
				this.inquiryForm.currency = 'USD'
			},

			//点击放弃竞价出的弹框
			giveupbidding(item) {
				if (this.isRole) {
					if (item.offerId) {
						this.offerId = item.offerId.join(',')
					}
					this.giveupModalProduct = item.spuName
				} else {
					this.logisticQuotationData = item
					this.bidId = item.bidId
					this.custId = item.custId
					this.inaploId = item.inaploId
					this.inaplosuppId = item.inaplosuppId
				}
				this.giveupbiddingShow = true;

			},

			//点击取消 取消询盘弹窗显示
			showInquiryModalCancel() {
				this.resetInquiryForm()
				this.inquiryShow = false
			},

			//点的折叠面板是开启还是关闭的 方便后续操作
			changeCollapseItem(e) {
				if (e.show === true) {
					if (this.collapseItemIsChecked.length === 0) {
						this.collapseItemIsChecked.push(e.index);
					} else {
						if (this.collapseItemIsChecked.some((item) => item !== e.index)) {
							this.collapseItemIsChecked.push(e.index);
						}
					}
				} else {
					this.collapseItemIsChecked = this.collapseItemIsChecked.filter(
						(item) => item !== e.index
					);
				}
				// this.inquiryList[e.index].down = e.show;
				if (this.isRole) {
					this.Inquiry[e.index].down = e.show
				} else {
					this.logisticRoutineList[e.index].down = e.show
				}

			},

			//确认币种
			confirmCurrency(e) {
				this.inquiryForm.currency = e[0].label
			},
			//确认中转方式
			confirmTransferMethod(e) {
				this.logisticQuotationForm.transferMethodValue = e[0].label
				this.logisticQuotationForm.transferMethod = e[0].value
			},
			//确认有无鉴定书
			confirmAppraisalCertificate(e) {
				this.logisticQuotationForm.appraisalCertificate = e[0].value
				this.logisticQuotationForm.appraisalCertificateValue = e[0].label
			},
			//确认价格趋势
			confirmPriceTrend(e) {
				if (this.isRole) {
					this.inquiryForm.trend = e[0].label
					this.inquiryForm.pricetrendValue = e[0].value
				} else {
					this.logisticQuotationForm.trend = e[0].value
					this.logisticQuotationForm.trendValue = e[0].label
				}
			},

			//取消报价
			cancelBidding() {
				this.resetInquiryForm()
				this.binddingShow = false
			},

			//提交报价
			async submitBidding() {
				this.$refs.iForm1.validate(async valid => {
					if (valid) {
						let res = await fetch(this.api.v2.submitQuotation, {
							method: "post",
							data: {
								accessToken: uni.getStorageSync('accessToken'),
								list: [{
									offerId: this.offerId,
									cur: this.inquiryForm.currency,
									price: this.inquiryForm.price,
									deliveryDay: this.inquiryForm.day,
									expiredDate: this.inquiryForm.validity,
									pricetrend: this.inquiryForm.pricetrendValue,
									priceInfo: this.inquiryForm.explain,
									remarks: this.inquiryForm.remark
								}]
							}
						})

						this.inquiryShow = false
						this.binddingShow = false
						if (res.data.code === '0') {
							this.$refs.toast.show({
								title: '提交报价成功',
								type: 'success',
								position: 'top'
							})
							this.getInquiryList()
						} else {
							this.$refs.toast.show({
								title: '提交报价失败',
								type: 'error',
								position: 'top'
							})
						}
					}
				})
			},


			async submitBidding2() {
				this.$refs.iForm2.validate(async valid => {
					if (valid) {
						let res = await fetch(this.api.v2.submitQuotation, {
							method: "post",
							data: {
								accessToken: uni.getStorageSync('accessToken'),
								list: [{
									offerId: this.offerId,
									cur: this.inquiryForm.currency,
									price: this.inquiryForm.price,
									deliveryDay: this.inquiryForm.day,
									expiredDate: this.inquiryForm.validity,
									pricetrend: this.inquiryForm.pricetrendValue,
									priceInfo: this.inquiryForm.explain,
									remarks: this.inquiryForm.remark
								}]
							}
						})

						this.inquiryShow = false
						this.binddingShow = false
						if (res.data.code === '0') {
							this.$refs.toast.show({
								title: '提交报价成功',
								type: 'success',
								position: 'top'
							})
							this.getInquiryList()
						} else {
							this.$refs.toast.show({
								title: '提交报价失败',
								type: 'error',
								position: 'top'
							})
						}
					}
				})
			},
			//询盘打开选时间
			showValidity() {
				this.dateTime = true
			},
			showValidityStart() {
				this.dateTimeStart = true
			},
			showValidityEnd() {
				this.dateTimeEnd = true
			},

			//询盘确认时间
			confirmTime(e) {
				if (this.isRole) {
					this.inquiryForm.validity = `${e.year}-${e.month}-${e.day} ${e.hour}:${e.minute}`
				}
			},
			//确认开始时间
			confirmTimeStart(e) {
				this.logisticQuotationForm.startDate = `${e.year}-${e.month}-${e.day}`
			},
			//确认结束时间
			confirmTimeEnd(e) {
				this.logisticQuotationForm.expiredDate = `${e.year}-${e.month}-${e.day}`
			},

			//确认放弃报价
			async sureGiveupBidding() {
				if (this.isRole) {
					let res = await fetch(this.api.v2.giveupOffer, {
						method: "post",
						data: {
							accessToken: uni.getStorageSync('accessToken'),
							offerId: this.offerId
						}
					})

					if (res.data.code === '0') {
						this.$refs.toast.show({
							title: '放弃报价成功',
							type: 'success',
							position: 'top'
						})
						this.getInquiryList()
					} else {
						this.$refs.toast.show({
							title: '放弃报价失败',
							type: 'error',
							position: 'top'
						})
					}
				} else {
					let res = await fetch(this.api.v2.giveUpLogisticsBid, {
						method: "post",
						data: {
							accessToken: uni.getStorageSync('accessToken'),
							type: this.logisticQuotationData.moduleCode === "PC007" ? "real" : this.logisticQuotationData.moduleCode ===
								"PC006" ?
								"conventional" : "",
							bidId: this.logisticQuotationData.moduleCode === "PC007" ? this.bidId : "",
							inaplosuppId: this.logisticQuotationData.moduleCode === "PC006" ? this.inaplosuppId : "",
							inaploId: this.logisticQuotationData.moduleCode === "PC006" ? this.inaploId : "",
							custId: this.custId && Number(this.custId)
						}
					})

					if (res.data.code === '0') {
						this.$refs.toast.show({
							title: '放弃报价成功',
							type: 'success',
							position: 'top'
						})
						this.logicInquiryList()
					} else {
						this.$refs.toast.show({
							title: '放弃报价失败',
							type: 'error',
							position: 'top'
						})
					}
				}
			},

			//点轮播图跳转到待报价竞价模式
			navigateTobidding(obj) {
				if (this.isRole) {
					obj.status = 'prepareQuoted'
					this.$set(obj, 'titletext', '竞价')
					this.$store.dispatch('checkOne', obj)
					uni.navigateTo({
						url: '../bidding/index'
					})
				} else {
					obj.status = 'prepareQuoted'
					this.$set(obj, 'titletext', '实盘询价')
					this.$store.dispatch('checkOne', obj)
					uni.navigateTo({
						url: '../firmOfferInquiry/index'
					})
				}
			},

			//点击搜索
			checkedAll() {
				this.getInquiryList()
			},

			//重置报价模态框
			resetInquiryForm() {
				this.inquiryForm = {
					//币种
					currency: "",
					//价格
					price: "",
					//有效期
					validity: "",
					//交货天数
					day: "",
					//价格趋势
					trend: "",
					pricetrendValue: "",
					//趋势说明
					explain: "",
					//备注
					remark: "",
				}
				this.$refs['iForm1'].resetFields();
			},

			//重置报价模态框
			resetLogisticQuotationForm() {
				this.checkscheduleList.forEach(item => {
					item.checked = false
				})
				this.logisticQuotationData = ""
				this.logisticQuotationForm = {
					// 价格
					price: "",
					// 开始时间
					startDate: "",
					// 有效期(结束时间)
					expiredDate: "",
					// 船公司
					shippingName: "",
					// 船期
					schedule: "",
					// 转运方式
					transferMethod: "",
					// 航程
					voyage: "",
					//价格趋势
					trend: "",
					// 鉴定书
					appraisalCertificate: "",
					// 趋势说明
					explain: "",
					// 备注
					remark: "",
					appraisalCertificateValue: "",
					trendValue: "",
					appraisalCertificateValue: ""
				}
				this.$refs['iForm3'].resetFields();
			},

			//切换币种
			changeCurrency(item) {
				if (item.currency === 'USD') {
					item.currency = 'CNY'
					this.$forceUpdate()
					return;
				}
				if (item.currency === 'CNY') {
					item.currency = 'USD'
					this.$forceUpdate()
					return;
				}
			},

			//批量报价
			async submitSomeBidding() {
				let tempArr = []
				this.checkedList.forEach(item => {
					let obj = {
						offerId: item.offerId[0],
						cur: item.currency,
						price: item.price,
						deliveryDay: this.inquiryForm.day,
						expiredDate: this.inquiryForm.validity,
						pricetrend: this.inquiryForm.pricetrendValue,
						priceInfo: this.inquiryForm.explain,
					}
					tempArr.push(obj)
				})
				let res = await fetch(this.api.v2.submitQuotation, {
					method: "post",
					data: {
						accessToken: uni.getStorageSync('accessToken'),
						list: tempArr
					}
				})

				if (res.data.code === '0') {
					this.$refs.toast.show({
						title: '提交报价成功',
						type: 'success',
						position: 'top'
					})
					this.getInquiryList()
				} else {
					this.$refs.toast.show({
						title: '提交报价失败',
						type: 'error',
						position: 'top'
					})
				}
			},


			//物流
			//物流展示报价模态框
			toLogisticQuotation(item) {
				this.resetLogisticQuotationForm()
				this.bidId = item.bidId
				this.custId = item.custId
				this.inaploId = item.inaploId
				this.inaplosuppId= item.inaplosuppId
				this.logisticQuotationFormShow = true
				this.logisticQuotationData = item
			},
			giveuptoLogisticQuotation() {
				this.resetLogisticQuotationForm()
				this.logisticQuotationFormShow = false
			},
			//物流模态框提价报价
			logisticSubmitBidding() {
				this.$refs.iForm3.validate(async valid => {
					if (valid) {
						let res = await fetch(this.api.v2.logisticsBidQuotation, {
							method: "post",
							data: {
								accessToken: uni.getStorageSync('accessToken'),
								type: this.logisticQuotationData.moduleCode === "PC007" ? "real" : this.logisticQuotationData.moduleCode ===
									"PC006" ?
									"conventional" : "",
								list: [{
									bidId: this.logisticQuotationData.moduleCode === "PC007" ? this.bidId : "",
									inaploId: this.logisticQuotationData.moduleCode === "PC006" ? this.inaploId : "",
									inaplosuppId: this.logisticQuotationData.moduleCode === "PC006" ? this.inaplosuppId : "",
									custId: this.custId && Number(this.custId),
									//价格
									price: this.logisticQuotationForm.price && Number(this.logisticQuotationForm.price),
									//开始时间
									startDate: this.logisticQuotationForm.startDate + " " + "00:00:00",
									//有效期(结束时间)
									expiredDate: this.logisticQuotationForm.expiredDate + " " + "23:59:59",
									//船公司
									shippingName: this.logisticQuotationForm.shippingName,
									//船期
									schedule: this.logisticQuotationForm.schedule,
									//转运方式
									transferMethod: this.logisticQuotationForm.transferMethod && Number(this.logisticQuotationForm.transferMethod),
									//航程
									voyage: this.logisticQuotationForm.voyage && Number(this.logisticQuotationForm.voyage),
									//鉴定书
									isCertificate: this.logisticQuotationForm.appraisalCertificate & Number(this.logisticQuotationForm.appraisalCertificate),
									//价格趋势
									priceTrendType: this.logisticQuotationForm.trend & Number(this.logisticQuotationForm.trend),
									//趋势说明
									priceTrendRemark: this.logisticQuotationForm.explain,
									// 备注
									remark: this.logisticQuotationForm.remark,
								}]
							}
						})
						if (res.data.code === '0') {
							this.$refs.toast.show({
								title: '提交报价成功',
								type: 'success',
								position: 'top'
							})
						} else {
							this.$refs.toast.show({
								title: '提交报价失败',
								type: 'error',
								position: 'top'
							})
						}
						this.resetLogisticQuotationForm()
						this.logicInquiryList()
						this.logisticQuotationFormShow = false
					}
				})
			},
			checkboxGroupChange(e) {
				let tempArr = []
				if (e.length > 0) {
					if (e.includes('周一')) tempArr.push(1)
					if (e.includes('周二')) tempArr.push(2)
					if (e.includes('周三')) tempArr.push(3)
					if (e.includes('周四')) tempArr.push(4)
					if (e.includes('周五')) tempArr.push(5)
					if (e.includes('周六')) tempArr.push(6)
					if (e.includes('周日')) tempArr.push(7)
				}
				let tempStr = tempArr.join(',')
				this.logisticQuotationForm.schedule = tempStr
			},
		},

		computed: {
			swiperList() {
				let arr = [...this.biddingList, ...this.realOrderList]
				arr = arr.filter(item => {
					return new Date(item.inquiryDeadline).getTime() > new Date().getTime()
				})
				return arr
			},
			logicSwiperList() {
				return this.logisticRealOrderList.filter(item => {
					return new Date(item.biddeadLine) > new Date()
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.prepareQuoted {
		.inp_area {
			padding: 0 30rpx 0 10rpx;
			display: flex;

			.allChoose {
				padding-left: 30rpx;
				align-self: center;
				padding-top: 2rpx;
			}

			.search_btn {
				// float: right;
				align-self: center;
			}

			.ufield {
				flex: 1;
			}
		}

		.commodity_list_tips {
			background-color: #f2f2f2;
			height: 70rpx;
			color: #d0021b;
			text-align: center;
			line-height: 70rpx;
		}

		//轮播图区域
		.swiper_box {
			/deep/ .swiper {
				height: 460rpx;
			}

			.swiper-item_left {
				width: 150rpx;
				height: 100%;
				float: left;

				.swiper-item_sign_box_red {
					width: 110rpx;
					height: 110rpx;
					color: #fff;
					text-align: center;

					.swiper-item_sign {
						width: 0;
						height: 0;
						position: relative;
						border-top: 110rpx solid red;
						border-right: 110rpx solid transparent;

						text {
							position: absolute;
							left: 20rpx;
							top: -108rpx;
							color: #fff;
							font-size: 28rpx;
							transform: rotate(225deg);
						}
					}
				}


				.swiper-item_sign_box_yellow {
					width: 110rpx;
					height: 110rpx;
					color: #fff;
					text-align: center;

					.swiper-item_sign {
						width: 0;
						height: 0;
						position: relative;
						border-top: 110rpx solid #ff9900;
						border-right: 110rpx solid transparent;

						text {
							position: absolute;
							left: 20rpx;
							top: -108rpx;
							color: #fff;
							font-size: 28rpx;
							transform: rotate(225deg);
						}
					}
				}
			}

			.swiper-item_right {
				width: 150rpx;
				height: 55px;
				float: right;
				background-color: transparent;
				position: relative;

				.icon_close {
					position: absolute;
					right: 40rpx;
					top: 20rpx;
				}
			}

			.swiper-item_center {
				overflow: hidden;
				position: relative;

				.swiper_center_title {
					margin-top: 30rpx;
					text-align: center;

					text {
						font-weight: 700;
					}
				}

				.swiper_center_oneline {
					margin: 10rpx 0;
					color: #868686 !important;
				}

				.settimeout {
					background-color: #d0021b;
					padding: 20rpx 60rpx;
					border-radius: 20rpx;
					color: #fff;
					text-align: center;
				}

				.center_btn_area {
					display: flex;
					justify-content: center;
					margin-top: 30rpx !important;
				}
			}
		}

		//商品列表
		.commodity_list {
			padding: 0 40rpx;

			/deep/ .u-checkbox {
				border-bottom: 2rpx solid #f6f6f6;
				align-items: flex-start;
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

				.checkbox_view_oneline {
					.checkbox_view_name {
						font-weight: 700;
						font-size: 32rpx;
						color: #666;
					}

					.checkbox_view_tab {
						background-color: #0099cc;
						color: #fff;
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

					/deep/ .u-input__input {
						min-height: 30px !important;
					}

					.pricetext {
						margin-left: 6rpx;
					}

					.ufield {
						flex: 1;
						border-bottom: 2rpx solid #ccc;
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

		//报价
		.quotation_area {
			position: fixed;
			bottom: 165rpx;
			z-index: 999;
			border-top: 5rpx solid #f8f8f8;
			background-color: #fefefe;

			.quotation_area_oneline {
				padding: 0 20rpx;
				display: flex;

				.quotation_area_oneline_item {
					display: flex;
					width: 50%;

					/deep/.u-input__input {
						margin-top: 8rpx;
					}

					.ufield {
						// flex: 1;
					}

					.text {
						align-self: center;
						color: #868686;
					}
				}
			}
		}

	}


	.prepareQuoted,
	.logisticsPrepareQuoted {
		/deep/ .u-checkbox__label {
			width: 100%;
		}

		.inp_area {
			padding: 0 30rpx 0 10rpx;
			display: flex;

			.allChoose {
				padding-left: 30rpx;
				align-self: center;
				padding-top: 2rpx;
			}

			.search_btn {
				// float: right;
				align-self: center;
			}

			.ufield {
				flex: 1;
			}
		}

		.commodity_list_tips {
			background-color: #f2f2f2;
			height: 70rpx;
			color: #d0021b;
			text-align: center;
			line-height: 70rpx;
		}

		//轮播图区域
		.swiper_box {
			/deep/ .swiper {
				height: 450rpx;
			}

			.swiper-item_left {
				width: 110rpx;
				height: 100%;
				float: left;

				.swiper-item_sign_box {
					width: 110rpx;
					height: 110rpx;
					color: #fff;
					text-align: center;

					.swiper-item_sign {
						width: 0;
						height: 0;
						position: relative;
						border-top: 110rpx solid red;
						border-right: 110rpx solid transparent;

						text {
							position: absolute;
							left: 20rpx;
							top: -108rpx;
							color: #fff;
							font-size: 28rpx;
							transform: rotate(225deg);
						}
					}
				}
			}

			.swiper-item_right {
				width: 110rpx;
				height: 55px;
				float: right;
				background-color: transparent;
				position: relative;

				.icon_close {
					position: absolute;
					right: 20rpx;
					top: 20rpx;
				}
			}

			.swiper-item_center {
				overflow: hidden;
				position: relative;

				.swiper_center_oneline_title {
					margin-top: 40rpx;
					text-align: center;
					display: flex;
					justify-content: center;

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
				}

				.swiper_center_oneline {
					margin: 15rpx 0;
					text-align: center;
				}

				.settimeout {
					background-color: #d0021b;
					padding: 20rpx 60rpx;
					border-radius: 20rpx;
					color: #fff;
					text-align: center;
				}

				.center_btn_area {
					display: flex;
					justify-content: center;
					margin-top: 30rpx !important;
				}
			}
		}

		//商品列表
		.commodity_list {
			padding: 0 40rpx;

			/deep/ .u-checkbox {
				border-bottom: 2rpx solid #f6f6f6;
				align-items: flex-start;
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

				.checkbox_view_oneline_first {
					margin-top: 10rpx;

					.checkbox_view_oneline_first_time {
						>view {
							float: left;
						}
					}
				}

				.checkbox_view_oneline {
					font-size: 24rpx;

					.checkbox_view_oneline_title {
						text-align: center;
						display: flex;

						.secondtext {
							font-weight: 700;
							color: #515151;
							font-size: 28rpx;
							margin: 0 15rpx;
						}

						.thirdtext {
							line-height: 20rpx;
							font-size: 20rpx;
						}

						.unlinetext {
							height: 18rpx;
						}

						.fourthtext {
							font-weight: 700;
							color: #515151;
							font-size: 28rpx;
							margin: 0 15rpx;
						}
					}

					.checkbox_view_name {
						font-weight: 700;
						font-size: 32rpx;
						color: #333;
					}

					.checkbox_view_tab {
						margin-top: 10rpx;
						background-color: #0099cc;
						color: #fff;
						width: 60rpx;
						height: 40rpx;
						line-height: 40rpx;
						text-align: center;
						font-size: 20rpx;
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
				
					/deep/ .u-input__input {
						height: 55rpx;
						min-height: 30rpx !important;
					}
				
					.pricetext {
						margin-left: 6rpx;
					}
				
					.ufield {
						flex: 1;
						border-bottom: 2rpx solid #ccc;
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

		//报价
		.quotation_area_oneline {
			display: flex;

			.quotation_area_oneline_item {
				display: flex;
				// width: 50%;

				.ufield {
					flex: 1;
				}

				.text {
					align-self: center;
					color: #868686;
				}
			}
		}

		.quotation_area_oneline.btnarea {
			margin-top: 20rpx;

			.btn {
				width: 100%;
			}
		}
	}

	// 询盘模态框
	.inquiryModal_content {
		padding: 20rpx;

		.btn-area {
			margin-top: 20rpx;
		}
	}

	//竞价模态框
	.slot-content {
		padding: 30rpx;

		.slot-content_oneline {
			height: 84rpx;
			line-height: 84rpx;
			border-bottom: 2rpx solid #f8f8f8;
		}

		.remark {
			height: 84rpx;
			line-height: 84rpx;
			overflow: hidden;
		}
	}

	//放弃报价模态框
	.giveupbiddingModal {
		.giveupbiddingModal_oneline {
			text-align: center;
			margin: 20rpx 0;
		}
	}
</style>
