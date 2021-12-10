const {Router} = require('express')
const router = Router()
const {check} = require('express-validator')
const { goalExists } = require('../database/validators/existence-validator')
const { validateFields,validateJWT } = require('../middleware')
const {
    createGoal,
    deleteGoal,
    updateGoal,
    getGoal
} = require('../controllers/goal/goal.controller')



router.post('/goal',[
    validateJWT,
    check('name', 'Name must not be empty').not().isEmpty(),
    check('description', 'Description must not be empty').not().isEmpty(),
    validateFields
], createGoal)

router.put('/goal/:id',[
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(goalExists),
    validateFields
], updateGoal)

router.delete('/goal/:id',[
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(goalExists),
    validateFields
], deleteGoal)

router.get('/goals', [
    validateJWT,
    check('limit', 'Limit must be a number').isNumeric(),
    check('page', 'Page must be a positive number').isNumeric(),
    validateFields
], getGoal)

module.exports = router