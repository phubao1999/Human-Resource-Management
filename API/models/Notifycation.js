const mongoose = require('mongoose');

const NotificationSchema = mongoose.Schema({
    type: {
        type: Number,
        require: true
    },
    tile: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    create_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('notifycation', NotificationSchema);