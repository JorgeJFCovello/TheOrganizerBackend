class Column {
    constructor(_name) {
        this.name = _name
        this.tasks = []
    }
    addTask(task) {
        this.tasks.push(task)
    }
}
module.exports = Column