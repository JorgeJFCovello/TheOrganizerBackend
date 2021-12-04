class Goal {
    constructor (_init_date, _finish_date, _description) {
        this.init_date = _init_date
        this.finish_date = _finish_date
        this.description = _description
        this.tasks = []
    }
    addTask(task) {
        this.tasks.push(task)
    }
}
module.exports = Goal