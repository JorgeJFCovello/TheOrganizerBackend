
class User {
    constructor(_username, _name, _surname, _email, _password, _google){
        this.username = _username
        this.name = _name
        this.surname = _surname
        this.email = _email
        this.password = _password
        this.img = null
        this.google = !!_google
        this.goals = []
        this.events = []
    }
    addEvent(event) {
        this.events.push(event)
    }  
    addGoal(goal) {
        this.goals.push(goal)
    }   
}


module.exports = User