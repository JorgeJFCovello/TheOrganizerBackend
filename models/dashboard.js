
const Column = require('./column')
class DashBoard {
    constructor(_name) {
        this.id = null
        this.name = _name
        this.tasks = []
        this.columns = []
    }
    addColumn(column) {
        if(!this.findColumn(column))
            this.columns.push(new Column(column))
    }
    addTaskToColumn(column,task) {
        findColumn(column).addTask(task)
    }
    findColumn(column) {
        return this.columns.find(innercolumn => innercolumn.name == column)
    }
}

module.exports = DashBoard