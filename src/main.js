import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import NotificationPlugin from './plugins/notifications/js/plugins'

Vue.use(BootstrapVue)
Vue.use(NotificationPlugin, {
  name: 'notification'
})


new Vue({
  render: h => h(App),
}).$mount('#app')
