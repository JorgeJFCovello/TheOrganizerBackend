const express = require('express')
const cors = require('cors')
require('dotenv').config()

const {connectDB} = require('../database/config')

class Server {
    constructor() {
        this.app = express()
        this.initializeDB()
        this.middleware()
        this.routes()
        this.start()
    }
    initializeDB(){
        connectDB()
    }

    middleware() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/api', require('../routes/user'))
        this.app.use('/api', require('../routes/dashboard'))
        this.app.use('/api', require('../routes/goal'))
        this.app.use('/api', require('../routes/event'))
        this.app.use('/api', require('../routes/auth'))
    }

    start() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App running on port ${process.env.PORT}`)
        })
    }
}

module.exports = Server