import Notification from '../Notification.vue';
import { events } from './events';

const Notify = {
	install(Vue, args = {}) {
		if (this.installed) return

		this.installed = true
		this.params = args

		Vue.component('notifications', Notification)

		const notify = params => {
			if (typeof params === 'string') {
				params = { title: '', text: params }
			}

			if (typeof params === 'object') {
				events.$emit('add', params)
			}
		}

		notify.close = id => {
			events.$emit('close', id)
		}

		const name = event && event.args && event.args || 'notify'


		Vue.prototype[`$${name}`] = notify
		Vue[name] = notify
	}
}

export default Notify