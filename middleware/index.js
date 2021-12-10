const jwtValidations = require('./jwt-validations');
const roleValidations = require('./role-validation');
const fieldValidations = require('./field-validations');


module.exports = {
    ...jwtValidations,
    ...roleValidations,
    ...fieldValidations
    }