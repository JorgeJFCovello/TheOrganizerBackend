const { Schema, model } = require('mongoose');

const GoalSchema = Schema ({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    Description: {
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
    Tasks: {
        type: Array,
        default: []
    }
})

module.exports = model('Goal', GoalSchema)