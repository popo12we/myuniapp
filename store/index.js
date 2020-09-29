import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		//轮播图点击选中的数据
		checkedData: {},
	},
	mutations: {
	    // 点击字体图标更新一整项的逻辑
	    check (state, payload) {
	      state.checkedData=payload
	    }
	  },
	actions: {
		checkOne(context, obj) {
			context.commit('check', obj)
		}
	}
})
export default store
