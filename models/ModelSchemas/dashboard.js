const { Schema, model } = require('mongoose');

const DashboardSchema = Schema ({
    name: {
        type: String,
        required: [true, 'Name is required']
    }, 
    tasks: {
        type: Array,
        default: []
    }, //TODO, we need to evaluate if this is necessary
    columns: {
        type: Array,
        default: []
    }
})

module.exports = model('Dashboard', DashboardSchema)