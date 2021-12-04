const createTask = (res, req) => {

    try {

    } catch (err) {
        resp.status(400).json({
            msg: err
        })
    }
}

module.exports = {
    createTask
}