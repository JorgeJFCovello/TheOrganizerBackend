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

const getUsers = async(req, resp) => {

    const {limit = 5, page = 1} = req.query
    const condition = {active : true}
    const [ users, total ] = await 
     
    Promise.all([
        User.find(condition).skip(limit * (page - 1)).limit(Number(limit)),
        countAllUsers = await User.countDocuments(condition)
    ])
    resp.status(200).json({
        users,
        pageSize: limit,
        page,
        total
    })
}

const deleteUser = async(req,resp) => {

    const {id} = req.params
    // we should not use User.findByIdAndDelete(id) because we lose all tracked data
    User.findByIdAndUpdate(id, {active: false}) 

    resp.status(200).json({
        msg: `User with id ${id} was sucessfully deleted`
    })
}

const getEncryptedPassword = (password) => {
    const salt = bcrypt.genSaltSync()
    return bcrypt.hashSync(password,salt)
}

module.exports = {
    authenticate,
    createUser,
    updateUser,
    getUsers,
    deleteUser
}
