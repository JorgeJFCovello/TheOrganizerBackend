const User = require('../../models/ModelSchemas/user')
const Event = require ('../../models/ModelSchemas/event')
const Goal = require('../../models/ModelSchemas/goal')
const Task = require('../../models/ModelSchemas/task')
const DashBoard = require('../../models/ModelSchemas/dashboard')

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

const goalExists = async (id) => {
    const goal = await Goal.findById(id)
    if(!goal) {
        throw new Error(`Goal with ID ${id} does not exist`)
    }
}

const taskExists = async (id) => {
    const task = await Task.findById(id)
    if(!task) {
        throw new Error(`Task with ID ${id} does not exist`)
    }
}
const dashboardExists = async (id) => {
    const dashboard = await DashBoard.findById(id)
    if(!dashboard) {
        throw new Error(`Dashboard with ID ${id} does not exist`)
    }
}

module.exports = { userExists, eventExists, goalExists, taskExists, dashboardExists}