const {Router} = require('express')
const router = Router()
const {
    createGoal,
    createUser,
} = require('../../controllers/goal/goal.controller')

router.post('/goal', createGoal)


module.exports = router