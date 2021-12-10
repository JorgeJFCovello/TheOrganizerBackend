const {Router} = require('express')
const {check} = require('express-validator')
const { userExists } = require('../database/validators/existence-validator')
const { validateFields,validateJWT,validateAdminUser,hasRoleValidation } = require('../middleware')
const router = Router()
const {
    createUser,
    updateUser,
    getUsers,
    deleteUser
} = require('../controllers/users/user.controller')

router.post('/user', [
    validateJWT,
    hasRoleValidation('Administrator', 'MANIPULATES_USERS'),
    check('email', 'Invalid email.').isEmail(),
    check('username', 'Name must not be empty').not().isEmpty(),
    check('password', 'Password must not be empty').not().isEmpty(),
    validateFields
], createUser)

router.get('/users', [
    validateJWT,
    hasRoleValidation('Administrator', 'MANIPULATES_USERS'),
    check('limit', 'Limit must be a number').isNumeric(),
    check('page', 'Page must be a positive number').isNumeric(),
    validateFields
], getUsers)

router.delete('/user/:id', [
    validateJWT,
    validateAdminUser,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(userExists),
    validateFields
], deleteUser)

router.put('/user/:id', [
    validateJWT,
    hasRoleValidation('Administrator', 'MANIPULATES_USERS'),
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(userExists),
    validateFields
], updateUser)


module.exports = router