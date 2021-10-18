import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const vueOptions = {
  el: '#vue',
  router,
  render: h => h(App)
}

if (!window.singleSpaNavigate) {
  delete vueOptions.el
  new Vue(vueOptions).$mount('#app')
}

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: vueOptions
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount

export default vueLifecycles
