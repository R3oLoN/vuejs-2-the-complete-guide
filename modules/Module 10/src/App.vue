<template>
	<div class="container">
		<app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"/>
		<app-new-quote @quoteAdded="newQuote" />
		<app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
		<div class="row">
			<div class="col-sm-12 text-center">
				<div class="alert alert-info">Info: Click on a Quote ro Delete it</div>
			</div>
		</div>
	</div>	
</template>

<script>
import AppHeader from './components/Header.vue'
import AppNewQuote from './components/NewQuote.vue'
import AppQuoteGrid from './components/QuoteGrid.vue'
export default {
	components: {
		AppHeader,
		AppNewQuote,
		AppQuoteGrid
	},
	data() {
		return {
			quotes: [
				'Just a Quote to see something'
			],
			maxQuotes: 10
		}
	},
	methods: {
		newQuote(quote) {
			if (this.quotes.length >= this.maxQuotes) {
				return alert('Please delete Quote first!')
			}
			this.quotes.push(quote)
		},
		deleteQuote(index) {
			this.quotes.splice(index, 1)
		}
	}
}
</script>

<style>

</style>
