<template>
	<div class="row">
		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
			<div class="form-group">
				<label for="firstName">First Name</label>
				<input type="text" id="firstName" class="form-control" v-model="value.firstName">
			</div>
		</div>
		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
			<div class="form-group">
				<label for="lastName">Last Name</label>
				<input type="text" id="lastName" class="form-control" v-model="value.lastName">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['value']
}
</script>