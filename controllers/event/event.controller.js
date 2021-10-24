const Event = require('../../models/event')
const createEvent = (req, resp) => {

    try {
        const { date, description, type, task } = req.body;
        const event = new Event(date, description, type, task)
        //TODO persist Event
        resp.status(200).json({
            msg: `Event ${description} was successfully created`
        })
    } catch (err) {
        resp.status(400).json({
            msg: err
        })
    }
}

module.exports = {
    createEvent
}