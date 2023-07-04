<script setup>
import {ref} from 'vue'
const showData = ref([])
const m = ref('')
const connected = ref(false)
const sentData = ref('')
const connectionId = ref(undefined)
let dc
let lc

Tracker.autorun(() => {
    const dummy = connectionId.value
    console.log("First log")
    if (dummy) {
        console.log("second log")
        Meteor.subscribe('getAnswerForOffer', dummy, (val) => {
            console.log("Updated value", val)
        });
        Meteor.call('getAnswer', dummy, (ee, rr) => {
            console.log(ee, rr)
        })
    }
});

function establishConnection() {
    Meteor.call('createConnection', async (err, res) => {
        if (!err && res) {
            console.log("Connection ID - ", res)

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

            lc = new RTCPeerConnection(iceConfiguration)

            dc = lc.createDataChannel("channel");

            dc.onmessage = e => {
                    showData.value.push(`Stranger - ${e.data}`)
                }
            dc.onopen = e => {
                    connected.value = true
                }
            lc.onicecandidate = e => {
                Meteor.call('makeOffer', JSON.stringify(lc.localDescription), res, (error, response) => {
                    if (!error && response) {
                        connectionId.value = res
                        const myInterval = setInterval(() => {
                            Meteor.call('getAnswer', res, async (e, r) => {
                                console.log("connecting...")
                                if (!e && r) {
                                    const answer = JSON.parse(r)
                                    console.log("ANSWER - ", answer)
                                    lc.setRemoteDescription(answer)
                                    clearInterval(myInterval)
                                }
                            })
                        }, 5000)
                    }
                })
            }

            lc.createOffer().then(o => lc.setLocalDescription(o)).then(a => console.log("Set successfully."))
        }
    })
}
function sendMessage() {
    showData.value.push(`Me - ${m.value}`)
    dc.send(m.value)
}

const allFiles = ref()

function fileSelected(e) {
    allFiles.value = null
    allFiles.value = e.target.files
    fileIndex.value = 0
    startSending()
}

const fileIndex = ref(0)

function startSending() {
    if (fileIndex.value < allFiles.value.length) {
        const file = allFiles.value[fileIndex.value]
        console.log(`${fileIndex.value} - ${file.name}`)
        file.arrayBuffer().then((buffer) => {
                send(buffer, file)
        })
    }
}

function send(buffer, file) {
    let dataSent = 0
    const chunkSize = 16 * 1024;
    while(buffer.byteLength) {
        if (dc.bufferedAmount > dc.bufferedAmountLowThreshold) {
            dc.onbufferedamountlow = () => {
                dc.onbufferedamountlow = null;
                send(buffer, file)
            };
            return;
        }
        const chunk = buffer.slice(0, chunkSize);
        buffer = buffer.slice(chunkSize, buffer.byteLength);
        console.log(dc.bufferedAmount)
        dataSent += chunkSize
        sentData.value = Math.trunc((dataSent / file.size) * 100)
        console.log(sentData.value, " %")
        
        dc.send(chunk);
    }
    console.log("Sent file")
    dc.send('Done!');
    fileIndex.value += 1
    startSending()
}
</script>

<template>
    <h1>{{sentData}}%</h1>
    <v-main class="d-flex align-center justify-center">
        <v-file-input
            multiple
            label="File input"
            @input="fileSelected"
        ></v-file-input>
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