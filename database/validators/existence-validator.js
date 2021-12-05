const User = require('../../models/ModelSchemas/user')
const Event = require ('../../models/ModelSchemas/event')

const userExists = async (id) => {
    const user = await User.findById(id)
    if(!user) {
        throw new Error(`User with ID ${id} does not exist`)
    }
}

const eventExists = async (id) => {
    const event = await Event.findById(id)
    if(!event) {
        throw new Error(`Event with ID ${id} does not exist`)
    }
}

module.exports = { userExists, eventExists }