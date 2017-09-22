import Vue from 'vue'

export const eventBus = new Vue({
	methods: {
		serverDetailsChange(server) {
			this.$emit('serverDetailsChange', server)
		},
		onServerDetailsChange(cb) {
			this.$on('serverDetailsChange', cb)
		}
	}
});
