const {Router} = require('express')
const {check} = require('express-validator')
const { userExists } = require('../../database/validators/user-validator')
const { validateFields } = require('../../middleware/field-validations')
const router = Router()
const {
    authenticate,
    createUser,
    updateUser
} = require('../../controllers/users/user.controller')

router.post('/authenticate', authenticate)
router.post('/user', [
    check('email', 'Invalid email.').isEmail(),
    check('username', 'Name must not be empty').not().isEmpty(),
    check('password', 'Password must not be empty').not().isEmpty(),
    validateFields
], createUser)

router.put('/user/:id', [
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(userExists),
    validateFields
], updateUser)


module.exports = router