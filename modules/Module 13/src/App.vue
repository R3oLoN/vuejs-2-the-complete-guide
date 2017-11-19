<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | to-uppercase | to-lowercase}}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add new item</button>
                <input v-model="filterText">
                <ul v-for="fruit in filteredFruits">
                    <li>{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
import AppList from './List.vue'
import { fruitMixin } from './fruitMixin.js'
export default {
    components: {
        AppList
    },
    mixins: [fruitMixin],
    data() {
        return {
            text: 'Hello there!'
        }
    },
    filters: {
        toUppercase(value) {
            if (!value) return value
            return value.toUpperCase()
        }
    }
}
</script>

<style>

</style>
