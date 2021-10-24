const {Router} = require('express')
const router = Router()
const {
    createEvent
} = require('../../controllers/event/event.controller')

router.post('/event', createEvent)


module.exports = router