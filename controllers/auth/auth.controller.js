const User = require('../../models/ModelSchemas/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const loginUser = async (req, resp) => {
    try {
        const {password, email} = req.body
        const user = await User.findOne({email, active:true})
        if(!user || !user.active || !bcrypt.compareSync(password, user.password)){
            return resp.status(400).json({
                msg:`Error! Password or Username are invalid.`
            })
        }
        const token = await generateJWT()
        return resp.status(200).json({
            jwt: token,
            msg: 'Authentication sucessfully done.'
        })
    } catch (err) {
        console.log(err)
        return resp.status(500).json({
            msg: `Internal Error!`
        })
    }
}

const generateJWT = (uid = '') => {
    return new Promise((resolve, reject) =>{
        const payload = {uid}
        const key = process.env.SECRET_PUBLIC_KEY_JWT
        jwt.sign(payload, key, {
            expiresIn:'1h'
        }, (err, token) => {
            if(err) {
                console.log(err)
                reject('Unable to create jwt')
            } else {
                resolve(token)
            }
        })
    })
}

module.exports = {
    loginUser
}