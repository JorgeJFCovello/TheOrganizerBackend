const Task = require('../../models/ModelSchemas/task')

const createTask = async(req, resp) => {
        const { name, columns, tasks } = req.body;
        const event = new Task({ name, columns, tasks } )
        await event.save();
        resp.status(200).json({
            msg: `Task ${name} was successfully created`
        })
}

const deleteTask = async(req, resp) => {

    const {id} = req.params
    await Task.findByIdAndUpdate(id, {active: false})
    resp.status(200).json({
        msg: `Task with id ${id} was sucessfully delete`
    })

}
const updateTask = async(req, resp) => {
    const { id } = req.params
    const data = req.body
    await Task.findByIdAndUpdate(id, data)
    resp.status(200).json({msg: 'Task updated successfully'})
}

const getTask = async(req, resp) => {
    const {limit=5, page=1} = req.query

    const {tasks, total} = await Promise.all([
        Task.find({active:true}).skip(limit * (page - 1)).limit(limit),
        Task.countDocuments({active:true})
    ])
    resp.status(200).json({
        page,
        pageSize: limit,
        total,
        tasks
    })

}

module.exports = {
    createTask,
    deleteTask,
    updateTask,
    getTask
}