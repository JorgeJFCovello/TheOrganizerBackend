const {Router} = require('express')
const router = Router()
const {
    authenticate,
    createUser,
} = require('../../controllers/users/user.controller')

router.post('/authenticate', authenticate)
router.post('/user', createUser)


module.exports = router