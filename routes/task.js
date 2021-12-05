const {Router} = require('express')
const router = Router()
const {check} = require('express-validator')
const { taskExists } = require('../database/validators/existence-validator')
const { validateFields } = require('../middleware/field-validations')
const {
    createTask,
    deleteTask,
    updateTask,
    getTask
} = require('../controllers/task/task.controller')



router.post('/task',[
    check('name', 'Name must not be empty').not().isEmpty(),
    check('description', 'Description must not be empty').not().isEmpty(),
    validateFields
], createTask)

router.put('/task/:id',[
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(taskExists),
    validateFields
], updateTask)

router.delete('/task/:id',[
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(taskExists),
    validateFields
], deleteTask)

router.get('/tasks', [
    check('limit', 'Limit must be a number').isNumeric(),
    check('page', 'Page must be a positive number').isNumeric(),
    validateFields
], getTask)

module.exports = router