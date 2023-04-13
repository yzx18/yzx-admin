import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elmentui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from '../src/store/index'
Vue.config.productionTip = false
Vue.use(elmentui)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
