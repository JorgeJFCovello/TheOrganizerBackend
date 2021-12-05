const Event = require('../../models/ModelSchemas/event')

const createEvent = async(req, resp) => {
        const { name, date, description, type, task } = req.body;
        const event = new Event({ name, date, description, type, task })
        await event.save();
        resp.status(200).json({
            msg: `Event ${name} was successfully created`
        })
}

const deleteEvent = async(req, resp) => {

    const {id} = req.params
    await Event.findByIdAndUpdate(id, {active: false})
    resp.status(200).json({
        msg: `Event with id ${id} was sucessfully delete`
    })

}
const updateEvent = async(req, resp) => {
    const { id } = req.params
    const data = req.body
    await Event.findByIdAndUpdate(id, data)
    resp.status(200).json({msg: 'Event updated successfully'})
}

const getEvent = async(req, resp) => {
    const {limit=5, page=1} = req.query

    const {events, total} = await Promise.all([
        Event.find({active:true}).skip(limit * (page - 1)).limit(limit),
        Event.countDocuments({active:true})
    ])
    resp.status(200).json({
        page,
        pageSize: limit,
        total,
        events
    })

}

module.exports = {
    createEvent,
    deleteEvent,
    updateEvent,
    getEvent
}