const {Router} = require('express')
const {check} = require('express-validator')
const { validateFields } = require('../middleware/field-validations')
const router = Router()

const {
    loginUser
} = require('../controllers/auth/auth.controller')

router.post('/auth/login',[
    check('email', 'Invalid email.').isEmail(),
    check('password', 'Invalid password.').not().isEmpty(),
    validateFields

],loginUser)

module.exports = router