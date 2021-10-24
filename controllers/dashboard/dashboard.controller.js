const Dashboard = require('../../models/dashboard')

const createDashBoard =(req, resp) => {

    try {
        const { name } = req.body;
        const dashboard = new Dashboard( name )
        //TODO Persist dashboard
        resp.status(200).json({
            msg: `Dashboard ${ name } was successfully created`
        })
    } catch (err) {
        resp.status(400).json({
            msg: err
        })
    }
}
const createColumn =(res, req) => {

    try {
        const { dashboardName, user , columnName } = req.body;
        const dashboard = findDashboardByUserAndName(user, dashboardName)
        dashboard.addColumn(columnName)
        //TODO Persist dashboard
        resp.status(200).json({
            msg: `Column ${ columnName } was successfully created in dashboard`
        })
    } catch (err) {
        resp.status(400).json({
            msg: err
        })
    }
}

module.exports = {
    createDashBoard,
    createColumn
}