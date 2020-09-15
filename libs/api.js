/**
 * 定义请求node服务端接口地址
 */
export default {
    // 代理后端请求
    v2: {
        login: 'v2/wx/login/login',// 小程序账号密码登录
		supplierInfo: 'v2/wx/supplierInfo',// 获取单据列表,获取单据详情
		inquiryList: 'v2/wx/inquiryList',// 询价单列表
		submitQuotation: 'v2/wx/submitQuotation',// 提交报价
		giveupOffer: 'v2/wx/giveupOffer',// 放弃报价
		codeSession: 'v2/wx/codeSession',// 小程序授权获取用户信息
		supplier_product:'v2/wx/supplier/product',//获取供应商产品
		submitProduct:'v2/wx/submitProduct',//小程序供应商商品报价
		logicInquiry:'v2/wx/logicInquiry',// 小程序物流供应商列表
		logisticsBidQuotation:'v2/wx/logisticsBidQuotation',// 小程序物流竞价单竞价
		giveUpLogisticsBid:'v2/wx/giveUpLogisticsBid',// 小程序物流竞价单放弃报价
		inquiryDetail:'v2/wx/inquiryDetail',// 小程序采购供应商详情
		updatePassword:'v2/wx/updatePassword',// 小程序修改密码
    }
}
