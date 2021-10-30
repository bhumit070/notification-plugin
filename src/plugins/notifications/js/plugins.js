
import Notification from '../Notification.vue';
import { events } from './events';

const Notify = {
	install(Vue, args = {}) {
		if (this.installed) return

		this.installed = true
		this.params = args
		const timeout = (args.timeout && args.timeout) || 5000
		Vue.component('notifications', Notification)
		const emitAddToast = (variant, data) => {
			events.$emit('add', { variant, data }, timeout)
		}

		const notify = {}

		notify.success = (data) => emitAddToast('success', data)
		notify.error = (data) => emitAddToast('primary', data)
		notify.primary = (data) => emitAddToast('danger', data)

		notify.close = id => {
			events.$emit('close', id)
		}

		const name = event && event.args && event.args || 'notify'


		Vue.prototype[`$${name}`] = notify
		Vue[name] = notify
	}
}

export default Notify