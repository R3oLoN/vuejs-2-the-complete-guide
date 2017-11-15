<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p v-myon:click="myClick">Test myon:click</p>
								<p v-myon:mouseenter="myHover">Test myon:mouseenter</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	methods: {
		myClick() {
			alert('Clicked!!!!!')
		},
		myHover() {
			alert('Hover!!!!!')
		}
	}
}
</script>

<style>
</style>
