<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Animations</h1>
				<hr>
				<select v-model="alertAnimation" class="form-control">
					<option value="fade">Fade</option>
					<option value="slide">Slide</option>
				</select>
				<br>
				<button class="btn btn-primary" @click="show = !show">Show Alert</button>
				<br>
				<br>
				<transition :name="alertAnimation">
					<div class="alert alert-info" v-if="show">This is some Info</div>
				</transition>
				<transition name="slide">
					<div class="alert alert-info" v-if="show">This is some Info</div>
				</transition>
				<transition name="fade-slide" appear>
					<div class="alert alert-info" v-if="show">This is some Info</div>
				</transition>
				<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
					<div class="alert alert-info" v-if="show">This is some Info</div>
				</transition>
				<transition :name="alertAnimation" mode="out-in">
					<div class="alert alert-info" v-if="show" key="info">This is some Info</div>
					<div class="alert alert-warning" v-else key="warning">This is some Warning</div>
				</transition>
				<hr>
				<button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
				<br><br>
				<transition 
					@before-enter="beforeEnter" 
					@enter="enter" 
					@after-enter="afterEnter" 
					@enter-cancelled="enterCanclled"
					
					@before-leave="beforeLeave" 
					@leave="leave" 
					@after-leave="afterLeave" 
					@leave-cancelled="leaveCanclled"
					:css="false">
					<div style="width: 300px; height: 100px; background-color: green;" v-if="load"></div>
				</transition>
				<hr>
				<button class="btn btn-primary" @click="toogleComponent">Toogle Components</button>
				<br>
				<br>
				<transition name="fade" mode="out-in">
					<component :is="selectedComponent"></component>
				</transition>
				<hr>
				<button class="btn btn-primary" @click="addItem">Add Item</button>
				<br><br>
				<ul class="list-group">
					<transition-group name="slide">
						<li class="list-group-item" v-for="(number, index) in numbers" :key="number" @click="removeItem(index)" style="cursor: pointer;">{{ number }}</li>
					</transition-group>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import AppDangerAlert from './DangerAlert.vue'
import AppSuccessAlert from './SuccessAlert.vue'

export default {
	components: {
		AppDangerAlert,
		AppSuccessAlert
	},
	data() {
		return {
			show: true,
			load: true,
			alertAnimation: 'fade',
			elementWidth: 100,
			selectedComponent: 'app-danger-alert',
			numbers: [1, 2, 3, 4, 5]
		}
	},
	methods: {
		toogleComponent() {
			this.selectedComponent = this.selectedComponent === 'app-success-alert' ? 'app-danger-alert' : 'app-success-alert'
		},
		addItem() {
			this.numbers.push(this.numbers.length + 1)
		},
		removeItem(index) {
			this.numbers.splice(index, 1)
		},
		beforeEnter(el) {
			console.log('beforeEnter');
			this.elementWidth = 100;
			el.style.width = `${this.elementWidth}px`
		},
		enter(el, done) {
			console.log('enter');
			let round = 1;
			const interval = setInterval(() => {
				el.style.width = `${this.elementWidth + round * 10}px`
				round++
				if (round > 20) {
					clearInterval(interval)
					done()
				}
			}, 20)
		},
		afterEnter(el) {
			console.log('afterEnter');
		},
		enterCanclled(el) {
			console.log('enterCanclled');
		},
		beforeLeave(el) {
			console.log('beforeLeave');
			this.elementWidth = 300
			el.style.width = `${this.elementWidth}px`
		},
		leave(el, done) {
			console.log('leave');
			let round = 1;
			const interval = setInterval(() => {
				el.style.width = `${this.elementWidth - round * 10}px`
				round++
				if (round > 20) {
					clearInterval(interval)
					done()
				}
			}, 20)
		},
		afterLeave(el) {
			console.log('afterLeave');
		},
		leaveCanclled(el) {
			console.log('leaveCanclled');
		}
	}
}
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
  /* opacity: 1; */
}

.fade-leave {
  /* opacity: 1; */
}

.fade-leave-active {
  transition: opacity 0.5s;
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
	position: absolute;
}

.slide-move {
	transition: transform 1s;
}

.fade-slide-enter {
  opacity: 0;
}

.fade-slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
  transition: opacity 0.4s;
}

.fade-slide-leave {
}

.fade-slide-leave-active {
  animation: slide-out 0.5s ease-out forwards;
  transition: opacity 0.4s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
