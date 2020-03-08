const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    from_to: {
        type: String,
        require: true
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Number,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    time_expect: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model('contact', ContactSchema);