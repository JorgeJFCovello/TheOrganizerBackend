const { Schema, model } = require('mongoose');

const TaskSchema = Schema ({
    name: {
        type: String,
        required: [true, 'Name is required']
    }, 
    description: {
        type: String,
        default: ""
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    }
})

module.exports = model('Task', TaskSchema)