<template>
	<div>
		<div class="col-sm-12">
			<h3>Quotes Added</h3>
			<div class="progress">
				<div class="progress">
					<div class="progress-bar" role="progressbar" :style="progressStyle">
						{{quoteCount}} / {{maxQuotes}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['quoteCount', 'maxQuotes'],
	computed: {
		progressStyle() {
			return {
				width: (this.quoteCount / this.maxQuotes * 100) + '%'
			}
		}
	}
}
</script> 