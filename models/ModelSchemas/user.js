const { Schema, model } = require('mongoose');

const UserSchema = Schema ({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    }, 
    surname: {
        type: String,
        required: [true, 'Surname is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }, 
    img: {
        type: String,
        default: null
    },
    google: {
        type: Boolean,
        default: false
    },    
    active: {
        type: Boolean,
        default: true
    },
    goals: {
        type: Array,
        default: null
    },
    events: {
        type: Array,
        default: null
    }
})

module.exports = model('User', UserSchema)