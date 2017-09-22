<template>
    <li class="list-group-item" @click="showDetails(server)">
        Server #{{ server.id }} ({{ server.status }})
    </li>
</template>

<script>
import { eventBus } from './../../bus'
export default {
    props: {
        server: {
            type: Object,
            required: true
        }
    },
    methods: {
        showDetails(server) {
            eventBus.serverDetailsChange(server)
        }
    }
}
</script>
<style>

</style>
