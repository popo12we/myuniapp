/**
 * 定义请求node服务端接口地址
 */
export default {
    // 代理后端请求
    v2: {
        login: 'v2/wx/login',// 小程序账号密码登录
		supplierInfo: 'v2/wx/supplierInfo',// 获取单据列表,获取单据详情
		inquiryList: 'v2/wx/inquiryList',// 询价单列表
    }
}
