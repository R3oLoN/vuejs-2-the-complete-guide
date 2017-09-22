<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server :server="server" v-for="server in servers" :key="server.id" />
        </ul>
    </div>
</template>

<script>
import { eventBus } from './../../bus'
import AppServer from './Server.vue'
export default {
    components: {
        AppServer
    },
    data() {
        return {
            servers: [
                { id: 1, status: 'Normal' },
                { id: 2, status: 'Crirical' },
                { id: 3, status: 'Unknown' },
                { id: 4, status: 'Warning' }
            ]
        }
    }
}
</script>
<style>

</style>
