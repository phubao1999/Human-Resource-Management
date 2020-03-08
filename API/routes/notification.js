const express = require('express');
const router = express.Router();
const Notification = require('../models/Notifycation');

// Create Notifycation
router.post('/', async (req, res) => {
    const { type, title, text } = req.body;
    const item = new Notification({
        type: type,
        title: title,
        text: text
    });
    try {
        const saveNotify = await item.save();
        res.json(saveNotify)
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// Get list of notifycation
router.get('/', async (req, res) => {
    try {
        const notificationList = await Notification.find();
        res.json(notificationList);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;