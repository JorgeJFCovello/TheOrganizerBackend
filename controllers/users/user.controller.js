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

        const {username, name, email, surname, password} = req.body;
        const usuario = new Usuario({username, name, email, surname, password})
        usuario.password = getEncryptedPassword(password)
        await usuario.save()
        resp.status(200).json({msg: 'User created successfully'})
}
const updateUser = async(req, resp) => {

    const { id } = req.params;
    const {google, password, ... others} = req.body;
    const usuario = await Usuario.findByIdAndUpdate(id, others);
    if (password) {
        usuario.password = getEncryptedPassword(password)
    }
    await usuario.save()
    resp.status(200).json({msg: 'User updated successfully'})
}

const getEncryptedPassword = (password) => {
    const salt = bcrypt.genSaltSync()
    return bcrypt.hashSync(password,salt)
}

module.exports = {
    authenticate,
    createUser,
    updateUser
}
