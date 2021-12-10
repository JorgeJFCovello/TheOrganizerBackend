const {Router} = require('express')
const {check} = require('express-validator')
const { eventExists } = require('../database/validators/existence-validator')
const { validateFields,validateJWT } = require('../middleware')
const router = Router()
const {
    createEvent,
    deleteEvent,
    updateEvent,
    getEvent
} = require('../controllers/event/event.controller')


router.post('/event',[
    validateJWT,
    check('name', 'Name must not be empty').not().isEmpty(),
    check('description', 'Description must not be empty').not().isEmpty(),
    validateFields
], createEvent)

router.put('/event/:id',[
    check('id', 'Invalid ID').isMongoId(),
    validateJWT,
    check('id').custom(eventExists),
    validateFields
], updateEvent)

router.delete('/event/:id',[
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(eventExists),
    validateFields
], deleteEvent)

router.get('/events', [
    validateJWT,
    check('limit', 'Limit must be a number').isNumeric(),
    check('page', 'Page must be a positive number').isNumeric(),
    validateFields
], getEvent)

module.exports = router