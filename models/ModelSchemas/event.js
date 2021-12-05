const { Schema, model } = require('mongoose');

const EventSchema = Schema ({
    name: {
        type: String,
        required: [true, 'Name is required']
    }, 
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    type: {
        type: String,
        default: ""
    },
    active: {
        type: Boolean,
        default: true
    },
    task: {
        type: String, //this will contain the task id
        default: null
    }
})

module.exports = model('Event', EventSchema)