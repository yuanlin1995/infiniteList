import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/js/flexible'
import FastClick from 'fastclick'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
