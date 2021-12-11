const { response, request } = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/ModelSchemas/user')

const validateJWT = ( req = request, resp = response, next ) => {
    const token = req.header('x-auth-token')
    try {
        if(!token) {
            throw new Error('Invalid token')
        }
        const {uid} = jwt.verify(token, process.env.SECRET_PUBLIC_KEY_JWT)
        User.findById(uid).exec(function (error, user) {
            if (error) {
                return next(error);
            } else {      
                if (user === null) {     
                    var err = new Error('Not authorized! Go back!');
                    err.status = 401;
                    return next(err);
                } else {
                    req.user = user
                    return next();
                }
            }
        });
    } catch (err) {
        console.log(err)
        return resp.status(400).json({msg: 'Invalid request'})
    }
}

module.exports = {
    validateJWT
}