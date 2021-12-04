const User = require('../../models/ModelSchemas/user')
const userExists = async (id) => {

    const user = await User.findById(id)
    if(!user) {
        throw new Error(`User with ID ${id} does not exist`)
    }

}

module.exports = { userExists }