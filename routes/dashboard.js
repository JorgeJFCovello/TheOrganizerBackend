const {Router} = require('express')
const router = Router()
const {check} = require('express-validator')
const { dashboardExists } = require('../database/validators/existence-validator')
const { validateFields } = require('../middleware/field-validations')
const {
    createDashboard,
    deleteDashboard,
    updateDashboard,
    getDashboard
} = require('../controllers/dashboard/dashboard.controller')



router.post('/dashboard',[
    check('name', 'Name must not be empty').not().isEmpty(),
    check('description', 'Description must not be empty').not().isEmpty(),
    validateFields
], createDashboard)

router.put('/dashboard/:id',[
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(dashboardExists),
    validateFields
], updateDashboard)

router.delete('/dashboard/:id',[
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(dashboardExists),
    validateFields
], deleteDashboard)

router.get('/dashboards', [
    check('limit', 'Limit must be a number').isNumeric(),
    check('page', 'Page must be a positive number').isNumeric(),
    validateFields
], getDashboard)

module.exports = router