const { response } = require('express')
require('dotenv').config()

const validateAdminUser = (req,resp = response, next) => {
    try {
        if(!req.user) {
            return resp.status(500).json({msg: 'Error authenticating user'})
        } 
        if(req.user.role === 'Administrator') {
            throw new Error('Invalid user - not admin privilegies were given')
        } 
        next()
    } catch (err) {
        console.log(err)
        return resp.status(400).json({msg: 'No enough privilegies'})
    }
}

const hasRoleValidation = (...roles) => {
    return ( req,resp = response, next) => {
        try {
            if(!req.user) {
                return resp.status(500).json({msg: 'Error authenticating user'})
            } 
            if(!roles.includes(req.user.role)) {
                throw new Error('Invalid user - not admin privilegies were given')
            } 
            next()
        } catch (err) {
            console.log(err)
            return resp.status(400).json({msg: 'No enough privilegies'})
        }
    }
}

module.exports = {validateAdminUser, hasRoleValidation}