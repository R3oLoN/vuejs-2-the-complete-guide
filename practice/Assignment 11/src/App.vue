<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ textReverse | reverse }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <label for="">Filter: </label>
                <input v-model="textCount">
                <p>{{ textCount | counts }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>{{ reverseText }}</p>
                <p>{{ countsText }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <label for="">Mixin: </label>
                <input v-model="textMixnCount">
                <p>{{ countsMixinText }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { countsMixin } from './countsMixin.js'
export default {
    mixins: [countsMixin],
    data() {
        return {
            textReverse: 'Reverse Filter',
            textCount: ''
        }
    },
    filters: {
        reverse(value) {
            if (!value) return value
            return value.split("").reverse().join("");
        }
    },
    computed: {
        reverseText() {
            if (!this.textReverse) return this.textReverse
            return this.textReverse.split("").reverse().join("");
        },
        countsText() {
            if (!this.textCount) return this.textCount;
            const length = this.textCount.length;
            return `${this.textCount} (${length})`;
        }
    }
}
</script>

<style>

</style>
