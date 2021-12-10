const {Router} = require('express')
const router = Router()
const {check} = require('express-validator')
const { taskExists } = require('../database/validators/existence-validator')
const { validateFields,validateJWT } = require('../middleware')
const {
    createTask,
    deleteTask,
    updateTask,
    getTask
} = require('../controllers/task/task.controller')

router.post('/task',[
    validateJWT,
    check('name', 'Name must not be empty').not().isEmpty(),
    check('description', 'Description must not be empty').not().isEmpty(),
    validateFields
], createTask)

router.put('/task/:id',[
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(taskExists),
    validateFields
], updateTask)

router.delete('/task/:id',[
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(taskExists),
    validateFields
], deleteTask)

router.get('/tasks', [
    validateJWT,
    check('limit', 'Limit must be a number').isNumeric(),
    check('page', 'Page must be a positive number').isNumeric(),
    validateFields
], getTask)

module.exports = router