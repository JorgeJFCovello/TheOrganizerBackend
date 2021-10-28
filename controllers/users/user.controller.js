const Usuario = require('../../models/ModelSchemas/user')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')

const authenticate = (req,resp) => {
    try {
        //TODO auth
        const jwt = '123456789'
        resp.status(200).json({
            msg: 'Authenticated!',
            token: jwt
         })

    } catch (err) {
        resp.status(400).json({
            msg: err
         })
    }
}

const createUser = async(req, resp) => {

        const err = validationResult(req)
        if(!err.isEmpty()){
            return resp.status(400).json(err)
        }
        const {username, name, email, surname, password} = req.body;
        const usuario = new Usuario({username, name, email, surname, password})
        usuario.password = getEncryptedPassword(password)
        console.log(usuario)
        await usuario.save()
        resp.status(200).json({msg: 'User created successfully'})
}

getEncryptedPassword = (password) => {
    const salt = bcrypt.genSaltSync()
    return bcrypt.hashSync(password,salt)
}

module.exports = {
    authenticate,
    createUser
}