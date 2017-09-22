<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server === null">Server Details are currently not updated</p>
        <p v-else>Server {{server.id}} are currently {{server.status}} state <button @click="changeStatus">Change State</button></p>
    </div>
</template>

<script>
import {eventBus} from './../../bus.js'
export default {
    data(){
        return {
            server: null
        }
    },
    methods: {
        changeStatus(){
            this.server.status = 'Normal'
            eventBus.serverStatusChange(this.server)
        }
    },
    created(){
        eventBus.onServerDetailsChange(server => {
            this.server = server
        })
    }
}
</script>

<style>

</style>
