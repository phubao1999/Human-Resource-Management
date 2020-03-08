const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    role: {
        type: Number,
        require: true
    },
    user_mail: {
        type: String,
        require: true
    },
    user_name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    salary: {
        type: String,
        require: true
    },
    position: {
        type: String,
        require: true
    },
    day_of_birth: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);