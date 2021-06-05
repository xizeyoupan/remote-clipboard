import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Form, FormItem, Input } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

