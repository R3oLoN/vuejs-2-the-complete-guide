<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" class="form-control" v-model="userData.firstName">
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" class="form-control" v-model="userData.lastName">
                    </div>

                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input type="text" id="email" class="form-control" v-model="userData.email">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" v-model="userData.password">
                    </div>

										Store Data? 
										<label for="male">
                        <input type="radio" id="male" :value="true" v-model="dataStore"> Yes
                    </label>
                    <label for="female">
                        <input type="radio" id="female" :value="false" v-model="dataStore"> No
                    </label>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

										<hr>
										<div class="row">
												<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
														<button class="btn btn-primary" @click.prevent="submitted">Submit!
														</button>
												</div>
										</div>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ dataStore }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			userData: {
				firstName: '',
				lastName: '',
				email: '',
				password: ''
			},
			dataStore: false,
			isSubmitted: false
		}
	},
	computed: {
		fullName() {
			return this.userData.firstName + ' ' + this.userData.lastName
		}
	},
	methods: {
		submitted() {
			this.isSubmitted = true
		}
	}
}
</script>

<style>
</style>
