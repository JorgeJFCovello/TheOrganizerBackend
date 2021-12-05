const DashBoard = require('../../models/ModelSchemas/dashboard')

const createDashboard = async(req, resp) => {
        const { name, columns, tasks } = req.body;
        const dashboard = new DashBoard({ name, columns, tasks } )
        await dashboard.save();
        resp.status(200).json({
            msg: `DashBoard ${name} was successfully created`
        })
}

const deleteDashboard = async(req, resp) => {

    const {id} = req.params
    await DashBoard.findByIdAndUpdate(id, {active: false})
    resp.status(200).json({
        msg: `Dashboard with id ${id} was sucessfully delete`
    })

}
const updateDashboard = async(req, resp) => {
    const { id } = req.params
    const data = req.body
    await DashBoard.findByIdAndUpdate(id, data)
    resp.status(200).json({msg: 'Dashboard updated successfully'})
}

const getDashboard = async(req, resp) => {
    const {limit=5, page=1} = req.query

    const {dashboards, total} = await Promise.all([
        DashBoard.find({active:true}).skip(limit * (page - 1)).limit(limit),
        DashBoard.countDocuments({active:true})
    ])
    resp.status(200).json({
        page,
        pageSize: limit,
        total,
        dashboards
    })

}

module.exports = {
    createDashboard,
    deleteDashboard,
    updateDashboard,
    getDashboard
}