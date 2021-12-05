const Goal = require('../../models/ModelSchemas/goal')

const createGoal = async(req, resp) => {
        const { title,description,initDate,finishDate,tasks } = req.body;
        const goal = new Goal({ title,description,initDate,finishDate, tasks})
        await goal.save();
        resp.status(200).json({
            msg: `Goal ${title} was successfully created`
        })
}

const deleteGoal = async(req, resp) => {

    const {id} = req.params
    await Goal.findByIdAndUpdate(id, {active: false})
    resp.status(200).json({
        msg: `Goal with id ${id} was sucessfully delete`
    })

}
const updateGoal = async(req, resp) => {
    const { id } = req.params
    const data = req.body
    await Goal.findByIdAndUpdate(id, data)
    resp.status(200).json({msg: 'Goal updated successfully'})
}

const getGoal = async(req, resp) => {
    const {limit=5, page=1} = req.query

    const {goals, total} = await Promise.all([
        Goal.find({active:true}).skip(limit * (page - 1)).limit(limit),
        Goal.countDocuments({active:true})
    ])
    resp.status(200).json({
        page,
        pageSize: limit,
        total,
        goals
    })

}

module.exports = {
    createGoal,
    deleteGoal,
    updateGoal,
    getGoal
}