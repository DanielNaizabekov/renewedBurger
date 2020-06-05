import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './quasar'
import 'normalize.css/normalize.css'
import VueAgile from 'vue-agile'

Vue.use(VueAgile)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
