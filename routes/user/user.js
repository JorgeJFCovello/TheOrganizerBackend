const {Router} = require('express')
const {check} = require('express-validator')
const { validateFields } = require('../../middleware/field-validations')
const router = Router()
const {
    authenticate,
    createUser,
    updateUser
} = require('../../controllers/users/user.controller')

router.post('/authenticate', authenticate)
router.post('/user', [
    check('email', 'Invalidate email.').isEmail(),
    check('username', 'Name must not be empty').not().isEmpty(),
    check('password', 'Password must not be empty').not().isEmpty(),
    validateFields
], createUser)

router.put('/user/:id', [
    check('email', 'Invalidate email.').isEmail(),
    check('username', 'Name must not be empty').not().isEmpty(),
    check('password', 'Password must not be empty').not().isEmpty(),
    validateFields
], updateUser)


module.exports = router