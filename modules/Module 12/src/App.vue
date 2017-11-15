<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
								<p v-text="'Some Text'"></p>
								<p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
								<p v-highlight:backgroud.delayed="'red'">Color this</p>
								<p v-local-highlight:backgroud.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color this, too</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	directives: {
		'local-highlight': {
			bind( el, binding, vnode ) {
				let delay = 0
				if ( binding.modifiers.delayed ) {
					delay = 3000
				}
				if( binding.modifiers.blink ) {
					const mainColor = binding.value.mainColor;
					const secondColor = binding.value.secondColor;
					let currentColor = mainColor
					setTimeout( () => {
						setInterval( ()=> {
							currentColor === secondColor ? currentColor = mainColor : currentColor = secondColor
							if ( binding.arg === 'backgroud' ) {
								el.style.backgroundColor = currentColor
							} else {
								el.style.color = currentColor
							}
						}, binding.value.delay )
					}, delay )
				} else {
					setTimeout( () => {
						if ( binding.arg === 'backgroud' ) {
							el.style.backgroundColor = binding.value
						} else {
							el.style.color = binding.value
						}
					}, delay )
				}
			}
		}
	}
}
</script>

<style>

</style>
