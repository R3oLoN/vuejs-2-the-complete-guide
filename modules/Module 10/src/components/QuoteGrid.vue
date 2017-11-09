<template>
	<div class="row">
		<app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{quote}}</app-quote>
	</div>
</template>

<script>
import AppQuote from './Quote.vue'
export default {
	props: ['quotes'],
	components: {
		AppQuote
	},
	methods: {
		deleteQuote(index) {
			this.$emit('quoteDeleted', index)
		}
	}
}
</script>