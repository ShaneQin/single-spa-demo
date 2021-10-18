import Vue from 'vue'
import App from './App.vue'
import router from './router'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './single-spa-config.js'

Vue.use(antd);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
