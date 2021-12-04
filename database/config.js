const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODBURI, {
            useNewUrlParser: true,
            useUnifiedtopology: true
        })
    } catch (err){
        console.log(err)
        throw new Error('Database fail to initialize.')
    }
} 

module.exports = {
    connectDB
}