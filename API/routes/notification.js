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

// Details Of Notifycation
router.get('/detail', async (req, res) => {
    try {
        const id = req.query['id'];
        const detailNotify = await Notification.findById(id);
        res.json(detailNotify);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// Edit Notifycation
router.put('/update', async (req, res) => {
    try {
        const updated = await Notification.findOneAndUpdate(
            { _id: req.query['id'] },
            {
                $set: {
                    type: req.body.type,
                    title: req.body.title,
                    text: req.body.text
                }
            },
            {
                useFindAndModify: false,
                upsert: true,
                new: true
            }
        );
        res.json({
            message: 'Update Successfully',
            notifycation: updated
        });
    } catch (err) {
        res.json(err)
    }
});

// Delete Notifycation
router.delete('/delete', async (req, res) => {
    try {
        const id = req.query['id'];
        const deleteNotify = await Notification.deleteOne({ _id: id });
        res.json(deleteNotify);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;