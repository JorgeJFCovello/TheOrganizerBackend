const {Router} = require('express')
const {check} = require('express-validator')
const { validateFields } = require('../../middleware/field-validations')
const router = Router()
const {
    createEvent
} = require('../../controllers/event/event.controller')

router.post('/event',[
    check('name', 'Name must not be empty').not().isEmpty(),
    check('description', 'description must not be empty').not().isEmpty(),
    validateFields
], createEvent)


module.exports = router