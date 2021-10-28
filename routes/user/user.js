const {Router} = require('express')
const {check} = require('express-validator')
const router = Router()
const {
    authenticate,
    createUser,
} = require('../../controllers/users/user.controller')

router.post('/authenticate',authenticate)
router.post('/user', [
    check('email', 'Invalidate email.').isEmail()
], createUser)


module.exports = router