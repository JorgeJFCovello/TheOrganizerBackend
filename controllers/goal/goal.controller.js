const Goal = require('../../models/goal')
const createGoal = (req, resp) => {
    try {
        const { init_date, finish_date, description } = req.body
        const goal = new Goal(init_date, finish_date, description)
        //TODO Persist Goal
        resp.status(200).json({
            msg: `Goal ${description} was succesfully created`
        })

    } catch (err) {
        console.log(err)
        resp.status(400).json({
            msg: err
        })
    }
}
module.exports = {
    createGoal
}