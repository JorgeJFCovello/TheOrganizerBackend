const jwtValidations = require('../middleware/jwt-validations');
const roleValidations = require('../middleware/role-validation');
const fieldValidations = require('../middleware/field-validations');


module.exports = {
    ...jwtValidations,
    ...roleValidations,
    ...fieldValidations
    }