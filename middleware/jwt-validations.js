const { response } = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/ModelSchemas/user')
require('dotenv').config()

const validateJWT = async (req,resp = response, next) => {
    const token = req.header('x-auth-token')
    try {
        if(!token) {
            throw new Error('Invalid token')
        }
        const {uid} = jwt.verify(token, process.env.SECRET_PUBLIC_KEY_JWT)
        const user = User.findById(uid)
        if(!user.active) {
            throw new Error('Invalid user')
        }
        req.user = user
        next()
    } catch (err) {
        console.log(err)
        return resp.status(400).json({msg: 'Invalid request'})
    }
}

module.exports = {validateJWT}