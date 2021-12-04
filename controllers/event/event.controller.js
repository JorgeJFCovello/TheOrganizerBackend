const Event = require('../../models/ModelSchemas/event')
const createEvent = async(req, resp) => {
        const { name, date, description, type, task } = req.body;
        const event = new Event({ name, date, description, type, task })
        await event.save();
        resp.status(200).json({
            msg: `Event ${name} was successfully created`
        })
}

module.exports = {
    createEvent
}