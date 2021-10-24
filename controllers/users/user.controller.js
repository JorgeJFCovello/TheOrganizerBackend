

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

const createUser = (res, req) => {

    try {

    } catch (err) {
        resp.status(400).json({
            msg: err
        })
    }
}



module.exports = {
    authenticate,
    createUser
}