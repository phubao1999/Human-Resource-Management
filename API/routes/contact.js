const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Create Contact
router.post('/', async (req, res) => {
    const { from_to, status, title, content, time_expect } = req.body;
    const newContact = new Contact({
        from_to: from_to,
        status: status,
        title: title,
        content: content,
        time_expect: time_expect
    });
    try {
        const saveContact = await newContact.save();
        res.json(saveContact);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// Get Contact
router.get('/', async (req, res) => {
    try {
        const contactList = await Contact.find();
        res.json(contactList);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

// Get Details Contact
router.get('/detail', async (req, res) => {
    try {
        const id = req.query['id'];
        const detailContact = await Contact.findById(id);
        res.json(detailContact);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// Update Contact
router.put('/update', async (req, res) => {
    try {
        const updated = await Contact.findOneAndUpdate(
            { _id: req.query['id'] },
            {
                $set: {
                    from_to: req.body.from_to,
                    status: req.body.status,
                    title: req.body.title,
                    content: req.body.content,
                    time_expect: req.body.time_expect
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
            contact: updated
        });
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// Delete Contact
router.delete('/delete', async (req, res) => {
    try {
        const id = req.query['id'];
        const deleteContact = await Contact.deleteOne({ _id: id });
        res.json({
            message: 'Delete Successfully',
            status: deleteContact
        });
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;