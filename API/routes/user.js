const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcript = require('bcryptjs');

// Get User
router.get('/', async (req, res) => {
    try {
        const userList = await User.find();
        res.json(userList);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// Create User
router.post("/", async (req, res) => {
    try {
        const { user_mail, user_name, password, salary, position, day_of_birth } = req.body;
        User.findOne({
            user_mail: user_mail
        }).then(user => {
            if (user) {
                res.json({
                    message: "User Is Exists"
                });
            } else {
                const newUser = new User({
                    role: 0,
                    user_mail: user_mail,
                    user_name: user_name,
                    password: password,
                    salary: salary,
                    position: position,
                    day_of_birth: day_of_birth
                });
                // Hash Password
                bcript.genSalt(10, (err, salt) => {
                    bcript.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                res.json(user);
                            })
                            .catch(user => console.log(err, user));
                    });
                });
            }
        });
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// Update User
router.put('/update/', async (req, res) => {
    try {
        const updated = await User.findOneAndUpdate(
            { _id: req.query['userId'] },
            {
                $set: {
                    user_mail: req.body.user_mail,
                    user_name: req.body.user_name,
                    password: req.body.password,
                    salary: req.body.salary,
                    position: req.body.position,
                    day_of_birth: req.body.day_of_birth
                }
            },
            { useFindAndModify: false }
        );
        res.json({
            message: 'Update Successfully',
            user: updated
        })
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// Get Details User
router.get('/detail/', async (req, res) => {
    try {
        const id = req.query['userId'];
        const detailUser = await User.findById(id);
        res.json(detailUser);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// Delete User
router.delete('/delete/', async (req, res) => {
    try {
        const id = req.query['userId'];
        const deletedUser = await User.deleteOne({ _id: id });
        res.json({
            message: 'Delete Success',
            deletedUser
        });
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;