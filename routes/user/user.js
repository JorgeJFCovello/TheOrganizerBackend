const {Router} = require('express')
const {check} = require('express-validator')
const { validateFields } = require('../../middleware/user-validations')
const router = Router()
const {
    authenticate,
    createUser,
} = require('../../controllers/users/user.controller')

router.post('/authenticate',authenticate)
router.post('/user', [
    check('email', 'Invalidate email.').isEmail(),
    check('username', 'Name must not be empty').not().isEmpty(),
    check('password', 'Password must not be empty').not().isEmpty(),
    validateFields
], createUser)


module.exports = router