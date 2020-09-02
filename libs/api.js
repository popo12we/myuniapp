/**
 * 定义请求node服务端接口地址
 */
export default {
    // 代理后端请求
    v2: {
        login: 'v2/wx/login',// 小程序账号密码登录
		supplierInfo: 'v2/wx/supplierInfo',// 获取单据列表,获取单据详情
		inquiryList: 'v2/wx/inquiryList',// 询价单列表
		submitQuotation: 'v2/wx/submitQuotation',// 提交报价
		giveupOffer: 'v2/wx/giveupOffer',// 放弃报价
		codeSession: 'v2/wx/codeSession',// 小程序授权获取用户信息
    }
}
