import Vue from 'vue'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router from 'uni-simple-router'

Vue.use(Router)
//初始化
const router = new Router({
	//路由表
	routes: [{
			//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
			path: '/pages/login/index',
			name: 'index',
		},
	]
});


export default router;
