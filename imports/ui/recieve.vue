<script setup>
import {ref} from 'vue'
const connectionId = ref()
const showData = ref([])
const m = ref('')
const connected = ref(false)
let rc
function establishConnection() {
    console.log(connectionId.value)
    Meteor.call('getOffer', connectionId.value, async (err, res) => {
        if (!err && res) {

            const offer = JSON.parse(res)

            const iceConfiguration = {
                iceServers: [
                    {
                        urls: [
                            'stun:stunserver.stunprotocol.org',
                            'stun:stun.sipgate.net:10000',
                        ],
                    },
                ]
            }

            rc = new RTCPeerConnection(iceConfiguration);

            rc.onicecandidate = e => {
                Meteor.call('makeAnswer', JSON.stringify(rc.localDescription), connectionId.value, async (error, response) => {
                    if (!error && response) {
                        console.log(response)
                    } else {
                        console.log("error", error, response)
                    }
                })
            }

            rc.ondatachannel = e => {
                let fileChunks = []
                rc.dc = e.channel;
                rc.dc.onmessage = e => {
                    // showData.value.push(`Stranger - ${e.data}`)
                    if (e.data.toString() === 'Done!') {
                        const file = new Blob(fileChunks);
                        console.log('Received', file);
                        const link = document.createElement('a');
                        link.href = window.URL.createObjectURL(file);
                        link.download = 'apple.jpeg';
                        link.click();
                        fileChunks = []
                    } else {
                        fileChunks.push(e.data)
                    }
                }
                rc.dc.onopen = e => {
                    connected.value = true
                }
            }

            rc.setRemoteDescription(offer).then(a => console.log("Offer set."))

            rc.createAnswer().then(a => rc.setLocalDescription(a)).then(a => console.log("Answer created."))

        } else {
            console.log("err", err, res)
        }
    })
}
function sendMessage() {
    showData.value.push(`Me - ${m.value}`)
    rc.dc.send(m.value)
}
</script>

<template>
    <v-main class="d-flex align-center justify-center">
        <v-text-field
            v-if="!connected"
            label="Connection ID"
            v-model="connectionId"
        ></v-text-field>
        <v-btn @click="establishConnection" v-if="!connected">Connect</v-btn>
        <br /><br />
        <v-text-field
            label="Message"
            v-model="m"
            v-if="connected"
        ></v-text-field>
        <v-btn @click="sendMessage" v-if="connected">Send</v-btn>
        <ul v-if="connected">
            <li v-for="data in showData" :key="data">{{data}}</li>
        </ul>
    </v-main>
</template>