import Vue from 'vue'
import App from './App.vue'
import NotificationPlugin from './plugins/notifications/js/plugins'


Vue.use(NotificationPlugin, {
  name: 'notification'
})


new Vue({
  render: h => h(App),
}).$mount('#app')
