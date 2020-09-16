import Vue from 'vue'
import moment from 'moment'
Vue.filter('dateFilter', function(input) {
	return moment(input).format('YYYY-MM-DD HH:mm')
})
