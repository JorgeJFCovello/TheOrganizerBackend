const { validationResult } = require("express-validator")

const validateFields = (req,res) => {

    const error = validationResult(req)
    if(!error.isEmpty()) {
        return res.status(400).json(error)
    }

    next()
}

module.exports = { validateFields }