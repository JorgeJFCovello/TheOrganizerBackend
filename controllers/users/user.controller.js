const User = require('../../models/ModelSchemas/user')
const bcrypt = require('bcryptjs')

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
        const user = new User({username, name, email, surname, password})
        user.password = getEncryptedPassword(password)
        await user.save()
        resp.status(200).json({msg: 'User created successfully'})
}
const updateUser = async(req, resp) => {

    const { id } = req.params;
    const {_id, google, password, ... others} = req.body;
    if (password) {
        others.password = getEncryptedPassword(password)
    }
    const user = await User.findByIdAndUpdate(id, others);
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
