<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Animations</h1>
				<hr>
				<button class="btn btn-primary" @click="show = !show">Show Alert</button>
				<br>
				<br>
				<transition name="fade">
					<div class="alert alert-info" v-if="show">This is some Info</div>
				</transition>
				<transition name="slide">
					<div class="alert alert-info" v-if="show">This is some Info</div>
				</transition>
				<transition name="fade-slide" appear>
					<div class="alert alert-info" v-if="show">This is some Info</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: true
		}
	}
}
</script>

<style>
.fade-enter {
	opacity: 0;
}

.fade-enter-active {
	transition: opacity .5s;
	/* opacity: 1; */
}

.fade-leave {
	/* opacity: 1; */
}

.fade-leave-active {
	transition: opacity .5s;
	opacity: 0;
}

.slide-enter {
	
}

.slide-enter-active {
	animation: slide-in 0.3s ease-out forwards;
}

.slide-leave {
}

.slide-leave-active {
	animation: slide-out 0.5s ease-out forwards;
}

.fade-slide-enter {
	opacity: 0;	
}

.fade-slide-enter-active {
	animation: slide-in 0.5s ease-out forwards;
	transition: opacity .4s;
}

.fade-slide-leave {
	
}

.fade-slide-leave-active {
	animation: slide-out 0.5s ease-out forwards;
	transition: opacity .4s;
	opacity: 0;
}

@keyframes slide-in {
	from {
		transform: translateY(20px)
	}
	to {
		transform: translateY(0)
	}
}

@keyframes slide-out {
	from {
		transform: translateY(0)
	}
	to {
		transform: translateY(20px)
	}
}
</style>
