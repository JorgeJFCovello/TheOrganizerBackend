const { Schema, model } = require('mongoose');

const GoalSchema = Schema ({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    }, 
    initDate: {
        type: String,
        required: [true, 'Start date is required']
    },
    finishDate: {
        type: String,
        default: null
    },
    active: {
        type: Boolean,
        default: true
    },
    tasks: {
        type: Array,
        default: []
    }
})

module.exports = model('Goal', GoalSchema)