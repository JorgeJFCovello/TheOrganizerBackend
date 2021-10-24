const {Router} = require('express')
const router = Router()
const {
    createDashBoard,
    createColumn
} = require('../../controllers/dashboard/dashboard.controller')

router.post('/user/dashboard', createDashBoard)
router.post('/user/column', createColumn)


module.exports = router