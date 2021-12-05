const { Schema, model } = require('mongoose');

const ColumnSchema = Schema ({
    name: {
        type: String,
        required: [true, 'Name is required']
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

module.exports = model('Column', ColumnSchema)