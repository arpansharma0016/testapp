import {connections} from './collections'

Meteor.methods({
    createConnection() {
        return connections.insert({})
    },
    makeOffer(offer, _id) {
        connections.update({_id},{
            offer: offer
        })
        return connections.findOne({_id})
    },
    getOffer(_id) {
        return connections.findOne({_id}).offer
    },
    makeAnswer(answer, _id) {
        connections.update({_id},{
            $set: {
                answer: answer
            }
        })
        return connections.findOne({_id})
    },
    getAnswer(_id) {
        return connections.findOne({_id}).answer
    }
})

Meteor.publish('getAnswerForOffer', function(_id) {
    const data = connections.find({_id})
    console.log(data)
    return data
})