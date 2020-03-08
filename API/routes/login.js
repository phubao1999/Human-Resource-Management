const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const user_mail = req.body.user_mail;
    const user = await User.findOne({
        user_mail: user_mail
    });
    if (!user) {
        res.status(400).json({
            message: 'User Mail Is Not Exists'
        });
    } else {
        // If Password Correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json({
            message: 'Invalid Password'
        });
        // Token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
        return res.json({
            token: token,
            user: user
        });
    }
});

module.exports = router;